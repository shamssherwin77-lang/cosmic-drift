var sE=Object.defineProperty;var rE=(o,t,i)=>t in o?sE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var fe=(o,t,i)=>rE(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var zd={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function oE(){if(Z_)return vl;Z_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:f,ref:l!==void 0?l:null,props:u}}return vl.Fragment=t,vl.jsx=i,vl.jsxs=i,vl}var Q_;function lE(){return Q_||(Q_=1,zd.exports=oE()),zd.exports}var at=lE(),Id={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function uE(){if(K_)return ve;K_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),S=Symbol.iterator;function T(X){return X===null||typeof X!="object"?null:(X=S&&X[S]||X["@@iterator"],typeof X=="function"?X:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,_={};function w(X,pt,Y){this.props=X,this.context=pt,this.refs=_,this.updater=Y||A}w.prototype.isReactComponent={},w.prototype.setState=function(X,pt){if(typeof X!="object"&&typeof X!="function"&&X!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,X,pt,"setState")},w.prototype.forceUpdate=function(X){this.updater.enqueueForceUpdate(this,X,"forceUpdate")};function D(){}D.prototype=w.prototype;function b(X,pt,Y){this.props=X,this.context=pt,this.refs=_,this.updater=Y||A}var I=b.prototype=new D;I.constructor=b,M(I,w.prototype),I.isPureReactComponent=!0;var z=Array.isArray;function P(){}var V={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function E(X,pt,Y){var J=Y.ref;return{$$typeof:o,type:X,key:pt,ref:J!==void 0?J:null,props:Y}}function U(X,pt){return E(X.type,pt,X.props)}function G(X){return typeof X=="object"&&X!==null&&X.$$typeof===o}function q(X){var pt={"=":"=0",":":"=2"};return"$"+X.replace(/[=:]/g,function(Y){return pt[Y]})}var nt=/\/+/g;function Q(X,pt){return typeof X=="object"&&X!==null&&X.key!=null?q(""+X.key):pt.toString(36)}function F(X){switch(X.status){case"fulfilled":return X.value;case"rejected":throw X.reason;default:switch(typeof X.status=="string"?X.then(P,P):(X.status="pending",X.then(function(pt){X.status==="pending"&&(X.status="fulfilled",X.value=pt)},function(pt){X.status==="pending"&&(X.status="rejected",X.reason=pt)})),X.status){case"fulfilled":return X.value;case"rejected":throw X.reason}}throw X}function $(X,pt,Y,J,xt){var Rt=typeof X;(Rt==="undefined"||Rt==="boolean")&&(X=null);var wt=!1;if(X===null)wt=!0;else switch(Rt){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(X.$$typeof){case o:case t:wt=!0;break;case v:return wt=X._init,$(wt(X._payload),pt,Y,J,xt)}}if(wt)return xt=xt(X),wt=J===""?"."+Q(X,0):J,z(xt)?(Y="",wt!=null&&(Y=wt.replace(nt,"$&/")+"/"),$(xt,pt,Y,"",function(B){return B})):xt!=null&&(G(xt)&&(xt=U(xt,Y+(xt.key==null||X&&X.key===xt.key?"":(""+xt.key).replace(nt,"$&/")+"/")+wt)),pt.push(xt)),1;wt=0;var Tt=J===""?".":J+":";if(z(X))for(var Lt=0;Lt<X.length;Lt++)J=X[Lt],Rt=Tt+Q(J,Lt),wt+=$(J,pt,Y,Rt,xt);else if(Lt=T(X),typeof Lt=="function")for(X=Lt.call(X),Lt=0;!(J=X.next()).done;)J=J.value,Rt=Tt+Q(J,Lt++),wt+=$(J,pt,Y,Rt,xt);else if(Rt==="object"){if(typeof X.then=="function")return $(F(X),pt,Y,J,xt);throw pt=String(X),Error("Objects are not valid as a React child (found: "+(pt==="[object Object]"?"object with keys {"+Object.keys(X).join(", ")+"}":pt)+"). If you meant to render a collection of children, use an array instead.")}return wt}function Z(X,pt,Y){if(X==null)return X;var J=[],xt=0;return $(X,J,"","",function(Rt){return pt.call(Y,Rt,xt++)}),J}function ut(X){if(X._status===-1){var pt=X._result,Y=pt();Y.then(function(J){(X._status===0||X._status===-1)&&(X._status=1,X._result=J,Y.status===void 0&&(Y.status="fulfilled",Y.value=J))},function(J){(X._status===0||X._status===-1)&&(X._status=2,X._result=J,Y.status===void 0&&(Y.status="rejected",Y.reason=J))}),X._status===-1&&(X._status=0,X._result=Y)}if(X._status===1)return X._result.default;throw X._result}var yt=typeof reportError=="function"?reportError:function(X){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof X=="object"&&X!==null&&typeof X.message=="string"?String(X.message):String(X),error:X});if(!window.dispatchEvent(pt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",X);return}console.error(X)};function Et(X){var pt=V.T,Y={};Y.types=pt!==null?pt.types:null,V.T=Y;try{var J=X(),xt=V.S;xt!==null&&xt(Y,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(P,yt)}catch(Rt){yt(Rt)}finally{pt!==null&&Y.types!==null&&(pt.types=Y.types),V.T=pt}}function kt(X){var pt=V.T;if(pt!==null){var Y=pt.types;Y===null?pt.types=[X]:Y.indexOf(X)===-1&&Y.push(X)}else Et(kt.bind(null,X))}var se={map:Z,forEach:function(X,pt,Y){Z(X,function(){pt.apply(this,arguments)},Y)},count:function(X){var pt=0;return Z(X,function(){pt++}),pt},toArray:function(X){return Z(X,function(pt){return pt})||[]},only:function(X){if(!G(X))throw Error("React.Children.only expected to receive a single React element child.");return X}};return ve.Activity=g,ve.Children=se,ve.Component=w,ve.Fragment=i,ve.Profiler=l,ve.PureComponent=b,ve.StrictMode=s,ve.Suspense=p,ve.ViewTransition=y,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ve.__COMPILER_RUNTIME={__proto__:null,c:function(X){return V.H.useMemoCache(X)}},ve.addTransitionType=kt,ve.cache=function(X){return function(){return X.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(X,pt,Y){if(X==null)throw Error("The argument must be a React element, but you passed "+X+".");var J=M({},X.props),xt=X.key;if(pt!=null)for(Rt in pt.key!==void 0&&(xt=""+pt.key),pt)!N.call(pt,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&pt.ref===void 0||(J[Rt]=pt[Rt]);var Rt=arguments.length-2;if(Rt===1)J.children=Y;else if(1<Rt){for(var wt=Array(Rt),Tt=0;Tt<Rt;Tt++)wt[Tt]=arguments[Tt+2];J.children=wt}return E(X.type,xt,J)},ve.createContext=function(X){return X={$$typeof:f,_currentValue:X,_currentValue2:X,_threadCount:0,Provider:null,Consumer:null},X.Provider=X,X.Consumer={$$typeof:u,_context:X},X},ve.createElement=function(X,pt,Y){var J,xt={},Rt=null;if(pt!=null)for(J in pt.key!==void 0&&(Rt=""+pt.key),pt)N.call(pt,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(xt[J]=pt[J]);var wt=arguments.length-2;if(wt===1)xt.children=Y;else if(1<wt){for(var Tt=Array(wt),Lt=0;Lt<wt;Lt++)Tt[Lt]=arguments[Lt+2];xt.children=Tt}if(X&&X.defaultProps)for(J in wt=X.defaultProps,wt)xt[J]===void 0&&(xt[J]=wt[J]);return E(X,Rt,xt)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(X){return{$$typeof:d,render:X}},ve.isValidElement=G,ve.lazy=function(X){return{$$typeof:v,_payload:{_status:-1,_result:X},_init:ut}},ve.memo=function(X,pt){return{$$typeof:m,type:X,compare:pt===void 0?null:pt}},ve.startTransition=Et,ve.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ve.use=function(X){return V.H.use(X)},ve.useActionState=function(X,pt,Y){return V.H.useActionState(X,pt,Y)},ve.useCallback=function(X,pt){return V.H.useCallback(X,pt)},ve.useContext=function(X){return V.H.useContext(X)},ve.useDebugValue=function(){},ve.useDeferredValue=function(X,pt){return V.H.useDeferredValue(X,pt)},ve.useEffect=function(X,pt){return V.H.useEffect(X,pt)},ve.useEffectEvent=function(X){return V.H.useEffectEvent(X)},ve.useId=function(){return V.H.useId()},ve.useImperativeHandle=function(X,pt,Y){return V.H.useImperativeHandle(X,pt,Y)},ve.useInsertionEffect=function(X,pt){return V.H.useInsertionEffect(X,pt)},ve.useLayoutEffect=function(X,pt){return V.H.useLayoutEffect(X,pt)},ve.useMemo=function(X,pt){return V.H.useMemo(X,pt)},ve.useOptimistic=function(X,pt){return V.H.useOptimistic(X,pt)},ve.useReducer=function(X,pt,Y){return V.H.useReducer(X,pt,Y)},ve.useRef=function(X){return V.H.useRef(X)},ve.useState=function(X){return V.H.useState(X)},ve.useSyncExternalStore=function(X,pt,Y){return V.H.useSyncExternalStore(X,pt,Y)},ve.useTransition=function(){return V.H.useTransition()},ve.version="19.3.1",ve}var J_;function ym(){return J_||(J_=1,Id.exports=uE()),Id.exports}var ge=ym(),Bd={exports:{}},_l={},Fd={exports:{}},Hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function cE(){return $_||($_=1,(function(o){function t(F,$){var Z=F.length;F.push($);t:for(;0<Z;){var ut=Z-1>>>1,yt=F[ut];if(0<l(yt,$))F[ut]=$,F[Z]=yt,Z=ut;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var $=F[0],Z=F.pop();if(Z!==$){F[0]=Z;t:for(var ut=0,yt=F.length,Et=yt>>>1;ut<Et;){var kt=2*(ut+1)-1,se=F[kt],X=kt+1,pt=F[X];if(0>l(se,Z))X<yt&&0>l(pt,se)?(F[ut]=pt,F[X]=Z,ut=X):(F[ut]=se,F[kt]=Z,ut=kt);else if(X<yt&&0>l(pt,Z))F[ut]=pt,F[X]=Z,ut=X;else break t}}return $}function l(F,$){var Z=F.sortIndex-$.sortIndex;return Z!==0?Z:F.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,g=null,y=3,S=!1,T=!1,A=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function b(F){for(var $=i(m);$!==null;){if($.callback===null)s(m);else if($.startTime<=F)s(m),$.sortIndex=$.expirationTime,t(p,$);else break;$=i(m)}}function I(F){if(A=!1,b(F),!T)if(i(p)!==null)T=!0,z||(z=!0,G());else{var $=i(m);$!==null&&Q(I,$.startTime-F)}}var z=!1,P=-1,V=5,N=-1;function E(){return M?!0:!(o.unstable_now()-N<V)}function U(){if(M=!1,z){var F=o.unstable_now();N=F;var $=!0;try{t:{T=!1,A&&(A=!1,w(P),P=-1),S=!0;var Z=y;try{e:{for(b(F),g=i(p);g!==null&&!(g.expirationTime>F&&E());){var ut=g.callback;if(typeof ut=="function"){g.callback=null,y=g.priorityLevel;var yt=ut(g.expirationTime<=F);if(F=o.unstable_now(),typeof yt=="function"){g.callback=yt,b(F),$=!0;break e}g===i(p)&&s(p),b(F)}else s(p);g=i(p)}if(g!==null)$=!0;else{var Et=i(m);Et!==null&&Q(I,Et.startTime-F),$=!1}}break t}finally{g=null,y=Z,S=!1}$=void 0}}finally{$?G():z=!1}}}var G;if(typeof D=="function")G=function(){D(U)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,nt=q.port2;q.port1.onmessage=U,G=function(){nt.postMessage(null)}}else G=function(){_(U,0)};function Q(F,$){P=_(function(){F(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(F){switch(y){case 1:case 2:case 3:var $=3;break;default:$=y}var Z=y;y=$;try{return F()}finally{y=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=y;y=F;try{return $()}finally{y=Z}},o.unstable_scheduleCallback=function(F,$,Z){var ut=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ut+Z:ut):Z=ut,F){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=Z+yt,F={id:v++,callback:$,priorityLevel:F,startTime:Z,expirationTime:yt,sortIndex:-1},Z>ut?(F.sortIndex=Z,t(m,F),i(p)===null&&F===i(m)&&(A?(w(P),P=-1):A=!0,Q(I,Z-ut))):(F.sortIndex=yt,t(p,F),T||S||(T=!0,z||(z=!0,G()))),F},o.unstable_shouldYield=E,o.unstable_wrapCallback=function(F){var $=y;return function(){var Z=y;y=$;try{return F.apply(this,arguments)}finally{y=Z}}}})(Hd)),Hd}var ty;function fE(){return ty||(ty=1,Fd.exports=cE()),Fd.exports}var Gd={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function hE(){if(ey)return In;ey=1;var o=ym();function t(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function d(v,g,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===f?f:""+S,children:v,containerInfo:g,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.browser=function(v){return{$$typeof:u,_reason:v}},In.createPortal=function(v,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(v,g,null,y)},In.flushSync=function(v){var g=p.T,y=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=g,s.p=y,s.d.f()}},In.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},In.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},In.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var y=g.as,S=m(y,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:A}):y==="script"&&s.d.X(v,{crossOrigin:S,integrity:T,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},In.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},In.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,S=m(y,g.crossOrigin);s.d.L(v,y,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},In.preloadModule=function(v,g){if(typeof v=="string")if(g){var y=m(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},In.requestFormReset=function(v){s.d.r(v)},In.unstable_batchedUpdates=function(v,g){return v(g)},In.useFormState=function(v,g,y){return p.H.useFormState(v,g,y)},In.useFormStatus=function(){return p.H.useHostTransitionStatus()},In.version="19.3.1",In}var ny;function dE(){if(ny)return Gd.exports;ny=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Gd.exports=hE(),Gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function pE(){if(iy)return _l;iy=1;var o=fE(),t=ym(),i=dE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return p(c),e;if(h===r)return p(c),n;h=h.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=h;else{for(var x=!1,C=c.child;C;){if(C===a){x=!0,a=c,r=h;break}if(C===r){x=!0,r=c,a=h;break}C=C.sibling}if(!x){for(C=h.child;C;){if(C===a){x=!0,a=h,r=c;break}if(C===r){x=!0,r=h,a=c;break}C=C.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,r,c,h){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,h)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,r,c,h))return!0;e=e.sibling}return!1}function y(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],a=y(e);return a===null||A(n,e,a.child,{foundSelf:!1}),n}function A(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var _=null,w=null;function D(e,n,a){return e===a?!0:e===n?(_=e,!0):!1}function b(e,n,a){return e===a?(w=e,!1):e===n?(w!==null&&(_=e),!0):!1}function I(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function z(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var h=n;h;h=a(h))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,V=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),nt=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),ut=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),kt=Symbol.for("react.legacy_hidden"),se=Symbol.for("react.memo_cache_sentinel"),X=Symbol.for("react.view_transition"),pt=Symbol.for("react.recoverable"),Y=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var xt=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case q:return"Profiler";case G:return"StrictMode";case $:return"Suspense";case Z:return"SuspenseList";case Et:return"Activity";case X:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case Q:return e.displayName||"Context";case nt:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ut:return n=e.displayName||null,n!==null?n:Rt(e.type)||"Memo";case yt:n=e._payload,e=e._init;try{return Rt(e(n))}catch{}}return null}var wt=Array.isArray,Tt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Lt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},At=[],vt=-1;function mt(e){return{current:e}}function gt(e){0>vt||(e.current=At[vt],At[vt]=null,vt--)}function Ct(e,n){vt++,At[vt]=e.current,e.current=n}var Nt=mt(null),zt=mt(null),oe=mt(null),re=mt(null);function O(e,n){switch(Ct(oe,n),Ct(zt,e),Ct(Nt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?a_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=a_(n),e=s_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}gt(Nt),Ct(Nt,e)}function R(){gt(Nt),gt(zt),gt(oe)}function rt(e){var n=e.memoizedState;n!==null&&(kr._currentValue=n.memoizedState,Ct(re,e)),n=Nt.current;var a=s_(n,e.type);n!==a&&(Ct(zt,e),Ct(Nt,a))}function ft(e){zt.current===e&&(gt(Nt),gt(zt)),re.current===e&&(gt(re),kr._currentValue=B)}var Ut,_t;function Kt(e){if(Ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ut=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+e+_t}var Ft=!1;function $t(e,n){if(!e||Ft)return"";Ft=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(qt){var K=qt}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(qt){K=qt}bt=!1;try{var lt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),bt=!0,new e}finally{bt&&(lt!==void 0?Object.defineProperty(e.prototype,"props",lt):delete e.prototype.props)}}}else{try{throw Error()}catch(qt){K=qt}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(qt){if(qt&&K&&typeof qt.stack=="string")return[qt.stack,K.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=r.DetermineComponentFrameRoot(),x=h[0],C=h[1];if(x&&C){var k=x.split(`
`),et=C.split(`
`);for(c=r=0;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(r===k.length||c===et.length)for(r=k.length-1,c=et.length-1;1<=r&&0<=c&&k[r]!==et[c];)c--;for(;1<=r&&0<=c;r--,c--)if(k[r]!==et[c]){if(r!==1||c!==1)do if(r--,c--,0>c||k[r]!==et[c]){var ct=`
`+k[r].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=r&&0<=c);break}}}finally{Ft=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Kt(a):""}function ee(e,n){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return e.child!==n&&n!==null?Kt("Suspense Fallback"):Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return $t(e.type,!1);case 11:return $t(e.type.render,!1);case 1:return $t(e.type,!0);case 31:return Kt("Activity");case 30:return Kt("ViewTransition");default:return""}}function Ot(e){try{var n="",a=null;do n+=ee(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Wt=Object.prototype.hasOwnProperty,St=o.unstable_scheduleCallback,Yt=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,me=o.unstable_requestPaint,j=o.unstable_now,Ht=o.unstable_getCurrentPriorityLevel,Xt=o.unstable_ImmediatePriority,te=o.unstable_UserBlockingPriority,Pt=o.unstable_NormalPriority,Dt=o.unstable_LowPriority,ae=o.unstable_IdlePriority,_e=o.log,We=o.unstable_setDisableYieldValue,we=null,nn=null;function Sn(e){if(typeof _e=="function"&&We(e),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(we,e)}catch{}}var Bn=Math.clz32?Math.clz32:Zl,ua=Math.log,Ro=Math.LN2;function Zl(e){return e>>>=0,e===0?32:31-(ua(e)/Ro|0)|0}var vs=256,ca=262144,_s=4194304;function yi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ys(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var C=r&134217727;return C!==0?(r=C&~h,r!==0?c=yi(r):(x&=C,x!==0?c=yi(x):a||(a=C&~e,a!==0&&(c=yi(a))))):(C=r&~h,C!==0?c=yi(C):x!==0?c=yi(x):a||(a=r&~e,a!==0&&(c=yi(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Pa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ql(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-Bn(a),c=1<<r;n|=e[r],a&=~c}return n}function cf(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kl(){var e=_s;return _s<<=1,(_s&62914560)===0&&(_s=4194304),e}function Co(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function xs(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ff(e,n,a,r,c,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,k=e.expirationTimes,et=e.hiddenUpdates;for(a=x&~a;0<a;){var ct=31-Bn(a),bt=1<<ct;C[ct]=0,k[ct]=-1;var K=et[ct];if(K!==null)for(et[ct]=null,ct=0;ct<K.length;ct++){var lt=K[ct];lt!==null&&(lt.lane&=-536870913)}a&=~bt}r!==0&&L(e,r,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function L(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Bn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function it(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Bn(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function ht(e,n){var a=n&-n;return a=(a&42)!==0?1:dt(a),(a&(e.suspendedLanes|n))!==0?0:a}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function It(){var e=Lt.p;return e!==0?e:(e=window.event,e===void 0?32:V_(e.type))}function jt(e,n){var a=Lt.p;try{return Lt.p=e,n()}finally{Lt.p=a}}var Qt=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Qt,ne="__reactProps$"+Qt,he="__reactContainer$"+Qt,ue="__reactEvents$"+Qt,be="__reactListeners$"+Qt,He="__reactHandles$"+Qt,tn="__reactResources$"+Qt,Ie="__reactMarker$"+Qt,Oe="__reactLoad$"+Qt;function ce(e){delete e[Vt],delete e[ne],delete e[be],delete e[He]}function Be(e){var n;if(n=e[Vt])return n;for(var a=e.parentNode;a;){if(n=a[he]||a[Vt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=M_(e);e!==null;){if(a=e[Vt])return a;e=M_(e)}return n}e=a,a=e.parentNode}return null}function Ee(e){if(e=e[Vt]||e[he]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Mn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ri(e){var n=e[tn];return n||(n=e[tn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(e){e[Ie]=!0}function za(e){e[Oe]=void 0}var Ke=new Set,qn={};function pn(e,n){on(e,n),on(e+"Capture",n)}function on(e,n){for(qn[e]=n,e=0;e<n.length;e++)Ke.add(n[e])}var Fn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rr={},Yi={};function TS(e){return Wt.call(Yi,e)?!0:Wt.call(rr,e)?!1:Fn.test(e)?Yi[e]=!0:(rr[e]=!0,!1)}var ze=!1;function Xm(){var e=ze;return ze=!1,e}function Jl(e,n,a){if(TS(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function $l(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function fa(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function oi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function bS(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,h=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function hf(e){if(!e._valueTracker){var n=qm(e)?"checked":"value";e._valueTracker=bS(e,n,""+e[n])}}function Ym(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=qm(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var AS=/[\n"\\]/g;function xi(e){return e.replace(AS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function df(e,n,a,r,c,h,x,C){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+oi(n)):e.value!==""+oi(n)&&(e.value=""+oi(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?pf(e,oi(e.value)):pf(e,oi(n)):a!=null?pf(e,oi(a)):r!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+oi(C):e.removeAttribute("name")}function Wm(e,n,a,r,c,h,x,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){hf(e);return}a=a!=null?""+oi(a):"",n=n!=null?""+oi(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=C?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),hf(e)}function pf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function or(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+oi(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function jm(e,n,a){if(n!=null&&(n=""+oi(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+oi(a):""}function Zm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(wt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=oi(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),hf(e)}function lr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var RS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||RS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Km(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",ze=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Qm(e,c,r),ze=!0)}else for(var h in n)n.hasOwnProperty(h)&&Qm(e,h,n[h])}function mf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var CS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tu(e){return wS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var gf=null;function vf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ur=null,cr=null;function Jm(e){var n=Ee(e);if(n&&(e=n.stateNode)){var a=e[ne]||null;t:switch(e=n.stateNode,n.type){case"input":if(df(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[ne]||null;if(!c)throw Error(s(90));df(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ym(r)}break t;case"textarea":jm(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&or(e,!!a.multiple,n,!1)}}}var _f=!1;function $m(e,n,a){if(_f)return e(n,a);_f=!0;try{var r=e(n);return r}finally{if(_f=!1,(ur!==null||cr!==null)&&(tc(),ur&&(n=ur,e=cr,cr=ur=null,Jm(n),e)))for(n=0;n<e.length;n++)Jm(e[n])}}function wo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[ne]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=!1;if(ha)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){yf=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{yf=!1}var Ia=null,xf=null,eu=null;function t0(){if(eu)return eu;var e,n=xf,a=n.length,r,c="value"in Ia?Ia.value:Ia.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===c[h-r];r++);return eu=c.slice(e,1<r?1-r:void 0)}function nu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function iu(){return!0}function e0(){return!1}function Yn(e){function n(a,r,c,h,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?iu:e0,this.isPropagationStopped=e0,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=iu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=iu)},persist:function(){},isPersistent:iu}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=Yn(Ba),No=P({},Ba,{view:0,detail:0}),DS=Yn(No),Sf,Mf,Uo,su=P({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?(Sf=e.screenX-Uo.screenX,Mf=e.screenY-Uo.screenY):Mf=Sf=0,Uo=e),Sf)},movementY:function(e){return"movementY"in e?e.movementY:Mf}}),n0=Yn(su),NS=P({},su,{dataTransfer:0}),US=Yn(NS),LS=P({},No,{relatedTarget:0}),Ef=Yn(LS),OS=P({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),PS=Yn(OS),zS=P({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),IS=Yn(zS),BS=P({},Ba,{data:0}),i0=Yn(BS),FS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=GS[e])?!!n[e]:!1}function Tf(){return VS}var kS=P({},No,{key:function(e){if(e.key){var n=FS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?HS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(e){return e.type==="keypress"?nu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),XS=Yn(kS),qS=P({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),a0=Yn(qS),YS=P({},Ba,{submitter:0}),WS=Yn(YS),jS=P({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),ZS=Yn(jS),QS=P({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),KS=Yn(QS),JS=P({},su,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$S=Yn(JS),tM=P({},Ba,{newState:0,oldState:0,source:0}),eM=Yn(tM),nM=[9,13,27,32],bf=ha&&"CompositionEvent"in window,Lo=null;ha&&"documentMode"in document&&(Lo=document.documentMode);var iM=ha&&"TextEvent"in window&&!Lo,s0=ha&&(!bf||Lo&&8<Lo&&11>=Lo),r0=" ",o0=!1;function l0(e,n){switch(e){case"keyup":return nM.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function aM(e,n){switch(e){case"compositionend":return u0(n);case"keypress":return n.which!==32?null:(o0=!0,r0);case"textInput":return e=n.data,e===r0&&o0?null:e;default:return null}}function sM(e,n){if(fr)return e==="compositionend"||!bf&&l0(e,n)?(e=t0(),eu=xf=Ia=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return s0&&n.locale!=="ko"?null:n.data;default:return null}}var rM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function c0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!rM[e.type]:n==="textarea"}function f0(e,n,a,r){ur?cr?cr.push(r):cr=[r]:ur=r,n=rc(n,"onChange"),0<n.length&&(a=new au("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Oo=null,Po=null;function oM(e){Jv(e,0)}function ru(e){var n=Mn(e);if(Ym(n))return e}function h0(e,n){if(e==="change")return n}var d0=!1;if(ha){var Af;if(ha){var Rf="oninput"in document;if(!Rf){var p0=document.createElement("div");p0.setAttribute("oninput","return;"),Rf=typeof p0.oninput=="function"}Af=Rf}else Af=!1;d0=Af&&(!document.documentMode||9<document.documentMode)}function m0(){Oo&&(Oo.detachEvent("onpropertychange",g0),Po=Oo=null)}function g0(e){if(e.propertyName==="value"&&ru(Po)){var n=[];f0(n,Po,e,vf(e)),$m(oM,n)}}function lM(e,n,a){e==="focusin"?(m0(),Oo=n,Po=a,Oo.attachEvent("onpropertychange",g0)):e==="focusout"&&m0()}function uM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ru(Po)}function cM(e,n){if(e==="click")return ru(n)}function fM(e,n){if(e==="input"||e==="change")return ru(n)}function hM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var li=typeof Object.is=="function"?Object.is:hM;function zo(e,n){if(li(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Wt.call(n,c)||!li(e[c],n[c]))return!1}return!0}function Cf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function v0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _0(e,n){var a=v0(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=v0(a)}}function y0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?y0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function x0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Cf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Cf(e.document)}return n}function wf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var dM=ha&&"documentMode"in document&&11>=document.documentMode,hr=null,Df=null,Io=null,Nf=!1;function S0(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nf||hr==null||hr!==Cf(r)||(r=hr,"selectionStart"in r&&wf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&zo(Io,r)||(Io=r,r=rc(Df,"onSelect"),0<r.length&&(n=new au("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=hr)))}function Ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var dr={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},Uf={},M0={};ha&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Ms(e){if(Uf[e])return Uf[e];if(!dr[e])return e;var n=dr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in M0)return Uf[e]=n[a];return e}var E0=Ms("animationend"),T0=Ms("animationiteration"),b0=Ms("animationstart"),pM=Ms("transitionrun"),mM=Ms("transitionstart"),gM=Ms("transitioncancel"),A0=Ms("transitionend"),R0=new Map,Lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lf.push("scrollEnd");function Ui(e,n){R0.set(e,n),pn(n,[e])}var vM=0;function da(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=zi.identifierPrefix;var a=vM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function C0(e){if(e==null||typeof e=="string")return e;var n=null,a=Lr;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function pa(e,n){return e=C0(e),n=C0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var ou=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],pr=0,Of=0;function lu(){for(var e=pr,n=Of=pr=0;n<e;){var a=Si[n];Si[n++]=null;var r=Si[n];Si[n++]=null;var c=Si[n];Si[n++]=null;var h=Si[n];if(Si[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}h!==0&&w0(a,c,h)}}function uu(e,n,a,r){Si[pr++]=e,Si[pr++]=n,Si[pr++]=a,Si[pr++]=r,Of|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Pf(e,n,a,r){return uu(e,n,a,r),cu(e)}function Es(e,n){return uu(e,null,null,n),cu(e)}function w0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,r=h.alternate,r!==null&&(r.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-Bn(a),e=h.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),h):null}function cu(e){if(50<sl)throw sl=0,$u=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var mr={};function _M(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,r){return new _M(e,n,a,r)}function zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function D0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fu(e,n,a,r,c,h){var x=0;if(r=e,typeof r=="function")zf(r)&&(x=1);else if(typeof r=="string")x=Y1(e,a,Nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case Et:return e=ti(31,a,n,c),e.elementType=Et,e.lanes=h,e;case U:return Ts(a.children,c,h,n);case G:x=8,c|=24;break;case q:return e=ti(12,a,n,c|2),e.elementType=q,e.lanes=h,e;case $:return e=ti(13,a,n,c),e.elementType=$,e.lanes=h,e;case Z:return e=ti(19,a,n,c),e.elementType=Z,e.lanes=h,e;case kt:case X:return e=c|32,e=ti(30,a,n,e),e.elementType=X,e.lanes=h,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Q:x=10;break t;case nt:x=9;break t;case F:x=11;break t;case ut:x=14;break t;case yt:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ti(x,a,n,c),n.elementType=e,n.type=r,n.lanes=h,n}function Ts(e,n,a,r){return e=ti(7,e,r,n),e.lanes=a,e}function If(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function N0(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Bf(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var U0=new WeakMap;function Mi(e,n){if(typeof e=="object"&&e!==null){var a=U0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ot(n)},U0.set(e,n),n)}return{value:e,source:n,stack:Ot(n)}}var gr=[],vr=0,hu=null,Bo=0,Ei=[],Ti=0,Fa=null,ji=1,Zi="";function ga(e,n){gr[vr++]=Bo,gr[vr++]=hu,hu=e,Bo=n}function L0(e,n,a){Ei[Ti++]=ji,Ei[Ti++]=Zi,Ei[Ti++]=Fa,Fa=e;var r=ji;e=Zi;var c=32-Bn(r)-1;r&=~(1<<c),a+=1;var h=32-Bn(n)+c;if(30<h){var x=c-c%5;h=(r&(1<<x)-1).toString(32),r>>=x,c-=x,ji=1<<32-Bn(n)+c|a<<c|r,Zi=h+e}else ji=1<<h|a<<c|r,Zi=e}function du(e){e.return!==null&&(ga(e,1),L0(e,1,0))}function Ff(e){for(;e===hu;)hu=gr[--vr],gr[vr]=null,Bo=gr[--vr],gr[vr]=null;for(;e===Fa;)Fa=Ei[--Ti],Ei[Ti]=null,Zi=Ei[--Ti],Ei[Ti]=null,ji=Ei[--Ti],Ei[Ti]=null}function O0(e,n){Ei[Ti++]=ji,Ei[Ti++]=Zi,Ei[Ti++]=Fa,ji=n.id,Zi=n.overflow,Fa=e}var Cn=null,Je=null,Te=!1,Ha=null,bi=!1,Hf=Error(s(519));function Ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fo(Mi(n,e)),Hf}function P0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Vt]=e,n[ne]=r,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<ol.length;a++)Ce(ol[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),Wm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),Zm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||n_(n.textContent,a)?(r.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),r.onScroll!=null&&Ce("scroll",n),r.onScrollEnd!=null&&Ce("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ga(e,!0)}function pu(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Cn=Cn.return}}function _r(e){if(e!==Cn)return!1;if(!Te)return pu(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gd(e.type,e.memoizedProps)),a=!a),a&&Je&&Ga(e),pu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=S_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=S_(e)}else n===27?(n=Je,is(e.type)?(e=bd,bd=null,Je=e):Je=n):Je=Cn?Ri(e.stateNode.nextSibling):null;return!0}function bs(){Je=Cn=null,Te=!1}function Gf(){var e=Ha;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),Ha=null),e}function Fo(e){Ha===null?Ha=[e]:Ha.push(e)}var Vf=mt(null),As=null,va=null;function Va(e,n,a){Ct(Vf,n._currentValue),n._currentValue=a}function _a(e){e._currentValue=Vf.current,gt(Vf)}function mu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function kf(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var x=c.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=c;for(var k=0;k<n.length;k++)if(C.context===n[k]){h.lanes|=a,C=h.alternate,C!==null&&(C.lanes|=a),mu(h.return,a,e),r||(x=null);break t}h=C.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),mu(x,a,e),x=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),mu(c.return,a,e),x=c.child,x=x!==null?x.sibling:null):x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Rs(e,n,a,r){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var C=c.type;li(c.pendingProps.value,x.value)||(e!==null?e.push(C):e=[C])}}else if(c===re.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(kr):e=[kr])}c=c.return}return e!==null&&kf(n,e,a,r),n.flags|=262144,e!==null}function gu(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cs(e){As=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return z0(As,e)}function vu(e,n){return As===null&&Cs(e),z0(e,n)}function z0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},va===null){if(e===null)throw Error(s(308));va=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else va=va.next=n;return a}var yM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},xM=o.unstable_scheduleCallback,SM=o.unstable_NormalPriority,mn={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xf(){return{controller:new yM,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&xM(SM,function(){e.controller.abort()})}function I0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Go=null;function MM(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Vo=null,qf=0,ws=0,yr=null;function EM(e,n){if(Vo===null){var a=Vo=[];qf=0,ws=od(),yr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return qf++,n.then(B0,B0),n}function B0(){if(--qf===0&&(Go=null,Vo!==null)){yr!==null&&(yr.status="fulfilled");var e=Vo;Vo=null,ws=0,yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function TM(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var F0=Tt.S;Tt.S=function(e,n){if(Nv=j(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&EM(e,n),Go!==null)for(var a=Ir;a!==null;)I0(a,Go),a=a.next;if(a=e.types,a!==null){for(var r=Ir;r!==null;)I0(r,a),r=r.next;if(ws!==0){r=Go,r===null&&(r=Go=[]);for(var c=0;c<a.length;c++){var h=a[c];r.indexOf(h)===-1&&r.push(h)}}}F0!==null&&F0(e,n)};var Ds=mt(null);function Yf(){var e=Ds.current;return e!==null?e:Qe.pooledCache}function _u(e,n){n===null?Ct(Ds,Ds.current):Ct(Ds,n.pool)}function H0(){var e=Yf();return e===null?null:{parent:mn._currentValue,pool:e}}var xr=Error(s(460)),Wf=Error(s(474)),yu=Error(s(542)),xu={then:function(){}};function G0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function V0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,X0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,X0(e),e}throw Us=n,xr}}function Ns(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,xr):a}}var Us=null;function k0(){if(Us===null)throw Error(s(459));var e=Us;return Us=null,e}function X0(e){if(e===xr||e===yu)throw Error(s(483))}var Sr=null,ko=0;function Su(e){var n=ko;return ko+=1,Sr===null&&(Sr=[]),V0(Sr,e,n)}function ka(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Mu(e,n){throw n.$$typeof===V?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function q0(e){function n(tt,W){if(e){var ot=tt.deletions;ot===null?(tt.deletions=[W],tt.flags|=16):ot.push(W)}}function a(tt,W){if(!e)return null;for(;W!==null;)n(tt,W),W=W.sibling;return null}function r(tt){for(var W=new Map;tt!==null;)tt.key===null?W.set(tt.index,tt):W.set(tt.key,tt),tt=tt.sibling;return W}function c(tt,W){return tt=ma(tt,W),tt.index=0,tt.sibling=null,tt}function h(tt,W,ot){return tt.index=ot,e?(ot=tt.alternate,ot!==null?(ot=ot.index,ot<W?(tt.flags|=2,W):ot):(tt.flags|=134217730,W)):(tt.flags|=1048576,W)}function x(tt){return e&&tt.alternate===null&&(tt.flags|=134217730),tt}function C(tt,W,ot,Mt){return W===null||W.tag!==6?(W=If(ot,tt.mode,Mt),W.return=tt,W):(W=c(W,ot),W.return=tt,W)}function k(tt,W,ot,Mt){var Jt=ot.type;return Jt===U?(tt=ct(tt,W,ot.props.children,Mt,ot.key),ka(tt,ot),tt):W!==null&&(W.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===yt&&Ns(Jt)===W.type)?(W=c(W,ot.props),ka(W,ot),W.return=tt,W):(W=fu(ot.type,ot.key,ot.props,null,tt.mode,Mt),ka(W,ot),W.return=tt,W)}function et(tt,W,ot,Mt){return W===null||W.tag!==4||W.stateNode.containerInfo!==ot.containerInfo||W.stateNode.implementation!==ot.implementation?(W=Bf(ot,tt.mode,Mt),W.return=tt,W):(W=c(W,ot.children||[]),W.return=tt,W)}function ct(tt,W,ot,Mt,Jt){return W===null||W.tag!==7?(W=Ts(ot,tt.mode,Mt,Jt),W.return=tt,W):(W=c(W,ot),W.return=tt,W)}function bt(tt,W,ot){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=If(""+W,tt.mode,ot),W.return=tt,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return ot=fu(W.type,W.key,W.props,null,tt.mode,ot),ka(ot,W),ot.return=tt,ot;case E:return W=Bf(W,tt.mode,ot),W.return=tt,W;case yt:return W=Ns(W),bt(tt,W,ot)}if(wt(W)||J(W))return W=Ts(W,tt.mode,ot,null),W.return=tt,W;if(typeof W.then=="function")return bt(tt,Su(W),ot);if(W.$$typeof===Q)return bt(tt,vu(tt,W),ot);Mu(tt,W)}return null}function K(tt,W,ot,Mt){var Jt=W!==null?W.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return Jt!==null?null:C(tt,W,""+ot,Mt);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case N:return ot.key===Jt?k(tt,W,ot,Mt):null;case E:return ot.key===Jt?et(tt,W,ot,Mt):null;case yt:return ot=Ns(ot),K(tt,W,ot,Mt)}if(wt(ot)||J(ot))return Jt!==null?null:ct(tt,W,ot,Mt,null);if(typeof ot.then=="function")return K(tt,W,Su(ot),Mt);if(ot.$$typeof===Q)return K(tt,W,vu(tt,ot),Mt);Mu(tt,ot)}return null}function lt(tt,W,ot,Mt,Jt){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return tt=tt.get(ot)||null,C(W,tt,""+Mt,Jt);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case N:return tt=tt.get(Mt.key===null?ot:Mt.key)||null,k(W,tt,Mt,Jt);case E:return tt=tt.get(Mt.key===null?ot:Mt.key)||null,et(W,tt,Mt,Jt);case yt:return Mt=Ns(Mt),lt(tt,W,ot,Mt,Jt)}if(wt(Mt)||J(Mt))return tt=tt.get(ot)||null,ct(W,tt,Mt,Jt,null);if(typeof Mt.then=="function")return lt(tt,W,ot,Su(Mt),Jt);if(Mt.$$typeof===Q)return lt(tt,W,ot,vu(W,Mt),Jt);Mu(W,Mt)}return null}function qt(tt,W,ot,Mt){for(var Jt=null,Ne=null,le=W,pe=W=0,_n=null;le!==null&&pe<ot.length;pe++){le.index>pe?(_n=le,le=null):_n=le.sibling;var Ue=K(tt,le,ot[pe],Mt);if(Ue===null){le===null&&(le=_n);break}e&&le&&Ue.alternate===null&&n(tt,le),W=h(Ue,W,pe),Ne===null?Jt=Ue:Ne.sibling=Ue,Ne=Ue,le=_n}if(pe===ot.length)return a(tt,le),Te&&ga(tt,pe),Jt;if(le===null){for(;pe<ot.length;pe++)le=bt(tt,ot[pe],Mt),le!==null&&(W=h(le,W,pe),Ne===null?Jt=le:Ne.sibling=le,Ne=le);return Te&&ga(tt,pe),Jt}for(le=r(le);pe<ot.length;pe++)_n=lt(le,tt,pe,ot[pe],Mt),_n!==null&&(e&&(Ue=_n.alternate,Ue!==null&&le.delete(Ue.key===null?pe:Ue.key)),W=h(_n,W,pe),Ne===null?Jt=_n:Ne.sibling=_n,Ne=_n);return e&&le.forEach(function(ls){return n(tt,ls)}),Te&&ga(tt,pe),Jt}function ie(tt,W,ot,Mt){if(ot==null)throw Error(s(151));for(var Jt=null,Ne=null,le=W,pe=W=0,_n=null,Ue=ot.next();le!==null&&!Ue.done;pe++,Ue=ot.next()){le.index>pe?(_n=le,le=null):_n=le.sibling;var ls=K(tt,le,Ue.value,Mt);if(ls===null){le===null&&(le=_n);break}e&&le&&ls.alternate===null&&n(tt,le),W=h(ls,W,pe),Ne===null?Jt=ls:Ne.sibling=ls,Ne=ls,le=_n}if(Ue.done)return a(tt,le),Te&&ga(tt,pe),Jt;if(le===null){for(;!Ue.done;pe++,Ue=ot.next())Ue=bt(tt,Ue.value,Mt),Ue!==null&&(W=h(Ue,W,pe),Ne===null?Jt=Ue:Ne.sibling=Ue,Ne=Ue);return Te&&ga(tt,pe),Jt}for(le=r(le);!Ue.done;pe++,Ue=ot.next())Ue=lt(le,tt,pe,Ue.value,Mt),Ue!==null&&(e&&(_n=Ue.alternate,_n!==null&&le.delete(_n.key===null?pe:_n.key)),W=h(Ue,W,pe),Ne===null?Jt=Ue:Ne.sibling=Ue,Ne=Ue);return e&&le.forEach(function(aE){return n(tt,aE)}),Te&&ga(tt,pe),Jt}function Se(tt,W,ot,Mt){if(typeof ot=="object"&&ot!==null&&ot.type===U&&ot.key===null&&ot.props.ref===void 0&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case N:t:{for(var Jt=ot.key;W!==null;){if(W.key===Jt){if(Jt=ot.type,Jt===U){if(W.tag===7){a(tt,W.sibling),Mt=c(W,ot.props.children),ka(Mt,ot),Mt.return=tt,tt=Mt;break t}}else if(W.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===yt&&Ns(Jt)===W.type){a(tt,W.sibling),Mt=c(W,ot.props),ka(Mt,ot),Mt.return=tt,tt=Mt;break t}a(tt,W);break}else n(tt,W);W=W.sibling}ot.type===U?(Mt=Ts(ot.props.children,tt.mode,Mt,ot.key),ka(Mt,ot),Mt.return=tt,tt=Mt):(Mt=fu(ot.type,ot.key,ot.props,null,tt.mode,Mt),ka(Mt,ot),Mt.return=tt,tt=Mt)}return x(tt);case E:t:{for(Jt=ot.key;W!==null;){if(W.key===Jt)if(W.tag===4&&W.stateNode.containerInfo===ot.containerInfo&&W.stateNode.implementation===ot.implementation){a(tt,W.sibling),Mt=c(W,ot.children||[]),Mt.return=tt,tt=Mt;break t}else{a(tt,W);break}else n(tt,W);W=W.sibling}Mt=Bf(ot,tt.mode,Mt),Mt.return=tt,tt=Mt}return x(tt);case yt:return ot=Ns(ot),Se(tt,W,ot,Mt)}if(wt(ot))return qt(tt,W,ot,Mt);if(J(ot)){if(Jt=J(ot),typeof Jt!="function")throw Error(s(150));return ot=Jt.call(ot),ie(tt,W,ot,Mt)}if(typeof ot.then=="function")return Se(tt,W,Su(ot),Mt);if(ot.$$typeof===Q)return Se(tt,W,vu(tt,ot),Mt);Mu(tt,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,W!==null&&W.tag===6?(a(tt,W.sibling),Mt=c(W,ot),Mt.return=tt,tt=Mt):(a(tt,W),Mt=If(ot,tt.mode,Mt),Mt.return=tt,tt=Mt),x(tt)):a(tt,W)}return function(tt,W,ot,Mt){try{ko=0;var Jt=Se(tt,W,ot,Mt);return Sr=null,Jt}catch(le){if(le===xr||le===yu)throw le;var Ne=ti(29,le,null,tt.mode);return Ne.lanes=Mt,Ne.return=tt,Ne}finally{}}}var Ls=q0(!0),Y0=q0(!1),Xa=!1;function jf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=cu(e),w0(e,null,a),n}return uu(e,r,n,a),cu(e)}function Xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,it(e,a)}}function Qf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Kf=!1;function qo(){if(Kf){var e=yr;if(e!==null)throw e}}function Yo(e,n,a,r){Kf=!1;var c=e.updateQueue;Xa=!1;var h=c.firstBaseUpdate,x=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var k=C,et=k.next;k.next=null,x===null?h=et:x.next=et,x=k;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,C=ct.lastBaseUpdate,C!==x&&(C===null?ct.firstBaseUpdate=et:C.next=et,ct.lastBaseUpdate=k))}if(h!==null){var bt=c.baseState;x=0,ct=et=k=null,C=h;do{var K=C.lane&-536870913,lt=K!==C.lane;if(lt?(De&K)===K:(r&K)===K){K!==0&&K===ws&&(Kf=!0),ct!==null&&(ct=ct.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var qt=e,ie=C;K=n;var Se=a;switch(ie.tag){case 1:if(qt=ie.payload,typeof qt=="function"){bt=qt.call(Se,bt,K);break t}bt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=ie.payload,K=typeof qt=="function"?qt.call(Se,bt,K):qt,K==null)break t;bt=P({},bt,K);break t;case 2:Xa=!0}}K=C.callback,K!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[K]:lt.push(K))}else lt={lane:K,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ct===null?(et=ct=lt,k=bt):ct=ct.next=lt,x|=K;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;lt=C,C=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ct===null&&(k=bt),c.baseState=k,c.firstBaseUpdate=et,c.lastBaseUpdate=ct,h===null&&(c.shared.lanes=0),$a|=x,e.lanes=x,e.memoizedState=bt}}function W0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function j0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)W0(a[e],n)}var Wa=mt(null),Eu=mt(0);function Z0(e,n){e=Ea,Ct(Eu,e),Ct(Wa,n),Ea=e|n.baseLanes}function Jf(){Ct(Eu,Ea),Ct(Wa,Wa.current)}function $f(){Ea=Eu.current,gt(Wa),gt(Eu)}var Ln=mt(null),Hn=null;function ja(e){var n=e.alternate;Ct(On,On.current&1),Ct(Ln,e),Hn===null&&(n===null||Wa.current!==null||n.memoizedState!==null)&&(Hn=e)}function th(e){Ct(On,On.current),Ct(Ln,e),Hn===null&&(Hn=e)}function Q0(e){e.tag===22?(Ct(On,On.current),Ct(Ln,e),Hn===null&&(Hn=e)):Za()}function Za(){Ct(On,On.current),Ct(Ln,Ln.current)}function ui(e){gt(Ln),Hn===e&&(Hn=null),gt(On)}var On=mt(0);function Wo(e,n){Ct(Ln,Ln.current),Ct(On,n)}function eh(e){gt(On),gt(Ln),Hn===e&&(Hn=null)}function Tu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ed(a)||Td(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,xe=null,je=null,gn=null,bu=!1,Mr=!1,Os=!1,Au=0,jo=0,Er=null,bM=0;function ln(){throw Error(s(321))}function nh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!li(e[a],n[a]))return!1;return!0}function ih(e,n,a,r,c,h){return ya=h,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Tt.H=e===null||e.memoizedState===null?Lg:Og,Os=!1,h=a(r,c),Os=!1,Mr&&(h=J0(n,a,r,c)),K0(e),h}function K0(e){Tt.H=Lu;var n=je!==null&&je.next!==null;if(ya=0,gn=je=xe=null,bu=!1,jo=0,Er=null,n)throw Error(s(300));e===null||vn||(e=e.dependencies,e!==null&&gu(e)&&(vn=!0))}function J0(e,n,a,r){xe=e;var c=0;do{if(Mr&&(Er=null),jo=0,Mr=!1,25<=c)throw Error(s(301));if(c+=1,gn=je=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}Tt.H=LM,h=n(a,r)}while(Mr);return h}function AM(){var e=Tt.H,n=e.useState()[0];return n=typeof n.then=="function"?Zo(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(xe.flags|=1024),n}function ah(){var e=Au!==0;return Au=0,e}function sh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function rh(e){if(bu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bu=!1}ya=0,gn=je=xe=null,Mr=!1,jo=Au=0,Er=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?xe.memoizedState=gn=e:gn=gn.next=e,gn}function hn(){if(je===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=gn===null?xe.memoizedState:gn.next;if(n!==null)gn=n,je=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},gn===null?xe.memoizedState=gn=e:gn=gn.next=e}return gn}function Ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(e){var n=jo;return jo+=1,Er===null&&(Er=[]),e=V0(Er,e,n),n=xe,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,Tt.H=n===null||n.memoizedState===null?Lg:Og),e}function Cu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zo(e);if(e.$$typeof===pt)return;if(e.$$typeof===Q)return Un(e)}throw Error(s(438,String(e)))}function oh(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=xe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ru(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=se;return n.index++,a}function xa(e,n){return typeof n=="function"?n(e):n}function wu(e){var n=hn();return lh(n,je,e)}function lh(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,h=r.pending;if(h!==null){if(c!==null){var x=c.next;c.next=h.next,h.next=x}n.baseQueue=c=h,r.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var C=x=null,k=null,et=n,ct=!1;do{var bt=et.lane&-536870913;if(bt!==et.lane?(De&bt)===bt:(ya&bt)===bt){var K=et.revertLane;if(K===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),bt===ws&&(ct=!0);else if((ya&K)===K){et=et.next,K===ws&&(ct=!0);continue}else bt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},k===null?(C=k=bt,x=h):k=k.next=bt,xe.lanes|=K,$a|=K;bt=et.action,Os&&a(h,bt),h=et.hasEagerState?et.eagerState:a(h,bt)}else K={lane:bt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},k===null?(C=k=K,x=h):k=k.next=K,xe.lanes|=bt,$a|=bt;et=et.next}while(et!==null&&et!==n);if(k===null?x=h:k.next=C,!li(h,e.memoizedState)&&(vn=!0,ct&&(a=yr,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=k,r.lastRenderedState=h}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function uh(e){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do h=e(h,x.action),x=x.next;while(x!==c);li(h,n.memoizedState)||(vn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,r]}function $0(e,n,a){var r=xe,c=hn(),h=Te;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!li((je||c).memoizedState,a);if(x&&(c.memoizedState=a,vn=!0),c=c.queue,hh(ng.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||x||gn!==null&&(gn.memoizedState.tag&1)!==0,Tr(e?9:8,{destroy:void 0},eg.bind(null,r,c,a,n),null),e){if(r.flags|=2048,Qe===null)throw Error(s(349));h||(ya&127)!==0||tg(r,n,a)}return a}function tg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Ru(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function eg(e,n,a,r){n.value=a,n.getSnapshot=r,ig(n)&&ag(e)}function ng(e,n,a){return a(function(){ig(n)&&ag(e)})}function ig(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!li(e,a)}catch{return!0}}function ag(e){var n=Es(e,2);n!==null&&ai(n,e,2)}function ch(e){var n=Wn();if(typeof e=="function"){var a=e;if(e=a(),Os){Sn(!0);try{a()}finally{Sn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},n}function sg(e,n,a,r){return e.baseState=a,lh(e,je,typeof r=="function"?r:xa)}function RM(e,n,a,r,c){if(Uu(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};Tt.T!==null?a(!0):h.isTransition=!1,r(h),a=n.pending,a===null?(h.next=n.pending=h,rg(n,h)):(h.next=a.next,n.pending=a.next=h)}}function rg(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var h=Tt.T,x={};x.types=h!==null?h.types:null,Tt.T=x;try{var C=a(c,r),k=Tt.S;k!==null&&k(x,C),og(e,n,C)}catch(et){fh(e,n,et)}finally{h!==null&&x.types!==null&&(h.types=x.types),Tt.T=h}}else try{h=a(c,r),og(e,n,h)}catch(et){fh(e,n,et)}}function og(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){lg(e,n,r)},function(r){return fh(e,n,r)}):lg(e,n,a)}function lg(e,n,a){n.status="fulfilled",n.value=a,ug(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,rg(e,a)))}function fh(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,ug(n),n=n.next;while(n!==r)}e.action=null}function ug(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function cg(e,n){return n}function fg(e,n){if(Te){var a=Qe.formState;if(a!==null){t:{var r=xe;if(Te){if(Je){e:{for(var c=Je,h=bi;c.nodeType!==8;){if(!h){c=null;break e}if(c=Ri(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Je=Ri(c.nextSibling),r=c.data==="F!";break t}}Ga(r)}r=!1}r&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cg,lastRenderedState:n},a.queue=r,a=Dg.bind(null,xe,r),r.dispatch=a,r=ch(!1),h=vh.bind(null,xe,!1,r.queue),r=Wn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=RM.bind(null,xe,c,h,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function hg(e){var n=hn();return dg(n,je,e)}function dg(e,n,a){if(n=lh(e,n,cg)[0],e=wu(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Zo(n)}catch(x){throw x===xr?yu:x}else r=n;n=hn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Tr(9,{destroy:void 0},CM.bind(null,c,a),null)),[r,h,e]}function CM(e,n){e.action=n}function pg(e){var n=hn(),a=je;if(a!==null)return dg(n,a,e);hn(),n=n.memoizedState,a=hn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Tr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Ru(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function mg(){return hn().memoizedState}function Du(e,n,a,r){var c=Wn();xe.flags|=e,c.memoizedState=Tr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Nu(e,n,a,r){var c=hn();r=r===void 0?null:r;var h=c.memoizedState.inst;je!==null&&r!==null&&nh(r,je.memoizedState.deps)?c.memoizedState=Tr(n,h,a,r):(xe.flags|=e,c.memoizedState=Tr(1|n,h,a,r))}function gg(e,n){Du(8390656,8,e,n)}function hh(e,n){Nu(2048,8,e,n)}function wM(e){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=Ru(),xe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function vg(e){var n=hn().memoizedState;return wM({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function _g(e,n){return Nu(4,2,e,n)}function yg(e,n){return Nu(4,4,e,n)}function xg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Sg(e,n,a){a=a!=null?a.concat([e]):null,Nu(4,4,xg.bind(null,n,e),a)}function dh(){}function Mg(e,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&nh(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Eg(e,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&nh(n,r[1]))return r[0];if(r=e(),Os){Sn(!0);try{e()}finally{Sn(!1)}}return a.memoizedState=[r,n],r}function ph(e,n,a){return a===void 0||(ya&1073741824)!==0&&(De&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Lv(),xe.lanes|=e,$a|=e,a)}function Tg(e,n,a,r){return li(a,n)?a:Wa.current!==null?(e=ph(e,a,r),li(e,n)||(vn=!0),e):(ya&106)===0||(ya&1073741824)!==0&&(De&261930)===0?(vn=!0,e.memoizedState=a):(e=Lv(),xe.lanes|=e,$a|=e,n)}function bg(e,n,a,r,c){var h=Lt.p;Lt.p=h!==0&&8>h?h:8;var x=Tt.T,C={};C.types=x!==null?x.types:null,Tt.T=C,vh(e,!1,n,a);try{var k=c(),et=Tt.S;if(et!==null&&et(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var ct=TM(k,r);Qo(e,n,ct,di(e))}else Qo(e,n,r,di(e))}catch(bt){Qo(e,n,{then:function(){},status:"rejected",reason:bt},di())}finally{Lt.p=h,x!==null&&C.types!==null&&(x.types=C.types),Tt.T=x}}function DM(){}function mh(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Ag(e).queue;bg(e,c,n,B,a===null?DM:function(){return Rg(e),a(r)})}function Ag(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:B},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rg(e){var n=Ag(e);n.next===null&&(n=e.alternate.memoizedState),Qo(e,n.next.queue,{},di())}function gh(){return Un(kr)}function Cg(){return hn().memoizedState}function wg(){return hn().memoizedState}function NM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();e=qa(a);var r=Ya(n,e,a);r!==null&&(ai(r,n,a),Xo(r,n,a)),n={cache:Xf()},e.payload=n;return}n=n.return}}function UM(e,n,a){var r=di();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Uu(e)?Ng(n,a):(a=Pf(e,n,a,r),a!==null&&(ai(a,e,r),Ug(a,n,r)))}function Dg(e,n,a){var r=di();Qo(e,n,a,r)}function Qo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Uu(e))Ng(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,C=h(x,a);if(c.hasEagerState=!0,c.eagerState=C,li(C,x))return uu(e,n,c,0),Qe===null&&lu(),!1}catch{}finally{}if(a=Pf(e,n,c,r),a!==null)return ai(a,e,r),Ug(a,n,r),!0}return!1}function vh(e,n,a,r){if(r={lane:2,revertLane:od(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Uu(e)){if(n)throw Error(s(479))}else n=Pf(e,a,r,2),n!==null&&ai(n,e,2)}function Uu(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function Ng(e,n){Mr=bu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Ug(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,it(e,a)}}var Lu={readContext:Un,use:Cu,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},Lg={readContext:Un,use:Cu,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:gg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Du(4194308,4,xg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Du(4194308,4,e,n)},useInsertionEffect:function(e,n){Du(4,2,e,n)},useMemo:function(e,n){var a=Wn();n=n===void 0?null:n;var r=e();if(Os){Sn(!0);try{e()}finally{Sn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Wn();if(a!==void 0){var c=a(n);if(Os){Sn(!0);try{a(n)}finally{Sn(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=UM.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=ch(e);var n=e.queue,a=Dg.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:dh,useDeferredValue:function(e,n){var a=Wn();return ph(a,e,n)},useTransition:function(){var e=ch(!1);return e=bg.bind(null,xe,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=xe,c=Wn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(De&127)!==0||tg(r,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,gg(ng.bind(null,r,h,e),[e]),r.flags|=2048,Tr(9,{destroy:void 0},eg.bind(null,r,h,a,n),null),a},useId:function(){var e=Wn(),n=Qe.identifierPrefix;if(Te){var a=Zi,r=ji;a=(r&~(1<<32-Bn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Au++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=bM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:gh,useFormState:fg,useActionState:fg,useOptimistic:function(e){var n=Wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vh.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:oh,useCacheRefresh:function(){return Wn().memoizedState=NM.bind(null,xe)},useEffectEvent:function(e){var n=Wn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Og={readContext:Un,use:Cu,useCallback:Mg,useContext:Un,useEffect:hh,useImperativeHandle:Sg,useInsertionEffect:_g,useLayoutEffect:yg,useMemo:Eg,useReducer:wu,useRef:mg,useState:function(){return wu(xa)},useDebugValue:dh,useDeferredValue:function(e,n){var a=hn();return Tg(a,je.memoizedState,e,n)},useTransition:function(){var e=wu(xa)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Zo(e),n]},useSyncExternalStore:$0,useId:Cg,useHostTransitionStatus:gh,useFormState:hg,useActionState:hg,useOptimistic:function(e,n){var a=hn();return sg(a,je,e,n)},useMemoCache:oh,useCacheRefresh:wg,useEffectEvent:vg},LM={readContext:Un,use:Cu,useCallback:Mg,useContext:Un,useEffect:hh,useImperativeHandle:Sg,useInsertionEffect:_g,useLayoutEffect:yg,useMemo:Eg,useReducer:uh,useRef:mg,useState:function(){return uh(xa)},useDebugValue:dh,useDeferredValue:function(e,n){var a=hn();return je===null?ph(a,e,n):Tg(a,je.memoizedState,e,n)},useTransition:function(){var e=uh(xa)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Zo(e),n]},useSyncExternalStore:$0,useId:Cg,useHostTransitionStatus:gh,useFormState:pg,useActionState:pg,useOptimistic:function(e,n){var a=hn();return je!==null?sg(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:oh,useCacheRefresh:wg,useEffectEvent:vg};function _h(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yh={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=di(),c=qa(r);c.payload=n,a!=null&&(c.callback=a),n=Ya(e,c,r),n!==null&&(ai(n,e,r),Xo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=di(),c=qa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ya(e,c,r),n!==null&&(ai(n,e,r),Xo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=di(),r=qa(a);r.tag=2,n!=null&&(r.callback=n),n=Ya(e,r,a),n!==null&&(ai(n,e,a),Xo(n,e,a))}};function Pg(e,n,a,r,c,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,h,x):n.prototype&&n.prototype.isPureReactComponent?!zo(a,r)||!zo(c,h):!0}function zg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&yh.enqueueReplaceState(n,n.state,null)}function Ps(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Ig(e){ou(e)}function Bg(e){console.error(e)}function Fg(e){ou(e)}function Ou(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Hg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function xh(e,n,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ou(e,n)},a}function Gg(e){return e=qa(e),e.tag=3,e}function Vg(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=r.value;e.payload=function(){return c(h)},e.callback=function(){Hg(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Hg(n,a,r),typeof c!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})})}function OM(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Rs(n,a,c,!0),a=Ln.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Hn===null?ec():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===xu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),ad(e,r,c)),!1;case 22:return a.flags|=65536,r===xu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),ad(e,r,c)),!1}throw Error(s(435,a.tag))}return ad(e,r,c),ec(),!1}if(Te)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Hf&&(e=Error(s(422),{cause:r}),Fo(Mi(e,a)))):(r!==Hf&&(n=Error(s(423),{cause:r}),Fo(Mi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Mi(r,a),c=xh(e.stateNode,r,c),Qf(e,c),un!==4&&(un=2)),!1;var h=Error(s(520),{cause:r});if(h=Mi(h,a),al===null?al=[h]:al.push(h),un!==4&&(un=2),n===null)return!0;r=Mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=xh(a.stateNode,r,e),Qf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ts===null||!ts.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Gg(c),Vg(c,e,a,r),Qf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Sh=Error(s(461)),vn=!1;function En(e,n,a,r){n.child=e===null?Y0(n,null,a,r):Ls(n,e.child,a,r)}function kg(e,n,a,r,c){a=a.render;var h=n.ref;if("ref"in r){var x={};for(var C in r)C!=="ref"&&(x[C]=r[C])}else x=r;return Cs(n),r=ih(e,n,a,x,h,c),C=ah(),e!==null&&!vn?(sh(e,n,c),Sa(e,n,c)):(Te&&C&&du(n),n.flags|=1,En(e,n,r,c),n.child)}function Xg(e,n,a,r,c){if(e===null){var h=a.type;return typeof h=="function"&&!zf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,qg(e,n,h,r,c)):(e=fu(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!wh(e,c)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(x,r)&&e.ref===n.ref)return Sa(e,n,c)}return n.flags|=1,e=ma(h,r),e.ref=n.ref,e.return=n,n.child=e}function qg(e,n,a,r,c){if(e!==null){var h=e.memoizedProps;if(zo(h,r)&&e.ref===n.ref)if(vn=!1,n.pendingProps=r=h,wh(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Sa(e,n,c)}return Mh(e,n,a,r,c)}function Yg(e,n,a,r){var c=r.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~h}else r=0,n.child=null;return Wg(e,n,h,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&_u(n,h!==null?h.cachePool:null),h!==null?Z0(n,h):Jf(),Q0(n);else return r=n.lanes=536870912,Wg(e,n,h!==null?h.baseLanes|a:a,a,r)}else h!==null?(_u(n,h.cachePool),Z0(n,h),Za(),n.memoizedState=null):(e!==null&&_u(n,null),Jf(),Za());return En(e,n,c,a),n.child}function Ko(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wg(e,n,a,r,c){var h=Yf();return h=h===null?null:{parent:mn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&_u(n,null),Jf(),Q0(n),e!==null&&Rs(e,n,r,!0),n.childLanes=c,null}function Pu(e,n){return n=zu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function jg(e,n,a){return Ls(n,e.child,null,a),e=Pu(n,n.pendingProps),e.flags|=2,ui(n),n.memoizedState=null,e}function PM(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(r.mode==="hidden")return e=Pu(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ko(null,e);if(th(n),(e=Je)?(e=x_(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=N0(e),a.return=n,n.child=a,Cn=n,Je=null)):e=null,e===null)throw Ga(n);return n.lanes=536870912,null}return Pu(n,r)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(th(n),c)if(n.flags&256)n.flags&=-257,n=jg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||Rs(e,n,a,!1),c=(a&e.childLanes)!==0,vn||c){if(Wa.current===null){if(r=Qe,r!==null&&(x=ht(r,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,Es(e,x),ai(r,e,x),Sh;ec()}n=jg(e,n,a)}else e=h.treeContext,Je=Ri(x.nextSibling),Cn=n,Te=!0,Ha=null,bi=!1,e!==null&&O0(n,e),n=Pu(n,r),n.flags|=134221824;return n}return e=ma(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function br(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Mh(e,n,a,r,c){return Cs(n),a=ih(e,n,a,r,void 0,c),r=ah(),e!==null&&!vn?(sh(e,n,c),Sa(e,n,c)):(Te&&r&&du(n),n.flags|=1,En(e,n,a,c),n.child)}function Zg(e,n,a,r,c,h){return Cs(n),n.updateQueue=null,a=J0(n,r,a,c),K0(e),r=ah(),e!==null&&!vn?(sh(e,n,h),Sa(e,n,h)):(Te&&r&&du(n),n.flags|=1,En(e,n,a,h),n.child)}function Qg(e,n,a,r,c){if(Cs(n),n.stateNode===null){var h=mr,x=a.contextType;typeof x=="object"&&x!==null&&(h=Un(x)),h=new a(r,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=yh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=r,h.state=n.memoizedState,h.refs={},jf(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?Un(x):mr,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(_h(n,a,x,r),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&yh.enqueueReplaceState(h,h.state,null),Yo(n,r,h,c),qo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){h=n.stateNode;var C=n.memoizedProps,k=Ps(a,C);h.props=k;var et=h.context,ct=a.contextType;x=mr,typeof ct=="object"&&ct!==null&&(x=Un(ct));var bt=a.getDerivedStateFromProps;ct=typeof bt=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ct||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||et!==x)&&zg(n,h,r,x),Xa=!1;var K=n.memoizedState;h.state=K,Yo(n,r,h,c),qo(),et=n.memoizedState,C||K!==et||Xa?(typeof bt=="function"&&(_h(n,a,bt,r),et=n.memoizedState),(k=Xa||Pg(n,a,k,r,K,et,x))?(ct||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=et),h.props=r,h.state=et,h.context=x,r=k):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{h=n.stateNode,Zf(e,n),x=n.memoizedProps,ct=Ps(a,x),h.props=ct,bt=n.pendingProps,K=h.context,et=a.contextType,k=mr,typeof et=="object"&&et!==null&&(k=Un(et)),C=a.getDerivedStateFromProps,(et=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==bt||K!==k)&&zg(n,h,r,k),Xa=!1,K=n.memoizedState,h.state=K,Yo(n,r,h,c),qo();var lt=n.memoizedState;x!==bt||K!==lt||Xa||e!==null&&e.dependencies!==null&&gu(e.dependencies)?(typeof C=="function"&&(_h(n,a,C,r),lt=n.memoizedState),(ct=Xa||Pg(n,a,ct,r,K,lt,k)||e!==null&&e.dependencies!==null&&gu(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,lt,k),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,lt,k)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),h.props=r,h.state=lt,h.context=k,r=ct):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),r=!1)}return h=r,br(e,n),r=(n.flags&128)!==0,h||r?(h=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&r?(n.child=Ls(n,e.child,null,c),n.child=Ls(n,null,a,c)):En(e,n,a,c),n.memoizedState=h.state,e=n.child):e=Sa(e,n,c),e}function Kg(e,n,a,r){return bs(),n.flags|=256,En(e,n,a,r),n.child}var Eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Th(e){return{baseLanes:e,cachePool:H0()}}function bh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function Jg(e,n,a){var r=n.pendingProps,c=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(c?ja(n):Za(),(e=Je)?(e=x_(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=N0(e),a.return=n,n.child=a,Cn=n,Je=null)):e=null,e===null)throw Ga(n);return Td(e)?n.lanes=32:n.lanes=536870912,null}return h=r.children,r=r.fallback,c?(Za(),c=n.mode,h=zu({mode:"hidden",children:h},c),r=Ts(r,c,a,null),h.return=n,r.return=n,h.sibling=r,n.child=h,r=n.child,r.memoizedState=Th(a),r.childLanes=bh(e,x,a),n.memoizedState=Eh,Ko(null,r)):(ja(n),Ah(n,h))}var C=e.memoizedState;if(C!==null){var k=C.dehydrated;if(k!==null)return zM(e,n,h,x,r,k,C,a)}return c?(Za(),c=r.fallback,h=n.mode,C=e.child,k=C.sibling,r=ma(C,{mode:"hidden",children:r.children}),r.subtreeFlags=C.subtreeFlags&1206910976,k!==null?c=ma(k,c):(c=Ts(c,h,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Ko(null,r),r=n.child,c=e.child.memoizedState,c===null?c=Th(a):(h=c.cachePool,h!==null?(C=mn._currentValue,h=h.parent!==C?{parent:C,pool:C}:h):h=H0(),c={baseLanes:c.baseLanes|a,cachePool:h}),r.memoizedState=c,r.childLanes=bh(e,x,a),n.memoizedState=Eh,Ko(e.child,r)):(ja(n),a=e.child,e=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Ah(e,n){return n=zu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function zu(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Iu(e,n,a){return Ls(n,e.child,null,a),e=Ah(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zM(e,n,a,r,c,h,x,C){if(a)return n.flags&256?(ja(n),n.flags&=-257,Iu(e,n,C)):n.memoizedState!==null?(Za(),n.child=e.child,n.flags|=128,null):(Za(),h=c.fallback,x=n.mode,c=zu({mode:"visible",children:c.children},x),h=Ts(h,x,C,null),h.flags|=2,c.return=n,h.return=n,c.sibling=h,n.child=c,Ls(n,e.child,null,C),c=n.child,c.memoizedState=Th(C),c.childLanes=bh(e,r,C),n.memoizedState=Eh,Ko(null,c));if(ja(n),Td(h)){if(r=h.nextSibling&&h.nextSibling.dataset,r)var k=r.dgst;return r=k,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Fo({value:c,source:null,stack:null})),Iu(e,n,C)}if(vn||Rs(e,n,C,!1),r=(C&e.childLanes)!==0,vn||r){if(Wa.current!==null)return Iu(e,n,C);if(r=Qe,r!==null&&(c=ht(r,C),c!==0&&c!==x.retryLane))throw x.retryLane=c,Es(e,c),ai(r,e,c),Sh;return Ed(h)||ec(),Iu(e,n,C)}return Ed(h)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,Je=Ri(h.nextSibling),Cn=n,Te=!0,Ha=null,bi=!1,e!==null&&O0(n,e),n=Ah(n,c.children),n.flags|=134221824,n)}function $g(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),mu(e.return,n,a)}function tv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Tu(a)===null&&(n=e),e=e.sibling}return n}function Bu(e,n,a,r,c,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=h)}function Rh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Ch(e,n,a){var r=n.pendingProps,c=r.revealOrder,h=r.tail;r=r.children;var x=On.current;if(n.flags&128)return Wo(n,x),null;var C=(x&2)!==0;if(C?(x=x&1|2,n.flags|=128):x&=1,Wo(n,x),c==="backwards"&&e!==null?(Rh(e),En(e,n,r,a),Rh(e)):En(e,n,r,a),r=Te?Bo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$g(e,a,n);else if(e.tag===19)$g(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=tv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Rh(n)),Bu(n,!0,c,null,h,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Tu(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Bu(n,!0,a,null,h,r);break;case"together":Bu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=tv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Bu(n,!1,c,a,h,r)}return n.child}function ev(e,n,a){var r=n.pendingProps;return Va(n,n.type,r.value),En(e,n,r.children,a),n.child}function Sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Rs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function wh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gu(e)))}function IM(e,n,a){switch(n.tag){case 3:O(n,n.stateNode.containerInfo),Va(n,mn,e.memoizedState.cache),bs();break;case 27:case 5:rt(n);break;case 4:O(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,th(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ja(n),n.flags|=128,null;r=Rs(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Jg(e,n,a):(ja(n),e=Sa(e,n,a),e!==null?e.sibling:null)}ja(n);break;case 19:if(n.flags&128)return Ch(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Rs(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Ch(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Wo(n,On.current),r)break;return null;case 22:return n.lanes=0,Yg(e,n,a,n.pendingProps);case 24:Va(n,mn,e.memoizedState.cache)}return Sa(e,n,a)}function nv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!wh(e,a)&&(n.flags&128)===0)return vn=!1,IM(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Te&&(n.flags&1048576)!==0&&L0(n,Bo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Ns(n.elementType),n.type=e,typeof e=="function")zf(e)?(r=Ps(e,r),n.tag=1,n=Qg(null,n,e,r,a)):(n.tag=0,n=Mh(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===F){n.tag=11,n=kg(null,n,e,r,a);break t}else if(c===ut){n.tag=14,n=Xg(null,n,e,r,a);break t}else if(c===Q){n.tag=10,n.type=e,n=ev(null,n,a);break t}}throw n=Rt(e)||e,Error(s(306,n,""))}}return n;case 0:return Mh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Ps(r,n.pendingProps),Qg(e,n,r,c,a);case 3:t:{if(O(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var h=n.memoizedState;c=h.element,Zf(e,n),Yo(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Va(n,mn,r),r!==h.cache&&kf(n,[mn],a,!0),qo(),r=x.element,h.isDehydrated)if(h={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Kg(e,n,r,a);break t}else if(r!==c){c=Mi(Error(s(424)),n),Fo(c),n=Kg(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=Ri(e.firstChild),Cn=n,Te=!0,Ha=null,bi=!0,a=Y0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(bs(),r===c){n=Sa(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return br(e,n),e===null?(a=R_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(n.stateNode=r_(n.type,n.pendingProps,oe.current,n)):n.memoizedState=R_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return rt(n),e===null&&Te&&(r=n.stateNode=E_(n.type,n.pendingProps,oe.current),Cn=n,bi=!0,c=Je,is(n.type)?(bd=c,Je=Ri(r.firstChild)):Je=c),En(e,n,n.pendingProps.children,a),br(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((c=r=Je)&&(r=N1(r,n.type,n.pendingProps,bi),r!==null?(n.stateNode=r,Cn=n,Je=Ri(r.firstChild),bi=!1,c=!0):c=!1),c||Ga(n)),rt(n),c=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,r=h.children,gd(c,h)?r=null:x!==null&&gd(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=ih(e,n,AM,null,null,a),kr._currentValue=c),br(e,n),En(e,n,r,a),n.child;case 6:return e===null&&Te&&((e=a=Je)&&(a=U1(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Cn=n,Je=null,e=!0):e=!1),e||Ga(n)),null;case 13:return Jg(e,n,a);case 4:return O(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ls(n,null,r,a):En(e,n,r,a),n.child;case 11:return kg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,br(e,n),En(e,n,r,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return ev(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Cs(n),c=Un(c),r=r(c),n.flags|=1,En(e,n,r,a),n.child;case 14:return Xg(e,n,n.type,n.pendingProps,a);case 15:return qg(e,n,n.type,n.pendingProps,a);case 19:return Ch(e,n,a);case 31:return PM(e,n,a);case 22:return Yg(e,n,a,n.pendingProps);case 24:return Cs(n),r=Un(mn),e===null?(c=Yf(),c===null&&(c=Qe,h=Xf(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:r,cache:c},jf(n),Va(n,mn,c)):((e.lanes&a)!==0&&(Zf(e,n),Yo(n,null,null,a),qo()),c=e.memoizedState,h=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Va(n,mn,r)):(r=h.cache,Va(n,mn,r),r!==c.cache&&kf(n,[mn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Te&&du(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:br(e,n),En(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(e){e.flags|=4}function Dh(e,n,a,r,c){var h;if((h=(e.mode&32)!==0)&&(h=a===null?N_(n,r):N_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),h){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Iv())e.flags|=8192;else throw Us=xu,Wf}else e.flags&=-16777217}function iv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U_(n))if(Iv())e.flags|=8192;else throw Us=xu,Wf}function Fu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Kl():536870912,e.lanes|=n,Dr|=n)}function Jo(e,n){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function BM(e,n,a){var r=n.pendingProps;switch(Ff(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_a(mn),R(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(_r(n)?Ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gf())),$e(n),null;case 26:var c=n.type,h=n.memoizedState;return e===null?(Ma(n),h!==null?($e(n),iv(n,h)):($e(n),Dh(n,c,null,r,a))):h?h!==e.memoizedState?(Ma(n),$e(n),iv(n,h)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ma(n),$e(n),Dh(n,c,e,r,a)),null;case 27:if(ft(n),a=oe.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}e=Nt.current,_r(n)?P0(n):(e=E_(c,r,a),n.stateNode=e,Ma(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(ft(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(h=Nt.current,_r(n))P0(n);else{var x=ul(oe.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?h.multiple=!0:r.size&&(h.size=r.size);break;default:h=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}h[Vt]=n,h[ne]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(zn(h,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ma(n)}}return $e(n),n.subtreeFlags&=-33554433,Dh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=oe.current,_r(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Cn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[Vt]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||n_(e.nodeValue,a)),e||Ga(n,!0)}else e=ul(e).createTextNode(r),e[Vt]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=_r(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Vt]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=_r(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Vt]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),c=!1}else c=Gf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Fu(n,n.updateQueue),$e(n),null);case 4:return R(),e===null&&fd(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return _a(n.type),$e(n),null;case 19:if(eh(n),r=n.memoizedState,r===null)return $e(n),null;if(c=(n.flags&128)!==0,h=r.rendering,h===null)if(c)Jo(r,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Tu(e),h!==null){for(n.flags|=128,Jo(r,!1),e=h.updateQueue,n.updateQueue=e,Fu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)D0(a,e),a=a.sibling;return Wo(n,On.current&1|2),Te&&ga(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&j()>Ku&&(n.flags|=128,c=!0,Jo(r,!1),n.lanes=4194304)}else{if(!c)if(e=Tu(h),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Fu(n,e),Jo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!h.alternate&&!Te)return $e(n),null}else 2*j()-r.renderingStartTime>Ku&&a!==536870912&&(n.flags|=128,c=!0,Jo(r,!1),n.lanes=4194304);r.isBackwards?(h.sibling=n.child,n.child=h):(e=r.last,e!==null?e.sibling=h:n.child=h,r.last=h)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=j(),e.sibling=null,h=On.current,h=c?h&1|2:h&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Te?Wo(n,h):(a=h,Ct(Ln,n),Ct(On,a),Hn===null&&(Hn=n)),Te&&ga(n,r.treeForkCount),e}return $e(n),null;case 22:case 23:return ui(n),$f(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Fu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&gt(Ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(mn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function FM(e,n){switch(Ff(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _a(mn),R(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ui(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return eh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return R(),null;case 10:return _a(n.type),null;case 22:case 23:return ui(n),$f(),e!==null&&gt(Ds),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return _a(mn),null;case 25:return null;default:return null}}function av(e,n){switch(Ff(n),n.tag){case 3:_a(mn),R();break;case 26:case 27:case 5:ft(n);break;case 4:R();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:eh(n);break;case 10:_a(n.type);break;case 22:case 23:ui(n),$f(),e!==null&&gt(Ds);break;case 24:_a(mn)}}function $o(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var h=a.create,x=a.inst;r=h(),x.destroy=r}a=a.next}while(a!==c)}}catch(C){Xe(n,n.return,C)}}function Qa(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var h=c.next;r=h;do{if((r.tag&e)===e){var x=r.inst,C=x.destroy;if(C!==void 0){x.destroy=void 0,c=n;var k=a,et=C;try{et()}catch(ct){Xe(c,k,ct)}}}r=r.next}while(r!==h)}}catch(ct){Xe(n,n.return,ct)}}function sv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{j0(n,a)}catch(r){Xe(e,e.return,r)}}}function rv(e,n,a){a.props=Ps(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Xe(e,n,r)}}function Qi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,h=da(e.memoizedProps,c);(c.ref===null||c.ref.name!==h)&&(c.ref=d_(h)),r=c.ref;break;case 7:if(e.stateNode===null){var x=new pi(e);g(e.child,!1,w1,x,void 0,void 0),e.stateNode=x}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(C){Xe(e,n,C)}}function Pn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Xe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Xe(e,n,c)}else a.current=null}function Hu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)y_(e.stateNode,n[a])}function ov(e){for(var n=e.return;n!==null&&(Uh(n)&&y_(e.stateNode,n.stateNode),!Nh(n));)n=n.return}function tl(e){for(var n=e.return;n!==null&&(Uh(n)&&D1(e.stateNode,n.stateNode),!Nh(n));)n=n.return}function Nh(e){return e.tag===5||e.tag===3||e.tag===27}function Uh(e){return e&&e.tag===7&&e.stateNode!==null}function Lh(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Xe(e,e.return,c)}}function Oh(e,n,a){try{var r=e.stateNode;f1(r,e.type,a,n),r[ne]=n}catch(c){Xe(e,e.return,c)}}function lv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&is(e.type)||e.tag===4}function Ph(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||lv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&is(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zh(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),Hu(e,r),ze=!0;else if(c!==4&&(c===27&&(Hu(e,r),r=null,is(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(zh(e,n,a,r),e=e.sibling;e!==null;)zh(e,n,a,r),e=e.sibling}function Gu(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Hu(e,r),ze=!0;else if(c!==4&&(c===27&&(Hu(e,r),r=null,is(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Gu(e,n,a,r),e=e.sibling;e!==null;)Gu(e,n,a,r),e=e.sibling}function uv(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);zn(n,r,a),n[Vt]=e,n[ne]=a}catch(h){Xe(e,e.return,h)}}var Vu=!1,ci=null;function cv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Vu=!0)}var Ki=null;function fv(){var e=Ki;return Ki=null,e}var ei=0;function Ar(e,n,a,r,c){return ei=0,hv(e.child,n,a,r,c)}function hv(e,n,a,r,c){for(var h=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(r!==null){var C=yd(x);r.push(C),C.view&&(h=!0)}else h||yd(x).view&&(h=!0);Vu=!0,f_(x,ei===0?n:n+"_"+ei,a),ei++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||hv(e.child,n,a,r,c)&&(h=!0));e=e.sibling}return h}function Ji(e,n){for(;e!==null;)e.tag===5?h_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Ji(e.child,n)),e=e.sibling}function ku(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ku(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(Ar(e,a,n,null,!1)||Ji(e.child,!1))}e=e.sibling}}function Ih(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=da(r,a),h=pa(r.default,a.paired?r.share:r.enter);h!=="none"?Ar(e,c,h,null,!1)?(ku(e),a.paired||n||Or(e,r.onEnter)):Ji(e.child,!1):ku(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ih(e,n),e=e.sibling;else ku(e)}function Bh(e){if(ci!==null&&ci.size!==0){var n=ci;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var h=pa(a.default,a.share);if(h!=="none"&&(Ar(e,r,h,null,!1)?(h=e.stateNode,c.paired=h,h.paired=c,Or(e,a.onShare)):Ji(e.child,!1)),n.delete(r),n.size===0)break}}}Bh(e)}e=e.sibling}}}function Fh(e){if(e.tag===30){var n=e.memoizedProps,a=da(n,e.stateNode),r=ci!==null?ci.get(a):void 0,c=pa(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Ar(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,ci.delete(a),Or(e,n.onShare)):Or(e,n.onExit):Ji(e.child,!1)),ci!==null&&Bh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Fh(e),e=e.sibling;else ci!==null&&Bh(e)}function dv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=da(n,e.stateNode);n=pa(n.default,n.update),e.flags&=-5,n!=="none"&&Ar(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&dv(e);e=e.sibling}}function Hh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Ji(e.child,!1))}Hh(e)}e=e.sibling}}function Xu(e){if(e.tag===30)e.stateNode.paired=null,Ji(e.child,!1),Hh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Xu(e),e=e.sibling;else Hh(e)}function pv(e){for(e=e.child;e!==null;)e.tag===30?Ji(e.child,!1):(e.subtreeFlags&33554432)!==0&&pv(e),e=e.sibling}function Gh(e,n,a,r,c,h,x){for(var C=!1;n!==null;){if(n.tag===5){var k=n.stateNode;if(h!==null&&ei<h.length){var et=h[ei],ct=yd(k);(et.view||ct.view)&&(C=!0);var bt;if(bt=(e.flags&4)===0)if(ct.clip)bt=!0;else{bt=et.rect;var K=ct.rect;bt=bt.y!==K.y||bt.x!==K.x||bt.height!==K.height||bt.width!==K.width}bt&&(e.flags|=4),ct.abs?ct=!et.abs:(et=et.rect,ct=ct.rect,ct=et.height!==ct.height||et.width!==ct.width),ct&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&f_(k,ei===0?a:a+"_"+ei,c),C&&(e.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(k,ei===0?r:r+"_"+ei,n.memoizedProps)),ei++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:Gh(e,n.child,a,r,c,h,x)&&(C=!0));n=n.sibling}return C}function mv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=da(a,r),h=pa(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,r=e;var C=e.child;ei=0,c=Gh(r,C,c,c,h,x,!1),(e.flags&4)!==0&&c&&Or(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&mv(e);e=e.sibling}}var wn=!1,Ge=!1,$i=!1,Vh=!1,gv=typeof WeakSet=="function"?WeakSet:Set,Dn=null,ta=!1,el=!1,qu=!1,kh=!1;function HM(e,n,a){if(e=e.containerInfo,pd=Xr,e=x0(e),wf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var h=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{r.nodeType,x.nodeType}catch{r=null;break t}var C=0,k=-1,et=-1,ct=0,bt=0,K=e,lt=null;e:for(;;){for(var qt;K!==r||h!==0&&K.nodeType!==3||(k=C+h),K!==x||c!==0&&K.nodeType!==3||(et=C+c),K.nodeType===3&&(C+=K.nodeValue.length),(qt=K.firstChild)!==null;)lt=K,K=qt;for(;;){if(K===e)break e;if(lt===r&&++ct===h&&(k=C),lt===x&&++bt===c&&(et=C),(qt=K.nextSibling)!==null)break;K=lt,lt=K.parentNode}K=qt}r=k===-1||et===-1?null:{start:k,end:et}}else r=null}r=r||{start:0,end:0}}else r=null;for(md={focusedElem:e,selectionRange:r},Xr=!1,a=(a&335544064)===a,Dn=n,n=a?9270:1024;Dn!==null;){if(e=Dn,a&&(r=e.deletions,r!==null))for(h=0;h<r.length;h++)a&&Fh(r[h]);if(e.alternate===null&&(e.flags&2)!==0)a&&cv(e),Yu(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Fh(r),Yu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&cv(e),Yu(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Dn=r):(a&&dv(e),Yu(a))}}ci=null}function Yu(e){for(;Dn!==null;){var n=Dn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var h=n.stateNode;try{var x=Ps(n.type,c);a=h.getSnapshotBeforeUpdate(x,r),h.__reactInternalSnapshotBeforeUpdate=a}catch(C){Xe(n,n.return,C)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Md(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Md(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=da(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=pa(c.default,c.update),c!=="none"&&Ar(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Dn=r;break}Dn=n.return}}function vv(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),r&4&&$o(5,a);break;case 1:if(ea(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Xe(a,a.return,x)}else{var c=Ps(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Xe(a,a.return,x)}}r&64&&sv(a),r&512&&Qi(a,a.return);break;case 3:if(ea(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{j0(e,n)}catch(x){Xe(a,a.return,x)}}break;case 27:n===null&&r&4&&uv(a);case 26:case 5:ea(e,a),n===null&&r&4&&Lh(a),r&512&&Qi(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),r&4&&Sv(e,a);break;case 13:ea(e,a),r&4&&Mv(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=JM.bind(null,a),L1(e,a))));break;case 22:if(r=a.memoizedState!==null||wn,!r){var h=n!==null&&n.memoizedState!==null||Ge;n=wn,c=Ge,wn=r,(Ge=h)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Pi(e,a,r)):ea(e,a),wn=n,Ge=c}break;case 30:ea(e,a),r&512&&Qi(a,a.return);break;case 7:r&512&&Qi(a,a.return);default:ea(e,a)}}function Xh(e,n){for(e=e.child;e!==null;)_v(e,n),e=e.sibling}function _v(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,h=e.memoizedProps.style,x=h!=null&&h.hasOwnProperty("display")?h.display:null;c.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(k){Xe(e,e.return,k)}qh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,ze=!0}catch(k){Xe(e,e.return,k)}break;case 18:try{var C=e.stateNode;n?c_(C,!0):c_(e.stateNode,!1)}catch(k){Xe(e,e.return,k)}break;case 22:case 23:e.memoizedState===null&&Xh(e,n);break;default:Xh(e,n)}}function qh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:_v(a,r);break t;case 22:a.memoizedState===null&&qh(a,r);break t;default:qh(a,r)}}e=e.sibling}}function yv(e){var n=e.alternate;n!==null&&(e.alternate=null,yv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ce(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,ni=!1;function Li(e,n,a){for(a=a.child;a!==null;)xv(e,n,a),a=a.sibling}function xv(e,n,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(we,a)}catch{}switch(a.tag){case 26:Ge||Pn(a,n),Li(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Pn(a,n),tl(a);var r=en,c=ni;is(a.type)&&(en=a.stateNode,ni=!1),Li(e,n,a),T_(a.stateNode,a.type,a.memoizedProps),en=r,ni=c;break;case 5:Ge||Pn(a,n),tl(a);case 6:if(a.tag===6&&tl(a),r=en,c=ni,en=null,Li(e,n,a),en=r,ni=c,en!==null)if(ni)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),ze=!0}catch(h){Xe(a,n,h)}else try{en.removeChild(a.stateNode),ze=!0}catch(h){Xe(a,n,h)}break;case 18:en!==null&&(ni?(e=en,u_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),qr(e)):u_(en,a.stateNode));break;case 4:r=en,c=ni,en=a.stateNode.containerInfo,ni=!0,Li(e,n,a),en=r,ni=c;break;case 0:case 11:case 14:case 15:Qa(2,a,n),Ge||Qa(4,a,n),Li(e,n,a);break;case 1:Ge||(Pn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&rv(a,n,r)),Li(e,n,a);break;case 21:Li(e,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Li(e,n,a),Ge=r;break;case 30:Pn(a,n),Li(e,n,a);break;case 7:Ge||Pn(a,n),Li(e,n,a);break;default:Li(e,n,a)}}function Sv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{qr(e)}catch(a){Xe(n,n.return,a)}}}function Mv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qr(e)}catch(a){Xe(n,n.return,a)}}function GM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new gv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new gv),n;default:throw Error(s(435,e.tag))}}function Wu(e,n){var a=GM(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=$M.bind(null,e,r);r.then(c,c)}})}function jn(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var h=r[c],x=e,C=n,k=C;t:for(;k!==null;){switch(k.tag){case 27:if(is(k.type)){en=k.stateNode,ni=!1;break t}break;case 5:en=k.stateNode,ni=!1;break t;case 3:case 4:en=k.stateNode.containerInfo,ni=!0;break t}k=k.return}if(en===null)throw Error(s(160));xv(x,C,h),en=null,ni=!1,x=h.alternate,x!==null&&(x.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ev(n,e,a),n=n.sibling}var Oi=null;function Ev(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var h=0;h<r.length;h++){var x=r[h];x.ref.impl=x.nextImpl}jn(n,e,a),Zn(e),c&4&&(Qa(3,e,e.return),$o(3,e),Qa(5,e,e.return));break;case 1:jn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&64&&wn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(h=Oi,jn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(wn)e.stateNode=r_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=h.ownerDocument||h;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Ie]||r[Vt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),zn(r,n,a),r[Vt]=e,Pe(r),n=r;break t;case"link":if(h=D_("link","href",c).get(n+(a.href||""))){for(x=0;x<h.length;x++)if(r=h[x],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(x,1);break e}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;case"meta":if(h=D_("meta","content",c).get(n+(a.content||""))){for(x=0;x<h.length;x++)if(r=h[x],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(x,1);break e}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[Vt]=e,Pe(r),n=r}e.stateNode=n}else wn||wd(h,e.type,e.stateNode);else e.stateNode=w_(h,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):c.count--,a===null?wn||wd(h,e.type,e.stateNode):w_(h,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Oh(e,e.memoizedProps,r.memoizedProps);break;case 27:jn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),r!==null&&c&4&&Oh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(h=$i,$i=!1,jn(n,e,a),$i=h,Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),e.flags&32){n=e.stateNode;try{lr(n,""),ze=!0}catch(ct){Xe(e,e.return,ct)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Oh(e,n,r!==null?r.memoizedProps:n)),c&1024&&(Vh=!0);break;case 6:if(jn(n,e,a),Zn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,ze=!0}catch(ct){Xe(e,e.return,ct)}}break;case 3:if(ze=!1,lc=null,h=Oi,Oi=cl(n.containerInfo),jn(n,e,a),Oi=h,Zn(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{qr(n.containerInfo)}catch(ct){Xe(e,e.return,ct)}Vh&&(Vh=!1,Tv(e)),ze=!1;break;case 4:c=$i,$i=wn,r=Xm(),h=Oi,Oi=cl(e.stateNode.containerInfo),jn(n,e,a),Zn(e),Oi=h,ze&&el&&(qu=!0),ze=r,$i=c;break;case 12:jn(n,e,a),Zn(e);break;case 31:jn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wu(e,n)));break;case 13:jn(n,e,a),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Qu=j()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wu(e,n)));break;case 22:h=e.memoizedState!==null,x=r!==null&&r.memoizedState!==null;var C=wn,k=Ge,et=$i;wn=C||h,$i=et||h,Ge=k||x,jn(n,e,a),Ge=k,$i=et,wn=C,Zn(e),c&8192&&(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,!h||r===null||x||wn||Ge||(n=x||Ge,a=wn,r=Ge,wn=h||wn,Ge=n,Ka(e,2),wn=a,Ge=r),!h&&$i||Xh(e,h)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Wu(e,a))));break;case 19:jn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wu(e,n)));break;case 30:c&512&&(Ge||r===null||Pn(r,r.return)),c=Xm(),h=el,x=(a&335544064)===a,C=e.memoizedProps,el=x&&pa(C.default,C.update)!=="none",jn(n,e,a),Zn(e),x&&r!==null&&ze&&(e.flags|=4),el=h,ze=c;break;case 21:break;case 7:c&512&&(Ge||r===null||Pn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:jn(n,e,a),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(lv(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(Uh(c)){var h=c.stateNode;r===null?r=[h]:r.push(h)}if(Nh(c))break;c=c.return}var x=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var C=a.stateNode,k=Ph(e);Gu(e,k,C,x);break;case 5:var et=a.stateNode;a.flags&32&&(lr(et,""),a.flags&=-33);var ct=Ph(e);Gu(e,ct,et,x);break;case 3:case 4:var bt=a.stateNode.containerInfo,K=Ph(e);zh(e,K,bt,x);break;default:throw Error(s(161))}}catch(lt){Xe(e,e.return,lt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Tv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Tv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Xr=!0,n.reset(),Xr=!1),e=e.sibling}}function Rr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)bv(n,e),n=n.sibling;else mv(n)}function bv(e,n){var a=e.alternate;if(a===null)Ih(e,!1);else switch(e.tag){case 3:if(kh=ta=!1,fv(),Rr(n,e),!ta&&!qu){if(e=Ki,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];h_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),kh=!0}Ki=null;break;case 5:Rr(n,e);break;case 4:r=ta,ta=!1,Rr(n,e),ta&&(qu=!0),ta=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Ih(e,!1):Rr(n,e));break;case 30:r=ta,c=fv(),ta=!1,Rr(n,e),ta&&(e.flags|=4);var h=e.memoizedProps,x=e.stateNode;n=da(h,x),x=da(a.memoizedProps,x);var C=pa(h.default,h.update);C==="none"?n=!1:(h=a.memoizedState,a.memoizedState=null,a=e.child,ei=0,n=Gh(e,a,n,x,C,h,!0),ei!==(h===null?0:h.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Or(e,e.memoizedProps.onUpdate),Ki=c):c!==null&&(c.push.apply(c,Ki),Ki=c),ta=(e.flags&32)!==0?!0:r;break;default:Rr(n,e)}}function ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vv(e,n.alternate,n),n=n.sibling}function Ka(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Qa(4,a,a.return),Ka(a,r);break;case 1:Pn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&rv(a,a.return,c),Ka(a,r);break;case 27:(r&2)!==0&&T_(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||tl(a),Ka(a,r);break;case 6:tl(a);break;case 26:Pn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Ge||c.parentNode.removeChild(c),Ka(a,r);break;case 22:a.memoizedState===null&&Ka(a,r);break;case 30:Pn(a,a.return),Ka(a,r);break;case 7:Pn(a,a.return);default:Ka(a,r)}e=e.sibling}}function Pi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,h=n,x=h.flags,C=(a&1)!==0;switch(h.tag){case 0:case 11:case 15:Pi(c,h,a),$o(4,h);break;case 1:if(Pi(c,h,a),r=h,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ct){Xe(r,r.return,ct)}if(r=h,c=r.updateQueue,c!==null){var k=r.stateNode;try{var et=c.shared.hiddenCallbacks;if(et!==null)for(c.shared.hiddenCallbacks=null,c=0;c<et.length;c++)W0(et[c],k)}catch(ct){Xe(r,r.return,ct)}}C&&x&64&&sv(h),Qi(h,h.return);break;case 27:(a&2)!==0&&uv(h);case 5:h.tag!==5&&h.tag!==27||ov(h),Pi(c,h,a),C&&r===null&&x&4&&Lh(h),Qi(h,h.return);break;case 6:ov(h);break;case 26:k=h.stateNode,h.memoizedState!==null||k===null||wn||wd(cl(k.ownerDocument),h.type,k),Pi(c,h,a),C&&r===null&&x&4&&Lh(h),Qi(h,h.return);break;case 12:Pi(c,h,a);break;case 31:Pi(c,h,a),C&&x&4&&Sv(c,h);break;case 13:Pi(c,h,a),C&&x&4&&Mv(c,h);break;case 22:h.memoizedState===null&&Pi(c,h,a),Qi(h,h.return);break;case 30:Pi(c,h,a),Qi(h,h.return);break;case 7:Qi(h,h.return);default:Pi(c,h,a)}n=n.sibling}}function Yh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ho(a))}function Wh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ho(e))}function Ai(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Av(e,n,a,r),n=n.sibling;else c&&pv(n)}function Av(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Xu(n);var h=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,r),h&2048&&$o(9,n);break;case 1:Ai(e,n,a,r);break;case 3:Ai(e,n,a,r),c&&kh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),h&2048&&(h=null,n.alternate!==null&&(h=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==h&&(n.refCount++,h!=null&&Ho(h)));break;case 12:if(h&2048){Ai(e,n,a,r),h=n.stateNode;try{var x=n.memoizedProps,C=x.id,k=x.onPostCommit;typeof k=="function"&&k(C,n.alternate===null?"mount":"update",h.passiveEffectDuration,-0)}catch(et){Xe(n,n.return,et)}}else Ai(e,n,a,r);break;case 31:Ai(e,n,a,r);break;case 13:Ai(e,n,a,r);break;case 23:break;case 22:x=n.stateNode,C=n.alternate,n.memoizedState!==null?(c&&C!==null&&C.memoizedState===null&&Xu(C),x._visibility&2?Ai(e,n,a,r):nl(e,n)):(c&&C!==null&&C.memoizedState!==null&&Xu(n),x._visibility&2?Ai(e,n,a,r):(x._visibility|=2,Cr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),h&2048&&Yh(C,n);break;case 24:Ai(e,n,a,r),h&2048&&Wh(n.alternate,n);break;case 30:c&&(h=n.alternate,h!==null&&(Ji(h.child,!0),Ji(n.child,!0))),Ai(e,n,a,r);break;default:Ai(e,n,a,r)}}function Cr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,C=a,k=r,et=x.flags;switch(x.tag){case 0:case 11:case 15:Cr(h,x,C,k,c),$o(8,x);break;case 23:break;case 22:var ct=x.stateNode;x.memoizedState!==null?ct._visibility&2?Cr(h,x,C,k,c):nl(h,x):(ct._visibility|=2,Cr(h,x,C,k,c)),c&&et&2048&&Yh(x.alternate,x);break;case 24:Cr(h,x,C,k,c),c&&et&2048&&Wh(x.alternate,x);break;default:Cr(h,x,C,k,c)}n=n.sibling}}function nl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:nl(a,r),c&2048&&Yh(r.alternate,r);break;case 24:nl(a,r),c&2048&&Wh(r.alternate,r);break;default:nl(a,r)}n=n.sibling}}var zs=8192;function Is(e,n,a){if(e.subtreeFlags&zs)for(e=e.child;e!==null;)Rv(e,n,a),e=e.sibling}function Rv(e,n,a){switch(e.tag){case 26:Is(e,n,a),e.flags&zs&&(e.memoizedState!==null?W1(a,Oi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&O_(a,e)));break;case 5:Is(e,n,a),e.flags&zs&&(e=e.stateNode,(n&335544128)===n&&O_(a,e));break;case 3:case 4:var r=Oi;Oi=cl(e.stateNode.containerInfo),Is(e,n,a),Oi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=zs,zs=16777216,Is(e,n,a),zs=r):Is(e,n,a));break;case 30:if((e.flags&zs)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,ci===null&&(ci=new Map),ci.set(r,c)}Is(e,n,a);break;default:Is(e,n,a)}}function Cv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Dn=r,Dv(r,e)}Cv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wv(e),e=e.sibling}function wv(e){switch(e.tag){case 0:case 11:case 15:il(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:il(e);break;case 12:il(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ju(e)):il(e);break;default:il(e)}}function ju(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Dn=r,Dv(r,e)}Cv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Qa(8,n,n.return),ju(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ju(n));break;default:ju(n)}e=e.sibling}}function Dv(e,n){for(;Dn!==null;){var a=Dn;switch(a.tag){case 0:case 11:case 15:Qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Dn=r;else t:for(a=e;Dn!==null;){r=Dn;var c=r.sibling,h=r.return;if(yv(r),r===a){Dn=null;break t}if(c!==null){c.return=h,Dn=c;break t}Dn=h}}}var VM={getCacheForType:function(e){var n=Un(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(mn).controller.signal}},kM=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,Re=null,De=0,ke=0,fi=null,Ja=!1,wr=!1,jh=!1,Ea=0,un=0,$a=0,Bs=0,Zu=0,hi=0,Dr=0,al=null,ii=null,Zh=!1,Qu=0,Nv=0,Ku=1/0,Ju=null,ts=null,an=0,zi=null,Fs=null,na=0,Qh=0,Kh=null,Uv=null,Nr=null,Ur=null,Lr=null,sl=0,$u=null;function di(){return(Fe&2)!==0&&De!==0?De&-De:Tt.T!==null?od():It()}function Lv(){if(hi===0)if((De&536870912)===0||Te){var e=ca;ca<<=1,(ca&3932160)===0&&(ca=262144),hi=e}else hi=536870912;return e=Ln.current,e!==null&&(e.flags|=32),hi}function Or(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=d_(da(e.memoizedProps,a))),Ur===null&&(Ur=[]),Ur.push(n.bind(null,r))}}function ai(e,n,a){(e===Qe&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(Pr(e,0),es(e,De,hi,!1)),xs(e,a),((Fe&2)===0||e!==Qe)&&(e===Qe&&((Fe&2)===0&&(Bs|=a),un===4&&es(e,De,hi,!1)),ia(e))}function Ov(e,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Pa(e,n),c=r?YM(e,n):$h(e,n,!0),h=r;do{if(c===0){wr&&!r&&es(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!XM(a)){c=$h(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var C=e;c=al;var k=C.current.memoizedState.isDehydrated;if(k&&(Pr(C,x).flags|=256),x=$h(C,x,!1),x!==2&&x!==6){if(jh&&!k){C.errorRecoveryDisabledLanes|=h,Bs|=h,c=4;break t}h=ii,ii=c,h!==null&&(ii===null?ii=h:ii.push.apply(ii,h))}c=x}if(h=!1,c!==2)continue}}if(c===1){Pr(e,0),es(e,n,0,!0);break}t:{switch(r=e,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:es(r,n,hi,!Ja);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Qu+300-j(),10<c)){if(es(r,n,hi,!Ja),ys(r,0,!0)!==0)break t;na=n,r.timeoutHandle=_d(Pv.bind(null,r,a,ii,Ju,Zh,n,hi,Bs,Dr,Ja,h,"Throttled",-0,0),c);break t}Pv(r,a,ii,Ju,Zh,n,hi,Bs,Dr,Ja,h,null,-0,0)}}break}while(!0);ia(e)}function Pv(e,n,a,r,c,h,x,C,k,et,ct,bt,K,lt){e.timeoutHandle=-1;var qt=n.subtreeFlags,ie=(h&335544064)===h;if(bt=null,(ie||qt&8192||(qt&16785408)===16785408)&&(bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},ci=null,Rv(n,h,bt),ie&&(qt=bt,ie=e.containerInfo,ie=(ie.nodeType===9?ie:ie.ownerDocument).__reactViewTransition,ie!=null&&(qt.count++,qt.waitingForViewTransition=!0,qt=dl.bind(qt),ie.finished.then(qt,qt))),qt=(h&62914560)===h?Qu-j():(h&4194048)===h?Nv-j():0,qt=j1(bt,qt),qt!==null)){na=h,e.cancelPendingCommit=qt(kv.bind(null,e,n,h,a,r,c,x,C,k,et,ct,bt,null,K,lt)),es(e,h,x,!et);return}kv(e,n,h,a,r,c,x,C,k,et,ct,bt)}function XM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],h=c.getSnapshot;c=c.value;try{if(!li(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function es(e,n,a,r){n=Ql(e,n),n&=~Zu,n&=~Bs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var h=31-Bn(c),x=1<<h;r[h]=-1,c&=~x}a!==0&&L(e,a,n)}function tc(){return(Fe&6)===0?(rl(0),!1):!0}function Jh(){if(Re!==null){if(ke===0)var e=Re.return;else e=Re,va=As=null,rh(e),Sr=null,ko=0,e=Re;for(;e!==null;)av(e.alternate,e),e=e.return;Re=null}}function Pr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,p1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,Jh(),Qe=e,Re=a=ma(e.current,null),De=n,ke=0,fi=null,Ja=!1,wr=Pa(e,n),jh=!1,Dr=hi=Zu=Bs=$a=un=0,ii=al=null,Zh=!1,Ea=Ql(e,n),lu(),a}function zv(e,n){xe=null,Tt.H=Lu,n===xr||n===yu?(n=k0(),ke=3):n===Wf?(n=k0(),ke=4):ke=n===Sh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,Re===null&&(un=1,Ou(e,Mi(n,e.current)))}function Iv(){var e=Ln.current;return e===null?!0:(De&4194048)===De?Hn===null:(De&62914560)===De||(De&536870912)!==0?e===Hn:!1}function Bv(){var e=Tt.H;return Tt.H=Lu,e===null?Lu:e}function Fv(){var e=Tt.A;return Tt.A=VM,e}function ec(){un=4,Ja||(De&4194048)!==De&&Ln.current!==null||(wr=!0),($a&134217727)===0&&(Bs&134217727)===0||Qe===null||es(Qe,De,hi,!1)}function $h(e,n,a){var r=Fe;Fe|=2;var c=Bv(),h=Fv();(Qe!==e||De!==n)&&(Ju=null,Pr(e,n)),n=!1;var x=un;t:do try{if(ke!==0&&Re!==null){var C=Re,k=fi;switch(ke){case 8:Jh(),x=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var et=ke;if(ke=0,fi=null,zr(e,C,k,et),a&&wr){x=0;break t}break;default:et=ke,ke=0,fi=null,zr(e,C,k,et)}}qM(),x=un;break}catch(ct){zv(e,ct)}while(!0);return n&&e.shellSuspendCounter++,va=As=null,Fe=r,Tt.H=c,Tt.A=h,Re===null&&(Qe=null,De=0,lu()),x}function qM(){for(;Re!==null;)Hv(Re)}function YM(e,n){var a=Fe;Fe|=2;var r=Bv(),c=Fv();Qe!==e||De!==n?(Ju=null,Ku=j()+500,Pr(e,n)):wr=Pa(e,n);t:do try{if(ke!==0&&Re!==null){n=Re;var h=fi;e:switch(ke){case 1:ke=0,fi=null,zr(e,n,h,1);break;case 2:case 9:if(G0(h)){ke=0,fi=null,Gv(n);break}n=function(){ke!==2&&ke!==9||Qe!==e||(ke=7),ia(e)},h.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:G0(h)?(ke=0,fi=null,Gv(n)):(ke=0,fi=null,zr(e,n,h,7));break;case 5:var x=null;switch(Re.tag){case 26:x=Re.memoizedState;case 5:case 27:var C=Re;if(x?U_(x):C.stateNode.complete){ke=0,fi=null;var k=C.sibling;if(k!==null)Re=k;else{var et=C.return;et!==null?(Re=et,nc(et)):Re=null}break e}}ke=0,fi=null,zr(e,n,h,5);break;case 6:ke=0,fi=null,zr(e,n,h,6);break;case 8:Jh(),un=6;break t;default:throw Error(s(462))}}WM();break}catch(ct){zv(e,ct)}while(!0);return va=As=null,Tt.H=r,Tt.A=c,Fe=a,Re!==null?0:(Qe=null,De=0,lu(),un)}function WM(){for(;Re!==null&&!Bt();)Hv(Re)}function Hv(e){var n=nv(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,n===null?nc(e):Re=n}function Gv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Zg(a,n,n.pendingProps,n.type,void 0,De);break;case 11:n=Zg(a,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:rh(n);var r=n;r===Cn&&(Te?(pu(r),r.tag===5&&r.stateNode!=null&&(Je=r.stateNode)):(pu(r),Te=!0));default:av(a,n),n=Re=D0(n,Ea),n=nv(a,n,Ea)}e.memoizedProps=e.pendingProps,n===null?nc(e):Re=n}function zr(e,n,a,r){va=As=null,rh(n),Sr=null,ko=0;var c=n.return;try{if(OM(e,c,n,a,De)){un=1,Ou(e,Mi(a,e.current)),Re=null;return}}catch(h){if(c!==null)throw Re=c,h;un=1,Ou(e,Mi(a,e.current)),Re=null;return}n.flags&32768?(Te||r===1?e=!0:wr||(De&536870912)!==0?e=!1:(Ja=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ln.current,r!==null&&r.tag===13&&(r.flags|=16384))),Vv(n,e)):nc(n)}function nc(e){var n=e;do{if((n.flags&32768)!==0){Vv(n,Ja);return}e=n.return;var a=BM(n.alternate,n,Ea);if(a!==null){Re=a;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);un===0&&(un=5)}function Vv(e,n){do{var a=FM(e.alternate,e);if(a!==null){a.flags&=32767,Re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=a}while(e!==null);un=6,Re=null}function kv(e,n,a,r,c,h,x,C,k,et,ct,bt){e.cancelPendingCommit=null;do ic();while(an!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Qe&&(Re=Qe=null,De=0),Fs=n,zi=e,na=a,Kh=c,Uv=r,jM(e,n,a,x,C,k,bt)}}function jM(e,n,a,r,c,h,x){var C=n.lanes|n.childLanes;if(Qh=C,C|=Of,ff(e,a,C,r,c,h),Ur=null,(a&335544064)===a?(Lr=MM(e),r=10262):(Lr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,t1(Pt,function(){return id(),null})):(e.callbackNode=null,e.callbackPriority=0),Vu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null,c=Lt.p,Lt.p=2,h=Fe,Fe|=4;try{HM(e,n,a)}finally{Fe=h,Lt.p=c,Tt.T=r}}an=1,Vu?Nr=x1(x,e.containerInfo,Lr,td,ed,QM,nd,id,ZM):(td(),ed(),nd())}function ZM(e){if(an!==0){var n=zi.onRecoverableError;n(e,{componentStack:null})}}function QM(){an===3&&(an=0,bv(Fs,zi),an=4)}function td(){if(an===1){an=0;var e=zi,n=Fs,a=na,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null;var c=Lt.p;Lt.p=2;var h=Fe;Fe|=4;try{el=qu=!1,Ev(n,e,a),a=md;var x=x0(e.containerInfo),C=a.focusedElem,k=a.selectionRange;if(x!==C&&C&&C.ownerDocument&&y0(C.ownerDocument.documentElement,C)){if(k!==null&&wf(C)){var et=k.start,ct=k.end;if(ct===void 0&&(ct=et),"selectionStart"in C)C.selectionStart=et,C.selectionEnd=Math.min(ct,C.value.length);else{var bt=C.ownerDocument||document,K=bt&&bt.defaultView||window;if(K.getSelection){var lt=K.getSelection(),qt=C.textContent.length,ie=Math.min(k.start,qt),Se=k.end===void 0?ie:Math.min(k.end,qt);!lt.extend&&ie>Se&&(x=Se,Se=ie,ie=x);var tt=_0(C,ie),W=_0(C,Se);if(tt&&W&&(lt.rangeCount!==1||lt.anchorNode!==tt.node||lt.anchorOffset!==tt.offset||lt.focusNode!==W.node||lt.focusOffset!==W.offset)){var ot=bt.createRange();ot.setStart(tt.node,tt.offset),lt.removeAllRanges(),ie>Se?(lt.addRange(ot),lt.extend(W.node,W.offset)):(ot.setEnd(W.node,W.offset),lt.addRange(ot))}}}}for(bt=[],lt=C;lt=lt.parentNode;)lt.nodeType===1&&bt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<bt.length;C++){var Mt=bt[C];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}Xr=!!pd,md=pd=null}finally{Fe=h,Lt.p=c,Tt.T=r}}e.current=n,an=2}}function ed(){if(an===2){an=0;var e=zi,n=Fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Tt.T,Tt.T=null;var r=Lt.p;Lt.p=2;var c=Fe;Fe|=4;try{vv(e,n.alternate,n)}finally{Fe=c,Lt.p=r,Tt.T=a}}an=3}}function nd(){if(an===4||an===3){an=0;var e=Nr;Nr=null,me();var n=zi,a=Fs,r=na,c=Uv,h=(r&335544064)===r?10262:10256;if((a.subtreeFlags&h)!==0||(a.flags&h)!==0?an=5:(an=0,Fs=zi=null,Xv(n,n.pendingLanes)),h=n.pendingLanes,h===0&&(ts=null),st(r),a=a.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(we,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Tt.T,h=Lt.p,Lt.p=2,Tt.T=null;try{for(var x=n.onRecoverableError,C=0;C<c.length;C++){var k=c[C];x(k.value,{componentStack:k.stack})}}finally{Tt.T=a,Lt.p=h}}if(c=Ur,x=Lr,Lr=null,c!==null&&(Ur=null,x===null&&(x=[]),e!==null))for(k=0;k<c.length;k++)a=(0,c[k])(x),a!==void 0&&e.finished.finally(a);(na&3)!==0&&ic(),ia(n),h=n.pendingLanes,(r&261930)!==0&&(h&42)!==0?n===$u?sl++:(sl=0,$u=n):(sl=0,$u=null),rl(0)}}function Xv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ho(n)))}function ic(){return Nr!==null&&(Nr.skipTransition(),Nr=null),td(),ed(),nd(),id()}function id(){if(an!==5)return!1;var e=zi,n=Qh;Qh=0;var a=st(na),r=Tt.T,c=Lt.p;try{Lt.p=32>a?32:a,Tt.T=null,a=Kh,Kh=null;var h=zi,x=na;if(an=0,Fs=zi=null,na=0,(Fe&6)!==0)throw Error(s(331));var C=Fe;if(Fe|=4,wv(h.current),Av(h,h.current,x,a),Fe=C,rl(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(we,h)}catch{}return!0}finally{Lt.p=c,Tt.T=r,Xv(e,n)}}function qv(e,n,a){n=Mi(a,n),n=xh(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&(xs(e,2),ia(e))}function Xe(e,n,a){if(e.tag===3)qv(e,e,a);else for(;n!==null;){if(n.tag===3){qv(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ts===null||!ts.has(r))){e=Mi(a,e),a=Gg(2),r=Ya(n,a,2),r!==null&&(Vg(a,r,n,e),xs(r,2),ia(r));break}}n=n.return}}function ad(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new kM;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(jh=!0,c.add(a),e=KM.bind(null,e,n,a),n.then(e,e))}function KM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(De&a)===a&&((un===4||un===3&&(De&62914560)===De&&300>j()-Qu)&&(Fe&2)===0?Pr(e,0):Zu|=a,Dr===De&&(Dr=0)),ia(e)}function Yv(e,n){n===0&&(n=Kl()),e=Es(e,n),e!==null&&(xs(e,n),ia(e))}function JM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Yv(e,a)}function $M(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Yv(e,a)}function t1(e,n){return St(e,n)}var Ir=null,Br=null,sd=!1,ac=!1,rd=!1,ns=0;function ia(e){e!==Br&&e.next===null&&(Br===null?Ir=Br=e:Br=Br.next=e),ac=!0,sd||(sd=!0,n1())}function rl(e,n){if(!rd&&ac){rd=!0;do for(var a=!1,r=Ir;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var h=0;else{var x=r.suspendedLanes,C=r.pingedLanes;h=(1<<31-Bn(42|e)+1)-1,h&=c&~(x&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Qv(r,h))}else h=De,h=ys(r,r===Qe?h:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(h&3)===0||Pa(r,h)||(a=!0,Qv(r,h));r=r.next}while(a);rd=!1}}function e1(){Wv()}function Wv(){ac=sd=!1;var e=0;ns!==0&&d1()&&(e=ns);for(var n=j(),a=null,r=Ir;r!==null;){var c=r.next,h=jv(r,n);h===0?(r.next=null,a===null?Ir=c:a.next=c,c===null&&(Br=a)):(a=r,(e!==0||(h&3)!==0)&&(ac=!0)),r=c}an!==0&&an!==5||rl(e),ns!==0&&(ns=0)}function jv(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Bn(h),C=1<<x,k=c[x];k===-1?((C&a)===0||(C&r)!==0)&&(c[x]=cf(C,n)):k<=n&&(e.expiredLanes|=C),h&=~C}if(n=Qe,a=De,a=ys(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Yt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Yt(r),st(a)){case 2:case 8:a=te;break;case 32:a=Pt;break;case 268435456:a=ae;break;default:a=Pt}return r=Zv.bind(null,e),a=St(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Yt(r),e.callbackPriority=2,e.callbackNode=null,2}function Zv(e,n){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ic()&&e.callbackNode!==a)return null;var r=De;return r=ys(e,e===Qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Ov(e,r,n),jv(e,j()),e.callbackNode!=null&&e.callbackNode===a?Zv.bind(null,e):null)}function Qv(e,n){if(ic())return null;Ov(e,n,!0)}function n1(){m1(function(){(Fe&6)!==0?St(Xt,e1):Wv()})}function od(){if(ns===0){var e=ws;e===0&&(e=vs,vs<<=1,(vs&261888)===0&&(vs=256)),ns=e}return ns}function Kv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tu(e)}function i1(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var h=Kv((c[ne]||null).action),x=r.submitter;x&&(n=(n=x[ne]||null)?Kv(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var C=new au("action","action",null,r,c);e.push({event:C,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ns!==0){var k=new FormData(c,x);mh(a,{pending:!0,data:k,method:c.method,action:h},null,k)}}else typeof h=="function"&&(C.preventDefault(),k=new FormData(c,x),mh(a,{pending:!0,data:k,method:c.method,action:h},h,k))},currentTarget:c}]})}}for(var ld=0;ld<Lf.length;ld++){var ud=Lf[ld],a1=ud.toLowerCase(),s1=ud[0].toUpperCase()+ud.slice(1);Ui(a1,"on"+s1)}Ui(E0,"onAnimationEnd"),Ui(T0,"onAnimationIteration"),Ui(b0,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(pM,"onTransitionRun"),Ui(mM,"onTransitionStart"),Ui(gM,"onTransitionCancel"),Ui(A0,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function Jv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var h=void 0;if(n)for(var x=r.length-1;0<=x;x--){var C=r[x],k=C.instance,et=C.currentTarget;if(C=C.listener,k!==h&&c.isPropagationStopped())break t;h=C,c.currentTarget=et;try{h(c)}catch(ct){ou(ct)}c.currentTarget=null,h=k}else for(x=0;x<r.length;x++){if(C=r[x],k=C.instance,et=C.currentTarget,C=C.listener,k!==h&&c.isPropagationStopped())break t;h=C,c.currentTarget=et;try{h(c)}catch(ct){ou(ct)}c.currentTarget=null,h=k}}}}function Ce(e,n){var a=n[ue];a===void 0&&(a=n[ue]=new Set);var r=e+"__bubble";a.has(r)||($v(n,e,2,!1),a.add(r))}function cd(e,n,a){var r=0;n&&(r|=4),$v(a,e,r,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function fd(e){if(!e[sc]){e[sc]=!0,Ke.forEach(function(a){a!=="selectionchange"&&(r1.has(a)||cd(a,!1,e),cd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,cd("selectionchange",!1,n))}}function $v(e,n,a,r){switch(V_(n)){case 2:var c=J1;break;case 8:c=$1;break;default:c=Nd}a=c.bind(null,n,a,e),c=void 0,!yf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function hd(e,n,a,r,c){var h=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var C=r.stateNode.containerInfo;if(C===c)break;if(x===4)for(x=r.return;x!==null;){var k=x.tag;if((k===3||k===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;C!==null;){if(x=Be(C),x===null)return;if(k=x.tag,k===5||k===6||k===26||k===27){r=h=x;continue t}C=C.parentNode}}r=r.return}$m(function(){var et=h,ct=vf(a),bt=[];t:{var K=R0.get(e);if(K!==void 0){var lt=au,qt=e;switch(e){case"keypress":if(nu(a)===0)break t;case"keydown":case"keyup":lt=XS;break;case"focusin":qt="focus",lt=Ef;break;case"focusout":qt="blur",lt=Ef;break;case"beforeblur":case"afterblur":lt=Ef;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=n0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=US;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=ZS;break;case E0:case T0:case b0:lt=PS;break;case A0:lt=KS;break;case"scroll":case"scrollend":lt=DS;break;case"wheel":lt=$S;break;case"copy":case"cut":case"paste":lt=IS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=a0;break;case"submit":lt=WS;break;case"toggle":case"beforetoggle":lt=eM}var ie=(n&4)!==0,Se=!ie&&(e==="scroll"||e==="scrollend"),tt=ie?K!==null?K+"Capture":null:K;ie=[];for(var W=et,ot;W!==null;){var Mt=W;if(ot=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||ot===null||tt===null||(Mt=wo(W,tt),Mt!=null&&ie.push(ll(W,Mt,ot))),Se)break;W=W.return}0<ie.length&&(K=new lt(K,qt,null,a,ct),bt.push({event:K,listeners:ie}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",lt&&a!==gf&&(qt=a.relatedTarget||a.fromElement)&&(Be(qt)||qt[he]))break t;(K||lt)&&(qt=ct.window===ct?ct:(lt=ct.ownerDocument)?lt.defaultView||lt.parentWindow:window,K?(lt=a.relatedTarget||a.toElement,K=et,lt=lt?Be(lt):null,lt!==null&&(Se=u(lt),ie=lt.tag,lt!==Se||ie!==5&&ie!==27&&ie!==6)&&(lt=null)):(K=null,lt=et),K!==lt&&(ie=n0,Mt="onMouseLeave",tt="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ie=a0,Mt="onPointerLeave",tt="onPointerEnter",W="pointer"),Se=K==null?qt:Mn(K),ot=lt==null?qt:Mn(lt),qt=new ie(Mt,W+"leave",K,a,ct),qt.target=Se,qt.relatedTarget=ot,Mt=null,Be(ct)===et&&(ie=new ie(tt,W+"enter",lt,a,ct),ie.target=ot,ie.relatedTarget=Se,Mt=ie),Se=Mt,ie=K&&lt?z(K,lt,o1):null,K!==null&&t_(bt,qt,K,ie,!1),lt!==null&&Se!==null&&t_(bt,Se,lt,ie,!0)))}t:{if(K=et?Mn(et):window,lt=K.nodeName&&K.nodeName.toLowerCase(),lt==="select"||lt==="input"&&K.type==="file")var Jt=h0;else if(c0(K))if(d0)Jt=fM;else{Jt=uM;var Ne=lM}else lt=K.nodeName,!lt||lt.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?et&&mf(et.elementType)&&(Jt=h0):Jt=cM;if(Jt&&(Jt=Jt(e,et))){f0(bt,Jt,a,ct);break t}Ne&&Ne(e,K,et)}switch(Ne=et?Mn(et):window,e){case"focusin":(c0(Ne)||Ne.contentEditable==="true")&&(hr=Ne,Df=et,Io=null);break;case"focusout":Io=Df=hr=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,S0(bt,a,ct);break;case"selectionchange":if(dM)break;case"keydown":case"keyup":S0(bt,a,ct)}var le;if(bf)t:{switch(e){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else fr?l0(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(s0&&a.locale!=="ko"&&(fr||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&fr&&(le=t0()):(Ia=ct,xf="value"in Ia?Ia.value:Ia.textContent,fr=!0)),Ne=rc(et,pe),0<Ne.length&&(pe=new i0(pe,e,null,a,ct),bt.push({event:pe,listeners:Ne}),le?pe.data=le:(le=u0(a),le!==null&&(pe.data=le)))),(le=iM?aM(e,a):sM(e,a))&&(pe=rc(et,"onBeforeInput"),0<pe.length&&(Ne=new i0("onBeforeInput","beforeinput",null,a,ct),bt.push({event:Ne,listeners:pe}),Ne.data=le)),i1(bt,e,et,a,ct)}Jv(bt,n)})}function ll(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=wo(e,a),c!=null&&r.unshift(ll(e,c,h)),c=wo(e,n),c!=null&&r.push(ll(e,c,h))),e.tag===3)return r;e=e.return}return[]}function o1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function t_(e,n,a,r,c){for(var h=n._reactName,x=[];a!==null&&a!==r;){var C=a,k=C.alternate,et=C.stateNode;if(C=C.tag,k!==null&&k===r)break;C!==5&&C!==26&&C!==27||et===null||(k=et,c?(et=wo(a,h),et!=null&&x.unshift(ll(a,et,k))):c||(et=wo(a,h),et!=null&&x.push(ll(a,et,k)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var l1=/\r\n?/g,u1=/\u0000|\uFFFD/g;function e_(e){return(typeof e=="string"?e:""+e).replace(l1,`
`).replace(u1,"")}function n_(e,n){return n=e_(n),e_(e)===n}function qe(e,n,a,r,c,h){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||lr(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&lr(e,""+r);else return;break;case"className":$l(e,"class",r);break;case"tabIndex":$l(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":$l(e,a,r);break;case"style":Km(e,r,h);return;case"data":if(n!=="object"){$l(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=tu(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&qe(e,n,"name",c.name,c,null),qe(e,n,"formEncType",c.formEncType,c,null),qe(e,n,"formMethod",c.formMethod,c,null),qe(e,n,"formTarget",c.formTarget,c,null)):(qe(e,n,"encType",c.encType,c,null),qe(e,n,"method",c.method,c,null),qe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=tu(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Wi);return;case"onScroll":r!=null&&Ce("scroll",e);return;case"onScrollEnd":r!=null&&Ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=tu(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Jl(e,"popover",r);break;case"xlinkActuate":fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":fa(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":fa(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":fa(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":fa(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Jl(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=CS.get(a)||a,Jl(e,a,r);else return}ze=!0}function dd(e,n,a,r,c,h){switch(a){case"style":Km(e,r,h);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")lr(e,r);else if(typeof r=="number"||typeof r=="bigint")lr(e,""+r);else return;break;case"onScroll":r!=null&&Ce("scroll",e);return;case"onScrollEnd":r!=null&&Ce("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!qn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),h=a.slice(2,c?a.length-7:void 0),n=e[ne]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(h,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(h,r,c);break t}ze=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):Jl(e,a,r)}return}ze=!0}function zn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var r=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,h,x,a,null)}}c&&qe(e,n,"srcSet",a.srcSet,a,null),r&&qe(e,n,"src",a.src,a,null);return;case"input":Ce("invalid",e);var C=h=x=c=null,k=null,et=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":x=ct;break;case"checked":k=ct;break;case"defaultChecked":et=ct;break;case"value":h=ct;break;case"defaultValue":C=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:qe(e,n,r,ct,a,null)}}Wm(e,h,C,k,et,x,c,!1);return;case"select":Ce("invalid",e),r=x=h=null;for(c in a)if(a.hasOwnProperty(c)&&(C=a[c],C!=null))switch(c){case"value":h=C;break;case"defaultValue":x=C;break;case"multiple":r=C;default:qe(e,n,c,C,a,null)}n=h,a=x,e.multiple=!!r,n!=null?or(e,!!r,n,!1):a!=null&&or(e,!!r,a,!0);return;case"textarea":Ce("invalid",e),h=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(C=a[x],C!=null))switch(x){case"value":r=C;break;case"defaultValue":c=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:qe(e,n,x,C,a,null)}Zm(e,r,c,h);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(r=a[k],r!=null))switch(k){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:qe(e,n,k,r,a,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(r=0;r<ol.length;r++)Ce(ol[r],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(r=a[et],r!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,et,r,a,null)}return;default:if(mf(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&dd(e,n,ct,r,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(r=a[C],r!=null&&qe(e,n,C,r,a,null))}var c1={};function f1(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,x=null,C=null,k=null,et=null,ct=null;for(lt in a){var bt=a[lt];if(a.hasOwnProperty(lt)&&bt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":k=bt;default:r.hasOwnProperty(lt)||qe(e,n,lt,null,r,bt)}}for(var K in r){var lt=r[K];if(bt=a[K],r.hasOwnProperty(K)&&(lt!=null||bt!=null))switch(K){case"type":lt!==bt&&(ze=!0),h=lt;break;case"name":lt!==bt&&(ze=!0),c=lt;break;case"checked":lt!==bt&&(ze=!0),et=lt;break;case"defaultChecked":lt!==bt&&(ze=!0),ct=lt;break;case"value":lt!==bt&&(ze=!0),x=lt;break;case"defaultValue":lt!==bt&&(ze=!0),C=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==bt&&qe(e,n,K,lt,r,bt)}}df(e,x,C,k,et,ct,h,c);return;case"select":lt=x=C=K=null;for(h in a)if(k=a[h],a.hasOwnProperty(h)&&k!=null)switch(h){case"value":break;case"multiple":lt=k;default:r.hasOwnProperty(h)||qe(e,n,h,null,r,k)}for(c in r)if(h=r[c],k=a[c],r.hasOwnProperty(c)&&(h!=null||k!=null))switch(c){case"value":h!==k&&(ze=!0),K=h;break;case"defaultValue":h!==k&&(ze=!0),C=h;break;case"multiple":h!==k&&(ze=!0),x=h;default:h!==k&&qe(e,n,c,h,r,k)}n=C,a=x,r=lt,K!=null?or(e,!!a,K,!1):!!r!=!!a&&(n!=null?or(e,!!a,n,!0):or(e,!!a,a?[]:"",!1));return;case"textarea":lt=K=null;for(C in a)if(c=a[C],a.hasOwnProperty(C)&&c!=null&&!r.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:qe(e,n,C,null,r,c)}for(x in r)if(c=r[x],h=a[x],r.hasOwnProperty(x)&&(c!=null||h!=null))switch(x){case"value":c!==h&&(ze=!0),K=c;break;case"defaultValue":c!==h&&(ze=!0),lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&qe(e,n,x,c,r,h)}jm(e,K,lt);return;case"option":for(var qt in a)if(K=a[qt],a.hasOwnProperty(qt)&&K!=null&&!r.hasOwnProperty(qt))switch(qt){case"selected":e.selected=!1;break;default:qe(e,n,qt,null,r,K)}for(k in r)if(K=r[k],lt=a[k],r.hasOwnProperty(k)&&K!==lt&&(K!=null||lt!=null))switch(k){case"selected":K!==lt&&(ze=!0),e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:qe(e,n,k,K,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)K=a[ie],a.hasOwnProperty(ie)&&K!=null&&!r.hasOwnProperty(ie)&&qe(e,n,ie,null,r,K);for(et in r)if(K=r[et],lt=a[et],r.hasOwnProperty(et)&&K!==lt&&(K!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,n));break;default:qe(e,n,et,K,r,lt)}return;default:if(mf(n)){for(var Se in a)K=a[Se],a.hasOwnProperty(Se)&&K!==void 0&&!r.hasOwnProperty(Se)&&dd(e,n,Se,void 0,r,K);for(ct in r)K=r[ct],lt=a[ct],!r.hasOwnProperty(ct)||K===lt||K===void 0&&lt===void 0||dd(e,n,ct,K,r,lt);return}}for(var tt in a)K=a[tt],a.hasOwnProperty(tt)&&K!=null&&!r.hasOwnProperty(tt)&&qe(e,n,tt,null,r,K);for(bt in r)K=r[bt],lt=a[bt],!r.hasOwnProperty(bt)||K===lt||K==null&&lt==null||qe(e,n,bt,K,r,lt)}function i_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function h1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],h=c.transferSize,x=c.initiatorType,C=c.duration;if(h&&C&&i_(x)){for(x=0,C=c.responseEnd,r+=1;r<a.length;r++){var k=a[r],et=k.startTime;if(et>C)break;var ct=k.transferSize,bt=k.initiatorType;ct&&i_(bt)&&(k=k.responseEnd,x+=ct*(k<C?1:(C-et)/(k-et)))}if(--r,n+=8*(h+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pd=null,md=null;function ul(e){return e.nodeType===9?e:e.ownerDocument}function a_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function r_(e,n,a,r){return a=ul(a).createElement(e),a[Vt]=r,a[ne]=n,zn(a,e,n),Pe(a),a}function gd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vd=null;function d1(){var e=window.event;return e&&e.type==="popstate"?e===vd?!1:(vd=e,!0):(vd=null,!1)}var _d=typeof setTimeout=="function"?setTimeout:void 0,p1=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,l_=typeof requestAnimationFrame=="function"?requestAnimationFrame:_d,m1=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(e){return o_.resolve(null).then(e).catch(g1)}:_d;function g1(e){setTimeout(function(){throw e})}function is(e){return e==="head"}function u_(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),qr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ad(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ad(a);for(var h=a.firstChild;h;){var x=h.nextSibling,C=h.nodeName;h[Ie]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Ad(e.ownerDocument.body);a=c}while(a);qr(n)}function c_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function f_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var h=n[c];0<h.width&&0<h.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function h_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function v1(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function yd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return v1(n,a,e)}function _1(e){return e.documentElement.clientHeight}function y1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function x1(e,n,a,r,c,h,x,C,k){var et=n.nodeType===9?n:n.ownerDocument;try{var ct=et.startViewTransition({update:function(){var K=et.defaultView,lt=K.navigation&&K.navigation.transition,qt=et.fonts.status;r();var ie=[];if(qt==="loaded"&&(_1(et),et.fonts.status==="loading"&&ie.push(et.fonts.ready)),qt=ie.length,e!==null)for(var Se=e.suspenseyImages,tt=0,W=0;W<Se.length;W++){var ot=Se[W];if(!ot.complete){var Mt=ot.getBoundingClientRect();if(0<Mt.bottom&&0<Mt.right&&Mt.top<K.innerHeight&&Mt.left<K.innerWidth){if(tt+=L_(ot),tt>uc){ie.length=qt;break}ot=new Promise(y1.bind(ot)),ie.push(ot)}}}if(0<ie.length)return K=Promise.race([Promise.all(ie),new Promise(function(Jt){return setTimeout(Jt,500)})]).then(c,c),(lt?Promise.allSettled([lt.finished,K]):K).then(h,h);if(c(),lt)return lt.finished.then(h,h);h()},types:a});et.__reactViewTransition=ct;var bt=[];return ct.ready.then(function(){for(var K=et.documentElement.getAnimations({subtree:!0}),lt=0;lt<K.length;lt++){var qt=K[lt],ie=qt.effect,Se=ie.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){bt.push(qt),qt=ie.getKeyframes();for(var tt=Se=void 0,W=!0,ot=0;ot<qt.length;ot++){var Mt=qt[ot],Jt=Mt.width;if(Se===void 0)Se=Jt;else if(Se!==Jt){W=!1;break}if(Jt=Mt.height,tt===void 0)tt=Jt;else if(tt!==Jt){W=!1;break}delete Mt.width,delete Mt.height,Mt.transform==="none"&&delete Mt.transform}W&&Se!==void 0&&tt!==void 0&&(ie.setKeyframes(qt),W=getComputedStyle(ie.target,ie.pseudoElement),W.width!==Se||W.height!==tt)&&(W=qt[0],W.width=Se,W.height=tt,W=qt[qt.length-1],W.width=Se,W.height=tt,ie.setKeyframes(qt))}}x()},function(K){et.__reactViewTransition===ct&&(et.__reactViewTransition=null);try{if(typeof K=="object"&&K!==null)switch(K.name){case"InvalidStateError":(K.message==="View transition was skipped because document visibility state is hidden."||K.message==="Skipping view transition because document visibility state has become hidden."||K.message==="Skipping view transition because viewport size changed."||K.message==="Transition was aborted because of invalid state")&&(K=null)}K!==null&&k(K)}finally{r(),c(),x()}}),ct.finished.finally(function(){for(var K=0;K<bt.length;K++)bt[K].cancel();et.__reactViewTransition===ct&&(et.__reactViewTransition=null),C()}),ct}catch{return r(),c(),x(),null}}function Hs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Hs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Hs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var h=a[c].effect;h!==null&&h.target===e&&h.pseudoElement===n&&r.push(a[c])}return r},Hs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function d_(e){return{name:e,group:new Hs("group",e),imagePair:new Hs("image-pair",e),old:new Hs("old",e),new:new Hs("new",e)}}function pi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}pi.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var h=this._eventListeners;if(m_(h,e,n,a)===-1){var x=this,C=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(C=function(k){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,k):n.handleEvent(k)}),r!==null&&(c=x.removeEventListener.bind(x,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Fr(a),h.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:C,cleanup:c}),g(this._fragmentFiber.child,!1,S1,e,C,r)}this._eventListeners=h}};function S1(e,n,a,r){return M(e).addEventListener(n,a,r),!1}pi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=m_(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var h=c.cleanup;c=Fr(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,M1,e,a,c),r.splice(n,1),h!==null&&h()}};function M1(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function Fr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function p_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function m_(e,n,a,r){if(e.length===0)return-1;r=p_(r);for(var c=0;c<e.length;c++){var h=e[c];if(h.type===n&&h.listener===a&&p_(h.optionsOrUseCapture)===r)return c}return-1}pi.prototype.dispatchEvent=function(e){var n=y(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var h=a[c];r.addEventListener(h.type,h.attachedListener,Fr(h.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)h=a[c],r.removeEventListener(h.type,h.attachedListener,Fr(h.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},pi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,g_,e,void 0,void 0)};function g_(e,n){return e.tag===6?!1:(e=M(e),O1(e,n))}pi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,xd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!g_(n[a],e);a--);};function xd(e,n){return n.push(e),!1}pi.prototype.blur=function(){var e=y(this._fragmentFiber);e!==null&&(e=M(e),e=ul(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,E1,e,void 0,void 0))};function E1(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}pi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,T1,e,void 0,void 0)};function T1(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}pi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,b1,e,void 0,void 0);for(var a=n=0;a<Ii.length;a++){var r=Ii[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Ii[n++]=r}Ii.length=n}};function b1(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Ii=[],Sd=!1;function A1(e,n,a){Ii.push({fragmentInstance:e,observer:n,instance:a}),Sd||(Sd=!0,P1(function(){Sd=!1;var r=Ii;Ii=[];for(var c=0;c<r.length;c++){var h=r[c];h.observer.unobserve(h.instance)}}))}pi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,R1,e,void 0,void 0),e};function R1(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}pi.prototype.getRootNode=function(e){var n=y(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},pi.prototype.compareDocumentPosition=function(e){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,xd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var h=S(this._fragmentFiber)?n.parentElement:r;if(h==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=h.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,h=h.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),C=c.compareDocumentPosition(e),k=x&Node.DOCUMENT_POSITION_CONTAINED_BY||C&Node.DOCUMENT_POSITION_CONTAINED_BY;return C=r&&h&&x&Node.DOCUMENT_POSITION_FOLLOWING&&C&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||h&&c===e||k||C?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!h&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||C1(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function C1(e,n,a,r,c){var h=Be(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!h)t:{for(;h!==null;){if(h.tag===7&&(h===n||h.alternate===n)){a=!0;break t}h=h.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(h===null)return h=c.ownerDocument,c===h||c===h.documentElement||c===h.body;t:{for(h=n,n=y(n);h!==null;){if(!(h.tag!==5&&h.tag!==3&&h.tag!==27||h!==n&&h.alternate!==n)){h=!0;break t}h=h.return}h=!1}return h}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!h)&&!(n=h===a)&&(n=z(a,h,I),n===null?n=!1:(g(n,!0,D,h,a),h=_,_=null,n=h!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!h)&&!(n=h===r)&&(n=z(r,h,I),n===null?n=!1:(g(n,!0,b,h,r),h=_,w=_=null,n=h!==null)),n):!1}function v_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}pi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,xd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),v_(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),v_(c,a)):M(c).scrollIntoView(e),r+=a?-1:1}};function w1(e,n){return e=M(e),__(e,n),!1}function __(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function y_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,Fr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){for(var x=0,C=0;C<Ii.length;C++){var k=Ii[C];(k.fragmentInstance!==n||k.observer!==h||k.instance!==e)&&(Ii[x++]=k)}Ii.length=x,h.observe(e)}),__(e,n))}function D1(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,Fr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){typeof h.rootMargin=="string"?A1(n,h,e):h.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Md(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Md(a),ce(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function N1(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ie])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function U1(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function x_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ri(e.nextSibling),e===null))return null;return e}function Ed(e){return e.data==="$?"||e.data==="$~"}function Td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function L1(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var bd=null;function S_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function M_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function O1(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function P1(e){l_(function(){l_(function(n){return e(n)})})}function E_(e,n,a){switch(n=ul(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function T_(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&qe(e,n,r,null,c1,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Wi&&(e.onclick=null),ce(e)}function Ad(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ce(e)}var Ci=new Map,b_=new Set;function cl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ta=Lt.d;Lt.d={f:z1,r:I1,D:B1,C:F1,L:H1,m:G1,X:k1,S:V1,M:X1};function z1(){var e=Ta.f(),n=tc();return e||n}function I1(e){var n=Ee(e);n!==null&&n.tag===5&&n.type==="form"?Rg(n):Ta.r(e)}var Hr=typeof document>"u"?null:document;function A_(e,n,a){var r=Hr;if(r&&typeof n=="string"&&n){var c=xi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),b_.has(c)||(b_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),zn(n,"link",e),Pe(n),r.head.appendChild(n)))}}function B1(e){Ta.D(e),A_("dns-prefetch",e,null)}function F1(e,n){Ta.C(e,n),A_("preconnect",e,n)}function H1(e,n,a){Ta.L(e,n,a);var r=Hr;if(r&&e&&n){var c='link[rel="preload"][as="'+xi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+xi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+xi(a.imageSizes)+'"]')):c+='[href="'+xi(e)+'"]';var h=c;switch(n){case"style":h=Gr(e);break;case"script":h=Vr(e)}if(!(Ci.has(h)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(h,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(fl(h))||n==="script"&&r.querySelector(hl(h))))){var x=r.createElement("link");zn(x,"link",e),n==="style"&&(x[Oe]=!0,x.onload=x.onerror=function(){za(x)}),Pe(x),r.head.appendChild(x)}}}function G1(e,n){Ta.m(e,n);var a=Hr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xi(r)+'"][href="'+xi(e)+'"]',h=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Vr(e)}if(!Ci.has(h)&&(e=P({rel:"modulepreload",href:e},n),Ci.set(h,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(h)))return}r=a.createElement("link"),zn(r,"link",e),Pe(r),a.head.appendChild(r)}}}function V1(e,n,a){Ta.S(e,n,a);var r=Hr;if(r&&e){var c=ri(r).hoistableStyles,h=Gr(e);n=n||"default";var x=c.get(h);if(!x){var C={loading:0,preload:null};if(x=r.querySelector(fl(h)))C.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(h))&&Rd(e,a);var k=x=r.createElement("link");Pe(k),zn(k,"link",e),k._p=new Promise(function(et,ct){k.onload=et,k.onerror=ct}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,oc(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:C},c.set(h,x)}}}function k1(e,n){Ta.X(e,n);var a=Hr;if(a&&e){var r=ri(a).hoistableScripts,c=Vr(e),h=r.get(c);h||(h=a.querySelector(hl(c)),h||(e=P({src:e,async:!0},n),(n=Ci.get(c))&&Cd(e,n),h=a.createElement("script"),Pe(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function X1(e,n){Ta.M(e,n);var a=Hr;if(a&&e){var r=ri(a).hoistableScripts,c=Vr(e),h=r.get(c);h||(h=a.querySelector(hl(c)),h||(e=P({src:e,async:!0,type:"module"},n),(n=Ci.get(c))&&Cd(e,n),h=a.createElement("script"),Pe(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function R_(e,n,a,r){var c=(c=oe.current)?cl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Gr(a.href),n=ri(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gr(a.href);var h=ri(c).hoistableStyles,x=h.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=c.querySelector(fl(e)))?h._p||(x.instance=h,x.state.loading=5):(h=Ci.get(e),h||(h={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,h)),q1(c,e,h,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Vr(a),n=ri(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Gr(e){return'href="'+xi(e)+'"'}function fl(e){return'link[rel="stylesheet"]['+e+"]"}function C_(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function q1(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Oe]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Oe]=!0,n.onload=n.onerror=za.bind(null,n),zn(n,"link",a),Pe(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Vr(e){return'[src="'+xi(e)+'"]'}function hl(e){return"script[async]"+e}function w_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+xi(a.href)+'"]');if(r)return n.instance=r,Pe(r),r;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Pe(r),zn(r,"style",c),oc(r,a.precedence,e),n.instance=r;case"stylesheet":c=Gr(a.href);var h=e.querySelector(fl(c));if(h)return n.state.loading|=4,n.instance=h,Pe(h),h;r=C_(a),(c=Ci.get(c))&&Rd(r,c),h=(e.ownerDocument||e).createElement("link"),Pe(h);var x=h;return x._p=new Promise(function(C,k){x.onload=C,x.onerror=k}),zn(h,"link",r),n.state.loading|=4,oc(h,a.precedence,e),n.instance=h;case"script":return h=Vr(a.src),(c=e.querySelector(hl(h)))?(n.instance=c,Pe(c),c):(r=a,(c=Ci.get(h))&&(r=P({},a),Cd(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Pe(c),zn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,oc(r,a.precedence,e));return n.instance}function oc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,h=c,x=0;x<r.length;x++){var C=r[x];if(C.dataset.precedence===n)h=C;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Rd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Cd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var lc=null;function D_(e,n,a){if(lc===null){var r=new Map,c=lc=new Map;c.set(a,r)}else c=lc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[Ie]||h[Vt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var C=r.get(x);C?C.push(h):r.set(x,[h])}}return r}function wd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Y1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function N_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function U_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function L_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function O_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=L_(n),e.suspenseyImages.push(n)),e=Z1.bind(e),n.decode().then(e,e))}function W1(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Gr(r.href),h=n.querySelector(fl(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=dl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Pe(h);return}h=n.ownerDocument||n,r=C_(r),(c=Ci.get(c))&&Rd(r,c),h=h.createElement("link"),Pe(h);var x=h;x._p=new Promise(function(C,k){x.onload=C,x.onerror=k}),zn(h,"link",r),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=dl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var uc=0;function j1(e,n){return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&uc===0&&(uc=62500*h1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>uc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function P_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)fc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function dl(){this.count--,P_(this)}function Z1(){this.imgCount--,P_(this)}var cc=null;function fc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cc=new Map,n.forEach(Q1,e),cc=null,dl.call(e))}function Q1(e,n){if(!(n.state.loading&4)){var a=cc.get(e);if(a)var r=a.get(null);else{a=new Map,cc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var x=c[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),h=a.get(x)||r,h===r&&a.set(null,c),a.set(x,c),this.count++,r=dl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var kr={$$typeof:Q,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function K1(e,n,a,r,c,h,x,C,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Co(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.hiddenUpdates=Co(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.transitionTypes=null,this.incompleteTransitions=new Map}function z_(e,n,a,r,c,h,x,C,k,et,ct,bt){return e=new K1(e,n,a,x,k,et,ct,bt,C),n=1,h===!0&&(n|=24),h=ti(3,null,null,n),e.current=h,h.stateNode=e,n=Xf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:r,isDehydrated:a,cache:n},jf(h),e}function I_(e){return e?(e=mr,e):mr}function B_(e,n,a,r,c,h){c=I_(c),r.context===null?r.context=c:r.pendingContext=c,r=qa(n),r.payload={element:a},h=h===void 0?null:h,h!==null&&(r.callback=h),a=Ya(e,r,n),a!==null&&(ai(a,e,n),Xo(a,e,n))}function F_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Dd(e,n){F_(e,n),(e=e.alternate)&&F_(e,n)}function H_(e){if(e.tag===13||e.tag===31){var n=Es(e,67108864);n!==null&&ai(n,e,67108864),Dd(e,67108864)}}function G_(e){if(e.tag===13||e.tag===31){var n=di();n=dt(n);var a=Es(e,n);a!==null&&ai(a,e,n),Dd(e,n)}}var Xr=!0;function J1(e,n,a,r){var c=Tt.T;Tt.T=null;var h=Lt.p;try{Lt.p=2,Nd(e,n,a,r)}finally{Lt.p=h,Tt.T=c}}function $1(e,n,a,r){var c=Tt.T;Tt.T=null;var h=Lt.p;try{Lt.p=8,Nd(e,n,a,r)}finally{Lt.p=h,Tt.T=c}}function Nd(e,n,a,r){if(Xr){var c=Ud(r);if(c===null)hd(e,n,r,hc,a),k_(e,r);else if(eE(c,e,n,a,r))r.stopPropagation();else if(k_(e,r),n&4&&-1<tE.indexOf(e)){for(;c!==null;){var h=Ee(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=yi(h.pendingLanes);if(x!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;x;){var k=1<<31-Bn(x);C.entanglements[1]|=k,x&=~k}ia(h),(Fe&6)===0&&(Ku=j()+500,rl(0))}}break;case 31:case 13:C=Es(h,2),C!==null&&ai(C,h,2),tc(),Dd(h,2)}if(h=Ud(r),h===null&&hd(e,n,r,hc,a),h===c)break;c=h}c!==null&&r.stopPropagation()}else hd(e,n,r,null,a)}}function Ud(e){return e=vf(e),Ld(e)}var hc=null;function Ld(e){if(hc=null,e=Be(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return hc=e,null}function V_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case Xt:return 2;case te:return 8;case Pt:case Dt:return 32;case ae:return 268435456;default:return 32}default:return 32}}var Od=!1,as=null,ss=null,rs=null,pl=new Map,ml=new Map,os=[],tE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(e,n){switch(e){case"focusin":case"focusout":as=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":rs=null;break;case"pointerover":case"pointerout":pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(n.pointerId)}}function gl(e,n,a,r,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Ee(n),n!==null&&H_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function eE(e,n,a,r,c){switch(n){case"focusin":return as=gl(as,e,n,a,r,c),!0;case"dragenter":return ss=gl(ss,e,n,a,r,c),!0;case"mouseover":return rs=gl(rs,e,n,a,r,c),!0;case"pointerover":var h=c.pointerId;return pl.set(h,gl(pl.get(h)||null,e,n,a,r,c)),!0;case"gotpointercapture":return h=c.pointerId,ml.set(h,gl(ml.get(h)||null,e,n,a,r,c)),!0}return!1}function X_(e){var n=Be(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,jt(e.priority,function(){G_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,jt(e.priority,function(){G_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ud(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);gf=r,a.target.dispatchEvent(r),gf=null}else return n=Ee(a),n!==null&&H_(n),e.blockedOn=a,!1;n.shift()}return!0}function q_(e,n,a){dc(e)&&a.delete(n)}function nE(){Od=!1,as!==null&&dc(as)&&(as=null),ss!==null&&dc(ss)&&(ss=null),rs!==null&&dc(rs)&&(rs=null),pl.forEach(q_),ml.forEach(q_)}function pc(e,n){e.blockedOn===n&&(e.blockedOn=null,Od||(Od=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,nE)))}var mc=null;function Y_(e){mc!==e&&(mc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){mc===e&&(mc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Ld(r||a)===null)continue;break}var h=Ee(a);h!==null&&(e.splice(n,3),n-=3,mh(h,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function qr(e){function n(k){return pc(k,e)}as!==null&&pc(as,e),ss!==null&&pc(ss,e),rs!==null&&pc(rs,e),pl.forEach(n),ml.forEach(n);for(var a=0;a<os.length;a++){var r=os[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<os.length&&(a=os[0],a.blockedOn===null);)X_(a),a.blockedOn===null&&os.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],h=a[r+1],x=c[ne]||null;if(typeof h=="function")x||Y_(a);else if(x){var C=null;if(h&&h.hasAttribute("formAction")){if(c=h,x=h[ne]||null)C=x.formAction;else if(Ld(c)!==null)continue}else C=x.action;typeof C=="function"?a[r+1]=C:(a.splice(r,3),r-=3),Y_(a)}}}function W_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Pd(e){this._internalRoot=e}gc.prototype.render=Pd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=di();B_(a,r,e,n,null,null)},gc.prototype.unmount=Pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;B_(e.current,2,null,e,null,null),tc(),n[he]=null}};function gc(e){this._internalRoot=e}gc.prototype.unstable_scheduleHydration=function(e){if(e){var n=It();e={blockedOn:null,target:e,priority:n};for(var a=0;a<os.length&&n!==0&&n<os[a].priority;a++);os.splice(a,0,e),a===0&&X_(e)}};var j_=t.version;if(j_!=="19.3.1")throw Error(s(527,j_,"19.3.1"));Lt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var iE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{we=vc.inject(iE),nn=vc}catch{}}return _l.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Ig,h=Bg,x=Fg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=z_(e,1,!1,null,null,a,r,null,c,h,x,W_),e[he]=n.current,fd(e),new Pd(n)},_l.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",h=Ig,x=Bg,C=Fg,k=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=z_(e,1,!0,n,a??null,r,c,k,h,x,C,W_),n.context=I_(null),a=n.current,r=di(),r=dt(r),c=qa(r),c.callback=null,Ya(a,c,r),a=r,n.current.lanes=a,xs(n,a),ia(n),e[he]=n.current,fd(e),new gc(n)},_l.version="19.3.1",_l}var ay;function mE(){if(ay)return Bd.exports;ay=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bd.exports=pE(),Bd.exports}var gE=mE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tx=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=ge.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:f,...d},p)=>ge.createElement("svg",{ref:p,..._E,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:Tx("lucide",l),...d},[...f.map(([m,v])=>ge.createElement(m,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=(o,t)=>{const i=ge.forwardRef(({className:s,...l},u)=>ge.createElement(yE,{ref:u,iconNode:t,className:Tx(`lucide-${vE(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=$n("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=$n("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=$n("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=$n("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=$n("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
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
 */const bx=$n("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=$n("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=$n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=$n("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xm="180",wE=0,uy=1,DE=2,Ax=1,NE=2,Da=3,gs=0,kn=1,Gi=2,Ua=0,fo=1,zl=2,cy=3,fy=4,UE=5,Zs=100,LE=101,OE=102,PE=103,zE=104,IE=200,BE=201,FE=202,HE=203,bp=204,Ap=205,GE=206,VE=207,kE=208,XE=209,qE=210,YE=211,WE=212,jE=213,ZE=214,Rp=0,Cp=1,wp=2,po=3,Dp=4,Np=5,Up=6,Lp=7,Rx=0,QE=1,KE=2,La=0,Cx=1,wx=2,Dx=3,Sm=4,Nx=5,Ux=6,Lx=7,Ox=300,mo=301,go=302,Op=303,Pp=304,lf=306,zp=1e3,Ks=1001,Ip=1002,_i=1003,JE=1004,_c=1005,sa=1006,Vd=1007,Js=1008,qi=1009,Px=1010,zx=1011,Il=1012,Mm=1013,tr=1014,ra=1015,Xi=1016,Em=1017,Tm=1018,Bl=1020,Ix=35902,Bx=35899,Fx=1021,Hx=1022,ki=1023,Fl=1026,Hl=1027,bm=1028,Am=1029,Gx=1030,Rm=1031,Cm=1033,jc=33776,Zc=33777,Qc=33778,Kc=33779,Bp=35840,Fp=35841,Hp=35842,Gp=35843,Vp=36196,kp=37492,Xp=37496,qp=37808,Yp=37809,Wp=37810,jp=37811,Zp=37812,Qp=37813,Kp=37814,Jp=37815,$p=37816,tm=37817,em=37818,nm=37819,im=37820,am=37821,sm=36492,rm=36494,om=36495,lm=36283,um=36284,cm=36285,fm=36286,$E=3200,tT=3201,Vx=0,eT=1,ms="",si="srgb",vo="srgb-linear",tf="linear",Ye="srgb",Yr=7680,hy=519,nT=512,iT=513,aT=514,kx=515,sT=516,rT=517,oT=518,lT=519,dy=35044,py="300 es",oa=2e3,ef=2001;class Mo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let my=1234567;const Ul=Math.PI/180,Gl=180/Math.PI;function nr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[o&255]+Gn[o>>8&255]+Gn[o>>16&255]+Gn[o>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Ae(o,t,i){return Math.max(t,Math.min(i,o))}function wm(o,t){return(o%t+t)%t}function uT(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function cT(o,t,i){return o!==t?(i-o)/(t-o):0}function Ll(o,t,i){return(1-i)*o+i*t}function fT(o,t,i,s){return Ll(o,t,1-Math.exp(-i*s))}function hT(o,t=1){return t-Math.abs(wm(o,t*2)-t)}function dT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function pT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function mT(o,t){return o+Math.floor(Math.random()*(t-o+1))}function gT(o,t){return o+Math.random()*(t-o)}function vT(o){return o*(.5-Math.random())}function _T(o){o!==void 0&&(my=o);let t=my+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yT(o){return o*Ul}function xT(o){return o*Gl}function ST(o){return(o&o-1)===0&&o!==0}function MT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function ET(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function TT(o,t,i,s,l){const u=Math.cos,f=Math.sin,d=u(i/2),p=f(i/2),m=u((t+s)/2),v=f((t+s)/2),g=u((t-s)/2),y=f((t-s)/2),S=u((s-t)/2),T=f((s-t)/2);switch(l){case"XYX":o.set(d*v,p*g,p*y,d*m);break;case"YZY":o.set(p*y,d*v,p*g,d*m);break;case"ZXZ":o.set(p*g,p*y,d*v,d*m);break;case"XZX":o.set(d*v,p*T,p*S,d*m);break;case"YXY":o.set(p*S,d*v,p*T,d*m);break;case"ZYZ":o.set(p*T,p*S,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function oo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Qn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const dn={DEG2RAD:Ul,RAD2DEG:Gl,generateUUID:nr,clamp:Ae,euclideanModulo:wm,mapLinear:uT,inverseLerp:cT,lerp:Ll,damp:fT,pingpong:hT,smoothstep:dT,smootherstep:pT,randInt:mT,randFloat:gT,randFloatSpread:vT,seededRandom:_T,degToRad:yT,radToDeg:xT,isPowerOfTwo:ST,ceilPowerOfTwo:MT,floorPowerOfTwo:ET,setQuaternionFromProperEuler:TT,normalize:Qn,denormalize:oo};class Gt{constructor(t=0,i=0){Gt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*s-f*l+t.x,this.y=u*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jn{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,f,d){let p=s[l+0],m=s[l+1],v=s[l+2],g=s[l+3];const y=u[f+0],S=u[f+1],T=u[f+2],A=u[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=y,t[i+1]=S,t[i+2]=T,t[i+3]=A;return}if(g!==A||p!==y||m!==S||v!==T){let M=1-d;const _=p*y+m*S+v*T+g*A,w=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const I=Math.sqrt(D),z=Math.atan2(I,_*w);M=Math.sin(M*z)/I,d=Math.sin(d*z)/I}const b=d*w;if(p=p*M+y*b,m=m*M+S*b,v=v*M+T*b,g=g*M+A*b,M===1-d){const I=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=I,m*=I,v*=I,g*=I}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,f){const d=s[l],p=s[l+1],m=s[l+2],v=s[l+3],g=u[f],y=u[f+1],S=u[f+2],T=u[f+3];return t[i]=d*T+v*g+p*S-m*y,t[i+1]=p*T+v*y+m*g-d*S,t[i+2]=m*T+v*S+d*y-p*g,t[i+3]=v*T-d*g-p*y-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(l/2),g=d(u/2),y=p(s/2),S=p(l/2),T=p(u/2);switch(f){case"XYZ":this._x=y*v*g+m*S*T,this._y=m*S*g-y*v*T,this._z=m*v*T+y*S*g,this._w=m*v*g-y*S*T;break;case"YXZ":this._x=y*v*g+m*S*T,this._y=m*S*g-y*v*T,this._z=m*v*T-y*S*g,this._w=m*v*g+y*S*T;break;case"ZXY":this._x=y*v*g-m*S*T,this._y=m*S*g+y*v*T,this._z=m*v*T+y*S*g,this._w=m*v*g-y*S*T;break;case"ZYX":this._x=y*v*g-m*S*T,this._y=m*S*g+y*v*T,this._z=m*v*T-y*S*g,this._w=m*v*g+y*S*T;break;case"YZX":this._x=y*v*g+m*S*T,this._y=m*S*g+y*v*T,this._z=m*v*T-y*S*g,this._w=m*v*g-y*S*T;break;case"XZY":this._x=y*v*g-m*S*T,this._y=m*S*g-y*v*T,this._z=m*v*T+y*S*g,this._w=m*v*g+y*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],f=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],y=s+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-m)*S,this._z=(f-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(v-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(u+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(u-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(f-l)/S,this._x=(u+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,f=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+f*d+l*m-u*p,this._y=l*v+f*p+u*d-s*m,this._z=u*v+f*m+s*p-l*d,this._w=f*v-s*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-i)*v)/m,y=Math.sin(i*v)/m;return this._w=f*g+this._w*y,this._x=s*g+this._x*y,this._y=l*g+this._y*y,this._z=u*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,i=0,s=0){H.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(gy.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(gy.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),v=2*(d*i-u*l),g=2*(u*s-f*i);return this.x=i+p*m+f*g-d*v,this.y=s+p*v+d*m-u*g,this.z=l+p*g+u*v-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return kd.copy(this).projectOnVector(t),this.sub(kd)}reflect(t){return this.sub(kd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kd=new H,gy=new Jn;class ye{constructor(t,i,s,l,u,f,d,p,m){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,p,m)}set(t,i,s,l,u,f,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],v=s[4],g=s[7],y=s[2],S=s[5],T=s[8],A=l[0],M=l[3],_=l[6],w=l[1],D=l[4],b=l[7],I=l[2],z=l[5],P=l[8];return u[0]=f*A+d*w+p*I,u[3]=f*M+d*D+p*z,u[6]=f*_+d*b+p*P,u[1]=m*A+v*w+g*I,u[4]=m*M+v*D+g*z,u[7]=m*_+v*b+g*P,u[2]=y*A+S*w+T*I,u[5]=y*M+S*D+T*z,u[8]=y*_+S*b+T*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*f*v-i*d*m-s*u*v+s*d*p+l*u*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=v*f-d*m,y=d*p-v*u,S=m*u-f*p,T=i*g+s*y+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=g*A,t[1]=(l*m-v*s)*A,t[2]=(d*s-l*f)*A,t[3]=y*A,t[4]=(v*i-l*p)*A,t[5]=(l*u-d*i)*A,t[6]=S*A,t[7]=(s*p-m*i)*A,t[8]=(f*i-s*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Xd.makeScale(t,i)),this}rotate(t){return this.premultiply(Xd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Xd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xd=new ye;function Xx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function nf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bT(){const o=nf("canvas");return o.style.display="block",o}const vy={};function Vl(o){o in vy||(vy[o]=!0,console.warn(o))}function AT(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const _y=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yy=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RT(){const o={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ye&&(l.r=Oa(l.r),l.g=Oa(l.g),l.b=Oa(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ye&&(l.r=ho(l.r),l.g=ho(l.g),l.b=ho(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ms?tf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Vl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Vl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[vo]:{primaries:t,whitePoint:s,transfer:tf,toXYZ:_y,fromXYZ:yy,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:s,transfer:Ye,toXYZ:_y,fromXYZ:yy,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const Le=RT();function Oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ho(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Wr;class CT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Wr===void 0&&(Wr=nf("canvas")),Wr.width=t.width,Wr.height=t.height;const l=Wr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Wr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=Oa(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Oa(i[s]/255)*255):i[s]=Oa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wT=0;class Dm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wT++}),this.uuid=nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(qd(l[f].image)):u.push(qd(l[f]))}else u=qd(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function qd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?CT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DT=0;const Yd=new H;class Xn extends Mo{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Ks,l=Ks,u=sa,f=Js,d=ki,p=qi,m=Xn.DEFAULT_ANISOTROPY,v=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=nr(),this.name="",this.source=new Dm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yd).x}get height(){return this.source.getSize(Yd).y}get depth(){return this.source.getSize(Yd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ox)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zp:t.x=t.x-Math.floor(t.x);break;case Ks:t.x=t.x<0?0:1;break;case Ip:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zp:t.y=t.y-Math.floor(t.y);break;case Ks:t.y=t.y<0?0:1;break;case Ip:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Ox;Xn.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,i=0,s=0,l=1){cn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],v=p[4],g=p[8],y=p[1],S=p[5],T=p[9],A=p[2],M=p[6],_=p[10];if(Math.abs(v-y)<.01&&Math.abs(g-A)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+A)<.1&&Math.abs(T+M)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,b=(S+1)/2,I=(_+1)/2,z=(v+y)/4,P=(g+A)/4,V=(T+M)/4;return D>b&&D>I?D<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(D),l=z/s,u=P/s):b>I?b<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(b),s=z/l,u=V/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=P/u,l=V/u),this.set(s,l,u,i),this}let w=Math.sqrt((M-T)*(M-T)+(g-A)*(g-A)+(y-v)*(y-v));return Math.abs(w)<.001&&(w=1),this.x=(M-T)/w,this.y=(g-A)/w,this.z=(y-v)/w,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NT extends Mo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Xn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:sa,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Dm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends NT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class qx extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class UT extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(t=new H(1/0,1/0,1/0),i=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Bi):Bi.fromBufferAttribute(u,f),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yl),xc.subVectors(this.max,yl),jr.subVectors(t.a,yl),Zr.subVectors(t.b,yl),Qr.subVectors(t.c,yl),us.subVectors(Zr,jr),cs.subVectors(Qr,Zr),Gs.subVectors(jr,Qr);let i=[0,-us.z,us.y,0,-cs.z,cs.y,0,-Gs.z,Gs.y,us.z,0,-us.x,cs.z,0,-cs.x,Gs.z,0,-Gs.x,-us.y,us.x,0,-cs.y,cs.x,0,-Gs.y,Gs.x,0];return!Wd(i,jr,Zr,Qr,xc)||(i=[1,0,0,0,1,0,0,0,1],!Wd(i,jr,Zr,Qr,xc))?!1:(Sc.crossVectors(us,cs),i=[Sc.x,Sc.y,Sc.z],Wd(i,jr,Zr,Qr,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ba=[new H,new H,new H,new H,new H,new H,new H,new H],Bi=new H,yc=new ir,jr=new H,Zr=new H,Qr=new H,us=new H,cs=new H,Gs=new H,yl=new H,xc=new H,Sc=new H,Vs=new H;function Wd(o,t,i,s,l){for(let u=0,f=o.length-3;u<=f;u+=3){Vs.fromArray(o,u);const d=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),p=t.dot(Vs),m=i.dot(Vs),v=s.dot(Vs);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const LT=new ir,xl=new H,jd=new H;class ar{constructor(t=new H,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):LT.setFromPoints(t).getCenter(s);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xl.subVectors(t,this.center);const i=xl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(xl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xl.copy(t.center).add(jd)),this.expandByPoint(xl.copy(t.center).sub(jd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Aa=new H,Zd=new H,Mc=new H,fs=new H,Qd=new H,Ec=new H,Kd=new H;class Nm{constructor(t=new H,i=new H(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Zd.copy(t).add(i).multiplyScalar(.5),Mc.copy(i).sub(t).normalize(),fs.copy(this.origin).sub(Zd);const u=t.distanceTo(i)*.5,f=-this.direction.dot(Mc),d=fs.dot(this.direction),p=-fs.dot(Mc),m=fs.lengthSq(),v=Math.abs(1-f*f);let g,y,S,T;if(v>0)if(g=f*p-d,y=f*d-p,T=u*v,g>=0)if(y>=-T)if(y<=T){const A=1/v;g*=A,y*=A,S=g*(g+f*y+2*d)+y*(f*g+y+2*p)+m}else y=u,g=Math.max(0,-(f*y+d)),S=-g*g+y*(y+2*p)+m;else y=-u,g=Math.max(0,-(f*y+d)),S=-g*g+y*(y+2*p)+m;else y<=-T?(g=Math.max(0,-(-f*u+d)),y=g>0?-u:Math.min(Math.max(-u,-p),u),S=-g*g+y*(y+2*p)+m):y<=T?(g=0,y=Math.min(Math.max(-u,-p),u),S=y*(y+2*p)+m):(g=Math.max(0,-(f*u+d)),y=g>0?u:Math.min(Math.max(-u,-p),u),S=-g*g+y*(y+2*p)+m);else y=f>0?-u:u,g=Math.max(0,-(f*y+d)),S=-g*g+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Zd).addScaledVector(Mc,y),S}intersectSphere(t,i){Aa.subVectors(t.center,this.origin);const s=Aa.dot(this.direction),l=Aa.dot(Aa)-s*s,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return m>=0?(s=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(s=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),v>=0?(u=(t.min.y-y.y)*v,f=(t.max.y-y.y)*v):(u=(t.max.y-y.y)*v,f=(t.min.y-y.y)*v),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-y.z)*g,p=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,p=(t.min.z-y.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Aa)!==null}intersectTriangle(t,i,s,l,u){Qd.subVectors(i,t),Ec.subVectors(s,t),Kd.crossVectors(Qd,Ec);let f=this.direction.dot(Kd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fs.subVectors(this.origin,t);const p=d*this.direction.dot(Ec.crossVectors(fs,Ec));if(p<0)return null;const m=d*this.direction.dot(Qd.cross(fs));if(m<0||p+m>f)return null;const v=-d*fs.dot(Kd);return v<0?null:this.at(v/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(t,i,s,l,u,f,d,p,m,v,g,y,S,T,A,M){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,p,m,v,g,y,S,T,A,M)}set(t,i,s,l,u,f,d,p,m,v,g,y,S,T,A,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=g,_[14]=y,_[3]=S,_[7]=T,_[11]=A,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Kr.setFromMatrixColumn(t,0).length(),u=1/Kr.setFromMatrixColumn(t,1).length(),f=1/Kr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const y=f*v,S=f*g,T=d*v,A=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=S+T*m,i[5]=y-A*m,i[9]=-d*p,i[2]=A-y*m,i[6]=T+S*m,i[10]=f*p}else if(t.order==="YXZ"){const y=p*v,S=p*g,T=m*v,A=m*g;i[0]=y+A*d,i[4]=T*d-S,i[8]=f*m,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=S*d-T,i[6]=A+y*d,i[10]=f*p}else if(t.order==="ZXY"){const y=p*v,S=p*g,T=m*v,A=m*g;i[0]=y-A*d,i[4]=-f*g,i[8]=T+S*d,i[1]=S+T*d,i[5]=f*v,i[9]=A-y*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const y=f*v,S=f*g,T=d*v,A=d*g;i[0]=p*v,i[4]=T*m-S,i[8]=y*m+A,i[1]=p*g,i[5]=A*m+y,i[9]=S*m-T,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const y=f*p,S=f*m,T=d*p,A=d*m;i[0]=p*v,i[4]=A-y*g,i[8]=T*g+S,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-m*v,i[6]=S*g+T,i[10]=y-A*g}else if(t.order==="XZY"){const y=f*p,S=f*m,T=d*p,A=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=y*g+A,i[5]=f*v,i[9]=S*g-T,i[2]=T*g-S,i[6]=d*v,i[10]=A*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(OT,t,PT)}lookAt(t,i,s){const l=this.elements;return mi.subVectors(t,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),hs.crossVectors(s,mi),hs.lengthSq()===0&&(Math.abs(s.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),hs.crossVectors(s,mi)),hs.normalize(),Tc.crossVectors(mi,hs),l[0]=hs.x,l[4]=Tc.x,l[8]=mi.x,l[1]=hs.y,l[5]=Tc.y,l[9]=mi.y,l[2]=hs.z,l[6]=Tc.z,l[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],v=s[1],g=s[5],y=s[9],S=s[13],T=s[2],A=s[6],M=s[10],_=s[14],w=s[3],D=s[7],b=s[11],I=s[15],z=l[0],P=l[4],V=l[8],N=l[12],E=l[1],U=l[5],G=l[9],q=l[13],nt=l[2],Q=l[6],F=l[10],$=l[14],Z=l[3],ut=l[7],yt=l[11],Et=l[15];return u[0]=f*z+d*E+p*nt+m*Z,u[4]=f*P+d*U+p*Q+m*ut,u[8]=f*V+d*G+p*F+m*yt,u[12]=f*N+d*q+p*$+m*Et,u[1]=v*z+g*E+y*nt+S*Z,u[5]=v*P+g*U+y*Q+S*ut,u[9]=v*V+g*G+y*F+S*yt,u[13]=v*N+g*q+y*$+S*Et,u[2]=T*z+A*E+M*nt+_*Z,u[6]=T*P+A*U+M*Q+_*ut,u[10]=T*V+A*G+M*F+_*yt,u[14]=T*N+A*q+M*$+_*Et,u[3]=w*z+D*E+b*nt+I*Z,u[7]=w*P+D*U+b*Q+I*ut,u[11]=w*V+D*G+b*F+I*yt,u[15]=w*N+D*q+b*$+I*Et,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],f=t[1],d=t[5],p=t[9],m=t[13],v=t[2],g=t[6],y=t[10],S=t[14],T=t[3],A=t[7],M=t[11],_=t[15];return T*(+u*p*g-l*m*g-u*d*y+s*m*y+l*d*S-s*p*S)+A*(+i*p*S-i*m*y+u*f*y-l*f*S+l*m*v-u*p*v)+M*(+i*m*g-i*d*S-u*f*g+s*f*S+u*d*v-s*m*v)+_*(-l*d*v-i*p*g+i*d*y+l*f*g-s*f*y+s*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=t[9],y=t[10],S=t[11],T=t[12],A=t[13],M=t[14],_=t[15],w=g*M*m-A*y*m+A*p*S-d*M*S-g*p*_+d*y*_,D=T*y*m-v*M*m-T*p*S+f*M*S+v*p*_-f*y*_,b=v*A*m-T*g*m+T*d*S-f*A*S-v*d*_+f*g*_,I=T*g*p-v*A*p-T*d*y+f*A*y+v*d*M-f*g*M,z=i*w+s*D+l*b+u*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return t[0]=w*P,t[1]=(A*y*u-g*M*u-A*l*S+s*M*S+g*l*_-s*y*_)*P,t[2]=(d*M*u-A*p*u+A*l*m-s*M*m-d*l*_+s*p*_)*P,t[3]=(g*p*u-d*y*u-g*l*m+s*y*m+d*l*S-s*p*S)*P,t[4]=D*P,t[5]=(v*M*u-T*y*u+T*l*S-i*M*S-v*l*_+i*y*_)*P,t[6]=(T*p*u-f*M*u-T*l*m+i*M*m+f*l*_-i*p*_)*P,t[7]=(f*y*u-v*p*u+v*l*m-i*y*m-f*l*S+i*p*S)*P,t[8]=b*P,t[9]=(T*g*u-v*A*u-T*s*S+i*A*S+v*s*_-i*g*_)*P,t[10]=(f*A*u-T*d*u+T*s*m-i*A*m-f*s*_+i*d*_)*P,t[11]=(v*d*u-f*g*u-v*s*m+i*g*m+f*s*S-i*d*S)*P,t[12]=I*P,t[13]=(v*A*l-T*g*l+T*s*y-i*A*y-v*s*M+i*g*M)*P,t[14]=(T*d*l-f*A*l-T*s*p+i*A*p+f*s*M-i*d*M)*P,t[15]=(f*g*l-v*d*l+v*s*p-i*g*p-f*s*y+i*d*y)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=t.x,d=t.y,p=t.z,m=u*f,v=u*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+s,v*p-l*f,0,m*p-l*d,v*p+l*f,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,f){return this.set(1,s,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,f=i._y,d=i._z,p=i._w,m=u+u,v=f+f,g=d+d,y=u*m,S=u*v,T=u*g,A=f*v,M=f*g,_=d*g,w=p*m,D=p*v,b=p*g,I=s.x,z=s.y,P=s.z;return l[0]=(1-(A+_))*I,l[1]=(S+b)*I,l[2]=(T-D)*I,l[3]=0,l[4]=(S-b)*z,l[5]=(1-(y+_))*z,l[6]=(M+w)*z,l[7]=0,l[8]=(T+D)*P,l[9]=(M-w)*P,l[10]=(1-(y+A))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=Kr.set(l[0],l[1],l[2]).length();const f=Kr.set(l[4],l[5],l[6]).length(),d=Kr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Fi.copy(this);const m=1/u,v=1/f,g=1/d;return Fi.elements[0]*=m,Fi.elements[1]*=m,Fi.elements[2]*=m,Fi.elements[4]*=v,Fi.elements[5]*=v,Fi.elements[6]*=v,Fi.elements[8]*=g,Fi.elements[9]*=g,Fi.elements[10]*=g,i.setFromRotationMatrix(Fi),s.x=u,s.y=f,s.z=d,this}makePerspective(t,i,s,l,u,f,d=oa,p=!1){const m=this.elements,v=2*u/(i-t),g=2*u/(s-l),y=(i+t)/(i-t),S=(s+l)/(s-l);let T,A;if(p)T=u/(f-u),A=f*u/(f-u);else if(d===oa)T=-(f+u)/(f-u),A=-2*f*u/(f-u);else if(d===ef)T=-f/(f-u),A=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,f,d=oa,p=!1){const m=this.elements,v=2/(i-t),g=2/(s-l),y=-(i+t)/(i-t),S=-(s+l)/(s-l);let T,A;if(p)T=1/(f-u),A=f/(f-u);else if(d===oa)T=-2/(f-u),A=-(f+u)/(f-u);else if(d===ef)T=-1/(f-u),A=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=g,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Kr=new H,Fi=new Ve,OT=new H(0,0,0),PT=new H(1,1,1),hs=new H,Tc=new H,mi=new H,xy=new Ve,Sy=new Jn;class Ni{constructor(t=0,i=0,s=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return xy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xy,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Sy.setFromEuler(this),this.setFromQuaternion(Sy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Yx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zT=0;const My=new H,Jr=new Jn,Ra=new Ve,bc=new H,Sl=new H,IT=new H,BT=new Jn,Ey=new H(1,0,0),Ty=new H(0,1,0),by=new H(0,0,1),Ay={type:"added"},FT={type:"removed"},$r={type:"childadded",child:null},Jd={type:"childremoved",child:null};class xn extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new H,i=new Ni,s=new Jn,l=new H(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ye}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Jr.setFromAxisAngle(t,i),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,i){return Jr.setFromAxisAngle(t,i),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(Ey,t)}rotateY(t){return this.rotateOnAxis(Ty,t)}rotateZ(t){return this.rotateOnAxis(by,t)}translateOnAxis(t,i){return My.copy(t).applyQuaternion(this.quaternion),this.position.add(My.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ey,t)}translateY(t){return this.translateOnAxis(Ty,t)}translateZ(t){return this.translateOnAxis(by,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bc.copy(t):bc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(Sl,bc,this.up):Ra.lookAt(bc,Sl,this.up),this.quaternion.setFromRotationMatrix(Ra),l&&(Ra.extractRotation(l.matrixWorld),Jr.setFromRotationMatrix(Ra),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ay),$r.child=t,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(FT),Jd.child=t,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ay),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,t,IT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,BT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),v=f(t.images),g=f(t.shapes),y=f(t.skeletons),S=f(t.animations),T=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}xn.DEFAULT_UP=new H(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new H,Ca=new H,$d=new H,wa=new H,to=new H,eo=new H,Ry=new H,tp=new H,ep=new H,np=new H,ip=new cn,ap=new cn,sp=new cn;class Vi{constructor(t=new H,i=new H,s=new H){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Hi.subVectors(t,i),l.cross(Hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Hi.subVectors(l,i),Ca.subVectors(s,i),$d.subVectors(t,i);const f=Hi.dot(Hi),d=Hi.dot(Ca),p=Hi.dot($d),m=Ca.dot(Ca),v=Ca.dot($d),g=f*m-d*d;if(g===0)return u.set(0,0,0),null;const y=1/g,S=(m*p-d*v)*y,T=(f*v-d*p)*y;return u.set(1-S-T,T,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(t,i,s,l,u,f,d,p){return this.getBarycoord(t,i,s,l,wa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,wa.x),p.addScaledVector(f,wa.y),p.addScaledVector(d,wa.z),p)}static getInterpolatedAttribute(t,i,s,l,u,f){return ip.setScalar(0),ap.setScalar(0),sp.setScalar(0),ip.fromBufferAttribute(t,i),ap.fromBufferAttribute(t,s),sp.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(ip,u.x),f.addScaledVector(ap,u.y),f.addScaledVector(sp,u.z),f}static isFrontFacing(t,i,s,l){return Hi.subVectors(s,i),Ca.subVectors(t,i),Hi.cross(Ca).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Hi.cross(Ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let f,d;to.subVectors(l,s),eo.subVectors(u,s),tp.subVectors(t,s);const p=to.dot(tp),m=eo.dot(tp);if(p<=0&&m<=0)return i.copy(s);ep.subVectors(t,l);const v=to.dot(ep),g=eo.dot(ep);if(v>=0&&g<=v)return i.copy(l);const y=p*g-v*m;if(y<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(s).addScaledVector(to,f);np.subVectors(t,u);const S=to.dot(np),T=eo.dot(np);if(T>=0&&S<=T)return i.copy(u);const A=S*m-p*T;if(A<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(s).addScaledVector(eo,d);const M=v*T-S*g;if(M<=0&&g-v>=0&&S-T>=0)return Ry.subVectors(u,l),d=(g-v)/(g-v+(S-T)),i.copy(l).addScaledVector(Ry,d);const _=1/(M+A+y);return f=A*_,d=y*_,i.copy(s).addScaledVector(to,f).addScaledVector(eo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function rp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class de{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=wm(t,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=rp(f,u,t+1/3),this.g=rp(f,u,t),this.b=rp(f,u,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const s=Wx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}copyLinearToSRGB(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Le.workingToColorSpace(Vn.copy(this),t),Math.round(Ae(Vn.r*255,0,255))*65536+Math.round(Ae(Vn.g*255,0,255))*256+Math.round(Ae(Vn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,u=Vn.b,f=Math.max(s,l,u),d=Math.min(s,l,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const g=f-d;switch(m=v<=.5?g/(f+d):g/(2-f-d),f){case s:p=(l-u)/g+(l<u?6:0);break;case l:p=(u-s)/g+2;break;case u:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Vn.copy(this),i),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=si){Le.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,s=Vn.g,l=Vn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+i,ds.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ds),t.getHSL(Ac);const s=Ll(ds.h,Ac.h,i),l=Ll(ds.s,Ac.s,i),u=Ll(ds.l,Ac.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new de;de.NAMES=Wx;let HT=0;class sr extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=fo,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bp,this.blendDst=Ap,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(s.blending=this.blending),this.side!==gs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==bp&&(s.blendSrc=this.blendSrc),this.blendDst!==Ap&&(s.blendDst=this.blendDst),this.blendEquation!==Zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hy&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kl extends sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Rx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yn=new H,Rc=new Gt;let GT=0;class Tn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=dy,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Rc.fromBufferAttribute(this,i),Rc.applyMatrix3(t),this.setXY(i,Rc.x,Rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=oo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array),u=Qn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dy&&(t.usage=this.usage),t}}class jx extends Tn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Zx extends Tn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ze extends Tn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let VT=0;const wi=new Ve,op=new xn,no=new H,gi=new ir,Ml=new ir,Nn=new H;class Rn extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xx(t)?Zx:jx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ye().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,i,s){return wi.makeTranslation(t,i,s),this.applyMatrix4(wi),this}scale(t,i,s){return wi.makeScale(t,i,s),this.applyMatrix4(wi),this}lookAt(t){return op.lookAt(t),op.updateMatrix(),this.applyMatrix4(op.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ze(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];gi.setFromBufferAttribute(u),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const s=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Ml.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(gi.min,Ml.min),gi.expandByPoint(Nn),Nn.addVectors(gi.max,Ml.max),gi.expandByPoint(Nn)):(gi.expandByPoint(Ml.min),gi.expandByPoint(Ml.max))}gi.getCenter(s);let l=0;for(let u=0,f=t.count;u<f;u++)Nn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Nn.fromBufferAttribute(d,m),p&&(no.fromBufferAttribute(t,m),Nn.add(no)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<s.count;V++)d[V]=new H,p[V]=new H;const m=new H,v=new H,g=new H,y=new Gt,S=new Gt,T=new Gt,A=new H,M=new H;function _(V,N,E){m.fromBufferAttribute(s,V),v.fromBufferAttribute(s,N),g.fromBufferAttribute(s,E),y.fromBufferAttribute(u,V),S.fromBufferAttribute(u,N),T.fromBufferAttribute(u,E),v.sub(m),g.sub(m),S.sub(y),T.sub(y);const U=1/(S.x*T.y-T.x*S.y);isFinite(U)&&(A.copy(v).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(U),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-T.x).multiplyScalar(U),d[V].add(A),d[N].add(A),d[E].add(A),p[V].add(M),p[N].add(M),p[E].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let V=0,N=w.length;V<N;++V){const E=w[V],U=E.start,G=E.count;for(let q=U,nt=U+G;q<nt;q+=3)_(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const D=new H,b=new H,I=new H,z=new H;function P(V){I.fromBufferAttribute(l,V),z.copy(I);const N=d[V];D.copy(N),D.sub(I.multiplyScalar(I.dot(N))).normalize(),b.crossVectors(z,N);const U=b.dot(p[V])<0?-1:1;f.setXYZW(V,D.x,D.y,D.z,U)}for(let V=0,N=w.length;V<N;++V){const E=w[V],U=E.start,G=E.count;for(let q=U,nt=U+G;q<nt;q+=3)P(t.getX(q+0)),P(t.getX(q+1)),P(t.getX(q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Tn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new H,u=new H,f=new H,d=new H,p=new H,m=new H,v=new H,g=new H;if(t)for(let y=0,S=t.count;y<S;y+=3){const T=t.getX(y+0),A=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,M),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,M),d.add(v),p.add(v),m.add(v),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,g=d.normalized,y=new m.constructor(p.length*v);let S=0,T=0;for(let A=0,M=p.length;A<M;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*v;for(let _=0;_<v;_++)y[T++]=m[S++]}return new Tn(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Rn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,g=m.length;v<g;v++){const y=m[v],S=t(y,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,y=m.length;g<y;g++){const S=m[g];v.push(S.toJSON(t.data))}v.length>0&&(l[p]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const u=t.morphAttributes;for(const m in u){const v=[],g=u[m];for(let y=0,S=g.length;y<S;y++)v.push(g[y].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cy=new Ve,ks=new Nm,Cc=new ar,wy=new H,wc=new H,Dc=new H,Nc=new H,lp=new H,Uc=new H,Dy=new H,Lc=new H;class fn extends xn{constructor(t=new Rn,i=new kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Uc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],g=u[p];v!==0&&(lp.fromBufferAttribute(g,t),f?Uc.addScaledVector(lp,v):Uc.addScaledVector(lp.sub(i),v))}i.add(Uc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(u),ks.copy(t.ray).recast(t.near),!(Cc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Cc,wy)===null||ks.origin.distanceToSquared(wy)>(t.far-t.near)**2))&&(Cy.copy(u).invert(),ks.copy(t.ray).applyMatrix4(Cy),!(s.boundingBox!==null&&ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ks)))}_computeIntersections(t,i,s){let l;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,y=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,A=y.length;T<A;T++){const M=y[T],_=f[M.materialIndex],w=Math.max(M.start,S.start),D=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let b=w,I=D;b<I;b+=3){const z=d.getX(b),P=d.getX(b+1),V=d.getX(b+2);l=Oc(this,_,t,s,m,v,g,z,P,V),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=T,_=A;M<_;M+=3){const w=d.getX(M),D=d.getX(M+1),b=d.getX(M+2);l=Oc(this,f,t,s,m,v,g,w,D,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,A=y.length;T<A;T++){const M=y[T],_=f[M.materialIndex],w=Math.max(M.start,S.start),D=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let b=w,I=D;b<I;b+=3){const z=b,P=b+1,V=b+2;l=Oc(this,_,t,s,m,v,g,z,P,V),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let M=T,_=A;M<_;M+=3){const w=M,D=M+1,b=M+2;l=Oc(this,f,t,s,m,v,g,w,D,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function kT(o,t,i,s,l,u,f,d){let p;if(t.side===kn?p=s.intersectTriangle(f,u,l,!0,d):p=s.intersectTriangle(l,u,f,t.side===gs,d),p===null)return null;Lc.copy(d),Lc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Lc);return m<i.near||m>i.far?null:{distance:m,point:Lc.clone(),object:o}}function Oc(o,t,i,s,l,u,f,d,p,m){o.getVertexPosition(d,wc),o.getVertexPosition(p,Dc),o.getVertexPosition(m,Nc);const v=kT(o,t,i,s,wc,Dc,Nc,Dy);if(v){const g=new H;Vi.getBarycoord(Dy,wc,Dc,Nc,g),l&&(v.uv=Vi.getInterpolatedAttribute(l,d,p,m,g,new Gt)),u&&(v.uv1=Vi.getInterpolatedAttribute(u,d,p,m,g,new Gt)),f&&(v.normal=Vi.getInterpolatedAttribute(f,d,p,m,g,new H),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new H,materialIndex:0};Vi.getNormal(wc,Dc,Nc,y.normal),v.face=y,v.barycoord=g}return v}class Eo extends Rn{constructor(t=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],g=[];let y=0,S=0;T("z","y","x",-1,-1,s,i,t,f,u,0),T("z","y","x",1,-1,s,i,-t,f,u,1),T("x","z","y",1,1,t,s,i,l,f,2),T("x","z","y",1,-1,t,s,-i,l,f,3),T("x","y","z",1,-1,t,i,s,l,u,4),T("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(g,2));function T(A,M,_,w,D,b,I,z,P,V,N){const E=b/P,U=I/V,G=b/2,q=I/2,nt=z/2,Q=P+1,F=V+1;let $=0,Z=0;const ut=new H;for(let yt=0;yt<F;yt++){const Et=yt*U-q;for(let kt=0;kt<Q;kt++){const se=kt*E-G;ut[A]=se*w,ut[M]=Et*D,ut[_]=nt,m.push(ut.x,ut.y,ut.z),ut[A]=0,ut[M]=0,ut[_]=z>0?1:-1,v.push(ut.x,ut.y,ut.z),g.push(kt/P),g.push(1-yt/V),$+=1}}for(let yt=0;yt<V;yt++)for(let Et=0;Et<P;Et++){const kt=y+Et+Q*yt,se=y+Et+Q*(yt+1),X=y+(Et+1)+Q*(yt+1),pt=y+(Et+1)+Q*yt;p.push(kt,se,pt),p.push(se,X,pt),Z+=6}d.addGroup(S,Z,N),S+=Z,y+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _o(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Kn(o){const t={};for(let i=0;i<o.length;i++){const s=_o(o[i]);for(const l in s)t[l]=s[l]}return t}function XT(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Qx(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Xl={clone:_o,merge:Kn};var qT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qT,this.fragmentShader=YT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_o(t.uniforms),this.uniformsGroups=XT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Kx extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new H,Ny=new Gt,Uy=new Gt;class vi extends Kx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(Ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,i){return this.getViewBounds(t,Ny,Uy),i.subVectors(Uy,Ny)}setViewOffset(t,i,s,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ul*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const io=-90,ao=1;class WT extends xn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(io,ao,t,i);l.layers=this.layers,this.add(l);const u=new vi(io,ao,t,i);u.layers=this.layers,this.add(u);const f=new vi(io,ao,t,i);f.layers=this.layers,this.add(f);const d=new vi(io,ao,t,i);d.layers=this.layers,this.add(d);const p=new vi(io,ao,t,i);p.layers=this.layers,this.add(p);const m=new vi(io,ao,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,d,p]=i;for(const m of i)this.remove(m);if(t===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===ef)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,y,S),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Jx extends Xn{constructor(t=[],i=mo,s,l,u,f,d,p,m,v){super(t,i,s,l,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jT extends Di{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Jx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Eo(5,5,5),u=new rn({name:"CubemapFromEquirect",uniforms:_o(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Ua});u.uniforms.tEquirect.value=i;const f=new fn(l,u),d=i.minFilter;return i.minFilter===Js&&(i.minFilter=sa),new WT(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(u)}}class $s extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZT={type:"move"};class up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,s),_=this._getHandJoint(m,A);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],y=v.position.distanceTo(g.position),S=.02,T=.005;m.inputState.pinching&&y>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ZT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new $s;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class $x extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class QT extends Xn{constructor(t=null,i=1,s=1,l,u,f,d,p,m=_i,v=_i,g,y){super(null,f,d,p,m,v,l,u,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ly extends Tn{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const so=new Ve,Oy=new Ve,Pc=[],Py=new ir,KT=new Ve,El=new fn,Tl=new ar;class JT extends fn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Ly(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,KT)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ir),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,so),Py.copy(t.boundingBox).applyMatrix4(so),this.boundingBox.union(Py)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,so),Tl.copy(t.boundingSphere).applyMatrix4(so),this.boundingSphere.union(Tl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=s.length+1,f=t*u+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(El.geometry=this.geometry,El.material=this.material,El.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(s),t.ray.intersectsSphere(Tl)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,so),Oy.multiplyMatrices(s,so),El.matrixWorld=Oy,El.raycast(t,Pc);for(let f=0,d=Pc.length;f<d;f++){const p=Pc[f];p.instanceId=u,p.object=this,i.push(p)}Pc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Ly(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new QT(new Float32Array(l*this.count),l,this.count,bm,ra));const u=this.morphTexture.source.data.data;let f=0;for(let m=0;m<s.length;m++)f+=s[m];const d=this.geometry.morphTargetsRelative?1:1-f,p=l*t;u[p]=d,u.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const cp=new H,$T=new H,tb=new ye;class Ws{constructor(t=new H(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=cp.subVectors(s,i).cross($T.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(cp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||tb.getNormalMatrix(t),l=this.coplanarPoint(cp).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new ar,eb=new Gt(.5,.5),zc=new H;class Um{constructor(t=new Ws,i=new Ws,s=new Ws,l=new Ws,u=new Ws,f=new Ws){this.planes=[t,i,s,l,u,f]}set(t,i,s,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=oa,s=!1){const l=this.planes,u=t.elements,f=u[0],d=u[1],p=u[2],m=u[3],v=u[4],g=u[5],y=u[6],S=u[7],T=u[8],A=u[9],M=u[10],_=u[11],w=u[12],D=u[13],b=u[14],I=u[15];if(l[0].setComponents(m-f,S-v,_-T,I-w).normalize(),l[1].setComponents(m+f,S+v,_+T,I+w).normalize(),l[2].setComponents(m+d,S+g,_+A,I+D).normalize(),l[3].setComponents(m-d,S-g,_-A,I-D).normalize(),s)l[4].setComponents(p,y,M,b).normalize(),l[5].setComponents(m-p,S-y,_-M,I-b).normalize();else if(l[4].setComponents(m-p,S-y,_-M,I-b).normalize(),i===oa)l[5].setComponents(m+p,S+y,_+M,I+b).normalize();else if(i===ef)l[5].setComponents(p,y,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const i=eb.distanceTo(t.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(zc.x=l.normal.x>0?t.max.x:t.min.x,zc.y=l.normal.y>0?t.max.y:t.min.y,zc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(zc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nb extends sr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const af=new H,sf=new H,zy=new Ve,bl=new Nm,Ic=new ar,fp=new H,Iy=new H;class tS extends xn{constructor(t=new Rn,i=new nb){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)af.fromBufferAttribute(i,l-1),sf.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=af.distanceTo(sf);t.setAttribute("lineDistance",new Ze(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=u,t.ray.intersectsSphere(Ic)===!1)return;zy.copy(l).invert(),bl.copy(t.ray).applyMatrix4(zy);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=s.index,y=s.attributes.position;if(v!==null){const S=Math.max(0,f.start),T=Math.min(v.count,f.start+f.count);for(let A=S,M=T-1;A<M;A+=m){const _=v.getX(A),w=v.getX(A+1),D=Bc(this,t,bl,p,_,w,A);D&&i.push(D)}if(this.isLineLoop){const A=v.getX(T-1),M=v.getX(S),_=Bc(this,t,bl,p,A,M,T-1);_&&i.push(_)}}else{const S=Math.max(0,f.start),T=Math.min(y.count,f.start+f.count);for(let A=S,M=T-1;A<M;A+=m){const _=Bc(this,t,bl,p,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Bc(this,t,bl,p,T-1,S,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Bc(o,t,i,s,l,u,f){const d=o.geometry.attributes.position;if(af.fromBufferAttribute(d,l),sf.fromBufferAttribute(d,u),i.distanceSqToSegment(af,sf,fp,Iy)>s)return;fp.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(fp);if(!(m<t.near||m>t.far))return{distance:m,point:Iy.clone().applyMatrix4(o.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:o}}const By=new H,Fy=new H;class ib extends tS{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)By.fromBufferAttribute(i,l),Fy.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+By.distanceTo(Fy);t.setAttribute("lineDistance",new Ze(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ab extends sr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hy=new Ve,hm=new Nm,Fc=new ar,Hc=new H;class eS extends xn{constructor(t=new Rn,i=new ab){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(l),Fc.radius+=u,t.ray.intersectsSphere(Fc)===!1)return;Hy.copy(l).invert(),hm.copy(t.ray).applyMatrix4(Hy);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,g=s.attributes.position;if(m!==null){const y=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let T=y,A=S;T<A;T++){const M=m.getX(T);Hc.fromBufferAttribute(g,M),Gy(Hc,M,p,l,t,i,this)}}else{const y=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let T=y,A=S;T<A;T++)Hc.fromBufferAttribute(g,T),Gy(Hc,T,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Gy(o,t,i,s,l,u,f){const d=hm.distanceSqToPoint(o);if(d<i){const p=new H;hm.closestPointToPoint(o,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class sb extends Xn{constructor(t,i,s,l,u,f,d,p,m){super(t,i,s,l,u,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nS extends Xn{constructor(t,i,s=tr,l,u,f,d=_i,p=_i,m,v=Fl,g=1){if(v!==Fl&&v!==Hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,u,f,d,p,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class iS extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Lm extends Rn{constructor(t=1,i=1,s=1,l=32,u=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const v=[],g=[],y=[],S=[];let T=0;const A=[],M=s/2;let _=0;w(),f===!1&&(t>0&&D(!0),i>0&&D(!1)),this.setIndex(v),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(y,3)),this.setAttribute("uv",new Ze(S,2));function w(){const b=new H,I=new H;let z=0;const P=(i-t)/s;for(let V=0;V<=u;V++){const N=[],E=V/u,U=E*(i-t)+t;for(let G=0;G<=l;G++){const q=G/l,nt=q*p+d,Q=Math.sin(nt),F=Math.cos(nt);I.x=U*Q,I.y=-E*s+M,I.z=U*F,g.push(I.x,I.y,I.z),b.set(Q,P,F).normalize(),y.push(b.x,b.y,b.z),S.push(q,1-E),N.push(T++)}A.push(N)}for(let V=0;V<l;V++)for(let N=0;N<u;N++){const E=A[N][V],U=A[N+1][V],G=A[N+1][V+1],q=A[N][V+1];(t>0||N!==0)&&(v.push(E,U,q),z+=3),(i>0||N!==u-1)&&(v.push(U,G,q),z+=3)}m.addGroup(_,z,0),_+=z}function D(b){const I=T,z=new Gt,P=new H;let V=0;const N=b===!0?t:i,E=b===!0?1:-1;for(let G=1;G<=l;G++)g.push(0,M*E,0),y.push(0,E,0),S.push(.5,.5),T++;const U=T;for(let G=0;G<=l;G++){const nt=G/l*p+d,Q=Math.cos(nt),F=Math.sin(nt);P.x=N*F,P.y=M*E,P.z=N*Q,g.push(P.x,P.y,P.z),y.push(0,E,0),z.x=Q*.5+.5,z.y=F*.5*E+.5,S.push(z.x,z.y),T++}for(let G=0;G<l;G++){const q=I+G,nt=U+G;b===!0?v.push(nt,nt+1,q):v.push(nt+1,nt,q),V+=3}m.addGroup(_,V,b===!0?1:2),_+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lm(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Om extends Rn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const u=[],f=[];d(l),m(s),v(),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(u.slice(),3)),this.setAttribute("uv",new Ze(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(w){const D=new H,b=new H,I=new H;for(let z=0;z<i.length;z+=3)S(i[z+0],D),S(i[z+1],b),S(i[z+2],I),p(D,b,I,w)}function p(w,D,b,I){const z=I+1,P=[];for(let V=0;V<=z;V++){P[V]=[];const N=w.clone().lerp(b,V/z),E=D.clone().lerp(b,V/z),U=z-V;for(let G=0;G<=U;G++)G===0&&V===z?P[V][G]=N:P[V][G]=N.clone().lerp(E,G/U)}for(let V=0;V<z;V++)for(let N=0;N<2*(z-V)-1;N++){const E=Math.floor(N/2);N%2===0?(y(P[V][E+1]),y(P[V+1][E]),y(P[V][E])):(y(P[V][E+1]),y(P[V+1][E+1]),y(P[V+1][E]))}}function m(w){const D=new H;for(let b=0;b<u.length;b+=3)D.x=u[b+0],D.y=u[b+1],D.z=u[b+2],D.normalize().multiplyScalar(w),u[b+0]=D.x,u[b+1]=D.y,u[b+2]=D.z}function v(){const w=new H;for(let D=0;D<u.length;D+=3){w.x=u[D+0],w.y=u[D+1],w.z=u[D+2];const b=M(w)/2/Math.PI+.5,I=_(w)/Math.PI+.5;f.push(b,1-I)}T(),g()}function g(){for(let w=0;w<f.length;w+=6){const D=f[w+0],b=f[w+2],I=f[w+4],z=Math.max(D,b,I),P=Math.min(D,b,I);z>.9&&P<.1&&(D<.2&&(f[w+0]+=1),b<.2&&(f[w+2]+=1),I<.2&&(f[w+4]+=1))}}function y(w){u.push(w.x,w.y,w.z)}function S(w,D){const b=w*3;D.x=t[b+0],D.y=t[b+1],D.z=t[b+2]}function T(){const w=new H,D=new H,b=new H,I=new H,z=new Gt,P=new Gt,V=new Gt;for(let N=0,E=0;N<u.length;N+=9,E+=6){w.set(u[N+0],u[N+1],u[N+2]),D.set(u[N+3],u[N+4],u[N+5]),b.set(u[N+6],u[N+7],u[N+8]),z.set(f[E+0],f[E+1]),P.set(f[E+2],f[E+3]),V.set(f[E+4],f[E+5]),I.copy(w).add(D).add(b).divideScalar(3);const U=M(I);A(z,E+0,w,U),A(P,E+2,D,U),A(V,E+4,b,U)}}function A(w,D,b,I){I<0&&w.x===1&&(f[D]=w.x-1),b.x===0&&b.z===0&&(f[D]=I/2/Math.PI+.5)}function M(w){return Math.atan2(w.z,-w.x)}function _(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Om(t.vertices,t.indices,t.radius,t.details)}}class la{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const u=s.length;let f;i?f=i:f=t*s[u-1];let d=0,p=u-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(u-1);const v=s[l],y=s[l+1]-v,S=(f-v)/y;return(l+S)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const f=this.getPoint(l),d=this.getPoint(u),p=i||(f.isVector2?new Gt:new H);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new H,l=[],u=[],f=[],d=new H,p=new Ve;for(let S=0;S<=t;S++){const T=S/t;l[S]=this.getTangentAt(T,new H)}u[0]=new H,f[0]=new H;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),y=Math.abs(l[0].z);v<=m&&(m=v,s.set(1,0,0)),g<=m&&(m=g,s.set(0,1,0)),y<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),f[0].crossVectors(l[0],u[0]);for(let S=1;S<=t;S++){if(u[S]=u[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(Ae(l[S-1].dot(l[S]),-1,1));u[S].applyMatrix4(p.makeRotationAxis(d,T))}f[S].crossVectors(l[S],u[S])}if(i===!0){let S=Math.acos(Ae(u[0].dot(u[t]),-1,1));S/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(S=-S);for(let T=1;T<=t;T++)u[T].applyMatrix4(p.makeRotationAxis(l[T],S*T)),f[T].crossVectors(l[T],u[T])}return{tangents:l,normals:u,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pm extends la{constructor(t=0,i=0,s=1,l=1,u=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new Gt){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const f=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(f?u=0:u=l),this.aClockwise===!0&&!f&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),y=p-this.aX,S=m-this.aY;p=y*v-S*g+this.aX,m=y*g+S*v+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rb extends Pm{constructor(t,i,s,l,u,f){super(t,i,s,s,l,u,f),this.isArcCurve=!0,this.type="ArcCurve"}}function zm(){let o=0,t=0,i=0,s=0;function l(u,f,d,p){o=u,t=d,i=-3*u+3*f-2*d-p,s=2*u-2*f+d+p}return{initCatmullRom:function(u,f,d,p,m){l(f,d,m*(d-u),m*(p-f))},initNonuniformCatmullRom:function(u,f,d,p,m,v,g){let y=(f-u)/m-(d-u)/(m+v)+(d-f)/v,S=(d-f)/v-(p-f)/(v+g)+(p-d)/g;y*=v,S*=v,l(f,d,y,S)},calc:function(u){const f=u*u,d=f*u;return o+t*u+i*f+s*d}}}const Gc=new H,hp=new zm,dp=new zm,pp=new zm;class dm extends la{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new H){const s=i,l=this.points,u=l.length,f=(u-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%u]:(Gc.subVectors(l[0],l[1]).add(l[0]),m=Gc);const g=l[d%u],y=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Gc.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Gc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let T=Math.pow(m.distanceToSquared(g),S),A=Math.pow(g.distanceToSquared(y),S),M=Math.pow(y.distanceToSquared(v),S);A<1e-4&&(A=1),T<1e-4&&(T=A),M<1e-4&&(M=A),hp.initNonuniformCatmullRom(m.x,g.x,y.x,v.x,T,A,M),dp.initNonuniformCatmullRom(m.y,g.y,y.y,v.y,T,A,M),pp.initNonuniformCatmullRom(m.z,g.z,y.z,v.z,T,A,M)}else this.curveType==="catmullrom"&&(hp.initCatmullRom(m.x,g.x,y.x,v.x,this.tension),dp.initCatmullRom(m.y,g.y,y.y,v.y,this.tension),pp.initCatmullRom(m.z,g.z,y.z,v.z,this.tension));return s.set(hp.calc(p),dp.calc(p),pp.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new H().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vy(o,t,i,s,l){const u=(s-t)*.5,f=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+u+f)*p+(-3*i+3*s-2*u-f)*d+u*o+i}function ob(o,t){const i=1-o;return i*i*t}function lb(o,t){return 2*(1-o)*o*t}function ub(o,t){return o*o*t}function Ol(o,t,i,s){return ob(o,t)+lb(o,i)+ub(o,s)}function cb(o,t){const i=1-o;return i*i*i*t}function fb(o,t){const i=1-o;return 3*i*i*o*t}function hb(o,t){return 3*(1-o)*o*o*t}function db(o,t){return o*o*o*t}function Pl(o,t,i,s,l){return cb(o,t)+fb(o,i)+hb(o,s)+db(o,l)}class aS extends la{constructor(t=new Gt,i=new Gt,s=new Gt,l=new Gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Gt){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(Pl(t,l.x,u.x,f.x,d.x),Pl(t,l.y,u.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pb extends la{constructor(t=new H,i=new H,s=new H,l=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new H){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(Pl(t,l.x,u.x,f.x,d.x),Pl(t,l.y,u.y,f.y,d.y),Pl(t,l.z,u.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sS extends la{constructor(t=new Gt,i=new Gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Gt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Gt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mb extends la{constructor(t=new H,i=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new H){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new H){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rS extends la{constructor(t=new Gt,i=new Gt,s=new Gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Gt){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(Ol(t,l.x,u.x,f.x),Ol(t,l.y,u.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oS extends la{constructor(t=new H,i=new H,s=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new H){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(Ol(t,l.x,u.x,f.x),Ol(t,l.y,u.y,f.y),Ol(t,l.z,u.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lS extends la{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Gt){const s=i,l=this.points,u=(l.length-1)*t,f=Math.floor(u),d=u-f,p=l[f===0?f:f-1],m=l[f],v=l[f>l.length-2?l.length-1:f+1],g=l[f>l.length-3?l.length-1:f+2];return s.set(Vy(d,p.x,m.x,v.x,g.x),Vy(d,p.y,m.y,v.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Gt().fromArray(l))}return this}}var rf=Object.freeze({__proto__:null,ArcCurve:rb,CatmullRomCurve3:dm,CubicBezierCurve:aS,CubicBezierCurve3:pb,EllipseCurve:Pm,LineCurve:sS,LineCurve3:mb,QuadraticBezierCurve:rS,QuadraticBezierCurve3:oS,SplineCurve:lS});class gb extends la{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rf[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let u=0;for(;u<l.length;){if(l[u]>=s){const f=l[u]-s,d=this.curves[u],p=d.getLength(),m=p===0?0:1-f/p;return d.getPointAt(m,i)}u++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,u=this.curves;l<u.length;l++){const f=u[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(d);for(let m=0;m<p.length;m++){const v=p[m];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new rf[l.type]().fromJSON(l))}return this}}class ky extends gb{constructor(t){super(),this.type="Path",this.currentPoint=new Gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new sS(this.currentPoint.clone(),new Gt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const u=new rS(this.currentPoint.clone(),new Gt(t,i),new Gt(s,l));return this.curves.push(u),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,u,f){const d=new aS(this.currentPoint.clone(),new Gt(t,i),new Gt(s,l),new Gt(u,f));return this.curves.push(d),this.currentPoint.set(u,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new lS(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,u,f){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,s,l,u,f),this}absarc(t,i,s,l,u,f){return this.absellipse(t,i,s,s,l,u,f),this}ellipse(t,i,s,l,u,f,d,p){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+m,i+v,s,l,u,f,d,p),this}absellipse(t,i,s,l,u,f,d,p){const m=new Pm(t,i,s,l,u,f,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class uS extends ky{constructor(t){super(t),this.uuid=nr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new ky().fromJSON(l))}return this}}function vb(o,t,i=2){const s=t&&t.length,l=s?t[0]*i:o.length;let u=cS(o,0,l,i,!0);const f=[];if(!u||u.next===u.prev)return f;let d,p,m;if(s&&(u=Mb(o,t,u,i)),o.length>80*i){d=1/0,p=1/0;let v=-1/0,g=-1/0;for(let y=i;y<l;y+=i){const S=o[y],T=o[y+1];S<d&&(d=S),T<p&&(p=T),S>v&&(v=S),T>g&&(g=T)}m=Math.max(v-d,g-p),m=m!==0?32767/m:0}return ql(u,f,i,d,p,m,0),f}function cS(o,t,i,s,l){let u;if(l===Lb(o,t,i,s)>0)for(let f=t;f<i;f+=s)u=Xy(f/s|0,o[f],o[f+1],u);else for(let f=i-s;f>=t;f-=s)u=Xy(f/s|0,o[f],o[f+1],u);return u&&yo(u,u.next)&&(Wl(u),u=u.next),u}function er(o,t){if(!o)return o;t||(t=o);let i=o,s;do if(s=!1,!i.steiner&&(yo(i,i.next)||sn(i.prev,i,i.next)===0)){if(Wl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function ql(o,t,i,s,l,u,f){if(!o)return;!f&&u&&Rb(o,s,l,u);let d=o;for(;o.prev!==o.next;){const p=o.prev,m=o.next;if(u?yb(o,s,l,u):_b(o)){t.push(p.i,o.i,m.i),Wl(o),o=m.next,d=m.next;continue}if(o=m,o===d){f?f===1?(o=xb(er(o),t),ql(o,t,i,s,l,u,2)):f===2&&Sb(o,t,i,s,l,u):ql(er(o),t,i,s,l,u,1);break}}}function _b(o){const t=o.prev,i=o,s=o.next;if(sn(t,i,s)>=0)return!1;const l=t.x,u=i.x,f=s.x,d=t.y,p=i.y,m=s.y,v=Math.min(l,u,f),g=Math.min(d,p,m),y=Math.max(l,u,f),S=Math.max(d,p,m);let T=s.next;for(;T!==t;){if(T.x>=v&&T.x<=y&&T.y>=g&&T.y<=S&&Dl(l,d,u,p,f,m,T.x,T.y)&&sn(T.prev,T,T.next)>=0)return!1;T=T.next}return!0}function yb(o,t,i,s){const l=o.prev,u=o,f=o.next;if(sn(l,u,f)>=0)return!1;const d=l.x,p=u.x,m=f.x,v=l.y,g=u.y,y=f.y,S=Math.min(d,p,m),T=Math.min(v,g,y),A=Math.max(d,p,m),M=Math.max(v,g,y),_=pm(S,T,t,i,s),w=pm(A,M,t,i,s);let D=o.prevZ,b=o.nextZ;for(;D&&D.z>=_&&b&&b.z<=w;){if(D.x>=S&&D.x<=A&&D.y>=T&&D.y<=M&&D!==l&&D!==f&&Dl(d,v,p,g,m,y,D.x,D.y)&&sn(D.prev,D,D.next)>=0||(D=D.prevZ,b.x>=S&&b.x<=A&&b.y>=T&&b.y<=M&&b!==l&&b!==f&&Dl(d,v,p,g,m,y,b.x,b.y)&&sn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;D&&D.z>=_;){if(D.x>=S&&D.x<=A&&D.y>=T&&D.y<=M&&D!==l&&D!==f&&Dl(d,v,p,g,m,y,D.x,D.y)&&sn(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;b&&b.z<=w;){if(b.x>=S&&b.x<=A&&b.y>=T&&b.y<=M&&b!==l&&b!==f&&Dl(d,v,p,g,m,y,b.x,b.y)&&sn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function xb(o,t){let i=o;do{const s=i.prev,l=i.next.next;!yo(s,l)&&hS(s,i,i.next,l)&&Yl(s,l)&&Yl(l,s)&&(t.push(s.i,i.i,l.i),Wl(i),Wl(i.next),i=o=l),i=i.next}while(i!==o);return er(i)}function Sb(o,t,i,s,l,u){let f=o;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&Db(f,d)){let p=dS(f,d);f=er(f,f.next),p=er(p,p.next),ql(f,t,i,s,l,u,0),ql(p,t,i,s,l,u,0);return}d=d.next}f=f.next}while(f!==o)}function Mb(o,t,i,s){const l=[];for(let u=0,f=t.length;u<f;u++){const d=t[u]*s,p=u<f-1?t[u+1]*s:o.length,m=cS(o,d,p,s,!1);m===m.next&&(m.steiner=!0),l.push(wb(m))}l.sort(Eb);for(let u=0;u<l.length;u++)i=Tb(l[u],i);return i}function Eb(o,t){let i=o.x-t.x;if(i===0&&(i=o.y-t.y,i===0)){const s=(o.next.y-o.y)/(o.next.x-o.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function Tb(o,t){const i=bb(o,t);if(!i)return t;const s=dS(i,o);return er(s,s.next),er(i,i.next)}function bb(o,t){let i=t;const s=o.x,l=o.y;let u=-1/0,f;if(yo(o,i))return i;do{if(yo(o,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=s&&g>u&&(u=g,f=i.x<i.next.x?i:i.next,g===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,p=f.x,m=f.y;let v=1/0;i=f;do{if(s>=i.x&&i.x>=p&&s!==i.x&&fS(l<m?s:u,l,p,m,l<m?u:s,l,i.x,i.y)){const g=Math.abs(l-i.y)/(s-i.x);Yl(i,o)&&(g<v||g===v&&(i.x>f.x||i.x===f.x&&Ab(f,i)))&&(f=i,v=g)}i=i.next}while(i!==d);return f}function Ab(o,t){return sn(o.prev,o,t.prev)<0&&sn(t.next,o,o.next)<0}function Rb(o,t,i,s){let l=o;do l.z===0&&(l.z=pm(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==o);l.prevZ.nextZ=null,l.prevZ=null,Cb(l)}function Cb(o){let t,i=1;do{let s=o,l;o=null;let u=null;for(t=0;s;){t++;let f=s,d=0;for(let m=0;m<i&&(d++,f=f.nextZ,!!f);m++);let p=i;for(;d>0||p>0&&f;)d!==0&&(p===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,p--),u?u.nextZ=l:o=l,l.prevZ=u,u=l;s=f}u.nextZ=null,i*=2}while(t>1);return o}function pm(o,t,i,s,l){return o=(o-i)*l|0,t=(t-s)*l|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function wb(o){let t=o,i=o;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==o);return i}function fS(o,t,i,s,l,u,f,d){return(l-f)*(t-d)>=(o-f)*(u-d)&&(o-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(u-d)>=(l-f)*(s-d)}function Dl(o,t,i,s,l,u,f,d){return!(o===f&&t===d)&&fS(o,t,i,s,l,u,f,d)}function Db(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!Nb(o,t)&&(Yl(o,t)&&Yl(t,o)&&Ub(o,t)&&(sn(o.prev,o,t.prev)||sn(o,t.prev,t))||yo(o,t)&&sn(o.prev,o,o.next)>0&&sn(t.prev,t,t.next)>0)}function sn(o,t,i){return(t.y-o.y)*(i.x-t.x)-(t.x-o.x)*(i.y-t.y)}function yo(o,t){return o.x===t.x&&o.y===t.y}function hS(o,t,i,s){const l=kc(sn(o,t,i)),u=kc(sn(o,t,s)),f=kc(sn(i,s,o)),d=kc(sn(i,s,t));return!!(l!==u&&f!==d||l===0&&Vc(o,i,t)||u===0&&Vc(o,s,t)||f===0&&Vc(i,o,s)||d===0&&Vc(i,t,s))}function Vc(o,t,i){return t.x<=Math.max(o.x,i.x)&&t.x>=Math.min(o.x,i.x)&&t.y<=Math.max(o.y,i.y)&&t.y>=Math.min(o.y,i.y)}function kc(o){return o>0?1:o<0?-1:0}function Nb(o,t){let i=o;do{if(i.i!==o.i&&i.next.i!==o.i&&i.i!==t.i&&i.next.i!==t.i&&hS(i,i.next,o,t))return!0;i=i.next}while(i!==o);return!1}function Yl(o,t){return sn(o.prev,o,o.next)<0?sn(o,t,o.next)>=0&&sn(o,o.prev,t)>=0:sn(o,t,o.prev)<0||sn(o,o.next,t)<0}function Ub(o,t){let i=o,s=!1;const l=(o.x+t.x)/2,u=(o.y+t.y)/2;do i.y>u!=i.next.y>u&&i.next.y!==i.y&&l<(i.next.x-i.x)*(u-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==o);return s}function dS(o,t){const i=mm(o.i,o.x,o.y),s=mm(t.i,t.x,t.y),l=o.next,u=t.prev;return o.next=t,t.prev=o,i.next=l,l.prev=i,s.next=i,i.prev=s,u.next=s,s.prev=u,s}function Xy(o,t,i,s){const l=mm(o,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function Wl(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function mm(o,t,i){return{i:o,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lb(o,t,i,s){let l=0;for(let u=t,f=i-s;u<i;u+=s)l+=(o[f]-o[u])*(o[u+1]+o[f+1]),f=u;return l}class Ob{static triangulate(t,i,s=2){return vb(t,i,s)}}class uo{static area(t){const i=t.length;let s=0;for(let l=i-1,u=0;u<i;l=u++)s+=t[l].x*t[u].y-t[u].x*t[l].y;return s*.5}static isClockWise(t){return uo.area(t)<0}static triangulateShape(t,i){const s=[],l=[],u=[];qy(t),Yy(s,t);let f=t.length;i.forEach(qy);for(let p=0;p<i.length;p++)l.push(f),f+=i[p].length,Yy(s,i[p]);const d=Ob.triangulate(s,l);for(let p=0;p<d.length;p+=3)u.push(d.slice(p,p+3));return u}}function qy(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Yy(o,t){for(let i=0;i<t.length;i++)o.push(t[i].x),o.push(t[i].y)}class Im extends Rn{constructor(t=new uS([new Gt(.5,.5),new Gt(-.5,.5),new Gt(-.5,-.5),new Gt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const s=this,l=[],u=[];for(let d=0,p=t.length;d<p;d++){const m=t[d];f(m)}this.setAttribute("position",new Ze(l,3)),this.setAttribute("uv",new Ze(u,2)),this.computeVertexNormals();function f(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let y=i.bevelEnabled!==void 0?i.bevelEnabled:!0,S=i.bevelThickness!==void 0?i.bevelThickness:.2,T=i.bevelSize!==void 0?i.bevelSize:S-.1,A=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const _=i.extrudePath,w=i.UVGenerator!==void 0?i.UVGenerator:Pb;let D,b=!1,I,z,P,V;_&&(D=_.getSpacedPoints(v),b=!0,y=!1,I=_.computeFrenetFrames(v,!1),z=new H,P=new H,V=new H),y||(M=0,S=0,T=0,A=0);const N=d.extractPoints(m);let E=N.shape;const U=N.holes;if(!uo.isClockWise(E)){E=E.reverse();for(let At=0,vt=U.length;At<vt;At++){const mt=U[At];uo.isClockWise(mt)&&(U[At]=mt.reverse())}}function q(At){const mt=10000000000000001e-36;let gt=At[0];for(let Ct=1;Ct<=At.length;Ct++){const Nt=Ct%At.length,zt=At[Nt],oe=zt.x-gt.x,re=zt.y-gt.y,O=oe*oe+re*re,R=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(gt.x),Math.abs(gt.y)),rt=mt*R*R;if(O<=rt){At.splice(Nt,1),Ct--;continue}gt=zt}}q(E),U.forEach(q);const nt=U.length,Q=E;for(let At=0;At<nt;At++){const vt=U[At];E=E.concat(vt)}function F(At,vt,mt){return vt||console.error("THREE.ExtrudeGeometry: vec does not exist"),At.clone().addScaledVector(vt,mt)}const $=E.length;function Z(At,vt,mt){let gt,Ct,Nt;const zt=At.x-vt.x,oe=At.y-vt.y,re=mt.x-At.x,O=mt.y-At.y,R=zt*zt+oe*oe,rt=zt*O-oe*re;if(Math.abs(rt)>Number.EPSILON){const ft=Math.sqrt(R),Ut=Math.sqrt(re*re+O*O),_t=vt.x-oe/ft,Kt=vt.y+zt/ft,Ft=mt.x-O/Ut,$t=mt.y+re/Ut,ee=((Ft-_t)*O-($t-Kt)*re)/(zt*O-oe*re);gt=_t+zt*ee-At.x,Ct=Kt+oe*ee-At.y;const Ot=gt*gt+Ct*Ct;if(Ot<=2)return new Gt(gt,Ct);Nt=Math.sqrt(Ot/2)}else{let ft=!1;zt>Number.EPSILON?re>Number.EPSILON&&(ft=!0):zt<-Number.EPSILON?re<-Number.EPSILON&&(ft=!0):Math.sign(oe)===Math.sign(O)&&(ft=!0),ft?(gt=-oe,Ct=zt,Nt=Math.sqrt(R)):(gt=zt,Ct=oe,Nt=Math.sqrt(R/2))}return new Gt(gt/Nt,Ct/Nt)}const ut=[];for(let At=0,vt=Q.length,mt=vt-1,gt=At+1;At<vt;At++,mt++,gt++)mt===vt&&(mt=0),gt===vt&&(gt=0),ut[At]=Z(Q[At],Q[mt],Q[gt]);const yt=[];let Et,kt=ut.concat();for(let At=0,vt=nt;At<vt;At++){const mt=U[At];Et=[];for(let gt=0,Ct=mt.length,Nt=Ct-1,zt=gt+1;gt<Ct;gt++,Nt++,zt++)Nt===Ct&&(Nt=0),zt===Ct&&(zt=0),Et[gt]=Z(mt[gt],mt[Nt],mt[zt]);yt.push(Et),kt=kt.concat(Et)}let se;if(M===0)se=uo.triangulateShape(Q,U);else{const At=[],vt=[];for(let mt=0;mt<M;mt++){const gt=mt/M,Ct=S*Math.cos(gt*Math.PI/2),Nt=T*Math.sin(gt*Math.PI/2)+A;for(let zt=0,oe=Q.length;zt<oe;zt++){const re=F(Q[zt],ut[zt],Nt);Rt(re.x,re.y,-Ct),gt===0&&At.push(re)}for(let zt=0,oe=nt;zt<oe;zt++){const re=U[zt];Et=yt[zt];const O=[];for(let R=0,rt=re.length;R<rt;R++){const ft=F(re[R],Et[R],Nt);Rt(ft.x,ft.y,-Ct),gt===0&&O.push(ft)}gt===0&&vt.push(O)}}se=uo.triangulateShape(At,vt)}const X=se.length,pt=T+A;for(let At=0;At<$;At++){const vt=y?F(E[At],kt[At],pt):E[At];b?(P.copy(I.normals[0]).multiplyScalar(vt.x),z.copy(I.binormals[0]).multiplyScalar(vt.y),V.copy(D[0]).add(P).add(z),Rt(V.x,V.y,V.z)):Rt(vt.x,vt.y,0)}for(let At=1;At<=v;At++)for(let vt=0;vt<$;vt++){const mt=y?F(E[vt],kt[vt],pt):E[vt];b?(P.copy(I.normals[At]).multiplyScalar(mt.x),z.copy(I.binormals[At]).multiplyScalar(mt.y),V.copy(D[At]).add(P).add(z),Rt(V.x,V.y,V.z)):Rt(mt.x,mt.y,g/v*At)}for(let At=M-1;At>=0;At--){const vt=At/M,mt=S*Math.cos(vt*Math.PI/2),gt=T*Math.sin(vt*Math.PI/2)+A;for(let Ct=0,Nt=Q.length;Ct<Nt;Ct++){const zt=F(Q[Ct],ut[Ct],gt);Rt(zt.x,zt.y,g+mt)}for(let Ct=0,Nt=U.length;Ct<Nt;Ct++){const zt=U[Ct];Et=yt[Ct];for(let oe=0,re=zt.length;oe<re;oe++){const O=F(zt[oe],Et[oe],gt);b?Rt(O.x,O.y+D[v-1].y,D[v-1].x+mt):Rt(O.x,O.y,g+mt)}}}Y(),J();function Y(){const At=l.length/3;if(y){let vt=0,mt=$*vt;for(let gt=0;gt<X;gt++){const Ct=se[gt];wt(Ct[2]+mt,Ct[1]+mt,Ct[0]+mt)}vt=v+M*2,mt=$*vt;for(let gt=0;gt<X;gt++){const Ct=se[gt];wt(Ct[0]+mt,Ct[1]+mt,Ct[2]+mt)}}else{for(let vt=0;vt<X;vt++){const mt=se[vt];wt(mt[2],mt[1],mt[0])}for(let vt=0;vt<X;vt++){const mt=se[vt];wt(mt[0]+$*v,mt[1]+$*v,mt[2]+$*v)}}s.addGroup(At,l.length/3-At,0)}function J(){const At=l.length/3;let vt=0;xt(Q,vt),vt+=Q.length;for(let mt=0,gt=U.length;mt<gt;mt++){const Ct=U[mt];xt(Ct,vt),vt+=Ct.length}s.addGroup(At,l.length/3-At,1)}function xt(At,vt){let mt=At.length;for(;--mt>=0;){const gt=mt;let Ct=mt-1;Ct<0&&(Ct=At.length-1);for(let Nt=0,zt=v+M*2;Nt<zt;Nt++){const oe=$*Nt,re=$*(Nt+1),O=vt+gt+oe,R=vt+Ct+oe,rt=vt+Ct+re,ft=vt+gt+re;Tt(O,R,rt,ft)}}}function Rt(At,vt,mt){p.push(At),p.push(vt),p.push(mt)}function wt(At,vt,mt){Lt(At),Lt(vt),Lt(mt);const gt=l.length/3,Ct=w.generateTopUV(s,l,gt-3,gt-2,gt-1);B(Ct[0]),B(Ct[1]),B(Ct[2])}function Tt(At,vt,mt,gt){Lt(At),Lt(vt),Lt(gt),Lt(vt),Lt(mt),Lt(gt);const Ct=l.length/3,Nt=w.generateSideWallUV(s,l,Ct-6,Ct-3,Ct-2,Ct-1);B(Nt[0]),B(Nt[1]),B(Nt[3]),B(Nt[1]),B(Nt[2]),B(Nt[3])}function Lt(At){l.push(p[At*3+0]),l.push(p[At*3+1]),l.push(p[At*3+2])}function B(At){u.push(At.x),u.push(At.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return zb(i,s,t)}static fromJSON(t,i){const s=[];for(let u=0,f=t.shapes.length;u<f;u++){const d=i[t.shapes[u]];s.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new rf[l.type]().fromJSON(l)),new Im(s,t.options)}}const Pb={generateTopUV:function(o,t,i,s,l){const u=t[i*3],f=t[i*3+1],d=t[s*3],p=t[s*3+1],m=t[l*3],v=t[l*3+1];return[new Gt(u,f),new Gt(d,p),new Gt(m,v)]},generateSideWallUV:function(o,t,i,s,l,u){const f=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[s*3],v=t[s*3+1],g=t[s*3+2],y=t[l*3],S=t[l*3+1],T=t[l*3+2],A=t[u*3],M=t[u*3+1],_=t[u*3+2];return Math.abs(d-v)<Math.abs(f-m)?[new Gt(f,1-p),new Gt(m,1-g),new Gt(y,1-T),new Gt(A,1-_)]:[new Gt(d,1-p),new Gt(v,1-g),new Gt(S,1-T),new Gt(M,1-_)]}};function zb(o,t,i){if(i.shapes=[],Array.isArray(o))for(let s=0,l=o.length;s<l;s++){const u=o[s];i.shapes.push(u.uuid)}else i.shapes.push(o.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class Bm extends Om{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Bm(t.radius,t.detail)}}class To extends Rn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,v=p+1,g=t/d,y=i/p,S=[],T=[],A=[],M=[];for(let _=0;_<v;_++){const w=_*y-f;for(let D=0;D<m;D++){const b=D*g-u;T.push(b,-w,0),A.push(0,0,1),M.push(D/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let w=0;w<d;w++){const D=w+m*_,b=w+m*(_+1),I=w+1+m*(_+1),z=w+1+m*_;S.push(D,b,z),S.push(b,I,z)}this.setIndex(S),this.setAttribute("position",new Ze(T,3)),this.setAttribute("normal",new Ze(A,3)),this.setAttribute("uv",new Ze(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fm extends Rn{constructor(t=.5,i=1,s=32,l=1,u=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let g=t;const y=(i-t)/l,S=new H,T=new Gt;for(let A=0;A<=l;A++){for(let M=0;M<=s;M++){const _=u+M/s*f;S.x=g*Math.cos(_),S.y=g*Math.sin(_),p.push(S.x,S.y,S.z),m.push(0,0,1),T.x=(S.x/i+1)/2,T.y=(S.y/i+1)/2,v.push(T.x,T.y)}g+=y}for(let A=0;A<l;A++){const M=A*(s+1);for(let _=0;_<s;_++){const w=_+M,D=w,b=w+s+1,I=w+s+2,z=w+1;d.push(D,b,z),d.push(b,I,z)}}this.setIndex(d),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(m,3)),this.setAttribute("uv",new Ze(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xo extends Rn{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const v=[],g=new H,y=new H,S=[],T=[],A=[],M=[];for(let _=0;_<=s;_++){const w=[],D=_/s;let b=0;_===0&&f===0?b=.5/i:_===s&&p===Math.PI&&(b=-.5/i);for(let I=0;I<=i;I++){const z=I/i;g.x=-t*Math.cos(l+z*u)*Math.sin(f+D*d),g.y=t*Math.cos(f+D*d),g.z=t*Math.sin(l+z*u)*Math.sin(f+D*d),T.push(g.x,g.y,g.z),y.copy(g).normalize(),A.push(y.x,y.y,y.z),M.push(z+b,1-D),w.push(m++)}v.push(w)}for(let _=0;_<s;_++)for(let w=0;w<i;w++){const D=v[_][w+1],b=v[_][w],I=v[_+1][w],z=v[_+1][w+1];(_!==0||f>0)&&S.push(D,b,z),(_!==s-1||p<Math.PI)&&S.push(b,I,z)}this.setIndex(S),this.setAttribute("position",new Ze(T,3)),this.setAttribute("normal",new Ze(A,3)),this.setAttribute("uv",new Ze(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class of extends Rn{constructor(t=new oS(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),i=64,s=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:u};const f=t.computeFrenetFrames(i,u);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new H,p=new H,m=new Gt;let v=new H;const g=[],y=[],S=[],T=[];A(),this.setIndex(T),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(y,3)),this.setAttribute("uv",new Ze(S,2));function A(){for(let D=0;D<i;D++)M(D);M(u===!1?i:0),w(),_()}function M(D){v=t.getPointAt(D/i,v);const b=f.normals[D],I=f.binormals[D];for(let z=0;z<=l;z++){const P=z/l*Math.PI*2,V=Math.sin(P),N=-Math.cos(P);p.x=N*b.x+V*I.x,p.y=N*b.y+V*I.y,p.z=N*b.z+V*I.z,p.normalize(),y.push(p.x,p.y,p.z),d.x=v.x+s*p.x,d.y=v.y+s*p.y,d.z=v.z+s*p.z,g.push(d.x,d.y,d.z)}}function _(){for(let D=1;D<=i;D++)for(let b=1;b<=l;b++){const I=(l+1)*(D-1)+(b-1),z=(l+1)*D+(b-1),P=(l+1)*D+b,V=(l+1)*(D-1)+b;T.push(I,z,V),T.push(z,P,V)}}function w(){for(let D=0;D<=i;D++)for(let b=0;b<=l;b++)m.x=D/i,m.y=b/l,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new of(new rf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ib extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bb extends sr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vx,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fb extends sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hb extends sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pS extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Gb extends pS{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const mp=new Ve,Wy=new H,jy=new H;class Vb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Um,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Wy.setFromMatrixPosition(t.matrixWorld),i.position.copy(Wy),jy.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(jy),i.updateMatrixWorld(),mp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mp,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(mp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hm extends Kx{constructor(t=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kb extends Vb{constructor(){super(new Hm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xb extends pS{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new kb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qb extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class mS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Zy(o,t,i,s){const l=Yb(s);switch(i){case Fx:return o*t;case bm:return o*t/l.components*l.byteLength;case Am:return o*t/l.components*l.byteLength;case Gx:return o*t*2/l.components*l.byteLength;case Rm:return o*t*2/l.components*l.byteLength;case Hx:return o*t*3/l.components*l.byteLength;case ki:return o*t*4/l.components*l.byteLength;case Cm:return o*t*4/l.components*l.byteLength;case jc:case Zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Qc:case Kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fp:case Gp:return Math.max(o,16)*Math.max(t,8)/4;case Bp:case Hp:return Math.max(o,8)*Math.max(t,8)/2;case Vp:case kp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Wp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case jp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Zp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Qp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Kp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case $p:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case tm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case em:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case nm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case im:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case am:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case sm:case rm:case om:return Math.ceil(o/4)*Math.ceil(t/4)*16;case lm:case um:return Math.ceil(o/4)*Math.ceil(t/4)*8;case cm:case fm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Yb(o){switch(o){case qi:case Px:return{byteLength:1,components:1};case Il:case zx:case Xi:return{byteLength:2,components:1};case Em:case Tm:return{byteLength:2,components:4};case tr:case Mm:case ra:return{byteLength:4,components:1};case Ix:case Bx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gS(){let o=null,t=!1,i=null,s=null;function l(u,f){i(u,f),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Wb(o){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,m,v),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const v=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,v);else{g.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<g.length;S++){const T=g[y],A=g[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,g[y]=A)}g.length=y+1;for(let S=0,T=g.length;S<T;S++){const A=g[S];o.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:f}}var jb=`#ifdef USE_ALPHAHASH
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
#endif`,wA=`#ifdef USE_ENVMAP
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
#endif`,C2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,Me={alphahash_fragment:jb,alphahash_pars_fragment:Zb,alphamap_fragment:Qb,alphamap_pars_fragment:Kb,alphatest_fragment:Jb,alphatest_pars_fragment:$b,aomap_fragment:tA,aomap_pars_fragment:eA,batching_pars_vertex:nA,batching_vertex:iA,begin_vertex:aA,beginnormal_vertex:sA,bsdfs:rA,iridescence_fragment:oA,bumpmap_pars_fragment:lA,clipping_planes_fragment:uA,clipping_planes_pars_fragment:cA,clipping_planes_pars_vertex:fA,clipping_planes_vertex:hA,color_fragment:dA,color_pars_fragment:pA,color_pars_vertex:mA,color_vertex:gA,common:vA,cube_uv_reflection_fragment:_A,defaultnormal_vertex:yA,displacementmap_pars_vertex:xA,displacementmap_vertex:SA,emissivemap_fragment:MA,emissivemap_pars_fragment:EA,colorspace_fragment:TA,colorspace_pars_fragment:bA,envmap_fragment:AA,envmap_common_pars_fragment:RA,envmap_pars_fragment:CA,envmap_pars_vertex:wA,envmap_physical_pars_fragment:HA,envmap_vertex:DA,fog_vertex:NA,fog_pars_vertex:UA,fog_fragment:LA,fog_pars_fragment:OA,gradientmap_pars_fragment:PA,lightmap_pars_fragment:zA,lights_lambert_fragment:IA,lights_lambert_pars_fragment:BA,lights_pars_begin:FA,lights_toon_fragment:GA,lights_toon_pars_fragment:VA,lights_phong_fragment:kA,lights_phong_pars_fragment:XA,lights_physical_fragment:qA,lights_physical_pars_fragment:YA,lights_fragment_begin:WA,lights_fragment_maps:jA,lights_fragment_end:ZA,logdepthbuf_fragment:QA,logdepthbuf_pars_fragment:KA,logdepthbuf_pars_vertex:JA,logdepthbuf_vertex:$A,map_fragment:t2,map_pars_fragment:e2,map_particle_fragment:n2,map_particle_pars_fragment:i2,metalnessmap_fragment:a2,metalnessmap_pars_fragment:s2,morphinstance_vertex:r2,morphcolor_vertex:o2,morphnormal_vertex:l2,morphtarget_pars_vertex:u2,morphtarget_vertex:c2,normal_fragment_begin:f2,normal_fragment_maps:h2,normal_pars_fragment:d2,normal_pars_vertex:p2,normal_vertex:m2,normalmap_pars_fragment:g2,clearcoat_normal_fragment_begin:v2,clearcoat_normal_fragment_maps:_2,clearcoat_pars_fragment:y2,iridescence_pars_fragment:x2,opaque_fragment:S2,packing:M2,premultiplied_alpha_fragment:E2,project_vertex:T2,dithering_fragment:b2,dithering_pars_fragment:A2,roughnessmap_fragment:R2,roughnessmap_pars_fragment:C2,shadowmap_pars_fragment:w2,shadowmap_pars_vertex:D2,shadowmap_vertex:N2,shadowmask_pars_fragment:U2,skinbase_vertex:L2,skinning_pars_vertex:O2,skinning_vertex:P2,skinnormal_vertex:z2,specularmap_fragment:I2,specularmap_pars_fragment:B2,tonemapping_fragment:F2,tonemapping_pars_fragment:H2,transmission_fragment:G2,transmission_pars_fragment:V2,uv_pars_fragment:k2,uv_pars_vertex:X2,uv_vertex:q2,worldpos_vertex:Y2,background_vert:W2,background_frag:j2,backgroundCube_vert:Z2,backgroundCube_frag:Q2,cube_vert:K2,cube_frag:J2,depth_vert:$2,depth_frag:tR,distanceRGBA_vert:eR,distanceRGBA_frag:nR,equirect_vert:iR,equirect_frag:aR,linedashed_vert:sR,linedashed_frag:rR,meshbasic_vert:oR,meshbasic_frag:lR,meshlambert_vert:uR,meshlambert_frag:cR,meshmatcap_vert:fR,meshmatcap_frag:hR,meshnormal_vert:dR,meshnormal_frag:pR,meshphong_vert:mR,meshphong_frag:gR,meshphysical_vert:vR,meshphysical_frag:_R,meshtoon_vert:yR,meshtoon_frag:xR,points_vert:SR,points_frag:MR,shadow_vert:ER,shadow_frag:TR,sprite_vert:bR,sprite_frag:AR},Zt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},aa={basic:{uniforms:Kn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Kn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new de(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Kn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Kn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Kn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new de(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Kn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Kn([Zt.points,Zt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Kn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Kn([Zt.common,Zt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Kn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Kn([Zt.sprite,Zt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:Kn([Zt.common,Zt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:Kn([Zt.lights,Zt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};aa.physical={uniforms:Kn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Xc={r:0,b:0,g:0},qs=new Ni,RR=new Ve;function CR(o,t,i,s,l,u,f){const d=new de(0);let p=u===!0?0:1,m,v,g=null,y=0,S=null;function T(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?i:t).get(b)),b}function A(D){let b=!1;const I=T(D);I===null?_(d,p):I&&I.isColor&&(_(I,1),b=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(o.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(D,b){const I=T(b);I&&(I.isCubeTexture||I.mapping===lf)?(v===void 0&&(v=new fn(new Eo(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:_o(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),qs.copy(b.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(RR.makeRotationFromEuler(qs)),v.material.toneMapped=Le.getTransfer(I.colorSpace)!==Ye,(g!==I||y!==I.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,g=I,y=I.version,S=o.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new fn(new To(2,2),new rn({name:"BackgroundMaterial",uniforms:_o(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Le.getTransfer(I.colorSpace)!==Ye,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||y!==I.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,g=I,y=I.version,S=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,b){D.getRGB(Xc,Qx(o)),s.buffers.color.setClear(Xc.r,Xc.g,Xc.b,b,f)}function w(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,b=1){d.set(D),p=b,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,_(d,p)},render:A,addToRenderList:M,dispose:w}}function wR(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,f=!1;function d(E,U,G,q,nt){let Q=!1;const F=g(q,G,U);u!==F&&(u=F,m(u.object)),Q=S(E,q,G,nt),Q&&T(E,q,G,nt),nt!==null&&t.update(nt,o.ELEMENT_ARRAY_BUFFER),(Q||f)&&(f=!1,b(E,U,G,q),nt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function p(){return o.createVertexArray()}function m(E){return o.bindVertexArray(E)}function v(E){return o.deleteVertexArray(E)}function g(E,U,G){const q=G.wireframe===!0;let nt=s[E.id];nt===void 0&&(nt={},s[E.id]=nt);let Q=nt[U.id];Q===void 0&&(Q={},nt[U.id]=Q);let F=Q[q];return F===void 0&&(F=y(p()),Q[q]=F),F}function y(E){const U=[],G=[],q=[];for(let nt=0;nt<i;nt++)U[nt]=0,G[nt]=0,q[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:q,object:E,attributes:{},index:null}}function S(E,U,G,q){const nt=u.attributes,Q=U.attributes;let F=0;const $=G.getAttributes();for(const Z in $)if($[Z].location>=0){const yt=nt[Z];let Et=Q[Z];if(Et===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(Et=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(Et=E.instanceColor)),yt===void 0||yt.attribute!==Et||Et&&yt.data!==Et.data)return!0;F++}return u.attributesNum!==F||u.index!==q}function T(E,U,G,q){const nt={},Q=U.attributes;let F=0;const $=G.getAttributes();for(const Z in $)if($[Z].location>=0){let yt=Q[Z];yt===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(yt=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(yt=E.instanceColor));const Et={};Et.attribute=yt,yt&&yt.data&&(Et.data=yt.data),nt[Z]=Et,F++}u.attributes=nt,u.attributesNum=F,u.index=q}function A(){const E=u.newAttributes;for(let U=0,G=E.length;U<G;U++)E[U]=0}function M(E){_(E,0)}function _(E,U){const G=u.newAttributes,q=u.enabledAttributes,nt=u.attributeDivisors;G[E]=1,q[E]===0&&(o.enableVertexAttribArray(E),q[E]=1),nt[E]!==U&&(o.vertexAttribDivisor(E,U),nt[E]=U)}function w(){const E=u.newAttributes,U=u.enabledAttributes;for(let G=0,q=U.length;G<q;G++)U[G]!==E[G]&&(o.disableVertexAttribArray(G),U[G]=0)}function D(E,U,G,q,nt,Q,F){F===!0?o.vertexAttribIPointer(E,U,G,nt,Q):o.vertexAttribPointer(E,U,G,q,nt,Q)}function b(E,U,G,q){A();const nt=q.attributes,Q=G.getAttributes(),F=U.defaultAttributeValues;for(const $ in Q){const Z=Q[$];if(Z.location>=0){let ut=nt[$];if(ut===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(ut=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(ut=E.instanceColor)),ut!==void 0){const yt=ut.normalized,Et=ut.itemSize,kt=t.get(ut);if(kt===void 0)continue;const se=kt.buffer,X=kt.type,pt=kt.bytesPerElement,Y=X===o.INT||X===o.UNSIGNED_INT||ut.gpuType===Mm;if(ut.isInterleavedBufferAttribute){const J=ut.data,xt=J.stride,Rt=ut.offset;if(J.isInstancedInterleavedBuffer){for(let wt=0;wt<Z.locationSize;wt++)_(Z.location+wt,J.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let wt=0;wt<Z.locationSize;wt++)M(Z.location+wt);o.bindBuffer(o.ARRAY_BUFFER,se);for(let wt=0;wt<Z.locationSize;wt++)D(Z.location+wt,Et/Z.locationSize,X,yt,xt*pt,(Rt+Et/Z.locationSize*wt)*pt,Y)}else{if(ut.isInstancedBufferAttribute){for(let J=0;J<Z.locationSize;J++)_(Z.location+J,ut.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let J=0;J<Z.locationSize;J++)M(Z.location+J);o.bindBuffer(o.ARRAY_BUFFER,se);for(let J=0;J<Z.locationSize;J++)D(Z.location+J,Et/Z.locationSize,X,yt,Et*pt,Et/Z.locationSize*J*pt,Y)}}else if(F!==void 0){const yt=F[$];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(Z.location,yt);break;case 3:o.vertexAttrib3fv(Z.location,yt);break;case 4:o.vertexAttrib4fv(Z.location,yt);break;default:o.vertexAttrib1fv(Z.location,yt)}}}}w()}function I(){V();for(const E in s){const U=s[E];for(const G in U){const q=U[G];for(const nt in q)v(q[nt].object),delete q[nt];delete U[G]}delete s[E]}}function z(E){if(s[E.id]===void 0)return;const U=s[E.id];for(const G in U){const q=U[G];for(const nt in q)v(q[nt].object),delete q[nt];delete U[G]}delete s[E.id]}function P(E){for(const U in s){const G=s[U];if(G[E.id]===void 0)continue;const q=G[E.id];for(const nt in q)v(q[nt].object),delete q[nt];delete G[E.id]}}function V(){N(),f=!0,u!==l&&(u=l,m(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:N,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:M,disableUnusedAttributes:w}}function DR(o,t,i){let s;function l(m){s=m}function u(m,v){o.drawArrays(s,m,v),i.update(v,s,1)}function f(m,v,g){g!==0&&(o.drawArraysInstanced(s,m,v,g),i.update(v,s,g))}function d(m,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let S=0;for(let T=0;T<g;T++)S+=v[T];i.update(S,s,1)}function p(m,v,g,y){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)f(m[T],v[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,v,0,y,0,g);let T=0;for(let A=0;A<g;A++)T+=v[A]*y[A];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function NR(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==ki&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const V=P===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==qi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ra&&!V)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=T>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:b,vertexTextures:I,maxSamples:z}}function UR(o){const t=this;let i=null,s=0,l=!1,u=!1;const f=new Ws,d=new ye,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||s!==0||l;return l=y,s=g.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,S){const T=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||T===null||T.length===0||u&&!M)u?v(null):m();else{const w=u?0:s,D=w*4;let b=_.clippingState||null;p.value=b,b=v(T,y,D,S);for(let I=0;I!==D;++I)b[I]=i[I];_.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,y,S,T){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=p.value,T!==!0||M===null){const _=S+A*4,w=y.matrixWorldInverse;d.getNormalMatrix(w),(M===null||M.length<_)&&(M=new Float32Array(_));for(let D=0,b=S;D!==A;++D,b+=4)f.copy(g[D]).applyMatrix4(w,d),f.normal.toArray(M,b),M[b+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function LR(o){let t=new WeakMap;function i(f,d){return d===Op?f.mapping=mo:d===Pp&&(f.mapping=go),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Op||d===Pp)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new jT(p.height);return m.fromEquirectangularTexture(o,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const co=4,Qy=[.125,.215,.35,.446,.526,.582],Qs=20,gp=new Hm,Ky=new de;let vp=null,_p=0,yp=0,xp=!1;const js=(1+Math.sqrt(5))/2,ro=1/js,Jy=[new H(-js,ro,0),new H(js,ro,0),new H(-ro,0,js),new H(ro,0,js),new H(0,js,-ro),new H(0,js,ro),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],OR=new H;class $y{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:f=256,position:d=OR}=u;vp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),xp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vp,_p,yp),this._renderer.xr.enabled=xp,t.scissorTest=!1,qc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===mo||t.mapping===go?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),xp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:sa,minFilter:sa,generateMipmaps:!1,type:Xi,format:ki,colorSpace:vo,depthBuffer:!1},l=tx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tx(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PR(u)),this._blurMaterial=zR(u,t,i)}return l}_compileMaterial(t){const i=new fn(this._lodPlanes[0],t);this._renderer.compile(i,gp)}_sceneToCubeUV(t,i,s,l,u){const p=new vi(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(Ky),g.toneMapping=La,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const A=new kl({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),M=new fn(new Eo,A);let _=!1;const w=t.background;w?w.isColor&&(A.color.copy(w),t.background=null,_=!0):(A.color.copy(Ky),_=!0);for(let D=0;D<6;D++){const b=D%3;b===0?(p.up.set(0,m[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[D],u.y,u.z)):b===1?(p.up.set(0,0,m[D]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[D],u.z)):(p.up.set(0,m[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[D]));const I=this._cubeSize;qc(l,b*I,D>2?I:0,I,I),g.setRenderTarget(l),_&&g.render(M,p),g.render(t,p)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=y,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===mo||t.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ex());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new fn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;qc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,gp)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Jy[(l-u-1)%Jy.length];this._blur(t,u-1,u,f,d)}i.autoClear=s}_blur(t,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",u),this._halfBlur(f,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new fn(this._lodPlanes[l],m),y=m.uniforms,S=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Qs-1),A=u/T,M=isFinite(u)?1+Math.floor(v*A):Qs;M>Qs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Qs}`);const _=[];let w=0;for(let P=0;P<Qs;++P){const V=P/A,N=Math.exp(-V*V/2);_.push(N),P===0?w+=N:P<M&&(w+=2*N)}for(let P=0;P<_.length;P++)_[P]=_[P]/w;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=T,y.mipInt.value=D-s;const b=this._sizeLods[l],I=3*b*(l>D-co?l-D+co:0),z=4*(this._cubeSize-b);qc(i,I,z,3*b,2*b),p.setRenderTarget(i),p.render(g,gp)}}function PR(o){const t=[],i=[],s=[];let l=o;const u=o-co+1+Qy.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>o-co?p=Qy[f-o+co-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),v=-m,g=1+m,y=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,T=6,A=3,M=2,_=1,w=new Float32Array(A*T*S),D=new Float32Array(M*T*S),b=new Float32Array(_*T*S);for(let z=0;z<S;z++){const P=z%3*2/3-1,V=z>2?0:-1,N=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];w.set(N,A*T*z),D.set(y,M*T*z);const E=[z,z,z,z,z,z];b.set(E,_*T*z)}const I=new Rn;I.setAttribute("position",new Tn(w,A)),I.setAttribute("uv",new Tn(D,M)),I.setAttribute("faceIndex",new Tn(b,_)),t.push(I),l>co&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function tx(o,t,i){const s=new Di(o,t,i);return s.texture.mapping=lf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function qc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function zR(o,t,i){const s=new Float32Array(Qs),l=new H(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Gm(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ex(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gm(),fragmentShader:`

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
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function nx(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gm(),fragmentShader:`

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
	`}function IR(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Op||p===Pp,v=p===mo||p===go;if(m||v){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new $y(o)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new $y(o)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function BR(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Vl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function FR(o,t,i,s){const l={},u=new WeakMap;function f(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);y.removeEventListener("dispose",f),delete l[y.id];const S=u.get(y);S&&(t.remove(S),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(g){const y=g.attributes;for(const S in y)t.update(y[S],o.ARRAY_BUFFER)}function m(g){const y=[],S=g.index,T=g.attributes.position;let A=0;if(S!==null){const w=S.array;A=S.version;for(let D=0,b=w.length;D<b;D+=3){const I=w[D+0],z=w[D+1],P=w[D+2];y.push(I,z,z,P,P,I)}}else if(T!==void 0){const w=T.array;A=T.version;for(let D=0,b=w.length/3-1;D<b;D+=3){const I=D+0,z=D+1,P=D+2;y.push(I,z,z,P,P,I)}}else return;const M=new(Xx(y)?Zx:jx)(y,1);M.version=A;const _=u.get(g);_&&t.remove(_),u.set(g,M)}function v(g){const y=u.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&m(g)}else m(g);return u.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function HR(o,t,i){let s;function l(y){s=y}let u,f;function d(y){u=y.type,f=y.bytesPerElement}function p(y,S){o.drawElements(s,S,u,y*f),i.update(S,s,1)}function m(y,S,T){T!==0&&(o.drawElementsInstanced(s,S,u,y*f,T),i.update(S,s,T))}function v(y,S,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,u,y,0,T);let M=0;for(let _=0;_<T;_++)M+=S[_];i.update(M,s,1)}function g(y,S,T,A){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)m(y[_]/f,S[_],A[_]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,u,y,0,A,0,T);let _=0;for(let w=0;w<T;w++)_+=S[w]*A[w];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function GR(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,d){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function VR(o,t,i){const s=new WeakMap,l=new cn;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let E=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",E)};var S=E;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let b=0;T===!0&&(b=1),A===!0&&(b=2),M===!0&&(b=3);let I=d.attributes.position.count*b,z=1;I>t.maxTextureSize&&(z=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const P=new Float32Array(I*z*4*g),V=new qx(P,I,z,g);V.type=ra,V.needsUpdate=!0;const N=b*4;for(let U=0;U<g;U++){const G=_[U],q=w[U],nt=D[U],Q=I*z*4*U;for(let F=0;F<G.count;F++){const $=F*N;T===!0&&(l.fromBufferAttribute(G,F),P[Q+$+0]=l.x,P[Q+$+1]=l.y,P[Q+$+2]=l.z,P[Q+$+3]=0),A===!0&&(l.fromBufferAttribute(q,F),P[Q+$+4]=l.x,P[Q+$+5]=l.y,P[Q+$+6]=l.z,P[Q+$+7]=0),M===!0&&(l.fromBufferAttribute(nt,F),P[Q+$+8]=l.x,P[Q+$+9]=l.y,P[Q+$+10]=l.z,P[Q+$+11]=nt.itemSize===4?l.w:1)}}y={count:g,texture:V,size:new Gt(I,z)},s.set(d,y),d.addEventListener("dispose",E)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let T=0;for(let M=0;M<m.length;M++)T+=m[M];const A=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function kR(o,t,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,v=p.geometry,g=t.get(p,v);if(l.get(g)!==m&&(t.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return g}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const vS=new Xn,ix=new nS(1,1),_S=new qx,yS=new UT,xS=new Jx,ax=[],sx=[],rx=new Float32Array(16),ox=new Float32Array(9),lx=new Float32Array(4);function bo(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=ax[l];if(u===void 0&&(u=new Float32Array(l),ax[l]=u),t!==0){s.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,o[f].toArray(u,d)}return u}function bn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function An(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function uf(o,t){let i=sx[t];i===void 0&&(i=new Int32Array(t),sx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function XR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function qR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2fv(this.addr,t),An(i,t)}}function YR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bn(i,t))return;o.uniform3fv(this.addr,t),An(i,t)}}function WR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4fv(this.addr,t),An(i,t)}}function jR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;lx.set(s),o.uniformMatrix2fv(this.addr,!1,lx),An(i,s)}}function ZR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;ox.set(s),o.uniformMatrix3fv(this.addr,!1,ox),An(i,s)}}function QR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;rx.set(s),o.uniformMatrix4fv(this.addr,!1,rx),An(i,s)}}function KR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function JR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2iv(this.addr,t),An(i,t)}}function $R(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3iv(this.addr,t),An(i,t)}}function tC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4iv(this.addr,t),An(i,t)}}function eC(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function nC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2uiv(this.addr,t),An(i,t)}}function iC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3uiv(this.addr,t),An(i,t)}}function aC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4uiv(this.addr,t),An(i,t)}}function sC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(ix.compareFunction=kx,u=ix):u=vS,i.setTexture2D(t||u,l)}function rC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||yS,l)}function oC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||xS,l)}function lC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||_S,l)}function uC(o){switch(o){case 5126:return XR;case 35664:return qR;case 35665:return YR;case 35666:return WR;case 35674:return jR;case 35675:return ZR;case 35676:return QR;case 5124:case 35670:return KR;case 35667:case 35671:return JR;case 35668:case 35672:return $R;case 35669:case 35673:return tC;case 5125:return eC;case 36294:return nC;case 36295:return iC;case 36296:return aC;case 35678:case 36198:case 36298:case 36306:case 35682:return sC;case 35679:case 36299:case 36307:return rC;case 35680:case 36300:case 36308:case 36293:return oC;case 36289:case 36303:case 36311:case 36292:return lC}}function cC(o,t){o.uniform1fv(this.addr,t)}function fC(o,t){const i=bo(t,this.size,2);o.uniform2fv(this.addr,i)}function hC(o,t){const i=bo(t,this.size,3);o.uniform3fv(this.addr,i)}function dC(o,t){const i=bo(t,this.size,4);o.uniform4fv(this.addr,i)}function pC(o,t){const i=bo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function mC(o,t){const i=bo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function gC(o,t){const i=bo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function vC(o,t){o.uniform1iv(this.addr,t)}function _C(o,t){o.uniform2iv(this.addr,t)}function yC(o,t){o.uniform3iv(this.addr,t)}function xC(o,t){o.uniform4iv(this.addr,t)}function SC(o,t){o.uniform1uiv(this.addr,t)}function MC(o,t){o.uniform2uiv(this.addr,t)}function EC(o,t){o.uniform3uiv(this.addr,t)}function TC(o,t){o.uniform4uiv(this.addr,t)}function bC(o,t,i){const s=this.cache,l=t.length,u=uf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||vS,u[f])}function AC(o,t,i){const s=this.cache,l=t.length,u=uf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||yS,u[f])}function RC(o,t,i){const s=this.cache,l=t.length,u=uf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||xS,u[f])}function CC(o,t,i){const s=this.cache,l=t.length,u=uf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||_S,u[f])}function wC(o){switch(o){case 5126:return cC;case 35664:return fC;case 35665:return hC;case 35666:return dC;case 35674:return pC;case 35675:return mC;case 35676:return gC;case 5124:case 35670:return vC;case 35667:case 35671:return _C;case 35668:case 35672:return yC;case 35669:case 35673:return xC;case 5125:return SC;case 36294:return MC;case 36295:return EC;case 36296:return TC;case 35678:case 36198:case 36298:case 36306:case 35682:return bC;case 35679:case 36299:case 36307:return AC;case 35680:case 36300:case 36308:case 36293:return RC;case 36289:case 36303:case 36311:case 36292:return CC}}class DC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=uC(i.type)}}class NC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=wC(i.type)}}class UC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Sp=/(\w+)(\])?(\[|\.)?/g;function ux(o,t){o.seq.push(t),o.map[t.id]=t}function LC(o,t,i){const s=o.name,l=s.length;for(Sp.lastIndex=0;;){const u=Sp.exec(s),f=Sp.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){ux(i,m===void 0?new DC(d,o,t):new NC(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new UC(d),ux(i,g)),i=g}}}class Jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);LC(u,f,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function cx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const OC=37297;let PC=0;function zC(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const fx=new ye;function IC(o){Le._getMatrix(fx,Le.workingColorSpace,o);const t=`mat3( ${fx.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case tf:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function hx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+zC(o.getShaderSource(t),d)}else return u}function BC(o,t){const i=IC(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function FC(o,t){let i;switch(t){case Cx:i="Linear";break;case wx:i="Reinhard";break;case Dx:i="Cineon";break;case Sm:i="ACESFilmic";break;case Ux:i="AgX";break;case Lx:i="Neutral";break;case Nx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new H;function HC(){Le.getLuminanceCoefficients(Yc);const o=Yc.x.toFixed(4),t=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function VC(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function kC(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:o.getAttribLocation(t,f),locationSize:d}}return i}function Nl(o){return o!==""}function dx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function px(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XC=/^[ \t]*#include +<([\w\d./]+)>/gm;function gm(o){return o.replace(XC,YC)}const qC=new Map;function YC(o,t){let i=Me[t];if(i===void 0){const s=qC.get(t);if(s!==void 0)i=Me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return gm(i)}const WC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mx(o){return o.replace(WC,jC)}function jC(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function gx(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function ZC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ax?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===NE?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Da&&(t="SHADOWMAP_TYPE_VSM"),t}function QC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case mo:case go:t="ENVMAP_TYPE_CUBE";break;case lf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function KC(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case go:t="ENVMAP_MODE_REFRACTION";break}return t}function JC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Rx:t="ENVMAP_BLENDING_MULTIPLY";break;case QE:t="ENVMAP_BLENDING_MIX";break;case KE:t="ENVMAP_BLENDING_ADD";break}return t}function $C(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function tw(o,t,i,s){const l=o.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=ZC(i),m=QC(i),v=KC(i),g=JC(i),y=$C(i),S=GC(i),T=VC(u),A=l.createProgram();let M,_,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Nl).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Nl).join(`
`),_.length>0&&(_+=`
`)):(M=[gx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),_=[gx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==La?"#define TONE_MAPPING":"",i.toneMapping!==La?Me.tonemapping_pars_fragment:"",i.toneMapping!==La?FC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,BC("linearToOutputTexel",i.outputColorSpace),HC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Nl).join(`
`)),f=gm(f),f=dx(f,i),f=px(f,i),d=gm(d),d=dx(d,i),d=px(d,i),f=mx(f),d=mx(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===py?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===py?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=w+M+f,b=w+_+d,I=cx(l,l.VERTEX_SHADER,D),z=cx(l,l.FRAGMENT_SHADER,b);l.attachShader(A,I),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(U){if(o.debug.checkShaderErrors){const G=l.getProgramInfoLog(A)||"",q=l.getShaderInfoLog(I)||"",nt=l.getShaderInfoLog(z)||"",Q=G.trim(),F=q.trim(),$=nt.trim();let Z=!0,ut=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,I,z);else{const yt=hx(l,I,"vertex"),Et=hx(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Q+`
`+yt+`
`+Et)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(F===""||$==="")&&(ut=!1);ut&&(U.diagnostics={runnable:Z,programLog:Q,vertexShader:{log:F,prefix:M},fragmentShader:{log:$,prefix:_}})}l.deleteShader(I),l.deleteShader(z),V=new Jc(l,A),N=kC(l,A)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let E=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=l.getProgramParameter(A,OC)),E},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=PC++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=z,this}let ew=0;class nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new iw(t),i.set(t,s)),s}}class iw{constructor(t){this.id=ew++,this.code=t,this.usedTimes=0}}function aw(o,t,i,s,l,u,f){const d=new Yx,p=new nw,m=new Set,v=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(N){return m.add(N),N===0?"uv":`uv${N}`}function M(N,E,U,G,q){const nt=G.fog,Q=q.geometry,F=N.isMeshStandardMaterial?G.environment:null,$=(N.isMeshStandardMaterial?i:t).get(N.envMap||F),Z=$&&$.mapping===lf?$.image.height:null,ut=T[N.type];N.precision!==null&&(S=l.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Et=yt!==void 0?yt.length:0;let kt=0;Q.morphAttributes.position!==void 0&&(kt=1),Q.morphAttributes.normal!==void 0&&(kt=2),Q.morphAttributes.color!==void 0&&(kt=3);let se,X,pt,Y;if(ut){const we=aa[ut];se=we.vertexShader,X=we.fragmentShader}else se=N.vertexShader,X=N.fragmentShader,p.update(N),pt=p.getVertexShaderID(N),Y=p.getFragmentShaderID(N);const J=o.getRenderTarget(),xt=o.state.buffers.depth.getReversed(),Rt=q.isInstancedMesh===!0,wt=q.isBatchedMesh===!0,Tt=!!N.map,Lt=!!N.matcap,B=!!$,At=!!N.aoMap,vt=!!N.lightMap,mt=!!N.bumpMap,gt=!!N.normalMap,Ct=!!N.displacementMap,Nt=!!N.emissiveMap,zt=!!N.metalnessMap,oe=!!N.roughnessMap,re=N.anisotropy>0,O=N.clearcoat>0,R=N.dispersion>0,rt=N.iridescence>0,ft=N.sheen>0,Ut=N.transmission>0,_t=re&&!!N.anisotropyMap,Kt=O&&!!N.clearcoatMap,Ft=O&&!!N.clearcoatNormalMap,$t=O&&!!N.clearcoatRoughnessMap,ee=rt&&!!N.iridescenceMap,Ot=rt&&!!N.iridescenceThicknessMap,Wt=ft&&!!N.sheenColorMap,St=ft&&!!N.sheenRoughnessMap,Yt=!!N.specularMap,Bt=!!N.specularColorMap,me=!!N.specularIntensityMap,j=Ut&&!!N.transmissionMap,Ht=Ut&&!!N.thicknessMap,Xt=!!N.gradientMap,te=!!N.alphaMap,Pt=N.alphaTest>0,Dt=!!N.alphaHash,ae=!!N.extensions;let _e=La;N.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(_e=o.toneMapping);const We={shaderID:ut,shaderType:N.type,shaderName:N.name,vertexShader:se,fragmentShader:X,defines:N.defines,customVertexShaderID:pt,customFragmentShaderID:Y,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:wt,batchingColor:wt&&q._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&q.instanceColor!==null,instancingMorph:Rt&&q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:J===null?o.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:vo,alphaToCoverage:!!N.alphaToCoverage,map:Tt,matcap:Lt,envMap:B,envMapMode:B&&$.mapping,envMapCubeUVHeight:Z,aoMap:At,lightMap:vt,bumpMap:mt,normalMap:gt,displacementMap:y&&Ct,emissiveMap:Nt,normalMapObjectSpace:gt&&N.normalMapType===eT,normalMapTangentSpace:gt&&N.normalMapType===Vx,metalnessMap:zt,roughnessMap:oe,anisotropy:re,anisotropyMap:_t,clearcoat:O,clearcoatMap:Kt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:$t,dispersion:R,iridescence:rt,iridescenceMap:ee,iridescenceThicknessMap:Ot,sheen:ft,sheenColorMap:Wt,sheenRoughnessMap:St,specularMap:Yt,specularColorMap:Bt,specularIntensityMap:me,transmission:Ut,transmissionMap:j,thicknessMap:Ht,gradientMap:Xt,opaque:N.transparent===!1&&N.blending===fo&&N.alphaToCoverage===!1,alphaMap:te,alphaTest:Pt,alphaHash:Dt,combine:N.combine,mapUv:Tt&&A(N.map.channel),aoMapUv:At&&A(N.aoMap.channel),lightMapUv:vt&&A(N.lightMap.channel),bumpMapUv:mt&&A(N.bumpMap.channel),normalMapUv:gt&&A(N.normalMap.channel),displacementMapUv:Ct&&A(N.displacementMap.channel),emissiveMapUv:Nt&&A(N.emissiveMap.channel),metalnessMapUv:zt&&A(N.metalnessMap.channel),roughnessMapUv:oe&&A(N.roughnessMap.channel),anisotropyMapUv:_t&&A(N.anisotropyMap.channel),clearcoatMapUv:Kt&&A(N.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&A(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&A(N.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&A(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&A(N.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&A(N.sheenColorMap.channel),sheenRoughnessMapUv:St&&A(N.sheenRoughnessMap.channel),specularMapUv:Yt&&A(N.specularMap.channel),specularColorMapUv:Bt&&A(N.specularColorMap.channel),specularIntensityMapUv:me&&A(N.specularIntensityMap.channel),transmissionMapUv:j&&A(N.transmissionMap.channel),thicknessMapUv:Ht&&A(N.thicknessMap.channel),alphaMapUv:te&&A(N.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(gt||re),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Q.attributes.uv&&(Tt||te),fog:!!nt,useFog:N.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:xt,skinning:q.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:kt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&U.length>0,shadowMapType:o.shadowMap.type,toneMapping:_e,decodeVideoTexture:Tt&&N.map.isVideoTexture===!0&&Le.getTransfer(N.map.colorSpace)===Ye,decodeVideoTextureEmissive:Nt&&N.emissiveMap.isVideoTexture===!0&&Le.getTransfer(N.emissiveMap.colorSpace)===Ye,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Gi,flipSided:N.side===kn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ae&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&N.extensions.multiDraw===!0||wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function _(N){const E=[];if(N.shaderID?E.push(N.shaderID):(E.push(N.customVertexShaderID),E.push(N.customFragmentShaderID)),N.defines!==void 0)for(const U in N.defines)E.push(U),E.push(N.defines[U]);return N.isRawShaderMaterial===!1&&(w(E,N),D(E,N),E.push(o.outputColorSpace)),E.push(N.customProgramCacheKey),E.join()}function w(N,E){N.push(E.precision),N.push(E.outputColorSpace),N.push(E.envMapMode),N.push(E.envMapCubeUVHeight),N.push(E.mapUv),N.push(E.alphaMapUv),N.push(E.lightMapUv),N.push(E.aoMapUv),N.push(E.bumpMapUv),N.push(E.normalMapUv),N.push(E.displacementMapUv),N.push(E.emissiveMapUv),N.push(E.metalnessMapUv),N.push(E.roughnessMapUv),N.push(E.anisotropyMapUv),N.push(E.clearcoatMapUv),N.push(E.clearcoatNormalMapUv),N.push(E.clearcoatRoughnessMapUv),N.push(E.iridescenceMapUv),N.push(E.iridescenceThicknessMapUv),N.push(E.sheenColorMapUv),N.push(E.sheenRoughnessMapUv),N.push(E.specularMapUv),N.push(E.specularColorMapUv),N.push(E.specularIntensityMapUv),N.push(E.transmissionMapUv),N.push(E.thicknessMapUv),N.push(E.combine),N.push(E.fogExp2),N.push(E.sizeAttenuation),N.push(E.morphTargetsCount),N.push(E.morphAttributeCount),N.push(E.numDirLights),N.push(E.numPointLights),N.push(E.numSpotLights),N.push(E.numSpotLightMaps),N.push(E.numHemiLights),N.push(E.numRectAreaLights),N.push(E.numDirLightShadows),N.push(E.numPointLightShadows),N.push(E.numSpotLightShadows),N.push(E.numSpotLightShadowsWithMaps),N.push(E.numLightProbes),N.push(E.shadowMapType),N.push(E.toneMapping),N.push(E.numClippingPlanes),N.push(E.numClipIntersection),N.push(E.depthPacking)}function D(N,E){d.disableAll(),E.supportsVertexTextures&&d.enable(0),E.instancing&&d.enable(1),E.instancingColor&&d.enable(2),E.instancingMorph&&d.enable(3),E.matcap&&d.enable(4),E.envMap&&d.enable(5),E.normalMapObjectSpace&&d.enable(6),E.normalMapTangentSpace&&d.enable(7),E.clearcoat&&d.enable(8),E.iridescence&&d.enable(9),E.alphaTest&&d.enable(10),E.vertexColors&&d.enable(11),E.vertexAlphas&&d.enable(12),E.vertexUv1s&&d.enable(13),E.vertexUv2s&&d.enable(14),E.vertexUv3s&&d.enable(15),E.vertexTangents&&d.enable(16),E.anisotropy&&d.enable(17),E.alphaHash&&d.enable(18),E.batching&&d.enable(19),E.dispersion&&d.enable(20),E.batchingColor&&d.enable(21),E.gradientMap&&d.enable(22),N.push(d.mask),d.disableAll(),E.fog&&d.enable(0),E.useFog&&d.enable(1),E.flatShading&&d.enable(2),E.logarithmicDepthBuffer&&d.enable(3),E.reversedDepthBuffer&&d.enable(4),E.skinning&&d.enable(5),E.morphTargets&&d.enable(6),E.morphNormals&&d.enable(7),E.morphColors&&d.enable(8),E.premultipliedAlpha&&d.enable(9),E.shadowMapEnabled&&d.enable(10),E.doubleSided&&d.enable(11),E.flipSided&&d.enable(12),E.useDepthPacking&&d.enable(13),E.dithering&&d.enable(14),E.transmission&&d.enable(15),E.sheen&&d.enable(16),E.opaque&&d.enable(17),E.pointsUvs&&d.enable(18),E.decodeVideoTexture&&d.enable(19),E.decodeVideoTextureEmissive&&d.enable(20),E.alphaToCoverage&&d.enable(21),N.push(d.mask)}function b(N){const E=T[N.type];let U;if(E){const G=aa[E];U=Xl.clone(G.uniforms)}else U=N.uniforms;return U}function I(N,E){let U;for(let G=0,q=v.length;G<q;G++){const nt=v[G];if(nt.cacheKey===E){U=nt,++U.usedTimes;break}}return U===void 0&&(U=new tw(o,E,N,u),v.push(U)),U}function z(N){if(--N.usedTimes===0){const E=v.indexOf(N);v[E]=v[v.length-1],v.pop(),N.destroy()}}function P(N){p.remove(N)}function V(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:b,acquireProgram:I,releaseProgram:z,releaseShaderCache:P,programs:v,dispose:V}}function sw(){let o=new WeakMap;function t(f){return o.has(f)}function i(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function s(f){o.delete(f)}function l(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function rw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function vx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function _x(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function f(g,y,S,T,A,M){let _=o[t];return _===void 0?(_={id:g.id,object:g,geometry:y,material:S,groupOrder:T,renderOrder:g.renderOrder,z:A,group:M},o[t]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=S,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=A,_.group=M),t++,_}function d(g,y,S,T,A,M){const _=f(g,y,S,T,A,M);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):i.push(_)}function p(g,y,S,T,A,M){const _=f(g,y,S,T,A,M);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function m(g,y){i.length>1&&i.sort(g||rw),s.length>1&&s.sort(y||vx),l.length>1&&l.sort(y||vx)}function v(){for(let g=t,y=o.length;g<y;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:v,sort:m}}function ow(){let o=new WeakMap;function t(s,l){const u=o.get(s);let f;return u===void 0?(f=new _x,o.set(s,[f])):l>=u.length?(f=new _x,u.push(f)):f=u[l],f}function i(){o=new WeakMap}return{get:t,dispose:i}}function lw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new H,color:new de};break;case"SpotLight":i={position:new H,direction:new H,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new H,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new H,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new H,halfWidth:new H,halfHeight:new H};break}return o[t.id]=i,i}}}function uw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let cw=0;function fw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function hw(o){const t=new lw,i=uw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new H);const l=new H,u=new Ve,f=new Ve;function d(m){let v=0,g=0,y=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,T=0,A=0,M=0,_=0,w=0,D=0,b=0,I=0,z=0,P=0;m.sort(fw);for(let N=0,E=m.length;N<E;N++){const U=m[N],G=U.color,q=U.intensity,nt=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)v+=G.r*q,g+=G.g*q,y+=G.b*q;else if(U.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(U.sh.coefficients[F],q);P++}else if(U.isDirectionalLight){const F=t.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const $=U.shadow,Z=i.get(U);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,s.directionalShadow[S]=Z,s.directionalShadowMap[S]=Q,s.directionalShadowMatrix[S]=U.shadow.matrix,w++}s.directional[S]=F,S++}else if(U.isSpotLight){const F=t.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(G).multiplyScalar(q),F.distance=nt,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,s.spot[A]=F;const $=U.shadow;if(U.map&&(s.spotLightMap[I]=U.map,I++,$.updateMatrices(U),U.castShadow&&z++),s.spotLightMatrix[A]=$.matrix,U.castShadow){const Z=i.get(U);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,s.spotShadow[A]=Z,s.spotShadowMap[A]=Q,b++}A++}else if(U.isRectAreaLight){const F=t.get(U);F.color.copy(G).multiplyScalar(q),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),s.rectArea[M]=F,M++}else if(U.isPointLight){const F=t.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){const $=U.shadow,Z=i.get(U);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,s.pointShadow[T]=Z,s.pointShadowMap[T]=Q,s.pointShadowMatrix[T]=U.shadow.matrix,D++}s.point[T]=F,T++}else if(U.isHemisphereLight){const F=t.get(U);F.skyColor.copy(U.color).multiplyScalar(q),F.groundColor.copy(U.groundColor).multiplyScalar(q),s.hemi[_]=F,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Zt.LTC_FLOAT_1,s.rectAreaLTC2=Zt.LTC_FLOAT_2):(s.rectAreaLTC1=Zt.LTC_HALF_1,s.rectAreaLTC2=Zt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=y;const V=s.hash;(V.directionalLength!==S||V.pointLength!==T||V.spotLength!==A||V.rectAreaLength!==M||V.hemiLength!==_||V.numDirectionalShadows!==w||V.numPointShadows!==D||V.numSpotShadows!==b||V.numSpotMaps!==I||V.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=M,s.point.length=T,s.hemi.length=_,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=b+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=P,V.directionalLength=S,V.pointLength=T,V.spotLength=A,V.rectAreaLength=M,V.hemiLength=_,V.numDirectionalShadows=w,V.numPointShadows=D,V.numSpotShadows=b,V.numSpotMaps=I,V.numLightProbes=P,s.version=cw++)}function p(m,v){let g=0,y=0,S=0,T=0,A=0;const M=v.matrixWorldInverse;for(let _=0,w=m.length;_<w;_++){const D=m[_];if(D.isDirectionalLight){const b=s.directional[g];b.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),g++}else if(D.isSpotLight){const b=s.spot[S];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(M),b.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),S++}else if(D.isRectAreaLight){const b=s.rectArea[T];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(M),f.identity(),u.copy(D.matrixWorld),u.premultiply(M),f.extractRotation(u),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),T++}else if(D.isPointLight){const b=s.point[y];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(M),y++}else if(D.isHemisphereLight){const b=s.hemi[A];b.direction.setFromMatrixPosition(D.matrixWorld),b.direction.transformDirection(M),A++}}}return{setup:d,setupView:p,state:s}}function yx(o){const t=new hw(o),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function f(v){s.push(v)}function d(){t.setup(i)}function p(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function dw(o){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new yx(o),t.set(l,[d])):u>=f.length?(d=new yx(o),f.push(d)):d=f[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mw=`uniform sampler2D shadow_pass;
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
}`;function gw(o,t,i){let s=new Um;const l=new Gt,u=new Gt,f=new cn,d=new Fb({depthPacking:tT}),p=new Hb,m={},v=i.maxTextureSize,g={[gs]:kn,[kn]:gs,[Gi]:Gi},y=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:pw,fragmentShader:mw}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new Rn;T.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new fn(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ax;let _=this.type;this.render=function(z,P,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const N=o.getRenderTarget(),E=o.getActiveCubeFace(),U=o.getActiveMipmapLevel(),G=o.state;G.setBlending(Ua),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=_!==Da&&this.type===Da,nt=_===Da&&this.type!==Da;for(let Q=0,F=z.length;Q<F;Q++){const $=z[Q],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const ut=Z.getFrameExtents();if(l.multiply(ut),u.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/ut.x),l.x=u.x*ut.x,Z.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/ut.y),l.y=u.y*ut.y,Z.mapSize.y=u.y)),Z.map===null||q===!0||nt===!0){const Et=this.type!==Da?{minFilter:_i,magFilter:_i}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Di(l.x,l.y,Et),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const yt=Z.getViewportCount();for(let Et=0;Et<yt;Et++){const kt=Z.getViewport(Et);f.set(u.x*kt.x,u.y*kt.y,u.x*kt.z,u.y*kt.w),G.viewport(f),Z.updateMatrices($,Et),s=Z.getFrustum(),b(P,V,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===Da&&w(Z,V),Z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(N,E,U)};function w(z,P){const V=t.update(A);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Di(l.x,l.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(P,null,V,y,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(P,null,V,S,A,null)}function D(z,P,V,N){let E=null;const U=V.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(U!==void 0)E=U;else if(E=V.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const G=E.uuid,q=P.uuid;let nt=m[G];nt===void 0&&(nt={},m[G]=nt);let Q=nt[q];Q===void 0&&(Q=E.clone(),nt[q]=Q,P.addEventListener("dispose",I)),E=Q}if(E.visible=P.visible,E.wireframe=P.wireframe,N===Da?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:g[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=o.properties.get(E);G.light=V}return E}function b(z,P,V,N,E){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&E===Da)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,z.matrixWorld);const q=t.update(z),nt=z.material;if(Array.isArray(nt)){const Q=q.groups;for(let F=0,$=Q.length;F<$;F++){const Z=Q[F],ut=nt[Z.materialIndex];if(ut&&ut.visible){const yt=D(z,ut,N,E);z.onBeforeShadow(o,z,P,V,q,yt,Z),o.renderBufferDirect(V,null,q,yt,z,Z),z.onAfterShadow(o,z,P,V,q,yt,Z)}}}else if(nt.visible){const Q=D(z,nt,N,E);z.onBeforeShadow(o,z,P,V,q,Q,null),o.renderBufferDirect(V,null,q,Q,z,null),z.onAfterShadow(o,z,P,V,q,Q,null)}}const G=z.children;for(let q=0,nt=G.length;q<nt;q++)b(G[q],P,V,N,E)}function I(z){z.target.removeEventListener("dispose",I);for(const V in m){const N=m[V],E=z.target.uuid;E in N&&(N[E].dispose(),delete N[E])}}}const vw={[Rp]:Cp,[wp]:Up,[Dp]:Lp,[po]:Np,[Cp]:Rp,[Up]:wp,[Lp]:Dp,[Np]:po};function _w(o,t){function i(){let j=!1;const Ht=new cn;let Xt=null;const te=new cn(0,0,0,0);return{setMask:function(Pt){Xt!==Pt&&!j&&(o.colorMask(Pt,Pt,Pt,Pt),Xt=Pt)},setLocked:function(Pt){j=Pt},setClear:function(Pt,Dt,ae,_e,We){We===!0&&(Pt*=_e,Dt*=_e,ae*=_e),Ht.set(Pt,Dt,ae,_e),te.equals(Ht)===!1&&(o.clearColor(Pt,Dt,ae,_e),te.copy(Ht))},reset:function(){j=!1,Xt=null,te.set(-1,0,0,0)}}}function s(){let j=!1,Ht=!1,Xt=null,te=null,Pt=null;return{setReversed:function(Dt){if(Ht!==Dt){const ae=t.get("EXT_clip_control");Dt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Ht=Dt;const _e=Pt;Pt=null,this.setClear(_e)}},getReversed:function(){return Ht},setTest:function(Dt){Dt?J(o.DEPTH_TEST):xt(o.DEPTH_TEST)},setMask:function(Dt){Xt!==Dt&&!j&&(o.depthMask(Dt),Xt=Dt)},setFunc:function(Dt){if(Ht&&(Dt=vw[Dt]),te!==Dt){switch(Dt){case Rp:o.depthFunc(o.NEVER);break;case Cp:o.depthFunc(o.ALWAYS);break;case wp:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case Dp:o.depthFunc(o.EQUAL);break;case Np:o.depthFunc(o.GEQUAL);break;case Up:o.depthFunc(o.GREATER);break;case Lp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}te=Dt}},setLocked:function(Dt){j=Dt},setClear:function(Dt){Pt!==Dt&&(Ht&&(Dt=1-Dt),o.clearDepth(Dt),Pt=Dt)},reset:function(){j=!1,Xt=null,te=null,Pt=null,Ht=!1}}}function l(){let j=!1,Ht=null,Xt=null,te=null,Pt=null,Dt=null,ae=null,_e=null,We=null;return{setTest:function(we){j||(we?J(o.STENCIL_TEST):xt(o.STENCIL_TEST))},setMask:function(we){Ht!==we&&!j&&(o.stencilMask(we),Ht=we)},setFunc:function(we,nn,Sn){(Xt!==we||te!==nn||Pt!==Sn)&&(o.stencilFunc(we,nn,Sn),Xt=we,te=nn,Pt=Sn)},setOp:function(we,nn,Sn){(Dt!==we||ae!==nn||_e!==Sn)&&(o.stencilOp(we,nn,Sn),Dt=we,ae=nn,_e=Sn)},setLocked:function(we){j=we},setClear:function(we){We!==we&&(o.clearStencil(we),We=we)},reset:function(){j=!1,Ht=null,Xt=null,te=null,Pt=null,Dt=null,ae=null,_e=null,We=null}}}const u=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},y=new WeakMap,S=[],T=null,A=!1,M=null,_=null,w=null,D=null,b=null,I=null,z=null,P=new de(0,0,0),V=0,N=!1,E=null,U=null,G=null,q=null,nt=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=$>=1):Z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=$>=2);let ut=null,yt={};const Et=o.getParameter(o.SCISSOR_BOX),kt=o.getParameter(o.VIEWPORT),se=new cn().fromArray(Et),X=new cn().fromArray(kt);function pt(j,Ht,Xt,te){const Pt=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(j,Dt),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ae=0;ae<Xt;ae++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Ht,0,o.RGBA,1,1,te,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Ht+ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return Dt}const Y={};Y[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),Y[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Y[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),J(o.DEPTH_TEST),f.setFunc(po),mt(!1),gt(uy),J(o.CULL_FACE),At(Ua);function J(j){v[j]!==!0&&(o.enable(j),v[j]=!0)}function xt(j){v[j]!==!1&&(o.disable(j),v[j]=!1)}function Rt(j,Ht){return g[j]!==Ht?(o.bindFramebuffer(j,Ht),g[j]=Ht,j===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ht),j===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ht),!0):!1}function wt(j,Ht){let Xt=S,te=!1;if(j){Xt=y.get(Ht),Xt===void 0&&(Xt=[],y.set(Ht,Xt));const Pt=j.textures;if(Xt.length!==Pt.length||Xt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,ae=Pt.length;Dt<ae;Dt++)Xt[Dt]=o.COLOR_ATTACHMENT0+Dt;Xt.length=Pt.length,te=!0}}else Xt[0]!==o.BACK&&(Xt[0]=o.BACK,te=!0);te&&o.drawBuffers(Xt)}function Tt(j){return T!==j?(o.useProgram(j),T=j,!0):!1}const Lt={[Zs]:o.FUNC_ADD,[LE]:o.FUNC_SUBTRACT,[OE]:o.FUNC_REVERSE_SUBTRACT};Lt[PE]=o.MIN,Lt[zE]=o.MAX;const B={[IE]:o.ZERO,[BE]:o.ONE,[FE]:o.SRC_COLOR,[bp]:o.SRC_ALPHA,[qE]:o.SRC_ALPHA_SATURATE,[kE]:o.DST_COLOR,[GE]:o.DST_ALPHA,[HE]:o.ONE_MINUS_SRC_COLOR,[Ap]:o.ONE_MINUS_SRC_ALPHA,[XE]:o.ONE_MINUS_DST_COLOR,[VE]:o.ONE_MINUS_DST_ALPHA,[YE]:o.CONSTANT_COLOR,[WE]:o.ONE_MINUS_CONSTANT_COLOR,[jE]:o.CONSTANT_ALPHA,[ZE]:o.ONE_MINUS_CONSTANT_ALPHA};function At(j,Ht,Xt,te,Pt,Dt,ae,_e,We,we){if(j===Ua){A===!0&&(xt(o.BLEND),A=!1);return}if(A===!1&&(J(o.BLEND),A=!0),j!==UE){if(j!==M||we!==N){if((_!==Zs||b!==Zs)&&(o.blendEquation(o.FUNC_ADD),_=Zs,b=Zs),we)switch(j){case fo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case zl:o.blendFunc(o.ONE,o.ONE);break;case cy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case fy:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case fo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case zl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case cy:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fy:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}w=null,D=null,I=null,z=null,P.set(0,0,0),V=0,M=j,N=we}return}Pt=Pt||Ht,Dt=Dt||Xt,ae=ae||te,(Ht!==_||Pt!==b)&&(o.blendEquationSeparate(Lt[Ht],Lt[Pt]),_=Ht,b=Pt),(Xt!==w||te!==D||Dt!==I||ae!==z)&&(o.blendFuncSeparate(B[Xt],B[te],B[Dt],B[ae]),w=Xt,D=te,I=Dt,z=ae),(_e.equals(P)===!1||We!==V)&&(o.blendColor(_e.r,_e.g,_e.b,We),P.copy(_e),V=We),M=j,N=!1}function vt(j,Ht){j.side===Gi?xt(o.CULL_FACE):J(o.CULL_FACE);let Xt=j.side===kn;Ht&&(Xt=!Xt),mt(Xt),j.blending===fo&&j.transparent===!1?At(Ua):At(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),u.setMask(j.colorWrite);const te=j.stencilWrite;d.setTest(te),te&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Nt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?J(o.SAMPLE_ALPHA_TO_COVERAGE):xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function mt(j){E!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),E=j)}function gt(j){j!==wE?(J(o.CULL_FACE),j!==U&&(j===uy?o.cullFace(o.BACK):j===DE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):xt(o.CULL_FACE),U=j}function Ct(j){j!==G&&(F&&o.lineWidth(j),G=j)}function Nt(j,Ht,Xt){j?(J(o.POLYGON_OFFSET_FILL),(q!==Ht||nt!==Xt)&&(o.polygonOffset(Ht,Xt),q=Ht,nt=Xt)):xt(o.POLYGON_OFFSET_FILL)}function zt(j){j?J(o.SCISSOR_TEST):xt(o.SCISSOR_TEST)}function oe(j){j===void 0&&(j=o.TEXTURE0+Q-1),ut!==j&&(o.activeTexture(j),ut=j)}function re(j,Ht,Xt){Xt===void 0&&(ut===null?Xt=o.TEXTURE0+Q-1:Xt=ut);let te=yt[Xt];te===void 0&&(te={type:void 0,texture:void 0},yt[Xt]=te),(te.type!==j||te.texture!==Ht)&&(ut!==Xt&&(o.activeTexture(Xt),ut=Xt),o.bindTexture(j,Ht||Y[j]),te.type=j,te.texture=Ht)}function O(){const j=yt[ut];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function rt(){try{o.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ft(){try{o.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ut(){try{o.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _t(){try{o.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Kt(){try{o.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ft(){try{o.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function $t(){try{o.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ee(){try{o.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ot(){try{o.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Wt(j){se.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),se.copy(j))}function St(j){X.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),X.copy(j))}function Yt(j,Ht){let Xt=m.get(Ht);Xt===void 0&&(Xt=new WeakMap,m.set(Ht,Xt));let te=Xt.get(j);te===void 0&&(te=o.getUniformBlockIndex(Ht,j.name),Xt.set(j,te))}function Bt(j,Ht){const te=m.get(Ht).get(j);p.get(Ht)!==te&&(o.uniformBlockBinding(Ht,te,j.__bindingPointIndex),p.set(Ht,te))}function me(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ut=null,yt={},g={},y=new WeakMap,S=[],T=null,A=!1,M=null,_=null,w=null,D=null,b=null,I=null,z=null,P=new de(0,0,0),V=0,N=!1,E=null,U=null,G=null,q=null,nt=null,se.set(0,0,o.canvas.width,o.canvas.height),X.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:J,disable:xt,bindFramebuffer:Rt,drawBuffers:wt,useProgram:Tt,setBlending:At,setMaterial:vt,setFlipSided:mt,setCullFace:gt,setLineWidth:Ct,setPolygonOffset:Nt,setScissorTest:zt,activeTexture:oe,bindTexture:re,unbindTexture:O,compressedTexImage2D:R,compressedTexImage3D:rt,texImage2D:ee,texImage3D:Ot,updateUBOMapping:Yt,uniformBlockBinding:Bt,texStorage2D:Ft,texStorage3D:$t,texSubImage2D:ft,texSubImage3D:Ut,compressedTexSubImage2D:_t,compressedTexSubImage3D:Kt,scissor:Wt,viewport:St,reset:me}}function yw(o,t,i,s,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Gt,v=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,R){return S?new OffscreenCanvas(O,R):nf("canvas")}function A(O,R,rt){let ft=1;const Ut=re(O);if((Ut.width>rt||Ut.height>rt)&&(ft=rt/Math.max(Ut.width,Ut.height)),ft<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const _t=Math.floor(ft*Ut.width),Kt=Math.floor(ft*Ut.height);g===void 0&&(g=T(_t,Kt));const Ft=R?T(_t,Kt):g;return Ft.width=_t,Ft.height=Kt,Ft.getContext("2d").drawImage(O,0,0,_t,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ut.width+"x"+Ut.height+") to ("+_t+"x"+Kt+")."),Ft}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ut.width+"x"+Ut.height+")."),O;return O}function M(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function w(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(O,R,rt,ft,Ut=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _t=R;if(R===o.RED&&(rt===o.FLOAT&&(_t=o.R32F),rt===o.HALF_FLOAT&&(_t=o.R16F),rt===o.UNSIGNED_BYTE&&(_t=o.R8)),R===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.R8UI),rt===o.UNSIGNED_SHORT&&(_t=o.R16UI),rt===o.UNSIGNED_INT&&(_t=o.R32UI),rt===o.BYTE&&(_t=o.R8I),rt===o.SHORT&&(_t=o.R16I),rt===o.INT&&(_t=o.R32I)),R===o.RG&&(rt===o.FLOAT&&(_t=o.RG32F),rt===o.HALF_FLOAT&&(_t=o.RG16F),rt===o.UNSIGNED_BYTE&&(_t=o.RG8)),R===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RG8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RG16UI),rt===o.UNSIGNED_INT&&(_t=o.RG32UI),rt===o.BYTE&&(_t=o.RG8I),rt===o.SHORT&&(_t=o.RG16I),rt===o.INT&&(_t=o.RG32I)),R===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),rt===o.UNSIGNED_INT&&(_t=o.RGB32UI),rt===o.BYTE&&(_t=o.RGB8I),rt===o.SHORT&&(_t=o.RGB16I),rt===o.INT&&(_t=o.RGB32I)),R===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),rt===o.UNSIGNED_INT&&(_t=o.RGBA32UI),rt===o.BYTE&&(_t=o.RGBA8I),rt===o.SHORT&&(_t=o.RGBA16I),rt===o.INT&&(_t=o.RGBA32I)),R===o.RGB&&(rt===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),rt===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),R===o.RGBA){const Kt=Ut?tf:Le.getTransfer(ft);rt===o.FLOAT&&(_t=o.RGBA32F),rt===o.HALF_FLOAT&&(_t=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(_t=Kt===Ye?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function b(O,R){let rt;return O?R===null||R===tr||R===Bl?rt=o.DEPTH24_STENCIL8:R===ra?rt=o.DEPTH32F_STENCIL8:R===Il&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===tr||R===Bl?rt=o.DEPTH_COMPONENT24:R===ra?rt=o.DEPTH_COMPONENT32F:R===Il&&(rt=o.DEPTH_COMPONENT16),rt}function I(O,R){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==_i&&O.minFilter!==sa?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function z(O){const R=O.target;R.removeEventListener("dispose",z),V(R),R.isVideoTexture&&v.delete(R)}function P(O){const R=O.target;R.removeEventListener("dispose",P),E(R)}function V(O){const R=s.get(O);if(R.__webglInit===void 0)return;const rt=O.source,ft=y.get(rt);if(ft){const Ut=ft[R.__cacheKey];Ut.usedTimes--,Ut.usedTimes===0&&N(O),Object.keys(ft).length===0&&y.delete(rt)}s.remove(O)}function N(O){const R=s.get(O);o.deleteTexture(R.__webglTexture);const rt=O.source,ft=y.get(rt);delete ft[R.__cacheKey],f.memory.textures--}function E(O){const R=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(R.__webglFramebuffer[ft]))for(let Ut=0;Ut<R.__webglFramebuffer[ft].length;Ut++)o.deleteFramebuffer(R.__webglFramebuffer[ft][Ut]);else o.deleteFramebuffer(R.__webglFramebuffer[ft]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[ft])}else{if(Array.isArray(R.__webglFramebuffer))for(let ft=0;ft<R.__webglFramebuffer.length;ft++)o.deleteFramebuffer(R.__webglFramebuffer[ft]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ft=0;ft<R.__webglColorRenderbuffer.length;ft++)R.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[ft]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const rt=O.textures;for(let ft=0,Ut=rt.length;ft<Ut;ft++){const _t=s.get(rt[ft]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),f.memory.textures--),s.remove(rt[ft])}s.remove(O)}let U=0;function G(){U=0}function q(){const O=U;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),U+=1,O}function nt(O){const R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function Q(O,R){const rt=s.get(O);if(O.isVideoTexture&&zt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&rt.__version!==O.version){const ft=O.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(rt,O,R);return}}else O.isExternalTexture&&(rt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+R)}function F(O,R){const rt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&rt.__version!==O.version){Y(rt,O,R);return}i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+R)}function $(O,R){const rt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&rt.__version!==O.version){Y(rt,O,R);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+R)}function Z(O,R){const rt=s.get(O);if(O.version>0&&rt.__version!==O.version){J(rt,O,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+R)}const ut={[zp]:o.REPEAT,[Ks]:o.CLAMP_TO_EDGE,[Ip]:o.MIRRORED_REPEAT},yt={[_i]:o.NEAREST,[JE]:o.NEAREST_MIPMAP_NEAREST,[_c]:o.NEAREST_MIPMAP_LINEAR,[sa]:o.LINEAR,[Vd]:o.LINEAR_MIPMAP_NEAREST,[Js]:o.LINEAR_MIPMAP_LINEAR},Et={[nT]:o.NEVER,[lT]:o.ALWAYS,[iT]:o.LESS,[kx]:o.LEQUAL,[aT]:o.EQUAL,[oT]:o.GEQUAL,[sT]:o.GREATER,[rT]:o.NOTEQUAL};function kt(O,R){if(R.type===ra&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===sa||R.magFilter===Vd||R.magFilter===_c||R.magFilter===Js||R.minFilter===sa||R.minFilter===Vd||R.minFilter===_c||R.minFilter===Js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,ut[R.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ut[R.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ut[R.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,yt[R.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,yt[R.minFilter]),R.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,Et[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===_i||R.minFilter!==_c&&R.minFilter!==Js||R.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function se(O,R){let rt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",z));const ft=R.source;let Ut=y.get(ft);Ut===void 0&&(Ut={},y.set(ft,Ut));const _t=nt(R);if(_t!==O.__cacheKey){Ut[_t]===void 0&&(Ut[_t]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,rt=!0),Ut[_t].usedTimes++;const Kt=Ut[O.__cacheKey];Kt!==void 0&&(Ut[O.__cacheKey].usedTimes--,Kt.usedTimes===0&&N(R)),O.__cacheKey=_t,O.__webglTexture=Ut[_t].texture}return rt}function X(O,R,rt){return Math.floor(Math.floor(O/rt)/R)}function pt(O,R,rt,ft){const _t=O.updateRanges;if(_t.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,rt,ft,R.data);else{_t.sort((Ot,Wt)=>Ot.start-Wt.start);let Kt=0;for(let Ot=1;Ot<_t.length;Ot++){const Wt=_t[Kt],St=_t[Ot],Yt=Wt.start+Wt.count,Bt=X(St.start,R.width,4),me=X(Wt.start,R.width,4);St.start<=Yt+1&&Bt===me&&X(St.start+St.count-1,R.width,4)===Bt?Wt.count=Math.max(Wt.count,St.start+St.count-Wt.start):(++Kt,_t[Kt]=St)}_t.length=Kt+1;const Ft=o.getParameter(o.UNPACK_ROW_LENGTH),$t=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Ot=0,Wt=_t.length;Ot<Wt;Ot++){const St=_t[Ot],Yt=Math.floor(St.start/4),Bt=Math.ceil(St.count/4),me=Yt%R.width,j=Math.floor(Yt/R.width),Ht=Bt,Xt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,me),o.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,me,j,Ht,Xt,rt,ft,R.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ft),o.pixelStorei(o.UNPACK_SKIP_PIXELS,$t),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function Y(O,R,rt){let ft=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ft=o.TEXTURE_3D);const Ut=se(O,R),_t=R.source;i.bindTexture(ft,O.__webglTexture,o.TEXTURE0+rt);const Kt=s.get(_t);if(_t.version!==Kt.__version||Ut===!0){i.activeTexture(o.TEXTURE0+rt);const Ft=Le.getPrimaries(Le.workingColorSpace),$t=R.colorSpace===ms?null:Le.getPrimaries(R.colorSpace),ee=R.colorSpace===ms||Ft===$t?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Ot=A(R.image,!1,l.maxTextureSize);Ot=oe(R,Ot);const Wt=u.convert(R.format,R.colorSpace),St=u.convert(R.type);let Yt=D(R.internalFormat,Wt,St,R.colorSpace,R.isVideoTexture);kt(ft,R);let Bt;const me=R.mipmaps,j=R.isVideoTexture!==!0,Ht=Kt.__version===void 0||Ut===!0,Xt=_t.dataReady,te=I(R,Ot);if(R.isDepthTexture)Yt=b(R.format===Hl,R.type),Ht&&(j?i.texStorage2D(o.TEXTURE_2D,1,Yt,Ot.width,Ot.height):i.texImage2D(o.TEXTURE_2D,0,Yt,Ot.width,Ot.height,0,Wt,St,null));else if(R.isDataTexture)if(me.length>0){j&&Ht&&i.texStorage2D(o.TEXTURE_2D,te,Yt,me[0].width,me[0].height);for(let Pt=0,Dt=me.length;Pt<Dt;Pt++)Bt=me[Pt],j?Xt&&i.texSubImage2D(o.TEXTURE_2D,Pt,0,0,Bt.width,Bt.height,Wt,St,Bt.data):i.texImage2D(o.TEXTURE_2D,Pt,Yt,Bt.width,Bt.height,0,Wt,St,Bt.data);R.generateMipmaps=!1}else j?(Ht&&i.texStorage2D(o.TEXTURE_2D,te,Yt,Ot.width,Ot.height),Xt&&pt(R,Ot,Wt,St)):i.texImage2D(o.TEXTURE_2D,0,Yt,Ot.width,Ot.height,0,Wt,St,Ot.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){j&&Ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,te,Yt,me[0].width,me[0].height,Ot.depth);for(let Pt=0,Dt=me.length;Pt<Dt;Pt++)if(Bt=me[Pt],R.format!==ki)if(Wt!==null)if(j){if(Xt)if(R.layerUpdates.size>0){const ae=Zy(Bt.width,Bt.height,R.format,R.type);for(const _e of R.layerUpdates){const We=Bt.data.subarray(_e*ae/Bt.data.BYTES_PER_ELEMENT,(_e+1)*ae/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Pt,0,0,_e,Bt.width,Bt.height,1,Wt,We)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Pt,0,0,0,Bt.width,Bt.height,Ot.depth,Wt,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Pt,Yt,Bt.width,Bt.height,Ot.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Xt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Pt,0,0,0,Bt.width,Bt.height,Ot.depth,Wt,St,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Pt,Yt,Bt.width,Bt.height,Ot.depth,0,Wt,St,Bt.data)}else{j&&Ht&&i.texStorage2D(o.TEXTURE_2D,te,Yt,me[0].width,me[0].height);for(let Pt=0,Dt=me.length;Pt<Dt;Pt++)Bt=me[Pt],R.format!==ki?Wt!==null?j?Xt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Pt,0,0,Bt.width,Bt.height,Wt,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,Pt,Yt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Xt&&i.texSubImage2D(o.TEXTURE_2D,Pt,0,0,Bt.width,Bt.height,Wt,St,Bt.data):i.texImage2D(o.TEXTURE_2D,Pt,Yt,Bt.width,Bt.height,0,Wt,St,Bt.data)}else if(R.isDataArrayTexture)if(j){if(Ht&&i.texStorage3D(o.TEXTURE_2D_ARRAY,te,Yt,Ot.width,Ot.height,Ot.depth),Xt)if(R.layerUpdates.size>0){const Pt=Zy(Ot.width,Ot.height,R.format,R.type);for(const Dt of R.layerUpdates){const ae=Ot.data.subarray(Dt*Pt/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Dt,Ot.width,Ot.height,1,Wt,St,ae)}R.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ot.width,Ot.height,Ot.depth,Wt,St,Ot.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,Ot.width,Ot.height,Ot.depth,0,Wt,St,Ot.data);else if(R.isData3DTexture)j?(Ht&&i.texStorage3D(o.TEXTURE_3D,te,Yt,Ot.width,Ot.height,Ot.depth),Xt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ot.width,Ot.height,Ot.depth,Wt,St,Ot.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,Ot.width,Ot.height,Ot.depth,0,Wt,St,Ot.data);else if(R.isFramebufferTexture){if(Ht)if(j)i.texStorage2D(o.TEXTURE_2D,te,Yt,Ot.width,Ot.height);else{let Pt=Ot.width,Dt=Ot.height;for(let ae=0;ae<te;ae++)i.texImage2D(o.TEXTURE_2D,ae,Yt,Pt,Dt,0,Wt,St,null),Pt>>=1,Dt>>=1}}else if(me.length>0){if(j&&Ht){const Pt=re(me[0]);i.texStorage2D(o.TEXTURE_2D,te,Yt,Pt.width,Pt.height)}for(let Pt=0,Dt=me.length;Pt<Dt;Pt++)Bt=me[Pt],j?Xt&&i.texSubImage2D(o.TEXTURE_2D,Pt,0,0,Wt,St,Bt):i.texImage2D(o.TEXTURE_2D,Pt,Yt,Wt,St,Bt);R.generateMipmaps=!1}else if(j){if(Ht){const Pt=re(Ot);i.texStorage2D(o.TEXTURE_2D,te,Yt,Pt.width,Pt.height)}Xt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Wt,St,Ot)}else i.texImage2D(o.TEXTURE_2D,0,Yt,Wt,St,Ot);M(R)&&_(ft),Kt.__version=_t.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function J(O,R,rt){if(R.image.length!==6)return;const ft=se(O,R),Ut=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+rt);const _t=s.get(Ut);if(Ut.version!==_t.__version||ft===!0){i.activeTexture(o.TEXTURE0+rt);const Kt=Le.getPrimaries(Le.workingColorSpace),Ft=R.colorSpace===ms?null:Le.getPrimaries(R.colorSpace),$t=R.colorSpace===ms||Kt===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const ee=R.isCompressedTexture||R.image[0].isCompressedTexture,Ot=R.image[0]&&R.image[0].isDataTexture,Wt=[];for(let Dt=0;Dt<6;Dt++)!ee&&!Ot?Wt[Dt]=A(R.image[Dt],!0,l.maxCubemapSize):Wt[Dt]=Ot?R.image[Dt].image:R.image[Dt],Wt[Dt]=oe(R,Wt[Dt]);const St=Wt[0],Yt=u.convert(R.format,R.colorSpace),Bt=u.convert(R.type),me=D(R.internalFormat,Yt,Bt,R.colorSpace),j=R.isVideoTexture!==!0,Ht=_t.__version===void 0||ft===!0,Xt=Ut.dataReady;let te=I(R,St);kt(o.TEXTURE_CUBE_MAP,R);let Pt;if(ee){j&&Ht&&i.texStorage2D(o.TEXTURE_CUBE_MAP,te,me,St.width,St.height);for(let Dt=0;Dt<6;Dt++){Pt=Wt[Dt].mipmaps;for(let ae=0;ae<Pt.length;ae++){const _e=Pt[ae];R.format!==ki?Yt!==null?j?Xt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,0,0,_e.width,_e.height,Yt,_e.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,me,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,0,0,_e.width,_e.height,Yt,Bt,_e.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,me,_e.width,_e.height,0,Yt,Bt,_e.data)}}}else{if(Pt=R.mipmaps,j&&Ht){Pt.length>0&&te++;const Dt=re(Wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,te,me,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(Ot){j?Xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Wt[Dt].width,Wt[Dt].height,Yt,Bt,Wt[Dt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,me,Wt[Dt].width,Wt[Dt].height,0,Yt,Bt,Wt[Dt].data);for(let ae=0;ae<Pt.length;ae++){const We=Pt[ae].image[Dt].image;j?Xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,0,0,We.width,We.height,Yt,Bt,We.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,me,We.width,We.height,0,Yt,Bt,We.data)}}else{j?Xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Yt,Bt,Wt[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,me,Yt,Bt,Wt[Dt]);for(let ae=0;ae<Pt.length;ae++){const _e=Pt[ae];j?Xt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,0,0,Yt,Bt,_e.image[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,me,Yt,Bt,_e.image[Dt])}}}M(R)&&_(o.TEXTURE_CUBE_MAP),_t.__version=Ut.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function xt(O,R,rt,ft,Ut,_t){const Kt=u.convert(rt.format,rt.colorSpace),Ft=u.convert(rt.type),$t=D(rt.internalFormat,Kt,Ft,rt.colorSpace),ee=s.get(R),Ot=s.get(rt);if(Ot.__renderTarget=R,!ee.__hasExternalTextures){const Wt=Math.max(1,R.width>>_t),St=Math.max(1,R.height>>_t);Ut===o.TEXTURE_3D||Ut===o.TEXTURE_2D_ARRAY?i.texImage3D(Ut,_t,$t,Wt,St,R.depth,0,Kt,Ft,null):i.texImage2D(Ut,_t,$t,Wt,St,0,Kt,Ft,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Nt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,Ut,Ot.__webglTexture,0,Ct(R)):(Ut===o.TEXTURE_2D||Ut>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ut<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,Ut,Ot.__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(O,R,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),R.depthBuffer){const ft=R.depthTexture,Ut=ft&&ft.isDepthTexture?ft.type:null,_t=b(R.stencilBuffer,Ut),Kt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ft=Ct(R);Nt(R)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ft,_t,R.width,R.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ft,_t,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,_t,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Kt,o.RENDERBUFFER,O)}else{const ft=R.textures;for(let Ut=0;Ut<ft.length;Ut++){const _t=ft[Ut],Kt=u.convert(_t.format,_t.colorSpace),Ft=u.convert(_t.type),$t=D(_t.internalFormat,Kt,Ft,_t.colorSpace),ee=Ct(R);rt&&Nt(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,$t,R.width,R.height):Nt(R)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ee,$t,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,$t,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function wt(O,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(R.depthTexture);ft.__renderTarget=R,(!ft.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Q(R.depthTexture,0);const Ut=ft.__webglTexture,_t=Ct(R);if(R.depthTexture.format===Fl)Nt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0);else if(R.depthTexture.format===Hl)Nt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0);else throw new Error("Unknown depthTexture format")}function Tt(O){const R=s.get(O),rt=O.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==O.depthTexture){const ft=O.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ft){const Ut=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ft.removeEventListener("dispose",Ut)};ft.addEventListener("dispose",Ut),R.__depthDisposeCallback=Ut}R.__boundDepthTexture=ft}if(O.depthTexture&&!R.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");const ft=O.texture.mipmaps;ft&&ft.length>0?wt(R.__webglFramebuffer[0],O):wt(R.__webglFramebuffer,O)}else if(rt){R.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[ft]),R.__webglDepthbuffer[ft]===void 0)R.__webglDepthbuffer[ft]=o.createRenderbuffer(),Rt(R.__webglDepthbuffer[ft],O,!1);else{const Ut=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=R.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,_t)}}else{const ft=O.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),Rt(R.__webglDepthbuffer,O,!1);else{const Ut=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,_t)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Lt(O,R,rt){const ft=s.get(O);R!==void 0&&xt(ft.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&Tt(O)}function B(O){const R=O.texture,rt=s.get(O),ft=s.get(R);O.addEventListener("dispose",P);const Ut=O.textures,_t=O.isWebGLCubeRenderTarget===!0,Kt=Ut.length>1;if(Kt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=R.version,f.memory.textures++),_t){rt.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(R.mipmaps&&R.mipmaps.length>0){rt.__webglFramebuffer[Ft]=[];for(let $t=0;$t<R.mipmaps.length;$t++)rt.__webglFramebuffer[Ft][$t]=o.createFramebuffer()}else rt.__webglFramebuffer[Ft]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Ft=0;Ft<R.mipmaps.length;Ft++)rt.__webglFramebuffer[Ft]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Kt)for(let Ft=0,$t=Ut.length;Ft<$t;Ft++){const ee=s.get(Ut[Ft]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),f.memory.textures++)}if(O.samples>0&&Nt(O)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Ft=0;Ft<Ut.length;Ft++){const $t=Ut[Ft];rt.__webglColorRenderbuffer[Ft]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ft]);const ee=u.convert($t.format,$t.colorSpace),Ot=u.convert($t.type),Wt=D($t.internalFormat,ee,Ot,$t.colorSpace,O.isXRRenderTarget===!0),St=Ct(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,St,Wt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Ft])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(rt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),kt(o.TEXTURE_CUBE_MAP,R);for(let Ft=0;Ft<6;Ft++)if(R.mipmaps&&R.mipmaps.length>0)for(let $t=0;$t<R.mipmaps.length;$t++)xt(rt.__webglFramebuffer[Ft][$t],O,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,$t);else xt(rt.__webglFramebuffer[Ft],O,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);M(R)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Ft=0,$t=Ut.length;Ft<$t;Ft++){const ee=Ut[Ft],Ot=s.get(ee);let Wt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Wt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Wt,Ot.__webglTexture),kt(Wt,ee),xt(rt.__webglFramebuffer,O,ee,o.COLOR_ATTACHMENT0+Ft,Wt,0),M(ee)&&_(Wt)}i.unbindTexture()}else{let Ft=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ft=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ft,ft.__webglTexture),kt(Ft,R),R.mipmaps&&R.mipmaps.length>0)for(let $t=0;$t<R.mipmaps.length;$t++)xt(rt.__webglFramebuffer[$t],O,R,o.COLOR_ATTACHMENT0,Ft,$t);else xt(rt.__webglFramebuffer,O,R,o.COLOR_ATTACHMENT0,Ft,0);M(R)&&_(Ft),i.unbindTexture()}O.depthBuffer&&Tt(O)}function At(O){const R=O.textures;for(let rt=0,ft=R.length;rt<ft;rt++){const Ut=R[rt];if(M(Ut)){const _t=w(O),Kt=s.get(Ut).__webglTexture;i.bindTexture(_t,Kt),_(_t),i.unbindTexture()}}}const vt=[],mt=[];function gt(O){if(O.samples>0){if(Nt(O)===!1){const R=O.textures,rt=O.width,ft=O.height;let Ut=o.COLOR_BUFFER_BIT;const _t=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Kt=s.get(O),Ft=R.length>1;if(Ft)for(let ee=0;ee<R.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const $t=O.texture.mipmaps;$t&&$t.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let ee=0;ee<R.length;ee++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ut|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ut|=o.STENCIL_BUFFER_BIT)),Ft){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[ee]);const Ot=s.get(R[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ot,0)}o.blitFramebuffer(0,0,rt,ft,0,0,rt,ft,Ut,o.NEAREST),p===!0&&(vt.length=0,mt.length=0,vt.push(o.COLOR_ATTACHMENT0+ee),O.depthBuffer&&O.resolveDepthBuffer===!1&&(vt.push(_t),mt.push(_t),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,mt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,vt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ft)for(let ee=0;ee<R.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[ee]);const Ot=s.get(R[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Ot,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const R=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function Ct(O){return Math.min(l.maxSamples,O.samples)}function Nt(O){const R=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function zt(O){const R=f.render.frame;v.get(O)!==R&&(v.set(O,R),O.update())}function oe(O,R){const rt=O.colorSpace,ft=O.format,Ut=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||rt!==vo&&rt!==ms&&(Le.getTransfer(rt)===Ye?(ft!==ki||Ut!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),R}function re(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.setTexture2D=Q,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=Lt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Nt}function xw(o,t){function i(s,l=ms){let u;const f=Le.getTransfer(l);if(s===qi)return o.UNSIGNED_BYTE;if(s===Em)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Tm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Ix)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Bx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Px)return o.BYTE;if(s===zx)return o.SHORT;if(s===Il)return o.UNSIGNED_SHORT;if(s===Mm)return o.INT;if(s===tr)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===Xi)return o.HALF_FLOAT;if(s===Fx)return o.ALPHA;if(s===Hx)return o.RGB;if(s===ki)return o.RGBA;if(s===Fl)return o.DEPTH_COMPONENT;if(s===Hl)return o.DEPTH_STENCIL;if(s===bm)return o.RED;if(s===Am)return o.RED_INTEGER;if(s===Gx)return o.RG;if(s===Rm)return o.RG_INTEGER;if(s===Cm)return o.RGBA_INTEGER;if(s===jc||s===Zc||s===Qc||s===Kc)if(f===Ye)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===jc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===jc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bp||s===Fp||s===Hp||s===Gp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Bp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vp||s===kp||s===Xp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Vp||s===kp)return f===Ye?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Xp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qp||s===Yp||s===Wp||s===jp||s===Zp||s===Qp||s===Kp||s===Jp||s===$p||s===tm||s===em||s===nm||s===im||s===am)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===qp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$p)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tm)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===em)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nm)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===im)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===am)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===sm||s===rm||s===om)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===sm)return f===Ye?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===om)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lm||s===um||s===cm||s===fm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===lm)return u.COMPRESSED_RED_RGTC1_EXT;if(s===um)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mw=`
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

}`;class Ew{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new iS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new rn({vertexShader:Sw,fragmentShader:Mw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fn(new To(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tw extends Mo{constructor(t,i){super();const s=this;let l=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,g=null,y=null,S=null,T=null;const A=typeof XRWebGLBinding<"u",M=new Ew,_={},w=i.getContextAttributes();let D=null,b=null;const I=[],z=[],P=new Gt;let V=null;const N=new vi;N.viewport=new cn;const E=new vi;E.viewport=new cn;const U=[N,E],G=new qb;let q=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=I[Y];return J===void 0&&(J=new up,I[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=I[Y];return J===void 0&&(J=new up,I[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=I[Y];return J===void 0&&(J=new up,I[Y]=J),J.getHandSpace()};function Q(Y){const J=z.indexOf(Y.inputSource);if(J===-1)return;const xt=I[J];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,m||f),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",$);for(let Y=0;Y<I.length;Y++){const J=z[Y];J!==null&&(z[Y]=null,I[Y].disconnect(J))}q=null,nt=null,M.reset();for(const Y in _)delete _[Y];t.setRenderTarget(D),S=null,y=null,g=null,l=null,b=null,pt.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",F),l.addEventListener("inputsourceschange",$),w.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Rt=null,wt=null;w.depth&&(wt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=w.stencil?Hl:Fl,Rt=w.stencil?Bl:tr);const Tt={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};g=this.getBinding(),y=g.createProjectionLayer(Tt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),b=new Di(y.textureWidth,y.textureHeight,{format:ki,type:qi,depthTexture:new nS(y.textureWidth,y.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const xt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new Di(S.framebufferWidth,S.framebufferHeight,{format:ki,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),pt.setContext(l),pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(Y){for(let J=0;J<Y.removed.length;J++){const xt=Y.removed[J],Rt=z.indexOf(xt);Rt>=0&&(z[Rt]=null,I[Rt].disconnect(xt))}for(let J=0;J<Y.added.length;J++){const xt=Y.added[J];let Rt=z.indexOf(xt);if(Rt===-1){for(let Tt=0;Tt<I.length;Tt++)if(Tt>=z.length){z.push(xt),Rt=Tt;break}else if(z[Tt]===null){z[Tt]=xt,Rt=Tt;break}if(Rt===-1)break}const wt=I[Rt];wt&&wt.connect(xt)}}const Z=new H,ut=new H;function yt(Y,J,xt){Z.setFromMatrixPosition(J.matrixWorld),ut.setFromMatrixPosition(xt.matrixWorld);const Rt=Z.distanceTo(ut),wt=J.projectionMatrix.elements,Tt=xt.projectionMatrix.elements,Lt=wt[14]/(wt[10]-1),B=wt[14]/(wt[10]+1),At=(wt[9]+1)/wt[5],vt=(wt[9]-1)/wt[5],mt=(wt[8]-1)/wt[0],gt=(Tt[8]+1)/Tt[0],Ct=Lt*mt,Nt=Lt*gt,zt=Rt/(-mt+gt),oe=zt*-mt;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(oe),Y.translateZ(zt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const re=Lt+zt,O=B+zt,R=Ct-oe,rt=Nt+(Rt-oe),ft=At*B/O*re,Ut=vt*B/O*re;Y.projectionMatrix.makePerspective(R,rt,ft,Ut,re,O),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Et(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let J=Y.near,xt=Y.far;M.texture!==null&&(M.depthNear>0&&(J=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),G.near=E.near=N.near=J,G.far=E.far=N.far=xt,(q!==G.near||nt!==G.far)&&(l.updateRenderState({depthNear:G.near,depthFar:G.far}),q=G.near,nt=G.far),G.layers.mask=Y.layers.mask|6,N.layers.mask=G.layers.mask&3,E.layers.mask=G.layers.mask&5;const Rt=Y.parent,wt=G.cameras;Et(G,Rt);for(let Tt=0;Tt<wt.length;Tt++)Et(wt[Tt],Rt);wt.length===2?yt(G,N,E):G.projectionMatrix.copy(N.projectionMatrix),kt(Y,G,Rt)};function kt(Y,J,xt){xt===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Gl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(Y){p=Y,y!==null&&(y.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(G)},this.getCameraTexture=function(Y){return _[Y]};let se=null;function X(Y,J){if(v=J.getViewerPose(m||f),T=J,v!==null){const xt=v.views;S!==null&&(t.setRenderTargetFramebuffer(b,S.framebuffer),t.setRenderTarget(b));let Rt=!1;xt.length!==G.cameras.length&&(G.cameras.length=0,Rt=!0);for(let B=0;B<xt.length;B++){const At=xt[B];let vt=null;if(S!==null)vt=S.getViewport(At);else{const gt=g.getViewSubImage(y,At);vt=gt.viewport,B===0&&(t.setRenderTargetTextures(b,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(b))}let mt=U[B];mt===void 0&&(mt=new vi,mt.layers.enable(B),mt.viewport=new cn,U[B]=mt),mt.matrix.fromArray(At.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(At.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(vt.x,vt.y,vt.width,vt.height),B===0&&(G.matrix.copy(mt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Rt===!0&&G.cameras.push(mt)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=s.getBinding();const B=g.getDepthInformation(xt[0]);B&&B.isValid&&B.texture&&M.init(B,l.renderState)}if(wt&&wt.includes("camera-access")&&A){t.state.unbindTexture(),g=s.getBinding();for(let B=0;B<xt.length;B++){const At=xt[B].camera;if(At){let vt=_[At];vt||(vt=new iS,_[At]=vt);const mt=g.getCameraImage(At);vt.sourceTexture=mt}}}}for(let xt=0;xt<I.length;xt++){const Rt=z[xt],wt=I[xt];Rt!==null&&wt!==void 0&&wt.update(Rt,J,m||f)}se&&se(Y,J),J.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:J}),T=null}const pt=new gS;pt.setAnimationLoop(X),this.setAnimationLoop=function(Y){se=Y},this.dispose=function(){}}}const Ys=new Ni,bw=new Ve;function Aw(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,Qx(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,w,D,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),g(M,_)):_.isMeshPhongMaterial?(u(M,_),v(M,_)):_.isMeshStandardMaterial?(u(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,b)):_.isMeshMatcapMaterial?(u(M,_),T(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),A(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,w,D):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===kn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===kn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const w=t.get(_),D=w.envMap,b=w.envMapRotation;D&&(M.envMap.value=D,Ys.copy(b),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),M.envMapRotation.value.setFromMatrix4(bw.makeRotationFromEuler(Ys)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,w,D){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*w,M.scale.value=D*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,w){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,_){_.matcap&&(M.matcap.value=_.matcap)}function A(M,_){const w=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Rw(o,t,i,s){let l={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,D){const b=D.program;s.uniformBlockBinding(w,b)}function m(w,D){let b=l[w.id];b===void 0&&(T(w),b=v(w),l[w.id]=b,w.addEventListener("dispose",M));const I=D.program;s.updateUBOMapping(w,I);const z=t.render.frame;u[w.id]!==z&&(y(w),u[w.id]=z)}function v(w){const D=g();w.__bindingPointIndex=D;const b=o.createBuffer(),I=w.__size,z=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,I,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,b),b}function g(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(w){const D=l[w.id],b=w.uniforms,I=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let z=0,P=b.length;z<P;z++){const V=Array.isArray(b[z])?b[z]:[b[z]];for(let N=0,E=V.length;N<E;N++){const U=V[N];if(S(U,z,N,I)===!0){const G=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let nt=0;for(let Q=0;Q<q.length;Q++){const F=q[Q],$=A(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,G+nt,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,nt),nt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,G,U.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(w,D,b,I){const z=w.value,P=D+"_"+b;if(I[P]===void 0)return typeof z=="number"||typeof z=="boolean"?I[P]=z:I[P]=z.clone(),!0;{const V=I[P];if(typeof z=="number"||typeof z=="boolean"){if(V!==z)return I[P]=z,!0}else if(V.equals(z)===!1)return V.copy(z),!0}return!1}function T(w){const D=w.uniforms;let b=0;const I=16;for(let P=0,V=D.length;P<V;P++){const N=Array.isArray(D[P])?D[P]:[D[P]];for(let E=0,U=N.length;E<U;E++){const G=N[E],q=Array.isArray(G.value)?G.value:[G.value];for(let nt=0,Q=q.length;nt<Q;nt++){const F=q[nt],$=A(F),Z=b%I,ut=Z%$.boundary,yt=Z+ut;b+=ut,yt!==0&&I-yt<$.storage&&(b+=I-yt),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=$.storage}}}const z=b%I;return z>0&&(b+=I-z),w.__size=b,w.__cache={},this}function A(w){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=48,D.storage=48):w.isMatrix4?(D.boundary=64,D.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),D}function M(w){const D=w.target;D.removeEventListener("dispose",M);const b=f.indexOf(D.__bindingPointIndex);f.splice(b,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const w in l)o.deleteBuffer(l[w]);f=[],l={},u={}}return{bind:p,update:m,dispose:_}}class Cw{constructor(t={}){const{canvas:i=bT(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const T=new Uint32Array(4),A=new Int32Array(4);let M=null,_=null;const w=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=La,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let I=!1;this._outputColorSpace=si;let z=0,P=0,V=null,N=-1,E=null;const U=new cn,G=new cn;let q=null;const nt=new de(0);let Q=0,F=i.width,$=i.height,Z=1,ut=null,yt=null;const Et=new cn(0,0,F,$),kt=new cn(0,0,F,$);let se=!1;const X=new Um;let pt=!1,Y=!1;const J=new Ve,xt=new H,Rt=new cn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Lt(){return V===null?Z:1}let B=s;function At(L,it){return i.getContext(L,it)}try{const L={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xm}`),i.addEventListener("webglcontextlost",Xt,!1),i.addEventListener("webglcontextrestored",te,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),B===null){const it="webgl2";if(B=At(it,L),B===null)throw At(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let vt,mt,gt,Ct,Nt,zt,oe,re,O,R,rt,ft,Ut,_t,Kt,Ft,$t,ee,Ot,Wt,St,Yt,Bt,me;function j(){vt=new BR(B),vt.init(),Yt=new xw(B,vt),mt=new NR(B,vt,t,Yt),gt=new _w(B,vt),mt.reversedDepthBuffer&&y&&gt.buffers.depth.setReversed(!0),Ct=new GR(B),Nt=new sw,zt=new yw(B,vt,gt,Nt,mt,Yt,Ct),oe=new LR(b),re=new IR(b),O=new Wb(B),Bt=new wR(B,O),R=new FR(B,O,Ct,Bt),rt=new kR(B,R,O,Ct),Ot=new VR(B,mt,zt),Ft=new UR(Nt),ft=new aw(b,oe,re,vt,mt,Bt,Ft),Ut=new Aw(b,Nt),_t=new ow,Kt=new dw(vt),ee=new CR(b,oe,re,gt,rt,S,p),$t=new gw(b,rt,mt),me=new Rw(B,Ct,mt,gt),Wt=new DR(B,vt,Ct),St=new HR(B,vt,Ct),Ct.programs=ft.programs,b.capabilities=mt,b.extensions=vt,b.properties=Nt,b.renderLists=_t,b.shadowMap=$t,b.state=gt,b.info=Ct}j();const Ht=new Tw(b,B);this.xr=Ht,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const L=vt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=vt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(L){L!==void 0&&(Z=L,this.setSize(F,$,!1))},this.getSize=function(L){return L.set(F,$)},this.setSize=function(L,it,ht=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=L,$=it,i.width=Math.floor(L*Z),i.height=Math.floor(it*Z),ht===!0&&(i.style.width=L+"px",i.style.height=it+"px"),this.setViewport(0,0,L,it)},this.getDrawingBufferSize=function(L){return L.set(F*Z,$*Z).floor()},this.setDrawingBufferSize=function(L,it,ht){F=L,$=it,Z=ht,i.width=Math.floor(L*ht),i.height=Math.floor(it*ht),this.setViewport(0,0,L,it)},this.getCurrentViewport=function(L){return L.copy(U)},this.getViewport=function(L){return L.copy(Et)},this.setViewport=function(L,it,ht,dt){L.isVector4?Et.set(L.x,L.y,L.z,L.w):Et.set(L,it,ht,dt),gt.viewport(U.copy(Et).multiplyScalar(Z).round())},this.getScissor=function(L){return L.copy(kt)},this.setScissor=function(L,it,ht,dt){L.isVector4?kt.set(L.x,L.y,L.z,L.w):kt.set(L,it,ht,dt),gt.scissor(G.copy(kt).multiplyScalar(Z).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(L){gt.setScissorTest(se=L)},this.setOpaqueSort=function(L){ut=L},this.setTransparentSort=function(L){yt=L},this.getClearColor=function(L){return L.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(L=!0,it=!0,ht=!0){let dt=0;if(L){let st=!1;if(V!==null){const It=V.texture.format;st=It===Cm||It===Rm||It===Am}if(st){const It=V.texture.type,jt=It===qi||It===tr||It===Il||It===Bl||It===Em||It===Tm,Qt=ee.getClearColor(),Vt=ee.getClearAlpha(),ne=Qt.r,he=Qt.g,ue=Qt.b;jt?(T[0]=ne,T[1]=he,T[2]=ue,T[3]=Vt,B.clearBufferuiv(B.COLOR,0,T)):(A[0]=ne,A[1]=he,A[2]=ue,A[3]=Vt,B.clearBufferiv(B.COLOR,0,A))}else dt|=B.COLOR_BUFFER_BIT}it&&(dt|=B.DEPTH_BUFFER_BIT),ht&&(dt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Xt,!1),i.removeEventListener("webglcontextrestored",te,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),ee.dispose(),_t.dispose(),Kt.dispose(),Nt.dispose(),oe.dispose(),re.dispose(),rt.dispose(),Bt.dispose(),me.dispose(),ft.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Sn),Ht.removeEventListener("sessionend",Bn),ua.stop()};function Xt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const L=Ct.autoReset,it=$t.enabled,ht=$t.autoUpdate,dt=$t.needsUpdate,st=$t.type;j(),Ct.autoReset=L,$t.enabled=it,$t.autoUpdate=ht,$t.needsUpdate=dt,$t.type=st}function Pt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Dt(L){const it=L.target;it.removeEventListener("dispose",Dt),ae(it)}function ae(L){_e(L),Nt.remove(L)}function _e(L){const it=Nt.get(L).programs;it!==void 0&&(it.forEach(function(ht){ft.releaseProgram(ht)}),L.isShaderMaterial&&ft.releaseShaderCache(L))}this.renderBufferDirect=function(L,it,ht,dt,st,It){it===null&&(it=wt);const jt=st.isMesh&&st.matrixWorld.determinant()<0,Qt=Ql(L,it,ht,dt,st);gt.setMaterial(dt,jt);let Vt=ht.index,ne=1;if(dt.wireframe===!0){if(Vt=R.getWireframeAttribute(ht),Vt===void 0)return;ne=2}const he=ht.drawRange,ue=ht.attributes.position;let be=he.start*ne,He=(he.start+he.count)*ne;It!==null&&(be=Math.max(be,It.start*ne),He=Math.min(He,(It.start+It.count)*ne)),Vt!==null?(be=Math.max(be,0),He=Math.min(He,Vt.count)):ue!=null&&(be=Math.max(be,0),He=Math.min(He,ue.count));const tn=He-be;if(tn<0||tn===1/0)return;Bt.setup(st,dt,Qt,ht,Vt);let Ie,Oe=Wt;if(Vt!==null&&(Ie=O.get(Vt),Oe=St,Oe.setIndex(Ie)),st.isMesh)dt.wireframe===!0?(gt.setLineWidth(dt.wireframeLinewidth*Lt()),Oe.setMode(B.LINES)):Oe.setMode(B.TRIANGLES);else if(st.isLine){let ce=dt.linewidth;ce===void 0&&(ce=1),gt.setLineWidth(ce*Lt()),st.isLineSegments?Oe.setMode(B.LINES):st.isLineLoop?Oe.setMode(B.LINE_LOOP):Oe.setMode(B.LINE_STRIP)}else st.isPoints?Oe.setMode(B.POINTS):st.isSprite&&Oe.setMode(B.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)Vl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Oe.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const ce=st._multiDrawStarts,Be=st._multiDrawCounts,Ee=st._multiDrawCount,Mn=Vt?O.get(Vt).bytesPerElement:1,ri=Nt.get(dt).currentProgram.getUniforms();for(let Pe=0;Pe<Ee;Pe++)ri.setValue(B,"_gl_DrawID",Pe),Oe.render(ce[Pe]/Mn,Be[Pe])}else if(st.isInstancedMesh)Oe.renderInstances(be,tn,st.count);else if(ht.isInstancedBufferGeometry){const ce=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,Be=Math.min(ht.instanceCount,ce);Oe.renderInstances(be,tn,Be)}else Oe.render(be,tn)};function We(L,it,ht){L.transparent===!0&&L.side===Gi&&L.forceSinglePass===!1?(L.side=kn,L.needsUpdate=!0,yi(L,it,ht),L.side=gs,L.needsUpdate=!0,yi(L,it,ht),L.side=Gi):yi(L,it,ht)}this.compile=function(L,it,ht=null){ht===null&&(ht=L),_=Kt.get(ht),_.init(it),D.push(_),ht.traverseVisible(function(st){st.isLight&&st.layers.test(it.layers)&&(_.pushLight(st),st.castShadow&&_.pushShadow(st))}),L!==ht&&L.traverseVisible(function(st){st.isLight&&st.layers.test(it.layers)&&(_.pushLight(st),st.castShadow&&_.pushShadow(st))}),_.setupLights();const dt=new Set;return L.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const It=st.material;if(It)if(Array.isArray(It))for(let jt=0;jt<It.length;jt++){const Qt=It[jt];We(Qt,ht,st),dt.add(Qt)}else We(It,ht,st),dt.add(It)}),_=D.pop(),dt},this.compileAsync=function(L,it,ht=null){const dt=this.compile(L,it,ht);return new Promise(st=>{function It(){if(dt.forEach(function(jt){Nt.get(jt).currentProgram.isReady()&&dt.delete(jt)}),dt.size===0){st(L);return}setTimeout(It,10)}vt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let we=null;function nn(L){we&&we(L)}function Sn(){ua.stop()}function Bn(){ua.start()}const ua=new gS;ua.setAnimationLoop(nn),typeof self<"u"&&ua.setContext(self),this.setAnimationLoop=function(L){we=L,Ht.setAnimationLoop(L),L===null?ua.stop():ua.start()},Ht.addEventListener("sessionstart",Sn),Ht.addEventListener("sessionend",Bn),this.render=function(L,it){if(it!==void 0&&it.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(it),it=Ht.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,it,V),_=Kt.get(L,D.length),_.init(it),D.push(_),J.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),X.setFromProjectionMatrix(J,oa,it.reversedDepth),Y=this.localClippingEnabled,pt=Ft.init(this.clippingPlanes,Y),M=_t.get(L,w.length),M.init(),w.push(M),Ht.enabled===!0&&Ht.isPresenting===!0){const It=b.xr.getDepthSensingMesh();It!==null&&Ro(It,it,-1/0,b.sortObjects)}Ro(L,it,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(ut,yt),Tt=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Tt&&ee.addToRenderList(M,L),this.info.render.frame++,pt===!0&&Ft.beginShadows();const ht=_.state.shadowsArray;$t.render(ht,L,it),pt===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const dt=M.opaque,st=M.transmissive;if(_.setupLights(),it.isArrayCamera){const It=it.cameras;if(st.length>0)for(let jt=0,Qt=It.length;jt<Qt;jt++){const Vt=It[jt];vs(dt,st,L,Vt)}Tt&&ee.render(L);for(let jt=0,Qt=It.length;jt<Qt;jt++){const Vt=It[jt];Zl(M,L,Vt,Vt.viewport)}}else st.length>0&&vs(dt,st,L,it),Tt&&ee.render(L),Zl(M,L,it);V!==null&&P===0&&(zt.updateMultisampleRenderTarget(V),zt.updateRenderTargetMipmap(V)),L.isScene===!0&&L.onAfterRender(b,L,it),Bt.resetDefaultState(),N=-1,E=null,D.pop(),D.length>0?(_=D[D.length-1],pt===!0&&Ft.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function Ro(L,it,ht,dt){if(L.visible===!1)return;if(L.layers.test(it.layers)){if(L.isGroup)ht=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(it);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||X.intersectsSprite(L)){dt&&Rt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(J);const jt=rt.update(L),Qt=L.material;Qt.visible&&M.push(L,jt,Qt,ht,Rt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||X.intersectsObject(L))){const jt=rt.update(L),Qt=L.material;if(dt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Rt.copy(L.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),Rt.copy(jt.boundingSphere.center)),Rt.applyMatrix4(L.matrixWorld).applyMatrix4(J)),Array.isArray(Qt)){const Vt=jt.groups;for(let ne=0,he=Vt.length;ne<he;ne++){const ue=Vt[ne],be=Qt[ue.materialIndex];be&&be.visible&&M.push(L,jt,be,ht,Rt.z,ue)}}else Qt.visible&&M.push(L,jt,Qt,ht,Rt.z,null)}}const It=L.children;for(let jt=0,Qt=It.length;jt<Qt;jt++)Ro(It[jt],it,ht,dt)}function Zl(L,it,ht,dt){const st=L.opaque,It=L.transmissive,jt=L.transparent;_.setupLightsView(ht),pt===!0&&Ft.setGlobalState(b.clippingPlanes,ht),dt&&gt.viewport(U.copy(dt)),st.length>0&&ca(st,it,ht),It.length>0&&ca(It,it,ht),jt.length>0&&ca(jt,it,ht),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function vs(L,it,ht,dt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[dt.id]===void 0&&(_.state.transmissionRenderTarget[dt.id]=new Di(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Xi:qi,minFilter:Js,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const It=_.state.transmissionRenderTarget[dt.id],jt=dt.viewport||U;It.setSize(jt.z*b.transmissionResolutionScale,jt.w*b.transmissionResolutionScale);const Qt=b.getRenderTarget(),Vt=b.getActiveCubeFace(),ne=b.getActiveMipmapLevel();b.setRenderTarget(It),b.getClearColor(nt),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),Tt&&ee.render(ht);const he=b.toneMapping;b.toneMapping=La;const ue=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),_.setupLightsView(dt),pt===!0&&Ft.setGlobalState(b.clippingPlanes,dt),ca(L,ht,dt),zt.updateMultisampleRenderTarget(It),zt.updateRenderTargetMipmap(It),vt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let He=0,tn=it.length;He<tn;He++){const Ie=it[He],Oe=Ie.object,ce=Ie.geometry,Be=Ie.material,Ee=Ie.group;if(Be.side===Gi&&Oe.layers.test(dt.layers)){const Mn=Be.side;Be.side=kn,Be.needsUpdate=!0,_s(Oe,ht,dt,ce,Be,Ee),Be.side=Mn,Be.needsUpdate=!0,be=!0}}be===!0&&(zt.updateMultisampleRenderTarget(It),zt.updateRenderTargetMipmap(It))}b.setRenderTarget(Qt,Vt,ne),b.setClearColor(nt,Q),ue!==void 0&&(dt.viewport=ue),b.toneMapping=he}function ca(L,it,ht){const dt=it.isScene===!0?it.overrideMaterial:null;for(let st=0,It=L.length;st<It;st++){const jt=L[st],Qt=jt.object,Vt=jt.geometry,ne=jt.group;let he=jt.material;he.allowOverride===!0&&dt!==null&&(he=dt),Qt.layers.test(ht.layers)&&_s(Qt,it,ht,Vt,he,ne)}}function _s(L,it,ht,dt,st,It){L.onBeforeRender(b,it,ht,dt,st,It),L.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),st.onBeforeRender(b,it,ht,dt,L,It),st.transparent===!0&&st.side===Gi&&st.forceSinglePass===!1?(st.side=kn,st.needsUpdate=!0,b.renderBufferDirect(ht,it,dt,st,L,It),st.side=gs,st.needsUpdate=!0,b.renderBufferDirect(ht,it,dt,st,L,It),st.side=Gi):b.renderBufferDirect(ht,it,dt,st,L,It),L.onAfterRender(b,it,ht,dt,st,It)}function yi(L,it,ht){it.isScene!==!0&&(it=wt);const dt=Nt.get(L),st=_.state.lights,It=_.state.shadowsArray,jt=st.state.version,Qt=ft.getParameters(L,st.state,It,it,ht),Vt=ft.getProgramCacheKey(Qt);let ne=dt.programs;dt.environment=L.isMeshStandardMaterial?it.environment:null,dt.fog=it.fog,dt.envMap=(L.isMeshStandardMaterial?re:oe).get(L.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&L.envMap===null?it.environmentRotation:L.envMapRotation,ne===void 0&&(L.addEventListener("dispose",Dt),ne=new Map,dt.programs=ne);let he=ne.get(Vt);if(he!==void 0){if(dt.currentProgram===he&&dt.lightsStateVersion===jt)return Pa(L,Qt),he}else Qt.uniforms=ft.getUniforms(L),L.onBeforeCompile(Qt,b),he=ft.acquireProgram(Qt,Vt),ne.set(Vt,he),dt.uniforms=Qt.uniforms;const ue=dt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ue.clippingPlanes=Ft.uniform),Pa(L,Qt),dt.needsLights=Kl(L),dt.lightsStateVersion=jt,dt.needsLights&&(ue.ambientLightColor.value=st.state.ambient,ue.lightProbe.value=st.state.probe,ue.directionalLights.value=st.state.directional,ue.directionalLightShadows.value=st.state.directionalShadow,ue.spotLights.value=st.state.spot,ue.spotLightShadows.value=st.state.spotShadow,ue.rectAreaLights.value=st.state.rectArea,ue.ltc_1.value=st.state.rectAreaLTC1,ue.ltc_2.value=st.state.rectAreaLTC2,ue.pointLights.value=st.state.point,ue.pointLightShadows.value=st.state.pointShadow,ue.hemisphereLights.value=st.state.hemi,ue.directionalShadowMap.value=st.state.directionalShadowMap,ue.directionalShadowMatrix.value=st.state.directionalShadowMatrix,ue.spotShadowMap.value=st.state.spotShadowMap,ue.spotLightMatrix.value=st.state.spotLightMatrix,ue.spotLightMap.value=st.state.spotLightMap,ue.pointShadowMap.value=st.state.pointShadowMap,ue.pointShadowMatrix.value=st.state.pointShadowMatrix),dt.currentProgram=he,dt.uniformsList=null,he}function ys(L){if(L.uniformsList===null){const it=L.currentProgram.getUniforms();L.uniformsList=Jc.seqWithValue(it.seq,L.uniforms)}return L.uniformsList}function Pa(L,it){const ht=Nt.get(L);ht.outputColorSpace=it.outputColorSpace,ht.batching=it.batching,ht.batchingColor=it.batchingColor,ht.instancing=it.instancing,ht.instancingColor=it.instancingColor,ht.instancingMorph=it.instancingMorph,ht.skinning=it.skinning,ht.morphTargets=it.morphTargets,ht.morphNormals=it.morphNormals,ht.morphColors=it.morphColors,ht.morphTargetsCount=it.morphTargetsCount,ht.numClippingPlanes=it.numClippingPlanes,ht.numIntersection=it.numClipIntersection,ht.vertexAlphas=it.vertexAlphas,ht.vertexTangents=it.vertexTangents,ht.toneMapping=it.toneMapping}function Ql(L,it,ht,dt,st){it.isScene!==!0&&(it=wt),zt.resetTextureUnits();const It=it.fog,jt=dt.isMeshStandardMaterial?it.environment:null,Qt=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:vo,Vt=(dt.isMeshStandardMaterial?re:oe).get(dt.envMap||jt),ne=dt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,he=!!ht.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),ue=!!ht.morphAttributes.position,be=!!ht.morphAttributes.normal,He=!!ht.morphAttributes.color;let tn=La;dt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(tn=b.toneMapping);const Ie=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Oe=Ie!==void 0?Ie.length:0,ce=Nt.get(dt),Be=_.state.lights;if(pt===!0&&(Y===!0||L!==E)){const on=L===E&&dt.id===N;Ft.setState(dt,L,on)}let Ee=!1;dt.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==Be.state.version||ce.outputColorSpace!==Qt||st.isBatchedMesh&&ce.batching===!1||!st.isBatchedMesh&&ce.batching===!0||st.isBatchedMesh&&ce.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&ce.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&ce.instancing===!1||!st.isInstancedMesh&&ce.instancing===!0||st.isSkinnedMesh&&ce.skinning===!1||!st.isSkinnedMesh&&ce.skinning===!0||st.isInstancedMesh&&ce.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&ce.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&ce.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&ce.instancingMorph===!1&&st.morphTexture!==null||ce.envMap!==Vt||dt.fog===!0&&ce.fog!==It||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==Ft.numPlanes||ce.numIntersection!==Ft.numIntersection)||ce.vertexAlphas!==ne||ce.vertexTangents!==he||ce.morphTargets!==ue||ce.morphNormals!==be||ce.morphColors!==He||ce.toneMapping!==tn||ce.morphTargetsCount!==Oe)&&(Ee=!0):(Ee=!0,ce.__version=dt.version);let Mn=ce.currentProgram;Ee===!0&&(Mn=yi(dt,it,st));let ri=!1,Pe=!1,za=!1;const Ke=Mn.getUniforms(),qn=ce.uniforms;if(gt.useProgram(Mn.program)&&(ri=!0,Pe=!0,za=!0),dt.id!==N&&(N=dt.id,Pe=!0),ri||E!==L){gt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ke.setValue(B,"projectionMatrix",L.projectionMatrix),Ke.setValue(B,"viewMatrix",L.matrixWorldInverse);const Fn=Ke.map.cameraPosition;Fn!==void 0&&Fn.setValue(B,xt.setFromMatrixPosition(L.matrixWorld)),mt.logarithmicDepthBuffer&&Ke.setValue(B,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Ke.setValue(B,"isOrthographic",L.isOrthographicCamera===!0),E!==L&&(E=L,Pe=!0,za=!0)}if(st.isSkinnedMesh){Ke.setOptional(B,st,"bindMatrix"),Ke.setOptional(B,st,"bindMatrixInverse");const on=st.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ke.setValue(B,"boneTexture",on.boneTexture,zt))}st.isBatchedMesh&&(Ke.setOptional(B,st,"batchingTexture"),Ke.setValue(B,"batchingTexture",st._matricesTexture,zt),Ke.setOptional(B,st,"batchingIdTexture"),Ke.setValue(B,"batchingIdTexture",st._indirectTexture,zt),Ke.setOptional(B,st,"batchingColorTexture"),st._colorsTexture!==null&&Ke.setValue(B,"batchingColorTexture",st._colorsTexture,zt));const pn=ht.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ot.update(st,ht,Mn),(Pe||ce.receiveShadow!==st.receiveShadow)&&(ce.receiveShadow=st.receiveShadow,Ke.setValue(B,"receiveShadow",st.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(qn.envMap.value=Vt,qn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&it.environment!==null&&(qn.envMapIntensity.value=it.environmentIntensity),Pe&&(Ke.setValue(B,"toneMappingExposure",b.toneMappingExposure),ce.needsLights&&cf(qn,za),It&&dt.fog===!0&&Ut.refreshFogUniforms(qn,It),Ut.refreshMaterialUniforms(qn,dt,Z,$,_.state.transmissionRenderTarget[L.id]),Jc.upload(B,ys(ce),qn,zt)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(Jc.upload(B,ys(ce),qn,zt),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Ke.setValue(B,"center",st.center),Ke.setValue(B,"modelViewMatrix",st.modelViewMatrix),Ke.setValue(B,"normalMatrix",st.normalMatrix),Ke.setValue(B,"modelMatrix",st.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const on=dt.uniformsGroups;for(let Fn=0,rr=on.length;Fn<rr;Fn++){const Yi=on[Fn];me.update(Yi,Mn),me.bind(Yi,Mn)}}return Mn}function cf(L,it){L.ambientLightColor.needsUpdate=it,L.lightProbe.needsUpdate=it,L.directionalLights.needsUpdate=it,L.directionalLightShadows.needsUpdate=it,L.pointLights.needsUpdate=it,L.pointLightShadows.needsUpdate=it,L.spotLights.needsUpdate=it,L.spotLightShadows.needsUpdate=it,L.rectAreaLights.needsUpdate=it,L.hemisphereLights.needsUpdate=it}function Kl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(L,it,ht){const dt=Nt.get(L);dt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),Nt.get(L.texture).__webglTexture=it,Nt.get(L.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:ht,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,it){const ht=Nt.get(L);ht.__webglFramebuffer=it,ht.__useDefaultFramebuffer=it===void 0};const Co=B.createFramebuffer();this.setRenderTarget=function(L,it=0,ht=0){V=L,z=it,P=ht;let dt=!0,st=null,It=!1,jt=!1;if(L){const Vt=Nt.get(L);if(Vt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(B.FRAMEBUFFER,null),dt=!1;else if(Vt.__webglFramebuffer===void 0)zt.setupRenderTarget(L);else if(Vt.__hasExternalTextures)zt.rebindTextures(L,Nt.get(L.texture).__webglTexture,Nt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ue=L.depthTexture;if(Vt.__boundDepthTexture!==ue){if(ue!==null&&Nt.has(ue)&&(L.width!==ue.image.width||L.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(L)}}const ne=L.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(jt=!0);const he=Nt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(he[it])?st=he[it][ht]:st=he[it],It=!0):L.samples>0&&zt.useMultisampledRTT(L)===!1?st=Nt.get(L).__webglMultisampledFramebuffer:Array.isArray(he)?st=he[ht]:st=he,U.copy(L.viewport),G.copy(L.scissor),q=L.scissorTest}else U.copy(Et).multiplyScalar(Z).floor(),G.copy(kt).multiplyScalar(Z).floor(),q=se;if(ht!==0&&(st=Co),gt.bindFramebuffer(B.FRAMEBUFFER,st)&&dt&&gt.drawBuffers(L,st),gt.viewport(U),gt.scissor(G),gt.setScissorTest(q),It){const Vt=Nt.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+it,Vt.__webglTexture,ht)}else if(jt){const Vt=it;for(let ne=0;ne<L.textures.length;ne++){const he=Nt.get(L.textures[ne]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ne,he.__webglTexture,ht,Vt)}}else if(L!==null&&ht!==0){const Vt=Nt.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Vt.__webglTexture,ht)}N=-1},this.readRenderTargetPixels=function(L,it,ht,dt,st,It,jt,Qt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Nt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&jt!==void 0&&(Vt=Vt[jt]),Vt){gt.bindFramebuffer(B.FRAMEBUFFER,Vt);try{const ne=L.textures[Qt],he=ne.format,ue=ne.type;if(!mt.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=L.width-dt&&ht>=0&&ht<=L.height-st&&(L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Qt),B.readPixels(it,ht,dt,st,Yt.convert(he),Yt.convert(ue),It))}finally{const ne=V!==null?Nt.get(V).__webglFramebuffer:null;gt.bindFramebuffer(B.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(L,it,ht,dt,st,It,jt,Qt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=Nt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&jt!==void 0&&(Vt=Vt[jt]),Vt)if(it>=0&&it<=L.width-dt&&ht>=0&&ht<=L.height-st){gt.bindFramebuffer(B.FRAMEBUFFER,Vt);const ne=L.textures[Qt],he=ne.format,ue=ne.type;if(!mt.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,be),B.bufferData(B.PIXEL_PACK_BUFFER,It.byteLength,B.STREAM_READ),L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Qt),B.readPixels(it,ht,dt,st,Yt.convert(he),Yt.convert(ue),0);const He=V!==null?Nt.get(V).__webglFramebuffer:null;gt.bindFramebuffer(B.FRAMEBUFFER,He);const tn=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await AT(B,tn,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,be),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,It),B.deleteBuffer(be),B.deleteSync(tn),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,it=null,ht=0){const dt=Math.pow(2,-ht),st=Math.floor(L.image.width*dt),It=Math.floor(L.image.height*dt),jt=it!==null?it.x:0,Qt=it!==null?it.y:0;zt.setTexture2D(L,0),B.copyTexSubImage2D(B.TEXTURE_2D,ht,0,0,jt,Qt,st,It),gt.unbindTexture()};const xs=B.createFramebuffer(),ff=B.createFramebuffer();this.copyTextureToTexture=function(L,it,ht=null,dt=null,st=0,It=null){It===null&&(st!==0?(Vl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=st,st=0):It=0);let jt,Qt,Vt,ne,he,ue,be,He,tn;const Ie=L.isCompressedTexture?L.mipmaps[It]:L.image;if(ht!==null)jt=ht.max.x-ht.min.x,Qt=ht.max.y-ht.min.y,Vt=ht.isBox3?ht.max.z-ht.min.z:1,ne=ht.min.x,he=ht.min.y,ue=ht.isBox3?ht.min.z:0;else{const pn=Math.pow(2,-st);jt=Math.floor(Ie.width*pn),Qt=Math.floor(Ie.height*pn),L.isDataArrayTexture?Vt=Ie.depth:L.isData3DTexture?Vt=Math.floor(Ie.depth*pn):Vt=1,ne=0,he=0,ue=0}dt!==null?(be=dt.x,He=dt.y,tn=dt.z):(be=0,He=0,tn=0);const Oe=Yt.convert(it.format),ce=Yt.convert(it.type);let Be;it.isData3DTexture?(zt.setTexture3D(it,0),Be=B.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(zt.setTexture2DArray(it,0),Be=B.TEXTURE_2D_ARRAY):(zt.setTexture2D(it,0),Be=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,it.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,it.unpackAlignment);const Ee=B.getParameter(B.UNPACK_ROW_LENGTH),Mn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ri=B.getParameter(B.UNPACK_SKIP_PIXELS),Pe=B.getParameter(B.UNPACK_SKIP_ROWS),za=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ie.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ie.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ne),B.pixelStorei(B.UNPACK_SKIP_ROWS,he),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ue);const Ke=L.isDataArrayTexture||L.isData3DTexture,qn=it.isDataArrayTexture||it.isData3DTexture;if(L.isDepthTexture){const pn=Nt.get(L),on=Nt.get(it),Fn=Nt.get(pn.__renderTarget),rr=Nt.get(on.__renderTarget);gt.bindFramebuffer(B.READ_FRAMEBUFFER,Fn.__webglFramebuffer),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let Yi=0;Yi<Vt;Yi++)Ke&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.get(L).__webglTexture,st,ue+Yi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.get(it).__webglTexture,It,tn+Yi)),B.blitFramebuffer(ne,he,jt,Qt,be,He,jt,Qt,B.DEPTH_BUFFER_BIT,B.NEAREST);gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(st!==0||L.isRenderTargetTexture||Nt.has(L)){const pn=Nt.get(L),on=Nt.get(it);gt.bindFramebuffer(B.READ_FRAMEBUFFER,xs),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,ff);for(let Fn=0;Fn<Vt;Fn++)Ke?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,st,ue+Fn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,st),qn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,on.__webglTexture,It,tn+Fn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,on.__webglTexture,It),st!==0?B.blitFramebuffer(ne,he,jt,Qt,be,He,jt,Qt,B.COLOR_BUFFER_BIT,B.NEAREST):qn?B.copyTexSubImage3D(Be,It,be,He,tn+Fn,ne,he,jt,Qt):B.copyTexSubImage2D(Be,It,be,He,ne,he,jt,Qt);gt.bindFramebuffer(B.READ_FRAMEBUFFER,null),gt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else qn?L.isDataTexture||L.isData3DTexture?B.texSubImage3D(Be,It,be,He,tn,jt,Qt,Vt,Oe,ce,Ie.data):it.isCompressedArrayTexture?B.compressedTexSubImage3D(Be,It,be,He,tn,jt,Qt,Vt,Oe,Ie.data):B.texSubImage3D(Be,It,be,He,tn,jt,Qt,Vt,Oe,ce,Ie):L.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,It,be,He,jt,Qt,Oe,ce,Ie.data):L.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,It,be,He,Ie.width,Ie.height,Oe,Ie.data):B.texSubImage2D(B.TEXTURE_2D,It,be,He,jt,Qt,Oe,ce,Ie);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ee),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ri),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,za),It===0&&it.generateMipmaps&&B.generateMipmap(Be),gt.unbindTexture()},this.initRenderTarget=function(L){Nt.get(L).__webglFramebuffer===void 0&&zt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?zt.setTextureCube(L,0):L.isData3DTexture?zt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?zt.setTexture2DArray(L,0):zt.setTexture2D(L,0),gt.unbindTexture()},this.resetState=function(){z=0,P=0,V=null,gt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const $c={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ao{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ww=new Hm(-1,1,1,-1,0,1);class Dw extends Rn{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}}const Nw=new Dw;class Vm{constructor(t){this._mesh=new fn(Nw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ww)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Uw extends Ao{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xl.clone(t.uniforms),this.material=new rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Vm(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xx extends Ao{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),u=t.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class Lw extends Ao{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ow{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new Gt);this._width=s.width,this._height=s.height,i=new Di(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uw($c),this.copyPass.material.blending=Ua,this.clock=new mS}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}xx!==void 0&&(f instanceof xx?s=!0:f instanceof Lw&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new Gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Pw extends Ao{constructor(t,i,s=null,l=null,u=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new de}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let u,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(u=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const zw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class So extends Ao{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Gt(t.x,t.y):new Gt(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Di(u,f,{type:Xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const g=new Di(u,f,{type:Xi});g.texture.name="UnrealBloomPass.h"+v,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const y=new Di(u,f,{type:Xi});y.texture.name="UnrealBloomPass.v"+v,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),u=Math.round(u/2),f=Math.round(f/2)}const d=zw;this.highPassUniforms=Xl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new Gt(1/u,1/f),u=Math.round(u/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xl.clone($c.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:$c.vertexShader,fragmentShader:$c.fragmentShader,blending:zl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new kl,this._fsQuad=new Vm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new Gt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,u){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),u&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=So.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=So.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const i=[];for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(t*t))/t);return new rn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Gt(.5,.5)},direction:{value:new Gt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
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
				}`})}}So.BlurDirectionX=new Gt(1,0);So.BlurDirectionY=new Gt(0,1);const Wc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Iw extends Ao{constructor(){super(),this.uniforms=Xl.clone(Wc.uniforms),this.material=new Ib({name:Wc.name,uniforms:this.uniforms,vertexShader:Wc.vertexShader,fragmentShader:Wc.fragmentShader}),this._fsQuad=new Vm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===Ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Dx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ux?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lx?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Nx&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Al=(o,t,i)=>Math.min(i,Math.max(t,o)),Rl=(o,t,i,s)=>t+(o-t)*Math.exp(-i*s),SS=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class Bw{constructor(){fe(this,"shipQuaternion",new Jn);fe(this,"lookQuaternion",new Jn);fe(this,"position",new H);fe(this,"yaw",0);fe(this,"pitch",0);fe(this,"yawVelocity",0);fe(this,"pitchVelocity",0);fe(this,"speed",0);fe(this,"lookYaw",0);fe(this,"lookPitch",0);fe(this,"lookTargetYaw",0);fe(this,"lookTargetPitch",0);fe(this,"touchX",0);fe(this,"touchY",0);fe(this,"touchSteering",!1);fe(this,"keys",new Set);fe(this,"elapsed",0);fe(this,"lastContext","");fe(this,"euler",new Ni(0,0,0,"YXZ"));fe(this,"forward",new H)}key(t,i){SS.has(t)&&(i?this.touchSteering||this.keys.add(t):this.keys.delete(t))}steerTouch(t,i,s){this.touchSteering=s,this.keys.clear();const l=Math.hypot(t,i),u=s?Al((l-.1)/.9,0,1):0;this.touchX=l?t/l*u:0,this.touchY=l?i/l*u:0}look(t,i,s,l){if(l.paused||l.blocked)return;const u=s?l.touchSensitivity:l.sensitivity;this.lookTargetYaw=Al(this.lookTargetYaw-Al(t,-.2,.2)*u*1.6*(!s&&l.invertMouseX?-1:1),-.85,.85),this.lookTargetPitch=Al(this.lookTargetPitch-Al(i,-.2,.2)*u*1.6*(!s&&l.invertMouseY?-1:1),-.5,.5)}reset(t=!1){this.keys.clear(),this.steerTouch(0,0,!1),t&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(t,i){const s=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&s!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=s,!Number.isFinite(t)||t<=0||t>.25||i.paused)return;const l=Math.min(t,.1);this.elapsed+=l;const u=i.mode==="Manual Flight"&&i.started&&!i.blocked;let f=0,d=0;if(u){f=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const _=Math.max(1,Math.hypot(f,d));f/=_,d/=_}const p=i.reduced?.45:1,m=this.touchSteering?i.touchSensitivity:i.sensitivity,v=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,g=u?-f*.22*m*p:Math.sin(this.elapsed*.055)*v,y=u?-d*.16*m*p:Math.sin(this.elapsed*.08)*v*.3,S=3,T=(1-Math.exp(-S*l))/S;this.yaw+=g*l+(this.yawVelocity-g)*T,this.pitch+=y*l+(this.pitchVelocity-y)*T,this.yawVelocity=Rl(this.yawVelocity,g,S,l),this.pitchVelocity=Rl(this.pitchVelocity,y,S,l),this.pitch=Math.atan2(Math.sin(this.pitch),Math.cos(this.pitch)),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ")),this.lookYaw=Rl(this.lookYaw,this.lookTargetYaw,6,l),this.lookPitch=Rl(this.lookPitch,this.lookTargetPitch,6,l),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const A=i.started?Math.max(0,i.speed)*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,M=A*l+(this.speed-A)*(1-Math.exp(-.8*l))/.8;this.speed=Rl(this.speed,A,.8,l),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,M)}}function Fw(o,t,i,s){let l=null,u=null,f="";const d=[],p=(_,w,D,b)=>{_.addEventListener(w,D,b),d.push(()=>_.removeEventListener(w,D,b))},m=()=>!s().paused&&!s().blocked&&document.visibilityState!=="hidden",v=()=>m()&&s().started&&s().mode==="Manual Flight",g=(_,w)=>{t.style.setProperty("--stick-x",`${_*34}px`),t.style.setProperty("--stick-y",`${w*34}px`)},y=()=>{const _=l;l=null,_&&o.hasPointerCapture(_.id)&&o.releasePointerCapture(_.id)},S=()=>{const _=u;u=null,i.steerTouch(0,0,!1),g(0,0),_!==null&&t.hasPointerCapture(_)&&t.releasePointerCapture(_)},T=()=>{y(),S(),i.reset(!0)};p(o,"pointerdown",(_=>{!m()||l||_.pointerType==="mouse"&&(_.button!==0||u!==null)||(_.preventDefault(),l={id:_.pointerId,type:_.pointerType,x:_.clientX,y:_.clientY},o.setPointerCapture(_.pointerId))})),p(o,"pointermove",(_=>{if((l==null?void 0:l.id)!==_.pointerId)return;if(!m()||_.pointerType==="mouse"&&!(_.buttons&1)){y();return}_.preventDefault();const w=Math.max(240,Math.min(o.clientWidth,o.clientHeight));i.look((_.clientX-l.x)/w,(_.clientY-l.y)/w,l.type!=="mouse",s()),l.x=_.clientX,l.y=_.clientY}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(o,_,(w=>{w.pointerId===(l==null?void 0:l.id)&&y()}));const A=_=>{const w=t.getBoundingClientRect();let D=(_.clientX-w.left-w.width/2)/(w.width*.35),b=(_.clientY-w.top-w.height/2)/(w.height*.35);const I=Math.max(1,Math.hypot(D,b));D/=I,b/=I,i.steerTouch(D,b,!0),g(D,b)};p(t,"pointerdown",(_=>{_.pointerType==="mouse"||u!==null||!v()||(_.preventDefault(),_.stopPropagation(),(l==null?void 0:l.type)==="mouse"&&y(),u=_.pointerId,t.setPointerCapture(_.pointerId),A(_))})),p(t,"pointermove",(_=>{if(_.pointerId===u){if(!v()){S();return}_.preventDefault(),A(_)}}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(t,_,(w=>{w.pointerId===u&&S()}));const M=_=>_ instanceof HTMLElement&&!!_.closest('input,select,textarea,[contenteditable="true"]');return p(window,"keydown",(_=>{!SS.has(_.code)||M(_.target)||!v()||_.ctrlKey||_.metaKey||_.altKey||(_.preventDefault(),i.key(_.code,!0))})),p(window,"keyup",(_=>i.key(_.code,!1))),p(window,"blur",T),p(document,"visibilitychange",T),p(window,"resize",T),p(window,"orientationchange",T),p(o,"contextmenu",_=>_.preventDefault()),p(t,"contextmenu",_=>_.preventDefault()),{sync(){const _=s(),w=`${_.mode}/${_.paused}/${_.started}/${_.blocked}`;f&&w!==f&&(y(),S(),i.reset(_.paused||_.blocked)),f=w},dispose(){T(),d.forEach(_=>_())}}}function Hw(o,t,i){if(!Number.isFinite(t)||t<=0||t>.25||i.paused){o.step(0,i);return}const s=Math.ceil(t/(1/60)),l=t/s;for(let u=0;u<s;u++)o.step(l,i)}class Gw{constructor(){fe(this,"scale",1);fe(this,"elapsed",0);fe(this,"average",1/60);fe(this,"nextDecision",3)}reset(){this.scale=1,this.elapsed=0,this.average=1/60,this.nextDecision=3}observe(t,i,s){if(!i||s||!Number.isFinite(t)||t<=0||t>1||(this.elapsed+=t,this.average+=(Math.min(t,.2)-this.average)*(1-Math.exp(-t/1.5)),this.elapsed<this.nextDecision))return!1;const l=this.scale;return this.average>.028?(this.scale=Math.max(.6,Math.round((this.scale-.1)*100)/100),this.nextDecision=this.elapsed+3):this.average<.018?(this.scale=Math.min(1,Math.round((this.scale+.05)*100)/100),this.nextDecision=this.elapsed+10):this.nextDecision=this.elapsed+3,l!==this.scale}}const Cl=o=>(o=Math.max(0,Math.min(1,o)),o*o*(3-2*o)),Vw=[2,4,1,0,3],kw=10.2;class MS{constructor(){fe(this,"phase","idle");fe(this,"elapsed",0);fe(this,"destination",0);fe(this,"seed",7123);fe(this,"committed",!1);fe(this,"justCommitted",!1);fe(this,"energy",0);fe(this,"charge",0);fe(this,"veil",0)}get busy(){return this.phase!=="idle"}start(t,i,s=!1){return this.busy||s?!1:(this.destination=Vw[t]??(t+1)%5,this.seed=Math.imul(i|0,1664525)+1013904223>>>0||1,this.elapsed=0,this.committed=!1,this.justCommitted=!1,this.energy=0,this.veil=0,this.charge=0,this.phase="charging",!0)}advance(t,i=!1){if(this.justCommitted=!1,!this.busy||i||!Number.isFinite(t)||t<=0)return;this.elapsed+=Math.min(t,.25);const s=this.elapsed;s<1.4?(this.phase="charging",this.charge=Cl(s/1.4),this.energy=this.charge*.035):s<4?(this.phase="accelerating",this.charge=1,this.energy=.035+.965*Cl((s-1.4)/2.6)):s<5.6?(this.phase="transit",this.charge=1,this.energy=1):s<9?(this.phase="arriving",this.energy=1-Cl((s-5.6)/3.4),this.charge=this.energy):s<kw?(this.phase="stabilized",this.energy=0,this.charge=0):(this.phase="idle",this.energy=0,this.charge=0),this.veil=s<4?0:s<4.8?Cl((s-4)/.8):s<5.6?1:1-Cl((s-5.6)/1.7),!this.committed&&s>=4.8&&(this.committed=!0,this.justCommitted=!0)}}function Xw(o){const i=new Float32Array(4680),s=new Float32Array(780*2),l=new Float32Array(780*2*3);let u=4171;const f=()=>(u=u*16807%2147483647,(u-1)/2147483646);for(let T=0;T<780;T++){const A=f()*Math.PI*2,M=18+Math.pow(f(),1.3)*550,_=f();for(let w=0;w<2;w++)i.set([Math.cos(A)*M,Math.sin(A)*M*.72,_],(T*2+w)*3),s[T*2+w]=w}const d=new Rn;d.setAttribute("position",new Tn(l,3)),d.setAttribute("lane",new Tn(i,3)),d.setAttribute("endpoint",new Tn(s,1));const p={time:{value:0},energy:{value:0},tint:{value:new de("#b7d8ef")}},m=new de("#d4ecfa"),v=new rn({uniforms:p,transparent:!0,depthWrite:!1,blending:zl,vertexShader:`attribute vec3 lane;attribute float endpoint;uniform float time,energy;varying float fade;
      void main(){float z=-12.-fract(lane.z+time)*800.;float trailLength=energy*(22.+energy*155.);
      vec3 p=vec3(lane.xy,z-endpoint*trailLength);fade=smoothstep(15.,65.,-z)*(1.-smoothstep(650.,810.,-z))*(.35+endpoint*.4);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float energy;uniform vec3 tint;varying float fade;void main(){gl_FragColor=vec4(tint*1.35,fade*energy*.7);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),g=new ib(d,v);g.name="light-jump-streaks",g.frustumCulled=!1,g.renderOrder=3,o.add(g);let y=!0,S=0;return{configure(T,A){d.setDrawRange(0,(A?70:T==="Low"?180:T==="Medium"?420:780)*2),y=!0},update(T,A,M){A>0&&(S+=T*(.18+A*1.7)),p.time.value=S,p.energy.value=A,p.tint.value.copy(M).lerp(m,.7),g.visible=A>.001||y,y=!1}}}const qw=`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,Yw=`
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
`,wl=[[[-480,-45,-1500],[1250,380,-4300],[-2200,950,-8200],[500,1600,-12e3],[2450,-500,-9200],[-700,850,-7900]],[[-540,-120,-1850],[1300,300,-4800],[-1450,420,-5700],[500,-90,-10800],[2600,700,-9600],[-850,900,-8200]],[[480,-100,-1800],[-1500,380,-3800],[1750,300,-6800],[-500,200,-10500],[3e3,-500,-9600],[-1100,900,-8500]],[[-470,35,-1900],[1350,500,-4600],[-2e3,-50,-7200],[700,120,-10500],[2400,-350,-8500],[-1e3,850,-9200]],[[-800,-200,-3500],[1900,430,-6800],[-2600,150,-9e3],[200,300,-12e3],[2900,-500,-1e4],[-1200,1e3,-10500]]].map(o=>o.map(t=>new H(...t))),Ww=[6,5,6,5,4],Mp=[[135,310,180,570,150,90],[150,310,190,500,170,100],[135,360,210,650,190,95],[160,340,210,580,170,100],[180,420,260,820,180,100]],lo=[["#315e9c","#9c8fbd","#77758e","#3a4d6a","#6a6c7c","#8b829c"],["#276992","#8e9eae","#8b8e96","#31495f","#858d97","#6a849f"],["#857260","#b5956e","#92877a","#655c54","#8a7a67","#b3a38b"],["#2b7886","#7c9ba9","#7b8d94","#385765","#849b9e","#6f8e9f"],["#46576e","#6d768b","#6c7180","#293c58","#6d788a","#56697f"]].map(o=>o.map(t=>new de(t))),Ep=lo.map(o=>o.map(t=>t.clone().lerp(new de("#cfbd9c"),.38)));function jw(o){const t=new $s;t.name="regional-celestial-bodies",o.add(t);const i=new xo(1,32,20),s=(E,U)=>{const G=new rn({uniforms:{baseColor:{value:lo[0][U].clone()},detailColor:{value:Ep[0][U].clone()},kind:{value:E},alpha:{value:1},seed:{value:U*7.3+2.1},lightDirection:{value:U===3?new H(-.85,.2,-.6):new H(-.65,.4,U===1?.28:.75)}},vertexShader:qw,fragmentShader:Yw,transparent:!0,depthWrite:!0}),q=new fn(i,G);return q.renderOrder=4,q.userData.kind=E>1.5?"rocky-body":"planet",t.add(q),q},l=[0,1,2,2,2,2].map((E,U)=>s(E,U)),u=wl[0].map(E=>E.clone()),f=Mp[0].slice(),d=new Jn,p=new H,m=new H,v=l.map(()=>new H),g=new Float32Array(6).fill(1);let y=0;const S=[0,1,2].map((E,U)=>{const G=s(2,U+2);return G.userData.kind="moon",{mesh:G,parent:E,radius:[29,44,52][U]}}),T=new rn({uniforms:{color:{value:new de("#a5a091")},alpha:{value:1}},transparent:!0,depthWrite:!1,side:Gi,vertexShader:"varying vec2 point;void main(){point=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 point;uniform vec3 color;uniform float alpha;void main(){float r=length(point);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.65,edge*max(.1,bands)*alpha);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),A=new fn(new Fm(1.32,2.2,64),T);A.rotation.set(1.12,.2,-.27),A.renderOrder=5,t.add(A);const M=A.quaternion.clone(),_=new Bb({color:"#76818c",roughness:1,metalness:0,transparent:!0,depthWrite:!1}),w=new JT(new Bm(1,0),_,72);w.name="distant-rock-cluster",t.add(w);const D=new xn;let b=8353;const I=()=>(b=b*16807%2147483647,(b-1)/2147483646);for(let E=0;E<72;E++){D.position.set((I()-.5)*700,(I()-.5)*180,(I()-.5)*450),D.rotation.set(I()*3,I()*3,I()*3);const U=4+I()*10;D.scale.set(U,U*.7,U*1.2),D.updateMatrix(),w.setMatrixAt(E,D.matrix)}w.instanceMatrix.needsUpdate=!0,w.computeBoundingSphere();const z=[new H(-1e3,80,-2800),new H(1300,-180,-3600),new H(-1700,-180,-4300),new H(1600,80,-3900),new H(-2200,-250,-6500)],P=z[0].clone();let V=6,N=3;return{group:t,setJump(E){y=E},reseed(E,U,G,q){m.copy(G),q?d.copy(q):d.identity();let nt=E>>>0;const Q=()=>(nt=Math.imul(nt,1664525)+1013904223>>>0,nt/4294967296);for(let F=0;F<l.length;F++)v[F].set((Q()-.5)*900,(Q()-.5)*500,(Q()-.5)*1e3),g[F]=.72+Q()*.56,u[F].copy(wl[U][F]).add(v[F]),f[F]=Mp[U][F]*g[F],l[F].material.uniforms.seed.value=Q()*90+1,(F===0||F===4)&&(l[F].material.uniforms.kind.value=Q()>.5?0:2);for(const F of S)F.mesh.material.uniforms.seed.value=Q()*90+1;P.copy(z[U]),P.x+=(Q()-.5)*1300,P.y+=(Q()-.5)*300},dispose(){t.removeFromParent();const E=new Set,U=new Set;t.traverse(G=>{if(G instanceof fn){E.add(G.geometry);for(const q of Array.isArray(G.material)?G.material:[G.material])U.add(q)}}),w.dispose(),E.forEach(G=>G.dispose()),U.forEach(G=>G.dispose())},configure(E){V=6,N=3,w.count=E==="Low"?24:E==="Medium"?48:72},update(E,U,G,q){const nt=1-Math.exp(-E*.28),Q=1-dn.smoothstep(y,.12,.65);for(let F=0;F<l.length;F++){const $=l[F];u[F].x=dn.lerp(u[F].x,wl[G][F].x+v[F].x,nt),u[F].y=dn.lerp(u[F].y,wl[G][F].y+v[F].y,nt),u[F].z=dn.lerp(u[F].z,wl[G][F].z+v[F].z,nt),f[F]=dn.lerp(f[F],Mp[G][F]*g[F],nt),$.visible=F<Math.min(V,Ww[G]),$.position.copy(u[F]).applyQuaternion(d).add(m).sub(q),$.scale.setScalar(f[F]),$.rotation.y=U*.002+F*.5,$.material.uniforms.baseColor.value.lerp(lo[G][F],nt),$.material.uniforms.detailColor.value.lerp(Ep[G][F],nt),$.material.uniforms.alpha.value=dn.smoothstep($.position.length()/f[F],1.05,1.4)*Q}for(let F=0;F<S.length;F++){const{mesh:$,parent:Z,radius:ut}=S[F],yt=l[Z];$.visible=F<N&&yt.visible,$.scale.setScalar(ut),p.set(f[Z]*1.8,f[Z]*.5,f[Z]*.4).applyQuaternion(d),$.position.copy(yt.position).add(p),$.material.uniforms.alpha.value=yt.material.uniforms.alpha.value,$.material.uniforms.baseColor.value.lerp(lo[G][2],nt),$.material.uniforms.detailColor.value.lerp(Ep[G][2],nt)}A.visible=!0,A.quaternion.copy(d).multiply(M),A.position.copy(l[1].position),A.scale.setScalar(f[1]),T.uniforms.alpha.value=l[1].material.uniforms.alpha.value,T.uniforms.color.value.lerp(lo[G][1],nt),w.quaternion.copy(d),w.position.copy(P).applyQuaternion(d).add(m).sub(q),_.opacity=Q,w.visible=Q>.005,_.color.lerp(lo[G][2],nt)}}}const vm=18e3;function Zw(o){return[o.x,o.y,o.z].map(t=>Math.floor((t+vm/2)/vm))}function Qw(o,t,i){let s=(Math.imul(o,73856093)^Math.imul(t,19349663)^Math.imul(i,83492791)^7123)>>>0;const l=s,u=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),f=o===0&&t===0&&i===0,d=f?0:l%5,p=new Jn().setFromEuler(new Ni(u()*Math.PI*2,u()*Math.PI*2,u()*Math.PI*2));return f&&p.identity(),{key:`${o}/${t}/${i}`,seed:l,region:d,heading:p,anchor:new H(o,t,i).multiplyScalar(vm)}}function Kw(o){const t=Array.from({length:27},()=>({bodies:jw(o),sector:null}));let i="",s="Medium";const l=u=>{const[f,d,p]=Zw(u),m=`${f}/${d}/${p}`;if(m===i)return;i=m;const v=new Map;for(let g=-1;g<=1;g++)for(let y=-1;y<=1;y++)for(let S=-1;S<=1;S++){const T=Qw(f+g,d+y,p+S);v.set(T.key,T)}for(const g of t)g.sector&&v.has(g.sector.key)?v.delete(g.sector.key):g.sector=null;for(const g of v.values()){const y=t.find(S=>!S.sector);y.sector=g,y.bodies.reseed(g.seed,g.region,g.anchor,g.heading),y.bodies.update(1e3,0,g.region,u),y.bodies.configure(s)}};return{setJump(u){for(const f of t)f.bodies.setJump(u)},configure(u){s=u;for(const f of t)f.bodies.configure(u)},update(u,f,d,p){var m;l(p);for(const v of t){const g=v.sector;v.bodies.update(u,f,g.region,p);for(const y of v.bodies.group.children){const S=y.position.length(),T=1-dn.smoothstep(S,1e4,13e3);if(y instanceof fn){const A=y.material;(m=A.uniforms)!=null&&m.alpha?A.uniforms.alpha.value*=T:"opacity"in A&&(A.opacity*=T)}y.visible=y.visible&&T>0}}},dispose(){for(const u of t)u.bodies.dispose()}}}const _m={Low:{pixelRatio:.9,stars:[550,2400,7800],cloudScale:.32,volumes:1,steps:4,octaves:2,bloom:!1},Medium:{pixelRatio:1,stars:[1e3,4800,19e3],cloudScale:.4,volumes:2,steps:7,octaves:2,bloom:!1},High:{pixelRatio:1.35,stars:[2200,1e4,48e3],cloudScale:.5,volumes:3,steps:10,octaves:3,bloom:!0}},Sx={Dark:{exposure:.8,cabin:.7,nebula:.65},Balanced:{exposure:1.12,cabin:1,nebula:.9},Cinematic:{exposure:1.32,cabin:1.12,nebula:1.08}},Na=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#a879ef",second:"#315fab",accent:"#f4a4cf",density:1.05,band:.8,structure:1.15,bandWidth:1,warmth:.25,stars:.87,exposure:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#88bcf2",second:"#234a89",accent:"#c3dcff",density:.38,band:.7,structure:1.4,bandWidth:.65,warmth:.07,stars:1,exposure:1.04},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#edbd79",second:"#956753",accent:"#fff2c9",density:.85,band:1.65,structure:1.8,bandWidth:1.4,warmth:.88,stars:1.4,exposure:.93},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#67cbbf",second:"#306c9c",accent:"#b1d5e8",density:1.3,band:.5,structure:.65,bandWidth:1.1,warmth:.16,stars:.7,exposure:1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#6d7fbb",second:"#253553",accent:"#a6b8e1",density:.12,band:.15,structure:.8,bandWidth:.45,warmth:.12,stars:.23,exposure:.84}],ES=`
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
`,Jw=`
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
`,$w=`
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
${ES}
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
${ES}
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
`;function a3(o){const t=Na[0],i=new $x,s=new Di(1,1,{type:Xi,depthBuffer:!1}),l=new ye,u={sky:{value:s.texture},reprojection:{value:l},tanHalf:{value:.6745},wideTanHalf:{value:.7554},aspect:{value:1},veil:{value:0},jumpTint:{value:new de("#92bce0")}},f=new fn(new To(2,2),new rn({uniforms:u,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:`varying vec2 uvv;uniform sampler2D sky;uniform mat3 reprojection;uniform float tanHalf,wideTanHalf,aspect,veil;uniform vec3 jumpTint;
      void main(){vec3 ray=reprojection*vec3((uvv-.5)*2.*tanHalf*vec2(aspect,1.),-1.);
      vec2 sampleUV=ray.xy/max(.001,-ray.z)/(2.*wideTanHalf*vec2(aspect,1.))+.5;
      gl_FragColor=texture2D(sky,clamp(sampleUV,.001,.999));gl_FragColor.rgb=mix(gl_FragColor.rgb,jumpTint*.38,veil*.985);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));f.frustumCulled=!1,f.renderOrder=-10,o.add(f);const d=new vi(75,1,.1,16e3),p=new Jn,m=new Jn,v=new Jn,g=new H,y=new H,S=new Ve,T=new H,A=new H;let M=!0,_=-1/0,w=1/24;const D=Kw(o),b=new H,I=new H,z=new Jn,P=new Jn,V=new ye,N=new Ve,E=new ye,U=new ye,G=Na.map(Y=>({tint:new de(Y.color),second:new de(Y.second),accent:new de(Y.accent)})),q={jumpAmount:{value:0},layoutRotation:{value:V},destinationRotation:{value:E},volumeRotation:{value:U},time:{value:0},tint:{value:G[0].tint.clone()},second:{value:G[0].second.clone()},accent:{value:G[0].accent.clone()},density:{value:Number(t.density)},band:{value:Number(t.band)},warmth:{value:Number(t.warmth)},abundance:{value:t.stars/1.4},structure:{value:Number(t.structure)},bandWidth:{value:Number(t.bandWidth)},energy:{value:.9},octaves:{value:3},halo:{value:1}};let nt=7123;const Q=()=>(nt=nt*16807%2147483647,(nt-1)/2147483646),F=()=>Math.sqrt(-2*Math.log(Math.max(1e-5,Q())))*Math.cos(2*Math.PI*Q()),Z=[new H(1900,1400,1900),new H(5400,4e3,5400),new H(15e3,11e3,15e3)].map((Y,J)=>{const xt=_m.High.stars[J],Rt=new Float32Array(xt*3),wt=new Float32Array(xt),Tt=new Float32Array(xt),Lt=new Float32Array(xt);for(let mt=0;mt<xt;mt++){let gt=(Q()-.5)*Y.x,Ct=(Q()-.5)*Y.z,Nt=(Q()-.5)*Y.y;if(J>0&&Q()<.72){if(Q()<.28){const oe=Math.floor(Q()*4);gt=(oe%2?.22:-.24)*Y.x+F()*Y.x*.045,Ct=(oe<2?-.27:.22)*Y.z+F()*Y.z*.055}Nt=-.42*gt+F()*Y.y*.035+Math.sin(Ct/Y.z*5)*Y.y*.045}Rt.set([gt,Nt,Ct],mt*3);const zt=Q();wt[mt]=(zt>.987?12+Q()*14:1.3+Q()*4.6)*[.7,1.1,2][J],Tt[mt]=Q(),Lt[mt]=Q()}const B=new Rn;B.setAttribute("position",new Tn(Rt,3)),B.setAttribute("radius",new Tn(wt,1)),B.setAttribute("temperature",new Tn(Tt,1)),B.setAttribute("identity",new Tn(Lt,1));const At=new rn({uniforms:{...q,offset:{value:new H},span:{value:Y},layoutOffset:{value:new H},pixels:{value:400},dpr:{value:1}},vertexShader:Jw,fragmentShader:$w,transparent:!0,depthWrite:!1,blending:zl}),vt=new eS(B,At);return vt.frustumCulled=!1,vt.renderOrder=3,o.add(vt),vt}),ut=new fn(new xo(12500,32,16),new rn({uniforms:q,vertexShader:n3,fragmentShader:i3,side:kn,depthWrite:!1}));ut.renderOrder=-2,ut.frustumCulled=!1,i.add(ut);const yt=new xo(1,24,16),Et=[{center:new H(-180,110,-820),radii:new H(680,330,770)},{center:new H(600,-140,-1600),radii:new H(1050,480,1e3)},{center:new H(-850,220,-2400),radii:new H(1200,520,1050)},{center:new H(450,420,1200),radii:new H(850,600,1e3)}],kt=Et.map(()=>new H),se=Et.map((Y,J)=>{const xt=new rn({uniforms:{...q,center:{value:Y.center.clone()},radii:{value:Y.radii},steps:{value:10},visibility:{value:1},seed:{value:4.3+J*9.7}},vertexShader:t3,fragmentShader:e3,transparent:!0,depthWrite:!1,side:kn}),Rt=new fn(yt,xt);return Rt.position.copy(Y.center),Rt.scale.copy(Y.radii),Rt.renderOrder=1,i.add(Rt),Rt}),X=new Gb("#b7c6ef","#080e1d",1.6);o.add(X);const pt=new Xb("#dae6ff",2.8);return pt.position.set(-3,4,1),o.add(pt),{tint:q.tint.value,setJump(Y,J){q.jumpAmount.value=Math.max(Y,J),u.veil.value=J,u.jumpTint.value.copy(q.tint.value).lerp(q.accent.value,.35),D.setJump(Math.max(Y,J))},reseed(Y,J,xt,Rt){b.copy(xt),Rt?z.copy(Rt):z.identity(),P.copy(z).invert(),E.setFromMatrix4(N.makeRotationFromQuaternion(z)),U.copy(E).transpose();for(const Lt of se)Lt.quaternion.copy(z);let wt=Y>>>0;const Tt=()=>(wt=Math.imul(wt,1664525)+1013904223>>>0,wt/4294967296);N.makeRotationY((Tt()-.5)*1.2),N.multiply(new Ve().makeRotationZ((Tt()-.5)*.8)),V.setFromMatrix4(N);for(const Lt of Z){const B=Lt.material.uniforms.span.value;Lt.material.uniforms.layoutOffset.value.set((Tt()-.5)*B.x,(Tt()-.5)*B.y,(Tt()-.5)*B.z)}for(let Lt=0;Lt<se.length;Lt++)kt[Lt].set((Tt()-.5)*600,(Tt()-.5)*250,(Tt()-.5)*500),se[Lt].material.uniforms.seed.value=Tt()*80+2;M=!0},renderAtmosphere(Y,J,xt=!1){J.updateWorldMatrix(!0,!1),J.matrixWorld.decompose(g,p,y);const Rt=J,wt=Math.tan(dn.degToRad(Rt.fov)*.5);(u.aspect.value!==Rt.aspect||u.tanHalf.value!==wt)&&(M=!0),u.tanHalf.value=wt,u.wideTanHalf.value=wt*1.12,u.aspect.value=Rt.aspect;const Tt=performance.now()/1e3;if(xt||M||Tt-_>=w||p.angleTo(m)>.075||T.distanceToSquared(A)>900){d.fov=dn.radToDeg(2*Math.atan(wt*1.12)),d.aspect=Rt.aspect,d.near=Rt.near,d.far=Rt.far,d.updateProjectionMatrix(),d.position.copy(g),d.quaternion.copy(p);const Lt=Y.toneMapping;Y.toneMapping=La,Y.setRenderTarget(s),Y.render(i,d),Y.setRenderTarget(null),Y.toneMapping=Lt,m.copy(p),A.copy(T),_=performance.now()/1e3,M=!1}v.copy(m).invert().multiply(p),S.makeRotationFromQuaternion(v),l.setFromMatrix4(S)},dispose(){s.dispose(),D.dispose();const Y=new Set,J=new Set;i.traverse(xt=>{xt instanceof fn&&(Y.add(xt.geometry),J.add(xt.material))}),Y.forEach(xt=>xt.dispose()),J.forEach(xt=>xt.dispose())},configure(Y,J,xt,Rt,wt,Tt,Lt=!1){M=!0,w=Lt?1/15:Y==="Low"?1/20:Y==="Medium"?1/24:1/30;const B=_m[Y];D.configure(Y),q.octaves.value=B.octaves;const At=Tt&&Y!=="Low"?Xi:qi;s.texture.type!==At&&(s.dispose(),s.texture.type=At),s.setSize(Math.max(1,Math.round(xt*J*(Lt?.26:B.cloudScale))),Math.max(1,Math.round(Rt*J*(Lt?.26:B.cloudScale)))),q.halo.value=.75+wt*.8,Z.forEach((vt,mt)=>{vt.geometry.setDrawRange(0,B.stars[mt]),vt.material.uniforms.pixels.value=Rt*.64*J,vt.material.uniforms.dpr.value=J}),se.forEach((vt,mt)=>{vt.visible=mt<B.volumes,vt.material.uniforms.steps.value=B.steps})},update(Y,J,xt,Rt,wt){I.copy(Rt).sub(b).applyQuaternion(P),T.copy(I),D.update(Y,J,xt,Rt);const Tt=Na[xt],Lt=G[xt],B=1-Math.exp(-Y*.55);q.time.value=J,q.tint.value.lerp(Lt.tint,B),q.second.value.lerp(Lt.second,B),q.accent.value.lerp(Lt.accent,B),q.density.value=dn.lerp(q.density.value,Tt.density,B),q.band.value=dn.lerp(q.band.value,Tt.band,B),q.structure.value=dn.lerp(q.structure.value,Tt.structure,B),q.bandWidth.value=dn.lerp(q.bandWidth.value,Tt.bandWidth,B),q.warmth.value=dn.lerp(q.warmth.value,Tt.warmth,B),q.abundance.value=dn.lerp(q.abundance.value,Tt.stars/1.4,B),q.energy.value=dn.lerp(q.energy.value,wt,B),Z.forEach(At=>At.material.uniforms.offset.value.copy(I)),se.forEach((At,vt)=>{const mt=Et[vt].center;At.position.set(dn.euclideanModulo(mt.x+kt[vt].x-I.x+4600,9200)-4600,dn.euclideanModulo(mt.y+kt[vt].y-I.y+3600,7200)-3600,dn.euclideanModulo(mt.z+kt[vt].z-I.z+4600,9200)-4600);const gt=Math.max(Math.abs(At.position.x)/4600,Math.abs(At.position.y)/3600,Math.abs(At.position.z)/4600);At.position.applyQuaternion(z),At.material.uniforms.center.value.copy(At.position),At.material.uniforms.visibility.value=1-dn.smoothstep(gt,.65,.95)})}}}function s3(o,t=!1){const i=o[0].index!==null,s=new Set(Object.keys(o[0].attributes)),l=new Set(Object.keys(o[0].morphAttributes)),u={},f={},d=o[0].morphTargetsRelative,p=new Rn;let m=0;for(let v=0;v<o.length;++v){const g=o[v];let y=0;if(i!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const S in g.attributes){if(!s.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+'. All geometries must have compatible attributes; make sure "'+S+'" attribute exists among all geometries, or in none of them.'),null;u[S]===void 0&&(u[S]=[]),u[S].push(g.attributes[S]),y++}if(y!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". Make sure all geometries have the same number of attributes."),null;if(d!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const S in g.morphAttributes){if(!l.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+".  .morphAttributes must be consistent throughout all geometries."),null;f[S]===void 0&&(f[S]=[]),f[S].push(g.morphAttributes[S])}if(t){let S;if(i)S=g.index.count;else if(g.attributes.position!==void 0)S=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". The geometry must have either an index or a position attribute"),null;p.addGroup(m,S,v),m+=S}}if(i){let v=0;const g=[];for(let y=0;y<o.length;++y){const S=o[y].index;for(let T=0;T<S.count;++T)g.push(S.getX(T)+v);v+=o[y].attributes.position.count}p.setIndex(g)}for(const v in u){const g=Mx(u[v]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" attribute."),null;p.setAttribute(v,g)}for(const v in f){const g=f[v][0].length;if(g===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[v]=[];for(let y=0;y<g;++y){const S=[];for(let A=0;A<f[v].length;++A)S.push(f[v][A][y]);const T=Mx(S);if(!T)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" morphAttribute."),null;p.morphAttributes[v].push(T)}}return p}function Mx(o){let t,i,s,l=-1,u=0;for(let m=0;m<o.length;++m){const v=o[m];if(t===void 0&&(t=v.array.constructor),t!==v.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=v.itemSize),i!==v.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=v.normalized),s!==v.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=v.gpuType),l!==v.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;u+=v.count*i}const f=new t(u),d=new Tn(f,i,s);let p=0;for(let m=0;m<o.length;++m){const v=o[m];if(v.isInterleavedBufferAttribute){const g=p/i;for(let y=0,S=v.count;y<S;y++)for(let T=0;T<i;T++){const A=v.getComponent(y,T);d.setComponent(y+g,T,A)}}else f.set(v.array,p);p+=v.count*i}return l!==void 0&&(d.gpuType=l),d}function r3(o){const t=new $s;t.name="enclosed-flight-deck",o.add(t);const i={value:new de("#ae80f0")},s={value:1},l=(E,U)=>new rn({uniforms:{baseColor:{value:new de(E)},tint:i,brightness:s,polish:{value:U}},vertexShader:"varying vec3 point,faceNormal;void main(){point=position;faceNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 point,faceNormal;uniform vec3 baseColor,tint;uniform float brightness,polish;
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
      }`}),u=l("#141d23",.3),f=l("#2b393e",.5),d=l("#070b10",.12),p=new kl({color:"#52d9d5"}),m=new Map,v=(E,U)=>{m.has(U)||m.set(U,[]),m.get(U).push(E)};function g(E,U,G,q,nt,Q,F,$=0,Z=0,ut=0){const yt=new Eo(nt,Q,F);yt.rotateX($),yt.rotateY(Z),yt.rotateZ(ut),yt.translate(U,G,q),v(yt,E)}function y(E,U,G,q){const nt=new Lm(q,q,U.distanceTo(G),8);nt.applyQuaternion(new Jn().setFromUnitVectors(new H(0,1,0),G.clone().sub(U).normalize())),nt.translate(...U.clone().add(G).multiplyScalar(.5).toArray()),v(nt,E)}function S(E,U,G,q,nt){const Q=Array.from({length:41},(F,$)=>{const Z=-.12+$/40*(Math.PI+.24);return new H(Math.cos(Z)*U,-.95+Math.sin(Z)*G,E)});v(new of(new dm(Q),48,q,8,!1),nt)}g(u,0,-2.02,.25,7.3,.22,7),g(u,0,3.35,-.4,7.3,.2,7.3),g(u,0,.6,2.55,7.3,5.7,.2);for(const E of[-1,1]){g(u,E*3.55,-.15,.4,.2,6.8,5),g(u,E*2.62,-1.52,-1.9,.65,.76,4,0,E*-.1),y(f,new H(E*1.35,-.3,-3.18),new H(E*2.72,-1.4,.25),.075),y(u,new H(E*1.48,-.38,-3.2),new H(E*2.85,-1.47,.35),.14),y(f,new H(E*2.9,-.95,-3.2),new H(E*3.12,-1.25,.5),.055),y(p,new H(E*1.52,-.49,-3.1),new H(E*2.77,-1.54,.15),.009);for(let U=0;U<13;U++){const G=U/12;g(f,E*(1.48+G*1.33),-.4-G*1.08,-3.14+G*3.35,.035,.035,.028)}}S(-3.35,2.92,3.62,.085,u),S(-3.32,2.84,3.57,.025,f),S(-3.29,2.81,3.53,.008,p),S(.7,3.15,3.9,.12,u),y(u,new H(0,2.68,-3.35),new H(0,2.95,.8),.065);const T=new uS;T.moveTo(-1.62,-1.85),T.lineTo(-1.44,-.58),T.bezierCurveTo(-1.2,-.12,-.92,.48,-.58,.55),T.quadraticCurveTo(0,.72,.58,.55),T.bezierCurveTo(.92,.48,1.2,-.12,1.44,-.58),T.lineTo(1.62,-1.85),T.closePath();const A=new Im(T,{depth:.24,bevelEnabled:!0,bevelSize:.045,bevelThickness:.045,bevelSegments:2,steps:1});A.translate(0,-.12,-3.18),v(A,d);const M=[new H(-1.4,-.62,-2.89),new H(-.88,.23,-2.89),new H(0,.52,-2.89),new H(.88,.23,-2.89),new H(1.4,-.62,-2.89)];v(new of(new dm(M),40,.045,8,!1),f),g(f,0,-.13,-2.84,1.19,.76,.12,-.1),g(d,0,-.13,-2.755,1.13,.7,.035,-.1),g(u,0,-.74,-2.72,1.32,.18,.22),g(d,0,-.72,-2.58,.85,.09,.06);for(const E of[-1,1]){g(u,E*1.14,-1.05,-1.62,.78,.25,1.75,.18,0,E*.12),g(d,E*1.14,-.91,-1.62,.69,.035,1.66,.18,0,E*.12),y(f,new H(E*1.59,-1.13,-.65),new H(E*1.61,-.78,-2.5),.045),y(f,new H(E*.73,-1.12,-.72),new H(E*.75,-.87,-2.35),.035),g(d,E*.97,-.63,-2.36,.59,.44,.12,-.34,-E*.18);for(let U=0;U<3;U++)for(let G=0;G<4;G++)g(f,E*1.15+(G-1.5)*.12,-.76-U*.035,-1.8+U*.18,.085,.04,.105,.18);for(let U=0;U<5;U++)g(d,E*1.23,-.83,-.96-U*.15,.12,.07,.085,.18),g(f,E*.94,-.79,-.98-U*.15,.045,.06,.065,.18);g(d,E*.65,-1.11,-1.78,.26,.11,.3),y(f,new H(E*.65,-1.07,-1.78),new H(E*.59,-.78,-1.86),.043),g(d,E*.59,-.72,-1.87,.11,.19,.16,-.25,0,E*.15),g(p,E*.59,-.625,-1.84,.035,.008,.045),g(f,E*.22,-1.74,-2.16,.2,.09,.34,.5);for(let U=0;U<6;U++)g(d,E*.22,-1.69+U*.013,-2.29+U*.04,.14,.014,.012,.5);g(p,E*1.34,-1.82,-.45,.025,.025,.58);for(let U=0;U<18;U++)g(f,E*1.32,-1.91,-.9+U*.085,.28,.014,.012)}g(d,0,-1.66,-.08,.99,.25,1.4),g(u,0,-.74,1,1.12,1.65,.28,-.13),g(d,0,-.72,.82,.91,1.44,.14,-.13),g(d,0,-.04,2.39,1.5,3,.1);for(const E of[-1,1])g(f,E*.79,-.04,2.29,.035,3,.035);const _=document.createElement("canvas");_.width=_.height=1024;const w=_.getContext("2d");w.fillStyle="#020b10",w.fillRect(0,0,1024,1024);const D=(E,U,G,q,nt="#40bfbf")=>{w.strokeStyle=nt,w.beginPath(),w.moveTo(E,U),w.lineTo(G,q),w.stroke()},b=(E,U,G,q=10,nt="#6ee9dd")=>{w.font=`${q}px monospace`,w.fillStyle=nt,w.fillText(E,U,G)};w.strokeStyle="#65eddf",w.lineWidth=3,w.strokeRect(5,5,630,354),b("A E T H E R   /   DEEP SPACE NAVIGATION",20,26,12),b("FLIGHT SYSTEMS",21,53),b("VECTOR  /  LOCK",465,53),w.lineWidth=1;for(let E=0;E<11;E++)D(20,70+E*22,164,70+E*22,"#154c58"),b(["NAV  ONLINE","DRIVE NOMINAL","O2   100.0%","HULL  STABLE"][E%4],24,84+E*22,8),D(460,70+E*22,610,70+E*22,"#154c58"),b(`${(E*173.29+72).toFixed(2)} / ${E%3===0?"ACTIVE":"SYNC"}`,467,84+E*22,8);for(let E=0;E<9;E++){const U=18+E*11;w.strokeStyle=E%2?"#174b59":"#21838b",w.beginPath(),w.arc(320,185,U,0,Math.PI*2),w.stroke()}for(let E=0;E<12;E++){const U=E/12*Math.PI*2;D(320+Math.cos(U)*19,185+Math.sin(U)*19,320+Math.cos(U)*107,185+Math.sin(U)*107,"#18525e")}const I=w.createRadialGradient(320,185,1,320,185,65);I.addColorStop(0,"#8bfff5"),I.addColorStop(.18,"#1dd7d5"),I.addColorStop(1,"#05303b00"),w.fillStyle=I,w.fillRect(250,115,140,140);for(let E=0;E<60;E++)D(185+E*4.4,317+Math.sin(E*.7)*7,189+E*4.4,317+Math.sin((E+1)*.7)*7,"#50cec5");b("PERSEUS // CONTINUOUS NAVIGATION",183,345,9),w.fillStyle="#04100a",w.fillRect(0,390,400,220);for(let E=0;E<18;E++)b(`${E.toString(16).padStart(2,"0")}  ${["SYSTEM LINK ESTABLISHED","TRAJECTORY COMPUTED","DEEP FIELD SCAN / OK","> AETHER FLIGHT COMPUTER"][E%4]}`,12,405+E*11,9,"#80c858");w.fillStyle="#063547",w.fillRect(430,390,350,180);for(let E=0;E<5;E++)b(["ATTITUDE","ENGINE","COOLANT","SIGNAL","ENERGY"][E],445,413+E*30,12),w.fillStyle="#47e4ef",w.fillRect(550,402+E*30,38+E*28,9);const z=["#f3d238","#28becf","#e35345","#9cd357","#c7e9de"];for(let E=0;E<4;E++)for(let U=0;U<8;U++){const G=12+U*48,q=650+E*48;w.fillStyle="#101e22",w.fillRect(G,q,40,40),w.fillStyle=z[(E*3+U)%5],w.fillRect(G+4,q+4,32,25),D(G+9,q+34,G+30,q+34,"#899d94")}for(let E=0;E<2;E++){const U=540+E*220,G=750;for(const q of[65,57,45])w.strokeStyle="#8df6e5",w.lineWidth=q===57?5:2,w.beginPath(),w.arc(U,G,q,-.9,4.9),w.stroke();w.fillStyle="#bdfff2",w.beginPath(),w.arc(U,G,12,0,Math.PI*2),w.fill(),D(U,G,U+34,G-24,"#bdfff2"),b(E?"OXYGEN":"VELOCITY",U-30,G+91,11)}for(let E=0;E<12;E++)w.fillStyle=z[E%5],w.fillRect(20+E*45,900,31,16),b(E%3===0?"ARM":"ON",22+E*45,935,8);const P=new sb(_);P.colorSpace=si,P.anisotropy=2;const V=new kl({map:P,color:"#d8fff5",side:Gi});function N(E,U,G,q,nt,Q,F=0,$=0,Z=0){const ut=new To(q,nt),yt=ut.getAttribute("uv");for(let Et=0;Et<yt.count;Et++)yt.setXY(Et,(Q[0]+yt.getX(Et)*Q[2])/1024,1-(Q[1]+(1-yt.getY(Et))*Q[3])/1024);ut.rotateX(F),ut.rotateY($),ut.rotateZ(Z),ut.translate(E,U,G),v(ut,V)}N(0,-.13,-2.727,1.07,.6,[0,0,640,365],-.1),N(-.73,-.39,-2.72,.32,.36,[455,663,170,190]),N(.73,-.39,-2.72,.32,.36,[675,663,170,190]),N(-.98,-.61,-2.265,.49,.32,[430,390,350,180],-.34,.18,.1),N(.98,-.61,-2.265,.49,.32,[0,390,400,220],-.34,-.18,-.1),N(0,-1.02,-2.39,.62,.3,[0,640,400,205],-.4),N(0,-.59,-2.71,1.46,.085,[0,890,560,65]);for(const E of[-1,1])N(E*1.14,-.86,-1.53,.5,.53,[0,640,400,205],-Math.PI/2+.18,0,E*.12),N(E*.65,-1.038,-1.67,.23,.09,[0,890,250,45],-Math.PI/2),N(E*1.14,-.77,-2.03,.54,.11,[0,890,560,65],-Math.PI/2+.18);for(const E of[-1,1])for(let U=0;U<3;U++)for(let G=0;G<4;G++)N(E*1.15+(G-1.5)*.12,-.734-U*.035,-1.8+U*.18,.065,.08,[16+(U*3+G)%8*48,654+U*48,30,25],-Math.PI/2+.18);for(const E of M){const U=new xo(.022,6,4);U.translate(E.x,E.y,E.z+.055),v(U,f)}for(const[E,U]of m){for(const nt of U){if(nt.index){const Q=nt.toNonIndexed();nt.copy(Q),Q.dispose()}nt.deleteAttribute("uv1")}const G=s3(U);U.forEach(nt=>nt.dispose());const q=new fn(G,E);q.name=E===u?"enclosure-shell":E===V?"instrument-displays":"cabin-details",t.add(q)}return{group:t,update(E,U,G,q){t.visible=q;const nt=G?.5:1;i.value.copy(E),s.value=U*nt,p.color.set("#50d7ce").multiplyScalar(.7*U*nt),V.color.set("#d8fff5").multiplyScalar((.8+U*.2)*(G?.5:1))},dispose(){P.dispose()}}}function o3(o,t,i,s,l={}){const u=new Cw({antialias:!0,alpha:!1,powerPreference:"high-performance"});u.setClearColor("#040710"),u.outputColorSpace=si,u.toneMapping=Sm,u.toneMappingExposure=Sx.Balanced.exposure,o.appendChild(u.domElement);const f=new $x,d=new vi(68,1,.1,16e3),p=new $s;p.position.z=5,p.add(d),f.add(p);const m=l.jump??new MS;let v=m.phase;const g={...t()},y=()=>(Object.assign(g,t()),g.blocked=g.blocked||m.busy,g),S=a3(f),T=Xw(p),A=new de,M=new de("#bad9f3"),_=r3(p),w=Fw(u.domElement,s,i,y),D=new mS,b=new Gw;let I=t().quality,z=t().performanceMode,P=t().adaptive,V=0,N=0,E=0,U="",G=!1,q=null,nt=null;const Q=()=>{q&&(q.passes.forEach(ut=>ut.dispose()),q.dispose(),q=null,nt=null)},F=()=>{const ut=t(),yt=ut.performanceMode?"Low":ut.quality,Et=_m[yt],kt=Math.max(1,o.clientWidth),se=Math.max(1,o.clientHeight),X=Math.min(window.devicePixelRatio||1,Et.pixelRatio)*(ut.performanceMode?.85:ut.adaptive?b.scale:1);u.setPixelRatio(X),u.setSize(kt,se),d.aspect=kt/se,d.updateProjectionMatrix();const pt=!ut.performanceMode&&Et.bloom&&ut.bloom>0&&u.extensions.has("EXT_color_buffer_float");pt&&!q?(q=new Ow(u),q.addPass(new Pw(f,d)),nt=new So(new Gt(kt,se),.2,.55,1.1),q.addPass(nt),q.addPass(new Iw)):pt||Q(),q&&(q.setPixelRatio(X),q.setSize(kt,se)),S.configure(yt,X,kt,se,ut.bloom,u.extensions.has("EXT_color_buffer_float"),ut.performanceMode),T.configure(yt,ut.reduced),U=`${ut.quality}/${ut.bloom}/${ut.performanceMode}/${ut.adaptive}/${ut.reduced}`},$=()=>{var ut;D.getDelta(),i.reset(!0),(ut=l.onAudio)==null||ut.call(l,0,0,!0)};document.addEventListener("visibilitychange",$),window.addEventListener("resize",F),F();const Z=()=>{var J,xt,Rt;if(G)return;V=requestAnimationFrame(Z);const ut=D.getDelta(),yt=ut>.25?0:ut,Et=t();if(document.hidden){i.reset(!0);return}const kt=Math.min(ut,.25);m.advance(ut,Et.paused),m.phase!==v&&(v=m.phase,(J=l.onPhase)==null||J.call(l,m.phase)),m.justCommitted&&(S.reseed(m.seed,m.destination,i.position,i.shipQuaternion),(xt=l.onDestination)==null||xt.call(l,m.destination,m.seed));const se=m.busy&&m.committed?m.destination:Et.region,X=m.energy*(Et.reduced?.16:Et.mode==="Meditation"?.55:1);w.sync(),y(),m.busy&&(g.mode="Autopilot",g.motion=0,g.started=!0,g.speed=Et.speed+Math.pow(m.energy,2)*(Et.reduced?100:360)),Hw(i,ut,g),(Rt=l.onAudio)==null||Rt.call(l,X,m.charge,Et.paused),(Et.quality!==I||Et.performanceMode!==z||Et.adaptive!==P)&&(b.reset(),I=Et.quality,z=Et.performanceMode,P=Et.adaptive);const pt=b.observe(ut,Et.adaptive&&!Et.performanceMode,Et.paused);(U!==`${Et.quality}/${Et.bloom}/${Et.performanceMode}/${Et.adaptive}/${Et.reduced}`||pt)&&F(),Et.paused||(N+=yt);const Y=Sx[Et.lighting];u.toneMappingExposure=dn.damp(u.toneMappingExposure,Y.exposure*Na[se].exposure,.8,kt),S.setJump(X,m.veil),S.update(kt,N,se,i.position,Y.nebula),p.quaternion.copy(i.shipQuaternion),d.quaternion.copy(i.lookQuaternion),A.copy(S.tint).lerp(M,m.charge*.3),_.update(A,Y.cabin*(1+m.charge*.12),Et.mode==="Meditation",Et.cockpit),T.update(Et.paused?0:Math.min(ut,.1),X,S.tint),nt&&(nt.strength=Et.bloom*(Et.mode==="Meditation"?.45:.8+X*.2)),E+=ut,!(Et.paused&&E<1/15)&&(E=0,S.renderAtmosphere(u,d),q?q.render():u.render(f,d))};return Z(),()=>{var Et;G=!0,cancelAnimationFrame(V),w.dispose(),window.removeEventListener("resize",F),document.removeEventListener("visibilitychange",$),(Et=l.onAudio)==null||Et.call(l,0,0,!0),Q(),_.dispose(),S.dispose();const ut=new Set,yt=new Set;f.traverse(kt=>{if(kt instanceof fn||kt instanceof eS||kt instanceof tS){ut.add(kt.geometry);for(const se of Array.isArray(kt.material)?kt.material:[kt.material])yt.add(se)}}),ut.forEach(kt=>kt.dispose()),yt.forEach(kt=>kt.dispose()),u.dispose(),u.domElement.remove()}}const jl=[{id:"meditation",name:"Meditation Impromptu 01",mood:"Gentle piano · meditation",file:"meditation-impromptu-01.mp3",artist:"Kevin MacLeod",isrc:"USUAN1100163"},{id:"floating",name:"Floating Cities",mood:"Dreamlike ambient · a quiet future",file:"floating-cities.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600018"},{id:"jellyfish",name:"Jellyfish in Space",mood:"Soft space music · a flowing journey",file:"jellyfish-in-space.mp3",artist:"Kevin MacLeod",isrc:"USUAN1500030"},{id:"soaring",name:"Soaring",mood:"Atmospheric ambient · calm and spacious",file:"soaring.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600040"}],km={engineEnabled:!0,spaceEnabled:!0,musicEnabled:!0,engine:.35,space:.3,music:.5,track:"meditation"},Ex="cosmic-drift-audio-v1";function l3(o){const t={...km};try{const i=JSON.parse(o??"null");if(!i||typeof i!="object")return t;const s=i;for(const f of["engineEnabled","spaceEnabled","musicEnabled"])typeof s[f]=="boolean"&&(t[f]=s[f]);for(const f of["engine","space","music"])typeof s[f]=="number"&&Number.isFinite(s[f])&&(t[f]=Math.max(0,Math.min(1,s[f])));const l={starlight:"meditation",nebula:"floating",orbit:"jellyfish",lunar:"soaring"},u=typeof s.track=="string"?l[s.track]??s.track:"";jl.some(f=>f.id===u)&&(t.track=u)}catch{}return t}class u3{constructor(){fe(this,"ctx",null);fe(this,"master");fe(this,"engine");fe(this,"space");fe(this,"music");fe(this,"onMusicState");fe(this,"musicState",{state:"idle",track:null});fe(this,"jumpGain");fe(this,"jumpTone");fe(this,"jumpFilter");fe(this,"lastDrive",-1);fe(this,"lastCharge",-1);fe(this,"settings",{...km});fe(this,"enabled",!1);fe(this,"paused",!1);fe(this,"slots",[]);fe(this,"current");fe(this,"retiring");fe(this,"fadeTimer");fe(this,"pauseTimer");fe(this,"visibility",()=>this.apply())}get currentRecording(){var t;return((t=this.current)==null?void 0:t.element)??null}get musicActive(){return this.enabled&&!this.paused&&!document.hidden&&this.settings.musicEnabled&&this.settings.music>0}report(t,i){var l,u,f;const s=((u=(l=this.current)==null?void 0:l.track)==null?void 0:u.id)??null;this.musicState.state===t&&this.musicState.track===s&&this.musicState.message===i||(this.musicState={state:t,track:s,message:i},(f=this.onMusicState)==null||f.call(this,this.musicState))}async start(t){if(t&&(this.settings={...this.settings,track:t,musicEnabled:!0}),!this.ctx){const i=this.ctx=new AudioContext;this.master=i.createGain(),this.master.gain.value=0,this.master.connect(i.destination),this.engine=i.createGain(),this.space=i.createGain(),this.music=i.createGain();for(const p of[this.engine,this.space,this.music])p.gain.value=0,p.connect(this.master);for(const p of[38,57,76]){const m=i.createOscillator(),v=i.createGain();m.type="sine",m.frequency.value=p,v.gain.value=.09,m.connect(v).connect(this.engine),m.start()}const s=i.createBuffer(2,i.sampleRate*4,i.sampleRate);let l=1237;for(let p=0;p<2;p++){const m=s.getChannelData(p);let v=0;for(let g=0;g<m.length;g++){l=l*16807%2147483647,v=(v+((l-1)/2147483646-.5)*.035)/1.018;const y=Math.min(1,g/(i.sampleRate*.08),(m.length-1-g)/(i.sampleRate*.08));m[g]=v*y}}const u=i.createBufferSource(),f=i.createBiquadFilter();u.buffer=s,u.loop=!0,f.type="lowpass",f.frequency.value=650,u.connect(f).connect(this.space),u.start();for(const p of[82.41,123.47]){const m=i.createOscillator(),v=i.createGain();m.frequency.value=p,v.gain.value=.012,m.connect(v).connect(this.space),m.start()}this.jumpGain=i.createGain(),this.jumpGain.gain.value=0,this.jumpGain.connect(this.engine),this.jumpTone=i.createOscillator(),this.jumpTone.frequency.value=42,this.jumpTone.connect(this.jumpGain),this.jumpTone.start();const d=i.createBufferSource();d.buffer=s,d.loop=!0,this.jumpFilter=i.createBiquadFilter(),this.jumpFilter.type="lowpass",this.jumpFilter.frequency.value=250,d.connect(this.jumpFilter).connect(this.jumpGain),d.start(),this.slots=Array.from({length:2},()=>this.makeSlot(i)),document.addEventListener("visibilitychange",this.visibility)}this.apply(),this.current&&this.settings.musicEnabled&&this.settings.music>0&&this.play(this.current),await this.ctx.resume(),this.apply()}makeSlot(t){const i=new Audio;i.loop=!0,i.preload="none";const s=t.createMediaElementSource(i),l=t.createGain();l.gain.value=0,s.connect(l).connect(this.music);const u={element:i,source:s,gain:l,track:null,request:0,pending:!1};i.onwaiting=()=>{this.current===u&&this.musicActive&&this.report("loading")},i.onplaying=()=>{this.current===u&&this.musicActive&&this.report("playing")},i.onerror=()=>{this.current===u&&u.track&&this.report("error","This recording could not load. Select it again to retry.")};const f=new Uint8Array(76),d=new DataView(f.buffer),p=(m,v)=>{for(let g=0;g<v.length;g++)f[m+g]=v.charCodeAt(g)};return p(0,"RIFF"),d.setUint32(4,68,!0),p(8,"WAVEfmt "),d.setUint32(16,16,!0),d.setUint16(20,1,!0),d.setUint16(22,1,!0),d.setUint32(24,8e3,!0),d.setUint32(28,16e3,!0),d.setUint16(32,2,!0),d.setUint16(34,16,!0),p(36,"data"),d.setUint32(40,32,!0),i.src="data:audio/wav;base64,"+btoa(String.fromCharCode(...f)),i.play().then(()=>{u.track||(i.pause(),i.removeAttribute("src"),i.load())}).catch(()=>{}),u}set(t,i,s){this.enabled=t,this.settings={...i},this.paused=s,this.apply()}apply(){var u;const t=this.ctx;if(!t||t.state==="closed")return;const i=t.currentTime,s=this.enabled&&!this.paused&&!document.hidden;this.master.gain.setTargetAtTime(s?.65:0,i,.18);for(const[f,d,p]of[[this.engine,this.settings.engine,this.settings.engineEnabled],[this.space,this.settings.space,this.settings.spaceEnabled],[this.music,this.settings.music,this.settings.musicEnabled]])f.gain.setTargetAtTime(p?d:0,i,.16);const l=jl.find(f=>f.id===this.settings.track)??jl[0];(!this.current||((u=this.current.track)==null?void 0:u.id)!==l.id)&&this.changeTrack(l),this.musicActive?(clearTimeout(this.pauseTimer),this.pauseTimer=void 0,this.current.element.paused&&!this.current.pending?this.play(this.current):!this.current.element.paused&&this.current.element.readyState>=3?this.report("playing"):this.report("loading")):(this.report("paused"),this.pauseTimer||(this.pauseTimer=setTimeout(()=>{var f;this.pauseTimer=void 0,this.musicActive||((f=this.current)==null||f.element.pause(),this.current&&(this.current.pending=!1))},1100)))}changeTrack(t){const i=this.ctx,s=i.currentTime;clearTimeout(this.fadeTimer),this.retiring&&this.release(this.retiring);const l=this.current,u=this.slots.find(f=>f!==l);this.release(u),u.track=t,u.element.src=`/cosmic-drift/audio/${t.file}`,u.gain.gain.setValueAtTime(0,s),u.gain.gain.setTargetAtTime(1,s,.3),this.current=u,this.report("loading"),l&&(l.gain.gain.cancelScheduledValues(s),l.gain.gain.setTargetAtTime(0,s,.2),this.retiring=l,this.fadeTimer=setTimeout(()=>{this.release(l),this.retiring===l&&(this.retiring=void 0)},1200))}play(t){if(t.pending||!t.track)return;t.element.error&&t.element.load();const i=++t.request;t.pending=!0,this.current===t&&this.report("loading"),t.element.play().then(()=>{t.request===i&&(t.pending=!1,this.current===t&&this.musicActive&&this.report("playing"))}).catch(s=>{t.request===i&&(t.pending=!1,!(s instanceof DOMException&&s.name==="AbortError")&&this.current===t&&this.report("error",s instanceof DOMException&&s.name==="NotAllowedError"?"Tap the selected track again to allow playback.":"This recording could not play. Select it again to retry."))})}release(t){t.request++,t.pending=!1,t.track=null,t.element.pause(),t.element.removeAttribute("src"),t.element.load(),this.ctx&&this.ctx.state!=="closed"&&(t.gain.gain.cancelScheduledValues(this.ctx.currentTime),t.gain.gain.value=0)}jump(t,i,s){if(!this.ctx||this.ctx.state==="closed"||!this.jumpGain||(s&&(t=i=0),Math.abs(t-this.lastDrive)<.01&&Math.abs(i-this.lastCharge)<.01&&!(t===0&&this.lastDrive!==0)))return;this.lastDrive=t,this.lastCharge=i;const l=this.ctx.currentTime;this.jumpGain.gain.cancelScheduledValues(l),this.jumpGain.gain.setTargetAtTime(.018*i+.055*t,l,.15),this.jumpTone.frequency.cancelScheduledValues(l),this.jumpTone.frequency.setTargetAtTime(42+i*12+t*145,l,.25),this.jumpFilter.frequency.cancelScheduledValues(l),this.jumpFilter.frequency.setTargetAtTime(250+t*1100,l,.25)}dispose(){var t;clearTimeout(this.fadeTimer),clearTimeout(this.pauseTimer),document.removeEventListener("visibilitychange",this.visibility);for(const i of this.slots)i.element.onwaiting=i.element.onplaying=i.element.onerror=null,this.release(i),i.source.disconnect(),i.gain.disconnect();this.current=this.retiring=void 0,this.slots=[],this.onMusicState=void 0,(t=this.ctx)==null||t.close().catch(()=>{}),this.ctx=null}}function c3({sound:o,paused:t,playback:i,settings:s,onToggle:l,onChange:u,onTrack:f}){const d=i.state==="error"?i.message:o?t?"Audio paused · resume the journey to listen":s.musicEnabled?s.music<=0?"Music volume is zero · raise it to listen":i.state==="playing"?"Playing your selection · recorded music":i.state==="paused"?"Music paused · select the track to continue":"Loading recording…":"Music is off · engine and space follow your settings":"Audio is off · choose a track or enable sound";return at.jsxs(at.Fragment,{children:[at.jsx("p",{children:"Your own mix of engine, space and music."}),at.jsxs("button",{className:"sound-toggle",onClick:l,children:[o?"Mute all audio":"Enable sound",o?at.jsx(Tp,{size:17}):at.jsx(bx,{size:17})]}),at.jsx("div",{className:"audio-channels",children:[{toggle:"engineEnabled",volume:"engine",name:"Engine sound",label:"Engine volume",hint:"Engine hum and Light Jump"},{toggle:"spaceEnabled",volume:"space",name:"Space ambience",label:"Space volume",hint:"A soft, atmospheric soundscape"},{toggle:"musicEnabled",volume:"music",name:"Music",label:"Music volume",hint:"Your selected relaxation track"}].map(p=>at.jsxs("div",{className:"audio-channel",children:[at.jsxs("label",{className:"check",children:[at.jsx("input",{type:"checkbox",checked:s[p.toggle],onChange:m=>u({[p.toggle]:m.target.checked})}),at.jsxs("span",{children:[p.name,at.jsx("small",{children:p.hint})]})]}),at.jsxs("label",{className:"audio-level",children:["Volume ",at.jsxs("output",{children:[Math.round(s[p.volume]*100),"%"]}),at.jsx("input",{"aria-label":p.label,type:"range",min:"0",max:"1",step:".01",disabled:!s[p.toggle],value:s[p.volume],onChange:m=>u({[p.volume]:+m.target.value})})]})]},p.volume))}),at.jsxs("fieldset",{className:"music-library",children:[at.jsx("legend",{children:"Choose your music"}),jl.map((p,m)=>at.jsxs("label",{className:`music-option ${s.track===p.id?"selected":""}`,children:[at.jsx("input",{onClick:()=>{s.track===p.id&&f(p.id)},type:"radio",name:"music-track","aria-label":p.name,checked:s.track===p.id,onChange:()=>f(p.id)}),at.jsx("span",{className:`music-art music-art-${m}`,"aria-hidden":"true",children:["✦","◌","◎","☾"][m]}),at.jsxs("span",{className:"music-description",children:[p.name,at.jsx("small",{children:p.mood}),at.jsxs("small",{children:[p.artist," · CC BY 3.0"]})]})]},p.id))]}),at.jsx("small",{className:"audio-note","data-playback-state":i.state,"aria-live":"polite",children:d}),at.jsx("small",{className:"audio-license",children:"Recorded music by Kevin MacLeod · free with attribution"}),at.jsxs("details",{className:"music-credits",children:[at.jsx("summary",{children:"Music credits & licenses"}),at.jsxs("p",{children:["All four recordings are by ",at.jsx("a",{href:"https://incompetech.com/",target:"_blank",rel:"noreferrer",children:"Kevin MacLeod"}),", used under ",at.jsx("a",{href:"https://creativecommons.org/licenses/by/3.0/",target:"_blank",rel:"noreferrer",children:"CC BY 3.0"}),"."]}),jl.map(p=>at.jsxs("a",{href:`https://incompetech.com/music/royalty-free/index.html?isrc=${p.isrc}`,target:"_blank",rel:"noreferrer",children:[p.name," ↗"]},p.id)),at.jsxs("p",{children:["Audio editions from FitVita: trimmed, faded, loudness-normalized and encoded to Opus; converted to MP3 for this site. ",at.jsx("a",{href:"https://github.com/smyrna-pergamum/fitvita",target:"_blank",rel:"noreferrer",children:"Source & credits ↗"})]})]})]})}function f3(){const[o,t]=ge.useState("Autopilot"),[i,s]=ge.useState(18),[l,u]=ge.useState(!1),[f,d]=ge.useState(0),[p,m]=ge.useState(()=>matchMedia("(any-pointer: coarse)").matches?"Low":"Medium"),[v,g]=ge.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[y,S]=ge.useState(.6),[T,A]=ge.useState(!0),[M,_]=ge.useState(!1),[w,D]=ge.useState(!1),[b,I]=ge.useState(""),[z,P]=ge.useState(!1),[V,N]=ge.useState(!0),[E,U]=ge.useState(""),[G,q]=ge.useState(!1),[nt,Q]=ge.useState(1),[F,$]=ge.useState(.7),[Z,ut]=ge.useState(!1),[yt,Et]=ge.useState(!1),[kt,se]=ge.useState("Balanced"),[X,pt]=ge.useState(.28),[Y,J]=ge.useState(!1),[xt,Rt]=ge.useState(!0),[wt,Tt]=ge.useState("idle"),[Lt,B]=ge.useState(7123),[At,vt]=ge.useState(0),[mt,gt]=ge.useState({state:"idle",track:null}),[Ct,Nt]=ge.useState(()=>{try{return l3(localStorage.getItem(Ex))}catch{return{...km}}}),zt=ge.useRef(new MS),oe=ge.useRef(()=>{}),re=wt!=="idle",O=ge.useRef(null),R=ge.useRef(new Bw),rt=ge.useRef(null),ft=ge.useRef(new u3),Ut=ge.useRef({mode:o,speed:i,paused:l,region:f,quality:p,reduced:v,motion:y,cockpit:T,started:M,blocked:!!b||re,sensitivity:nt,touchSensitivity:F,invertMouseX:Z,invertMouseY:yt,lighting:kt,bloom:X,performanceMode:Y,adaptive:xt,worldSeed:Lt});Ut.current={mode:o,speed:i,paused:l,region:f,quality:p,reduced:v,motion:y,cockpit:T,started:M,blocked:!!b||re,sensitivity:nt,touchSensitivity:F,invertMouseX:Z,invertMouseY:yt,lighting:kt,bloom:X,performanceMode:Y,adaptive:xt,worldSeed:Lt},ge.useEffect(()=>{try{return o3(rt.current,()=>Ut.current,R.current,O.current,{jump:zt.current,onPhase:Tt,onDestination:(St,Yt)=>{d(St),B(Yt)},onAudio:(St,Yt,Bt)=>ft.current.jump(St,Yt,Bt)})}catch{U("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),ge.useEffect(()=>(ft.current.onMusicState=gt,()=>ft.current.dispose()),[]),ge.useEffect(()=>{const St=setInterval(()=>vt(R.current.speed),200);return()=>clearInterval(St)},[]),ge.useEffect(()=>{ft.current.set(z,Ct,l)},[z,Ct,l]),ge.useEffect(()=>{try{localStorage.setItem(Ex,JSON.stringify(Ct))}catch{}},[Ct]),ge.useEffect(()=>{const St=setInterval(()=>{V&&M&&!l&&!zt.current.busy&&d(Yt=>(Yt+1)%5)},9e4);return()=>clearInterval(St)},[V,M,l]),ge.useEffect(()=>{const St=Bt=>{Bt.target instanceof HTMLElement&&Bt.target.closest('input,select,textarea,[contenteditable="true"]')||(Bt.code==="KeyJ"&&!Bt.repeat&&!Bt.ctrlKey&&!Bt.metaKey&&!Bt.altKey&&(Bt.preventDefault(),oe.current()),Bt.key.toLowerCase()==="h"&&D(me=>!me),Bt.code==="Space"&&!(Bt.target instanceof HTMLElement&&Bt.target.closest("button,a"))&&(Bt.preventDefault(),u(me=>!me)),Bt.key==="Escape"&&(D(!1),I("")))},Yt=()=>q(!!document.fullscreenElement);return window.addEventListener("keydown",St),document.addEventListener("fullscreenchange",Yt),()=>{window.removeEventListener("keydown",St),document.removeEventListener("fullscreenchange",Yt)}},[]);const _t=async()=>{try{await ft.current.start(),P(St=>!St)}catch{U("Audio is unavailable in this browser. The journey can continue silently.")}},Kt=async St=>{try{await ft.current.start(St),Nt(Yt=>({...Yt,track:St,musicEnabled:!0})),P(!0)}catch{U("Audio is unavailable in this browser. The journey can continue silently.")}},Ft=()=>{_(!0),u(!1)},$t=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{U("Fullscreen is unavailable in this browser.")}},ee=St=>{zt.current.busy||(t(St),_(!0))},Ot=()=>{zt.current.start(f,Lt,l)&&(_(!0),I(""),Tt("charging"))};oe.current=Ot;const Wt=l&&re?"Jump paused":wt==="charging"?"Charging drive…":wt==="accelerating"?"Accelerating…":wt==="transit"?"Crossing the light…":wt==="arriving"?`Entering ${Na[zt.current.destination].name}…`:wt==="stabilized"?`Arrived: ${Na[zt.current.destination].name}`:"";return at.jsxs("main",{"data-jump-phase":wt,"data-world-seed":Lt,className:`${w?"hidden-ui":""} ${o==="Meditation"?"meditation":""} ${o==="Manual Flight"?"manual-flight":""} ${b||l||re?"controls-blocked":""} ${re?"jump-active":""}`,children:[at.jsx("div",{className:"universe",ref:rt}),at.jsx("div",{className:"vignette"}),at.jsxs("div",{className:"touch-controls ui",children:[at.jsxs("div",{ref:O,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[at.jsx("span",{className:"stick-cross",children:"+"}),at.jsx("span",{className:"stick-thumb"}),at.jsx("small",{children:"STEER"})]}),at.jsx("span",{className:"touch-look-hint",children:"DRAG SPACE TO LOOK"})]}),at.jsxs("header",{className:"ui",children:[at.jsxs("a",{className:"brand",href:"#",onClick:St=>{St.preventDefault(),D(!1)},children:[at.jsx(EE,{size:32}),at.jsxs("span",{children:["COSMIC DRIFT",at.jsx("small",{children:"A QUIETER KIND OF JOURNEY"})]})]}),at.jsxs("nav",{children:[at.jsx("span",{className:"live-dot"})," ALL SYSTEMS AT PEACE ",at.jsx("span",{className:"nav-line"}),at.jsx("button",{title:"Audio settings",onClick:()=>I(b==="audio"?"":"audio"),children:at.jsx(Tp,{size:18})}),at.jsx("button",{title:"Settings",onClick:()=>I(b==="settings"?"":"settings"),children:at.jsx(AE,{size:18})}),at.jsx("button",{title:"Fullscreen",onClick:$t,children:at.jsx(oy,{size:18})})]})]}),at.jsxs("section",{className:"intro ui",children:[at.jsxs("div",{className:"eyebrow",children:[at.jsx("span",{})," LEAVE THE NOISE BEHIND"]}),at.jsxs("h1",{children:["Nowhere to be.",at.jsx("br",{}),"Just ",at.jsx("em",{children:"drift."})]}),at.jsxs("p",{children:["A quiet passage through an infinite universe.",at.jsx("br",{}),"No destination. No demands. Just you and the stars."]}),at.jsxs("button",{className:"start",onClick:Ft,children:[M?l?"Resume journey":"Journey in progress":"Start journey",at.jsx(xE,{size:18})]}),at.jsxs("div",{className:"intro-note",children:[at.jsx("span",{})," ",M?"TAKE YOUR TIME. YOU HAVE ALL OF IT.":"YOUR OWN LITTLE CORNER OF INFINITY"]})]}),at.jsxs("aside",{className:"region-label ui",children:[at.jsx("span",{className:"coordinate",children:"SECTOR 07 / PERSEUS"}),at.jsx("div",{className:"region-rule"}),at.jsx("span",{className:"eyebrow",children:"YOU ARE DRIFTING THROUGH"}),at.jsx("h2",{children:Na[f].name}),at.jsx("p",{children:Na[f].subtitle}),at.jsxs("button",{disabled:re,onClick:()=>I(b==="regions"?"":"regions"),children:["Explore regions ",at.jsx(sy,{size:14})]})]}),at.jsxs("div",{className:"travel-marker ui",children:[at.jsx("span",{children:"✧"}),at.jsx("i",{}),at.jsx("small",{children:"AN INFINITE UNIVERSE. AN UNHURRIED YOU."})]}),at.jsxs("section",{className:"flight-deck ui",children:[at.jsxs("div",{className:"deck-top",children:[at.jsxs("div",{className:"deck-label",children:[at.jsx("span",{className:"live-dot"}),l?"JOURNEY PAUSED":M?"JOURNEY ACTIVE":"READY WHEN YOU ARE"]}),at.jsxs("div",{className:"jump-tools",children:[at.jsx("span",{className:"jump-status",role:"status","aria-live":"polite",children:Wt}),at.jsx("span",{className:"ship-name",children:"AETHER–01"}),at.jsxs("button",{className:"jump-button",disabled:re||l,onClick:Ot,"aria-keyshortcuts":"J",children:[at.jsx(CE,{size:14}),"Light Jump",at.jsx("kbd",{children:"J"})]})]})]}),at.jsxs("div",{className:"deck-controls",children:[at.jsx("div",{className:"mode-controls",children:[{name:"Autopilot",icon:SE},{name:"Manual Flight",icon:ME},{name:"Meditation",icon:RE}].map(St=>at.jsxs("button",{disabled:re,className:o===St.name?"selected":"",onClick:()=>ee(St.name),children:[at.jsx(St.icon,{size:17}),at.jsxs("span",{children:[St.name,St.name==="Meditation"?" mode":""]})]},St.name))}),at.jsxs("div",{className:"speed",children:[at.jsxs("label",{htmlFor:"speed",children:["DRIFT SPEED ",at.jsxs("span",{children:[At.toFixed(0)," ",at.jsx("small",{children:"km/s"})]})]}),at.jsx("input",{id:"speed",disabled:re,type:"range",min:"0",max:"1200",value:i,onChange:St=>s(+St.target.value)}),at.jsxs("div",{children:[at.jsx("span",{children:"0 · BRAKE"}),at.jsx("span",{children:"INTERSTELLAR"})]})]}),at.jsxs("div",{className:"deck-actions",children:[at.jsx("button",{title:l?"Resume":"Pause",onClick:()=>u(St=>!St),children:l?at.jsx(bE,{size:19}):at.jsx(TE,{size:19})}),at.jsx("button",{title:z?"Mute audio":"Enable audio",onClick:_t,children:z?at.jsx(Tp,{size:19}):at.jsx(bx,{size:19})}),at.jsx("button",{title:"Hide interface (H)",onClick:()=>D(!0),children:at.jsx(ry,{size:19})})]})]})]}),at.jsxs("footer",{className:"ui",children:[at.jsxs("span",{children:[at.jsx("span",{className:"key",children:"DRAG"})," TO LOOK AROUND ",at.jsx("i",{})," ",at.jsx("span",{className:"key",children:o==="Manual Flight"?"W A S D":"H"})," ",o==="Manual Flight"?"TO STEER":"TO HIDE INTERFACE"]}),at.jsxs("span",{children:["BUILT FOR WANDERING ",at.jsx("span",{className:"tiny-star",children:"✦"})]})]}),w&&at.jsxs("button",{className:"restore",onClick:()=>D(!1),children:[at.jsx(ry,{size:16})," Show controls · H"]}),b&&at.jsxs("div",{className:"panel ui",children:[at.jsxs("div",{className:"panel-head",children:[at.jsx("span",{children:b==="regions"?"Choose your horizon":b==="audio"?"The sound of stillness":"Make space your own"}),at.jsx("button",{title:"Close settings",onClick:()=>I(""),children:at.jsx(ly,{size:19})})]}),b==="regions"?at.jsxs(at.Fragment,{children:[at.jsx("p",{children:"Every corner of the universe has a different kind of quiet."}),Na.map((St,Yt)=>at.jsxs("button",{disabled:re,className:`region-option ${f===Yt?"active":""}`,onClick:()=>d(Yt),children:[at.jsx("span",{className:"orb",style:{background:`radial-gradient(circle at 30% 30%,${St.color},${St.second},#070a12)`}}),at.jsxs("span",{children:[St.name,at.jsx("small",{children:St.subtitle})]}),f===Yt?"●":at.jsx(sy,{size:15})]},St.name)),at.jsxs("label",{className:"check",children:[at.jsx("input",{type:"checkbox",checked:V,onChange:St=>N(St.target.checked)})," Automatically drift between regions · 90s"]})]}):b==="audio"?at.jsx(c3,{sound:z,paused:l,playback:mt,settings:Ct,onToggle:_t,onTrack:Kt,onChange:St=>Nt(Yt=>({...Yt,...St}))}):at.jsxs(at.Fragment,{children:[at.jsxs("label",{className:"setting",children:["Graphics quality",at.jsx("select",{"aria-label":"Graphics quality",value:p,onChange:St=>m(St.target.value),children:["Low","Medium","High"].map(St=>at.jsx("option",{children:St},St))})]}),at.jsxs("label",{className:"check",children:[at.jsx("input",{type:"checkbox",checked:Y,onChange:St=>J(St.target.checked)})," Performance mode"]}),at.jsxs("label",{className:"check",children:[at.jsx("input",{type:"checkbox",checked:xt,onChange:St=>Rt(St.target.checked)})," Adaptive resolution"]}),at.jsx("small",{className:"setting-note",children:"Performance mode prioritizes smooth flight. Adaptive resolution adjusts image detail when rendering is slow."}),at.jsxs("label",{className:"setting",children:["Environment lighting",at.jsx("select",{"aria-label":"Environment lighting",value:kt,onChange:St=>se(St.target.value),children:["Dark","Balanced","Cinematic"].map(St=>at.jsx("option",{children:St},St))})]}),at.jsxs("label",{className:"setting",children:["Soft bloom ",at.jsxs("output",{children:[Math.round(X*100),"%"]}),at.jsx("input",{"aria-label":"Soft bloom",type:"range",min:"0",max:".6",step:".02",value:X,onChange:St=>pt(+St.target.value)}),at.jsx("small",{className:"setting-note",children:"Low / Medium use lightweight star halos; High can add post-processing bloom."})]}),at.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",at.jsxs("output",{children:[nt.toFixed(2),"×"]}),at.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:nt,onChange:St=>Q(+St.target.value)})]}),at.jsxs("label",{className:"setting",children:["Touch sensitivity ",at.jsxs("output",{children:[F.toFixed(2),"×"]}),at.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:F,onChange:St=>$(+St.target.value)})]}),at.jsxs("label",{className:"check",children:[at.jsx("input",{type:"checkbox",checked:Z,onChange:St=>ut(St.target.checked)})," Invert mouse horizontal axis"]}),at.jsxs("label",{className:"check",children:[at.jsx("input",{type:"checkbox",checked:yt,onChange:St=>Et(St.target.checked)})," Invert mouse vertical axis"]}),at.jsxs("label",{className:"setting",children:["Camera movement",at.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:y,onChange:St=>S(+St.target.value)})]}),at.jsxs("label",{className:"check",children:[at.jsx("input",{type:"checkbox",checked:v,onChange:St=>g(St.target.checked)})," Reduced motion"]}),at.jsxs("label",{className:"check",children:[at.jsx("input",{type:"checkbox",checked:T,onChange:St=>A(St.target.checked)})," Show cockpit"]}),at.jsxs("button",{className:"sound-toggle",onClick:$t,children:[G?"Exit fullscreen":"Enter fullscreen",at.jsx(oy,{size:16})]})]})]}),E&&at.jsxs("div",{role:"alert",className:"error",children:[E,at.jsx("button",{onClick:()=>U(""),"aria-label":"Dismiss error",children:at.jsx(ly,{size:16})})]})]})}gE.createRoot(document.getElementById("root")).render(at.jsx(f3,{}));
