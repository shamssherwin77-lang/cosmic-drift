var tE=Object.defineProperty;var eE=(o,e,i)=>e in o?tE(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var ke=(o,e,i)=>eE(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var hd={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function nE(){if(c_)return hl;c_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return hl.Fragment=e,hl.jsx=i,hl.jsxs=i,hl}var f_;function iE(){return f_||(f_=1,hd.exports=nE()),hd.exports}var ot=iE(),dd={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function aE(){if(h_)return ue;h_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(I){return I===null||typeof I!="object"?null:(I=S&&I[S]||I["@@iterator"],typeof I=="function"?I:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,v={};function R(I,ut,Z){this.props=I,this.context=ut,this.refs=v,this.updater=Z||C}R.prototype.isReactComponent={},R.prototype.setState=function(I,ut){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ut,"setState")},R.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function N(){}N.prototype=R.prototype;function A(I,ut,Z){this.props=I,this.context=ut,this.refs=v,this.updater=Z||C}var O=A.prototype=new N;O.constructor=A,M(O,R.prototype),O.isPureReactComponent=!0;var z=Array.isArray;function P(){}var F={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function U(I,ut,Z){var nt=Z.ref;return{$$typeof:o,type:I,key:ut,ref:nt!==void 0?nt:null,props:Z}}function H(I,ut){return U(I.type,ut,I.props)}function J(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function et(I){var ut={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Z){return ut[Z]})}var mt=/\/+/g;function lt(I,ut){return typeof I=="object"&&I!==null&&I.key!=null?et(""+I.key):ut.toString(36)}function Y(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(P,P):(I.status="pending",I.then(function(ut){I.status==="pending"&&(I.status="fulfilled",I.value=ut)},function(ut){I.status==="pending"&&(I.status="rejected",I.reason=ut)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function q(I,ut,Z,nt,yt){var wt=typeof I;(wt==="undefined"||wt==="boolean")&&(I=null);var Tt=!1;if(I===null)Tt=!0;else switch(wt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(I.$$typeof){case o:case e:Tt=!0;break;case _:return Tt=I._init,q(Tt(I._payload),ut,Z,nt,yt)}}if(Tt)return yt=yt(I),Tt=nt===""?"."+lt(I,0):nt,z(yt)?(Z="",Tt!=null&&(Z=Tt.replace(mt,"$&/")+"/"),q(yt,ut,Z,"",function(G){return G})):yt!=null&&(J(yt)&&(yt=H(yt,Z+(yt.key==null||I&&I.key===yt.key?"":(""+yt.key).replace(mt,"$&/")+"/")+Tt)),ut.push(yt)),1;Tt=0;var Mt=nt===""?".":nt+":";if(z(I))for(var Gt=0;Gt<I.length;Gt++)nt=I[Gt],wt=Mt+lt(nt,Gt),Tt+=q(nt,ut,Z,wt,yt);else if(Gt=E(I),typeof Gt=="function")for(I=Gt.call(I),Gt=0;!(nt=I.next()).done;)nt=nt.value,wt=Mt+lt(nt,Gt++),Tt+=q(nt,ut,Z,wt,yt);else if(wt==="object"){if(typeof I.then=="function")return q(Y(I),ut,Z,nt,yt);throw ut=String(I),Error("Objects are not valid as a React child (found: "+(ut==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ut)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function X(I,ut,Z){if(I==null)return I;var nt=[],yt=0;return q(I,nt,"","",function(wt){return ut.call(Z,wt,yt++)}),nt}function ht(I){if(I._status===-1){var ut=I._result,Z=ut();Z.then(function(nt){(I._status===0||I._status===-1)&&(I._status=1,I._result=nt,Z.status===void 0&&(Z.status="fulfilled",Z.value=nt))},function(nt){(I._status===0||I._status===-1)&&(I._status=2,I._result=nt,Z.status===void 0&&(Z.status="rejected",Z.reason=nt))}),I._status===-1&&(I._status=0,I._result=Z)}if(I._status===1)return I._result.default;throw I._result}var dt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ut=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ut))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Nt(I){var ut=F.T,Z={};Z.types=ut!==null?ut.types:null,F.T=Z;try{var nt=I(),yt=F.S;yt!==null&&yt(Z,nt),typeof nt=="object"&&nt!==null&&typeof nt.then=="function"&&nt.then(P,dt)}catch(wt){dt(wt)}finally{ut!==null&&Z.types!==null&&(ut.types=Z.types),F.T=ut}}function Xt(I){var ut=F.T;if(ut!==null){var Z=ut.types;Z===null?ut.types=[I]:Z.indexOf(I)===-1&&Z.push(I)}else Nt(Xt.bind(null,I))}var oe={map:X,forEach:function(I,ut,Z){X(I,function(){ut.apply(this,arguments)},Z)},count:function(I){var ut=0;return X(I,function(){ut++}),ut},toArray:function(I){return X(I,function(ut){return ut})||[]},only:function(I){if(!J(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ue.Activity=m,ue.Children=oe,ue.Component=R,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=A,ue.StrictMode=s,ue.Suspense=p,ue.ViewTransition=y,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ue.__COMPILER_RUNTIME={__proto__:null,c:function(I){return F.H.useMemoCache(I)}},ue.addTransitionType=Xt,ue.cache=function(I){return function(){return I.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(I,ut,Z){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var nt=M({},I.props),yt=I.key;if(ut!=null)for(wt in ut.key!==void 0&&(yt=""+ut.key),ut)!w.call(ut,wt)||wt==="key"||wt==="__self"||wt==="__source"||wt==="ref"&&ut.ref===void 0||(nt[wt]=ut[wt]);var wt=arguments.length-2;if(wt===1)nt.children=Z;else if(1<wt){for(var Tt=Array(wt),Mt=0;Mt<wt;Mt++)Tt[Mt]=arguments[Mt+2];nt.children=Tt}return U(I.type,yt,nt)},ue.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ue.createElement=function(I,ut,Z){var nt,yt={},wt=null;if(ut!=null)for(nt in ut.key!==void 0&&(wt=""+ut.key),ut)w.call(ut,nt)&&nt!=="key"&&nt!=="__self"&&nt!=="__source"&&(yt[nt]=ut[nt]);var Tt=arguments.length-2;if(Tt===1)yt.children=Z;else if(1<Tt){for(var Mt=Array(Tt),Gt=0;Gt<Tt;Gt++)Mt[Gt]=arguments[Gt+2];yt.children=Mt}if(I&&I.defaultProps)for(nt in Tt=I.defaultProps,Tt)yt[nt]===void 0&&(yt[nt]=Tt[nt]);return U(I,wt,yt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(I){return{$$typeof:d,render:I}},ue.isValidElement=J,ue.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ht}},ue.memo=function(I,ut){return{$$typeof:g,type:I,compare:ut===void 0?null:ut}},ue.startTransition=Nt,ue.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ue.use=function(I){return F.H.use(I)},ue.useActionState=function(I,ut,Z){return F.H.useActionState(I,ut,Z)},ue.useCallback=function(I,ut){return F.H.useCallback(I,ut)},ue.useContext=function(I){return F.H.useContext(I)},ue.useDebugValue=function(){},ue.useDeferredValue=function(I,ut){return F.H.useDeferredValue(I,ut)},ue.useEffect=function(I,ut){return F.H.useEffect(I,ut)},ue.useEffectEvent=function(I){return F.H.useEffectEvent(I)},ue.useId=function(){return F.H.useId()},ue.useImperativeHandle=function(I,ut,Z){return F.H.useImperativeHandle(I,ut,Z)},ue.useInsertionEffect=function(I,ut){return F.H.useInsertionEffect(I,ut)},ue.useLayoutEffect=function(I,ut){return F.H.useLayoutEffect(I,ut)},ue.useMemo=function(I,ut){return F.H.useMemo(I,ut)},ue.useOptimistic=function(I,ut){return F.H.useOptimistic(I,ut)},ue.useReducer=function(I,ut,Z){return F.H.useReducer(I,ut,Z)},ue.useRef=function(I){return F.H.useRef(I)},ue.useState=function(I){return F.H.useState(I)},ue.useSyncExternalStore=function(I,ut,Z){return F.H.useSyncExternalStore(I,ut,Z)},ue.useTransition=function(){return F.H.useTransition()},ue.version="19.3.1",ue}var d_;function Hp(){return d_||(d_=1,dd.exports=aE()),dd.exports}var ye=Hp(),pd={exports:{}},dl={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function rE(){return p_||(p_=1,(function(o){function e(Y,q){var X=Y.length;Y.push(q);t:for(;0<X;){var ht=X-1>>>1,dt=Y[ht];if(0<l(dt,q))Y[ht]=q,Y[X]=dt,X=ht;else break t}}function i(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var q=Y[0],X=Y.pop();if(X!==q){Y[0]=X;t:for(var ht=0,dt=Y.length,Nt=dt>>>1;ht<Nt;){var Xt=2*(ht+1)-1,oe=Y[Xt],I=Xt+1,ut=Y[I];if(0>l(oe,X))I<dt&&0>l(ut,oe)?(Y[ht]=ut,Y[I]=X,ht=I):(Y[ht]=oe,Y[Xt]=X,ht=Xt);else if(I<dt&&0>l(ut,X))Y[ht]=ut,Y[I]=X,ht=I;else break t}}return q}function l(Y,q){var X=Y.sortIndex-q.sortIndex;return X!==0?X:Y.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],g=[],_=1,m=null,y=3,S=!1,E=!1,C=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function A(Y){for(var q=i(g);q!==null;){if(q.callback===null)s(g);else if(q.startTime<=Y)s(g),q.sortIndex=q.expirationTime,e(p,q);else break;q=i(g)}}function O(Y){if(C=!1,A(Y),!E)if(i(p)!==null)E=!0,z||(z=!0,J());else{var q=i(g);q!==null&&lt(O,q.startTime-Y)}}var z=!1,P=-1,F=5,w=-1;function U(){return M?!0:!(o.unstable_now()-w<F)}function H(){if(M=!1,z){var Y=o.unstable_now();w=Y;var q=!0;try{t:{E=!1,C&&(C=!1,R(P),P=-1),S=!0;var X=y;try{e:{for(A(Y),m=i(p);m!==null&&!(m.expirationTime>Y&&U());){var ht=m.callback;if(typeof ht=="function"){m.callback=null,y=m.priorityLevel;var dt=ht(m.expirationTime<=Y);if(Y=o.unstable_now(),typeof dt=="function"){m.callback=dt,A(Y),q=!0;break e}m===i(p)&&s(p),A(Y)}else s(p);m=i(p)}if(m!==null)q=!0;else{var Nt=i(g);Nt!==null&&lt(O,Nt.startTime-Y),q=!1}}break t}finally{m=null,y=X,S=!1}q=void 0}}finally{q?J():z=!1}}}var J;if(typeof N=="function")J=function(){N(H)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,mt=et.port2;et.port1.onmessage=H,J=function(){mt.postMessage(null)}}else J=function(){v(H,0)};function lt(Y,q){P=v(function(){Y(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(Y){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var X=y;y=q;try{return Y()}finally{y=X}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(Y,q){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var X=y;y=Y;try{return q()}finally{y=X}},o.unstable_scheduleCallback=function(Y,q,X){var ht=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ht+X:ht):X=ht,Y){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=X+dt,Y={id:_++,callback:q,priorityLevel:Y,startTime:X,expirationTime:dt,sortIndex:-1},X>ht?(Y.sortIndex=X,e(g,Y),i(p)===null&&Y===i(g)&&(C?(R(P),P=-1):C=!0,lt(O,X-ht))):(Y.sortIndex=dt,e(p,Y),E||S||(E=!0,z||(z=!0,J()))),Y},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(Y){var q=y;return function(){var X=y;y=q;try{return Y.apply(this,arguments)}finally{y=X}}}})(gd)),gd}var m_;function sE(){return m_||(m_=1,md.exports=rE()),md.exports}var vd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function oE(){if(g_)return Ln;g_=1;var o=Hp();function e(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,m,y){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:_,containerInfo:m,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.browser=function(_){return{$$typeof:c,_reason:_}},Ln.createPortal=function(_,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(_,m,null,y)},Ln.flushSync=function(_){var m=p.T,y=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=m,s.p=y,s.d.f()}},Ln.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(_,m))},Ln.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Ln.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var y=m.as,S=g(y,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?s.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:C}):y==="script"&&s.d.X(_,{crossOrigin:S,integrity:E,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=g(m.as,m.crossOrigin);s.d.M(_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(_)},Ln.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,S=g(y,m.crossOrigin);s.d.L(_,y,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(_,m){if(typeof _=="string")if(m){var y=g(m.as,m.crossOrigin);s.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(_)},Ln.requestFormReset=function(_){s.d.r(_)},Ln.unstable_batchedUpdates=function(_,m){return _(m)},Ln.useFormState=function(_,m,y){return p.H.useFormState(_,m,y)},Ln.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ln.version="19.3.1",Ln}var v_;function lE(){if(v_)return vd.exports;v_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),vd.exports=oE(),vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function uE(){if(__)return dl;__=1;var o=sE(),e=Hp(),i=lE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===r)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var x=!1,T=u.child;T;){if(T===a){x=!0,a=u,r=f;break}if(T===r){x=!0,r=u,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,r=u;break}if(T===r){x=!0,r=f,a=u;break}T=T.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,r,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,r,u,f))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=y(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var v=null,R=null;function N(t,n,a){return t===a?!0:t===n?(v=t,!0):!1}function A(t,n,a){return t===a?(R=t,!1):t===n?(R!==null&&(v=t),!0):!1}function O(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function z(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var f=n;f;f=a(f))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,F=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),mt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),ht=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),Nt=Symbol.for("react.activity"),Xt=Symbol.for("react.legacy_hidden"),oe=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),ut=Symbol.for("react.recoverable"),Z=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Symbol.for("react.client.reference");function wt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===yt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case et:return"Profiler";case J:return"StrictMode";case q:return"Suspense";case X:return"SuspenseList";case Nt:return"Activity";case I:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case U:return"Portal";case lt:return t.displayName||"Context";case mt:return(t._context.displayName||"Context")+".Consumer";case Y:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ht:return n=t.displayName||null,n!==null?n:wt(t.type)||"Memo";case dt:n=t._payload,t=t._init;try{return wt(t(n))}catch{}}return null}var Tt=Array.isArray,Mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},Le=[],re=-1;function Qt(t){return{current:t}}function Lt(t){0>re||(t.current=Le[re],Le[re]=null,re--)}function ne(t,n){re++,Le[re]=t.current,t.current=n}var Ft=Qt(null),le=Qt(null),Ie=Qt(null),Ye=Qt(null);function D(t,n){switch(ne(Ie,n),ne(le,t),ne(Ft,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?xv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=xv(n),t=yv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ft),ne(Ft,t)}function b(){Lt(Ft),Lt(le),Lt(Ie)}function it(t){var n=t.memoizedState;n!==null&&(Is._currentValue=n.memoizedState,ne(Ye,t)),n=Ft.current;var a=yv(n,t.type);n!==a&&(ne(le,t),ne(Ft,a))}function pt(t){le.current===t&&(Lt(Ft),Lt(le)),Ye.current===t&&(Lt(Ye),Is._currentValue=G)}var St,gt;function Yt(t){if(St===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);St=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+t+gt}var Ct=!1;function Zt(t,n){if(!t||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(Ot){var W=Ot}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(Ot){W=Ot}_t=!1;try{var rt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new t}finally{_t&&(rt!==void 0?Object.defineProperty(t.prototype,"props",rt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){W=Ot}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(Ot){if(Ot&&W&&typeof Ot.stack=="string")return[Ot.stack,W.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var B=x.split(`
`),K=T.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===K.length)for(r=B.length-1,u=K.length-1;1<=r&&0<=u&&B[r]!==K[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==K[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==K[u]){var st=`
`+B[r].replace(" at new "," at ");return t.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",t.displayName)),st}while(1<=r&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Yt(a):""}function Jt(t,n){switch(t.tag){case 26:case 27:case 5:return Yt(t.type);case 16:return Yt("Lazy");case 13:return t.child!==n&&n!==null?Yt("Suspense Fallback"):Yt("Suspense");case 19:return Yt("SuspenseList");case 0:case 15:return Zt(t.type,!1);case 11:return Zt(t.type.render,!1);case 1:return Zt(t.type,!0);case 31:return Yt("Activity");case 30:return Yt("ViewTransition");default:return""}}function At(t){try{var n="",a=null;do n+=Jt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Pt=Object.prototype.hasOwnProperty,ae=o.unstable_scheduleCallback,Kt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,de=o.unstable_requestPaint,k=o.unstable_now,Rt=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,kt=o.unstable_UserBlockingPriority,Et=o.unstable_NormalPriority,xt=o.unstable_LowPriority,jt=o.unstable_IdlePriority,he=o.log,qe=o.unstable_setDisableYieldValue,Te=null,en=null;function vn(t){if(typeof he=="function"&&qe(t),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(Te,t)}catch{}}var On=Math.clz32?Math.clz32:Ll,oa=Math.log,Mo=Math.LN2;function Ll(t){return t>>>=0,t===0?32:31-(oa(t)/Mo|0)|0}var pr=256,la=262144,mr=4194304;function vi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?u=vi(r):(x&=T,x!==0?u=vi(x):a||(a=T&~t,a!==0&&(u=vi(a))))):(T=r&~f,T!==0?u=vi(T):x!==0?u=vi(x):a||(a=r&~t,a!==0&&(u=vi(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Na(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ol(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-On(a),u=1<<r;n|=t[r],a&=~u}return n}function Fc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pl(){var t=mr;return mr<<=1,(mr&62914560)===0&&(mr=4194304),t}function Eo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hc(t,n,a,r,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,K=t.hiddenUpdates;for(a=x&~a;0<a;){var st=31-On(a),_t=1<<st;T[st]=0,B[st]=-1;var W=K[st];if(W!==null)for(K[st]=null,st=0;st<W.length;st++){var rt=W[st];rt!==null&&(rt.lane&=-536870913)}a&=~_t}r!==0&&L(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function L(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-On(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function $(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-On(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function ct(t,n){var a=n&-n;return a=(a&42)!==0?1:ft(a),(a&(t.suspendedLanes|n))!==0?0:a}function ft(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function tt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Gt.p;return t!==0?t:(t=window.event,t===void 0?32:i_(t.type))}function It(t,n){var a=Gt.p;try{return Gt.p=t,n()}finally{Gt.p=a}}var Ht=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ht,qt="__reactProps$"+Ht,ie="__reactContainer$"+Ht,te="__reactEvents$"+Ht,Se="__reactListeners$"+Ht,Be="__reactHandles$"+Ht,$e="__reactResources$"+Ht,Oe="__reactMarker$"+Ht,De="__reactLoad$"+Ht;function ee(t){delete t[Dt],delete t[qt],delete t[Se],delete t[Be]}function Pe(t){var n;if(n=t[Dt])return n;for(var a=t.parentNode;a;){if(n=a[ie]||a[Dt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Iv(t);t!==null;){if(a=t[Dt])return a;t=Iv(t)}return n}t=a,a=t.parentNode}return null}function _e(t){if(t=t[Dt]||t[ie]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function _n(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ai(t){var n=t[$e];return n||(n=t[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ue(t){t[Oe]=!0}function La(t){t[De]=void 0}var Ze=new Set,kn={};function cn(t,n){an(t,n),an(t+"Capture",n)}function an(t,n){for(kn[t]=n,t=0;t<n.length;t++)Ze.add(n[t])}var Pn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ts={},ki={};function xy(t){return Pt.call(ki,t)?!0:Pt.call(ts,t)?!1:Pn.test(t)?ki[t]=!0:(ts[t]=!0,!1)}var Ne=!1;function rm(){var t=Ne;return Ne=!1,t}function zl(t,n,a){if(xy(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Il(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ua(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ri(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function yy(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Gc(t){if(!t._valueTracker){var n=sm(t)?"checked":"value";t._valueTracker=yy(t,n,""+t[n])}}function om(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=sm(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var Sy=/[\n"\\]/g;function _i(t){return t.replace(Sy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vc(t,n,a,r,u,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ri(n)):t.value!==""+ri(n)&&(t.value=""+ri(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?x==="number"&&t.value==n?kc(t,ri(t.value)):kc(t,ri(n)):a!=null?kc(t,ri(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ri(T):t.removeAttribute("name")}function lm(t,n,a,r,u,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Gc(t);return}a=a!=null?""+ri(a):"",n=n!=null?""+ri(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Gc(t)}function kc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function es(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ri(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function um(t,n,a){if(n!=null&&(n=""+ri(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ri(a):""}function cm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Tt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ri(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Gc(t)}function ns(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var My=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||My.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function hm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ne=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(fm(t,u,r),Ne=!0)}else for(var f in n)n.hasOwnProperty(f)&&fm(t,f,n[f])}function Xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ey=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ty=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bl(t){return Ty.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var Yc=null;function qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var is=null,as=null;function dm(t){var n=_e(t);if(n&&(t=n.stateNode)){var a=t[qt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Vc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_i(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[qt]||null;if(!u)throw Error(s(90));Vc(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&om(r)}break t;case"textarea":um(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&es(t,!!a.multiple,n,!1)}}}var Wc=!1;function pm(t,n,a){if(Wc)return t(n,a);Wc=!0;try{var r=t(n);return r}finally{if(Wc=!1,(is!==null||as!==null)&&(Bu(),is&&(n=is,t=as,as=is=null,dm(n),t)))for(n=0;n<t.length;n++)dm(t[n])}}function To(t,n){var a=t.stateNode;if(a===null)return null;var r=a[qt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=!1;if(ca)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){jc=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{jc=!1}var Oa=null,Zc=null,Fl=null;function mm(){if(Fl)return Fl;var t,n=Zc,a=n.length,r,u="value"in Oa?Oa.value:Oa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(r=1;r<=x&&n[a-r]===u[f-r];r++);return Fl=u.slice(t,1<r?1-r:void 0)}function Hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function gm(){return!1}function Xn(t){function n(a,r,u,f,x){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Gl:gm,this.isPropagationStopped=gm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),n}var Pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vl=Xn(Pa),Ao=P({},Pa,{view:0,detail:0}),by=Xn(Ao),Qc,Kc,Ro,kl=P({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(Qc=t.screenX-Ro.screenX,Kc=t.screenY-Ro.screenY):Kc=Qc=0,Ro=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),vm=Xn(kl),Ay=P({},kl,{dataTransfer:0}),Ry=Xn(Ay),Cy=P({},Ao,{relatedTarget:0}),Jc=Xn(Cy),wy=P({},Pa,{animationName:0,elapsedTime:0,pseudoElement:0}),Dy=Xn(wy),Uy=P({},Pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ny=Xn(Uy),Ly=P({},Pa,{data:0}),_m=Xn(Ly),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=zy[t])?!!n[t]:!1}function $c(){return Iy}var By=P({},Ao,{key:function(t){if(t.key){var n=Oy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Py[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$c,charCode:function(t){return t.type==="keypress"?Hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fy=Xn(By),Hy=P({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=Xn(Hy),Gy=P({},Pa,{submitter:0}),Vy=Xn(Gy),ky=P({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$c}),Xy=Xn(ky),Yy=P({},Pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),qy=Xn(Yy),Wy=P({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=Xn(Wy),Zy=P({},Pa,{newState:0,oldState:0,source:0}),Qy=Xn(Zy),Ky=[9,13,27,32],tf=ca&&"CompositionEvent"in window,Co=null;ca&&"documentMode"in document&&(Co=document.documentMode);var Jy=ca&&"TextEvent"in window&&!Co,ym=ca&&(!tf||Co&&8<Co&&11>=Co),Sm=" ",Mm=!1;function Em(t,n){switch(t){case"keyup":return Ky.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function $y(t,n){switch(t){case"compositionend":return Tm(n);case"keypress":return n.which!==32?null:(Mm=!0,Sm);case"textInput":return t=n.data,t===Sm&&Mm?null:t;default:return null}}function tS(t,n){if(rs)return t==="compositionend"||!tf&&Em(t,n)?(t=mm(),Fl=Zc=Oa=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ym&&n.locale!=="ko"?null:n.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!eS[t.type]:n==="textarea"}function Am(t,n,a,r){is?as?as.push(r):as=[r]:is=r,n=Xu(n,"onChange"),0<n.length&&(a=new Vl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var wo=null,Do=null;function nS(t){dv(t,0)}function Xl(t){var n=_n(t);if(om(n))return t}function Rm(t,n){if(t==="change")return n}var Cm=!1;if(ca){var ef;if(ca){var nf="oninput"in document;if(!nf){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),nf=typeof wm.oninput=="function"}ef=nf}else ef=!1;Cm=ef&&(!document.documentMode||9<document.documentMode)}function Dm(){wo&&(wo.detachEvent("onpropertychange",Um),Do=wo=null)}function Um(t){if(t.propertyName==="value"&&Xl(Do)){var n=[];Am(n,Do,t,qc(t)),pm(nS,n)}}function iS(t,n,a){t==="focusin"?(Dm(),wo=n,Do=a,wo.attachEvent("onpropertychange",Um)):t==="focusout"&&Dm()}function aS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Do)}function rS(t,n){if(t==="click")return Xl(n)}function sS(t,n){if(t==="input"||t==="change")return Xl(n)}function oS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:oS;function Uo(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Pt.call(n,u)||!si(t[u],n[u]))return!1}return!0}function af(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lm(t,n){var a=Nm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Nm(a)}}function Om(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Om(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Pm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=af(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=af(t.document)}return n}function rf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var lS=ca&&"documentMode"in document&&11>=document.documentMode,ss=null,sf=null,No=null,of=!1;function zm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;of||ss==null||ss!==af(r)||(r=ss,"selectionStart"in r&&rf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),No&&Uo(No,r)||(No=r,r=Xu(sf,"onSelect"),0<r.length&&(n=new Vl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ss)))}function _r(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var os={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},lf={},Im={};ca&&(Im=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function xr(t){if(lf[t])return lf[t];if(!os[t])return t;var n=os[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Im)return lf[t]=n[a];return t}var Bm=xr("animationend"),Fm=xr("animationiteration"),Hm=xr("animationstart"),uS=xr("transitionrun"),cS=xr("transitionstart"),fS=xr("transitioncancel"),Gm=xr("transitionend"),Vm=new Map,uf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uf.push("scrollEnd");function wi(t,n){Vm.set(t,n),cn(n,[t])}var hS=0;function fa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Li.identifierPrefix;var a=hS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function km(t){if(t==null||typeof t=="string")return t;var n=null,a=Rs;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ha(t,n){return t=km(t),n=km(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xi=[],ls=0,cf=0;function ql(){for(var t=ls,n=cf=ls=0;n<t;){var a=xi[n];xi[n++]=null;var r=xi[n];xi[n++]=null;var u=xi[n];xi[n++]=null;var f=xi[n];if(xi[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}f!==0&&Xm(a,u,f)}}function Wl(t,n,a,r){xi[ls++]=t,xi[ls++]=n,xi[ls++]=a,xi[ls++]=r,cf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function ff(t,n,a,r){return Wl(t,n,a,r),jl(t)}function yr(t,n){return Wl(t,null,null,n),jl(t)}function Xm(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-On(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function jl(t){if(50<tl)throw tl=0,Iu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var us={};function dS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,r){return new dS(t,n,a,r)}function hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function da(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ym(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Zl(t,n,a,r,u,f){var x=0;if(r=t,typeof r=="function")hf(r)&&(x=1);else if(typeof r=="string")x=GM(t,a,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Nt:return t=Qn(31,a,n,u),t.elementType=Nt,t.lanes=f,t;case H:return Sr(a.children,u,f,n);case J:x=8,u|=24;break;case et:return t=Qn(12,a,n,u|2),t.elementType=et,t.lanes=f,t;case q:return t=Qn(13,a,n,u),t.elementType=q,t.lanes=f,t;case X:return t=Qn(19,a,n,u),t.elementType=X,t.lanes=f,t;case Xt:case I:return t=u|32,t=Qn(30,a,n,t),t.elementType=I,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case lt:x=10;break t;case mt:x=9;break t;case Y:x=11;break t;case ht:x=14;break t;case dt:x=16,r=null;break t}x=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Qn(x,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function Sr(t,n,a,r){return t=Qn(7,t,r,n),t.lanes=a,t}function df(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function qm(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function pf(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Wm=new WeakMap;function yi(t,n){if(typeof t=="object"&&t!==null){var a=Wm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:At(n)},Wm.set(t,n),n)}return{value:t,source:n,stack:At(n)}}var cs=[],fs=0,Ql=null,Lo=0,Si=[],Mi=0,za=null,Yi=1,qi="";function pa(t,n){cs[fs++]=Lo,cs[fs++]=Ql,Ql=t,Lo=n}function jm(t,n,a){Si[Mi++]=Yi,Si[Mi++]=qi,Si[Mi++]=za,za=t;var r=Yi;t=qi;var u=32-On(r)-1;r&=~(1<<u),a+=1;var f=32-On(n)+u;if(30<f){var x=u-u%5;f=(r&(1<<x)-1).toString(32),r>>=x,u-=x,Yi=1<<32-On(n)+u|a<<u|r,qi=f+t}else Yi=1<<f|a<<u|r,qi=t}function Kl(t){t.return!==null&&(pa(t,1),jm(t,1,0))}function mf(t){for(;t===Ql;)Ql=cs[--fs],cs[fs]=null,Lo=cs[--fs],cs[fs]=null;for(;t===za;)za=Si[--Mi],Si[Mi]=null,qi=Si[--Mi],Si[Mi]=null,Yi=Si[--Mi],Si[Mi]=null}function Zm(t,n){Si[Mi++]=Yi,Si[Mi++]=qi,Si[Mi++]=za,Yi=n.id,qi=n.overflow,za=t}var En=null,Qe=null,xe=!1,Ia=null,Ei=!1,gf=Error(s(519));function Ba(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(yi(n,t)),gf}function Qm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Dt]=t,n[qt]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<nl.length;a++)Ee(nl[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),lm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),cm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||vv(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ba(t,!0)}function Jl(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:En=En.return}}function hs(t){if(t!==En)return!1;if(!xe)return Jl(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qh(t.type,t.memoizedProps)),a=!a),a&&Qe&&Ba(t),Jl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=zv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=zv(t)}else n===27?(n=Qe,tr(t.type)?(t=ed,ed=null,Qe=t):Qe=n):Qe=En?bi(t.stateNode.nextSibling):null;return!0}function Mr(){Qe=En=null,xe=!1}function vf(){var t=Ia;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),Ia=null),t}function Oo(t){Ia===null?Ia=[t]:Ia.push(t)}var _f=Qt(null),Er=null,ma=null;function Fa(t,n,a){ne(_f,n._currentValue),n._currentValue=a}function ga(t){t._currentValue=_f.current,Lt(_f)}function $l(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function xf(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),$l(f.return,a,t),r||(x=null);break t}f=T.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),$l(x,a,t),x=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,x=u.alternate,x!==null&&(x.lanes|=a),$l(u.return,a,t),x=u.child,x=x!==null?x.sibling:null):x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Tr(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var T=u.type;si(u.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(u===Ye.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Is):t=[Is])}u=u.return}return t!==null&&xf(n,t,a,r),n.flags|=262144,t!==null}function tu(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){Er=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Km(Er,t)}function eu(t,n){return Er===null&&br(t),Km(t,n)}function Km(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ma===null){if(t===null)throw Error(s(308));ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ma=ma.next=n;return a}var pS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},mS=o.unstable_scheduleCallback,gS=o.unstable_NormalPriority,fn={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yf(){return{controller:new pS,data:new Map,refCount:0}}function Po(t){t.refCount--,t.refCount===0&&mS(gS,function(){t.controller.abort()})}function Jm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var zo=null;function vS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Io=null,Sf=0,Ar=0,ds=null;function _S(t,n){if(Io===null){var a=Io=[];Sf=0,Ar=Ih(),ds={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Sf++,n.then($m,$m),n}function $m(){if(--Sf===0&&(zo=null,Io!==null)){ds!==null&&(ds.status="fulfilled");var t=Io;Io=null,Ar=0,ds=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function xS(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var tg=Mt.S;Mt.S=function(t,n){if(q0=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&_S(t,n),zo!==null)for(var a=Us;a!==null;)Jm(a,zo),a=a.next;if(a=t.types,a!==null){for(var r=Us;r!==null;)Jm(r,a),r=r.next;if(Ar!==0){r=zo,r===null&&(r=zo=[]);for(var u=0;u<a.length;u++){var f=a[u];r.indexOf(f)===-1&&r.push(f)}}}tg!==null&&tg(t,n)};var Rr=Qt(null);function Mf(){var t=Rr.current;return t!==null?t:je.pooledCache}function nu(t,n){n===null?ne(Rr,Rr.current):ne(Rr,n.pool)}function eg(){var t=Mf();return t===null?null:{parent:fn._currentValue,pool:t}}var ps=Error(s(460)),Ef=Error(s(474)),iu=Error(s(542)),au={then:function(){}};function ng(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ig(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=je,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rg(t),t}throw wr=n,ps}}function Cr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(wr=a,ps):a}}var wr=null;function ag(){if(wr===null)throw Error(s(459));var t=wr;return wr=null,t}function rg(t){if(t===ps||t===iu)throw Error(s(483))}var ms=null,Bo=0;function ru(t){var n=Bo;return Bo+=1,ms===null&&(ms=[]),ig(ms,t,n)}function Ha(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function su(t,n){throw n.$$typeof===F?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function sg(t){function n(Q,V){if(t){var at=Q.deletions;at===null?(Q.deletions=[V],Q.flags|=16):at.push(V)}}function a(Q,V){if(!t)return null;for(;V!==null;)n(Q,V),V=V.sibling;return null}function r(Q){for(var V=new Map;Q!==null;)Q.key===null?V.set(Q.index,Q):V.set(Q.key,Q),Q=Q.sibling;return V}function u(Q,V){return Q=da(Q,V),Q.index=0,Q.sibling=null,Q}function f(Q,V,at){return Q.index=at,t?(at=Q.alternate,at!==null?(at=at.index,at<V?(Q.flags|=2,V):at):(Q.flags|=134217730,V)):(Q.flags|=1048576,V)}function x(Q){return t&&Q.alternate===null&&(Q.flags|=134217730),Q}function T(Q,V,at,vt){return V===null||V.tag!==6?(V=df(at,Q.mode,vt),V.return=Q,V):(V=u(V,at),V.return=Q,V)}function B(Q,V,at,vt){var Vt=at.type;return Vt===H?(Q=st(Q,V,at.props.children,vt,at.key),Ha(Q,at),Q):V!==null&&(V.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===dt&&Cr(Vt)===V.type)?(V=u(V,at.props),Ha(V,at),V.return=Q,V):(V=Zl(at.type,at.key,at.props,null,Q.mode,vt),Ha(V,at),V.return=Q,V)}function K(Q,V,at,vt){return V===null||V.tag!==4||V.stateNode.containerInfo!==at.containerInfo||V.stateNode.implementation!==at.implementation?(V=pf(at,Q.mode,vt),V.return=Q,V):(V=u(V,at.children||[]),V.return=Q,V)}function st(Q,V,at,vt,Vt){return V===null||V.tag!==7?(V=Sr(at,Q.mode,vt,Vt),V.return=Q,V):(V=u(V,at),V.return=Q,V)}function _t(Q,V,at){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=df(""+V,Q.mode,at),V.return=Q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case w:return at=Zl(V.type,V.key,V.props,null,Q.mode,at),Ha(at,V),at.return=Q,at;case U:return V=pf(V,Q.mode,at),V.return=Q,V;case dt:return V=Cr(V),_t(Q,V,at)}if(Tt(V)||nt(V))return V=Sr(V,Q.mode,at,null),V.return=Q,V;if(typeof V.then=="function")return _t(Q,ru(V),at);if(V.$$typeof===lt)return _t(Q,eu(Q,V),at);su(Q,V)}return null}function W(Q,V,at,vt){var Vt=V!==null?V.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return Vt!==null?null:T(Q,V,""+at,vt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case w:return at.key===Vt?B(Q,V,at,vt):null;case U:return at.key===Vt?K(Q,V,at,vt):null;case dt:return at=Cr(at),W(Q,V,at,vt)}if(Tt(at)||nt(at))return Vt!==null?null:st(Q,V,at,vt,null);if(typeof at.then=="function")return W(Q,V,ru(at),vt);if(at.$$typeof===lt)return W(Q,V,eu(Q,at),vt);su(Q,at)}return null}function rt(Q,V,at,vt,Vt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Q=Q.get(at)||null,T(V,Q,""+vt,Vt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case w:return Q=Q.get(vt.key===null?at:vt.key)||null,B(V,Q,vt,Vt);case U:return Q=Q.get(vt.key===null?at:vt.key)||null,K(V,Q,vt,Vt);case dt:return vt=Cr(vt),rt(Q,V,at,vt,Vt)}if(Tt(vt)||nt(vt))return Q=Q.get(at)||null,st(V,Q,vt,Vt,null);if(typeof vt.then=="function")return rt(Q,V,at,ru(vt),Vt);if(vt.$$typeof===lt)return rt(Q,V,at,eu(V,vt),Vt);su(V,vt)}return null}function Ot(Q,V,at,vt){for(var Vt=null,Ae=null,$t=V,se=V=0,pn=null;$t!==null&&se<at.length;se++){$t.index>se?(pn=$t,$t=null):pn=$t.sibling;var Ce=W(Q,$t,at[se],vt);if(Ce===null){$t===null&&($t=pn);break}t&&$t&&Ce.alternate===null&&n(Q,$t),V=f(Ce,V,se),Ae===null?Vt=Ce:Ae.sibling=Ce,Ae=Ce,$t=pn}if(se===at.length)return a(Q,$t),xe&&pa(Q,se),Vt;if($t===null){for(;se<at.length;se++)$t=_t(Q,at[se],vt),$t!==null&&(V=f($t,V,se),Ae===null?Vt=$t:Ae.sibling=$t,Ae=$t);return xe&&pa(Q,se),Vt}for($t=r($t);se<at.length;se++)pn=rt($t,Q,se,at[se],vt),pn!==null&&(t&&(Ce=pn.alternate,Ce!==null&&$t.delete(Ce.key===null?se:Ce.key)),V=f(pn,V,se),Ae===null?Vt=pn:Ae.sibling=pn,Ae=pn);return t&&$t.forEach(function(rr){return n(Q,rr)}),xe&&pa(Q,se),Vt}function Wt(Q,V,at,vt){if(at==null)throw Error(s(151));for(var Vt=null,Ae=null,$t=V,se=V=0,pn=null,Ce=at.next();$t!==null&&!Ce.done;se++,Ce=at.next()){$t.index>se?(pn=$t,$t=null):pn=$t.sibling;var rr=W(Q,$t,Ce.value,vt);if(rr===null){$t===null&&($t=pn);break}t&&$t&&rr.alternate===null&&n(Q,$t),V=f(rr,V,se),Ae===null?Vt=rr:Ae.sibling=rr,Ae=rr,$t=pn}if(Ce.done)return a(Q,$t),xe&&pa(Q,se),Vt;if($t===null){for(;!Ce.done;se++,Ce=at.next())Ce=_t(Q,Ce.value,vt),Ce!==null&&(V=f(Ce,V,se),Ae===null?Vt=Ce:Ae.sibling=Ce,Ae=Ce);return xe&&pa(Q,se),Vt}for($t=r($t);!Ce.done;se++,Ce=at.next())Ce=rt($t,Q,se,Ce.value,vt),Ce!==null&&(t&&(pn=Ce.alternate,pn!==null&&$t.delete(pn.key===null?se:pn.key)),V=f(Ce,V,se),Ae===null?Vt=Ce:Ae.sibling=Ce,Ae=Ce);return t&&$t.forEach(function($M){return n(Q,$M)}),xe&&pa(Q,se),Vt}function me(Q,V,at,vt){if(typeof at=="object"&&at!==null&&at.type===H&&at.key===null&&at.props.ref===void 0&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case w:t:{for(var Vt=at.key;V!==null;){if(V.key===Vt){if(Vt=at.type,Vt===H){if(V.tag===7){a(Q,V.sibling),vt=u(V,at.props.children),Ha(vt,at),vt.return=Q,Q=vt;break t}}else if(V.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===dt&&Cr(Vt)===V.type){a(Q,V.sibling),vt=u(V,at.props),Ha(vt,at),vt.return=Q,Q=vt;break t}a(Q,V);break}else n(Q,V);V=V.sibling}at.type===H?(vt=Sr(at.props.children,Q.mode,vt,at.key),Ha(vt,at),vt.return=Q,Q=vt):(vt=Zl(at.type,at.key,at.props,null,Q.mode,vt),Ha(vt,at),vt.return=Q,Q=vt)}return x(Q);case U:t:{for(Vt=at.key;V!==null;){if(V.key===Vt)if(V.tag===4&&V.stateNode.containerInfo===at.containerInfo&&V.stateNode.implementation===at.implementation){a(Q,V.sibling),vt=u(V,at.children||[]),vt.return=Q,Q=vt;break t}else{a(Q,V);break}else n(Q,V);V=V.sibling}vt=pf(at,Q.mode,vt),vt.return=Q,Q=vt}return x(Q);case dt:return at=Cr(at),me(Q,V,at,vt)}if(Tt(at))return Ot(Q,V,at,vt);if(nt(at)){if(Vt=nt(at),typeof Vt!="function")throw Error(s(150));return at=Vt.call(at),Wt(Q,V,at,vt)}if(typeof at.then=="function")return me(Q,V,ru(at),vt);if(at.$$typeof===lt)return me(Q,V,eu(Q,at),vt);su(Q,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,V!==null&&V.tag===6?(a(Q,V.sibling),vt=u(V,at),vt.return=Q,Q=vt):(a(Q,V),vt=df(at,Q.mode,vt),vt.return=Q,Q=vt),x(Q)):a(Q,V)}return function(Q,V,at,vt){try{Bo=0;var Vt=me(Q,V,at,vt);return ms=null,Vt}catch($t){if($t===ps||$t===iu)throw $t;var Ae=Qn(29,$t,null,Q.mode);return Ae.lanes=vt,Ae.return=Q,Ae}finally{}}}var Dr=sg(!0),og=sg(!1),Ga=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=jl(t),Xm(t,null,a),n}return Wl(t,r,n,a),jl(t)}function Fo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,$(t,a)}}function Af(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Rf=!1;function Ho(){if(Rf){var t=ds;if(t!==null)throw t}}function Go(t,n,a,r){Rf=!1;var u=t.updateQueue;Ga=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,K=B.next;B.next=null,x===null?f=K:x.next=K,x=B;var st=t.alternate;st!==null&&(st=st.updateQueue,T=st.lastBaseUpdate,T!==x&&(T===null?st.firstBaseUpdate=K:T.next=K,st.lastBaseUpdate=B))}if(f!==null){var _t=u.baseState;x=0,st=K=B=null,T=f;do{var W=T.lane&-536870913,rt=W!==T.lane;if(rt?(be&W)===W:(r&W)===W){W!==0&&W===Ar&&(Rf=!0),st!==null&&(st=st.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ot=t,Wt=T;W=n;var me=a;switch(Wt.tag){case 1:if(Ot=Wt.payload,typeof Ot=="function"){_t=Ot.call(me,_t,W);break t}_t=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=Wt.payload,W=typeof Ot=="function"?Ot.call(me,_t,W):Ot,W==null)break t;_t=P({},_t,W);break t;case 2:Ga=!0}}W=T.callback,W!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[W]:rt.push(W))}else rt={lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},st===null?(K=st=rt,B=_t):st=st.next=rt,x|=W;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);st===null&&(B=_t),u.baseState=B,u.firstBaseUpdate=K,u.lastBaseUpdate=st,f===null&&(u.shared.lanes=0),Qa|=x,t.lanes=x,t.memoizedState=_t}}function lg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function ug(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)lg(a[t],n)}var Xa=Qt(null),ou=Qt(0);function cg(t,n){t=Sa,ne(ou,t),ne(Xa,n),Sa=t|n.baseLanes}function Cf(){ne(ou,Sa),ne(Xa,Xa.current)}function wf(){Sa=ou.current,Lt(Xa),Lt(ou)}var wn=Qt(null),zn=null;function Ya(t){var n=t.alternate;ne(Dn,Dn.current&1),ne(wn,t),zn===null&&(n===null||Xa.current!==null||n.memoizedState!==null)&&(zn=t)}function Df(t){ne(Dn,Dn.current),ne(wn,t),zn===null&&(zn=t)}function fg(t){t.tag===22?(ne(Dn,Dn.current),ne(wn,t),zn===null&&(zn=t)):qa()}function qa(){ne(Dn,Dn.current),ne(wn,wn.current)}function oi(t){Lt(wn),zn===t&&(zn=null),Lt(Dn)}var Dn=Qt(0);function Vo(t,n){ne(wn,wn.current),ne(Dn,n)}function Uf(t){Lt(Dn),Lt(wn),zn===t&&(zn=null)}function lu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$h(a)||td(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var va=0,pe=null,We=null,hn=null,uu=!1,gs=!1,Ur=!1,cu=0,ko=0,vs=null,yS=0;function rn(){throw Error(s(321))}function Nf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function Lf(t,n,a,r,u,f){return va=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=t===null||t.memoizedState===null?jg:Zg,Ur=!1,f=a(r,u),Ur=!1,gs&&(f=dg(n,a,r,u)),hg(t),f}function hg(t){Mt.H=vu;var n=We!==null&&We.next!==null;if(va=0,hn=We=pe=null,uu=!1,ko=0,vs=null,n)throw Error(s(300));t===null||dn||(t=t.dependencies,t!==null&&tu(t)&&(dn=!0))}function dg(t,n,a,r){pe=t;var u=0;do{if(gs&&(vs=null),ko=0,gs=!1,25<=u)throw Error(s(301));if(u+=1,hn=We=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Mt.H=CS,f=n(a,r)}while(gs);return f}function SS(){var t=Mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Xo(n):n,t=t.useState()[0],(We!==null?We.memoizedState:null)!==t&&(pe.flags|=1024),n}function Of(){var t=cu!==0;return cu=0,t}function Pf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zf(t){if(uu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}uu=!1}va=0,hn=We=pe=null,gs=!1,ko=cu=0,vs=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?pe.memoizedState=hn=t:hn=hn.next=t,hn}function un(){if(We===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var n=hn===null?pe.memoizedState:hn.next;if(n!==null)hn=n,We=t;else{if(t===null)throw pe.alternate===null?Error(s(467)):Error(s(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},hn===null?pe.memoizedState=hn=t:hn=hn.next=t}return hn}function fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(t){var n=ko;return ko+=1,vs===null&&(vs=[]),t=ig(vs,t,n),n=pe,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?jg:Zg),t}function hu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xo(t);if(t.$$typeof===ut)return;if(t.$$typeof===lt)return Cn(t)}throw Error(s(438,String(t)))}function If(t){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fu(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=oe;return n.index++,a}function _a(t,n){return typeof n=="function"?n(t):n}function du(t){var n=un();return Bf(n,We,t)}function Bf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=x=null,B=null,K=n,st=!1;do{var _t=K.lane&-536870913;if(_t!==K.lane?(be&_t)===_t:(va&_t)===_t){var W=K.revertLane;if(W===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),_t===Ar&&(st=!0);else if((va&W)===W){K=K.next,W===Ar&&(st=!0);continue}else _t={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(T=B=_t,x=f):B=B.next=_t,pe.lanes|=W,Qa|=W;_t=K.action,Ur&&a(f,_t),f=K.hasEagerState?K.eagerState:a(f,_t)}else W={lane:_t,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},B===null?(T=B=W,x=f):B=B.next=W,pe.lanes|=_t,Qa|=_t;K=K.next}while(K!==null&&K!==n);if(B===null?x=f:B.next=T,!si(f,t.memoizedState)&&(dn=!0,st&&(a=ds,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Ff(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);si(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function pg(t,n,a){var r=pe,u=un(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!si((We||u).memoizedState,a);if(x&&(u.memoizedState=a,dn=!0),u=u.queue,Vf(vg.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||x||hn!==null&&(hn.memoizedState.tag&1)!==0,_s(t?9:8,{destroy:void 0},gg.bind(null,r,u,a,n),null),t){if(r.flags|=2048,je===null)throw Error(s(349));f||(va&127)!==0||mg(r,n,a)}return a}function mg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=fu(),pe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function gg(t,n,a,r){n.value=a,n.getSnapshot=r,_g(n)&&xg(t)}function vg(t,n,a){return a(function(){_g(n)&&xg(t)})}function _g(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function xg(t){var n=yr(t,2);n!==null&&ti(n,t,2)}function Hf(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),Ur){vn(!0);try{a()}finally{vn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},n}function yg(t,n,a,r){return t.baseState=a,Bf(t,We,typeof r=="function"?r:_a)}function MS(t,n,a,r,u){if(gu(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};Mt.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Sg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Sg(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=Mt.T,x={};x.types=f!==null?f.types:null,Mt.T=x;try{var T=a(u,r),B=Mt.S;B!==null&&B(x,T),Mg(t,n,T)}catch(K){Gf(t,n,K)}finally{f!==null&&x.types!==null&&(f.types=x.types),Mt.T=f}}else try{f=a(u,r),Mg(t,n,f)}catch(K){Gf(t,n,K)}}function Mg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Eg(t,n,r)},function(r){return Gf(t,n,r)}):Eg(t,n,a)}function Eg(t,n,a){n.status="fulfilled",n.value=a,Tg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Sg(t,a)))}function Gf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Tg(n),n=n.next;while(n!==r)}t.action=null}function Tg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function bg(t,n){return n}function Ag(t,n){if(xe){var a=je.formState;if(a!==null){t:{var r=pe;if(xe){if(Qe){e:{for(var u=Qe,f=Ei;u.nodeType!==8;){if(!f){u=null;break e}if(u=bi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qe=bi(u.nextSibling),r=u.data==="F!";break t}}Ba(r)}r=!1}r&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bg,lastRenderedState:n},a.queue=r,a=Yg.bind(null,pe,r),r.dispatch=a,r=Hf(!1),f=Wf.bind(null,pe,!1,r.queue),r=Yn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=MS.bind(null,pe,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function Rg(t){var n=un();return Cg(n,We,t)}function Cg(t,n,a){if(n=Bf(t,n,bg)[0],t=du(_a)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Xo(n)}catch(x){throw x===ps?iu:x}else r=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,_s(9,{destroy:void 0},ES.bind(null,u,a),null)),[r,f,t]}function ES(t,n){t.action=n}function wg(t){var n=un(),a=We;if(a!==null)return Cg(n,a,t);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function _s(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=pe.updateQueue,n===null&&(n=fu(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Dg(){return un().memoizedState}function pu(t,n,a,r){var u=Yn();pe.flags|=t,u.memoizedState=_s(1|n,{destroy:void 0},a,r===void 0?null:r)}function mu(t,n,a,r){var u=un();r=r===void 0?null:r;var f=u.memoizedState.inst;We!==null&&r!==null&&Nf(r,We.memoizedState.deps)?u.memoizedState=_s(n,f,a,r):(pe.flags|=t,u.memoizedState=_s(1|n,f,a,r))}function Ug(t,n){pu(8390656,8,t,n)}function Vf(t,n){mu(2048,8,t,n)}function TS(t){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=fu(),pe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ng(t){var n=un().memoizedState;return TS({ref:n,nextImpl:t}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Lg(t,n){return mu(4,2,t,n)}function Og(t,n){return mu(4,4,t,n)}function Pg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function zg(t,n,a){a=a!=null?a.concat([t]):null,mu(4,4,Pg.bind(null,n,t),a)}function kf(){}function Ig(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Nf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Bg(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Nf(n,r[1]))return r[0];if(r=t(),Ur){vn(!0);try{t()}finally{vn(!1)}}return a.memoizedState=[r,n],r}function Xf(t,n,a){return a===void 0||(va&1073741824)!==0&&(be&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=j0(),pe.lanes|=t,Qa|=t,a)}function Fg(t,n,a,r){return si(a,n)?a:Xa.current!==null?(t=Xf(t,a,r),si(t,n)||(dn=!0),t):(va&106)===0||(va&1073741824)!==0&&(be&261930)===0?(dn=!0,t.memoizedState=a):(t=j0(),pe.lanes|=t,Qa|=t,n)}function Hg(t,n,a,r,u){var f=Gt.p;Gt.p=f!==0&&8>f?f:8;var x=Mt.T,T={};T.types=x!==null?x.types:null,Mt.T=T,Wf(t,!1,n,a);try{var B=u(),K=Mt.S;if(K!==null&&K(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var st=xS(B,r);Yo(t,n,st,fi(t))}else Yo(t,n,r,fi(t))}catch(_t){Yo(t,n,{then:function(){},status:"rejected",reason:_t},fi())}finally{Gt.p=f,x!==null&&T.types!==null&&(x.types=T.types),Mt.T=x}}function bS(){}function Yf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Gg(t).queue;Hg(t,u,n,G,a===null?bS:function(){return Vg(t),a(r)})}function Gg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:G},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Vg(t){var n=Gg(t);n.next===null&&(n=t.alternate.memoizedState),Yo(t,n.next.queue,{},fi())}function qf(){return Cn(Is)}function kg(){return un().memoizedState}function Xg(){return un().memoizedState}function AS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=Va(a);var r=ka(n,t,a);r!==null&&(ti(r,n,a),Fo(r,n,a)),n={cache:yf()},t.payload=n;return}n=n.return}}function RS(t,n,a){var r=fi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gu(t)?qg(n,a):(a=ff(t,n,a,r),a!==null&&(ti(a,t,r),Wg(a,n,r)))}function Yg(t,n,a){var r=fi();Yo(t,n,a,r)}function Yo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gu(t))qg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(u.hasEagerState=!0,u.eagerState=T,si(T,x))return Wl(t,n,u,0),je===null&&ql(),!1}catch{}finally{}if(a=ff(t,n,u,r),a!==null)return ti(a,t,r),Wg(a,n,r),!0}return!1}function Wf(t,n,a,r){if(r={lane:2,revertLane:Ih(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gu(t)){if(n)throw Error(s(479))}else n=ff(t,a,r,2),n!==null&&ti(n,t,2)}function gu(t){var n=t.alternate;return t===pe||n!==null&&n===pe}function qg(t,n){gs=uu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Wg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,$(t,a)}}var vu={readContext:Cn,use:hu,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn,useEffectEvent:rn},jg={readContext:Cn,use:hu,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Ug,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,pu(4194308,4,Pg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return pu(4194308,4,t,n)},useInsertionEffect:function(t,n){pu(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var r=t();if(Ur){vn(!0);try{t()}finally{vn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Yn();if(a!==void 0){var u=a(n);if(Ur){vn(!0);try{a(n)}finally{vn(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=RS.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=Hf(t);var n=t.queue,a=Yg.bind(null,pe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:kf,useDeferredValue:function(t,n){var a=Yn();return Xf(a,t,n)},useTransition:function(){var t=Hf(!1);return t=Hg.bind(null,pe,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=pe,u=Yn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(be&127)!==0||mg(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Ug(vg.bind(null,r,f,t),[t]),r.flags|=2048,_s(9,{destroy:void 0},gg.bind(null,r,f,a,n),null),a},useId:function(){var t=Yn(),n=je.identifierPrefix;if(xe){var a=qi,r=Yi;a=(r&~(1<<32-On(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=cu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qf,useFormState:Ag,useActionState:Ag,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wf.bind(null,pe,!0,a),a.dispatch=n,[t,n]},useMemoCache:If,useCacheRefresh:function(){return Yn().memoizedState=AS.bind(null,pe)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zg={readContext:Cn,use:hu,useCallback:Ig,useContext:Cn,useEffect:Vf,useImperativeHandle:zg,useInsertionEffect:Lg,useLayoutEffect:Og,useMemo:Bg,useReducer:du,useRef:Dg,useState:function(){return du(_a)},useDebugValue:kf,useDeferredValue:function(t,n){var a=un();return Fg(a,We.memoizedState,t,n)},useTransition:function(){var t=du(_a)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:pg,useId:kg,useHostTransitionStatus:qf,useFormState:Rg,useActionState:Rg,useOptimistic:function(t,n){var a=un();return yg(a,We,t,n)},useMemoCache:If,useCacheRefresh:Xg,useEffectEvent:Ng},CS={readContext:Cn,use:hu,useCallback:Ig,useContext:Cn,useEffect:Vf,useImperativeHandle:zg,useInsertionEffect:Lg,useLayoutEffect:Og,useMemo:Bg,useReducer:Ff,useRef:Dg,useState:function(){return Ff(_a)},useDebugValue:kf,useDeferredValue:function(t,n){var a=un();return We===null?Xf(a,t,n):Fg(a,We.memoizedState,t,n)},useTransition:function(){var t=Ff(_a)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:pg,useId:kg,useHostTransitionStatus:qf,useFormState:wg,useActionState:wg,useOptimistic:function(t,n){var a=un();return We!==null?yg(a,We,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:If,useCacheRefresh:Xg,useEffectEvent:Ng};function jf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=fi(),u=Va(r);u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,r),n!==null&&(ti(n,t,r),Fo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=fi(),u=Va(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,r),n!==null&&(ti(n,t,r),Fo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),r=Va(a);r.tag=2,n!=null&&(r.callback=n),n=ka(t,r,a),n!==null&&(ti(n,t,a),Fo(n,t,a))}};function Qg(t,n,a,r,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Uo(a,r)||!Uo(u,f):!0}function Kg(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Zf.enqueueReplaceState(n,n.state,null)}function Nr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Jg(t){Yl(t)}function $g(t){console.error(t)}function t0(t){Yl(t)}function _u(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function e0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qf(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){_u(t,n)},a}function n0(t){return t=Va(t),t.tag=3,t}function i0(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){e0(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){e0(n,a,r),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function wS(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Tr(n,a,u,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return zn===null?Fu():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===au?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Oh(t,r,u)),!1;case 22:return a.flags|=65536,r===au?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Oh(t,r,u)),!1}throw Error(s(435,a.tag))}return Oh(t,r,u),Fu(),!1}if(xe)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==gf&&(t=Error(s(422),{cause:r}),Oo(yi(t,a)))):(r!==gf&&(n=Error(s(423),{cause:r}),Oo(yi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=yi(r,a),u=Qf(t.stateNode,r,u),Af(t,u),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:r});if(f=yi(f,a),$o===null?$o=[f]:$o.push(f),sn!==4&&(sn=2),n===null)return!0;r=yi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Qf(a.stateNode,r,t),Af(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ka===null||!Ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=n0(u),i0(u,t,a,r),Af(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Kf=Error(s(461)),dn=!1;function xn(t,n,a,r){n.child=t===null?og(n,null,a,r):Dr(n,t.child,a,r)}function a0(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var T in r)T!=="ref"&&(x[T]=r[T])}else x=r;return br(n),r=Lf(t,n,a,x,f,u),T=Of(),t!==null&&!dn?(Pf(t,n,u),xa(t,n,u)):(xe&&T&&Kl(n),n.flags|=1,xn(t,n,r,u),n.child)}function r0(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!hf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,s0(t,n,f,r,u)):(t=Zl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!rh(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(x,r)&&t.ref===n.ref)return xa(t,n,u)}return n.flags|=1,t=da(f,r),t.ref=n.ref,t.return=n,n.child=t}function s0(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(Uo(f,r)&&t.ref===n.ref)if(dn=!1,n.pendingProps=r=f,rh(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,xa(t,n,u)}return Jf(t,n,a,r,u)}function o0(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return l0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&nu(n,f!==null?f.cachePool:null),f!==null?cg(n,f):Cf(),fg(n);else return r=n.lanes=536870912,l0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(nu(n,f.cachePool),cg(n,f),qa(),n.memoizedState=null):(t!==null&&nu(n,null),Cf(),qa());return xn(t,n,u,a),n.child}function qo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function l0(t,n,a,r,u){var f=Mf();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&nu(n,null),Cf(),fg(n),t!==null&&Tr(t,n,r,!0),n.childLanes=u,null}function xu(t,n){return n=yu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function u0(t,n,a){return Dr(n,t.child,null,a),t=xu(n,n.pendingProps),t.flags|=2,oi(n),n.memoizedState=null,t}function DS(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=xu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},qo(null,t);if(Df(n),(t=Qe)?(t=Pv(t,Ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=qm(t),a.return=n,n.child=a,En=n,Qe=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return xu(n,r)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Df(n),u)if(n.flags&256)n.flags&=-257,n=u0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||Tr(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(Xa.current===null){if(r=je,r!==null&&(x=ct(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,yr(t,x),ti(r,t,x),Kf;Fu()}n=u0(t,n,a)}else t=f.treeContext,Qe=bi(x.nextSibling),En=n,xe=!0,Ia=null,Ei=!1,t!==null&&Zm(n,t),n=xu(n,r),n.flags|=134221824;return n}return t=da(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Jf(t,n,a,r,u){return br(n),a=Lf(t,n,a,r,void 0,u),r=Of(),t!==null&&!dn?(Pf(t,n,u),xa(t,n,u)):(xe&&r&&Kl(n),n.flags|=1,xn(t,n,a,u),n.child)}function c0(t,n,a,r,u,f){return br(n),n.updateQueue=null,a=dg(n,r,a,u),hg(t),r=Of(),t!==null&&!dn?(Pf(t,n,f),xa(t,n,f)):(xe&&r&&Kl(n),n.flags|=1,xn(t,n,a,f),n.child)}function f0(t,n,a,r,u){if(br(n),n.stateNode===null){var f=us,x=a.contextType;typeof x=="object"&&x!==null&&(f=Cn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Zf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Tf(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Cn(x):us,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(jf(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Zf.enqueueReplaceState(f,f.state,null),Go(n,r,f,u),Ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=Nr(a,T);f.props=B;var K=f.context,st=a.contextType;x=us,typeof st=="object"&&st!==null&&(x=Cn(st));var _t=a.getDerivedStateFromProps;st=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,st||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||K!==x)&&Kg(n,f,r,x),Ga=!1;var W=n.memoizedState;f.state=W,Go(n,r,f,u),Ho(),K=n.memoizedState,T||W!==K||Ga?(typeof _t=="function"&&(jf(n,a,_t,r),K=n.memoizedState),(B=Ga||Qg(n,a,B,r,W,K,x))?(st||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=K),f.props=r,f.state=K,f.context=x,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,bf(t,n),x=n.memoizedProps,st=Nr(a,x),f.props=st,_t=n.pendingProps,W=f.context,K=a.contextType,B=us,typeof K=="object"&&K!==null&&(B=Cn(K)),T=a.getDerivedStateFromProps,(K=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==_t||W!==B)&&Kg(n,f,r,B),Ga=!1,W=n.memoizedState,f.state=W,Go(n,r,f,u),Ho();var rt=n.memoizedState;x!==_t||W!==rt||Ga||t!==null&&t.dependencies!==null&&tu(t.dependencies)?(typeof T=="function"&&(jf(n,a,T,r),rt=n.memoizedState),(st=Ga||Qg(n,a,st,r,W,rt,B)||t!==null&&t.dependencies!==null&&tu(t.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=B,r=st):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&W===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&W===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,xs(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Dr(n,t.child,null,u),n.child=Dr(n,null,a,u)):xn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=xa(t,n,u),t}function h0(t,n,a,r){return Mr(),n.flags|=256,xn(t,n,a,r),n.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function th(t){return{baseLanes:t,cachePool:eg()}}function eh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function d0(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(u?Ya(n):qa(),(t=Qe)?(t=Pv(t,Ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=qm(t),a.return=n,n.child=a,En=n,Qe=null)):t=null,t===null)throw Ba(n);return td(t)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,u?(qa(),u=n.mode,f=yu({mode:"hidden",children:f},u),r=Sr(r,u,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=th(a),r.childLanes=eh(t,x,a),n.memoizedState=$f,qo(null,r)):(Ya(n),nh(n,f))}var T=t.memoizedState;if(T!==null){var B=T.dehydrated;if(B!==null)return US(t,n,f,x,r,B,T,a)}return u?(qa(),u=r.fallback,f=n.mode,T=t.child,B=T.sibling,r=da(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&1206910976,B!==null?u=da(B,u):(u=Sr(u,f,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,qo(null,r),r=n.child,u=t.child.memoizedState,u===null?u=th(a):(f=u.cachePool,f!==null?(T=fn._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=eg(),u={baseLanes:u.baseLanes|a,cachePool:f}),r.memoizedState=u,r.childLanes=eh(t,x,a),n.memoizedState=$f,qo(t.child,r)):(Ya(n),a=t.child,t=a.sibling,a=da(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function nh(t,n){return n=yu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yu(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function Su(t,n,a){return Dr(n,t.child,null,a),t=nh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function US(t,n,a,r,u,f,x,T){if(a)return n.flags&256?(Ya(n),n.flags&=-257,Su(t,n,T)):n.memoizedState!==null?(qa(),n.child=t.child,n.flags|=128,null):(qa(),f=u.fallback,x=n.mode,u=yu({mode:"visible",children:u.children},x),f=Sr(f,x,T,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Dr(n,t.child,null,T),u=n.child,u.memoizedState=th(T),u.childLanes=eh(t,r,T),n.memoizedState=$f,qo(null,u));if(Ya(n),td(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Oo({value:u,source:null,stack:null})),Su(t,n,T)}if(dn||Tr(t,n,T,!1),r=(T&t.childLanes)!==0,dn||r){if(Xa.current!==null)return Su(t,n,T);if(r=je,r!==null&&(u=ct(r,T),u!==0&&u!==x.retryLane))throw x.retryLane=u,yr(t,u),ti(r,t,u),Kf;return $h(f)||Fu(),Su(t,n,T)}return $h(f)?(n.flags|=192,n.child=t.child,null):(t=x.treeContext,Qe=bi(f.nextSibling),En=n,xe=!0,Ia=null,Ei=!1,t!==null&&Zm(n,t),n=nh(n,u.children),n.flags|=134221824,n)}function p0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),$l(t.return,n,a)}function m0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&lu(a)===null&&(n=t),t=t.sibling}return n}function Mu(t,n,a,r,u,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function ih(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function ah(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var x=Dn.current;if(n.flags&128)return Vo(n,x),null;var T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,Vo(n,x),u==="backwards"&&t!==null?(ih(t),xn(t,n,r,a),ih(t)):xn(t,n,r,a),r=xe?Lo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&p0(t,a,n);else if(t.tag===19)p0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=m0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,ih(n)),Mu(n,!0,u,null,f,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&lu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Mu(n,!0,a,null,f,r);break;case"together":Mu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=m0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Mu(n,!1,u,a,f,r)}return n.child}function g0(t,n,a){var r=n.pendingProps;return Fa(n,n.type,r.value),xn(t,n,r.children,a),n.child}function xa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Tr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=da(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=da(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function rh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&tu(t)))}function NS(t,n,a){switch(n.tag){case 3:D(n,n.stateNode.containerInfo),Fa(n,fn,t.memoizedState.cache),Mr();break;case 27:case 5:it(n);break;case 4:D(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Df(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ya(n),n.flags|=128,null;r=Tr(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?d0(t,n,a):(Ya(n),t=xa(t,n,a),t!==null?t.sibling:null)}Ya(n);break;case 19:if(n.flags&128)return ah(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Tr(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return ah(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Vo(n,Dn.current),r)break;return null;case 22:return n.lanes=0,o0(t,n,a,n.pendingProps);case 24:Fa(n,fn,t.memoizedState.cache)}return xa(t,n,a)}function v0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!rh(t,a)&&(n.flags&128)===0)return dn=!1,NS(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,xe&&(n.flags&1048576)!==0&&jm(n,Lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Cr(n.elementType),n.type=t,typeof t=="function")hf(t)?(r=Nr(t,r),n.tag=1,n=f0(null,n,t,r,a)):(n.tag=0,n=Jf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===Y){n.tag=11,n=a0(null,n,t,r,a);break t}else if(u===ht){n.tag=14,n=r0(null,n,t,r,a);break t}else if(u===lt){n.tag=10,n.type=t,n=g0(null,n,a);break t}}throw n=wt(t)||t,Error(s(306,n,""))}}return n;case 0:return Jf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Nr(r,n.pendingProps),f0(t,n,r,u,a);case 3:t:{if(D(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,bf(t,n),Go(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Fa(n,fn,r),r!==f.cache&&xf(n,[fn],a,!0),Ho(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=h0(t,n,r,a);break t}else if(r!==u){u=yi(Error(s(424)),n),Oo(u),n=h0(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qe=bi(t.firstChild),En=n,xe=!0,Ia=null,Ei=!0,a=og(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Mr(),r===u){n=xa(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return xs(t,n),t===null?(a=Vv(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(n.stateNode=Sv(n.type,n.pendingProps,Ie.current,n)):n.memoizedState=Vv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&xe&&(r=n.stateNode=Bv(n.type,n.pendingProps,Ie.current),En=n,Ei=!0,u=Qe,tr(n.type)?(ed=u,Qe=bi(r.firstChild)):Qe=u),xn(t,n,n.pendingProps.children,a),xs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((u=r=Qe)&&(r=AM(r,n.type,n.pendingProps,Ei),r!==null?(n.stateNode=r,En=n,Qe=bi(r.firstChild),Ei=!1,u=!0):u=!1),u||Ba(n)),it(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,r=f.children,qh(u,f)?r=null:x!==null&&qh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Lf(t,n,SS,null,null,a),Is._currentValue=u),xs(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=Qe)&&(a=RM(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,En=n,Qe=null,t=!0):t=!1),t||Ba(n)),null;case 13:return d0(t,n,a);case 4:return D(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Dr(n,null,r,a):xn(t,n,r,a),n.child;case 11:return a0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,xs(t,n),xn(t,n,r,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return g0(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,br(n),u=Cn(u),r=r(u),n.flags|=1,xn(t,n,r,a),n.child;case 14:return r0(t,n,n.type,n.pendingProps,a);case 15:return s0(t,n,n.type,n.pendingProps,a);case 19:return ah(t,n,a);case 31:return DS(t,n,a);case 22:return o0(t,n,a,n.pendingProps);case 24:return br(n),r=Cn(fn),t===null?(u=Mf(),u===null&&(u=je,f=yf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Tf(n),Fa(n,fn,u)):((t.lanes&a)!==0&&(bf(t,n),Go(n,null,null,a),Ho()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,fn,r)):(r=f.cache,Fa(n,fn,r),r!==u.cache&&xf(n,[fn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:xe&&Kl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:xs(t,n),xn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ya(t){t.flags|=4}function sh(t,n,a,r,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?qv(n,r):qv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(J0())t.flags|=8192;else throw wr=au,Ef}else t.flags&=-16777217}function _0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Wv(n))if(J0())t.flags|=8192;else throw wr=au,Ef}function Eu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pl():536870912,t.lanes|=n,Ts|=n)}function Wo(t,n){if(!xe)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function LS(t,n,a){var r=n.pendingProps;switch(mf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ga(fn),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(hs(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vf())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ya(n),f!==null?(Ke(n),_0(n,f)):(Ke(n),sh(n,u,null,r,a))):f?f!==t.memoizedState?(ya(n),Ke(n),_0(n,f)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ya(n),Ke(n),sh(n,u,t,r,a)),null;case 27:if(pt(n),a=Ie.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=Ft.current,hs(n)?Qm(n):(t=Bv(u,r,a),n.stateNode=t,ya(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(f=Ft.current,hs(n))Qm(n);else{var x=al(Ie.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(u,{is:r.is}):x.createElement(u)}}f[Dt]=n,f[qt]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Nn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ya(n)}}return Ke(n),n.subtreeFlags&=-33554433,sh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Ie.current,hs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=En,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[Dt]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||vv(t.nodeValue,a)),t||Ba(n,!0)}else t=al(t).createTextNode(r),t[Dt]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=hs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Dt]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=hs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Dt]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=vf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Eu(n,n.updateQueue),Ke(n),null);case 4:return b(),t===null&&Gh(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return ga(n.type),Ke(n),null;case 19:if(Uf(n),r=n.memoizedState,r===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Wo(r,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=lu(t),f!==null){for(n.flags|=128,Wo(r,!1),t=f.updateQueue,n.updateQueue=t,Eu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ym(a,t),a=a.sibling;return Vo(n,Dn.current&1|2),xe&&pa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&k()>Pu&&(n.flags|=128,u=!0,Wo(r,!1),n.lanes=4194304)}else{if(!u)if(t=lu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Eu(n,t),Wo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!xe)return Ke(n),null}else 2*k()-r.renderingStartTime>Pu&&a!==536870912&&(n.flags|=128,u=!0,Wo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=k(),t.sibling=null,f=Dn.current,f=u?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||xe?Vo(n,f):(a=f,ne(wn,n),ne(Dn,a),zn===null&&(zn=n)),xe&&pa(n,r.treeForkCount),t}return Ke(n),null;case 22:case 23:return oi(n),wf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Eu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Lt(Rr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ga(fn),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(s(156,n.tag))}function OS(t,n){switch(mf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ga(fn),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(s(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Uf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return ga(n.type),null;case 22:case 23:return oi(n),wf(),t!==null&&Lt(Rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ga(fn),null;case 25:return null;default:return null}}function x0(t,n){switch(mf(n),n.tag){case 3:ga(fn),b();break;case 26:case 27:case 5:pt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:Uf(n);break;case 10:ga(n.type);break;case 22:case 23:oi(n),wf(),t!==null&&Lt(Rr);break;case 24:ga(fn)}}function jo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==u)}}catch(T){Ge(n,n.return,T)}}function Wa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var x=r.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,u=n;var B=a,K=T;try{K()}catch(st){Ge(u,B,st)}}}r=r.next}while(r!==f)}}catch(st){Ge(n,n.return,st)}}function y0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ug(n,a)}catch(r){Ge(t,t.return,r)}}}function S0(t,n,a){a.props=Nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(t,n,r)}}function Wi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,f=fa(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=Cv(f)),r=u.ref;break;case 7:if(t.stateNode===null){var x=new hi(t);m(t.child,!1,TM,x,void 0,void 0),t.stateNode=x}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(T){Ge(t,n,T)}}function Un(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ge(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(t,n,u)}else a.current=null}function Tu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Ov(t.stateNode,n[a])}function M0(t){for(var n=t.return;n!==null&&(lh(n)&&Ov(t.stateNode,n.stateNode),!oh(n));)n=n.return}function Zo(t){for(var n=t.return;n!==null&&(lh(n)&&bM(t.stateNode,n.stateNode),!oh(n));)n=n.return}function oh(t){return t.tag===5||t.tag===3||t.tag===27}function lh(t){return t&&t.tag===7&&t.stateNode!==null}function uh(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ge(t,t.return,u)}}function ch(t,n,a){try{var r=t.stateNode;sM(r,t.type,a,n),r[qt]=n}catch(u){Ge(t,t.return,u)}}function E0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&tr(t.type)||t.tag===4}function fh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||E0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&tr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hh(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi)),Tu(t,r),Ne=!0;else if(u!==4&&(u===27&&(Tu(t,r),r=null,tr(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(hh(t,n,a,r),t=t.sibling;t!==null;)hh(t,n,a,r),t=t.sibling}function bu(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Tu(t,r),Ne=!0;else if(u!==4&&(u===27&&(Tu(t,r),r=null,tr(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(bu(t,n,a,r),t=t.sibling;t!==null;)bu(t,n,a,r),t=t.sibling}function T0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,r,a),n[Dt]=t,n[qt]=a}catch(f){Ge(t,t.return,f)}}var Au=!1,li=null;function b0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Au=!0)}var ji=null;function A0(){var t=ji;return ji=null,t}var Kn=0;function ys(t,n,a,r,u){return Kn=0,R0(t.child,n,a,r,u)}function R0(t,n,a,r,u){for(var f=!1;t!==null;){if(t.tag===5){var x=t.stateNode;if(r!==null){var T=Zh(x);r.push(T),T.view&&(f=!0)}else f||Zh(x).view&&(f=!0);Au=!0,Av(x,Kn===0?n:n+"_"+Kn,a),Kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||R0(t.child,n,a,r,u)&&(f=!0));t=t.sibling}return f}function Zi(t,n){for(;t!==null;)t.tag===5?Rv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Zi(t.child,n)),t=t.sibling}function Ru(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Ru(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ha(n.default,n.share),n!=="none"&&(ys(t,a,n,null,!1)||Zi(t.child,!1))}t=t.sibling}}function dh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=fa(r,a),f=ha(r.default,a.paired?r.share:r.enter);f!=="none"?ys(t,u,f,null,!1)?(Ru(t),a.paired||n||Cs(t,r.onEnter)):Zi(t.child,!1):Ru(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)dh(t,n),t=t.sibling;else Ru(t)}function ph(t){if(li!==null&&li.size!==0){var n=li;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var f=ha(a.default,a.share);if(f!=="none"&&(ys(t,r,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Cs(t,a.onShare)):Zi(t.child,!1)),n.delete(r),n.size===0)break}}}ph(t)}t=t.sibling}}}function mh(t){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode),r=li!==null?li.get(a):void 0,u=ha(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(ys(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,li.delete(a),Cs(t,n.onShare)):Cs(t,n.onExit):Zi(t.child,!1)),li!==null&&ph(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)mh(t),t=t.sibling;else li!==null&&ph(t)}function C0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode);n=ha(n.default,n.update),t.flags&=-5,n!=="none"&&ys(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&C0(t);t=t.sibling}}function gh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Zi(t.child,!1))}gh(t)}t=t.sibling}}function Cu(t){if(t.tag===30)t.stateNode.paired=null,Zi(t.child,!1),gh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Cu(t),t=t.sibling;else gh(t)}function w0(t){for(t=t.child;t!==null;)t.tag===30?Zi(t.child,!1):(t.subtreeFlags&33554432)!==0&&w0(t),t=t.sibling}function vh(t,n,a,r,u,f,x){for(var T=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&Kn<f.length){var K=f[Kn],st=Zh(B);(K.view||st.view)&&(T=!0);var _t;if(_t=(t.flags&4)===0)if(st.clip)_t=!0;else{_t=K.rect;var W=st.rect;_t=_t.y!==W.y||_t.x!==W.x||_t.height!==W.height||_t.width!==W.width}_t&&(t.flags|=4),st.abs?st=!K.abs:(K=K.rect,st=st.rect,st=K.height!==st.height||K.width!==st.width),st&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Av(B,Kn===0?a:a+"_"+Kn,u),T&&(t.flags&4)!==0||(ji===null&&(ji=[]),ji.push(B,Kn===0?r:r+"_"+Kn,n.memoizedProps)),Kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?t.flags|=n.flags&32:vh(t,n.child,a,r,u,f,x)&&(T=!0));n=n.sibling}return T}function D0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=fa(a,r),f=ha(a.default,a.update),x;x=t.memoizedState,t.memoizedState=null,r=t;var T=t.child;Kn=0,u=vh(r,T,u,u,f,x,!1),(t.flags&4)!==0&&u&&Cs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&D0(t);t=t.sibling}}var Tn=!1,Fe=!1,Qi=!1,_h=!1,U0=typeof WeakSet=="function"?WeakSet:Set,bn=null,Ki=!1,Qo=!1,wu=!1,xh=!1;function PS(t,n,a){if(t=t.containerInfo,Xh=Bs,t=Pm(t),rf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var f=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{r.nodeType,x.nodeType}catch{r=null;break t}var T=0,B=-1,K=-1,st=0,_t=0,W=t,rt=null;e:for(;;){for(var Ot;W!==r||f!==0&&W.nodeType!==3||(B=T+f),W!==x||u!==0&&W.nodeType!==3||(K=T+u),W.nodeType===3&&(T+=W.nodeValue.length),(Ot=W.firstChild)!==null;)rt=W,W=Ot;for(;;){if(W===t)break e;if(rt===r&&++st===f&&(B=T),rt===x&&++_t===u&&(K=T),(Ot=W.nextSibling)!==null)break;W=rt,rt=W.parentNode}W=Ot}r=B===-1||K===-1?null:{start:B,end:K}}else r=null}r=r||{start:0,end:0}}else r=null;for(Yh={focusedElem:t,selectionRange:r},Bs=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(t=bn,a&&(r=t.deletions,r!==null))for(f=0;f<r.length;f++)a&&mh(r[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&b0(t),Du(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&mh(r),Du(a);continue}else if(r!==null&&r.memoizedState!==null){a&&b0(t),Du(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,bn=r):(a&&C0(t),Du(a))}}li=null}function Du(t){for(;bn!==null;){var n=bn,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var x=Nr(n.type,u);a=f.getSnapshotBeforeUpdate(x,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){Ge(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Jh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Jh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=fa(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=ha(u.default,u.update),u!=="none"&&ys(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function N0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),r&4&&jo(5,a);break;case 1:if(Ji(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Ge(a,a.return,x)}else{var u=Nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Ge(a,a.return,x)}}r&64&&y0(a),r&512&&Wi(a,a.return);break;case 3:if(Ji(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ug(t,n)}catch(x){Ge(a,a.return,x)}}break;case 27:n===null&&r&4&&T0(a);case 26:case 5:Ji(t,a),n===null&&r&4&&uh(a),r&512&&Wi(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),r&4&&z0(t,a);break;case 13:Ji(t,a),r&4&&I0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=WS.bind(null,a),CM(t,a))));break;case 22:if(r=a.memoizedState!==null||Tn,!r){var f=n!==null&&n.memoizedState!==null||Fe;n=Tn,u=Fe,Tn=r,(Fe=f)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ni(t,a,r)):Ji(t,a),Tn=n,Fe=u}break;case 30:Ji(t,a),r&512&&Wi(a,a.return);break;case 7:r&512&&Wi(a,a.return);default:Ji(t,a)}}function yh(t,n){for(t=t.child;t!==null;)L0(t,n),t=t.sibling}function L0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,x=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(B){Ge(t,t.return,B)}Sh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ne=!0}catch(B){Ge(t,t.return,B)}break;case 18:try{var T=t.stateNode;n?bv(T,!0):bv(t.stateNode,!1)}catch(B){Ge(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&yh(t,n);break;default:yh(t,n)}}function Sh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:L0(a,r);break t;case 22:a.memoizedState===null&&Sh(a,r);break t;default:Sh(a,r)}}t=t.sibling}}function O0(t){var n=t.alternate;n!==null&&(t.alternate=null,O0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ee(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Jn=!1;function Di(t,n,a){for(a=a.child;a!==null;)P0(t,n,a),a=a.sibling}function P0(t,n,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:Fe||Un(a,n),Di(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Fe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Fe||Un(a,n),Zo(a);var r=tn,u=Jn;tr(a.type)&&(tn=a.stateNode,Jn=!1),Di(t,n,a),Fv(a.stateNode,a.type,a.memoizedProps),tn=r,Jn=u;break;case 5:Fe||Un(a,n),Zo(a);case 6:if(a.tag===6&&Zo(a),r=tn,u=Jn,tn=null,Di(t,n,a),tn=r,Jn=u,tn!==null)if(Jn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Ne=!0}catch(f){Ge(a,n,f)}else try{tn.removeChild(a.stateNode),Ne=!0}catch(f){Ge(a,n,f)}break;case 18:tn!==null&&(Jn?(t=tn,Tv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Fs(t)):Tv(tn,a.stateNode));break;case 4:r=tn,u=Jn,tn=a.stateNode.containerInfo,Jn=!0,Di(t,n,a),tn=r,Jn=u;break;case 0:case 11:case 14:case 15:Wa(2,a,n),Fe||Wa(4,a,n),Di(t,n,a);break;case 1:Fe||(Un(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&S0(a,n,r)),Di(t,n,a);break;case 21:Di(t,n,a);break;case 22:Fe=(r=Fe)||a.memoizedState!==null,Di(t,n,a),Fe=r;break;case 30:Un(a,n),Di(t,n,a);break;case 7:Fe||Un(a,n),Di(t,n,a);break;default:Di(t,n,a)}}function z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fs(t)}catch(a){Ge(n,n.return,a)}}}function I0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fs(t)}catch(a){Ge(n,n.return,a)}}function zS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new U0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new U0),n;default:throw Error(s(435,t.tag))}}function Uu(t,n){var a=zS(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=jS.bind(null,t,r);r.then(u,u)}})}function qn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var f=r[u],x=t,T=n,B=T;t:for(;B!==null;){switch(B.tag){case 27:if(tr(B.type)){tn=B.stateNode,Jn=!1;break t}break;case 5:tn=B.stateNode,Jn=!1;break t;case 3:case 4:tn=B.stateNode.containerInfo,Jn=!0;break t}B=B.return}if(tn===null)throw Error(s(160));P0(x,T,f),tn=null,Jn=!1,x=f.alternate,x!==null&&(x.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)B0(n,t,a),n=n.sibling}var Ui=null;function B0(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var x=r[f];x.ref.impl=x.nextImpl}qn(n,t,a),Wn(t),u&4&&(Wa(3,t,t.return),jo(3,t),Wa(5,t,t.return));break;case 1:qn(n,t,a),Wn(t),u&512&&(Fe||r===null||Un(r,r.return)),u&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ui,qn(n,t,a),Wn(t),u&512&&(Fe||r===null||Un(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=Sv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Oe]||r[Dt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Nn(r,n,a),r[Dt]=t,Ue(r),n=r;break t;case"link":if(f=Yv("link","href",u).get(n+(a.href||""))){for(x=0;x<f.length;x++)if(r=f[x],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(x,1);break e}}r=u.createElement(n),Nn(r,n,a),u.head.appendChild(r);break;case"meta":if(f=Yv("meta","content",u).get(n+(a.content||""))){for(x=0;x<f.length;x++)if(r=f[x],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(x,1);break e}}r=u.createElement(n),Nn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[Dt]=t,Ue(r),n=r}t.stateNode=n}else Tn||rd(f,t.type,t.stateNode);else t.stateNode=Xv(f,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Fe||n.parentNode.removeChild(n)):u.count--,a===null?Tn||rd(f,t.type,t.stateNode):Xv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&ch(t,t.memoizedProps,r.memoizedProps);break;case 27:qn(n,t,a),Wn(t),u&512&&(Fe||r===null||Un(r,r.return)),r!==null&&u&4&&ch(t,t.memoizedProps,r.memoizedProps);break;case 5:if(f=Qi,Qi=!1,qn(n,t,a),Qi=f,Wn(t),u&512&&(Fe||r===null||Un(r,r.return)),t.flags&32){n=t.stateNode;try{ns(n,""),Ne=!0}catch(st){Ge(t,t.return,st)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,ch(t,n,r!==null?r.memoizedProps:n)),u&1024&&(_h=!0);break;case 6:if(qn(n,t,a),Wn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ne=!0}catch(st){Ge(t,t.return,st)}}break;case 3:if(Ne=!1,qu=null,f=Ui,Ui=rl(n.containerInfo),qn(n,t,a),Ui=f,Wn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Fs(n.containerInfo)}catch(st){Ge(t,t.return,st)}_h&&(_h=!1,F0(t)),Ne=!1;break;case 4:u=Qi,Qi=Tn,r=rm(),f=Ui,Ui=rl(t.stateNode.containerInfo),qn(n,t,a),Wn(t),Ui=f,Ne&&Qo&&(wu=!0),Ne=r,Qi=u;break;case 12:qn(n,t,a),Wn(t);break;case 31:qn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Uu(t,n)));break;case 13:qn(n,t,a),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ou=k()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Uu(t,n)));break;case 22:f=t.memoizedState!==null,x=r!==null&&r.memoizedState!==null;var T=Tn,B=Fe,K=Qi;Tn=T||f,Qi=K||f,Fe=B||x,qn(n,t,a),Fe=B,Qi=K,Tn=T,Wn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||x||Tn||Fe||(n=x||Fe,a=Tn,r=Fe,Tn=f||Tn,Fe=n,ja(t,2),Tn=a,Fe=r),!f&&Qi||yh(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Uu(t,a))));break;case 19:qn(n,t,a),Wn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Uu(t,n)));break;case 30:u&512&&(Fe||r===null||Un(r,r.return)),u=rm(),f=Qo,x=(a&335544064)===a,T=t.memoizedProps,Qo=x&&ha(T.default,T.update)!=="none",qn(n,t,a),Wn(t),x&&r!==null&&Ne&&(t.flags|=4),Qo=f,Ne=u;break;case 21:break;case 7:u&512&&(Fe||r===null||Un(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:qn(n,t,a),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(E0(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(lh(u)){var f=u.stateNode;r===null?r=[f]:r.push(f)}if(oh(u))break;u=u.return}var x=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var T=a.stateNode,B=fh(t);bu(t,B,T,x);break;case 5:var K=a.stateNode;a.flags&32&&(ns(K,""),a.flags&=-33);var st=fh(t);bu(t,st,K,x);break;case 3:case 4:var _t=a.stateNode.containerInfo,W=fh(t);hh(t,W,_t,x);break;default:throw Error(s(161))}}catch(rt){Ge(t,t.return,rt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function F0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;F0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Bs=!0,n.reset(),Bs=!1),t=t.sibling}}function Ss(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)H0(n,t),n=n.sibling;else D0(n)}function H0(t,n){var a=t.alternate;if(a===null)dh(t,!1);else switch(t.tag){case 3:if(xh=Ki=!1,A0(),Ss(n,t),!Ki&&!wu){if(t=ji,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];Rv(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),xh=!0}ji=null;break;case 5:Ss(n,t);break;case 4:r=Ki,Ki=!1,Ss(n,t),Ki&&(wu=!0),Ki=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?dh(t,!1):Ss(n,t));break;case 30:r=Ki,u=A0(),Ki=!1,Ss(n,t),Ki&&(t.flags|=4);var f=t.memoizedProps,x=t.stateNode;n=fa(f,x),x=fa(a.memoizedProps,x);var T=ha(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,Kn=0,n=vh(t,a,n,x,T,f,!0),Kn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Cs(t,t.memoizedProps.onUpdate),ji=u):u!==null&&(u.push.apply(u,ji),ji=u),Ki=(t.flags&32)!==0?!0:r;break;default:Ss(n,t)}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)N0(t,n.alternate,n),n=n.sibling}function ja(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Wa(4,a,a.return),ja(a,r);break;case 1:Un(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&S0(a,a.return,u),ja(a,r);break;case 27:(r&2)!==0&&Fv(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||Zo(a),ja(a,r);break;case 6:Zo(a);break;case 26:Un(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Fe||u.parentNode.removeChild(u),ja(a,r);break;case 22:a.memoizedState===null&&ja(a,r);break;case 30:Un(a,a.return),ja(a,r);break;case 7:Un(a,a.return);default:ja(a,r)}t=t.sibling}}function Ni(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,x=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ni(u,f,a),jo(4,f);break;case 1:if(Ni(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Ge(r,r.return,st)}if(r=f,u=r.updateQueue,u!==null){var B=r.stateNode;try{var K=u.shared.hiddenCallbacks;if(K!==null)for(u.shared.hiddenCallbacks=null,u=0;u<K.length;u++)lg(K[u],B)}catch(st){Ge(r,r.return,st)}}T&&x&64&&y0(f),Wi(f,f.return);break;case 27:(a&2)!==0&&T0(f);case 5:f.tag!==5&&f.tag!==27||M0(f),Ni(u,f,a),T&&r===null&&x&4&&uh(f),Wi(f,f.return);break;case 6:M0(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||Tn||rd(rl(B.ownerDocument),f.type,B),Ni(u,f,a),T&&r===null&&x&4&&uh(f),Wi(f,f.return);break;case 12:Ni(u,f,a);break;case 31:Ni(u,f,a),T&&x&4&&z0(u,f);break;case 13:Ni(u,f,a),T&&x&4&&I0(u,f);break;case 22:f.memoizedState===null&&Ni(u,f,a),Wi(f,f.return);break;case 30:Ni(u,f,a),Wi(f,f.return);break;case 7:Wi(f,f.return);default:Ni(u,f,a)}n=n.sibling}}function Mh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Po(a))}function Eh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Po(t))}function Ti(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)G0(t,n,a,r),n=n.sibling;else u&&w0(n)}function G0(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Cu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,r),f&2048&&jo(9,n);break;case 1:Ti(t,n,a,r);break;case 3:Ti(t,n,a,r),u&&xh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Po(f)));break;case 12:if(f&2048){Ti(t,n,a,r),f=n.stateNode;try{var x=n.memoizedProps,T=x.id,B=x.onPostCommit;typeof B=="function"&&B(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(K){Ge(n,n.return,K)}}else Ti(t,n,a,r);break;case 31:Ti(t,n,a,r);break;case 13:Ti(t,n,a,r);break;case 23:break;case 22:x=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&Cu(T),x._visibility&2?Ti(t,n,a,r):Ko(t,n)):(u&&T!==null&&T.memoizedState!==null&&Cu(n),x._visibility&2?Ti(t,n,a,r):(x._visibility|=2,Ms(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Mh(T,n);break;case 24:Ti(t,n,a,r),f&2048&&Eh(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Zi(f.child,!0),Zi(n.child,!0))),Ti(t,n,a,r);break;default:Ti(t,n,a,r)}}function Ms(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,T=a,B=r,K=x.flags;switch(x.tag){case 0:case 11:case 15:Ms(f,x,T,B,u),jo(8,x);break;case 23:break;case 22:var st=x.stateNode;x.memoizedState!==null?st._visibility&2?Ms(f,x,T,B,u):Ko(f,x):(st._visibility|=2,Ms(f,x,T,B,u)),u&&K&2048&&Mh(x.alternate,x);break;case 24:Ms(f,x,T,B,u),u&&K&2048&&Eh(x.alternate,x);break;default:Ms(f,x,T,B,u)}n=n.sibling}}function Ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Ko(a,r),u&2048&&Mh(r.alternate,r);break;case 24:Ko(a,r),u&2048&&Eh(r.alternate,r);break;default:Ko(a,r)}n=n.sibling}}var Lr=8192;function Or(t,n,a){if(t.subtreeFlags&Lr)for(t=t.child;t!==null;)V0(t,n,a),t=t.sibling}function V0(t,n,a){switch(t.tag){case 26:Or(t,n,a),t.flags&Lr&&(t.memoizedState!==null?VM(a,Ui,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Zv(a,t)));break;case 5:Or(t,n,a),t.flags&Lr&&(t=t.stateNode,(n&335544128)===n&&Zv(a,t));break;case 3:case 4:var r=Ui;Ui=rl(t.stateNode.containerInfo),Or(t,n,a),Ui=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Lr,Lr=16777216,Or(t,n,a),Lr=r):Or(t,n,a));break;case 30:if((t.flags&Lr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,li===null&&(li=new Map),li.set(r,u)}Or(t,n,a);break;default:Or(t,n,a)}}function k0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Jo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,Y0(r,t)}k0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)X0(t),t=t.sibling}function X0(t){switch(t.tag){case 0:case 11:case 15:Jo(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:Jo(t);break;case 12:Jo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Nu(t)):Jo(t);break;default:Jo(t)}}function Nu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,Y0(r,t)}k0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),Nu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nu(n));break;default:Nu(n)}t=t.sibling}}function Y0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Po(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else t:for(a=t;bn!==null;){r=bn;var u=r.sibling,f=r.return;if(O0(r),r===a){bn=null;break t}if(u!==null){u.return=f,bn=u;break t}bn=f}}}var IS={getCacheForType:function(t){var n=Cn(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(fn).controller.signal}},BS=typeof WeakMap=="function"?WeakMap:Map,ze=0,je=null,Me=null,be=0,He=0,ui=null,Za=!1,Es=!1,Th=!1,Sa=0,sn=0,Qa=0,Pr=0,Lu=0,ci=0,Ts=0,$o=null,$n=null,bh=!1,Ou=0,q0=0,Pu=1/0,zu=null,Ka=null,nn=0,Li=null,zr=null,$i=0,Ah=0,Rh=null,W0=null,bs=null,As=null,Rs=null,tl=0,Iu=null;function fi(){return(ze&2)!==0&&be!==0?be&-be:Mt.T!==null?Ih():bt()}function j0(){if(ci===0)if((be&536870912)===0||xe){var t=la;la<<=1,(la&3932160)===0&&(la=262144),ci=t}else ci=536870912;return t=wn.current,t!==null&&(t.flags|=32),ci}function Cs(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=Cv(fa(t.memoizedProps,a))),As===null&&(As=[]),As.push(n.bind(null,r))}}function ti(t,n,a){(t===je&&(He===2||He===9)||t.cancelPendingCommit!==null)&&(ws(t,0),Ja(t,be,ci,!1)),vr(t,a),((ze&2)===0||t!==je)&&(t===je&&((ze&2)===0&&(Pr|=a),sn===4&&Ja(t,be,ci,!1)),ta(t))}function Z0(t,n,a){if((ze&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Na(t,n),u=r?GS(t,n):wh(t,n,!0),f=r;do{if(u===0){Es&&!r&&Ja(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!FS(a)){u=wh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=t;u=$o;var B=T.current.memoizedState.isDehydrated;if(B&&(ws(T,x).flags|=256),x=wh(T,x,!1),x!==2&&x!==6){if(Th&&!B){T.errorRecoveryDisabledLanes|=f,Pr|=f,u=4;break t}f=$n,$n=u,f!==null&&($n===null?$n=f:$n.push.apply($n,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){ws(t,0),Ja(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ja(r,n,ci,!Za);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ou+300-k(),10<u)){if(Ja(r,n,ci,!Za),gr(r,0,!0)!==0)break t;$i=n,r.timeoutHandle=jh(Q0.bind(null,r,a,$n,zu,bh,n,ci,Pr,Ts,Za,f,"Throttled",-0,0),u);break t}Q0(r,a,$n,zu,bh,n,ci,Pr,Ts,Za,f,null,-0,0)}}break}while(!0);ta(t)}function Q0(t,n,a,r,u,f,x,T,B,K,st,_t,W,rt){t.timeoutHandle=-1;var Ot=n.subtreeFlags,Wt=(f&335544064)===f;if(_t=null,(Wt||Ot&8192||(Ot&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},li=null,V0(n,f,_t),Wt&&(Ot=_t,Wt=t.containerInfo,Wt=(Wt.nodeType===9?Wt:Wt.ownerDocument).__reactViewTransition,Wt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=ll.bind(Ot),Wt.finished.then(Ot,Ot))),Ot=(f&62914560)===f?Ou-k():(f&4194048)===f?q0-k():0,Ot=kM(_t,Ot),Ot!==null)){$i=f,t.cancelPendingCommit=Ot(av.bind(null,t,n,f,a,r,u,x,T,B,K,st,_t,null,W,rt)),Ja(t,f,x,!K);return}av(t,n,f,a,r,u,x,T,B,K,st,_t)}function FS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!si(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(t,n,a,r){n=Ol(t,n),n&=~Lu,n&=~Pr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-On(u),x=1<<f;r[f]=-1,u&=~x}a!==0&&L(t,a,n)}function Bu(){return(ze&6)===0?(el(0),!1):!0}function Ch(){if(Me!==null){if(He===0)var t=Me.return;else t=Me,ma=Er=null,zf(t),ms=null,Bo=0,t=Me;for(;t!==null;)x0(t.alternate,t),t=t.return;Me=null}}function ws(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,uM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$i=0,Ch(),je=t,Me=a=da(t.current,null),be=n,He=0,ui=null,Za=!1,Es=Na(t,n),Th=!1,Ts=ci=Lu=Pr=Qa=sn=0,$n=$o=null,bh=!1,Sa=Ol(t,n),ql(),a}function K0(t,n){pe=null,Mt.H=vu,n===ps||n===iu?(n=ag(),He=3):n===Ef?(n=ag(),He=4):He=n===Kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,Me===null&&(sn=1,_u(t,yi(n,t.current)))}function J0(){var t=wn.current;return t===null?!0:(be&4194048)===be?zn===null:(be&62914560)===be||(be&536870912)!==0?t===zn:!1}function $0(){var t=Mt.H;return Mt.H=vu,t===null?vu:t}function tv(){var t=Mt.A;return Mt.A=IS,t}function Fu(){sn=4,Za||(be&4194048)!==be&&wn.current!==null||(Es=!0),(Qa&134217727)===0&&(Pr&134217727)===0||je===null||Ja(je,be,ci,!1)}function wh(t,n,a){var r=ze;ze|=2;var u=$0(),f=tv();(je!==t||be!==n)&&(zu=null,ws(t,n)),n=!1;var x=sn;t:do try{if(He!==0&&Me!==null){var T=Me,B=ui;switch(He){case 8:Ch(),x=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var K=He;if(He=0,ui=null,Ds(t,T,B,K),a&&Es){x=0;break t}break;default:K=He,He=0,ui=null,Ds(t,T,B,K)}}HS(),x=sn;break}catch(st){K0(t,st)}while(!0);return n&&t.shellSuspendCounter++,ma=Er=null,ze=r,Mt.H=u,Mt.A=f,Me===null&&(je=null,be=0,ql()),x}function HS(){for(;Me!==null;)ev(Me)}function GS(t,n){var a=ze;ze|=2;var r=$0(),u=tv();je!==t||be!==n?(zu=null,Pu=k()+500,ws(t,n)):Es=Na(t,n);t:do try{if(He!==0&&Me!==null){n=Me;var f=ui;e:switch(He){case 1:He=0,ui=null,Ds(t,n,f,1);break;case 2:case 9:if(ng(f)){He=0,ui=null,nv(n);break}n=function(){He!==2&&He!==9||je!==t||(He=7),ta(t)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:ng(f)?(He=0,ui=null,nv(n)):(He=0,ui=null,Ds(t,n,f,7));break;case 5:var x=null;switch(Me.tag){case 26:x=Me.memoizedState;case 5:case 27:var T=Me;if(x?Wv(x):T.stateNode.complete){He=0,ui=null;var B=T.sibling;if(B!==null)Me=B;else{var K=T.return;K!==null?(Me=K,Hu(K)):Me=null}break e}}He=0,ui=null,Ds(t,n,f,5);break;case 6:He=0,ui=null,Ds(t,n,f,6);break;case 8:Ch(),sn=6;break t;default:throw Error(s(462))}}VS();break}catch(st){K0(t,st)}while(!0);return ma=Er=null,Mt.H=r,Mt.A=u,ze=a,Me!==null?0:(je=null,be=0,ql(),sn)}function VS(){for(;Me!==null&&!zt();)ev(Me)}function ev(t){var n=v0(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?Hu(t):Me=n}function nv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=c0(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=c0(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:zf(n);var r=n;r===En&&(xe?(Jl(r),r.tag===5&&r.stateNode!=null&&(Qe=r.stateNode)):(Jl(r),xe=!0));default:x0(a,n),n=Me=Ym(n,Sa),n=v0(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?Hu(t):Me=n}function Ds(t,n,a,r){ma=Er=null,zf(n),ms=null,Bo=0;var u=n.return;try{if(wS(t,u,n,a,be)){sn=1,_u(t,yi(a,t.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;sn=1,_u(t,yi(a,t.current)),Me=null;return}n.flags&32768?(xe||r===1?t=!0:Es||(be&536870912)!==0?t=!1:(Za=t=!0,(r===2||r===9||r===3||r===6)&&(r=wn.current,r!==null&&r.tag===13&&(r.flags|=16384))),iv(n,t)):Hu(n)}function Hu(t){var n=t;do{if((n.flags&32768)!==0){iv(n,Za);return}t=n.return;var a=LS(n.alternate,n,Sa);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=t}while(n!==null);sn===0&&(sn=5)}function iv(t,n){do{var a=OS(t.alternate,t);if(a!==null){a.flags&=32767,Me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Me=t;return}Me=t=a}while(t!==null);sn=6,Me=null}function av(t,n,a,r,u,f,x,T,B,K,st,_t){t.cancelPendingCommit=null;do Gu();while(nn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===je&&(Me=je=null,be=0),zr=n,Li=t,$i=a,Rh=u,W0=r,kS(t,n,a,x,T,B,_t)}}function kS(t,n,a,r,u,f,x){var T=n.lanes|n.childLanes;if(Ah=T,T|=cf,Hc(t,a,T,r,u,f),As=null,(a&335544064)===a?(Rs=vS(t),r=10262):(Rs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,ZS(Et,function(){return Lh(),null})):(t.callbackNode=null,t.callbackPriority=0),Au=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null,u=Gt.p,Gt.p=2,f=ze,ze|=4;try{PS(t,n,a)}finally{ze=f,Gt.p=u,Mt.T=r}}nn=1,Au?bs=mM(x,t.containerInfo,Rs,Dh,Uh,YS,Nh,Lh,XS):(Dh(),Uh(),Nh())}function XS(t){if(nn!==0){var n=Li.onRecoverableError;n(t,{componentStack:null})}}function YS(){nn===3&&(nn=0,H0(zr,Li),nn=4)}function Dh(){if(nn===1){nn=0;var t=Li,n=zr,a=$i,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null;var u=Gt.p;Gt.p=2;var f=ze;ze|=4;try{Qo=wu=!1,B0(n,t,a),a=Yh;var x=Pm(t.containerInfo),T=a.focusedElem,B=a.selectionRange;if(x!==T&&T&&T.ownerDocument&&Om(T.ownerDocument.documentElement,T)){if(B!==null&&rf(T)){var K=B.start,st=B.end;if(st===void 0&&(st=K),"selectionStart"in T)T.selectionStart=K,T.selectionEnd=Math.min(st,T.value.length);else{var _t=T.ownerDocument||document,W=_t&&_t.defaultView||window;if(W.getSelection){var rt=W.getSelection(),Ot=T.textContent.length,Wt=Math.min(B.start,Ot),me=B.end===void 0?Wt:Math.min(B.end,Ot);!rt.extend&&Wt>me&&(x=me,me=Wt,Wt=x);var Q=Lm(T,Wt),V=Lm(T,me);if(Q&&V&&(rt.rangeCount!==1||rt.anchorNode!==Q.node||rt.anchorOffset!==Q.offset||rt.focusNode!==V.node||rt.focusOffset!==V.offset)){var at=_t.createRange();at.setStart(Q.node,Q.offset),rt.removeAllRanges(),Wt>me?(rt.addRange(at),rt.extend(V.node,V.offset)):(at.setEnd(V.node,V.offset),rt.addRange(at))}}}}for(_t=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&_t.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var vt=_t[T];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Bs=!!Xh,Yh=Xh=null}finally{ze=f,Gt.p=u,Mt.T=r}}t.current=n,nn=2}}function Uh(){if(nn===2){nn=0;var t=Li,n=zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Mt.T,Mt.T=null;var r=Gt.p;Gt.p=2;var u=ze;ze|=4;try{N0(t,n.alternate,n)}finally{ze=u,Gt.p=r,Mt.T=a}}nn=3}}function Nh(){if(nn===4||nn===3){nn=0;var t=bs;bs=null,de();var n=Li,a=zr,r=$i,u=W0,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?nn=5:(nn=0,zr=Li=null,rv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(Ka=null),tt(r),a=a.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Te,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Mt.T,f=Gt.p,Gt.p=2,Mt.T=null;try{for(var x=n.onRecoverableError,T=0;T<u.length;T++){var B=u[T];x(B.value,{componentStack:B.stack})}}finally{Mt.T=a,Gt.p=f}}if(u=As,x=Rs,Rs=null,u!==null&&(As=null,x===null&&(x=[]),t!==null))for(B=0;B<u.length;B++)a=(0,u[B])(x),a!==void 0&&t.finished.finally(a);($i&3)!==0&&Gu(),ta(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Iu?tl++:(tl=0,Iu=n):(tl=0,Iu=null),el(0)}}function rv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Po(n)))}function Gu(){return bs!==null&&(bs.skipTransition(),bs=null),Dh(),Uh(),Nh(),Lh()}function Lh(){if(nn!==5)return!1;var t=Li,n=Ah;Ah=0;var a=tt($i),r=Mt.T,u=Gt.p;try{Gt.p=32>a?32:a,Mt.T=null,a=Rh,Rh=null;var f=Li,x=$i;if(nn=0,zr=Li=null,$i=0,(ze&6)!==0)throw Error(s(331));var T=ze;if(ze|=4,X0(f.current),G0(f,f.current,x,a),ze=T,el(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Te,f)}catch{}return!0}finally{Gt.p=u,Mt.T=r,rv(t,n)}}function sv(t,n,a){n=yi(a,n),n=Qf(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(vr(t,2),ta(t))}function Ge(t,n,a){if(t.tag===3)sv(t,t,a);else for(;n!==null;){if(n.tag===3){sv(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ka===null||!Ka.has(r))){t=yi(a,t),a=n0(2),r=ka(n,a,2),r!==null&&(i0(a,r,n,t),vr(r,2),ta(r));break}}n=n.return}}function Oh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new BS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Th=!0,u.add(a),t=qS.bind(null,t,n,a),n.then(t,t))}function qS(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,je===t&&(be&a)===a&&((sn===4||sn===3&&(be&62914560)===be&&300>k()-Ou)&&(ze&2)===0?ws(t,0):Lu|=a,Ts===be&&(Ts=0)),ta(t)}function ov(t,n){n===0&&(n=Pl()),t=yr(t,n),t!==null&&(vr(t,n),ta(t))}function WS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),ov(t,a)}function jS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),ov(t,a)}function ZS(t,n){return ae(t,n)}var Us=null,Ns=null,Ph=!1,Vu=!1,zh=!1,$a=0;function ta(t){t!==Ns&&t.next===null&&(Ns===null?Us=Ns=t:Ns=Ns.next=t),Vu=!0,Ph||(Ph=!0,KS())}function el(t,n){if(!zh&&Vu){zh=!0;do for(var a=!1,r=Us;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var x=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-On(42|t)+1)-1,f&=u&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,fv(r,f))}else f=be,f=gr(r,r===je?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Na(r,f)||(a=!0,fv(r,f));r=r.next}while(a);zh=!1}}function QS(){lv()}function lv(){Vu=Ph=!1;var t=0;$a!==0&&lM()&&(t=$a);for(var n=k(),a=null,r=Us;r!==null;){var u=r.next,f=uv(r,n);f===0?(r.next=null,a===null?Us=u:a.next=u,u===null&&(Ns=a)):(a=r,(t!==0||(f&3)!==0)&&(Vu=!0)),r=u}nn!==0&&nn!==5||el(t),$a!==0&&($a=0)}function uv(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-On(f),T=1<<x,B=u[x];B===-1?((T&a)===0||(T&r)!==0)&&(u[x]=Fc(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=je,a=be,a=gr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(He===2||He===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Kt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Na(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Kt(r),tt(a)){case 2:case 8:a=kt;break;case 32:a=Et;break;case 268435456:a=jt;break;default:a=Et}return r=cv.bind(null,t),a=ae(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Kt(r),t.callbackPriority=2,t.callbackNode=null,2}function cv(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gu()&&t.callbackNode!==a)return null;var r=be;return r=gr(t,t===je?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Z0(t,r,n),uv(t,k()),t.callbackNode!=null&&t.callbackNode===a?cv.bind(null,t):null)}function fv(t,n){if(Gu())return null;Z0(t,n,!0)}function KS(){cM(function(){(ze&6)!==0?ae(Ut,QS):lv()})}function Ih(){if($a===0){var t=Ar;t===0&&(t=pr,pr<<=1,(pr&261888)===0&&(pr=256)),$a=t}return $a}function hv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bl(t)}function JS(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=hv((u[qt]||null).action),x=r.submitter;x&&(n=(n=x[qt]||null)?hv(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Vl("action","action",null,r,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if($a!==0){var B=new FormData(u,x);Yf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=new FormData(u,x),Yf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Bh=0;Bh<uf.length;Bh++){var Fh=uf[Bh],$S=Fh.toLowerCase(),tM=Fh[0].toUpperCase()+Fh.slice(1);wi($S,"on"+tM)}wi(Bm,"onAnimationEnd"),wi(Fm,"onAnimationIteration"),wi(Hm,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(uS,"onTransitionRun"),wi(cS,"onTransitionStart"),wi(fS,"onTransitionCancel"),wi(Gm,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function dv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var T=r[x],B=T.instance,K=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=K;try{f(u)}catch(st){Yl(st)}u.currentTarget=null,f=B}else for(x=0;x<r.length;x++){if(T=r[x],B=T.instance,K=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=K;try{f(u)}catch(st){Yl(st)}u.currentTarget=null,f=B}}}}function Ee(t,n){var a=n[te];a===void 0&&(a=n[te]=new Set);var r=t+"__bubble";a.has(r)||(pv(n,t,2,!1),a.add(r))}function Hh(t,n,a){var r=0;n&&(r|=4),pv(a,t,r,n)}var ku="_reactListening"+Math.random().toString(36).slice(2);function Gh(t){if(!t[ku]){t[ku]=!0,Ze.forEach(function(a){a!=="selectionchange"&&(eM.has(a)||Hh(a,!1,t),Hh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ku]||(n[ku]=!0,Hh("selectionchange",!1,n))}}function pv(t,n,a,r){switch(i_(n)){case 2:var u=WM;break;case 8:u=jM;break;default:u=od}a=u.bind(null,n,a,t),u=void 0,!jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Vh(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var T=r.stateNode.containerInfo;if(T===u)break;if(x===4)for(x=r.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;T!==null;){if(x=Pe(T),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){r=f=x;continue t}T=T.parentNode}}r=r.return}pm(function(){var K=f,st=qc(a),_t=[];t:{var W=Vm.get(t);if(W!==void 0){var rt=Vl,Ot=t;switch(t){case"keypress":if(Hl(a)===0)break t;case"keydown":case"keyup":rt=Fy;break;case"focusin":Ot="focus",rt=Jc;break;case"focusout":Ot="blur",rt=Jc;break;case"beforeblur":case"afterblur":rt=Jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Xy;break;case Bm:case Fm:case Hm:rt=Dy;break;case Gm:rt=qy;break;case"scroll":case"scrollend":rt=by;break;case"wheel":rt=jy;break;case"copy":case"cut":case"paste":rt=Ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=xm;break;case"submit":rt=Vy;break;case"toggle":case"beforetoggle":rt=Qy}var Wt=(n&4)!==0,me=!Wt&&(t==="scroll"||t==="scrollend"),Q=Wt?W!==null?W+"Capture":null:W;Wt=[];for(var V=K,at;V!==null;){var vt=V;if(at=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||at===null||Q===null||(vt=To(V,Q),vt!=null&&Wt.push(il(V,vt,at))),me)break;V=V.return}0<Wt.length&&(W=new rt(W,Ot,null,a,st),_t.push({event:W,listeners:Wt}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",rt&&a!==Yc&&(Ot=a.relatedTarget||a.fromElement)&&(Pe(Ot)||Ot[ie]))break t;(W||rt)&&(Ot=st.window===st?st:(rt=st.ownerDocument)?rt.defaultView||rt.parentWindow:window,W?(rt=a.relatedTarget||a.toElement,W=K,rt=rt?Pe(rt):null,rt!==null&&(me=c(rt),Wt=rt.tag,rt!==me||Wt!==5&&Wt!==27&&Wt!==6)&&(rt=null)):(W=null,rt=K),W!==rt&&(Wt=vm,vt="onMouseLeave",Q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=xm,vt="onPointerLeave",Q="onPointerEnter",V="pointer"),me=W==null?Ot:_n(W),at=rt==null?Ot:_n(rt),Ot=new Wt(vt,V+"leave",W,a,st),Ot.target=me,Ot.relatedTarget=at,vt=null,Pe(st)===K&&(Wt=new Wt(Q,V+"enter",rt,a,st),Wt.target=at,Wt.relatedTarget=me,vt=Wt),me=vt,Wt=W&&rt?z(W,rt,nM):null,W!==null&&mv(_t,Ot,W,Wt,!1),rt!==null&&me!==null&&mv(_t,me,rt,Wt,!0)))}t:{if(W=K?_n(K):window,rt=W.nodeName&&W.nodeName.toLowerCase(),rt==="select"||rt==="input"&&W.type==="file")var Vt=Rm;else if(bm(W))if(Cm)Vt=sS;else{Vt=aS;var Ae=iS}else rt=W.nodeName,!rt||rt.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?K&&Xc(K.elementType)&&(Vt=Rm):Vt=rS;if(Vt&&(Vt=Vt(t,K))){Am(_t,Vt,a,st);break t}Ae&&Ae(t,W,K)}switch(Ae=K?_n(K):window,t){case"focusin":(bm(Ae)||Ae.contentEditable==="true")&&(ss=Ae,sf=K,No=null);break;case"focusout":No=sf=ss=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,zm(_t,a,st);break;case"selectionchange":if(lS)break;case"keydown":case"keyup":zm(_t,a,st)}var $t;if(tf)t:{switch(t){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else rs?Em(t,a)&&(se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(ym&&a.locale!=="ko"&&(rs||se!=="onCompositionStart"?se==="onCompositionEnd"&&rs&&($t=mm()):(Oa=st,Zc="value"in Oa?Oa.value:Oa.textContent,rs=!0)),Ae=Xu(K,se),0<Ae.length&&(se=new _m(se,t,null,a,st),_t.push({event:se,listeners:Ae}),$t?se.data=$t:($t=Tm(a),$t!==null&&(se.data=$t)))),($t=Jy?$y(t,a):tS(t,a))&&(se=Xu(K,"onBeforeInput"),0<se.length&&(Ae=new _m("onBeforeInput","beforeinput",null,a,st),_t.push({event:Ae,listeners:se}),Ae.data=$t)),JS(_t,t,K,a,st)}dv(_t,n)})}function il(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Xu(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=To(t,a),u!=null&&r.unshift(il(t,u,f)),u=To(t,n),u!=null&&r.push(il(t,u,f))),t.tag===3)return r;t=t.return}return[]}function nM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function mv(t,n,a,r,u){for(var f=n._reactName,x=[];a!==null&&a!==r;){var T=a,B=T.alternate,K=T.stateNode;if(T=T.tag,B!==null&&B===r)break;T!==5&&T!==26&&T!==27||K===null||(B=K,u?(K=To(a,f),K!=null&&x.unshift(il(a,K,B))):u||(K=To(a,f),K!=null&&x.push(il(a,K,B)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var iM=/\r\n?/g,aM=/\u0000|\uFFFD/g;function gv(t){return(typeof t=="string"?t:""+t).replace(iM,`
`).replace(aM,"")}function vv(t,n){return n=gv(n),gv(t)===n}function Ve(t,n,a,r,u,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ns(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ns(t,""+r);else return;break;case"className":Il(t,"class",r);break;case"tabIndex":Il(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Il(t,a,r);break;case"style":hm(t,r,f);return;case"data":if(n!=="object"){Il(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Bl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",u.name,u,null),Ve(t,n,"formEncType",u.formEncType,u,null),Ve(t,n,"formMethod",u.formMethod,u,null),Ve(t,n,"formTarget",u.formTarget,u,null)):(Ve(t,n,"encType",u.encType,u,null),Ve(t,n,"method",u.method,u,null),Ve(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Bl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Xi);return;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Bl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ee("beforetoggle",t),Ee("toggle",t),zl(t,"popover",r);break;case"xlinkActuate":ua(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ua(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ua(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ua(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ua(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ua(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ua(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ua(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ua(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":zl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Ey.get(a)||a,zl(t,a,r);else return}Ne=!0}function kh(t,n,a,r,u,f){switch(a){case"style":hm(t,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")ns(t,r);else if(typeof r=="number"||typeof r=="bigint")ns(t,""+r);else return;break;case"onScroll":r!=null&&Ee("scroll",t);return;case"onScrollEnd":r!=null&&Ee("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!kn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[qt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,r,u);break t}Ne=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):zl(t,a,r)}return}Ne=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",t),Ee("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,f,x,a,null)}}u&&Ve(t,n,"srcSet",a.srcSet,a,null),r&&Ve(t,n,"src",a.src,a,null);return;case"input":Ee("invalid",t);var T=f=x=u=null,B=null,K=null;for(r in a)if(a.hasOwnProperty(r)){var st=a[r];if(st!=null)switch(r){case"name":u=st;break;case"type":x=st;break;case"checked":B=st;break;case"defaultChecked":K=st;break;case"value":f=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Ve(t,n,r,st,a,null)}}lm(t,f,T,B,K,x,u,!1);return;case"select":Ee("invalid",t),r=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":r=T;default:Ve(t,n,u,T,a,null)}n=f,a=x,t.multiple=!!r,n!=null?es(t,!!r,n,!1):a!=null&&es(t,!!r,a,!0);return;case"textarea":Ee("invalid",t),f=u=r=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":r=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ve(t,n,x,T,a,null)}cm(t,r,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ve(t,n,B,r,a,null)}return;case"dialog":Ee("beforetoggle",t),Ee("toggle",t),Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":Ee("load",t);break;case"video":case"audio":for(r=0;r<nl.length;r++)Ee(nl[r],t);break;case"image":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"embed":case"source":case"link":Ee("error",t),Ee("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(r=a[K],r!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,K,r,a,null)}return;default:if(Xc(n)){for(st in a)a.hasOwnProperty(st)&&(r=a[st],r!==void 0&&kh(t,n,st,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Ve(t,n,T,r,a,null))}var rM={};function sM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,T=null,B=null,K=null,st=null;for(rt in a){var _t=a[rt];if(a.hasOwnProperty(rt)&&_t!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":B=_t;default:r.hasOwnProperty(rt)||Ve(t,n,rt,null,r,_t)}}for(var W in r){var rt=r[W];if(_t=a[W],r.hasOwnProperty(W)&&(rt!=null||_t!=null))switch(W){case"type":rt!==_t&&(Ne=!0),f=rt;break;case"name":rt!==_t&&(Ne=!0),u=rt;break;case"checked":rt!==_t&&(Ne=!0),K=rt;break;case"defaultChecked":rt!==_t&&(Ne=!0),st=rt;break;case"value":rt!==_t&&(Ne=!0),x=rt;break;case"defaultValue":rt!==_t&&(Ne=!0),T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==_t&&Ve(t,n,W,rt,r,_t)}}Vc(t,x,T,B,K,st,f,u);return;case"select":rt=x=T=W=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":rt=B;default:r.hasOwnProperty(f)||Ve(t,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":f!==B&&(Ne=!0),W=f;break;case"defaultValue":f!==B&&(Ne=!0),T=f;break;case"multiple":f!==B&&(Ne=!0),x=f;default:f!==B&&Ve(t,n,u,f,r,B)}n=T,a=x,r=rt,W!=null?es(t,!!a,W,!1):!!r!=!!a&&(n!=null?es(t,!!a,n,!0):es(t,!!a,a?[]:"",!1));return;case"textarea":rt=W=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ve(t,n,T,null,r,u)}for(x in r)if(u=r[x],f=a[x],r.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":u!==f&&(Ne=!0),W=u;break;case"defaultValue":u!==f&&(Ne=!0),rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(t,n,x,u,r,f)}um(t,W,rt);return;case"option":for(var Ot in a)if(W=a[Ot],a.hasOwnProperty(Ot)&&W!=null&&!r.hasOwnProperty(Ot))switch(Ot){case"selected":t.selected=!1;break;default:Ve(t,n,Ot,null,r,W)}for(B in r)if(W=r[B],rt=a[B],r.hasOwnProperty(B)&&W!==rt&&(W!=null||rt!=null))switch(B){case"selected":W!==rt&&(Ne=!0),t.selected=W&&typeof W!="function"&&typeof W!="symbol";break;default:Ve(t,n,B,W,r,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in a)W=a[Wt],a.hasOwnProperty(Wt)&&W!=null&&!r.hasOwnProperty(Wt)&&Ve(t,n,Wt,null,r,W);for(K in r)if(W=r[K],rt=a[K],r.hasOwnProperty(K)&&W!==rt&&(W!=null||rt!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,n));break;default:Ve(t,n,K,W,r,rt)}return;default:if(Xc(n)){for(var me in a)W=a[me],a.hasOwnProperty(me)&&W!==void 0&&!r.hasOwnProperty(me)&&kh(t,n,me,void 0,r,W);for(st in r)W=r[st],rt=a[st],!r.hasOwnProperty(st)||W===rt||W===void 0&&rt===void 0||kh(t,n,st,W,r,rt);return}}for(var Q in a)W=a[Q],a.hasOwnProperty(Q)&&W!=null&&!r.hasOwnProperty(Q)&&Ve(t,n,Q,null,r,W);for(_t in r)W=r[_t],rt=a[_t],!r.hasOwnProperty(_t)||W===rt||W==null&&rt==null||Ve(t,n,_t,W,r,rt)}function _v(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,x=u.initiatorType,T=u.duration;if(f&&T&&_v(x)){for(x=0,T=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],K=B.startTime;if(K>T)break;var st=B.transferSize,_t=B.initiatorType;st&&_v(_t)&&(B=B.responseEnd,x+=st*(B<T?1:(T-K)/(B-K)))}if(--r,n+=8*(f+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xh=null,Yh=null;function al(t){return t.nodeType===9?t:t.ownerDocument}function xv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Sv(t,n,a,r){return a=al(a).createElement(t),a[Dt]=r,a[qt]=n,Nn(a,t,n),Ue(a),a}function qh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wh=null;function lM(){var t=window.event;return t&&t.type==="popstate"?t===Wh?!1:(Wh=t,!0):(Wh=null,!1)}var jh=typeof setTimeout=="function"?setTimeout:void 0,uM=typeof clearTimeout=="function"?clearTimeout:void 0,Mv=typeof Promise=="function"?Promise:void 0,Ev=typeof requestAnimationFrame=="function"?requestAnimationFrame:jh,cM=typeof queueMicrotask=="function"?queueMicrotask:typeof Mv<"u"?function(t){return Mv.resolve(null).then(t).catch(fM)}:jh;function fM(t){setTimeout(function(){throw t})}function tr(t){return t==="head"}function Tv(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Fs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")nd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,nd(a);for(var f=a.firstChild;f;){var x=f.nextSibling,T=f.nodeName;f[Oe]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&nd(t.ownerDocument.body);a=u}while(a);Fs(n)}function bv(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Av(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function Rv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function hM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Zh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return hM(n,a,t)}function dM(t){return t.documentElement.clientHeight}function pM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function mM(t,n,a,r,u,f,x,T,B){var K=n.nodeType===9?n:n.ownerDocument;try{var st=K.startViewTransition({update:function(){var W=K.defaultView,rt=W.navigation&&W.navigation.transition,Ot=K.fonts.status;r();var Wt=[];if(Ot==="loaded"&&(dM(K),K.fonts.status==="loading"&&Wt.push(K.fonts.ready)),Ot=Wt.length,t!==null)for(var me=t.suspenseyImages,Q=0,V=0;V<me.length;V++){var at=me[V];if(!at.complete){var vt=at.getBoundingClientRect();if(0<vt.bottom&&0<vt.right&&vt.top<W.innerHeight&&vt.left<W.innerWidth){if(Q+=jv(at),Q>Wu){Wt.length=Ot;break}at=new Promise(pM.bind(at)),Wt.push(at)}}}if(0<Wt.length)return W=Promise.race([Promise.all(Wt),new Promise(function(Vt){return setTimeout(Vt,500)})]).then(u,u),(rt?Promise.allSettled([rt.finished,W]):W).then(f,f);if(u(),rt)return rt.finished.then(f,f);f()},types:a});K.__reactViewTransition=st;var _t=[];return st.ready.then(function(){for(var W=K.documentElement.getAnimations({subtree:!0}),rt=0;rt<W.length;rt++){var Ot=W[rt],Wt=Ot.effect,me=Wt.pseudoElement;if(me!=null&&me.startsWith("::view-transition")){_t.push(Ot),Ot=Wt.getKeyframes();for(var Q=me=void 0,V=!0,at=0;at<Ot.length;at++){var vt=Ot[at],Vt=vt.width;if(me===void 0)me=Vt;else if(me!==Vt){V=!1;break}if(Vt=vt.height,Q===void 0)Q=Vt;else if(Q!==Vt){V=!1;break}delete vt.width,delete vt.height,vt.transform==="none"&&delete vt.transform}V&&me!==void 0&&Q!==void 0&&(Wt.setKeyframes(Ot),V=getComputedStyle(Wt.target,Wt.pseudoElement),V.width!==me||V.height!==Q)&&(V=Ot[0],V.width=me,V.height=Q,V=Ot[Ot.length-1],V.width=me,V.height=Q,Wt.setKeyframes(Ot))}}x()},function(W){K.__reactViewTransition===st&&(K.__reactViewTransition=null);try{if(typeof W=="object"&&W!==null)switch(W.name){case"InvalidStateError":(W.message==="View transition was skipped because document visibility state is hidden."||W.message==="Skipping view transition because document visibility state has become hidden."||W.message==="Skipping view transition because viewport size changed."||W.message==="Transition was aborted because of invalid state")&&(W=null)}W!==null&&B(W)}finally{r(),u(),x()}}),st.finished.finally(function(){for(var W=0;W<_t.length;W++)_t[W].cancel();K.__reactViewTransition===st&&(K.__reactViewTransition=null),T()}),st}catch{return r(),u(),x(),null}}function Ir(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ir.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ir.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&r.push(a[u])}return r},Ir.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Cv(t){return{name:t,group:new Ir("group",t),imagePair:new Ir("image-pair",t),old:new Ir("old",t),new:new Ir("new",t)}}function hi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}hi.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Dv(f,t,n,a)===-1){var x=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(B){x.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),r!==null&&(u=x.removeEventListener.bind(x,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Ls(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),m(this._fragmentFiber.child,!1,gM,t,T,r)}this._eventListeners=f}};function gM(t,n,a,r){return M(t).addEventListener(n,a,r),!1}hi.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=Dv(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var f=u.cleanup;u=Ls(u.optionsOrUseCapture),m(this._fragmentFiber.child,!1,vM,t,a,u),r.splice(n,1),f!==null&&f()}};function vM(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Ls(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function wv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Dv(t,n,a,r){if(t.length===0)return-1;r=wv(r);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&wv(f.optionsOrUseCapture)===r)return u}return-1}hi.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];r.addEventListener(f.type,f.attachedListener,Ls(f.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],r.removeEventListener(f.type,f.attachedListener,Ls(f.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},hi.prototype.focus=function(t){m(this._fragmentFiber.child,!0,Uv,t,void 0,void 0)};function Uv(t,n){return t.tag===6?!1:(t=M(t),wM(t,n))}hi.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,Qh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Uv(n[a],t);a--);};function Qh(t,n){return n.push(t),!1}hi.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=M(t),t=al(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,_M,t,void 0,void 0))};function _M(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}hi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,xM,t,void 0,void 0)};function xM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}hi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,yM,t,void 0,void 0);for(var a=n=0;a<Oi.length;a++){var r=Oi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Oi[n++]=r}Oi.length=n}};function yM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Oi=[],Kh=!1;function SM(t,n,a){Oi.push({fragmentInstance:t,observer:n,instance:a}),Kh||(Kh=!0,DM(function(){Kh=!1;var r=Oi;Oi=[];for(var u=0;u<r.length;u++){var f=r[u];f.observer.unobserve(f.instance)}}))}hi.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,MM,t,void 0,void 0),t};function MM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}hi.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},hi.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,Qh,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),B=x&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=r&&f&&x&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||f&&u===t||B||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||EM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function EM(t,n,a,r,u){var f=Pe(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=y(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=z(a,f,O),n===null?n=!1:(m(n,!0,N,f,a),f=v,v=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=z(r,f,O),n===null?n=!1:(m(n,!0,A,f,r),f=v,R=v=null,n=f!==null)),n):!1}function Nv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}hi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,Qh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),Nv(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=M(u),Nv(u,a)):M(u).scrollIntoView(t),r+=a?-1:1}};function TM(t,n){return t=M(t),Lv(t,n),!1}function Lv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Ov(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,Ls(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var x=0,T=0;T<Oi.length;T++){var B=Oi[T];(B.fragmentInstance!==n||B.observer!==f||B.instance!==t)&&(Oi[x++]=B)}Oi.length=x,f.observe(t)}),Lv(t,n))}function bM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,Ls(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?SM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Jh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jh(a),ee(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function AM(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Oe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function RM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=bi(t.nextSibling),t===null))return null;return t}function Pv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=bi(t.nextSibling),t===null))return null;return t}function $h(t){return t.data==="$?"||t.data==="$~"}function td(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function CM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function bi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ed=null;function zv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return bi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Iv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function wM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function DM(t){Ev(function(){Ev(function(n){return t(n)})})}function Bv(t,n,a){switch(n=al(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Fv(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&Ve(t,n,r,null,rM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Xi&&(t.onclick=null),ee(t)}function nd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ee(t)}var Ai=new Map,Hv=new Set;function rl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ma=Gt.d;Gt.d={f:UM,r:NM,D:LM,C:OM,L:PM,m:zM,X:BM,S:IM,M:FM};function UM(){var t=Ma.f(),n=Bu();return t||n}function NM(t){var n=_e(t);n!==null&&n.tag===5&&n.type==="form"?Vg(n):Ma.r(t)}var Os=typeof document>"u"?null:document;function Gv(t,n,a){var r=Os;if(r&&typeof n=="string"&&n){var u=_i(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Hv.has(u)||(Hv.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Nn(n,"link",t),Ue(n),r.head.appendChild(n)))}}function LM(t){Ma.D(t),Gv("dns-prefetch",t,null)}function OM(t,n){Ma.C(t,n),Gv("preconnect",t,n)}function PM(t,n,a){Ma.L(t,n,a);var r=Os;if(r&&t&&n){var u='link[rel="preload"][as="'+_i(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+_i(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+_i(a.imageSizes)+'"]')):u+='[href="'+_i(t)+'"]';var f=u;switch(n){case"style":f=Ps(t);break;case"script":f=zs(t)}if(!(Ai.has(f)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ai.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(sl(f))||n==="script"&&r.querySelector(ol(f))))){var x=r.createElement("link");Nn(x,"link",t),n==="style"&&(x[De]=!0,x.onload=x.onerror=function(){La(x)}),Ue(x),r.head.appendChild(x)}}}function zM(t,n){Ma.m(t,n);var a=Os;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+_i(r)+'"][href="'+_i(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=zs(t)}if(!Ai.has(f)&&(t=P({rel:"modulepreload",href:t},n),Ai.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ol(f)))return}r=a.createElement("link"),Nn(r,"link",t),Ue(r),a.head.appendChild(r)}}}function IM(t,n,a){Ma.S(t,n,a);var r=Os;if(r&&t){var u=ai(r).hoistableStyles,f=Ps(t);n=n||"default";var x=u.get(f);if(!x){var T={loading:0,preload:null};if(x=r.querySelector(sl(f)))T.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ai.get(f))&&id(t,a);var B=x=r.createElement("link");Ue(B),Nn(B,"link",t),B._p=new Promise(function(K,st){B.onload=K,B.onerror=st}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yu(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:T},u.set(f,x)}}}function BM(t,n){Ma.X(t,n);var a=Os;if(a&&t){var r=ai(a).hoistableScripts,u=zs(t),f=r.get(u);f||(f=a.querySelector(ol(u)),f||(t=P({src:t,async:!0},n),(n=Ai.get(u))&&ad(t,n),f=a.createElement("script"),Ue(f),Nn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function FM(t,n){Ma.M(t,n);var a=Os;if(a&&t){var r=ai(a).hoistableScripts,u=zs(t),f=r.get(u);f||(f=a.querySelector(ol(u)),f||(t=P({src:t,async:!0,type:"module"},n),(n=Ai.get(u))&&ad(t,n),f=a.createElement("script"),Ue(f),Nn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Vv(t,n,a,r){var u=(u=Ie.current)?rl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ps(a.href),n=ai(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ps(a.href);var f=ai(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(sl(t)))?f._p||(x.instance=f,x.state.loading=5):(f=Ai.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ai.set(t,f)),HM(u,t,f,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=zs(a),n=ai(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ps(t){return'href="'+_i(t)+'"'}function sl(t){return'link[rel="stylesheet"]['+t+"]"}function kv(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function HM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[De]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[De]=!0,n.onload=n.onerror=La.bind(null,n),Nn(n,"link",a),Ue(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function zs(t){return'[src="'+_i(t)+'"]'}function ol(t){return"script[async]"+t}function Xv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+_i(a.href)+'"]');if(r)return n.instance=r,Ue(r),r;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ue(r),Nn(r,"style",u),Yu(r,a.precedence,t),n.instance=r;case"stylesheet":u=Ps(a.href);var f=t.querySelector(sl(u));if(f)return n.state.loading|=4,n.instance=f,Ue(f),f;r=kv(a),(u=Ai.get(u))&&id(r,u),f=(t.ownerDocument||t).createElement("link"),Ue(f);var x=f;return x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),Nn(f,"link",r),n.state.loading|=4,Yu(f,a.precedence,t),n.instance=f;case"script":return f=zs(a.src),(u=t.querySelector(ol(f)))?(n.instance=u,Ue(u),u):(r=a,(u=Ai.get(f))&&(r=P({},a),ad(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ue(u),Nn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Yu(r,a.precedence,t));return n.instance}function Yu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,x=0;x<r.length;x++){var T=r[x];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var qu=null;function Yv(t,n,a){if(qu===null){var r=new Map,u=qu=new Map;u.set(a,r)}else u=qu,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Oe]||f[Dt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=r.get(x);T?T.push(f):r.set(x,[f])}}return r}function rd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function GM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Wv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function jv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Zv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=jv(n),t.suspenseyImages.push(n)),t=XM.bind(t),n.decode().then(t,t))}function VM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ps(r.href),f=n.querySelector(sl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ll.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Ue(f);return}f=n.ownerDocument||n,r=kv(r),(u=Ai.get(u))&&id(r,u),f=f.createElement("link"),Ue(f);var x=f;x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),Nn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ll.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wu=0;function kM(t,n){return t.stylesheets&&t.count===0&&Zu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Zu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Wu===0&&(Wu=62500*oM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Zu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Wu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Qv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Zu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ll(){this.count--,Qv(this)}function XM(){this.imgCount--,Qv(this)}var ju=null;function Zu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ju=new Map,n.forEach(YM,t),ju=null,ll.call(t))}function YM(t,n){if(!(n.state.loading&4)){var a=ju.get(t);if(a)var r=a.get(null);else{a=new Map,ju.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,u),a.set(x,u),this.count++,r=ll.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Is={$$typeof:lt,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function qM(t,n,a,r,u,f,x,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Eo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eo(0),this.hiddenUpdates=Eo(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function Kv(t,n,a,r,u,f,x,T,B,K,st,_t){return t=new qM(t,n,a,x,B,K,st,_t,T),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),t.current=f,f.stateNode=t,n=yf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Tf(f),t}function Jv(t){return t?(t=us,t):us}function $v(t,n,a,r,u,f){u=Jv(u),r.context===null?r.context=u:r.pendingContext=u,r=Va(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ka(t,r,n),a!==null&&(ti(a,t,n),Fo(a,t,n))}function t_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function sd(t,n){t_(t,n),(t=t.alternate)&&t_(t,n)}function e_(t){if(t.tag===13||t.tag===31){var n=yr(t,67108864);n!==null&&ti(n,t,67108864),sd(t,67108864)}}function n_(t){if(t.tag===13||t.tag===31){var n=fi();n=ft(n);var a=yr(t,n);a!==null&&ti(a,t,n),sd(t,n)}}var Bs=!0;function WM(t,n,a,r){var u=Mt.T;Mt.T=null;var f=Gt.p;try{Gt.p=2,od(t,n,a,r)}finally{Gt.p=f,Mt.T=u}}function jM(t,n,a,r){var u=Mt.T;Mt.T=null;var f=Gt.p;try{Gt.p=8,od(t,n,a,r)}finally{Gt.p=f,Mt.T=u}}function od(t,n,a,r){if(Bs){var u=ld(r);if(u===null)Vh(t,n,r,Qu,a),a_(t,r);else if(QM(u,t,n,a,r))r.stopPropagation();else if(a_(t,r),n&4&&-1<ZM.indexOf(t)){for(;u!==null;){var f=_e(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=vi(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var B=1<<31-On(x);T.entanglements[1]|=B,x&=~B}ta(f),(ze&6)===0&&(Pu=k()+500,el(0))}}break;case 31:case 13:T=yr(f,2),T!==null&&ti(T,f,2),Bu(),sd(f,2)}if(f=ld(r),f===null&&Vh(t,n,r,Qu,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Vh(t,n,r,null,a)}}function ld(t){return t=qc(t),ud(t)}var Qu=null;function ud(t){if(Qu=null,t=Pe(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Qu=t,null}function i_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case Ut:return 2;case kt:return 8;case Et:case xt:return 32;case jt:return 268435456;default:return 32}default:return 32}}var cd=!1,er=null,nr=null,ir=null,ul=new Map,cl=new Map,ar=[],ZM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a_(t,n){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":ul.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(n.pointerId)}}function fl(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=_e(n),n!==null&&e_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function QM(t,n,a,r,u){switch(n){case"focusin":return er=fl(er,t,n,a,r,u),!0;case"dragenter":return nr=fl(nr,t,n,a,r,u),!0;case"mouseover":return ir=fl(ir,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return ul.set(f,fl(ul.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,cl.set(f,fl(cl.get(f)||null,t,n,a,r,u)),!0}return!1}function r_(t){var n=Pe(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,It(t.priority,function(){n_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,It(t.priority,function(){n_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ku(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ld(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Yc=r,a.target.dispatchEvent(r),Yc=null}else return n=_e(a),n!==null&&e_(n),t.blockedOn=a,!1;n.shift()}return!0}function s_(t,n,a){Ku(t)&&a.delete(n)}function KM(){cd=!1,er!==null&&Ku(er)&&(er=null),nr!==null&&Ku(nr)&&(nr=null),ir!==null&&Ku(ir)&&(ir=null),ul.forEach(s_),cl.forEach(s_)}function Ju(t,n){t.blockedOn===n&&(t.blockedOn=null,cd||(cd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,KM)))}var $u=null;function o_(t){$u!==t&&($u=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){$u===t&&($u=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(ud(r||a)===null)continue;break}var f=_e(a);f!==null&&(t.splice(n,3),n-=3,Yf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Fs(t){function n(B){return Ju(B,t)}er!==null&&Ju(er,t),nr!==null&&Ju(nr,t),ir!==null&&Ju(ir,t),ul.forEach(n),cl.forEach(n);for(var a=0;a<ar.length;a++){var r=ar[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)r_(a),a.blockedOn===null&&ar.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],x=u[qt]||null;if(typeof f=="function")x||o_(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[qt]||null)T=x.formAction;else if(ud(u)!==null)continue}else T=x.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),o_(a)}}}function l_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function fd(t){this._internalRoot=t}tc.prototype.render=fd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=fi();$v(a,r,t,n,null,null)},tc.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;$v(t.current,2,null,t,null,null),Bu(),n[ie]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ar.length&&n!==0&&n<ar[a].priority;a++);ar.splice(a,0,t),a===0&&r_(t)}};var u_=e.version;if(u_!=="19.3.1")throw Error(s(527,u_,"19.3.1"));Gt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var JM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Te=ec.inject(JM),en=ec}catch{}}return dl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=Jg,f=$g,x=t0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Kv(t,1,!1,null,null,a,r,null,u,f,x,l_),t[ie]=n.current,Gh(t),new fd(n)},dl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=Jg,x=$g,T=t0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Kv(t,1,!0,n,a??null,r,u,B,f,x,T,l_),n.context=Jv(null),a=n.current,r=fi(),r=ft(r),u=Va(r),u.callback=null,ka(a,u,r),a=r,n.current.lanes=a,vr(n,a),ta(n),t[ie]=n.current,Gh(t),new tc(n)},dl.version="19.3.1",dl}var x_;function cE(){if(x_)return pd.exports;x_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),pd.exports=uE(),pd.exports}var fE=cE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ux=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=ye.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},p)=>ye.createElement("svg",{ref:p,...dE,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:Ux("lucide",l),...d},[...h.map(([g,_])=>ye.createElement(g,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=(o,e)=>{const i=ye.forwardRef(({className:s,...l},c)=>ye.createElement(pE,{ref:c,iconNode:e,className:Ux(`lucide-${hE(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=ni("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=ni("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=ni("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=ni("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=ni("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=ni("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=ni("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=ni("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=ni("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=ni("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=ni("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=ni("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=ni("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=ni("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gp="180",TE=0,T_=1,bE=2,Nx=1,AE=2,Ca=3,dr=0,Gn=1,na=2,wa=0,ro=1,Lc=2,b_=3,A_=4,RE=5,qr=100,CE=101,wE=102,DE=103,UE=104,NE=200,LE=201,OE=202,PE=203,Qd=204,Kd=205,zE=206,IE=207,BE=208,FE=209,HE=210,GE=211,VE=212,kE=213,XE=214,Jd=0,$d=1,tp=2,oo=3,ep=4,np=5,ip=6,ap=7,Lx=0,YE=1,qE=2,Da=0,Ox=1,Px=2,zx=3,Vp=4,Ix=5,Bx=6,Fx=7,Hx=300,lo=301,uo=302,rp=303,sp=304,Ic=306,op=1e3,jr=1001,lp=1002,gi=1003,WE=1004,nc=1005,ia=1006,xd=1007,Zr=1008,Gi=1009,Gx=1010,Vx=1011,Tl=1012,kp=1013,Jr=1014,aa=1015,Hi=1016,Xp=1017,Yp=1018,bl=1020,kx=35902,Xx=35899,Yx=1021,qx=1022,Fi=1023,Al=1026,Rl=1027,qp=1028,Wp=1029,Wx=1030,jp=1031,Zp=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,up=35840,cp=35841,fp=35842,hp=35843,dp=36196,pp=37492,mp=37496,gp=37808,vp=37809,_p=37810,xp=37811,yp=37812,Sp=37813,Mp=37814,Ep=37815,Tp=37816,bp=37817,Ap=37818,Rp=37819,Cp=37820,wp=37821,Dp=36492,Up=36494,Np=36495,Lp=36283,Op=36284,Pp=36285,zp=36286,jE=3200,ZE=3201,jx=0,QE=1,hr="",ei="srgb",co="srgb-linear",Oc="linear",Xe="srgb",Hs=7680,R_=519,KE=512,JE=513,$E=514,Zx=515,t1=516,e1=517,n1=518,i1=519,C_=35044,w_="300 es",ra=2e3,Pc=2001;class po{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let D_=1234567;const Ml=Math.PI/180,Cl=180/Math.PI;function mo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function Re(o,e,i){return Math.max(e,Math.min(i,o))}function Qp(o,e){return(o%e+e)%e}function a1(o,e,i,s,l){return s+(o-e)*(l-s)/(i-e)}function r1(o,e,i){return o!==e?(i-o)/(e-o):0}function El(o,e,i){return(1-i)*o+i*e}function s1(o,e,i,s){return El(o,e,1-Math.exp(-i*s))}function o1(o,e=1){return e-Math.abs(Qp(o,e*2)-e)}function l1(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function u1(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function c1(o,e){return o+Math.floor(Math.random()*(e-o+1))}function f1(o,e){return o+Math.random()*(e-o)}function h1(o){return o*(.5-Math.random())}function d1(o){o!==void 0&&(D_=o);let e=D_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function p1(o){return o*Ml}function m1(o){return o*Cl}function g1(o){return(o&o-1)===0&&o!==0}function v1(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function _1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function x1(o,e,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),p=h(i/2),g=c((e+s)/2),_=h((e+s)/2),m=c((e-s)/2),y=h((e-s)/2),S=c((s-e)/2),E=h((s-e)/2);switch(l){case"XYX":o.set(d*_,p*m,p*y,d*g);break;case"YZY":o.set(p*y,d*_,p*m,d*g);break;case"ZXZ":o.set(p*m,p*y,d*_,d*g);break;case"XZX":o.set(d*_,p*E,p*S,d*g);break;case"YXY":o.set(p*S,d*_,p*E,d*g);break;case"ZYZ":o.set(p*E,p*S,d*_,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function no(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Fn={DEG2RAD:Ml,RAD2DEG:Cl,generateUUID:mo,clamp:Re,euclideanModulo:Qp,mapLinear:a1,inverseLerp:r1,lerp:El,damp:s1,pingpong:o1,smoothstep:l1,smootherstep:u1,randInt:c1,randFloat:f1,randFloatSpread:h1,seededRandom:d1,degToRad:p1,radToDeg:m1,isPowerOfTwo:g1,ceilPowerOfTwo:v1,floorPowerOfTwo:_1,setQuaternionFromProperEuler:x1,normalize:jn,denormalize:no};class ce{constructor(e=0,i=0){ce.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Re(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sa{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let p=s[l+0],g=s[l+1],_=s[l+2],m=s[l+3];const y=c[h+0],S=c[h+1],E=c[h+2],C=c[h+3];if(d===0){e[i+0]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m;return}if(d===1){e[i+0]=y,e[i+1]=S,e[i+2]=E,e[i+3]=C;return}if(m!==C||p!==y||g!==S||_!==E){let M=1-d;const v=p*y+g*S+_*E+m*C,R=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const O=Math.sqrt(N),z=Math.atan2(O,v*R);M=Math.sin(M*z)/O,d=Math.sin(d*z)/O}const A=d*R;if(p=p*M+y*A,g=g*M+S*A,_=_*M+E*A,m=m*M+C*A,M===1-d){const O=1/Math.sqrt(p*p+g*g+_*_+m*m);p*=O,g*=O,_*=O,m*=O}}e[i]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],p=s[l+1],g=s[l+2],_=s[l+3],m=c[h],y=c[h+1],S=c[h+2],E=c[h+3];return e[i]=d*E+_*m+p*S-g*y,e[i+1]=p*E+_*y+g*m-d*S,e[i+2]=g*E+_*S+d*y-p*m,e[i+3]=_*E-d*m-p*y-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,g=d(s/2),_=d(l/2),m=d(c/2),y=p(s/2),S=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=y*_*m+g*S*E,this._y=g*S*m-y*_*E,this._z=g*_*E+y*S*m,this._w=g*_*m-y*S*E;break;case"YXZ":this._x=y*_*m+g*S*E,this._y=g*S*m-y*_*E,this._z=g*_*E-y*S*m,this._w=g*_*m+y*S*E;break;case"ZXY":this._x=y*_*m-g*S*E,this._y=g*S*m+y*_*E,this._z=g*_*E+y*S*m,this._w=g*_*m-y*S*E;break;case"ZYX":this._x=y*_*m-g*S*E,this._y=g*S*m+y*_*E,this._z=g*_*E-y*S*m,this._w=g*_*m+y*S*E;break;case"YZX":this._x=y*_*m+g*S*E,this._y=g*S*m+y*_*E,this._z=g*_*E-y*S*m,this._w=g*_*m-y*S*E;break;case"XZY":this._x=y*_*m-g*S*E,this._y=g*S*m-y*_*E,this._z=g*_*E+y*S*m,this._w=g*_*m+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],g=i[2],_=i[6],m=i[10],y=s+d+m;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-g)*S,this._z=(h-l)*S}else if(s>d&&s>m){const S=2*Math.sqrt(1+s-d-m);this._w=(_-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+g)/S}else if(d>m){const S=2*Math.sqrt(1+d-s-m);this._w=(c-g)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+m-s-d);this._w=(h-l)/S,this._x=(c+g)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Re(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,g=i._z,_=i._w;return this._x=s*_+h*d+l*g-c*p,this._y=l*_+h*p+c*d-s*g,this._z=c*_+h*g+s*p-l*d,this._w=h*_-s*d-l*p-c*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const g=Math.sqrt(p),_=Math.atan2(g,d),m=Math.sin((1-i)*_)/g,y=Math.sin(i*_)/g;return this._w=h*m+this._w*y,this._x=s*m+this._x*y,this._y=l*m+this._y*y,this._z=c*m+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,i=0,s=0){j.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(U_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(U_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,g=2*(h*l-d*s),_=2*(d*i-c*l),m=2*(c*s-h*i);return this.x=i+p*g+h*m-d*_,this.y=s+p*_+d*g-c*m,this.z=l+p*m+c*_-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Re(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new j,U_=new sa;class ge{constructor(e,i,s,l,c,h,d,p,g){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,g)}set(e,i,s,l,c,h,d,p,g){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=h,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],g=s[1],_=s[4],m=s[7],y=s[2],S=s[5],E=s[8],C=l[0],M=l[3],v=l[6],R=l[1],N=l[4],A=l[7],O=l[2],z=l[5],P=l[8];return c[0]=h*C+d*R+p*O,c[3]=h*M+d*N+p*z,c[6]=h*v+d*A+p*P,c[1]=g*C+_*R+m*O,c[4]=g*M+_*N+m*z,c[7]=g*v+_*A+m*P,c[2]=y*C+S*R+E*O,c[5]=y*M+S*N+E*z,c[8]=y*v+S*A+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8];return i*h*_-i*d*g-s*c*_+s*d*p+l*c*g-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8],m=_*h-d*g,y=d*p-_*c,S=g*c-h*p,E=i*m+s*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=m*C,e[1]=(l*g-_*s)*C,e[2]=(d*s-l*h)*C,e[3]=y*C,e[4]=(_*i-l*p)*C,e[5]=(l*c-d*i)*C,e[6]=S*C,e[7]=(s*p-g*i)*C,e[8]=(h*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const p=Math.cos(c),g=Math.sin(c);return this.set(s*p,s*g,-s*(p*h+g*d)+h+e,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Sd.makeScale(e,i)),this}rotate(e){return this.premultiply(Sd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Sd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sd=new ge;function Qx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function y1(){const o=zc("canvas");return o.style.display="block",o}const N_={};function wl(o){o in N_||(N_[o]=!0,console.warn(o))}function S1(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const L_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function M1(){const o={enabled:!0,workingColorSpace:co,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Xe&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=so(l.r),l.g=so(l.g),l.b=so(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===hr?Oc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return wl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return wl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[co]:{primaries:e,whitePoint:s,transfer:Oc,toXYZ:L_,fromXYZ:O_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:s,transfer:Xe,toXYZ:L_,fromXYZ:O_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),o}const we=M1();function Ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function so(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Gs;class E1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Gs===void 0&&(Gs=zc("canvas")),Gs.width=e.width,Gs.height=e.height;const l=Gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Gs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=zc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ua(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ua(i[s]/255)*255):i[s]=Ua(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T1=0;class Kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Md(l[h].image)):c.push(Md(l[h]))}else c=Md(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Md(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?E1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let b1=0;const Ed=new j;class Vn extends po{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=jr,l=jr,c=ia,h=Zr,d=Fi,p=Gi,g=Vn.DEFAULT_ANISOTROPY,_=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=mo(),this.name="",this.source=new Kp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case op:e.x=e.x-Math.floor(e.x);break;case jr:e.x=e.x<0?0:1;break;case lp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case op:e.y=e.y-Math.floor(e.y);break;case jr:e.y=e.y<0?0:1;break;case lp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Hx;Vn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,g=p[0],_=p[4],m=p[8],y=p[1],S=p[5],E=p[9],C=p[2],M=p[6],v=p[10];if(Math.abs(_-y)<.01&&Math.abs(m-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(m+C)<.1&&Math.abs(E+M)<.1&&Math.abs(g+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(g+1)/2,A=(S+1)/2,O=(v+1)/2,z=(_+y)/4,P=(m+C)/4,F=(E+M)/4;return N>A&&N>O?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=z/s,c=P/s):A>O?A<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),s=z/l,c=F/l):O<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),s=P/c,l=F/c),this.set(s,l,c,i),this}let R=Math.sqrt((M-E)*(M-E)+(m-C)*(m-C)+(y-_)*(y-_));return Math.abs(R)<.001&&(R=1),this.x=(M-E)/R,this.y=(m-C)/R,this.z=(y-_)/R,this.w=Math.acos((g+S+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this.w=Re(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this.w=Re(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A1 extends po{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ia,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:ia,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Kp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends A1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Kx extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R1 extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Pi):Pi.fromBufferAttribute(c,h),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ic.copy(s.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pl),ac.subVectors(this.max,pl),Vs.subVectors(e.a,pl),ks.subVectors(e.b,pl),Xs.subVectors(e.c,pl),sr.subVectors(ks,Vs),or.subVectors(Xs,ks),Br.subVectors(Vs,Xs);let i=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Br.z,Br.y,sr.z,0,-sr.x,or.z,0,-or.x,Br.z,0,-Br.x,-sr.y,sr.x,0,-or.y,or.x,0,-Br.y,Br.x,0];return!Td(i,Vs,ks,Xs,ac)||(i=[1,0,0,0,1,0,0,0,1],!Td(i,Vs,ks,Xs,ac))?!1:(rc.crossVectors(sr,or),i=[rc.x,rc.y,rc.z],Td(i,Vs,ks,Xs,ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ea=[new j,new j,new j,new j,new j,new j,new j,new j],Pi=new j,ic=new $r,Vs=new j,ks=new j,Xs=new j,sr=new j,or=new j,Br=new j,pl=new j,ac=new j,rc=new j,Fr=new j;function Td(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Fr.fromArray(o,c);const d=l.x*Math.abs(Fr.x)+l.y*Math.abs(Fr.y)+l.z*Math.abs(Fr.z),p=e.dot(Fr),g=i.dot(Fr),_=s.dot(Fr);if(Math.max(-Math.max(p,g,_),Math.min(p,g,_))>d)return!1}return!0}const C1=new $r,ml=new j,bd=new j;class go{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):C1.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ml.subVectors(e,this.center);const i=ml.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(ml,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ml.copy(e.center).add(bd)),this.expandByPoint(ml.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ta=new j,Ad=new j,sc=new j,lr=new j,Rd=new j,oc=new j,Cd=new j;class Jx{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ad.copy(e).add(i).multiplyScalar(.5),sc.copy(i).sub(e).normalize(),lr.copy(this.origin).sub(Ad);const c=e.distanceTo(i)*.5,h=-this.direction.dot(sc),d=lr.dot(this.direction),p=-lr.dot(sc),g=lr.lengthSq(),_=Math.abs(1-h*h);let m,y,S,E;if(_>0)if(m=h*p-d,y=h*d-p,E=c*_,m>=0)if(y>=-E)if(y<=E){const C=1/_;m*=C,y*=C,S=m*(m+h*y+2*d)+y*(h*m+y+2*p)+g}else y=c,m=Math.max(0,-(h*y+d)),S=-m*m+y*(y+2*p)+g;else y=-c,m=Math.max(0,-(h*y+d)),S=-m*m+y*(y+2*p)+g;else y<=-E?(m=Math.max(0,-(-h*c+d)),y=m>0?-c:Math.min(Math.max(-c,-p),c),S=-m*m+y*(y+2*p)+g):y<=E?(m=0,y=Math.min(Math.max(-c,-p),c),S=y*(y+2*p)+g):(m=Math.max(0,-(h*c+d)),y=m>0?c:Math.min(Math.max(-c,-p),c),S=-m*m+y*(y+2*p)+g);else y=h>0?-c:c,m=Math.max(0,-(h*y+d)),S=-m*m+y*(y+2*p)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Ad).addScaledVector(sc,y),S}intersectSphere(e,i){Ta.subVectors(e.center,this.origin);const s=Ta.dot(this.direction),l=Ta.dot(Ta)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,p;const g=1/this.direction.x,_=1/this.direction.y,m=1/this.direction.z,y=this.origin;return g>=0?(s=(e.min.x-y.x)*g,l=(e.max.x-y.x)*g):(s=(e.max.x-y.x)*g,l=(e.min.x-y.x)*g),_>=0?(c=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),m>=0?(d=(e.min.z-y.z)*m,p=(e.max.z-y.z)*m):(d=(e.max.z-y.z)*m,p=(e.min.z-y.z)*m),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ta)!==null}intersectTriangle(e,i,s,l,c){Rd.subVectors(i,e),oc.subVectors(s,e),Cd.crossVectors(Rd,oc);let h=this.direction.dot(Cd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;lr.subVectors(this.origin,e);const p=d*this.direction.dot(oc.crossVectors(lr,oc));if(p<0)return null;const g=d*this.direction.dot(Rd.cross(lr));if(g<0||p+g>h)return null;const _=-d*lr.dot(Cd);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,i,s,l,c,h,d,p,g,_,m,y,S,E,C,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,g,_,m,y,S,E,C,M)}set(e,i,s,l,c,h,d,p,g,_,m,y,S,E,C,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=p,v[2]=g,v[6]=_,v[10]=m,v[14]=y,v[3]=S,v[7]=E,v[11]=C,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Ys.setFromMatrixColumn(e,0).length(),c=1/Ys.setFromMatrixColumn(e,1).length(),h=1/Ys.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),g=Math.sin(l),_=Math.cos(c),m=Math.sin(c);if(e.order==="XYZ"){const y=h*_,S=h*m,E=d*_,C=d*m;i[0]=p*_,i[4]=-p*m,i[8]=g,i[1]=S+E*g,i[5]=y-C*g,i[9]=-d*p,i[2]=C-y*g,i[6]=E+S*g,i[10]=h*p}else if(e.order==="YXZ"){const y=p*_,S=p*m,E=g*_,C=g*m;i[0]=y+C*d,i[4]=E*d-S,i[8]=h*g,i[1]=h*m,i[5]=h*_,i[9]=-d,i[2]=S*d-E,i[6]=C+y*d,i[10]=h*p}else if(e.order==="ZXY"){const y=p*_,S=p*m,E=g*_,C=g*m;i[0]=y-C*d,i[4]=-h*m,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*_,i[9]=C-y*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const y=h*_,S=h*m,E=d*_,C=d*m;i[0]=p*_,i[4]=E*g-S,i[8]=y*g+C,i[1]=p*m,i[5]=C*g+y,i[9]=S*g-E,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const y=h*p,S=h*g,E=d*p,C=d*g;i[0]=p*_,i[4]=C-y*m,i[8]=E*m+S,i[1]=m,i[5]=h*_,i[9]=-d*_,i[2]=-g*_,i[6]=S*m+E,i[10]=y-C*m}else if(e.order==="XZY"){const y=h*p,S=h*g,E=d*p,C=d*g;i[0]=p*_,i[4]=-m,i[8]=g*_,i[1]=y*m+C,i[5]=h*_,i[9]=S*m-E,i[2]=E*m-S,i[6]=d*_,i[10]=C*m+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w1,e,D1)}lookAt(e,i,s){const l=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),ur.crossVectors(s,di),ur.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),ur.crossVectors(s,di)),ur.normalize(),lc.crossVectors(di,ur),l[0]=ur.x,l[4]=lc.x,l[8]=di.x,l[1]=ur.y,l[5]=lc.y,l[9]=di.y,l[2]=ur.z,l[6]=lc.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],g=s[12],_=s[1],m=s[5],y=s[9],S=s[13],E=s[2],C=s[6],M=s[10],v=s[14],R=s[3],N=s[7],A=s[11],O=s[15],z=l[0],P=l[4],F=l[8],w=l[12],U=l[1],H=l[5],J=l[9],et=l[13],mt=l[2],lt=l[6],Y=l[10],q=l[14],X=l[3],ht=l[7],dt=l[11],Nt=l[15];return c[0]=h*z+d*U+p*mt+g*X,c[4]=h*P+d*H+p*lt+g*ht,c[8]=h*F+d*J+p*Y+g*dt,c[12]=h*w+d*et+p*q+g*Nt,c[1]=_*z+m*U+y*mt+S*X,c[5]=_*P+m*H+y*lt+S*ht,c[9]=_*F+m*J+y*Y+S*dt,c[13]=_*w+m*et+y*q+S*Nt,c[2]=E*z+C*U+M*mt+v*X,c[6]=E*P+C*H+M*lt+v*ht,c[10]=E*F+C*J+M*Y+v*dt,c[14]=E*w+C*et+M*q+v*Nt,c[3]=R*z+N*U+A*mt+O*X,c[7]=R*P+N*H+A*lt+O*ht,c[11]=R*F+N*J+A*Y+O*dt,c[15]=R*w+N*et+A*q+O*Nt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],g=e[13],_=e[2],m=e[6],y=e[10],S=e[14],E=e[3],C=e[7],M=e[11],v=e[15];return E*(+c*p*m-l*g*m-c*d*y+s*g*y+l*d*S-s*p*S)+C*(+i*p*S-i*g*y+c*h*y-l*h*S+l*g*_-c*p*_)+M*(+i*g*m-i*d*S-c*h*m+s*h*S+c*d*_-s*g*_)+v*(-l*d*_-i*p*m+i*d*y+l*h*m-s*h*y+s*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8],m=e[9],y=e[10],S=e[11],E=e[12],C=e[13],M=e[14],v=e[15],R=m*M*g-C*y*g+C*p*S-d*M*S-m*p*v+d*y*v,N=E*y*g-_*M*g-E*p*S+h*M*S+_*p*v-h*y*v,A=_*C*g-E*m*g+E*d*S-h*C*S-_*d*v+h*m*v,O=E*m*p-_*C*p-E*d*y+h*C*y+_*d*M-h*m*M,z=i*R+s*N+l*A+c*O;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return e[0]=R*P,e[1]=(C*y*c-m*M*c-C*l*S+s*M*S+m*l*v-s*y*v)*P,e[2]=(d*M*c-C*p*c+C*l*g-s*M*g-d*l*v+s*p*v)*P,e[3]=(m*p*c-d*y*c-m*l*g+s*y*g+d*l*S-s*p*S)*P,e[4]=N*P,e[5]=(_*M*c-E*y*c+E*l*S-i*M*S-_*l*v+i*y*v)*P,e[6]=(E*p*c-h*M*c-E*l*g+i*M*g+h*l*v-i*p*v)*P,e[7]=(h*y*c-_*p*c+_*l*g-i*y*g-h*l*S+i*p*S)*P,e[8]=A*P,e[9]=(E*m*c-_*C*c-E*s*S+i*C*S+_*s*v-i*m*v)*P,e[10]=(h*C*c-E*d*c+E*s*g-i*C*g-h*s*v+i*d*v)*P,e[11]=(_*d*c-h*m*c-_*s*g+i*m*g+h*s*S-i*d*S)*P,e[12]=O*P,e[13]=(_*C*l-E*m*l+E*s*y-i*C*y-_*s*M+i*m*M)*P,e[14]=(E*d*l-h*C*l-E*s*p+i*C*p+h*s*M-i*d*M)*P,e[15]=(h*m*l-_*d*l+_*s*p-i*m*p-h*s*y+i*d*y)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,p=e.z,g=c*h,_=c*d;return this.set(g*h+s,g*d-l*p,g*p+l*d,0,g*d+l*p,_*d+s,_*p-l*h,0,g*p-l*d,_*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,g=c+c,_=h+h,m=d+d,y=c*g,S=c*_,E=c*m,C=h*_,M=h*m,v=d*m,R=p*g,N=p*_,A=p*m,O=s.x,z=s.y,P=s.z;return l[0]=(1-(C+v))*O,l[1]=(S+A)*O,l[2]=(E-N)*O,l[3]=0,l[4]=(S-A)*z,l[5]=(1-(y+v))*z,l[6]=(M+R)*z,l[7]=0,l[8]=(E+N)*P,l[9]=(M-R)*P,l[10]=(1-(y+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=Ys.set(l[0],l[1],l[2]).length();const h=Ys.set(l[4],l[5],l[6]).length(),d=Ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],zi.copy(this);const g=1/c,_=1/h,m=1/d;return zi.elements[0]*=g,zi.elements[1]*=g,zi.elements[2]*=g,zi.elements[4]*=_,zi.elements[5]*=_,zi.elements[6]*=_,zi.elements[8]*=m,zi.elements[9]*=m,zi.elements[10]*=m,i.setFromRotationMatrix(zi),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=ra,p=!1){const g=this.elements,_=2*c/(i-e),m=2*c/(s-l),y=(i+e)/(i-e),S=(s+l)/(s-l);let E,C;if(p)E=c/(h-c),C=h*c/(h-c);else if(d===ra)E=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Pc)E=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=_,g[4]=0,g[8]=y,g[12]=0,g[1]=0,g[5]=m,g[9]=S,g[13]=0,g[2]=0,g[6]=0,g[10]=E,g[14]=C,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=ra,p=!1){const g=this.elements,_=2/(i-e),m=2/(s-l),y=-(i+e)/(i-e),S=-(s+l)/(s-l);let E,C;if(p)E=1/(h-c),C=h/(h-c);else if(d===ra)E=-2/(h-c),C=-(h+c)/(h-c);else if(d===Pc)E=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=_,g[4]=0,g[8]=0,g[12]=y,g[1]=0,g[5]=m,g[9]=0,g[13]=S,g[2]=0,g[6]=0,g[10]=E,g[14]=C,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ys=new j,zi=new Je,w1=new j(0,0,0),D1=new j(1,1,1),ur=new j,lc=new j,di=new j,P_=new Je,z_=new sa;class Vi{constructor(e=0,i=0,s=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],g=l[5],_=l[9],m=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(Re(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-m,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return P_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return z_.setFromEuler(this),this.setFromQuaternion(z_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class $x{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U1=0;const I_=new j,qs=new sa,ba=new Je,uc=new j,gl=new j,N1=new j,L1=new sa,B_=new j(1,0,0),F_=new j(0,1,0),H_=new j(0,0,1),G_={type:"added"},O1={type:"removed"},Ws={type:"childadded",child:null},wd={type:"childremoved",child:null};class yn extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new j,i=new Vi,s=new sa,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new ge}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $x,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return qs.setFromAxisAngle(e,i),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,i){return qs.setFromAxisAngle(e,i),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(B_,e)}rotateY(e){return this.rotateOnAxis(F_,e)}rotateZ(e){return this.rotateOnAxis(H_,e)}translateOnAxis(e,i){return I_.copy(e).applyQuaternion(this.quaternion),this.position.add(I_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(B_,e)}translateY(e){return this.translateOnAxis(F_,e)}translateZ(e){return this.translateOnAxis(H_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?uc.copy(e):uc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),gl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(gl,uc,this.up):ba.lookAt(uc,gl,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),qs.setFromRotationMatrix(ba),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G_),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(O1),wd.child=e,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G_),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,e,N1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,L1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,_=p.length;g<_;g++){const m=p[g];c(e.shapes,m)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),g=h(e.textures),_=h(e.images),m=h(e.shapes),y=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),g.length>0&&(s.textures=g),_.length>0&&(s.images=_),m.length>0&&(s.shapes=m),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const g in d){const _=d[g];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}yn.DEFAULT_UP=new j(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new j,Aa=new j,Dd=new j,Ra=new j,js=new j,Zs=new j,V_=new j,Ud=new j,Nd=new j,Ld=new j,Od=new on,Pd=new on,zd=new on;class Bi{constructor(e=new j,i=new j,s=new j){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ii.subVectors(e,i),l.cross(Ii);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ii.subVectors(l,i),Aa.subVectors(s,i),Dd.subVectors(e,i);const h=Ii.dot(Ii),d=Ii.dot(Aa),p=Ii.dot(Dd),g=Aa.dot(Aa),_=Aa.dot(Dd),m=h*g-d*d;if(m===0)return c.set(0,0,0),null;const y=1/m,S=(g*p-d*_)*y,E=(h*_-d*p)*y;return c.set(1-S-E,E,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,s,l,c,h,d,p){return this.getBarycoord(e,i,s,l,Ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ra.x),p.addScaledVector(h,Ra.y),p.addScaledVector(d,Ra.z),p)}static getInterpolatedAttribute(e,i,s,l,c,h){return Od.setScalar(0),Pd.setScalar(0),zd.setScalar(0),Od.fromBufferAttribute(e,i),Pd.fromBufferAttribute(e,s),zd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Od,c.x),h.addScaledVector(Pd,c.y),h.addScaledVector(zd,c.z),h}static isFrontFacing(e,i,s,l){return Ii.subVectors(s,i),Aa.subVectors(e,i),Ii.cross(Aa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Ii.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Bi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;js.subVectors(l,s),Zs.subVectors(c,s),Ud.subVectors(e,s);const p=js.dot(Ud),g=Zs.dot(Ud);if(p<=0&&g<=0)return i.copy(s);Nd.subVectors(e,l);const _=js.dot(Nd),m=Zs.dot(Nd);if(_>=0&&m<=_)return i.copy(l);const y=p*m-_*g;if(y<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(js,h);Ld.subVectors(e,c);const S=js.dot(Ld),E=Zs.dot(Ld);if(E>=0&&S<=E)return i.copy(c);const C=S*g-p*E;if(C<=0&&g>=0&&E<=0)return d=g/(g-E),i.copy(s).addScaledVector(Zs,d);const M=_*E-S*m;if(M<=0&&m-_>=0&&S-E>=0)return V_.subVectors(c,l),d=(m-_)/(m-_+(S-E)),i.copy(l).addScaledVector(V_,d);const v=1/(M+C+y);return h=C*v,d=y*v,i.copy(s).addScaledVector(js,h).addScaledVector(Zs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ty={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},cc={h:0,s:0,l:0};function Id(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class fe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=we.workingColorSpace){return this.r=e,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=we.workingColorSpace){if(e=Qp(e,1),i=Re(i,0,1),s=Re(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Id(h,c,e+1/3),this.g=Id(h,c,e),this.b=Id(h,c,e-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(e,i=ei){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ei){const s=ty[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return we.workingToColorSpace(Bn.copy(this),e),Math.round(Re(Bn.r*255,0,255))*65536+Math.round(Re(Bn.g*255,0,255))*256+Math.round(Re(Bn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=we.workingColorSpace){we.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,l=Bn.g,c=Bn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,g;const _=(d+h)/2;if(d===h)p=0,g=0;else{const m=h-d;switch(g=_<=.5?m/(h+d):m/(2-h-d),h){case s:p=(l-c)/m+(l<c?6:0);break;case l:p=(c-s)/m+2;break;case c:p=(s-l)/m+4;break}p/=6}return e.h=p,e.s=g,e.l=_,e}getRGB(e,i=we.workingColorSpace){return we.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=ei){we.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,s=Bn.g,l=Bn.b;return e!==ei?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+i,cr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(cr),e.getHSL(cc);const s=El(cr.h,cc.h,i),l=El(cr.s,cc.s,i),c=El(cr.l,cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new fe;fe.NAMES=ty;let P1=0;class vo extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=ro,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Kd,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(s.blending=this.blending),this.side!==dr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Qd&&(s.blendSrc=this.blendSrc),this.blendDst!==Kd&&(s.blendDst=this.blendDst),this.blendEquation!==qr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Hs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Hs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dl extends vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new j,fc=new ce;let z1=0;class Hn{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=C_,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(e),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=no(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=no(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=no(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=no(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=no(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==C_&&(e.usage=this.usage),e}}class ey extends Hn{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class ny extends Hn{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Rn extends Hn{constructor(e,i,s){super(new Float32Array(e),i,s)}}let I1=0;const Ri=new Je,Bd=new yn,Qs=new j,pi=new $r,vl=new $r,An=new j;class ii extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qx(e)?ny:ey)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ge().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,i,s){return Ri.makeTranslation(e,i,s),this.applyMatrix4(Ri),this}scale(e,i,s){return Ri.makeScale(e,i,s),this.applyMatrix4(Ri),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Rn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];vl.setFromBufferAttribute(d),this.morphTargetsRelative?(An.addVectors(pi.min,vl.min),pi.expandByPoint(An),An.addVectors(pi.max,vl.max),pi.expandByPoint(An)):(pi.expandByPoint(vl.min),pi.expandByPoint(vl.max))}pi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)An.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let g=0,_=d.count;g<_;g++)An.fromBufferAttribute(d,g),p&&(Qs.fromBufferAttribute(e,g),An.add(Qs)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let F=0;F<s.count;F++)d[F]=new j,p[F]=new j;const g=new j,_=new j,m=new j,y=new ce,S=new ce,E=new ce,C=new j,M=new j;function v(F,w,U){g.fromBufferAttribute(s,F),_.fromBufferAttribute(s,w),m.fromBufferAttribute(s,U),y.fromBufferAttribute(c,F),S.fromBufferAttribute(c,w),E.fromBufferAttribute(c,U),_.sub(g),m.sub(g),S.sub(y),E.sub(y);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(m,-S.y).multiplyScalar(H),M.copy(m).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(H),d[F].add(C),d[w].add(C),d[U].add(C),p[F].add(M),p[w].add(M),p[U].add(M))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,w=R.length;F<w;++F){const U=R[F],H=U.start,J=U.count;for(let et=H,mt=H+J;et<mt;et+=3)v(e.getX(et+0),e.getX(et+1),e.getX(et+2))}const N=new j,A=new j,O=new j,z=new j;function P(F){O.fromBufferAttribute(l,F),z.copy(O);const w=d[F];N.copy(w),N.sub(O.multiplyScalar(O.dot(w))).normalize(),A.crossVectors(z,w);const H=A.dot(p[F])<0?-1:1;h.setXYZW(F,N.x,N.y,N.z,H)}for(let F=0,w=R.length;F<w;++F){const U=R[F],H=U.start,J=U.count;for(let et=H,mt=H+J;et<mt;et+=3)P(e.getX(et+0)),P(e.getX(et+1)),P(e.getX(et+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Hn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new j,c=new j,h=new j,d=new j,p=new j,g=new j,_=new j,m=new j;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),C=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),_.subVectors(h,c),m.subVectors(l,c),_.cross(m),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,M),d.add(_),p.add(_),g.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(M,g.x,g.y,g.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),m.subVectors(l,c),_.cross(m),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(d,p){const g=d.array,_=d.itemSize,m=d.normalized,y=new g.constructor(p.length*_);let S=0,E=0;for(let C=0,M=p.length;C<M;C++){d.isInterleavedBufferAttribute?S=p[C]*d.data.stride+d.offset:S=p[C]*_;for(let v=0;v<_;v++)y[E++]=g[S++]}return new Hn(y,_,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=e(p,s);i.setAttribute(d,g)}const c=this.morphAttributes;for(const d in c){const p=[],g=c[d];for(let _=0,m=g.length;_<m;_++){const y=g[_],S=e(y,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const g=s[p];e.data.attributes[p]=g.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],_=[];for(let m=0,y=g.length;m<y;m++){const S=g[m];_.push(S.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const g in l){const _=l[g];this.setAttribute(g,_.clone(i))}const c=e.morphAttributes;for(const g in c){const _=[],m=c[g];for(let y=0,S=m.length;y<S;y++)_.push(m[y].clone(i));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,_=h.length;g<_;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const k_=new Je,Hr=new Jx,hc=new go,X_=new j,dc=new j,pc=new j,mc=new j,Fd=new j,gc=new j,Y_=new j,vc=new j;class gn extends yn{constructor(e=new ii,i=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){gc.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const _=d[p],m=c[p];_!==0&&(Fd.fromBufferAttribute(m,e),h?gc.addScaledVector(Fd,_):gc.addScaledVector(Fd.sub(i),_))}i.add(gc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hc.copy(s.boundingSphere),hc.applyMatrix4(c),Hr.copy(e.ray).recast(e.near),!(hc.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(hc,X_)===null||Hr.origin.distanceToSquared(X_)>(e.far-e.near)**2))&&(k_.copy(c).invert(),Hr.copy(e.ray).applyMatrix4(k_),!(s.boundingBox!==null&&Hr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Hr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,g=c.attributes.uv,_=c.attributes.uv1,m=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,C=y.length;E<C;E++){const M=y[E],v=h[M.materialIndex],R=Math.max(M.start,S.start),N=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let A=R,O=N;A<O;A+=3){const z=d.getX(A),P=d.getX(A+1),F=d.getX(A+2);l=_c(this,v,e,s,g,_,m,z,P,F),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(d.count,S.start+S.count);for(let M=E,v=C;M<v;M+=3){const R=d.getX(M),N=d.getX(M+1),A=d.getX(M+2);l=_c(this,h,e,s,g,_,m,R,N,A),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,C=y.length;E<C;E++){const M=y[E],v=h[M.materialIndex],R=Math.max(M.start,S.start),N=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let A=R,O=N;A<O;A+=3){const z=A,P=A+1,F=A+2;l=_c(this,v,e,s,g,_,m,z,P,F),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let M=E,v=C;M<v;M+=3){const R=M,N=M+1,A=M+2;l=_c(this,h,e,s,g,_,m,R,N,A),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function B1(o,e,i,s,l,c,h,d){let p;if(e.side===Gn?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,e.side===dr,d),p===null)return null;vc.copy(d),vc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(vc);return g<i.near||g>i.far?null:{distance:g,point:vc.clone(),object:o}}function _c(o,e,i,s,l,c,h,d,p,g){o.getVertexPosition(d,dc),o.getVertexPosition(p,pc),o.getVertexPosition(g,mc);const _=B1(o,e,i,s,dc,pc,mc,Y_);if(_){const m=new j;Bi.getBarycoord(Y_,dc,pc,mc,m),l&&(_.uv=Bi.getInterpolatedAttribute(l,d,p,g,m,new ce)),c&&(_.uv1=Bi.getInterpolatedAttribute(c,d,p,g,m,new ce)),h&&(_.normal=Bi.getInterpolatedAttribute(h,d,p,g,m,new j),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:p,c:g,normal:new j,materialIndex:0};Bi.getNormal(dc,pc,mc,y.normal),_.face=y,_.barycoord=m}return _}class _o extends ii{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],g=[],_=[],m=[];let y=0,S=0;E("z","y","x",-1,-1,s,i,e,h,c,0),E("z","y","x",1,-1,s,i,-e,h,c,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(_,3)),this.setAttribute("uv",new Rn(m,2));function E(C,M,v,R,N,A,O,z,P,F,w){const U=A/P,H=O/F,J=A/2,et=O/2,mt=z/2,lt=P+1,Y=F+1;let q=0,X=0;const ht=new j;for(let dt=0;dt<Y;dt++){const Nt=dt*H-et;for(let Xt=0;Xt<lt;Xt++){const oe=Xt*U-J;ht[C]=oe*R,ht[M]=Nt*N,ht[v]=mt,g.push(ht.x,ht.y,ht.z),ht[C]=0,ht[M]=0,ht[v]=z>0?1:-1,_.push(ht.x,ht.y,ht.z),m.push(Xt/P),m.push(1-dt/F),q+=1}}for(let dt=0;dt<F;dt++)for(let Nt=0;Nt<P;Nt++){const Xt=y+Nt+lt*dt,oe=y+Nt+lt*(dt+1),I=y+(Nt+1)+lt*(dt+1),ut=y+(Nt+1)+lt*dt;p.push(Xt,oe,ut),p.push(oe,I,ut),X+=6}d.addGroup(S,X,w),S+=X,y+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Zn(o){const e={};for(let i=0;i<o.length;i++){const s=fo(o[i]);for(const l in s)e[l]=s[l]}return e}function F1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function iy(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:we.workingColorSpace}const Ul={clone:fo,merge:Zn};var H1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H1,this.fragmentShader=G1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=F1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ay extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new j,q_=new ce,W_=new ce;class mi extends ay{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Cl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,i){return this.getViewBounds(e,q_,W_),i.subVectors(W_,q_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ml*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/g,l*=h.width/p,s*=h.height/g}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ks=-90,Js=1;class V1 extends yn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(Ks,Js,e,i);l.layers=this.layers,this.add(l);const c=new mi(Ks,Js,e,i);c.layers=this.layers,this.add(c);const h=new mi(Ks,Js,e,i);h.layers=this.layers,this.add(h);const d=new mi(Ks,Js,e,i);d.layers=this.layers,this.add(d);const p=new mi(Ks,Js,e,i);p.layers=this.layers,this.add(p);const g=new mi(Ks,Js,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const g of i)this.remove(g);if(e===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,g,_]=this.children,m=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,g),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(m,y,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class ry extends Vn{constructor(e=[],i=lo,s,l,c,h,d,p,g,_){super(e,i,s,l,c,h,d,p,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class k1 extends Ci{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new ry(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new _o(5,5,5),c=new ln({name:"CubemapFromEquirect",uniforms:fo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Gn,blending:wa});c.uniforms.tEquirect.value=i;const h=new gn(l,c),d=i.minFilter;return i.minFilter===Zr&&(i.minFilter=ia),new V1(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Qr extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X1={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),v=this._getHandJoint(g,C);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],y=_.position.distanceTo(m.position),S=.02,E=.005;g.inputState.pinching&&y>S+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=S-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(X1)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Qr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class sy extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Y1 extends Vn{constructor(e=null,i=1,s=1,l,c,h,d,p,g=gi,_=gi,m,y){super(null,h,d,p,g,_,l,c,m,y),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class j_ extends Hn{constructor(e,i,s,l=1){super(e,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $s=new Je,Z_=new Je,xc=[],Q_=new $r,q1=new Je,_l=new gn,xl=new go;class W1 extends gn{constructor(e,i,s){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new j_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,q1)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new $r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,$s),Q_.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(Q_)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new go),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,$s),xl.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(xl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=e*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(e,i){const s=this.matrixWorld,l=this.count;if(_l.geometry=this.geometry,_l.material=this.material,_l.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xl.copy(this.boundingSphere),xl.applyMatrix4(s),e.ray.intersectsSphere(xl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,$s),Z_.multiplyMatrices(s,$s),_l.matrixWorld=Z_,_l.raycast(e,xc);for(let h=0,d=xc.length;h<d;h++){const p=xc[h];p.instanceId=c,p.object=this,i.push(p)}xc.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new j_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Y1(new Float32Array(l*this.count),l,this.count,qp,aa));const c=this.morphTexture.source.data.data;let h=0;for(let g=0;g<s.length;g++)h+=s[g];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*e;c[p]=d,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gd=new j,j1=new j,Z1=new ge;class Xr{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Gd.subVectors(s,i).cross(j1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Gd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Z1.getNormalMatrix(e),l=this.coplanarPoint(Gd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new go,Q1=new ce(.5,.5),yc=new j;class Jp{constructor(e=new Xr,i=new Xr,s=new Xr,l=new Xr,c=new Xr,h=new Xr){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ra,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],p=c[2],g=c[3],_=c[4],m=c[5],y=c[6],S=c[7],E=c[8],C=c[9],M=c[10],v=c[11],R=c[12],N=c[13],A=c[14],O=c[15];if(l[0].setComponents(g-h,S-_,v-E,O-R).normalize(),l[1].setComponents(g+h,S+_,v+E,O+R).normalize(),l[2].setComponents(g+d,S+m,v+C,O+N).normalize(),l[3].setComponents(g-d,S-m,v-C,O-N).normalize(),s)l[4].setComponents(p,y,M,A).normalize(),l[5].setComponents(g-p,S-y,v-M,O-A).normalize();else if(l[4].setComponents(g-p,S-y,v-M,O-A).normalize(),i===ra)l[5].setComponents(g+p,S+y,v+M,O+A).normalize();else if(i===Pc)l[5].setComponents(p,y,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const i=Q1.distanceTo(e.center);return Gr.radius=.7071067811865476+i,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(yc.x=l.normal.x>0?e.max.x:e.min.x,yc.y=l.normal.y>0?e.max.y:e.min.y,yc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class K1 extends vo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K_=new Je,Ip=new Jx,Sc=new go,Mc=new j;class oy extends yn{constructor(e=new ii,i=new K1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(l),Sc.radius+=c,e.ray.intersectsSphere(Sc)===!1)return;K_.copy(l).invert(),Ip.copy(e.ray).applyMatrix4(K_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,g=s.index,m=s.attributes.position;if(g!==null){const y=Math.max(0,h.start),S=Math.min(g.count,h.start+h.count);for(let E=y,C=S;E<C;E++){const M=g.getX(E);Mc.fromBufferAttribute(m,M),J_(Mc,M,p,l,e,i,this)}}else{const y=Math.max(0,h.start),S=Math.min(m.count,h.start+h.count);for(let E=y,C=S;E<C;E++)Mc.fromBufferAttribute(m,E),J_(Mc,E,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function J_(o,e,i,s,l,c,h){const d=Ip.distanceSqToPoint(o);if(d<i){const p=new j;Ip.closestPointToPoint(o,p),p.applyMatrix4(s);const g=l.ray.origin.distanceTo(p);if(g<l.near||g>l.far)return;c.push({distance:g,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class J1 extends Vn{constructor(e,i,s,l,c,h,d,p,g){super(e,i,s,l,c,h,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ly extends Vn{constructor(e,i,s=Jr,l,c,h,d=gi,p=gi,g,_=Al,m=1){if(_!==Al&&_!==Rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:m};super(y,l,c,h,d,p,_,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class uy extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $p extends ii{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],h=[];d(l),g(s),_(),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(c.slice(),3)),this.setAttribute("uv",new Rn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(R){const N=new j,A=new j,O=new j;for(let z=0;z<i.length;z+=3)S(i[z+0],N),S(i[z+1],A),S(i[z+2],O),p(N,A,O,R)}function p(R,N,A,O){const z=O+1,P=[];for(let F=0;F<=z;F++){P[F]=[];const w=R.clone().lerp(A,F/z),U=N.clone().lerp(A,F/z),H=z-F;for(let J=0;J<=H;J++)J===0&&F===z?P[F][J]=w:P[F][J]=w.clone().lerp(U,J/H)}for(let F=0;F<z;F++)for(let w=0;w<2*(z-F)-1;w++){const U=Math.floor(w/2);w%2===0?(y(P[F][U+1]),y(P[F+1][U]),y(P[F][U])):(y(P[F][U+1]),y(P[F+1][U+1]),y(P[F+1][U]))}}function g(R){const N=new j;for(let A=0;A<c.length;A+=3)N.x=c[A+0],N.y=c[A+1],N.z=c[A+2],N.normalize().multiplyScalar(R),c[A+0]=N.x,c[A+1]=N.y,c[A+2]=N.z}function _(){const R=new j;for(let N=0;N<c.length;N+=3){R.x=c[N+0],R.y=c[N+1],R.z=c[N+2];const A=M(R)/2/Math.PI+.5,O=v(R)/Math.PI+.5;h.push(A,1-O)}E(),m()}function m(){for(let R=0;R<h.length;R+=6){const N=h[R+0],A=h[R+2],O=h[R+4],z=Math.max(N,A,O),P=Math.min(N,A,O);z>.9&&P<.1&&(N<.2&&(h[R+0]+=1),A<.2&&(h[R+2]+=1),O<.2&&(h[R+4]+=1))}}function y(R){c.push(R.x,R.y,R.z)}function S(R,N){const A=R*3;N.x=e[A+0],N.y=e[A+1],N.z=e[A+2]}function E(){const R=new j,N=new j,A=new j,O=new j,z=new ce,P=new ce,F=new ce;for(let w=0,U=0;w<c.length;w+=9,U+=6){R.set(c[w+0],c[w+1],c[w+2]),N.set(c[w+3],c[w+4],c[w+5]),A.set(c[w+6],c[w+7],c[w+8]),z.set(h[U+0],h[U+1]),P.set(h[U+2],h[U+3]),F.set(h[U+4],h[U+5]),O.copy(R).add(N).add(A).divideScalar(3);const H=M(O);C(z,U+0,R,H),C(P,U+2,N,H),C(F,U+4,A,H)}}function C(R,N,A,O){O<0&&R.x===1&&(h[N]=R.x-1),A.x===0&&A.z===0&&(h[N]=O/2/Math.PI+.5)}function M(R){return Math.atan2(R.z,-R.x)}function v(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $p(e.vertices,e.indices,e.radius,e.details)}}class tm extends $p{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new tm(e.radius,e.detail)}}class xo extends ii{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),g=d+1,_=p+1,m=e/d,y=i/p,S=[],E=[],C=[],M=[];for(let v=0;v<_;v++){const R=v*y-h;for(let N=0;N<g;N++){const A=N*m-c;E.push(A,-R,0),C.push(0,0,1),M.push(N/d),M.push(1-v/p)}}for(let v=0;v<p;v++)for(let R=0;R<d;R++){const N=R+g*v,A=R+g*(v+1),O=R+1+g*(v+1),z=R+1+g*v;S.push(N,A,z),S.push(A,O,z)}this.setIndex(S),this.setAttribute("position",new Rn(E,3)),this.setAttribute("normal",new Rn(C,3)),this.setAttribute("uv",new Rn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class em extends ii{constructor(e=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],g=[],_=[];let m=e;const y=(i-e)/l,S=new j,E=new ce;for(let C=0;C<=l;C++){for(let M=0;M<=s;M++){const v=c+M/s*h;S.x=m*Math.cos(v),S.y=m*Math.sin(v),p.push(S.x,S.y,S.z),g.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,_.push(E.x,E.y)}m+=y}for(let C=0;C<l;C++){const M=C*(s+1);for(let v=0;v<s;v++){const R=v+M,N=R,A=R+s+1,O=R+s+2,z=R+1;d.push(N,A,z),d.push(A,O,z)}}this.setIndex(d),this.setAttribute("position",new Rn(p,3)),this.setAttribute("normal",new Rn(g,3)),this.setAttribute("uv",new Rn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new em(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Nl extends ii{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let g=0;const _=[],m=new j,y=new j,S=[],E=[],C=[],M=[];for(let v=0;v<=s;v++){const R=[],N=v/s;let A=0;v===0&&h===0?A=.5/i:v===s&&p===Math.PI&&(A=-.5/i);for(let O=0;O<=i;O++){const z=O/i;m.x=-e*Math.cos(l+z*c)*Math.sin(h+N*d),m.y=e*Math.cos(h+N*d),m.z=e*Math.sin(l+z*c)*Math.sin(h+N*d),E.push(m.x,m.y,m.z),y.copy(m).normalize(),C.push(y.x,y.y,y.z),M.push(z+A,1-N),R.push(g++)}_.push(R)}for(let v=0;v<s;v++)for(let R=0;R<i;R++){const N=_[v][R+1],A=_[v][R],O=_[v+1][R],z=_[v+1][R+1];(v!==0||h>0)&&S.push(N,A,z),(v!==s-1||p<Math.PI)&&S.push(A,O,z)}this.setIndex(S),this.setAttribute("position",new Rn(E,3)),this.setAttribute("normal",new Rn(C,3)),this.setAttribute("uv",new Rn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $1 extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tT extends vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jx,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eT extends vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nT extends vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cy extends yn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class iT extends cy{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Vd=new Je,$_=new j,tx=new j;class aT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jp,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;$_.setFromMatrixPosition(e.matrixWorld),i.position.copy($_),tx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(tx),i.updateMatrixWorld(),Vd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nm extends ay{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,h=c+g*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class rT extends aT{constructor(){super(new nm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sT extends cy{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new rT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oT extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function ex(o,e,i,s){const l=lT(s);switch(i){case Yx:return o*e;case qp:return o*e/l.components*l.byteLength;case Wp:return o*e/l.components*l.byteLength;case Wx:return o*e*2/l.components*l.byteLength;case jp:return o*e*2/l.components*l.byteLength;case qx:return o*e*3/l.components*l.byteLength;case Fi:return o*e*4/l.components*l.byteLength;case Zp:return o*e*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cp:case hp:return Math.max(o,16)*Math.max(e,8)/4;case up:case fp:return Math.max(o,8)*Math.max(e,8)/2;case dp:case pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case _p:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case xp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case bp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Cp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Dp:case Up:case Np:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Lp:case Op:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Pp:case zp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lT(o){switch(o){case Gi:case Gx:return{byteLength:1,components:1};case Tl:case Vx:case Hi:return{byteLength:2,components:1};case Xp:case Yp:return{byteLength:2,components:4};case Jr:case kp:case aa:return{byteLength:4,components:1};case kx:case Xx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hy(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function uT(o){const e=new WeakMap;function i(d,p){const g=d.array,_=d.usage,m=g.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,g,_),d.onUploadCallback();let S;if(g instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)S=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=o.SHORT;else if(g instanceof Uint32Array)S=o.UNSIGNED_INT;else if(g instanceof Int32Array)S=o.INT;else if(g instanceof Int8Array)S=o.BYTE;else if(g instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,g){const _=p.array,m=p.updateRanges;if(o.bindBuffer(g,d),m.length===0)o.bufferSubData(g,0,_);else{m.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<m.length;S++){const E=m[y],C=m[S];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++y,m[y]=C)}m.length=y+1;for(let S=0,E=m.length;S<E;S++){const C=m[S];o.bufferSubData(g,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,p),g.version=d.version}}return{get:l,remove:c,update:h}}var cT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fT=`#ifdef USE_ALPHAHASH
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
#endif`,hT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gT=`#ifdef USE_AOMAP
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
#endif`,vT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_T=`#ifdef USE_BATCHING
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
#endif`,xT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ST=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ET=`#ifdef USE_IRIDESCENCE
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
#endif`,TT=`#ifdef USE_BUMPMAP
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
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,LT=`#define PI 3.141592653589793
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
} // validated`,OT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PT=`vec3 transformedNormal = objectNormal;
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
#endif`,zT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HT="gl_FragColor = linearToOutputTexel( gl_FragColor );",GT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XT=`#ifdef USE_ENVMAP
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
#endif`,YT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qT=`#ifdef USE_ENVMAP
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
#endif`,WT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KT=`#ifdef USE_GRADIENTMAP
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
}`,JT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eb=`uniform bool receiveShadow;
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
#endif`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ob=`PhysicalMaterial material;
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
#endif`,lb=`struct PhysicalMaterial {
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
}`,ub=`
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
#endif`,cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,fb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xb=`#if defined( USE_POINTS_UV )
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
#endif`,yb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`#ifdef USE_MORPHTARGETS
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
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nb=`#ifdef USE_NORMALMAP
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
#endif`,Lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jb=`float getShadowMask() {
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
}`,Zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qb=`#ifdef USE_SKINNING
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
#endif`,Kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jb=`#ifdef USE_SKINNING
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
#endif`,$b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iA=`#ifdef USE_TRANSMISSION
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
#endif`,aA=`#ifdef USE_TRANSMISSION
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cA=`uniform sampler2D t2D;
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
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`#include <common>
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
}`,gA=`#if DEPTH_PACKING == 3200
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
}`,vA=`#define DISTANCE
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
}`,_A=`#define DISTANCE
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
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
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
}`,MA=`uniform vec3 diffuse;
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
}`,EA=`#include <common>
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
}`,TA=`uniform vec3 diffuse;
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
}`,bA=`#define LAMBERT
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
}`,AA=`#define LAMBERT
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
}`,RA=`#define MATCAP
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
}`,CA=`#define MATCAP
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
}`,wA=`#define NORMAL
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
}`,DA=`#define NORMAL
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
}`,UA=`#define PHONG
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
}`,NA=`#define PHONG
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
}`,LA=`#define STANDARD
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
}`,OA=`#define STANDARD
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
}`,PA=`#define TOON
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
}`,zA=`#define TOON
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
}`,IA=`uniform float size;
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
}`,BA=`uniform vec3 diffuse;
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
}`,FA=`#include <common>
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
}`,HA=`uniform vec3 color;
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
}`,GA=`uniform float rotation;
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
}`,VA=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:cT,alphahash_pars_fragment:fT,alphamap_fragment:hT,alphamap_pars_fragment:dT,alphatest_fragment:pT,alphatest_pars_fragment:mT,aomap_fragment:gT,aomap_pars_fragment:vT,batching_pars_vertex:_T,batching_vertex:xT,begin_vertex:yT,beginnormal_vertex:ST,bsdfs:MT,iridescence_fragment:ET,bumpmap_pars_fragment:TT,clipping_planes_fragment:bT,clipping_planes_pars_fragment:AT,clipping_planes_pars_vertex:RT,clipping_planes_vertex:CT,color_fragment:wT,color_pars_fragment:DT,color_pars_vertex:UT,color_vertex:NT,common:LT,cube_uv_reflection_fragment:OT,defaultnormal_vertex:PT,displacementmap_pars_vertex:zT,displacementmap_vertex:IT,emissivemap_fragment:BT,emissivemap_pars_fragment:FT,colorspace_fragment:HT,colorspace_pars_fragment:GT,envmap_fragment:VT,envmap_common_pars_fragment:kT,envmap_pars_fragment:XT,envmap_pars_vertex:YT,envmap_physical_pars_fragment:nb,envmap_vertex:qT,fog_vertex:WT,fog_pars_vertex:jT,fog_fragment:ZT,fog_pars_fragment:QT,gradientmap_pars_fragment:KT,lightmap_pars_fragment:JT,lights_lambert_fragment:$T,lights_lambert_pars_fragment:tb,lights_pars_begin:eb,lights_toon_fragment:ib,lights_toon_pars_fragment:ab,lights_phong_fragment:rb,lights_phong_pars_fragment:sb,lights_physical_fragment:ob,lights_physical_pars_fragment:lb,lights_fragment_begin:ub,lights_fragment_maps:cb,lights_fragment_end:fb,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:db,logdepthbuf_pars_vertex:pb,logdepthbuf_vertex:mb,map_fragment:gb,map_pars_fragment:vb,map_particle_fragment:_b,map_particle_pars_fragment:xb,metalnessmap_fragment:yb,metalnessmap_pars_fragment:Sb,morphinstance_vertex:Mb,morphcolor_vertex:Eb,morphnormal_vertex:Tb,morphtarget_pars_vertex:bb,morphtarget_vertex:Ab,normal_fragment_begin:Rb,normal_fragment_maps:Cb,normal_pars_fragment:wb,normal_pars_vertex:Db,normal_vertex:Ub,normalmap_pars_fragment:Nb,clearcoat_normal_fragment_begin:Lb,clearcoat_normal_fragment_maps:Ob,clearcoat_pars_fragment:Pb,iridescence_pars_fragment:zb,opaque_fragment:Ib,packing:Bb,premultiplied_alpha_fragment:Fb,project_vertex:Hb,dithering_fragment:Gb,dithering_pars_fragment:Vb,roughnessmap_fragment:kb,roughnessmap_pars_fragment:Xb,shadowmap_pars_fragment:Yb,shadowmap_pars_vertex:qb,shadowmap_vertex:Wb,shadowmask_pars_fragment:jb,skinbase_vertex:Zb,skinning_pars_vertex:Qb,skinning_vertex:Kb,skinnormal_vertex:Jb,specularmap_fragment:$b,specularmap_pars_fragment:tA,tonemapping_fragment:eA,tonemapping_pars_fragment:nA,transmission_fragment:iA,transmission_pars_fragment:aA,uv_pars_fragment:rA,uv_pars_vertex:sA,uv_vertex:oA,worldpos_vertex:lA,background_vert:uA,background_frag:cA,backgroundCube_vert:fA,backgroundCube_frag:hA,cube_vert:dA,cube_frag:pA,depth_vert:mA,depth_frag:gA,distanceRGBA_vert:vA,distanceRGBA_frag:_A,equirect_vert:xA,equirect_frag:yA,linedashed_vert:SA,linedashed_frag:MA,meshbasic_vert:EA,meshbasic_frag:TA,meshlambert_vert:bA,meshlambert_frag:AA,meshmatcap_vert:RA,meshmatcap_frag:CA,meshnormal_vert:wA,meshnormal_frag:DA,meshphong_vert:UA,meshphong_frag:NA,meshphysical_vert:LA,meshphysical_frag:OA,meshtoon_vert:PA,meshtoon_frag:zA,points_vert:IA,points_frag:BA,shadow_vert:FA,shadow_frag:HA,sprite_vert:GA,sprite_frag:VA},Bt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},ea={basic:{uniforms:Zn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Zn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Zn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Zn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Zn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new fe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Zn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Zn([Bt.points,Bt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Zn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Zn([Bt.common,Bt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Zn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Zn([Bt.sprite,Bt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distanceRGBA:{uniforms:Zn([Bt.common,Bt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distanceRGBA_vert,fragmentShader:ve.distanceRGBA_frag},shadow:{uniforms:Zn([Bt.lights,Bt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};ea.physical={uniforms:Zn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Ec={r:0,b:0,g:0},Vr=new Vi,kA=new Je;function XA(o,e,i,s,l,c,h){const d=new fe(0);let p=c===!0?0:1,g,_,m=null,y=0,S=null;function E(N){let A=N.isScene===!0?N.background:null;return A&&A.isTexture&&(A=(N.backgroundBlurriness>0?i:e).get(A)),A}function C(N){let A=!1;const O=E(N);O===null?v(d,p):O&&O.isColor&&(v(O,1),A=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||A)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,A){const O=E(A);O&&(O.isCubeTexture||O.mapping===Ic)?(_===void 0&&(_=new gn(new _o(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:fo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Vr.copy(A.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(kA.makeRotationFromEuler(Vr)),_.material.toneMapped=we.getTransfer(O.colorSpace)!==Xe,(m!==O||y!==O.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,m=O,y=O.version,S=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(g===void 0&&(g=new gn(new xo(2,2),new ln({name:"BackgroundMaterial",uniforms:fo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=O,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.toneMapped=we.getTransfer(O.colorSpace)!==Xe,O.matrixAutoUpdate===!0&&O.updateMatrix(),g.material.uniforms.uvTransform.value.copy(O.matrix),(m!==O||y!==O.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,m=O,y=O.version,S=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function v(N,A){N.getRGB(Ec,iy(o)),s.buffers.color.setClear(Ec.r,Ec.g,Ec.b,A,h)}function R(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,A=1){d.set(N),p=A,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,v(d,p)},render:C,addToRenderList:M,dispose:R}}function YA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(U,H,J,et,mt){let lt=!1;const Y=m(et,J,H);c!==Y&&(c=Y,g(c.object)),lt=S(U,et,J,mt),lt&&E(U,et,J,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,A(U,H,J,et),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function p(){return o.createVertexArray()}function g(U){return o.bindVertexArray(U)}function _(U){return o.deleteVertexArray(U)}function m(U,H,J){const et=J.wireframe===!0;let mt=s[U.id];mt===void 0&&(mt={},s[U.id]=mt);let lt=mt[H.id];lt===void 0&&(lt={},mt[H.id]=lt);let Y=lt[et];return Y===void 0&&(Y=y(p()),lt[et]=Y),Y}function y(U){const H=[],J=[],et=[];for(let mt=0;mt<i;mt++)H[mt]=0,J[mt]=0,et[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:et,object:U,attributes:{},index:null}}function S(U,H,J,et){const mt=c.attributes,lt=H.attributes;let Y=0;const q=J.getAttributes();for(const X in q)if(q[X].location>=0){const dt=mt[X];let Nt=lt[X];if(Nt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(Nt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(Nt=U.instanceColor)),dt===void 0||dt.attribute!==Nt||Nt&&dt.data!==Nt.data)return!0;Y++}return c.attributesNum!==Y||c.index!==et}function E(U,H,J,et){const mt={},lt=H.attributes;let Y=0;const q=J.getAttributes();for(const X in q)if(q[X].location>=0){let dt=lt[X];dt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(dt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(dt=U.instanceColor));const Nt={};Nt.attribute=dt,dt&&dt.data&&(Nt.data=dt.data),mt[X]=Nt,Y++}c.attributes=mt,c.attributesNum=Y,c.index=et}function C(){const U=c.newAttributes;for(let H=0,J=U.length;H<J;H++)U[H]=0}function M(U){v(U,0)}function v(U,H){const J=c.newAttributes,et=c.enabledAttributes,mt=c.attributeDivisors;J[U]=1,et[U]===0&&(o.enableVertexAttribArray(U),et[U]=1),mt[U]!==H&&(o.vertexAttribDivisor(U,H),mt[U]=H)}function R(){const U=c.newAttributes,H=c.enabledAttributes;for(let J=0,et=H.length;J<et;J++)H[J]!==U[J]&&(o.disableVertexAttribArray(J),H[J]=0)}function N(U,H,J,et,mt,lt,Y){Y===!0?o.vertexAttribIPointer(U,H,J,mt,lt):o.vertexAttribPointer(U,H,J,et,mt,lt)}function A(U,H,J,et){C();const mt=et.attributes,lt=J.getAttributes(),Y=H.defaultAttributeValues;for(const q in lt){const X=lt[q];if(X.location>=0){let ht=mt[q];if(ht===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ht=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ht=U.instanceColor)),ht!==void 0){const dt=ht.normalized,Nt=ht.itemSize,Xt=e.get(ht);if(Xt===void 0)continue;const oe=Xt.buffer,I=Xt.type,ut=Xt.bytesPerElement,Z=I===o.INT||I===o.UNSIGNED_INT||ht.gpuType===kp;if(ht.isInterleavedBufferAttribute){const nt=ht.data,yt=nt.stride,wt=ht.offset;if(nt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<X.locationSize;Tt++)v(X.location+Tt,nt.meshPerAttribute);U.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Tt=0;Tt<X.locationSize;Tt++)M(X.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,oe);for(let Tt=0;Tt<X.locationSize;Tt++)N(X.location+Tt,Nt/X.locationSize,I,dt,yt*ut,(wt+Nt/X.locationSize*Tt)*ut,Z)}else{if(ht.isInstancedBufferAttribute){for(let nt=0;nt<X.locationSize;nt++)v(X.location+nt,ht.meshPerAttribute);U.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let nt=0;nt<X.locationSize;nt++)M(X.location+nt);o.bindBuffer(o.ARRAY_BUFFER,oe);for(let nt=0;nt<X.locationSize;nt++)N(X.location+nt,Nt/X.locationSize,I,dt,Nt*ut,Nt/X.locationSize*nt*ut,Z)}}else if(Y!==void 0){const dt=Y[q];if(dt!==void 0)switch(dt.length){case 2:o.vertexAttrib2fv(X.location,dt);break;case 3:o.vertexAttrib3fv(X.location,dt);break;case 4:o.vertexAttrib4fv(X.location,dt);break;default:o.vertexAttrib1fv(X.location,dt)}}}}R()}function O(){F();for(const U in s){const H=s[U];for(const J in H){const et=H[J];for(const mt in et)_(et[mt].object),delete et[mt];delete H[J]}delete s[U]}}function z(U){if(s[U.id]===void 0)return;const H=s[U.id];for(const J in H){const et=H[J];for(const mt in et)_(et[mt].object),delete et[mt];delete H[J]}delete s[U.id]}function P(U){for(const H in s){const J=s[H];if(J[U.id]===void 0)continue;const et=J[U.id];for(const mt in et)_(et[mt].object),delete et[mt];delete J[U.id]}}function F(){w(),h=!0,c!==l&&(c=l,g(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:F,resetDefaultState:w,dispose:O,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:M,disableUnusedAttributes:R}}function qA(o,e,i){let s;function l(g){s=g}function c(g,_){o.drawArrays(s,g,_),i.update(_,s,1)}function h(g,_,m){m!==0&&(o.drawArraysInstanced(s,g,_,m),i.update(_,s,m))}function d(g,_,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,_,0,m);let S=0;for(let E=0;E<m;E++)S+=_[E];i.update(S,s,1)}function p(g,_,m,y){if(m===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g.length;E++)h(g[E],_[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(s,g,0,_,0,y,0,m);let E=0;for(let C=0;C<m;C++)E+=_[C]*y[C];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function WA(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Fi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const F=P===Hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Gi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==aa&&!F)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const _=p(g);_!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const m=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=E>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:R,maxVaryings:N,maxFragmentUniforms:A,vertexTextures:O,maxSamples:z}}function jA(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Xr,d=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,y){const S=m.length!==0||y||s!==0||l;return l=y,s=m.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(m,y){i=_(m,y,0)},this.setState=function(m,y,S){const E=m.clippingPlanes,C=m.clipIntersection,M=m.clipShadows,v=o.get(m);if(!l||E===null||E.length===0||c&&!M)c?_(null):g();else{const R=c?0:s,N=R*4;let A=v.clippingState||null;p.value=A,A=_(E,y,N,S);for(let O=0;O!==N;++O)A[O]=i[O];v.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(m,y,S,E){const C=m!==null?m.length:0;let M=null;if(C!==0){if(M=p.value,E!==!0||M===null){const v=S+C*4,R=y.matrixWorldInverse;d.getNormalMatrix(R),(M===null||M.length<v)&&(M=new Float32Array(v));for(let N=0,A=S;N!==C;++N,A+=4)h.copy(m[N]).applyMatrix4(R,d),h.normal.toArray(M,A),M[A+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function ZA(o){let e=new WeakMap;function i(h,d){return d===rp?h.mapping=lo:d===sp&&(h.mapping=uo),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===rp||d===sp)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new k1(p.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const ao=4,nx=[.125,.215,.35,.446,.526,.582],Wr=20,kd=new nm,ix=new fe;let Xd=null,Yd=0,qd=0,Wd=!1;const Yr=(1+Math.sqrt(5))/2,to=1/Yr,ax=[new j(-Yr,to,0),new j(Yr,to,0),new j(-to,0,Yr),new j(to,0,Yr),new j(0,Yr,-to),new j(0,Yr,to),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],QA=new j;class rx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=QA}=c;Xd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,Yd,qd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===lo||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ia,minFilter:ia,generateMipmaps:!1,type:Hi,format:Fi,colorSpace:co,depthBuffer:!1},l=sx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sx(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KA(c)),this._blurMaterial=JA(c,e,i)}return l}_compileMaterial(e){const i=new gn(this._lodPlanes[0],e);this._renderer.compile(i,kd)}_sceneToCubeUV(e,i,s,l,c){const p=new mi(90,1,i,s),g=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],m=this._renderer,y=m.autoClear,S=m.toneMapping;m.getClearColor(ix),m.toneMapping=Da,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(l),m.clearDepth(),m.setRenderTarget(null));const C=new Dl({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),M=new gn(new _o,C);let v=!1;const R=e.background;R?R.isColor&&(C.color.copy(R),e.background=null,v=!0):(C.color.copy(ix),v=!0);for(let N=0;N<6;N++){const A=N%3;A===0?(p.up.set(0,g[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[N],c.y,c.z)):A===1?(p.up.set(0,0,g[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[N],c.z)):(p.up.set(0,g[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[N]));const O=this._cubeSize;Tc(l,A*O,N>2?O:0,O,O),m.setRenderTarget(l),v&&m.render(M,p),m.render(e,p)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=S,m.autoClear=y,e.background=R}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===lo||e.mapping===uo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=lx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ox());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new gn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Tc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,kd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=ax[(l-c-1)%ax.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,m=new gn(this._lodPlanes[l],g),y=g.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Wr-1),C=c/E,M=isFinite(c)?1+Math.floor(_*C):Wr;M>Wr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Wr}`);const v=[];let R=0;for(let P=0;P<Wr;++P){const F=P/C,w=Math.exp(-F*F/2);v.push(w),P===0?R+=w:P<M&&(R+=2*w)}for(let P=0;P<v.length;P++)v[P]=v[P]/R;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=E,y.mipInt.value=N-s;const A=this._sizeLods[l],O=3*A*(l>N-ao?l-N+ao:0),z=4*(this._cubeSize-A);Tc(i,O,z,3*A,2*A),p.setRenderTarget(i),p.render(m,kd)}}function KA(o){const e=[],i=[],s=[];let l=o;const c=o-ao+1+nx.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-ao?p=nx[h-o+ao-1]:h===0&&(p=0),s.push(p);const g=1/(d-2),_=-g,m=1+g,y=[_,_,m,_,m,m,_,_,m,m,_,m],S=6,E=6,C=3,M=2,v=1,R=new Float32Array(C*E*S),N=new Float32Array(M*E*S),A=new Float32Array(v*E*S);for(let z=0;z<S;z++){const P=z%3*2/3-1,F=z>2?0:-1,w=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];R.set(w,C*E*z),N.set(y,M*E*z);const U=[z,z,z,z,z,z];A.set(U,v*E*z)}const O=new ii;O.setAttribute("position",new Hn(R,C)),O.setAttribute("uv",new Hn(N,M)),O.setAttribute("faceIndex",new Hn(A,v)),e.push(O),l>ao&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function sx(o,e,i){const s=new Ci(o,e,i);return s.texture.mapping=Ic,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function JA(o,e,i){const s=new Float32Array(Wr),l=new j(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:im(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function ox(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:im(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function lx(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function im(){return`

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
	`}function $A(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,g=p===rp||p===sp,_=p===lo||p===uo;if(g||_){let m=e.get(d);const y=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new rx(o)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new rx(o)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",c),m.texture):null}}}return d}function l(d){let p=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function t2(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&wl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function e2(o,e,i,s){const l={},c=new WeakMap;function h(m){const y=m.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(m,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function p(m){const y=m.attributes;for(const S in y)e.update(y[S],o.ARRAY_BUFFER)}function g(m){const y=[],S=m.index,E=m.attributes.position;let C=0;if(S!==null){const R=S.array;C=S.version;for(let N=0,A=R.length;N<A;N+=3){const O=R[N+0],z=R[N+1],P=R[N+2];y.push(O,z,z,P,P,O)}}else if(E!==void 0){const R=E.array;C=E.version;for(let N=0,A=R.length/3-1;N<A;N+=3){const O=N+0,z=N+1,P=N+2;y.push(O,z,z,P,P,O)}}else return;const M=new(Qx(y)?ny:ey)(y,1);M.version=C;const v=c.get(m);v&&e.remove(v),c.set(m,M)}function _(m){const y=c.get(m);if(y){const S=m.index;S!==null&&y.version<S.version&&g(m)}else g(m);return c.get(m)}return{get:d,update:p,getWireframeAttribute:_}}function n2(o,e,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function p(y,S){o.drawElements(s,S,c,y*h),i.update(S,s,1)}function g(y,S,E){E!==0&&(o.drawElementsInstanced(s,S,c,y*h,E),i.update(S,s,E))}function _(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,E);let M=0;for(let v=0;v<E;v++)M+=S[v];i.update(M,s,1)}function m(y,S,E,C){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)g(y[v]/h,S[v],C[v]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,C,0,E);let v=0;for(let R=0;R<E;R++)v+=S[R]*C[R];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=m}function i2(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function a2(o,e,i){const s=new WeakMap,l=new on;function c(h,d,p){const g=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==m){let U=function(){F.dispose(),s.delete(d),d.removeEventListener("dispose",U)};var S=U;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let A=0;E===!0&&(A=1),C===!0&&(A=2),M===!0&&(A=3);let O=d.attributes.position.count*A,z=1;O>e.maxTextureSize&&(z=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const P=new Float32Array(O*z*4*m),F=new Kx(P,O,z,m);F.type=aa,F.needsUpdate=!0;const w=A*4;for(let H=0;H<m;H++){const J=v[H],et=R[H],mt=N[H],lt=O*z*4*H;for(let Y=0;Y<J.count;Y++){const q=Y*w;E===!0&&(l.fromBufferAttribute(J,Y),P[lt+q+0]=l.x,P[lt+q+1]=l.y,P[lt+q+2]=l.z,P[lt+q+3]=0),C===!0&&(l.fromBufferAttribute(et,Y),P[lt+q+4]=l.x,P[lt+q+5]=l.y,P[lt+q+6]=l.z,P[lt+q+7]=0),M===!0&&(l.fromBufferAttribute(mt,Y),P[lt+q+8]=l.x,P[lt+q+9]=l.y,P[lt+q+10]=l.z,P[lt+q+11]=mt.itemSize===4?l.w:1)}}y={count:m,texture:F,size:new ce(O,z)},s.set(d,y),d.addEventListener("dispose",U)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<g.length;M++)E+=g[M];const C=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function r2(o,e,i,s){let l=new WeakMap;function c(p){const g=s.render.frame,_=p.geometry,m=e.get(p,_);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==g&&(y.update(),l.set(y,g))}return m}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:c,dispose:h}}const dy=new Vn,ux=new ly(1,1),py=new Kx,my=new R1,gy=new ry,cx=[],fx=[],hx=new Float32Array(16),dx=new Float32Array(9),px=new Float32Array(4);function yo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=cx[l];if(c===void 0&&(c=new Float32Array(l),cx[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Bc(o,e){let i=fx[e];i===void 0&&(i=new Int32Array(e),fx[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function s2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function o2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function l2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function u2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function c2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;px.set(s),o.uniformMatrix2fv(this.addr,!1,px),Mn(i,s)}}function f2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;dx.set(s),o.uniformMatrix3fv(this.addr,!1,dx),Mn(i,s)}}function h2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;hx.set(s),o.uniformMatrix4fv(this.addr,!1,hx),Mn(i,s)}}function d2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function p2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function m2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function g2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function v2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function _2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function x2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function y2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function S2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(ux.compareFunction=Zx,c=ux):c=dy,i.setTexture2D(e||c,l)}function M2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||my,l)}function E2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||gy,l)}function T2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||py,l)}function b2(o){switch(o){case 5126:return s2;case 35664:return o2;case 35665:return l2;case 35666:return u2;case 35674:return c2;case 35675:return f2;case 35676:return h2;case 5124:case 35670:return d2;case 35667:case 35671:return p2;case 35668:case 35672:return m2;case 35669:case 35673:return g2;case 5125:return v2;case 36294:return _2;case 36295:return x2;case 36296:return y2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return M2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return T2}}function A2(o,e){o.uniform1fv(this.addr,e)}function R2(o,e){const i=yo(e,this.size,2);o.uniform2fv(this.addr,i)}function C2(o,e){const i=yo(e,this.size,3);o.uniform3fv(this.addr,i)}function w2(o,e){const i=yo(e,this.size,4);o.uniform4fv(this.addr,i)}function D2(o,e){const i=yo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function U2(o,e){const i=yo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function N2(o,e){const i=yo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function L2(o,e){o.uniform1iv(this.addr,e)}function O2(o,e){o.uniform2iv(this.addr,e)}function P2(o,e){o.uniform3iv(this.addr,e)}function z2(o,e){o.uniform4iv(this.addr,e)}function I2(o,e){o.uniform1uiv(this.addr,e)}function B2(o,e){o.uniform2uiv(this.addr,e)}function F2(o,e){o.uniform3uiv(this.addr,e)}function H2(o,e){o.uniform4uiv(this.addr,e)}function G2(o,e,i){const s=this.cache,l=e.length,c=Bc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||dy,c[h])}function V2(o,e,i){const s=this.cache,l=e.length,c=Bc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||my,c[h])}function k2(o,e,i){const s=this.cache,l=e.length,c=Bc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||gy,c[h])}function X2(o,e,i){const s=this.cache,l=e.length,c=Bc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||py,c[h])}function Y2(o){switch(o){case 5126:return A2;case 35664:return R2;case 35665:return C2;case 35666:return w2;case 35674:return D2;case 35675:return U2;case 35676:return N2;case 5124:case 35670:return L2;case 35667:case 35671:return O2;case 35668:case 35672:return P2;case 35669:case 35673:return z2;case 5125:return I2;case 36294:return B2;case 36295:return F2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return V2;case 35680:case 36300:case 36308:case 36293:return k2;case 36289:case 36303:case 36311:case 36292:return X2}}class q2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=b2(i.type)}}class W2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Y2(i.type)}}class j2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function mx(o,e){o.seq.push(e),o.map[e.id]=e}function Z2(o,e,i){const s=o.name,l=s.length;for(jd.lastIndex=0;;){const c=jd.exec(s),h=jd.lastIndex;let d=c[1];const p=c[2]==="]",g=c[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){mx(i,g===void 0?new q2(d,o,e):new W2(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new j2(d),mx(i,m)),i=m}}}class Uc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);Z2(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function gx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Q2=37297;let K2=0;function J2(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const vx=new ge;function $2(o){we._getMatrix(vx,we.workingColorSpace,o);const e=`mat3( ${vx.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Oc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function _x(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+J2(o.getShaderSource(e),d)}else return c}function tR(o,e){const i=$2(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function eR(o,e){let i;switch(e){case Ox:i="Linear";break;case Px:i="Reinhard";break;case zx:i="Cineon";break;case Vp:i="ACESFilmic";break;case Bx:i="AgX";break;case Fx:i="Neutral";break;case Ix:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new j;function nR(){we.getLuminanceCoefficients(bc);const o=bc.x.toFixed(4),e=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function aR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function rR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Sl(o){return o!==""}function xx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bp(o){return o.replace(sR,lR)}const oR=new Map;function lR(o,e){let i=ve[e];if(i===void 0){const s=oR.get(e);if(s!==void 0)i=ve[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Bp(i)}const uR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sx(o){return o.replace(uR,cR)}function cR(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Mx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function fR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===AE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ca&&(e="SHADOWMAP_TYPE_VSM"),e}function hR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case lo:case uo:e="ENVMAP_TYPE_CUBE";break;case Ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function pR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Lx:e="ENVMAP_BLENDING_MULTIPLY";break;case YE:e="ENVMAP_BLENDING_MIX";break;case qE:e="ENVMAP_BLENDING_ADD";break}return e}function mR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function gR(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=fR(i),g=hR(i),_=dR(i),m=pR(i),y=mR(i),S=iR(i),E=aR(c),C=l.createProgram();let M,v,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Sl).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Sl).join(`
`),v.length>0&&(v+=`
`)):(M=[Mx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),v=[Mx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",i.envMap?"#define "+m:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Da?"#define TONE_MAPPING":"",i.toneMapping!==Da?ve.tonemapping_pars_fragment:"",i.toneMapping!==Da?eR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,tR("linearToOutputTexel",i.outputColorSpace),nR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Sl).join(`
`)),h=Bp(h),h=xx(h,i),h=yx(h,i),d=Bp(d),d=xx(d,i),d=yx(d,i),h=Sx(h),d=Sx(d),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=R+M+h,A=R+v+d,O=gx(l,l.VERTEX_SHADER,N),z=gx(l,l.FRAGMENT_SHADER,A);l.attachShader(C,O),l.attachShader(C,z),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(H){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(C)||"",et=l.getShaderInfoLog(O)||"",mt=l.getShaderInfoLog(z)||"",lt=J.trim(),Y=et.trim(),q=mt.trim();let X=!0,ht=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(X=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,O,z);else{const dt=_x(l,O,"vertex"),Nt=_x(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+lt+`
`+dt+`
`+Nt)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(Y===""||q==="")&&(ht=!1);ht&&(H.diagnostics={runnable:X,programLog:lt,vertexShader:{log:Y,prefix:M},fragmentShader:{log:q,prefix:v}})}l.deleteShader(O),l.deleteShader(z),F=new Uc(l,C),w=rR(l,C)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(C,Q2)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=K2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=O,this.fragmentShader=z,this}let vR=0;class _R{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new xR(e),i.set(e,s)),s}}class xR{constructor(e){this.id=vR++,this.code=e,this.usedTimes=0}}function yR(o,e,i,s,l,c,h){const d=new $x,p=new _R,g=new Set,_=[],m=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return g.add(w),w===0?"uv":`uv${w}`}function M(w,U,H,J,et){const mt=J.fog,lt=et.geometry,Y=w.isMeshStandardMaterial?J.environment:null,q=(w.isMeshStandardMaterial?i:e).get(w.envMap||Y),X=q&&q.mapping===Ic?q.image.height:null,ht=E[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const dt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Nt=dt!==void 0?dt.length:0;let Xt=0;lt.morphAttributes.position!==void 0&&(Xt=1),lt.morphAttributes.normal!==void 0&&(Xt=2),lt.morphAttributes.color!==void 0&&(Xt=3);let oe,I,ut,Z;if(ht){const Te=ea[ht];oe=Te.vertexShader,I=Te.fragmentShader}else oe=w.vertexShader,I=w.fragmentShader,p.update(w),ut=p.getVertexShaderID(w),Z=p.getFragmentShaderID(w);const nt=o.getRenderTarget(),yt=o.state.buffers.depth.getReversed(),wt=et.isInstancedMesh===!0,Tt=et.isBatchedMesh===!0,Mt=!!w.map,Gt=!!w.matcap,G=!!q,Le=!!w.aoMap,re=!!w.lightMap,Qt=!!w.bumpMap,Lt=!!w.normalMap,ne=!!w.displacementMap,Ft=!!w.emissiveMap,le=!!w.metalnessMap,Ie=!!w.roughnessMap,Ye=w.anisotropy>0,D=w.clearcoat>0,b=w.dispersion>0,it=w.iridescence>0,pt=w.sheen>0,St=w.transmission>0,gt=Ye&&!!w.anisotropyMap,Yt=D&&!!w.clearcoatMap,Ct=D&&!!w.clearcoatNormalMap,Zt=D&&!!w.clearcoatRoughnessMap,Jt=it&&!!w.iridescenceMap,At=it&&!!w.iridescenceThicknessMap,Pt=pt&&!!w.sheenColorMap,ae=pt&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,zt=!!w.specularColorMap,de=!!w.specularIntensityMap,k=St&&!!w.transmissionMap,Rt=St&&!!w.thicknessMap,Ut=!!w.gradientMap,kt=!!w.alphaMap,Et=w.alphaTest>0,xt=!!w.alphaHash,jt=!!w.extensions;let he=Da;w.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(he=o.toneMapping);const qe={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:oe,fragmentShader:I,defines:w.defines,customVertexShaderID:ut,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:Tt,batchingColor:Tt&&et._colorsTexture!==null,instancing:wt,instancingColor:wt&&et.instanceColor!==null,instancingMorph:wt&&et.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:nt===null?o.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:co,alphaToCoverage:!!w.alphaToCoverage,map:Mt,matcap:Gt,envMap:G,envMapMode:G&&q.mapping,envMapCubeUVHeight:X,aoMap:Le,lightMap:re,bumpMap:Qt,normalMap:Lt,displacementMap:y&&ne,emissiveMap:Ft,normalMapObjectSpace:Lt&&w.normalMapType===QE,normalMapTangentSpace:Lt&&w.normalMapType===jx,metalnessMap:le,roughnessMap:Ie,anisotropy:Ye,anisotropyMap:gt,clearcoat:D,clearcoatMap:Yt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Zt,dispersion:b,iridescence:it,iridescenceMap:Jt,iridescenceThicknessMap:At,sheen:pt,sheenColorMap:Pt,sheenRoughnessMap:ae,specularMap:Kt,specularColorMap:zt,specularIntensityMap:de,transmission:St,transmissionMap:k,thicknessMap:Rt,gradientMap:Ut,opaque:w.transparent===!1&&w.blending===ro&&w.alphaToCoverage===!1,alphaMap:kt,alphaTest:Et,alphaHash:xt,combine:w.combine,mapUv:Mt&&C(w.map.channel),aoMapUv:Le&&C(w.aoMap.channel),lightMapUv:re&&C(w.lightMap.channel),bumpMapUv:Qt&&C(w.bumpMap.channel),normalMapUv:Lt&&C(w.normalMap.channel),displacementMapUv:ne&&C(w.displacementMap.channel),emissiveMapUv:Ft&&C(w.emissiveMap.channel),metalnessMapUv:le&&C(w.metalnessMap.channel),roughnessMapUv:Ie&&C(w.roughnessMap.channel),anisotropyMapUv:gt&&C(w.anisotropyMap.channel),clearcoatMapUv:Yt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:ae&&C(w.sheenRoughnessMap.channel),specularMapUv:Kt&&C(w.specularMap.channel),specularColorMapUv:zt&&C(w.specularColorMap.channel),specularIntensityMapUv:de&&C(w.specularIntensityMap.channel),transmissionMapUv:k&&C(w.transmissionMap.channel),thicknessMapUv:Rt&&C(w.thicknessMap.channel),alphaMapUv:kt&&C(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Lt||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!lt.attributes.uv&&(Mt||kt),fog:!!mt,useFog:w.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:yt,skinning:et.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Xt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:he,decodeVideoTexture:Mt&&w.map.isVideoTexture===!0&&we.getTransfer(w.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ft&&w.emissiveMap.isVideoTexture===!0&&we.getTransfer(w.emissiveMap.colorSpace)===Xe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===na,flipSided:w.side===Gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:jt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&w.extensions.multiDraw===!0||Tt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return qe.vertexUv1s=g.has(1),qe.vertexUv2s=g.has(2),qe.vertexUv3s=g.has(3),g.clear(),qe}function v(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)U.push(H),U.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(R(U,w),N(U,w),U.push(o.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function R(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function N(w,U){d.disableAll(),U.supportsVertexTextures&&d.enable(0),U.instancing&&d.enable(1),U.instancingColor&&d.enable(2),U.instancingMorph&&d.enable(3),U.matcap&&d.enable(4),U.envMap&&d.enable(5),U.normalMapObjectSpace&&d.enable(6),U.normalMapTangentSpace&&d.enable(7),U.clearcoat&&d.enable(8),U.iridescence&&d.enable(9),U.alphaTest&&d.enable(10),U.vertexColors&&d.enable(11),U.vertexAlphas&&d.enable(12),U.vertexUv1s&&d.enable(13),U.vertexUv2s&&d.enable(14),U.vertexUv3s&&d.enable(15),U.vertexTangents&&d.enable(16),U.anisotropy&&d.enable(17),U.alphaHash&&d.enable(18),U.batching&&d.enable(19),U.dispersion&&d.enable(20),U.batchingColor&&d.enable(21),U.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),w.push(d.mask)}function A(w){const U=E[w.type];let H;if(U){const J=ea[U];H=Ul.clone(J.uniforms)}else H=w.uniforms;return H}function O(w,U){let H;for(let J=0,et=_.length;J<et;J++){const mt=_[J];if(mt.cacheKey===U){H=mt,++H.usedTimes;break}}return H===void 0&&(H=new gR(o,U,w,c),_.push(H)),H}function z(w){if(--w.usedTimes===0){const U=_.indexOf(w);_[U]=_[_.length-1],_.pop(),w.destroy()}}function P(w){p.remove(w)}function F(){p.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:A,acquireProgram:O,releaseProgram:z,releaseShaderCache:P,programs:_,dispose:F}}function SR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function MR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ex(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Tx(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(m,y,S,E,C,M){let v=o[e];return v===void 0?(v={id:m.id,object:m,geometry:y,material:S,groupOrder:E,renderOrder:m.renderOrder,z:C,group:M},o[e]=v):(v.id=m.id,v.object=m,v.geometry=y,v.material=S,v.groupOrder=E,v.renderOrder=m.renderOrder,v.z=C,v.group=M),e++,v}function d(m,y,S,E,C,M){const v=h(m,y,S,E,C,M);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):i.push(v)}function p(m,y,S,E,C,M){const v=h(m,y,S,E,C,M);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function g(m,y){i.length>1&&i.sort(m||MR),s.length>1&&s.sort(y||Ex),l.length>1&&l.sort(y||Ex)}function _(){for(let m=e,y=o.length;m<y;m++){const S=o[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:_,sort:g}}function ER(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new Tx,o.set(s,[h])):l>=c.length?(h=new Tx,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function TR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new fe};break;case"SpotLight":i={position:new j,direction:new j,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=i,i}}}function bR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let AR=0;function RR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function CR(o){const e=new TR,i=bR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new j);const l=new j,c=new Je,h=new Je;function d(g){let _=0,m=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let S=0,E=0,C=0,M=0,v=0,R=0,N=0,A=0,O=0,z=0,P=0;g.sort(RR);for(let w=0,U=g.length;w<U;w++){const H=g[w],J=H.color,et=H.intensity,mt=H.distance,lt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=J.r*et,m+=J.g*et,y+=J.b*et;else if(H.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(H.sh.coefficients[Y],et);P++}else if(H.isDirectionalLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const q=H.shadow,X=i.get(H);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.directionalShadow[S]=X,s.directionalShadowMap[S]=lt,s.directionalShadowMatrix[S]=H.shadow.matrix,R++}s.directional[S]=Y,S++}else if(H.isSpotLight){const Y=e.get(H);Y.position.setFromMatrixPosition(H.matrixWorld),Y.color.copy(J).multiplyScalar(et),Y.distance=mt,Y.coneCos=Math.cos(H.angle),Y.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Y.decay=H.decay,s.spot[C]=Y;const q=H.shadow;if(H.map&&(s.spotLightMap[O]=H.map,O++,q.updateMatrices(H),H.castShadow&&z++),s.spotLightMatrix[C]=q.matrix,H.castShadow){const X=i.get(H);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.spotShadow[C]=X,s.spotShadowMap[C]=lt,A++}C++}else if(H.isRectAreaLight){const Y=e.get(H);Y.color.copy(J).multiplyScalar(et),Y.halfWidth.set(H.width*.5,0,0),Y.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=Y,M++}else if(H.isPointLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),Y.distance=H.distance,Y.decay=H.decay,H.castShadow){const q=H.shadow,X=i.get(H);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,s.pointShadow[E]=X,s.pointShadowMap[E]=lt,s.pointShadowMatrix[E]=H.shadow.matrix,N++}s.point[E]=Y,E++}else if(H.isHemisphereLight){const Y=e.get(H);Y.skyColor.copy(H.color).multiplyScalar(et),Y.groundColor.copy(H.groundColor).multiplyScalar(et),s.hemi[v]=Y,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=m,s.ambient[2]=y;const F=s.hash;(F.directionalLength!==S||F.pointLength!==E||F.spotLength!==C||F.rectAreaLength!==M||F.hemiLength!==v||F.numDirectionalShadows!==R||F.numPointShadows!==N||F.numSpotShadows!==A||F.numSpotMaps!==O||F.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=C,s.rectArea.length=M,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=A+O-z,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=P,F.directionalLength=S,F.pointLength=E,F.spotLength=C,F.rectAreaLength=M,F.hemiLength=v,F.numDirectionalShadows=R,F.numPointShadows=N,F.numSpotShadows=A,F.numSpotMaps=O,F.numLightProbes=P,s.version=AR++)}function p(g,_){let m=0,y=0,S=0,E=0,C=0;const M=_.matrixWorldInverse;for(let v=0,R=g.length;v<R;v++){const N=g[v];if(N.isDirectionalLight){const A=s.directional[m];A.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(M),m++}else if(N.isSpotLight){const A=s.spot[S];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(M),S++}else if(N.isRectAreaLight){const A=s.rectArea[E];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),A.halfWidth.set(N.width*.5,0,0),A.halfHeight.set(0,N.height*.5,0),A.halfWidth.applyMatrix4(h),A.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const A=s.point[y];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(M),y++}else if(N.isHemisphereLight){const A=s.hemi[C];A.direction.setFromMatrixPosition(N.matrixWorld),A.direction.transformDirection(M),C++}}}return{setup:d,setupView:p,state:s}}function bx(o){const e=new CR(o),i=[],s=[];function l(_){g.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function p(_){e.setupView(i,_)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function wR(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new bx(o),e.set(l,[d])):c>=h.length?(d=new bx(o),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const DR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UR=`uniform sampler2D shadow_pass;
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
}`;function NR(o,e,i){let s=new Jp;const l=new ce,c=new ce,h=new on,d=new eT({depthPacking:ZE}),p=new nT,g={},_=i.maxTextureSize,m={[dr]:Gn,[Gn]:dr,[na]:na},y=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:DR,fragmentShader:UR}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new gn(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nx;let v=this.type;this.render=function(z,P,F){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const w=o.getRenderTarget(),U=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),J=o.state;J.setBlending(wa),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const et=v!==Ca&&this.type===Ca,mt=v===Ca&&this.type!==Ca;for(let lt=0,Y=z.length;lt<Y;lt++){const q=z[lt],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const ht=X.getFrameExtents();if(l.multiply(ht),c.copy(X.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ht.x),l.x=c.x*ht.x,X.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ht.y),l.y=c.y*ht.y,X.mapSize.y=c.y)),X.map===null||et===!0||mt===!0){const Nt=this.type!==Ca?{minFilter:gi,magFilter:gi}:{};X.map!==null&&X.map.dispose(),X.map=new Ci(l.x,l.y,Nt),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const dt=X.getViewportCount();for(let Nt=0;Nt<dt;Nt++){const Xt=X.getViewport(Nt);h.set(c.x*Xt.x,c.y*Xt.y,c.x*Xt.z,c.y*Xt.w),J.viewport(h),X.updateMatrices(q,Nt),s=X.getFrustum(),A(P,F,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Ca&&R(X,F),X.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(w,U,H)};function R(z,P){const F=e.update(C);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ci(l.x,l.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(P,null,F,y,C,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(P,null,F,S,C,null)}function N(z,P,F,w){let U=null;const H=F.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)U=H;else if(U=F.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const J=U.uuid,et=P.uuid;let mt=g[J];mt===void 0&&(mt={},g[J]=mt);let lt=mt[et];lt===void 0&&(lt=U.clone(),mt[et]=lt,P.addEventListener("dispose",O)),U=lt}if(U.visible=P.visible,U.wireframe=P.wireframe,w===Ca?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:m[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,F.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const J=o.properties.get(U);J.light=F}return U}function A(z,P,F,w,U){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&U===Ca)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,z.matrixWorld);const et=e.update(z),mt=z.material;if(Array.isArray(mt)){const lt=et.groups;for(let Y=0,q=lt.length;Y<q;Y++){const X=lt[Y],ht=mt[X.materialIndex];if(ht&&ht.visible){const dt=N(z,ht,w,U);z.onBeforeShadow(o,z,P,F,et,dt,X),o.renderBufferDirect(F,null,et,dt,z,X),z.onAfterShadow(o,z,P,F,et,dt,X)}}}else if(mt.visible){const lt=N(z,mt,w,U);z.onBeforeShadow(o,z,P,F,et,lt,null),o.renderBufferDirect(F,null,et,lt,z,null),z.onAfterShadow(o,z,P,F,et,lt,null)}}const J=z.children;for(let et=0,mt=J.length;et<mt;et++)A(J[et],P,F,w,U)}function O(z){z.target.removeEventListener("dispose",O);for(const F in g){const w=g[F],U=z.target.uuid;U in w&&(w[U].dispose(),delete w[U])}}}const LR={[Jd]:$d,[tp]:ip,[ep]:ap,[oo]:np,[$d]:Jd,[ip]:tp,[ap]:ep,[np]:oo};function OR(o,e){function i(){let k=!1;const Rt=new on;let Ut=null;const kt=new on(0,0,0,0);return{setMask:function(Et){Ut!==Et&&!k&&(o.colorMask(Et,Et,Et,Et),Ut=Et)},setLocked:function(Et){k=Et},setClear:function(Et,xt,jt,he,qe){qe===!0&&(Et*=he,xt*=he,jt*=he),Rt.set(Et,xt,jt,he),kt.equals(Rt)===!1&&(o.clearColor(Et,xt,jt,he),kt.copy(Rt))},reset:function(){k=!1,Ut=null,kt.set(-1,0,0,0)}}}function s(){let k=!1,Rt=!1,Ut=null,kt=null,Et=null;return{setReversed:function(xt){if(Rt!==xt){const jt=e.get("EXT_clip_control");xt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),Rt=xt;const he=Et;Et=null,this.setClear(he)}},getReversed:function(){return Rt},setTest:function(xt){xt?nt(o.DEPTH_TEST):yt(o.DEPTH_TEST)},setMask:function(xt){Ut!==xt&&!k&&(o.depthMask(xt),Ut=xt)},setFunc:function(xt){if(Rt&&(xt=LR[xt]),kt!==xt){switch(xt){case Jd:o.depthFunc(o.NEVER);break;case $d:o.depthFunc(o.ALWAYS);break;case tp:o.depthFunc(o.LESS);break;case oo:o.depthFunc(o.LEQUAL);break;case ep:o.depthFunc(o.EQUAL);break;case np:o.depthFunc(o.GEQUAL);break;case ip:o.depthFunc(o.GREATER);break;case ap:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}kt=xt}},setLocked:function(xt){k=xt},setClear:function(xt){Et!==xt&&(Rt&&(xt=1-xt),o.clearDepth(xt),Et=xt)},reset:function(){k=!1,Ut=null,kt=null,Et=null,Rt=!1}}}function l(){let k=!1,Rt=null,Ut=null,kt=null,Et=null,xt=null,jt=null,he=null,qe=null;return{setTest:function(Te){k||(Te?nt(o.STENCIL_TEST):yt(o.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!k&&(o.stencilMask(Te),Rt=Te)},setFunc:function(Te,en,vn){(Ut!==Te||kt!==en||Et!==vn)&&(o.stencilFunc(Te,en,vn),Ut=Te,kt=en,Et=vn)},setOp:function(Te,en,vn){(xt!==Te||jt!==en||he!==vn)&&(o.stencilOp(Te,en,vn),xt=Te,jt=en,he=vn)},setLocked:function(Te){k=Te},setClear:function(Te){qe!==Te&&(o.clearStencil(Te),qe=Te)},reset:function(){k=!1,Rt=null,Ut=null,kt=null,Et=null,xt=null,jt=null,he=null,qe=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,g=new WeakMap;let _={},m={},y=new WeakMap,S=[],E=null,C=!1,M=null,v=null,R=null,N=null,A=null,O=null,z=null,P=new fe(0,0,0),F=0,w=!1,U=null,H=null,J=null,et=null,mt=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,q=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=q>=2);let ht=null,dt={};const Nt=o.getParameter(o.SCISSOR_BOX),Xt=o.getParameter(o.VIEWPORT),oe=new on().fromArray(Nt),I=new on().fromArray(Xt);function ut(k,Rt,Ut,kt){const Et=new Uint8Array(4),xt=o.createTexture();o.bindTexture(k,xt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let jt=0;jt<Ut;jt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,kt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Rt+jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return xt}const Z={};Z[o.TEXTURE_2D]=ut(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),nt(o.DEPTH_TEST),h.setFunc(oo),Qt(!1),Lt(T_),nt(o.CULL_FACE),Le(wa);function nt(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function yt(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function wt(k,Rt){return m[k]!==Rt?(o.bindFramebuffer(k,Rt),m[k]=Rt,k===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Rt),k===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Tt(k,Rt){let Ut=S,kt=!1;if(k){Ut=y.get(Rt),Ut===void 0&&(Ut=[],y.set(Rt,Ut));const Et=k.textures;if(Ut.length!==Et.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,jt=Et.length;xt<jt;xt++)Ut[xt]=o.COLOR_ATTACHMENT0+xt;Ut.length=Et.length,kt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,kt=!0);kt&&o.drawBuffers(Ut)}function Mt(k){return E!==k?(o.useProgram(k),E=k,!0):!1}const Gt={[qr]:o.FUNC_ADD,[CE]:o.FUNC_SUBTRACT,[wE]:o.FUNC_REVERSE_SUBTRACT};Gt[DE]=o.MIN,Gt[UE]=o.MAX;const G={[NE]:o.ZERO,[LE]:o.ONE,[OE]:o.SRC_COLOR,[Qd]:o.SRC_ALPHA,[HE]:o.SRC_ALPHA_SATURATE,[BE]:o.DST_COLOR,[zE]:o.DST_ALPHA,[PE]:o.ONE_MINUS_SRC_COLOR,[Kd]:o.ONE_MINUS_SRC_ALPHA,[FE]:o.ONE_MINUS_DST_COLOR,[IE]:o.ONE_MINUS_DST_ALPHA,[GE]:o.CONSTANT_COLOR,[VE]:o.ONE_MINUS_CONSTANT_COLOR,[kE]:o.CONSTANT_ALPHA,[XE]:o.ONE_MINUS_CONSTANT_ALPHA};function Le(k,Rt,Ut,kt,Et,xt,jt,he,qe,Te){if(k===wa){C===!0&&(yt(o.BLEND),C=!1);return}if(C===!1&&(nt(o.BLEND),C=!0),k!==RE){if(k!==M||Te!==w){if((v!==qr||A!==qr)&&(o.blendEquation(o.FUNC_ADD),v=qr,A=qr),Te)switch(k){case ro:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lc:o.blendFunc(o.ONE,o.ONE);break;case b_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case A_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ro:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case b_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case A_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}R=null,N=null,O=null,z=null,P.set(0,0,0),F=0,M=k,w=Te}return}Et=Et||Rt,xt=xt||Ut,jt=jt||kt,(Rt!==v||Et!==A)&&(o.blendEquationSeparate(Gt[Rt],Gt[Et]),v=Rt,A=Et),(Ut!==R||kt!==N||xt!==O||jt!==z)&&(o.blendFuncSeparate(G[Ut],G[kt],G[xt],G[jt]),R=Ut,N=kt,O=xt,z=jt),(he.equals(P)===!1||qe!==F)&&(o.blendColor(he.r,he.g,he.b,qe),P.copy(he),F=qe),M=k,w=!1}function re(k,Rt){k.side===na?yt(o.CULL_FACE):nt(o.CULL_FACE);let Ut=k.side===Gn;Rt&&(Ut=!Ut),Qt(Ut),k.blending===ro&&k.transparent===!1?Le(wa):Le(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const kt=k.stencilWrite;d.setTest(kt),kt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ft(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?nt(o.SAMPLE_ALPHA_TO_COVERAGE):yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(k){U!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),U=k)}function Lt(k){k!==TE?(nt(o.CULL_FACE),k!==H&&(k===T_?o.cullFace(o.BACK):k===bE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):yt(o.CULL_FACE),H=k}function ne(k){k!==J&&(Y&&o.lineWidth(k),J=k)}function Ft(k,Rt,Ut){k?(nt(o.POLYGON_OFFSET_FILL),(et!==Rt||mt!==Ut)&&(o.polygonOffset(Rt,Ut),et=Rt,mt=Ut)):yt(o.POLYGON_OFFSET_FILL)}function le(k){k?nt(o.SCISSOR_TEST):yt(o.SCISSOR_TEST)}function Ie(k){k===void 0&&(k=o.TEXTURE0+lt-1),ht!==k&&(o.activeTexture(k),ht=k)}function Ye(k,Rt,Ut){Ut===void 0&&(ht===null?Ut=o.TEXTURE0+lt-1:Ut=ht);let kt=dt[Ut];kt===void 0&&(kt={type:void 0,texture:void 0},dt[Ut]=kt),(kt.type!==k||kt.texture!==Rt)&&(ht!==Ut&&(o.activeTexture(Ut),ht=Ut),o.bindTexture(k,Rt||Z[k]),kt.type=k,kt.texture=Rt)}function D(){const k=dt[ht];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(k){oe.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),oe.copy(k))}function ae(k){I.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),I.copy(k))}function Kt(k,Rt){let Ut=g.get(Rt);Ut===void 0&&(Ut=new WeakMap,g.set(Rt,Ut));let kt=Ut.get(k);kt===void 0&&(kt=o.getUniformBlockIndex(Rt,k.name),Ut.set(k,kt))}function zt(k,Rt){const kt=g.get(Rt).get(k);p.get(Rt)!==kt&&(o.uniformBlockBinding(Rt,kt,k.__bindingPointIndex),p.set(Rt,kt))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ht=null,dt={},m={},y=new WeakMap,S=[],E=null,C=!1,M=null,v=null,R=null,N=null,A=null,O=null,z=null,P=new fe(0,0,0),F=0,w=!1,U=null,H=null,J=null,et=null,mt=null,oe.set(0,0,o.canvas.width,o.canvas.height),I.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:nt,disable:yt,bindFramebuffer:wt,drawBuffers:Tt,useProgram:Mt,setBlending:Le,setMaterial:re,setFlipSided:Qt,setCullFace:Lt,setLineWidth:ne,setPolygonOffset:Ft,setScissorTest:le,activeTexture:Ie,bindTexture:Ye,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:it,texImage2D:Jt,texImage3D:At,updateUBOMapping:Kt,uniformBlockBinding:zt,texStorage2D:Ct,texStorage3D:Zt,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:gt,compressedTexSubImage3D:Yt,scissor:Pt,viewport:ae,reset:de}}function PR(o,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ce,_=new WeakMap;let m;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return S?new OffscreenCanvas(D,b):zc("canvas")}function C(D,b,it){let pt=1;const St=Ye(D);if((St.width>it||St.height>it)&&(pt=it/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const gt=Math.floor(pt*St.width),Yt=Math.floor(pt*St.height);m===void 0&&(m=E(gt,Yt));const Ct=b?E(gt,Yt):m;return Ct.width=gt,Ct.height=Yt,Ct.getContext("2d").drawImage(D,0,0,gt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+gt+"x"+Yt+")."),Ct}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),D;return D}function M(D){return D.generateMipmaps}function v(D){o.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(D,b,it,pt,St=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let gt=b;if(b===o.RED&&(it===o.FLOAT&&(gt=o.R32F),it===o.HALF_FLOAT&&(gt=o.R16F),it===o.UNSIGNED_BYTE&&(gt=o.R8)),b===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(gt=o.R8UI),it===o.UNSIGNED_SHORT&&(gt=o.R16UI),it===o.UNSIGNED_INT&&(gt=o.R32UI),it===o.BYTE&&(gt=o.R8I),it===o.SHORT&&(gt=o.R16I),it===o.INT&&(gt=o.R32I)),b===o.RG&&(it===o.FLOAT&&(gt=o.RG32F),it===o.HALF_FLOAT&&(gt=o.RG16F),it===o.UNSIGNED_BYTE&&(gt=o.RG8)),b===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(gt=o.RG8UI),it===o.UNSIGNED_SHORT&&(gt=o.RG16UI),it===o.UNSIGNED_INT&&(gt=o.RG32UI),it===o.BYTE&&(gt=o.RG8I),it===o.SHORT&&(gt=o.RG16I),it===o.INT&&(gt=o.RG32I)),b===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),it===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),it===o.UNSIGNED_INT&&(gt=o.RGB32UI),it===o.BYTE&&(gt=o.RGB8I),it===o.SHORT&&(gt=o.RGB16I),it===o.INT&&(gt=o.RGB32I)),b===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),it===o.UNSIGNED_INT&&(gt=o.RGBA32UI),it===o.BYTE&&(gt=o.RGBA8I),it===o.SHORT&&(gt=o.RGBA16I),it===o.INT&&(gt=o.RGBA32I)),b===o.RGB&&(it===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),b===o.RGBA){const Yt=St?Oc:we.getTransfer(pt);it===o.FLOAT&&(gt=o.RGBA32F),it===o.HALF_FLOAT&&(gt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(gt=Yt===Xe?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function A(D,b){let it;return D?b===null||b===Jr||b===bl?it=o.DEPTH24_STENCIL8:b===aa?it=o.DEPTH32F_STENCIL8:b===Tl&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Jr||b===bl?it=o.DEPTH_COMPONENT24:b===aa?it=o.DEPTH_COMPONENT32F:b===Tl&&(it=o.DEPTH_COMPONENT16),it}function O(D,b){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==gi&&D.minFilter!==ia?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function z(D){const b=D.target;b.removeEventListener("dispose",z),F(b),b.isVideoTexture&&_.delete(b)}function P(D){const b=D.target;b.removeEventListener("dispose",P),U(b)}function F(D){const b=s.get(D);if(b.__webglInit===void 0)return;const it=D.source,pt=y.get(it);if(pt){const St=pt[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(D),Object.keys(pt).length===0&&y.delete(it)}s.remove(D)}function w(D){const b=s.get(D);o.deleteTexture(b.__webglTexture);const it=D.source,pt=y.get(it);delete pt[b.__cacheKey],h.memory.textures--}function U(D){const b=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let St=0;St<b.__webglFramebuffer[pt].length;St++)o.deleteFramebuffer(b.__webglFramebuffer[pt][St]);else o.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)o.deleteFramebuffer(b.__webglFramebuffer[pt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const it=D.textures;for(let pt=0,St=it.length;pt<St;pt++){const gt=s.get(it[pt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),h.memory.textures--),s.remove(it[pt])}s.remove(D)}let H=0;function J(){H=0}function et(){const D=H;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),H+=1,D}function mt(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function lt(D,b){const it=s.get(D);if(D.isVideoTexture&&le(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&it.__version!==D.version){const pt=D.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(it,D,b);return}}else D.isExternalTexture&&(it.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+b)}function Y(D,b){const it=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&it.__version!==D.version){Z(it,D,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+b)}function q(D,b){const it=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&it.__version!==D.version){Z(it,D,b);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+b)}function X(D,b){const it=s.get(D);if(D.version>0&&it.__version!==D.version){nt(it,D,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+b)}const ht={[op]:o.REPEAT,[jr]:o.CLAMP_TO_EDGE,[lp]:o.MIRRORED_REPEAT},dt={[gi]:o.NEAREST,[WE]:o.NEAREST_MIPMAP_NEAREST,[nc]:o.NEAREST_MIPMAP_LINEAR,[ia]:o.LINEAR,[xd]:o.LINEAR_MIPMAP_NEAREST,[Zr]:o.LINEAR_MIPMAP_LINEAR},Nt={[KE]:o.NEVER,[i1]:o.ALWAYS,[JE]:o.LESS,[Zx]:o.LEQUAL,[$E]:o.EQUAL,[n1]:o.GEQUAL,[t1]:o.GREATER,[e1]:o.NOTEQUAL};function Xt(D,b){if(b.type===aa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===ia||b.magFilter===xd||b.magFilter===nc||b.magFilter===Zr||b.minFilter===ia||b.minFilter===xd||b.minFilter===nc||b.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,ht[b.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,ht[b.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,ht[b.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,dt[b.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,Nt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===gi||b.minFilter!==nc&&b.minFilter!==Zr||b.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function oe(D,b){let it=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",z));const pt=b.source;let St=y.get(pt);St===void 0&&(St={},y.set(pt,St));const gt=mt(b);if(gt!==D.__cacheKey){St[gt]===void 0&&(St[gt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),St[gt].usedTimes++;const Yt=St[D.__cacheKey];Yt!==void 0&&(St[D.__cacheKey].usedTimes--,Yt.usedTimes===0&&w(b)),D.__cacheKey=gt,D.__webglTexture=St[gt].texture}return it}function I(D,b,it){return Math.floor(Math.floor(D/it)/b)}function ut(D,b,it,pt){const gt=D.updateRanges;if(gt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,it,pt,b.data);else{gt.sort((At,Pt)=>At.start-Pt.start);let Yt=0;for(let At=1;At<gt.length;At++){const Pt=gt[Yt],ae=gt[At],Kt=Pt.start+Pt.count,zt=I(ae.start,b.width,4),de=I(Pt.start,b.width,4);ae.start<=Kt+1&&zt===de&&I(ae.start+ae.count-1,b.width,4)===zt?Pt.count=Math.max(Pt.count,ae.start+ae.count-Pt.start):(++Yt,gt[Yt]=ae)}gt.length=Yt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),Jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let At=0,Pt=gt.length;At<Pt;At++){const ae=gt[At],Kt=Math.floor(ae.start/4),zt=Math.ceil(ae.count/4),de=Kt%b.width,k=Math.floor(Kt/b.width),Rt=zt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,de),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,de,k,Rt,Ut,it,pt,b.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Jt)}}function Z(D,b,it){let pt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=o.TEXTURE_3D);const St=oe(D,b),gt=b.source;i.bindTexture(pt,D.__webglTexture,o.TEXTURE0+it);const Yt=s.get(gt);if(gt.version!==Yt.__version||St===!0){i.activeTexture(o.TEXTURE0+it);const Ct=we.getPrimaries(we.workingColorSpace),Zt=b.colorSpace===hr?null:we.getPrimaries(b.colorSpace),Jt=b.colorSpace===hr||Ct===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let At=C(b.image,!1,l.maxTextureSize);At=Ie(b,At);const Pt=c.convert(b.format,b.colorSpace),ae=c.convert(b.type);let Kt=N(b.internalFormat,Pt,ae,b.colorSpace,b.isVideoTexture);Xt(pt,b);let zt;const de=b.mipmaps,k=b.isVideoTexture!==!0,Rt=Yt.__version===void 0||St===!0,Ut=gt.dataReady,kt=O(b,At);if(b.isDepthTexture)Kt=A(b.format===Rl,b.type),Rt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Kt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Kt,At.width,At.height,0,Pt,ae,null));else if(b.isDataTexture)if(de.length>0){k&&Rt&&i.texStorage2D(o.TEXTURE_2D,kt,Kt,de[0].width,de[0].height);for(let Et=0,xt=de.length;Et<xt;Et++)zt=de[Et],k?Ut&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,zt.width,zt.height,Pt,ae,zt.data):i.texImage2D(o.TEXTURE_2D,Et,Kt,zt.width,zt.height,0,Pt,ae,zt.data);b.generateMipmaps=!1}else k?(Rt&&i.texStorage2D(o.TEXTURE_2D,kt,Kt,At.width,At.height),Ut&&ut(b,At,Pt,ae)):i.texImage2D(o.TEXTURE_2D,0,Kt,At.width,At.height,0,Pt,ae,At.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Kt,de[0].width,de[0].height,At.depth);for(let Et=0,xt=de.length;Et<xt;Et++)if(zt=de[Et],b.format!==Fi)if(Pt!==null)if(k){if(Ut)if(b.layerUpdates.size>0){const jt=ex(zt.width,zt.height,b.format,b.type);for(const he of b.layerUpdates){const qe=zt.data.subarray(he*jt/zt.data.BYTES_PER_ELEMENT,(he+1)*jt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,he,zt.width,zt.height,1,Pt,qe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,zt.width,zt.height,At.depth,Pt,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Kt,zt.width,zt.height,At.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ut&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,zt.width,zt.height,At.depth,Pt,ae,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,Kt,zt.width,zt.height,At.depth,0,Pt,ae,zt.data)}else{k&&Rt&&i.texStorage2D(o.TEXTURE_2D,kt,Kt,de[0].width,de[0].height);for(let Et=0,xt=de.length;Et<xt;Et++)zt=de[Et],b.format!==Fi?Pt!==null?k?Ut&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,zt.width,zt.height,Pt,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,Kt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ut&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,zt.width,zt.height,Pt,ae,zt.data):i.texImage2D(o.TEXTURE_2D,Et,Kt,zt.width,zt.height,0,Pt,ae,zt.data)}else if(b.isDataArrayTexture)if(k){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Kt,At.width,At.height,At.depth),Ut)if(b.layerUpdates.size>0){const Et=ex(At.width,At.height,b.format,b.type);for(const xt of b.layerUpdates){const jt=At.data.subarray(xt*Et/At.data.BYTES_PER_ELEMENT,(xt+1)*Et/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,At.width,At.height,1,Pt,ae,jt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Pt,ae,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Kt,At.width,At.height,At.depth,0,Pt,ae,At.data);else if(b.isData3DTexture)k?(Rt&&i.texStorage3D(o.TEXTURE_3D,kt,Kt,At.width,At.height,At.depth),Ut&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Pt,ae,At.data)):i.texImage3D(o.TEXTURE_3D,0,Kt,At.width,At.height,At.depth,0,Pt,ae,At.data);else if(b.isFramebufferTexture){if(Rt)if(k)i.texStorage2D(o.TEXTURE_2D,kt,Kt,At.width,At.height);else{let Et=At.width,xt=At.height;for(let jt=0;jt<kt;jt++)i.texImage2D(o.TEXTURE_2D,jt,Kt,Et,xt,0,Pt,ae,null),Et>>=1,xt>>=1}}else if(de.length>0){if(k&&Rt){const Et=Ye(de[0]);i.texStorage2D(o.TEXTURE_2D,kt,Kt,Et.width,Et.height)}for(let Et=0,xt=de.length;Et<xt;Et++)zt=de[Et],k?Ut&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Pt,ae,zt):i.texImage2D(o.TEXTURE_2D,Et,Kt,Pt,ae,zt);b.generateMipmaps=!1}else if(k){if(Rt){const Et=Ye(At);i.texStorage2D(o.TEXTURE_2D,kt,Kt,Et.width,Et.height)}Ut&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,ae,At)}else i.texImage2D(o.TEXTURE_2D,0,Kt,Pt,ae,At);M(b)&&v(pt),Yt.__version=gt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function nt(D,b,it){if(b.image.length!==6)return;const pt=oe(D,b),St=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+it);const gt=s.get(St);if(St.version!==gt.__version||pt===!0){i.activeTexture(o.TEXTURE0+it);const Yt=we.getPrimaries(we.workingColorSpace),Ct=b.colorSpace===hr?null:we.getPrimaries(b.colorSpace),Zt=b.colorSpace===hr||Yt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let xt=0;xt<6;xt++)!Jt&&!At?Pt[xt]=C(b.image[xt],!0,l.maxCubemapSize):Pt[xt]=At?b.image[xt].image:b.image[xt],Pt[xt]=Ie(b,Pt[xt]);const ae=Pt[0],Kt=c.convert(b.format,b.colorSpace),zt=c.convert(b.type),de=N(b.internalFormat,Kt,zt,b.colorSpace),k=b.isVideoTexture!==!0,Rt=gt.__version===void 0||pt===!0,Ut=St.dataReady;let kt=O(b,ae);Xt(o.TEXTURE_CUBE_MAP,b);let Et;if(Jt){k&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,de,ae.width,ae.height);for(let xt=0;xt<6;xt++){Et=Pt[xt].mipmaps;for(let jt=0;jt<Et.length;jt++){const he=Et[jt];b.format!==Fi?Kt!==null?k?Ut&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,0,0,he.width,he.height,Kt,he.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,de,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,0,0,he.width,he.height,Kt,zt,he.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,de,he.width,he.height,0,Kt,zt,he.data)}}}else{if(Et=b.mipmaps,k&&Rt){Et.length>0&&kt++;const xt=Ye(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,de,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(At){k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Pt[xt].width,Pt[xt].height,Kt,zt,Pt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Pt[xt].width,Pt[xt].height,0,Kt,zt,Pt[xt].data);for(let jt=0;jt<Et.length;jt++){const qe=Et[jt].image[xt].image;k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,0,0,qe.width,qe.height,Kt,zt,qe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,de,qe.width,qe.height,0,Kt,zt,qe.data)}}else{k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Kt,zt,Pt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Kt,zt,Pt[xt]);for(let jt=0;jt<Et.length;jt++){const he=Et[jt];k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,0,0,Kt,zt,he.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,de,Kt,zt,he.image[xt])}}}M(b)&&v(o.TEXTURE_CUBE_MAP),gt.__version=St.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function yt(D,b,it,pt,St,gt){const Yt=c.convert(it.format,it.colorSpace),Ct=c.convert(it.type),Zt=N(it.internalFormat,Yt,Ct,it.colorSpace),Jt=s.get(b),At=s.get(it);if(At.__renderTarget=b,!Jt.__hasExternalTextures){const Pt=Math.max(1,b.width>>gt),ae=Math.max(1,b.height>>gt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,gt,Zt,Pt,ae,b.depth,0,Yt,Ct,null):i.texImage2D(St,gt,Zt,Pt,ae,0,Yt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,St,At.__webglTexture,0,ne(b)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,St,At.__webglTexture,gt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(D,b,it){if(o.bindRenderbuffer(o.RENDERBUFFER,D),b.depthBuffer){const pt=b.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,gt=A(b.stencilBuffer,St),Yt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=ne(b);Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,gt,b.width,b.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,gt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,gt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,D)}else{const pt=b.textures;for(let St=0;St<pt.length;St++){const gt=pt[St],Yt=c.convert(gt.format,gt.colorSpace),Ct=c.convert(gt.type),Zt=N(gt.internalFormat,Yt,Ct,gt.colorSpace),Jt=ne(b);it&&Ft(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Zt,b.width,b.height):Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Jt,Zt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Tt(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),lt(b.depthTexture,0);const St=pt.__webglTexture,gt=ne(b);if(b.depthTexture.format===Al)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(b.depthTexture.format===Rl)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Mt(D){const b=s.get(D),it=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const pt=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=pt}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const pt=D.texture.mipmaps;pt&&pt.length>0?Tt(b.__webglFramebuffer[0],D):Tt(b.__webglFramebuffer,D)}else if(it){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=o.createRenderbuffer(),wt(b.__webglDepthbuffer[pt],D,!1);else{const St=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,gt)}}else{const pt=D.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),wt(b.__webglDepthbuffer,D,!1);else{const St=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,gt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(D,b,it){const pt=s.get(D);b!==void 0&&yt(pt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Mt(D)}function G(D){const b=D.texture,it=s.get(D),pt=s.get(b);D.addEventListener("dispose",P);const St=D.textures,gt=D.isWebGLCubeRenderTarget===!0,Yt=St.length>1;if(Yt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=b.version,h.memory.textures++),gt){it.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer[Ct]=[];for(let Zt=0;Zt<b.mipmaps.length;Zt++)it.__webglFramebuffer[Ct][Zt]=o.createFramebuffer()}else it.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)it.__webglFramebuffer[Ct]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let Ct=0,Zt=St.length;Ct<Zt;Ct++){const Jt=s.get(St[Ct]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&Ft(D)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ct=0;Ct<St.length;Ct++){const Zt=St[Ct];it.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct]);const Jt=c.convert(Zt.format,Zt.colorSpace),At=c.convert(Zt.type),Pt=N(Zt.internalFormat,Jt,At,Zt.colorSpace,D.isXRRenderTarget===!0),ae=ne(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,ae,Pt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),wt(it.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Xt(o.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)yt(it.__webglFramebuffer[Ct][Zt],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Zt);else yt(it.__webglFramebuffer[Ct],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(b)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Ct=0,Zt=St.length;Ct<Zt;Ct++){const Jt=St[Ct],At=s.get(Jt);let Pt=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,At.__webglTexture),Xt(Pt,Jt),yt(it.__webglFramebuffer,D,Jt,o.COLOR_ATTACHMENT0+Ct,Pt,0),M(Jt)&&v(Pt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ct=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),Xt(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Zt=0;Zt<b.mipmaps.length;Zt++)yt(it.__webglFramebuffer[Zt],D,b,o.COLOR_ATTACHMENT0,Ct,Zt);else yt(it.__webglFramebuffer,D,b,o.COLOR_ATTACHMENT0,Ct,0);M(b)&&v(Ct),i.unbindTexture()}D.depthBuffer&&Mt(D)}function Le(D){const b=D.textures;for(let it=0,pt=b.length;it<pt;it++){const St=b[it];if(M(St)){const gt=R(D),Yt=s.get(St).__webglTexture;i.bindTexture(gt,Yt),v(gt),i.unbindTexture()}}}const re=[],Qt=[];function Lt(D){if(D.samples>0){if(Ft(D)===!1){const b=D.textures,it=D.width,pt=D.height;let St=o.COLOR_BUFFER_BIT;const gt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=s.get(D),Ct=b.length>1;if(Ct)for(let Jt=0;Jt<b.length;Jt++)i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Zt=D.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Jt=0;Jt<b.length;Jt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Jt]);const At=s.get(b[Jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,At,0)}o.blitFramebuffer(0,0,it,pt,0,0,it,pt,St,o.NEAREST),p===!0&&(re.length=0,Qt.length=0,re.push(o.COLOR_ATTACHMENT0+Jt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(re.push(gt),Qt.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Jt=0;Jt<b.length;Jt++){i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Jt]);const At=s.get(b[Jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,At,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const b=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ne(D){return Math.min(l.maxSamples,D.samples)}function Ft(D){const b=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function le(D){const b=h.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function Ie(D,b){const it=D.colorSpace,pt=D.format,St=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||it!==co&&it!==hr&&(we.getTransfer(it)===Xe?(pt!==Fi||St!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),b}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(g.width=D.naturalWidth||D.width,g.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(g.width=D.displayWidth,g.height=D.displayHeight):(g.width=D.width,g.height=D.height),g}this.allocateTextureUnit=et,this.resetTextureUnits=J,this.setTexture2D=lt,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Gt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Ft}function zR(o,e){function i(s,l=hr){let c;const h=we.getTransfer(l);if(s===Gi)return o.UNSIGNED_BYTE;if(s===Xp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Yp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===kx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Xx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Gx)return o.BYTE;if(s===Vx)return o.SHORT;if(s===Tl)return o.UNSIGNED_SHORT;if(s===kp)return o.INT;if(s===Jr)return o.UNSIGNED_INT;if(s===aa)return o.FLOAT;if(s===Hi)return o.HALF_FLOAT;if(s===Yx)return o.ALPHA;if(s===qx)return o.RGB;if(s===Fi)return o.RGBA;if(s===Al)return o.DEPTH_COMPONENT;if(s===Rl)return o.DEPTH_STENCIL;if(s===qp)return o.RED;if(s===Wp)return o.RED_INTEGER;if(s===Wx)return o.RG;if(s===jp)return o.RG_INTEGER;if(s===Zp)return o.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(h===Xe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Rc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Rc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===up||s===cp||s===fp||s===hp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===up)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dp||s===pp||s===mp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===dp||s===pp)return h===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===mp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gp||s===vp||s===_p||s===xp||s===yp||s===Sp||s===Mp||s===Ep||s===Tp||s===bp||s===Ap||s===Rp||s===Cp||s===wp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===gp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_p)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ep)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ap)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dp||s===Up||s===Np)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Dp)return h===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Up)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Np)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lp||s===Op||s===Pp||s===zp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Lp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Op)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const IR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BR=`
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

}`;class FR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new uy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ln({vertexShader:IR,fragmentShader:BR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new gn(new xo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HR extends po{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,g=null,_=null,m=null,y=null,S=null,E=null;const C=typeof XRWebGLBinding<"u",M=new FR,v={},R=i.getContextAttributes();let N=null,A=null;const O=[],z=[],P=new ce;let F=null;const w=new mi;w.viewport=new on;const U=new mi;U.viewport=new on;const H=[w,U],J=new oT;let et=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=O[Z];return nt===void 0&&(nt=new Hd,O[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=O[Z];return nt===void 0&&(nt=new Hd,O[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=O[Z];return nt===void 0&&(nt=new Hd,O[Z]=nt),nt.getHandSpace()};function lt(Z){const nt=z.indexOf(Z.inputSource);if(nt===-1)return;const yt=O[nt];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,g||h),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",Y),l.removeEventListener("inputsourceschange",q);for(let Z=0;Z<O.length;Z++){const nt=z[Z];nt!==null&&(z[Z]=null,O[Z].disconnect(nt))}et=null,mt=null,M.reset();for(const Z in v)delete v[Z];e.setRenderTarget(N),S=null,y=null,m=null,l=null,A=null,ut.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(Z){g=Z},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return m===null&&C&&(m=new XRWebGLBinding(l,i)),m},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",Y),l.addEventListener("inputsourceschange",q),R.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,wt=null,Tt=null;R.depth&&(Tt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=R.stencil?Rl:Al,wt=R.stencil?bl:Jr);const Mt={colorFormat:i.RGBA8,depthFormat:Tt,scaleFactor:c};m=this.getBinding(),y=m.createProjectionLayer(Mt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),A=new Ci(y.textureWidth,y.textureHeight,{format:Fi,type:Gi,depthTexture:new ly(y.textureWidth,y.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const yt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),A=new Ci(S.framebufferWidth,S.framebufferHeight,{format:Fi,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),ut.setContext(l),ut.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q(Z){for(let nt=0;nt<Z.removed.length;nt++){const yt=Z.removed[nt],wt=z.indexOf(yt);wt>=0&&(z[wt]=null,O[wt].disconnect(yt))}for(let nt=0;nt<Z.added.length;nt++){const yt=Z.added[nt];let wt=z.indexOf(yt);if(wt===-1){for(let Mt=0;Mt<O.length;Mt++)if(Mt>=z.length){z.push(yt),wt=Mt;break}else if(z[Mt]===null){z[Mt]=yt,wt=Mt;break}if(wt===-1)break}const Tt=O[wt];Tt&&Tt.connect(yt)}}const X=new j,ht=new j;function dt(Z,nt,yt){X.setFromMatrixPosition(nt.matrixWorld),ht.setFromMatrixPosition(yt.matrixWorld);const wt=X.distanceTo(ht),Tt=nt.projectionMatrix.elements,Mt=yt.projectionMatrix.elements,Gt=Tt[14]/(Tt[10]-1),G=Tt[14]/(Tt[10]+1),Le=(Tt[9]+1)/Tt[5],re=(Tt[9]-1)/Tt[5],Qt=(Tt[8]-1)/Tt[0],Lt=(Mt[8]+1)/Mt[0],ne=Gt*Qt,Ft=Gt*Lt,le=wt/(-Qt+Lt),Ie=le*-Qt;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ie),Z.translateZ(le),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Tt[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Ye=Gt+le,D=G+le,b=ne-Ie,it=Ft+(wt-Ie),pt=Le*G/D*Ye,St=re*G/D*Ye;Z.projectionMatrix.makePerspective(b,it,pt,St,Ye,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Nt(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let nt=Z.near,yt=Z.far;M.texture!==null&&(M.depthNear>0&&(nt=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),J.near=U.near=w.near=nt,J.far=U.far=w.far=yt,(et!==J.near||mt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),et=J.near,mt=J.far),J.layers.mask=Z.layers.mask|6,w.layers.mask=J.layers.mask&3,U.layers.mask=J.layers.mask&5;const wt=Z.parent,Tt=J.cameras;Nt(J,wt);for(let Mt=0;Mt<Tt.length;Mt++)Nt(Tt[Mt],wt);Tt.length===2?dt(J,w,U):J.projectionMatrix.copy(w.projectionMatrix),Xt(Z,J,wt)};function Xt(Z,nt,yt){yt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Cl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(Z){p=Z,y!==null&&(y.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(Z){return v[Z]};let oe=null;function I(Z,nt){if(_=nt.getViewerPose(g||h),E=nt,_!==null){const yt=_.views;S!==null&&(e.setRenderTargetFramebuffer(A,S.framebuffer),e.setRenderTarget(A));let wt=!1;yt.length!==J.cameras.length&&(J.cameras.length=0,wt=!0);for(let G=0;G<yt.length;G++){const Le=yt[G];let re=null;if(S!==null)re=S.getViewport(Le);else{const Lt=m.getViewSubImage(y,Le);re=Lt.viewport,G===0&&(e.setRenderTargetTextures(A,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(A))}let Qt=H[G];Qt===void 0&&(Qt=new mi,Qt.layers.enable(G),Qt.viewport=new on,H[G]=Qt),Qt.matrix.fromArray(Le.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Le.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(re.x,re.y,re.width,re.height),G===0&&(J.matrix.copy(Qt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),wt===!0&&J.cameras.push(Qt)}const Tt=l.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){m=s.getBinding();const G=m.getDepthInformation(yt[0]);G&&G.isValid&&G.texture&&M.init(G,l.renderState)}if(Tt&&Tt.includes("camera-access")&&C){e.state.unbindTexture(),m=s.getBinding();for(let G=0;G<yt.length;G++){const Le=yt[G].camera;if(Le){let re=v[Le];re||(re=new uy,v[Le]=re);const Qt=m.getCameraImage(Le);re.sourceTexture=Qt}}}}for(let yt=0;yt<O.length;yt++){const wt=z[yt],Tt=O[yt];wt!==null&&Tt!==void 0&&Tt.update(wt,nt,g||h)}oe&&oe(Z,nt),nt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:nt}),E=null}const ut=new hy;ut.setAnimationLoop(I),this.setAnimationLoop=function(Z){oe=Z},this.dispose=function(){}}}const kr=new Vi,GR=new Je;function VR(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,iy(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,R,N,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),m(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),y(M,v),v.isMeshPhysicalMaterial&&S(M,v,A)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),C(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?p(M,v,R,N):v.isSpriteMaterial?g(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Gn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Gn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const R=e.get(v),N=R.envMap,A=R.envMapRotation;N&&(M.envMap.value=N,kr.copy(A),kr.x*=-1,kr.y*=-1,kr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),M.envMapRotation.value.setFromMatrix4(GR.makeRotationFromEuler(kr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function p(M,v,R,N){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*R,M.scale.value=N*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function m(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,R){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=R.texture,M.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function C(M,v){const R=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(R.matrixWorld),M.nearDistance.value=R.shadow.camera.near,M.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function kR(o,e,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,N){const A=N.program;s.uniformBlockBinding(R,A)}function g(R,N){let A=l[R.id];A===void 0&&(E(R),A=_(R),l[R.id]=A,R.addEventListener("dispose",M));const O=N.program;s.updateUBOMapping(R,O);const z=e.render.frame;c[R.id]!==z&&(y(R),c[R.id]=z)}function _(R){const N=m();R.__bindingPointIndex=N;const A=o.createBuffer(),O=R.__size,z=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,O,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,A),A}function m(){for(let R=0;R<d;R++)if(h.indexOf(R)===-1)return h.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(R){const N=l[R.id],A=R.uniforms,O=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let z=0,P=A.length;z<P;z++){const F=Array.isArray(A[z])?A[z]:[A[z]];for(let w=0,U=F.length;w<U;w++){const H=F[w];if(S(H,z,w,O)===!0){const J=H.__offset,et=Array.isArray(H.value)?H.value:[H.value];let mt=0;for(let lt=0;lt<et.length;lt++){const Y=et[lt],q=C(Y);typeof Y=="number"||typeof Y=="boolean"?(H.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,J+mt,H.__data)):Y.isMatrix3?(H.__data[0]=Y.elements[0],H.__data[1]=Y.elements[1],H.__data[2]=Y.elements[2],H.__data[3]=0,H.__data[4]=Y.elements[3],H.__data[5]=Y.elements[4],H.__data[6]=Y.elements[5],H.__data[7]=0,H.__data[8]=Y.elements[6],H.__data[9]=Y.elements[7],H.__data[10]=Y.elements[8],H.__data[11]=0):(Y.toArray(H.__data,mt),mt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(R,N,A,O){const z=R.value,P=N+"_"+A;if(O[P]===void 0)return typeof z=="number"||typeof z=="boolean"?O[P]=z:O[P]=z.clone(),!0;{const F=O[P];if(typeof z=="number"||typeof z=="boolean"){if(F!==z)return O[P]=z,!0}else if(F.equals(z)===!1)return F.copy(z),!0}return!1}function E(R){const N=R.uniforms;let A=0;const O=16;for(let P=0,F=N.length;P<F;P++){const w=Array.isArray(N[P])?N[P]:[N[P]];for(let U=0,H=w.length;U<H;U++){const J=w[U],et=Array.isArray(J.value)?J.value:[J.value];for(let mt=0,lt=et.length;mt<lt;mt++){const Y=et[mt],q=C(Y),X=A%O,ht=X%q.boundary,dt=X+ht;A+=ht,dt!==0&&O-dt<q.storage&&(A+=O-dt),J.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=A,A+=q.storage}}}const z=A%O;return z>0&&(A+=O-z),R.__size=A,R.__cache={},this}function C(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),N}function M(R){const N=R.target;N.removeEventListener("dispose",M);const A=h.indexOf(N.__bindingPointIndex);h.splice(A,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const R in l)o.deleteBuffer(l[R]);h=[],l={},c={}}return{bind:p,update:g,dispose:v}}class XR{constructor(e={}){const{canvas:i=y1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),C=new Int32Array(4);let M=null,v=null;const R=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let O=!1;this._outputColorSpace=ei;let z=0,P=0,F=null,w=-1,U=null;const H=new on,J=new on;let et=null;const mt=new fe(0);let lt=0,Y=i.width,q=i.height,X=1,ht=null,dt=null;const Nt=new on(0,0,Y,q),Xt=new on(0,0,Y,q);let oe=!1;const I=new Jp;let ut=!1,Z=!1;const nt=new Je,yt=new j,wt=new on,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Gt(){return F===null?X:1}let G=s;function Le(L,$){return i.getContext(L,$)}try{const L={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gp}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),G===null){const $="webgl2";if(G=Le($,L),G===null)throw Le($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let re,Qt,Lt,ne,Ft,le,Ie,Ye,D,b,it,pt,St,gt,Yt,Ct,Zt,Jt,At,Pt,ae,Kt,zt,de;function k(){re=new t2(G),re.init(),Kt=new zR(G,re),Qt=new WA(G,re,e,Kt),Lt=new OR(G,re),Qt.reversedDepthBuffer&&y&&Lt.buffers.depth.setReversed(!0),ne=new i2(G),Ft=new SR,le=new PR(G,re,Lt,Ft,Qt,Kt,ne),Ie=new ZA(A),Ye=new $A(A),D=new uT(G),zt=new YA(G,D),b=new e2(G,D,ne,zt),it=new r2(G,b,D,ne),At=new a2(G,Qt,le),Ct=new jA(Ft),pt=new yR(A,Ie,Ye,re,Qt,zt,Ct),St=new VR(A,Ft),gt=new ER,Yt=new wR(re),Jt=new XA(A,Ie,Ye,Lt,it,S,p),Zt=new NR(A,it,Qt),de=new kR(G,ne,Qt,Lt),Pt=new qA(G,re,ne),ae=new n2(G,re,ne),ne.programs=pt.programs,A.capabilities=Qt,A.extensions=re,A.properties=Ft,A.renderLists=gt,A.shadowMap=Zt,A.state=Lt,A.info=ne}k();const Rt=new HR(A,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const L=re.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=re.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(L){L!==void 0&&(X=L,this.setSize(Y,q,!1))},this.getSize=function(L){return L.set(Y,q)},this.setSize=function(L,$,ct=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=L,q=$,i.width=Math.floor(L*X),i.height=Math.floor($*X),ct===!0&&(i.style.width=L+"px",i.style.height=$+"px"),this.setViewport(0,0,L,$)},this.getDrawingBufferSize=function(L){return L.set(Y*X,q*X).floor()},this.setDrawingBufferSize=function(L,$,ct){Y=L,q=$,X=ct,i.width=Math.floor(L*ct),i.height=Math.floor($*ct),this.setViewport(0,0,L,$)},this.getCurrentViewport=function(L){return L.copy(H)},this.getViewport=function(L){return L.copy(Nt)},this.setViewport=function(L,$,ct,ft){L.isVector4?Nt.set(L.x,L.y,L.z,L.w):Nt.set(L,$,ct,ft),Lt.viewport(H.copy(Nt).multiplyScalar(X).round())},this.getScissor=function(L){return L.copy(Xt)},this.setScissor=function(L,$,ct,ft){L.isVector4?Xt.set(L.x,L.y,L.z,L.w):Xt.set(L,$,ct,ft),Lt.scissor(J.copy(Xt).multiplyScalar(X).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(L){Lt.setScissorTest(oe=L)},this.setOpaqueSort=function(L){ht=L},this.setTransparentSort=function(L){dt=L},this.getClearColor=function(L){return L.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(L=!0,$=!0,ct=!0){let ft=0;if(L){let tt=!1;if(F!==null){const bt=F.texture.format;tt=bt===Zp||bt===jp||bt===Wp}if(tt){const bt=F.texture.type,It=bt===Gi||bt===Jr||bt===Tl||bt===bl||bt===Xp||bt===Yp,Ht=Jt.getClearColor(),Dt=Jt.getClearAlpha(),qt=Ht.r,ie=Ht.g,te=Ht.b;It?(E[0]=qt,E[1]=ie,E[2]=te,E[3]=Dt,G.clearBufferuiv(G.COLOR,0,E)):(C[0]=qt,C[1]=ie,C[2]=te,C[3]=Dt,G.clearBufferiv(G.COLOR,0,C))}else ft|=G.COLOR_BUFFER_BIT}$&&(ft|=G.DEPTH_BUFFER_BIT),ct&&(ft|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),Jt.dispose(),gt.dispose(),Yt.dispose(),Ft.dispose(),Ie.dispose(),Ye.dispose(),it.dispose(),zt.dispose(),de.dispose(),pt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",vn),Rt.removeEventListener("sessionend",On),oa.stop()};function Ut(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const L=ne.autoReset,$=Zt.enabled,ct=Zt.autoUpdate,ft=Zt.needsUpdate,tt=Zt.type;k(),ne.autoReset=L,Zt.enabled=$,Zt.autoUpdate=ct,Zt.needsUpdate=ft,Zt.type=tt}function Et(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function xt(L){const $=L.target;$.removeEventListener("dispose",xt),jt($)}function jt(L){he(L),Ft.remove(L)}function he(L){const $=Ft.get(L).programs;$!==void 0&&($.forEach(function(ct){pt.releaseProgram(ct)}),L.isShaderMaterial&&pt.releaseShaderCache(L))}this.renderBufferDirect=function(L,$,ct,ft,tt,bt){$===null&&($=Tt);const It=tt.isMesh&&tt.matrixWorld.determinant()<0,Ht=Ol(L,$,ct,ft,tt);Lt.setMaterial(ft,It);let Dt=ct.index,qt=1;if(ft.wireframe===!0){if(Dt=b.getWireframeAttribute(ct),Dt===void 0)return;qt=2}const ie=ct.drawRange,te=ct.attributes.position;let Se=ie.start*qt,Be=(ie.start+ie.count)*qt;bt!==null&&(Se=Math.max(Se,bt.start*qt),Be=Math.min(Be,(bt.start+bt.count)*qt)),Dt!==null?(Se=Math.max(Se,0),Be=Math.min(Be,Dt.count)):te!=null&&(Se=Math.max(Se,0),Be=Math.min(Be,te.count));const $e=Be-Se;if($e<0||$e===1/0)return;zt.setup(tt,ft,Ht,ct,Dt);let Oe,De=Pt;if(Dt!==null&&(Oe=D.get(Dt),De=ae,De.setIndex(Oe)),tt.isMesh)ft.wireframe===!0?(Lt.setLineWidth(ft.wireframeLinewidth*Gt()),De.setMode(G.LINES)):De.setMode(G.TRIANGLES);else if(tt.isLine){let ee=ft.linewidth;ee===void 0&&(ee=1),Lt.setLineWidth(ee*Gt()),tt.isLineSegments?De.setMode(G.LINES):tt.isLineLoop?De.setMode(G.LINE_LOOP):De.setMode(G.LINE_STRIP)}else tt.isPoints?De.setMode(G.POINTS):tt.isSprite&&De.setMode(G.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)wl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))De.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const ee=tt._multiDrawStarts,Pe=tt._multiDrawCounts,_e=tt._multiDrawCount,_n=Dt?D.get(Dt).bytesPerElement:1,ai=Ft.get(ft).currentProgram.getUniforms();for(let Ue=0;Ue<_e;Ue++)ai.setValue(G,"_gl_DrawID",Ue),De.render(ee[Ue]/_n,Pe[Ue])}else if(tt.isInstancedMesh)De.renderInstances(Se,$e,tt.count);else if(ct.isInstancedBufferGeometry){const ee=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Pe=Math.min(ct.instanceCount,ee);De.renderInstances(Se,$e,Pe)}else De.render(Se,$e)};function qe(L,$,ct){L.transparent===!0&&L.side===na&&L.forceSinglePass===!1?(L.side=Gn,L.needsUpdate=!0,vi(L,$,ct),L.side=dr,L.needsUpdate=!0,vi(L,$,ct),L.side=na):vi(L,$,ct)}this.compile=function(L,$,ct=null){ct===null&&(ct=L),v=Yt.get(ct),v.init($),N.push(v),ct.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(v.pushLight(tt),tt.castShadow&&v.pushShadow(tt))}),L!==ct&&L.traverseVisible(function(tt){tt.isLight&&tt.layers.test($.layers)&&(v.pushLight(tt),tt.castShadow&&v.pushShadow(tt))}),v.setupLights();const ft=new Set;return L.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const bt=tt.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){const Ht=bt[It];qe(Ht,ct,tt),ft.add(Ht)}else qe(bt,ct,tt),ft.add(bt)}),v=N.pop(),ft},this.compileAsync=function(L,$,ct=null){const ft=this.compile(L,$,ct);return new Promise(tt=>{function bt(){if(ft.forEach(function(It){Ft.get(It).currentProgram.isReady()&&ft.delete(It)}),ft.size===0){tt(L);return}setTimeout(bt,10)}re.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Te=null;function en(L){Te&&Te(L)}function vn(){oa.stop()}function On(){oa.start()}const oa=new hy;oa.setAnimationLoop(en),typeof self<"u"&&oa.setContext(self),this.setAnimationLoop=function(L){Te=L,Rt.setAnimationLoop(L),L===null?oa.stop():oa.start()},Rt.addEventListener("sessionstart",vn),Rt.addEventListener("sessionend",On),this.render=function(L,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera($),$=Rt.getCamera()),L.isScene===!0&&L.onBeforeRender(A,L,$,F),v=Yt.get(L,N.length),v.init($),N.push(v),nt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),I.setFromProjectionMatrix(nt,ra,$.reversedDepth),Z=this.localClippingEnabled,ut=Ct.init(this.clippingPlanes,Z),M=gt.get(L,R.length),M.init(),R.push(M),Rt.enabled===!0&&Rt.isPresenting===!0){const bt=A.xr.getDepthSensingMesh();bt!==null&&Mo(bt,$,-1/0,A.sortObjects)}Mo(L,$,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(ht,dt),Mt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Mt&&Jt.addToRenderList(M,L),this.info.render.frame++,ut===!0&&Ct.beginShadows();const ct=v.state.shadowsArray;Zt.render(ct,L,$),ut===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=M.opaque,tt=M.transmissive;if(v.setupLights(),$.isArrayCamera){const bt=$.cameras;if(tt.length>0)for(let It=0,Ht=bt.length;It<Ht;It++){const Dt=bt[It];pr(ft,tt,L,Dt)}Mt&&Jt.render(L);for(let It=0,Ht=bt.length;It<Ht;It++){const Dt=bt[It];Ll(M,L,Dt,Dt.viewport)}}else tt.length>0&&pr(ft,tt,L,$),Mt&&Jt.render(L),Ll(M,L,$);F!==null&&P===0&&(le.updateMultisampleRenderTarget(F),le.updateRenderTargetMipmap(F)),L.isScene===!0&&L.onAfterRender(A,L,$),zt.resetDefaultState(),w=-1,U=null,N.pop(),N.length>0?(v=N[N.length-1],ut===!0&&Ct.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function Mo(L,$,ct,ft){if(L.visible===!1)return;if(L.layers.test($.layers)){if(L.isGroup)ct=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update($);else if(L.isLight)v.pushLight(L),L.castShadow&&v.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||I.intersectsSprite(L)){ft&&wt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(nt);const It=it.update(L),Ht=L.material;Ht.visible&&M.push(L,It,Ht,ct,wt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||I.intersectsObject(L))){const It=it.update(L),Ht=L.material;if(ft&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),wt.copy(L.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),wt.copy(It.boundingSphere.center)),wt.applyMatrix4(L.matrixWorld).applyMatrix4(nt)),Array.isArray(Ht)){const Dt=It.groups;for(let qt=0,ie=Dt.length;qt<ie;qt++){const te=Dt[qt],Se=Ht[te.materialIndex];Se&&Se.visible&&M.push(L,It,Se,ct,wt.z,te)}}else Ht.visible&&M.push(L,It,Ht,ct,wt.z,null)}}const bt=L.children;for(let It=0,Ht=bt.length;It<Ht;It++)Mo(bt[It],$,ct,ft)}function Ll(L,$,ct,ft){const tt=L.opaque,bt=L.transmissive,It=L.transparent;v.setupLightsView(ct),ut===!0&&Ct.setGlobalState(A.clippingPlanes,ct),ft&&Lt.viewport(H.copy(ft)),tt.length>0&&la(tt,$,ct),bt.length>0&&la(bt,$,ct),It.length>0&&la(It,$,ct),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function pr(L,$,ct,ft){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ft.id]===void 0&&(v.state.transmissionRenderTarget[ft.id]=new Ci(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Hi:Gi,minFilter:Zr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const bt=v.state.transmissionRenderTarget[ft.id],It=ft.viewport||H;bt.setSize(It.z*A.transmissionResolutionScale,It.w*A.transmissionResolutionScale);const Ht=A.getRenderTarget(),Dt=A.getActiveCubeFace(),qt=A.getActiveMipmapLevel();A.setRenderTarget(bt),A.getClearColor(mt),lt=A.getClearAlpha(),lt<1&&A.setClearColor(16777215,.5),A.clear(),Mt&&Jt.render(ct);const ie=A.toneMapping;A.toneMapping=Da;const te=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),v.setupLightsView(ft),ut===!0&&Ct.setGlobalState(A.clippingPlanes,ft),la(L,ct,ft),le.updateMultisampleRenderTarget(bt),le.updateRenderTargetMipmap(bt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Be=0,$e=$.length;Be<$e;Be++){const Oe=$[Be],De=Oe.object,ee=Oe.geometry,Pe=Oe.material,_e=Oe.group;if(Pe.side===na&&De.layers.test(ft.layers)){const _n=Pe.side;Pe.side=Gn,Pe.needsUpdate=!0,mr(De,ct,ft,ee,Pe,_e),Pe.side=_n,Pe.needsUpdate=!0,Se=!0}}Se===!0&&(le.updateMultisampleRenderTarget(bt),le.updateRenderTargetMipmap(bt))}A.setRenderTarget(Ht,Dt,qt),A.setClearColor(mt,lt),te!==void 0&&(ft.viewport=te),A.toneMapping=ie}function la(L,$,ct){const ft=$.isScene===!0?$.overrideMaterial:null;for(let tt=0,bt=L.length;tt<bt;tt++){const It=L[tt],Ht=It.object,Dt=It.geometry,qt=It.group;let ie=It.material;ie.allowOverride===!0&&ft!==null&&(ie=ft),Ht.layers.test(ct.layers)&&mr(Ht,$,ct,Dt,ie,qt)}}function mr(L,$,ct,ft,tt,bt){L.onBeforeRender(A,$,ct,ft,tt,bt),L.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),tt.onBeforeRender(A,$,ct,ft,L,bt),tt.transparent===!0&&tt.side===na&&tt.forceSinglePass===!1?(tt.side=Gn,tt.needsUpdate=!0,A.renderBufferDirect(ct,$,ft,tt,L,bt),tt.side=dr,tt.needsUpdate=!0,A.renderBufferDirect(ct,$,ft,tt,L,bt),tt.side=na):A.renderBufferDirect(ct,$,ft,tt,L,bt),L.onAfterRender(A,$,ct,ft,tt,bt)}function vi(L,$,ct){$.isScene!==!0&&($=Tt);const ft=Ft.get(L),tt=v.state.lights,bt=v.state.shadowsArray,It=tt.state.version,Ht=pt.getParameters(L,tt.state,bt,$,ct),Dt=pt.getProgramCacheKey(Ht);let qt=ft.programs;ft.environment=L.isMeshStandardMaterial?$.environment:null,ft.fog=$.fog,ft.envMap=(L.isMeshStandardMaterial?Ye:Ie).get(L.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&L.envMap===null?$.environmentRotation:L.envMapRotation,qt===void 0&&(L.addEventListener("dispose",xt),qt=new Map,ft.programs=qt);let ie=qt.get(Dt);if(ie!==void 0){if(ft.currentProgram===ie&&ft.lightsStateVersion===It)return Na(L,Ht),ie}else Ht.uniforms=pt.getUniforms(L),L.onBeforeCompile(Ht,A),ie=pt.acquireProgram(Ht,Dt),qt.set(Dt,ie),ft.uniforms=Ht.uniforms;const te=ft.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(te.clippingPlanes=Ct.uniform),Na(L,Ht),ft.needsLights=Pl(L),ft.lightsStateVersion=It,ft.needsLights&&(te.ambientLightColor.value=tt.state.ambient,te.lightProbe.value=tt.state.probe,te.directionalLights.value=tt.state.directional,te.directionalLightShadows.value=tt.state.directionalShadow,te.spotLights.value=tt.state.spot,te.spotLightShadows.value=tt.state.spotShadow,te.rectAreaLights.value=tt.state.rectArea,te.ltc_1.value=tt.state.rectAreaLTC1,te.ltc_2.value=tt.state.rectAreaLTC2,te.pointLights.value=tt.state.point,te.pointLightShadows.value=tt.state.pointShadow,te.hemisphereLights.value=tt.state.hemi,te.directionalShadowMap.value=tt.state.directionalShadowMap,te.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,te.spotShadowMap.value=tt.state.spotShadowMap,te.spotLightMatrix.value=tt.state.spotLightMatrix,te.spotLightMap.value=tt.state.spotLightMap,te.pointShadowMap.value=tt.state.pointShadowMap,te.pointShadowMatrix.value=tt.state.pointShadowMatrix),ft.currentProgram=ie,ft.uniformsList=null,ie}function gr(L){if(L.uniformsList===null){const $=L.currentProgram.getUniforms();L.uniformsList=Uc.seqWithValue($.seq,L.uniforms)}return L.uniformsList}function Na(L,$){const ct=Ft.get(L);ct.outputColorSpace=$.outputColorSpace,ct.batching=$.batching,ct.batchingColor=$.batchingColor,ct.instancing=$.instancing,ct.instancingColor=$.instancingColor,ct.instancingMorph=$.instancingMorph,ct.skinning=$.skinning,ct.morphTargets=$.morphTargets,ct.morphNormals=$.morphNormals,ct.morphColors=$.morphColors,ct.morphTargetsCount=$.morphTargetsCount,ct.numClippingPlanes=$.numClippingPlanes,ct.numIntersection=$.numClipIntersection,ct.vertexAlphas=$.vertexAlphas,ct.vertexTangents=$.vertexTangents,ct.toneMapping=$.toneMapping}function Ol(L,$,ct,ft,tt){$.isScene!==!0&&($=Tt),le.resetTextureUnits();const bt=$.fog,It=ft.isMeshStandardMaterial?$.environment:null,Ht=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:co,Dt=(ft.isMeshStandardMaterial?Ye:Ie).get(ft.envMap||It),qt=ft.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ie=!!ct.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),te=!!ct.morphAttributes.position,Se=!!ct.morphAttributes.normal,Be=!!ct.morphAttributes.color;let $e=Da;ft.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&($e=A.toneMapping);const Oe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,De=Oe!==void 0?Oe.length:0,ee=Ft.get(ft),Pe=v.state.lights;if(ut===!0&&(Z===!0||L!==U)){const an=L===U&&ft.id===w;Ct.setState(ft,L,an)}let _e=!1;ft.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Pe.state.version||ee.outputColorSpace!==Ht||tt.isBatchedMesh&&ee.batching===!1||!tt.isBatchedMesh&&ee.batching===!0||tt.isBatchedMesh&&ee.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&ee.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&ee.instancing===!1||!tt.isInstancedMesh&&ee.instancing===!0||tt.isSkinnedMesh&&ee.skinning===!1||!tt.isSkinnedMesh&&ee.skinning===!0||tt.isInstancedMesh&&ee.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&ee.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&ee.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&ee.instancingMorph===!1&&tt.morphTexture!==null||ee.envMap!==Dt||ft.fog===!0&&ee.fog!==bt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Ct.numPlanes||ee.numIntersection!==Ct.numIntersection)||ee.vertexAlphas!==qt||ee.vertexTangents!==ie||ee.morphTargets!==te||ee.morphNormals!==Se||ee.morphColors!==Be||ee.toneMapping!==$e||ee.morphTargetsCount!==De)&&(_e=!0):(_e=!0,ee.__version=ft.version);let _n=ee.currentProgram;_e===!0&&(_n=vi(ft,$,tt));let ai=!1,Ue=!1,La=!1;const Ze=_n.getUniforms(),kn=ee.uniforms;if(Lt.useProgram(_n.program)&&(ai=!0,Ue=!0,La=!0),ft.id!==w&&(w=ft.id,Ue=!0),ai||U!==L){Lt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ze.setValue(G,"projectionMatrix",L.projectionMatrix),Ze.setValue(G,"viewMatrix",L.matrixWorldInverse);const Pn=Ze.map.cameraPosition;Pn!==void 0&&Pn.setValue(G,yt.setFromMatrixPosition(L.matrixWorld)),Qt.logarithmicDepthBuffer&&Ze.setValue(G,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Ze.setValue(G,"isOrthographic",L.isOrthographicCamera===!0),U!==L&&(U=L,Ue=!0,La=!0)}if(tt.isSkinnedMesh){Ze.setOptional(G,tt,"bindMatrix"),Ze.setOptional(G,tt,"bindMatrixInverse");const an=tt.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ze.setValue(G,"boneTexture",an.boneTexture,le))}tt.isBatchedMesh&&(Ze.setOptional(G,tt,"batchingTexture"),Ze.setValue(G,"batchingTexture",tt._matricesTexture,le),Ze.setOptional(G,tt,"batchingIdTexture"),Ze.setValue(G,"batchingIdTexture",tt._indirectTexture,le),Ze.setOptional(G,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ze.setValue(G,"batchingColorTexture",tt._colorsTexture,le));const cn=ct.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&At.update(tt,ct,_n),(Ue||ee.receiveShadow!==tt.receiveShadow)&&(ee.receiveShadow=tt.receiveShadow,Ze.setValue(G,"receiveShadow",tt.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(kn.envMap.value=Dt,kn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&$.environment!==null&&(kn.envMapIntensity.value=$.environmentIntensity),Ue&&(Ze.setValue(G,"toneMappingExposure",A.toneMappingExposure),ee.needsLights&&Fc(kn,La),bt&&ft.fog===!0&&St.refreshFogUniforms(kn,bt),St.refreshMaterialUniforms(kn,ft,X,q,v.state.transmissionRenderTarget[L.id]),Uc.upload(G,gr(ee),kn,le)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Uc.upload(G,gr(ee),kn,le),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Ze.setValue(G,"center",tt.center),Ze.setValue(G,"modelViewMatrix",tt.modelViewMatrix),Ze.setValue(G,"normalMatrix",tt.normalMatrix),Ze.setValue(G,"modelMatrix",tt.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const an=ft.uniformsGroups;for(let Pn=0,ts=an.length;Pn<ts;Pn++){const ki=an[Pn];de.update(ki,_n),de.bind(ki,_n)}}return _n}function Fc(L,$){L.ambientLightColor.needsUpdate=$,L.lightProbe.needsUpdate=$,L.directionalLights.needsUpdate=$,L.directionalLightShadows.needsUpdate=$,L.pointLights.needsUpdate=$,L.pointLightShadows.needsUpdate=$,L.spotLights.needsUpdate=$,L.spotLightShadows.needsUpdate=$,L.rectAreaLights.needsUpdate=$,L.hemisphereLights.needsUpdate=$}function Pl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(L,$,ct){const ft=Ft.get(L);ft.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Ft.get(L.texture).__webglTexture=$,Ft.get(L.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ct,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,$){const ct=Ft.get(L);ct.__webglFramebuffer=$,ct.__useDefaultFramebuffer=$===void 0};const Eo=G.createFramebuffer();this.setRenderTarget=function(L,$=0,ct=0){F=L,z=$,P=ct;let ft=!0,tt=null,bt=!1,It=!1;if(L){const Dt=Ft.get(L);if(Dt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(G.FRAMEBUFFER,null),ft=!1;else if(Dt.__webglFramebuffer===void 0)le.setupRenderTarget(L);else if(Dt.__hasExternalTextures)le.rebindTextures(L,Ft.get(L.texture).__webglTexture,Ft.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const te=L.depthTexture;if(Dt.__boundDepthTexture!==te){if(te!==null&&Ft.has(te)&&(L.width!==te.image.width||L.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(L)}}const qt=L.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(It=!0);const ie=Ft.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ie[$])?tt=ie[$][ct]:tt=ie[$],bt=!0):L.samples>0&&le.useMultisampledRTT(L)===!1?tt=Ft.get(L).__webglMultisampledFramebuffer:Array.isArray(ie)?tt=ie[ct]:tt=ie,H.copy(L.viewport),J.copy(L.scissor),et=L.scissorTest}else H.copy(Nt).multiplyScalar(X).floor(),J.copy(Xt).multiplyScalar(X).floor(),et=oe;if(ct!==0&&(tt=Eo),Lt.bindFramebuffer(G.FRAMEBUFFER,tt)&&ft&&Lt.drawBuffers(L,tt),Lt.viewport(H),Lt.scissor(J),Lt.setScissorTest(et),bt){const Dt=Ft.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+$,Dt.__webglTexture,ct)}else if(It){const Dt=$;for(let qt=0;qt<L.textures.length;qt++){const ie=Ft.get(L.textures[qt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+qt,ie.__webglTexture,ct,Dt)}}else if(L!==null&&ct!==0){const Dt=Ft.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Dt.__webglTexture,ct)}w=-1},this.readRenderTargetPixels=function(L,$,ct,ft,tt,bt,It,Ht=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ft.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt){Lt.bindFramebuffer(G.FRAMEBUFFER,Dt);try{const qt=L.textures[Ht],ie=qt.format,te=qt.type;if(!Qt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=L.width-ft&&ct>=0&&ct<=L.height-tt&&(L.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ht),G.readPixels($,ct,ft,tt,Kt.convert(ie),Kt.convert(te),bt))}finally{const qt=F!==null?Ft.get(F).__webglFramebuffer:null;Lt.bindFramebuffer(G.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(L,$,ct,ft,tt,bt,It,Ht=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ft.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt)if($>=0&&$<=L.width-ft&&ct>=0&&ct<=L.height-tt){Lt.bindFramebuffer(G.FRAMEBUFFER,Dt);const qt=L.textures[Ht],ie=qt.format,te=qt.type;if(!Qt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Se),G.bufferData(G.PIXEL_PACK_BUFFER,bt.byteLength,G.STREAM_READ),L.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ht),G.readPixels($,ct,ft,tt,Kt.convert(ie),Kt.convert(te),0);const Be=F!==null?Ft.get(F).__webglFramebuffer:null;Lt.bindFramebuffer(G.FRAMEBUFFER,Be);const $e=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await S1(G,$e,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Se),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,bt),G.deleteBuffer(Se),G.deleteSync($e),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,$=null,ct=0){const ft=Math.pow(2,-ct),tt=Math.floor(L.image.width*ft),bt=Math.floor(L.image.height*ft),It=$!==null?$.x:0,Ht=$!==null?$.y:0;le.setTexture2D(L,0),G.copyTexSubImage2D(G.TEXTURE_2D,ct,0,0,It,Ht,tt,bt),Lt.unbindTexture()};const vr=G.createFramebuffer(),Hc=G.createFramebuffer();this.copyTextureToTexture=function(L,$,ct=null,ft=null,tt=0,bt=null){bt===null&&(tt!==0?(wl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=tt,tt=0):bt=0);let It,Ht,Dt,qt,ie,te,Se,Be,$e;const Oe=L.isCompressedTexture?L.mipmaps[bt]:L.image;if(ct!==null)It=ct.max.x-ct.min.x,Ht=ct.max.y-ct.min.y,Dt=ct.isBox3?ct.max.z-ct.min.z:1,qt=ct.min.x,ie=ct.min.y,te=ct.isBox3?ct.min.z:0;else{const cn=Math.pow(2,-tt);It=Math.floor(Oe.width*cn),Ht=Math.floor(Oe.height*cn),L.isDataArrayTexture?Dt=Oe.depth:L.isData3DTexture?Dt=Math.floor(Oe.depth*cn):Dt=1,qt=0,ie=0,te=0}ft!==null?(Se=ft.x,Be=ft.y,$e=ft.z):(Se=0,Be=0,$e=0);const De=Kt.convert($.format),ee=Kt.convert($.type);let Pe;$.isData3DTexture?(le.setTexture3D($,0),Pe=G.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(le.setTexture2DArray($,0),Pe=G.TEXTURE_2D_ARRAY):(le.setTexture2D($,0),Pe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,$.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,$.unpackAlignment);const _e=G.getParameter(G.UNPACK_ROW_LENGTH),_n=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ai=G.getParameter(G.UNPACK_SKIP_PIXELS),Ue=G.getParameter(G.UNPACK_SKIP_ROWS),La=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Oe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Oe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ie),G.pixelStorei(G.UNPACK_SKIP_IMAGES,te);const Ze=L.isDataArrayTexture||L.isData3DTexture,kn=$.isDataArrayTexture||$.isData3DTexture;if(L.isDepthTexture){const cn=Ft.get(L),an=Ft.get($),Pn=Ft.get(cn.__renderTarget),ts=Ft.get(an.__renderTarget);Lt.bindFramebuffer(G.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Lt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let ki=0;ki<Dt;ki++)Ze&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get(L).__webglTexture,tt,te+ki),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.get($).__webglTexture,bt,$e+ki)),G.blitFramebuffer(qt,ie,It,Ht,Se,Be,It,Ht,G.DEPTH_BUFFER_BIT,G.NEAREST);Lt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(tt!==0||L.isRenderTargetTexture||Ft.has(L)){const cn=Ft.get(L),an=Ft.get($);Lt.bindFramebuffer(G.READ_FRAMEBUFFER,vr),Lt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Hc);for(let Pn=0;Pn<Dt;Pn++)Ze?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,cn.__webglTexture,tt,te+Pn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,cn.__webglTexture,tt),kn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,an.__webglTexture,bt,$e+Pn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,an.__webglTexture,bt),tt!==0?G.blitFramebuffer(qt,ie,It,Ht,Se,Be,It,Ht,G.COLOR_BUFFER_BIT,G.NEAREST):kn?G.copyTexSubImage3D(Pe,bt,Se,Be,$e+Pn,qt,ie,It,Ht):G.copyTexSubImage2D(Pe,bt,Se,Be,qt,ie,It,Ht);Lt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else kn?L.isDataTexture||L.isData3DTexture?G.texSubImage3D(Pe,bt,Se,Be,$e,It,Ht,Dt,De,ee,Oe.data):$.isCompressedArrayTexture?G.compressedTexSubImage3D(Pe,bt,Se,Be,$e,It,Ht,Dt,De,Oe.data):G.texSubImage3D(Pe,bt,Se,Be,$e,It,Ht,Dt,De,ee,Oe):L.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,bt,Se,Be,It,Ht,De,ee,Oe.data):L.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,bt,Se,Be,Oe.width,Oe.height,De,Oe.data):G.texSubImage2D(G.TEXTURE_2D,bt,Se,Be,It,Ht,De,ee,Oe);G.pixelStorei(G.UNPACK_ROW_LENGTH,_e),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,_n),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ai),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ue),G.pixelStorei(G.UNPACK_SKIP_IMAGES,La),bt===0&&$.generateMipmaps&&G.generateMipmap(Pe),Lt.unbindTexture()},this.initRenderTarget=function(L){Ft.get(L).__webglFramebuffer===void 0&&le.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?le.setTextureCube(L,0):L.isData3DTexture?le.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?le.setTexture2DArray(L,0):le.setTexture2D(L,0),Lt.unbindTexture()},this.resetState=function(){z=0,P=0,F=null,Lt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(e),i.unpackColorSpace=we._getUnpackColorSpace()}}const Nc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class So{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const YR=new nm(-1,1,1,-1,0,1);class qR extends ii{constructor(){super(),this.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Rn([0,2,0,0,2,0],2))}}const WR=new qR;class am{constructor(e){this._mesh=new gn(WR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,YR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jR extends So{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ul.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new am(this.material)}render(e,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ax extends So{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,s){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class ZR extends So{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class QR{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const s=e.getSize(new ce);this._width=s.width,this._height=s.height,i=new Ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jR(Nc),this.copyPass.material.blending=wa,this.clock=new fy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),h.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Ax!==void 0&&(h instanceof Ax?s=!0:h instanceof ZR&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class KR extends So{constructor(e,i,s=null,l=null,c=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new fe}render(e,i,s){const l=e.autoClear;e.autoClear=!1;let c,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=l}}const JR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ho extends So{constructor(e,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new Ci(c,h,{type:Hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const m=new Ci(c,h,{type:Hi});m.texture.name="UnrealBloomPass.h"+_,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const y=new Ci(c,h,{type:Hi});y.texture.name="UnrealBloomPass.v"+_,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),c=Math.round(c/2),h=Math.round(h/2)}const d=JR;this.highPassUniforms=Ul.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new ce(1/c,1/h),c=Math.round(c/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const g=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=g,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ul.clone(Nc.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:Nc.vertexShader,fragmentShader:Nc.fragmentShader,blending:Lc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new fe,this._oldClearAlpha=1,this._basic=new Dl,this._fsQuad=new am(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let s=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new ce(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,i,s,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=ho.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=ho.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=h}_getSeparableBlurMaterial(e){const i=[];for(let s=0;s<e;s++)i.push(.39894*Math.exp(-.5*s*s/(e*e))/e);return new ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new ln({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ho.BlurDirectionX=new ce(1,0);ho.BlurDirectionY=new ce(0,1);const Ac={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class $R extends So{constructor(){super(),this.uniforms=Ul.clone(Ac.uniforms),this.material=new $1({name:Ac.name,uniforms:this.uniforms,vertexShader:Ac.vertexShader,fragmentShader:Ac.fragmentShader}),this._fsQuad=new am(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},we.getTransfer(this._outputColorSpace)===Xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ox?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Px?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fx?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ix&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const eo=(o,e,i)=>Math.min(i,Math.max(e,o)),yl=(o,e,i,s)=>e+(o-e)*Math.exp(-i*s),vy=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class tC{constructor(){ke(this,"shipQuaternion",new sa);ke(this,"lookQuaternion",new sa);ke(this,"position",new j);ke(this,"yaw",0);ke(this,"pitch",0);ke(this,"yawVelocity",0);ke(this,"pitchVelocity",0);ke(this,"speed",0);ke(this,"lookYaw",0);ke(this,"lookPitch",0);ke(this,"lookTargetYaw",0);ke(this,"lookTargetPitch",0);ke(this,"touchX",0);ke(this,"touchY",0);ke(this,"touchSteering",!1);ke(this,"keys",new Set);ke(this,"elapsed",0);ke(this,"lastContext","");ke(this,"euler",new Vi(0,0,0,"YXZ"));ke(this,"forward",new j)}key(e,i){vy.has(e)&&(i?this.touchSteering||this.keys.add(e):this.keys.delete(e))}steerTouch(e,i,s){this.touchSteering=s,this.keys.clear();const l=Math.hypot(e,i),c=s?eo((l-.1)/.9,0,1):0;this.touchX=l?e/l*c:0,this.touchY=l?i/l*c:0}look(e,i,s,l){if(l.paused||l.blocked)return;const c=s?l.touchSensitivity:l.sensitivity;this.lookTargetYaw=eo(this.lookTargetYaw-eo(e,-.2,.2)*c*1.6*(!s&&l.invertMouseX?-1:1),-.85,.85),this.lookTargetPitch=eo(this.lookTargetPitch-eo(i,-.2,.2)*c*1.6*(!s&&l.invertMouseY?-1:1),-.5,.5)}reset(e=!1){this.keys.clear(),this.steerTouch(0,0,!1),e&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(e,i){const s=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&s!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=s,!Number.isFinite(e)||e<=0||e>.25||i.paused)return;const l=Math.min(e,.1);this.elapsed+=l;const c=i.mode==="Manual Flight"&&i.started&&!i.blocked;let h=0,d=0;if(c){h=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const v=Math.max(1,Math.hypot(h,d));h/=v,d/=v}const p=i.reduced?.45:1,g=this.touchSteering?i.touchSensitivity:i.sensitivity,_=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,m=c?-h*.22*g*p:Math.sin(this.elapsed*.055)*_,y=c?-d*.16*g*p:Math.sin(this.elapsed*.08)*_*.3,S=3,E=(1-Math.exp(-S*l))/S;this.yaw+=m*l+(this.yawVelocity-m)*E,this.pitch=eo(this.pitch+y*l+(this.pitchVelocity-y)*E,-.75,.75),this.yawVelocity=yl(this.yawVelocity,m,S,l),this.pitchVelocity=yl(this.pitchVelocity,y,S,l),Math.abs(this.pitch)>=.75&&Math.sign(this.pitchVelocity)===Math.sign(this.pitch)&&(this.pitchVelocity=0),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ")),this.lookYaw=yl(this.lookYaw,this.lookTargetYaw,6,l),this.lookPitch=yl(this.lookPitch,this.lookTargetPitch,6,l),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const C=i.started?i.speed*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,M=C*l+(this.speed-C)*(1-Math.exp(-.8*l))/.8;this.speed=yl(this.speed,C,.8,l),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,M)}}function eC(o,e,i,s){let l=null,c=null,h="";const d=[],p=(v,R,N,A)=>{v.addEventListener(R,N,A),d.push(()=>v.removeEventListener(R,N,A))},g=()=>!s().paused&&!s().blocked&&document.visibilityState!=="hidden",_=()=>g()&&s().started&&s().mode==="Manual Flight",m=(v,R)=>{e.style.setProperty("--stick-x",`${v*34}px`),e.style.setProperty("--stick-y",`${R*34}px`)},y=()=>{const v=l;l=null,v&&o.hasPointerCapture(v.id)&&o.releasePointerCapture(v.id)},S=()=>{const v=c;c=null,i.steerTouch(0,0,!1),m(0,0),v!==null&&e.hasPointerCapture(v)&&e.releasePointerCapture(v)},E=()=>{y(),S(),i.reset(!0)};p(o,"pointerdown",(v=>{!g()||l||v.pointerType==="mouse"&&(v.button!==0||c!==null)||(v.preventDefault(),l={id:v.pointerId,type:v.pointerType,x:v.clientX,y:v.clientY},o.setPointerCapture(v.pointerId))})),p(o,"pointermove",(v=>{if((l==null?void 0:l.id)!==v.pointerId)return;if(!g()||v.pointerType==="mouse"&&!(v.buttons&1)){y();return}v.preventDefault();const R=Math.max(240,Math.min(o.clientWidth,o.clientHeight));i.look((v.clientX-l.x)/R,(v.clientY-l.y)/R,l.type!=="mouse",s()),l.x=v.clientX,l.y=v.clientY}));for(const v of["pointerup","pointercancel","lostpointercapture"])p(o,v,(R=>{R.pointerId===(l==null?void 0:l.id)&&y()}));const C=v=>{const R=e.getBoundingClientRect();let N=(v.clientX-R.left-R.width/2)/(R.width*.35),A=(v.clientY-R.top-R.height/2)/(R.height*.35);const O=Math.max(1,Math.hypot(N,A));N/=O,A/=O,i.steerTouch(N,A,!0),m(N,A)};p(e,"pointerdown",(v=>{v.pointerType==="mouse"||c!==null||!_()||(v.preventDefault(),v.stopPropagation(),(l==null?void 0:l.type)==="mouse"&&y(),c=v.pointerId,e.setPointerCapture(v.pointerId),C(v))})),p(e,"pointermove",(v=>{if(v.pointerId===c){if(!_()){S();return}v.preventDefault(),C(v)}}));for(const v of["pointerup","pointercancel","lostpointercapture"])p(e,v,(R=>{R.pointerId===c&&S()}));const M=v=>v instanceof HTMLElement&&!!v.closest('input,select,textarea,[contenteditable="true"]');return p(window,"keydown",(v=>{!vy.has(v.code)||M(v.target)||!_()||v.ctrlKey||v.metaKey||v.altKey||(v.preventDefault(),i.key(v.code,!0))})),p(window,"keyup",(v=>i.key(v.code,!1))),p(window,"blur",E),p(document,"visibilitychange",E),p(window,"resize",E),p(window,"orientationchange",E),p(o,"contextmenu",v=>v.preventDefault()),p(e,"contextmenu",v=>v.preventDefault()),{sync(){const v=s(),R=`${v.mode}/${v.paused}/${v.started}/${v.blocked}`;h&&R!==h&&(y(),S(),i.reset(v.paused||v.blocked)),h=R},dispose(){E(),d.forEach(v=>v())}}}function nC(o,e,i){if(!Number.isFinite(e)||e<=0||e>.25||i.paused){o.step(0,i);return}const s=Math.ceil(e/(1/60)),l=e/s;for(let c=0;c<s;c++)o.step(l,i)}class iC{constructor(){ke(this,"scale",1);ke(this,"elapsed",0);ke(this,"average",1/60);ke(this,"nextDecision",3)}reset(){this.scale=1,this.elapsed=0,this.average=1/60,this.nextDecision=3}observe(e,i,s){if(!i||s||!Number.isFinite(e)||e<=0||e>1||(this.elapsed+=e,this.average+=(Math.min(e,.2)-this.average)*(1-Math.exp(-e/1.5)),this.elapsed<this.nextDecision))return!1;const l=this.scale;return this.average>.028?(this.scale=Math.max(.6,Math.round((this.scale-.1)*100)/100),this.nextDecision=this.elapsed+3):this.average<.018?(this.scale=Math.min(1,Math.round((this.scale+.05)*100)/100),this.nextDecision=this.elapsed+10):this.nextDecision=this.elapsed+3,l!==this.scale}}const aC=`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,rC=`
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
`,Rx=[[[-480,-45,-1500],[1250,380,-4300],[-2200,950,-8200],[500,1600,-12e3],[2450,-500,-9200],[-700,850,-7900]],[[-540,-120,-1850],[1300,300,-4800],[-1450,420,-5700],[500,-90,-10800],[2600,700,-9600],[-850,900,-8200]],[[480,-100,-1800],[-1500,380,-3800],[1750,300,-6800],[-500,200,-10500],[3e3,-500,-9600],[-1100,900,-8500]],[[-470,35,-1900],[1350,500,-4600],[-2e3,-50,-7200],[700,120,-10500],[2400,-350,-8500],[-1e3,850,-9200]],[[-800,-200,-3500],[1900,430,-6800],[-2600,150,-9e3],[200,300,-12e3],[2900,-500,-1e4],[-1200,1e3,-10500]]].map(o=>o.map(e=>new j(...e))),Cx=[[135,310,180,570,150,90],[150,310,190,500,170,100],[135,360,210,650,190,95],[160,340,210,580,170,100],[180,420,260,820,180,100]],io=[["#315e9c","#9c8fbd","#77758e","#3a4d6a","#6a6c7c","#8b829c"],["#276992","#8e9eae","#8b8e96","#31495f","#858d97","#6a849f"],["#857260","#b5956e","#92877a","#655c54","#8a7a67","#b3a38b"],["#2b7886","#7c9ba9","#7b8d94","#385765","#849b9e","#6f8e9f"],["#46576e","#6d768b","#6c7180","#293c58","#6d788a","#56697f"]].map(o=>o.map(e=>new fe(e))),Zd=io.map(o=>o.map(e=>e.clone().lerp(new fe("#cfbd9c"),.38)));function sC(o){const e=new Qr;e.name="regional-celestial-bodies",o.add(e);const i=new Nl(1,32,20),s=(N,A)=>{const O=new ln({uniforms:{baseColor:{value:io[0][A].clone()},detailColor:{value:Zd[0][A].clone()},kind:{value:N},alpha:{value:1},seed:{value:A*7.3+2.1},lightDirection:{value:A===3?new j(-.85,.2,-.6):new j(-.65,.4,A===1?.28:.75)}},vertexShader:aC,fragmentShader:rC,transparent:!0,depthWrite:!0}),z=new gn(i,O);return z.renderOrder=4,z.userData.kind=N>1.5?"rocky-body":"planet",e.add(z),z},l=[0,1,2,2,2,2].map((N,A)=>s(N,A)),c=Rx[0].map(N=>N.clone()),h=Cx[0].slice(),d=[0,1,2].map((N,A)=>{const O=s(2,A+2);return O.userData.kind="moon",{mesh:O,parent:N,radius:[29,44,52][A]}}),p=new ln({uniforms:{color:{value:new fe("#a5a091")},alpha:{value:1}},transparent:!0,depthWrite:!1,side:na,vertexShader:"varying vec2 point;void main(){point=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 point;uniform vec3 color;uniform float alpha;void main(){float r=length(point);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.65,edge*max(.1,bands)*alpha);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),g=new gn(new em(1.32,2.2,64),p);g.rotation.set(1.12,.2,-.27),g.renderOrder=5,e.add(g);const _=new tT({color:"#76818c",roughness:1,metalness:0}),m=new W1(new tm(1,0),_,72);m.name="distant-rock-cluster",e.add(m);const y=new yn;let S=8353;const E=()=>(S=S*16807%2147483647,(S-1)/2147483646);for(let N=0;N<72;N++){y.position.set((E()-.5)*700,(E()-.5)*180,(E()-.5)*450),y.rotation.set(E()*3,E()*3,E()*3);const A=4+E()*10;y.scale.set(A,A*.7,A*1.2),y.updateMatrix(),m.setMatrixAt(N,y.matrix)}m.instanceMatrix.needsUpdate=!0,m.computeBoundingSphere();const C=[new j(-1e3,80,-2800),new j(1300,-180,-3600),new j(-1700,-180,-4300),new j(1600,80,-3900),new j(-2200,-250,-6500)],M=C[0].clone();let v=6,R=3;return{group:e,dispose(){m.dispose()},configure(N){v=N==="Low"?4:6,R=N==="Low"?2:3,m.count=N==="Low"?24:N==="Medium"?48:72},update(N,A,O,z){const P=1-Math.exp(-N*.28);for(let F=0;F<l.length;F++){const w=l[F];c[F].lerp(Rx[O][F],P),h[F]=Fn.lerp(h[F],Cx[O][F],P),w.visible=F<v,w.position.copy(c[F]).sub(z),w.scale.setScalar(h[F]),w.rotation.y=A*.002+F*.5,w.material.uniforms.baseColor.value.lerp(io[O][F],P),w.material.uniforms.detailColor.value.lerp(Zd[O][F],P),w.material.uniforms.alpha.value=Fn.smoothstep(w.position.length()/h[F],1.05,1.4)}for(let F=0;F<d.length;F++){const{mesh:w,parent:U,radius:H}=d[F],J=l[U];w.visible=F<R,w.scale.setScalar(H),w.position.copy(J.position),w.position.x+=h[U]*1.8,w.position.y+=h[U]*.5,w.position.z+=h[U]*.4,w.material.uniforms.alpha.value=J.material.uniforms.alpha.value,w.material.uniforms.baseColor.value.lerp(io[O][2],P),w.material.uniforms.detailColor.value.lerp(Zd[O][2],P)}g.position.copy(l[1].position),g.scale.setScalar(h[1]),p.uniforms.alpha.value=l[1].material.uniforms.alpha.value,p.uniforms.color.value.lerp(io[O][1],P),M.lerp(C[O],P),m.position.copy(M).sub(z),_.color.lerp(io[O][2],P)}}}const Fp={Low:{pixelRatio:.9,stars:[550,2400,7800],cloudScale:.32,volumes:1,steps:4,octaves:2,bloom:!1},Medium:{pixelRatio:1,stars:[1e3,4800,19e3],cloudScale:.4,volumes:2,steps:7,octaves:2,bloom:!1},High:{pixelRatio:1.35,stars:[2200,1e4,48e3],cloudScale:.5,volumes:3,steps:10,octaves:3,bloom:!0}},wx={Dark:{exposure:.8,cabin:.7,nebula:.65},Balanced:{exposure:1.12,cabin:1,nebula:.9},Cinematic:{exposure:1.32,cabin:1.12,nebula:1.08}},Kr=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#a879ef",second:"#315fab",accent:"#f4a4cf",density:1.05,band:.8,structure:1.15,bandWidth:1,warmth:.25,stars:.87,exposure:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#88bcf2",second:"#234a89",accent:"#c3dcff",density:.38,band:.7,structure:1.4,bandWidth:.65,warmth:.07,stars:1,exposure:1.04},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#edbd79",second:"#956753",accent:"#fff2c9",density:.85,band:1.65,structure:1.8,bandWidth:1.4,warmth:.88,stars:1.4,exposure:.93},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#67cbbf",second:"#306c9c",accent:"#b1d5e8",density:1.3,band:.5,structure:.65,bandWidth:1.1,warmth:.16,stars:.7,exposure:1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#6d7fbb",second:"#253553",accent:"#a6b8e1",density:.12,band:.15,structure:.8,bandWidth:.45,warmth:.12,stars:.23,exposure:.84}],_y=`
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
`,oC=`
attribute float radius, temperature, identity;
uniform vec3 offset, span;
uniform float pixels, dpr, warmth, abundance;
varying vec3 starColor;
varying float visibility, glowWeight;
void main(){
  vec3 p=mod(position-offset+span*.5,span)-span*.5;
  float boundary=max(max(abs(p.x)/(span.x*.5),abs(p.y)/(span.y*.5)),abs(p.z)/(span.z*.5));
  vec4 view=modelViewMatrix*vec4(p,1.);
  visibility=(1.-smoothstep(.78,1.,boundary))*smoothstep(12.,65.,length(p));
  visibility*=1.-smoothstep(abundance-.08,abundance,identity);
  starColor=mix(vec3(.62,.79,1.),vec3(1.,.97,.89),smoothstep(.1,.65,temperature));
  starColor=mix(starColor,vec3(1.,.64,.32),smoothstep(1.-warmth*.8,1.,temperature)*.8);
  glowWeight=smoothstep(3.,9.,radius);
  gl_Position=projectionMatrix*view;
  gl_PointSize=clamp(radius*pixels/max(12.,-view.z),1.3*dpr,40.*dpr);
}
`,lC=`
uniform float halo;
varying vec3 starColor;
varying float visibility, glowWeight;
void main(){
  float d=length(gl_PointCoord-.5)*2.;
  float core=exp(-d*d*55.);
  float aura=exp(-d*d*5.5)*(.1+glowWeight*.17)*halo;
  float fade=1.-smoothstep(.8,1.,d);
  gl_FragColor=vec4(starColor*(core*3.2+aura)*fade,visibility);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,uC=`
varying vec3 worldPoint;
void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}
`,cC=`
precision highp float;
varying vec3 worldPoint;
uniform vec3 center, radii, tint, second, accent;
uniform float time, density, visibility, energy, seed, structure;
uniform int steps, octaves;
${_y}
void main(){
  vec3 origin=(cameraPosition-center)/radii;
  vec3 ray=normalize(worldPoint-cameraPosition)/radii;
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
`,fC=`
varying vec3 direction;
void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,hC=`
varying vec3 direction;
uniform vec3 tint, second, accent;
uniform float band, density, energy, bandWidth;
uniform int octaves;
${_y}
void main(){
  vec3 d=normalize(direction);
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
`;function dC(o){const e=Kr[0],i=new sy,s=new Ci(1,1,{type:Hi,depthBuffer:!1}),l=new ge,c={sky:{value:s.texture},reprojection:{value:l},tanHalf:{value:.6745},wideTanHalf:{value:.7554},aspect:{value:1}},h=new gn(new xo(2,2),new ln({uniforms:c,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:`varying vec2 uvv;uniform sampler2D sky;uniform mat3 reprojection;uniform float tanHalf,wideTanHalf,aspect;
      void main(){vec3 ray=reprojection*vec3((uvv-.5)*2.*tanHalf*vec2(aspect,1.),-1.);
      vec2 sampleUV=ray.xy/max(.001,-ray.z)/(2.*wideTanHalf*vec2(aspect,1.))+.5;
      gl_FragColor=texture2D(sky,clamp(sampleUV,.001,.999));
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));h.frustumCulled=!1,h.renderOrder=-10,o.add(h);const d=new mi(75,1,.1,16e3),p=new sa,g=new sa,_=new sa,m=new j,y=new j,S=new Je,E=new j,C=new j;let M=!0,v=-1/0,R=1/24;const N=sC(o),A=Kr.map(q=>({tint:new fe(q.color),second:new fe(q.second),accent:new fe(q.accent)})),O={time:{value:0},tint:{value:A[0].tint.clone()},second:{value:A[0].second.clone()},accent:{value:A[0].accent.clone()},density:{value:Number(e.density)},band:{value:Number(e.band)},warmth:{value:Number(e.warmth)},abundance:{value:e.stars/1.4},structure:{value:Number(e.structure)},bandWidth:{value:Number(e.bandWidth)},energy:{value:.9},octaves:{value:3},halo:{value:1}};let z=7123;const P=()=>(z=z*16807%2147483647,(z-1)/2147483646),F=()=>Math.sqrt(-2*Math.log(Math.max(1e-5,P())))*Math.cos(2*Math.PI*P()),U=[new j(1900,1400,1900),new j(5400,4e3,5400),new j(15e3,11e3,15e3)].map((q,X)=>{const ht=Fp.High.stars[X],dt=new Float32Array(ht*3),Nt=new Float32Array(ht),Xt=new Float32Array(ht),oe=new Float32Array(ht);for(let nt=0;nt<ht;nt++){let yt=(P()-.5)*q.x,wt=(P()-.5)*q.z,Tt=(P()-.5)*q.y;if(X>0&&P()<.72){if(P()<.28){const Gt=Math.floor(P()*4);yt=(Gt%2?.22:-.24)*q.x+F()*q.x*.045,wt=(Gt<2?-.27:.22)*q.z+F()*q.z*.055}Tt=-.42*yt+F()*q.y*.035+Math.sin(wt/q.z*5)*q.y*.045}dt.set([yt,Tt,wt],nt*3);const Mt=P();Nt[nt]=(Mt>.987?12+P()*14:1.3+P()*4.6)*[.7,1.1,2][X],Xt[nt]=P(),oe[nt]=P()}const I=new ii;I.setAttribute("position",new Hn(dt,3)),I.setAttribute("radius",new Hn(Nt,1)),I.setAttribute("temperature",new Hn(Xt,1)),I.setAttribute("identity",new Hn(oe,1));const ut=new ln({uniforms:{...O,offset:{value:new j},span:{value:q},pixels:{value:400},dpr:{value:1}},vertexShader:oC,fragmentShader:lC,transparent:!0,depthWrite:!1,blending:Lc}),Z=new oy(I,ut);return Z.frustumCulled=!1,Z.renderOrder=3,o.add(Z),Z}),H=new gn(new Nl(12500,32,16),new ln({uniforms:O,vertexShader:fC,fragmentShader:hC,side:Gn,depthWrite:!1}));H.renderOrder=-2,H.frustumCulled=!1,i.add(H);const J=new Nl(1,24,16),et=[{center:new j(-180,110,-820),radii:new j(680,330,770)},{center:new j(600,-140,-1600),radii:new j(1050,480,1e3)},{center:new j(-850,220,-2400),radii:new j(1200,520,1050)},{center:new j(450,420,1200),radii:new j(850,600,1e3)}],mt=et.map((q,X)=>{const ht=new ln({uniforms:{...O,center:{value:q.center.clone()},radii:{value:q.radii},steps:{value:10},visibility:{value:1},seed:{value:4.3+X*9.7}},vertexShader:uC,fragmentShader:cC,transparent:!0,depthWrite:!1,side:Gn}),dt=new gn(J,ht);return dt.position.copy(q.center),dt.scale.copy(q.radii),dt.renderOrder=1,i.add(dt),dt}),lt=new iT("#b7c6ef","#080e1d",1.6);o.add(lt);const Y=new sT("#dae6ff",2.8);return Y.position.set(-3,4,1),o.add(Y),{tint:O.tint.value,renderAtmosphere(q,X,ht=!1){X.updateWorldMatrix(!0,!1),X.matrixWorld.decompose(m,p,y);const dt=X,Nt=Math.tan(Fn.degToRad(dt.fov)*.5);(c.aspect.value!==dt.aspect||c.tanHalf.value!==Nt)&&(M=!0),c.tanHalf.value=Nt,c.wideTanHalf.value=Nt*1.12,c.aspect.value=dt.aspect;const Xt=performance.now()/1e3;if(ht||M||Xt-v>=R||p.angleTo(g)>.075||E.distanceToSquared(C)>900){d.fov=Fn.radToDeg(2*Math.atan(Nt*1.12)),d.aspect=dt.aspect,d.near=dt.near,d.far=dt.far,d.updateProjectionMatrix(),d.position.copy(m),d.quaternion.copy(p);const oe=q.toneMapping;q.toneMapping=Da,q.setRenderTarget(s),q.render(i,d),q.setRenderTarget(null),q.toneMapping=oe,g.copy(p),C.copy(E),v=performance.now()/1e3,M=!1}_.copy(g).invert().multiply(p),S.makeRotationFromQuaternion(_),l.setFromMatrix4(S)},dispose(){s.dispose(),N.dispose();const q=new Set,X=new Set;i.traverse(ht=>{ht instanceof gn&&(q.add(ht.geometry),X.add(ht.material))}),q.forEach(ht=>ht.dispose()),X.forEach(ht=>ht.dispose())},configure(q,X,ht,dt,Nt,Xt,oe=!1){M=!0,R=oe?1/15:q==="Low"?1/20:q==="Medium"?1/24:1/30;const I=Fp[q];N.configure(q),O.octaves.value=I.octaves;const ut=Xt&&q!=="Low"?Hi:Gi;s.texture.type!==ut&&(s.dispose(),s.texture.type=ut),s.setSize(Math.max(1,Math.round(ht*X*(oe?.26:I.cloudScale))),Math.max(1,Math.round(dt*X*(oe?.26:I.cloudScale)))),O.halo.value=.75+Nt*.8,U.forEach((Z,nt)=>{Z.geometry.setDrawRange(0,I.stars[nt]),Z.material.uniforms.pixels.value=dt*.64*X,Z.material.uniforms.dpr.value=X}),mt.forEach((Z,nt)=>{Z.visible=nt<I.volumes,Z.material.uniforms.steps.value=I.steps})},update(q,X,ht,dt,Nt){E.copy(dt),N.update(q,X,ht,dt);const Xt=Kr[ht],oe=A[ht],I=1-Math.exp(-q*.55);O.time.value=X,O.tint.value.lerp(oe.tint,I),O.second.value.lerp(oe.second,I),O.accent.value.lerp(oe.accent,I),O.density.value=Fn.lerp(O.density.value,Xt.density,I),O.band.value=Fn.lerp(O.band.value,Xt.band,I),O.structure.value=Fn.lerp(O.structure.value,Xt.structure,I),O.bandWidth.value=Fn.lerp(O.bandWidth.value,Xt.bandWidth,I),O.warmth.value=Fn.lerp(O.warmth.value,Xt.warmth,I),O.abundance.value=Fn.lerp(O.abundance.value,Xt.stars/1.4,I),O.energy.value=Fn.lerp(O.energy.value,Nt,I),U.forEach(ut=>ut.material.uniforms.offset.value.copy(dt)),mt.forEach((ut,Z)=>{const nt=et[Z].center;ut.position.set(Fn.euclideanModulo(nt.x-dt.x+4600,9200)-4600,Fn.euclideanModulo(nt.y-dt.y+3600,7200)-3600,Fn.euclideanModulo(nt.z-dt.z+4600,9200)-4600),ut.material.uniforms.center.value.copy(ut.position);const yt=Math.max(Math.abs(ut.position.x)/4600,Math.abs(ut.position.y)/3600,Math.abs(ut.position.z)/4600);ut.material.uniforms.visibility.value=1-Fn.smoothstep(yt,.65,.95)})}}}function pC(o,e=!1){const i=o[0].index!==null,s=new Set(Object.keys(o[0].attributes)),l=new Set(Object.keys(o[0].morphAttributes)),c={},h={},d=o[0].morphTargetsRelative,p=new ii;let g=0;for(let _=0;_<o.length;++_){const m=o[_];let y=0;if(i!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const S in m.attributes){if(!s.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+'. All geometries must have compatible attributes; make sure "'+S+'" attribute exists among all geometries, or in none of them.'),null;c[S]===void 0&&(c[S]=[]),c[S].push(m.attributes[S]),y++}if(y!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". Make sure all geometries have the same number of attributes."),null;if(d!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const S in m.morphAttributes){if(!l.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+".  .morphAttributes must be consistent throughout all geometries."),null;h[S]===void 0&&(h[S]=[]),h[S].push(m.morphAttributes[S])}if(e){let S;if(i)S=m.index.count;else if(m.attributes.position!==void 0)S=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". The geometry must have either an index or a position attribute"),null;p.addGroup(g,S,_),g+=S}}if(i){let _=0;const m=[];for(let y=0;y<o.length;++y){const S=o[y].index;for(let E=0;E<S.count;++E)m.push(S.getX(E)+_);_+=o[y].attributes.position.count}p.setIndex(m)}for(const _ in c){const m=Dx(c[_]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+_+" attribute."),null;p.setAttribute(_,m)}for(const _ in h){const m=h[_][0].length;if(m===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[_]=[];for(let y=0;y<m;++y){const S=[];for(let C=0;C<h[_].length;++C)S.push(h[_][C][y]);const E=Dx(S);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+_+" morphAttribute."),null;p.morphAttributes[_].push(E)}}return p}function Dx(o){let e,i,s,l=-1,c=0;for(let g=0;g<o.length;++g){const _=o[g];if(e===void 0&&(e=_.array.constructor),e!==_.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=_.itemSize),i!==_.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=_.normalized),s!==_.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=_.gpuType),l!==_.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=_.count*i}const h=new e(c),d=new Hn(h,i,s);let p=0;for(let g=0;g<o.length;++g){const _=o[g];if(_.isInterleavedBufferAttribute){const m=p/i;for(let y=0,S=_.count;y<S;y++)for(let E=0;E<i;E++){const C=_.getComponent(y,E);d.setComponent(y+m,E,C)}}else h.set(_.array,p);p+=_.count*i}return l!==void 0&&(d.gpuType=l),d}function mC(o){const e=new Qr;e.name="enclosed-flight-deck",o.add(e);const i={value:new fe("#ae80f0")},s={value:1},l=new fe("#c8d7e4"),c=(R,N)=>new ln({uniforms:{baseColor:{value:new fe(R)},tint:i,brightness:s,polish:{value:N}},vertexShader:"varying vec3 point,faceNormal;void main(){point=position;faceNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 point,faceNormal;uniform vec3 baseColor,tint;uniform float brightness,polish;
      void main(){vec3 n=normalize(faceNormal),v=normalize(-point),l=normalize(vec3(0.,.95,.2)-point);
      float diffuse=max(0.,dot(n,l));float spec=pow(max(0.,dot(n,normalize(l+v))),24.);
      float front=max(0.,dot(n,normalize(vec3(0.,.7,-2.1)-point)));
      float fresnel=pow(1.-max(0.,dot(n,v)),2.);
      vec3 color=baseColor*(.55+diffuse*.7)+vec3(.65,.75,.85)*spec*polish+tint*(front*.05+fresnel*.035);
      gl_FragColor=vec4(color*brightness,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}),h=c("#3d4a57",.12),d=c("#73818c",.22),p=c("#1b2835",.04),g=new Dl({color:"#9bb9d1"}),_=new Map,m=(R,N)=>{let A=_.get(N);A||(A=[],_.set(N,A)),A.push(R)};function y(R,N,A,O,z,P,F,w=0,U=0,H=0){const J=new _o(z,P,F);J.rotateX(w),J.rotateY(U),J.rotateZ(H),J.translate(N,A,O),m(J,R)}for(const R of[-1,1])y(h,R*2.85,0,-.4,.24,3.9,5.8);y(h,0,1.86,-.4,5.95,.24,5.8),y(h,0,-1.84,-.4,5.95,.24,5.8),y(h,0,0,2.43,5.95,3.9,.24),y(h,0,1.64,-3.25,5.9,.42,.38),y(h,0,-1.5,-3.25,5.9,.72,.5);for(const R of[-1,1])y(h,R*2.7,.05,-3.25,.34,3.2,.4,0,0,R*.08),y(d,R*2.52,.06,-3.02,.055,2.95,.09,0,0,R*.08),y(g,R*2.475,.06,-2.99,.012,2.86,.018,0,0,R*.08);y(d,0,1.385,-3.04,5.12,.07,.11),y(g,0,1.335,-2.98,5.03,.012,.018),y(d,0,-1.12,-2.98,5.1,.075,.16),y(g,0,-1.07,-2.9,4.98,.012,.02),y(p,0,-1.4,-2.72,4.9,.44,1.12,.1),y(h,0,-1.46,-2.1,2.15,.3,1.05,.13),y(p,0,-1.12,-2.51,1.98,.56,.2,-.24);for(const R of[-1,1]){y(p,R*1.88,-1.18,-2.62,.91,.44,.22,-.15,-R*.18),y(h,R*2.08,-1.36,-1.05,.7,.38,2,.04,0,R*.04),y(d,R*2.08,-1.15,-1.05,.61,.025,1.8);for(let N=0;N<6;N++)y(N===0?g:p,R*(1.85+N%3*.15),-1.125,-.5-Math.floor(N/3)*.16,.075,.012,.06);for(const N of[-1.55,.05,1.65])y(p,R*2.7,.12,N,.08,1.6,1.28),y(d,R*2.63,.92,N,.045,.035,1.26),y(g,R*2.62,-.67,N,.018,.012,1.1);y(d,R*2.69,1.4,-.42,.13,.12,5.35),y(g,R*2.61,1.39,-.42,.018,.018,5.12),y(g,R*1.35,-1.705,.1,.025,.012,3.2)}for(const R of[-1.6,.35,1.9])y(d,0,1.69,R,5.42,.13,.12);y(p,0,1.68,.3,1.45,.08,1.4),y(g,0,1.62,.3,.65,.012,.15),y(p,0,-1.42,.45,1.15,.48,1.15),y(p,0,-.42,1,1.18,1.62,.3,-.1),y(p,0,-.05,2.25,1.4,3,.12),y(d,.72,-.05,2.14,.035,2.95,.02),y(g,-.72,-.05,2.14,.015,2.95,.02);const S=document.createElement("canvas");S.width=768,S.height=192;const E=S.getContext("2d");E.fillStyle="#0b1b28",E.fillRect(0,0,768,192),E.strokeStyle="#355865",E.lineWidth=1;for(let R=18;R<768;R+=28)E.beginPath(),E.moveTo(R,32),E.lineTo(R,174),E.stroke();E.strokeStyle="#9bcbd3",E.lineWidth=2,E.beginPath(),E.arc(100,103,51,.3,Math.PI*1.8),E.stroke(),E.fillStyle="#c2e1e6",E.font="18px monospace",E.fillText("AETHER / FLIGHT DECK",190,43),E.font="13px monospace",E.fillText("NAVIGATION  /  STABLE",190,89),E.fillText("LIFE SUPPORT  /  NOMINAL",190,122),E.fillStyle="#5c989f",E.fillRect(190,151,410,3);const C=new J1(S);C.colorSpace=ei;const M=new Dl({map:C,color:"#b8d3df"});function v(R,N,A,O,z,P,F=0){const w=new xo(O,z);w.rotateX(P),w.rotateY(F),w.translate(R,N,A),m(w,M)}v(0,-1.08,-2.38,1.77,.42,-.24);for(const R of[-1,1])v(R*1.87,-1.15,-2.48,.77,.3,-.15,-R*.18);for(const[R,N]of _){const A=pC(N);N.forEach(z=>z.dispose());const O=new gn(A,R);O.name=R===h?"enclosure-shell":"cabin-details",e.add(O)}return{group:e,update(R,N,A,O){e.visible=O;const z=A?.5:1;i.value.copy(R),s.value=N*z,g.color.lerpColors(R,l,.55).multiplyScalar(.6*N*z),M.color.copy(g.color).multiplyScalar(A?.5:1)},dispose(){C.dispose()}}}function gC(o,e,i,s){const l=new XR({antialias:!0,alpha:!1,powerPreference:"high-performance"});l.setClearColor("#040710"),l.outputColorSpace=ei,l.toneMapping=Vp,l.toneMappingExposure=wx.Balanced.exposure,o.appendChild(l.domElement);const c=new sy,h=new mi(68,1,.1,16e3),d=new Qr;d.position.z=5,d.add(h),c.add(d);const p=dC(c),g=mC(d),_=eC(l.domElement,s,i,e),m=new fy,y=new iC;let S=e().quality,E=e().performanceMode,C=e().adaptive,M=0,v=0,R=0,N="",A=!1,O=null,z=null;const P=()=>{O&&(O.passes.forEach(H=>H.dispose()),O.dispose(),O=null,z=null)},F=()=>{const H=e(),J=H.performanceMode?"Low":H.quality,et=Fp[J],mt=Math.max(1,o.clientWidth),lt=Math.max(1,o.clientHeight),Y=Math.min(window.devicePixelRatio||1,et.pixelRatio)*(H.performanceMode?.85:H.adaptive?y.scale:1);l.setPixelRatio(Y),l.setSize(mt,lt),h.aspect=mt/lt,h.updateProjectionMatrix();const q=!H.performanceMode&&et.bloom&&H.bloom>0&&l.extensions.has("EXT_color_buffer_float");q&&!O?(O=new QR(l),O.addPass(new KR(c,h)),z=new ho(new ce(mt,lt),.2,.55,1.1),O.addPass(z),O.addPass(new $R)):q||P(),O&&(O.setPixelRatio(Y),O.setSize(mt,lt)),p.configure(J,Y,mt,lt,H.bloom,l.extensions.has("EXT_color_buffer_float"),H.performanceMode),N=`${H.quality}/${H.bloom}/${H.performanceMode}/${H.adaptive}`},w=()=>{m.getDelta(),i.reset(!0)};document.addEventListener("visibilitychange",w),window.addEventListener("resize",F),F();const U=()=>{if(A)return;M=requestAnimationFrame(U);const H=m.getDelta(),J=H>.25?0:H,et=e();if(document.hidden){i.reset(!0);return}const mt=Math.min(H,.25);_.sync(),nC(i,H,et),(et.quality!==S||et.performanceMode!==E||et.adaptive!==C)&&(y.reset(),S=et.quality,E=et.performanceMode,C=et.adaptive);const lt=y.observe(H,et.adaptive&&!et.performanceMode,et.paused);(N!==`${et.quality}/${et.bloom}/${et.performanceMode}/${et.adaptive}`||lt)&&F(),et.paused||(v+=J);const Y=wx[et.lighting];l.toneMappingExposure=Fn.damp(l.toneMappingExposure,Y.exposure*Kr[et.region].exposure,.8,mt),p.update(mt,v,et.region,i.position,Y.nebula),d.quaternion.copy(i.shipQuaternion),h.quaternion.copy(i.lookQuaternion),g.update(p.tint,Y.cabin,et.mode==="Meditation",et.cockpit),z&&(z.strength=et.bloom*(et.mode==="Meditation"?.45:.8)),R+=H,!(et.paused&&R<1/15)&&(R=0,p.renderAtmosphere(l,h),O?O.render():l.render(c,h))};return U(),()=>{A=!0,cancelAnimationFrame(M),_.dispose(),window.removeEventListener("resize",F),document.removeEventListener("visibilitychange",w),P(),g.dispose(),p.dispose();const H=new Set,J=new Set;c.traverse(et=>{if(et instanceof gn||et instanceof oy){H.add(et.geometry);for(const mt of Array.isArray(et.material)?et.material:[et.material])J.add(mt)}}),H.forEach(et=>et.dispose()),J.forEach(et=>et.dispose()),l.dispose(),l.domElement.remove()}}class vC{constructor(){ke(this,"ctx",null);ke(this,"master");ke(this,"engine");ke(this,"music")}async start(){if(!this.ctx){const e=this.ctx=new AudioContext;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination),this.engine=e.createGain(),this.music=e.createGain(),this.engine.connect(this.master),this.music.connect(this.master),[38,57,76].forEach(i=>{const s=e.createOscillator();s.type="sine",s.frequency.value=i;const l=e.createGain();l.gain.value=.09,s.connect(l).connect(this.engine),s.start()}),[130.81,196,261.63,293.66,392].forEach((i,s)=>{const l=e.createOscillator();l.frequency.value=i;const c=e.createGain();c.gain.value=.025;const h=e.createOscillator();h.frequency.value=.035+s*.009;const d=e.createGain();d.gain.value=.012,h.connect(d).connect(c.gain),l.connect(c).connect(this.music),l.start(),h.start()})}await this.ctx.resume()}set(e,i,s,l){var h,d,p;if(!this.ctx)return;const c=this.ctx.currentTime;(h=this.master)==null||h.gain.setTargetAtTime(e&&!l?.65:0,c,.4),(d=this.engine)==null||d.gain.setTargetAtTime(i,c,.2),(p=this.music)==null||p.gain.setTargetAtTime(s,c,.2)}dispose(){var e;(e=this.ctx)==null||e.close()}}function _C(){const[o,e]=ye.useState("Autopilot"),[i,s]=ye.useState(18),[l,c]=ye.useState(!1),[h,d]=ye.useState(0),[p,g]=ye.useState(()=>matchMedia("(any-pointer: coarse)").matches?"Low":"Medium"),[_,m]=ye.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[y,S]=ye.useState(.6),[E,C]=ye.useState(!0),[M,v]=ye.useState(!1),[R,N]=ye.useState(!1),[A,O]=ye.useState(""),[z,P]=ye.useState(!1),[F,w]=ye.useState(.35),[U,H]=ye.useState(.5),[J,et]=ye.useState(!0),[mt,lt]=ye.useState(""),[Y,q]=ye.useState(!1),[X,ht]=ye.useState(1),[dt,Nt]=ye.useState(.7),[Xt,oe]=ye.useState(!1),[I,ut]=ye.useState(!1),[Z,nt]=ye.useState("Balanced"),[yt,wt]=ye.useState(.28),[Tt,Mt]=ye.useState(!1),[Gt,G]=ye.useState(!0),Le=ye.useRef(null),re=ye.useRef(new tC),Qt=ye.useRef(null),Lt=ye.useRef(new vC),ne=ye.useRef({mode:o,speed:i,paused:l,region:h,quality:p,reduced:_,motion:y,cockpit:E,started:M,blocked:!!A,sensitivity:X,touchSensitivity:dt,invertMouseX:Xt,invertMouseY:I,lighting:Z,bloom:yt,performanceMode:Tt,adaptive:Gt});ne.current={mode:o,speed:i,paused:l,region:h,quality:p,reduced:_,motion:y,cockpit:E,started:M,blocked:!!A,sensitivity:X,touchSensitivity:dt,invertMouseX:Xt,invertMouseY:I,lighting:Z,bloom:yt,performanceMode:Tt,adaptive:Gt},ye.useEffect(()=>{try{return gC(Qt.current,()=>ne.current,re.current,Le.current)}catch{lt("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),ye.useEffect(()=>{Lt.current.set(z,F,U,l)},[z,F,U,l]),ye.useEffect(()=>{const D=setInterval(()=>{J&&M&&!l&&d(b=>(b+1)%5)},9e4);return()=>clearInterval(D)},[J,M,l]),ye.useEffect(()=>{const D=it=>{it.target instanceof HTMLElement&&it.target.closest('input,select,textarea,[contenteditable="true"]')||(it.key.toLowerCase()==="h"&&N(pt=>!pt),it.code==="Space"&&!(it.target instanceof HTMLElement&&it.target.closest("button,a"))&&(it.preventDefault(),c(pt=>!pt)),it.key==="Escape"&&(N(!1),O("")))},b=()=>q(!!document.fullscreenElement);return window.addEventListener("keydown",D),document.addEventListener("fullscreenchange",b),()=>{window.removeEventListener("keydown",D),document.removeEventListener("fullscreenchange",b)}},[]);const Ft=async()=>{try{await Lt.current.start(),P(D=>!D)}catch{lt("Audio is unavailable in this browser. The journey can continue silently.")}},le=()=>{v(!0),c(!1)},Ie=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{lt("Fullscreen is unavailable in this browser.")}},Ye=D=>{e(D),v(!0)};return ot.jsxs("main",{className:`${R?"hidden-ui":""} ${o==="Meditation"?"meditation":""} ${o==="Manual Flight"?"manual-flight":""} ${A||l?"controls-blocked":""}`,children:[ot.jsx("div",{className:"universe",ref:Qt}),ot.jsx("div",{className:"vignette"}),ot.jsxs("div",{className:"touch-controls ui",children:[ot.jsxs("div",{ref:Le,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[ot.jsx("span",{className:"stick-cross",children:"+"}),ot.jsx("span",{className:"stick-thumb"}),ot.jsx("small",{children:"STEER"})]}),ot.jsx("span",{className:"touch-look-hint",children:"DRAG SPACE TO LOOK"})]}),ot.jsxs("header",{className:"ui",children:[ot.jsxs("a",{className:"brand",href:"#",onClick:D=>{D.preventDefault(),N(!1)},children:[ot.jsx(_E,{size:32}),ot.jsxs("span",{children:["COSMIC DRIFT",ot.jsx("small",{children:"A QUIETER KIND OF JOURNEY"})]})]}),ot.jsxs("nav",{children:[ot.jsx("span",{className:"live-dot"})," ALL SYSTEMS AT PEACE ",ot.jsx("span",{className:"nav-line"}),ot.jsx("button",{title:"Audio settings",onClick:()=>O(A==="audio"?"":"audio"),children:ot.jsx(_d,{size:18})}),ot.jsx("button",{title:"Settings",onClick:()=>O(A==="settings"?"":"settings"),children:ot.jsx(SE,{size:18})}),ot.jsx("button",{title:"Fullscreen",onClick:Ie,children:ot.jsx(M_,{size:18})})]})]}),ot.jsxs("section",{className:"intro ui",children:[ot.jsxs("div",{className:"eyebrow",children:[ot.jsx("span",{})," LEAVE THE NOISE BEHIND"]}),ot.jsxs("h1",{children:["Nowhere to be.",ot.jsx("br",{}),"Just ",ot.jsx("em",{children:"drift."})]}),ot.jsxs("p",{children:["A quiet passage through an infinite universe.",ot.jsx("br",{}),"No destination. No demands. Just you and the stars."]}),ot.jsxs("button",{className:"start",onClick:le,children:[M?l?"Resume journey":"Journey in progress":"Start journey",ot.jsx(mE,{size:18})]}),ot.jsxs("div",{className:"intro-note",children:[ot.jsx("span",{})," ",M?"TAKE YOUR TIME. YOU HAVE ALL OF IT.":"YOUR OWN LITTLE CORNER OF INFINITY"]})]}),ot.jsxs("aside",{className:"region-label ui",children:[ot.jsx("span",{className:"coordinate",children:"SECTOR 07 / PERSEUS"}),ot.jsx("div",{className:"region-rule"}),ot.jsx("span",{className:"eyebrow",children:"YOU ARE DRIFTING THROUGH"}),ot.jsx("h2",{children:Kr[h].name}),ot.jsx("p",{children:Kr[h].subtitle}),ot.jsxs("button",{onClick:()=>O(A==="regions"?"":"regions"),children:["Explore regions ",ot.jsx(y_,{size:14})]})]}),ot.jsxs("div",{className:"travel-marker ui",children:[ot.jsx("span",{children:"✧"}),ot.jsx("i",{}),ot.jsx("small",{children:"AN INFINITE UNIVERSE. AN UNHURRIED YOU."})]}),ot.jsxs("section",{className:"flight-deck ui",children:[ot.jsxs("div",{className:"deck-top",children:[ot.jsxs("div",{className:"deck-label",children:[ot.jsx("span",{className:"live-dot"}),l?"JOURNEY PAUSED":M?"JOURNEY ACTIVE":"READY WHEN YOU ARE"]}),ot.jsx("span",{className:"ship-name",children:"VESSEL / AETHER–01"})]}),ot.jsxs("div",{className:"deck-controls",children:[ot.jsx("div",{className:"mode-controls",children:[{name:"Autopilot",icon:gE},{name:"Manual Flight",icon:vE},{name:"Meditation",icon:EE}].map(D=>ot.jsxs("button",{className:o===D.name?"selected":"",onClick:()=>Ye(D.name),children:[ot.jsx(D.icon,{size:17}),ot.jsxs("span",{children:[D.name,D.name==="Meditation"?" mode":""]})]},D.name))}),ot.jsxs("div",{className:"speed",children:[ot.jsxs("label",{htmlFor:"speed",children:["DRIFT SPEED ",ot.jsxs("span",{children:[i.toFixed(0)," ",ot.jsx("small",{children:"km/s"})]})]}),ot.jsx("input",{id:"speed",type:"range",min:"1",max:"80",value:i,onChange:D=>s(+D.target.value)}),ot.jsxs("div",{children:[ot.jsx("span",{children:"GENTLE"}),ot.jsx("span",{children:"SWIFT"})]})]}),ot.jsxs("div",{className:"deck-actions",children:[ot.jsx("button",{title:l?"Resume":"Pause",onClick:()=>c(D=>!D),children:l?ot.jsx(yE,{size:19}):ot.jsx(xE,{size:19})}),ot.jsx("button",{title:z?"Mute audio":"Enable audio",onClick:Ft,children:z?ot.jsx(_d,{size:19}):ot.jsx(ME,{size:19})}),ot.jsx("button",{title:"Hide interface (H)",onClick:()=>N(!0),children:ot.jsx(S_,{size:19})})]})]})]}),ot.jsxs("footer",{className:"ui",children:[ot.jsxs("span",{children:[ot.jsx("span",{className:"key",children:"DRAG"})," TO LOOK AROUND ",ot.jsx("i",{})," ",ot.jsx("span",{className:"key",children:o==="Manual Flight"?"W A S D":"H"})," ",o==="Manual Flight"?"TO STEER":"TO HIDE INTERFACE"]}),ot.jsxs("span",{children:["BUILT FOR WANDERING ",ot.jsx("span",{className:"tiny-star",children:"✦"})]})]}),R&&ot.jsxs("button",{className:"restore",onClick:()=>N(!1),children:[ot.jsx(S_,{size:16})," Show controls · H"]}),A&&ot.jsxs("div",{className:"panel ui",children:[ot.jsxs("div",{className:"panel-head",children:[ot.jsx("span",{children:A==="regions"?"Choose your horizon":A==="audio"?"The sound of stillness":"Make space your own"}),ot.jsx("button",{title:"Close settings",onClick:()=>O(""),children:ot.jsx(E_,{size:19})})]}),A==="regions"?ot.jsxs(ot.Fragment,{children:[ot.jsx("p",{children:"Every corner of the universe has a different kind of quiet."}),Kr.map((D,b)=>ot.jsxs("button",{className:`region-option ${h===b?"active":""}`,onClick:()=>d(b),children:[ot.jsx("span",{className:"orb",style:{background:`radial-gradient(circle at 30% 30%,${D.color},${D.second},#070a12)`}}),ot.jsxs("span",{children:[D.name,ot.jsx("small",{children:D.subtitle})]}),h===b?"●":ot.jsx(y_,{size:15})]},D.name)),ot.jsxs("label",{className:"check",children:[ot.jsx("input",{type:"checkbox",checked:J,onChange:D=>et(D.target.checked)})," Automatically drift between regions · 90s"]})]}):A==="audio"?ot.jsxs(ot.Fragment,{children:[ot.jsx("p",{children:"Original ambient tones, synthesized just for this journey."}),ot.jsxs("button",{className:"sound-toggle",onClick:Ft,children:[z?"Mute all audio":"Enable sound",ot.jsx(_d,{size:17})]}),ot.jsxs("label",{className:"setting",children:["Engine hum",ot.jsx("input",{"aria-label":"Engine volume",type:"range",min:"0",max:"1",step:".01",value:F,onChange:D=>w(+D.target.value)})]}),ot.jsxs("label",{className:"setting",children:["Ambient music",ot.jsx("input",{"aria-label":"Music volume",type:"range",min:"0",max:"1",step:".01",value:U,onChange:D=>H(+D.target.value)})]})]}):ot.jsxs(ot.Fragment,{children:[ot.jsxs("label",{className:"setting",children:["Graphics quality",ot.jsx("select",{"aria-label":"Graphics quality",value:p,onChange:D=>g(D.target.value),children:["Low","Medium","High"].map(D=>ot.jsx("option",{children:D},D))})]}),ot.jsxs("label",{className:"check",children:[ot.jsx("input",{type:"checkbox",checked:Tt,onChange:D=>Mt(D.target.checked)})," Performance mode"]}),ot.jsxs("label",{className:"check",children:[ot.jsx("input",{type:"checkbox",checked:Gt,onChange:D=>G(D.target.checked)})," Adaptive resolution"]}),ot.jsx("small",{className:"setting-note",children:"Performance mode prioritizes smooth flight. Adaptive resolution adjusts image detail when rendering is slow."}),ot.jsxs("label",{className:"setting",children:["Environment lighting",ot.jsx("select",{"aria-label":"Environment lighting",value:Z,onChange:D=>nt(D.target.value),children:["Dark","Balanced","Cinematic"].map(D=>ot.jsx("option",{children:D},D))})]}),ot.jsxs("label",{className:"setting",children:["Soft bloom ",ot.jsxs("output",{children:[Math.round(yt*100),"%"]}),ot.jsx("input",{"aria-label":"Soft bloom",type:"range",min:"0",max:".6",step:".02",value:yt,onChange:D=>wt(+D.target.value)}),ot.jsx("small",{className:"setting-note",children:"Low / Medium use lightweight star halos; High can add post-processing bloom."})]}),ot.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",ot.jsxs("output",{children:[X.toFixed(2),"×"]}),ot.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:X,onChange:D=>ht(+D.target.value)})]}),ot.jsxs("label",{className:"setting",children:["Touch sensitivity ",ot.jsxs("output",{children:[dt.toFixed(2),"×"]}),ot.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:dt,onChange:D=>Nt(+D.target.value)})]}),ot.jsxs("label",{className:"check",children:[ot.jsx("input",{type:"checkbox",checked:Xt,onChange:D=>oe(D.target.checked)})," Invert mouse horizontal axis"]}),ot.jsxs("label",{className:"check",children:[ot.jsx("input",{type:"checkbox",checked:I,onChange:D=>ut(D.target.checked)})," Invert mouse vertical axis"]}),ot.jsxs("label",{className:"setting",children:["Camera movement",ot.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:y,onChange:D=>S(+D.target.value)})]}),ot.jsxs("label",{className:"check",children:[ot.jsx("input",{type:"checkbox",checked:_,onChange:D=>m(D.target.checked)})," Reduced motion"]}),ot.jsxs("label",{className:"check",children:[ot.jsx("input",{type:"checkbox",checked:E,onChange:D=>C(D.target.checked)})," Show cockpit"]}),ot.jsxs("button",{className:"sound-toggle",onClick:Ie,children:[Y?"Exit fullscreen":"Enter fullscreen",ot.jsx(M_,{size:16})]})]})]}),mt&&ot.jsxs("div",{role:"alert",className:"error",children:[mt,ot.jsx("button",{onClick:()=>lt(""),"aria-label":"Dismiss error",children:ot.jsx(E_,{size:16})})]})]})}fE.createRoot(document.getElementById("root")).render(ot.jsx(_C,{}));
