var rE=Object.defineProperty;var oE=(o,t,i)=>t in o?rE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var fe=(o,t,i)=>oE(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var zd={exports:{}},_l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function lE(){if(Z_)return _l;Z_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:f,ref:l!==void 0?l:null,props:u}}return _l.Fragment=t,_l.jsx=i,_l.jsxs=i,_l}var Q_;function uE(){return Q_||(Q_=1,zd.exports=lE()),zd.exports}var it=uE(),Id={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function cE(){if(K_)return ve;K_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(X){return X===null||typeof X!="object"?null:(X=S&&X[S]||X["@@iterator"],typeof X=="function"?X:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function U(X,pt,j){this.props=X,this.context=pt,this.refs=y,this.updater=j||T}U.prototype.isReactComponent={},U.prototype.setState=function(X,pt){if(typeof X!="object"&&typeof X!="function"&&X!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,X,pt,"setState")},U.prototype.forceUpdate=function(X){this.updater.enqueueForceUpdate(this,X,"forceUpdate")};function C(){}C.prototype=U.prototype;function b(X,pt,j){this.props=X,this.context=pt,this.refs=y,this.updater=j||T}var O=b.prototype=new C;O.constructor=b,M(O,U.prototype),O.isPureReactComponent=!0;var B=Array.isArray;function P(){}var V={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function R(X,pt,j){var tt=j.ref;return{$$typeof:o,type:X,key:pt,ref:tt!==void 0?tt:null,props:j}}function H(X,pt){return R(X.type,pt,X.props)}function W(X){return typeof X=="object"&&X!==null&&X.$$typeof===o}function D(X){var pt={"=":"=0",":":"=2"};return"$"+X.replace(/[=:]/g,function(j){return pt[j]})}var q=/\/+/g;function Y(X,pt){return typeof X=="object"&&X!==null&&X.key!=null?D(""+X.key):pt.toString(36)}function z(X){switch(X.status){case"fulfilled":return X.value;case"rejected":throw X.reason;default:switch(typeof X.status=="string"?X.then(P,P):(X.status="pending",X.then(function(pt){X.status==="pending"&&(X.status="fulfilled",X.value=pt)},function(pt){X.status==="pending"&&(X.status="rejected",X.reason=pt)})),X.status){case"fulfilled":return X.value;case"rejected":throw X.reason}}throw X}function J(X,pt,j,tt,xt){var Rt=typeof X;(Rt==="undefined"||Rt==="boolean")&&(X=null);var Ct=!1;if(X===null)Ct=!0;else switch(Rt){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(X.$$typeof){case o:case t:Ct=!0;break;case v:return Ct=X._init,J(Ct(X._payload),pt,j,tt,xt)}}if(Ct)return xt=xt(X),Ct=tt===""?"."+Y(X,0):tt,B(xt)?(j="",Ct!=null&&(j=Ct.replace(q,"$&/")+"/"),J(xt,pt,j,"",function(F){return F})):xt!=null&&(W(xt)&&(xt=H(xt,j+(xt.key==null||X&&X.key===xt.key?"":(""+xt.key).replace(q,"$&/")+"/")+Ct)),pt.push(xt)),1;Ct=0;var Tt=tt===""?".":tt+":";if(B(X))for(var Lt=0;Lt<X.length;Lt++)tt=X[Lt],Rt=Tt+Y(tt,Lt),Ct+=J(tt,pt,j,Rt,xt);else if(Lt=E(X),typeof Lt=="function")for(X=Lt.call(X),Lt=0;!(tt=X.next()).done;)tt=tt.value,Rt=Tt+Y(tt,Lt++),Ct+=J(tt,pt,j,Rt,xt);else if(Rt==="object"){if(typeof X.then=="function")return J(z(X),pt,j,tt,xt);throw pt=String(X),Error("Objects are not valid as a React child (found: "+(pt==="[object Object]"?"object with keys {"+Object.keys(X).join(", ")+"}":pt)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function Q(X,pt,j){if(X==null)return X;var tt=[],xt=0;return J(X,tt,"","",function(Rt){return pt.call(j,Rt,xt++)}),tt}function ut(X){if(X._status===-1){var pt=X._result,j=pt();j.then(function(tt){(X._status===0||X._status===-1)&&(X._status=1,X._result=tt,j.status===void 0&&(j.status="fulfilled",j.value=tt))},function(tt){(X._status===0||X._status===-1)&&(X._status=2,X._result=tt,j.status===void 0&&(j.status="rejected",j.reason=tt))}),X._status===-1&&(X._status=0,X._result=j)}if(X._status===1)return X._result.default;throw X._result}var yt=typeof reportError=="function"?reportError:function(X){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof X=="object"&&X!==null&&typeof X.message=="string"?String(X.message):String(X),error:X});if(!window.dispatchEvent(pt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",X);return}console.error(X)};function St(X){var pt=V.T,j={};j.types=pt!==null?pt.types:null,V.T=j;try{var tt=X(),xt=V.S;xt!==null&&xt(j,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(P,yt)}catch(Rt){yt(Rt)}finally{pt!==null&&j.types!==null&&(pt.types=j.types),V.T=pt}}function Ft(X){var pt=V.T;if(pt!==null){var j=pt.types;j===null?pt.types=[X]:j.indexOf(X)===-1&&j.push(X)}else St(Ft.bind(null,X))}var Qt={map:Q,forEach:function(X,pt,j){Q(X,function(){pt.apply(this,arguments)},j)},count:function(X){var pt=0;return Q(X,function(){pt++}),pt},toArray:function(X){return Q(X,function(pt){return pt})||[]},only:function(X){if(!W(X))throw Error("React.Children.only expected to receive a single React element child.");return X}};return ve.Activity=g,ve.Children=Qt,ve.Component=U,ve.Fragment=i,ve.Profiler=l,ve.PureComponent=b,ve.StrictMode=s,ve.Suspense=p,ve.ViewTransition=_,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ve.__COMPILER_RUNTIME={__proto__:null,c:function(X){return V.H.useMemoCache(X)}},ve.addTransitionType=Ft,ve.cache=function(X){return function(){return X.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(X,pt,j){if(X==null)throw Error("The argument must be a React element, but you passed "+X+".");var tt=M({},X.props),xt=X.key;if(pt!=null)for(Rt in pt.key!==void 0&&(xt=""+pt.key),pt)!N.call(pt,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&pt.ref===void 0||(tt[Rt]=pt[Rt]);var Rt=arguments.length-2;if(Rt===1)tt.children=j;else if(1<Rt){for(var Ct=Array(Rt),Tt=0;Tt<Rt;Tt++)Ct[Tt]=arguments[Tt+2];tt.children=Ct}return R(X.type,xt,tt)},ve.createContext=function(X){return X={$$typeof:f,_currentValue:X,_currentValue2:X,_threadCount:0,Provider:null,Consumer:null},X.Provider=X,X.Consumer={$$typeof:u,_context:X},X},ve.createElement=function(X,pt,j){var tt,xt={},Rt=null;if(pt!=null)for(tt in pt.key!==void 0&&(Rt=""+pt.key),pt)N.call(pt,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(xt[tt]=pt[tt]);var Ct=arguments.length-2;if(Ct===1)xt.children=j;else if(1<Ct){for(var Tt=Array(Ct),Lt=0;Lt<Ct;Lt++)Tt[Lt]=arguments[Lt+2];xt.children=Tt}if(X&&X.defaultProps)for(tt in Ct=X.defaultProps,Ct)xt[tt]===void 0&&(xt[tt]=Ct[tt]);return R(X,Rt,xt)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(X){return{$$typeof:d,render:X}},ve.isValidElement=W,ve.lazy=function(X){return{$$typeof:v,_payload:{_status:-1,_result:X},_init:ut}},ve.memo=function(X,pt){return{$$typeof:m,type:X,compare:pt===void 0?null:pt}},ve.startTransition=St,ve.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ve.use=function(X){return V.H.use(X)},ve.useActionState=function(X,pt,j){return V.H.useActionState(X,pt,j)},ve.useCallback=function(X,pt){return V.H.useCallback(X,pt)},ve.useContext=function(X){return V.H.useContext(X)},ve.useDebugValue=function(){},ve.useDeferredValue=function(X,pt){return V.H.useDeferredValue(X,pt)},ve.useEffect=function(X,pt){return V.H.useEffect(X,pt)},ve.useEffectEvent=function(X){return V.H.useEffectEvent(X)},ve.useId=function(){return V.H.useId()},ve.useImperativeHandle=function(X,pt,j){return V.H.useImperativeHandle(X,pt,j)},ve.useInsertionEffect=function(X,pt){return V.H.useInsertionEffect(X,pt)},ve.useLayoutEffect=function(X,pt){return V.H.useLayoutEffect(X,pt)},ve.useMemo=function(X,pt){return V.H.useMemo(X,pt)},ve.useOptimistic=function(X,pt){return V.H.useOptimistic(X,pt)},ve.useReducer=function(X,pt,j){return V.H.useReducer(X,pt,j)},ve.useRef=function(X){return V.H.useRef(X)},ve.useState=function(X){return V.H.useState(X)},ve.useSyncExternalStore=function(X,pt,j){return V.H.useSyncExternalStore(X,pt,j)},ve.useTransition=function(){return V.H.useTransition()},ve.version="19.3.1",ve}var J_;function ym(){return J_||(J_=1,Id.exports=cE()),Id.exports}var ge=ym(),Bd={exports:{}},yl={},Fd={exports:{}},Hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function fE(){return $_||($_=1,(function(o){function t(z,J){var Q=z.length;z.push(J);t:for(;0<Q;){var ut=Q-1>>>1,yt=z[ut];if(0<l(yt,J))z[ut]=J,z[Q]=yt,Q=ut;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var J=z[0],Q=z.pop();if(Q!==J){z[0]=Q;t:for(var ut=0,yt=z.length,St=yt>>>1;ut<St;){var Ft=2*(ut+1)-1,Qt=z[Ft],X=Ft+1,pt=z[X];if(0>l(Qt,Q))X<yt&&0>l(pt,Qt)?(z[ut]=pt,z[X]=Q,ut=X):(z[ut]=Qt,z[Ft]=Q,ut=Ft);else if(X<yt&&0>l(pt,Q))z[ut]=pt,z[X]=Q,ut=X;else break t}}return J}function l(z,J){var Q=z.sortIndex-J.sortIndex;return Q!==0?Q:z.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,g=null,_=3,S=!1,E=!1,T=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function b(z){for(var J=i(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=z)s(m),J.sortIndex=J.expirationTime,t(p,J);else break;J=i(m)}}function O(z){if(T=!1,b(z),!E)if(i(p)!==null)E=!0,B||(B=!0,W());else{var J=i(m);J!==null&&Y(O,J.startTime-z)}}var B=!1,P=-1,V=5,N=-1;function R(){return M?!0:!(o.unstable_now()-N<V)}function H(){if(M=!1,B){var z=o.unstable_now();N=z;var J=!0;try{t:{E=!1,T&&(T=!1,U(P),P=-1),S=!0;var Q=_;try{e:{for(b(z),g=i(p);g!==null&&!(g.expirationTime>z&&R());){var ut=g.callback;if(typeof ut=="function"){g.callback=null,_=g.priorityLevel;var yt=ut(g.expirationTime<=z);if(z=o.unstable_now(),typeof yt=="function"){g.callback=yt,b(z),J=!0;break e}g===i(p)&&s(p),b(z)}else s(p);g=i(p)}if(g!==null)J=!0;else{var St=i(m);St!==null&&Y(O,St.startTime-z),J=!1}}break t}finally{g=null,_=Q,S=!1}J=void 0}}finally{J?W():B=!1}}}var W;if(typeof C=="function")W=function(){C(H)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,q=D.port2;D.port1.onmessage=H,W=function(){q.postMessage(null)}}else W=function(){y(H,0)};function Y(z,J){P=y(function(){z(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(z){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var Q=_;_=J;try{return z()}finally{_=Q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(z,J){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=_;_=z;try{return J()}finally{_=Q}},o.unstable_scheduleCallback=function(z,J,Q){var ut=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ut+Q:ut):Q=ut,z){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=Q+yt,z={id:v++,callback:J,priorityLevel:z,startTime:Q,expirationTime:yt,sortIndex:-1},Q>ut?(z.sortIndex=Q,t(m,z),i(p)===null&&z===i(m)&&(T?(U(P),P=-1):T=!0,Y(O,Q-ut))):(z.sortIndex=yt,t(p,z),E||S||(E=!0,B||(B=!0,W()))),z},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(z){var J=_;return function(){var Q=_;_=J;try{return z.apply(this,arguments)}finally{_=Q}}}})(Hd)),Hd}var ty;function hE(){return ty||(ty=1,Fd.exports=fE()),Fd.exports}var Gd={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function dE(){if(ey)return In;ey=1;var o=ym();function t(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function d(v,g,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===f?f:""+S,children:v,containerInfo:g,implementation:_}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.browser=function(v){return{$$typeof:u,_reason:v}},In.createPortal=function(v,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(v,g,null,_)},In.flushSync=function(v){var g=p.T,_=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=g,s.p=_,s.d.f()}},In.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},In.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},In.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var _=g.as,S=m(_,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:T}):_==="script"&&s.d.X(v,{crossOrigin:S,integrity:E,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},In.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=m(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},In.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,S=m(_,g.crossOrigin);s.d.L(v,_,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},In.preloadModule=function(v,g){if(typeof v=="string")if(g){var _=m(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},In.requestFormReset=function(v){s.d.r(v)},In.unstable_batchedUpdates=function(v,g){return v(g)},In.useFormState=function(v,g,_){return p.H.useFormState(v,g,_)},In.useFormStatus=function(){return p.H.useHostTransitionStatus()},In.version="19.3.1",In}var ny;function pE(){if(ny)return Gd.exports;ny=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Gd.exports=dE(),Gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function mE(){if(iy)return yl;iy=1;var o=hE(),t=ym(),i=pE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return p(c),e;if(h===r)return p(c),n;h=h.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=h;else{for(var x=!1,w=c.child;w;){if(w===a){x=!0,a=c,r=h;break}if(w===r){x=!0,r=c,a=h;break}w=w.sibling}if(!x){for(w=h.child;w;){if(w===a){x=!0,a=h,r=c;break}if(w===r){x=!0,r=h,a=c;break}w=w.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,r,c,h){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,h)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,r,c,h))return!0;e=e.sibling}return!1}function _(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],a=_(e);return a===null||T(n,e,a.child,{foundSelf:!1}),n}function T(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&T(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var y=null,U=null;function C(e,n,a){return e===a?!0:e===n?(y=e,!0):!1}function b(e,n,a){return e===a?(U=e,!1):e===n?(U!==null&&(y=e),!0):!1}function O(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function B(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var h=n;h;h=a(h))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,V=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),ut=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),St=Symbol.for("react.activity"),Ft=Symbol.for("react.legacy_hidden"),Qt=Symbol.for("react.memo_cache_sentinel"),X=Symbol.for("react.view_transition"),pt=Symbol.for("react.recoverable"),j=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var xt=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case D:return"Profiler";case W:return"StrictMode";case J:return"Suspense";case Q:return"SuspenseList";case St:return"Activity";case X:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case Y:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ut:return n=e.displayName||null,n!==null?n:Rt(e.type)||"Memo";case yt:n=e._payload,e=e._init;try{return Rt(e(n))}catch{}}return null}var Ct=Array.isArray,Tt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Lt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},At=[],vt=-1;function mt(e){return{current:e}}function gt(e){0>vt||(e.current=At[vt],At[vt]=null,vt--)}function wt(e,n){vt++,At[vt]=e.current,e.current=n}var Nt=mt(null),zt=mt(null),oe=mt(null),re=mt(null);function I(e,n){switch(wt(oe,n),wt(zt,e),wt(Nt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?a_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=a_(n),e=s_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}gt(Nt),wt(Nt,e)}function A(){gt(Nt),gt(zt),gt(oe)}function rt(e){var n=e.memoizedState;n!==null&&(Xr._currentValue=n.memoizedState,wt(re,e)),n=Nt.current;var a=s_(n,e.type);n!==a&&(wt(zt,e),wt(Nt,a))}function ft(e){zt.current===e&&(gt(Nt),gt(zt)),re.current===e&&(gt(re),Xr._currentValue=F)}var Ut,_t;function Jt(e){if(Ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ut=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+e+_t}var Ht=!1;function te(e,n){if(!e||Ht)return"";Ht=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(qt){var $=qt}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(qt){$=qt}bt=!1;try{var lt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),bt=!0,new e}finally{bt&&(lt!==void 0?Object.defineProperty(e.prototype,"props",lt):delete e.prototype.props)}}}else{try{throw Error()}catch(qt){$=qt}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(qt){if(qt&&$&&typeof qt.stack=="string")return[qt.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=r.DetermineComponentFrameRoot(),x=h[0],w=h[1];if(x&&w){var k=x.split(`
`),nt=w.split(`
`);for(c=r=0;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(r===k.length||c===nt.length)for(r=k.length-1,c=nt.length-1;1<=r&&0<=c&&k[r]!==nt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(k[r]!==nt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||k[r]!==nt[c]){var ct=`
`+k[r].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=r&&0<=c);break}}}finally{Ht=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Jt(a):""}function ne(e,n){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return e.child!==n&&n!==null?Jt("Suspense Fallback"):Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return te(e.type,!1);case 11:return te(e.type.render,!1);case 1:return te(e.type,!0);case 31:return Jt("Activity");case 30:return Jt("ViewTransition");default:return""}}function Ot(e){try{var n="",a=null;do n+=ne(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Wt=Object.prototype.hasOwnProperty,Mt=o.unstable_scheduleCallback,Yt=o.unstable_cancelCallback,It=o.unstable_shouldYield,me=o.unstable_requestPaint,K=o.unstable_now,Gt=o.unstable_getCurrentPriorityLevel,Xt=o.unstable_ImmediatePriority,ee=o.unstable_UserBlockingPriority,Pt=o.unstable_NormalPriority,Dt=o.unstable_LowPriority,se=o.unstable_IdlePriority,_e=o.log,We=o.unstable_setDisableYieldValue,Ce=null,nn=null;function Sn(e){if(typeof _e=="function"&&We(e),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(Ce,e)}catch{}}var Bn=Math.clz32?Math.clz32:Wl,ua=Math.log,wo=Math.LN2;function Wl(e){return e>>>=0,e===0?32:31-(ua(e)/wo|0)|0}var vs=256,ca=262144,_s=4194304;function yi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ys(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=r&134217727;return w!==0?(r=w&~h,r!==0?c=yi(r):(x&=w,x!==0?c=yi(x):a||(a=w&~e,a!==0&&(c=yi(a))))):(w=r&~h,w!==0?c=yi(w):x!==0?c=yi(x):a||(a=r&~e,a!==0&&(c=yi(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Pa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function jl(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-Bn(a),c=1<<r;n|=e[r],a&=~c}return n}function cf(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zl(){var e=_s;return _s<<=1,(_s&62914560)===0&&(_s=4194304),e}function Co(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function xs(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ff(e,n,a,r,c,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,k=e.expirationTimes,nt=e.hiddenUpdates;for(a=x&~a;0<a;){var ct=31-Bn(a),bt=1<<ct;w[ct]=0,k[ct]=-1;var $=nt[ct];if($!==null)for(nt[ct]=null,ct=0;ct<$.length;ct++){var lt=$[ct];lt!==null&&(lt.lane&=-536870913)}a&=~bt}r!==0&&L(e,r,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function L(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Bn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function at(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Bn(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function ht(e,n){var a=n&-n;return a=(a&42)!==0?1:dt(a),(a&(e.suspendedLanes|n))!==0?0:a}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bt(){var e=Lt.p;return e!==0?e:(e=window.event,e===void 0?32:V_(e.type))}function jt(e,n){var a=Lt.p;try{return Lt.p=e,n()}finally{Lt.p=a}}var Kt=Math.random().toString(36).slice(2),kt="__reactFiber$"+Kt,ie="__reactProps$"+Kt,he="__reactContainer$"+Kt,ue="__reactEvents$"+Kt,be="__reactListeners$"+Kt,He="__reactHandles$"+Kt,tn="__reactResources$"+Kt,Ie="__reactMarker$"+Kt,Oe="__reactLoad$"+Kt;function ce(e){delete e[kt],delete e[ie],delete e[be],delete e[He]}function Be(e){var n;if(n=e[kt])return n;for(var a=e.parentNode;a;){if(n=a[he]||a[kt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=M_(e);e!==null;){if(a=e[kt])return a;e=M_(e)}return n}e=a,a=e.parentNode}return null}function Ee(e){if(e=e[kt]||e[he]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Mn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ri(e){var n=e[tn];return n||(n=e[tn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(e){e[Ie]=!0}function za(e){e[Oe]=void 0}var Ke=new Set,qn={};function pn(e,n){on(e,n),on(e+"Capture",n)}function on(e,n){for(qn[e]=n,e=0;e<n.length;e++)Ke.add(n[e])}var Fn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),or={},Yi={};function bS(e){return Wt.call(Yi,e)?!0:Wt.call(or,e)?!1:Fn.test(e)?Yi[e]=!0:(or[e]=!0,!1)}var ze=!1;function Xm(){var e=ze;return ze=!1,e}function Ql(e,n,a){if(bS(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function Kl(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function fa(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function oi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function AS(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,h=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function hf(e){if(!e._valueTracker){var n=qm(e)?"checked":"value";e._valueTracker=AS(e,n,""+e[n])}}function Ym(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=qm(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var RS=/[\n"\\]/g;function xi(e){return e.replace(RS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function df(e,n,a,r,c,h,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+oi(n)):e.value!==""+oi(n)&&(e.value=""+oi(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?pf(e,oi(e.value)):pf(e,oi(n)):a!=null?pf(e,oi(a)):r!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+oi(w):e.removeAttribute("name")}function Wm(e,n,a,r,c,h,x,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){hf(e);return}a=a!=null?""+oi(a):"",n=n!=null?""+oi(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=w?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),hf(e)}function pf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function lr(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+oi(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function jm(e,n,a){if(n!=null&&(n=""+oi(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+oi(a):""}function Zm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Ct(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=oi(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),hf(e)}function ur(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var wS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||wS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Km(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",ze=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Qm(e,c,r),ze=!0)}else for(var h in n)n.hasOwnProperty(h)&&Qm(e,h,n[h])}function mf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var CS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),DS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(e){return DS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var gf=null;function vf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cr=null,fr=null;function Jm(e){var n=Ee(e);if(n&&(e=n.stateNode)){var a=e[ie]||null;t:switch(e=n.stateNode,n.type){case"input":if(df(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[ie]||null;if(!c)throw Error(s(90));df(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ym(r)}break t;case"textarea":jm(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&lr(e,!!a.multiple,n,!1)}}}var _f=!1;function $m(e,n,a){if(_f)return e(n,a);_f=!0;try{var r=e(n);return r}finally{if(_f=!1,(cr!==null||fr!==null)&&(Ju(),cr&&(n=cr,e=fr,fr=cr=null,Jm(n),e)))for(n=0;n<e.length;n++)Jm(e[n])}}function Do(e,n){var a=e.stateNode;if(a===null)return null;var r=a[ie]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=!1;if(ha)try{var No={};Object.defineProperty(No,"passive",{get:function(){yf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{yf=!1}var Ia=null,xf=null,$l=null;function t0(){if($l)return $l;var e,n=xf,a=n.length,r,c="value"in Ia?Ia.value:Ia.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===c[h-r];r++);return $l=c.slice(e,1<r?1-r:void 0)}function tu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function eu(){return!0}function e0(){return!1}function Yn(e){function n(a,r,c,h,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?eu:e0,this.isPropagationStopped=e0,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=Yn(Ba),Uo=P({},Ba,{view:0,detail:0}),NS=Yn(Uo),Sf,Mf,Lo,iu=P({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lo&&(Lo&&e.type==="mousemove"?(Sf=e.screenX-Lo.screenX,Mf=e.screenY-Lo.screenY):Mf=Sf=0,Lo=e),Sf)},movementY:function(e){return"movementY"in e?e.movementY:Mf}}),n0=Yn(iu),US=P({},iu,{dataTransfer:0}),LS=Yn(US),OS=P({},Uo,{relatedTarget:0}),Ef=Yn(OS),PS=P({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),zS=Yn(PS),IS=P({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),BS=Yn(IS),FS=P({},Ba,{data:0}),i0=Yn(FS),HS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=VS[e])?!!n[e]:!1}function Tf(){return kS}var XS=P({},Uo,{key:function(e){if(e.key){var n=HS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?GS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(e){return e.type==="keypress"?tu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qS=Yn(XS),YS=P({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),a0=Yn(YS),WS=P({},Ba,{submitter:0}),jS=Yn(WS),ZS=P({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),QS=Yn(ZS),KS=P({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),JS=Yn(KS),$S=P({},iu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tM=Yn($S),eM=P({},Ba,{newState:0,oldState:0,source:0}),nM=Yn(eM),iM=[9,13,27,32],bf=ha&&"CompositionEvent"in window,Oo=null;ha&&"documentMode"in document&&(Oo=document.documentMode);var aM=ha&&"TextEvent"in window&&!Oo,s0=ha&&(!bf||Oo&&8<Oo&&11>=Oo),r0=" ",o0=!1;function l0(e,n){switch(e){case"keyup":return iM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function sM(e,n){switch(e){case"compositionend":return u0(n);case"keypress":return n.which!==32?null:(o0=!0,r0);case"textInput":return e=n.data,e===r0&&o0?null:e;default:return null}}function rM(e,n){if(hr)return e==="compositionend"||!bf&&l0(e,n)?(e=t0(),$l=xf=Ia=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return s0&&n.locale!=="ko"?null:n.data;default:return null}}var oM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function c0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!oM[e.type]:n==="textarea"}function f0(e,n,a,r){cr?fr?fr.push(r):fr=[r]:cr=r,n=ac(n,"onChange"),0<n.length&&(a=new nu("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Po=null,zo=null;function lM(e){Jv(e,0)}function au(e){var n=Mn(e);if(Ym(n))return e}function h0(e,n){if(e==="change")return n}var d0=!1;if(ha){var Af;if(ha){var Rf="oninput"in document;if(!Rf){var p0=document.createElement("div");p0.setAttribute("oninput","return;"),Rf=typeof p0.oninput=="function"}Af=Rf}else Af=!1;d0=Af&&(!document.documentMode||9<document.documentMode)}function m0(){Po&&(Po.detachEvent("onpropertychange",g0),zo=Po=null)}function g0(e){if(e.propertyName==="value"&&au(zo)){var n=[];f0(n,zo,e,vf(e)),$m(lM,n)}}function uM(e,n,a){e==="focusin"?(m0(),Po=n,zo=a,Po.attachEvent("onpropertychange",g0)):e==="focusout"&&m0()}function cM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return au(zo)}function fM(e,n){if(e==="click")return au(n)}function hM(e,n){if(e==="input"||e==="change")return au(n)}function dM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var li=typeof Object.is=="function"?Object.is:dM;function Io(e,n){if(li(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Wt.call(n,c)||!li(e[c],n[c]))return!1}return!0}function wf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function v0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _0(e,n){var a=v0(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=v0(a)}}function y0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?y0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function x0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=wf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=wf(e.document)}return n}function Cf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var pM=ha&&"documentMode"in document&&11>=document.documentMode,dr=null,Df=null,Bo=null,Nf=!1;function S0(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nf||dr==null||dr!==wf(r)||(r=dr,"selectionStart"in r&&Cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bo&&Io(Bo,r)||(Bo=r,r=ac(Df,"onSelect"),0<r.length&&(n=new nu("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=dr)))}function Ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var pr={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},Uf={},M0={};ha&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function Ms(e){if(Uf[e])return Uf[e];if(!pr[e])return e;var n=pr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in M0)return Uf[e]=n[a];return e}var E0=Ms("animationend"),T0=Ms("animationiteration"),b0=Ms("animationstart"),mM=Ms("transitionrun"),gM=Ms("transitionstart"),vM=Ms("transitioncancel"),A0=Ms("transitionend"),R0=new Map,Lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lf.push("scrollEnd");function Li(e,n){R0.set(e,n),pn(n,[e])}var _M=0;function da(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Ii.identifierPrefix;var a=_M++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function w0(e){if(e==null||typeof e=="string")return e;var n=null,a=Or;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function pa(e,n){return e=w0(e),n=w0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var su=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],mr=0,Of=0;function ru(){for(var e=mr,n=Of=mr=0;n<e;){var a=Si[n];Si[n++]=null;var r=Si[n];Si[n++]=null;var c=Si[n];Si[n++]=null;var h=Si[n];if(Si[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}h!==0&&C0(a,c,h)}}function ou(e,n,a,r){Si[mr++]=e,Si[mr++]=n,Si[mr++]=a,Si[mr++]=r,Of|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Pf(e,n,a,r){return ou(e,n,a,r),lu(e)}function Es(e,n){return ou(e,null,null,n),lu(e)}function C0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,r=h.alternate,r!==null&&(r.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-Bn(a),e=h.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),h):null}function lu(e){if(50<rl)throw rl=0,Ku=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var gr={};function yM(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,r){return new yM(e,n,a,r)}function zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function D0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function uu(e,n,a,r,c,h){var x=0;if(r=e,typeof r=="function")zf(r)&&(x=1);else if(typeof r=="string")x=W1(e,a,Nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case St:return e=ti(31,a,n,c),e.elementType=St,e.lanes=h,e;case H:return Ts(a.children,c,h,n);case W:x=8,c|=24;break;case D:return e=ti(12,a,n,c|2),e.elementType=D,e.lanes=h,e;case J:return e=ti(13,a,n,c),e.elementType=J,e.lanes=h,e;case Q:return e=ti(19,a,n,c),e.elementType=Q,e.lanes=h,e;case Ft:case X:return e=c|32,e=ti(30,a,n,e),e.elementType=X,e.lanes=h,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Y:x=10;break t;case q:x=9;break t;case z:x=11;break t;case ut:x=14;break t;case yt:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ti(x,a,n,c),n.elementType=e,n.type=r,n.lanes=h,n}function Ts(e,n,a,r){return e=ti(7,e,r,n),e.lanes=a,e}function If(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function N0(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Bf(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var U0=new WeakMap;function Mi(e,n){if(typeof e=="object"&&e!==null){var a=U0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ot(n)},U0.set(e,n),n)}return{value:e,source:n,stack:Ot(n)}}var vr=[],_r=0,cu=null,Fo=0,Ei=[],Ti=0,Fa=null,ji=1,Zi="";function ga(e,n){vr[_r++]=Fo,vr[_r++]=cu,cu=e,Fo=n}function L0(e,n,a){Ei[Ti++]=ji,Ei[Ti++]=Zi,Ei[Ti++]=Fa,Fa=e;var r=ji;e=Zi;var c=32-Bn(r)-1;r&=~(1<<c),a+=1;var h=32-Bn(n)+c;if(30<h){var x=c-c%5;h=(r&(1<<x)-1).toString(32),r>>=x,c-=x,ji=1<<32-Bn(n)+c|a<<c|r,Zi=h+e}else ji=1<<h|a<<c|r,Zi=e}function fu(e){e.return!==null&&(ga(e,1),L0(e,1,0))}function Ff(e){for(;e===cu;)cu=vr[--_r],vr[_r]=null,Fo=vr[--_r],vr[_r]=null;for(;e===Fa;)Fa=Ei[--Ti],Ei[Ti]=null,Zi=Ei[--Ti],Ei[Ti]=null,ji=Ei[--Ti],Ei[Ti]=null}function O0(e,n){Ei[Ti++]=ji,Ei[Ti++]=Zi,Ei[Ti++]=Fa,ji=n.id,Zi=n.overflow,Fa=e}var wn=null,Je=null,Te=!1,Ha=null,bi=!1,Hf=Error(s(519));function Ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ho(Mi(n,e)),Hf}function P0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[kt]=e,n[ie]=r,a){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<ll.length;a++)we(ll[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),Wm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),Zm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||n_(n.textContent,a)?(r.popover!=null&&(we("beforetoggle",n),we("toggle",n)),r.onScroll!=null&&we("scroll",n),r.onScrollEnd!=null&&we("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ga(e,!0)}function hu(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:wn=wn.return}}function yr(e){if(e!==wn)return!1;if(!Te)return hu(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gd(e.type,e.memoizedProps)),a=!a),a&&Je&&Ga(e),hu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=S_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=S_(e)}else n===27?(n=Je,is(e.type)?(e=bd,bd=null,Je=e):Je=n):Je=wn?Ri(e.stateNode.nextSibling):null;return!0}function bs(){Je=wn=null,Te=!1}function Gf(){var e=Ha;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),Ha=null),e}function Ho(e){Ha===null?Ha=[e]:Ha.push(e)}var Vf=mt(null),As=null,va=null;function Va(e,n,a){wt(Vf,n._currentValue),n._currentValue=a}function _a(e){e._currentValue=Vf.current,gt(Vf)}function du(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function kf(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var x=c.child;h=h.firstContext;t:for(;h!==null;){var w=h;h=c;for(var k=0;k<n.length;k++)if(w.context===n[k]){h.lanes|=a,w=h.alternate,w!==null&&(w.lanes|=a),du(h.return,a,e),r||(x=null);break t}h=w.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),du(x,a,e),x=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),du(c.return,a,e),x=c.child,x=x!==null?x.sibling:null):x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Rs(e,n,a,r){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var w=c.type;li(c.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(c===re.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Xr):e=[Xr])}c=c.return}return e!==null&&kf(n,e,a,r),n.flags|=262144,e!==null}function pu(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ws(e){As=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return z0(As,e)}function mu(e,n){return As===null&&ws(e),z0(e,n)}function z0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},va===null){if(e===null)throw Error(s(308));va=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else va=va.next=n;return a}var xM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},SM=o.unstable_scheduleCallback,MM=o.unstable_NormalPriority,mn={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xf(){return{controller:new xM,data:new Map,refCount:0}}function Go(e){e.refCount--,e.refCount===0&&SM(MM,function(){e.controller.abort()})}function I0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Vo=null;function EM(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var ko=null,qf=0,Cs=0,xr=null;function TM(e,n){if(ko===null){var a=ko=[];qf=0,Cs=od(),xr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return qf++,n.then(B0,B0),n}function B0(){if(--qf===0&&(Vo=null,ko!==null)){xr!==null&&(xr.status="fulfilled");var e=ko;ko=null,Cs=0,xr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function bM(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var F0=Tt.S;Tt.S=function(e,n){if(Nv=K(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&TM(e,n),Vo!==null)for(var a=Br;a!==null;)I0(a,Vo),a=a.next;if(a=e.types,a!==null){for(var r=Br;r!==null;)I0(r,a),r=r.next;if(Cs!==0){r=Vo,r===null&&(r=Vo=[]);for(var c=0;c<a.length;c++){var h=a[c];r.indexOf(h)===-1&&r.push(h)}}}F0!==null&&F0(e,n)};var Ds=mt(null);function Yf(){var e=Ds.current;return e!==null?e:Qe.pooledCache}function gu(e,n){n===null?wt(Ds,Ds.current):wt(Ds,n.pool)}function H0(){var e=Yf();return e===null?null:{parent:mn._currentValue,pool:e}}var Sr=Error(s(460)),Wf=Error(s(474)),vu=Error(s(542)),_u={then:function(){}};function G0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function V0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,X0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,X0(e),e}throw Us=n,Sr}}function Ns(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,Sr):a}}var Us=null;function k0(){if(Us===null)throw Error(s(459));var e=Us;return Us=null,e}function X0(e){if(e===Sr||e===vu)throw Error(s(483))}var Mr=null,Xo=0;function yu(e){var n=Xo;return Xo+=1,Mr===null&&(Mr=[]),V0(Mr,e,n)}function ka(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xu(e,n){throw n.$$typeof===V?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function q0(e){function n(et,Z){if(e){var ot=et.deletions;ot===null?(et.deletions=[Z],et.flags|=16):ot.push(Z)}}function a(et,Z){if(!e)return null;for(;Z!==null;)n(et,Z),Z=Z.sibling;return null}function r(et){for(var Z=new Map;et!==null;)et.key===null?Z.set(et.index,et):Z.set(et.key,et),et=et.sibling;return Z}function c(et,Z){return et=ma(et,Z),et.index=0,et.sibling=null,et}function h(et,Z,ot){return et.index=ot,e?(ot=et.alternate,ot!==null?(ot=ot.index,ot<Z?(et.flags|=2,Z):ot):(et.flags|=134217730,Z)):(et.flags|=1048576,Z)}function x(et){return e&&et.alternate===null&&(et.flags|=134217730),et}function w(et,Z,ot,Et){return Z===null||Z.tag!==6?(Z=If(ot,et.mode,Et),Z.return=et,Z):(Z=c(Z,ot),Z.return=et,Z)}function k(et,Z,ot,Et){var $t=ot.type;return $t===H?(et=ct(et,Z,ot.props.children,Et,ot.key),ka(et,ot),et):Z!==null&&(Z.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===yt&&Ns($t)===Z.type)?(Z=c(Z,ot.props),ka(Z,ot),Z.return=et,Z):(Z=uu(ot.type,ot.key,ot.props,null,et.mode,Et),ka(Z,ot),Z.return=et,Z)}function nt(et,Z,ot,Et){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ot.containerInfo||Z.stateNode.implementation!==ot.implementation?(Z=Bf(ot,et.mode,Et),Z.return=et,Z):(Z=c(Z,ot.children||[]),Z.return=et,Z)}function ct(et,Z,ot,Et,$t){return Z===null||Z.tag!==7?(Z=Ts(ot,et.mode,Et,$t),Z.return=et,Z):(Z=c(Z,ot),Z.return=et,Z)}function bt(et,Z,ot){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=If(""+Z,et.mode,ot),Z.return=et,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case N:return ot=uu(Z.type,Z.key,Z.props,null,et.mode,ot),ka(ot,Z),ot.return=et,ot;case R:return Z=Bf(Z,et.mode,ot),Z.return=et,Z;case yt:return Z=Ns(Z),bt(et,Z,ot)}if(Ct(Z)||tt(Z))return Z=Ts(Z,et.mode,ot,null),Z.return=et,Z;if(typeof Z.then=="function")return bt(et,yu(Z),ot);if(Z.$$typeof===Y)return bt(et,mu(et,Z),ot);xu(et,Z)}return null}function $(et,Z,ot,Et){var $t=Z!==null?Z.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return $t!==null?null:w(et,Z,""+ot,Et);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case N:return ot.key===$t?k(et,Z,ot,Et):null;case R:return ot.key===$t?nt(et,Z,ot,Et):null;case yt:return ot=Ns(ot),$(et,Z,ot,Et)}if(Ct(ot)||tt(ot))return $t!==null?null:ct(et,Z,ot,Et,null);if(typeof ot.then=="function")return $(et,Z,yu(ot),Et);if(ot.$$typeof===Y)return $(et,Z,mu(et,ot),Et);xu(et,ot)}return null}function lt(et,Z,ot,Et,$t){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return et=et.get(ot)||null,w(Z,et,""+Et,$t);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case N:return et=et.get(Et.key===null?ot:Et.key)||null,k(Z,et,Et,$t);case R:return et=et.get(Et.key===null?ot:Et.key)||null,nt(Z,et,Et,$t);case yt:return Et=Ns(Et),lt(et,Z,ot,Et,$t)}if(Ct(Et)||tt(Et))return et=et.get(ot)||null,ct(Z,et,Et,$t,null);if(typeof Et.then=="function")return lt(et,Z,ot,yu(Et),$t);if(Et.$$typeof===Y)return lt(et,Z,ot,mu(Z,Et),$t);xu(Z,Et)}return null}function qt(et,Z,ot,Et){for(var $t=null,Ne=null,le=Z,pe=Z=0,_n=null;le!==null&&pe<ot.length;pe++){le.index>pe?(_n=le,le=null):_n=le.sibling;var Ue=$(et,le,ot[pe],Et);if(Ue===null){le===null&&(le=_n);break}e&&le&&Ue.alternate===null&&n(et,le),Z=h(Ue,Z,pe),Ne===null?$t=Ue:Ne.sibling=Ue,Ne=Ue,le=_n}if(pe===ot.length)return a(et,le),Te&&ga(et,pe),$t;if(le===null){for(;pe<ot.length;pe++)le=bt(et,ot[pe],Et),le!==null&&(Z=h(le,Z,pe),Ne===null?$t=le:Ne.sibling=le,Ne=le);return Te&&ga(et,pe),$t}for(le=r(le);pe<ot.length;pe++)_n=lt(le,et,pe,ot[pe],Et),_n!==null&&(e&&(Ue=_n.alternate,Ue!==null&&le.delete(Ue.key===null?pe:Ue.key)),Z=h(_n,Z,pe),Ne===null?$t=_n:Ne.sibling=_n,Ne=_n);return e&&le.forEach(function(ls){return n(et,ls)}),Te&&ga(et,pe),$t}function ae(et,Z,ot,Et){if(ot==null)throw Error(s(151));for(var $t=null,Ne=null,le=Z,pe=Z=0,_n=null,Ue=ot.next();le!==null&&!Ue.done;pe++,Ue=ot.next()){le.index>pe?(_n=le,le=null):_n=le.sibling;var ls=$(et,le,Ue.value,Et);if(ls===null){le===null&&(le=_n);break}e&&le&&ls.alternate===null&&n(et,le),Z=h(ls,Z,pe),Ne===null?$t=ls:Ne.sibling=ls,Ne=ls,le=_n}if(Ue.done)return a(et,le),Te&&ga(et,pe),$t;if(le===null){for(;!Ue.done;pe++,Ue=ot.next())Ue=bt(et,Ue.value,Et),Ue!==null&&(Z=h(Ue,Z,pe),Ne===null?$t=Ue:Ne.sibling=Ue,Ne=Ue);return Te&&ga(et,pe),$t}for(le=r(le);!Ue.done;pe++,Ue=ot.next())Ue=lt(le,et,pe,Ue.value,Et),Ue!==null&&(e&&(_n=Ue.alternate,_n!==null&&le.delete(_n.key===null?pe:_n.key)),Z=h(Ue,Z,pe),Ne===null?$t=Ue:Ne.sibling=Ue,Ne=Ue);return e&&le.forEach(function(sE){return n(et,sE)}),Te&&ga(et,pe),$t}function Se(et,Z,ot,Et){if(typeof ot=="object"&&ot!==null&&ot.type===H&&ot.key===null&&ot.props.ref===void 0&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case N:t:{for(var $t=ot.key;Z!==null;){if(Z.key===$t){if($t=ot.type,$t===H){if(Z.tag===7){a(et,Z.sibling),Et=c(Z,ot.props.children),ka(Et,ot),Et.return=et,et=Et;break t}}else if(Z.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===yt&&Ns($t)===Z.type){a(et,Z.sibling),Et=c(Z,ot.props),ka(Et,ot),Et.return=et,et=Et;break t}a(et,Z);break}else n(et,Z);Z=Z.sibling}ot.type===H?(Et=Ts(ot.props.children,et.mode,Et,ot.key),ka(Et,ot),Et.return=et,et=Et):(Et=uu(ot.type,ot.key,ot.props,null,et.mode,Et),ka(Et,ot),Et.return=et,et=Et)}return x(et);case R:t:{for($t=ot.key;Z!==null;){if(Z.key===$t)if(Z.tag===4&&Z.stateNode.containerInfo===ot.containerInfo&&Z.stateNode.implementation===ot.implementation){a(et,Z.sibling),Et=c(Z,ot.children||[]),Et.return=et,et=Et;break t}else{a(et,Z);break}else n(et,Z);Z=Z.sibling}Et=Bf(ot,et.mode,Et),Et.return=et,et=Et}return x(et);case yt:return ot=Ns(ot),Se(et,Z,ot,Et)}if(Ct(ot))return qt(et,Z,ot,Et);if(tt(ot)){if($t=tt(ot),typeof $t!="function")throw Error(s(150));return ot=$t.call(ot),ae(et,Z,ot,Et)}if(typeof ot.then=="function")return Se(et,Z,yu(ot),Et);if(ot.$$typeof===Y)return Se(et,Z,mu(et,ot),Et);xu(et,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,Z!==null&&Z.tag===6?(a(et,Z.sibling),Et=c(Z,ot),Et.return=et,et=Et):(a(et,Z),Et=If(ot,et.mode,Et),Et.return=et,et=Et),x(et)):a(et,Z)}return function(et,Z,ot,Et){try{Xo=0;var $t=Se(et,Z,ot,Et);return Mr=null,$t}catch(le){if(le===Sr||le===vu)throw le;var Ne=ti(29,le,null,et.mode);return Ne.lanes=Et,Ne.return=et,Ne}finally{}}}var Ls=q0(!0),Y0=q0(!1),Xa=!1;function jf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=lu(e),C0(e,null,a),n}return ou(e,r,n,a),lu(e)}function qo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,at(e,a)}}function Qf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Kf=!1;function Yo(){if(Kf){var e=xr;if(e!==null)throw e}}function Wo(e,n,a,r){Kf=!1;var c=e.updateQueue;Xa=!1;var h=c.firstBaseUpdate,x=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var k=w,nt=k.next;k.next=null,x===null?h=nt:x.next=nt,x=k;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,w=ct.lastBaseUpdate,w!==x&&(w===null?ct.firstBaseUpdate=nt:w.next=nt,ct.lastBaseUpdate=k))}if(h!==null){var bt=c.baseState;x=0,ct=nt=k=null,w=h;do{var $=w.lane&-536870913,lt=$!==w.lane;if(lt?(De&$)===$:(r&$)===$){$!==0&&$===Cs&&(Kf=!0),ct!==null&&(ct=ct.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var qt=e,ae=w;$=n;var Se=a;switch(ae.tag){case 1:if(qt=ae.payload,typeof qt=="function"){bt=qt.call(Se,bt,$);break t}bt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=ae.payload,$=typeof qt=="function"?qt.call(Se,bt,$):qt,$==null)break t;bt=P({},bt,$);break t;case 2:Xa=!0}}$=w.callback,$!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[$]:lt.push($))}else lt={lane:$,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ct===null?(nt=ct=lt,k=bt):ct=ct.next=lt,x|=$;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;lt=w,w=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ct===null&&(k=bt),c.baseState=k,c.firstBaseUpdate=nt,c.lastBaseUpdate=ct,h===null&&(c.shared.lanes=0),$a|=x,e.lanes=x,e.memoizedState=bt}}function W0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function j0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)W0(a[e],n)}var Wa=mt(null),Su=mt(0);function Z0(e,n){e=Ea,wt(Su,e),wt(Wa,n),Ea=e|n.baseLanes}function Jf(){wt(Su,Ea),wt(Wa,Wa.current)}function $f(){Ea=Su.current,gt(Wa),gt(Su)}var Ln=mt(null),Hn=null;function ja(e){var n=e.alternate;wt(On,On.current&1),wt(Ln,e),Hn===null&&(n===null||Wa.current!==null||n.memoizedState!==null)&&(Hn=e)}function th(e){wt(On,On.current),wt(Ln,e),Hn===null&&(Hn=e)}function Q0(e){e.tag===22?(wt(On,On.current),wt(Ln,e),Hn===null&&(Hn=e)):Za()}function Za(){wt(On,On.current),wt(Ln,Ln.current)}function ui(e){gt(Ln),Hn===e&&(Hn=null),gt(On)}var On=mt(0);function jo(e,n){wt(Ln,Ln.current),wt(On,n)}function eh(e){gt(On),gt(Ln),Hn===e&&(Hn=null)}function Mu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ed(a)||Td(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,xe=null,je=null,gn=null,Eu=!1,Er=!1,Os=!1,Tu=0,Zo=0,Tr=null,AM=0;function ln(){throw Error(s(321))}function nh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!li(e[a],n[a]))return!1;return!0}function ih(e,n,a,r,c,h){return ya=h,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tt.H=e===null||e.memoizedState===null?Lg:Og,Os=!1,h=a(r,c),Os=!1,Er&&(h=J0(n,a,r,c)),K0(e),h}function K0(e){Tt.H=Nu;var n=je!==null&&je.next!==null;if(ya=0,gn=je=xe=null,Eu=!1,Zo=0,Tr=null,n)throw Error(s(300));e===null||vn||(e=e.dependencies,e!==null&&pu(e)&&(vn=!0))}function J0(e,n,a,r){xe=e;var c=0;do{if(Er&&(Tr=null),Zo=0,Er=!1,25<=c)throw Error(s(301));if(c+=1,gn=je=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}Tt.H=OM,h=n(a,r)}while(Er);return h}function RM(){var e=Tt.H,n=e.useState()[0];return n=typeof n.then=="function"?Qo(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(xe.flags|=1024),n}function ah(){var e=Tu!==0;return Tu=0,e}function sh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function rh(e){if(Eu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Eu=!1}ya=0,gn=je=xe=null,Er=!1,Zo=Tu=0,Tr=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?xe.memoizedState=gn=e:gn=gn.next=e,gn}function hn(){if(je===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=gn===null?xe.memoizedState:gn.next;if(n!==null)gn=n,je=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},gn===null?xe.memoizedState=gn=e:gn=gn.next=e}return gn}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(e){var n=Zo;return Zo+=1,Tr===null&&(Tr=[]),e=V0(Tr,e,n),n=xe,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,Tt.H=n===null||n.memoizedState===null?Lg:Og),e}function Au(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qo(e);if(e.$$typeof===pt)return;if(e.$$typeof===Y)return Un(e)}throw Error(s(438,String(e)))}function oh(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=xe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bu(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Qt;return n.index++,a}function xa(e,n){return typeof n=="function"?n(e):n}function Ru(e){var n=hn();return lh(n,je,e)}function lh(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,h=r.pending;if(h!==null){if(c!==null){var x=c.next;c.next=h.next,h.next=x}n.baseQueue=c=h,r.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var w=x=null,k=null,nt=n,ct=!1;do{var bt=nt.lane&-536870913;if(bt!==nt.lane?(De&bt)===bt:(ya&bt)===bt){var $=nt.revertLane;if($===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),bt===Cs&&(ct=!0);else if((ya&$)===$){nt=nt.next,$===Cs&&(ct=!0);continue}else bt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},k===null?(w=k=bt,x=h):k=k.next=bt,xe.lanes|=$,$a|=$;bt=nt.action,Os&&a(h,bt),h=nt.hasEagerState?nt.eagerState:a(h,bt)}else $={lane:bt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},k===null?(w=k=$,x=h):k=k.next=$,xe.lanes|=bt,$a|=bt;nt=nt.next}while(nt!==null&&nt!==n);if(k===null?x=h:k.next=w,!li(h,e.memoizedState)&&(vn=!0,ct&&(a=xr,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=k,r.lastRenderedState=h}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function uh(e){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do h=e(h,x.action),x=x.next;while(x!==c);li(h,n.memoizedState)||(vn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,r]}function $0(e,n,a){var r=xe,c=hn(),h=Te;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!li((je||c).memoizedState,a);if(x&&(c.memoizedState=a,vn=!0),c=c.queue,hh(ng.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||x||gn!==null&&(gn.memoizedState.tag&1)!==0,br(e?9:8,{destroy:void 0},eg.bind(null,r,c,a,n),null),e){if(r.flags|=2048,Qe===null)throw Error(s(349));h||(ya&127)!==0||tg(r,n,a)}return a}function tg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=bu(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function eg(e,n,a,r){n.value=a,n.getSnapshot=r,ig(n)&&ag(e)}function ng(e,n,a){return a(function(){ig(n)&&ag(e)})}function ig(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!li(e,a)}catch{return!0}}function ag(e){var n=Es(e,2);n!==null&&ai(n,e,2)}function ch(e){var n=Wn();if(typeof e=="function"){var a=e;if(e=a(),Os){Sn(!0);try{a()}finally{Sn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},n}function sg(e,n,a,r){return e.baseState=a,lh(e,je,typeof r=="function"?r:xa)}function wM(e,n,a,r,c){if(Du(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};Tt.T!==null?a(!0):h.isTransition=!1,r(h),a=n.pending,a===null?(h.next=n.pending=h,rg(n,h)):(h.next=a.next,n.pending=a.next=h)}}function rg(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var h=Tt.T,x={};x.types=h!==null?h.types:null,Tt.T=x;try{var w=a(c,r),k=Tt.S;k!==null&&k(x,w),og(e,n,w)}catch(nt){fh(e,n,nt)}finally{h!==null&&x.types!==null&&(h.types=x.types),Tt.T=h}}else try{h=a(c,r),og(e,n,h)}catch(nt){fh(e,n,nt)}}function og(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){lg(e,n,r)},function(r){return fh(e,n,r)}):lg(e,n,a)}function lg(e,n,a){n.status="fulfilled",n.value=a,ug(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,rg(e,a)))}function fh(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,ug(n),n=n.next;while(n!==r)}e.action=null}function ug(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function cg(e,n){return n}function fg(e,n){if(Te){var a=Qe.formState;if(a!==null){t:{var r=xe;if(Te){if(Je){e:{for(var c=Je,h=bi;c.nodeType!==8;){if(!h){c=null;break e}if(c=Ri(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Je=Ri(c.nextSibling),r=c.data==="F!";break t}}Ga(r)}r=!1}r&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cg,lastRenderedState:n},a.queue=r,a=Dg.bind(null,xe,r),r.dispatch=a,r=ch(!1),h=vh.bind(null,xe,!1,r.queue),r=Wn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=wM.bind(null,xe,c,h,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function hg(e){var n=hn();return dg(n,je,e)}function dg(e,n,a){if(n=lh(e,n,cg)[0],e=Ru(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Qo(n)}catch(x){throw x===Sr?vu:x}else r=n;n=hn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,br(9,{destroy:void 0},CM.bind(null,c,a),null)),[r,h,e]}function CM(e,n){e.action=n}function pg(e){var n=hn(),a=je;if(a!==null)return dg(n,a,e);hn(),n=n.memoizedState,a=hn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function br(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=xe.updateQueue,n===null&&(n=bu(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function mg(){return hn().memoizedState}function wu(e,n,a,r){var c=Wn();xe.flags|=e,c.memoizedState=br(1|n,{destroy:void 0},a,r===void 0?null:r)}function Cu(e,n,a,r){var c=hn();r=r===void 0?null:r;var h=c.memoizedState.inst;je!==null&&r!==null&&nh(r,je.memoizedState.deps)?c.memoizedState=br(n,h,a,r):(xe.flags|=e,c.memoizedState=br(1|n,h,a,r))}function gg(e,n){wu(8390656,8,e,n)}function hh(e,n){Cu(2048,8,e,n)}function DM(e){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=bu(),xe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function vg(e){var n=hn().memoizedState;return DM({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function _g(e,n){return Cu(4,2,e,n)}function yg(e,n){return Cu(4,4,e,n)}function xg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Sg(e,n,a){a=a!=null?a.concat([e]):null,Cu(4,4,xg.bind(null,n,e),a)}function dh(){}function Mg(e,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&nh(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Eg(e,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&nh(n,r[1]))return r[0];if(r=e(),Os){Sn(!0);try{e()}finally{Sn(!1)}}return a.memoizedState=[r,n],r}function ph(e,n,a){return a===void 0||(ya&1073741824)!==0&&(De&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Lv(),xe.lanes|=e,$a|=e,a)}function Tg(e,n,a,r){return li(a,n)?a:Wa.current!==null?(e=ph(e,a,r),li(e,n)||(vn=!0),e):(ya&106)===0||(ya&1073741824)!==0&&(De&261930)===0?(vn=!0,e.memoizedState=a):(e=Lv(),xe.lanes|=e,$a|=e,n)}function bg(e,n,a,r,c){var h=Lt.p;Lt.p=h!==0&&8>h?h:8;var x=Tt.T,w={};w.types=x!==null?x.types:null,Tt.T=w,vh(e,!1,n,a);try{var k=c(),nt=Tt.S;if(nt!==null&&nt(w,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var ct=bM(k,r);Ko(e,n,ct,di(e))}else Ko(e,n,r,di(e))}catch(bt){Ko(e,n,{then:function(){},status:"rejected",reason:bt},di())}finally{Lt.p=h,x!==null&&w.types!==null&&(x.types=w.types),Tt.T=x}}function NM(){}function mh(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Ag(e).queue;bg(e,c,n,F,a===null?NM:function(){return Rg(e),a(r)})}function Ag(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:F},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rg(e){var n=Ag(e);n.next===null&&(n=e.alternate.memoizedState),Ko(e,n.next.queue,{},di())}function gh(){return Un(Xr)}function wg(){return hn().memoizedState}function Cg(){return hn().memoizedState}function UM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();e=qa(a);var r=Ya(n,e,a);r!==null&&(ai(r,n,a),qo(r,n,a)),n={cache:Xf()},e.payload=n;return}n=n.return}}function LM(e,n,a){var r=di();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Du(e)?Ng(n,a):(a=Pf(e,n,a,r),a!==null&&(ai(a,e,r),Ug(a,n,r)))}function Dg(e,n,a){var r=di();Ko(e,n,a,r)}function Ko(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Du(e))Ng(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,w=h(x,a);if(c.hasEagerState=!0,c.eagerState=w,li(w,x))return ou(e,n,c,0),Qe===null&&ru(),!1}catch{}finally{}if(a=Pf(e,n,c,r),a!==null)return ai(a,e,r),Ug(a,n,r),!0}return!1}function vh(e,n,a,r){if(r={lane:2,revertLane:od(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Du(e)){if(n)throw Error(s(479))}else n=Pf(e,a,r,2),n!==null&&ai(n,e,2)}function Du(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function Ng(e,n){Er=Eu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ug(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,at(e,a)}}var Nu={readContext:Un,use:Au,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},Lg={readContext:Un,use:Au,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:gg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wu(4194308,4,xg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wu(4194308,4,e,n)},useInsertionEffect:function(e,n){wu(4,2,e,n)},useMemo:function(e,n){var a=Wn();n=n===void 0?null:n;var r=e();if(Os){Sn(!0);try{e()}finally{Sn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Wn();if(a!==void 0){var c=a(n);if(Os){Sn(!0);try{a(n)}finally{Sn(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=LM.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=ch(e);var n=e.queue,a=Dg.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:dh,useDeferredValue:function(e,n){var a=Wn();return ph(a,e,n)},useTransition:function(){var e=ch(!1);return e=bg.bind(null,xe,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=xe,c=Wn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(De&127)!==0||tg(r,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,gg(ng.bind(null,r,h,e),[e]),r.flags|=2048,br(9,{destroy:void 0},eg.bind(null,r,h,a,n),null),a},useId:function(){var e=Wn(),n=Qe.identifierPrefix;if(Te){var a=Zi,r=ji;a=(r&~(1<<32-Bn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=AM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:gh,useFormState:fg,useActionState:fg,useOptimistic:function(e){var n=Wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vh.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:oh,useCacheRefresh:function(){return Wn().memoizedState=UM.bind(null,xe)},useEffectEvent:function(e){var n=Wn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Og={readContext:Un,use:Au,useCallback:Mg,useContext:Un,useEffect:hh,useImperativeHandle:Sg,useInsertionEffect:_g,useLayoutEffect:yg,useMemo:Eg,useReducer:Ru,useRef:mg,useState:function(){return Ru(xa)},useDebugValue:dh,useDeferredValue:function(e,n){var a=hn();return Tg(a,je.memoizedState,e,n)},useTransition:function(){var e=Ru(xa)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:$0,useId:wg,useHostTransitionStatus:gh,useFormState:hg,useActionState:hg,useOptimistic:function(e,n){var a=hn();return sg(a,je,e,n)},useMemoCache:oh,useCacheRefresh:Cg,useEffectEvent:vg},OM={readContext:Un,use:Au,useCallback:Mg,useContext:Un,useEffect:hh,useImperativeHandle:Sg,useInsertionEffect:_g,useLayoutEffect:yg,useMemo:Eg,useReducer:uh,useRef:mg,useState:function(){return uh(xa)},useDebugValue:dh,useDeferredValue:function(e,n){var a=hn();return je===null?ph(a,e,n):Tg(a,je.memoizedState,e,n)},useTransition:function(){var e=uh(xa)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:$0,useId:wg,useHostTransitionStatus:gh,useFormState:pg,useActionState:pg,useOptimistic:function(e,n){var a=hn();return je!==null?sg(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:oh,useCacheRefresh:Cg,useEffectEvent:vg};function _h(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yh={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=di(),c=qa(r);c.payload=n,a!=null&&(c.callback=a),n=Ya(e,c,r),n!==null&&(ai(n,e,r),qo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=di(),c=qa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ya(e,c,r),n!==null&&(ai(n,e,r),qo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=di(),r=qa(a);r.tag=2,n!=null&&(r.callback=n),n=Ya(e,r,a),n!==null&&(ai(n,e,a),qo(n,e,a))}};function Pg(e,n,a,r,c,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,h,x):n.prototype&&n.prototype.isPureReactComponent?!Io(a,r)||!Io(c,h):!0}function zg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&yh.enqueueReplaceState(n,n.state,null)}function Ps(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Ig(e){su(e)}function Bg(e){console.error(e)}function Fg(e){su(e)}function Uu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Hg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function xh(e,n,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Uu(e,n)},a}function Gg(e){return e=qa(e),e.tag=3,e}function Vg(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=r.value;e.payload=function(){return c(h)},e.callback=function(){Hg(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Hg(n,a,r),typeof c!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function PM(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Rs(n,a,c,!0),a=Ln.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Hn===null?$u():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===_u?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),ad(e,r,c)),!1;case 22:return a.flags|=65536,r===_u?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),ad(e,r,c)),!1}throw Error(s(435,a.tag))}return ad(e,r,c),$u(),!1}if(Te)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Hf&&(e=Error(s(422),{cause:r}),Ho(Mi(e,a)))):(r!==Hf&&(n=Error(s(423),{cause:r}),Ho(Mi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Mi(r,a),c=xh(e.stateNode,r,c),Qf(e,c),un!==4&&(un=2)),!1;var h=Error(s(520),{cause:r});if(h=Mi(h,a),sl===null?sl=[h]:sl.push(h),un!==4&&(un=2),n===null)return!0;r=Mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=xh(a.stateNode,r,e),Qf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ts===null||!ts.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Gg(c),Vg(c,e,a,r),Qf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Sh=Error(s(461)),vn=!1;function En(e,n,a,r){n.child=e===null?Y0(n,null,a,r):Ls(n,e.child,a,r)}function kg(e,n,a,r,c){a=a.render;var h=n.ref;if("ref"in r){var x={};for(var w in r)w!=="ref"&&(x[w]=r[w])}else x=r;return ws(n),r=ih(e,n,a,x,h,c),w=ah(),e!==null&&!vn?(sh(e,n,c),Sa(e,n,c)):(Te&&w&&fu(n),n.flags|=1,En(e,n,r,c),n.child)}function Xg(e,n,a,r,c){if(e===null){var h=a.type;return typeof h=="function"&&!zf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,qg(e,n,h,r,c)):(e=uu(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Ch(e,c)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(x,r)&&e.ref===n.ref)return Sa(e,n,c)}return n.flags|=1,e=ma(h,r),e.ref=n.ref,e.return=n,n.child=e}function qg(e,n,a,r,c){if(e!==null){var h=e.memoizedProps;if(Io(h,r)&&e.ref===n.ref)if(vn=!1,n.pendingProps=r=h,Ch(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Sa(e,n,c)}return Mh(e,n,a,r,c)}function Yg(e,n,a,r){var c=r.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~h}else r=0,n.child=null;return Wg(e,n,h,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gu(n,h!==null?h.cachePool:null),h!==null?Z0(n,h):Jf(),Q0(n);else return r=n.lanes=536870912,Wg(e,n,h!==null?h.baseLanes|a:a,a,r)}else h!==null?(gu(n,h.cachePool),Z0(n,h),Za(),n.memoizedState=null):(e!==null&&gu(n,null),Jf(),Za());return En(e,n,c,a),n.child}function Jo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wg(e,n,a,r,c){var h=Yf();return h=h===null?null:{parent:mn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&gu(n,null),Jf(),Q0(n),e!==null&&Rs(e,n,r,!0),n.childLanes=c,null}function Lu(e,n){return n=Ou({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function jg(e,n,a){return Ls(n,e.child,null,a),e=Lu(n,n.pendingProps),e.flags|=2,ui(n),n.memoizedState=null,e}function zM(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(r.mode==="hidden")return e=Lu(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Jo(null,e);if(th(n),(e=Je)?(e=x_(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=N0(e),a.return=n,n.child=a,wn=n,Je=null)):e=null,e===null)throw Ga(n);return n.lanes=536870912,null}return Lu(n,r)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(th(n),c)if(n.flags&256)n.flags&=-257,n=jg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||Rs(e,n,a,!1),c=(a&e.childLanes)!==0,vn||c){if(Wa.current===null){if(r=Qe,r!==null&&(x=ht(r,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,Es(e,x),ai(r,e,x),Sh;$u()}n=jg(e,n,a)}else e=h.treeContext,Je=Ri(x.nextSibling),wn=n,Te=!0,Ha=null,bi=!1,e!==null&&O0(n,e),n=Lu(n,r),n.flags|=134221824;return n}return e=ma(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ar(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Mh(e,n,a,r,c){return ws(n),a=ih(e,n,a,r,void 0,c),r=ah(),e!==null&&!vn?(sh(e,n,c),Sa(e,n,c)):(Te&&r&&fu(n),n.flags|=1,En(e,n,a,c),n.child)}function Zg(e,n,a,r,c,h){return ws(n),n.updateQueue=null,a=J0(n,r,a,c),K0(e),r=ah(),e!==null&&!vn?(sh(e,n,h),Sa(e,n,h)):(Te&&r&&fu(n),n.flags|=1,En(e,n,a,h),n.child)}function Qg(e,n,a,r,c){if(ws(n),n.stateNode===null){var h=gr,x=a.contextType;typeof x=="object"&&x!==null&&(h=Un(x)),h=new a(r,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=yh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=r,h.state=n.memoizedState,h.refs={},jf(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?Un(x):gr,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(_h(n,a,x,r),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&yh.enqueueReplaceState(h,h.state,null),Wo(n,r,h,c),Yo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){h=n.stateNode;var w=n.memoizedProps,k=Ps(a,w);h.props=k;var nt=h.context,ct=a.contextType;x=gr,typeof ct=="object"&&ct!==null&&(x=Un(ct));var bt=a.getDerivedStateFromProps;ct=typeof bt=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ct||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||nt!==x)&&zg(n,h,r,x),Xa=!1;var $=n.memoizedState;h.state=$,Wo(n,r,h,c),Yo(),nt=n.memoizedState,w||$!==nt||Xa?(typeof bt=="function"&&(_h(n,a,bt,r),nt=n.memoizedState),(k=Xa||Pg(n,a,k,r,$,nt,x))?(ct||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),h.props=r,h.state=nt,h.context=x,r=k):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{h=n.stateNode,Zf(e,n),x=n.memoizedProps,ct=Ps(a,x),h.props=ct,bt=n.pendingProps,$=h.context,nt=a.contextType,k=gr,typeof nt=="object"&&nt!==null&&(k=Un(nt)),w=a.getDerivedStateFromProps,(nt=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==bt||$!==k)&&zg(n,h,r,k),Xa=!1,$=n.memoizedState,h.state=$,Wo(n,r,h,c),Yo();var lt=n.memoizedState;x!==bt||$!==lt||Xa||e!==null&&e.dependencies!==null&&pu(e.dependencies)?(typeof w=="function"&&(_h(n,a,w,r),lt=n.memoizedState),(ct=Xa||Pg(n,a,ct,r,$,lt,k)||e!==null&&e.dependencies!==null&&pu(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,lt,k),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,lt,k)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),h.props=r,h.state=lt,h.context=k,r=ct):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),r=!1)}return h=r,Ar(e,n),r=(n.flags&128)!==0,h||r?(h=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&r?(n.child=Ls(n,e.child,null,c),n.child=Ls(n,null,a,c)):En(e,n,a,c),n.memoizedState=h.state,e=n.child):e=Sa(e,n,c),e}function Kg(e,n,a,r){return bs(),n.flags|=256,En(e,n,a,r),n.child}var Eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Th(e){return{baseLanes:e,cachePool:H0()}}function bh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function Jg(e,n,a){var r=n.pendingProps,c=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(c?ja(n):Za(),(e=Je)?(e=x_(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=N0(e),a.return=n,n.child=a,wn=n,Je=null)):e=null,e===null)throw Ga(n);return Td(e)?n.lanes=32:n.lanes=536870912,null}return h=r.children,r=r.fallback,c?(Za(),c=n.mode,h=Ou({mode:"hidden",children:h},c),r=Ts(r,c,a,null),h.return=n,r.return=n,h.sibling=r,n.child=h,r=n.child,r.memoizedState=Th(a),r.childLanes=bh(e,x,a),n.memoizedState=Eh,Jo(null,r)):(ja(n),Ah(n,h))}var w=e.memoizedState;if(w!==null){var k=w.dehydrated;if(k!==null)return IM(e,n,h,x,r,k,w,a)}return c?(Za(),c=r.fallback,h=n.mode,w=e.child,k=w.sibling,r=ma(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&1206910976,k!==null?c=ma(k,c):(c=Ts(c,h,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Jo(null,r),r=n.child,c=e.child.memoizedState,c===null?c=Th(a):(h=c.cachePool,h!==null?(w=mn._currentValue,h=h.parent!==w?{parent:w,pool:w}:h):h=H0(),c={baseLanes:c.baseLanes|a,cachePool:h}),r.memoizedState=c,r.childLanes=bh(e,x,a),n.memoizedState=Eh,Jo(e.child,r)):(ja(n),a=e.child,e=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Ah(e,n){return n=Ou({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ou(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Pu(e,n,a){return Ls(n,e.child,null,a),e=Ah(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function IM(e,n,a,r,c,h,x,w){if(a)return n.flags&256?(ja(n),n.flags&=-257,Pu(e,n,w)):n.memoizedState!==null?(Za(),n.child=e.child,n.flags|=128,null):(Za(),h=c.fallback,x=n.mode,c=Ou({mode:"visible",children:c.children},x),h=Ts(h,x,w,null),h.flags|=2,c.return=n,h.return=n,c.sibling=h,n.child=c,Ls(n,e.child,null,w),c=n.child,c.memoizedState=Th(w),c.childLanes=bh(e,r,w),n.memoizedState=Eh,Jo(null,c));if(ja(n),Td(h)){if(r=h.nextSibling&&h.nextSibling.dataset,r)var k=r.dgst;return r=k,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Ho({value:c,source:null,stack:null})),Pu(e,n,w)}if(vn||Rs(e,n,w,!1),r=(w&e.childLanes)!==0,vn||r){if(Wa.current!==null)return Pu(e,n,w);if(r=Qe,r!==null&&(c=ht(r,w),c!==0&&c!==x.retryLane))throw x.retryLane=c,Es(e,c),ai(r,e,c),Sh;return Ed(h)||$u(),Pu(e,n,w)}return Ed(h)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,Je=Ri(h.nextSibling),wn=n,Te=!0,Ha=null,bi=!1,e!==null&&O0(n,e),n=Ah(n,c.children),n.flags|=134221824,n)}function $g(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),du(e.return,n,a)}function tv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Mu(a)===null&&(n=e),e=e.sibling}return n}function zu(e,n,a,r,c,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=h)}function Rh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function wh(e,n,a){var r=n.pendingProps,c=r.revealOrder,h=r.tail;r=r.children;var x=On.current;if(n.flags&128)return jo(n,x),null;var w=(x&2)!==0;if(w?(x=x&1|2,n.flags|=128):x&=1,jo(n,x),c==="backwards"&&e!==null?(Rh(e),En(e,n,r,a),Rh(e)):En(e,n,r,a),r=Te?Fo:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$g(e,a,n);else if(e.tag===19)$g(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=tv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Rh(n)),zu(n,!0,c,null,h,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Mu(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}zu(n,!0,a,null,h,r);break;case"together":zu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=tv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),zu(n,!1,c,a,h,r)}return n.child}function ev(e,n,a){var r=n.pendingProps;return Va(n,n.type,r.value),En(e,n,r.children,a),n.child}function Sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Rs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ch(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pu(e)))}function BM(e,n,a){switch(n.tag){case 3:I(n,n.stateNode.containerInfo),Va(n,mn,e.memoizedState.cache),bs();break;case 27:case 5:rt(n);break;case 4:I(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,th(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ja(n),n.flags|=128,null;r=Rs(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Jg(e,n,a):(ja(n),e=Sa(e,n,a),e!==null?e.sibling:null)}ja(n);break;case 19:if(n.flags&128)return wh(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Rs(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return wh(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),jo(n,On.current),r)break;return null;case 22:return n.lanes=0,Yg(e,n,a,n.pendingProps);case 24:Va(n,mn,e.memoizedState.cache)}return Sa(e,n,a)}function nv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Ch(e,a)&&(n.flags&128)===0)return vn=!1,BM(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Te&&(n.flags&1048576)!==0&&L0(n,Fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Ns(n.elementType),n.type=e,typeof e=="function")zf(e)?(r=Ps(e,r),n.tag=1,n=Qg(null,n,e,r,a)):(n.tag=0,n=Mh(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===z){n.tag=11,n=kg(null,n,e,r,a);break t}else if(c===ut){n.tag=14,n=Xg(null,n,e,r,a);break t}else if(c===Y){n.tag=10,n.type=e,n=ev(null,n,a);break t}}throw n=Rt(e)||e,Error(s(306,n,""))}}return n;case 0:return Mh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Ps(r,n.pendingProps),Qg(e,n,r,c,a);case 3:t:{if(I(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var h=n.memoizedState;c=h.element,Zf(e,n),Wo(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Va(n,mn,r),r!==h.cache&&kf(n,[mn],a,!0),Yo(),r=x.element,h.isDehydrated)if(h={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Kg(e,n,r,a);break t}else if(r!==c){c=Mi(Error(s(424)),n),Ho(c),n=Kg(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=Ri(e.firstChild),wn=n,Te=!0,Ha=null,bi=!0,a=Y0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(bs(),r===c){n=Sa(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return Ar(e,n),e===null?(a=R_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(n.stateNode=r_(n.type,n.pendingProps,oe.current,n)):n.memoizedState=R_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return rt(n),e===null&&Te&&(r=n.stateNode=E_(n.type,n.pendingProps,oe.current),wn=n,bi=!0,c=Je,is(n.type)?(bd=c,Je=Ri(r.firstChild)):Je=c),En(e,n,n.pendingProps.children,a),Ar(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((c=r=Je)&&(r=U1(r,n.type,n.pendingProps,bi),r!==null?(n.stateNode=r,wn=n,Je=Ri(r.firstChild),bi=!1,c=!0):c=!1),c||Ga(n)),rt(n),c=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,r=h.children,gd(c,h)?r=null:x!==null&&gd(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=ih(e,n,RM,null,null,a),Xr._currentValue=c),Ar(e,n),En(e,n,r,a),n.child;case 6:return e===null&&Te&&((e=a=Je)&&(a=L1(a,n.pendingProps,bi),a!==null?(n.stateNode=a,wn=n,Je=null,e=!0):e=!1),e||Ga(n)),null;case 13:return Jg(e,n,a);case 4:return I(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ls(n,null,r,a):En(e,n,r,a),n.child;case 11:return kg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Ar(e,n),En(e,n,r,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return ev(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,ws(n),c=Un(c),r=r(c),n.flags|=1,En(e,n,r,a),n.child;case 14:return Xg(e,n,n.type,n.pendingProps,a);case 15:return qg(e,n,n.type,n.pendingProps,a);case 19:return wh(e,n,a);case 31:return zM(e,n,a);case 22:return Yg(e,n,a,n.pendingProps);case 24:return ws(n),r=Un(mn),e===null?(c=Yf(),c===null&&(c=Qe,h=Xf(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:r,cache:c},jf(n),Va(n,mn,c)):((e.lanes&a)!==0&&(Zf(e,n),Wo(n,null,null,a),Yo()),c=e.memoizedState,h=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Va(n,mn,r)):(r=h.cache,Va(n,mn,r),r!==c.cache&&kf(n,[mn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Te&&fu(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Ar(e,n),En(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(e){e.flags|=4}function Dh(e,n,a,r,c){var h;if((h=(e.mode&32)!==0)&&(h=a===null?N_(n,r):N_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),h){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Iv())e.flags|=8192;else throw Us=_u,Wf}else e.flags&=-16777217}function iv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U_(n))if(Iv())e.flags|=8192;else throw Us=_u,Wf}function Iu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Zl():536870912,e.lanes|=n,Nr|=n)}function $o(e,n){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function FM(e,n,a){var r=n.pendingProps;switch(Ff(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_a(mn),A(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yr(n)?Ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gf())),$e(n),null;case 26:var c=n.type,h=n.memoizedState;return e===null?(Ma(n),h!==null?($e(n),iv(n,h)):($e(n),Dh(n,c,null,r,a))):h?h!==e.memoizedState?(Ma(n),$e(n),iv(n,h)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ma(n),$e(n),Dh(n,c,e,r,a)),null;case 27:if(ft(n),a=oe.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}e=Nt.current,yr(n)?P0(n):(e=E_(c,r,a),n.stateNode=e,Ma(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(ft(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(h=Nt.current,yr(n))P0(n);else{var x=cl(oe.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?h.multiple=!0:r.size&&(h.size=r.size);break;default:h=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}h[kt]=n,h[ie]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(zn(h,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ma(n)}}return $e(n),n.subtreeFlags&=-33554433,Dh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=oe.current,yr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=wn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[kt]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||n_(e.nodeValue,a)),e||Ga(n,!0)}else e=cl(e).createTextNode(r),e[kt]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=yr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[kt]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=yr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[kt]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),c=!1}else c=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Iu(n,n.updateQueue),$e(n),null);case 4:return A(),e===null&&fd(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return _a(n.type),$e(n),null;case 19:if(eh(n),r=n.memoizedState,r===null)return $e(n),null;if(c=(n.flags&128)!==0,h=r.rendering,h===null)if(c)$o(r,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Mu(e),h!==null){for(n.flags|=128,$o(r,!1),e=h.updateQueue,n.updateQueue=e,Iu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)D0(a,e),a=a.sibling;return jo(n,On.current&1|2),Te&&ga(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&K()>Zu&&(n.flags|=128,c=!0,$o(r,!1),n.lanes=4194304)}else{if(!c)if(e=Mu(h),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Iu(n,e),$o(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!h.alternate&&!Te)return $e(n),null}else 2*K()-r.renderingStartTime>Zu&&a!==536870912&&(n.flags|=128,c=!0,$o(r,!1),n.lanes=4194304);r.isBackwards?(h.sibling=n.child,n.child=h):(e=r.last,e!==null?e.sibling=h:n.child=h,r.last=h)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=K(),e.sibling=null,h=On.current,h=c?h&1|2:h&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Te?jo(n,h):(a=h,wt(Ln,n),wt(On,a),Hn===null&&(Hn=n)),Te&&ga(n,r.treeForkCount),e}return $e(n),null;case 22:case 23:return ui(n),$f(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Iu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&gt(Ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(mn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function HM(e,n){switch(Ff(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _a(mn),A(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ui(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return eh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return A(),null;case 10:return _a(n.type),null;case 22:case 23:return ui(n),$f(),e!==null&&gt(Ds),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return _a(mn),null;case 25:return null;default:return null}}function av(e,n){switch(Ff(n),n.tag){case 3:_a(mn),A();break;case 26:case 27:case 5:ft(n);break;case 4:A();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:eh(n);break;case 10:_a(n.type);break;case 22:case 23:ui(n),$f(),e!==null&&gt(Ds);break;case 24:_a(mn)}}function tl(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var h=a.create,x=a.inst;r=h(),x.destroy=r}a=a.next}while(a!==c)}}catch(w){Xe(n,n.return,w)}}function Qa(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var h=c.next;r=h;do{if((r.tag&e)===e){var x=r.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,c=n;var k=a,nt=w;try{nt()}catch(ct){Xe(c,k,ct)}}}r=r.next}while(r!==h)}}catch(ct){Xe(n,n.return,ct)}}function sv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{j0(n,a)}catch(r){Xe(e,e.return,r)}}}function rv(e,n,a){a.props=Ps(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Xe(e,n,r)}}function Qi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,h=da(e.memoizedProps,c);(c.ref===null||c.ref.name!==h)&&(c.ref=d_(h)),r=c.ref;break;case 7:if(e.stateNode===null){var x=new pi(e);g(e.child,!1,D1,x,void 0,void 0),e.stateNode=x}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(w){Xe(e,n,w)}}function Pn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Xe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Xe(e,n,c)}else a.current=null}function Bu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)y_(e.stateNode,n[a])}function ov(e){for(var n=e.return;n!==null&&(Uh(n)&&y_(e.stateNode,n.stateNode),!Nh(n));)n=n.return}function el(e){for(var n=e.return;n!==null&&(Uh(n)&&N1(e.stateNode,n.stateNode),!Nh(n));)n=n.return}function Nh(e){return e.tag===5||e.tag===3||e.tag===27}function Uh(e){return e&&e.tag===7&&e.stateNode!==null}function Lh(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Xe(e,e.return,c)}}function Oh(e,n,a){try{var r=e.stateNode;h1(r,e.type,a,n),r[ie]=n}catch(c){Xe(e,e.return,c)}}function lv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&is(e.type)||e.tag===4}function Ph(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||lv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&is(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zh(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),Bu(e,r),ze=!0;else if(c!==4&&(c===27&&(Bu(e,r),r=null,is(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(zh(e,n,a,r),e=e.sibling;e!==null;)zh(e,n,a,r),e=e.sibling}function Fu(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Bu(e,r),ze=!0;else if(c!==4&&(c===27&&(Bu(e,r),r=null,is(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Fu(e,n,a,r),e=e.sibling;e!==null;)Fu(e,n,a,r),e=e.sibling}function uv(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);zn(n,r,a),n[kt]=e,n[ie]=a}catch(h){Xe(e,e.return,h)}}var Hu=!1,ci=null;function cv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Hu=!0)}var Ki=null;function fv(){var e=Ki;return Ki=null,e}var ei=0;function Rr(e,n,a,r,c){return ei=0,hv(e.child,n,a,r,c)}function hv(e,n,a,r,c){for(var h=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(r!==null){var w=yd(x);r.push(w),w.view&&(h=!0)}else h||yd(x).view&&(h=!0);Hu=!0,f_(x,ei===0?n:n+"_"+ei,a),ei++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||hv(e.child,n,a,r,c)&&(h=!0));e=e.sibling}return h}function Ji(e,n){for(;e!==null;)e.tag===5?h_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Ji(e.child,n)),e=e.sibling}function Gu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Gu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(Rr(e,a,n,null,!1)||Ji(e.child,!1))}e=e.sibling}}function Ih(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=da(r,a),h=pa(r.default,a.paired?r.share:r.enter);h!=="none"?Rr(e,c,h,null,!1)?(Gu(e),a.paired||n||Pr(e,r.onEnter)):Ji(e.child,!1):Gu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ih(e,n),e=e.sibling;else Gu(e)}function Bh(e){if(ci!==null&&ci.size!==0){var n=ci;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var h=pa(a.default,a.share);if(h!=="none"&&(Rr(e,r,h,null,!1)?(h=e.stateNode,c.paired=h,h.paired=c,Pr(e,a.onShare)):Ji(e.child,!1)),n.delete(r),n.size===0)break}}}Bh(e)}e=e.sibling}}}function Fh(e){if(e.tag===30){var n=e.memoizedProps,a=da(n,e.stateNode),r=ci!==null?ci.get(a):void 0,c=pa(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Rr(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,ci.delete(a),Pr(e,n.onShare)):Pr(e,n.onExit):Ji(e.child,!1)),ci!==null&&Bh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Fh(e),e=e.sibling;else ci!==null&&Bh(e)}function dv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=da(n,e.stateNode);n=pa(n.default,n.update),e.flags&=-5,n!=="none"&&Rr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&dv(e);e=e.sibling}}function Hh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Ji(e.child,!1))}Hh(e)}e=e.sibling}}function Vu(e){if(e.tag===30)e.stateNode.paired=null,Ji(e.child,!1),Hh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Vu(e),e=e.sibling;else Hh(e)}function pv(e){for(e=e.child;e!==null;)e.tag===30?Ji(e.child,!1):(e.subtreeFlags&33554432)!==0&&pv(e),e=e.sibling}function Gh(e,n,a,r,c,h,x){for(var w=!1;n!==null;){if(n.tag===5){var k=n.stateNode;if(h!==null&&ei<h.length){var nt=h[ei],ct=yd(k);(nt.view||ct.view)&&(w=!0);var bt;if(bt=(e.flags&4)===0)if(ct.clip)bt=!0;else{bt=nt.rect;var $=ct.rect;bt=bt.y!==$.y||bt.x!==$.x||bt.height!==$.height||bt.width!==$.width}bt&&(e.flags|=4),ct.abs?ct=!nt.abs:(nt=nt.rect,ct=ct.rect,ct=nt.height!==ct.height||nt.width!==ct.width),ct&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&f_(k,ei===0?a:a+"_"+ei,c),w&&(e.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(k,ei===0?r:r+"_"+ei,n.memoizedProps)),ei++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:Gh(e,n.child,a,r,c,h,x)&&(w=!0));n=n.sibling}return w}function mv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=da(a,r),h=pa(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,r=e;var w=e.child;ei=0,c=Gh(r,w,c,c,h,x,!1),(e.flags&4)!==0&&c&&Pr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&mv(e);e=e.sibling}}var Cn=!1,Ge=!1,$i=!1,Vh=!1,gv=typeof WeakSet=="function"?WeakSet:Set,Dn=null,ta=!1,nl=!1,ku=!1,kh=!1;function GM(e,n,a){if(e=e.containerInfo,pd=qr,e=x0(e),Cf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var h=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{r.nodeType,x.nodeType}catch{r=null;break t}var w=0,k=-1,nt=-1,ct=0,bt=0,$=e,lt=null;e:for(;;){for(var qt;$!==r||h!==0&&$.nodeType!==3||(k=w+h),$!==x||c!==0&&$.nodeType!==3||(nt=w+c),$.nodeType===3&&(w+=$.nodeValue.length),(qt=$.firstChild)!==null;)lt=$,$=qt;for(;;){if($===e)break e;if(lt===r&&++ct===h&&(k=w),lt===x&&++bt===c&&(nt=w),(qt=$.nextSibling)!==null)break;$=lt,lt=$.parentNode}$=qt}r=k===-1||nt===-1?null:{start:k,end:nt}}else r=null}r=r||{start:0,end:0}}else r=null;for(md={focusedElem:e,selectionRange:r},qr=!1,a=(a&335544064)===a,Dn=n,n=a?9270:1024;Dn!==null;){if(e=Dn,a&&(r=e.deletions,r!==null))for(h=0;h<r.length;h++)a&&Fh(r[h]);if(e.alternate===null&&(e.flags&2)!==0)a&&cv(e),Xu(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Fh(r),Xu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&cv(e),Xu(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Dn=r):(a&&dv(e),Xu(a))}}ci=null}function Xu(e){for(;Dn!==null;){var n=Dn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var h=n.stateNode;try{var x=Ps(n.type,c);a=h.getSnapshotBeforeUpdate(x,r),h.__reactInternalSnapshotBeforeUpdate=a}catch(w){Xe(n,n.return,w)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Md(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Md(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=da(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=pa(c.default,c.update),c!=="none"&&Rr(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Dn=r;break}Dn=n.return}}function vv(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),r&4&&tl(5,a);break;case 1:if(ea(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Xe(a,a.return,x)}else{var c=Ps(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Xe(a,a.return,x)}}r&64&&sv(a),r&512&&Qi(a,a.return);break;case 3:if(ea(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{j0(e,n)}catch(x){Xe(a,a.return,x)}}break;case 27:n===null&&r&4&&uv(a);case 26:case 5:ea(e,a),n===null&&r&4&&Lh(a),r&512&&Qi(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),r&4&&Sv(e,a);break;case 13:ea(e,a),r&4&&Mv(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=$M.bind(null,a),O1(e,a))));break;case 22:if(r=a.memoizedState!==null||Cn,!r){var h=n!==null&&n.memoizedState!==null||Ge;n=Cn,c=Ge,Cn=r,(Ge=h)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),zi(e,a,r)):ea(e,a),Cn=n,Ge=c}break;case 30:ea(e,a),r&512&&Qi(a,a.return);break;case 7:r&512&&Qi(a,a.return);default:ea(e,a)}}function Xh(e,n){for(e=e.child;e!==null;)_v(e,n),e=e.sibling}function _v(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,h=e.memoizedProps.style,x=h!=null&&h.hasOwnProperty("display")?h.display:null;c.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(k){Xe(e,e.return,k)}qh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,ze=!0}catch(k){Xe(e,e.return,k)}break;case 18:try{var w=e.stateNode;n?c_(w,!0):c_(e.stateNode,!1)}catch(k){Xe(e,e.return,k)}break;case 22:case 23:e.memoizedState===null&&Xh(e,n);break;default:Xh(e,n)}}function qh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:_v(a,r);break t;case 22:a.memoizedState===null&&qh(a,r);break t;default:qh(a,r)}}e=e.sibling}}function yv(e){var n=e.alternate;n!==null&&(e.alternate=null,yv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ce(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,ni=!1;function Oi(e,n,a){for(a=a.child;a!==null;)xv(e,n,a),a=a.sibling}function xv(e,n,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Ce,a)}catch{}switch(a.tag){case 26:Ge||Pn(a,n),Oi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Pn(a,n),el(a);var r=en,c=ni;is(a.type)&&(en=a.stateNode,ni=!1),Oi(e,n,a),T_(a.stateNode,a.type,a.memoizedProps),en=r,ni=c;break;case 5:Ge||Pn(a,n),el(a);case 6:if(a.tag===6&&el(a),r=en,c=ni,en=null,Oi(e,n,a),en=r,ni=c,en!==null)if(ni)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),ze=!0}catch(h){Xe(a,n,h)}else try{en.removeChild(a.stateNode),ze=!0}catch(h){Xe(a,n,h)}break;case 18:en!==null&&(ni?(e=en,u_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yr(e)):u_(en,a.stateNode));break;case 4:r=en,c=ni,en=a.stateNode.containerInfo,ni=!0,Oi(e,n,a),en=r,ni=c;break;case 0:case 11:case 14:case 15:Qa(2,a,n),Ge||Qa(4,a,n),Oi(e,n,a);break;case 1:Ge||(Pn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&rv(a,n,r)),Oi(e,n,a);break;case 21:Oi(e,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Oi(e,n,a),Ge=r;break;case 30:Pn(a,n),Oi(e,n,a);break;case 7:Ge||Pn(a,n),Oi(e,n,a);break;default:Oi(e,n,a)}}function Sv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yr(e)}catch(a){Xe(n,n.return,a)}}}function Mv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yr(e)}catch(a){Xe(n,n.return,a)}}function VM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new gv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new gv),n;default:throw Error(s(435,e.tag))}}function qu(e,n){var a=VM(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=t1.bind(null,e,r);r.then(c,c)}})}function jn(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var h=r[c],x=e,w=n,k=w;t:for(;k!==null;){switch(k.tag){case 27:if(is(k.type)){en=k.stateNode,ni=!1;break t}break;case 5:en=k.stateNode,ni=!1;break t;case 3:case 4:en=k.stateNode.containerInfo,ni=!0;break t}k=k.return}if(en===null)throw Error(s(160));xv(x,w,h),en=null,ni=!1,x=h.alternate,x!==null&&(x.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ev(n,e,a),n=n.sibling}var Pi=null;function Ev(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var h=0;h<r.length;h++){var x=r[h];x.ref.impl=x.nextImpl}jn(n,e,a),Zn(e),c&4&&(Qa(3,e,e.return),tl(3,e),Qa(5,e,e.return));break;case 1:jn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&64&&Cn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(h=Pi,jn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Cn)e.stateNode=r_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=h.ownerDocument||h;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Ie]||r[kt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),zn(r,n,a),r[kt]=e,Pe(r),n=r;break t;case"link":if(h=D_("link","href",c).get(n+(a.href||""))){for(x=0;x<h.length;x++)if(r=h[x],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(x,1);break e}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;case"meta":if(h=D_("meta","content",c).get(n+(a.content||""))){for(x=0;x<h.length;x++)if(r=h[x],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(x,1);break e}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[kt]=e,Pe(r),n=r}e.stateNode=n}else Cn||Cd(h,e.type,e.stateNode);else e.stateNode=C_(h,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):c.count--,a===null?Cn||Cd(h,e.type,e.stateNode):C_(h,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Oh(e,e.memoizedProps,r.memoizedProps);break;case 27:jn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),r!==null&&c&4&&Oh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(h=$i,$i=!1,jn(n,e,a),$i=h,Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),e.flags&32){n=e.stateNode;try{ur(n,""),ze=!0}catch(ct){Xe(e,e.return,ct)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Oh(e,n,r!==null?r.memoizedProps:n)),c&1024&&(Vh=!0);break;case 6:if(jn(n,e,a),Zn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,ze=!0}catch(ct){Xe(e,e.return,ct)}}break;case 3:if(ze=!1,rc=null,h=Pi,Pi=fl(n.containerInfo),jn(n,e,a),Pi=h,Zn(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Yr(n.containerInfo)}catch(ct){Xe(e,e.return,ct)}Vh&&(Vh=!1,Tv(e)),ze=!1;break;case 4:c=$i,$i=Cn,r=Xm(),h=Pi,Pi=fl(e.stateNode.containerInfo),jn(n,e,a),Zn(e),Pi=h,ze&&nl&&(ku=!0),ze=r,$i=c;break;case 12:jn(n,e,a),Zn(e);break;case 31:jn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,qu(e,n)));break;case 13:jn(n,e,a),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ju=K()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,qu(e,n)));break;case 22:h=e.memoizedState!==null,x=r!==null&&r.memoizedState!==null;var w=Cn,k=Ge,nt=$i;Cn=w||h,$i=nt||h,Ge=k||x,jn(n,e,a),Ge=k,$i=nt,Cn=w,Zn(e),c&8192&&(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,!h||r===null||x||Cn||Ge||(n=x||Ge,a=Cn,r=Ge,Cn=h||Cn,Ge=n,Ka(e,2),Cn=a,Ge=r),!h&&$i||Xh(e,h)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,qu(e,a))));break;case 19:jn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,qu(e,n)));break;case 30:c&512&&(Ge||r===null||Pn(r,r.return)),c=Xm(),h=nl,x=(a&335544064)===a,w=e.memoizedProps,nl=x&&pa(w.default,w.update)!=="none",jn(n,e,a),Zn(e),x&&r!==null&&ze&&(e.flags|=4),nl=h,ze=c;break;case 21:break;case 7:c&512&&(Ge||r===null||Pn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:jn(n,e,a),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(lv(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(Uh(c)){var h=c.stateNode;r===null?r=[h]:r.push(h)}if(Nh(c))break;c=c.return}var x=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var w=a.stateNode,k=Ph(e);Fu(e,k,w,x);break;case 5:var nt=a.stateNode;a.flags&32&&(ur(nt,""),a.flags&=-33);var ct=Ph(e);Fu(e,ct,nt,x);break;case 3:case 4:var bt=a.stateNode.containerInfo,$=Ph(e);zh(e,$,bt,x);break;default:throw Error(s(161))}}catch(lt){Xe(e,e.return,lt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Tv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Tv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,qr=!0,n.reset(),qr=!1),e=e.sibling}}function wr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)bv(n,e),n=n.sibling;else mv(n)}function bv(e,n){var a=e.alternate;if(a===null)Ih(e,!1);else switch(e.tag){case 3:if(kh=ta=!1,fv(),wr(n,e),!ta&&!ku){if(e=Ki,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];h_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),kh=!0}Ki=null;break;case 5:wr(n,e);break;case 4:r=ta,ta=!1,wr(n,e),ta&&(ku=!0),ta=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Ih(e,!1):wr(n,e));break;case 30:r=ta,c=fv(),ta=!1,wr(n,e),ta&&(e.flags|=4);var h=e.memoizedProps,x=e.stateNode;n=da(h,x),x=da(a.memoizedProps,x);var w=pa(h.default,h.update);w==="none"?n=!1:(h=a.memoizedState,a.memoizedState=null,a=e.child,ei=0,n=Gh(e,a,n,x,w,h,!0),ei!==(h===null?0:h.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Pr(e,e.memoizedProps.onUpdate),Ki=c):c!==null&&(c.push.apply(c,Ki),Ki=c),ta=(e.flags&32)!==0?!0:r;break;default:wr(n,e)}}function ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vv(e,n.alternate,n),n=n.sibling}function Ka(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Qa(4,a,a.return),Ka(a,r);break;case 1:Pn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&rv(a,a.return,c),Ka(a,r);break;case 27:(r&2)!==0&&T_(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||el(a),Ka(a,r);break;case 6:el(a);break;case 26:Pn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Ge||c.parentNode.removeChild(c),Ka(a,r);break;case 22:a.memoizedState===null&&Ka(a,r);break;case 30:Pn(a,a.return),Ka(a,r);break;case 7:Pn(a,a.return);default:Ka(a,r)}e=e.sibling}}function zi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,h=n,x=h.flags,w=(a&1)!==0;switch(h.tag){case 0:case 11:case 15:zi(c,h,a),tl(4,h);break;case 1:if(zi(c,h,a),r=h,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ct){Xe(r,r.return,ct)}if(r=h,c=r.updateQueue,c!==null){var k=r.stateNode;try{var nt=c.shared.hiddenCallbacks;if(nt!==null)for(c.shared.hiddenCallbacks=null,c=0;c<nt.length;c++)W0(nt[c],k)}catch(ct){Xe(r,r.return,ct)}}w&&x&64&&sv(h),Qi(h,h.return);break;case 27:(a&2)!==0&&uv(h);case 5:h.tag!==5&&h.tag!==27||ov(h),zi(c,h,a),w&&r===null&&x&4&&Lh(h),Qi(h,h.return);break;case 6:ov(h);break;case 26:k=h.stateNode,h.memoizedState!==null||k===null||Cn||Cd(fl(k.ownerDocument),h.type,k),zi(c,h,a),w&&r===null&&x&4&&Lh(h),Qi(h,h.return);break;case 12:zi(c,h,a);break;case 31:zi(c,h,a),w&&x&4&&Sv(c,h);break;case 13:zi(c,h,a),w&&x&4&&Mv(c,h);break;case 22:h.memoizedState===null&&zi(c,h,a),Qi(h,h.return);break;case 30:zi(c,h,a),Qi(h,h.return);break;case 7:Qi(h,h.return);default:zi(c,h,a)}n=n.sibling}}function Yh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Go(a))}function Wh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Go(e))}function Ai(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Av(e,n,a,r),n=n.sibling;else c&&pv(n)}function Av(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Vu(n);var h=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,r),h&2048&&tl(9,n);break;case 1:Ai(e,n,a,r);break;case 3:Ai(e,n,a,r),c&&kh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),h&2048&&(h=null,n.alternate!==null&&(h=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==h&&(n.refCount++,h!=null&&Go(h)));break;case 12:if(h&2048){Ai(e,n,a,r),h=n.stateNode;try{var x=n.memoizedProps,w=x.id,k=x.onPostCommit;typeof k=="function"&&k(w,n.alternate===null?"mount":"update",h.passiveEffectDuration,-0)}catch(nt){Xe(n,n.return,nt)}}else Ai(e,n,a,r);break;case 31:Ai(e,n,a,r);break;case 13:Ai(e,n,a,r);break;case 23:break;case 22:x=n.stateNode,w=n.alternate,n.memoizedState!==null?(c&&w!==null&&w.memoizedState===null&&Vu(w),x._visibility&2?Ai(e,n,a,r):il(e,n)):(c&&w!==null&&w.memoizedState!==null&&Vu(n),x._visibility&2?Ai(e,n,a,r):(x._visibility|=2,Cr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),h&2048&&Yh(w,n);break;case 24:Ai(e,n,a,r),h&2048&&Wh(n.alternate,n);break;case 30:c&&(h=n.alternate,h!==null&&(Ji(h.child,!0),Ji(n.child,!0))),Ai(e,n,a,r);break;default:Ai(e,n,a,r)}}function Cr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,w=a,k=r,nt=x.flags;switch(x.tag){case 0:case 11:case 15:Cr(h,x,w,k,c),tl(8,x);break;case 23:break;case 22:var ct=x.stateNode;x.memoizedState!==null?ct._visibility&2?Cr(h,x,w,k,c):il(h,x):(ct._visibility|=2,Cr(h,x,w,k,c)),c&&nt&2048&&Yh(x.alternate,x);break;case 24:Cr(h,x,w,k,c),c&&nt&2048&&Wh(x.alternate,x);break;default:Cr(h,x,w,k,c)}n=n.sibling}}function il(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:il(a,r),c&2048&&Yh(r.alternate,r);break;case 24:il(a,r),c&2048&&Wh(r.alternate,r);break;default:il(a,r)}n=n.sibling}}var zs=8192;function Is(e,n,a){if(e.subtreeFlags&zs)for(e=e.child;e!==null;)Rv(e,n,a),e=e.sibling}function Rv(e,n,a){switch(e.tag){case 26:Is(e,n,a),e.flags&zs&&(e.memoizedState!==null?j1(a,Pi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&O_(a,e)));break;case 5:Is(e,n,a),e.flags&zs&&(e=e.stateNode,(n&335544128)===n&&O_(a,e));break;case 3:case 4:var r=Pi;Pi=fl(e.stateNode.containerInfo),Is(e,n,a),Pi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=zs,zs=16777216,Is(e,n,a),zs=r):Is(e,n,a));break;case 30:if((e.flags&zs)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,ci===null&&(ci=new Map),ci.set(r,c)}Is(e,n,a);break;default:Is(e,n,a)}}function wv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Dn=r,Dv(r,e)}wv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cv(e),e=e.sibling}function Cv(e){switch(e.tag){case 0:case 11:case 15:al(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:al(e);break;case 12:al(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yu(e)):al(e);break;default:al(e)}}function Yu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Dn=r,Dv(r,e)}wv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Qa(8,n,n.return),Yu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yu(n));break;default:Yu(n)}e=e.sibling}}function Dv(e,n){for(;Dn!==null;){var a=Dn;switch(a.tag){case 0:case 11:case 15:Qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Go(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Dn=r;else t:for(a=e;Dn!==null;){r=Dn;var c=r.sibling,h=r.return;if(yv(r),r===a){Dn=null;break t}if(c!==null){c.return=h,Dn=c;break t}Dn=h}}}var kM={getCacheForType:function(e){var n=Un(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(mn).controller.signal}},XM=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,Re=null,De=0,ke=0,fi=null,Ja=!1,Dr=!1,jh=!1,Ea=0,un=0,$a=0,Bs=0,Wu=0,hi=0,Nr=0,sl=null,ii=null,Zh=!1,ju=0,Nv=0,Zu=1/0,Qu=null,ts=null,an=0,Ii=null,Fs=null,na=0,Qh=0,Kh=null,Uv=null,Ur=null,Lr=null,Or=null,rl=0,Ku=null;function di(){return(Fe&2)!==0&&De!==0?De&-De:Tt.T!==null?od():Bt()}function Lv(){if(hi===0)if((De&536870912)===0||Te){var e=ca;ca<<=1,(ca&3932160)===0&&(ca=262144),hi=e}else hi=536870912;return e=Ln.current,e!==null&&(e.flags|=32),hi}function Pr(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=d_(da(e.memoizedProps,a))),Lr===null&&(Lr=[]),Lr.push(n.bind(null,r))}}function ai(e,n,a){(e===Qe&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(zr(e,0),es(e,De,hi,!1)),xs(e,a),((Fe&2)===0||e!==Qe)&&(e===Qe&&((Fe&2)===0&&(Bs|=a),un===4&&es(e,De,hi,!1)),ia(e))}function Ov(e,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Pa(e,n),c=r?WM(e,n):$h(e,n,!0),h=r;do{if(c===0){Dr&&!r&&es(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!qM(a)){c=$h(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var w=e;c=sl;var k=w.current.memoizedState.isDehydrated;if(k&&(zr(w,x).flags|=256),x=$h(w,x,!1),x!==2&&x!==6){if(jh&&!k){w.errorRecoveryDisabledLanes|=h,Bs|=h,c=4;break t}h=ii,ii=c,h!==null&&(ii===null?ii=h:ii.push.apply(ii,h))}c=x}if(h=!1,c!==2)continue}}if(c===1){zr(e,0),es(e,n,0,!0);break}t:{switch(r=e,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:es(r,n,hi,!Ja);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=ju+300-K(),10<c)){if(es(r,n,hi,!Ja),ys(r,0,!0)!==0)break t;na=n,r.timeoutHandle=_d(Pv.bind(null,r,a,ii,Qu,Zh,n,hi,Bs,Nr,Ja,h,"Throttled",-0,0),c);break t}Pv(r,a,ii,Qu,Zh,n,hi,Bs,Nr,Ja,h,null,-0,0)}}break}while(!0);ia(e)}function Pv(e,n,a,r,c,h,x,w,k,nt,ct,bt,$,lt){e.timeoutHandle=-1;var qt=n.subtreeFlags,ae=(h&335544064)===h;if(bt=null,(ae||qt&8192||(qt&16785408)===16785408)&&(bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},ci=null,Rv(n,h,bt),ae&&(qt=bt,ae=e.containerInfo,ae=(ae.nodeType===9?ae:ae.ownerDocument).__reactViewTransition,ae!=null&&(qt.count++,qt.waitingForViewTransition=!0,qt=pl.bind(qt),ae.finished.then(qt,qt))),qt=(h&62914560)===h?ju-K():(h&4194048)===h?Nv-K():0,qt=Z1(bt,qt),qt!==null)){na=h,e.cancelPendingCommit=qt(kv.bind(null,e,n,h,a,r,c,x,w,k,nt,ct,bt,null,$,lt)),es(e,h,x,!nt);return}kv(e,n,h,a,r,c,x,w,k,nt,ct,bt)}function qM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],h=c.getSnapshot;c=c.value;try{if(!li(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function es(e,n,a,r){n=jl(e,n),n&=~Wu,n&=~Bs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var h=31-Bn(c),x=1<<h;r[h]=-1,c&=~x}a!==0&&L(e,a,n)}function Ju(){return(Fe&6)===0?(ol(0),!1):!0}function Jh(){if(Re!==null){if(ke===0)var e=Re.return;else e=Re,va=As=null,rh(e),Mr=null,Xo=0,e=Re;for(;e!==null;)av(e.alternate,e),e=e.return;Re=null}}function zr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,m1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,Jh(),Qe=e,Re=a=ma(e.current,null),De=n,ke=0,fi=null,Ja=!1,Dr=Pa(e,n),jh=!1,Nr=hi=Wu=Bs=$a=un=0,ii=sl=null,Zh=!1,Ea=jl(e,n),ru(),a}function zv(e,n){xe=null,Tt.H=Nu,n===Sr||n===vu?(n=k0(),ke=3):n===Wf?(n=k0(),ke=4):ke=n===Sh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,Re===null&&(un=1,Uu(e,Mi(n,e.current)))}function Iv(){var e=Ln.current;return e===null?!0:(De&4194048)===De?Hn===null:(De&62914560)===De||(De&536870912)!==0?e===Hn:!1}function Bv(){var e=Tt.H;return Tt.H=Nu,e===null?Nu:e}function Fv(){var e=Tt.A;return Tt.A=kM,e}function $u(){un=4,Ja||(De&4194048)!==De&&Ln.current!==null||(Dr=!0),($a&134217727)===0&&(Bs&134217727)===0||Qe===null||es(Qe,De,hi,!1)}function $h(e,n,a){var r=Fe;Fe|=2;var c=Bv(),h=Fv();(Qe!==e||De!==n)&&(Qu=null,zr(e,n)),n=!1;var x=un;t:do try{if(ke!==0&&Re!==null){var w=Re,k=fi;switch(ke){case 8:Jh(),x=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var nt=ke;if(ke=0,fi=null,Ir(e,w,k,nt),a&&Dr){x=0;break t}break;default:nt=ke,ke=0,fi=null,Ir(e,w,k,nt)}}YM(),x=un;break}catch(ct){zv(e,ct)}while(!0);return n&&e.shellSuspendCounter++,va=As=null,Fe=r,Tt.H=c,Tt.A=h,Re===null&&(Qe=null,De=0,ru()),x}function YM(){for(;Re!==null;)Hv(Re)}function WM(e,n){var a=Fe;Fe|=2;var r=Bv(),c=Fv();Qe!==e||De!==n?(Qu=null,Zu=K()+500,zr(e,n)):Dr=Pa(e,n);t:do try{if(ke!==0&&Re!==null){n=Re;var h=fi;e:switch(ke){case 1:ke=0,fi=null,Ir(e,n,h,1);break;case 2:case 9:if(G0(h)){ke=0,fi=null,Gv(n);break}n=function(){ke!==2&&ke!==9||Qe!==e||(ke=7),ia(e)},h.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:G0(h)?(ke=0,fi=null,Gv(n)):(ke=0,fi=null,Ir(e,n,h,7));break;case 5:var x=null;switch(Re.tag){case 26:x=Re.memoizedState;case 5:case 27:var w=Re;if(x?U_(x):w.stateNode.complete){ke=0,fi=null;var k=w.sibling;if(k!==null)Re=k;else{var nt=w.return;nt!==null?(Re=nt,tc(nt)):Re=null}break e}}ke=0,fi=null,Ir(e,n,h,5);break;case 6:ke=0,fi=null,Ir(e,n,h,6);break;case 8:Jh(),un=6;break t;default:throw Error(s(462))}}jM();break}catch(ct){zv(e,ct)}while(!0);return va=As=null,Tt.H=r,Tt.A=c,Fe=a,Re!==null?0:(Qe=null,De=0,ru(),un)}function jM(){for(;Re!==null&&!It();)Hv(Re)}function Hv(e){var n=nv(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,n===null?tc(e):Re=n}function Gv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Zg(a,n,n.pendingProps,n.type,void 0,De);break;case 11:n=Zg(a,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:rh(n);var r=n;r===wn&&(Te?(hu(r),r.tag===5&&r.stateNode!=null&&(Je=r.stateNode)):(hu(r),Te=!0));default:av(a,n),n=Re=D0(n,Ea),n=nv(a,n,Ea)}e.memoizedProps=e.pendingProps,n===null?tc(e):Re=n}function Ir(e,n,a,r){va=As=null,rh(n),Mr=null,Xo=0;var c=n.return;try{if(PM(e,c,n,a,De)){un=1,Uu(e,Mi(a,e.current)),Re=null;return}}catch(h){if(c!==null)throw Re=c,h;un=1,Uu(e,Mi(a,e.current)),Re=null;return}n.flags&32768?(Te||r===1?e=!0:Dr||(De&536870912)!==0?e=!1:(Ja=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ln.current,r!==null&&r.tag===13&&(r.flags|=16384))),Vv(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){Vv(n,Ja);return}e=n.return;var a=FM(n.alternate,n,Ea);if(a!==null){Re=a;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);un===0&&(un=5)}function Vv(e,n){do{var a=HM(e.alternate,e);if(a!==null){a.flags&=32767,Re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=a}while(e!==null);un=6,Re=null}function kv(e,n,a,r,c,h,x,w,k,nt,ct,bt){e.cancelPendingCommit=null;do ec();while(an!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Qe&&(Re=Qe=null,De=0),Fs=n,Ii=e,na=a,Kh=c,Uv=r,ZM(e,n,a,x,w,k,bt)}}function ZM(e,n,a,r,c,h,x){var w=n.lanes|n.childLanes;if(Qh=w,w|=Of,ff(e,a,w,r,c,h),Lr=null,(a&335544064)===a?(Or=EM(e),r=10262):(Or=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,e1(Pt,function(){return id(),null})):(e.callbackNode=null,e.callbackPriority=0),Hu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null,c=Lt.p,Lt.p=2,h=Fe,Fe|=4;try{GM(e,n,a)}finally{Fe=h,Lt.p=c,Tt.T=r}}an=1,Hu?Ur=S1(x,e.containerInfo,Or,td,ed,KM,nd,id,QM):(td(),ed(),nd())}function QM(e){if(an!==0){var n=Ii.onRecoverableError;n(e,{componentStack:null})}}function KM(){an===3&&(an=0,bv(Fs,Ii),an=4)}function td(){if(an===1){an=0;var e=Ii,n=Fs,a=na,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null;var c=Lt.p;Lt.p=2;var h=Fe;Fe|=4;try{nl=ku=!1,Ev(n,e,a),a=md;var x=x0(e.containerInfo),w=a.focusedElem,k=a.selectionRange;if(x!==w&&w&&w.ownerDocument&&y0(w.ownerDocument.documentElement,w)){if(k!==null&&Cf(w)){var nt=k.start,ct=k.end;if(ct===void 0&&(ct=nt),"selectionStart"in w)w.selectionStart=nt,w.selectionEnd=Math.min(ct,w.value.length);else{var bt=w.ownerDocument||document,$=bt&&bt.defaultView||window;if($.getSelection){var lt=$.getSelection(),qt=w.textContent.length,ae=Math.min(k.start,qt),Se=k.end===void 0?ae:Math.min(k.end,qt);!lt.extend&&ae>Se&&(x=Se,Se=ae,ae=x);var et=_0(w,ae),Z=_0(w,Se);if(et&&Z&&(lt.rangeCount!==1||lt.anchorNode!==et.node||lt.anchorOffset!==et.offset||lt.focusNode!==Z.node||lt.focusOffset!==Z.offset)){var ot=bt.createRange();ot.setStart(et.node,et.offset),lt.removeAllRanges(),ae>Se?(lt.addRange(ot),lt.extend(Z.node,Z.offset)):(ot.setEnd(Z.node,Z.offset),lt.addRange(ot))}}}}for(bt=[],lt=w;lt=lt.parentNode;)lt.nodeType===1&&bt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<bt.length;w++){var Et=bt[w];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}qr=!!pd,md=pd=null}finally{Fe=h,Lt.p=c,Tt.T=r}}e.current=n,an=2}}function ed(){if(an===2){an=0;var e=Ii,n=Fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Tt.T,Tt.T=null;var r=Lt.p;Lt.p=2;var c=Fe;Fe|=4;try{vv(e,n.alternate,n)}finally{Fe=c,Lt.p=r,Tt.T=a}}an=3}}function nd(){if(an===4||an===3){an=0;var e=Ur;Ur=null,me();var n=Ii,a=Fs,r=na,c=Uv,h=(r&335544064)===r?10262:10256;if((a.subtreeFlags&h)!==0||(a.flags&h)!==0?an=5:(an=0,Fs=Ii=null,Xv(n,n.pendingLanes)),h=n.pendingLanes,h===0&&(ts=null),st(r),a=a.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Ce,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Tt.T,h=Lt.p,Lt.p=2,Tt.T=null;try{for(var x=n.onRecoverableError,w=0;w<c.length;w++){var k=c[w];x(k.value,{componentStack:k.stack})}}finally{Tt.T=a,Lt.p=h}}if(c=Lr,x=Or,Or=null,c!==null&&(Lr=null,x===null&&(x=[]),e!==null))for(k=0;k<c.length;k++)a=(0,c[k])(x),a!==void 0&&e.finished.finally(a);(na&3)!==0&&ec(),ia(n),h=n.pendingLanes,(r&261930)!==0&&(h&42)!==0?n===Ku?rl++:(rl=0,Ku=n):(rl=0,Ku=null),ol(0)}}function Xv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Go(n)))}function ec(){return Ur!==null&&(Ur.skipTransition(),Ur=null),td(),ed(),nd(),id()}function id(){if(an!==5)return!1;var e=Ii,n=Qh;Qh=0;var a=st(na),r=Tt.T,c=Lt.p;try{Lt.p=32>a?32:a,Tt.T=null,a=Kh,Kh=null;var h=Ii,x=na;if(an=0,Fs=Ii=null,na=0,(Fe&6)!==0)throw Error(s(331));var w=Fe;if(Fe|=4,Cv(h.current),Av(h,h.current,x,a),Fe=w,ol(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Ce,h)}catch{}return!0}finally{Lt.p=c,Tt.T=r,Xv(e,n)}}function qv(e,n,a){n=Mi(a,n),n=xh(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&(xs(e,2),ia(e))}function Xe(e,n,a){if(e.tag===3)qv(e,e,a);else for(;n!==null;){if(n.tag===3){qv(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ts===null||!ts.has(r))){e=Mi(a,e),a=Gg(2),r=Ya(n,a,2),r!==null&&(Vg(a,r,n,e),xs(r,2),ia(r));break}}n=n.return}}function ad(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new XM;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(jh=!0,c.add(a),e=JM.bind(null,e,n,a),n.then(e,e))}function JM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(De&a)===a&&((un===4||un===3&&(De&62914560)===De&&300>K()-ju)&&(Fe&2)===0?zr(e,0):Wu|=a,Nr===De&&(Nr=0)),ia(e)}function Yv(e,n){n===0&&(n=Zl()),e=Es(e,n),e!==null&&(xs(e,n),ia(e))}function $M(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Yv(e,a)}function t1(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Yv(e,a)}function e1(e,n){return Mt(e,n)}var Br=null,Fr=null,sd=!1,nc=!1,rd=!1,ns=0;function ia(e){e!==Fr&&e.next===null&&(Fr===null?Br=Fr=e:Fr=Fr.next=e),nc=!0,sd||(sd=!0,i1())}function ol(e,n){if(!rd&&nc){rd=!0;do for(var a=!1,r=Br;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var h=0;else{var x=r.suspendedLanes,w=r.pingedLanes;h=(1<<31-Bn(42|e)+1)-1,h&=c&~(x&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Qv(r,h))}else h=De,h=ys(r,r===Qe?h:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(h&3)===0||Pa(r,h)||(a=!0,Qv(r,h));r=r.next}while(a);rd=!1}}function n1(){Wv()}function Wv(){nc=sd=!1;var e=0;ns!==0&&p1()&&(e=ns);for(var n=K(),a=null,r=Br;r!==null;){var c=r.next,h=jv(r,n);h===0?(r.next=null,a===null?Br=c:a.next=c,c===null&&(Fr=a)):(a=r,(e!==0||(h&3)!==0)&&(nc=!0)),r=c}an!==0&&an!==5||ol(e),ns!==0&&(ns=0)}function jv(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Bn(h),w=1<<x,k=c[x];k===-1?((w&a)===0||(w&r)!==0)&&(c[x]=cf(w,n)):k<=n&&(e.expiredLanes|=w),h&=~w}if(n=Qe,a=De,a=ys(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Yt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Yt(r),st(a)){case 2:case 8:a=ee;break;case 32:a=Pt;break;case 268435456:a=se;break;default:a=Pt}return r=Zv.bind(null,e),a=Mt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Yt(r),e.callbackPriority=2,e.callbackNode=null,2}function Zv(e,n){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var r=De;return r=ys(e,e===Qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Ov(e,r,n),jv(e,K()),e.callbackNode!=null&&e.callbackNode===a?Zv.bind(null,e):null)}function Qv(e,n){if(ec())return null;Ov(e,n,!0)}function i1(){g1(function(){(Fe&6)!==0?Mt(Xt,n1):Wv()})}function od(){if(ns===0){var e=Cs;e===0&&(e=vs,vs<<=1,(vs&261888)===0&&(vs=256)),ns=e}return ns}function Kv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jl(e)}function a1(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var h=Kv((c[ie]||null).action),x=r.submitter;x&&(n=(n=x[ie]||null)?Kv(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var w=new nu("action","action",null,r,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ns!==0){var k=new FormData(c,x);mh(a,{pending:!0,data:k,method:c.method,action:h},null,k)}}else typeof h=="function"&&(w.preventDefault(),k=new FormData(c,x),mh(a,{pending:!0,data:k,method:c.method,action:h},h,k))},currentTarget:c}]})}}for(var ld=0;ld<Lf.length;ld++){var ud=Lf[ld],s1=ud.toLowerCase(),r1=ud[0].toUpperCase()+ud.slice(1);Li(s1,"on"+r1)}Li(E0,"onAnimationEnd"),Li(T0,"onAnimationIteration"),Li(b0,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(mM,"onTransitionRun"),Li(gM,"onTransitionStart"),Li(vM,"onTransitionCancel"),Li(A0,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function Jv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var h=void 0;if(n)for(var x=r.length-1;0<=x;x--){var w=r[x],k=w.instance,nt=w.currentTarget;if(w=w.listener,k!==h&&c.isPropagationStopped())break t;h=w,c.currentTarget=nt;try{h(c)}catch(ct){su(ct)}c.currentTarget=null,h=k}else for(x=0;x<r.length;x++){if(w=r[x],k=w.instance,nt=w.currentTarget,w=w.listener,k!==h&&c.isPropagationStopped())break t;h=w,c.currentTarget=nt;try{h(c)}catch(ct){su(ct)}c.currentTarget=null,h=k}}}}function we(e,n){var a=n[ue];a===void 0&&(a=n[ue]=new Set);var r=e+"__bubble";a.has(r)||($v(n,e,2,!1),a.add(r))}function cd(e,n,a){var r=0;n&&(r|=4),$v(a,e,r,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function fd(e){if(!e[ic]){e[ic]=!0,Ke.forEach(function(a){a!=="selectionchange"&&(o1.has(a)||cd(a,!1,e),cd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ic]||(n[ic]=!0,cd("selectionchange",!1,n))}}function $v(e,n,a,r){switch(V_(n)){case 2:var c=$1;break;case 8:c=tE;break;default:c=Nd}a=c.bind(null,n,a,e),c=void 0,!yf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function hd(e,n,a,r,c){var h=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var w=r.stateNode.containerInfo;if(w===c)break;if(x===4)for(x=r.return;x!==null;){var k=x.tag;if((k===3||k===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;w!==null;){if(x=Be(w),x===null)return;if(k=x.tag,k===5||k===6||k===26||k===27){r=h=x;continue t}w=w.parentNode}}r=r.return}$m(function(){var nt=h,ct=vf(a),bt=[];t:{var $=R0.get(e);if($!==void 0){var lt=nu,qt=e;switch(e){case"keypress":if(tu(a)===0)break t;case"keydown":case"keyup":lt=qS;break;case"focusin":qt="focus",lt=Ef;break;case"focusout":qt="blur",lt=Ef;break;case"beforeblur":case"afterblur":lt=Ef;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=n0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=LS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=QS;break;case E0:case T0:case b0:lt=zS;break;case A0:lt=JS;break;case"scroll":case"scrollend":lt=NS;break;case"wheel":lt=tM;break;case"copy":case"cut":case"paste":lt=BS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=a0;break;case"submit":lt=jS;break;case"toggle":case"beforetoggle":lt=nM}var ae=(n&4)!==0,Se=!ae&&(e==="scroll"||e==="scrollend"),et=ae?$!==null?$+"Capture":null:$;ae=[];for(var Z=nt,ot;Z!==null;){var Et=Z;if(ot=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||ot===null||et===null||(Et=Do(Z,et),Et!=null&&ae.push(ul(Z,Et,ot))),Se)break;Z=Z.return}0<ae.length&&($=new lt($,qt,null,a,ct),bt.push({event:$,listeners:ae}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",lt&&a!==gf&&(qt=a.relatedTarget||a.fromElement)&&(Be(qt)||qt[he]))break t;($||lt)&&(qt=ct.window===ct?ct:(lt=ct.ownerDocument)?lt.defaultView||lt.parentWindow:window,$?(lt=a.relatedTarget||a.toElement,$=nt,lt=lt?Be(lt):null,lt!==null&&(Se=u(lt),ae=lt.tag,lt!==Se||ae!==5&&ae!==27&&ae!==6)&&(lt=null)):($=null,lt=nt),$!==lt&&(ae=n0,Et="onMouseLeave",et="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(ae=a0,Et="onPointerLeave",et="onPointerEnter",Z="pointer"),Se=$==null?qt:Mn($),ot=lt==null?qt:Mn(lt),qt=new ae(Et,Z+"leave",$,a,ct),qt.target=Se,qt.relatedTarget=ot,Et=null,Be(ct)===nt&&(ae=new ae(et,Z+"enter",lt,a,ct),ae.target=ot,ae.relatedTarget=Se,Et=ae),Se=Et,ae=$&&lt?B($,lt,l1):null,$!==null&&t_(bt,qt,$,ae,!1),lt!==null&&Se!==null&&t_(bt,Se,lt,ae,!0)))}t:{if($=nt?Mn(nt):window,lt=$.nodeName&&$.nodeName.toLowerCase(),lt==="select"||lt==="input"&&$.type==="file")var $t=h0;else if(c0($))if(d0)$t=hM;else{$t=cM;var Ne=uM}else lt=$.nodeName,!lt||lt.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?nt&&mf(nt.elementType)&&($t=h0):$t=fM;if($t&&($t=$t(e,nt))){f0(bt,$t,a,ct);break t}Ne&&Ne(e,$,nt)}switch(Ne=nt?Mn(nt):window,e){case"focusin":(c0(Ne)||Ne.contentEditable==="true")&&(dr=Ne,Df=nt,Bo=null);break;case"focusout":Bo=Df=dr=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,S0(bt,a,ct);break;case"selectionchange":if(pM)break;case"keydown":case"keyup":S0(bt,a,ct)}var le;if(bf)t:{switch(e){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else hr?l0(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(s0&&a.locale!=="ko"&&(hr||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&hr&&(le=t0()):(Ia=ct,xf="value"in Ia?Ia.value:Ia.textContent,hr=!0)),Ne=ac(nt,pe),0<Ne.length&&(pe=new i0(pe,e,null,a,ct),bt.push({event:pe,listeners:Ne}),le?pe.data=le:(le=u0(a),le!==null&&(pe.data=le)))),(le=aM?sM(e,a):rM(e,a))&&(pe=ac(nt,"onBeforeInput"),0<pe.length&&(Ne=new i0("onBeforeInput","beforeinput",null,a,ct),bt.push({event:Ne,listeners:pe}),Ne.data=le)),a1(bt,e,nt,a,ct)}Jv(bt,n)})}function ul(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ac(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Do(e,a),c!=null&&r.unshift(ul(e,c,h)),c=Do(e,n),c!=null&&r.push(ul(e,c,h))),e.tag===3)return r;e=e.return}return[]}function l1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function t_(e,n,a,r,c){for(var h=n._reactName,x=[];a!==null&&a!==r;){var w=a,k=w.alternate,nt=w.stateNode;if(w=w.tag,k!==null&&k===r)break;w!==5&&w!==26&&w!==27||nt===null||(k=nt,c?(nt=Do(a,h),nt!=null&&x.unshift(ul(a,nt,k))):c||(nt=Do(a,h),nt!=null&&x.push(ul(a,nt,k)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var u1=/\r\n?/g,c1=/\u0000|\uFFFD/g;function e_(e){return(typeof e=="string"?e:""+e).replace(u1,`
`).replace(c1,"")}function n_(e,n){return n=e_(n),e_(e)===n}function qe(e,n,a,r,c,h){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ur(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ur(e,""+r);else return;break;case"className":Kl(e,"class",r);break;case"tabIndex":Kl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Kl(e,a,r);break;case"style":Km(e,r,h);return;case"data":if(n!=="object"){Kl(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Jl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&qe(e,n,"name",c.name,c,null),qe(e,n,"formEncType",c.formEncType,c,null),qe(e,n,"formMethod",c.formMethod,c,null),qe(e,n,"formTarget",c.formTarget,c,null)):(qe(e,n,"encType",c.encType,c,null),qe(e,n,"method",c.method,c,null),qe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Jl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Wi);return;case"onScroll":r!=null&&we("scroll",e);return;case"onScrollEnd":r!=null&&we("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Jl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":we("beforetoggle",e),we("toggle",e),Ql(e,"popover",r);break;case"xlinkActuate":fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":fa(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":fa(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":fa(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":fa(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ql(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=CS.get(a)||a,Ql(e,a,r);else return}ze=!0}function dd(e,n,a,r,c,h){switch(a){case"style":Km(e,r,h);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")ur(e,r);else if(typeof r=="number"||typeof r=="bigint")ur(e,""+r);else return;break;case"onScroll":r!=null&&we("scroll",e);return;case"onScrollEnd":r!=null&&we("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!qn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),h=a.slice(2,c?a.length-7:void 0),n=e[ie]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(h,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(h,r,c);break t}ze=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):Ql(e,a,r)}return}ze=!0}function zn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var r=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,h,x,a,null)}}c&&qe(e,n,"srcSet",a.srcSet,a,null),r&&qe(e,n,"src",a.src,a,null);return;case"input":we("invalid",e);var w=h=x=c=null,k=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":x=ct;break;case"checked":k=ct;break;case"defaultChecked":nt=ct;break;case"value":h=ct;break;case"defaultValue":w=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:qe(e,n,r,ct,a,null)}}Wm(e,h,w,k,nt,x,c,!1);return;case"select":we("invalid",e),r=x=h=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":h=w;break;case"defaultValue":x=w;break;case"multiple":r=w;default:qe(e,n,c,w,a,null)}n=h,a=x,e.multiple=!!r,n!=null?lr(e,!!r,n,!1):a!=null&&lr(e,!!r,a,!0);return;case"textarea":we("invalid",e),h=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":r=w;break;case"defaultValue":c=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:qe(e,n,x,w,a,null)}Zm(e,r,c,h);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(r=a[k],r!=null))switch(k){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:qe(e,n,k,r,a,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(r=0;r<ll.length;r++)we(ll[r],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,nt,r,a,null)}return;default:if(mf(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&dd(e,n,ct,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&qe(e,n,w,r,a,null))}var f1={};function h1(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,x=null,w=null,k=null,nt=null,ct=null;for(lt in a){var bt=a[lt];if(a.hasOwnProperty(lt)&&bt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":k=bt;default:r.hasOwnProperty(lt)||qe(e,n,lt,null,r,bt)}}for(var $ in r){var lt=r[$];if(bt=a[$],r.hasOwnProperty($)&&(lt!=null||bt!=null))switch($){case"type":lt!==bt&&(ze=!0),h=lt;break;case"name":lt!==bt&&(ze=!0),c=lt;break;case"checked":lt!==bt&&(ze=!0),nt=lt;break;case"defaultChecked":lt!==bt&&(ze=!0),ct=lt;break;case"value":lt!==bt&&(ze=!0),x=lt;break;case"defaultValue":lt!==bt&&(ze=!0),w=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==bt&&qe(e,n,$,lt,r,bt)}}df(e,x,w,k,nt,ct,h,c);return;case"select":lt=x=w=$=null;for(h in a)if(k=a[h],a.hasOwnProperty(h)&&k!=null)switch(h){case"value":break;case"multiple":lt=k;default:r.hasOwnProperty(h)||qe(e,n,h,null,r,k)}for(c in r)if(h=r[c],k=a[c],r.hasOwnProperty(c)&&(h!=null||k!=null))switch(c){case"value":h!==k&&(ze=!0),$=h;break;case"defaultValue":h!==k&&(ze=!0),w=h;break;case"multiple":h!==k&&(ze=!0),x=h;default:h!==k&&qe(e,n,c,h,r,k)}n=w,a=x,r=lt,$!=null?lr(e,!!a,$,!1):!!r!=!!a&&(n!=null?lr(e,!!a,n,!0):lr(e,!!a,a?[]:"",!1));return;case"textarea":lt=$=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:qe(e,n,w,null,r,c)}for(x in r)if(c=r[x],h=a[x],r.hasOwnProperty(x)&&(c!=null||h!=null))switch(x){case"value":c!==h&&(ze=!0),$=c;break;case"defaultValue":c!==h&&(ze=!0),lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&qe(e,n,x,c,r,h)}jm(e,$,lt);return;case"option":for(var qt in a)if($=a[qt],a.hasOwnProperty(qt)&&$!=null&&!r.hasOwnProperty(qt))switch(qt){case"selected":e.selected=!1;break;default:qe(e,n,qt,null,r,$)}for(k in r)if($=r[k],lt=a[k],r.hasOwnProperty(k)&&$!==lt&&($!=null||lt!=null))switch(k){case"selected":$!==lt&&(ze=!0),e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:qe(e,n,k,$,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)$=a[ae],a.hasOwnProperty(ae)&&$!=null&&!r.hasOwnProperty(ae)&&qe(e,n,ae,null,r,$);for(nt in r)if($=r[nt],lt=a[nt],r.hasOwnProperty(nt)&&$!==lt&&($!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:qe(e,n,nt,$,r,lt)}return;default:if(mf(n)){for(var Se in a)$=a[Se],a.hasOwnProperty(Se)&&$!==void 0&&!r.hasOwnProperty(Se)&&dd(e,n,Se,void 0,r,$);for(ct in r)$=r[ct],lt=a[ct],!r.hasOwnProperty(ct)||$===lt||$===void 0&&lt===void 0||dd(e,n,ct,$,r,lt);return}}for(var et in a)$=a[et],a.hasOwnProperty(et)&&$!=null&&!r.hasOwnProperty(et)&&qe(e,n,et,null,r,$);for(bt in r)$=r[bt],lt=a[bt],!r.hasOwnProperty(bt)||$===lt||$==null&&lt==null||qe(e,n,bt,$,r,lt)}function i_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function d1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],h=c.transferSize,x=c.initiatorType,w=c.duration;if(h&&w&&i_(x)){for(x=0,w=c.responseEnd,r+=1;r<a.length;r++){var k=a[r],nt=k.startTime;if(nt>w)break;var ct=k.transferSize,bt=k.initiatorType;ct&&i_(bt)&&(k=k.responseEnd,x+=ct*(k<w?1:(w-nt)/(k-nt)))}if(--r,n+=8*(h+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pd=null,md=null;function cl(e){return e.nodeType===9?e:e.ownerDocument}function a_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function r_(e,n,a,r){return a=cl(a).createElement(e),a[kt]=r,a[ie]=n,zn(a,e,n),Pe(a),a}function gd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vd=null;function p1(){var e=window.event;return e&&e.type==="popstate"?e===vd?!1:(vd=e,!0):(vd=null,!1)}var _d=typeof setTimeout=="function"?setTimeout:void 0,m1=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,l_=typeof requestAnimationFrame=="function"?requestAnimationFrame:_d,g1=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(e){return o_.resolve(null).then(e).catch(v1)}:_d;function v1(e){setTimeout(function(){throw e})}function is(e){return e==="head"}function u_(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),Yr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ad(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ad(a);for(var h=a.firstChild;h;){var x=h.nextSibling,w=h.nodeName;h[Ie]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Ad(e.ownerDocument.body);a=c}while(a);Yr(n)}function c_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function f_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var h=n[c];0<h.width&&0<h.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function h_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function _1(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function yd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return _1(n,a,e)}function y1(e){return e.documentElement.clientHeight}function x1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function S1(e,n,a,r,c,h,x,w,k){var nt=n.nodeType===9?n:n.ownerDocument;try{var ct=nt.startViewTransition({update:function(){var $=nt.defaultView,lt=$.navigation&&$.navigation.transition,qt=nt.fonts.status;r();var ae=[];if(qt==="loaded"&&(y1(nt),nt.fonts.status==="loading"&&ae.push(nt.fonts.ready)),qt=ae.length,e!==null)for(var Se=e.suspenseyImages,et=0,Z=0;Z<Se.length;Z++){var ot=Se[Z];if(!ot.complete){var Et=ot.getBoundingClientRect();if(0<Et.bottom&&0<Et.right&&Et.top<$.innerHeight&&Et.left<$.innerWidth){if(et+=L_(ot),et>oc){ae.length=qt;break}ot=new Promise(x1.bind(ot)),ae.push(ot)}}}if(0<ae.length)return $=Promise.race([Promise.all(ae),new Promise(function($t){return setTimeout($t,500)})]).then(c,c),(lt?Promise.allSettled([lt.finished,$]):$).then(h,h);if(c(),lt)return lt.finished.then(h,h);h()},types:a});nt.__reactViewTransition=ct;var bt=[];return ct.ready.then(function(){for(var $=nt.documentElement.getAnimations({subtree:!0}),lt=0;lt<$.length;lt++){var qt=$[lt],ae=qt.effect,Se=ae.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){bt.push(qt),qt=ae.getKeyframes();for(var et=Se=void 0,Z=!0,ot=0;ot<qt.length;ot++){var Et=qt[ot],$t=Et.width;if(Se===void 0)Se=$t;else if(Se!==$t){Z=!1;break}if($t=Et.height,et===void 0)et=$t;else if(et!==$t){Z=!1;break}delete Et.width,delete Et.height,Et.transform==="none"&&delete Et.transform}Z&&Se!==void 0&&et!==void 0&&(ae.setKeyframes(qt),Z=getComputedStyle(ae.target,ae.pseudoElement),Z.width!==Se||Z.height!==et)&&(Z=qt[0],Z.width=Se,Z.height=et,Z=qt[qt.length-1],Z.width=Se,Z.height=et,ae.setKeyframes(qt))}}x()},function($){nt.__reactViewTransition===ct&&(nt.__reactViewTransition=null);try{if(typeof $=="object"&&$!==null)switch($.name){case"InvalidStateError":($.message==="View transition was skipped because document visibility state is hidden."||$.message==="Skipping view transition because document visibility state has become hidden."||$.message==="Skipping view transition because viewport size changed."||$.message==="Transition was aborted because of invalid state")&&($=null)}$!==null&&k($)}finally{r(),c(),x()}}),ct.finished.finally(function(){for(var $=0;$<bt.length;$++)bt[$].cancel();nt.__reactViewTransition===ct&&(nt.__reactViewTransition=null),w()}),ct}catch{return r(),c(),x(),null}}function Hs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Hs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Hs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var h=a[c].effect;h!==null&&h.target===e&&h.pseudoElement===n&&r.push(a[c])}return r},Hs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function d_(e){return{name:e,group:new Hs("group",e),imagePair:new Hs("image-pair",e),old:new Hs("old",e),new:new Hs("new",e)}}function pi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}pi.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var h=this._eventListeners;if(m_(h,e,n,a)===-1){var x=this,w=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(w=function(k){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,k):n.handleEvent(k)}),r!==null&&(c=x.removeEventListener.bind(x,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Hr(a),h.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:w,cleanup:c}),g(this._fragmentFiber.child,!1,M1,e,w,r)}this._eventListeners=h}};function M1(e,n,a,r){return M(e).addEventListener(n,a,r),!1}pi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=m_(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var h=c.cleanup;c=Hr(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,E1,e,a,c),r.splice(n,1),h!==null&&h()}};function E1(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function Hr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function p_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function m_(e,n,a,r){if(e.length===0)return-1;r=p_(r);for(var c=0;c<e.length;c++){var h=e[c];if(h.type===n&&h.listener===a&&p_(h.optionsOrUseCapture)===r)return c}return-1}pi.prototype.dispatchEvent=function(e){var n=_(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var h=a[c];r.addEventListener(h.type,h.attachedListener,Hr(h.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)h=a[c],r.removeEventListener(h.type,h.attachedListener,Hr(h.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},pi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,g_,e,void 0,void 0)};function g_(e,n){return e.tag===6?!1:(e=M(e),P1(e,n))}pi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,xd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!g_(n[a],e);a--);};function xd(e,n){return n.push(e),!1}pi.prototype.blur=function(){var e=_(this._fragmentFiber);e!==null&&(e=M(e),e=cl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,T1,e,void 0,void 0))};function T1(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}pi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,b1,e,void 0,void 0)};function b1(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}pi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,A1,e,void 0,void 0);for(var a=n=0;a<Bi.length;a++){var r=Bi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Bi[n++]=r}Bi.length=n}};function A1(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Bi=[],Sd=!1;function R1(e,n,a){Bi.push({fragmentInstance:e,observer:n,instance:a}),Sd||(Sd=!0,z1(function(){Sd=!1;var r=Bi;Bi=[];for(var c=0;c<r.length;c++){var h=r[c];h.observer.unobserve(h.instance)}}))}pi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,w1,e,void 0,void 0),e};function w1(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}pi.prototype.getRootNode=function(e){var n=_(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},pi.prototype.compareDocumentPosition=function(e){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,xd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var h=S(this._fragmentFiber)?n.parentElement:r;if(h==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=h.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,h=h.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),w=c.compareDocumentPosition(e),k=x&Node.DOCUMENT_POSITION_CONTAINED_BY||w&Node.DOCUMENT_POSITION_CONTAINED_BY;return w=r&&h&&x&Node.DOCUMENT_POSITION_FOLLOWING&&w&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||h&&c===e||k||w?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!h&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||C1(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function C1(e,n,a,r,c){var h=Be(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!h)t:{for(;h!==null;){if(h.tag===7&&(h===n||h.alternate===n)){a=!0;break t}h=h.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(h===null)return h=c.ownerDocument,c===h||c===h.documentElement||c===h.body;t:{for(h=n,n=_(n);h!==null;){if(!(h.tag!==5&&h.tag!==3&&h.tag!==27||h!==n&&h.alternate!==n)){h=!0;break t}h=h.return}h=!1}return h}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!h)&&!(n=h===a)&&(n=B(a,h,O),n===null?n=!1:(g(n,!0,C,h,a),h=y,y=null,n=h!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!h)&&!(n=h===r)&&(n=B(r,h,O),n===null?n=!1:(g(n,!0,b,h,r),h=y,U=y=null,n=h!==null)),n):!1}function v_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}pi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,xd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||_(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),v_(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),v_(c,a)):M(c).scrollIntoView(e),r+=a?-1:1}};function D1(e,n){return e=M(e),__(e,n),!1}function __(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function y_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,Hr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){for(var x=0,w=0;w<Bi.length;w++){var k=Bi[w];(k.fragmentInstance!==n||k.observer!==h||k.instance!==e)&&(Bi[x++]=k)}Bi.length=x,h.observe(e)}),__(e,n))}function N1(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,Hr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){typeof h.rootMargin=="string"?R1(n,h,e):h.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Md(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Md(a),ce(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function U1(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ie])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function L1(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function x_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ri(e.nextSibling),e===null))return null;return e}function Ed(e){return e.data==="$?"||e.data==="$~"}function Td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function O1(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var bd=null;function S_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function M_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function P1(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function z1(e){l_(function(){l_(function(n){return e(n)})})}function E_(e,n,a){switch(n=cl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function T_(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&qe(e,n,r,null,f1,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Wi&&(e.onclick=null),ce(e)}function Ad(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ce(e)}var wi=new Map,b_=new Set;function fl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ta=Lt.d;Lt.d={f:I1,r:B1,D:F1,C:H1,L:G1,m:V1,X:X1,S:k1,M:q1};function I1(){var e=Ta.f(),n=Ju();return e||n}function B1(e){var n=Ee(e);n!==null&&n.tag===5&&n.type==="form"?Rg(n):Ta.r(e)}var Gr=typeof document>"u"?null:document;function A_(e,n,a){var r=Gr;if(r&&typeof n=="string"&&n){var c=xi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),b_.has(c)||(b_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),zn(n,"link",e),Pe(n),r.head.appendChild(n)))}}function F1(e){Ta.D(e),A_("dns-prefetch",e,null)}function H1(e,n){Ta.C(e,n),A_("preconnect",e,n)}function G1(e,n,a){Ta.L(e,n,a);var r=Gr;if(r&&e&&n){var c='link[rel="preload"][as="'+xi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+xi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+xi(a.imageSizes)+'"]')):c+='[href="'+xi(e)+'"]';var h=c;switch(n){case"style":h=Vr(e);break;case"script":h=kr(e)}if(!(wi.has(h)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),wi.set(h,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(hl(h))||n==="script"&&r.querySelector(dl(h))))){var x=r.createElement("link");zn(x,"link",e),n==="style"&&(x[Oe]=!0,x.onload=x.onerror=function(){za(x)}),Pe(x),r.head.appendChild(x)}}}function V1(e,n){Ta.m(e,n);var a=Gr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xi(r)+'"][href="'+xi(e)+'"]',h=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=kr(e)}if(!wi.has(h)&&(e=P({rel:"modulepreload",href:e},n),wi.set(h,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(dl(h)))return}r=a.createElement("link"),zn(r,"link",e),Pe(r),a.head.appendChild(r)}}}function k1(e,n,a){Ta.S(e,n,a);var r=Gr;if(r&&e){var c=ri(r).hoistableStyles,h=Vr(e);n=n||"default";var x=c.get(h);if(!x){var w={loading:0,preload:null};if(x=r.querySelector(hl(h)))w.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=wi.get(h))&&Rd(e,a);var k=x=r.createElement("link");Pe(k),zn(k,"link",e),k._p=new Promise(function(nt,ct){k.onload=nt,k.onerror=ct}),k.addEventListener("load",function(){w.loading|=1}),k.addEventListener("error",function(){w.loading|=2}),w.loading|=4,sc(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:w},c.set(h,x)}}}function X1(e,n){Ta.X(e,n);var a=Gr;if(a&&e){var r=ri(a).hoistableScripts,c=kr(e),h=r.get(c);h||(h=a.querySelector(dl(c)),h||(e=P({src:e,async:!0},n),(n=wi.get(c))&&wd(e,n),h=a.createElement("script"),Pe(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function q1(e,n){Ta.M(e,n);var a=Gr;if(a&&e){var r=ri(a).hoistableScripts,c=kr(e),h=r.get(c);h||(h=a.querySelector(dl(c)),h||(e=P({src:e,async:!0,type:"module"},n),(n=wi.get(c))&&wd(e,n),h=a.createElement("script"),Pe(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function R_(e,n,a,r){var c=(c=oe.current)?fl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Vr(a.href),n=ri(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Vr(a.href);var h=ri(c).hoistableStyles,x=h.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=c.querySelector(hl(e)))?h._p||(x.instance=h,x.state.loading=5):(h=wi.get(e),h||(h={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(e,h)),Y1(c,e,h,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=kr(a),n=ri(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Vr(e){return'href="'+xi(e)+'"'}function hl(e){return'link[rel="stylesheet"]['+e+"]"}function w_(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function Y1(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Oe]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Oe]=!0,n.onload=n.onerror=za.bind(null,n),zn(n,"link",a),Pe(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function kr(e){return'[src="'+xi(e)+'"]'}function dl(e){return"script[async]"+e}function C_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+xi(a.href)+'"]');if(r)return n.instance=r,Pe(r),r;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Pe(r),zn(r,"style",c),sc(r,a.precedence,e),n.instance=r;case"stylesheet":c=Vr(a.href);var h=e.querySelector(hl(c));if(h)return n.state.loading|=4,n.instance=h,Pe(h),h;r=w_(a),(c=wi.get(c))&&Rd(r,c),h=(e.ownerDocument||e).createElement("link"),Pe(h);var x=h;return x._p=new Promise(function(w,k){x.onload=w,x.onerror=k}),zn(h,"link",r),n.state.loading|=4,sc(h,a.precedence,e),n.instance=h;case"script":return h=kr(a.src),(c=e.querySelector(dl(h)))?(n.instance=c,Pe(c),c):(r=a,(c=wi.get(h))&&(r=P({},a),wd(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Pe(c),zn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,sc(r,a.precedence,e));return n.instance}function sc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,h=c,x=0;x<r.length;x++){var w=r[x];if(w.dataset.precedence===n)h=w;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Rd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function wd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function D_(e,n,a){if(rc===null){var r=new Map,c=rc=new Map;c.set(a,r)}else c=rc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[Ie]||h[kt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var w=r.get(x);w?w.push(h):r.set(x,[h])}}return r}function Cd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function W1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function N_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function U_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function L_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function O_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=L_(n),e.suspenseyImages.push(n)),e=Q1.bind(e),n.decode().then(e,e))}function j1(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Vr(r.href),h=n.querySelector(hl(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=pl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Pe(h);return}h=n.ownerDocument||n,r=w_(r),(c=wi.get(c))&&Rd(r,c),h=h.createElement("link"),Pe(h);var x=h;x._p=new Promise(function(w,k){x.onload=w,x.onerror=k}),zn(h,"link",r),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=pl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var oc=0;function Z1(e,n){return e.stylesheets&&e.count===0&&uc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&oc===0&&(oc=62500*d1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>oc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function P_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)uc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function pl(){this.count--,P_(this)}function Q1(){this.imgCount--,P_(this)}var lc=null;function uc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(K1,e),lc=null,pl.call(e))}function K1(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var r=a.get(null);else{a=new Map,lc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var x=c[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),h=a.get(x)||r,h===r&&a.set(null,c),a.set(x,c),this.count++,r=pl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Xr={$$typeof:Y,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function J1(e,n,a,r,c,h,x,w,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Co(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.hiddenUpdates=Co(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.transitionTypes=null,this.incompleteTransitions=new Map}function z_(e,n,a,r,c,h,x,w,k,nt,ct,bt){return e=new J1(e,n,a,x,k,nt,ct,bt,w),n=1,h===!0&&(n|=24),h=ti(3,null,null,n),e.current=h,h.stateNode=e,n=Xf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:r,isDehydrated:a,cache:n},jf(h),e}function I_(e){return e?(e=gr,e):gr}function B_(e,n,a,r,c,h){c=I_(c),r.context===null?r.context=c:r.pendingContext=c,r=qa(n),r.payload={element:a},h=h===void 0?null:h,h!==null&&(r.callback=h),a=Ya(e,r,n),a!==null&&(ai(a,e,n),qo(a,e,n))}function F_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Dd(e,n){F_(e,n),(e=e.alternate)&&F_(e,n)}function H_(e){if(e.tag===13||e.tag===31){var n=Es(e,67108864);n!==null&&ai(n,e,67108864),Dd(e,67108864)}}function G_(e){if(e.tag===13||e.tag===31){var n=di();n=dt(n);var a=Es(e,n);a!==null&&ai(a,e,n),Dd(e,n)}}var qr=!0;function $1(e,n,a,r){var c=Tt.T;Tt.T=null;var h=Lt.p;try{Lt.p=2,Nd(e,n,a,r)}finally{Lt.p=h,Tt.T=c}}function tE(e,n,a,r){var c=Tt.T;Tt.T=null;var h=Lt.p;try{Lt.p=8,Nd(e,n,a,r)}finally{Lt.p=h,Tt.T=c}}function Nd(e,n,a,r){if(qr){var c=Ud(r);if(c===null)hd(e,n,r,cc,a),k_(e,r);else if(nE(c,e,n,a,r))r.stopPropagation();else if(k_(e,r),n&4&&-1<eE.indexOf(e)){for(;c!==null;){var h=Ee(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=yi(h.pendingLanes);if(x!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var k=1<<31-Bn(x);w.entanglements[1]|=k,x&=~k}ia(h),(Fe&6)===0&&(Zu=K()+500,ol(0))}}break;case 31:case 13:w=Es(h,2),w!==null&&ai(w,h,2),Ju(),Dd(h,2)}if(h=Ud(r),h===null&&hd(e,n,r,cc,a),h===c)break;c=h}c!==null&&r.stopPropagation()}else hd(e,n,r,null,a)}}function Ud(e){return e=vf(e),Ld(e)}var cc=null;function Ld(e){if(cc=null,e=Be(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cc=e,null}function V_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case Xt:return 2;case ee:return 8;case Pt:case Dt:return 32;case se:return 268435456;default:return 32}default:return 32}}var Od=!1,as=null,ss=null,rs=null,ml=new Map,gl=new Map,os=[],eE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(e,n){switch(e){case"focusin":case"focusout":as=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":rs=null;break;case"pointerover":case"pointerout":ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(n.pointerId)}}function vl(e,n,a,r,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Ee(n),n!==null&&H_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function nE(e,n,a,r,c){switch(n){case"focusin":return as=vl(as,e,n,a,r,c),!0;case"dragenter":return ss=vl(ss,e,n,a,r,c),!0;case"mouseover":return rs=vl(rs,e,n,a,r,c),!0;case"pointerover":var h=c.pointerId;return ml.set(h,vl(ml.get(h)||null,e,n,a,r,c)),!0;case"gotpointercapture":return h=c.pointerId,gl.set(h,vl(gl.get(h)||null,e,n,a,r,c)),!0}return!1}function X_(e){var n=Be(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,jt(e.priority,function(){G_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,jt(e.priority,function(){G_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ud(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);gf=r,a.target.dispatchEvent(r),gf=null}else return n=Ee(a),n!==null&&H_(n),e.blockedOn=a,!1;n.shift()}return!0}function q_(e,n,a){fc(e)&&a.delete(n)}function iE(){Od=!1,as!==null&&fc(as)&&(as=null),ss!==null&&fc(ss)&&(ss=null),rs!==null&&fc(rs)&&(rs=null),ml.forEach(q_),gl.forEach(q_)}function hc(e,n){e.blockedOn===n&&(e.blockedOn=null,Od||(Od=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,iE)))}var dc=null;function Y_(e){dc!==e&&(dc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){dc===e&&(dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Ld(r||a)===null)continue;break}var h=Ee(a);h!==null&&(e.splice(n,3),n-=3,mh(h,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Yr(e){function n(k){return hc(k,e)}as!==null&&hc(as,e),ss!==null&&hc(ss,e),rs!==null&&hc(rs,e),ml.forEach(n),gl.forEach(n);for(var a=0;a<os.length;a++){var r=os[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<os.length&&(a=os[0],a.blockedOn===null);)X_(a),a.blockedOn===null&&os.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],h=a[r+1],x=c[ie]||null;if(typeof h=="function")x||Y_(a);else if(x){var w=null;if(h&&h.hasAttribute("formAction")){if(c=h,x=h[ie]||null)w=x.formAction;else if(Ld(c)!==null)continue}else w=x.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),Y_(a)}}}function W_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Pd(e){this._internalRoot=e}pc.prototype.render=Pd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=di();B_(a,r,e,n,null,null)},pc.prototype.unmount=Pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;B_(e.current,2,null,e,null,null),Ju(),n[he]=null}};function pc(e){this._internalRoot=e}pc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bt();e={blockedOn:null,target:e,priority:n};for(var a=0;a<os.length&&n!==0&&n<os[a].priority;a++);os.splice(a,0,e),a===0&&X_(e)}};var j_=t.version;if(j_!=="19.3.1")throw Error(s(527,j_,"19.3.1"));Lt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var aE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{Ce=mc.inject(aE),nn=mc}catch{}}return yl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Ig,h=Bg,x=Fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=z_(e,1,!1,null,null,a,r,null,c,h,x,W_),e[he]=n.current,fd(e),new Pd(n)},yl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",h=Ig,x=Bg,w=Fg,k=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=z_(e,1,!0,n,a??null,r,c,k,h,x,w,W_),n.context=I_(null),a=n.current,r=di(),r=dt(r),c=qa(r),c.callback=null,Ya(a,c,r),a=r,n.current.lanes=a,xs(n,a),ia(n),e[he]=n.current,fd(e),new pc(n)},yl.version="19.3.1",yl}var ay;function gE(){if(ay)return Bd.exports;ay=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bd.exports=mE(),Bd.exports}var vE=gE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bx=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=ge.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:f,...d},p)=>ge.createElement("svg",{ref:p,...yE,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:bx("lucide",l),...d},[...f.map(([m,v])=>ge.createElement(m,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=(o,t)=>{const i=ge.forwardRef(({className:s,...l},u)=>ge.createElement(xE,{ref:u,iconNode:t,className:bx(`lucide-${_E(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=$n("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=$n("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=$n("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=$n("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=$n("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=$n("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=$n("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=$n("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=$n("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=$n("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=$n("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=$n("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=$n("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=$n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=$n("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xm="180",CE=0,cy=1,DE=2,Rx=1,NE=2,Da=3,gs=0,kn=1,Di=2,Ua=0,ho=1,Pl=2,fy=3,hy=4,UE=5,Zs=100,LE=101,OE=102,PE=103,zE=104,IE=200,BE=201,FE=202,HE=203,bp=204,Ap=205,GE=206,VE=207,kE=208,XE=209,qE=210,YE=211,WE=212,jE=213,ZE=214,Rp=0,wp=1,Cp=2,go=3,Dp=4,Np=5,Up=6,Lp=7,wx=0,QE=1,KE=2,La=0,Cx=1,Dx=2,Nx=3,Sm=4,Ux=5,Lx=6,Ox=7,Px=300,vo=301,_o=302,Op=303,Pp=304,lf=306,zp=1e3,Ks=1001,Ip=1002,_i=1003,JE=1004,gc=1005,sa=1006,Vd=1007,Js=1008,qi=1009,zx=1010,Ix=1011,zl=1012,Mm=1013,tr=1014,ra=1015,Xi=1016,Em=1017,Tm=1018,Il=1020,Bx=35902,Fx=35899,Hx=1021,Gx=1022,ki=1023,Bl=1026,Fl=1027,bm=1028,Am=1029,Vx=1030,Rm=1031,wm=1033,jc=33776,Zc=33777,Qc=33778,Kc=33779,Bp=35840,Fp=35841,Hp=35842,Gp=35843,Vp=36196,kp=37492,Xp=37496,qp=37808,Yp=37809,Wp=37810,jp=37811,Zp=37812,Qp=37813,Kp=37814,Jp=37815,$p=37816,tm=37817,em=37818,nm=37819,im=37820,am=37821,sm=36492,rm=36494,om=36495,lm=36283,um=36284,cm=36285,fm=36286,$E=3200,tT=3201,kx=0,eT=1,ms="",si="srgb",yo="srgb-linear",tf="linear",Ye="srgb",Wr=7680,dy=519,nT=512,iT=513,aT=514,Xx=515,sT=516,rT=517,oT=518,lT=519,py=35044,my="300 es",oa=2e3,ef=2001;class To{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gy=1234567;const Nl=Math.PI/180,Hl=180/Math.PI;function ir(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[o&255]+Gn[o>>8&255]+Gn[o>>16&255]+Gn[o>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Ae(o,t,i){return Math.max(t,Math.min(i,o))}function Cm(o,t){return(o%t+t)%t}function uT(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function cT(o,t,i){return o!==t?(i-o)/(t-o):0}function Ul(o,t,i){return(1-i)*o+i*t}function fT(o,t,i,s){return Ul(o,t,1-Math.exp(-i*s))}function hT(o,t=1){return t-Math.abs(Cm(o,t*2)-t)}function dT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function pT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function mT(o,t){return o+Math.floor(Math.random()*(t-o+1))}function gT(o,t){return o+Math.random()*(t-o)}function vT(o){return o*(.5-Math.random())}function _T(o){o!==void 0&&(gy=o);let t=gy+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yT(o){return o*Nl}function xT(o){return o*Hl}function ST(o){return(o&o-1)===0&&o!==0}function MT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function ET(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function TT(o,t,i,s,l){const u=Math.cos,f=Math.sin,d=u(i/2),p=f(i/2),m=u((t+s)/2),v=f((t+s)/2),g=u((t-s)/2),_=f((t-s)/2),S=u((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":o.set(d*v,p*g,p*_,d*m);break;case"YZY":o.set(p*_,d*v,p*g,d*m);break;case"ZXZ":o.set(p*g,p*_,d*v,d*m);break;case"XZX":o.set(d*v,p*E,p*S,d*m);break;case"YXY":o.set(p*S,d*v,p*E,d*m);break;case"ZYZ":o.set(p*E,p*S,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function lo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Qn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const dn={DEG2RAD:Nl,RAD2DEG:Hl,generateUUID:ir,clamp:Ae,euclideanModulo:Cm,mapLinear:uT,inverseLerp:cT,lerp:Ul,damp:fT,pingpong:hT,smoothstep:dT,smootherstep:pT,randInt:mT,randFloat:gT,randFloatSpread:vT,seededRandom:_T,degToRad:yT,radToDeg:xT,isPowerOfTwo:ST,ceilPowerOfTwo:MT,floorPowerOfTwo:ET,setQuaternionFromProperEuler:TT,normalize:Qn,denormalize:lo};class Vt{constructor(t=0,i=0){Vt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*s-f*l+t.x,this.y=u*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jn{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,f,d){let p=s[l+0],m=s[l+1],v=s[l+2],g=s[l+3];const _=u[f+0],S=u[f+1],E=u[f+2],T=u[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=_,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(g!==T||p!==_||m!==S||v!==E){let M=1-d;const y=p*_+m*S+v*E+g*T,U=y>=0?1:-1,C=1-y*y;if(C>Number.EPSILON){const O=Math.sqrt(C),B=Math.atan2(O,y*U);M=Math.sin(M*B)/O,d=Math.sin(d*B)/O}const b=d*U;if(p=p*M+_*b,m=m*M+S*b,v=v*M+E*b,g=g*M+T*b,M===1-d){const O=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=O,m*=O,v*=O,g*=O}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,f){const d=s[l],p=s[l+1],m=s[l+2],v=s[l+3],g=u[f],_=u[f+1],S=u[f+2],E=u[f+3];return t[i]=d*E+v*g+p*S-m*_,t[i+1]=p*E+v*_+m*g-d*S,t[i+2]=m*E+v*S+d*_-p*g,t[i+3]=v*E-d*g-p*_-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(l/2),g=d(u/2),_=p(s/2),S=p(l/2),E=p(u/2);switch(f){case"XYZ":this._x=_*v*g+m*S*E,this._y=m*S*g-_*v*E,this._z=m*v*E+_*S*g,this._w=m*v*g-_*S*E;break;case"YXZ":this._x=_*v*g+m*S*E,this._y=m*S*g-_*v*E,this._z=m*v*E-_*S*g,this._w=m*v*g+_*S*E;break;case"ZXY":this._x=_*v*g-m*S*E,this._y=m*S*g+_*v*E,this._z=m*v*E+_*S*g,this._w=m*v*g-_*S*E;break;case"ZYX":this._x=_*v*g-m*S*E,this._y=m*S*g+_*v*E,this._z=m*v*E-_*S*g,this._w=m*v*g+_*S*E;break;case"YZX":this._x=_*v*g+m*S*E,this._y=m*S*g+_*v*E,this._z=m*v*E-_*S*g,this._w=m*v*g-_*S*E;break;case"XZY":this._x=_*v*g-m*S*E,this._y=m*S*g-_*v*E,this._z=m*v*E+_*S*g,this._w=m*v*g+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],f=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],_=s+d+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-m)*S,this._z=(f-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(v-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(u+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(u-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(f-l)/S,this._x=(u+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,f=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+f*d+l*m-u*p,this._y=l*v+f*p+u*d-s*m,this._z=u*v+f*m+s*p-l*d,this._w=f*v-s*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-i)*v)/m,_=Math.sin(i*v)/m;return this._w=f*g+this._w*_,this._x=s*g+this._x*_,this._y=l*g+this._y*_,this._z=u*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,i=0,s=0){G.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(vy.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(vy.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),v=2*(d*i-u*l),g=2*(u*s-f*i);return this.x=i+p*m+f*g-d*v,this.y=s+p*v+d*m-u*g,this.z=l+p*g+u*v-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return kd.copy(this).projectOnVector(t),this.sub(kd)}reflect(t){return this.sub(kd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kd=new G,vy=new Jn;class ye{constructor(t,i,s,l,u,f,d,p,m){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,p,m)}set(t,i,s,l,u,f,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],v=s[4],g=s[7],_=s[2],S=s[5],E=s[8],T=l[0],M=l[3],y=l[6],U=l[1],C=l[4],b=l[7],O=l[2],B=l[5],P=l[8];return u[0]=f*T+d*U+p*O,u[3]=f*M+d*C+p*B,u[6]=f*y+d*b+p*P,u[1]=m*T+v*U+g*O,u[4]=m*M+v*C+g*B,u[7]=m*y+v*b+g*P,u[2]=_*T+S*U+E*O,u[5]=_*M+S*C+E*B,u[8]=_*y+S*b+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*f*v-i*d*m-s*u*v+s*d*p+l*u*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=v*f-d*m,_=d*p-v*u,S=m*u-f*p,E=i*g+s*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=g*T,t[1]=(l*m-v*s)*T,t[2]=(d*s-l*f)*T,t[3]=_*T,t[4]=(v*i-l*p)*T,t[5]=(l*u-d*i)*T,t[6]=S*T,t[7]=(s*p-m*i)*T,t[8]=(f*i-s*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Xd.makeScale(t,i)),this}rotate(t){return this.premultiply(Xd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Xd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xd=new ye;function qx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function nf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bT(){const o=nf("canvas");return o.style.display="block",o}const _y={};function Gl(o){o in _y||(_y[o]=!0,console.warn(o))}function AT(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const yy=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xy=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RT(){const o={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ye&&(l.r=Oa(l.r),l.g=Oa(l.g),l.b=Oa(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ye&&(l.r=po(l.r),l.g=po(l.g),l.b=po(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ms?tf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Gl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Gl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[yo]:{primaries:t,whitePoint:s,transfer:tf,toXYZ:yy,fromXYZ:xy,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:s,transfer:Ye,toXYZ:yy,fromXYZ:xy,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const Le=RT();function Oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function po(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let jr;class wT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{jr===void 0&&(jr=nf("canvas")),jr.width=t.width,jr.height=t.height;const l=jr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=jr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=Oa(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Oa(i[s]/255)*255):i[s]=Oa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let CT=0;class Dm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=ir(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(qd(l[f].image)):u.push(qd(l[f]))}else u=qd(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function qd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DT=0;const Yd=new G;class Xn extends To{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Ks,l=Ks,u=sa,f=Js,d=ki,p=qi,m=Xn.DEFAULT_ANISOTROPY,v=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=ir(),this.name="",this.source=new Dm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yd).x}get height(){return this.source.getSize(Yd).y}get depth(){return this.source.getSize(Yd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Px)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zp:t.x=t.x-Math.floor(t.x);break;case Ks:t.x=t.x<0?0:1;break;case Ip:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zp:t.y=t.y-Math.floor(t.y);break;case Ks:t.y=t.y<0?0:1;break;case Ip:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Px;Xn.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,i=0,s=0,l=1){cn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],v=p[4],g=p[8],_=p[1],S=p[5],E=p[9],T=p[2],M=p[6],y=p[10];if(Math.abs(v-_)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(m+1)/2,b=(S+1)/2,O=(y+1)/2,B=(v+_)/4,P=(g+T)/4,V=(E+M)/4;return C>b&&C>O?C<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(C),l=B/s,u=P/s):b>O?b<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(b),s=B/l,u=V/l):O<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(O),s=P/u,l=V/u),this.set(s,l,u,i),this}let U=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(_-v)*(_-v));return Math.abs(U)<.001&&(U=1),this.x=(M-E)/U,this.y=(g-T)/U,this.z=(_-v)/U,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NT extends To{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Xn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:sa,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Dm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends NT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Yx extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class UT extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(t=new G(1/0,1/0,1/0),i=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Fi):Fi.fromBufferAttribute(u,f),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xl),_c.subVectors(this.max,xl),Zr.subVectors(t.a,xl),Qr.subVectors(t.b,xl),Kr.subVectors(t.c,xl),us.subVectors(Qr,Zr),cs.subVectors(Kr,Qr),Gs.subVectors(Zr,Kr);let i=[0,-us.z,us.y,0,-cs.z,cs.y,0,-Gs.z,Gs.y,us.z,0,-us.x,cs.z,0,-cs.x,Gs.z,0,-Gs.x,-us.y,us.x,0,-cs.y,cs.x,0,-Gs.y,Gs.x,0];return!Wd(i,Zr,Qr,Kr,_c)||(i=[1,0,0,0,1,0,0,0,1],!Wd(i,Zr,Qr,Kr,_c))?!1:(yc.crossVectors(us,cs),i=[yc.x,yc.y,yc.z],Wd(i,Zr,Qr,Kr,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ba=[new G,new G,new G,new G,new G,new G,new G,new G],Fi=new G,vc=new ar,Zr=new G,Qr=new G,Kr=new G,us=new G,cs=new G,Gs=new G,xl=new G,_c=new G,yc=new G,Vs=new G;function Wd(o,t,i,s,l){for(let u=0,f=o.length-3;u<=f;u+=3){Vs.fromArray(o,u);const d=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),p=t.dot(Vs),m=i.dot(Vs),v=s.dot(Vs);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const LT=new ar,Sl=new G,jd=new G;class sr{constructor(t=new G,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):LT.setFromPoints(t).getCenter(s);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sl.subVectors(t,this.center);const i=Sl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Sl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sl.copy(t.center).add(jd)),this.expandByPoint(Sl.copy(t.center).sub(jd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Aa=new G,Zd=new G,xc=new G,fs=new G,Qd=new G,Sc=new G,Kd=new G;class Nm{constructor(t=new G,i=new G(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Zd.copy(t).add(i).multiplyScalar(.5),xc.copy(i).sub(t).normalize(),fs.copy(this.origin).sub(Zd);const u=t.distanceTo(i)*.5,f=-this.direction.dot(xc),d=fs.dot(this.direction),p=-fs.dot(xc),m=fs.lengthSq(),v=Math.abs(1-f*f);let g,_,S,E;if(v>0)if(g=f*p-d,_=f*d-p,E=u*v,g>=0)if(_>=-E)if(_<=E){const T=1/v;g*=T,_*=T,S=g*(g+f*_+2*d)+_*(f*g+_+2*p)+m}else _=u,g=Math.max(0,-(f*_+d)),S=-g*g+_*(_+2*p)+m;else _=-u,g=Math.max(0,-(f*_+d)),S=-g*g+_*(_+2*p)+m;else _<=-E?(g=Math.max(0,-(-f*u+d)),_=g>0?-u:Math.min(Math.max(-u,-p),u),S=-g*g+_*(_+2*p)+m):_<=E?(g=0,_=Math.min(Math.max(-u,-p),u),S=_*(_+2*p)+m):(g=Math.max(0,-(f*u+d)),_=g>0?u:Math.min(Math.max(-u,-p),u),S=-g*g+_*(_+2*p)+m);else _=f>0?-u:u,g=Math.max(0,-(f*_+d)),S=-g*g+_*(_+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Zd).addScaledVector(xc,_),S}intersectSphere(t,i){Aa.subVectors(t.center,this.origin);const s=Aa.dot(this.direction),l=Aa.dot(Aa)-s*s,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return m>=0?(s=(t.min.x-_.x)*m,l=(t.max.x-_.x)*m):(s=(t.max.x-_.x)*m,l=(t.min.x-_.x)*m),v>=0?(u=(t.min.y-_.y)*v,f=(t.max.y-_.y)*v):(u=(t.max.y-_.y)*v,f=(t.min.y-_.y)*v),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-_.z)*g,p=(t.max.z-_.z)*g):(d=(t.max.z-_.z)*g,p=(t.min.z-_.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Aa)!==null}intersectTriangle(t,i,s,l,u){Qd.subVectors(i,t),Sc.subVectors(s,t),Kd.crossVectors(Qd,Sc);let f=this.direction.dot(Kd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fs.subVectors(this.origin,t);const p=d*this.direction.dot(Sc.crossVectors(fs,Sc));if(p<0)return null;const m=d*this.direction.dot(Qd.cross(fs));if(m<0||p+m>f)return null;const v=-d*fs.dot(Kd);return v<0?null:this.at(v/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(t,i,s,l,u,f,d,p,m,v,g,_,S,E,T,M){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,p,m,v,g,_,S,E,T,M)}set(t,i,s,l,u,f,d,p,m,v,g,_,S,E,T,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=s,y[12]=l,y[1]=u,y[5]=f,y[9]=d,y[13]=p,y[2]=m,y[6]=v,y[10]=g,y[14]=_,y[3]=S,y[7]=E,y[11]=T,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Jr.setFromMatrixColumn(t,0).length(),u=1/Jr.setFromMatrixColumn(t,1).length(),f=1/Jr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const _=f*v,S=f*g,E=d*v,T=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=S+E*m,i[5]=_-T*m,i[9]=-d*p,i[2]=T-_*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const _=p*v,S=p*g,E=m*v,T=m*g;i[0]=_+T*d,i[4]=E*d-S,i[8]=f*m,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=S*d-E,i[6]=T+_*d,i[10]=f*p}else if(t.order==="ZXY"){const _=p*v,S=p*g,E=m*v,T=m*g;i[0]=_-T*d,i[4]=-f*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*v,i[9]=T-_*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const _=f*v,S=f*g,E=d*v,T=d*g;i[0]=p*v,i[4]=E*m-S,i[8]=_*m+T,i[1]=p*g,i[5]=T*m+_,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const _=f*p,S=f*m,E=d*p,T=d*m;i[0]=p*v,i[4]=T-_*g,i[8]=E*g+S,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-m*v,i[6]=S*g+E,i[10]=_-T*g}else if(t.order==="XZY"){const _=f*p,S=f*m,E=d*p,T=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=_*g+T,i[5]=f*v,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*v,i[10]=T*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(OT,t,PT)}lookAt(t,i,s){const l=this.elements;return mi.subVectors(t,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),hs.crossVectors(s,mi),hs.lengthSq()===0&&(Math.abs(s.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),hs.crossVectors(s,mi)),hs.normalize(),Mc.crossVectors(mi,hs),l[0]=hs.x,l[4]=Mc.x,l[8]=mi.x,l[1]=hs.y,l[5]=Mc.y,l[9]=mi.y,l[2]=hs.z,l[6]=Mc.z,l[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],v=s[1],g=s[5],_=s[9],S=s[13],E=s[2],T=s[6],M=s[10],y=s[14],U=s[3],C=s[7],b=s[11],O=s[15],B=l[0],P=l[4],V=l[8],N=l[12],R=l[1],H=l[5],W=l[9],D=l[13],q=l[2],Y=l[6],z=l[10],J=l[14],Q=l[3],ut=l[7],yt=l[11],St=l[15];return u[0]=f*B+d*R+p*q+m*Q,u[4]=f*P+d*H+p*Y+m*ut,u[8]=f*V+d*W+p*z+m*yt,u[12]=f*N+d*D+p*J+m*St,u[1]=v*B+g*R+_*q+S*Q,u[5]=v*P+g*H+_*Y+S*ut,u[9]=v*V+g*W+_*z+S*yt,u[13]=v*N+g*D+_*J+S*St,u[2]=E*B+T*R+M*q+y*Q,u[6]=E*P+T*H+M*Y+y*ut,u[10]=E*V+T*W+M*z+y*yt,u[14]=E*N+T*D+M*J+y*St,u[3]=U*B+C*R+b*q+O*Q,u[7]=U*P+C*H+b*Y+O*ut,u[11]=U*V+C*W+b*z+O*yt,u[15]=U*N+C*D+b*J+O*St,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],f=t[1],d=t[5],p=t[9],m=t[13],v=t[2],g=t[6],_=t[10],S=t[14],E=t[3],T=t[7],M=t[11],y=t[15];return E*(+u*p*g-l*m*g-u*d*_+s*m*_+l*d*S-s*p*S)+T*(+i*p*S-i*m*_+u*f*_-l*f*S+l*m*v-u*p*v)+M*(+i*m*g-i*d*S-u*f*g+s*f*S+u*d*v-s*m*v)+y*(-l*d*v-i*p*g+i*d*_+l*f*g-s*f*_+s*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=t[9],_=t[10],S=t[11],E=t[12],T=t[13],M=t[14],y=t[15],U=g*M*m-T*_*m+T*p*S-d*M*S-g*p*y+d*_*y,C=E*_*m-v*M*m-E*p*S+f*M*S+v*p*y-f*_*y,b=v*T*m-E*g*m+E*d*S-f*T*S-v*d*y+f*g*y,O=E*g*p-v*T*p-E*d*_+f*T*_+v*d*M-f*g*M,B=i*U+s*C+l*b+u*O;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return t[0]=U*P,t[1]=(T*_*u-g*M*u-T*l*S+s*M*S+g*l*y-s*_*y)*P,t[2]=(d*M*u-T*p*u+T*l*m-s*M*m-d*l*y+s*p*y)*P,t[3]=(g*p*u-d*_*u-g*l*m+s*_*m+d*l*S-s*p*S)*P,t[4]=C*P,t[5]=(v*M*u-E*_*u+E*l*S-i*M*S-v*l*y+i*_*y)*P,t[6]=(E*p*u-f*M*u-E*l*m+i*M*m+f*l*y-i*p*y)*P,t[7]=(f*_*u-v*p*u+v*l*m-i*_*m-f*l*S+i*p*S)*P,t[8]=b*P,t[9]=(E*g*u-v*T*u-E*s*S+i*T*S+v*s*y-i*g*y)*P,t[10]=(f*T*u-E*d*u+E*s*m-i*T*m-f*s*y+i*d*y)*P,t[11]=(v*d*u-f*g*u-v*s*m+i*g*m+f*s*S-i*d*S)*P,t[12]=O*P,t[13]=(v*T*l-E*g*l+E*s*_-i*T*_-v*s*M+i*g*M)*P,t[14]=(E*d*l-f*T*l-E*s*p+i*T*p+f*s*M-i*d*M)*P,t[15]=(f*g*l-v*d*l+v*s*p-i*g*p-f*s*_+i*d*_)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=t.x,d=t.y,p=t.z,m=u*f,v=u*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+s,v*p-l*f,0,m*p-l*d,v*p+l*f,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,f){return this.set(1,s,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,f=i._y,d=i._z,p=i._w,m=u+u,v=f+f,g=d+d,_=u*m,S=u*v,E=u*g,T=f*v,M=f*g,y=d*g,U=p*m,C=p*v,b=p*g,O=s.x,B=s.y,P=s.z;return l[0]=(1-(T+y))*O,l[1]=(S+b)*O,l[2]=(E-C)*O,l[3]=0,l[4]=(S-b)*B,l[5]=(1-(_+y))*B,l[6]=(M+U)*B,l[7]=0,l[8]=(E+C)*P,l[9]=(M-U)*P,l[10]=(1-(_+T))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=Jr.set(l[0],l[1],l[2]).length();const f=Jr.set(l[4],l[5],l[6]).length(),d=Jr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Hi.copy(this);const m=1/u,v=1/f,g=1/d;return Hi.elements[0]*=m,Hi.elements[1]*=m,Hi.elements[2]*=m,Hi.elements[4]*=v,Hi.elements[5]*=v,Hi.elements[6]*=v,Hi.elements[8]*=g,Hi.elements[9]*=g,Hi.elements[10]*=g,i.setFromRotationMatrix(Hi),s.x=u,s.y=f,s.z=d,this}makePerspective(t,i,s,l,u,f,d=oa,p=!1){const m=this.elements,v=2*u/(i-t),g=2*u/(s-l),_=(i+t)/(i-t),S=(s+l)/(s-l);let E,T;if(p)E=u/(f-u),T=f*u/(f-u);else if(d===oa)E=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===ef)E=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,f,d=oa,p=!1){const m=this.elements,v=2/(i-t),g=2/(s-l),_=-(i+t)/(i-t),S=-(s+l)/(s-l);let E,T;if(p)E=1/(f-u),T=f/(f-u);else if(d===oa)E=-2/(f-u),T=-(f+u)/(f-u);else if(d===ef)E=-1/(f-u),T=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=g,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Jr=new G,Hi=new Ve,OT=new G(0,0,0),PT=new G(1,1,1),hs=new G,Mc=new G,mi=new G,Sy=new Ve,My=new Jn;class Ui{constructor(t=0,i=0,s=0,l=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Sy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sy,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return My.setFromEuler(this),this.setFromQuaternion(My,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Wx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zT=0;const Ey=new G,$r=new Jn,Ra=new Ve,Ec=new G,Ml=new G,IT=new G,BT=new Jn,Ty=new G(1,0,0),by=new G(0,1,0),Ay=new G(0,0,1),Ry={type:"added"},FT={type:"removed"},to={type:"childadded",child:null},Jd={type:"childremoved",child:null};class xn extends To{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new G,i=new Ui,s=new Jn,l=new G(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ye}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return $r.setFromAxisAngle(t,i),this.quaternion.multiply($r),this}rotateOnWorldAxis(t,i){return $r.setFromAxisAngle(t,i),this.quaternion.premultiply($r),this}rotateX(t){return this.rotateOnAxis(Ty,t)}rotateY(t){return this.rotateOnAxis(by,t)}rotateZ(t){return this.rotateOnAxis(Ay,t)}translateOnAxis(t,i){return Ey.copy(t).applyQuaternion(this.quaternion),this.position.add(Ey.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ty,t)}translateY(t){return this.translateOnAxis(by,t)}translateZ(t){return this.translateOnAxis(Ay,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ec.copy(t):Ec.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(Ml,Ec,this.up):Ra.lookAt(Ec,Ml,this.up),this.quaternion.setFromRotationMatrix(Ra),l&&(Ra.extractRotation(l.matrixWorld),$r.setFromRotationMatrix(Ra),this.quaternion.premultiply($r.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ry),to.child=t,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(FT),Jd.child=t,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ry),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,t,IT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,BT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),v=f(t.images),g=f(t.shapes),_=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}xn.DEFAULT_UP=new G(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new G,wa=new G,$d=new G,Ca=new G,eo=new G,no=new G,wy=new G,tp=new G,ep=new G,np=new G,ip=new cn,ap=new cn,sp=new cn;class Vi{constructor(t=new G,i=new G,s=new G){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Gi.subVectors(t,i),l.cross(Gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Gi.subVectors(l,i),wa.subVectors(s,i),$d.subVectors(t,i);const f=Gi.dot(Gi),d=Gi.dot(wa),p=Gi.dot($d),m=wa.dot(wa),v=wa.dot($d),g=f*m-d*d;if(g===0)return u.set(0,0,0),null;const _=1/g,S=(m*p-d*v)*_,E=(f*v-d*p)*_;return u.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(t,i,s,l,u,f,d,p){return this.getBarycoord(t,i,s,l,Ca)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ca.x),p.addScaledVector(f,Ca.y),p.addScaledVector(d,Ca.z),p)}static getInterpolatedAttribute(t,i,s,l,u,f){return ip.setScalar(0),ap.setScalar(0),sp.setScalar(0),ip.fromBufferAttribute(t,i),ap.fromBufferAttribute(t,s),sp.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(ip,u.x),f.addScaledVector(ap,u.y),f.addScaledVector(sp,u.z),f}static isFrontFacing(t,i,s,l){return Gi.subVectors(s,i),wa.subVectors(t,i),Gi.cross(wa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),wa.subVectors(this.a,this.b),Gi.cross(wa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let f,d;eo.subVectors(l,s),no.subVectors(u,s),tp.subVectors(t,s);const p=eo.dot(tp),m=no.dot(tp);if(p<=0&&m<=0)return i.copy(s);ep.subVectors(t,l);const v=eo.dot(ep),g=no.dot(ep);if(v>=0&&g<=v)return i.copy(l);const _=p*g-v*m;if(_<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(s).addScaledVector(eo,f);np.subVectors(t,u);const S=eo.dot(np),E=no.dot(np);if(E>=0&&S<=E)return i.copy(u);const T=S*m-p*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(no,d);const M=v*E-S*g;if(M<=0&&g-v>=0&&S-E>=0)return wy.subVectors(u,l),d=(g-v)/(g-v+(S-E)),i.copy(l).addScaledVector(wy,d);const y=1/(M+T+_);return f=T*y,d=_*y,i.copy(s).addScaledVector(eo,f).addScaledVector(no,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function rp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class de{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=Cm(t,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=rp(f,u,t+1/3),this.g=rp(f,u,t),this.b=rp(f,u,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const s=jx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}copyLinearToSRGB(t){return this.r=po(t.r),this.g=po(t.g),this.b=po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Le.workingToColorSpace(Vn.copy(this),t),Math.round(Ae(Vn.r*255,0,255))*65536+Math.round(Ae(Vn.g*255,0,255))*256+Math.round(Ae(Vn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,u=Vn.b,f=Math.max(s,l,u),d=Math.min(s,l,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const g=f-d;switch(m=v<=.5?g/(f+d):g/(2-f-d),f){case s:p=(l-u)/g+(l<u?6:0);break;case l:p=(u-s)/g+2;break;case u:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Vn.copy(this),i),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=si){Le.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,s=Vn.g,l=Vn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+i,ds.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ds),t.getHSL(Tc);const s=Ul(ds.h,Tc.h,i),l=Ul(ds.s,Tc.s,i),u=Ul(ds.l,Tc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new de;de.NAMES=jx;let HT=0;class rr extends To{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=ho,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bp,this.blendDst=Ap,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(s.blending=this.blending),this.side!==gs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==bp&&(s.blendSrc=this.blendSrc),this.blendDst!==Ap&&(s.blendDst=this.blendDst),this.blendEquation!==Zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dy&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mo extends rr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yn=new G,bc=new Vt;let GT=0;class Tn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=py,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=lo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=lo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=lo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=lo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=lo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array),u=Qn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==py&&(t.usage=this.usage),t}}class Zx extends Tn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Qx extends Tn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ze extends Tn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let VT=0;const Ci=new Ve,op=new xn,io=new G,gi=new ar,El=new ar,Nn=new G;class Rn extends To{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qx(t)?Qx:Zx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ye().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,i,s){return Ci.makeTranslation(t,i,s),this.applyMatrix4(Ci),this}scale(t,i,s){return Ci.makeScale(t,i,s),this.applyMatrix4(Ci),this}lookAt(t){return op.lookAt(t),op.updateMatrix(),this.applyMatrix4(op.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ze(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];gi.setFromBufferAttribute(u),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const s=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];El.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(gi.min,El.min),gi.expandByPoint(Nn),Nn.addVectors(gi.max,El.max),gi.expandByPoint(Nn)):(gi.expandByPoint(El.min),gi.expandByPoint(El.max))}gi.getCenter(s);let l=0;for(let u=0,f=t.count;u<f;u++)Nn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Nn.fromBufferAttribute(d,m),p&&(io.fromBufferAttribute(t,m),Nn.add(io)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<s.count;V++)d[V]=new G,p[V]=new G;const m=new G,v=new G,g=new G,_=new Vt,S=new Vt,E=new Vt,T=new G,M=new G;function y(V,N,R){m.fromBufferAttribute(s,V),v.fromBufferAttribute(s,N),g.fromBufferAttribute(s,R),_.fromBufferAttribute(u,V),S.fromBufferAttribute(u,N),E.fromBufferAttribute(u,R),v.sub(m),g.sub(m),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(H),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(H),d[V].add(T),d[N].add(T),d[R].add(T),p[V].add(M),p[N].add(M),p[R].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let V=0,N=U.length;V<N;++V){const R=U[V],H=R.start,W=R.count;for(let D=H,q=H+W;D<q;D+=3)y(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const C=new G,b=new G,O=new G,B=new G;function P(V){O.fromBufferAttribute(l,V),B.copy(O);const N=d[V];C.copy(N),C.sub(O.multiplyScalar(O.dot(N))).normalize(),b.crossVectors(B,N);const H=b.dot(p[V])<0?-1:1;f.setXYZW(V,C.x,C.y,C.z,H)}for(let V=0,N=U.length;V<N;++V){const R=U[V],H=R.start,W=R.count;for(let D=H,q=H+W;D<q;D+=3)P(t.getX(D+0)),P(t.getX(D+1)),P(t.getX(D+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Tn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const l=new G,u=new G,f=new G,d=new G,p=new G,m=new G,v=new G,g=new G;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,M),d.add(v),p.add(v),m.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,g=d.normalized,_=new m.constructor(p.length*v);let S=0,E=0;for(let T=0,M=p.length;T<M;T++){d.isInterleavedBufferAttribute?S=p[T]*d.data.stride+d.offset:S=p[T]*v;for(let y=0;y<v;y++)_[E++]=m[S++]}return new Tn(_,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Rn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,g=m.length;v<g;v++){const _=m[v],S=t(_,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,_=m.length;g<_;g++){const S=m[g];v.push(S.toJSON(t.data))}v.length>0&&(l[p]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const u=t.morphAttributes;for(const m in u){const v=[],g=u[m];for(let _=0,S=g.length;_<S;_++)v.push(g[_].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cy=new Ve,ks=new Nm,Ac=new sr,Dy=new G,Rc=new G,wc=new G,Cc=new G,lp=new G,Dc=new G,Ny=new G,Nc=new G;class fn extends xn{constructor(t=new Rn,i=new mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Dc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],g=u[p];v!==0&&(lp.fromBufferAttribute(g,t),f?Dc.addScaledVector(lp,v):Dc.addScaledVector(lp.sub(i),v))}i.add(Dc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(u),ks.copy(t.ray).recast(t.near),!(Ac.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Ac,Dy)===null||ks.origin.distanceToSquared(Dy)>(t.far-t.near)**2))&&(Cy.copy(u).invert(),ks.copy(t.ray).applyMatrix4(Cy),!(s.boundingBox!==null&&ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ks)))}_computeIntersections(t,i,s){let l;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,_=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const M=_[E],y=f[M.materialIndex],U=Math.max(M.start,S.start),C=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let b=U,O=C;b<O;b+=3){const B=d.getX(b),P=d.getX(b+1),V=d.getX(b+2);l=Uc(this,y,t,s,m,v,g,B,P,V),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let M=E,y=T;M<y;M+=3){const U=d.getX(M),C=d.getX(M+1),b=d.getX(M+2);l=Uc(this,f,t,s,m,v,g,U,C,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const M=_[E],y=f[M.materialIndex],U=Math.max(M.start,S.start),C=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let b=U,O=C;b<O;b+=3){const B=b,P=b+1,V=b+2;l=Uc(this,y,t,s,m,v,g,B,P,V),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let M=E,y=T;M<y;M+=3){const U=M,C=M+1,b=M+2;l=Uc(this,f,t,s,m,v,g,U,C,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function kT(o,t,i,s,l,u,f,d){let p;if(t.side===kn?p=s.intersectTriangle(f,u,l,!0,d):p=s.intersectTriangle(l,u,f,t.side===gs,d),p===null)return null;Nc.copy(d),Nc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Nc);return m<i.near||m>i.far?null:{distance:m,point:Nc.clone(),object:o}}function Uc(o,t,i,s,l,u,f,d,p,m){o.getVertexPosition(d,Rc),o.getVertexPosition(p,wc),o.getVertexPosition(m,Cc);const v=kT(o,t,i,s,Rc,wc,Cc,Ny);if(v){const g=new G;Vi.getBarycoord(Ny,Rc,wc,Cc,g),l&&(v.uv=Vi.getInterpolatedAttribute(l,d,p,m,g,new Vt)),u&&(v.uv1=Vi.getInterpolatedAttribute(u,d,p,m,g,new Vt)),f&&(v.normal=Vi.getInterpolatedAttribute(f,d,p,m,g,new G),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:p,c:m,normal:new G,materialIndex:0};Vi.getNormal(Rc,wc,Cc,_.normal),v.face=_,v.barycoord=g}return v}class bo extends Rn{constructor(t=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],g=[];let _=0,S=0;E("z","y","x",-1,-1,s,i,t,f,u,0),E("z","y","x",1,-1,s,i,-t,f,u,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(g,2));function E(T,M,y,U,C,b,O,B,P,V,N){const R=b/P,H=O/V,W=b/2,D=O/2,q=B/2,Y=P+1,z=V+1;let J=0,Q=0;const ut=new G;for(let yt=0;yt<z;yt++){const St=yt*H-D;for(let Ft=0;Ft<Y;Ft++){const Qt=Ft*R-W;ut[T]=Qt*U,ut[M]=St*C,ut[y]=q,m.push(ut.x,ut.y,ut.z),ut[T]=0,ut[M]=0,ut[y]=B>0?1:-1,v.push(ut.x,ut.y,ut.z),g.push(Ft/P),g.push(1-yt/V),J+=1}}for(let yt=0;yt<V;yt++)for(let St=0;St<P;St++){const Ft=_+St+Y*yt,Qt=_+St+Y*(yt+1),X=_+(St+1)+Y*(yt+1),pt=_+(St+1)+Y*yt;p.push(Ft,Qt,pt),p.push(Qt,X,pt),Q+=6}d.addGroup(S,Q,N),S+=Q,_+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xo(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Kn(o){const t={};for(let i=0;i<o.length;i++){const s=xo(o[i]);for(const l in s)t[l]=s[l]}return t}function XT(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Kx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Vl={clone:xo,merge:Kn};var qT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends rr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qT,this.fragmentShader=YT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xo(t.uniforms),this.uniformsGroups=XT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Jx extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new G,Uy=new Vt,Ly=new Vt;class vi extends Jx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Hl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,i){return this.getViewBounds(t,Uy,Ly),i.subVectors(Ly,Uy)}setViewOffset(t,i,s,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Nl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ao=-90,so=1;class WT extends xn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(ao,so,t,i);l.layers=this.layers,this.add(l);const u=new vi(ao,so,t,i);u.layers=this.layers,this.add(u);const f=new vi(ao,so,t,i);f.layers=this.layers,this.add(f);const d=new vi(ao,so,t,i);d.layers=this.layers,this.add(d);const p=new vi(ao,so,t,i);p.layers=this.layers,this.add(p);const m=new vi(ao,so,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,d,p]=i;for(const m of i)this.remove(m);if(t===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===ef)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,_,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class $x extends Xn{constructor(t=[],i=vo,s,l,u,f,d,p,m,v){super(t,i,s,l,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jT extends Ni{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new $x(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new bo(5,5,5),u=new rn({name:"CubemapFromEquirect",uniforms:xo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Ua});u.uniforms.tEquirect.value=i;const f=new fn(l,u),d=i.minFilter;return i.minFilter===Js&&(i.minFilter=sa),new WT(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(u)}}class $s extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZT={type:"move"};class up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),y=this._getHandJoint(m,T);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],_=v.position.distanceTo(g.position),S=.02,E=.005;m.inputState.pinching&&_>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ZT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new $s;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class tS extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class QT extends Xn{constructor(t=null,i=1,s=1,l,u,f,d,p,m=_i,v=_i,g,_){super(null,f,d,p,m,v,l,u,g,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oy extends Tn{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ro=new Ve,Py=new Ve,Lc=[],zy=new ar,KT=new Ve,Tl=new fn,bl=new sr;class JT extends fn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Oy(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,KT)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ar),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,ro),zy.copy(t.boundingBox).applyMatrix4(ro),this.boundingBox.union(zy)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new sr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,ro),bl.copy(t.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(bl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=s.length+1,f=t*u+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Tl.geometry=this.geometry,Tl.material=this.material,Tl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(s),t.ray.intersectsSphere(bl)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,ro),Py.multiplyMatrices(s,ro),Tl.matrixWorld=Py,Tl.raycast(t,Lc);for(let f=0,d=Lc.length;f<d;f++){const p=Lc[f];p.instanceId=u,p.object=this,i.push(p)}Lc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Oy(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new QT(new Float32Array(l*this.count),l,this.count,bm,ra));const u=this.morphTexture.source.data.data;let f=0;for(let m=0;m<s.length;m++)f+=s[m];const d=this.geometry.morphTargetsRelative?1:1-f,p=l*t;u[p]=d,u.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const cp=new G,$T=new G,tb=new ye;class Ws{constructor(t=new G(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=cp.subVectors(s,i).cross($T.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(cp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||tb.getNormalMatrix(t),l=this.coplanarPoint(cp).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new sr,eb=new Vt(.5,.5),Oc=new G;class Um{constructor(t=new Ws,i=new Ws,s=new Ws,l=new Ws,u=new Ws,f=new Ws){this.planes=[t,i,s,l,u,f]}set(t,i,s,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=oa,s=!1){const l=this.planes,u=t.elements,f=u[0],d=u[1],p=u[2],m=u[3],v=u[4],g=u[5],_=u[6],S=u[7],E=u[8],T=u[9],M=u[10],y=u[11],U=u[12],C=u[13],b=u[14],O=u[15];if(l[0].setComponents(m-f,S-v,y-E,O-U).normalize(),l[1].setComponents(m+f,S+v,y+E,O+U).normalize(),l[2].setComponents(m+d,S+g,y+T,O+C).normalize(),l[3].setComponents(m-d,S-g,y-T,O-C).normalize(),s)l[4].setComponents(p,_,M,b).normalize(),l[5].setComponents(m-p,S-_,y-M,O-b).normalize();else if(l[4].setComponents(m-p,S-_,y-M,O-b).normalize(),i===oa)l[5].setComponents(m+p,S+_,y+M,O+b).normalize();else if(i===ef)l[5].setComponents(p,_,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const i=eb.distanceTo(t.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nb extends rr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const af=new G,sf=new G,Iy=new Ve,Al=new Nm,Pc=new sr,fp=new G,By=new G;class eS extends xn{constructor(t=new Rn,i=new nb){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)af.fromBufferAttribute(i,l-1),sf.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=af.distanceTo(sf);t.setAttribute("lineDistance",new Ze(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=u,t.ray.intersectsSphere(Pc)===!1)return;Iy.copy(l).invert(),Al.copy(t.ray).applyMatrix4(Iy);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=s.index,_=s.attributes.position;if(v!==null){const S=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=S,M=E-1;T<M;T+=m){const y=v.getX(T),U=v.getX(T+1),C=zc(this,t,Al,p,y,U,T);C&&i.push(C)}if(this.isLineLoop){const T=v.getX(E-1),M=v.getX(S),y=zc(this,t,Al,p,T,M,E-1);y&&i.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let T=S,M=E-1;T<M;T+=m){const y=zc(this,t,Al,p,T,T+1,T);y&&i.push(y)}if(this.isLineLoop){const T=zc(this,t,Al,p,E-1,S,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function zc(o,t,i,s,l,u,f){const d=o.geometry.attributes.position;if(af.fromBufferAttribute(d,l),sf.fromBufferAttribute(d,u),i.distanceSqToSegment(af,sf,fp,By)>s)return;fp.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(fp);if(!(m<t.near||m>t.far))return{distance:m,point:By.clone().applyMatrix4(o.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:o}}const Fy=new G,Hy=new G;class ib extends eS{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)Fy.fromBufferAttribute(i,l),Hy.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Fy.distanceTo(Hy);t.setAttribute("lineDistance",new Ze(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ab extends rr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gy=new Ve,hm=new Nm,Ic=new sr,Bc=new G;class nS extends xn{constructor(t=new Rn,i=new ab){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=u,t.ray.intersectsSphere(Ic)===!1)return;Gy.copy(l).invert(),hm.copy(t.ray).applyMatrix4(Gy);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,g=s.attributes.position;if(m!==null){const _=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let E=_,T=S;E<T;E++){const M=m.getX(E);Bc.fromBufferAttribute(g,M),Vy(Bc,M,p,l,t,i,this)}}else{const _=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let E=_,T=S;E<T;E++)Bc.fromBufferAttribute(g,E),Vy(Bc,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Vy(o,t,i,s,l,u,f){const d=hm.distanceSqToPoint(o);if(d<i){const p=new G;hm.closestPointToPoint(o,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class sb extends Xn{constructor(t,i,s,l,u,f,d,p,m){super(t,i,s,l,u,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class iS extends Xn{constructor(t,i,s=tr,l,u,f,d=_i,p=_i,m,v=Bl,g=1){if(v!==Bl&&v!==Fl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:g};super(_,l,u,f,d,p,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class aS extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Lm extends Rn{constructor(t=1,i=1,s=1,l=32,u=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const v=[],g=[],_=[],S=[];let E=0;const T=[],M=s/2;let y=0;U(),f===!1&&(t>0&&C(!0),i>0&&C(!1)),this.setIndex(v),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(S,2));function U(){const b=new G,O=new G;let B=0;const P=(i-t)/s;for(let V=0;V<=u;V++){const N=[],R=V/u,H=R*(i-t)+t;for(let W=0;W<=l;W++){const D=W/l,q=D*p+d,Y=Math.sin(q),z=Math.cos(q);O.x=H*Y,O.y=-R*s+M,O.z=H*z,g.push(O.x,O.y,O.z),b.set(Y,P,z).normalize(),_.push(b.x,b.y,b.z),S.push(D,1-R),N.push(E++)}T.push(N)}for(let V=0;V<l;V++)for(let N=0;N<u;N++){const R=T[N][V],H=T[N+1][V],W=T[N+1][V+1],D=T[N][V+1];(t>0||N!==0)&&(v.push(R,H,D),B+=3),(i>0||N!==u-1)&&(v.push(H,W,D),B+=3)}m.addGroup(y,B,0),y+=B}function C(b){const O=E,B=new Vt,P=new G;let V=0;const N=b===!0?t:i,R=b===!0?1:-1;for(let W=1;W<=l;W++)g.push(0,M*R,0),_.push(0,R,0),S.push(.5,.5),E++;const H=E;for(let W=0;W<=l;W++){const q=W/l*p+d,Y=Math.cos(q),z=Math.sin(q);P.x=N*z,P.y=M*R,P.z=N*Y,g.push(P.x,P.y,P.z),_.push(0,R,0),B.x=Y*.5+.5,B.y=z*.5*R+.5,S.push(B.x,B.y),E++}for(let W=0;W<l;W++){const D=O+W,q=H+W;b===!0?v.push(q,q+1,D):v.push(q+1,q,D),V+=3}m.addGroup(y,V,b===!0?1:2),y+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lm(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Om extends Rn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const u=[],f=[];d(l),m(s),v(),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(u.slice(),3)),this.setAttribute("uv",new Ze(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(U){const C=new G,b=new G,O=new G;for(let B=0;B<i.length;B+=3)S(i[B+0],C),S(i[B+1],b),S(i[B+2],O),p(C,b,O,U)}function p(U,C,b,O){const B=O+1,P=[];for(let V=0;V<=B;V++){P[V]=[];const N=U.clone().lerp(b,V/B),R=C.clone().lerp(b,V/B),H=B-V;for(let W=0;W<=H;W++)W===0&&V===B?P[V][W]=N:P[V][W]=N.clone().lerp(R,W/H)}for(let V=0;V<B;V++)for(let N=0;N<2*(B-V)-1;N++){const R=Math.floor(N/2);N%2===0?(_(P[V][R+1]),_(P[V+1][R]),_(P[V][R])):(_(P[V][R+1]),_(P[V+1][R+1]),_(P[V+1][R]))}}function m(U){const C=new G;for(let b=0;b<u.length;b+=3)C.x=u[b+0],C.y=u[b+1],C.z=u[b+2],C.normalize().multiplyScalar(U),u[b+0]=C.x,u[b+1]=C.y,u[b+2]=C.z}function v(){const U=new G;for(let C=0;C<u.length;C+=3){U.x=u[C+0],U.y=u[C+1],U.z=u[C+2];const b=M(U)/2/Math.PI+.5,O=y(U)/Math.PI+.5;f.push(b,1-O)}E(),g()}function g(){for(let U=0;U<f.length;U+=6){const C=f[U+0],b=f[U+2],O=f[U+4],B=Math.max(C,b,O),P=Math.min(C,b,O);B>.9&&P<.1&&(C<.2&&(f[U+0]+=1),b<.2&&(f[U+2]+=1),O<.2&&(f[U+4]+=1))}}function _(U){u.push(U.x,U.y,U.z)}function S(U,C){const b=U*3;C.x=t[b+0],C.y=t[b+1],C.z=t[b+2]}function E(){const U=new G,C=new G,b=new G,O=new G,B=new Vt,P=new Vt,V=new Vt;for(let N=0,R=0;N<u.length;N+=9,R+=6){U.set(u[N+0],u[N+1],u[N+2]),C.set(u[N+3],u[N+4],u[N+5]),b.set(u[N+6],u[N+7],u[N+8]),B.set(f[R+0],f[R+1]),P.set(f[R+2],f[R+3]),V.set(f[R+4],f[R+5]),O.copy(U).add(C).add(b).divideScalar(3);const H=M(O);T(B,R+0,U,H),T(P,R+2,C,H),T(V,R+4,b,H)}}function T(U,C,b,O){O<0&&U.x===1&&(f[C]=U.x-1),b.x===0&&b.z===0&&(f[C]=O/2/Math.PI+.5)}function M(U){return Math.atan2(U.z,-U.x)}function y(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Om(t.vertices,t.indices,t.radius,t.details)}}class la{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const u=s.length;let f;i?f=i:f=t*s[u-1];let d=0,p=u-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(u-1);const v=s[l],_=s[l+1]-v,S=(f-v)/_;return(l+S)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const f=this.getPoint(l),d=this.getPoint(u),p=i||(f.isVector2?new Vt:new G);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new G,l=[],u=[],f=[],d=new G,p=new Ve;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new G)}u[0]=new G,f[0]=new G;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),_=Math.abs(l[0].z);v<=m&&(m=v,s.set(1,0,0)),g<=m&&(m=g,s.set(0,1,0)),_<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),f[0].crossVectors(l[0],u[0]);for(let S=1;S<=t;S++){if(u[S]=u[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ae(l[S-1].dot(l[S]),-1,1));u[S].applyMatrix4(p.makeRotationAxis(d,E))}f[S].crossVectors(l[S],u[S])}if(i===!0){let S=Math.acos(Ae(u[0].dot(u[t]),-1,1));S/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(S=-S);for(let E=1;E<=t;E++)u[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],u[E])}return{tangents:l,normals:u,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pm extends la{constructor(t=0,i=0,s=1,l=1,u=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new Vt){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const f=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(f?u=0:u=l),this.aClockwise===!0&&!f&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=p-this.aX,S=m-this.aY;p=_*v-S*g+this.aX,m=_*g+S*v+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rb extends Pm{constructor(t,i,s,l,u,f){super(t,i,s,s,l,u,f),this.isArcCurve=!0,this.type="ArcCurve"}}function zm(){let o=0,t=0,i=0,s=0;function l(u,f,d,p){o=u,t=d,i=-3*u+3*f-2*d-p,s=2*u-2*f+d+p}return{initCatmullRom:function(u,f,d,p,m){l(f,d,m*(d-u),m*(p-f))},initNonuniformCatmullRom:function(u,f,d,p,m,v,g){let _=(f-u)/m-(d-u)/(m+v)+(d-f)/v,S=(d-f)/v-(p-f)/(v+g)+(p-d)/g;_*=v,S*=v,l(f,d,_,S)},calc:function(u){const f=u*u,d=f*u;return o+t*u+i*f+s*d}}}const Fc=new G,hp=new zm,dp=new zm,pp=new zm;class dm extends la{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new G){const s=i,l=this.points,u=l.length,f=(u-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%u]:(Fc.subVectors(l[0],l[1]).add(l[0]),m=Fc);const g=l[d%u],_=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Fc.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Fc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),S),T=Math.pow(g.distanceToSquared(_),S),M=Math.pow(_.distanceToSquared(v),S);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),hp.initNonuniformCatmullRom(m.x,g.x,_.x,v.x,E,T,M),dp.initNonuniformCatmullRom(m.y,g.y,_.y,v.y,E,T,M),pp.initNonuniformCatmullRom(m.z,g.z,_.z,v.z,E,T,M)}else this.curveType==="catmullrom"&&(hp.initCatmullRom(m.x,g.x,_.x,v.x,this.tension),dp.initCatmullRom(m.y,g.y,_.y,v.y,this.tension),pp.initCatmullRom(m.z,g.z,_.z,v.z,this.tension));return s.set(hp.calc(p),dp.calc(p),pp.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new G().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ky(o,t,i,s,l){const u=(s-t)*.5,f=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+u+f)*p+(-3*i+3*s-2*u-f)*d+u*o+i}function ob(o,t){const i=1-o;return i*i*t}function lb(o,t){return 2*(1-o)*o*t}function ub(o,t){return o*o*t}function Ll(o,t,i,s){return ob(o,t)+lb(o,i)+ub(o,s)}function cb(o,t){const i=1-o;return i*i*i*t}function fb(o,t){const i=1-o;return 3*i*i*o*t}function hb(o,t){return 3*(1-o)*o*o*t}function db(o,t){return o*o*o*t}function Ol(o,t,i,s,l){return cb(o,t)+fb(o,i)+hb(o,s)+db(o,l)}class sS extends la{constructor(t=new Vt,i=new Vt,s=new Vt,l=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Vt){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(Ol(t,l.x,u.x,f.x,d.x),Ol(t,l.y,u.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pb extends la{constructor(t=new G,i=new G,s=new G,l=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new G){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(Ol(t,l.x,u.x,f.x,d.x),Ol(t,l.y,u.y,f.y,d.y),Ol(t,l.z,u.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rS extends la{constructor(t=new Vt,i=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Vt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Vt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mb extends la{constructor(t=new G,i=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new G){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new G){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oS extends la{constructor(t=new Vt,i=new Vt,s=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Vt){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(Ll(t,l.x,u.x,f.x),Ll(t,l.y,u.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lS extends la{constructor(t=new G,i=new G,s=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new G){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(Ll(t,l.x,u.x,f.x),Ll(t,l.y,u.y,f.y),Ll(t,l.z,u.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uS extends la{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Vt){const s=i,l=this.points,u=(l.length-1)*t,f=Math.floor(u),d=u-f,p=l[f===0?f:f-1],m=l[f],v=l[f>l.length-2?l.length-1:f+1],g=l[f>l.length-3?l.length-1:f+2];return s.set(ky(d,p.x,m.x,v.x,g.x),ky(d,p.y,m.y,v.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Vt().fromArray(l))}return this}}var rf=Object.freeze({__proto__:null,ArcCurve:rb,CatmullRomCurve3:dm,CubicBezierCurve:sS,CubicBezierCurve3:pb,EllipseCurve:Pm,LineCurve:rS,LineCurve3:mb,QuadraticBezierCurve:oS,QuadraticBezierCurve3:lS,SplineCurve:uS});class gb extends la{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rf[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let u=0;for(;u<l.length;){if(l[u]>=s){const f=l[u]-s,d=this.curves[u],p=d.getLength(),m=p===0?0:1-f/p;return d.getPointAt(m,i)}u++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,u=this.curves;l<u.length;l++){const f=u[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(d);for(let m=0;m<p.length;m++){const v=p[m];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new rf[l.type]().fromJSON(l))}return this}}class Xy extends gb{constructor(t){super(),this.type="Path",this.currentPoint=new Vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new rS(this.currentPoint.clone(),new Vt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const u=new oS(this.currentPoint.clone(),new Vt(t,i),new Vt(s,l));return this.curves.push(u),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,u,f){const d=new sS(this.currentPoint.clone(),new Vt(t,i),new Vt(s,l),new Vt(u,f));return this.curves.push(d),this.currentPoint.set(u,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new uS(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,u,f){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,s,l,u,f),this}absarc(t,i,s,l,u,f){return this.absellipse(t,i,s,s,l,u,f),this}ellipse(t,i,s,l,u,f,d,p){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+m,i+v,s,l,u,f,d,p),this}absellipse(t,i,s,l,u,f,d,p){const m=new Pm(t,i,s,l,u,f,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cS extends Xy{constructor(t){super(t),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new Xy().fromJSON(l))}return this}}function vb(o,t,i=2){const s=t&&t.length,l=s?t[0]*i:o.length;let u=fS(o,0,l,i,!0);const f=[];if(!u||u.next===u.prev)return f;let d,p,m;if(s&&(u=Mb(o,t,u,i)),o.length>80*i){d=1/0,p=1/0;let v=-1/0,g=-1/0;for(let _=i;_<l;_+=i){const S=o[_],E=o[_+1];S<d&&(d=S),E<p&&(p=E),S>v&&(v=S),E>g&&(g=E)}m=Math.max(v-d,g-p),m=m!==0?32767/m:0}return kl(u,f,i,d,p,m,0),f}function fS(o,t,i,s,l){let u;if(l===Lb(o,t,i,s)>0)for(let f=t;f<i;f+=s)u=qy(f/s|0,o[f],o[f+1],u);else for(let f=i-s;f>=t;f-=s)u=qy(f/s|0,o[f],o[f+1],u);return u&&So(u,u.next)&&(ql(u),u=u.next),u}function er(o,t){if(!o)return o;t||(t=o);let i=o,s;do if(s=!1,!i.steiner&&(So(i,i.next)||sn(i.prev,i,i.next)===0)){if(ql(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function kl(o,t,i,s,l,u,f){if(!o)return;!f&&u&&Rb(o,s,l,u);let d=o;for(;o.prev!==o.next;){const p=o.prev,m=o.next;if(u?yb(o,s,l,u):_b(o)){t.push(p.i,o.i,m.i),ql(o),o=m.next,d=m.next;continue}if(o=m,o===d){f?f===1?(o=xb(er(o),t),kl(o,t,i,s,l,u,2)):f===2&&Sb(o,t,i,s,l,u):kl(er(o),t,i,s,l,u,1);break}}}function _b(o){const t=o.prev,i=o,s=o.next;if(sn(t,i,s)>=0)return!1;const l=t.x,u=i.x,f=s.x,d=t.y,p=i.y,m=s.y,v=Math.min(l,u,f),g=Math.min(d,p,m),_=Math.max(l,u,f),S=Math.max(d,p,m);let E=s.next;for(;E!==t;){if(E.x>=v&&E.x<=_&&E.y>=g&&E.y<=S&&Cl(l,d,u,p,f,m,E.x,E.y)&&sn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function yb(o,t,i,s){const l=o.prev,u=o,f=o.next;if(sn(l,u,f)>=0)return!1;const d=l.x,p=u.x,m=f.x,v=l.y,g=u.y,_=f.y,S=Math.min(d,p,m),E=Math.min(v,g,_),T=Math.max(d,p,m),M=Math.max(v,g,_),y=pm(S,E,t,i,s),U=pm(T,M,t,i,s);let C=o.prevZ,b=o.nextZ;for(;C&&C.z>=y&&b&&b.z<=U;){if(C.x>=S&&C.x<=T&&C.y>=E&&C.y<=M&&C!==l&&C!==f&&Cl(d,v,p,g,m,_,C.x,C.y)&&sn(C.prev,C,C.next)>=0||(C=C.prevZ,b.x>=S&&b.x<=T&&b.y>=E&&b.y<=M&&b!==l&&b!==f&&Cl(d,v,p,g,m,_,b.x,b.y)&&sn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;C&&C.z>=y;){if(C.x>=S&&C.x<=T&&C.y>=E&&C.y<=M&&C!==l&&C!==f&&Cl(d,v,p,g,m,_,C.x,C.y)&&sn(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;b&&b.z<=U;){if(b.x>=S&&b.x<=T&&b.y>=E&&b.y<=M&&b!==l&&b!==f&&Cl(d,v,p,g,m,_,b.x,b.y)&&sn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function xb(o,t){let i=o;do{const s=i.prev,l=i.next.next;!So(s,l)&&dS(s,i,i.next,l)&&Xl(s,l)&&Xl(l,s)&&(t.push(s.i,i.i,l.i),ql(i),ql(i.next),i=o=l),i=i.next}while(i!==o);return er(i)}function Sb(o,t,i,s,l,u){let f=o;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&Db(f,d)){let p=pS(f,d);f=er(f,f.next),p=er(p,p.next),kl(f,t,i,s,l,u,0),kl(p,t,i,s,l,u,0);return}d=d.next}f=f.next}while(f!==o)}function Mb(o,t,i,s){const l=[];for(let u=0,f=t.length;u<f;u++){const d=t[u]*s,p=u<f-1?t[u+1]*s:o.length,m=fS(o,d,p,s,!1);m===m.next&&(m.steiner=!0),l.push(Cb(m))}l.sort(Eb);for(let u=0;u<l.length;u++)i=Tb(l[u],i);return i}function Eb(o,t){let i=o.x-t.x;if(i===0&&(i=o.y-t.y,i===0)){const s=(o.next.y-o.y)/(o.next.x-o.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function Tb(o,t){const i=bb(o,t);if(!i)return t;const s=pS(i,o);return er(s,s.next),er(i,i.next)}function bb(o,t){let i=t;const s=o.x,l=o.y;let u=-1/0,f;if(So(o,i))return i;do{if(So(o,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=s&&g>u&&(u=g,f=i.x<i.next.x?i:i.next,g===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,p=f.x,m=f.y;let v=1/0;i=f;do{if(s>=i.x&&i.x>=p&&s!==i.x&&hS(l<m?s:u,l,p,m,l<m?u:s,l,i.x,i.y)){const g=Math.abs(l-i.y)/(s-i.x);Xl(i,o)&&(g<v||g===v&&(i.x>f.x||i.x===f.x&&Ab(f,i)))&&(f=i,v=g)}i=i.next}while(i!==d);return f}function Ab(o,t){return sn(o.prev,o,t.prev)<0&&sn(t.next,o,o.next)<0}function Rb(o,t,i,s){let l=o;do l.z===0&&(l.z=pm(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==o);l.prevZ.nextZ=null,l.prevZ=null,wb(l)}function wb(o){let t,i=1;do{let s=o,l;o=null;let u=null;for(t=0;s;){t++;let f=s,d=0;for(let m=0;m<i&&(d++,f=f.nextZ,!!f);m++);let p=i;for(;d>0||p>0&&f;)d!==0&&(p===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,p--),u?u.nextZ=l:o=l,l.prevZ=u,u=l;s=f}u.nextZ=null,i*=2}while(t>1);return o}function pm(o,t,i,s,l){return o=(o-i)*l|0,t=(t-s)*l|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function Cb(o){let t=o,i=o;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==o);return i}function hS(o,t,i,s,l,u,f,d){return(l-f)*(t-d)>=(o-f)*(u-d)&&(o-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(u-d)>=(l-f)*(s-d)}function Cl(o,t,i,s,l,u,f,d){return!(o===f&&t===d)&&hS(o,t,i,s,l,u,f,d)}function Db(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!Nb(o,t)&&(Xl(o,t)&&Xl(t,o)&&Ub(o,t)&&(sn(o.prev,o,t.prev)||sn(o,t.prev,t))||So(o,t)&&sn(o.prev,o,o.next)>0&&sn(t.prev,t,t.next)>0)}function sn(o,t,i){return(t.y-o.y)*(i.x-t.x)-(t.x-o.x)*(i.y-t.y)}function So(o,t){return o.x===t.x&&o.y===t.y}function dS(o,t,i,s){const l=Gc(sn(o,t,i)),u=Gc(sn(o,t,s)),f=Gc(sn(i,s,o)),d=Gc(sn(i,s,t));return!!(l!==u&&f!==d||l===0&&Hc(o,i,t)||u===0&&Hc(o,s,t)||f===0&&Hc(i,o,s)||d===0&&Hc(i,t,s))}function Hc(o,t,i){return t.x<=Math.max(o.x,i.x)&&t.x>=Math.min(o.x,i.x)&&t.y<=Math.max(o.y,i.y)&&t.y>=Math.min(o.y,i.y)}function Gc(o){return o>0?1:o<0?-1:0}function Nb(o,t){let i=o;do{if(i.i!==o.i&&i.next.i!==o.i&&i.i!==t.i&&i.next.i!==t.i&&dS(i,i.next,o,t))return!0;i=i.next}while(i!==o);return!1}function Xl(o,t){return sn(o.prev,o,o.next)<0?sn(o,t,o.next)>=0&&sn(o,o.prev,t)>=0:sn(o,t,o.prev)<0||sn(o,o.next,t)<0}function Ub(o,t){let i=o,s=!1;const l=(o.x+t.x)/2,u=(o.y+t.y)/2;do i.y>u!=i.next.y>u&&i.next.y!==i.y&&l<(i.next.x-i.x)*(u-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==o);return s}function pS(o,t){const i=mm(o.i,o.x,o.y),s=mm(t.i,t.x,t.y),l=o.next,u=t.prev;return o.next=t,t.prev=o,i.next=l,l.prev=i,s.next=i,i.prev=s,u.next=s,s.prev=u,s}function qy(o,t,i,s){const l=mm(o,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function ql(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function mm(o,t,i){return{i:o,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lb(o,t,i,s){let l=0;for(let u=t,f=i-s;u<i;u+=s)l+=(o[f]-o[u])*(o[u+1]+o[f+1]),f=u;return l}class Ob{static triangulate(t,i,s=2){return vb(t,i,s)}}class co{static area(t){const i=t.length;let s=0;for(let l=i-1,u=0;u<i;l=u++)s+=t[l].x*t[u].y-t[u].x*t[l].y;return s*.5}static isClockWise(t){return co.area(t)<0}static triangulateShape(t,i){const s=[],l=[],u=[];Yy(t),Wy(s,t);let f=t.length;i.forEach(Yy);for(let p=0;p<i.length;p++)l.push(f),f+=i[p].length,Wy(s,i[p]);const d=Ob.triangulate(s,l);for(let p=0;p<d.length;p+=3)u.push(d.slice(p,p+3));return u}}function Yy(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Wy(o,t){for(let i=0;i<t.length;i++)o.push(t[i].x),o.push(t[i].y)}class Im extends Rn{constructor(t=new cS([new Vt(.5,.5),new Vt(-.5,.5),new Vt(-.5,-.5),new Vt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const s=this,l=[],u=[];for(let d=0,p=t.length;d<p;d++){const m=t[d];f(m)}this.setAttribute("position",new Ze(l,3)),this.setAttribute("uv",new Ze(u,2)),this.computeVertexNormals();function f(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let _=i.bevelEnabled!==void 0?i.bevelEnabled:!0,S=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:S-.1,T=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const y=i.extrudePath,U=i.UVGenerator!==void 0?i.UVGenerator:Pb;let C,b=!1,O,B,P,V;y&&(C=y.getSpacedPoints(v),b=!0,_=!1,O=y.computeFrenetFrames(v,!1),B=new G,P=new G,V=new G),_||(M=0,S=0,E=0,T=0);const N=d.extractPoints(m);let R=N.shape;const H=N.holes;if(!co.isClockWise(R)){R=R.reverse();for(let At=0,vt=H.length;At<vt;At++){const mt=H[At];co.isClockWise(mt)&&(H[At]=mt.reverse())}}function D(At){const mt=10000000000000001e-36;let gt=At[0];for(let wt=1;wt<=At.length;wt++){const Nt=wt%At.length,zt=At[Nt],oe=zt.x-gt.x,re=zt.y-gt.y,I=oe*oe+re*re,A=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(gt.x),Math.abs(gt.y)),rt=mt*A*A;if(I<=rt){At.splice(Nt,1),wt--;continue}gt=zt}}D(R),H.forEach(D);const q=H.length,Y=R;for(let At=0;At<q;At++){const vt=H[At];R=R.concat(vt)}function z(At,vt,mt){return vt||console.error("THREE.ExtrudeGeometry: vec does not exist"),At.clone().addScaledVector(vt,mt)}const J=R.length;function Q(At,vt,mt){let gt,wt,Nt;const zt=At.x-vt.x,oe=At.y-vt.y,re=mt.x-At.x,I=mt.y-At.y,A=zt*zt+oe*oe,rt=zt*I-oe*re;if(Math.abs(rt)>Number.EPSILON){const ft=Math.sqrt(A),Ut=Math.sqrt(re*re+I*I),_t=vt.x-oe/ft,Jt=vt.y+zt/ft,Ht=mt.x-I/Ut,te=mt.y+re/Ut,ne=((Ht-_t)*I-(te-Jt)*re)/(zt*I-oe*re);gt=_t+zt*ne-At.x,wt=Jt+oe*ne-At.y;const Ot=gt*gt+wt*wt;if(Ot<=2)return new Vt(gt,wt);Nt=Math.sqrt(Ot/2)}else{let ft=!1;zt>Number.EPSILON?re>Number.EPSILON&&(ft=!0):zt<-Number.EPSILON?re<-Number.EPSILON&&(ft=!0):Math.sign(oe)===Math.sign(I)&&(ft=!0),ft?(gt=-oe,wt=zt,Nt=Math.sqrt(A)):(gt=zt,wt=oe,Nt=Math.sqrt(A/2))}return new Vt(gt/Nt,wt/Nt)}const ut=[];for(let At=0,vt=Y.length,mt=vt-1,gt=At+1;At<vt;At++,mt++,gt++)mt===vt&&(mt=0),gt===vt&&(gt=0),ut[At]=Q(Y[At],Y[mt],Y[gt]);const yt=[];let St,Ft=ut.concat();for(let At=0,vt=q;At<vt;At++){const mt=H[At];St=[];for(let gt=0,wt=mt.length,Nt=wt-1,zt=gt+1;gt<wt;gt++,Nt++,zt++)Nt===wt&&(Nt=0),zt===wt&&(zt=0),St[gt]=Q(mt[gt],mt[Nt],mt[zt]);yt.push(St),Ft=Ft.concat(St)}let Qt;if(M===0)Qt=co.triangulateShape(Y,H);else{const At=[],vt=[];for(let mt=0;mt<M;mt++){const gt=mt/M,wt=S*Math.cos(gt*Math.PI/2),Nt=E*Math.sin(gt*Math.PI/2)+T;for(let zt=0,oe=Y.length;zt<oe;zt++){const re=z(Y[zt],ut[zt],Nt);Rt(re.x,re.y,-wt),gt===0&&At.push(re)}for(let zt=0,oe=q;zt<oe;zt++){const re=H[zt];St=yt[zt];const I=[];for(let A=0,rt=re.length;A<rt;A++){const ft=z(re[A],St[A],Nt);Rt(ft.x,ft.y,-wt),gt===0&&I.push(ft)}gt===0&&vt.push(I)}}Qt=co.triangulateShape(At,vt)}const X=Qt.length,pt=E+T;for(let At=0;At<J;At++){const vt=_?z(R[At],Ft[At],pt):R[At];b?(P.copy(O.normals[0]).multiplyScalar(vt.x),B.copy(O.binormals[0]).multiplyScalar(vt.y),V.copy(C[0]).add(P).add(B),Rt(V.x,V.y,V.z)):Rt(vt.x,vt.y,0)}for(let At=1;At<=v;At++)for(let vt=0;vt<J;vt++){const mt=_?z(R[vt],Ft[vt],pt):R[vt];b?(P.copy(O.normals[At]).multiplyScalar(mt.x),B.copy(O.binormals[At]).multiplyScalar(mt.y),V.copy(C[At]).add(P).add(B),Rt(V.x,V.y,V.z)):Rt(mt.x,mt.y,g/v*At)}for(let At=M-1;At>=0;At--){const vt=At/M,mt=S*Math.cos(vt*Math.PI/2),gt=E*Math.sin(vt*Math.PI/2)+T;for(let wt=0,Nt=Y.length;wt<Nt;wt++){const zt=z(Y[wt],ut[wt],gt);Rt(zt.x,zt.y,g+mt)}for(let wt=0,Nt=H.length;wt<Nt;wt++){const zt=H[wt];St=yt[wt];for(let oe=0,re=zt.length;oe<re;oe++){const I=z(zt[oe],St[oe],gt);b?Rt(I.x,I.y+C[v-1].y,C[v-1].x+mt):Rt(I.x,I.y,g+mt)}}}j(),tt();function j(){const At=l.length/3;if(_){let vt=0,mt=J*vt;for(let gt=0;gt<X;gt++){const wt=Qt[gt];Ct(wt[2]+mt,wt[1]+mt,wt[0]+mt)}vt=v+M*2,mt=J*vt;for(let gt=0;gt<X;gt++){const wt=Qt[gt];Ct(wt[0]+mt,wt[1]+mt,wt[2]+mt)}}else{for(let vt=0;vt<X;vt++){const mt=Qt[vt];Ct(mt[2],mt[1],mt[0])}for(let vt=0;vt<X;vt++){const mt=Qt[vt];Ct(mt[0]+J*v,mt[1]+J*v,mt[2]+J*v)}}s.addGroup(At,l.length/3-At,0)}function tt(){const At=l.length/3;let vt=0;xt(Y,vt),vt+=Y.length;for(let mt=0,gt=H.length;mt<gt;mt++){const wt=H[mt];xt(wt,vt),vt+=wt.length}s.addGroup(At,l.length/3-At,1)}function xt(At,vt){let mt=At.length;for(;--mt>=0;){const gt=mt;let wt=mt-1;wt<0&&(wt=At.length-1);for(let Nt=0,zt=v+M*2;Nt<zt;Nt++){const oe=J*Nt,re=J*(Nt+1),I=vt+gt+oe,A=vt+wt+oe,rt=vt+wt+re,ft=vt+gt+re;Tt(I,A,rt,ft)}}}function Rt(At,vt,mt){p.push(At),p.push(vt),p.push(mt)}function Ct(At,vt,mt){Lt(At),Lt(vt),Lt(mt);const gt=l.length/3,wt=U.generateTopUV(s,l,gt-3,gt-2,gt-1);F(wt[0]),F(wt[1]),F(wt[2])}function Tt(At,vt,mt,gt){Lt(At),Lt(vt),Lt(gt),Lt(vt),Lt(mt),Lt(gt);const wt=l.length/3,Nt=U.generateSideWallUV(s,l,wt-6,wt-3,wt-2,wt-1);F(Nt[0]),F(Nt[1]),F(Nt[3]),F(Nt[1]),F(Nt[2]),F(Nt[3])}function Lt(At){l.push(p[At*3+0]),l.push(p[At*3+1]),l.push(p[At*3+2])}function F(At){u.push(At.x),u.push(At.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return zb(i,s,t)}static fromJSON(t,i){const s=[];for(let u=0,f=t.shapes.length;u<f;u++){const d=i[t.shapes[u]];s.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new rf[l.type]().fromJSON(l)),new Im(s,t.options)}}const Pb={generateTopUV:function(o,t,i,s,l){const u=t[i*3],f=t[i*3+1],d=t[s*3],p=t[s*3+1],m=t[l*3],v=t[l*3+1];return[new Vt(u,f),new Vt(d,p),new Vt(m,v)]},generateSideWallUV:function(o,t,i,s,l,u){const f=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[s*3],v=t[s*3+1],g=t[s*3+2],_=t[l*3],S=t[l*3+1],E=t[l*3+2],T=t[u*3],M=t[u*3+1],y=t[u*3+2];return Math.abs(d-v)<Math.abs(f-m)?[new Vt(f,1-p),new Vt(m,1-g),new Vt(_,1-E),new Vt(T,1-y)]:[new Vt(d,1-p),new Vt(v,1-g),new Vt(S,1-E),new Vt(M,1-y)]}};function zb(o,t,i){if(i.shapes=[],Array.isArray(o))for(let s=0,l=o.length;s<l;s++){const u=o[s];i.shapes.push(u.uuid)}else i.shapes.push(o.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class Bm extends Om{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Bm(t.radius,t.detail)}}class nr extends Rn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,v=p+1,g=t/d,_=i/p,S=[],E=[],T=[],M=[];for(let y=0;y<v;y++){const U=y*_-f;for(let C=0;C<m;C++){const b=C*g-u;E.push(b,-U,0),T.push(0,0,1),M.push(C/d),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let U=0;U<d;U++){const C=U+m*y,b=U+m*(y+1),O=U+1+m*(y+1),B=U+1+m*y;S.push(C,b,B),S.push(b,O,B)}this.setIndex(S),this.setAttribute("position",new Ze(E,3)),this.setAttribute("normal",new Ze(T,3)),this.setAttribute("uv",new Ze(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fm extends Rn{constructor(t=.5,i=1,s=32,l=1,u=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let g=t;const _=(i-t)/l,S=new G,E=new Vt;for(let T=0;T<=l;T++){for(let M=0;M<=s;M++){const y=u+M/s*f;S.x=g*Math.cos(y),S.y=g*Math.sin(y),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,v.push(E.x,E.y)}g+=_}for(let T=0;T<l;T++){const M=T*(s+1);for(let y=0;y<s;y++){const U=y+M,C=U,b=U+s+1,O=U+s+2,B=U+1;d.push(C,b,B),d.push(b,O,B)}}this.setIndex(d),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(m,3)),this.setAttribute("uv",new Ze(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Mo extends Rn{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const v=[],g=new G,_=new G,S=[],E=[],T=[],M=[];for(let y=0;y<=s;y++){const U=[],C=y/s;let b=0;y===0&&f===0?b=.5/i:y===s&&p===Math.PI&&(b=-.5/i);for(let O=0;O<=i;O++){const B=O/i;g.x=-t*Math.cos(l+B*u)*Math.sin(f+C*d),g.y=t*Math.cos(f+C*d),g.z=t*Math.sin(l+B*u)*Math.sin(f+C*d),E.push(g.x,g.y,g.z),_.copy(g).normalize(),T.push(_.x,_.y,_.z),M.push(B+b,1-C),U.push(m++)}v.push(U)}for(let y=0;y<s;y++)for(let U=0;U<i;U++){const C=v[y][U+1],b=v[y][U],O=v[y+1][U],B=v[y+1][U+1];(y!==0||f>0)&&S.push(C,b,B),(y!==s-1||p<Math.PI)&&S.push(b,O,B)}this.setIndex(S),this.setAttribute("position",new Ze(E,3)),this.setAttribute("normal",new Ze(T,3)),this.setAttribute("uv",new Ze(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class of extends Rn{constructor(t=new lS(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),i=64,s=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:u};const f=t.computeFrenetFrames(i,u);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new G,p=new G,m=new Vt;let v=new G;const g=[],_=[],S=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(S,2));function T(){for(let C=0;C<i;C++)M(C);M(u===!1?i:0),U(),y()}function M(C){v=t.getPointAt(C/i,v);const b=f.normals[C],O=f.binormals[C];for(let B=0;B<=l;B++){const P=B/l*Math.PI*2,V=Math.sin(P),N=-Math.cos(P);p.x=N*b.x+V*O.x,p.y=N*b.y+V*O.y,p.z=N*b.z+V*O.z,p.normalize(),_.push(p.x,p.y,p.z),d.x=v.x+s*p.x,d.y=v.y+s*p.y,d.z=v.z+s*p.z,g.push(d.x,d.y,d.z)}}function y(){for(let C=1;C<=i;C++)for(let b=1;b<=l;b++){const O=(l+1)*(C-1)+(b-1),B=(l+1)*C+(b-1),P=(l+1)*C+b,V=(l+1)*(C-1)+b;E.push(O,B,V),E.push(B,P,V)}}function U(){for(let C=0;C<=i;C++)for(let b=0;b<=l;b++)m.x=C/i,m.y=b/l,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new of(new rf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ib extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bb extends rr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kx,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fb extends rr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hb extends rr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class mS extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Gb extends mS{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const mp=new Ve,jy=new G,Zy=new G;class Vb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Um,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;jy.setFromMatrixPosition(t.matrixWorld),i.position.copy(jy),Zy.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Zy),i.updateMatrixWorld(),mp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mp,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(mp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hm extends Jx{constructor(t=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kb extends Vb{constructor(){super(new Hm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xb extends mS{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new kb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qb extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class gS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Qy(o,t,i,s){const l=Yb(s);switch(i){case Hx:return o*t;case bm:return o*t/l.components*l.byteLength;case Am:return o*t/l.components*l.byteLength;case Vx:return o*t*2/l.components*l.byteLength;case Rm:return o*t*2/l.components*l.byteLength;case Gx:return o*t*3/l.components*l.byteLength;case ki:return o*t*4/l.components*l.byteLength;case wm:return o*t*4/l.components*l.byteLength;case jc:case Zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Qc:case Kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fp:case Gp:return Math.max(o,16)*Math.max(t,8)/4;case Bp:case Hp:return Math.max(o,8)*Math.max(t,8)/2;case Vp:case kp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Wp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case jp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Zp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Qp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Kp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case $p:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case tm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case em:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case nm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case im:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case am:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case sm:case rm:case om:return Math.ceil(o/4)*Math.ceil(t/4)*16;case lm:case um:return Math.ceil(o/4)*Math.ceil(t/4)*8;case cm:case fm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Yb(o){switch(o){case qi:case zx:return{byteLength:1,components:1};case zl:case Ix:case Xi:return{byteLength:2,components:1};case Em:case Tm:return{byteLength:2,components:4};case tr:case Mm:case ra:return{byteLength:4,components:1};case Bx:case Fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vS(){let o=null,t=!1,i=null,s=null;function l(u,f){i(u,f),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Wb(o){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,_=o.createBuffer();o.bindBuffer(p,_),o.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const v=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,v);else{g.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<g.length;S++){const E=g[_],T=g[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,g[_]=T)}g.length=_+1;for(let S=0,E=g.length;S<E;S++){const T=g[S];o.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:f}}var jb=`#ifdef USE_ALPHAHASH
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
#endif`,RA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wA=`#ifdef USE_ENVMAP
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
#endif`,CA=`#ifdef USE_ENVMAP
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
}`,WA=`
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
#endif`,jA=`#if defined( RE_IndirectDiffuse )
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
#endif`,R2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`;const W2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j2=`uniform sampler2D t2D;
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
}`,tR=`#if DEPTH_PACKING == 3200
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
}`,eR=`#define DISTANCE
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
}`,nR=`#define DISTANCE
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
}`,iR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sR=`uniform float scale;
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
}`,rR=`uniform vec3 diffuse;
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
}`,oR=`#include <common>
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
}`,lR=`uniform vec3 diffuse;
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
}`,uR=`#define LAMBERT
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
}`,cR=`#define LAMBERT
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
}`,fR=`#define MATCAP
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
}`,hR=`#define MATCAP
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
}`,dR=`#define NORMAL
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
}`,pR=`#define NORMAL
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
}`,mR=`#define PHONG
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
}`,gR=`#define PHONG
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
}`,vR=`#define STANDARD
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
}`,_R=`#define STANDARD
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
}`,yR=`#define TOON
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
}`,xR=`#define TOON
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
}`,SR=`uniform float size;
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
}`,MR=`uniform vec3 diffuse;
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
}`,ER=`#include <common>
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
}`,TR=`uniform vec3 color;
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
}`,bR=`uniform float rotation;
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
}`,AR=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:jb,alphahash_pars_fragment:Zb,alphamap_fragment:Qb,alphamap_pars_fragment:Kb,alphatest_fragment:Jb,alphatest_pars_fragment:$b,aomap_fragment:tA,aomap_pars_fragment:eA,batching_pars_vertex:nA,batching_vertex:iA,begin_vertex:aA,beginnormal_vertex:sA,bsdfs:rA,iridescence_fragment:oA,bumpmap_pars_fragment:lA,clipping_planes_fragment:uA,clipping_planes_pars_fragment:cA,clipping_planes_pars_vertex:fA,clipping_planes_vertex:hA,color_fragment:dA,color_pars_fragment:pA,color_pars_vertex:mA,color_vertex:gA,common:vA,cube_uv_reflection_fragment:_A,defaultnormal_vertex:yA,displacementmap_pars_vertex:xA,displacementmap_vertex:SA,emissivemap_fragment:MA,emissivemap_pars_fragment:EA,colorspace_fragment:TA,colorspace_pars_fragment:bA,envmap_fragment:AA,envmap_common_pars_fragment:RA,envmap_pars_fragment:wA,envmap_pars_vertex:CA,envmap_physical_pars_fragment:HA,envmap_vertex:DA,fog_vertex:NA,fog_pars_vertex:UA,fog_fragment:LA,fog_pars_fragment:OA,gradientmap_pars_fragment:PA,lightmap_pars_fragment:zA,lights_lambert_fragment:IA,lights_lambert_pars_fragment:BA,lights_pars_begin:FA,lights_toon_fragment:GA,lights_toon_pars_fragment:VA,lights_phong_fragment:kA,lights_phong_pars_fragment:XA,lights_physical_fragment:qA,lights_physical_pars_fragment:YA,lights_fragment_begin:WA,lights_fragment_maps:jA,lights_fragment_end:ZA,logdepthbuf_fragment:QA,logdepthbuf_pars_fragment:KA,logdepthbuf_pars_vertex:JA,logdepthbuf_vertex:$A,map_fragment:t2,map_pars_fragment:e2,map_particle_fragment:n2,map_particle_pars_fragment:i2,metalnessmap_fragment:a2,metalnessmap_pars_fragment:s2,morphinstance_vertex:r2,morphcolor_vertex:o2,morphnormal_vertex:l2,morphtarget_pars_vertex:u2,morphtarget_vertex:c2,normal_fragment_begin:f2,normal_fragment_maps:h2,normal_pars_fragment:d2,normal_pars_vertex:p2,normal_vertex:m2,normalmap_pars_fragment:g2,clearcoat_normal_fragment_begin:v2,clearcoat_normal_fragment_maps:_2,clearcoat_pars_fragment:y2,iridescence_pars_fragment:x2,opaque_fragment:S2,packing:M2,premultiplied_alpha_fragment:E2,project_vertex:T2,dithering_fragment:b2,dithering_pars_fragment:A2,roughnessmap_fragment:R2,roughnessmap_pars_fragment:w2,shadowmap_pars_fragment:C2,shadowmap_pars_vertex:D2,shadowmap_vertex:N2,shadowmask_pars_fragment:U2,skinbase_vertex:L2,skinning_pars_vertex:O2,skinning_vertex:P2,skinnormal_vertex:z2,specularmap_fragment:I2,specularmap_pars_fragment:B2,tonemapping_fragment:F2,tonemapping_pars_fragment:H2,transmission_fragment:G2,transmission_pars_fragment:V2,uv_pars_fragment:k2,uv_pars_vertex:X2,uv_vertex:q2,worldpos_vertex:Y2,background_vert:W2,background_frag:j2,backgroundCube_vert:Z2,backgroundCube_frag:Q2,cube_vert:K2,cube_frag:J2,depth_vert:$2,depth_frag:tR,distanceRGBA_vert:eR,distanceRGBA_frag:nR,equirect_vert:iR,equirect_frag:aR,linedashed_vert:sR,linedashed_frag:rR,meshbasic_vert:oR,meshbasic_frag:lR,meshlambert_vert:uR,meshlambert_frag:cR,meshmatcap_vert:fR,meshmatcap_frag:hR,meshnormal_vert:dR,meshnormal_frag:pR,meshphong_vert:mR,meshphong_frag:gR,meshphysical_vert:vR,meshphysical_frag:_R,meshtoon_vert:yR,meshtoon_frag:xR,points_vert:SR,points_frag:MR,shadow_vert:ER,shadow_frag:TR,sprite_vert:bR,sprite_frag:AR},Zt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},aa={basic:{uniforms:Kn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Kn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new de(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Kn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Kn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Kn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new de(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Kn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Kn([Zt.points,Zt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Kn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Kn([Zt.common,Zt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Kn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Kn([Zt.sprite,Zt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:Kn([Zt.common,Zt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:Kn([Zt.lights,Zt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};aa.physical={uniforms:Kn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Vc={r:0,b:0,g:0},qs=new Ui,RR=new Ve;function wR(o,t,i,s,l,u,f){const d=new de(0);let p=u===!0?0:1,m,v,g=null,_=0,S=null;function E(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?i:t).get(b)),b}function T(C){let b=!1;const O=E(C);O===null?y(d,p):O&&O.isColor&&(y(O,1),b=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(o.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(C,b){const O=E(b);O&&(O.isCubeTexture||O.mapping===lf)?(v===void 0&&(v=new fn(new bo(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:xo(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),qs.copy(b.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),v.material.uniforms.envMap.value=O,v.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(RR.makeRotationFromEuler(qs)),v.material.toneMapped=Le.getTransfer(O.colorSpace)!==Ye,(g!==O||_!==O.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,g=O,_=O.version,S=o.toneMapping),v.layers.enableAll(),C.unshift(v,v.geometry,v.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new fn(new nr(2,2),new rn({name:"BackgroundMaterial",uniforms:xo(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Le.getTransfer(O.colorSpace)!==Ye,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||_!==O.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,g=O,_=O.version,S=o.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function y(C,b){C.getRGB(Vc,Kx(o)),s.buffers.color.setClear(Vc.r,Vc.g,Vc.b,b,f)}function U(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,b=1){d.set(C),p=b,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,y(d,p)},render:T,addToRenderList:M,dispose:U}}function CR(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,f=!1;function d(R,H,W,D,q){let Y=!1;const z=g(D,W,H);u!==z&&(u=z,m(u.object)),Y=S(R,D,W,q),Y&&E(R,D,W,q),q!==null&&t.update(q,o.ELEMENT_ARRAY_BUFFER),(Y||f)&&(f=!1,b(R,H,W,D),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function p(){return o.createVertexArray()}function m(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function g(R,H,W){const D=W.wireframe===!0;let q=s[R.id];q===void 0&&(q={},s[R.id]=q);let Y=q[H.id];Y===void 0&&(Y={},q[H.id]=Y);let z=Y[D];return z===void 0&&(z=_(p()),Y[D]=z),z}function _(R){const H=[],W=[],D=[];for(let q=0;q<i;q++)H[q]=0,W[q]=0,D[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:W,attributeDivisors:D,object:R,attributes:{},index:null}}function S(R,H,W,D){const q=u.attributes,Y=H.attributes;let z=0;const J=W.getAttributes();for(const Q in J)if(J[Q].location>=0){const yt=q[Q];let St=Y[Q];if(St===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),yt===void 0||yt.attribute!==St||St&&yt.data!==St.data)return!0;z++}return u.attributesNum!==z||u.index!==D}function E(R,H,W,D){const q={},Y=H.attributes;let z=0;const J=W.getAttributes();for(const Q in J)if(J[Q].location>=0){let yt=Y[Q];yt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor));const St={};St.attribute=yt,yt&&yt.data&&(St.data=yt.data),q[Q]=St,z++}u.attributes=q,u.attributesNum=z,u.index=D}function T(){const R=u.newAttributes;for(let H=0,W=R.length;H<W;H++)R[H]=0}function M(R){y(R,0)}function y(R,H){const W=u.newAttributes,D=u.enabledAttributes,q=u.attributeDivisors;W[R]=1,D[R]===0&&(o.enableVertexAttribArray(R),D[R]=1),q[R]!==H&&(o.vertexAttribDivisor(R,H),q[R]=H)}function U(){const R=u.newAttributes,H=u.enabledAttributes;for(let W=0,D=H.length;W<D;W++)H[W]!==R[W]&&(o.disableVertexAttribArray(W),H[W]=0)}function C(R,H,W,D,q,Y,z){z===!0?o.vertexAttribIPointer(R,H,W,q,Y):o.vertexAttribPointer(R,H,W,D,q,Y)}function b(R,H,W,D){T();const q=D.attributes,Y=W.getAttributes(),z=H.defaultAttributeValues;for(const J in Y){const Q=Y[J];if(Q.location>=0){let ut=q[J];if(ut===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(ut=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(ut=R.instanceColor)),ut!==void 0){const yt=ut.normalized,St=ut.itemSize,Ft=t.get(ut);if(Ft===void 0)continue;const Qt=Ft.buffer,X=Ft.type,pt=Ft.bytesPerElement,j=X===o.INT||X===o.UNSIGNED_INT||ut.gpuType===Mm;if(ut.isInterleavedBufferAttribute){const tt=ut.data,xt=tt.stride,Rt=ut.offset;if(tt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<Q.locationSize;Ct++)y(Q.location+Ct,tt.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Ct=0;Ct<Q.locationSize;Ct++)M(Q.location+Ct);o.bindBuffer(o.ARRAY_BUFFER,Qt);for(let Ct=0;Ct<Q.locationSize;Ct++)C(Q.location+Ct,St/Q.locationSize,X,yt,xt*pt,(Rt+St/Q.locationSize*Ct)*pt,j)}else{if(ut.isInstancedBufferAttribute){for(let tt=0;tt<Q.locationSize;tt++)y(Q.location+tt,ut.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let tt=0;tt<Q.locationSize;tt++)M(Q.location+tt);o.bindBuffer(o.ARRAY_BUFFER,Qt);for(let tt=0;tt<Q.locationSize;tt++)C(Q.location+tt,St/Q.locationSize,X,yt,St*pt,St/Q.locationSize*tt*pt,j)}}else if(z!==void 0){const yt=z[J];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(Q.location,yt);break;case 3:o.vertexAttrib3fv(Q.location,yt);break;case 4:o.vertexAttrib4fv(Q.location,yt);break;default:o.vertexAttrib1fv(Q.location,yt)}}}}U()}function O(){V();for(const R in s){const H=s[R];for(const W in H){const D=H[W];for(const q in D)v(D[q].object),delete D[q];delete H[W]}delete s[R]}}function B(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const W in H){const D=H[W];for(const q in D)v(D[q].object),delete D[q];delete H[W]}delete s[R.id]}function P(R){for(const H in s){const W=s[H];if(W[R.id]===void 0)continue;const D=W[R.id];for(const q in D)v(D[q].object),delete D[q];delete W[R.id]}}function V(){N(),f=!0,u!==l&&(u=l,m(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:N,dispose:O,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:U}}function DR(o,t,i){let s;function l(m){s=m}function u(m,v){o.drawArrays(s,m,v),i.update(v,s,1)}function f(m,v,g){g!==0&&(o.drawArraysInstanced(s,m,v,g),i.update(v,s,g))}function d(m,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];i.update(S,s,1)}function p(m,v,g,_){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],v[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,v,0,_,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*_[T];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function NR(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==ki&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const V=P===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==qi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ra&&!V)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:U,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:O,maxSamples:B}}function UR(o){const t=this;let i=null,s=0,l=!1,u=!1;const f=new Ws,d=new ye,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||s!==0||l;return l=_,s=g.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,_){i=v(g,_,0)},this.setState=function(g,_,S){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,y=o.get(g);if(!l||E===null||E.length===0||u&&!M)u?v(null):m();else{const U=u?0:s,C=U*4;let b=y.clippingState||null;p.value=b,b=v(E,_,C,S);for(let O=0;O!==C;++O)b[O]=i[O];y.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,_,S,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const y=S+T*4,U=_.matrixWorldInverse;d.getNormalMatrix(U),(M===null||M.length<y)&&(M=new Float32Array(y));for(let C=0,b=S;C!==T;++C,b+=4)f.copy(g[C]).applyMatrix4(U,d),f.normal.toArray(M,b),M[b+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function LR(o){let t=new WeakMap;function i(f,d){return d===Op?f.mapping=vo:d===Pp&&(f.mapping=_o),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Op||d===Pp)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new jT(p.height);return m.fromEquirectangularTexture(o,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const fo=4,Ky=[.125,.215,.35,.446,.526,.582],Qs=20,gp=new Hm,Jy=new de;let vp=null,_p=0,yp=0,xp=!1;const js=(1+Math.sqrt(5))/2,oo=1/js,$y=[new G(-js,oo,0),new G(js,oo,0),new G(-oo,0,js),new G(oo,0,js),new G(0,js,-oo),new G(0,js,oo),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],OR=new G;class tx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:f=256,position:d=OR}=u;vp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),xp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vp,_p,yp),this._renderer.xr.enabled=xp,t.scissorTest=!1,kc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===vo||t.mapping===_o?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),xp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:sa,minFilter:sa,generateMipmaps:!1,type:Xi,format:ki,colorSpace:yo,depthBuffer:!1},l=ex(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ex(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PR(u)),this._blurMaterial=zR(u,t,i)}return l}_compileMaterial(t){const i=new fn(this._lodPlanes[0],t);this._renderer.compile(i,gp)}_sceneToCubeUV(t,i,s,l,u){const p=new vi(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(Jy),g.toneMapping=La,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const T=new mo({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),M=new fn(new bo,T);let y=!1;const U=t.background;U?U.isColor&&(T.color.copy(U),t.background=null,y=!0):(T.color.copy(Jy),y=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(p.up.set(0,m[C],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[C],u.y,u.z)):b===1?(p.up.set(0,0,m[C]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[C],u.z)):(p.up.set(0,m[C],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[C]));const O=this._cubeSize;kc(l,b*O,C>2?O:0,O,O),g.setRenderTarget(l),y&&g.render(M,p),g.render(t,p)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=_,t.background=U}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===vo||t.mapping===_o;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ix()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nx());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new fn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;kc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,gp)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=$y[(l-u-1)%$y.length];this._blur(t,u-1,u,f,d)}i.autoClear=s}_blur(t,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",u),this._halfBlur(f,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new fn(this._lodPlanes[l],m),_=m.uniforms,S=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Qs-1),T=u/E,M=isFinite(u)?1+Math.floor(v*T):Qs;M>Qs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Qs}`);const y=[];let U=0;for(let P=0;P<Qs;++P){const V=P/T,N=Math.exp(-V*V/2);y.push(N),P===0?U+=N:P<M&&(U+=2*N)}for(let P=0;P<y.length;P++)y[P]=y[P]/U;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=f==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:C}=this;_.dTheta.value=E,_.mipInt.value=C-s;const b=this._sizeLods[l],O=3*b*(l>C-fo?l-C+fo:0),B=4*(this._cubeSize-b);kc(i,O,B,3*b,2*b),p.setRenderTarget(i),p.render(g,gp)}}function PR(o){const t=[],i=[],s=[];let l=o;const u=o-fo+1+Ky.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>o-fo?p=Ky[f-o+fo-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),v=-m,g=1+m,_=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,T=3,M=2,y=1,U=new Float32Array(T*E*S),C=new Float32Array(M*E*S),b=new Float32Array(y*E*S);for(let B=0;B<S;B++){const P=B%3*2/3-1,V=B>2?0:-1,N=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];U.set(N,T*E*B),C.set(_,M*E*B);const R=[B,B,B,B,B,B];b.set(R,y*E*B)}const O=new Rn;O.setAttribute("position",new Tn(U,T)),O.setAttribute("uv",new Tn(C,M)),O.setAttribute("faceIndex",new Tn(b,y)),t.push(O),l>fo&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function ex(o,t,i){const s=new Ni(o,t,i);return s.texture.mapping=lf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function zR(o,t,i){const s=new Float32Array(Qs),l=new G(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Gm(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function nx(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gm(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ix(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Gm(){return`

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
	`}function IR(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Op||p===Pp,v=p===vo||p===_o;if(m||v){let g=t.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new tx(o)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new tx(o)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function BR(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Gl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function FR(o,t,i,s){const l={},u=new WeakMap;function f(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete l[_.id];const S=u.get(_);S&&(t.remove(S),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(g,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function p(g){const _=g.attributes;for(const S in _)t.update(_[S],o.ARRAY_BUFFER)}function m(g){const _=[],S=g.index,E=g.attributes.position;let T=0;if(S!==null){const U=S.array;T=S.version;for(let C=0,b=U.length;C<b;C+=3){const O=U[C+0],B=U[C+1],P=U[C+2];_.push(O,B,B,P,P,O)}}else if(E!==void 0){const U=E.array;T=E.version;for(let C=0,b=U.length/3-1;C<b;C+=3){const O=C+0,B=C+1,P=C+2;_.push(O,B,B,P,P,O)}}else return;const M=new(qx(_)?Qx:Zx)(_,1);M.version=T;const y=u.get(g);y&&t.remove(y),u.set(g,M)}function v(g){const _=u.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&m(g)}else m(g);return u.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function HR(o,t,i){let s;function l(_){s=_}let u,f;function d(_){u=_.type,f=_.bytesPerElement}function p(_,S){o.drawElements(s,S,u,_*f),i.update(S,s,1)}function m(_,S,E){E!==0&&(o.drawElementsInstanced(s,S,u,_*f,E),i.update(S,s,E))}function v(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,u,_,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];i.update(M,s,1)}function g(_,S,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)m(_[y]/f,S[y],T[y]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,u,_,0,T,0,E);let y=0;for(let U=0;U<E;U++)y+=S[U]*T[U];i.update(y,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function GR(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,d){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function VR(o,t,i){const s=new WeakMap,l=new cn;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let _=s.get(d);if(_===void 0||_.count!==g){let R=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var S=R;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),T===!0&&(b=2),M===!0&&(b=3);let O=d.attributes.position.count*b,B=1;O>t.maxTextureSize&&(B=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const P=new Float32Array(O*B*4*g),V=new Yx(P,O,B,g);V.type=ra,V.needsUpdate=!0;const N=b*4;for(let H=0;H<g;H++){const W=y[H],D=U[H],q=C[H],Y=O*B*4*H;for(let z=0;z<W.count;z++){const J=z*N;E===!0&&(l.fromBufferAttribute(W,z),P[Y+J+0]=l.x,P[Y+J+1]=l.y,P[Y+J+2]=l.z,P[Y+J+3]=0),T===!0&&(l.fromBufferAttribute(D,z),P[Y+J+4]=l.x,P[Y+J+5]=l.y,P[Y+J+6]=l.z,P[Y+J+7]=0),M===!0&&(l.fromBufferAttribute(q,z),P[Y+J+8]=l.x,P[Y+J+9]=l.y,P[Y+J+10]=l.z,P[Y+J+11]=q.itemSize===4?l.w:1)}}_={count:g,texture:V,size:new Vt(O,B)},s.set(d,_),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function kR(o,t,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,v=p.geometry,g=t.get(p,v);if(l.get(g)!==m&&(t.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==m&&(_.update(),l.set(_,m))}return g}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const _S=new Xn,ax=new iS(1,1),yS=new Yx,xS=new UT,SS=new $x,sx=[],rx=[],ox=new Float32Array(16),lx=new Float32Array(9),ux=new Float32Array(4);function Ao(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=sx[l];if(u===void 0&&(u=new Float32Array(l),sx[l]=u),t!==0){s.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,o[f].toArray(u,d)}return u}function bn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function An(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function uf(o,t){let i=rx[t];i===void 0&&(i=new Int32Array(t),rx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function XR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function qR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2fv(this.addr,t),An(i,t)}}function YR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bn(i,t))return;o.uniform3fv(this.addr,t),An(i,t)}}function WR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4fv(this.addr,t),An(i,t)}}function jR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;ux.set(s),o.uniformMatrix2fv(this.addr,!1,ux),An(i,s)}}function ZR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;lx.set(s),o.uniformMatrix3fv(this.addr,!1,lx),An(i,s)}}function QR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;ox.set(s),o.uniformMatrix4fv(this.addr,!1,ox),An(i,s)}}function KR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function JR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2iv(this.addr,t),An(i,t)}}function $R(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3iv(this.addr,t),An(i,t)}}function tw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4iv(this.addr,t),An(i,t)}}function ew(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function nw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2uiv(this.addr,t),An(i,t)}}function iw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3uiv(this.addr,t),An(i,t)}}function aw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4uiv(this.addr,t),An(i,t)}}function sw(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(ax.compareFunction=Xx,u=ax):u=_S,i.setTexture2D(t||u,l)}function rw(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||xS,l)}function ow(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||SS,l)}function lw(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||yS,l)}function uw(o){switch(o){case 5126:return XR;case 35664:return qR;case 35665:return YR;case 35666:return WR;case 35674:return jR;case 35675:return ZR;case 35676:return QR;case 5124:case 35670:return KR;case 35667:case 35671:return JR;case 35668:case 35672:return $R;case 35669:case 35673:return tw;case 5125:return ew;case 36294:return nw;case 36295:return iw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return lw}}function cw(o,t){o.uniform1fv(this.addr,t)}function fw(o,t){const i=Ao(t,this.size,2);o.uniform2fv(this.addr,i)}function hw(o,t){const i=Ao(t,this.size,3);o.uniform3fv(this.addr,i)}function dw(o,t){const i=Ao(t,this.size,4);o.uniform4fv(this.addr,i)}function pw(o,t){const i=Ao(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function mw(o,t){const i=Ao(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function gw(o,t){const i=Ao(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function vw(o,t){o.uniform1iv(this.addr,t)}function _w(o,t){o.uniform2iv(this.addr,t)}function yw(o,t){o.uniform3iv(this.addr,t)}function xw(o,t){o.uniform4iv(this.addr,t)}function Sw(o,t){o.uniform1uiv(this.addr,t)}function Mw(o,t){o.uniform2uiv(this.addr,t)}function Ew(o,t){o.uniform3uiv(this.addr,t)}function Tw(o,t){o.uniform4uiv(this.addr,t)}function bw(o,t,i){const s=this.cache,l=t.length,u=uf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||_S,u[f])}function Aw(o,t,i){const s=this.cache,l=t.length,u=uf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||xS,u[f])}function Rw(o,t,i){const s=this.cache,l=t.length,u=uf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||SS,u[f])}function ww(o,t,i){const s=this.cache,l=t.length,u=uf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||yS,u[f])}function Cw(o){switch(o){case 5126:return cw;case 35664:return fw;case 35665:return hw;case 35666:return dw;case 35674:return pw;case 35675:return mw;case 35676:return gw;case 5124:case 35670:return vw;case 35667:case 35671:return _w;case 35668:case 35672:return yw;case 35669:case 35673:return xw;case 5125:return Sw;case 36294:return Mw;case 36295:return Ew;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return ww}}class Dw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=uw(i.type)}}class Nw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Cw(i.type)}}class Uw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Sp=/(\w+)(\])?(\[|\.)?/g;function cx(o,t){o.seq.push(t),o.map[t.id]=t}function Lw(o,t,i){const s=o.name,l=s.length;for(Sp.lastIndex=0;;){const u=Sp.exec(s),f=Sp.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){cx(i,m===void 0?new Dw(d,o,t):new Nw(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new Uw(d),cx(i,g)),i=g}}}class Jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);Lw(u,f,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function fx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const Ow=37297;let Pw=0;function zw(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const hx=new ye;function Iw(o){Le._getMatrix(hx,Le.workingColorSpace,o);const t=`mat3( ${hx.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case tf:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function dx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+zw(o.getShaderSource(t),d)}else return u}function Bw(o,t){const i=Iw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Fw(o,t){let i;switch(t){case Cx:i="Linear";break;case Dx:i="Reinhard";break;case Nx:i="Cineon";break;case Sm:i="ACESFilmic";break;case Lx:i="AgX";break;case Ox:i="Neutral";break;case Ux:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new G;function Hw(){Le.getLuminanceCoefficients(Xc);const o=Xc.x.toFixed(4),t=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function Vw(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function kw(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:o.getAttribLocation(t,f),locationSize:d}}return i}function Dl(o){return o!==""}function px(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function gm(o){return o.replace(Xw,Yw)}const qw=new Map;function Yw(o,t){let i=Me[t];if(i===void 0){const s=qw.get(t);if(s!==void 0)i=Me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return gm(i)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gx(o){return o.replace(Ww,jw)}function jw(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function vx(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function Zw(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Rx?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===NE?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Da&&(t="SHADOWMAP_TYPE_VSM"),t}function Qw(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vo:case _o:t="ENVMAP_TYPE_CUBE";break;case lf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kw(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _o:t="ENVMAP_MODE_REFRACTION";break}return t}function Jw(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case wx:t="ENVMAP_BLENDING_MULTIPLY";break;case QE:t="ENVMAP_BLENDING_MIX";break;case KE:t="ENVMAP_BLENDING_ADD";break}return t}function $w(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function tC(o,t,i,s){const l=o.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=Zw(i),m=Qw(i),v=Kw(i),g=Jw(i),_=$w(i),S=Gw(i),E=Vw(u),T=l.createProgram();let M,y,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Dl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Dl).join(`
`),y.length>0&&(y+=`
`)):(M=[vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),y=[vx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==La?"#define TONE_MAPPING":"",i.toneMapping!==La?Me.tonemapping_pars_fragment:"",i.toneMapping!==La?Fw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,Bw("linearToOutputTexel",i.outputColorSpace),Hw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Dl).join(`
`)),f=gm(f),f=px(f,i),f=mx(f,i),d=gm(d),d=px(d,i),d=mx(d,i),f=gx(f),d=gx(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===my?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===my?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const C=U+M+f,b=U+y+d,O=fx(l,l.VERTEX_SHADER,C),B=fx(l,l.FRAGMENT_SHADER,b);l.attachShader(T,O),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(H){if(o.debug.checkShaderErrors){const W=l.getProgramInfoLog(T)||"",D=l.getShaderInfoLog(O)||"",q=l.getShaderInfoLog(B)||"",Y=W.trim(),z=D.trim(),J=q.trim();let Q=!0,ut=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,O,B);else{const yt=dx(l,O,"vertex"),St=dx(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Y+`
`+yt+`
`+St)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(z===""||J==="")&&(ut=!1);ut&&(H.diagnostics={runnable:Q,programLog:Y,vertexShader:{log:z,prefix:M},fragmentShader:{log:J,prefix:y}})}l.deleteShader(O),l.deleteShader(B),V=new Jc(l,T),N=kw(l,T)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,Ow)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Pw++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=O,this.fragmentShader=B,this}let eC=0;class nC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new iC(t),i.set(t,s)),s}}class iC{constructor(t){this.id=eC++,this.code=t,this.usedTimes=0}}function aC(o,t,i,s,l,u,f){const d=new Wx,p=new nC,m=new Set,v=[],g=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return m.add(N),N===0?"uv":`uv${N}`}function M(N,R,H,W,D){const q=W.fog,Y=D.geometry,z=N.isMeshStandardMaterial?W.environment:null,J=(N.isMeshStandardMaterial?i:t).get(N.envMap||z),Q=J&&J.mapping===lf?J.image.height:null,ut=E[N.type];N.precision!==null&&(S=l.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=yt!==void 0?yt.length:0;let Ft=0;Y.morphAttributes.position!==void 0&&(Ft=1),Y.morphAttributes.normal!==void 0&&(Ft=2),Y.morphAttributes.color!==void 0&&(Ft=3);let Qt,X,pt,j;if(ut){const Ce=aa[ut];Qt=Ce.vertexShader,X=Ce.fragmentShader}else Qt=N.vertexShader,X=N.fragmentShader,p.update(N),pt=p.getVertexShaderID(N),j=p.getFragmentShaderID(N);const tt=o.getRenderTarget(),xt=o.state.buffers.depth.getReversed(),Rt=D.isInstancedMesh===!0,Ct=D.isBatchedMesh===!0,Tt=!!N.map,Lt=!!N.matcap,F=!!J,At=!!N.aoMap,vt=!!N.lightMap,mt=!!N.bumpMap,gt=!!N.normalMap,wt=!!N.displacementMap,Nt=!!N.emissiveMap,zt=!!N.metalnessMap,oe=!!N.roughnessMap,re=N.anisotropy>0,I=N.clearcoat>0,A=N.dispersion>0,rt=N.iridescence>0,ft=N.sheen>0,Ut=N.transmission>0,_t=re&&!!N.anisotropyMap,Jt=I&&!!N.clearcoatMap,Ht=I&&!!N.clearcoatNormalMap,te=I&&!!N.clearcoatRoughnessMap,ne=rt&&!!N.iridescenceMap,Ot=rt&&!!N.iridescenceThicknessMap,Wt=ft&&!!N.sheenColorMap,Mt=ft&&!!N.sheenRoughnessMap,Yt=!!N.specularMap,It=!!N.specularColorMap,me=!!N.specularIntensityMap,K=Ut&&!!N.transmissionMap,Gt=Ut&&!!N.thicknessMap,Xt=!!N.gradientMap,ee=!!N.alphaMap,Pt=N.alphaTest>0,Dt=!!N.alphaHash,se=!!N.extensions;let _e=La;N.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(_e=o.toneMapping);const We={shaderID:ut,shaderType:N.type,shaderName:N.name,vertexShader:Qt,fragmentShader:X,defines:N.defines,customVertexShaderID:pt,customFragmentShaderID:j,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:Ct,batchingColor:Ct&&D._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&D.instanceColor!==null,instancingMorph:Rt&&D.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:tt===null?o.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:yo,alphaToCoverage:!!N.alphaToCoverage,map:Tt,matcap:Lt,envMap:F,envMapMode:F&&J.mapping,envMapCubeUVHeight:Q,aoMap:At,lightMap:vt,bumpMap:mt,normalMap:gt,displacementMap:_&&wt,emissiveMap:Nt,normalMapObjectSpace:gt&&N.normalMapType===eT,normalMapTangentSpace:gt&&N.normalMapType===kx,metalnessMap:zt,roughnessMap:oe,anisotropy:re,anisotropyMap:_t,clearcoat:I,clearcoatMap:Jt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:te,dispersion:A,iridescence:rt,iridescenceMap:ne,iridescenceThicknessMap:Ot,sheen:ft,sheenColorMap:Wt,sheenRoughnessMap:Mt,specularMap:Yt,specularColorMap:It,specularIntensityMap:me,transmission:Ut,transmissionMap:K,thicknessMap:Gt,gradientMap:Xt,opaque:N.transparent===!1&&N.blending===ho&&N.alphaToCoverage===!1,alphaMap:ee,alphaTest:Pt,alphaHash:Dt,combine:N.combine,mapUv:Tt&&T(N.map.channel),aoMapUv:At&&T(N.aoMap.channel),lightMapUv:vt&&T(N.lightMap.channel),bumpMapUv:mt&&T(N.bumpMap.channel),normalMapUv:gt&&T(N.normalMap.channel),displacementMapUv:wt&&T(N.displacementMap.channel),emissiveMapUv:Nt&&T(N.emissiveMap.channel),metalnessMapUv:zt&&T(N.metalnessMap.channel),roughnessMapUv:oe&&T(N.roughnessMap.channel),anisotropyMapUv:_t&&T(N.anisotropyMap.channel),clearcoatMapUv:Jt&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&T(N.sheenRoughnessMap.channel),specularMapUv:Yt&&T(N.specularMap.channel),specularColorMapUv:It&&T(N.specularColorMap.channel),specularIntensityMapUv:me&&T(N.specularIntensityMap.channel),transmissionMapUv:K&&T(N.transmissionMap.channel),thicknessMapUv:Gt&&T(N.thicknessMap.channel),alphaMapUv:ee&&T(N.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(gt||re),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!Y.attributes.uv&&(Tt||ee),fog:!!q,useFog:N.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:xt,skinning:D.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ft,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:_e,decodeVideoTexture:Tt&&N.map.isVideoTexture===!0&&Le.getTransfer(N.map.colorSpace)===Ye,decodeVideoTextureEmissive:Nt&&N.emissiveMap.isVideoTexture===!0&&Le.getTransfer(N.emissiveMap.colorSpace)===Ye,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Di,flipSided:N.side===kn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:se&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&N.extensions.multiDraw===!0||Ct)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function y(N){const R=[];if(N.shaderID?R.push(N.shaderID):(R.push(N.customVertexShaderID),R.push(N.customFragmentShaderID)),N.defines!==void 0)for(const H in N.defines)R.push(H),R.push(N.defines[H]);return N.isRawShaderMaterial===!1&&(U(R,N),C(R,N),R.push(o.outputColorSpace)),R.push(N.customProgramCacheKey),R.join()}function U(N,R){N.push(R.precision),N.push(R.outputColorSpace),N.push(R.envMapMode),N.push(R.envMapCubeUVHeight),N.push(R.mapUv),N.push(R.alphaMapUv),N.push(R.lightMapUv),N.push(R.aoMapUv),N.push(R.bumpMapUv),N.push(R.normalMapUv),N.push(R.displacementMapUv),N.push(R.emissiveMapUv),N.push(R.metalnessMapUv),N.push(R.roughnessMapUv),N.push(R.anisotropyMapUv),N.push(R.clearcoatMapUv),N.push(R.clearcoatNormalMapUv),N.push(R.clearcoatRoughnessMapUv),N.push(R.iridescenceMapUv),N.push(R.iridescenceThicknessMapUv),N.push(R.sheenColorMapUv),N.push(R.sheenRoughnessMapUv),N.push(R.specularMapUv),N.push(R.specularColorMapUv),N.push(R.specularIntensityMapUv),N.push(R.transmissionMapUv),N.push(R.thicknessMapUv),N.push(R.combine),N.push(R.fogExp2),N.push(R.sizeAttenuation),N.push(R.morphTargetsCount),N.push(R.morphAttributeCount),N.push(R.numDirLights),N.push(R.numPointLights),N.push(R.numSpotLights),N.push(R.numSpotLightMaps),N.push(R.numHemiLights),N.push(R.numRectAreaLights),N.push(R.numDirLightShadows),N.push(R.numPointLightShadows),N.push(R.numSpotLightShadows),N.push(R.numSpotLightShadowsWithMaps),N.push(R.numLightProbes),N.push(R.shadowMapType),N.push(R.toneMapping),N.push(R.numClippingPlanes),N.push(R.numClipIntersection),N.push(R.depthPacking)}function C(N,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),N.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),N.push(d.mask)}function b(N){const R=E[N.type];let H;if(R){const W=aa[R];H=Vl.clone(W.uniforms)}else H=N.uniforms;return H}function O(N,R){let H;for(let W=0,D=v.length;W<D;W++){const q=v[W];if(q.cacheKey===R){H=q,++H.usedTimes;break}}return H===void 0&&(H=new tC(o,R,N,u),v.push(H)),H}function B(N){if(--N.usedTimes===0){const R=v.indexOf(N);v[R]=v[v.length-1],v.pop(),N.destroy()}}function P(N){p.remove(N)}function V(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:b,acquireProgram:O,releaseProgram:B,releaseShaderCache:P,programs:v,dispose:V}}function sC(){let o=new WeakMap;function t(f){return o.has(f)}function i(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function s(f){o.delete(f)}function l(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function rC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function _x(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function yx(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function f(g,_,S,E,T,M){let y=o[t];return y===void 0?(y={id:g.id,object:g,geometry:_,material:S,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},o[t]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=S,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=T,y.group=M),t++,y}function d(g,_,S,E,T,M){const y=f(g,_,S,E,T,M);S.transmission>0?s.push(y):S.transparent===!0?l.push(y):i.push(y)}function p(g,_,S,E,T,M){const y=f(g,_,S,E,T,M);S.transmission>0?s.unshift(y):S.transparent===!0?l.unshift(y):i.unshift(y)}function m(g,_){i.length>1&&i.sort(g||rC),s.length>1&&s.sort(_||_x),l.length>1&&l.sort(_||_x)}function v(){for(let g=t,_=o.length;g<_;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:v,sort:m}}function oC(){let o=new WeakMap;function t(s,l){const u=o.get(s);let f;return u===void 0?(f=new yx,o.set(s,[f])):l>=u.length?(f=new yx,u.push(f)):f=u[l],f}function i(){o=new WeakMap}return{get:t,dispose:i}}function lC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new G,color:new de};break;case"SpotLight":i={position:new G,direction:new G,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new G,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new G,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new G,halfWidth:new G,halfHeight:new G};break}return o[t.id]=i,i}}}function uC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let cC=0;function fC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function hC(o){const t=new lC,i=uC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new G);const l=new G,u=new Ve,f=new Ve;function d(m){let v=0,g=0,_=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,E=0,T=0,M=0,y=0,U=0,C=0,b=0,O=0,B=0,P=0;m.sort(fC);for(let N=0,R=m.length;N<R;N++){const H=m[N],W=H.color,D=H.intensity,q=H.distance,Y=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=W.r*D,g+=W.g*D,_+=W.b*D;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],D);P++}else if(H.isDirectionalLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const J=H.shadow,Q=i.get(H);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.directionalShadow[S]=Q,s.directionalShadowMap[S]=Y,s.directionalShadowMatrix[S]=H.shadow.matrix,U++}s.directional[S]=z,S++}else if(H.isSpotLight){const z=t.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(W).multiplyScalar(D),z.distance=q,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[T]=z;const J=H.shadow;if(H.map&&(s.spotLightMap[O]=H.map,O++,J.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[T]=J.matrix,H.castShadow){const Q=i.get(H);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,s.spotShadow[T]=Q,s.spotShadowMap[T]=Y,b++}T++}else if(H.isRectAreaLight){const z=t.get(H);z.color.copy(W).multiplyScalar(D),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=z,M++}else if(H.isPointLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const J=H.shadow,Q=i.get(H);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,s.pointShadow[E]=Q,s.pointShadowMap[E]=Y,s.pointShadowMatrix[E]=H.shadow.matrix,C++}s.point[E]=z,E++}else if(H.isHemisphereLight){const z=t.get(H);z.skyColor.copy(H.color).multiplyScalar(D),z.groundColor.copy(H.groundColor).multiplyScalar(D),s.hemi[y]=z,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Zt.LTC_FLOAT_1,s.rectAreaLTC2=Zt.LTC_FLOAT_2):(s.rectAreaLTC1=Zt.LTC_HALF_1,s.rectAreaLTC2=Zt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=_;const V=s.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==T||V.rectAreaLength!==M||V.hemiLength!==y||V.numDirectionalShadows!==U||V.numPointShadows!==C||V.numSpotShadows!==b||V.numSpotMaps!==O||V.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=y,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=b+O-B,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=P,V.directionalLength=S,V.pointLength=E,V.spotLength=T,V.rectAreaLength=M,V.hemiLength=y,V.numDirectionalShadows=U,V.numPointShadows=C,V.numSpotShadows=b,V.numSpotMaps=O,V.numLightProbes=P,s.version=cC++)}function p(m,v){let g=0,_=0,S=0,E=0,T=0;const M=v.matrixWorldInverse;for(let y=0,U=m.length;y<U;y++){const C=m[y];if(C.isDirectionalLight){const b=s.directional[g];b.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),g++}else if(C.isSpotLight){const b=s.spot[S];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(M),b.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),S++}else if(C.isRectAreaLight){const b=s.rectArea[E];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(M),f.identity(),u.copy(C.matrixWorld),u.premultiply(M),f.extractRotation(u),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),E++}else if(C.isPointLight){const b=s.point[_];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(M),_++}else if(C.isHemisphereLight){const b=s.hemi[T];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(M),T++}}}return{setup:d,setupView:p,state:s}}function xx(o){const t=new hC(o),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function f(v){s.push(v)}function d(){t.setup(i)}function p(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function dC(o){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new xx(o),t.set(l,[d])):u>=f.length?(d=new xx(o),f.push(d)):d=f[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const pC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mC=`uniform sampler2D shadow_pass;
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
}`;function gC(o,t,i){let s=new Um;const l=new Vt,u=new Vt,f=new cn,d=new Fb({depthPacking:tT}),p=new Hb,m={},v=i.maxTextureSize,g={[gs]:kn,[kn]:gs,[Di]:Di},_=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:pC,fragmentShader:mC}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Rn;E.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new fn(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rx;let y=this.type;this.render=function(B,P,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const N=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),W=o.state;W.setBlending(Ua),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const D=y!==Da&&this.type===Da,q=y===Da&&this.type!==Da;for(let Y=0,z=B.length;Y<z;Y++){const J=B[Y],Q=J.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const ut=Q.getFrameExtents();if(l.multiply(ut),u.copy(Q.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ut.x),l.x=u.x*ut.x,Q.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ut.y),l.y=u.y*ut.y,Q.mapSize.y=u.y)),Q.map===null||D===!0||q===!0){const St=this.type!==Da?{minFilter:_i,magFilter:_i}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ni(l.x,l.y,St),Q.map.texture.name=J.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const yt=Q.getViewportCount();for(let St=0;St<yt;St++){const Ft=Q.getViewport(St);f.set(u.x*Ft.x,u.y*Ft.y,u.x*Ft.z,u.y*Ft.w),W.viewport(f),Q.updateMatrices(J,St),s=Q.getFrustum(),b(P,V,Q.camera,J,this.type)}Q.isPointLightShadow!==!0&&this.type===Da&&U(Q,V),Q.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(N,R,H)};function U(B,P){const V=t.update(T);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ni(l.x,l.y)),_.uniforms.shadow_pass.value=B.map.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(P,null,V,_,T,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(P,null,V,S,T,null)}function C(B,P,V,N){let R=null;const H=V.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)R=H;else if(R=V.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const W=R.uuid,D=P.uuid;let q=m[W];q===void 0&&(q={},m[W]=q);let Y=q[D];Y===void 0&&(Y=R.clone(),q[D]=Y,P.addEventListener("dispose",O)),R=Y}if(R.visible=P.visible,R.wireframe=P.wireframe,N===Da?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:g[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,V.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const W=o.properties.get(R);W.light=V}return R}function b(B,P,V,N,R){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Da)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,B.matrixWorld);const D=t.update(B),q=B.material;if(Array.isArray(q)){const Y=D.groups;for(let z=0,J=Y.length;z<J;z++){const Q=Y[z],ut=q[Q.materialIndex];if(ut&&ut.visible){const yt=C(B,ut,N,R);B.onBeforeShadow(o,B,P,V,D,yt,Q),o.renderBufferDirect(V,null,D,yt,B,Q),B.onAfterShadow(o,B,P,V,D,yt,Q)}}}else if(q.visible){const Y=C(B,q,N,R);B.onBeforeShadow(o,B,P,V,D,Y,null),o.renderBufferDirect(V,null,D,Y,B,null),B.onAfterShadow(o,B,P,V,D,Y,null)}}const W=B.children;for(let D=0,q=W.length;D<q;D++)b(W[D],P,V,N,R)}function O(B){B.target.removeEventListener("dispose",O);for(const V in m){const N=m[V],R=B.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}const vC={[Rp]:wp,[Cp]:Up,[Dp]:Lp,[go]:Np,[wp]:Rp,[Up]:Cp,[Lp]:Dp,[Np]:go};function _C(o,t){function i(){let K=!1;const Gt=new cn;let Xt=null;const ee=new cn(0,0,0,0);return{setMask:function(Pt){Xt!==Pt&&!K&&(o.colorMask(Pt,Pt,Pt,Pt),Xt=Pt)},setLocked:function(Pt){K=Pt},setClear:function(Pt,Dt,se,_e,We){We===!0&&(Pt*=_e,Dt*=_e,se*=_e),Gt.set(Pt,Dt,se,_e),ee.equals(Gt)===!1&&(o.clearColor(Pt,Dt,se,_e),ee.copy(Gt))},reset:function(){K=!1,Xt=null,ee.set(-1,0,0,0)}}}function s(){let K=!1,Gt=!1,Xt=null,ee=null,Pt=null;return{setReversed:function(Dt){if(Gt!==Dt){const se=t.get("EXT_clip_control");Dt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),Gt=Dt;const _e=Pt;Pt=null,this.setClear(_e)}},getReversed:function(){return Gt},setTest:function(Dt){Dt?tt(o.DEPTH_TEST):xt(o.DEPTH_TEST)},setMask:function(Dt){Xt!==Dt&&!K&&(o.depthMask(Dt),Xt=Dt)},setFunc:function(Dt){if(Gt&&(Dt=vC[Dt]),ee!==Dt){switch(Dt){case Rp:o.depthFunc(o.NEVER);break;case wp:o.depthFunc(o.ALWAYS);break;case Cp:o.depthFunc(o.LESS);break;case go:o.depthFunc(o.LEQUAL);break;case Dp:o.depthFunc(o.EQUAL);break;case Np:o.depthFunc(o.GEQUAL);break;case Up:o.depthFunc(o.GREATER);break;case Lp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ee=Dt}},setLocked:function(Dt){K=Dt},setClear:function(Dt){Pt!==Dt&&(Gt&&(Dt=1-Dt),o.clearDepth(Dt),Pt=Dt)},reset:function(){K=!1,Xt=null,ee=null,Pt=null,Gt=!1}}}function l(){let K=!1,Gt=null,Xt=null,ee=null,Pt=null,Dt=null,se=null,_e=null,We=null;return{setTest:function(Ce){K||(Ce?tt(o.STENCIL_TEST):xt(o.STENCIL_TEST))},setMask:function(Ce){Gt!==Ce&&!K&&(o.stencilMask(Ce),Gt=Ce)},setFunc:function(Ce,nn,Sn){(Xt!==Ce||ee!==nn||Pt!==Sn)&&(o.stencilFunc(Ce,nn,Sn),Xt=Ce,ee=nn,Pt=Sn)},setOp:function(Ce,nn,Sn){(Dt!==Ce||se!==nn||_e!==Sn)&&(o.stencilOp(Ce,nn,Sn),Dt=Ce,se=nn,_e=Sn)},setLocked:function(Ce){K=Ce},setClear:function(Ce){We!==Ce&&(o.clearStencil(Ce),We=Ce)},reset:function(){K=!1,Gt=null,Xt=null,ee=null,Pt=null,Dt=null,se=null,_e=null,We=null}}}const u=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},_=new WeakMap,S=[],E=null,T=!1,M=null,y=null,U=null,C=null,b=null,O=null,B=null,P=new de(0,0,0),V=0,N=!1,R=null,H=null,W=null,D=null,q=null;const Y=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=J>=2);let ut=null,yt={};const St=o.getParameter(o.SCISSOR_BOX),Ft=o.getParameter(o.VIEWPORT),Qt=new cn().fromArray(St),X=new cn().fromArray(Ft);function pt(K,Gt,Xt,ee){const Pt=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(K,Dt),o.texParameteri(K,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(K,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let se=0;se<Xt;se++)K===o.TEXTURE_3D||K===o.TEXTURE_2D_ARRAY?o.texImage3D(Gt,0,o.RGBA,1,1,ee,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Gt+se,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return Dt}const j={};j[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),j[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),j[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),tt(o.DEPTH_TEST),f.setFunc(go),mt(!1),gt(cy),tt(o.CULL_FACE),At(Ua);function tt(K){v[K]!==!0&&(o.enable(K),v[K]=!0)}function xt(K){v[K]!==!1&&(o.disable(K),v[K]=!1)}function Rt(K,Gt){return g[K]!==Gt?(o.bindFramebuffer(K,Gt),g[K]=Gt,K===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Gt),K===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Gt),!0):!1}function Ct(K,Gt){let Xt=S,ee=!1;if(K){Xt=_.get(Gt),Xt===void 0&&(Xt=[],_.set(Gt,Xt));const Pt=K.textures;if(Xt.length!==Pt.length||Xt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,se=Pt.length;Dt<se;Dt++)Xt[Dt]=o.COLOR_ATTACHMENT0+Dt;Xt.length=Pt.length,ee=!0}}else Xt[0]!==o.BACK&&(Xt[0]=o.BACK,ee=!0);ee&&o.drawBuffers(Xt)}function Tt(K){return E!==K?(o.useProgram(K),E=K,!0):!1}const Lt={[Zs]:o.FUNC_ADD,[LE]:o.FUNC_SUBTRACT,[OE]:o.FUNC_REVERSE_SUBTRACT};Lt[PE]=o.MIN,Lt[zE]=o.MAX;const F={[IE]:o.ZERO,[BE]:o.ONE,[FE]:o.SRC_COLOR,[bp]:o.SRC_ALPHA,[qE]:o.SRC_ALPHA_SATURATE,[kE]:o.DST_COLOR,[GE]:o.DST_ALPHA,[HE]:o.ONE_MINUS_SRC_COLOR,[Ap]:o.ONE_MINUS_SRC_ALPHA,[XE]:o.ONE_MINUS_DST_COLOR,[VE]:o.ONE_MINUS_DST_ALPHA,[YE]:o.CONSTANT_COLOR,[WE]:o.ONE_MINUS_CONSTANT_COLOR,[jE]:o.CONSTANT_ALPHA,[ZE]:o.ONE_MINUS_CONSTANT_ALPHA};function At(K,Gt,Xt,ee,Pt,Dt,se,_e,We,Ce){if(K===Ua){T===!0&&(xt(o.BLEND),T=!1);return}if(T===!1&&(tt(o.BLEND),T=!0),K!==UE){if(K!==M||Ce!==N){if((y!==Zs||b!==Zs)&&(o.blendEquation(o.FUNC_ADD),y=Zs,b=Zs),Ce)switch(K){case ho:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pl:o.blendFunc(o.ONE,o.ONE);break;case fy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hy:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case ho:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case fy:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hy:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}U=null,C=null,O=null,B=null,P.set(0,0,0),V=0,M=K,N=Ce}return}Pt=Pt||Gt,Dt=Dt||Xt,se=se||ee,(Gt!==y||Pt!==b)&&(o.blendEquationSeparate(Lt[Gt],Lt[Pt]),y=Gt,b=Pt),(Xt!==U||ee!==C||Dt!==O||se!==B)&&(o.blendFuncSeparate(F[Xt],F[ee],F[Dt],F[se]),U=Xt,C=ee,O=Dt,B=se),(_e.equals(P)===!1||We!==V)&&(o.blendColor(_e.r,_e.g,_e.b,We),P.copy(_e),V=We),M=K,N=!1}function vt(K,Gt){K.side===Di?xt(o.CULL_FACE):tt(o.CULL_FACE);let Xt=K.side===kn;Gt&&(Xt=!Xt),mt(Xt),K.blending===ho&&K.transparent===!1?At(Ua):At(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),f.setFunc(K.depthFunc),f.setTest(K.depthTest),f.setMask(K.depthWrite),u.setMask(K.colorWrite);const ee=K.stencilWrite;d.setTest(ee),ee&&(d.setMask(K.stencilWriteMask),d.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),d.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Nt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?tt(o.SAMPLE_ALPHA_TO_COVERAGE):xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function mt(K){R!==K&&(K?o.frontFace(o.CW):o.frontFace(o.CCW),R=K)}function gt(K){K!==CE?(tt(o.CULL_FACE),K!==H&&(K===cy?o.cullFace(o.BACK):K===DE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):xt(o.CULL_FACE),H=K}function wt(K){K!==W&&(z&&o.lineWidth(K),W=K)}function Nt(K,Gt,Xt){K?(tt(o.POLYGON_OFFSET_FILL),(D!==Gt||q!==Xt)&&(o.polygonOffset(Gt,Xt),D=Gt,q=Xt)):xt(o.POLYGON_OFFSET_FILL)}function zt(K){K?tt(o.SCISSOR_TEST):xt(o.SCISSOR_TEST)}function oe(K){K===void 0&&(K=o.TEXTURE0+Y-1),ut!==K&&(o.activeTexture(K),ut=K)}function re(K,Gt,Xt){Xt===void 0&&(ut===null?Xt=o.TEXTURE0+Y-1:Xt=ut);let ee=yt[Xt];ee===void 0&&(ee={type:void 0,texture:void 0},yt[Xt]=ee),(ee.type!==K||ee.texture!==Gt)&&(ut!==Xt&&(o.activeTexture(Xt),ut=Xt),o.bindTexture(K,Gt||j[K]),ee.type=K,ee.texture=Gt)}function I(){const K=yt[ut];K!==void 0&&K.type!==void 0&&(o.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function rt(){try{o.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ft(){try{o.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ut(){try{o.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _t(){try{o.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Jt(){try{o.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ht(){try{o.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function te(){try{o.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ne(){try{o.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ot(){try{o.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Wt(K){Qt.equals(K)===!1&&(o.scissor(K.x,K.y,K.z,K.w),Qt.copy(K))}function Mt(K){X.equals(K)===!1&&(o.viewport(K.x,K.y,K.z,K.w),X.copy(K))}function Yt(K,Gt){let Xt=m.get(Gt);Xt===void 0&&(Xt=new WeakMap,m.set(Gt,Xt));let ee=Xt.get(K);ee===void 0&&(ee=o.getUniformBlockIndex(Gt,K.name),Xt.set(K,ee))}function It(K,Gt){const ee=m.get(Gt).get(K);p.get(Gt)!==ee&&(o.uniformBlockBinding(Gt,ee,K.__bindingPointIndex),p.set(Gt,ee))}function me(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ut=null,yt={},g={},_=new WeakMap,S=[],E=null,T=!1,M=null,y=null,U=null,C=null,b=null,O=null,B=null,P=new de(0,0,0),V=0,N=!1,R=null,H=null,W=null,D=null,q=null,Qt.set(0,0,o.canvas.width,o.canvas.height),X.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:tt,disable:xt,bindFramebuffer:Rt,drawBuffers:Ct,useProgram:Tt,setBlending:At,setMaterial:vt,setFlipSided:mt,setCullFace:gt,setLineWidth:wt,setPolygonOffset:Nt,setScissorTest:zt,activeTexture:oe,bindTexture:re,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:rt,texImage2D:ne,texImage3D:Ot,updateUBOMapping:Yt,uniformBlockBinding:It,texStorage2D:Ht,texStorage3D:te,texSubImage2D:ft,texSubImage3D:Ut,compressedTexSubImage2D:_t,compressedTexSubImage3D:Jt,scissor:Wt,viewport:Mt,reset:me}}function yC(o,t,i,s,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Vt,v=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,A){return S?new OffscreenCanvas(I,A):nf("canvas")}function T(I,A,rt){let ft=1;const Ut=re(I);if((Ut.width>rt||Ut.height>rt)&&(ft=rt/Math.max(Ut.width,Ut.height)),ft<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const _t=Math.floor(ft*Ut.width),Jt=Math.floor(ft*Ut.height);g===void 0&&(g=E(_t,Jt));const Ht=A?E(_t,Jt):g;return Ht.width=_t,Ht.height=Jt,Ht.getContext("2d").drawImage(I,0,0,_t,Jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ut.width+"x"+Ut.height+") to ("+_t+"x"+Jt+")."),Ht}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ut.width+"x"+Ut.height+")."),I;return I}function M(I){return I.generateMipmaps}function y(I){o.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(I,A,rt,ft,Ut=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _t=A;if(A===o.RED&&(rt===o.FLOAT&&(_t=o.R32F),rt===o.HALF_FLOAT&&(_t=o.R16F),rt===o.UNSIGNED_BYTE&&(_t=o.R8)),A===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.R8UI),rt===o.UNSIGNED_SHORT&&(_t=o.R16UI),rt===o.UNSIGNED_INT&&(_t=o.R32UI),rt===o.BYTE&&(_t=o.R8I),rt===o.SHORT&&(_t=o.R16I),rt===o.INT&&(_t=o.R32I)),A===o.RG&&(rt===o.FLOAT&&(_t=o.RG32F),rt===o.HALF_FLOAT&&(_t=o.RG16F),rt===o.UNSIGNED_BYTE&&(_t=o.RG8)),A===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RG8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RG16UI),rt===o.UNSIGNED_INT&&(_t=o.RG32UI),rt===o.BYTE&&(_t=o.RG8I),rt===o.SHORT&&(_t=o.RG16I),rt===o.INT&&(_t=o.RG32I)),A===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),rt===o.UNSIGNED_INT&&(_t=o.RGB32UI),rt===o.BYTE&&(_t=o.RGB8I),rt===o.SHORT&&(_t=o.RGB16I),rt===o.INT&&(_t=o.RGB32I)),A===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),rt===o.UNSIGNED_INT&&(_t=o.RGBA32UI),rt===o.BYTE&&(_t=o.RGBA8I),rt===o.SHORT&&(_t=o.RGBA16I),rt===o.INT&&(_t=o.RGBA32I)),A===o.RGB&&(rt===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),rt===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),A===o.RGBA){const Jt=Ut?tf:Le.getTransfer(ft);rt===o.FLOAT&&(_t=o.RGBA32F),rt===o.HALF_FLOAT&&(_t=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(_t=Jt===Ye?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function b(I,A){let rt;return I?A===null||A===tr||A===Il?rt=o.DEPTH24_STENCIL8:A===ra?rt=o.DEPTH32F_STENCIL8:A===zl&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===tr||A===Il?rt=o.DEPTH_COMPONENT24:A===ra?rt=o.DEPTH_COMPONENT32F:A===zl&&(rt=o.DEPTH_COMPONENT16),rt}function O(I,A){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==_i&&I.minFilter!==sa?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function B(I){const A=I.target;A.removeEventListener("dispose",B),V(A),A.isVideoTexture&&v.delete(A)}function P(I){const A=I.target;A.removeEventListener("dispose",P),R(A)}function V(I){const A=s.get(I);if(A.__webglInit===void 0)return;const rt=I.source,ft=_.get(rt);if(ft){const Ut=ft[A.__cacheKey];Ut.usedTimes--,Ut.usedTimes===0&&N(I),Object.keys(ft).length===0&&_.delete(rt)}s.remove(I)}function N(I){const A=s.get(I);o.deleteTexture(A.__webglTexture);const rt=I.source,ft=_.get(rt);delete ft[A.__cacheKey],f.memory.textures--}function R(I){const A=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(A.__webglFramebuffer[ft]))for(let Ut=0;Ut<A.__webglFramebuffer[ft].length;Ut++)o.deleteFramebuffer(A.__webglFramebuffer[ft][Ut]);else o.deleteFramebuffer(A.__webglFramebuffer[ft]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[ft])}else{if(Array.isArray(A.__webglFramebuffer))for(let ft=0;ft<A.__webglFramebuffer.length;ft++)o.deleteFramebuffer(A.__webglFramebuffer[ft]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ft=0;ft<A.__webglColorRenderbuffer.length;ft++)A.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[ft]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const rt=I.textures;for(let ft=0,Ut=rt.length;ft<Ut;ft++){const _t=s.get(rt[ft]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),f.memory.textures--),s.remove(rt[ft])}s.remove(I)}let H=0;function W(){H=0}function D(){const I=H;return I>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),H+=1,I}function q(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function Y(I,A){const rt=s.get(I);if(I.isVideoTexture&&zt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&rt.__version!==I.version){const ft=I.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(rt,I,A);return}}else I.isExternalTexture&&(rt.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+A)}function z(I,A){const rt=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&rt.__version!==I.version){j(rt,I,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+A)}function J(I,A){const rt=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&rt.__version!==I.version){j(rt,I,A);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+A)}function Q(I,A){const rt=s.get(I);if(I.version>0&&rt.__version!==I.version){tt(rt,I,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+A)}const ut={[zp]:o.REPEAT,[Ks]:o.CLAMP_TO_EDGE,[Ip]:o.MIRRORED_REPEAT},yt={[_i]:o.NEAREST,[JE]:o.NEAREST_MIPMAP_NEAREST,[gc]:o.NEAREST_MIPMAP_LINEAR,[sa]:o.LINEAR,[Vd]:o.LINEAR_MIPMAP_NEAREST,[Js]:o.LINEAR_MIPMAP_LINEAR},St={[nT]:o.NEVER,[lT]:o.ALWAYS,[iT]:o.LESS,[Xx]:o.LEQUAL,[aT]:o.EQUAL,[oT]:o.GEQUAL,[sT]:o.GREATER,[rT]:o.NOTEQUAL};function Ft(I,A){if(A.type===ra&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===sa||A.magFilter===Vd||A.magFilter===gc||A.magFilter===Js||A.minFilter===sa||A.minFilter===Vd||A.minFilter===gc||A.minFilter===Js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,ut[A.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,ut[A.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,ut[A.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,yt[A.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,yt[A.minFilter]),A.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,St[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===_i||A.minFilter!==gc&&A.minFilter!==Js||A.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Qt(I,A){let rt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",B));const ft=A.source;let Ut=_.get(ft);Ut===void 0&&(Ut={},_.set(ft,Ut));const _t=q(A);if(_t!==I.__cacheKey){Ut[_t]===void 0&&(Ut[_t]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,rt=!0),Ut[_t].usedTimes++;const Jt=Ut[I.__cacheKey];Jt!==void 0&&(Ut[I.__cacheKey].usedTimes--,Jt.usedTimes===0&&N(A)),I.__cacheKey=_t,I.__webglTexture=Ut[_t].texture}return rt}function X(I,A,rt){return Math.floor(Math.floor(I/rt)/A)}function pt(I,A,rt,ft){const _t=I.updateRanges;if(_t.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,rt,ft,A.data);else{_t.sort((Ot,Wt)=>Ot.start-Wt.start);let Jt=0;for(let Ot=1;Ot<_t.length;Ot++){const Wt=_t[Jt],Mt=_t[Ot],Yt=Wt.start+Wt.count,It=X(Mt.start,A.width,4),me=X(Wt.start,A.width,4);Mt.start<=Yt+1&&It===me&&X(Mt.start+Mt.count-1,A.width,4)===It?Wt.count=Math.max(Wt.count,Mt.start+Mt.count-Wt.start):(++Jt,_t[Jt]=Mt)}_t.length=Jt+1;const Ht=o.getParameter(o.UNPACK_ROW_LENGTH),te=o.getParameter(o.UNPACK_SKIP_PIXELS),ne=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let Ot=0,Wt=_t.length;Ot<Wt;Ot++){const Mt=_t[Ot],Yt=Math.floor(Mt.start/4),It=Math.ceil(Mt.count/4),me=Yt%A.width,K=Math.floor(Yt/A.width),Gt=It,Xt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,me),o.pixelStorei(o.UNPACK_SKIP_ROWS,K),i.texSubImage2D(o.TEXTURE_2D,0,me,K,Gt,Xt,rt,ft,A.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ht),o.pixelStorei(o.UNPACK_SKIP_PIXELS,te),o.pixelStorei(o.UNPACK_SKIP_ROWS,ne)}}function j(I,A,rt){let ft=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ft=o.TEXTURE_3D);const Ut=Qt(I,A),_t=A.source;i.bindTexture(ft,I.__webglTexture,o.TEXTURE0+rt);const Jt=s.get(_t);if(_t.version!==Jt.__version||Ut===!0){i.activeTexture(o.TEXTURE0+rt);const Ht=Le.getPrimaries(Le.workingColorSpace),te=A.colorSpace===ms?null:Le.getPrimaries(A.colorSpace),ne=A.colorSpace===ms||Ht===te?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Ot=T(A.image,!1,l.maxTextureSize);Ot=oe(A,Ot);const Wt=u.convert(A.format,A.colorSpace),Mt=u.convert(A.type);let Yt=C(A.internalFormat,Wt,Mt,A.colorSpace,A.isVideoTexture);Ft(ft,A);let It;const me=A.mipmaps,K=A.isVideoTexture!==!0,Gt=Jt.__version===void 0||Ut===!0,Xt=_t.dataReady,ee=O(A,Ot);if(A.isDepthTexture)Yt=b(A.format===Fl,A.type),Gt&&(K?i.texStorage2D(o.TEXTURE_2D,1,Yt,Ot.width,Ot.height):i.texImage2D(o.TEXTURE_2D,0,Yt,Ot.width,Ot.height,0,Wt,Mt,null));else if(A.isDataTexture)if(me.length>0){K&&Gt&&i.texStorage2D(o.TEXTURE_2D,ee,Yt,me[0].width,me[0].height);for(let Pt=0,Dt=me.length;Pt<Dt;Pt++)It=me[Pt],K?Xt&&i.texSubImage2D(o.TEXTURE_2D,Pt,0,0,It.width,It.height,Wt,Mt,It.data):i.texImage2D(o.TEXTURE_2D,Pt,Yt,It.width,It.height,0,Wt,Mt,It.data);A.generateMipmaps=!1}else K?(Gt&&i.texStorage2D(o.TEXTURE_2D,ee,Yt,Ot.width,Ot.height),Xt&&pt(A,Ot,Wt,Mt)):i.texImage2D(o.TEXTURE_2D,0,Yt,Ot.width,Ot.height,0,Wt,Mt,Ot.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){K&&Gt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ee,Yt,me[0].width,me[0].height,Ot.depth);for(let Pt=0,Dt=me.length;Pt<Dt;Pt++)if(It=me[Pt],A.format!==ki)if(Wt!==null)if(K){if(Xt)if(A.layerUpdates.size>0){const se=Qy(It.width,It.height,A.format,A.type);for(const _e of A.layerUpdates){const We=It.data.subarray(_e*se/It.data.BYTES_PER_ELEMENT,(_e+1)*se/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Pt,0,0,_e,It.width,It.height,1,Wt,We)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Pt,0,0,0,It.width,It.height,Ot.depth,Wt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Pt,Yt,It.width,It.height,Ot.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Xt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Pt,0,0,0,It.width,It.height,Ot.depth,Wt,Mt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Pt,Yt,It.width,It.height,Ot.depth,0,Wt,Mt,It.data)}else{K&&Gt&&i.texStorage2D(o.TEXTURE_2D,ee,Yt,me[0].width,me[0].height);for(let Pt=0,Dt=me.length;Pt<Dt;Pt++)It=me[Pt],A.format!==ki?Wt!==null?K?Xt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Pt,0,0,It.width,It.height,Wt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,Pt,Yt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Xt&&i.texSubImage2D(o.TEXTURE_2D,Pt,0,0,It.width,It.height,Wt,Mt,It.data):i.texImage2D(o.TEXTURE_2D,Pt,Yt,It.width,It.height,0,Wt,Mt,It.data)}else if(A.isDataArrayTexture)if(K){if(Gt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ee,Yt,Ot.width,Ot.height,Ot.depth),Xt)if(A.layerUpdates.size>0){const Pt=Qy(Ot.width,Ot.height,A.format,A.type);for(const Dt of A.layerUpdates){const se=Ot.data.subarray(Dt*Pt/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Dt,Ot.width,Ot.height,1,Wt,Mt,se)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ot.width,Ot.height,Ot.depth,Wt,Mt,Ot.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,Ot.width,Ot.height,Ot.depth,0,Wt,Mt,Ot.data);else if(A.isData3DTexture)K?(Gt&&i.texStorage3D(o.TEXTURE_3D,ee,Yt,Ot.width,Ot.height,Ot.depth),Xt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ot.width,Ot.height,Ot.depth,Wt,Mt,Ot.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,Ot.width,Ot.height,Ot.depth,0,Wt,Mt,Ot.data);else if(A.isFramebufferTexture){if(Gt)if(K)i.texStorage2D(o.TEXTURE_2D,ee,Yt,Ot.width,Ot.height);else{let Pt=Ot.width,Dt=Ot.height;for(let se=0;se<ee;se++)i.texImage2D(o.TEXTURE_2D,se,Yt,Pt,Dt,0,Wt,Mt,null),Pt>>=1,Dt>>=1}}else if(me.length>0){if(K&&Gt){const Pt=re(me[0]);i.texStorage2D(o.TEXTURE_2D,ee,Yt,Pt.width,Pt.height)}for(let Pt=0,Dt=me.length;Pt<Dt;Pt++)It=me[Pt],K?Xt&&i.texSubImage2D(o.TEXTURE_2D,Pt,0,0,Wt,Mt,It):i.texImage2D(o.TEXTURE_2D,Pt,Yt,Wt,Mt,It);A.generateMipmaps=!1}else if(K){if(Gt){const Pt=re(Ot);i.texStorage2D(o.TEXTURE_2D,ee,Yt,Pt.width,Pt.height)}Xt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Wt,Mt,Ot)}else i.texImage2D(o.TEXTURE_2D,0,Yt,Wt,Mt,Ot);M(A)&&y(ft),Jt.__version=_t.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function tt(I,A,rt){if(A.image.length!==6)return;const ft=Qt(I,A),Ut=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+rt);const _t=s.get(Ut);if(Ut.version!==_t.__version||ft===!0){i.activeTexture(o.TEXTURE0+rt);const Jt=Le.getPrimaries(Le.workingColorSpace),Ht=A.colorSpace===ms?null:Le.getPrimaries(A.colorSpace),te=A.colorSpace===ms||Jt===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ne=A.isCompressedTexture||A.image[0].isCompressedTexture,Ot=A.image[0]&&A.image[0].isDataTexture,Wt=[];for(let Dt=0;Dt<6;Dt++)!ne&&!Ot?Wt[Dt]=T(A.image[Dt],!0,l.maxCubemapSize):Wt[Dt]=Ot?A.image[Dt].image:A.image[Dt],Wt[Dt]=oe(A,Wt[Dt]);const Mt=Wt[0],Yt=u.convert(A.format,A.colorSpace),It=u.convert(A.type),me=C(A.internalFormat,Yt,It,A.colorSpace),K=A.isVideoTexture!==!0,Gt=_t.__version===void 0||ft===!0,Xt=Ut.dataReady;let ee=O(A,Mt);Ft(o.TEXTURE_CUBE_MAP,A);let Pt;if(ne){K&&Gt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ee,me,Mt.width,Mt.height);for(let Dt=0;Dt<6;Dt++){Pt=Wt[Dt].mipmaps;for(let se=0;se<Pt.length;se++){const _e=Pt[se];A.format!==ki?Yt!==null?K?Xt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,se,0,0,_e.width,_e.height,Yt,_e.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,se,me,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,se,0,0,_e.width,_e.height,Yt,It,_e.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,se,me,_e.width,_e.height,0,Yt,It,_e.data)}}}else{if(Pt=A.mipmaps,K&&Gt){Pt.length>0&&ee++;const Dt=re(Wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ee,me,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(Ot){K?Xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Wt[Dt].width,Wt[Dt].height,Yt,It,Wt[Dt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,me,Wt[Dt].width,Wt[Dt].height,0,Yt,It,Wt[Dt].data);for(let se=0;se<Pt.length;se++){const We=Pt[se].image[Dt].image;K?Xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,se+1,0,0,We.width,We.height,Yt,It,We.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,se+1,me,We.width,We.height,0,Yt,It,We.data)}}else{K?Xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Yt,It,Wt[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,me,Yt,It,Wt[Dt]);for(let se=0;se<Pt.length;se++){const _e=Pt[se];K?Xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,se+1,0,0,Yt,It,_e.image[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,se+1,me,Yt,It,_e.image[Dt])}}}M(A)&&y(o.TEXTURE_CUBE_MAP),_t.__version=Ut.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function xt(I,A,rt,ft,Ut,_t){const Jt=u.convert(rt.format,rt.colorSpace),Ht=u.convert(rt.type),te=C(rt.internalFormat,Jt,Ht,rt.colorSpace),ne=s.get(A),Ot=s.get(rt);if(Ot.__renderTarget=A,!ne.__hasExternalTextures){const Wt=Math.max(1,A.width>>_t),Mt=Math.max(1,A.height>>_t);Ut===o.TEXTURE_3D||Ut===o.TEXTURE_2D_ARRAY?i.texImage3D(Ut,_t,te,Wt,Mt,A.depth,0,Jt,Ht,null):i.texImage2D(Ut,_t,te,Wt,Mt,0,Jt,Ht,null)}i.bindFramebuffer(o.FRAMEBUFFER,I),Nt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,Ut,Ot.__webglTexture,0,wt(A)):(Ut===o.TEXTURE_2D||Ut>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ut<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,Ut,Ot.__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(I,A,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,I),A.depthBuffer){const ft=A.depthTexture,Ut=ft&&ft.isDepthTexture?ft.type:null,_t=b(A.stencilBuffer,Ut),Jt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=wt(A);Nt(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ht,_t,A.width,A.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,_t,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,_t,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Jt,o.RENDERBUFFER,I)}else{const ft=A.textures;for(let Ut=0;Ut<ft.length;Ut++){const _t=ft[Ut],Jt=u.convert(_t.format,_t.colorSpace),Ht=u.convert(_t.type),te=C(_t.internalFormat,Jt,Ht,_t.colorSpace),ne=wt(A);rt&&Nt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,te,A.width,A.height):Nt(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ne,te,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,te,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ct(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(A.depthTexture);ft.__renderTarget=A,(!ft.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Y(A.depthTexture,0);const Ut=ft.__webglTexture,_t=wt(A);if(A.depthTexture.format===Bl)Nt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0);else if(A.depthTexture.format===Fl)Nt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0);else throw new Error("Unknown depthTexture format")}function Tt(I){const A=s.get(I),rt=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const ft=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ft){const Ut=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ft.removeEventListener("dispose",Ut)};ft.addEventListener("dispose",Ut),A.__depthDisposeCallback=Ut}A.__boundDepthTexture=ft}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");const ft=I.texture.mipmaps;ft&&ft.length>0?Ct(A.__webglFramebuffer[0],I):Ct(A.__webglFramebuffer,I)}else if(rt){A.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[ft]),A.__webglDepthbuffer[ft]===void 0)A.__webglDepthbuffer[ft]=o.createRenderbuffer(),Rt(A.__webglDepthbuffer[ft],I,!1);else{const Ut=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=A.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,_t)}}else{const ft=I.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Rt(A.__webglDepthbuffer,I,!1);else{const Ut=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,_t)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Lt(I,A,rt){const ft=s.get(I);A!==void 0&&xt(ft.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&Tt(I)}function F(I){const A=I.texture,rt=s.get(I),ft=s.get(A);I.addEventListener("dispose",P);const Ut=I.textures,_t=I.isWebGLCubeRenderTarget===!0,Jt=Ut.length>1;if(Jt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=A.version,f.memory.textures++),_t){rt.__webglFramebuffer=[];for(let Ht=0;Ht<6;Ht++)if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer[Ht]=[];for(let te=0;te<A.mipmaps.length;te++)rt.__webglFramebuffer[Ht][te]=o.createFramebuffer()}else rt.__webglFramebuffer[Ht]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Ht=0;Ht<A.mipmaps.length;Ht++)rt.__webglFramebuffer[Ht]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Jt)for(let Ht=0,te=Ut.length;Ht<te;Ht++){const ne=s.get(Ut[Ht]);ne.__webglTexture===void 0&&(ne.__webglTexture=o.createTexture(),f.memory.textures++)}if(I.samples>0&&Nt(I)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Ht=0;Ht<Ut.length;Ht++){const te=Ut[Ht];rt.__webglColorRenderbuffer[Ht]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ht]);const ne=u.convert(te.format,te.colorSpace),Ot=u.convert(te.type),Wt=C(te.internalFormat,ne,Ot,te.colorSpace,I.isXRRenderTarget===!0),Mt=wt(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Mt,Wt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ht,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ht])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(rt.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),Ft(o.TEXTURE_CUBE_MAP,A);for(let Ht=0;Ht<6;Ht++)if(A.mipmaps&&A.mipmaps.length>0)for(let te=0;te<A.mipmaps.length;te++)xt(rt.__webglFramebuffer[Ht][te],I,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,te);else xt(rt.__webglFramebuffer[Ht],I,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0);M(A)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Jt){for(let Ht=0,te=Ut.length;Ht<te;Ht++){const ne=Ut[Ht],Ot=s.get(ne);let Wt=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Wt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Wt,Ot.__webglTexture),Ft(Wt,ne),xt(rt.__webglFramebuffer,I,ne,o.COLOR_ATTACHMENT0+Ht,Wt,0),M(ne)&&y(Wt)}i.unbindTexture()}else{let Ht=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ht=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ht,ft.__webglTexture),Ft(Ht,A),A.mipmaps&&A.mipmaps.length>0)for(let te=0;te<A.mipmaps.length;te++)xt(rt.__webglFramebuffer[te],I,A,o.COLOR_ATTACHMENT0,Ht,te);else xt(rt.__webglFramebuffer,I,A,o.COLOR_ATTACHMENT0,Ht,0);M(A)&&y(Ht),i.unbindTexture()}I.depthBuffer&&Tt(I)}function At(I){const A=I.textures;for(let rt=0,ft=A.length;rt<ft;rt++){const Ut=A[rt];if(M(Ut)){const _t=U(I),Jt=s.get(Ut).__webglTexture;i.bindTexture(_t,Jt),y(_t),i.unbindTexture()}}}const vt=[],mt=[];function gt(I){if(I.samples>0){if(Nt(I)===!1){const A=I.textures,rt=I.width,ft=I.height;let Ut=o.COLOR_BUFFER_BIT;const _t=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Jt=s.get(I),Ht=A.length>1;if(Ht)for(let ne=0;ne<A.length;ne++)i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const te=I.texture.mipmaps;te&&te.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let ne=0;ne<A.length;ne++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Ut|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Ut|=o.STENCIL_BUFFER_BIT)),Ht){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Jt.__webglColorRenderbuffer[ne]);const Ot=s.get(A[ne]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ot,0)}o.blitFramebuffer(0,0,rt,ft,0,0,rt,ft,Ut,o.NEAREST),p===!0&&(vt.length=0,mt.length=0,vt.push(o.COLOR_ATTACHMENT0+ne),I.depthBuffer&&I.resolveDepthBuffer===!1&&(vt.push(_t),mt.push(_t),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,mt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,vt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ht)for(let ne=0;ne<A.length;ne++){i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.RENDERBUFFER,Jt.__webglColorRenderbuffer[ne]);const Ot=s.get(A[ne]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ne,o.TEXTURE_2D,Ot,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const A=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function wt(I){return Math.min(l.maxSamples,I.samples)}function Nt(I){const A=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function zt(I){const A=f.render.frame;v.get(I)!==A&&(v.set(I,A),I.update())}function oe(I,A){const rt=I.colorSpace,ft=I.format,Ut=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||rt!==yo&&rt!==ms&&(Le.getTransfer(rt)===Ye?(ft!==ki||Ut!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),A}function re(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=D,this.resetTextureUnits=W,this.setTexture2D=Y,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=Lt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Nt}function xC(o,t){function i(s,l=ms){let u;const f=Le.getTransfer(l);if(s===qi)return o.UNSIGNED_BYTE;if(s===Em)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Tm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Bx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Fx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===zx)return o.BYTE;if(s===Ix)return o.SHORT;if(s===zl)return o.UNSIGNED_SHORT;if(s===Mm)return o.INT;if(s===tr)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===Xi)return o.HALF_FLOAT;if(s===Hx)return o.ALPHA;if(s===Gx)return o.RGB;if(s===ki)return o.RGBA;if(s===Bl)return o.DEPTH_COMPONENT;if(s===Fl)return o.DEPTH_STENCIL;if(s===bm)return o.RED;if(s===Am)return o.RED_INTEGER;if(s===Vx)return o.RG;if(s===Rm)return o.RG_INTEGER;if(s===wm)return o.RGBA_INTEGER;if(s===jc||s===Zc||s===Qc||s===Kc)if(f===Ye)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===jc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===jc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bp||s===Fp||s===Hp||s===Gp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Bp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vp||s===kp||s===Xp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Vp||s===kp)return f===Ye?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Xp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qp||s===Yp||s===Wp||s===jp||s===Zp||s===Qp||s===Kp||s===Jp||s===$p||s===tm||s===em||s===nm||s===im||s===am)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===qp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$p)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tm)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===em)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nm)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===im)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===am)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sm||s===rm||s===om)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===sm)return f===Ye?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===om)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lm||s===um||s===cm||s===fm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===lm)return u.COMPRESSED_RED_RGTC1_EXT;if(s===um)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Il?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const SC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MC=`
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

}`;class EC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new aS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new rn({vertexShader:SC,fragmentShader:MC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fn(new nr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TC extends To{constructor(t,i){super();const s=this;let l=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,g=null,_=null,S=null,E=null;const T=typeof XRWebGLBinding<"u",M=new EC,y={},U=i.getContextAttributes();let C=null,b=null;const O=[],B=[],P=new Vt;let V=null;const N=new vi;N.viewport=new cn;const R=new vi;R.viewport=new cn;const H=[N,R],W=new qb;let D=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let tt=O[j];return tt===void 0&&(tt=new up,O[j]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(j){let tt=O[j];return tt===void 0&&(tt=new up,O[j]=tt),tt.getGripSpace()},this.getHand=function(j){let tt=O[j];return tt===void 0&&(tt=new up,O[j]=tt),tt.getHandSpace()};function Y(j){const tt=B.indexOf(j.inputSource);if(tt===-1)return;const xt=O[tt];xt!==void 0&&(xt.update(j.inputSource,j.frame,m||f),xt.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",J);for(let j=0;j<O.length;j++){const tt=B[j];tt!==null&&(B[j]=null,O[j].disconnect(tt))}D=null,q=null,M.reset();for(const j in y)delete y[j];t.setRenderTarget(C),S=null,_=null,g=null,l=null,b=null,pt.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(C=t.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",z),l.addEventListener("inputsourceschange",J),U.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Rt=null,Ct=null;U.depth&&(Ct=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=U.stencil?Fl:Bl,Rt=U.stencil?Il:tr);const Tt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};g=this.getBinding(),_=g.createProjectionLayer(Tt),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),b=new Ni(_.textureWidth,_.textureHeight,{format:ki,type:qi,depthTexture:new iS(_.textureWidth,_.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const xt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new Ni(S.framebufferWidth,S.framebufferHeight,{format:ki,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),pt.setContext(l),pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function J(j){for(let tt=0;tt<j.removed.length;tt++){const xt=j.removed[tt],Rt=B.indexOf(xt);Rt>=0&&(B[Rt]=null,O[Rt].disconnect(xt))}for(let tt=0;tt<j.added.length;tt++){const xt=j.added[tt];let Rt=B.indexOf(xt);if(Rt===-1){for(let Tt=0;Tt<O.length;Tt++)if(Tt>=B.length){B.push(xt),Rt=Tt;break}else if(B[Tt]===null){B[Tt]=xt,Rt=Tt;break}if(Rt===-1)break}const Ct=O[Rt];Ct&&Ct.connect(xt)}}const Q=new G,ut=new G;function yt(j,tt,xt){Q.setFromMatrixPosition(tt.matrixWorld),ut.setFromMatrixPosition(xt.matrixWorld);const Rt=Q.distanceTo(ut),Ct=tt.projectionMatrix.elements,Tt=xt.projectionMatrix.elements,Lt=Ct[14]/(Ct[10]-1),F=Ct[14]/(Ct[10]+1),At=(Ct[9]+1)/Ct[5],vt=(Ct[9]-1)/Ct[5],mt=(Ct[8]-1)/Ct[0],gt=(Tt[8]+1)/Tt[0],wt=Lt*mt,Nt=Lt*gt,zt=Rt/(-mt+gt),oe=zt*-mt;if(tt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(oe),j.translateZ(zt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ct[10]===-1)j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const re=Lt+zt,I=F+zt,A=wt-oe,rt=Nt+(Rt-oe),ft=At*F/I*re,Ut=vt*F/I*re;j.projectionMatrix.makePerspective(A,rt,ft,Ut,re,I),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function St(j,tt){tt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(tt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let tt=j.near,xt=j.far;M.texture!==null&&(M.depthNear>0&&(tt=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),W.near=R.near=N.near=tt,W.far=R.far=N.far=xt,(D!==W.near||q!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),D=W.near,q=W.far),W.layers.mask=j.layers.mask|6,N.layers.mask=W.layers.mask&3,R.layers.mask=W.layers.mask&5;const Rt=j.parent,Ct=W.cameras;St(W,Rt);for(let Tt=0;Tt<Ct.length;Tt++)St(Ct[Tt],Rt);Ct.length===2?yt(W,N,R):W.projectionMatrix.copy(N.projectionMatrix),Ft(j,W,Rt)};function Ft(j,tt,xt){xt===null?j.matrix.copy(tt.matrixWorld):(j.matrix.copy(xt.matrixWorld),j.matrix.invert(),j.matrix.multiply(tt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(j){p=j,_!==null&&(_.fixedFoveation=j),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(W)},this.getCameraTexture=function(j){return y[j]};let Qt=null;function X(j,tt){if(v=tt.getViewerPose(m||f),E=tt,v!==null){const xt=v.views;S!==null&&(t.setRenderTargetFramebuffer(b,S.framebuffer),t.setRenderTarget(b));let Rt=!1;xt.length!==W.cameras.length&&(W.cameras.length=0,Rt=!0);for(let F=0;F<xt.length;F++){const At=xt[F];let vt=null;if(S!==null)vt=S.getViewport(At);else{const gt=g.getViewSubImage(_,At);vt=gt.viewport,F===0&&(t.setRenderTargetTextures(b,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(b))}let mt=H[F];mt===void 0&&(mt=new vi,mt.layers.enable(F),mt.viewport=new cn,H[F]=mt),mt.matrix.fromArray(At.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(At.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(vt.x,vt.y,vt.width,vt.height),F===0&&(W.matrix.copy(mt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Rt===!0&&W.cameras.push(mt)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const F=g.getDepthInformation(xt[0]);F&&F.isValid&&F.texture&&M.init(F,l.renderState)}if(Ct&&Ct.includes("camera-access")&&T){t.state.unbindTexture(),g=s.getBinding();for(let F=0;F<xt.length;F++){const At=xt[F].camera;if(At){let vt=y[At];vt||(vt=new aS,y[At]=vt);const mt=g.getCameraImage(At);vt.sourceTexture=mt}}}}for(let xt=0;xt<O.length;xt++){const Rt=B[xt],Ct=O[xt];Rt!==null&&Ct!==void 0&&Ct.update(Rt,tt,m||f)}Qt&&Qt(j,tt),tt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:tt}),E=null}const pt=new vS;pt.setAnimationLoop(X),this.setAnimationLoop=function(j){Qt=j},this.dispose=function(){}}}const Ys=new Ui,bC=new Ve;function AC(o,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,Kx(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,U,C,b){y.isMeshBasicMaterial||y.isMeshLambertMaterial?u(M,y):y.isMeshToonMaterial?(u(M,y),g(M,y)):y.isMeshPhongMaterial?(u(M,y),v(M,y)):y.isMeshStandardMaterial?(u(M,y),_(M,y),y.isMeshPhysicalMaterial&&S(M,y,b)):y.isMeshMatcapMaterial?(u(M,y),E(M,y)):y.isMeshDepthMaterial?u(M,y):y.isMeshDistanceMaterial?(u(M,y),T(M,y)):y.isMeshNormalMaterial?u(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?p(M,y,U,C):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===kn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===kn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const U=t.get(y),C=U.envMap,b=U.envMapRotation;C&&(M.envMap.value=C,Ys.copy(b),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),M.envMapRotation.value.setFromMatrix4(bC.makeRotationFromEuler(Ys)),M.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,U,C){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*U,M.scale.value=C*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function g(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,U){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===kn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function T(M,y){const U=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function RC(o,t,i,s){let l={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,C){const b=C.program;s.uniformBlockBinding(U,b)}function m(U,C){let b=l[U.id];b===void 0&&(E(U),b=v(U),l[U.id]=b,U.addEventListener("dispose",M));const O=C.program;s.updateUBOMapping(U,O);const B=t.render.frame;u[U.id]!==B&&(_(U),u[U.id]=B)}function v(U){const C=g();U.__bindingPointIndex=C;const b=o.createBuffer(),O=U.__size,B=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,O,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,b),b}function g(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const C=l[U.id],b=U.uniforms,O=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let B=0,P=b.length;B<P;B++){const V=Array.isArray(b[B])?b[B]:[b[B]];for(let N=0,R=V.length;N<R;N++){const H=V[N];if(S(H,B,N,O)===!0){const W=H.__offset,D=Array.isArray(H.value)?H.value:[H.value];let q=0;for(let Y=0;Y<D.length;Y++){const z=D[Y],J=T(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,W+q,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(U,C,b,O){const B=U.value,P=C+"_"+b;if(O[P]===void 0)return typeof B=="number"||typeof B=="boolean"?O[P]=B:O[P]=B.clone(),!0;{const V=O[P];if(typeof B=="number"||typeof B=="boolean"){if(V!==B)return O[P]=B,!0}else if(V.equals(B)===!1)return V.copy(B),!0}return!1}function E(U){const C=U.uniforms;let b=0;const O=16;for(let P=0,V=C.length;P<V;P++){const N=Array.isArray(C[P])?C[P]:[C[P]];for(let R=0,H=N.length;R<H;R++){const W=N[R],D=Array.isArray(W.value)?W.value:[W.value];for(let q=0,Y=D.length;q<Y;q++){const z=D[q],J=T(z),Q=b%O,ut=Q%J.boundary,yt=Q+ut;b+=ut,yt!==0&&O-yt<J.storage&&(b+=O-yt),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=J.storage}}}const B=b%O;return B>0&&(b+=O-B),U.__size=b,U.__cache={},this}function T(U){const C={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(C.boundary=4,C.storage=4):U.isVector2?(C.boundary=8,C.storage=8):U.isVector3||U.isColor?(C.boundary=16,C.storage=12):U.isVector4?(C.boundary=16,C.storage=16):U.isMatrix3?(C.boundary=48,C.storage=48):U.isMatrix4?(C.boundary=64,C.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),C}function M(U){const C=U.target;C.removeEventListener("dispose",M);const b=f.indexOf(C.__bindingPointIndex);f.splice(b,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function y(){for(const U in l)o.deleteBuffer(l[U]);f=[],l={},u={}}return{bind:p,update:m,dispose:y}}class wC{constructor(t={}){const{canvas:i=bT(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,y=null;const U=[],C=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=La,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let O=!1;this._outputColorSpace=si;let B=0,P=0,V=null,N=-1,R=null;const H=new cn,W=new cn;let D=null;const q=new de(0);let Y=0,z=i.width,J=i.height,Q=1,ut=null,yt=null;const St=new cn(0,0,z,J),Ft=new cn(0,0,z,J);let Qt=!1;const X=new Um;let pt=!1,j=!1;const tt=new Ve,xt=new G,Rt=new cn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Lt(){return V===null?Q:1}let F=s;function At(L,at){return i.getContext(L,at)}try{const L={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xm}`),i.addEventListener("webglcontextlost",Xt,!1),i.addEventListener("webglcontextrestored",ee,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),F===null){const at="webgl2";if(F=At(at,L),F===null)throw At(at)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let vt,mt,gt,wt,Nt,zt,oe,re,I,A,rt,ft,Ut,_t,Jt,Ht,te,ne,Ot,Wt,Mt,Yt,It,me;function K(){vt=new BR(F),vt.init(),Yt=new xC(F,vt),mt=new NR(F,vt,t,Yt),gt=new _C(F,vt),mt.reversedDepthBuffer&&_&&gt.buffers.depth.setReversed(!0),wt=new GR(F),Nt=new sC,zt=new yC(F,vt,gt,Nt,mt,Yt,wt),oe=new LR(b),re=new IR(b),I=new Wb(F),It=new CR(F,I),A=new FR(F,I,wt,It),rt=new kR(F,A,I,wt),Ot=new VR(F,mt,zt),Ht=new UR(Nt),ft=new aC(b,oe,re,vt,mt,It,Ht),Ut=new AC(b,Nt),_t=new oC,Jt=new dC(vt),ne=new wR(b,oe,re,gt,rt,S,p),te=new gC(b,rt,mt),me=new RC(F,wt,mt,gt),Wt=new DR(F,vt,wt),Mt=new HR(F,vt,wt),wt.programs=ft.programs,b.capabilities=mt,b.extensions=vt,b.properties=Nt,b.renderLists=_t,b.shadowMap=te,b.state=gt,b.info=wt}K();const Gt=new TC(b,F);this.xr=Gt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const L=vt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=vt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(L){L!==void 0&&(Q=L,this.setSize(z,J,!1))},this.getSize=function(L){return L.set(z,J)},this.setSize=function(L,at,ht=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=L,J=at,i.width=Math.floor(L*Q),i.height=Math.floor(at*Q),ht===!0&&(i.style.width=L+"px",i.style.height=at+"px"),this.setViewport(0,0,L,at)},this.getDrawingBufferSize=function(L){return L.set(z*Q,J*Q).floor()},this.setDrawingBufferSize=function(L,at,ht){z=L,J=at,Q=ht,i.width=Math.floor(L*ht),i.height=Math.floor(at*ht),this.setViewport(0,0,L,at)},this.getCurrentViewport=function(L){return L.copy(H)},this.getViewport=function(L){return L.copy(St)},this.setViewport=function(L,at,ht,dt){L.isVector4?St.set(L.x,L.y,L.z,L.w):St.set(L,at,ht,dt),gt.viewport(H.copy(St).multiplyScalar(Q).round())},this.getScissor=function(L){return L.copy(Ft)},this.setScissor=function(L,at,ht,dt){L.isVector4?Ft.set(L.x,L.y,L.z,L.w):Ft.set(L,at,ht,dt),gt.scissor(W.copy(Ft).multiplyScalar(Q).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(L){gt.setScissorTest(Qt=L)},this.setOpaqueSort=function(L){ut=L},this.setTransparentSort=function(L){yt=L},this.getClearColor=function(L){return L.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(L=!0,at=!0,ht=!0){let dt=0;if(L){let st=!1;if(V!==null){const Bt=V.texture.format;st=Bt===wm||Bt===Rm||Bt===Am}if(st){const Bt=V.texture.type,jt=Bt===qi||Bt===tr||Bt===zl||Bt===Il||Bt===Em||Bt===Tm,Kt=ne.getClearColor(),kt=ne.getClearAlpha(),ie=Kt.r,he=Kt.g,ue=Kt.b;jt?(E[0]=ie,E[1]=he,E[2]=ue,E[3]=kt,F.clearBufferuiv(F.COLOR,0,E)):(T[0]=ie,T[1]=he,T[2]=ue,T[3]=kt,F.clearBufferiv(F.COLOR,0,T))}else dt|=F.COLOR_BUFFER_BIT}at&&(dt|=F.DEPTH_BUFFER_BIT),ht&&(dt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Xt,!1),i.removeEventListener("webglcontextrestored",ee,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),ne.dispose(),_t.dispose(),Jt.dispose(),Nt.dispose(),oe.dispose(),re.dispose(),rt.dispose(),It.dispose(),me.dispose(),ft.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Sn),Gt.removeEventListener("sessionend",Bn),ua.stop()};function Xt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const L=wt.autoReset,at=te.enabled,ht=te.autoUpdate,dt=te.needsUpdate,st=te.type;K(),wt.autoReset=L,te.enabled=at,te.autoUpdate=ht,te.needsUpdate=dt,te.type=st}function Pt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Dt(L){const at=L.target;at.removeEventListener("dispose",Dt),se(at)}function se(L){_e(L),Nt.remove(L)}function _e(L){const at=Nt.get(L).programs;at!==void 0&&(at.forEach(function(ht){ft.releaseProgram(ht)}),L.isShaderMaterial&&ft.releaseShaderCache(L))}this.renderBufferDirect=function(L,at,ht,dt,st,Bt){at===null&&(at=Ct);const jt=st.isMesh&&st.matrixWorld.determinant()<0,Kt=jl(L,at,ht,dt,st);gt.setMaterial(dt,jt);let kt=ht.index,ie=1;if(dt.wireframe===!0){if(kt=A.getWireframeAttribute(ht),kt===void 0)return;ie=2}const he=ht.drawRange,ue=ht.attributes.position;let be=he.start*ie,He=(he.start+he.count)*ie;Bt!==null&&(be=Math.max(be,Bt.start*ie),He=Math.min(He,(Bt.start+Bt.count)*ie)),kt!==null?(be=Math.max(be,0),He=Math.min(He,kt.count)):ue!=null&&(be=Math.max(be,0),He=Math.min(He,ue.count));const tn=He-be;if(tn<0||tn===1/0)return;It.setup(st,dt,Kt,ht,kt);let Ie,Oe=Wt;if(kt!==null&&(Ie=I.get(kt),Oe=Mt,Oe.setIndex(Ie)),st.isMesh)dt.wireframe===!0?(gt.setLineWidth(dt.wireframeLinewidth*Lt()),Oe.setMode(F.LINES)):Oe.setMode(F.TRIANGLES);else if(st.isLine){let ce=dt.linewidth;ce===void 0&&(ce=1),gt.setLineWidth(ce*Lt()),st.isLineSegments?Oe.setMode(F.LINES):st.isLineLoop?Oe.setMode(F.LINE_LOOP):Oe.setMode(F.LINE_STRIP)}else st.isPoints?Oe.setMode(F.POINTS):st.isSprite&&Oe.setMode(F.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)Gl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Oe.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const ce=st._multiDrawStarts,Be=st._multiDrawCounts,Ee=st._multiDrawCount,Mn=kt?I.get(kt).bytesPerElement:1,ri=Nt.get(dt).currentProgram.getUniforms();for(let Pe=0;Pe<Ee;Pe++)ri.setValue(F,"_gl_DrawID",Pe),Oe.render(ce[Pe]/Mn,Be[Pe])}else if(st.isInstancedMesh)Oe.renderInstances(be,tn,st.count);else if(ht.isInstancedBufferGeometry){const ce=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Be=Math.min(ht.instanceCount,ce);Oe.renderInstances(be,tn,Be)}else Oe.render(be,tn)};function We(L,at,ht){L.transparent===!0&&L.side===Di&&L.forceSinglePass===!1?(L.side=kn,L.needsUpdate=!0,yi(L,at,ht),L.side=gs,L.needsUpdate=!0,yi(L,at,ht),L.side=Di):yi(L,at,ht)}this.compile=function(L,at,ht=null){ht===null&&(ht=L),y=Jt.get(ht),y.init(at),C.push(y),ht.traverseVisible(function(st){st.isLight&&st.layers.test(at.layers)&&(y.pushLight(st),st.castShadow&&y.pushShadow(st))}),L!==ht&&L.traverseVisible(function(st){st.isLight&&st.layers.test(at.layers)&&(y.pushLight(st),st.castShadow&&y.pushShadow(st))}),y.setupLights();const dt=new Set;return L.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Bt=st.material;if(Bt)if(Array.isArray(Bt))for(let jt=0;jt<Bt.length;jt++){const Kt=Bt[jt];We(Kt,ht,st),dt.add(Kt)}else We(Bt,ht,st),dt.add(Bt)}),y=C.pop(),dt},this.compileAsync=function(L,at,ht=null){const dt=this.compile(L,at,ht);return new Promise(st=>{function Bt(){if(dt.forEach(function(jt){Nt.get(jt).currentProgram.isReady()&&dt.delete(jt)}),dt.size===0){st(L);return}setTimeout(Bt,10)}vt.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ce=null;function nn(L){Ce&&Ce(L)}function Sn(){ua.stop()}function Bn(){ua.start()}const ua=new vS;ua.setAnimationLoop(nn),typeof self<"u"&&ua.setContext(self),this.setAnimationLoop=function(L){Ce=L,Gt.setAnimationLoop(L),L===null?ua.stop():ua.start()},Gt.addEventListener("sessionstart",Sn),Gt.addEventListener("sessionend",Bn),this.render=function(L,at){if(at!==void 0&&at.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),at.parent===null&&at.matrixWorldAutoUpdate===!0&&at.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(at),at=Gt.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,at,V),y=Jt.get(L,C.length),y.init(at),C.push(y),tt.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),X.setFromProjectionMatrix(tt,oa,at.reversedDepth),j=this.localClippingEnabled,pt=Ht.init(this.clippingPlanes,j),M=_t.get(L,U.length),M.init(),U.push(M),Gt.enabled===!0&&Gt.isPresenting===!0){const Bt=b.xr.getDepthSensingMesh();Bt!==null&&wo(Bt,at,-1/0,b.sortObjects)}wo(L,at,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(ut,yt),Tt=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Tt&&ne.addToRenderList(M,L),this.info.render.frame++,pt===!0&&Ht.beginShadows();const ht=y.state.shadowsArray;te.render(ht,L,at),pt===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const dt=M.opaque,st=M.transmissive;if(y.setupLights(),at.isArrayCamera){const Bt=at.cameras;if(st.length>0)for(let jt=0,Kt=Bt.length;jt<Kt;jt++){const kt=Bt[jt];vs(dt,st,L,kt)}Tt&&ne.render(L);for(let jt=0,Kt=Bt.length;jt<Kt;jt++){const kt=Bt[jt];Wl(M,L,kt,kt.viewport)}}else st.length>0&&vs(dt,st,L,at),Tt&&ne.render(L),Wl(M,L,at);V!==null&&P===0&&(zt.updateMultisampleRenderTarget(V),zt.updateRenderTargetMipmap(V)),L.isScene===!0&&L.onAfterRender(b,L,at),It.resetDefaultState(),N=-1,R=null,C.pop(),C.length>0?(y=C[C.length-1],pt===!0&&Ht.setGlobalState(b.clippingPlanes,y.state.camera)):y=null,U.pop(),U.length>0?M=U[U.length-1]:M=null};function wo(L,at,ht,dt){if(L.visible===!1)return;if(L.layers.test(at.layers)){if(L.isGroup)ht=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(at);else if(L.isLight)y.pushLight(L),L.castShadow&&y.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||X.intersectsSprite(L)){dt&&Rt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(tt);const jt=rt.update(L),Kt=L.material;Kt.visible&&M.push(L,jt,Kt,ht,Rt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||X.intersectsObject(L))){const jt=rt.update(L),Kt=L.material;if(dt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Rt.copy(L.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),Rt.copy(jt.boundingSphere.center)),Rt.applyMatrix4(L.matrixWorld).applyMatrix4(tt)),Array.isArray(Kt)){const kt=jt.groups;for(let ie=0,he=kt.length;ie<he;ie++){const ue=kt[ie],be=Kt[ue.materialIndex];be&&be.visible&&M.push(L,jt,be,ht,Rt.z,ue)}}else Kt.visible&&M.push(L,jt,Kt,ht,Rt.z,null)}}const Bt=L.children;for(let jt=0,Kt=Bt.length;jt<Kt;jt++)wo(Bt[jt],at,ht,dt)}function Wl(L,at,ht,dt){const st=L.opaque,Bt=L.transmissive,jt=L.transparent;y.setupLightsView(ht),pt===!0&&Ht.setGlobalState(b.clippingPlanes,ht),dt&&gt.viewport(H.copy(dt)),st.length>0&&ca(st,at,ht),Bt.length>0&&ca(Bt,at,ht),jt.length>0&&ca(jt,at,ht),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function vs(L,at,ht,dt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[dt.id]===void 0&&(y.state.transmissionRenderTarget[dt.id]=new Ni(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Xi:qi,minFilter:Js,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Bt=y.state.transmissionRenderTarget[dt.id],jt=dt.viewport||H;Bt.setSize(jt.z*b.transmissionResolutionScale,jt.w*b.transmissionResolutionScale);const Kt=b.getRenderTarget(),kt=b.getActiveCubeFace(),ie=b.getActiveMipmapLevel();b.setRenderTarget(Bt),b.getClearColor(q),Y=b.getClearAlpha(),Y<1&&b.setClearColor(16777215,.5),b.clear(),Tt&&ne.render(ht);const he=b.toneMapping;b.toneMapping=La;const ue=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),y.setupLightsView(dt),pt===!0&&Ht.setGlobalState(b.clippingPlanes,dt),ca(L,ht,dt),zt.updateMultisampleRenderTarget(Bt),zt.updateRenderTargetMipmap(Bt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let He=0,tn=at.length;He<tn;He++){const Ie=at[He],Oe=Ie.object,ce=Ie.geometry,Be=Ie.material,Ee=Ie.group;if(Be.side===Di&&Oe.layers.test(dt.layers)){const Mn=Be.side;Be.side=kn,Be.needsUpdate=!0,_s(Oe,ht,dt,ce,Be,Ee),Be.side=Mn,Be.needsUpdate=!0,be=!0}}be===!0&&(zt.updateMultisampleRenderTarget(Bt),zt.updateRenderTargetMipmap(Bt))}b.setRenderTarget(Kt,kt,ie),b.setClearColor(q,Y),ue!==void 0&&(dt.viewport=ue),b.toneMapping=he}function ca(L,at,ht){const dt=at.isScene===!0?at.overrideMaterial:null;for(let st=0,Bt=L.length;st<Bt;st++){const jt=L[st],Kt=jt.object,kt=jt.geometry,ie=jt.group;let he=jt.material;he.allowOverride===!0&&dt!==null&&(he=dt),Kt.layers.test(ht.layers)&&_s(Kt,at,ht,kt,he,ie)}}function _s(L,at,ht,dt,st,Bt){L.onBeforeRender(b,at,ht,dt,st,Bt),L.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),st.onBeforeRender(b,at,ht,dt,L,Bt),st.transparent===!0&&st.side===Di&&st.forceSinglePass===!1?(st.side=kn,st.needsUpdate=!0,b.renderBufferDirect(ht,at,dt,st,L,Bt),st.side=gs,st.needsUpdate=!0,b.renderBufferDirect(ht,at,dt,st,L,Bt),st.side=Di):b.renderBufferDirect(ht,at,dt,st,L,Bt),L.onAfterRender(b,at,ht,dt,st,Bt)}function yi(L,at,ht){at.isScene!==!0&&(at=Ct);const dt=Nt.get(L),st=y.state.lights,Bt=y.state.shadowsArray,jt=st.state.version,Kt=ft.getParameters(L,st.state,Bt,at,ht),kt=ft.getProgramCacheKey(Kt);let ie=dt.programs;dt.environment=L.isMeshStandardMaterial?at.environment:null,dt.fog=at.fog,dt.envMap=(L.isMeshStandardMaterial?re:oe).get(L.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&L.envMap===null?at.environmentRotation:L.envMapRotation,ie===void 0&&(L.addEventListener("dispose",Dt),ie=new Map,dt.programs=ie);let he=ie.get(kt);if(he!==void 0){if(dt.currentProgram===he&&dt.lightsStateVersion===jt)return Pa(L,Kt),he}else Kt.uniforms=ft.getUniforms(L),L.onBeforeCompile(Kt,b),he=ft.acquireProgram(Kt,kt),ie.set(kt,he),dt.uniforms=Kt.uniforms;const ue=dt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ue.clippingPlanes=Ht.uniform),Pa(L,Kt),dt.needsLights=Zl(L),dt.lightsStateVersion=jt,dt.needsLights&&(ue.ambientLightColor.value=st.state.ambient,ue.lightProbe.value=st.state.probe,ue.directionalLights.value=st.state.directional,ue.directionalLightShadows.value=st.state.directionalShadow,ue.spotLights.value=st.state.spot,ue.spotLightShadows.value=st.state.spotShadow,ue.rectAreaLights.value=st.state.rectArea,ue.ltc_1.value=st.state.rectAreaLTC1,ue.ltc_2.value=st.state.rectAreaLTC2,ue.pointLights.value=st.state.point,ue.pointLightShadows.value=st.state.pointShadow,ue.hemisphereLights.value=st.state.hemi,ue.directionalShadowMap.value=st.state.directionalShadowMap,ue.directionalShadowMatrix.value=st.state.directionalShadowMatrix,ue.spotShadowMap.value=st.state.spotShadowMap,ue.spotLightMatrix.value=st.state.spotLightMatrix,ue.spotLightMap.value=st.state.spotLightMap,ue.pointShadowMap.value=st.state.pointShadowMap,ue.pointShadowMatrix.value=st.state.pointShadowMatrix),dt.currentProgram=he,dt.uniformsList=null,he}function ys(L){if(L.uniformsList===null){const at=L.currentProgram.getUniforms();L.uniformsList=Jc.seqWithValue(at.seq,L.uniforms)}return L.uniformsList}function Pa(L,at){const ht=Nt.get(L);ht.outputColorSpace=at.outputColorSpace,ht.batching=at.batching,ht.batchingColor=at.batchingColor,ht.instancing=at.instancing,ht.instancingColor=at.instancingColor,ht.instancingMorph=at.instancingMorph,ht.skinning=at.skinning,ht.morphTargets=at.morphTargets,ht.morphNormals=at.morphNormals,ht.morphColors=at.morphColors,ht.morphTargetsCount=at.morphTargetsCount,ht.numClippingPlanes=at.numClippingPlanes,ht.numIntersection=at.numClipIntersection,ht.vertexAlphas=at.vertexAlphas,ht.vertexTangents=at.vertexTangents,ht.toneMapping=at.toneMapping}function jl(L,at,ht,dt,st){at.isScene!==!0&&(at=Ct),zt.resetTextureUnits();const Bt=at.fog,jt=dt.isMeshStandardMaterial?at.environment:null,Kt=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:yo,kt=(dt.isMeshStandardMaterial?re:oe).get(dt.envMap||jt),ie=dt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,he=!!ht.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),ue=!!ht.morphAttributes.position,be=!!ht.morphAttributes.normal,He=!!ht.morphAttributes.color;let tn=La;dt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(tn=b.toneMapping);const Ie=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Oe=Ie!==void 0?Ie.length:0,ce=Nt.get(dt),Be=y.state.lights;if(pt===!0&&(j===!0||L!==R)){const on=L===R&&dt.id===N;Ht.setState(dt,L,on)}let Ee=!1;dt.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==Be.state.version||ce.outputColorSpace!==Kt||st.isBatchedMesh&&ce.batching===!1||!st.isBatchedMesh&&ce.batching===!0||st.isBatchedMesh&&ce.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&ce.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&ce.instancing===!1||!st.isInstancedMesh&&ce.instancing===!0||st.isSkinnedMesh&&ce.skinning===!1||!st.isSkinnedMesh&&ce.skinning===!0||st.isInstancedMesh&&ce.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&ce.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&ce.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&ce.instancingMorph===!1&&st.morphTexture!==null||ce.envMap!==kt||dt.fog===!0&&ce.fog!==Bt||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==Ht.numPlanes||ce.numIntersection!==Ht.numIntersection)||ce.vertexAlphas!==ie||ce.vertexTangents!==he||ce.morphTargets!==ue||ce.morphNormals!==be||ce.morphColors!==He||ce.toneMapping!==tn||ce.morphTargetsCount!==Oe)&&(Ee=!0):(Ee=!0,ce.__version=dt.version);let Mn=ce.currentProgram;Ee===!0&&(Mn=yi(dt,at,st));let ri=!1,Pe=!1,za=!1;const Ke=Mn.getUniforms(),qn=ce.uniforms;if(gt.useProgram(Mn.program)&&(ri=!0,Pe=!0,za=!0),dt.id!==N&&(N=dt.id,Pe=!0),ri||R!==L){gt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ke.setValue(F,"projectionMatrix",L.projectionMatrix),Ke.setValue(F,"viewMatrix",L.matrixWorldInverse);const Fn=Ke.map.cameraPosition;Fn!==void 0&&Fn.setValue(F,xt.setFromMatrixPosition(L.matrixWorld)),mt.logarithmicDepthBuffer&&Ke.setValue(F,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Ke.setValue(F,"isOrthographic",L.isOrthographicCamera===!0),R!==L&&(R=L,Pe=!0,za=!0)}if(st.isSkinnedMesh){Ke.setOptional(F,st,"bindMatrix"),Ke.setOptional(F,st,"bindMatrixInverse");const on=st.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ke.setValue(F,"boneTexture",on.boneTexture,zt))}st.isBatchedMesh&&(Ke.setOptional(F,st,"batchingTexture"),Ke.setValue(F,"batchingTexture",st._matricesTexture,zt),Ke.setOptional(F,st,"batchingIdTexture"),Ke.setValue(F,"batchingIdTexture",st._indirectTexture,zt),Ke.setOptional(F,st,"batchingColorTexture"),st._colorsTexture!==null&&Ke.setValue(F,"batchingColorTexture",st._colorsTexture,zt));const pn=ht.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ot.update(st,ht,Mn),(Pe||ce.receiveShadow!==st.receiveShadow)&&(ce.receiveShadow=st.receiveShadow,Ke.setValue(F,"receiveShadow",st.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(qn.envMap.value=kt,qn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&at.environment!==null&&(qn.envMapIntensity.value=at.environmentIntensity),Pe&&(Ke.setValue(F,"toneMappingExposure",b.toneMappingExposure),ce.needsLights&&cf(qn,za),Bt&&dt.fog===!0&&Ut.refreshFogUniforms(qn,Bt),Ut.refreshMaterialUniforms(qn,dt,Q,J,y.state.transmissionRenderTarget[L.id]),Jc.upload(F,ys(ce),qn,zt)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(Jc.upload(F,ys(ce),qn,zt),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Ke.setValue(F,"center",st.center),Ke.setValue(F,"modelViewMatrix",st.modelViewMatrix),Ke.setValue(F,"normalMatrix",st.normalMatrix),Ke.setValue(F,"modelMatrix",st.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const on=dt.uniformsGroups;for(let Fn=0,or=on.length;Fn<or;Fn++){const Yi=on[Fn];me.update(Yi,Mn),me.bind(Yi,Mn)}}return Mn}function cf(L,at){L.ambientLightColor.needsUpdate=at,L.lightProbe.needsUpdate=at,L.directionalLights.needsUpdate=at,L.directionalLightShadows.needsUpdate=at,L.pointLights.needsUpdate=at,L.pointLightShadows.needsUpdate=at,L.spotLights.needsUpdate=at,L.spotLightShadows.needsUpdate=at,L.rectAreaLights.needsUpdate=at,L.hemisphereLights.needsUpdate=at}function Zl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(L,at,ht){const dt=Nt.get(L);dt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),Nt.get(L.texture).__webglTexture=at,Nt.get(L.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:ht,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,at){const ht=Nt.get(L);ht.__webglFramebuffer=at,ht.__useDefaultFramebuffer=at===void 0};const Co=F.createFramebuffer();this.setRenderTarget=function(L,at=0,ht=0){V=L,B=at,P=ht;let dt=!0,st=null,Bt=!1,jt=!1;if(L){const kt=Nt.get(L);if(kt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(F.FRAMEBUFFER,null),dt=!1;else if(kt.__webglFramebuffer===void 0)zt.setupRenderTarget(L);else if(kt.__hasExternalTextures)zt.rebindTextures(L,Nt.get(L.texture).__webglTexture,Nt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ue=L.depthTexture;if(kt.__boundDepthTexture!==ue){if(ue!==null&&Nt.has(ue)&&(L.width!==ue.image.width||L.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(L)}}const ie=L.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(jt=!0);const he=Nt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(he[at])?st=he[at][ht]:st=he[at],Bt=!0):L.samples>0&&zt.useMultisampledRTT(L)===!1?st=Nt.get(L).__webglMultisampledFramebuffer:Array.isArray(he)?st=he[ht]:st=he,H.copy(L.viewport),W.copy(L.scissor),D=L.scissorTest}else H.copy(St).multiplyScalar(Q).floor(),W.copy(Ft).multiplyScalar(Q).floor(),D=Qt;if(ht!==0&&(st=Co),gt.bindFramebuffer(F.FRAMEBUFFER,st)&&dt&&gt.drawBuffers(L,st),gt.viewport(H),gt.scissor(W),gt.setScissorTest(D),Bt){const kt=Nt.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+at,kt.__webglTexture,ht)}else if(jt){const kt=at;for(let ie=0;ie<L.textures.length;ie++){const he=Nt.get(L.textures[ie]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ie,he.__webglTexture,ht,kt)}}else if(L!==null&&ht!==0){const kt=Nt.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,kt.__webglTexture,ht)}N=-1},this.readRenderTargetPixels=function(L,at,ht,dt,st,Bt,jt,Kt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Nt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&jt!==void 0&&(kt=kt[jt]),kt){gt.bindFramebuffer(F.FRAMEBUFFER,kt);try{const ie=L.textures[Kt],he=ie.format,ue=ie.type;if(!mt.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}at>=0&&at<=L.width-dt&&ht>=0&&ht<=L.height-st&&(L.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Kt),F.readPixels(at,ht,dt,st,Yt.convert(he),Yt.convert(ue),Bt))}finally{const ie=V!==null?Nt.get(V).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(L,at,ht,dt,st,Bt,jt,Kt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Nt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&jt!==void 0&&(kt=kt[jt]),kt)if(at>=0&&at<=L.width-dt&&ht>=0&&ht<=L.height-st){gt.bindFramebuffer(F.FRAMEBUFFER,kt);const ie=L.textures[Kt],he=ie.format,ue=ie.type;if(!mt.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.bufferData(F.PIXEL_PACK_BUFFER,Bt.byteLength,F.STREAM_READ),L.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Kt),F.readPixels(at,ht,dt,st,Yt.convert(he),Yt.convert(ue),0);const He=V!==null?Nt.get(V).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,He);const tn=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await AT(F,tn,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,be),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Bt),F.deleteBuffer(be),F.deleteSync(tn),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,at=null,ht=0){const dt=Math.pow(2,-ht),st=Math.floor(L.image.width*dt),Bt=Math.floor(L.image.height*dt),jt=at!==null?at.x:0,Kt=at!==null?at.y:0;zt.setTexture2D(L,0),F.copyTexSubImage2D(F.TEXTURE_2D,ht,0,0,jt,Kt,st,Bt),gt.unbindTexture()};const xs=F.createFramebuffer(),ff=F.createFramebuffer();this.copyTextureToTexture=function(L,at,ht=null,dt=null,st=0,Bt=null){Bt===null&&(st!==0?(Gl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Bt=st,st=0):Bt=0);let jt,Kt,kt,ie,he,ue,be,He,tn;const Ie=L.isCompressedTexture?L.mipmaps[Bt]:L.image;if(ht!==null)jt=ht.max.x-ht.min.x,Kt=ht.max.y-ht.min.y,kt=ht.isBox3?ht.max.z-ht.min.z:1,ie=ht.min.x,he=ht.min.y,ue=ht.isBox3?ht.min.z:0;else{const pn=Math.pow(2,-st);jt=Math.floor(Ie.width*pn),Kt=Math.floor(Ie.height*pn),L.isDataArrayTexture?kt=Ie.depth:L.isData3DTexture?kt=Math.floor(Ie.depth*pn):kt=1,ie=0,he=0,ue=0}dt!==null?(be=dt.x,He=dt.y,tn=dt.z):(be=0,He=0,tn=0);const Oe=Yt.convert(at.format),ce=Yt.convert(at.type);let Be;at.isData3DTexture?(zt.setTexture3D(at,0),Be=F.TEXTURE_3D):at.isDataArrayTexture||at.isCompressedArrayTexture?(zt.setTexture2DArray(at,0),Be=F.TEXTURE_2D_ARRAY):(zt.setTexture2D(at,0),Be=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,at.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,at.unpackAlignment);const Ee=F.getParameter(F.UNPACK_ROW_LENGTH),Mn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ri=F.getParameter(F.UNPACK_SKIP_PIXELS),Pe=F.getParameter(F.UNPACK_SKIP_ROWS),za=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,he),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ue);const Ke=L.isDataArrayTexture||L.isData3DTexture,qn=at.isDataArrayTexture||at.isData3DTexture;if(L.isDepthTexture){const pn=Nt.get(L),on=Nt.get(at),Fn=Nt.get(pn.__renderTarget),or=Nt.get(on.__renderTarget);gt.bindFramebuffer(F.READ_FRAMEBUFFER,Fn.__webglFramebuffer),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let Yi=0;Yi<kt;Yi++)Ke&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(L).__webglTexture,st,ue+Yi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(at).__webglTexture,Bt,tn+Yi)),F.blitFramebuffer(ie,he,jt,Kt,be,He,jt,Kt,F.DEPTH_BUFFER_BIT,F.NEAREST);gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(st!==0||L.isRenderTargetTexture||Nt.has(L)){const pn=Nt.get(L),on=Nt.get(at);gt.bindFramebuffer(F.READ_FRAMEBUFFER,xs),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,ff);for(let Fn=0;Fn<kt;Fn++)Ke?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,st,ue+Fn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,st),qn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,on.__webglTexture,Bt,tn+Fn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,on.__webglTexture,Bt),st!==0?F.blitFramebuffer(ie,he,jt,Kt,be,He,jt,Kt,F.COLOR_BUFFER_BIT,F.NEAREST):qn?F.copyTexSubImage3D(Be,Bt,be,He,tn+Fn,ie,he,jt,Kt):F.copyTexSubImage2D(Be,Bt,be,He,ie,he,jt,Kt);gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else qn?L.isDataTexture||L.isData3DTexture?F.texSubImage3D(Be,Bt,be,He,tn,jt,Kt,kt,Oe,ce,Ie.data):at.isCompressedArrayTexture?F.compressedTexSubImage3D(Be,Bt,be,He,tn,jt,Kt,kt,Oe,Ie.data):F.texSubImage3D(Be,Bt,be,He,tn,jt,Kt,kt,Oe,ce,Ie):L.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Bt,be,He,jt,Kt,Oe,ce,Ie.data):L.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Bt,be,He,Ie.width,Ie.height,Oe,Ie.data):F.texSubImage2D(F.TEXTURE_2D,Bt,be,He,jt,Kt,Oe,ce,Ie);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ee),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ri),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,za),Bt===0&&at.generateMipmaps&&F.generateMipmap(Be),gt.unbindTexture()},this.initRenderTarget=function(L){Nt.get(L).__webglFramebuffer===void 0&&zt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?zt.setTextureCube(L,0):L.isData3DTexture?zt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?zt.setTexture2DArray(L,0):zt.setTexture2D(L,0),gt.unbindTexture()},this.resetState=function(){B=0,P=0,V=null,gt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const $c={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ro{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const CC=new Hm(-1,1,1,-1,0,1);class DC extends Rn{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}}const NC=new DC;class Vm{constructor(t){this._mesh=new fn(NC,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,CC)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class UC extends Ro{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vl.clone(t.uniforms),this.material=new rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Vm(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Sx extends Ro{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),u=t.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class LC extends Ro{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class OC{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new Vt);this._width=s.width,this._height=s.height,i=new Ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new UC($c),this.copyPass.material.blending=Ua,this.clock=new gS}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Sx!==void 0&&(f instanceof Sx?s=!0:f instanceof LC&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new Vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class PC extends Ro{constructor(t,i,s=null,l=null,u=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new de}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let u,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(u=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const zC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Eo extends Ro{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Vt(t.x,t.y):new Vt(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Ni(u,f,{type:Xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const g=new Ni(u,f,{type:Xi});g.texture.name="UnrealBloomPass.h"+v,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const _=new Ni(u,f,{type:Xi});_.texture.name="UnrealBloomPass.v"+v,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),u=Math.round(u/2),f=Math.round(f/2)}const d=zC;this.highPassUniforms=Vl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new Vt(1/u,1/f),u=Math.round(u/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vl.clone($c.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:$c.vertexShader,fragmentShader:$c.fragmentShader,blending:Pl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new mo,this._fsQuad=new Vm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new Vt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,u){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),u&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=Eo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=Eo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const i=[];for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(t*t))/t);return new rn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Vt(.5,.5)},direction:{value:new Vt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
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
				}`})}}Eo.BlurDirectionX=new Vt(1,0);Eo.BlurDirectionY=new Vt(0,1);const qc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class IC extends Ro{constructor(){super(),this.uniforms=Vl.clone(qc.uniforms),this.material=new Ib({name:qc.name,uniforms:this.uniforms,vertexShader:qc.vertexShader,fragmentShader:qc.fragmentShader}),this._fsQuad=new Vm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===Ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ox?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ux&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Yc=(o,t,i)=>Math.min(i,Math.max(t,o)),Wc=(o,t,i,s)=>t+(o-t)*Math.exp(-i*s),MS=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class BC{constructor(){fe(this,"shipQuaternion",new Jn);fe(this,"lookQuaternion",new Jn);fe(this,"position",new G);fe(this,"yaw",0);fe(this,"pitch",0);fe(this,"yawVelocity",0);fe(this,"pitchVelocity",0);fe(this,"speed",0);fe(this,"lookYaw",0);fe(this,"lookPitch",0);fe(this,"lookTargetYaw",0);fe(this,"lookTargetPitch",0);fe(this,"touchX",0);fe(this,"touchY",0);fe(this,"touchSteering",!1);fe(this,"keys",new Set);fe(this,"elapsed",0);fe(this,"lastContext","");fe(this,"euler",new Ui(0,0,0,"YXZ"));fe(this,"forward",new G)}key(t,i){MS.has(t)&&(i?this.touchSteering||this.keys.add(t):this.keys.delete(t))}steerTouch(t,i,s){this.touchSteering=s,this.keys.clear();const l=Math.hypot(t,i),u=s?Yc((l-.1)/.9,0,1):0;this.touchX=l?t/l*u:0,this.touchY=l?i/l*u:0}look(t,i,s,l){if(l.paused||l.blocked)return;const u=s?l.touchSensitivity:l.sensitivity,f=this.lookTargetYaw-Yc(t,-.2,.2)*u*1.6*(!s&&l.invertMouseX?-1:1);this.lookTargetYaw=Math.atan2(Math.sin(f),Math.cos(f)),this.lookTargetPitch=Yc(this.lookTargetPitch-Yc(i,-.2,.2)*u*1.6*(!s&&l.invertMouseY?-1:1),-1.48,1.48)}centerLook(){this.lookTargetYaw=this.lookTargetPitch=0}reset(t=!1){this.keys.clear(),this.steerTouch(0,0,!1),t&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(t,i){const s=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&s!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=s,!Number.isFinite(t)||t<=0||t>.25||i.paused)return;const l=Math.min(t,.1);this.elapsed+=l;const u=i.mode==="Manual Flight"&&i.started&&!i.blocked;let f=0,d=0;if(u){f=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const U=Math.max(1,Math.hypot(f,d));f/=U,d/=U}const p=i.reduced?.45:1,m=this.touchSteering?i.touchSensitivity:i.sensitivity,v=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,g=u?-f*.22*m*p:Math.sin(this.elapsed*.055)*v,_=u?-d*.16*m*p:Math.sin(this.elapsed*.08)*v*.3,S=3,E=(1-Math.exp(-S*l))/S;this.yaw+=g*l+(this.yawVelocity-g)*E,this.pitch+=_*l+(this.pitchVelocity-_)*E,this.yawVelocity=Wc(this.yawVelocity,g,S,l),this.pitchVelocity=Wc(this.pitchVelocity,_,S,l),this.pitch=Math.atan2(Math.sin(this.pitch),Math.cos(this.pitch)),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ"));const T=Math.atan2(Math.sin(this.lookTargetYaw-this.lookYaw),Math.cos(this.lookTargetYaw-this.lookYaw));this.lookYaw+=T*(1-Math.exp(-6*l)),this.lookYaw=Math.atan2(Math.sin(this.lookYaw),Math.cos(this.lookYaw)),this.lookPitch=Wc(this.lookPitch,this.lookTargetPitch,6,l),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const M=i.started?Math.max(0,i.speed)*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,y=M*l+(this.speed-M)*(1-Math.exp(-.8*l))/.8;this.speed=Wc(this.speed,M,.8,l),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,y)}}function FC(o,t,i,s){let l=null,u=null,f="";const d=[],p=(y,U,C,b)=>{y.addEventListener(U,C,b),d.push(()=>y.removeEventListener(U,C,b))},m=()=>!s().paused&&!s().blocked&&document.visibilityState!=="hidden",v=()=>m()&&s().started&&s().mode==="Manual Flight",g=(y,U)=>{t.style.setProperty("--stick-x",`${y*34}px`),t.style.setProperty("--stick-y",`${U*34}px`)},_=()=>{const y=l;l=null,y&&o.hasPointerCapture(y.id)&&o.releasePointerCapture(y.id)},S=()=>{const y=u;u=null,i.steerTouch(0,0,!1),g(0,0),y!==null&&t.hasPointerCapture(y)&&t.releasePointerCapture(y)},E=()=>{_(),S(),i.reset(!0)};p(o,"pointerdown",(y=>{!m()||l||y.pointerType==="mouse"&&(y.button!==0||u!==null)||(y.preventDefault(),l={id:y.pointerId,type:y.pointerType,x:y.clientX,y:y.clientY},o.setPointerCapture(y.pointerId))})),p(o,"pointermove",(y=>{if((l==null?void 0:l.id)!==y.pointerId)return;if(!m()||y.pointerType==="mouse"&&!(y.buttons&1)){_();return}y.preventDefault();const U=Math.max(240,Math.min(o.clientWidth,o.clientHeight));i.look((y.clientX-l.x)/U,(y.clientY-l.y)/U,l.type!=="mouse",s()),l.x=y.clientX,l.y=y.clientY}));for(const y of["pointerup","pointercancel","lostpointercapture"])p(o,y,(U=>{U.pointerId===(l==null?void 0:l.id)&&_()}));const T=y=>{const U=t.getBoundingClientRect();let C=(y.clientX-U.left-U.width/2)/(U.width*.35),b=(y.clientY-U.top-U.height/2)/(U.height*.35);const O=Math.max(1,Math.hypot(C,b));C/=O,b/=O,i.steerTouch(C,b,!0),g(C,b)};p(t,"pointerdown",(y=>{y.pointerType==="mouse"||u!==null||!v()||(y.preventDefault(),y.stopPropagation(),(l==null?void 0:l.type)==="mouse"&&_(),u=y.pointerId,t.setPointerCapture(y.pointerId),T(y))})),p(t,"pointermove",(y=>{if(y.pointerId===u){if(!v()){S();return}y.preventDefault(),T(y)}}));for(const y of["pointerup","pointercancel","lostpointercapture"])p(t,y,(U=>{U.pointerId===u&&S()}));const M=y=>y instanceof HTMLElement&&!!y.closest('input,select,textarea,[contenteditable="true"]');return p(window,"keydown",(y=>{!MS.has(y.code)||M(y.target)||!v()||y.ctrlKey||y.metaKey||y.altKey||(y.preventDefault(),i.key(y.code,!0))})),p(window,"keyup",(y=>i.key(y.code,!1))),p(window,"blur",E),p(document,"visibilitychange",E),p(window,"resize",E),p(window,"orientationchange",E),p(o,"contextmenu",y=>y.preventDefault()),p(t,"contextmenu",y=>y.preventDefault()),{sync(){const y=s(),U=`${y.mode}/${y.paused}/${y.started}/${y.blocked}`;f&&U!==f&&(_(),S(),i.reset(y.paused||y.blocked)),f=U},dispose(){E(),d.forEach(y=>y())}}}function HC(o,t,i){if(!Number.isFinite(t)||t<=0||t>.25||i.paused){o.step(0,i);return}const s=Math.ceil(t/(1/60)),l=t/s;for(let u=0;u<s;u++)o.step(l,i)}class GC{constructor(){fe(this,"scale",1);fe(this,"elapsed",0);fe(this,"average",1/60);fe(this,"nextDecision",3)}reset(){this.scale=1,this.elapsed=0,this.average=1/60,this.nextDecision=3}observe(t,i,s){if(!i||s||!Number.isFinite(t)||t<=0||t>1||(this.elapsed+=t,this.average+=(Math.min(t,.2)-this.average)*(1-Math.exp(-t/1.5)),this.elapsed<this.nextDecision))return!1;const l=this.scale;return this.average>.028?(this.scale=Math.max(.6,Math.round((this.scale-.1)*100)/100),this.nextDecision=this.elapsed+3):this.average<.018?(this.scale=Math.min(1,Math.round((this.scale+.05)*100)/100),this.nextDecision=this.elapsed+10):this.nextDecision=this.elapsed+3,l!==this.scale}}const Rl=o=>(o=Math.max(0,Math.min(1,o)),o*o*(3-2*o)),VC=[2,4,1,0,3],kC=10.2;class ES{constructor(){fe(this,"phase","idle");fe(this,"elapsed",0);fe(this,"destination",0);fe(this,"seed",7123);fe(this,"committed",!1);fe(this,"justCommitted",!1);fe(this,"energy",0);fe(this,"charge",0);fe(this,"veil",0)}get busy(){return this.phase!=="idle"}start(t,i,s=!1){return this.busy||s?!1:(this.destination=VC[t]??(t+1)%5,this.seed=Math.imul(i|0,1664525)+1013904223>>>0||1,this.elapsed=0,this.committed=!1,this.justCommitted=!1,this.energy=0,this.veil=0,this.charge=0,this.phase="charging",!0)}advance(t,i=!1){if(this.justCommitted=!1,!this.busy||i||!Number.isFinite(t)||t<=0)return;this.elapsed+=Math.min(t,.25);const s=this.elapsed;s<1.4?(this.phase="charging",this.charge=Rl(s/1.4),this.energy=this.charge*.035):s<4?(this.phase="accelerating",this.charge=1,this.energy=.035+.965*Rl((s-1.4)/2.6)):s<5.6?(this.phase="transit",this.charge=1,this.energy=1):s<9?(this.phase="arriving",this.energy=1-Rl((s-5.6)/3.4),this.charge=this.energy):s<kC?(this.phase="stabilized",this.energy=0,this.charge=0):(this.phase="idle",this.energy=0,this.charge=0),this.veil=s<4?0:s<4.8?Rl((s-4)/.8):s<5.6?1:1-Rl((s-5.6)/1.7),!this.committed&&s>=4.8&&(this.committed=!0,this.justCommitted=!0)}}function XC(o){const i=new Float32Array(4680),s=new Float32Array(780*2),l=new Float32Array(780*2*3);let u=4171;const f=()=>(u=u*16807%2147483647,(u-1)/2147483646);for(let E=0;E<780;E++){const T=f()*Math.PI*2,M=18+Math.pow(f(),1.3)*550,y=f();for(let U=0;U<2;U++)i.set([Math.cos(T)*M,Math.sin(T)*M*.72,y],(E*2+U)*3),s[E*2+U]=U}const d=new Rn;d.setAttribute("position",new Tn(l,3)),d.setAttribute("lane",new Tn(i,3)),d.setAttribute("endpoint",new Tn(s,1));const p={time:{value:0},energy:{value:0},tint:{value:new de("#b7d8ef")}},m=new de("#d4ecfa"),v=new rn({uniforms:p,transparent:!0,depthWrite:!1,blending:Pl,vertexShader:`attribute vec3 lane;attribute float endpoint;uniform float time,energy;varying float fade;
      void main(){float z=-12.-fract(lane.z+time)*800.;float trailLength=energy*(22.+energy*155.);
      vec3 p=vec3(lane.xy,z-endpoint*trailLength);fade=smoothstep(15.,65.,-z)*(1.-smoothstep(650.,810.,-z))*(.35+endpoint*.4);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float energy;uniform vec3 tint;varying float fade;void main(){gl_FragColor=vec4(tint*1.35,fade*energy*.7);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),g=new ib(d,v);g.name="light-jump-streaks",g.frustumCulled=!1,g.renderOrder=3,o.add(g);let _=!0,S=0;return{configure(E,T){d.setDrawRange(0,(T?70:E==="Low"?180:E==="Medium"?420:780)*2),_=!0},update(E,T,M){T>0&&(S+=E*(.18+T*1.7)),p.time.value=S,p.energy.value=T,p.tint.value.copy(M).lerp(m,.7),g.visible=T>.001||_,_=!1}}}const qC=`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,YC=`
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
`,wl=[[[-480,-45,-1500],[1250,380,-4300],[-2200,950,-8200],[500,1600,-12e3],[2450,-500,-9200],[-700,850,-7900]],[[-540,-120,-1850],[1300,300,-4800],[-1450,420,-5700],[500,-90,-10800],[2600,700,-9600],[-850,900,-8200]],[[480,-100,-1800],[-1500,380,-3800],[1750,300,-6800],[-500,200,-10500],[3e3,-500,-9600],[-1100,900,-8500]],[[-470,35,-1900],[1350,500,-4600],[-2e3,-50,-7200],[700,120,-10500],[2400,-350,-8500],[-1e3,850,-9200]],[[-800,-200,-3500],[1900,430,-6800],[-2600,150,-9e3],[200,300,-12e3],[2900,-500,-1e4],[-1200,1e3,-10500]]].map(o=>o.map(t=>new G(...t))),WC=[6,5,6,5,4],Mp=[[135,310,180,570,150,90],[150,310,190,500,170,100],[135,360,210,650,190,95],[160,340,210,580,170,100],[180,420,260,820,180,100]],uo=[["#315e9c","#9c8fbd","#77758e","#3a4d6a","#6a6c7c","#8b829c"],["#276992","#8e9eae","#8b8e96","#31495f","#858d97","#6a849f"],["#857260","#b5956e","#92877a","#655c54","#8a7a67","#b3a38b"],["#2b7886","#7c9ba9","#7b8d94","#385765","#849b9e","#6f8e9f"],["#46576e","#6d768b","#6c7180","#293c58","#6d788a","#56697f"]].map(o=>o.map(t=>new de(t))),Ep=uo.map(o=>o.map(t=>t.clone().lerp(new de("#cfbd9c"),.38)));function jC(o){const t=new $s;t.name="regional-celestial-bodies",o.add(t);const i=new Mo(1,32,20),s=(R,H)=>{const W=new rn({uniforms:{baseColor:{value:uo[0][H].clone()},detailColor:{value:Ep[0][H].clone()},kind:{value:R},alpha:{value:1},seed:{value:H*7.3+2.1},lightDirection:{value:H===3?new G(-.85,.2,-.6):new G(-.65,.4,H===1?.28:.75)}},vertexShader:qC,fragmentShader:YC,transparent:!0,depthWrite:!0}),D=new fn(i,W);return D.renderOrder=4,D.userData.kind=R>1.5?"rocky-body":"planet",t.add(D),D},l=[0,1,2,2,2,2].map((R,H)=>s(R,H)),u=wl[0].map(R=>R.clone()),f=Mp[0].slice(),d=new Jn,p=new G,m=new G,v=l.map(()=>new G),g=new Float32Array(6).fill(1);let _=0;const S=[0,1,2].map((R,H)=>{const W=s(2,H+2);return W.userData.kind="moon",{mesh:W,parent:R,radius:[29,44,52][H]}}),E=new rn({uniforms:{color:{value:new de("#a5a091")},alpha:{value:1}},transparent:!0,depthWrite:!1,side:Di,vertexShader:"varying vec2 point;void main(){point=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 point;uniform vec3 color;uniform float alpha;void main(){float r=length(point);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.65,edge*max(.1,bands)*alpha);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),T=new fn(new Fm(1.32,2.2,64),E);T.rotation.set(1.12,.2,-.27),T.renderOrder=5,t.add(T);const M=T.quaternion.clone(),y=new Bb({color:"#76818c",roughness:1,metalness:0,transparent:!0,depthWrite:!1}),U=new JT(new Bm(1,0),y,72);U.name="distant-rock-cluster",t.add(U);const C=new xn;let b=8353;const O=()=>(b=b*16807%2147483647,(b-1)/2147483646);for(let R=0;R<72;R++){C.position.set((O()-.5)*700,(O()-.5)*180,(O()-.5)*450),C.rotation.set(O()*3,O()*3,O()*3);const H=4+O()*10;C.scale.set(H,H*.7,H*1.2),C.updateMatrix(),U.setMatrixAt(R,C.matrix)}U.instanceMatrix.needsUpdate=!0,U.computeBoundingSphere();const B=[new G(-1e3,80,-2800),new G(1300,-180,-3600),new G(-1700,-180,-4300),new G(1600,80,-3900),new G(-2200,-250,-6500)],P=B[0].clone();let V=6,N=3;return{group:t,setJump(R){_=R},reseed(R,H,W,D){m.copy(W),D?d.copy(D):d.identity();let q=R>>>0;const Y=()=>(q=Math.imul(q,1664525)+1013904223>>>0,q/4294967296);for(let z=0;z<l.length;z++)v[z].set((Y()-.5)*900,(Y()-.5)*500,(Y()-.5)*1e3),g[z]=.72+Y()*.56,u[z].copy(wl[H][z]).add(v[z]),f[z]=Mp[H][z]*g[z],l[z].material.uniforms.seed.value=Y()*90+1,(z===0||z===4)&&(l[z].material.uniforms.kind.value=Y()>.5?0:2);for(const z of S)z.mesh.material.uniforms.seed.value=Y()*90+1;P.copy(B[H]),P.x+=(Y()-.5)*1300,P.y+=(Y()-.5)*300},dispose(){t.removeFromParent();const R=new Set,H=new Set;t.traverse(W=>{if(W instanceof fn){R.add(W.geometry);for(const D of Array.isArray(W.material)?W.material:[W.material])H.add(D)}}),U.dispose(),R.forEach(W=>W.dispose()),H.forEach(W=>W.dispose())},configure(R){V=6,N=3,U.count=R==="Low"?24:R==="Medium"?48:72},update(R,H,W,D){const q=1-Math.exp(-R*.28),Y=1-dn.smoothstep(_,.12,.65);for(let z=0;z<l.length;z++){const J=l[z];u[z].x=dn.lerp(u[z].x,wl[W][z].x+v[z].x,q),u[z].y=dn.lerp(u[z].y,wl[W][z].y+v[z].y,q),u[z].z=dn.lerp(u[z].z,wl[W][z].z+v[z].z,q),f[z]=dn.lerp(f[z],Mp[W][z]*g[z],q),J.visible=z<Math.min(V,WC[W]),J.position.copy(u[z]).applyQuaternion(d).add(m).sub(D),J.scale.setScalar(f[z]),J.rotation.y=H*.002+z*.5,J.material.uniforms.baseColor.value.lerp(uo[W][z],q),J.material.uniforms.detailColor.value.lerp(Ep[W][z],q),J.material.uniforms.alpha.value=dn.smoothstep(J.position.length()/f[z],1.05,1.4)*Y}for(let z=0;z<S.length;z++){const{mesh:J,parent:Q,radius:ut}=S[z],yt=l[Q];J.visible=z<N&&yt.visible,J.scale.setScalar(ut),p.set(f[Q]*1.8,f[Q]*.5,f[Q]*.4).applyQuaternion(d),J.position.copy(yt.position).add(p),J.material.uniforms.alpha.value=yt.material.uniforms.alpha.value,J.material.uniforms.baseColor.value.lerp(uo[W][2],q),J.material.uniforms.detailColor.value.lerp(Ep[W][2],q)}T.visible=!0,T.quaternion.copy(d).multiply(M),T.position.copy(l[1].position),T.scale.setScalar(f[1]),E.uniforms.alpha.value=l[1].material.uniforms.alpha.value,E.uniforms.color.value.lerp(uo[W][1],q),U.quaternion.copy(d),U.position.copy(P).applyQuaternion(d).add(m).sub(D),y.opacity=Y,U.visible=Y>.005,y.color.lerp(uo[W][2],q)}}}const vm=18e3;function ZC(o){return[o.x,o.y,o.z].map(t=>Math.floor((t+vm/2)/vm))}function QC(o,t,i){let s=(Math.imul(o,73856093)^Math.imul(t,19349663)^Math.imul(i,83492791)^7123)>>>0;const l=s,u=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),f=o===0&&t===0&&i===0,d=f?0:l%5,p=new Jn().setFromEuler(new Ui(u()*Math.PI*2,u()*Math.PI*2,u()*Math.PI*2));return f&&p.identity(),{key:`${o}/${t}/${i}`,seed:l,region:d,heading:p,anchor:new G(o,t,i).multiplyScalar(vm)}}function KC(o){const t=Array.from({length:27},()=>({bodies:jC(o),sector:null}));let i="",s="Medium";const l=u=>{const[f,d,p]=ZC(u),m=`${f}/${d}/${p}`;if(m===i)return;i=m;const v=new Map;for(let g=-1;g<=1;g++)for(let _=-1;_<=1;_++)for(let S=-1;S<=1;S++){const E=QC(f+g,d+_,p+S);v.set(E.key,E)}for(const g of t)g.sector&&v.has(g.sector.key)?v.delete(g.sector.key):g.sector=null;for(const g of v.values()){const _=t.find(S=>!S.sector);_.sector=g,_.bodies.reseed(g.seed,g.region,g.anchor,g.heading),_.bodies.update(1e3,0,g.region,u),_.bodies.configure(s)}};return{setJump(u){for(const f of t)f.bodies.setJump(u)},configure(u){s=u;for(const f of t)f.bodies.configure(u)},update(u,f,d,p){var m;l(p);for(const v of t){const g=v.sector;v.bodies.update(u,f,g.region,p);for(const _ of v.bodies.group.children){const S=_.position.length(),E=1-dn.smoothstep(S,1e4,13e3);if(_ instanceof fn){const T=_.material;(m=T.uniforms)!=null&&m.alpha?T.uniforms.alpha.value*=E:"opacity"in T&&(T.opacity*=E)}_.visible=_.visible&&E>0}}},dispose(){for(const u of t)u.bodies.dispose()}}}const _m={Low:{pixelRatio:.9,stars:[550,2400,7800],cloudScale:.32,volumes:1,steps:4,octaves:2,bloom:!1},Medium:{pixelRatio:1,stars:[1e3,4800,19e3],cloudScale:.4,volumes:2,steps:7,octaves:2,bloom:!1},High:{pixelRatio:1.35,stars:[2200,1e4,48e3],cloudScale:.5,volumes:3,steps:10,octaves:3,bloom:!0}},Mx={Dark:{exposure:.8,cabin:.7,nebula:.65},Balanced:{exposure:1.12,cabin:1,nebula:.9},Cinematic:{exposure:1.32,cabin:1.12,nebula:1.08}},Na=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#a879ef",second:"#315fab",accent:"#f4a4cf",density:1.05,band:.8,structure:1.15,bandWidth:1,warmth:.25,stars:.87,exposure:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#88bcf2",second:"#234a89",accent:"#c3dcff",density:.38,band:.7,structure:1.4,bandWidth:.65,warmth:.07,stars:1,exposure:1.04},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#edbd79",second:"#956753",accent:"#fff2c9",density:.85,band:1.65,structure:1.8,bandWidth:1.4,warmth:.88,stars:1.4,exposure:.93},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#67cbbf",second:"#306c9c",accent:"#b1d5e8",density:1.3,band:.5,structure:.65,bandWidth:1.1,warmth:.16,stars:.7,exposure:1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#6d7fbb",second:"#253553",accent:"#a6b8e1",density:.12,band:.15,structure:.8,bandWidth:.45,warmth:.12,stars:.23,exposure:.84}],TS=`
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
`,JC=`
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
`,$C=`
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
`,t3=`
varying vec3 worldPoint;
void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}
`,e3=`
precision highp float;
varying vec3 worldPoint;
uniform vec3 center, radii, tint, second, accent;
uniform float time, density, visibility, energy, seed, structure;
uniform int steps, octaves;
uniform mat3 volumeRotation;
${TS}
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
`,n3=`
varying vec3 direction;
void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,i3=`
varying vec3 direction;
uniform vec3 tint, second, accent;
uniform float band, density, energy, bandWidth;
uniform mat3 layoutRotation, destinationRotation, volumeRotation;
uniform int octaves;
${TS}
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
`;function a3(o){const t=Na[0],i=new tS,s=new Ni(1,1,{type:Xi,depthBuffer:!1}),l=new ye,u={sky:{value:s.texture},reprojection:{value:l},tanHalf:{value:.6745},wideTanHalf:{value:.7554},aspect:{value:1},veil:{value:0},jumpTint:{value:new de("#92bce0")}},f=new fn(new nr(2,2),new rn({uniforms:u,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:`varying vec2 uvv;uniform sampler2D sky;uniform mat3 reprojection;uniform float tanHalf,wideTanHalf,aspect,veil;uniform vec3 jumpTint;
      void main(){vec3 ray=reprojection*vec3((uvv-.5)*2.*tanHalf*vec2(aspect,1.),-1.);
      vec2 sampleUV=ray.xy/max(.001,-ray.z)/(2.*wideTanHalf*vec2(aspect,1.))+.5;
      gl_FragColor=texture2D(sky,clamp(sampleUV,.001,.999));gl_FragColor.rgb=mix(gl_FragColor.rgb,jumpTint*.38,veil*.985);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));f.frustumCulled=!1,f.renderOrder=-10,o.add(f);const d=new vi(75,1,.1,16e3),p=new Jn,m=new Jn,v=new Jn,g=new G,_=new G,S=new Ve,E=new G,T=new G;let M=!0,y=-1/0,U=1/24;const C=KC(o),b=new G,O=new G,B=new Jn,P=new Jn,V=new ye,N=new Ve,R=new ye,H=new ye,W=Na.map(j=>({tint:new de(j.color),second:new de(j.second),accent:new de(j.accent)})),D={jumpAmount:{value:0},layoutRotation:{value:V},destinationRotation:{value:R},volumeRotation:{value:H},time:{value:0},tint:{value:W[0].tint.clone()},second:{value:W[0].second.clone()},accent:{value:W[0].accent.clone()},density:{value:Number(t.density)},band:{value:Number(t.band)},warmth:{value:Number(t.warmth)},abundance:{value:t.stars/1.4},structure:{value:Number(t.structure)},bandWidth:{value:Number(t.bandWidth)},energy:{value:.9},octaves:{value:3},halo:{value:1}};let q=7123;const Y=()=>(q=q*16807%2147483647,(q-1)/2147483646),z=()=>Math.sqrt(-2*Math.log(Math.max(1e-5,Y())))*Math.cos(2*Math.PI*Y()),Q=[new G(1900,1400,1900),new G(5400,4e3,5400),new G(15e3,11e3,15e3)].map((j,tt)=>{const xt=_m.High.stars[tt],Rt=new Float32Array(xt*3),Ct=new Float32Array(xt),Tt=new Float32Array(xt),Lt=new Float32Array(xt);for(let mt=0;mt<xt;mt++){let gt=(Y()-.5)*j.x,wt=(Y()-.5)*j.z,Nt=(Y()-.5)*j.y;if(tt>0&&Y()<.72){if(Y()<.28){const oe=Math.floor(Y()*4);gt=(oe%2?.22:-.24)*j.x+z()*j.x*.045,wt=(oe<2?-.27:.22)*j.z+z()*j.z*.055}Nt=-.42*gt+z()*j.y*.035+Math.sin(wt/j.z*5)*j.y*.045}Rt.set([gt,Nt,wt],mt*3);const zt=Y();Ct[mt]=(zt>.987?12+Y()*14:1.3+Y()*4.6)*[.7,1.1,2][tt],Tt[mt]=Y(),Lt[mt]=Y()}const F=new Rn;F.setAttribute("position",new Tn(Rt,3)),F.setAttribute("radius",new Tn(Ct,1)),F.setAttribute("temperature",new Tn(Tt,1)),F.setAttribute("identity",new Tn(Lt,1));const At=new rn({uniforms:{...D,offset:{value:new G},span:{value:j},layoutOffset:{value:new G},pixels:{value:400},dpr:{value:1}},vertexShader:JC,fragmentShader:$C,transparent:!0,depthWrite:!1,blending:Pl}),vt=new nS(F,At);return vt.frustumCulled=!1,vt.renderOrder=3,o.add(vt),vt}),ut=new fn(new Mo(12500,32,16),new rn({uniforms:D,vertexShader:n3,fragmentShader:i3,side:kn,depthWrite:!1}));ut.renderOrder=-2,ut.frustumCulled=!1,i.add(ut);const yt=new Mo(1,24,16),St=[{center:new G(-180,110,-820),radii:new G(680,330,770)},{center:new G(600,-140,-1600),radii:new G(1050,480,1e3)},{center:new G(-850,220,-2400),radii:new G(1200,520,1050)},{center:new G(450,420,1200),radii:new G(850,600,1e3)}],Ft=St.map(()=>new G),Qt=St.map((j,tt)=>{const xt=new rn({uniforms:{...D,center:{value:j.center.clone()},radii:{value:j.radii},steps:{value:10},visibility:{value:1},seed:{value:4.3+tt*9.7}},vertexShader:t3,fragmentShader:e3,transparent:!0,depthWrite:!1,side:kn}),Rt=new fn(yt,xt);return Rt.position.copy(j.center),Rt.scale.copy(j.radii),Rt.renderOrder=1,i.add(Rt),Rt}),X=new Gb("#b7c6ef","#080e1d",1.6);o.add(X);const pt=new Xb("#dae6ff",2.8);return pt.position.set(-3,4,1),o.add(pt),{tint:D.tint.value,setJump(j,tt){D.jumpAmount.value=Math.max(j,tt),u.veil.value=tt,u.jumpTint.value.copy(D.tint.value).lerp(D.accent.value,.35),C.setJump(Math.max(j,tt))},reseed(j,tt,xt,Rt){b.copy(xt),Rt?B.copy(Rt):B.identity(),P.copy(B).invert(),R.setFromMatrix4(N.makeRotationFromQuaternion(B)),H.copy(R).transpose();for(const Lt of Qt)Lt.quaternion.copy(B);let Ct=j>>>0;const Tt=()=>(Ct=Math.imul(Ct,1664525)+1013904223>>>0,Ct/4294967296);N.makeRotationY((Tt()-.5)*1.2),N.multiply(new Ve().makeRotationZ((Tt()-.5)*.8)),V.setFromMatrix4(N);for(const Lt of Q){const F=Lt.material.uniforms.span.value;Lt.material.uniforms.layoutOffset.value.set((Tt()-.5)*F.x,(Tt()-.5)*F.y,(Tt()-.5)*F.z)}for(let Lt=0;Lt<Qt.length;Lt++)Ft[Lt].set((Tt()-.5)*600,(Tt()-.5)*250,(Tt()-.5)*500),Qt[Lt].material.uniforms.seed.value=Tt()*80+2;M=!0},renderAtmosphere(j,tt,xt=!1){tt.updateWorldMatrix(!0,!1),tt.matrixWorld.decompose(g,p,_);const Rt=tt,Ct=Math.tan(dn.degToRad(Rt.fov)*.5);(u.aspect.value!==Rt.aspect||u.tanHalf.value!==Ct)&&(M=!0),u.tanHalf.value=Ct,u.wideTanHalf.value=Ct*1.12,u.aspect.value=Rt.aspect;const Tt=performance.now()/1e3;if(xt||M||Tt-y>=U||p.angleTo(m)>.075||E.distanceToSquared(T)>900){d.fov=dn.radToDeg(2*Math.atan(Ct*1.12)),d.aspect=Rt.aspect,d.near=Rt.near,d.far=Rt.far,d.updateProjectionMatrix(),d.position.copy(g),d.quaternion.copy(p);const Lt=j.toneMapping;j.toneMapping=La,j.setRenderTarget(s),j.render(i,d),j.setRenderTarget(null),j.toneMapping=Lt,m.copy(p),T.copy(E),y=performance.now()/1e3,M=!1}v.copy(m).invert().multiply(p),S.makeRotationFromQuaternion(v),l.setFromMatrix4(S)},dispose(){s.dispose(),C.dispose();const j=new Set,tt=new Set;i.traverse(xt=>{xt instanceof fn&&(j.add(xt.geometry),tt.add(xt.material))}),j.forEach(xt=>xt.dispose()),tt.forEach(xt=>xt.dispose())},configure(j,tt,xt,Rt,Ct,Tt,Lt=!1){M=!0,U=Lt?1/15:j==="Low"?1/20:j==="Medium"?1/24:1/30;const F=_m[j];C.configure(j),D.octaves.value=F.octaves;const At=Tt&&j!=="Low"?Xi:qi;s.texture.type!==At&&(s.dispose(),s.texture.type=At),s.setSize(Math.max(1,Math.round(xt*tt*(Lt?.26:F.cloudScale))),Math.max(1,Math.round(Rt*tt*(Lt?.26:F.cloudScale)))),D.halo.value=.75+Ct*.8,Q.forEach((vt,mt)=>{vt.geometry.setDrawRange(0,F.stars[mt]),vt.material.uniforms.pixels.value=Rt*.64*tt,vt.material.uniforms.dpr.value=tt}),Qt.forEach((vt,mt)=>{vt.visible=mt<F.volumes,vt.material.uniforms.steps.value=F.steps})},update(j,tt,xt,Rt,Ct){O.copy(Rt).sub(b).applyQuaternion(P),E.copy(O),C.update(j,tt,xt,Rt);const Tt=Na[xt],Lt=W[xt],F=1-Math.exp(-j*.55);D.time.value=tt,D.tint.value.lerp(Lt.tint,F),D.second.value.lerp(Lt.second,F),D.accent.value.lerp(Lt.accent,F),D.density.value=dn.lerp(D.density.value,Tt.density,F),D.band.value=dn.lerp(D.band.value,Tt.band,F),D.structure.value=dn.lerp(D.structure.value,Tt.structure,F),D.bandWidth.value=dn.lerp(D.bandWidth.value,Tt.bandWidth,F),D.warmth.value=dn.lerp(D.warmth.value,Tt.warmth,F),D.abundance.value=dn.lerp(D.abundance.value,Tt.stars/1.4,F),D.energy.value=dn.lerp(D.energy.value,Ct,F),Q.forEach(At=>At.material.uniforms.offset.value.copy(O)),Qt.forEach((At,vt)=>{const mt=St[vt].center;At.position.set(dn.euclideanModulo(mt.x+Ft[vt].x-O.x+4600,9200)-4600,dn.euclideanModulo(mt.y+Ft[vt].y-O.y+3600,7200)-3600,dn.euclideanModulo(mt.z+Ft[vt].z-O.z+4600,9200)-4600);const gt=Math.max(Math.abs(At.position.x)/4600,Math.abs(At.position.y)/3600,Math.abs(At.position.z)/4600);At.position.applyQuaternion(B),At.material.uniforms.center.value.copy(At.position),At.material.uniforms.visibility.value=1-dn.smoothstep(gt,.65,.95)})}}}function s3(o,t=!1){const i=o[0].index!==null,s=new Set(Object.keys(o[0].attributes)),l=new Set(Object.keys(o[0].morphAttributes)),u={},f={},d=o[0].morphTargetsRelative,p=new Rn;let m=0;for(let v=0;v<o.length;++v){const g=o[v];let _=0;if(i!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const S in g.attributes){if(!s.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+'. All geometries must have compatible attributes; make sure "'+S+'" attribute exists among all geometries, or in none of them.'),null;u[S]===void 0&&(u[S]=[]),u[S].push(g.attributes[S]),_++}if(_!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". Make sure all geometries have the same number of attributes."),null;if(d!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const S in g.morphAttributes){if(!l.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+".  .morphAttributes must be consistent throughout all geometries."),null;f[S]===void 0&&(f[S]=[]),f[S].push(g.morphAttributes[S])}if(t){let S;if(i)S=g.index.count;else if(g.attributes.position!==void 0)S=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". The geometry must have either an index or a position attribute"),null;p.addGroup(m,S,v),m+=S}}if(i){let v=0;const g=[];for(let _=0;_<o.length;++_){const S=o[_].index;for(let E=0;E<S.count;++E)g.push(S.getX(E)+v);v+=o[_].attributes.position.count}p.setIndex(g)}for(const v in u){const g=Ex(u[v]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" attribute."),null;p.setAttribute(v,g)}for(const v in f){const g=f[v][0].length;if(g===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[v]=[];for(let _=0;_<g;++_){const S=[];for(let T=0;T<f[v].length;++T)S.push(f[v][T][_]);const E=Ex(S);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" morphAttribute."),null;p.morphAttributes[v].push(E)}}return p}function Ex(o){let t,i,s,l=-1,u=0;for(let m=0;m<o.length;++m){const v=o[m];if(t===void 0&&(t=v.array.constructor),t!==v.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=v.itemSize),i!==v.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=v.normalized),s!==v.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=v.gpuType),l!==v.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;u+=v.count*i}const f=new t(u),d=new Tn(f,i,s);let p=0;for(let m=0;m<o.length;++m){const v=o[m];if(v.isInterleavedBufferAttribute){const g=p/i;for(let _=0,S=v.count;_<S;_++)for(let E=0;E<i;E++){const T=v.getComponent(_,E);d.setComponent(_+g,E,T)}}else f.set(v.array,p);p+=v.count*i}return l!==void 0&&(d.gpuType=l),d}function r3(o){const t=new $s;t.name="enclosed-flight-deck",o.add(t);const i={value:new de("#ae80f0")},s={value:1},l=(D,q)=>new rn({uniforms:{baseColor:{value:new de(D)},tint:i,brightness:s,polish:{value:q}},vertexShader:"varying vec3 point,faceNormal;void main(){point=position;faceNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 point,faceNormal;uniform vec3 baseColor,tint;uniform float brightness,polish;
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
      }`}),u=l("#141d23",.3),f=l("#2b393e",.5),d=l("#070b10",.12),p=new mo({color:"#52d9d5"}),m=new Map;let v=!1;const g=(D,q)=>{v&&(D.scale(.72,.58,.9),D.translate(0,-.798,-.3)),m.has(q)||m.set(q,[]),m.get(q).push(D)};function _(D,q,Y,z,J,Q,ut,yt=0,St=0,Ft=0){const Qt=new bo(J,Q,ut);Qt.rotateX(yt),Qt.rotateY(St),Qt.rotateZ(Ft),Qt.translate(q,Y,z),g(Qt,D)}function S(D,q,Y,z){const J=new Lm(z,z,q.distanceTo(Y),8);J.applyQuaternion(new Jn().setFromUnitVectors(new G(0,1,0),Y.clone().sub(q).normalize())),J.translate(...q.clone().add(Y).multiplyScalar(.5).toArray()),g(J,D)}function E(D,q,Y,z,J){const Q=Array.from({length:41},(ut,yt)=>{const St=-.12+yt/40*(Math.PI+.24);return new G(Math.cos(St)*q,-.95+Math.sin(St)*Y,D)});g(new of(new dm(Q),48,z,8,!1),J)}_(u,0,-2.02,.25,7.3,.22,7),_(u,0,-1.65,2.55,7.3,.65,.2),_(u,0,3.35,2.55,7.3,.13,.18);for(const D of[-3.5,-1.4,1.4,3.5])_(u,D,1.05,2.55,.085,4.55,.14),_(p,D+.048,1.05,2.48,.008,4.42,.012);for(const D of[-1.5,1.1,2.55])_(u,0,3.35,D,7.05,.095,.09),_(p,0,3.29,D,6.9,.008,.012);for(const D of[-1,1]){_(u,D*3.55,-1.65,.4,.17,.65,4.3),_(u,D*3.55,3.35,-.4,.13,.13,6);for(const q of[-1.5,1.1,2.55])_(u,D*3.55,1.05,q,.12,4.55,.085),_(p,D*3.48,1.05,q+.049,.012,4.42,.008);_(u,D*2.62,-1.52,-1.9,.65,.76,4,0,D*-.1),S(f,new G(D*1,-1.1,-2.95),new G(D*2.72,-1.4,.25),.075),S(u,new G(D*1.12,-1.15,-3.02),new G(D*2.85,-1.47,.35),.14),S(f,new G(D*2.9,-.95,-3.2),new G(D*3.12,-1.25,.5),.055),S(p,new G(D*1.16,-1.18,-2.98),new G(D*2.77,-1.54,.15),.009);for(let q=0;q<13;q++){const Y=q/12;_(f,D*(1.12+Y*1.69),-1.15-Y*.33,-3.02+Y*3.23,.035,.035,.028)}}E(-3.35,2.92,3.62,.085,u),E(-3.32,2.84,3.57,.025,f),E(-3.29,2.81,3.53,.008,p),E(.7,3.15,3.9,.12,u),S(u,new G(0,2.68,-3.35),new G(0,2.95,.8),.065),v=!0;const T=new cS;T.moveTo(-1.62,-1.85),T.lineTo(-1.44,-.58),T.bezierCurveTo(-1.2,-.12,-.92,.48,-.58,.55),T.quadraticCurveTo(0,.72,.58,.55),T.bezierCurveTo(.92,.48,1.2,-.12,1.44,-.58),T.lineTo(1.62,-1.85),T.closePath();const M=new Im(T,{depth:.24,bevelEnabled:!0,bevelSize:.045,bevelThickness:.045,bevelSegments:2,steps:1});M.translate(0,-.12,-3.18),g(M,d);const y=[new G(-1.4,-.62,-2.89),new G(-.88,.23,-2.89),new G(0,.52,-2.89),new G(.88,.23,-2.89),new G(1.4,-.62,-2.89)];g(new of(new dm(y),40,.045,8,!1),f),_(f,0,-.13,-2.84,1.19,.76,.12,-.1),_(d,0,-.13,-2.755,1.13,.7,.035,-.1),_(u,0,-.74,-2.72,1.32,.18,.22),_(d,0,-.72,-2.58,.85,.09,.06);for(const D of[-1,1]){_(u,D*1.14,-1.05,-1.62,.78,.25,1.75,.18,0,D*.12),_(d,D*1.14,-.91,-1.62,.69,.035,1.66,.18,0,D*.12),S(f,new G(D*1.59,-1.13,-.65),new G(D*1.61,-.78,-2.5),.045),S(f,new G(D*.73,-1.12,-.72),new G(D*.75,-.87,-2.35),.035),_(d,D*.97,-.63,-2.36,.59,.44,.12,-.34,-D*.18);for(let q=0;q<3;q++)for(let Y=0;Y<4;Y++)_(f,D*1.15+(Y-1.5)*.12,-.76-q*.035,-1.8+q*.18,.085,.04,.105,.18);for(let q=0;q<5;q++)_(d,D*1.23,-.83,-.96-q*.15,.12,.07,.085,.18),_(f,D*.94,-.79,-.98-q*.15,.045,.06,.065,.18);_(d,D*.65,-1.11,-1.78,.26,.11,.3),S(f,new G(D*.65,-1.07,-1.78),new G(D*.59,-.78,-1.86),.043),_(d,D*.59,-.72,-1.87,.11,.19,.16,-.25,0,D*.15),_(p,D*.59,-.625,-1.84,.035,.008,.045),_(f,D*.22,-1.74,-2.16,.2,.09,.34,.5);for(let q=0;q<6;q++)_(d,D*.22,-1.69+q*.013,-2.29+q*.04,.14,.014,.012,.5);_(p,D*1.34,-1.82,-.45,.025,.025,.58);for(let q=0;q<18;q++)_(f,D*1.32,-1.91,-.9+q*.085,.28,.014,.012)}v=!1,_(d,0,-1.66,-.08,.99,.25,1.4),_(u,0,-1.12,1,1.12,.92,.28,-.13),_(d,0,-1.1,.82,.91,.78,.14,-.13);const U=new mo({color:"#a0d9e1",transparent:!0,opacity:.025,depthWrite:!1,side:Di}),C=(D,q,Y,z,J,Q=0,ut=0)=>{const yt=new nr(z,J);yt.rotateX(Q),yt.rotateY(ut),yt.translate(D,q,Y),g(yt,U)};for(const D of[-1,1])C(D*3.56,1.05,-.4,5.9,4.5,0,Math.PI/2);C(0,1.05,2.57,7,4.5),C(0,3.36,-.4,7,5.9,Math.PI/2);const b=document.createElement("canvas");b.width=b.height=1024;const O=b.getContext("2d");O.fillStyle="#020b10",O.fillRect(0,0,1024,1024);const B=(D,q,Y,z,J="#40bfbf")=>{O.strokeStyle=J,O.beginPath(),O.moveTo(D,q),O.lineTo(Y,z),O.stroke()},P=(D,q,Y,z=10,J="#6ee9dd")=>{O.font=`${z}px monospace`,O.fillStyle=J,O.fillText(D,q,Y)};O.strokeStyle="#65eddf",O.lineWidth=3,O.strokeRect(5,5,630,354),P("A E T H E R   /   DEEP SPACE NAVIGATION",20,26,12),P("FLIGHT SYSTEMS",21,53),P("VECTOR  /  LOCK",465,53),O.lineWidth=1;for(let D=0;D<11;D++)B(20,70+D*22,164,70+D*22,"#154c58"),P(["NAV  ONLINE","DRIVE NOMINAL","O2   100.0%","HULL  STABLE"][D%4],24,84+D*22,8),B(460,70+D*22,610,70+D*22,"#154c58"),P(`${(D*173.29+72).toFixed(2)} / ${D%3===0?"ACTIVE":"SYNC"}`,467,84+D*22,8);for(let D=0;D<9;D++){const q=18+D*11;O.strokeStyle=D%2?"#174b59":"#21838b",O.beginPath(),O.arc(320,185,q,0,Math.PI*2),O.stroke()}for(let D=0;D<12;D++){const q=D/12*Math.PI*2;B(320+Math.cos(q)*19,185+Math.sin(q)*19,320+Math.cos(q)*107,185+Math.sin(q)*107,"#18525e")}const V=O.createRadialGradient(320,185,1,320,185,65);V.addColorStop(0,"#8bfff5"),V.addColorStop(.18,"#1dd7d5"),V.addColorStop(1,"#05303b00"),O.fillStyle=V,O.fillRect(250,115,140,140);for(let D=0;D<60;D++)B(185+D*4.4,317+Math.sin(D*.7)*7,189+D*4.4,317+Math.sin((D+1)*.7)*7,"#50cec5");P("PERSEUS // CONTINUOUS NAVIGATION",183,345,9),O.fillStyle="#04100a",O.fillRect(0,390,400,220);for(let D=0;D<18;D++)P(`${D.toString(16).padStart(2,"0")}  ${["SYSTEM LINK ESTABLISHED","TRAJECTORY COMPUTED","DEEP FIELD SCAN / OK","> AETHER FLIGHT COMPUTER"][D%4]}`,12,405+D*11,9,"#80c858");O.fillStyle="#063547",O.fillRect(430,390,350,180);for(let D=0;D<5;D++)P(["ATTITUDE","ENGINE","COOLANT","SIGNAL","ENERGY"][D],445,413+D*30,12),O.fillStyle="#47e4ef",O.fillRect(550,402+D*30,38+D*28,9);const N=["#f3d238","#28becf","#e35345","#9cd357","#c7e9de"];for(let D=0;D<4;D++)for(let q=0;q<8;q++){const Y=12+q*48,z=650+D*48;O.fillStyle="#101e22",O.fillRect(Y,z,40,40),O.fillStyle=N[(D*3+q)%5],O.fillRect(Y+4,z+4,32,25),B(Y+9,z+34,Y+30,z+34,"#899d94")}for(let D=0;D<2;D++){const q=540+D*220,Y=750;for(const z of[65,57,45])O.strokeStyle="#8df6e5",O.lineWidth=z===57?5:2,O.beginPath(),O.arc(q,Y,z,-.9,4.9),O.stroke();O.fillStyle="#bdfff2",O.beginPath(),O.arc(q,Y,12,0,Math.PI*2),O.fill(),B(q,Y,q+34,Y-24,"#bdfff2"),P(D?"OXYGEN":"VELOCITY",q-30,Y+91,11)}for(let D=0;D<12;D++)O.fillStyle=N[D%5],O.fillRect(20+D*45,900,31,16),P(D%3===0?"ARM":"ON",22+D*45,935,8);const R=new sb(b);R.colorSpace=si,R.anisotropy=2;const H=new mo({map:R,color:"#d8fff5",side:Di});function W(D,q,Y,z,J,Q,ut=0,yt=0,St=0){const Ft=new nr(z,J),Qt=Ft.getAttribute("uv");for(let X=0;X<Qt.count;X++)Qt.setXY(X,(Q[0]+Qt.getX(X)*Q[2])/1024,1-(Q[1]+(1-Qt.getY(X))*Q[3])/1024);Ft.rotateX(ut),Ft.rotateY(yt),Ft.rotateZ(St),Ft.translate(D,q,Y),g(Ft,H)}v=!0,W(0,-.13,-2.727,1.07,.6,[0,0,640,365],-.1),W(-.73,-.39,-2.72,.32,.36,[455,663,170,190]),W(.73,-.39,-2.72,.32,.36,[675,663,170,190]),W(-.98,-.61,-2.265,.49,.32,[430,390,350,180],-.34,.18,.1),W(.98,-.61,-2.265,.49,.32,[0,390,400,220],-.34,-.18,-.1),W(0,-1.02,-2.39,.62,.3,[0,640,400,205],-.4),W(0,-.59,-2.71,1.46,.085,[0,890,560,65]);for(const D of[-1,1])W(D*1.14,-.86,-1.53,.5,.53,[0,640,400,205],-Math.PI/2+.18,0,D*.12),W(D*.65,-1.038,-1.67,.23,.09,[0,890,250,45],-Math.PI/2),W(D*1.14,-.77,-2.03,.54,.11,[0,890,560,65],-Math.PI/2+.18);for(const D of[-1,1])for(let q=0;q<3;q++)for(let Y=0;Y<4;Y++)W(D*1.15+(Y-1.5)*.12,-.734-q*.035,-1.8+q*.18,.065,.08,[16+(q*3+Y)%8*48,654+q*48,30,25],-Math.PI/2+.18);for(const D of y){const q=new Mo(.022,6,4);q.translate(D.x,D.y,D.z+.055),g(q,f)}v=!1;for(const[D,q]of m){for(const J of q){if(J.index){const Q=J.toNonIndexed();J.copy(Q),Q.dispose()}J.deleteAttribute("uv1")}const Y=s3(q);q.forEach(J=>J.dispose());const z=new fn(Y,D);z.name=D===U?"observation-glazing":D===u?"enclosure-shell":D===H?"instrument-displays":"cabin-details",t.add(z)}return{group:t,update(D,q,Y,z){t.visible=z;const J=Y?.5:1;i.value.copy(D),s.value=q*J,p.color.set("#50d7ce").multiplyScalar(.7*q*J),H.color.set("#d8fff5").multiplyScalar((.8+q*.2)*(Y?.5:1))},dispose(){R.dispose()}}}function o3(o,t,i,s,l={}){const u=new wC({antialias:!0,alpha:!1,powerPreference:"high-performance"});u.setClearColor("#040710"),u.outputColorSpace=si,u.toneMapping=Sm,u.toneMappingExposure=Mx.Balanced.exposure,o.appendChild(u.domElement);const f=new tS,d=new vi(68,1,.1,16e3),p=new $s;p.position.z=5,p.add(d),f.add(p);const m=l.jump??new ES;let v=m.phase;const g={...t()},_=()=>(Object.assign(g,t()),g.blocked=g.blocked||m.busy,g),S=a3(f),E=XC(p),T=new de,M=new de("#bad9f3"),y=r3(p),U=FC(u.domElement,s,i,_),C=new gS,b=new GC;let O=t().quality,B=t().performanceMode,P=t().adaptive,V=0,N=0,R=0,H="",W=!1,D=null,q=null;const Y=()=>{D&&(D.passes.forEach(ut=>ut.dispose()),D.dispose(),D=null,q=null)},z=()=>{const ut=t(),yt=ut.performanceMode?"Low":ut.quality,St=_m[yt],Ft=Math.max(1,o.clientWidth),Qt=Math.max(1,o.clientHeight),X=Math.min(window.devicePixelRatio||1,St.pixelRatio)*(ut.performanceMode?.85:ut.adaptive?b.scale:1);u.setPixelRatio(X),u.setSize(Ft,Qt),d.aspect=Ft/Qt,d.updateProjectionMatrix();const pt=!ut.performanceMode&&St.bloom&&ut.bloom>0&&u.extensions.has("EXT_color_buffer_float");pt&&!D?(D=new OC(u),D.addPass(new PC(f,d)),q=new Eo(new Vt(Ft,Qt),.2,.55,1.1),D.addPass(q),D.addPass(new IC)):pt||Y(),D&&(D.setPixelRatio(X),D.setSize(Ft,Qt)),S.configure(yt,X,Ft,Qt,ut.bloom,u.extensions.has("EXT_color_buffer_float"),ut.performanceMode),E.configure(yt,ut.reduced),H=`${ut.quality}/${ut.bloom}/${ut.performanceMode}/${ut.adaptive}/${ut.reduced}`},J=()=>{var ut;C.getDelta(),i.reset(!0),(ut=l.onAudio)==null||ut.call(l,0,0,!0)};document.addEventListener("visibilitychange",J),window.addEventListener("resize",z),z();const Q=()=>{var tt,xt,Rt;if(W)return;V=requestAnimationFrame(Q);const ut=C.getDelta(),yt=ut>.25?0:ut,St=t();if(document.hidden){i.reset(!0);return}const Ft=Math.min(ut,.25);m.advance(ut,St.paused),m.phase!==v&&(v=m.phase,(tt=l.onPhase)==null||tt.call(l,m.phase)),m.justCommitted&&(S.reseed(m.seed,m.destination,i.position,i.shipQuaternion),(xt=l.onDestination)==null||xt.call(l,m.destination,m.seed));const Qt=m.busy&&m.committed?m.destination:St.region,X=m.energy*(St.reduced?.16:St.mode==="Meditation"?.55:1);U.sync(),_(),m.busy&&(g.mode="Autopilot",g.motion=0,g.started=!0,g.speed=St.speed+Math.pow(m.energy,2)*(St.reduced?100:360)),HC(i,ut,g),(Rt=l.onAudio)==null||Rt.call(l,X,m.charge,St.paused),(St.quality!==O||St.performanceMode!==B||St.adaptive!==P)&&(b.reset(),O=St.quality,B=St.performanceMode,P=St.adaptive);const pt=b.observe(ut,St.adaptive&&!St.performanceMode,St.paused);(H!==`${St.quality}/${St.bloom}/${St.performanceMode}/${St.adaptive}/${St.reduced}`||pt)&&z(),St.paused||(N+=yt);const j=Mx[St.lighting];u.toneMappingExposure=dn.damp(u.toneMappingExposure,j.exposure*Na[Qt].exposure,.8,Ft),S.setJump(X,m.veil),S.update(Ft,N,Qt,i.position,j.nebula),p.quaternion.copy(i.shipQuaternion),d.quaternion.copy(i.lookQuaternion),T.copy(S.tint).lerp(M,m.charge*.3),y.update(T,j.cabin*(1+m.charge*.12),St.mode==="Meditation",St.cockpit),E.update(St.paused?0:Math.min(ut,.1),X,S.tint),q&&(q.strength=St.bloom*(St.mode==="Meditation"?.45:.8+X*.2)),R+=ut,!(St.paused&&R<1/15)&&(R=0,S.renderAtmosphere(u,d),D?D.render():u.render(f,d))};return Q(),()=>{var St;W=!0,cancelAnimationFrame(V),U.dispose(),window.removeEventListener("resize",z),document.removeEventListener("visibilitychange",J),(St=l.onAudio)==null||St.call(l,0,0,!0),Y(),y.dispose(),S.dispose();const ut=new Set,yt=new Set;f.traverse(Ft=>{if(Ft instanceof fn||Ft instanceof nS||Ft instanceof eS){ut.add(Ft.geometry);for(const Qt of Array.isArray(Ft.material)?Ft.material:[Ft.material])yt.add(Qt)}}),ut.forEach(Ft=>Ft.dispose()),yt.forEach(Ft=>Ft.dispose()),u.dispose(),u.domElement.remove()}}const Yl=[{id:"meditation",name:"Meditation Impromptu 01",mood:"Gentle piano · meditation",file:"meditation-impromptu-01.mp3",artist:"Kevin MacLeod",isrc:"USUAN1100163"},{id:"floating",name:"Floating Cities",mood:"Dreamlike ambient · a quiet future",file:"floating-cities.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600018"},{id:"jellyfish",name:"Jellyfish in Space",mood:"Soft space music · a flowing journey",file:"jellyfish-in-space.mp3",artist:"Kevin MacLeod",isrc:"USUAN1500030"},{id:"soaring",name:"Soaring",mood:"Atmospheric ambient · calm and spacious",file:"soaring.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600040"}],km={engineEnabled:!0,spaceEnabled:!0,musicEnabled:!0,engine:.35,space:.3,music:.5,track:"meditation"},Tx="cosmic-drift-audio-v1";function l3(o){const t={...km};try{const i=JSON.parse(o??"null");if(!i||typeof i!="object")return t;const s=i;for(const f of["engineEnabled","spaceEnabled","musicEnabled"])typeof s[f]=="boolean"&&(t[f]=s[f]);for(const f of["engine","space","music"])typeof s[f]=="number"&&Number.isFinite(s[f])&&(t[f]=Math.max(0,Math.min(1,s[f])));const l={starlight:"meditation",nebula:"floating",orbit:"jellyfish",lunar:"soaring"},u=typeof s.track=="string"?l[s.track]??s.track:"";Yl.some(f=>f.id===u)&&(t.track=u)}catch{}return t}class u3{constructor(){fe(this,"ctx",null);fe(this,"master");fe(this,"engine");fe(this,"space");fe(this,"music");fe(this,"onMusicState");fe(this,"musicState",{state:"idle",track:null});fe(this,"jumpGain");fe(this,"jumpTone");fe(this,"jumpFilter");fe(this,"lastDrive",-1);fe(this,"lastCharge",-1);fe(this,"settings",{...km});fe(this,"enabled",!1);fe(this,"paused",!1);fe(this,"slots",[]);fe(this,"current");fe(this,"retiring");fe(this,"fadeTimer");fe(this,"pauseTimer");fe(this,"visibility",()=>this.apply())}get currentRecording(){var t;return((t=this.current)==null?void 0:t.element)??null}get musicActive(){return this.enabled&&!this.paused&&!document.hidden&&this.settings.musicEnabled&&this.settings.music>0}report(t,i){var l,u,f;const s=((u=(l=this.current)==null?void 0:l.track)==null?void 0:u.id)??null;this.musicState.state===t&&this.musicState.track===s&&this.musicState.message===i||(this.musicState={state:t,track:s,message:i},(f=this.onMusicState)==null||f.call(this,this.musicState))}async start(t){if(t&&(this.settings={...this.settings,track:t,musicEnabled:!0}),!this.ctx){const i=this.ctx=new AudioContext;this.master=i.createGain(),this.master.gain.value=0,this.master.connect(i.destination),this.engine=i.createGain(),this.space=i.createGain(),this.music=i.createGain();for(const p of[this.engine,this.space,this.music])p.gain.value=0,p.connect(this.master);for(const p of[38,57,76]){const m=i.createOscillator(),v=i.createGain();m.type="sine",m.frequency.value=p,v.gain.value=.09,m.connect(v).connect(this.engine),m.start()}const s=i.createBuffer(2,i.sampleRate*4,i.sampleRate);let l=1237;for(let p=0;p<2;p++){const m=s.getChannelData(p);let v=0;for(let g=0;g<m.length;g++){l=l*16807%2147483647,v=(v+((l-1)/2147483646-.5)*.035)/1.018;const _=Math.min(1,g/(i.sampleRate*.08),(m.length-1-g)/(i.sampleRate*.08));m[g]=v*_}}const u=i.createBufferSource(),f=i.createBiquadFilter();u.buffer=s,u.loop=!0,f.type="lowpass",f.frequency.value=650,u.connect(f).connect(this.space),u.start();for(const p of[82.41,123.47]){const m=i.createOscillator(),v=i.createGain();m.frequency.value=p,v.gain.value=.012,m.connect(v).connect(this.space),m.start()}this.jumpGain=i.createGain(),this.jumpGain.gain.value=0,this.jumpGain.connect(this.engine),this.jumpTone=i.createOscillator(),this.jumpTone.frequency.value=42,this.jumpTone.connect(this.jumpGain),this.jumpTone.start();const d=i.createBufferSource();d.buffer=s,d.loop=!0,this.jumpFilter=i.createBiquadFilter(),this.jumpFilter.type="lowpass",this.jumpFilter.frequency.value=250,d.connect(this.jumpFilter).connect(this.jumpGain),d.start(),this.slots=Array.from({length:2},()=>this.makeSlot(i)),document.addEventListener("visibilitychange",this.visibility)}this.apply(),this.current&&this.settings.musicEnabled&&this.settings.music>0&&this.play(this.current),await this.ctx.resume(),this.apply()}makeSlot(t){const i=new Audio;i.loop=!0,i.preload="none";const s=t.createMediaElementSource(i),l=t.createGain();l.gain.value=0,s.connect(l).connect(this.music);const u={element:i,source:s,gain:l,track:null,request:0,pending:!1};i.onwaiting=()=>{this.current===u&&this.musicActive&&this.report("loading")},i.onplaying=()=>{this.current===u&&this.musicActive&&this.report("playing")},i.onerror=()=>{this.current===u&&u.track&&this.report("error","This recording could not load. Select it again to retry.")};const f=new Uint8Array(76),d=new DataView(f.buffer),p=(m,v)=>{for(let g=0;g<v.length;g++)f[m+g]=v.charCodeAt(g)};return p(0,"RIFF"),d.setUint32(4,68,!0),p(8,"WAVEfmt "),d.setUint32(16,16,!0),d.setUint16(20,1,!0),d.setUint16(22,1,!0),d.setUint32(24,8e3,!0),d.setUint32(28,16e3,!0),d.setUint16(32,2,!0),d.setUint16(34,16,!0),p(36,"data"),d.setUint32(40,32,!0),i.src="data:audio/wav;base64,"+btoa(String.fromCharCode(...f)),i.play().then(()=>{u.track||(i.pause(),i.removeAttribute("src"),i.load())}).catch(()=>{}),u}set(t,i,s){this.enabled=t,this.settings={...i},this.paused=s,this.apply()}apply(){var u;const t=this.ctx;if(!t||t.state==="closed")return;const i=t.currentTime,s=this.enabled&&!this.paused&&!document.hidden;this.master.gain.setTargetAtTime(s?.65:0,i,.18);for(const[f,d,p]of[[this.engine,this.settings.engine,this.settings.engineEnabled],[this.space,this.settings.space,this.settings.spaceEnabled],[this.music,this.settings.music,this.settings.musicEnabled]])f.gain.setTargetAtTime(p?d:0,i,.16);const l=Yl.find(f=>f.id===this.settings.track)??Yl[0];(!this.current||((u=this.current.track)==null?void 0:u.id)!==l.id)&&this.changeTrack(l),this.musicActive?(clearTimeout(this.pauseTimer),this.pauseTimer=void 0,this.current.element.paused&&!this.current.pending?this.play(this.current):!this.current.element.paused&&this.current.element.readyState>=3?this.report("playing"):this.report("loading")):(this.report("paused"),this.pauseTimer||(this.pauseTimer=setTimeout(()=>{var f;this.pauseTimer=void 0,this.musicActive||((f=this.current)==null||f.element.pause(),this.current&&(this.current.pending=!1))},1100)))}changeTrack(t){const i=this.ctx,s=i.currentTime;clearTimeout(this.fadeTimer),this.retiring&&this.release(this.retiring);const l=this.current,u=this.slots.find(f=>f!==l);this.release(u),u.track=t,u.element.src=`/cosmic-drift/audio/${t.file}`,u.gain.gain.setValueAtTime(0,s),u.gain.gain.setTargetAtTime(1,s,.3),this.current=u,this.report("loading"),l&&(l.gain.gain.cancelScheduledValues(s),l.gain.gain.setTargetAtTime(0,s,.2),this.retiring=l,this.fadeTimer=setTimeout(()=>{this.release(l),this.retiring===l&&(this.retiring=void 0)},1200))}play(t){if(t.pending||!t.track)return;t.element.error&&t.element.load();const i=++t.request;t.pending=!0,this.current===t&&this.report("loading"),t.element.play().then(()=>{t.request===i&&(t.pending=!1,this.current===t&&this.musicActive&&this.report("playing"))}).catch(s=>{t.request===i&&(t.pending=!1,!(s instanceof DOMException&&s.name==="AbortError")&&this.current===t&&this.report("error",s instanceof DOMException&&s.name==="NotAllowedError"?"Tap the selected track again to allow playback.":"This recording could not play. Select it again to retry."))})}release(t){t.request++,t.pending=!1,t.track=null,t.element.pause(),t.element.removeAttribute("src"),t.element.load(),this.ctx&&this.ctx.state!=="closed"&&(t.gain.gain.cancelScheduledValues(this.ctx.currentTime),t.gain.gain.value=0)}jump(t,i,s){if(!this.ctx||this.ctx.state==="closed"||!this.jumpGain||(s&&(t=i=0),Math.abs(t-this.lastDrive)<.01&&Math.abs(i-this.lastCharge)<.01&&!(t===0&&this.lastDrive!==0)))return;this.lastDrive=t,this.lastCharge=i;const l=this.ctx.currentTime;this.jumpGain.gain.cancelScheduledValues(l),this.jumpGain.gain.setTargetAtTime(.018*i+.055*t,l,.15),this.jumpTone.frequency.cancelScheduledValues(l),this.jumpTone.frequency.setTargetAtTime(42+i*12+t*145,l,.25),this.jumpFilter.frequency.cancelScheduledValues(l),this.jumpFilter.frequency.setTargetAtTime(250+t*1100,l,.25)}dispose(){var t;clearTimeout(this.fadeTimer),clearTimeout(this.pauseTimer),document.removeEventListener("visibilitychange",this.visibility);for(const i of this.slots)i.element.onwaiting=i.element.onplaying=i.element.onerror=null,this.release(i),i.source.disconnect(),i.gain.disconnect();this.current=this.retiring=void 0,this.slots=[],this.onMusicState=void 0,(t=this.ctx)==null||t.close().catch(()=>{}),this.ctx=null}}function c3({sound:o,paused:t,playback:i,settings:s,onToggle:l,onChange:u,onTrack:f}){const d=i.state==="error"?i.message:o?t?"Audio paused · resume the journey to listen":s.musicEnabled?s.music<=0?"Music volume is zero · raise it to listen":i.state==="playing"?"Playing your selection · recorded music":i.state==="paused"?"Music paused · select the track to continue":"Loading recording…":"Music is off · engine and space follow your settings":"Audio is off · choose a track or enable sound";return it.jsxs(it.Fragment,{children:[it.jsx("p",{children:"Your own mix of engine, space and music."}),it.jsxs("button",{className:"sound-toggle",onClick:l,children:[o?"Mute all audio":"Enable sound",o?it.jsx(Tp,{size:17}):it.jsx(Ax,{size:17})]}),it.jsx("div",{className:"audio-channels",children:[{toggle:"engineEnabled",volume:"engine",name:"Engine sound",label:"Engine volume",hint:"Engine hum and Light Jump"},{toggle:"spaceEnabled",volume:"space",name:"Space ambience",label:"Space volume",hint:"A soft, atmospheric soundscape"},{toggle:"musicEnabled",volume:"music",name:"Music",label:"Music volume",hint:"Your selected relaxation track"}].map(p=>it.jsxs("div",{className:"audio-channel",children:[it.jsxs("label",{className:"check",children:[it.jsx("input",{type:"checkbox",checked:s[p.toggle],onChange:m=>u({[p.toggle]:m.target.checked})}),it.jsxs("span",{children:[p.name,it.jsx("small",{children:p.hint})]})]}),it.jsxs("label",{className:"audio-level",children:["Volume ",it.jsxs("output",{children:[Math.round(s[p.volume]*100),"%"]}),it.jsx("input",{"aria-label":p.label,type:"range",min:"0",max:"1",step:".01",disabled:!s[p.toggle],value:s[p.volume],onChange:m=>u({[p.volume]:+m.target.value})})]})]},p.volume))}),it.jsxs("fieldset",{className:"music-library",children:[it.jsx("legend",{children:"Choose your music"}),Yl.map((p,m)=>it.jsxs("label",{className:`music-option ${s.track===p.id?"selected":""}`,children:[it.jsx("input",{onClick:()=>{s.track===p.id&&f(p.id)},type:"radio",name:"music-track","aria-label":p.name,checked:s.track===p.id,onChange:()=>f(p.id)}),it.jsx("span",{className:`music-art music-art-${m}`,"aria-hidden":"true",children:["✦","◌","◎","☾"][m]}),it.jsxs("span",{className:"music-description",children:[p.name,it.jsx("small",{children:p.mood}),it.jsxs("small",{children:[p.artist," · CC BY 3.0"]})]})]},p.id))]}),it.jsx("small",{className:"audio-note","data-playback-state":i.state,"aria-live":"polite",children:d}),it.jsx("small",{className:"audio-license",children:"Recorded music by Kevin MacLeod · free with attribution"}),it.jsxs("details",{className:"music-credits",children:[it.jsx("summary",{children:"Music credits & licenses"}),it.jsxs("p",{children:["All four recordings are by ",it.jsx("a",{href:"https://incompetech.com/",target:"_blank",rel:"noreferrer",children:"Kevin MacLeod"}),", used under ",it.jsx("a",{href:"https://creativecommons.org/licenses/by/3.0/",target:"_blank",rel:"noreferrer",children:"CC BY 3.0"}),"."]}),Yl.map(p=>it.jsxs("a",{href:`https://incompetech.com/music/royalty-free/index.html?isrc=${p.isrc}`,target:"_blank",rel:"noreferrer",children:[p.name," ↗"]},p.id)),it.jsxs("p",{children:["Audio editions from FitVita: trimmed, faded, loudness-normalized and encoded to Opus; converted to MP3 for this site. ",it.jsx("a",{href:"https://github.com/smyrna-pergamum/fitvita",target:"_blank",rel:"noreferrer",children:"Source & credits ↗"})]})]})]})}function f3(){const[o,t]=ge.useState("Autopilot"),[i,s]=ge.useState(18),[l,u]=ge.useState(!1),[f,d]=ge.useState(0),[p,m]=ge.useState(()=>matchMedia("(any-pointer: coarse)").matches?"Low":"Medium"),[v,g]=ge.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[_,S]=ge.useState(.6),[E,T]=ge.useState(!0),[M,y]=ge.useState(!1),[U,C]=ge.useState(!1),[b,O]=ge.useState(""),[B,P]=ge.useState(!1),[V,N]=ge.useState(!0),[R,H]=ge.useState(""),[W,D]=ge.useState(!1),[q,Y]=ge.useState(1),[z,J]=ge.useState(.7),[Q,ut]=ge.useState(!1),[yt,St]=ge.useState(!1),[Ft,Qt]=ge.useState("Balanced"),[X,pt]=ge.useState(.28),[j,tt]=ge.useState(!1),[xt,Rt]=ge.useState(!0),[Ct,Tt]=ge.useState("idle"),[Lt,F]=ge.useState(7123),[At,vt]=ge.useState(0),[mt,gt]=ge.useState({state:"idle",track:null}),[wt,Nt]=ge.useState(()=>{try{return l3(localStorage.getItem(Tx))}catch{return{...km}}}),zt=ge.useRef(new ES),oe=ge.useRef(()=>{}),re=Ct!=="idle",I=ge.useRef(null),A=ge.useRef(new BC),rt=ge.useRef(null),ft=ge.useRef(new u3),Ut=ge.useRef({mode:o,speed:i,paused:l,region:f,quality:p,reduced:v,motion:_,cockpit:E,started:M,blocked:!!b||re,sensitivity:q,touchSensitivity:z,invertMouseX:Q,invertMouseY:yt,lighting:Ft,bloom:X,performanceMode:j,adaptive:xt,worldSeed:Lt});Ut.current={mode:o,speed:i,paused:l,region:f,quality:p,reduced:v,motion:_,cockpit:E,started:M,blocked:!!b||re,sensitivity:q,touchSensitivity:z,invertMouseX:Q,invertMouseY:yt,lighting:Ft,bloom:X,performanceMode:j,adaptive:xt,worldSeed:Lt},ge.useEffect(()=>{try{return o3(rt.current,()=>Ut.current,A.current,I.current,{jump:zt.current,onPhase:Tt,onDestination:(Mt,Yt)=>{d(Mt),F(Yt)},onAudio:(Mt,Yt,It)=>ft.current.jump(Mt,Yt,It)})}catch{H("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),ge.useEffect(()=>(ft.current.onMusicState=gt,()=>ft.current.dispose()),[]),ge.useEffect(()=>{const Mt=setInterval(()=>vt(A.current.speed),200);return()=>clearInterval(Mt)},[]),ge.useEffect(()=>{ft.current.set(B,wt,l)},[B,wt,l]),ge.useEffect(()=>{try{localStorage.setItem(Tx,JSON.stringify(wt))}catch{}},[wt]),ge.useEffect(()=>{const Mt=setInterval(()=>{V&&M&&!l&&!zt.current.busy&&d(Yt=>(Yt+1)%5)},9e4);return()=>clearInterval(Mt)},[V,M,l]),ge.useEffect(()=>{const Mt=It=>{It.target instanceof HTMLElement&&It.target.closest('input,select,textarea,[contenteditable="true"]')||(It.code==="KeyJ"&&!It.repeat&&!It.ctrlKey&&!It.metaKey&&!It.altKey&&(It.preventDefault(),oe.current()),It.code==="KeyR"&&A.current.centerLook(),It.key.toLowerCase()==="h"&&C(me=>!me),It.code==="Space"&&!(It.target instanceof HTMLElement&&It.target.closest("button,a"))&&(It.preventDefault(),u(me=>!me)),It.key==="Escape"&&(C(!1),O("")))},Yt=()=>D(!!document.fullscreenElement);return window.addEventListener("keydown",Mt),document.addEventListener("fullscreenchange",Yt),()=>{window.removeEventListener("keydown",Mt),document.removeEventListener("fullscreenchange",Yt)}},[]);const _t=async()=>{try{await ft.current.start(),P(Mt=>!Mt)}catch{H("Audio is unavailable in this browser. The journey can continue silently.")}},Jt=async Mt=>{try{await ft.current.start(Mt),Nt(Yt=>({...Yt,track:Mt,musicEnabled:!0})),P(!0)}catch{H("Audio is unavailable in this browser. The journey can continue silently.")}},Ht=()=>{y(!0),u(!1)},te=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{H("Fullscreen is unavailable in this browser.")}},ne=Mt=>{zt.current.busy||(t(Mt),y(!0))},Ot=()=>{zt.current.start(f,Lt,l)&&(y(!0),O(""),Tt("charging"))};oe.current=Ot;const Wt=l&&re?"Jump paused":Ct==="charging"?"Charging drive…":Ct==="accelerating"?"Accelerating…":Ct==="transit"?"Crossing the light…":Ct==="arriving"?`Entering ${Na[zt.current.destination].name}…`:Ct==="stabilized"?`Arrived: ${Na[zt.current.destination].name}`:"";return it.jsxs("main",{"data-jump-phase":Ct,"data-world-seed":Lt,className:`${U?"hidden-ui":""} ${o==="Meditation"?"meditation":""} ${o==="Manual Flight"?"manual-flight":""} ${b||l||re?"controls-blocked":""} ${re?"jump-active":""}`,children:[it.jsx("div",{className:"universe",ref:rt}),it.jsx("div",{className:"vignette"}),it.jsxs("div",{className:"touch-controls ui",children:[it.jsxs("div",{ref:I,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[it.jsx("span",{className:"stick-cross",children:"+"}),it.jsx("span",{className:"stick-thumb"}),it.jsx("small",{children:"STEER"})]}),it.jsx("span",{className:"touch-look-hint",children:"DRAG SPACE TO LOOK"})]}),it.jsxs("header",{className:"ui",children:[it.jsxs("a",{className:"brand",href:"#",onClick:Mt=>{Mt.preventDefault(),C(!1)},children:[it.jsx(EE,{size:32}),it.jsxs("span",{children:["COSMIC DRIFT",it.jsx("small",{children:"A QUIETER KIND OF JOURNEY"})]})]}),it.jsxs("nav",{children:[it.jsx("span",{className:"live-dot"})," ALL SYSTEMS AT PEACE ",it.jsx("span",{className:"nav-line"}),it.jsx("button",{title:"Audio settings",onClick:()=>O(b==="audio"?"":"audio"),children:it.jsx(Tp,{size:18})}),it.jsx("button",{title:"Settings",onClick:()=>O(b==="settings"?"":"settings"),children:it.jsx(AE,{size:18})}),it.jsx("button",{title:"Fullscreen",onClick:te,children:it.jsx(ly,{size:18})})]})]}),it.jsxs("section",{className:"intro ui",children:[it.jsxs("div",{className:"eyebrow",children:[it.jsx("span",{})," LEAVE THE NOISE BEHIND"]}),it.jsxs("h1",{children:["Nowhere to be.",it.jsx("br",{}),"Just ",it.jsx("em",{children:"drift."})]}),it.jsxs("p",{children:["A quiet passage through an infinite universe.",it.jsx("br",{}),"No destination. No demands. Just you and the stars."]}),it.jsxs("button",{className:"start",onClick:Ht,children:[M?l?"Resume journey":"Journey in progress":"Start journey",it.jsx(SE,{size:18})]}),it.jsxs("div",{className:"intro-note",children:[it.jsx("span",{})," ",M?"TAKE YOUR TIME. YOU HAVE ALL OF IT.":"YOUR OWN LITTLE CORNER OF INFINITY"]})]}),it.jsxs("aside",{className:"region-label ui",children:[it.jsx("span",{className:"coordinate",children:"SECTOR 07 / PERSEUS"}),it.jsx("div",{className:"region-rule"}),it.jsx("span",{className:"eyebrow",children:"YOU ARE DRIFTING THROUGH"}),it.jsx("h2",{children:Na[f].name}),it.jsx("p",{children:Na[f].subtitle}),it.jsxs("button",{disabled:re,onClick:()=>O(b==="regions"?"":"regions"),children:["Explore regions ",it.jsx(sy,{size:14})]})]}),it.jsxs("div",{className:"travel-marker ui",children:[it.jsx("span",{children:"✧"}),it.jsx("i",{}),it.jsx("small",{children:"AN INFINITE UNIVERSE. AN UNHURRIED YOU."})]}),it.jsxs("section",{className:"flight-deck ui",children:[it.jsxs("div",{className:"deck-top",children:[it.jsxs("div",{className:"deck-label",children:[it.jsx("span",{className:"live-dot"}),l?"JOURNEY PAUSED":M?"JOURNEY ACTIVE":"READY WHEN YOU ARE"]}),it.jsxs("div",{className:"jump-tools",children:[it.jsx("span",{className:"jump-status",role:"status","aria-live":"polite",children:Wt}),it.jsx("span",{className:"ship-name",children:"AETHER–01"}),it.jsxs("button",{className:"jump-button",disabled:re||l,onClick:Ot,"aria-keyshortcuts":"J",children:[it.jsx(wE,{size:14}),"Light Jump",it.jsx("kbd",{children:"J"})]})]})]}),it.jsxs("div",{className:"deck-controls",children:[it.jsx("div",{className:"mode-controls",children:[{name:"Autopilot",icon:ry},{name:"Manual Flight",icon:ME},{name:"Meditation",icon:RE}].map(Mt=>it.jsxs("button",{disabled:re,className:o===Mt.name?"selected":"",onClick:()=>ne(Mt.name),children:[it.jsx(Mt.icon,{size:17}),it.jsxs("span",{children:[Mt.name,Mt.name==="Meditation"?" mode":""]})]},Mt.name))}),it.jsxs("div",{className:"speed",children:[it.jsxs("label",{htmlFor:"speed",children:["DRIFT SPEED ",it.jsxs("span",{children:[At.toFixed(0)," ",it.jsx("small",{children:"km/s"})]})]}),it.jsx("input",{id:"speed",disabled:re,type:"range",min:"0",max:"1200",value:i,onChange:Mt=>s(+Mt.target.value)}),it.jsxs("div",{children:[it.jsx("span",{children:"0 · BRAKE"}),it.jsx("span",{children:"INTERSTELLAR"})]})]}),it.jsxs("div",{className:"deck-actions",children:[it.jsx("button",{title:l?"Resume":"Pause",onClick:()=>u(Mt=>!Mt),children:l?it.jsx(bE,{size:19}):it.jsx(TE,{size:19})}),it.jsx("button",{title:B?"Mute audio":"Enable audio",onClick:_t,children:B?it.jsx(Tp,{size:19}):it.jsx(Ax,{size:19})}),it.jsx("button",{title:"Hide interface (H)",onClick:()=>C(!0),children:it.jsx(oy,{size:19})})]})]})]}),it.jsxs("footer",{className:"ui",children:[it.jsxs("span",{children:[it.jsx("span",{className:"key",children:"DRAG"})," TO LOOK 360° · R TO CENTER ",it.jsx("i",{})," ",it.jsx("span",{className:"key",children:o==="Manual Flight"?"W A S D":"H"})," ",o==="Manual Flight"?"TO STEER":"TO HIDE INTERFACE"]}),it.jsxs("span",{children:["BUILT FOR WANDERING ",it.jsx("span",{className:"tiny-star",children:"✦"})]})]}),U&&it.jsxs("button",{className:"restore",onClick:()=>C(!1),children:[it.jsx(oy,{size:16})," Show controls · H"]}),b&&it.jsxs("div",{className:"panel ui",children:[it.jsxs("div",{className:"panel-head",children:[it.jsx("span",{children:b==="regions"?"Choose your horizon":b==="audio"?"The sound of stillness":"Make space your own"}),it.jsx("button",{title:"Close settings",onClick:()=>O(""),children:it.jsx(uy,{size:19})})]}),b==="regions"?it.jsxs(it.Fragment,{children:[it.jsx("p",{children:"Every corner of the universe has a different kind of quiet."}),Na.map((Mt,Yt)=>it.jsxs("button",{disabled:re,className:`region-option ${f===Yt?"active":""}`,onClick:()=>d(Yt),children:[it.jsx("span",{className:"orb",style:{background:`radial-gradient(circle at 30% 30%,${Mt.color},${Mt.second},#070a12)`}}),it.jsxs("span",{children:[Mt.name,it.jsx("small",{children:Mt.subtitle})]}),f===Yt?"●":it.jsx(sy,{size:15})]},Mt.name)),it.jsxs("label",{className:"check",children:[it.jsx("input",{type:"checkbox",checked:V,onChange:Mt=>N(Mt.target.checked)})," Automatically drift between regions · 90s"]})]}):b==="audio"?it.jsx(c3,{sound:B,paused:l,playback:mt,settings:wt,onToggle:_t,onTrack:Jt,onChange:Mt=>Nt(Yt=>({...Yt,...Mt}))}):it.jsxs(it.Fragment,{children:[it.jsxs("label",{className:"setting",children:["Graphics quality",it.jsx("select",{"aria-label":"Graphics quality",value:p,onChange:Mt=>m(Mt.target.value),children:["Low","Medium","High"].map(Mt=>it.jsx("option",{children:Mt},Mt))})]}),it.jsxs("label",{className:"check",children:[it.jsx("input",{type:"checkbox",checked:j,onChange:Mt=>tt(Mt.target.checked)})," Performance mode"]}),it.jsxs("label",{className:"check",children:[it.jsx("input",{type:"checkbox",checked:xt,onChange:Mt=>Rt(Mt.target.checked)})," Adaptive resolution"]}),it.jsx("small",{className:"setting-note",children:"Performance mode prioritizes smooth flight. Adaptive resolution adjusts image detail when rendering is slow."}),it.jsxs("label",{className:"setting",children:["Environment lighting",it.jsx("select",{"aria-label":"Environment lighting",value:Ft,onChange:Mt=>Qt(Mt.target.value),children:["Dark","Balanced","Cinematic"].map(Mt=>it.jsx("option",{children:Mt},Mt))})]}),it.jsxs("label",{className:"setting",children:["Soft bloom ",it.jsxs("output",{children:[Math.round(X*100),"%"]}),it.jsx("input",{"aria-label":"Soft bloom",type:"range",min:"0",max:".6",step:".02",value:X,onChange:Mt=>pt(+Mt.target.value)}),it.jsx("small",{className:"setting-note",children:"Low / Medium use lightweight star halos; High can add post-processing bloom."})]}),it.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",it.jsxs("output",{children:[q.toFixed(2),"×"]}),it.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:q,onChange:Mt=>Y(+Mt.target.value)})]}),it.jsxs("label",{className:"setting",children:["Touch sensitivity ",it.jsxs("output",{children:[z.toFixed(2),"×"]}),it.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:z,onChange:Mt=>J(+Mt.target.value)})]}),it.jsxs("label",{className:"check",children:[it.jsx("input",{type:"checkbox",checked:Q,onChange:Mt=>ut(Mt.target.checked)})," Invert mouse horizontal axis"]}),it.jsxs("label",{className:"check",children:[it.jsx("input",{type:"checkbox",checked:yt,onChange:Mt=>St(Mt.target.checked)})," Invert mouse vertical axis"]}),it.jsxs("label",{className:"setting",children:["Camera movement",it.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:_,onChange:Mt=>S(+Mt.target.value)})]}),it.jsxs("label",{className:"check",children:[it.jsx("input",{type:"checkbox",checked:v,onChange:Mt=>g(Mt.target.checked)})," Reduced motion"]}),it.jsxs("button",{className:"sound-toggle",onClick:()=>A.current.centerLook(),children:["Center view · R",it.jsx(ry,{size:16})]}),it.jsxs("label",{className:"check",children:[it.jsx("input",{type:"checkbox",checked:E,onChange:Mt=>T(Mt.target.checked)})," Show cockpit"]}),it.jsxs("button",{className:"sound-toggle",onClick:te,children:[W?"Exit fullscreen":"Enter fullscreen",it.jsx(ly,{size:16})]})]})]}),R&&it.jsxs("div",{role:"alert",className:"error",children:[R,it.jsx("button",{onClick:()=>H(""),"aria-label":"Dismiss error",children:it.jsx(uy,{size:16})})]})]})}vE.createRoot(document.getElementById("root")).render(it.jsx(f3,{}));
