var YM=Object.defineProperty;var qM=(o,e,i)=>e in o?YM(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var $e=(o,e,i)=>qM(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var ud={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function WM(){if(av)return ul;av=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:f}}return ul.Fragment=e,ul.jsx=i,ul.jsxs=i,ul}var sv;function jM(){return sv||(sv=1,ud.exports=WM()),ud.exports}var ct=jM(),cd={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function ZM(){if(rv)return le;rv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(H){return H===null||typeof H!="object"?null:(H=M&&H[M]||H["@@iterator"],typeof H=="function"?H:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function L(H,ht,J){this.props=H,this.context=ht,this.refs=m,this.updater=J||C}L.prototype.isReactComponent={},L.prototype.setState=function(H,ht){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,ht,"setState")},L.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function P(){}P.prototype=L.prototype;function A(H,ht,J){this.props=H,this.context=ht,this.refs=m,this.updater=J||C}var B=A.prototype=new P;B.constructor=A,y(B,L.prototype),B.isPureReactComponent=!0;var O=Array.isArray;function N(){}var G={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function w(H,ht,J){var it=J.ref;return{$$typeof:o,type:H,key:ht,ref:it!==void 0?it:null,props:J}}function F(H,ht){return w(H.type,ht,H.props)}function $(H){return typeof H=="object"&&H!==null&&H.$$typeof===o}function lt(H){var ht={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(J){return ht[J]})}var mt=/\/+/g;function ut(H,ht){return typeof H=="object"&&H!==null&&H.key!=null?lt(""+H.key):ht.toString(36)}function Y(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(N,N):(H.status="pending",H.then(function(ht){H.status==="pending"&&(H.status="fulfilled",H.value=ht)},function(ht){H.status==="pending"&&(H.status="rejected",H.reason=ht)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function st(H,ht,J,it,Mt){var Nt=typeof H;(Nt==="undefined"||Nt==="boolean")&&(H=null);var Rt=!1;if(H===null)Rt=!0;else switch(Nt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(H.$$typeof){case o:case e:Rt=!0;break;case x:return Rt=H._init,st(Rt(H._payload),ht,J,it,Mt)}}if(Rt)return Mt=Mt(H),Rt=it===""?"."+ut(H,0):it,O(Mt)?(J="",Rt!=null&&(J=Rt.replace(mt,"$&/")+"/"),st(Mt,ht,J,"",function(I){return I})):Mt!=null&&($(Mt)&&(Mt=F(Mt,J+(Mt.key==null||H&&H.key===Mt.key?"":(""+Mt.key).replace(mt,"$&/")+"/")+Rt)),ht.push(Mt)),1;Rt=0;var Et=it===""?".":it+":";if(O(H))for(var Vt=0;Vt<H.length;Vt++)it=H[Vt],Nt=Et+ut(it,Vt),Rt+=st(it,ht,J,Nt,Mt);else if(Vt=b(H),typeof Vt=="function")for(H=Vt.call(H),Vt=0;!(it=H.next()).done;)it=it.value,Nt=Et+ut(it,Vt++),Rt+=st(it,ht,J,Nt,Mt);else if(Nt==="object"){if(typeof H.then=="function")return st(Y(H),ht,J,it,Mt);throw ht=String(H),Error("Objects are not valid as a React child (found: "+(ht==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":ht)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function j(H,ht,J){if(H==null)return H;var it=[],Mt=0;return st(H,it,"","",function(Nt){return ht.call(J,Nt,Mt++)}),it}function xt(H){if(H._status===-1){var ht=H._result,J=ht();J.then(function(it){(H._status===0||H._status===-1)&&(H._status=1,H._result=it,J.status===void 0&&(J.status="fulfilled",J.value=it))},function(it){(H._status===0||H._status===-1)&&(H._status=2,H._result=it,J.status===void 0&&(J.status="rejected",J.reason=it))}),H._status===-1&&(H._status=0,H._result=J)}if(H._status===1)return H._result.default;throw H._result}var St=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ht=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(ht))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function Ht(H){var ht=G.T,J={};J.types=ht!==null?ht.types:null,G.T=J;try{var it=H(),Mt=G.S;Mt!==null&&Mt(J,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(N,St)}catch(Nt){St(Nt)}finally{ht!==null&&J.types!==null&&(ht.types=J.types),G.T=ht}}function re(H){var ht=G.T;if(ht!==null){var J=ht.types;J===null?ht.types=[H]:J.indexOf(H)===-1&&J.push(H)}else Ht(re.bind(null,H))}var Ee={map:j,forEach:function(H,ht,J){j(H,function(){ht.apply(this,arguments)},J)},count:function(H){var ht=0;return j(H,function(){ht++}),ht},toArray:function(H){return j(H,function(ht){return ht})||[]},only:function(H){if(!$(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return le.Activity=_,le.Children=Ee,le.Component=L,le.Fragment=i,le.Profiler=l,le.PureComponent=A,le.StrictMode=r,le.Suspense=p,le.ViewTransition=S,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,le.__COMPILER_RUNTIME={__proto__:null,c:function(H){return G.H.useMemoCache(H)}},le.addTransitionType=re,le.cache=function(H){return function(){return H.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(H,ht,J){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var it=y({},H.props),Mt=H.key;if(ht!=null)for(Nt in ht.key!==void 0&&(Mt=""+ht.key),ht)!D.call(ht,Nt)||Nt==="key"||Nt==="__self"||Nt==="__source"||Nt==="ref"&&ht.ref===void 0||(it[Nt]=ht[Nt]);var Nt=arguments.length-2;if(Nt===1)it.children=J;else if(1<Nt){for(var Rt=Array(Nt),Et=0;Et<Nt;Et++)Rt[Et]=arguments[Et+2];it.children=Rt}return w(H.type,Mt,it)},le.createContext=function(H){return H={$$typeof:h,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:f,_context:H},H},le.createElement=function(H,ht,J){var it,Mt={},Nt=null;if(ht!=null)for(it in ht.key!==void 0&&(Nt=""+ht.key),ht)D.call(ht,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(Mt[it]=ht[it]);var Rt=arguments.length-2;if(Rt===1)Mt.children=J;else if(1<Rt){for(var Et=Array(Rt),Vt=0;Vt<Rt;Vt++)Et[Vt]=arguments[Vt+2];Mt.children=Et}if(H&&H.defaultProps)for(it in Rt=H.defaultProps,Rt)Mt[it]===void 0&&(Mt[it]=Rt[it]);return w(H,Nt,Mt)},le.createRef=function(){return{current:null}},le.forwardRef=function(H){return{$$typeof:d,render:H}},le.isValidElement=$,le.lazy=function(H){return{$$typeof:x,_payload:{_status:-1,_result:H},_init:xt}},le.memo=function(H,ht){return{$$typeof:g,type:H,compare:ht===void 0?null:ht}},le.startTransition=Ht,le.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},le.use=function(H){return G.H.use(H)},le.useActionState=function(H,ht,J){return G.H.useActionState(H,ht,J)},le.useCallback=function(H,ht){return G.H.useCallback(H,ht)},le.useContext=function(H){return G.H.useContext(H)},le.useDebugValue=function(){},le.useDeferredValue=function(H,ht){return G.H.useDeferredValue(H,ht)},le.useEffect=function(H,ht){return G.H.useEffect(H,ht)},le.useEffectEvent=function(H){return G.H.useEffectEvent(H)},le.useId=function(){return G.H.useId()},le.useImperativeHandle=function(H,ht,J){return G.H.useImperativeHandle(H,ht,J)},le.useInsertionEffect=function(H,ht){return G.H.useInsertionEffect(H,ht)},le.useLayoutEffect=function(H,ht){return G.H.useLayoutEffect(H,ht)},le.useMemo=function(H,ht){return G.H.useMemo(H,ht)},le.useOptimistic=function(H,ht){return G.H.useOptimistic(H,ht)},le.useReducer=function(H,ht,J){return G.H.useReducer(H,ht,J)},le.useRef=function(H){return G.H.useRef(H)},le.useState=function(H){return G.H.useState(H)},le.useSyncExternalStore=function(H,ht,J){return G.H.useSyncExternalStore(H,ht,J)},le.useTransition=function(){return G.H.useTransition()},le.version="19.3.1",le}var ov;function Ip(){return ov||(ov=1,cd.exports=ZM()),cd.exports}var Me=Ip(),fd={exports:{}},cl={},hd={exports:{}},dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function KM(){return lv||(lv=1,(function(o){function e(Y,st){var j=Y.length;Y.push(st);t:for(;0<j;){var xt=j-1>>>1,St=Y[xt];if(0<l(St,st))Y[xt]=st,Y[j]=St,j=xt;else break t}}function i(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var st=Y[0],j=Y.pop();if(j!==st){Y[0]=j;t:for(var xt=0,St=Y.length,Ht=St>>>1;xt<Ht;){var re=2*(xt+1)-1,Ee=Y[re],H=re+1,ht=Y[H];if(0>l(Ee,j))H<St&&0>l(ht,Ee)?(Y[xt]=ht,Y[H]=j,xt=H):(Y[xt]=Ee,Y[re]=j,xt=re);else if(H<St&&0>l(ht,j))Y[xt]=ht,Y[H]=j,xt=H;else break t}}return st}function l(Y,st){var j=Y.sortIndex-st.sortIndex;return j!==0?j:Y.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],g=[],x=1,_=null,S=3,M=!1,b=!1,C=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function A(Y){for(var st=i(g);st!==null;){if(st.callback===null)r(g);else if(st.startTime<=Y)r(g),st.sortIndex=st.expirationTime,e(p,st);else break;st=i(g)}}function B(Y){if(C=!1,A(Y),!b)if(i(p)!==null)b=!0,O||(O=!0,$());else{var st=i(g);st!==null&&ut(B,st.startTime-Y)}}var O=!1,N=-1,G=5,D=-1;function w(){return y?!0:!(o.unstable_now()-D<G)}function F(){if(y=!1,O){var Y=o.unstable_now();D=Y;var st=!0;try{t:{b=!1,C&&(C=!1,L(N),N=-1),M=!0;var j=S;try{e:{for(A(Y),_=i(p);_!==null&&!(_.expirationTime>Y&&w());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,S=_.priorityLevel;var St=xt(_.expirationTime<=Y);if(Y=o.unstable_now(),typeof St=="function"){_.callback=St,A(Y),st=!0;break e}_===i(p)&&r(p),A(Y)}else r(p);_=i(p)}if(_!==null)st=!0;else{var Ht=i(g);Ht!==null&&ut(B,Ht.startTime-Y),st=!1}}break t}finally{_=null,S=j,M=!1}st=void 0}}finally{st?$():O=!1}}}var $;if(typeof P=="function")$=function(){P(F)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,mt=lt.port2;lt.port1.onmessage=F,$=function(){mt.postMessage(null)}}else $=function(){m(F,0)};function ut(Y,st){N=m(function(){Y(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(Y){switch(S){case 1:case 2:case 3:var st=3;break;default:st=S}var j=S;S=st;try{return Y()}finally{S=j}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(Y,st){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var j=S;S=Y;try{return st()}finally{S=j}},o.unstable_scheduleCallback=function(Y,st,j){var xt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?xt+j:xt):j=xt,Y){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=j+St,Y={id:x++,callback:st,priorityLevel:Y,startTime:j,expirationTime:St,sortIndex:-1},j>xt?(Y.sortIndex=j,e(g,Y),i(p)===null&&Y===i(g)&&(C?(L(N),N=-1):C=!0,ut(B,j-xt))):(Y.sortIndex=St,e(p,Y),b||M||(b=!0,O||(O=!0,$()))),Y},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(Y){var st=S;return function(){var j=S;S=st;try{return Y.apply(this,arguments)}finally{S=j}}}})(dd)),dd}var uv;function QM(){return uv||(uv=1,hd.exports=KM()),hd.exports}var pd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function JM(){if(cv)return Nn;cv=1;var o=Ip();function e(x){var _="https://react.dev/errors/"+x;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)_+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+x+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(x,_,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===h?h:""+M,children:x,containerInfo:_,implementation:S}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(x,_){if(x==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.browser=function(x){return{$$typeof:f,_reason:x}},Nn.createPortal=function(x,_){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return d(x,_,null,S)},Nn.flushSync=function(x){var _=p.T,S=r.p;try{if(p.T=null,r.p=2,x)return x()}finally{p.T=_,r.p=S,r.d.f()}},Nn.preconnect=function(x,_){typeof x=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(x,_))},Nn.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},Nn.preinit=function(x,_){if(typeof x=="string"&&_&&typeof _.as=="string"){var S=_.as,M=g(S,_.crossOrigin),b=typeof _.integrity=="string"?_.integrity:void 0,C=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;S==="style"?r.d.S(x,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:C}):S==="script"&&r.d.X(x,{crossOrigin:M,integrity:b,fetchPriority:C,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Nn.preinitModule=function(x,_){if(typeof x=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var S=g(_.as,_.crossOrigin);r.d.M(x,{crossOrigin:S,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&r.d.M(x)},Nn.preload=function(x,_){if(typeof x=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var S=_.as,M=g(S,_.crossOrigin);r.d.L(x,S,{crossOrigin:M,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Nn.preloadModule=function(x,_){if(typeof x=="string")if(_){var S=g(_.as,_.crossOrigin);r.d.m(x,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:S,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else r.d.m(x)},Nn.requestFormReset=function(x){r.d.r(x)},Nn.unstable_batchedUpdates=function(x,_){return x(_)},Nn.useFormState=function(x,_,S){return p.H.useFormState(x,_,S)},Nn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Nn.version="19.3.1",Nn}var fv;function $M(){if(fv)return pd.exports;fv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),pd.exports=JM(),pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function tE(){if(hv)return cl;hv=1;var o=QM(),e=Ip(),i=$M();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(r(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return p(u),t;if(c===s)return p(u),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=c;else{for(var v=!1,E=u.child;E;){if(E===a){v=!0,a=u,s=c;break}if(E===s){v=!0,s=u,a=c;break}E=E.sibling}if(!v){for(E=c.child;E;){if(E===a){v=!0,a=c,s=u;break}if(E===s){v=!0,s=c,a=u;break}E=E.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function _(t,n,a,s,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&_(t.child,n,a,s,u,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=S(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,s))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var m=null,L=null;function P(t,n,a){return t===a?!0:t===n?(m=t,!0):!1}function A(t,n,a){return t===a?(L=t,!1):t===n?(L!==null&&(m=t),!0):!1}function B(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function O(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var c=n;c;c=a(c))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var N=Object.assign,G=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),lt=Symbol.for("react.profiler"),mt=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),re=Symbol.for("react.legacy_hidden"),Ee=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),ht=Symbol.for("react.recoverable"),J=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Nt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case lt:return"Profiler";case $:return"StrictMode";case st:return"Suspense";case j:return"SuspenseList";case Ht:return"Activity";case H:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case ut:return t.displayName||"Context";case mt:return(t._context.displayName||"Context")+".Consumer";case Y:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return n=t.displayName||null,n!==null?n:Nt(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Nt(t(n))}catch{}}return null}var Rt=Array.isArray,Et=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Oe=[],ae=-1;function Kt(t){return{current:t}}function Lt(t){0>ae||(t.current=Oe[ae],Oe[ae]=null,ae--)}function ie(t,n){ae++,Oe[ae]=t.current,t.current=n}var ft=Kt(null),ee=Kt(null),Te=Kt(null),Be=Kt(null);function U(t,n){switch(ie(Te,n),ie(ee,t),ie(ft,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?d_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=d_(n),t=p_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(ft),ie(ft,t)}function T(){Lt(ft),Lt(ee),Lt(Te)}function nt(t){var n=t.memoizedState;n!==null&&(Pr._currentValue=n.memoizedState,ie(Be,t)),n=ft.current;var a=p_(n,t.type);n!==a&&(ie(ee,t),ie(ft,a))}function gt(t){ee.current===t&&(Lt(ft),Lt(ee)),Be.current===t&&(Lt(Be),Pr._currentValue=I)}var yt,dt;function Xt(t){if(yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);yt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+t+dt}var wt=!1;function jt(t,n){if(!t||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(Ot){var X=Ot}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(Ot){X=Ot}_t=!1;try{var et=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_t=!0,new t}finally{_t&&(et!==void 0?Object.defineProperty(t.prototype,"props",et):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){X=Ot}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(Ot){if(Ot&&X&&typeof Ot.stack=="string")return[Ot.stack,X.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),v=c[0],E=c[1];if(v&&E){var z=v.split(`
`),W=E.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===W.length)for(s=z.length-1,u=W.length-1;1<=s&&0<=u&&z[s]!==W[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==W[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==W[u]){var at=`
`+z[s].replace(" at new "," at ");return t.displayName&&at.includes("<anonymous>")&&(at=at.replace("<anonymous>",t.displayName)),at}while(1<=s&&0<=u);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xt(a):""}function Qt(t,n){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return t.child!==n&&n!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return jt(t.type,!1);case 11:return jt(t.type.render,!1);case 1:return jt(t.type,!0);case 31:return Xt("Activity");case 30:return Xt("ViewTransition");default:return""}}function At(t){try{var n="",a=null;do n+=Qt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Pt=Object.prototype.hasOwnProperty,se=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,ce=o.unstable_requestPaint,k=o.unstable_now,Ct=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,kt=o.unstable_UserBlockingPriority,Tt=o.unstable_NormalPriority,vt=o.unstable_LowPriority,Wt=o.unstable_IdlePriority,ue=o.log,Ye=o.unstable_setDisableYieldValue,be=null,en=null;function mn(t){if(typeof ue=="function"&&Ye(t),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(be,t)}catch{}}var Ln=Math.clz32?Math.clz32:wl,aa=Math.log,xo=Math.LN2;function wl(t){return t>>>=0,t===0?32:31-(aa(t)/xo|0)|0}var ds=256,sa=262144,ps=4194304;function di(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ms(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,c=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~c,s!==0?u=di(s):(v&=E,v!==0?u=di(v):a||(a=E&~t,a!==0&&(u=di(a))))):(E=s&~c,E!==0?u=di(E):v!==0?u=di(v):a||(a=s&~t,a!==0&&(u=di(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Ua(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Dl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Ln(a),u=1<<s;n|=t[s],a&=~u}return n}function zc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ul(){var t=ps;return ps<<=1,(ps&62914560)===0&&(ps=4194304),t}function So(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function gs(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ic(t,n,a,s,u,c){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,W=t.hiddenUpdates;for(a=v&~a;0<a;){var at=31-Ln(a),_t=1<<at;E[at]=0,z[at]=-1;var X=W[at];if(X!==null)for(W[at]=null,at=0;at<X.length;at++){var et=X[at];et!==null&&(et.lane&=-536870913)}a&=~_t}s!==0&&R(t,s,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(v&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ln(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function K(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ln(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function rt(t,n){var a=n&-n;return a=(a&42)!==0?1:ot(a),(a&(t.suspendedLanes|n))!==0?0:a}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Q(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Vt.p;return t!==0?t:(t=window.event,t===void 0?32:Q_(t.type))}function It(t,n){var a=Vt.p;try{return Vt.p=t,n()}finally{Vt.p=a}}var Ft=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Ft,Yt="__reactProps$"+Ft,ne="__reactContainer$"+Ft,$t="__reactEvents$"+Ft,xe="__reactListeners$"+Ft,Fe="__reactHandles$"+Ft,Je="__reactResources$"+Ft,Pe="__reactMarker$"+Ft,Ue="__reactLoad$"+Ft;function te(t){delete t[Dt],delete t[Yt],delete t[xe],delete t[Fe]}function ze(t){var n;if(n=t[Dt])return n;for(var a=t.parentNode;a;){if(n=a[ne]||a[Dt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=U_(t);t!==null;){if(a=t[Dt])return a;t=U_(t)}return n}t=a,a=t.parentNode}return null}function _e(t){if(t=t[Dt]||t[ne]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ei(t){var n=t[Je];return n||(n=t[Je]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ne(t){t[Pe]=!0}function Na(t){t[Ue]=void 0}var Ze=new Set,Fn={};function un(t,n){sn(t,n),sn(t+"Capture",n)}function sn(t,n){for(Fn[t]=n,t=0;t<n.length;t++)Ze.add(n[t])}var On=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Js={},ki={};function cS(t){return Pt.call(ki,t)?!0:Pt.call(Js,t)?!1:On.test(t)?ki[t]=!0:(Js[t]=!0,!1)}var Le=!1;function $p(){var t=Le;return Le=!1,t}function Nl(t,n,a){if(cS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Ll(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ra(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ni(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fS(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,c.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Bc(t){if(!t._valueTracker){var n=tm(t)?"checked":"value";t._valueTracker=fS(t,n,""+t[n])}}function em(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=tm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var hS=/[\n"\\]/g;function pi(t){return t.replace(hS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fc(t,n,a,s,u,c,v,E){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ni(n)):t.value!==""+ni(n)&&(t.value=""+ni(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?v==="number"&&t.value==n?Hc(t,ni(t.value)):Hc(t,ni(n)):a!=null?Hc(t,ni(a)):s!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ni(E):t.removeAttribute("name")}function nm(t,n,a,s,u,c,v,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Bc(t);return}a=a!=null?""+ni(a):"",n=n!=null?""+ni(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Bc(t)}function Hc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function $s(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ni(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function im(t,n,a){if(n!=null&&(n=""+ni(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ni(a):""}function am(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ni(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Bc(t)}function tr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var dS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||dS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function rm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Le=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(sm(t,u,s),Le=!0)}else for(var c in n)n.hasOwnProperty(c)&&sm(t,c,n[c])}function Gc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(t){return mS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var Vc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var er=null,nr=null;function om(t){var n=_e(t);if(n&&(t=n.stateNode)){var a=t[Yt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Fc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Yt]||null;if(!u)throw Error(r(90));Fc(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&em(s)}break t;case"textarea":im(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$s(t,!!a.multiple,n,!1)}}}var Xc=!1;function lm(t,n,a){if(Xc)return t(n,a);Xc=!0;try{var s=t(n);return s}finally{if(Xc=!1,(er!==null||nr!==null)&&(Ou(),er&&(n=er,t=nr,nr=er=null,om(n),t)))for(n=0;n<t.length;n++)om(t[n])}}function yo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Yt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(oa)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Yc=!1}var La=null,qc=null,Pl=null;function um(){if(Pl)return Pl;var t,n=qc,a=n.length,s,u="value"in La?La.value:La.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[c-s];s++);return Pl=u.slice(t,1<s?1-s:void 0)}function zl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function cm(){return!1}function Hn(t){function n(a,s,u,c,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=v,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Il:cm,this.isPropagationStopped=cm,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),n}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Hn(Oa),Eo=N({},Oa,{view:0,detail:0}),gS=Hn(Eo),Wc,jc,To,Fl=N({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(Wc=t.screenX-To.screenX,jc=t.screenY-To.screenY):jc=Wc=0,To=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),fm=Hn(Fl),_S=N({},Fl,{dataTransfer:0}),vS=Hn(_S),xS=N({},Eo,{relatedTarget:0}),Zc=Hn(xS),SS=N({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),yS=Hn(SS),MS=N({},Oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ES=Hn(MS),TS=N({},Oa,{data:0}),hm=Hn(TS),bS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=RS[t])?!!n[t]:!1}function Kc(){return CS}var wS=N({},Eo,{key:function(t){if(t.key){var n=bS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DS=Hn(wS),US=N({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=Hn(US),NS=N({},Oa,{submitter:0}),LS=Hn(NS),OS=N({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),PS=Hn(OS),zS=N({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),IS=Hn(zS),BS=N({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FS=Hn(BS),HS=N({},Oa,{newState:0,oldState:0,source:0}),GS=Hn(HS),VS=[9,13,27,32],Qc=oa&&"CompositionEvent"in window,bo=null;oa&&"documentMode"in document&&(bo=document.documentMode);var kS=oa&&"TextEvent"in window&&!bo,pm=oa&&(!Qc||bo&&8<bo&&11>=bo),mm=" ",gm=!1;function _m(t,n){switch(t){case"keyup":return VS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ir=!1;function XS(t,n){switch(t){case"compositionend":return vm(n);case"keypress":return n.which!==32?null:(gm=!0,mm);case"textInput":return t=n.data,t===mm&&gm?null:t;default:return null}}function YS(t,n){if(ir)return t==="compositionend"||!Qc&&_m(t,n)?(t=um(),Pl=qc=La=null,ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pm&&n.locale!=="ko"?null:n.data;default:return null}}var qS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!qS[t.type]:n==="textarea"}function Sm(t,n,a,s){er?nr?nr.push(s):nr=[s]:er=s,n=Hu(n,"onChange"),0<n.length&&(a=new Bl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ao=null,Ro=null;function WS(t){o_(t,0)}function Hl(t){var n=gn(t);if(em(n))return t}function ym(t,n){if(t==="change")return n}var Mm=!1;if(oa){var Jc;if(oa){var $c="oninput"in document;if(!$c){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),$c=typeof Em.oninput=="function"}Jc=$c}else Jc=!1;Mm=Jc&&(!document.documentMode||9<document.documentMode)}function Tm(){Ao&&(Ao.detachEvent("onpropertychange",bm),Ro=Ao=null)}function bm(t){if(t.propertyName==="value"&&Hl(Ro)){var n=[];Sm(n,Ro,t,kc(t)),lm(WS,n)}}function jS(t,n,a){t==="focusin"?(Tm(),Ao=n,Ro=a,Ao.attachEvent("onpropertychange",bm)):t==="focusout"&&Tm()}function ZS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Ro)}function KS(t,n){if(t==="click")return Hl(n)}function QS(t,n){if(t==="input"||t==="change")return Hl(n)}function JS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:JS;function Co(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Pt.call(n,u)||!ii(t[u],n[u]))return!1}return!0}function tf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rm(t,n){var a=Am(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Am(a)}}function Cm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Cm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function wm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=tf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=tf(t.document)}return n}function ef(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $S=oa&&"documentMode"in document&&11>=document.documentMode,ar=null,nf=null,wo=null,af=!1;function Dm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;af||ar==null||ar!==tf(s)||(s=ar,"selectionStart"in s&&ef(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),wo&&Co(wo,s)||(wo=s,s=Hu(nf,"onSelect"),0<s.length&&(n=new Bl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ar)))}function _s(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var sr={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},sf={},Um={};oa&&(Um=document.createElement("div").style,"AnimationEvent"in window||(delete sr.animationend.animation,delete sr.animationiteration.animation,delete sr.animationstart.animation),"TransitionEvent"in window||delete sr.transitionend.transition);function vs(t){if(sf[t])return sf[t];if(!sr[t])return t;var n=sr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Um)return sf[t]=n[a];return t}var Nm=vs("animationend"),Lm=vs("animationiteration"),Om=vs("animationstart"),ty=vs("transitionrun"),ey=vs("transitionstart"),ny=vs("transitioncancel"),Pm=vs("transitionend"),zm=new Map,rf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rf.push("scrollEnd");function Ri(t,n){zm.set(t,n),un(n,[t])}var iy=0;function la(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ui.identifierPrefix;var a=iy++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Im(t){if(t==null||typeof t=="string")return t;var n=null,a=br;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ua(t,n){return t=Im(t),n=Im(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],rr=0,of=0;function Vl(){for(var t=rr,n=of=rr=0;n<t;){var a=mi[n];mi[n++]=null;var s=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var c=mi[n];if(mi[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}c!==0&&Bm(a,u,c)}}function kl(t,n,a,s){mi[rr++]=t,mi[rr++]=n,mi[rr++]=a,mi[rr++]=s,of|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function lf(t,n,a,s){return kl(t,n,a,s),Xl(t)}function xs(t,n){return kl(t,null,null,n),Xl(t)}function Bm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-Ln(a),t=c.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),c):null}function Xl(t){if(50<Qo)throw Qo=0,Lu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var or={};function ay(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,s){return new ay(t,n,a,s)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ca(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yl(t,n,a,s,u,c){var v=0;if(s=t,typeof s=="function")uf(s)&&(v=1);else if(typeof s=="string")v=NM(t,a,ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ht:return t=Wn(31,a,n,u),t.elementType=Ht,t.lanes=c,t;case F:return Ss(a.children,u,c,n);case $:v=8,u|=24;break;case lt:return t=Wn(12,a,n,u|2),t.elementType=lt,t.lanes=c,t;case st:return t=Wn(13,a,n,u),t.elementType=st,t.lanes=c,t;case j:return t=Wn(19,a,n,u),t.elementType=j,t.lanes=c,t;case re:case H:return t=u|32,t=Wn(30,a,n,t),t.elementType=H,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ut:v=10;break t;case mt:v=9;break t;case Y:v=11;break t;case xt:v=14;break t;case St:v=16,s=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Wn(v,a,n,u),n.elementType=t,n.type=s,n.lanes=c,n}function Ss(t,n,a,s){return t=Wn(7,t,s,n),t.lanes=a,t}function cf(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Hm(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function ff(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Gm=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var a=Gm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:At(n)},Gm.set(t,n),n)}return{value:t,source:n,stack:At(n)}}var lr=[],ur=0,ql=null,Do=0,_i=[],vi=0,Pa=null,Yi=1,qi="";function fa(t,n){lr[ur++]=Do,lr[ur++]=ql,ql=t,Do=n}function Vm(t,n,a){_i[vi++]=Yi,_i[vi++]=qi,_i[vi++]=Pa,Pa=t;var s=Yi;t=qi;var u=32-Ln(s)-1;s&=~(1<<u),a+=1;var c=32-Ln(n)+u;if(30<c){var v=u-u%5;c=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Yi=1<<32-Ln(n)+u|a<<u|s,qi=c+t}else Yi=1<<c|a<<u|s,qi=t}function Wl(t){t.return!==null&&(fa(t,1),Vm(t,1,0))}function hf(t){for(;t===ql;)ql=lr[--ur],lr[ur]=null,Do=lr[--ur],lr[ur]=null;for(;t===Pa;)Pa=_i[--vi],_i[vi]=null,qi=_i[--vi],_i[vi]=null,Yi=_i[--vi],_i[vi]=null}function km(t,n){_i[vi++]=Yi,_i[vi++]=qi,_i[vi++]=Pa,Yi=n.id,qi=n.overflow,Pa=t}var Sn=null,Ke=null,ve=!1,za=null,xi=!1,df=Error(r(519));function Ia(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uo(gi(n,t)),df}function Xm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Dt]=t,n[Yt]=s,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<$o.length;a++)ye($o[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),nm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),am(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||f_(n.textContent,a)?(s.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),s.onScroll!=null&&ye("scroll",n),s.onScrollEnd!=null&&ye("scrollend",n),s.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ia(t,!0)}function jl(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Sn=Sn.return}}function cr(t){if(t!==Sn)return!1;if(!ve)return jl(t),ve=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||kh(t.type,t.memoizedProps)),a=!a),a&&Ke&&Ia(t),jl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=D_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=D_(t)}else n===27?(n=Ke,$a(t.type)?(t=Jh,Jh=null,Ke=t):Ke=n):Ke=Sn?yi(t.stateNode.nextSibling):null;return!0}function ys(){Ke=Sn=null,ve=!1}function pf(){var t=za;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),za=null),t}function Uo(t){za===null?za=[t]:za.push(t)}var mf=Kt(null),Ms=null,ha=null;function Ba(t,n,a){ie(mf,n._currentValue),n._currentValue=a}function da(t){t._currentValue=mf.current,Lt(mf)}function Zl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function gf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var v=u.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=u;for(var z=0;z<n.length;z++)if(E.context===n[z]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),Zl(c.return,a,t),s||(v=null);break t}c=E.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,c=v.alternate,c!==null&&(c.lanes|=a),Zl(v,a,t),v=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),Zl(u.return,a,t),v=u.child,v=v!==null?v.sibling:null):v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Es(t,n,a,s){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var E=u.type;ii(u.pendingProps.value,v.value)||(t!==null?t.push(E):t=[E])}}else if(u===Be.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Pr):t=[Pr])}u=u.return}return t!==null&&gf(n,t,a,s),n.flags|=262144,t!==null}function Kl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ts(t){Ms=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Ym(Ms,t)}function Ql(t,n){return Ms===null&&Ts(t),Ym(t,n)}function Ym(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ha===null){if(t===null)throw Error(r(308));ha=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ha=ha.next=n;return a}var sy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ry=o.unstable_scheduleCallback,oy=o.unstable_NormalPriority,cn={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _f(){return{controller:new sy,data:new Map,refCount:0}}function No(t){t.refCount--,t.refCount===0&&ry(oy,function(){t.controller.abort()})}function qm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Lo=null;function ly(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Oo=null,vf=0,bs=0,fr=null;function uy(t,n){if(Oo===null){var a=Oo=[];vf=0,bs=Oh(),fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return vf++,n.then(Wm,Wm),n}function Wm(){if(--vf===0&&(Lo=null,Oo!==null)){fr!==null&&(fr.status="fulfilled");var t=Oo;Oo=null,bs=0,fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cy(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var jm=Et.S;Et.S=function(t,n){if(H0=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uy(t,n),Lo!==null)for(var a=wr;a!==null;)qm(a,Lo),a=a.next;if(a=t.types,a!==null){for(var s=wr;s!==null;)qm(s,a),s=s.next;if(bs!==0){s=Lo,s===null&&(s=Lo=[]);for(var u=0;u<a.length;u++){var c=a[u];s.indexOf(c)===-1&&s.push(c)}}}jm!==null&&jm(t,n)};var As=Kt(null);function xf(){var t=As.current;return t!==null?t:je.pooledCache}function Jl(t,n){n===null?ie(As,As.current):ie(As,n.pool)}function Zm(){var t=xf();return t===null?null:{parent:cn._currentValue,pool:t}}var hr=Error(r(460)),Sf=Error(r(474)),$l=Error(r(542)),tu={then:function(){}};function Km(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Qm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$m(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=je,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,$m(t),t}throw Cs=n,hr}}function Rs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,hr):a}}var Cs=null;function Jm(){if(Cs===null)throw Error(r(459));var t=Cs;return Cs=null,t}function $m(t){if(t===hr||t===$l)throw Error(r(483))}var dr=null,Po=0;function eu(t){var n=Po;return Po+=1,dr===null&&(dr=[]),Qm(dr,t,n)}function Fa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function nu(t,n){throw n.$$typeof===G?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function tg(t){function n(q,V){if(t){var tt=q.deletions;tt===null?(q.deletions=[V],q.flags|=16):tt.push(V)}}function a(q,V){if(!t)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function s(q){for(var V=new Map;q!==null;)q.key===null?V.set(q.index,q):V.set(q.key,q),q=q.sibling;return V}function u(q,V){return q=ca(q,V),q.index=0,q.sibling=null,q}function c(q,V,tt){return q.index=tt,t?(tt=q.alternate,tt!==null?(tt=tt.index,tt<V?(q.flags|=2,V):tt):(q.flags|=134217730,V)):(q.flags|=1048576,V)}function v(q){return t&&q.alternate===null&&(q.flags|=134217730),q}function E(q,V,tt,pt){return V===null||V.tag!==6?(V=cf(tt,q.mode,pt),V.return=q,V):(V=u(V,tt),V.return=q,V)}function z(q,V,tt,pt){var Gt=tt.type;return Gt===F?(q=at(q,V,tt.props.children,pt,tt.key),Fa(q,tt),q):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===St&&Rs(Gt)===V.type)?(V=u(V,tt.props),Fa(V,tt),V.return=q,V):(V=Yl(tt.type,tt.key,tt.props,null,q.mode,pt),Fa(V,tt),V.return=q,V)}function W(q,V,tt,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=ff(tt,q.mode,pt),V.return=q,V):(V=u(V,tt.children||[]),V.return=q,V)}function at(q,V,tt,pt,Gt){return V===null||V.tag!==7?(V=Ss(tt,q.mode,pt,Gt),V.return=q,V):(V=u(V,tt),V.return=q,V)}function _t(q,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=cf(""+V,q.mode,tt),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case D:return tt=Yl(V.type,V.key,V.props,null,q.mode,tt),Fa(tt,V),tt.return=q,tt;case w:return V=ff(V,q.mode,tt),V.return=q,V;case St:return V=Rs(V),_t(q,V,tt)}if(Rt(V)||it(V))return V=Ss(V,q.mode,tt,null),V.return=q,V;if(typeof V.then=="function")return _t(q,eu(V),tt);if(V.$$typeof===ut)return _t(q,Ql(q,V),tt);nu(q,V)}return null}function X(q,V,tt,pt){var Gt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Gt!==null?null:E(q,V,""+tt,pt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case D:return tt.key===Gt?z(q,V,tt,pt):null;case w:return tt.key===Gt?W(q,V,tt,pt):null;case St:return tt=Rs(tt),X(q,V,tt,pt)}if(Rt(tt)||it(tt))return Gt!==null?null:at(q,V,tt,pt,null);if(typeof tt.then=="function")return X(q,V,eu(tt),pt);if(tt.$$typeof===ut)return X(q,V,Ql(q,tt),pt);nu(q,tt)}return null}function et(q,V,tt,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(tt)||null,E(V,q,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case D:return q=q.get(pt.key===null?tt:pt.key)||null,z(V,q,pt,Gt);case w:return q=q.get(pt.key===null?tt:pt.key)||null,W(V,q,pt,Gt);case St:return pt=Rs(pt),et(q,V,tt,pt,Gt)}if(Rt(pt)||it(pt))return q=q.get(tt)||null,at(V,q,pt,Gt,null);if(typeof pt.then=="function")return et(q,V,tt,eu(pt),Gt);if(pt.$$typeof===ut)return et(q,V,tt,Ql(V,pt),Gt);nu(V,pt)}return null}function Ot(q,V,tt,pt){for(var Gt=null,Re=null,Jt=V,oe=V=0,dn=null;Jt!==null&&oe<tt.length;oe++){Jt.index>oe?(dn=Jt,Jt=null):dn=Jt.sibling;var we=X(q,Jt,tt[oe],pt);if(we===null){Jt===null&&(Jt=dn);break}t&&Jt&&we.alternate===null&&n(q,Jt),V=c(we,V,oe),Re===null?Gt=we:Re.sibling=we,Re=we,Jt=dn}if(oe===tt.length)return a(q,Jt),ve&&fa(q,oe),Gt;if(Jt===null){for(;oe<tt.length;oe++)Jt=_t(q,tt[oe],pt),Jt!==null&&(V=c(Jt,V,oe),Re===null?Gt=Jt:Re.sibling=Jt,Re=Jt);return ve&&fa(q,oe),Gt}for(Jt=s(Jt);oe<tt.length;oe++)dn=et(Jt,q,oe,tt[oe],pt),dn!==null&&(t&&(we=dn.alternate,we!==null&&Jt.delete(we.key===null?oe:we.key)),V=c(dn,V,oe),Re===null?Gt=dn:Re.sibling=dn,Re=dn);return t&&Jt.forEach(function(as){return n(q,as)}),ve&&fa(q,oe),Gt}function qt(q,V,tt,pt){if(tt==null)throw Error(r(151));for(var Gt=null,Re=null,Jt=V,oe=V=0,dn=null,we=tt.next();Jt!==null&&!we.done;oe++,we=tt.next()){Jt.index>oe?(dn=Jt,Jt=null):dn=Jt.sibling;var as=X(q,Jt,we.value,pt);if(as===null){Jt===null&&(Jt=dn);break}t&&Jt&&as.alternate===null&&n(q,Jt),V=c(as,V,oe),Re===null?Gt=as:Re.sibling=as,Re=as,Jt=dn}if(we.done)return a(q,Jt),ve&&fa(q,oe),Gt;if(Jt===null){for(;!we.done;oe++,we=tt.next())we=_t(q,we.value,pt),we!==null&&(V=c(we,V,oe),Re===null?Gt=we:Re.sibling=we,Re=we);return ve&&fa(q,oe),Gt}for(Jt=s(Jt);!we.done;oe++,we=tt.next())we=et(Jt,q,oe,we.value,pt),we!==null&&(t&&(dn=we.alternate,dn!==null&&Jt.delete(dn.key===null?oe:dn.key)),V=c(we,V,oe),Re===null?Gt=we:Re.sibling=we,Re=we);return t&&Jt.forEach(function(XM){return n(q,XM)}),ve&&fa(q,oe),Gt}function de(q,V,tt,pt){if(typeof tt=="object"&&tt!==null&&tt.type===F&&tt.key===null&&tt.props.ref===void 0&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case D:t:{for(var Gt=tt.key;V!==null;){if(V.key===Gt){if(Gt=tt.type,Gt===F){if(V.tag===7){a(q,V.sibling),pt=u(V,tt.props.children),Fa(pt,tt),pt.return=q,q=pt;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===St&&Rs(Gt)===V.type){a(q,V.sibling),pt=u(V,tt.props),Fa(pt,tt),pt.return=q,q=pt;break t}a(q,V);break}else n(q,V);V=V.sibling}tt.type===F?(pt=Ss(tt.props.children,q.mode,pt,tt.key),Fa(pt,tt),pt.return=q,q=pt):(pt=Yl(tt.type,tt.key,tt.props,null,q.mode,pt),Fa(pt,tt),pt.return=q,q=pt)}return v(q);case w:t:{for(Gt=tt.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(q,V.sibling),pt=u(V,tt.children||[]),pt.return=q,q=pt;break t}else{a(q,V);break}else n(q,V);V=V.sibling}pt=ff(tt,q.mode,pt),pt.return=q,q=pt}return v(q);case St:return tt=Rs(tt),de(q,V,tt,pt)}if(Rt(tt))return Ot(q,V,tt,pt);if(it(tt)){if(Gt=it(tt),typeof Gt!="function")throw Error(r(150));return tt=Gt.call(tt),qt(q,V,tt,pt)}if(typeof tt.then=="function")return de(q,V,eu(tt),pt);if(tt.$$typeof===ut)return de(q,V,Ql(q,tt),pt);nu(q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(q,V.sibling),pt=u(V,tt),pt.return=q,q=pt):(a(q,V),pt=cf(tt,q.mode,pt),pt.return=q,q=pt),v(q)):a(q,V)}return function(q,V,tt,pt){try{Po=0;var Gt=de(q,V,tt,pt);return dr=null,Gt}catch(Jt){if(Jt===hr||Jt===$l)throw Jt;var Re=Wn(29,Jt,null,q.mode);return Re.lanes=pt,Re.return=q,Re}finally{}}}var ws=tg(!0),eg=tg(!1),Ha=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ie&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Xl(t),Bm(t,null,a),n}return kl(t,s,n,a),Xl(t)}function zo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,K(t,a)}}function Ef(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=v:c=c.next=v,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Tf=!1;function Io(){if(Tf){var t=fr;if(t!==null)throw t}}function Bo(t,n,a,s){Tf=!1;var u=t.updateQueue;Ha=!1;var c=u.firstBaseUpdate,v=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var z=E,W=z.next;z.next=null,v===null?c=W:v.next=W,v=z;var at=t.alternate;at!==null&&(at=at.updateQueue,E=at.lastBaseUpdate,E!==v&&(E===null?at.firstBaseUpdate=W:E.next=W,at.lastBaseUpdate=z))}if(c!==null){var _t=u.baseState;v=0,at=W=z=null,E=c;do{var X=E.lane&-536870913,et=X!==E.lane;if(et?(Ae&X)===X:(s&X)===X){X!==0&&X===bs&&(Tf=!0),at!==null&&(at=at.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ot=t,qt=E;X=n;var de=a;switch(qt.tag){case 1:if(Ot=qt.payload,typeof Ot=="function"){_t=Ot.call(de,_t,X);break t}_t=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=qt.payload,X=typeof Ot=="function"?Ot.call(de,_t,X):Ot,X==null)break t;_t=N({},_t,X);break t;case 2:Ha=!0}}X=E.callback,X!==null&&(t.flags|=64,et&&(t.flags|=8192),et=u.callbacks,et===null?u.callbacks=[X]:et.push(X))}else et={lane:X,tag:E.tag,payload:E.payload,callback:E.callback,next:null},at===null?(W=at=et,z=_t):at=at.next=et,v|=X;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;et=E,E=et.next,et.next=null,u.lastBaseUpdate=et,u.shared.pending=null}}while(!0);at===null&&(z=_t),u.baseState=z,u.firstBaseUpdate=W,u.lastBaseUpdate=at,c===null&&(u.shared.lanes=0),Za|=v,t.lanes=v,t.memoizedState=_t}}function ng(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function ig(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ng(a[t],n)}var ka=Kt(null),iu=Kt(0);function ag(t,n){t=va,ie(iu,t),ie(ka,n),va=t|n.baseLanes}function bf(){ie(iu,va),ie(ka,ka.current)}function Af(){va=iu.current,Lt(ka),Lt(iu)}var Cn=Kt(null),Pn=null;function Xa(t){var n=t.alternate;ie(wn,wn.current&1),ie(Cn,t),Pn===null&&(n===null||ka.current!==null||n.memoizedState!==null)&&(Pn=t)}function Rf(t){ie(wn,wn.current),ie(Cn,t),Pn===null&&(Pn=t)}function sg(t){t.tag===22?(ie(wn,wn.current),ie(Cn,t),Pn===null&&(Pn=t)):Ya()}function Ya(){ie(wn,wn.current),ie(Cn,Cn.current)}function ai(t){Lt(Cn),Pn===t&&(Pn=null),Lt(wn)}var wn=Kt(0);function Fo(t,n){ie(Cn,Cn.current),ie(wn,n)}function Cf(t){Lt(wn),Lt(Cn),Pn===t&&(Pn=null)}function au(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Kh(a)||Qh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pa=0,he=null,qe=null,fn=null,su=!1,pr=!1,Ds=!1,ru=0,Ho=0,mr=null,fy=0;function rn(){throw Error(r(321))}function wf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function Df(t,n,a,s,u,c){return pa=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.H=t===null||t.memoizedState===null?Vg:kg,Ds=!1,c=a(s,u),Ds=!1,pr&&(c=og(n,a,s,u)),rg(t),c}function rg(t){Et.H=du;var n=qe!==null&&qe.next!==null;if(pa=0,fn=qe=he=null,su=!1,Ho=0,mr=null,n)throw Error(r(300));t===null||hn||(t=t.dependencies,t!==null&&Kl(t)&&(hn=!0))}function og(t,n,a,s){he=t;var u=0;do{if(pr&&(mr=null),Ho=0,pr=!1,25<=u)throw Error(r(301));if(u+=1,fn=qe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Et.H=xy,c=n(a,s)}while(pr);return c}function hy(){var t=Et.H,n=t.useState()[0];return n=typeof n.then=="function"?Go(n):n,t=t.useState()[0],(qe!==null?qe.memoizedState:null)!==t&&(he.flags|=1024),n}function Uf(){var t=ru!==0;return ru=0,t}function Nf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Lf(t){if(su){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}su=!1}pa=0,fn=qe=he=null,pr=!1,Ho=ru=0,mr=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?he.memoizedState=fn=t:fn=fn.next=t,fn}function ln(){if(qe===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var n=fn===null?he.memoizedState:fn.next;if(n!==null)fn=n,qe=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},fn===null?he.memoizedState=fn=t:fn=fn.next=t}return fn}function ou(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(t){var n=Ho;return Ho+=1,mr===null&&(mr=[]),t=Qm(mr,t,n),n=he,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,Et.H=n===null||n.memoizedState===null?Vg:kg),t}function lu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Go(t);if(t.$$typeof===ht)return;if(t.$$typeof===ut)return Rn(t)}throw Error(r(438,String(t)))}function Of(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ou(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=Ee;return n.index++,a}function ma(t,n){return typeof n=="function"?n(t):n}function uu(t){var n=ln();return Pf(n,qe,t)}function Pf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,c=s.pending;if(c!==null){if(u!==null){var v=u.next;u.next=c.next,c.next=v}n.baseQueue=u=c,s.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var E=v=null,z=null,W=n,at=!1;do{var _t=W.lane&-536870913;if(_t!==W.lane?(Ae&_t)===_t:(pa&_t)===_t){var X=W.revertLane;if(X===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),_t===bs&&(at=!0);else if((pa&X)===X){W=W.next,X===bs&&(at=!0);continue}else _t={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},z===null?(E=z=_t,v=c):z=z.next=_t,he.lanes|=X,Za|=X;_t=W.action,Ds&&a(c,_t),c=W.hasEagerState?W.eagerState:a(c,_t)}else X={lane:_t,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},z===null?(E=z=X,v=c):z=z.next=X,he.lanes|=_t,Za|=_t;W=W.next}while(W!==null&&W!==n);if(z===null?v=c:z.next=E,!ii(c,t.memoizedState)&&(hn=!0,at&&(a=fr,a!==null)))throw a;t.memoizedState=c,t.baseState=v,t.baseQueue=z,s.lastRenderedState=c}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function zf(t){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do c=t(c,v.action),v=v.next;while(v!==u);ii(c,n.memoizedState)||(hn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function lg(t,n,a){var s=he,u=ln(),c=ve;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ii((qe||u).memoizedState,a);if(v&&(u.memoizedState=a,hn=!0),u=u.queue,Ff(fg.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||v||fn!==null&&(fn.memoizedState.tag&1)!==0,gr(t?9:8,{destroy:void 0},cg.bind(null,s,u,a,n),null),t){if(s.flags|=2048,je===null)throw Error(r(349));c||(pa&127)!==0||ug(s,n,a)}return a}function ug(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=ou(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function cg(t,n,a,s){n.value=a,n.getSnapshot=s,hg(n)&&dg(t)}function fg(t,n,a){return a(function(){hg(n)&&dg(t)})}function hg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function dg(t){var n=xs(t,2);n!==null&&Qn(n,t,2)}function If(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),Ds){mn(!0);try{a()}finally{mn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},n}function pg(t,n,a,s){return t.baseState=a,Pf(t,qe,typeof s=="function"?s:ma)}function dy(t,n,a,s,u){if(hu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){c.listeners.push(v)}};Et.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,mg(n,c)):(c.next=a.next,n.pending=a.next=c)}}function mg(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var c=Et.T,v={};v.types=c!==null?c.types:null,Et.T=v;try{var E=a(u,s),z=Et.S;z!==null&&z(v,E),gg(t,n,E)}catch(W){Bf(t,n,W)}finally{c!==null&&v.types!==null&&(c.types=v.types),Et.T=c}}else try{c=a(u,s),gg(t,n,c)}catch(W){Bf(t,n,W)}}function gg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){_g(t,n,s)},function(s){return Bf(t,n,s)}):_g(t,n,a)}function _g(t,n,a){n.status="fulfilled",n.value=a,vg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,mg(t,a)))}function Bf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,vg(n),n=n.next;while(n!==s)}t.action=null}function vg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function xg(t,n){return n}function Sg(t,n){if(ve){var a=je.formState;if(a!==null){t:{var s=he;if(ve){if(Ke){e:{for(var u=Ke,c=xi;u.nodeType!==8;){if(!c){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Ke=yi(u.nextSibling),s=u.data==="F!";break t}}Ia(s)}s=!1}s&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xg,lastRenderedState:n},a.queue=s,a=Fg.bind(null,he,s),s.dispatch=a,s=If(!1),c=Xf.bind(null,he,!1,s.queue),s=Gn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=dy.bind(null,he,u,c,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function yg(t){var n=ln();return Mg(n,qe,t)}function Mg(t,n,a){if(n=Pf(t,n,xg)[0],t=uu(ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Go(n)}catch(v){throw v===hr?$l:v}else s=n;n=ln();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,gr(9,{destroy:void 0},py.bind(null,u,a),null)),[s,c,t]}function py(t,n){t.action=n}function Eg(t){var n=ln(),a=qe;if(a!==null)return Mg(n,a,t);ln(),n=n.memoizedState,a=ln();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function gr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=ou(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Tg(){return ln().memoizedState}function cu(t,n,a,s){var u=Gn();he.flags|=t,u.memoizedState=gr(1|n,{destroy:void 0},a,s===void 0?null:s)}function fu(t,n,a,s){var u=ln();s=s===void 0?null:s;var c=u.memoizedState.inst;qe!==null&&s!==null&&wf(s,qe.memoizedState.deps)?u.memoizedState=gr(n,c,a,s):(he.flags|=t,u.memoizedState=gr(1|n,c,a,s))}function bg(t,n){cu(8390656,8,t,n)}function Ff(t,n){fu(2048,8,t,n)}function my(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=ou(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ag(t){var n=ln().memoizedState;return my({ref:n,nextImpl:t}),function(){if((Ie&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Rg(t,n){return fu(4,2,t,n)}function Cg(t,n){return fu(4,4,t,n)}function wg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Dg(t,n,a){a=a!=null?a.concat([t]):null,fu(4,4,wg.bind(null,n,t),a)}function Hf(){}function Ug(t,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&wf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Ng(t,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&wf(n,s[1]))return s[0];if(s=t(),Ds){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[s,n],s}function Gf(t,n,a){return a===void 0||(pa&1073741824)!==0&&(Ae&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=V0(),he.lanes|=t,Za|=t,a)}function Lg(t,n,a,s){return ii(a,n)?a:ka.current!==null?(t=Gf(t,a,s),ii(t,n)||(hn=!0),t):(pa&106)===0||(pa&1073741824)!==0&&(Ae&261930)===0?(hn=!0,t.memoizedState=a):(t=V0(),he.lanes|=t,Za|=t,n)}function Og(t,n,a,s,u){var c=Vt.p;Vt.p=c!==0&&8>c?c:8;var v=Et.T,E={};E.types=v!==null?v.types:null,Et.T=E,Xf(t,!1,n,a);try{var z=u(),W=Et.S;if(W!==null&&W(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var at=cy(z,s);Vo(t,n,at,li(t))}else Vo(t,n,s,li(t))}catch(_t){Vo(t,n,{then:function(){},status:"rejected",reason:_t},li())}finally{Vt.p=c,v!==null&&E.types!==null&&(v.types=E.types),Et.T=v}}function gy(){}function Vf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Pg(t).queue;Og(t,u,n,I,a===null?gy:function(){return zg(t),a(s)})}function Pg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:I},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function zg(t){var n=Pg(t);n.next===null&&(n=t.alternate.memoizedState),Vo(t,n.next.queue,{},li())}function kf(){return Rn(Pr)}function Ig(){return ln().memoizedState}function Bg(){return ln().memoizedState}function _y(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();t=Ga(a);var s=Va(n,t,a);s!==null&&(Qn(s,n,a),zo(s,n,a)),n={cache:_f()},t.payload=n;return}n=n.return}}function vy(t,n,a){var s=li();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hu(t)?Hg(n,a):(a=lf(t,n,a,s),a!==null&&(Qn(a,t,s),Gg(a,n,s)))}function Fg(t,n,a){var s=li();Vo(t,n,a,s)}function Vo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hu(t))Hg(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var v=n.lastRenderedState,E=c(v,a);if(u.hasEagerState=!0,u.eagerState=E,ii(E,v))return kl(t,n,u,0),je===null&&Vl(),!1}catch{}finally{}if(a=lf(t,n,u,s),a!==null)return Qn(a,t,s),Gg(a,n,s),!0}return!1}function Xf(t,n,a,s){if(s={lane:2,revertLane:Oh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hu(t)){if(n)throw Error(r(479))}else n=lf(t,a,s,2),n!==null&&Qn(n,t,2)}function hu(t){var n=t.alternate;return t===he||n!==null&&n===he}function Hg(t,n){pr=su=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Gg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,K(t,a)}}var du={readContext:Rn,use:lu,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn,useEffectEvent:rn},Vg={readContext:Rn,use:lu,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:bg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cu(4194308,4,wg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cu(4194308,4,t,n)},useInsertionEffect:function(t,n){cu(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var s=t();if(Ds){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Gn();if(a!==void 0){var u=a(n);if(Ds){mn(!0);try{a(n)}finally{mn(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=vy.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=If(t);var n=t.queue,a=Fg.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Hf,useDeferredValue:function(t,n){var a=Gn();return Gf(a,t,n)},useTransition:function(){var t=If(!1);return t=Og.bind(null,he,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,u=Gn();if(ve){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(Ae&127)!==0||ug(s,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,bg(fg.bind(null,s,c,t),[t]),s.flags|=2048,gr(9,{destroy:void 0},cg.bind(null,s,c,a,n),null),a},useId:function(){var t=Gn(),n=je.identifierPrefix;if(ve){var a=qi,s=Yi;a=(s&~(1<<32-Ln(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ru++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:kf,useFormState:Sg,useActionState:Sg,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Xf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Of,useCacheRefresh:function(){return Gn().memoizedState=_y.bind(null,he)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},kg={readContext:Rn,use:lu,useCallback:Ug,useContext:Rn,useEffect:Ff,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Ng,useReducer:uu,useRef:Tg,useState:function(){return uu(ma)},useDebugValue:Hf,useDeferredValue:function(t,n){var a=ln();return Lg(a,qe.memoizedState,t,n)},useTransition:function(){var t=uu(ma)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Go(t),n]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:kf,useFormState:yg,useActionState:yg,useOptimistic:function(t,n){var a=ln();return pg(a,qe,t,n)},useMemoCache:Of,useCacheRefresh:Bg,useEffectEvent:Ag},xy={readContext:Rn,use:lu,useCallback:Ug,useContext:Rn,useEffect:Ff,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Cg,useMemo:Ng,useReducer:zf,useRef:Tg,useState:function(){return zf(ma)},useDebugValue:Hf,useDeferredValue:function(t,n){var a=ln();return qe===null?Gf(a,t,n):Lg(a,qe.memoizedState,t,n)},useTransition:function(){var t=zf(ma)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Go(t),n]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:kf,useFormState:Eg,useActionState:Eg,useOptimistic:function(t,n){var a=ln();return qe!==null?pg(a,qe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Of,useCacheRefresh:Bg,useEffectEvent:Ag};function Yf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:N({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=li(),u=Ga(s);u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,s),n!==null&&(Qn(n,t,s),zo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=li(),u=Ga(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,s),n!==null&&(Qn(n,t,s),zo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=li(),s=Ga(a);s.tag=2,n!=null&&(s.callback=n),n=Va(t,s,a),n!==null&&(Qn(n,t,a),zo(n,t,a))}};function Xg(t,n,a,s,u,c,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,v):n.prototype&&n.prototype.isPureReactComponent?!Co(a,s)||!Co(u,c):!0}function Yg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&qf.enqueueReplaceState(n,n.state,null)}function Us(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=N({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function qg(t){Gl(t)}function Wg(t){console.error(t)}function jg(t){Gl(t)}function pu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Zg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Wf(t,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){pu(t,n)},a}function Kg(t){return t=Ga(t),t.tag=3,t}function Qg(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;t.payload=function(){return u(c)},t.callback=function(){Zg(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Zg(n,a,s),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function Sy(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Es(n,a,u,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?Pu():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===tu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Uh(t,s,u)),!1;case 22:return a.flags|=65536,s===tu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Uh(t,s,u)),!1}throw Error(r(435,a.tag))}return Uh(t,s,u),Pu(),!1}if(ve)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==df&&(t=Error(r(422),{cause:s}),Uo(gi(t,a)))):(s!==df&&(n=Error(r(423),{cause:s}),Uo(gi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=gi(s,a),u=Wf(t.stateNode,s,u),Ef(t,u),on!==4&&(on=2)),!1;var c=Error(r(520),{cause:s});if(c=gi(c,a),Ko===null?Ko=[c]:Ko.push(c),on!==4&&(on=2),n===null)return!0;s=gi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Wf(a.stateNode,s,t),Ef(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ka===null||!Ka.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Kg(u),Qg(u,t,a,s),Ef(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var jf=Error(r(461)),hn=!1;function _n(t,n,a,s){n.child=t===null?eg(n,null,a,s):ws(n,t.child,a,s)}function Jg(t,n,a,s,u){a=a.render;var c=n.ref;if("ref"in s){var v={};for(var E in s)E!=="ref"&&(v[E]=s[E])}else v=s;return Ts(n),s=Df(t,n,a,v,c,u),E=Uf(),t!==null&&!hn?(Nf(t,n,u),ga(t,n,u)):(ve&&E&&Wl(n),n.flags|=1,_n(t,n,s,u),n.child)}function $g(t,n,a,s,u){if(t===null){var c=a.type;return typeof c=="function"&&!uf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,t0(t,n,c,s,u)):(t=Yl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!nh(t,u)){var v=c.memoizedProps;if(a=a.compare,a=a!==null?a:Co,a(v,s)&&t.ref===n.ref)return ga(t,n,u)}return n.flags|=1,t=ca(c,s),t.ref=n.ref,t.return=n,n.child=t}function t0(t,n,a,s,u){if(t!==null){var c=t.memoizedProps;if(Co(c,s)&&t.ref===n.ref)if(hn=!1,n.pendingProps=s=c,nh(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,ga(t,n,u)}return Zf(t,n,a,s,u)}function e0(t,n,a,s){var u=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,n.child=null;return n0(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jl(n,c!==null?c.cachePool:null),c!==null?ag(n,c):bf(),sg(n);else return s=n.lanes=536870912,n0(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(Jl(n,c.cachePool),ag(n,c),Ya(),n.memoizedState=null):(t!==null&&Jl(n,null),bf(),Ya());return _n(t,n,u,a),n.child}function ko(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function n0(t,n,a,s,u){var c=xf();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Jl(n,null),bf(),sg(n),t!==null&&Es(t,n,s,!0),n.childLanes=u,null}function mu(t,n){return n=gu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function i0(t,n,a){return ws(n,t.child,null,a),t=mu(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function yy(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ve){if(s.mode==="hidden")return t=mu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},ko(null,t);if(Rf(n),(t=Ke)?(t=w_(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Hm(t),a.return=n,n.child=a,Sn=n,Ke=null)):t=null,t===null)throw Ia(n);return n.lanes=536870912,null}return mu(n,s)}var c=t.memoizedState;if(c!==null){var v=c.dehydrated;if(Rf(n),u)if(n.flags&256)n.flags&=-257,n=i0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(hn||Es(t,n,a,!1),u=(a&t.childLanes)!==0,hn||u){if(ka.current===null){if(s=je,s!==null&&(v=rt(s,a),v!==0&&v!==c.retryLane))throw c.retryLane=v,xs(t,v),Qn(s,t,v),jf;Pu()}n=i0(t,n,a)}else t=c.treeContext,Ke=yi(v.nextSibling),Sn=n,ve=!0,za=null,xi=!1,t!==null&&km(n,t),n=mu(n,s),n.flags|=134221824;return n}return t=ca(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function _r(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Zf(t,n,a,s,u){return Ts(n),a=Df(t,n,a,s,void 0,u),s=Uf(),t!==null&&!hn?(Nf(t,n,u),ga(t,n,u)):(ve&&s&&Wl(n),n.flags|=1,_n(t,n,a,u),n.child)}function a0(t,n,a,s,u,c){return Ts(n),n.updateQueue=null,a=og(n,s,a,u),rg(t),s=Uf(),t!==null&&!hn?(Nf(t,n,c),ga(t,n,c)):(ve&&s&&Wl(n),n.flags|=1,_n(t,n,a,c),n.child)}function s0(t,n,a,s,u){if(Ts(n),n.stateNode===null){var c=or,v=a.contextType;typeof v=="object"&&v!==null&&(c=Rn(v)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=qf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},yf(n),v=a.contextType,c.context=typeof v=="object"&&v!==null?Rn(v):or,c.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Yf(n,a,v,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(v=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),v!==c.state&&qf.enqueueReplaceState(c,c.state,null),Bo(n,s,c,u),Io(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,z=Us(a,E);c.props=z;var W=c.context,at=a.contextType;v=or,typeof at=="object"&&at!==null&&(v=Rn(at));var _t=a.getDerivedStateFromProps;at=typeof _t=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,at||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||W!==v)&&Yg(n,c,s,v),Ha=!1;var X=n.memoizedState;c.state=X,Bo(n,s,c,u),Io(),W=n.memoizedState,E||X!==W||Ha?(typeof _t=="function"&&(Yf(n,a,_t,s),W=n.memoizedState),(z=Ha||Xg(n,a,z,s,X,W,v))?(at||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=W),c.props=s,c.state=W,c.context=v,s=z):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,Mf(t,n),v=n.memoizedProps,at=Us(a,v),c.props=at,_t=n.pendingProps,X=c.context,W=a.contextType,z=or,typeof W=="object"&&W!==null&&(z=Rn(W)),E=a.getDerivedStateFromProps,(W=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v!==_t||X!==z)&&Yg(n,c,s,z),Ha=!1,X=n.memoizedState,c.state=X,Bo(n,s,c,u),Io();var et=n.memoizedState;v!==_t||X!==et||Ha||t!==null&&t.dependencies!==null&&Kl(t.dependencies)?(typeof E=="function"&&(Yf(n,a,E,s),et=n.memoizedState),(at=Ha||Xg(n,a,at,s,X,et,z)||t!==null&&t.dependencies!==null&&Kl(t.dependencies))?(W||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,et,z),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,et,z)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||v===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=et),c.props=s,c.state=et,c.context=z,s=at):(typeof c.componentDidUpdate!="function"||v===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,_r(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=ws(n,t.child,null,u),n.child=ws(n,null,a,u)):_n(t,n,a,u),n.memoizedState=c.state,t=n.child):t=ga(t,n,u),t}function r0(t,n,a,s){return ys(),n.flags|=256,_n(t,n,a,s),n.child}var Kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qf(t){return{baseLanes:t,cachePool:Zm()}}function Jf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=oi),t}function o0(t,n,a){var s=n.pendingProps,u=!1,c=(n.flags&128)!==0,v;if((v=c)||(v=t!==null&&t.memoizedState===null?!1:(wn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(ve){if(u?Xa(n):Ya(),(t=Ke)?(t=w_(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:Yi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Hm(t),a.return=n,n.child=a,Sn=n,Ke=null)):t=null,t===null)throw Ia(n);return Qh(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,u?(Ya(),u=n.mode,c=gu({mode:"hidden",children:c},u),s=Ss(s,u,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=Qf(a),s.childLanes=Jf(t,v,a),n.memoizedState=Kf,ko(null,s)):(Xa(n),$f(n,c))}var E=t.memoizedState;if(E!==null){var z=E.dehydrated;if(z!==null)return My(t,n,c,v,s,z,E,a)}return u?(Ya(),u=s.fallback,c=n.mode,E=t.child,z=E.sibling,s=ca(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&1206910976,z!==null?u=ca(z,u):(u=Ss(u,c,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,ko(null,s),s=n.child,u=t.child.memoizedState,u===null?u=Qf(a):(c=u.cachePool,c!==null?(E=cn._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Zm(),u={baseLanes:u.baseLanes|a,cachePool:c}),s.memoizedState=u,s.childLanes=Jf(t,v,a),n.memoizedState=Kf,ko(t.child,s)):(Xa(n),a=t.child,t=a.sibling,a=ca(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function $f(t,n){return n=gu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gu(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function _u(t,n,a){return ws(n,t.child,null,a),t=$f(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function My(t,n,a,s,u,c,v,E){if(a)return n.flags&256?(Xa(n),n.flags&=-257,_u(t,n,E)):n.memoizedState!==null?(Ya(),n.child=t.child,n.flags|=128,null):(Ya(),c=u.fallback,v=n.mode,u=gu({mode:"visible",children:u.children},v),c=Ss(c,v,E,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,ws(n,t.child,null,E),u=n.child,u.memoizedState=Qf(E),u.childLanes=Jf(t,s,E),n.memoizedState=Kf,ko(null,u));if(Xa(n),Qh(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var z=s.dgst;return s=z,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Uo({value:u,source:null,stack:null})),_u(t,n,E)}if(hn||Es(t,n,E,!1),s=(E&t.childLanes)!==0,hn||s){if(ka.current!==null)return _u(t,n,E);if(s=je,s!==null&&(u=rt(s,E),u!==0&&u!==v.retryLane))throw v.retryLane=u,xs(t,u),Qn(s,t,u),jf;return Kh(c)||Pu(),_u(t,n,E)}return Kh(c)?(n.flags|=192,n.child=t.child,null):(t=v.treeContext,Ke=yi(c.nextSibling),Sn=n,ve=!0,za=null,xi=!1,t!==null&&km(n,t),n=$f(n,u.children),n.flags|=134221824,n)}function l0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Zl(t.return,n,a)}function u0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&au(a)===null&&(n=t),t=t.sibling}return n}function vu(t,n,a,s,u,c){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:c}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=c)}function th(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function eh(t,n,a){var s=n.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var v=wn.current;if(n.flags&128)return Fo(n,v),null;var E=(v&2)!==0;if(E?(v=v&1|2,n.flags|=128):v&=1,Fo(n,v),u==="backwards"&&t!==null?(th(t),_n(t,n,s,a),th(t)):_n(t,n,s,a),s=ve?Do:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&l0(t,a,n);else if(t.tag===19)l0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=u0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,th(n)),vu(n,!0,u,null,c,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&au(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}vu(n,!0,a,null,c,s);break;case"together":vu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=u0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vu(n,!1,u,a,c,s)}return n.child}function c0(t,n,a){var s=n.pendingProps;return Ba(n,n.type,s.value),_n(t,n,s.children,a),n.child}function ga(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Es(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ca(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ca(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function nh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Kl(t)))}function Ey(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Ba(n,cn,t.memoizedState.cache),ys();break;case 27:case 5:nt(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Rf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Xa(n),n.flags|=128,null;s=Es(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?o0(t,n,a):(Xa(n),t=ga(t,n,a),t!==null?t.sibling:null)}Xa(n);break;case 19:if(n.flags&128)return eh(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Es(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return eh(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Fo(n,wn.current),s)break;return null;case 22:return n.lanes=0,e0(t,n,a,n.pendingProps);case 24:Ba(n,cn,t.memoizedState.cache)}return ga(t,n,a)}function f0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!nh(t,a)&&(n.flags&128)===0)return hn=!1,Ey(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,ve&&(n.flags&1048576)!==0&&Vm(n,Do,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Rs(n.elementType),n.type=t,typeof t=="function")uf(t)?(s=Us(t,s),n.tag=1,n=s0(null,n,t,s,a)):(n.tag=0,n=Zf(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===Y){n.tag=11,n=Jg(null,n,t,s,a);break t}else if(u===xt){n.tag=14,n=$g(null,n,t,s,a);break t}else if(u===ut){n.tag=10,n.type=t,n=c0(null,n,a);break t}}throw n=Nt(t)||t,Error(r(306,n,""))}}return n;case 0:return Zf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Us(s,n.pendingProps),s0(t,n,s,u,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;u=c.element,Mf(t,n),Bo(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Ba(n,cn,s),s!==c.cache&&gf(n,[cn],a,!0),Io(),s=v.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=r0(t,n,s,a);break t}else if(s!==u){u=gi(Error(r(424)),n),Uo(u),n=r0(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=yi(t.firstChild),Sn=n,ve=!0,za=null,xi=!0,a=eg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(ys(),s===u){n=ga(t,n,a);break t}_n(t,n,s,a)}n=n.child}return n;case 26:return _r(t,n),t===null?(a=z_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ve||(n.stateNode=m_(n.type,n.pendingProps,Te.current,n)):n.memoizedState=z_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&ve&&(s=n.stateNode=N_(n.type,n.pendingProps,Te.current),Sn=n,xi=!0,u=Ke,$a(n.type)?(Jh=u,Ke=yi(s.firstChild)):Ke=u),_n(t,n,n.pendingProps.children,a),_r(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ve&&((u=s=Ke)&&(s=_M(s,n.type,n.pendingProps,xi),s!==null?(n.stateNode=s,Sn=n,Ke=yi(s.firstChild),xi=!1,u=!0):u=!1),u||Ia(n)),nt(n),u=n.type,c=n.pendingProps,v=t!==null?t.memoizedProps:null,s=c.children,kh(u,c)?s=null:v!==null&&kh(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Df(t,n,hy,null,null,a),Pr._currentValue=u),_r(t,n),_n(t,n,s,a),n.child;case 6:return t===null&&ve&&((t=a=Ke)&&(a=vM(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Sn=n,Ke=null,t=!0):t=!1),t||Ia(n)),null;case 13:return o0(t,n,a);case 4:return U(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ws(n,null,s,a):_n(t,n,s,a),n.child;case 11:return Jg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,_r(t,n),_n(t,n,s,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return c0(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Ts(n),u=Rn(u),s=s(u),n.flags|=1,_n(t,n,s,a),n.child;case 14:return $g(t,n,n.type,n.pendingProps,a);case 15:return t0(t,n,n.type,n.pendingProps,a);case 19:return eh(t,n,a);case 31:return yy(t,n,a);case 22:return e0(t,n,a,n.pendingProps);case 24:return Ts(n),s=Rn(cn),t===null?(u=xf(),u===null&&(u=je,c=_f(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:s,cache:u},yf(n),Ba(n,cn,u)):((t.lanes&a)!==0&&(Mf(t,n),Bo(n,null,null,a),Io()),u=t.memoizedState,c=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ba(n,cn,s)):(s=c.cache,Ba(n,cn,s),s!==u.cache&&gf(n,[cn],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:ve&&Wl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:_r(t,n),_n(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function _a(t){t.flags|=4}function ih(t,n,a,s,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?H_(n,s):H_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(q0())t.flags|=8192;else throw Cs=tu,Sf}else t.flags&=-16777217}function h0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!G_(n))if(q0())t.flags|=8192;else throw Cs=tu,Sf}function xu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ul():536870912,t.lanes|=n,Mr|=n)}function Xo(t,n){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Ty(t,n,a){var s=n.pendingProps;switch(hf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),da(cn),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(cr(n)?_a(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pf())),Qe(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(_a(n),c!==null?(Qe(n),h0(n,c)):(Qe(n),ih(n,u,null,s,a))):c?c!==t.memoizedState?(_a(n),Qe(n),h0(n,c)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&_a(n),Qe(n),ih(n,u,t,s,a)),null;case 27:if(gt(n),a=Te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&_a(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}t=ft.current,cr(n)?Xm(n):(t=N_(u,s,a),n.stateNode=t,_a(n))}return Qe(n),n.subtreeFlags&=-33554433,null;case 5:if(gt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&_a(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),n.subtreeFlags&=-33554433,null}if(c=ft.current,cr(n))Xm(n);else{var v=el(Te.current);switch(c){case 1:c=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=v.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}c[Dt]=n,c[Yt]=s;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)c.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=c;t:switch(Un(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&_a(n)}}return Qe(n),n.subtreeFlags&=-33554433,ih(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&_a(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Te.current,cr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Dt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||f_(t.nodeValue,a)),t||Ia(n,!0)}else t=el(t).createTextNode(s),t[Dt]=n,n.stateNode=t}return Qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=cr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Dt]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else a=pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=cr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Dt]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=pf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),xu(n,n.updateQueue),Qe(n),null);case 4:return T(),t===null&&Bh(n.stateNode.containerInfo),n.flags|=67108864,Qe(n),null;case 10:return da(n.type),Qe(n),null;case 19:if(Cf(n),s=n.memoizedState,s===null)return Qe(n),null;if(u=(n.flags&128)!==0,c=s.rendering,c===null)if(u)Xo(s,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=au(t),c!==null){for(n.flags|=128,Xo(s,!1),t=c.updateQueue,n.updateQueue=t,xu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Fm(a,t),a=a.sibling;return Fo(n,wn.current&1|2),ve&&fa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&k()>Uu&&(n.flags|=128,u=!0,Xo(s,!1),n.lanes=4194304)}else{if(!u)if(t=au(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,xu(n,t),Xo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!ve)return Qe(n),null}else 2*k()-s.renderingStartTime>Uu&&a!==536870912&&(n.flags|=128,u=!0,Xo(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=k(),t.sibling=null,c=wn.current,c=u?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ve?Fo(n,c):(a=c,ie(Cn,n),ie(wn,a),Pn===null&&(Pn=n)),ve&&fa(n,s.treeForkCount),t}return Qe(n),null;case 22:case 23:return ai(n),Af(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&xu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Lt(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),da(cn),Qe(n),null;case 25:return null;case 30:return n.flags|=33554432,Qe(n),null}throw Error(r(156,n.tag))}function by(t,n){switch(hf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return da(cn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(r(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Cf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return da(n.type),null;case 22:case 23:return ai(n),Af(),t!==null&&Lt(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return da(cn),null;case 25:return null;default:return null}}function d0(t,n){switch(hf(n),n.tag){case 3:da(cn),T();break;case 26:case 27:case 5:gt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Cf(n);break;case 10:da(n.type);break;case 22:case 23:ai(n),Af(),t!==null&&Lt(As);break;case 24:da(cn)}}function Yo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var c=a.create,v=a.inst;s=c(),v.destroy=s}a=a.next}while(a!==u)}}catch(E){Ve(n,n.return,E)}}function qa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&t)===t){var v=s.inst,E=v.destroy;if(E!==void 0){v.destroy=void 0,u=n;var z=a,W=E;try{W()}catch(at){Ve(u,z,at)}}}s=s.next}while(s!==c)}}catch(at){Ve(n,n.return,at)}}function p0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ig(n,a)}catch(s){Ve(t,t.return,s)}}}function m0(t,n,a){a.props=Us(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ve(t,n,s)}}function Wi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,c=la(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=M_(c)),s=u.ref;break;case 7:if(t.stateNode===null){var v=new ui(t);_(t.child,!1,mM,v,void 0,void 0),t.stateNode=v}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(E){Ve(t,n,E)}}function Dn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ve(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(t,n,u)}else a.current=null}function Su(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)C_(t.stateNode,n[a])}function g0(t){for(var n=t.return;n!==null&&(sh(n)&&C_(t.stateNode,n.stateNode),!ah(n));)n=n.return}function qo(t){for(var n=t.return;n!==null&&(sh(n)&&gM(t.stateNode,n.stateNode),!ah(n));)n=n.return}function ah(t){return t.tag===5||t.tag===3||t.tag===27}function sh(t){return t&&t.tag===7&&t.stateNode!==null}function rh(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ve(t,t.return,u)}}function oh(t,n,a){try{var s=t.stateNode;Qy(s,t.type,a,n),s[Yt]=n}catch(u){Ve(t,t.return,u)}}function _0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function lh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uh(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi)),Su(t,s),Le=!0;else if(u!==4&&(u===27&&(Su(t,s),s=null,$a(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(uh(t,n,a,s),t=t.sibling;t!==null;)uh(t,n,a,s),t=t.sibling}function yu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Su(t,s),Le=!0;else if(u!==4&&(u===27&&(Su(t,s),s=null,$a(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(yu(t,n,a,s),t=t.sibling;t!==null;)yu(t,n,a,s),t=t.sibling}function v0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,s,a),n[Dt]=t,n[Yt]=a}catch(c){Ve(t,t.return,c)}}var Mu=!1,si=null;function x0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Mu=!0)}var ji=null;function S0(){var t=ji;return ji=null,t}var jn=0;function vr(t,n,a,s,u){return jn=0,y0(t.child,n,a,s,u)}function y0(t,n,a,s,u){for(var c=!1;t!==null;){if(t.tag===5){var v=t.stateNode;if(s!==null){var E=qh(v);s.push(E),E.view&&(c=!0)}else c||qh(v).view&&(c=!0);Mu=!0,S_(v,jn===0?n:n+"_"+jn,a),jn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||y0(t.child,n,a,s,u)&&(c=!0));t=t.sibling}return c}function Zi(t,n){for(;t!==null;)t.tag===5?y_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Zi(t.child,n)),t=t.sibling}function Eu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Eu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ua(n.default,n.share),n!=="none"&&(vr(t,a,n,null,!1)||Zi(t.child,!1))}t=t.sibling}}function ch(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=la(s,a),c=ua(s.default,a.paired?s.share:s.enter);c!=="none"?vr(t,u,c,null,!1)?(Eu(t),a.paired||n||Ar(t,s.onEnter)):Zi(t.child,!1):Eu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ch(t,n),t=t.sibling;else Eu(t)}function fh(t){if(si!==null&&si.size!==0){var n=si;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var c=ua(a.default,a.share);if(c!=="none"&&(vr(t,s,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Ar(t,a.onShare)):Zi(t.child,!1)),n.delete(s),n.size===0)break}}}fh(t)}t=t.sibling}}}function hh(t){if(t.tag===30){var n=t.memoizedProps,a=la(n,t.stateNode),s=si!==null?si.get(a):void 0,u=ua(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(vr(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,si.delete(a),Ar(t,n.onShare)):Ar(t,n.onExit):Zi(t.child,!1)),si!==null&&fh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)hh(t),t=t.sibling;else si!==null&&fh(t)}function M0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=la(n,t.stateNode);n=ua(n.default,n.update),t.flags&=-5,n!=="none"&&vr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&M0(t);t=t.sibling}}function dh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Zi(t.child,!1))}dh(t)}t=t.sibling}}function Tu(t){if(t.tag===30)t.stateNode.paired=null,Zi(t.child,!1),dh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Tu(t),t=t.sibling;else dh(t)}function E0(t){for(t=t.child;t!==null;)t.tag===30?Zi(t.child,!1):(t.subtreeFlags&33554432)!==0&&E0(t),t=t.sibling}function ph(t,n,a,s,u,c,v){for(var E=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(c!==null&&jn<c.length){var W=c[jn],at=qh(z);(W.view||at.view)&&(E=!0);var _t;if(_t=(t.flags&4)===0)if(at.clip)_t=!0;else{_t=W.rect;var X=at.rect;_t=_t.y!==X.y||_t.x!==X.x||_t.height!==X.height||_t.width!==X.width}_t&&(t.flags|=4),at.abs?at=!W.abs:(W=W.rect,at=at.rect,at=W.height!==at.height||W.width!==at.width),at&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&S_(z,jn===0?a:a+"_"+jn,u),E&&(t.flags&4)!==0||(ji===null&&(ji=[]),ji.push(z,jn===0?s:s+"_"+jn,n.memoizedProps)),jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?t.flags|=n.flags&32:ph(t,n.child,a,s,u,c,v)&&(E=!0));n=n.sibling}return E}function T0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=la(a,s),c=ua(a.default,a.update),v;v=t.memoizedState,t.memoizedState=null,s=t;var E=t.child;jn=0,u=ph(s,E,u,u,c,v,!1),(t.flags&4)!==0&&u&&Ar(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&T0(t);t=t.sibling}}var yn=!1,He=!1,Ki=!1,mh=!1,b0=typeof WeakSet=="function"?WeakSet:Set,Mn=null,Qi=!1,Wo=!1,bu=!1,gh=!1;function Ay(t,n,a){if(t=t.containerInfo,Gh=zr,t=wm(t),ef(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var c=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{s.nodeType,v.nodeType}catch{s=null;break t}var E=0,z=-1,W=-1,at=0,_t=0,X=t,et=null;e:for(;;){for(var Ot;X!==s||c!==0&&X.nodeType!==3||(z=E+c),X!==v||u!==0&&X.nodeType!==3||(W=E+u),X.nodeType===3&&(E+=X.nodeValue.length),(Ot=X.firstChild)!==null;)et=X,X=Ot;for(;;){if(X===t)break e;if(et===s&&++at===c&&(z=E),et===v&&++_t===u&&(W=E),(Ot=X.nextSibling)!==null)break;X=et,et=X.parentNode}X=Ot}s=z===-1||W===-1?null:{start:z,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(Vh={focusedElem:t,selectionRange:s},zr=!1,a=(a&335544064)===a,Mn=n,n=a?9270:1024;Mn!==null;){if(t=Mn,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&hh(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&x0(t),Au(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&hh(s),Au(a);continue}else if(s!==null&&s.memoizedState!==null){a&&x0(t),Au(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Mn=s):(a&&M0(t),Au(a))}}si=null}function Au(t){for(;Mn!==null;){var n=Mn,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var v=Us(n.type,u);a=c.getSnapshotBeforeUpdate(v,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){Ve(n,n.return,E)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Zh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Zh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=la(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=ua(u.default,u.update),u!=="none"&&vr(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Mn=s;break}Mn=n.return}}function A0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(t,a),s&4&&Yo(5,a);break;case 1:if(Ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Ve(a,a.return,v)}else{var u=Us(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ve(a,a.return,v)}}s&64&&p0(a),s&512&&Wi(a,a.return);break;case 3:if(Ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ig(t,n)}catch(v){Ve(a,a.return,v)}}break;case 27:n===null&&s&4&&v0(a);case 26:case 5:Ji(t,a),n===null&&s&4&&rh(a),s&512&&Wi(a,a.return);break;case 12:Ji(t,a);break;case 31:Ji(t,a),s&4&&D0(t,a);break;case 13:Ji(t,a),s&4&&U0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=By.bind(null,a),xM(t,a))));break;case 22:if(s=a.memoizedState!==null||yn,!s){var c=n!==null&&n.memoizedState!==null||He;n=yn,u=He,yn=s,(He=c)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Di(t,a,s)):Ji(t,a),yn=n,He=u}break;case 30:Ji(t,a),s&512&&Wi(a,a.return);break;case 7:s&512&&Wi(a,a.return);default:Ji(t,a)}}function _h(t,n){for(t=t.child;t!==null;)R0(t,n),t=t.sibling}function R0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,v=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(z){Ve(t,t.return,z)}vh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Le=!0}catch(z){Ve(t,t.return,z)}break;case 18:try{var E=t.stateNode;n?x_(E,!0):x_(t.stateNode,!1)}catch(z){Ve(t,t.return,z)}break;case 22:case 23:t.memoizedState===null&&_h(t,n);break;default:_h(t,n)}}function vh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:R0(a,s);break t;case 22:a.memoizedState===null&&vh(a,s);break t;default:vh(a,s)}}t=t.sibling}}function C0(t){var n=t.alternate;n!==null&&(t.alternate=null,C0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Zn=!1;function Ci(t,n,a){for(a=a.child;a!==null;)w0(t,n,a),a=a.sibling}function w0(t,n,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:He||Dn(a,n),Ci(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!He&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Dn(a,n),qo(a);var s=tn,u=Zn;$a(a.type)&&(tn=a.stateNode,Zn=!1),Ci(t,n,a),L_(a.stateNode,a.type,a.memoizedProps),tn=s,Zn=u;break;case 5:He||Dn(a,n),qo(a);case 6:if(a.tag===6&&qo(a),s=tn,u=Zn,tn=null,Ci(t,n,a),tn=s,Zn=u,tn!==null)if(Zn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Le=!0}catch(c){Ve(a,n,c)}else try{tn.removeChild(a.stateNode),Le=!0}catch(c){Ve(a,n,c)}break;case 18:tn!==null&&(Zn?(t=tn,v_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ir(t)):v_(tn,a.stateNode));break;case 4:s=tn,u=Zn,tn=a.stateNode.containerInfo,Zn=!0,Ci(t,n,a),tn=s,Zn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),He||qa(4,a,n),Ci(t,n,a);break;case 1:He||(Dn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&m0(a,n,s)),Ci(t,n,a);break;case 21:Ci(t,n,a);break;case 22:He=(s=He)||a.memoizedState!==null,Ci(t,n,a),He=s;break;case 30:Dn(a,n),Ci(t,n,a);break;case 7:He||Dn(a,n),Ci(t,n,a);break;default:Ci(t,n,a)}}function D0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ir(t)}catch(a){Ve(n,n.return,a)}}}function U0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ir(t)}catch(a){Ve(n,n.return,a)}}function Ry(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new b0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new b0),n;default:throw Error(r(435,t.tag))}}function Ru(t,n){var a=Ry(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Fy.bind(null,t,s);s.then(u,u)}})}function Vn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var c=s[u],v=t,E=n,z=E;t:for(;z!==null;){switch(z.tag){case 27:if($a(z.type)){tn=z.stateNode,Zn=!1;break t}break;case 5:tn=z.stateNode,Zn=!1;break t;case 3:case 4:tn=z.stateNode.containerInfo,Zn=!0;break t}z=z.return}if(tn===null)throw Error(r(160));w0(v,E,c),tn=null,Zn=!1,v=c.alternate,v!==null&&(v.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)N0(n,t,a),n=n.sibling}var wi=null;function N0(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var v=s[c];v.ref.impl=v.nextImpl}Vn(n,t,a),kn(t),u&4&&(qa(3,t,t.return),Yo(3,t),qa(5,t,t.return));break;case 1:Vn(n,t,a),kn(t),u&512&&(He||s===null||Dn(s,s.return)),u&64&&yn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=wi,Vn(n,t,a),kn(t),u&512&&(He||s===null||Dn(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(yn)t.stateNode=m_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Pe]||s[Dt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Un(s,n,a),s[Dt]=t,Ne(s),n=s;break t;case"link":if(c=F_("link","href",u).get(n+(a.href||""))){for(v=0;v<c.length;v++)if(s=c[v],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(v,1);break e}}s=u.createElement(n),Un(s,n,a),u.head.appendChild(s);break;case"meta":if(c=F_("meta","content",u).get(n+(a.content||""))){for(v=0;v<c.length;v++)if(s=c[v],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(v,1);break e}}s=u.createElement(n),Un(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[Dt]=t,Ne(s),n=s}t.stateNode=n}else yn||nd(c,t.type,t.stateNode);else t.stateNode=B_(c,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||He||n.parentNode.removeChild(n)):u.count--,a===null?yn||nd(c,t.type,t.stateNode):B_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&oh(t,t.memoizedProps,s.memoizedProps);break;case 27:Vn(n,t,a),kn(t),u&512&&(He||s===null||Dn(s,s.return)),s!==null&&u&4&&oh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=Ki,Ki=!1,Vn(n,t,a),Ki=c,kn(t),u&512&&(He||s===null||Dn(s,s.return)),t.flags&32){n=t.stateNode;try{tr(n,""),Le=!0}catch(at){Ve(t,t.return,at)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,oh(t,n,s!==null?s.memoizedProps:n)),u&1024&&(mh=!0);break;case 6:if(Vn(n,t,a),kn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Le=!0}catch(at){Ve(t,t.return,at)}}break;case 3:if(Le=!1,Vu=null,c=wi,wi=nl(n.containerInfo),Vn(n,t,a),wi=c,kn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Ir(n.containerInfo)}catch(at){Ve(t,t.return,at)}mh&&(mh=!1,L0(t)),Le=!1;break;case 4:u=Ki,Ki=yn,s=$p(),c=wi,wi=nl(t.stateNode.containerInfo),Vn(n,t,a),kn(t),wi=c,Le&&Wo&&(bu=!0),Le=s,Ki=u;break;case 12:Vn(n,t,a),kn(t);break;case 31:Vn(n,t,a),kn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ru(t,n)));break;case 13:Vn(n,t,a),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Du=k()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ru(t,n)));break;case 22:c=t.memoizedState!==null,v=s!==null&&s.memoizedState!==null;var E=yn,z=He,W=Ki;yn=E||c,Ki=W||c,He=z||v,Vn(n,t,a),He=z,Ki=W,yn=E,kn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||v||yn||He||(n=v||He,a=yn,s=He,yn=c||yn,He=n,Wa(t,2),yn=a,He=s),!c&&Ki||_h(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ru(t,a))));break;case 19:Vn(n,t,a),kn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ru(t,n)));break;case 30:u&512&&(He||s===null||Dn(s,s.return)),u=$p(),c=Wo,v=(a&335544064)===a,E=t.memoizedProps,Wo=v&&ua(E.default,E.update)!=="none",Vn(n,t,a),kn(t),v&&s!==null&&Le&&(t.flags|=4),Wo=c,Le=u;break;case 21:break;case 7:u&512&&(He||s===null||Dn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Vn(n,t,a),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(_0(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(sh(u)){var c=u.stateNode;s===null?s=[c]:s.push(c)}if(ah(u))break;u=u.return}var v=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var E=a.stateNode,z=lh(t);yu(t,z,E,v);break;case 5:var W=a.stateNode;a.flags&32&&(tr(W,""),a.flags&=-33);var at=lh(t);yu(t,at,W,v);break;case 3:case 4:var _t=a.stateNode.containerInfo,X=lh(t);uh(t,X,_t,v);break;default:throw Error(r(161))}}catch(et){Ve(t,t.return,et)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function L0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;L0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,zr=!0,n.reset(),zr=!1),t=t.sibling}}function xr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)O0(n,t),n=n.sibling;else T0(n)}function O0(t,n){var a=t.alternate;if(a===null)ch(t,!1);else switch(t.tag){case 3:if(gh=Qi=!1,S0(),xr(n,t),!Qi&&!bu){if(t=ji,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];y_(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),gh=!0}ji=null;break;case 5:xr(n,t);break;case 4:s=Qi,Qi=!1,xr(n,t),Qi&&(bu=!0),Qi=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?ch(t,!1):xr(n,t));break;case 30:s=Qi,u=S0(),Qi=!1,xr(n,t),Qi&&(t.flags|=4);var c=t.memoizedProps,v=t.stateNode;n=la(c,v),v=la(a.memoizedProps,v);var E=ua(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,jn=0,n=ph(t,a,n,v,E,c,!0),jn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ar(t,t.memoizedProps.onUpdate),ji=u):u!==null&&(u.push.apply(u,ji),ji=u),Qi=(t.flags&32)!==0?!0:s;break;default:xr(n,t)}}function Ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)A0(t,n.alternate,n),n=n.sibling}function Wa(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:qa(4,a,a.return),Wa(a,s);break;case 1:Dn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&m0(a,a.return,u),Wa(a,s);break;case 27:(s&2)!==0&&L_(a.stateNode,a.type,a.memoizedProps);case 5:Dn(a,a.return),a.tag!==5&&a.tag!==27||qo(a),Wa(a,s);break;case 6:qo(a);break;case 26:Dn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||He||u.parentNode.removeChild(u),Wa(a,s);break;case 22:a.memoizedState===null&&Wa(a,s);break;case 30:Dn(a,a.return),Wa(a,s);break;case 7:Dn(a,a.return);default:Wa(a,s)}t=t.sibling}}function Di(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,c=n,v=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Di(u,c,a),Yo(4,c);break;case 1:if(Di(u,c,a),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){Ve(s,s.return,at)}if(s=c,u=s.updateQueue,u!==null){var z=s.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)ng(W[u],z)}catch(at){Ve(s,s.return,at)}}E&&v&64&&p0(c),Wi(c,c.return);break;case 27:(a&2)!==0&&v0(c);case 5:c.tag!==5&&c.tag!==27||g0(c),Di(u,c,a),E&&s===null&&v&4&&rh(c),Wi(c,c.return);break;case 6:g0(c);break;case 26:z=c.stateNode,c.memoizedState!==null||z===null||yn||nd(nl(z.ownerDocument),c.type,z),Di(u,c,a),E&&s===null&&v&4&&rh(c),Wi(c,c.return);break;case 12:Di(u,c,a);break;case 31:Di(u,c,a),E&&v&4&&D0(u,c);break;case 13:Di(u,c,a),E&&v&4&&U0(u,c);break;case 22:c.memoizedState===null&&Di(u,c,a),Wi(c,c.return);break;case 30:Di(u,c,a),Wi(c,c.return);break;case 7:Wi(c,c.return);default:Di(u,c,a)}n=n.sibling}}function xh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&No(a))}function Sh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&No(t))}function Si(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)P0(t,n,a,s),n=n.sibling;else u&&E0(n)}function P0(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Tu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,s),c&2048&&Yo(9,n);break;case 1:Si(t,n,a,s);break;case 3:Si(t,n,a,s),u&&gh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&No(c)));break;case 12:if(c&2048){Si(t,n,a,s),c=n.stateNode;try{var v=n.memoizedProps,E=v.id,z=v.onPostCommit;typeof z=="function"&&z(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(W){Ve(n,n.return,W)}}else Si(t,n,a,s);break;case 31:Si(t,n,a,s);break;case 13:Si(t,n,a,s);break;case 23:break;case 22:v=n.stateNode,E=n.alternate,n.memoizedState!==null?(u&&E!==null&&E.memoizedState===null&&Tu(E),v._visibility&2?Si(t,n,a,s):jo(t,n)):(u&&E!==null&&E.memoizedState!==null&&Tu(n),v._visibility&2?Si(t,n,a,s):(v._visibility|=2,Sr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&xh(E,n);break;case 24:Si(t,n,a,s),c&2048&&Sh(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Zi(c.child,!0),Zi(n.child,!0))),Si(t,n,a,s);break;default:Si(t,n,a,s)}}function Sr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,v=n,E=a,z=s,W=v.flags;switch(v.tag){case 0:case 11:case 15:Sr(c,v,E,z,u),Yo(8,v);break;case 23:break;case 22:var at=v.stateNode;v.memoizedState!==null?at._visibility&2?Sr(c,v,E,z,u):jo(c,v):(at._visibility|=2,Sr(c,v,E,z,u)),u&&W&2048&&xh(v.alternate,v);break;case 24:Sr(c,v,E,z,u),u&&W&2048&&Sh(v.alternate,v);break;default:Sr(c,v,E,z,u)}n=n.sibling}}function jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:jo(a,s),u&2048&&xh(s.alternate,s);break;case 24:jo(a,s),u&2048&&Sh(s.alternate,s);break;default:jo(a,s)}n=n.sibling}}var Ns=8192;function Ls(t,n,a){if(t.subtreeFlags&Ns)for(t=t.child;t!==null;)z0(t,n,a),t=t.sibling}function z0(t,n,a){switch(t.tag){case 26:Ls(t,n,a),t.flags&Ns&&(t.memoizedState!==null?LM(a,wi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&k_(a,t)));break;case 5:Ls(t,n,a),t.flags&Ns&&(t=t.stateNode,(n&335544128)===n&&k_(a,t));break;case 3:case 4:var s=wi;wi=nl(t.stateNode.containerInfo),Ls(t,n,a),wi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Ns,Ns=16777216,Ls(t,n,a),Ns=s):Ls(t,n,a));break;case 30:if((t.flags&Ns)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,si===null&&(si=new Map),si.set(s,u)}Ls(t,n,a);break;default:Ls(t,n,a)}}function I0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Zo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,F0(s,t)}I0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)B0(t),t=t.sibling}function B0(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&qa(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Cu(t)):Zo(t);break;default:Zo(t)}}function Cu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,F0(s,t)}I0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Cu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cu(n));break;default:Cu(n)}t=t.sibling}}function F0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:No(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Mn=s;else t:for(a=t;Mn!==null;){s=Mn;var u=s.sibling,c=s.return;if(C0(s),s===a){Mn=null;break t}if(u!==null){u.return=c,Mn=u;break t}Mn=c}}}var Cy={getCacheForType:function(t){var n=Rn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(cn).controller.signal}},wy=typeof WeakMap=="function"?WeakMap:Map,Ie=0,je=null,Se=null,Ae=0,Ge=0,ri=null,ja=!1,yr=!1,yh=!1,va=0,on=0,Za=0,Os=0,wu=0,oi=0,Mr=0,Ko=null,Kn=null,Mh=!1,Du=0,H0=0,Uu=1/0,Nu=null,Ka=null,nn=0,Ui=null,Ps=null,$i=0,Eh=0,Th=null,G0=null,Er=null,Tr=null,br=null,Qo=0,Lu=null;function li(){return(Ie&2)!==0&&Ae!==0?Ae&-Ae:Et.T!==null?Oh():bt()}function V0(){if(oi===0)if((Ae&536870912)===0||ve){var t=sa;sa<<=1,(sa&3932160)===0&&(sa=262144),oi=t}else oi=536870912;return t=Cn.current,t!==null&&(t.flags|=32),oi}function Ar(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=M_(la(t.memoizedProps,a))),Tr===null&&(Tr=[]),Tr.push(n.bind(null,s))}}function Qn(t,n,a){(t===je&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(Rr(t,0),Qa(t,Ae,oi,!1)),gs(t,a),((Ie&2)===0||t!==je)&&(t===je&&((Ie&2)===0&&(Os|=a),on===4&&Qa(t,Ae,oi,!1)),ta(t))}function k0(t,n,a){if((Ie&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ua(t,n),u=s?Ny(t,n):Ah(t,n,!0),c=s;do{if(u===0){yr&&!s&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Dy(a)){u=Ah(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var E=t;u=Ko;var z=E.current.memoizedState.isDehydrated;if(z&&(Rr(E,v).flags|=256),v=Ah(E,v,!1),v!==2&&v!==6){if(yh&&!z){E.errorRecoveryDisabledLanes|=c,Os|=c,u=4;break t}c=Kn,Kn=u,c!==null&&(Kn===null?Kn=c:Kn.push.apply(Kn,c))}u=v}if(c=!1,u!==2)continue}}if(u===1){Rr(t,0),Qa(t,n,0,!0);break}t:{switch(s=t,c=u,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Qa(s,n,oi,!ja);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Du+300-k(),10<u)){if(Qa(s,n,oi,!ja),ms(s,0,!0)!==0)break t;$i=n,s.timeoutHandle=Yh(X0.bind(null,s,a,Kn,Nu,Mh,n,oi,Os,Mr,ja,c,"Throttled",-0,0),u);break t}X0(s,a,Kn,Nu,Mh,n,oi,Os,Mr,ja,c,null,-0,0)}}break}while(!0);ta(t)}function X0(t,n,a,s,u,c,v,E,z,W,at,_t,X,et){t.timeoutHandle=-1;var Ot=n.subtreeFlags,qt=(c&335544064)===c;if(_t=null,(qt||Ot&8192||(Ot&16785408)===16785408)&&(_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},si=null,z0(n,c,_t),qt&&(Ot=_t,qt=t.containerInfo,qt=(qt.nodeType===9?qt:qt.ownerDocument).__reactViewTransition,qt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=sl.bind(Ot),qt.finished.then(Ot,Ot))),Ot=(c&62914560)===c?Du-k():(c&4194048)===c?H0-k():0,Ot=OM(_t,Ot),Ot!==null)){$i=c,t.cancelPendingCommit=Ot(J0.bind(null,t,n,c,a,s,u,v,E,z,W,at,_t,null,X,et)),Qa(t,c,v,!W);return}J0(t,n,c,a,s,u,v,E,z,W,at,_t)}function Dy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],c=u.getSnapshot;u=u.value;try{if(!ii(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,s){n=Dl(t,n),n&=~wu,n&=~Os,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var c=31-Ln(u),v=1<<c;s[c]=-1,u&=~v}a!==0&&R(t,a,n)}function Ou(){return(Ie&6)===0?(Jo(0),!1):!0}function bh(){if(Se!==null){if(Ge===0)var t=Se.return;else t=Se,ha=Ms=null,Lf(t),dr=null,Po=0,t=Se;for(;t!==null;)d0(t.alternate,t),t=t.return;Se=null}}function Rr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,tM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$i=0,bh(),je=t,Se=a=ca(t.current,null),Ae=n,Ge=0,ri=null,ja=!1,yr=Ua(t,n),yh=!1,Mr=oi=wu=Os=Za=on=0,Kn=Ko=null,Mh=!1,va=Dl(t,n),Vl(),a}function Y0(t,n){he=null,Et.H=du,n===hr||n===$l?(n=Jm(),Ge=3):n===Sf?(n=Jm(),Ge=4):Ge=n===jf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,Se===null&&(on=1,pu(t,gi(n,t.current)))}function q0(){var t=Cn.current;return t===null?!0:(Ae&4194048)===Ae?Pn===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?t===Pn:!1}function W0(){var t=Et.H;return Et.H=du,t===null?du:t}function j0(){var t=Et.A;return Et.A=Cy,t}function Pu(){on=4,ja||(Ae&4194048)!==Ae&&Cn.current!==null||(yr=!0),(Za&134217727)===0&&(Os&134217727)===0||je===null||Qa(je,Ae,oi,!1)}function Ah(t,n,a){var s=Ie;Ie|=2;var u=W0(),c=j0();(je!==t||Ae!==n)&&(Nu=null,Rr(t,n)),n=!1;var v=on;t:do try{if(Ge!==0&&Se!==null){var E=Se,z=ri;switch(Ge){case 8:bh(),v=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var W=Ge;if(Ge=0,ri=null,Cr(t,E,z,W),a&&yr){v=0;break t}break;default:W=Ge,Ge=0,ri=null,Cr(t,E,z,W)}}Uy(),v=on;break}catch(at){Y0(t,at)}while(!0);return n&&t.shellSuspendCounter++,ha=Ms=null,Ie=s,Et.H=u,Et.A=c,Se===null&&(je=null,Ae=0,Vl()),v}function Uy(){for(;Se!==null;)Z0(Se)}function Ny(t,n){var a=Ie;Ie|=2;var s=W0(),u=j0();je!==t||Ae!==n?(Nu=null,Uu=k()+500,Rr(t,n)):yr=Ua(t,n);t:do try{if(Ge!==0&&Se!==null){n=Se;var c=ri;e:switch(Ge){case 1:Ge=0,ri=null,Cr(t,n,c,1);break;case 2:case 9:if(Km(c)){Ge=0,ri=null,K0(n);break}n=function(){Ge!==2&&Ge!==9||je!==t||(Ge=7),ta(t)},c.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:Km(c)?(Ge=0,ri=null,K0(n)):(Ge=0,ri=null,Cr(t,n,c,7));break;case 5:var v=null;switch(Se.tag){case 26:v=Se.memoizedState;case 5:case 27:var E=Se;if(v?G_(v):E.stateNode.complete){Ge=0,ri=null;var z=E.sibling;if(z!==null)Se=z;else{var W=E.return;W!==null?(Se=W,zu(W)):Se=null}break e}}Ge=0,ri=null,Cr(t,n,c,5);break;case 6:Ge=0,ri=null,Cr(t,n,c,6);break;case 8:bh(),on=6;break t;default:throw Error(r(462))}}Ly();break}catch(at){Y0(t,at)}while(!0);return ha=Ms=null,Et.H=s,Et.A=u,Ie=a,Se!==null?0:(je=null,Ae=0,Vl(),on)}function Ly(){for(;Se!==null&&!zt();)Z0(Se)}function Z0(t){var n=f0(t.alternate,t,va);t.memoizedProps=t.pendingProps,n===null?zu(t):Se=n}function K0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=a0(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=a0(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:Lf(n);var s=n;s===Sn&&(ve?(jl(s),s.tag===5&&s.stateNode!=null&&(Ke=s.stateNode)):(jl(s),ve=!0));default:d0(a,n),n=Se=Fm(n,va),n=f0(a,n,va)}t.memoizedProps=t.pendingProps,n===null?zu(t):Se=n}function Cr(t,n,a,s){ha=Ms=null,Lf(n),dr=null,Po=0;var u=n.return;try{if(Sy(t,u,n,a,Ae)){on=1,pu(t,gi(a,t.current)),Se=null;return}}catch(c){if(u!==null)throw Se=u,c;on=1,pu(t,gi(a,t.current)),Se=null;return}n.flags&32768?(ve||s===1?t=!0:yr||(Ae&536870912)!==0?t=!1:(ja=t=!0,(s===2||s===9||s===3||s===6)&&(s=Cn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Q0(n,t)):zu(n)}function zu(t){var n=t;do{if((n.flags&32768)!==0){Q0(n,ja);return}t=n.return;var a=Ty(n.alternate,n,va);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);on===0&&(on=5)}function Q0(t,n){do{var a=by(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);on=6,Se=null}function J0(t,n,a,s,u,c,v,E,z,W,at,_t){t.cancelPendingCommit=null;do Iu();while(nn!==0);if((Ie&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===je&&(Se=je=null,Ae=0),Ps=n,Ui=t,$i=a,Th=u,G0=s,Oy(t,n,a,v,E,z,_t)}}function Oy(t,n,a,s,u,c,v){var E=n.lanes|n.childLanes;if(Eh=E,E|=of,Ic(t,a,E,s,u,c),Tr=null,(a&335544064)===a?(br=ly(t),s=10262):(br=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Hy(Tt,function(){return Dh(),null})):(t.callbackNode=null,t.callbackPriority=0),Mu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Et.T,Et.T=null,u=Vt.p,Vt.p=2,c=Ie,Ie|=4;try{Ay(t,n,a)}finally{Ie=c,Vt.p=u,Et.T=s}}nn=1,Mu?Er=rM(v,t.containerInfo,br,Rh,Ch,zy,wh,Dh,Py):(Rh(),Ch(),wh())}function Py(t){if(nn!==0){var n=Ui.onRecoverableError;n(t,{componentStack:null})}}function zy(){nn===3&&(nn=0,O0(Ps,Ui),nn=4)}function Rh(){if(nn===1){nn=0;var t=Ui,n=Ps,a=$i,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Et.T,Et.T=null;var u=Vt.p;Vt.p=2;var c=Ie;Ie|=4;try{Wo=bu=!1,N0(n,t,a),a=Vh;var v=wm(t.containerInfo),E=a.focusedElem,z=a.selectionRange;if(v!==E&&E&&E.ownerDocument&&Cm(E.ownerDocument.documentElement,E)){if(z!==null&&ef(E)){var W=z.start,at=z.end;if(at===void 0&&(at=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(at,E.value.length);else{var _t=E.ownerDocument||document,X=_t&&_t.defaultView||window;if(X.getSelection){var et=X.getSelection(),Ot=E.textContent.length,qt=Math.min(z.start,Ot),de=z.end===void 0?qt:Math.min(z.end,Ot);!et.extend&&qt>de&&(v=de,de=qt,qt=v);var q=Rm(E,qt),V=Rm(E,de);if(q&&V&&(et.rangeCount!==1||et.anchorNode!==q.node||et.anchorOffset!==q.offset||et.focusNode!==V.node||et.focusOffset!==V.offset)){var tt=_t.createRange();tt.setStart(q.node,q.offset),et.removeAllRanges(),qt>de?(et.addRange(tt),et.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),et.addRange(tt))}}}}for(_t=[],et=E;et=et.parentNode;)et.nodeType===1&&_t.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<_t.length;E++){var pt=_t[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}zr=!!Gh,Vh=Gh=null}finally{Ie=c,Vt.p=u,Et.T=s}}t.current=n,nn=2}}function Ch(){if(nn===2){nn=0;var t=Ui,n=Ps,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Et.T,Et.T=null;var s=Vt.p;Vt.p=2;var u=Ie;Ie|=4;try{A0(t,n.alternate,n)}finally{Ie=u,Vt.p=s,Et.T=a}}nn=3}}function wh(){if(nn===4||nn===3){nn=0;var t=Er;Er=null,ce();var n=Ui,a=Ps,s=$i,u=G0,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?nn=5:(nn=0,Ps=Ui=null,$0(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Ka=null),Q(s),a=a.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(be,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Et.T,c=Vt.p,Vt.p=2,Et.T=null;try{for(var v=n.onRecoverableError,E=0;E<u.length;E++){var z=u[E];v(z.value,{componentStack:z.stack})}}finally{Et.T=a,Vt.p=c}}if(u=Tr,v=br,br=null,u!==null&&(Tr=null,v===null&&(v=[]),t!==null))for(z=0;z<u.length;z++)a=(0,u[z])(v),a!==void 0&&t.finished.finally(a);($i&3)!==0&&Iu(),ta(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===Lu?Qo++:(Qo=0,Lu=n):(Qo=0,Lu=null),Jo(0)}}function $0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,No(n)))}function Iu(){return Er!==null&&(Er.skipTransition(),Er=null),Rh(),Ch(),wh(),Dh()}function Dh(){if(nn!==5)return!1;var t=Ui,n=Eh;Eh=0;var a=Q($i),s=Et.T,u=Vt.p;try{Vt.p=32>a?32:a,Et.T=null,a=Th,Th=null;var c=Ui,v=$i;if(nn=0,Ps=Ui=null,$i=0,(Ie&6)!==0)throw Error(r(331));var E=Ie;if(Ie|=4,B0(c.current),P0(c,c.current,v,a),Ie=E,Jo(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(be,c)}catch{}return!0}finally{Vt.p=u,Et.T=s,$0(t,n)}}function t_(t,n,a){n=gi(a,n),n=Wf(t.stateNode,n,2),t=Va(t,n,2),t!==null&&(gs(t,2),ta(t))}function Ve(t,n,a){if(t.tag===3)t_(t,t,a);else for(;n!==null;){if(n.tag===3){t_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ka===null||!Ka.has(s))){t=gi(a,t),a=Kg(2),s=Va(n,a,2),s!==null&&(Qg(a,s,n,t),gs(s,2),ta(s));break}}n=n.return}}function Uh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new wy;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(yh=!0,u.add(a),t=Iy.bind(null,t,n,a),n.then(t,t))}function Iy(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,je===t&&(Ae&a)===a&&((on===4||on===3&&(Ae&62914560)===Ae&&300>k()-Du)&&(Ie&2)===0?Rr(t,0):wu|=a,Mr===Ae&&(Mr=0)),ta(t)}function e_(t,n){n===0&&(n=Ul()),t=xs(t,n),t!==null&&(gs(t,n),ta(t))}function By(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),e_(t,a)}function Fy(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),e_(t,a)}function Hy(t,n){return se(t,n)}var wr=null,Dr=null,Nh=!1,Bu=!1,Lh=!1,Ja=0;function ta(t){t!==Dr&&t.next===null&&(Dr===null?wr=Dr=t:Dr=Dr.next=t),Bu=!0,Nh||(Nh=!0,Vy())}function Jo(t,n){if(!Lh&&Bu){Lh=!0;do for(var a=!1,s=wr;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var v=s.suspendedLanes,E=s.pingedLanes;c=(1<<31-Ln(42|t)+1)-1,c&=u&~(v&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,s_(s,c))}else c=Ae,c=ms(s,s===je?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Ua(s,c)||(a=!0,s_(s,c));s=s.next}while(a);Lh=!1}}function Gy(){n_()}function n_(){Bu=Nh=!1;var t=0;Ja!==0&&$y()&&(t=Ja);for(var n=k(),a=null,s=wr;s!==null;){var u=s.next,c=i_(s,n);c===0?(s.next=null,a===null?wr=u:a.next=u,u===null&&(Dr=a)):(a=s,(t!==0||(c&3)!==0)&&(Bu=!0)),s=u}nn!==0&&nn!==5||Jo(t),Ja!==0&&(Ja=0)}function i_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var v=31-Ln(c),E=1<<v,z=u[v];z===-1?((E&a)===0||(E&s)!==0)&&(u[v]=zc(E,n)):z<=n&&(t.expiredLanes|=E),c&=~E}if(n=je,a=Ae,a=ms(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Zt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ua(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Zt(s),Q(a)){case 2:case 8:a=kt;break;case 32:a=Tt;break;case 268435456:a=Wt;break;default:a=Tt}return s=a_.bind(null,t),a=se(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Zt(s),t.callbackPriority=2,t.callbackNode=null,2}function a_(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Iu()&&t.callbackNode!==a)return null;var s=Ae;return s=ms(t,t===je?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(k0(t,s,n),i_(t,k()),t.callbackNode!=null&&t.callbackNode===a?a_.bind(null,t):null)}function s_(t,n){if(Iu())return null;k0(t,n,!0)}function Vy(){eM(function(){(Ie&6)!==0?se(Ut,Gy):n_()})}function Oh(){if(Ja===0){var t=bs;t===0&&(t=ds,ds<<=1,(ds&261888)===0&&(ds=256)),Ja=t}return Ja}function r_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ol(t)}function ky(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var c=r_((u[Yt]||null).action),v=s.submitter;v&&(n=(n=v[Yt]||null)?r_(n.formAction):v.getAttribute("formAction"),n!==null&&(c=n,v=null));var E=new Bl("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ja!==0){var z=new FormData(u,v);Vf(a,{pending:!0,data:z,method:u.method,action:c},null,z)}}else typeof c=="function"&&(E.preventDefault(),z=new FormData(u,v),Vf(a,{pending:!0,data:z,method:u.method,action:c},c,z))},currentTarget:u}]})}}for(var Ph=0;Ph<rf.length;Ph++){var zh=rf[Ph],Xy=zh.toLowerCase(),Yy=zh[0].toUpperCase()+zh.slice(1);Ri(Xy,"on"+Yy)}Ri(Nm,"onAnimationEnd"),Ri(Lm,"onAnimationIteration"),Ri(Om,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(ty,"onTransitionRun"),Ri(ey,"onTransitionStart"),Ri(ny,"onTransitionCancel"),Ri(Pm,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function o_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var v=s.length-1;0<=v;v--){var E=s[v],z=E.instance,W=E.currentTarget;if(E=E.listener,z!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=W;try{c(u)}catch(at){Gl(at)}u.currentTarget=null,c=z}else for(v=0;v<s.length;v++){if(E=s[v],z=E.instance,W=E.currentTarget,E=E.listener,z!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=W;try{c(u)}catch(at){Gl(at)}u.currentTarget=null,c=z}}}}function ye(t,n){var a=n[$t];a===void 0&&(a=n[$t]=new Set);var s=t+"__bubble";a.has(s)||(l_(n,t,2,!1),a.add(s))}function Ih(t,n,a){var s=0;n&&(s|=4),l_(a,t,s,n)}var Fu="_reactListening"+Math.random().toString(36).slice(2);function Bh(t){if(!t[Fu]){t[Fu]=!0,Ze.forEach(function(a){a!=="selectionchange"&&(qy.has(a)||Ih(a,!1,t),Ih(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Fu]||(n[Fu]=!0,Ih("selectionchange",!1,n))}}function l_(t,n,a,s){switch(Q_(n)){case 2:var u=BM;break;case 8:u=FM;break;default:u=ad}a=u.bind(null,n,a,t),u=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Fh(t,n,a,s,u){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var E=s.stateNode.containerInfo;if(E===u)break;if(v===4)for(v=s.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;E!==null;){if(v=ze(E),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){s=c=v;continue t}E=E.parentNode}}s=s.return}lm(function(){var W=c,at=kc(a),_t=[];t:{var X=zm.get(t);if(X!==void 0){var et=Bl,Ot=t;switch(t){case"keypress":if(zl(a)===0)break t;case"keydown":case"keyup":et=DS;break;case"focusin":Ot="focus",et=Zc;break;case"focusout":Ot="blur",et=Zc;break;case"beforeblur":case"afterblur":et=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=vS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=PS;break;case Nm:case Lm:case Om:et=yS;break;case Pm:et=IS;break;case"scroll":case"scrollend":et=gS;break;case"wheel":et=FS;break;case"copy":case"cut":case"paste":et=ES;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=dm;break;case"submit":et=LS;break;case"toggle":case"beforetoggle":et=GS}var qt=(n&4)!==0,de=!qt&&(t==="scroll"||t==="scrollend"),q=qt?X!==null?X+"Capture":null:X;qt=[];for(var V=W,tt;V!==null;){var pt=V;if(tt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||tt===null||q===null||(pt=yo(V,q),pt!=null&&qt.push(tl(V,pt,tt))),de)break;V=V.return}0<qt.length&&(X=new et(X,Ot,null,a,at),_t.push({event:X,listeners:qt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",et&&a!==Vc&&(Ot=a.relatedTarget||a.fromElement)&&(ze(Ot)||Ot[ne]))break t;(X||et)&&(Ot=at.window===at?at:(et=at.ownerDocument)?et.defaultView||et.parentWindow:window,X?(et=a.relatedTarget||a.toElement,X=W,et=et?ze(et):null,et!==null&&(de=f(et),qt=et.tag,et!==de||qt!==5&&qt!==27&&qt!==6)&&(et=null)):(X=null,et=W),X!==et&&(qt=fm,pt="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(qt=dm,pt="onPointerLeave",q="onPointerEnter",V="pointer"),de=X==null?Ot:gn(X),tt=et==null?Ot:gn(et),Ot=new qt(pt,V+"leave",X,a,at),Ot.target=de,Ot.relatedTarget=tt,pt=null,ze(at)===W&&(qt=new qt(q,V+"enter",et,a,at),qt.target=tt,qt.relatedTarget=de,pt=qt),de=pt,qt=X&&et?O(X,et,Wy):null,X!==null&&u_(_t,Ot,X,qt,!1),et!==null&&de!==null&&u_(_t,de,et,qt,!0)))}t:{if(X=W?gn(W):window,et=X.nodeName&&X.nodeName.toLowerCase(),et==="select"||et==="input"&&X.type==="file")var Gt=ym;else if(xm(X))if(Mm)Gt=QS;else{Gt=ZS;var Re=jS}else et=X.nodeName,!et||et.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?W&&Gc(W.elementType)&&(Gt=ym):Gt=KS;if(Gt&&(Gt=Gt(t,W))){Sm(_t,Gt,a,at);break t}Re&&Re(t,X,W)}switch(Re=W?gn(W):window,t){case"focusin":(xm(Re)||Re.contentEditable==="true")&&(ar=Re,nf=W,wo=null);break;case"focusout":wo=nf=ar=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,Dm(_t,a,at);break;case"selectionchange":if($S)break;case"keydown":case"keyup":Dm(_t,a,at)}var Jt;if(Qc)t:{switch(t){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else ir?_m(t,a)&&(oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(pm&&a.locale!=="ko"&&(ir||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ir&&(Jt=um()):(La=at,qc="value"in La?La.value:La.textContent,ir=!0)),Re=Hu(W,oe),0<Re.length&&(oe=new hm(oe,t,null,a,at),_t.push({event:oe,listeners:Re}),Jt?oe.data=Jt:(Jt=vm(a),Jt!==null&&(oe.data=Jt)))),(Jt=kS?XS(t,a):YS(t,a))&&(oe=Hu(W,"onBeforeInput"),0<oe.length&&(Re=new hm("onBeforeInput","beforeinput",null,a,at),_t.push({event:Re,listeners:oe}),Re.data=Jt)),ky(_t,t,W,a,at)}o_(_t,n)})}function tl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Hu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=yo(t,a),u!=null&&s.unshift(tl(t,u,c)),u=yo(t,n),u!=null&&s.push(tl(t,u,c))),t.tag===3)return s;t=t.return}return[]}function Wy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function u_(t,n,a,s,u){for(var c=n._reactName,v=[];a!==null&&a!==s;){var E=a,z=E.alternate,W=E.stateNode;if(E=E.tag,z!==null&&z===s)break;E!==5&&E!==26&&E!==27||W===null||(z=W,u?(W=yo(a,c),W!=null&&v.unshift(tl(a,W,z))):u||(W=yo(a,c),W!=null&&v.push(tl(a,W,z)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var jy=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function c_(t){return(typeof t=="string"?t:""+t).replace(jy,`
`).replace(Zy,"")}function f_(t,n){return n=c_(n),c_(t)===n}function ke(t,n,a,s,u,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||tr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&tr(t,""+s);else return;break;case"className":Ll(t,"class",s);break;case"tabIndex":Ll(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ll(t,a,s);break;case"style":rm(t,s,c);return;case"data":if(n!=="object"){Ll(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ol(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&ke(t,n,"name",u.name,u,null),ke(t,n,"formEncType",u.formEncType,u,null),ke(t,n,"formMethod",u.formMethod,u,null),ke(t,n,"formTarget",u.formTarget,u,null)):(ke(t,n,"encType",u.encType,u,null),ke(t,n,"method",u.method,u,null),ke(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ol(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Xi);return;case"onScroll":s!=null&&ye("scroll",t);return;case"onScrollEnd":s!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ol(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ye("beforetoggle",t),ye("toggle",t),Nl(t,"popover",s);break;case"xlinkActuate":ra(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ra(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ra(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ra(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ra(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ra(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ra(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ra(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ra(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Nl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=pS.get(a)||a,Nl(t,a,s);else return}Le=!0}function Hh(t,n,a,s,u,c){switch(a){case"style":rm(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")tr(t,s);else if(typeof s=="number"||typeof s=="bigint")tr(t,""+s);else return;break;case"onScroll":s!=null&&ye("scroll",t);return;case"onScrollEnd":s!=null&&ye("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Fn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Yt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,u);break t}Le=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Nl(t,a,s)}return}Le=!0}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var s=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var v=a[c];if(v!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(t,n,c,v,a,null)}}u&&ke(t,n,"srcSet",a.srcSet,a,null),s&&ke(t,n,"src",a.src,a,null);return;case"input":ye("invalid",t);var E=c=v=u=null,z=null,W=null;for(s in a)if(a.hasOwnProperty(s)){var at=a[s];if(at!=null)switch(s){case"name":u=at;break;case"type":v=at;break;case"checked":z=at;break;case"defaultChecked":W=at;break;case"value":c=at;break;case"defaultValue":E=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:ke(t,n,s,at,a,null)}}nm(t,c,E,z,W,v,u,!1);return;case"select":ye("invalid",t),s=v=c=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":c=E;break;case"defaultValue":v=E;break;case"multiple":s=E;default:ke(t,n,u,E,a,null)}n=c,a=v,t.multiple=!!s,n!=null?$s(t,!!s,n,!1):a!=null&&$s(t,!!s,a,!0);return;case"textarea":ye("invalid",t),c=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(E=a[v],E!=null))switch(v){case"value":s=E;break;case"defaultValue":u=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:ke(t,n,v,E,a,null)}am(t,s,u,c);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ke(t,n,z,s,a,null)}return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(s=0;s<$o.length;s++)ye($o[s],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in a)if(a.hasOwnProperty(W)&&(s=a[W],s!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(t,n,W,s,a,null)}return;default:if(Gc(n)){for(at in a)a.hasOwnProperty(at)&&(s=a[at],s!==void 0&&Hh(t,n,at,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&ke(t,n,E,s,a,null))}var Ky={};function Qy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,v=null,E=null,z=null,W=null,at=null;for(et in a){var _t=a[et];if(a.hasOwnProperty(et)&&_t!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":z=_t;default:s.hasOwnProperty(et)||ke(t,n,et,null,s,_t)}}for(var X in s){var et=s[X];if(_t=a[X],s.hasOwnProperty(X)&&(et!=null||_t!=null))switch(X){case"type":et!==_t&&(Le=!0),c=et;break;case"name":et!==_t&&(Le=!0),u=et;break;case"checked":et!==_t&&(Le=!0),W=et;break;case"defaultChecked":et!==_t&&(Le=!0),at=et;break;case"value":et!==_t&&(Le=!0),v=et;break;case"defaultValue":et!==_t&&(Le=!0),E=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:et!==_t&&ke(t,n,X,et,s,_t)}}Fc(t,v,E,z,W,at,c,u);return;case"select":et=v=E=X=null;for(c in a)if(z=a[c],a.hasOwnProperty(c)&&z!=null)switch(c){case"value":break;case"multiple":et=z;default:s.hasOwnProperty(c)||ke(t,n,c,null,s,z)}for(u in s)if(c=s[u],z=a[u],s.hasOwnProperty(u)&&(c!=null||z!=null))switch(u){case"value":c!==z&&(Le=!0),X=c;break;case"defaultValue":c!==z&&(Le=!0),E=c;break;case"multiple":c!==z&&(Le=!0),v=c;default:c!==z&&ke(t,n,u,c,s,z)}n=E,a=v,s=et,X!=null?$s(t,!!a,X,!1):!!s!=!!a&&(n!=null?$s(t,!!a,n,!0):$s(t,!!a,a?[]:"",!1));return;case"textarea":et=X=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ke(t,n,E,null,s,u)}for(v in s)if(u=s[v],c=a[v],s.hasOwnProperty(v)&&(u!=null||c!=null))switch(v){case"value":u!==c&&(Le=!0),X=u;break;case"defaultValue":u!==c&&(Le=!0),et=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==c&&ke(t,n,v,u,s,c)}im(t,X,et);return;case"option":for(var Ot in a)if(X=a[Ot],a.hasOwnProperty(Ot)&&X!=null&&!s.hasOwnProperty(Ot))switch(Ot){case"selected":t.selected=!1;break;default:ke(t,n,Ot,null,s,X)}for(z in s)if(X=s[z],et=a[z],s.hasOwnProperty(z)&&X!==et&&(X!=null||et!=null))switch(z){case"selected":X!==et&&(Le=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:ke(t,n,z,X,s,et)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in a)X=a[qt],a.hasOwnProperty(qt)&&X!=null&&!s.hasOwnProperty(qt)&&ke(t,n,qt,null,s,X);for(W in s)if(X=s[W],et=a[W],s.hasOwnProperty(W)&&X!==et&&(X!=null||et!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,n));break;default:ke(t,n,W,X,s,et)}return;default:if(Gc(n)){for(var de in a)X=a[de],a.hasOwnProperty(de)&&X!==void 0&&!s.hasOwnProperty(de)&&Hh(t,n,de,void 0,s,X);for(at in s)X=s[at],et=a[at],!s.hasOwnProperty(at)||X===et||X===void 0&&et===void 0||Hh(t,n,at,X,s,et);return}}for(var q in a)X=a[q],a.hasOwnProperty(q)&&X!=null&&!s.hasOwnProperty(q)&&ke(t,n,q,null,s,X);for(_t in s)X=s[_t],et=a[_t],!s.hasOwnProperty(_t)||X===et||X==null&&et==null||ke(t,n,_t,X,s,et)}function h_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],c=u.transferSize,v=u.initiatorType,E=u.duration;if(c&&E&&h_(v)){for(v=0,E=u.responseEnd,s+=1;s<a.length;s++){var z=a[s],W=z.startTime;if(W>E)break;var at=z.transferSize,_t=z.initiatorType;at&&h_(_t)&&(z=z.responseEnd,v+=at*(z<E?1:(E-W)/(z-W)))}if(--s,n+=8*(c+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Gh=null,Vh=null;function el(t){return t.nodeType===9?t:t.ownerDocument}function d_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function m_(t,n,a,s){return a=el(a).createElement(t),a[Dt]=s,a[Yt]=n,Un(a,t,n),Ne(a),a}function kh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xh=null;function $y(){var t=window.event;return t&&t.type==="popstate"?t===Xh?!1:(Xh=t,!0):(Xh=null,!1)}var Yh=typeof setTimeout=="function"?setTimeout:void 0,tM=typeof clearTimeout=="function"?clearTimeout:void 0,g_=typeof Promise=="function"?Promise:void 0,__=typeof requestAnimationFrame=="function"?requestAnimationFrame:Yh,eM=typeof queueMicrotask=="function"?queueMicrotask:typeof g_<"u"?function(t){return g_.resolve(null).then(t).catch(nM)}:Yh;function nM(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function v_(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Ir(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")$h(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,$h(a);for(var c=a.firstChild;c;){var v=c.nextSibling,E=c.nodeName;c[Pe]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=v}}else a==="body"&&$h(t.ownerDocument.body);a=u}while(a);Ir(n)}function x_(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function S_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function y_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function iM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function qh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return iM(n,a,t)}function aM(t){return t.documentElement.clientHeight}function sM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function rM(t,n,a,s,u,c,v,E,z){var W=n.nodeType===9?n:n.ownerDocument;try{var at=W.startViewTransition({update:function(){var X=W.defaultView,et=X.navigation&&X.navigation.transition,Ot=W.fonts.status;s();var qt=[];if(Ot==="loaded"&&(aM(W),W.fonts.status==="loading"&&qt.push(W.fonts.ready)),Ot=qt.length,t!==null)for(var de=t.suspenseyImages,q=0,V=0;V<de.length;V++){var tt=de[V];if(!tt.complete){var pt=tt.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<X.innerHeight&&pt.left<X.innerWidth){if(q+=V_(tt),q>ku){qt.length=Ot;break}tt=new Promise(sM.bind(tt)),qt.push(tt)}}}if(0<qt.length)return X=Promise.race([Promise.all(qt),new Promise(function(Gt){return setTimeout(Gt,500)})]).then(u,u),(et?Promise.allSettled([et.finished,X]):X).then(c,c);if(u(),et)return et.finished.then(c,c);c()},types:a});W.__reactViewTransition=at;var _t=[];return at.ready.then(function(){for(var X=W.documentElement.getAnimations({subtree:!0}),et=0;et<X.length;et++){var Ot=X[et],qt=Ot.effect,de=qt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){_t.push(Ot),Ot=qt.getKeyframes();for(var q=de=void 0,V=!0,tt=0;tt<Ot.length;tt++){var pt=Ot[tt],Gt=pt.width;if(de===void 0)de=Gt;else if(de!==Gt){V=!1;break}if(Gt=pt.height,q===void 0)q=Gt;else if(q!==Gt){V=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}V&&de!==void 0&&q!==void 0&&(qt.setKeyframes(Ot),V=getComputedStyle(qt.target,qt.pseudoElement),V.width!==de||V.height!==q)&&(V=Ot[0],V.width=de,V.height=q,V=Ot[Ot.length-1],V.width=de,V.height=q,qt.setKeyframes(Ot))}}v()},function(X){W.__reactViewTransition===at&&(W.__reactViewTransition=null);try{if(typeof X=="object"&&X!==null)switch(X.name){case"InvalidStateError":(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null)}X!==null&&z(X)}finally{s(),u(),v()}}),at.finished.finally(function(){for(var X=0;X<_t.length;X++)_t[X].cancel();W.__reactViewTransition===at&&(W.__reactViewTransition=null),E()}),at}catch{return s(),u(),v(),null}}function zs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}zs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:N({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},zs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[u])}return s},zs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function M_(t){return{name:t,group:new zs("group",t),imagePair:new zs("image-pair",t),old:new zs("old",t),new:new zs("new",t)}}function ui(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ui.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(T_(c,t,n,a)===-1){var v=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(z){v.removeEventListener(t,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),s!==null&&(u=v.removeEventListener.bind(v,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Ur(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:u}),_(this._fragmentFiber.child,!1,oM,t,E,s)}this._eventListeners=c}};function oM(t,n,a,s){return y(t).addEventListener(n,a,s),!1}ui.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=T_(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var c=u.cleanup;u=Ur(u.optionsOrUseCapture),_(this._fragmentFiber.child,!1,lM,t,a,u),s.splice(n,1),c!==null&&c()}};function lM(t,n,a,s){return y(t).removeEventListener(n,a,s),!1}function Ur(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function E_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function T_(t,n,a,s){if(t.length===0)return-1;s=E_(s);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&E_(c.optionsOrUseCapture)===s)return u}return-1}ui.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];s.addEventListener(c.type,c.attachedListener,Ur(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],s.removeEventListener(c.type,c.attachedListener,Ur(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},ui.prototype.focus=function(t){_(this._fragmentFiber.child,!0,b_,t,void 0,void 0)};function b_(t,n){return t.tag===6?!1:(t=y(t),SM(t,n))}ui.prototype.focusLast=function(t){var n=[];_(this._fragmentFiber.child,!0,Wh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!b_(n[a],t);a--);};function Wh(t,n){return n.push(t),!1}ui.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=y(t),t=el(t).activeElement,t!==null&&_(this._fragmentFiber.child,!1,uM,t,void 0,void 0))};function uM(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ui.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),_(this._fragmentFiber.child,!1,cM,t,void 0,void 0)};function cM(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}ui.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),_(this._fragmentFiber.child,!1,fM,t,void 0,void 0);for(var a=n=0;a<Ni.length;a++){var s=Ni[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ni[n++]=s}Ni.length=n}};function fM(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ni=[],jh=!1;function hM(t,n,a){Ni.push({fragmentInstance:t,observer:n,instance:a}),jh||(jh=!0,yM(function(){jh=!1;var s=Ni;Ni=[];for(var u=0;u<s.length;u++){var c=s[u];c.observer.unobserve(c.instance)}}))}ui.prototype.getClientRects=function(){var t=[];return _(this._fragmentFiber.child,!1,dM,t,void 0,void 0),t};function dM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}ui.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},ui.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,Wh,a,void 0,void 0);var s=y(n);if(a.length===0){if(a=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(t),E=u.compareDocumentPosition(t),z=v&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=s&&c&&v&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&u===t||z||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||pM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function pM(t,n,a,s,u){var c=ze(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=S(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=O(a,c,B),n===null?n=!1:(_(n,!0,P,c,a),c=m,m=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=O(s,c,B),n===null?n=!1:(_(n,!0,A,c,s),c=m,L=m=null,n=c!==null)),n):!1}function A_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ui.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];_(this._fragmentFiber.child,!1,Wh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=b(this._fragmentFiber);if(s=a?s[1]||s[0]||S(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=y(s),A_(t,a);return}if(s=y(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=y(u),A_(u,a)):y(u).scrollIntoView(t),s+=a?-1:1}};function mM(t,n){return t=y(t),R_(t,n),!1}function R_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function C_(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Ur(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var v=0,E=0;E<Ni.length;E++){var z=Ni[E];(z.fragmentInstance!==n||z.observer!==c||z.instance!==t)&&(Ni[v++]=z)}Ni.length=v,c.observe(t)}),R_(t,n))}function gM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Ur(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?hM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Zh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zh(a),te(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _M(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Pe])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function vM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function w_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function Kh(t){return t.data==="$?"||t.data==="$~"}function Qh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function xM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Jh=null;function D_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function U_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function SM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function yM(t){__(function(){__(function(n){return t(n)})})}function N_(t,n,a){switch(n=el(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function L_(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&ke(t,n,s,null,Ky,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Xi&&(t.onclick=null),te(t)}function $h(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);te(t)}var Mi=new Map,O_=new Set;function nl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var xa=Vt.d;Vt.d={f:MM,r:EM,D:TM,C:bM,L:AM,m:RM,X:wM,S:CM,M:DM};function MM(){var t=xa.f(),n=Ou();return t||n}function EM(t){var n=_e(t);n!==null&&n.tag===5&&n.type==="form"?zg(n):xa.r(t)}var Nr=typeof document>"u"?null:document;function P_(t,n,a){var s=Nr;if(s&&typeof n=="string"&&n){var u=pi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),O_.has(u)||(O_.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Un(n,"link",t),Ne(n),s.head.appendChild(n)))}}function TM(t){xa.D(t),P_("dns-prefetch",t,null)}function bM(t,n){xa.C(t,n),P_("preconnect",t,n)}function AM(t,n,a){xa.L(t,n,a);var s=Nr;if(s&&t&&n){var u='link[rel="preload"][as="'+pi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pi(a.imageSizes)+'"]')):u+='[href="'+pi(t)+'"]';var c=u;switch(n){case"style":c=Lr(t);break;case"script":c=Or(t)}if(!(Mi.has(c)||(t=N({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(c,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(il(c))||n==="script"&&s.querySelector(al(c))))){var v=s.createElement("link");Un(v,"link",t),n==="style"&&(v[Ue]=!0,v.onload=v.onerror=function(){Na(v)}),Ne(v),s.head.appendChild(v)}}}function RM(t,n){xa.m(t,n);var a=Nr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pi(s)+'"][href="'+pi(t)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Or(t)}if(!Mi.has(c)&&(t=N({rel:"modulepreload",href:t},n),Mi.set(c,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(c)))return}s=a.createElement("link"),Un(s,"link",t),Ne(s),a.head.appendChild(s)}}}function CM(t,n,a){xa.S(t,n,a);var s=Nr;if(s&&t){var u=ei(s).hoistableStyles,c=Lr(t);n=n||"default";var v=u.get(c);if(!v){var E={loading:0,preload:null};if(v=s.querySelector(il(c)))E.loading=5;else{t=N({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(c))&&td(t,a);var z=v=s.createElement("link");Ne(z),Un(z,"link",t),z._p=new Promise(function(W,at){z.onload=W,z.onerror=at}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Gu(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:E},u.set(c,v)}}}function wM(t,n){xa.X(t,n);var a=Nr;if(a&&t){var s=ei(a).hoistableScripts,u=Or(t),c=s.get(u);c||(c=a.querySelector(al(u)),c||(t=N({src:t,async:!0},n),(n=Mi.get(u))&&ed(t,n),c=a.createElement("script"),Ne(c),Un(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function DM(t,n){xa.M(t,n);var a=Nr;if(a&&t){var s=ei(a).hoistableScripts,u=Or(t),c=s.get(u);c||(c=a.querySelector(al(u)),c||(t=N({src:t,async:!0,type:"module"},n),(n=Mi.get(u))&&ed(t,n),c=a.createElement("script"),Ne(c),Un(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function z_(t,n,a,s){var u=(u=Te.current)?nl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Lr(a.href),n=ei(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Lr(a.href);var c=ei(u).hoistableStyles,v=c.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,v),(c=u.querySelector(il(t)))?c._p||(v.instance=c,v.state.loading=5):(c=Mi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,c)),UM(u,t,c,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Or(a),n=ei(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Lr(t){return'href="'+pi(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function I_(t){return N({},t,{"data-precedence":t.precedence,precedence:null})}function UM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ue]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Ue]=!0,n.onload=n.onerror=Na.bind(null,n),Un(n,"link",a),Ne(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Or(t){return'[src="'+pi(t)+'"]'}function al(t){return"script[async]"+t}function B_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+pi(a.href)+'"]');if(s)return n.instance=s,Ne(s),s;var u=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ne(s),Un(s,"style",u),Gu(s,a.precedence,t),n.instance=s;case"stylesheet":u=Lr(a.href);var c=t.querySelector(il(u));if(c)return n.state.loading|=4,n.instance=c,Ne(c),c;s=I_(a),(u=Mi.get(u))&&td(s,u),c=(t.ownerDocument||t).createElement("link"),Ne(c);var v=c;return v._p=new Promise(function(E,z){v.onload=E,v.onerror=z}),Un(c,"link",s),n.state.loading|=4,Gu(c,a.precedence,t),n.instance=c;case"script":return c=Or(a.src),(u=t.querySelector(al(c)))?(n.instance=u,Ne(u),u):(s=a,(u=Mi.get(c))&&(s=N({},a),ed(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ne(u),Un(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Gu(s,a.precedence,t));return n.instance}function Gu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,v=0;v<s.length;v++){var E=s[v];if(E.dataset.precedence===n)c=E;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Vu=null;function F_(t,n,a){if(Vu===null){var s=new Map,u=Vu=new Map;u.set(a,s)}else u=Vu,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Pe]||c[Dt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var v=c.getAttribute(n)||"";v=t+v;var E=s.get(v);E?E.push(c):s.set(v,[c])}}return s}function nd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function NM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function H_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function G_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function V_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function k_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=V_(n),t.suspenseyImages.push(n)),t=PM.bind(t),n.decode().then(t,t))}function LM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Lr(s.href),c=n.querySelector(il(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,Ne(c);return}c=n.ownerDocument||n,s=I_(s),(u=Mi.get(u))&&td(s,u),c=c.createElement("link"),Ne(c);var v=c;v._p=new Promise(function(E,z){v.onload=E,v.onerror=z}),Un(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ku=0;function OM(t,n){return t.stylesheets&&t.count===0&&Yu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Yu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&ku===0&&(ku=62500*Jy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>ku?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function X_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Yu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function sl(){this.count--,X_(this)}function PM(){this.imgCount--,X_(this)}var Xu=null;function Yu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xu=new Map,n.forEach(zM,t),Xu=null,sl.call(t))}function zM(t,n){if(!(n.state.loading&4)){var a=Xu.get(t);if(a)var s=a.get(null);else{a=new Map,Xu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var v=u[c];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),c=a.get(v)||s,c===s&&a.set(null,u),a.set(v,u),this.count++,s=sl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Pr={$$typeof:ut,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function IM(t,n,a,s,u,c,v,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=So(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.hiddenUpdates=So(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function Y_(t,n,a,s,u,c,v,E,z,W,at,_t){return t=new IM(t,n,a,v,z,W,at,_t,E),n=1,c===!0&&(n|=24),c=Wn(3,null,null,n),t.current=c,c.stateNode=t,n=_f(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},yf(c),t}function q_(t){return t?(t=or,t):or}function W_(t,n,a,s,u,c){u=q_(u),s.context===null?s.context=u:s.pendingContext=u,s=Ga(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Va(t,s,n),a!==null&&(Qn(a,t,n),zo(a,t,n))}function j_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function id(t,n){j_(t,n),(t=t.alternate)&&j_(t,n)}function Z_(t){if(t.tag===13||t.tag===31){var n=xs(t,67108864);n!==null&&Qn(n,t,67108864),id(t,67108864)}}function K_(t){if(t.tag===13||t.tag===31){var n=li();n=ot(n);var a=xs(t,n);a!==null&&Qn(a,t,n),id(t,n)}}var zr=!0;function BM(t,n,a,s){var u=Et.T;Et.T=null;var c=Vt.p;try{Vt.p=2,ad(t,n,a,s)}finally{Vt.p=c,Et.T=u}}function FM(t,n,a,s){var u=Et.T;Et.T=null;var c=Vt.p;try{Vt.p=8,ad(t,n,a,s)}finally{Vt.p=c,Et.T=u}}function ad(t,n,a,s){if(zr){var u=sd(s);if(u===null)Fh(t,n,s,qu,a),J_(t,s);else if(GM(u,t,n,a,s))s.stopPropagation();else if(J_(t,s),n&4&&-1<HM.indexOf(t)){for(;u!==null;){var c=_e(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var v=di(c.pendingLanes);if(v!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;v;){var z=1<<31-Ln(v);E.entanglements[1]|=z,v&=~z}ta(c),(Ie&6)===0&&(Uu=k()+500,Jo(0))}}break;case 31:case 13:E=xs(c,2),E!==null&&Qn(E,c,2),Ou(),id(c,2)}if(c=sd(s),c===null&&Fh(t,n,s,qu,a),c===u)break;u=c}u!==null&&s.stopPropagation()}else Fh(t,n,s,null,a)}}function sd(t){return t=kc(t),rd(t)}var qu=null;function rd(t){if(qu=null,t=ze(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return qu=t,null}function Q_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case Ut:return 2;case kt:return 8;case Tt:case vt:return 32;case Wt:return 268435456;default:return 32}default:return 32}}var od=!1,ts=null,es=null,ns=null,rl=new Map,ol=new Map,is=[],HM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function J_(t,n){switch(t){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":es=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":rl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(n.pointerId)}}function ll(t,n,a,s,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},n!==null&&(n=_e(n),n!==null&&Z_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function GM(t,n,a,s,u){switch(n){case"focusin":return ts=ll(ts,t,n,a,s,u),!0;case"dragenter":return es=ll(es,t,n,a,s,u),!0;case"mouseover":return ns=ll(ns,t,n,a,s,u),!0;case"pointerover":var c=u.pointerId;return rl.set(c,ll(rl.get(c)||null,t,n,a,s,u)),!0;case"gotpointercapture":return c=u.pointerId,ol.set(c,ll(ol.get(c)||null,t,n,a,s,u)),!0}return!1}function $_(t){var n=ze(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,It(t.priority,function(){K_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,It(t.priority,function(){K_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Vc=s,a.target.dispatchEvent(s),Vc=null}else return n=_e(a),n!==null&&Z_(n),t.blockedOn=a,!1;n.shift()}return!0}function tv(t,n,a){Wu(t)&&a.delete(n)}function VM(){od=!1,ts!==null&&Wu(ts)&&(ts=null),es!==null&&Wu(es)&&(es=null),ns!==null&&Wu(ns)&&(ns=null),rl.forEach(tv),ol.forEach(tv)}function ju(t,n){t.blockedOn===n&&(t.blockedOn=null,od||(od=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,VM)))}var Zu=null;function ev(t){Zu!==t&&(Zu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zu===t&&(Zu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(rd(s||a)===null)continue;break}var c=_e(a);c!==null&&(t.splice(n,3),n-=3,Vf(c,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Ir(t){function n(z){return ju(z,t)}ts!==null&&ju(ts,t),es!==null&&ju(es,t),ns!==null&&ju(ns,t),rl.forEach(n),ol.forEach(n);for(var a=0;a<is.length;a++){var s=is[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<is.length&&(a=is[0],a.blockedOn===null);)$_(a),a.blockedOn===null&&is.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],c=a[s+1],v=u[Yt]||null;if(typeof c=="function")v||ev(a);else if(v){var E=null;if(c&&c.hasAttribute("formAction")){if(u=c,v=c[Yt]||null)E=v.formAction;else if(rd(u)!==null)continue}else E=v.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),ev(a)}}}function nv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ld(t){this._internalRoot=t}Ku.prototype.render=ld.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=li();W_(a,s,t,n,null,null)},Ku.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;W_(t.current,2,null,t,null,null),Ou(),n[ne]=null}};function Ku(t){this._internalRoot=t}Ku.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<is.length&&n!==0&&n<is[a].priority;a++);is.splice(a,0,t),a===0&&$_(t)}};var iv=e.version;if(iv!=="19.3.1")throw Error(r(527,iv,"19.3.1"));Vt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var kM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{be=Qu.inject(kM),en=Qu}catch{}}return cl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=qg,c=Wg,v=jg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Y_(t,1,!1,null,null,a,s,null,u,c,v,nv),t[ne]=n.current,Bh(t),new ld(n)},cl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",c=qg,v=Wg,E=jg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Y_(t,1,!0,n,a??null,s,u,z,c,v,E,nv),n.context=q_(null),a=n.current,s=li(),s=ot(s),u=Ga(s),u.callback=null,Va(a,u,s),a=s,n.current.lanes=a,gs(n,a),ta(n),t[ne]=n.current,Bh(t),new Ku(n)},cl.version="19.3.1",cl}var dv;function eE(){if(dv)return fd.exports;dv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),fd.exports=tE(),fd.exports}var nE=eE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yx=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=Me.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:f,iconNode:h,...d},p)=>Me.createElement("svg",{ref:p,...aE,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:yx("lucide",l),...d},[...h.map(([g,x])=>Me.createElement(g,x)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=(o,e)=>{const i=Me.forwardRef(({className:r,...l},f)=>Me.createElement(sE,{ref:f,iconNode:e,className:yx(`lucide-${iE(o)}`,r),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=ti("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=ti("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=ti("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=ti("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ti("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=ti("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=ti("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=ti("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=ti("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=ti("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=ti("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=ti("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=ti("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ti("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bp="180",mE=0,vv=1,gE=2,Mx=1,_E=2,ba=3,hs=0,Bn=1,Aa=2,Ca=0,no=1,wc=2,xv=3,Sv=4,vE=5,Ys=100,xE=101,SE=102,yE=103,ME=104,EE=200,TE=201,bE=202,AE=203,Wd=204,jd=205,RE=206,CE=207,wE=208,DE=209,UE=210,NE=211,LE=212,OE=213,PE=214,Zd=0,Kd=1,Qd=2,ao=3,Jd=4,$d=5,tp=6,ep=7,Ex=0,zE=1,IE=2,wa=0,Tx=1,bx=2,Ax=3,Fp=4,Rx=5,Cx=6,wx=7,Dx=300,so=301,ro=302,np=303,ip=304,Lc=306,ap=1e3,Ws=1001,sp=1002,Bi=1003,BE=1004,Ju=1005,na=1006,gd=1007,js=1008,Hi=1009,Ux=1010,Nx=1011,yl=1012,Hp=1013,Ks=1014,Ra=1015,Fi=1016,Gp=1017,Vp=1018,Ml=1020,Lx=35902,Ox=35899,Px=1021,zx=1022,Ii=1023,El=1026,Tl=1027,Ix=1028,kp=1029,Bx=1030,Xp=1031,Yp=1033,Mc=33776,Ec=33777,Tc=33778,bc=33779,rp=35840,op=35841,lp=35842,up=35843,cp=36196,fp=37492,hp=37496,dp=37808,pp=37809,mp=37810,gp=37811,_p=37812,vp=37813,xp=37814,Sp=37815,yp=37816,Mp=37817,Ep=37818,Tp=37819,bp=37820,Ap=37821,Rp=36492,Cp=36494,wp=36495,Dp=36283,Up=36284,Np=36285,Lp=36286,FE=3200,HE=3201,Fx=0,GE=1,fs="",Jn="srgb",oo="srgb-linear",Dc="linear",Xe="srgb",Br=7680,yv=519,VE=512,kE=513,XE=514,Hx=515,YE=516,qE=517,WE=518,jE=519,Mv=35044,Ev="300 es",ia=2e3,Uc=2001;class fo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tv=1234567;const vl=Math.PI/180,bl=180/Math.PI;function ho(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function Ce(o,e,i){return Math.max(e,Math.min(i,o))}function qp(o,e){return(o%e+e)%e}function ZE(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function KE(o,e,i){return o!==e?(i-o)/(e-o):0}function xl(o,e,i){return(1-i)*o+i*e}function QE(o,e,i,r){return xl(o,e,1-Math.exp(-i*r))}function JE(o,e=1){return e-Math.abs(qp(o,e*2)-e)}function $E(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function tT(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function eT(o,e){return o+Math.floor(Math.random()*(e-o+1))}function nT(o,e){return o+Math.random()*(e-o)}function iT(o){return o*(.5-Math.random())}function aT(o){o!==void 0&&(Tv=o);let e=Tv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sT(o){return o*vl}function rT(o){return o*bl}function oT(o){return(o&o-1)===0&&o!==0}function lT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function uT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function cT(o,e,i,r,l){const f=Math.cos,h=Math.sin,d=f(i/2),p=h(i/2),g=f((e+r)/2),x=h((e+r)/2),_=f((e-r)/2),S=h((e-r)/2),M=f((r-e)/2),b=h((r-e)/2);switch(l){case"XYX":o.set(d*x,p*_,p*S,d*g);break;case"YZY":o.set(p*S,d*x,p*_,d*g);break;case"ZXZ":o.set(p*_,p*S,d*x,d*g);break;case"XZX":o.set(d*x,p*b,p*M,d*g);break;case"YXY":o.set(p*M,d*x,p*b,d*g);break;case"ZYZ":o.set(p*b,p*M,d*x,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function $r(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ti={DEG2RAD:vl,RAD2DEG:bl,generateUUID:ho,clamp:Ce,euclideanModulo:qp,mapLinear:ZE,inverseLerp:KE,lerp:xl,damp:QE,pingpong:JE,smoothstep:$E,smootherstep:tT,randInt:eT,randFloat:nT,randFloatSpread:iT,seededRandom:aT,degToRad:sT,radToDeg:rT,isPowerOfTwo:oT,ceilPowerOfTwo:lT,floorPowerOfTwo:uT,setQuaternionFromProperEuler:cT,normalize:Xn,denormalize:$r};class fe{constructor(e=0,i=0){fe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ce(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ce(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*l+e.x,this.y=f*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,h,d){let p=r[l+0],g=r[l+1],x=r[l+2],_=r[l+3];const S=f[h+0],M=f[h+1],b=f[h+2],C=f[h+3];if(d===0){e[i+0]=p,e[i+1]=g,e[i+2]=x,e[i+3]=_;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=C;return}if(_!==C||p!==S||g!==M||x!==b){let y=1-d;const m=p*S+g*M+x*b+_*C,L=m>=0?1:-1,P=1-m*m;if(P>Number.EPSILON){const B=Math.sqrt(P),O=Math.atan2(B,m*L);y=Math.sin(y*O)/B,d=Math.sin(d*O)/B}const A=d*L;if(p=p*y+S*A,g=g*y+M*A,x=x*y+b*A,_=_*y+C*A,y===1-d){const B=1/Math.sqrt(p*p+g*g+x*x+_*_);p*=B,g*=B,x*=B,_*=B}}e[i]=p,e[i+1]=g,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,f,h){const d=r[l],p=r[l+1],g=r[l+2],x=r[l+3],_=f[h],S=f[h+1],M=f[h+2],b=f[h+3];return e[i]=d*b+x*_+p*M-g*S,e[i+1]=p*b+x*S+g*_-d*M,e[i+2]=g*b+x*M+d*S-p*_,e[i+3]=x*b-d*_-p*S-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,p=Math.sin,g=d(r/2),x=d(l/2),_=d(f/2),S=p(r/2),M=p(l/2),b=p(f/2);switch(h){case"XYZ":this._x=S*x*_+g*M*b,this._y=g*M*_-S*x*b,this._z=g*x*b+S*M*_,this._w=g*x*_-S*M*b;break;case"YXZ":this._x=S*x*_+g*M*b,this._y=g*M*_-S*x*b,this._z=g*x*b-S*M*_,this._w=g*x*_+S*M*b;break;case"ZXY":this._x=S*x*_-g*M*b,this._y=g*M*_+S*x*b,this._z=g*x*b+S*M*_,this._w=g*x*_-S*M*b;break;case"ZYX":this._x=S*x*_-g*M*b,this._y=g*M*_+S*x*b,this._z=g*x*b-S*M*_,this._w=g*x*_+S*M*b;break;case"YZX":this._x=S*x*_+g*M*b,this._y=g*M*_+S*x*b,this._z=g*x*b-S*M*_,this._w=g*x*_-S*M*b;break;case"XZY":this._x=S*x*_-g*M*b,this._y=g*M*_-S*x*b,this._z=g*x*b+S*M*_,this._w=g*x*_+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],h=i[1],d=i[5],p=i[9],g=i[2],x=i[6],_=i[10],S=r+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-p)*M,this._y=(f-g)*M,this._z=(h-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(x-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(f+g)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(f-g)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(h-l)/M,this._x=(f+g)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ce(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,h=e._w,d=i._x,p=i._y,g=i._z,x=i._w;return this._x=r*x+h*d+l*g-f*p,this._y=l*x+h*p+f*d-r*g,this._z=f*x+h*g+r*p-l*d,this._w=h*x-r*d-l*p-f*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=f,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const g=Math.sqrt(p),x=Math.atan2(g,d),_=Math.sin((1-i)*x)/g,S=Math.sin(i*x)/g;return this._w=h*_+this._w*S,this._x=r*_+this._x*S,this._y=l*_+this._y*S,this._z=f*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,i=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(bv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(bv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,h=e.y,d=e.z,p=e.w,g=2*(h*l-d*r),x=2*(d*i-f*l),_=2*(f*r-h*i);return this.x=i+p*g+h*_-d*x,this.y=r+p*x+d*g-f*_,this.z=l+p*_+f*x-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this.z=Ce(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this.z=Ce(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ce(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-f*d,this.y=f*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ce(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _d=new Z,bv=new Qs;class pe{constructor(e,i,r,l,f,h,d,p,g){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,p,g)}set(e,i,r,l,f,h,d,p,g){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=f,x[5]=p,x[6]=r,x[7]=h,x[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[3],p=r[6],g=r[1],x=r[4],_=r[7],S=r[2],M=r[5],b=r[8],C=l[0],y=l[3],m=l[6],L=l[1],P=l[4],A=l[7],B=l[2],O=l[5],N=l[8];return f[0]=h*C+d*L+p*B,f[3]=h*y+d*P+p*O,f[6]=h*m+d*A+p*N,f[1]=g*C+x*L+_*B,f[4]=g*y+x*P+_*O,f[7]=g*m+x*A+_*N,f[2]=S*C+M*L+b*B,f[5]=S*y+M*P+b*O,f[8]=S*m+M*A+b*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],g=e[7],x=e[8];return i*h*x-i*d*g-r*f*x+r*d*p+l*f*g-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],g=e[7],x=e[8],_=x*h-d*g,S=d*p-x*f,M=g*f-h*p,b=i*_+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=_*C,e[1]=(l*g-x*r)*C,e[2]=(d*r-l*h)*C,e[3]=S*C,e[4]=(x*i-l*p)*C,e[5]=(l*f-d*i)*C,e[6]=M*C,e[7]=(r*p-g*i)*C,e[8]=(h*i-r*f)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,h,d){const p=Math.cos(f),g=Math.sin(f);return this.set(r*p,r*g,-r*(p*h+g*d)+h+e,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(vd.makeScale(e,i)),this}rotate(e){return this.premultiply(vd.makeRotation(-e)),this}translate(e,i){return this.premultiply(vd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vd=new pe;function Gx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Nc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function fT(){const o=Nc("canvas");return o.style.display="block",o}const Av={};function Al(o){o in Av||(Av[o]=!0,console.warn(o))}function hT(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const Rv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dT(){const o={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Xe&&(l.r=Da(l.r),l.g=Da(l.g),l.b=Da(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=io(l.r),l.g=io(l.g),l.b=io(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?Dc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Al("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Al("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[oo]:{primaries:e,whitePoint:r,transfer:Dc,toXYZ:Rv,fromXYZ:Cv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:Rv,fromXYZ:Cv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),o}const De=dT();function Da(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function io(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Fr;class pT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fr===void 0&&(Fr=Nc("canvas")),Fr.width=e.width,Fr.height=e.height;const l=Fr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Fr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Nc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Da(f[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Da(i[r]/255)*255):i[r]=Da(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mT=0;class Wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(xd(l[h].image)):f.push(xd(l[h]))}else f=xd(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function xd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?pT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gT=0;const Sd=new Z;class qn extends fo{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,r=Ws,l=Ws,f=na,h=js,d=Ii,p=Hi,g=qn.DEFAULT_ANISOTROPY,x=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=ho(),this.name="",this.source=new Wp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sd).x}get height(){return this.source.getSize(Sd).y}get depth(){return this.source.getSize(Sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ap:e.x=e.x-Math.floor(e.x);break;case Ws:e.x=e.x<0?0:1;break;case sp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ap:e.y=e.y-Math.floor(e.y);break;case Ws:e.y=e.y<0?0:1;break;case sp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Dx;qn.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,i=0,r=0,l=1){We.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const p=e.elements,g=p[0],x=p[4],_=p[8],S=p[1],M=p[5],b=p[9],C=p[2],y=p[6],m=p[10];if(Math.abs(x-S)<.01&&Math.abs(_-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+C)<.1&&Math.abs(b+y)<.1&&Math.abs(g+M+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(g+1)/2,A=(M+1)/2,B=(m+1)/2,O=(x+S)/4,N=(_+C)/4,G=(b+y)/4;return P>A&&P>B?P<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(P),l=O/r,f=N/r):A>B?A<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(A),r=O/l,f=G/l):B<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(B),r=N/f,l=G/f),this.set(r,l,f,i),this}let L=Math.sqrt((y-b)*(y-b)+(_-C)*(_-C)+(S-x)*(S-x));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(_-C)/L,this.z=(S-x)/L,this.w=Math.acos((g+M+m-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this.z=Ce(this.z,e.z,i.z),this.w=Ce(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this.z=Ce(this.z,e,i),this.w=Ce(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ce(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _T extends fo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:na,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new We(0,0,e,i),this.scissorTest=!1,this.viewport=new We(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new qn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:na,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Wp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends _T{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Vx extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vT extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl{constructor(e=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Li):Li.fromBufferAttribute(f,h),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$u.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$u.copy(r.boundingBox)),$u.applyMatrix4(e.matrixWorld),this.union($u)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),tc.subVectors(this.max,fl),Hr.subVectors(e.a,fl),Gr.subVectors(e.b,fl),Vr.subVectors(e.c,fl),ss.subVectors(Gr,Hr),rs.subVectors(Vr,Gr),Is.subVectors(Hr,Vr);let i=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Is.z,Is.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Is.z,0,-Is.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Is.y,Is.x,0];return!yd(i,Hr,Gr,Vr,tc)||(i=[1,0,0,0,1,0,0,0,1],!yd(i,Hr,Gr,Vr,tc))?!1:(ec.crossVectors(ss,rs),i=[ec.x,ec.y,ec.z],yd(i,Hr,Gr,Vr,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Li=new Z,$u=new Cl,Hr=new Z,Gr=new Z,Vr=new Z,ss=new Z,rs=new Z,Is=new Z,fl=new Z,tc=new Z,ec=new Z,Bs=new Z;function yd(o,e,i,r,l){for(let f=0,h=o.length-3;f<=h;f+=3){Bs.fromArray(o,f);const d=l.x*Math.abs(Bs.x)+l.y*Math.abs(Bs.y)+l.z*Math.abs(Bs.z),p=e.dot(Bs),g=i.dot(Bs),x=r.dot(Bs);if(Math.max(-Math.max(p,g,x),Math.min(p,g,x))>d)return!1}return!0}const xT=new Cl,hl=new Z,Md=new Z;class Oc{constructor(e=new Z,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):xT.setFromPoints(e).getCenter(r);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hl.subVectors(e,this.center);const i=hl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(hl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hl.copy(e.center).add(Md)),this.expandByPoint(hl.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ya=new Z,Ed=new Z,nc=new Z,os=new Z,Td=new Z,ic=new Z,bd=new Z;class kx{constructor(e=new Z,i=new Z(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ed.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),os.copy(this.origin).sub(Ed);const f=e.distanceTo(i)*.5,h=-this.direction.dot(nc),d=os.dot(this.direction),p=-os.dot(nc),g=os.lengthSq(),x=Math.abs(1-h*h);let _,S,M,b;if(x>0)if(_=h*p-d,S=h*d-p,b=f*x,_>=0)if(S>=-b)if(S<=b){const C=1/x;_*=C,S*=C,M=_*(_+h*S+2*d)+S*(h*_+S+2*p)+g}else S=f,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*p)+g;else S=-f,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*p)+g;else S<=-b?(_=Math.max(0,-(-h*f+d)),S=_>0?-f:Math.min(Math.max(-f,-p),f),M=-_*_+S*(S+2*p)+g):S<=b?(_=0,S=Math.min(Math.max(-f,-p),f),M=S*(S+2*p)+g):(_=Math.max(0,-(h*f+d)),S=_>0?f:Math.min(Math.max(-f,-p),f),M=-_*_+S*(S+2*p)+g);else S=h>0?-f:f,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*p)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Ed).addScaledVector(nc,S),M}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const r=ya.dot(this.direction),l=ya.dot(ya)-r*r,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,h,d,p;const g=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return g>=0?(r=(e.min.x-S.x)*g,l=(e.max.x-S.x)*g):(r=(e.max.x-S.x)*g,l=(e.min.x-S.x)*g),x>=0?(f=(e.min.y-S.y)*x,h=(e.max.y-S.y)*x):(f=(e.max.y-S.y)*x,h=(e.min.y-S.y)*x),r>h||f>l||((f>r||isNaN(r))&&(r=f),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-S.z)*_,p=(e.max.z-S.z)*_):(d=(e.max.z-S.z)*_,p=(e.min.z-S.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,r,l,f){Td.subVectors(i,e),ic.subVectors(r,e),bd.crossVectors(Td,ic);let h=this.direction.dot(bd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;os.subVectors(this.origin,e);const p=d*this.direction.dot(ic.crossVectors(os,ic));if(p<0)return null;const g=d*this.direction.dot(Td.cross(os));if(g<0||p+g>h)return null;const x=-d*os.dot(bd);return x<0?null:this.at(x/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,r,l,f,h,d,p,g,x,_,S,M,b,C,y){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,p,g,x,_,S,M,b,C,y)}set(e,i,r,l,f,h,d,p,g,x,_,S,M,b,C,y){const m=this.elements;return m[0]=e,m[4]=i,m[8]=r,m[12]=l,m[1]=f,m[5]=h,m[9]=d,m[13]=p,m[2]=g,m[6]=x,m[10]=_,m[14]=S,m[3]=M,m[7]=b,m[11]=C,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/kr.setFromMatrixColumn(e,0).length(),f=1/kr.setFromMatrixColumn(e,1).length(),h=1/kr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),g=Math.sin(l),x=Math.cos(f),_=Math.sin(f);if(e.order==="XYZ"){const S=h*x,M=h*_,b=d*x,C=d*_;i[0]=p*x,i[4]=-p*_,i[8]=g,i[1]=M+b*g,i[5]=S-C*g,i[9]=-d*p,i[2]=C-S*g,i[6]=b+M*g,i[10]=h*p}else if(e.order==="YXZ"){const S=p*x,M=p*_,b=g*x,C=g*_;i[0]=S+C*d,i[4]=b*d-M,i[8]=h*g,i[1]=h*_,i[5]=h*x,i[9]=-d,i[2]=M*d-b,i[6]=C+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*x,M=p*_,b=g*x,C=g*_;i[0]=S-C*d,i[4]=-h*_,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*x,i[9]=C-S*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*x,M=h*_,b=d*x,C=d*_;i[0]=p*x,i[4]=b*g-M,i[8]=S*g+C,i[1]=p*_,i[5]=C*g+S,i[9]=M*g-b,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,M=h*g,b=d*p,C=d*g;i[0]=p*x,i[4]=C-S*_,i[8]=b*_+M,i[1]=_,i[5]=h*x,i[9]=-d*x,i[2]=-g*x,i[6]=M*_+b,i[10]=S-C*_}else if(e.order==="XZY"){const S=h*p,M=h*g,b=d*p,C=d*g;i[0]=p*x,i[4]=-_,i[8]=g*x,i[1]=S*_+C,i[5]=h*x,i[9]=M*_-b,i[2]=b*_-M,i[6]=d*x,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ST,e,yT)}lookAt(e,i,r){const l=this.elements;return ci.subVectors(e,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ls.crossVectors(r,ci),ls.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ls.crossVectors(r,ci)),ls.normalize(),ac.crossVectors(ci,ls),l[0]=ls.x,l[4]=ac.x,l[8]=ci.x,l[1]=ls.y,l[5]=ac.y,l[9]=ci.y,l[2]=ls.z,l[6]=ac.z,l[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[4],p=r[8],g=r[12],x=r[1],_=r[5],S=r[9],M=r[13],b=r[2],C=r[6],y=r[10],m=r[14],L=r[3],P=r[7],A=r[11],B=r[15],O=l[0],N=l[4],G=l[8],D=l[12],w=l[1],F=l[5],$=l[9],lt=l[13],mt=l[2],ut=l[6],Y=l[10],st=l[14],j=l[3],xt=l[7],St=l[11],Ht=l[15];return f[0]=h*O+d*w+p*mt+g*j,f[4]=h*N+d*F+p*ut+g*xt,f[8]=h*G+d*$+p*Y+g*St,f[12]=h*D+d*lt+p*st+g*Ht,f[1]=x*O+_*w+S*mt+M*j,f[5]=x*N+_*F+S*ut+M*xt,f[9]=x*G+_*$+S*Y+M*St,f[13]=x*D+_*lt+S*st+M*Ht,f[2]=b*O+C*w+y*mt+m*j,f[6]=b*N+C*F+y*ut+m*xt,f[10]=b*G+C*$+y*Y+m*St,f[14]=b*D+C*lt+y*st+m*Ht,f[3]=L*O+P*w+A*mt+B*j,f[7]=L*N+P*F+A*ut+B*xt,f[11]=L*G+P*$+A*Y+B*St,f[15]=L*D+P*lt+A*st+B*Ht,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],h=e[1],d=e[5],p=e[9],g=e[13],x=e[2],_=e[6],S=e[10],M=e[14],b=e[3],C=e[7],y=e[11],m=e[15];return b*(+f*p*_-l*g*_-f*d*S+r*g*S+l*d*M-r*p*M)+C*(+i*p*M-i*g*S+f*h*S-l*h*M+l*g*x-f*p*x)+y*(+i*g*_-i*d*M-f*h*_+r*h*M+f*d*x-r*g*x)+m*(-l*d*x-i*p*_+i*d*S+l*h*_-r*h*S+r*p*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],g=e[7],x=e[8],_=e[9],S=e[10],M=e[11],b=e[12],C=e[13],y=e[14],m=e[15],L=_*y*g-C*S*g+C*p*M-d*y*M-_*p*m+d*S*m,P=b*S*g-x*y*g-b*p*M+h*y*M+x*p*m-h*S*m,A=x*C*g-b*_*g+b*d*M-h*C*M-x*d*m+h*_*m,B=b*_*p-x*C*p-b*d*S+h*C*S+x*d*y-h*_*y,O=i*L+r*P+l*A+f*B;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return e[0]=L*N,e[1]=(C*S*f-_*y*f-C*l*M+r*y*M+_*l*m-r*S*m)*N,e[2]=(d*y*f-C*p*f+C*l*g-r*y*g-d*l*m+r*p*m)*N,e[3]=(_*p*f-d*S*f-_*l*g+r*S*g+d*l*M-r*p*M)*N,e[4]=P*N,e[5]=(x*y*f-b*S*f+b*l*M-i*y*M-x*l*m+i*S*m)*N,e[6]=(b*p*f-h*y*f-b*l*g+i*y*g+h*l*m-i*p*m)*N,e[7]=(h*S*f-x*p*f+x*l*g-i*S*g-h*l*M+i*p*M)*N,e[8]=A*N,e[9]=(b*_*f-x*C*f-b*r*M+i*C*M+x*r*m-i*_*m)*N,e[10]=(h*C*f-b*d*f+b*r*g-i*C*g-h*r*m+i*d*m)*N,e[11]=(x*d*f-h*_*f-x*r*g+i*_*g+h*r*M-i*d*M)*N,e[12]=B*N,e[13]=(x*C*l-b*_*l+b*r*S-i*C*S-x*r*y+i*_*y)*N,e[14]=(b*d*l-h*C*l-b*r*p+i*C*p+h*r*y-i*d*y)*N,e[15]=(h*_*l-x*d*l+x*r*p-i*_*p-h*r*S+i*d*S)*N,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,h=e.x,d=e.y,p=e.z,g=f*h,x=f*d;return this.set(g*h+r,g*d-l*p,g*p+l*d,0,g*d+l*p,x*d+r,x*p-l*h,0,g*p-l*d,x*p+l*h,f*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,h){return this.set(1,r,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,h=i._y,d=i._z,p=i._w,g=f+f,x=h+h,_=d+d,S=f*g,M=f*x,b=f*_,C=h*x,y=h*_,m=d*_,L=p*g,P=p*x,A=p*_,B=r.x,O=r.y,N=r.z;return l[0]=(1-(C+m))*B,l[1]=(M+A)*B,l[2]=(b-P)*B,l[3]=0,l[4]=(M-A)*O,l[5]=(1-(S+m))*O,l[6]=(y+L)*O,l[7]=0,l[8]=(b+P)*N,l[9]=(y-L)*N,l[10]=(1-(S+C))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=kr.set(l[0],l[1],l[2]).length();const h=kr.set(l[4],l[5],l[6]).length(),d=kr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Oi.copy(this);const g=1/f,x=1/h,_=1/d;return Oi.elements[0]*=g,Oi.elements[1]*=g,Oi.elements[2]*=g,Oi.elements[4]*=x,Oi.elements[5]*=x,Oi.elements[6]*=x,Oi.elements[8]*=_,Oi.elements[9]*=_,Oi.elements[10]*=_,i.setFromRotationMatrix(Oi),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,l,f,h,d=ia,p=!1){const g=this.elements,x=2*f/(i-e),_=2*f/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let b,C;if(p)b=f/(h-f),C=h*f/(h-f);else if(d===ia)b=-(h+f)/(h-f),C=-2*h*f/(h-f);else if(d===Uc)b=-h/(h-f),C=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=x,g[4]=0,g[8]=S,g[12]=0,g[1]=0,g[5]=_,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=b,g[14]=C,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,r,l,f,h,d=ia,p=!1){const g=this.elements,x=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,C;if(p)b=1/(h-f),C=h/(h-f);else if(d===ia)b=-2/(h-f),C=-(h+f)/(h-f);else if(d===Uc)b=-1/(h-f),C=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=x,g[4]=0,g[8]=0,g[12]=S,g[1]=0,g[5]=_,g[9]=0,g[13]=M,g[2]=0,g[6]=0,g[10]=b,g[14]=C,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const kr=new Z,Oi=new an,ST=new Z(0,0,0),yT=new Z(1,1,1),ls=new Z,ac=new Z,ci=new Z,wv=new an,Dv=new Qs;class Gi{constructor(e=0,i=0,r=0,l=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],p=l[1],g=l[5],x=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-_,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Ce(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(Ce(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,g),this._y=Math.atan2(-_,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,g),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return wv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Dv.setFromEuler(this),this.setFromQuaternion(Dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Xx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MT=0;const Uv=new Z,Xr=new Qs,Ma=new an,sc=new Z,dl=new Z,ET=new Z,TT=new Qs,Nv=new Z(1,0,0),Lv=new Z(0,1,0),Ov=new Z(0,0,1),Pv={type:"added"},bT={type:"removed"},Yr={type:"childadded",child:null},Ad={type:"childremoved",child:null};class An extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new Z,i=new Gi,r=new Qs,l=new Z(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new pe}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Xr.setFromAxisAngle(e,i),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,i){return Xr.setFromAxisAngle(e,i),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Nv,e)}rotateY(e){return this.rotateOnAxis(Lv,e)}rotateZ(e){return this.rotateOnAxis(Ov,e)}translateOnAxis(e,i){return Uv.copy(e).applyQuaternion(this.quaternion),this.position.add(Uv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Nv,e)}translateY(e){return this.translateOnAxis(Lv,e)}translateZ(e){return this.translateOnAxis(Ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?sc.copy(e):sc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(dl,sc,this.up):Ma.lookAt(sc,dl,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Xr.setFromRotationMatrix(Ma),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pv),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(bT),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pv),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,e,ET),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,TT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,x=p.length;g<x;g++){const _=p[g];f(e.shapes,_)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(f(e.materials,this.material[p]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(f(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),g=h(e.textures),x=h(e.images),_=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),g.length>0&&(r.textures=g),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const p=[];for(const g in d){const x=d[g];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new Z(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new Z,Ea=new Z,Rd=new Z,Ta=new Z,qr=new Z,Wr=new Z,zv=new Z,Cd=new Z,wd=new Z,Dd=new Z,Ud=new We,Nd=new We,Ld=new We;class zi{constructor(e=new Z,i=new Z,r=new Z){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Pi.subVectors(e,i),l.cross(Pi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Pi.subVectors(l,i),Ea.subVectors(r,i),Rd.subVectors(e,i);const h=Pi.dot(Pi),d=Pi.dot(Ea),p=Pi.dot(Rd),g=Ea.dot(Ea),x=Ea.dot(Rd),_=h*g-d*d;if(_===0)return f.set(0,0,0),null;const S=1/_,M=(g*p-d*x)*S,b=(h*x-d*p)*S;return f.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,i,r,l,f,h,d,p){return this.getBarycoord(e,i,r,l,Ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Ta.x),p.addScaledVector(h,Ta.y),p.addScaledVector(d,Ta.z),p)}static getInterpolatedAttribute(e,i,r,l,f,h){return Ud.setScalar(0),Nd.setScalar(0),Ld.setScalar(0),Ud.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,r),Ld.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Ud,f.x),h.addScaledVector(Nd,f.y),h.addScaledVector(Ld,f.z),h}static isFrontFacing(e,i,r,l){return Pi.subVectors(r,i),Ea.subVectors(e,i),Pi.cross(Ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Pi.cross(Ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return zi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return zi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let h,d;qr.subVectors(l,r),Wr.subVectors(f,r),Cd.subVectors(e,r);const p=qr.dot(Cd),g=Wr.dot(Cd);if(p<=0&&g<=0)return i.copy(r);wd.subVectors(e,l);const x=qr.dot(wd),_=Wr.dot(wd);if(x>=0&&_<=x)return i.copy(l);const S=p*_-x*g;if(S<=0&&p>=0&&x<=0)return h=p/(p-x),i.copy(r).addScaledVector(qr,h);Dd.subVectors(e,f);const M=qr.dot(Dd),b=Wr.dot(Dd);if(b>=0&&M<=b)return i.copy(f);const C=M*g-p*b;if(C<=0&&g>=0&&b<=0)return d=g/(g-b),i.copy(r).addScaledVector(Wr,d);const y=x*b-M*_;if(y<=0&&_-x>=0&&M-b>=0)return zv.subVectors(f,l),d=(_-x)/(_-x+(M-b)),i.copy(l).addScaledVector(zv,d);const m=1/(y+C+S);return h=C*m,d=S*m,i.copy(r).addScaledVector(qr,h).addScaledVector(Wr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},rc={h:0,s:0,l:0};function Od(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ge{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=De.workingColorSpace){if(e=qp(e,1),i=Ce(i,0,1),r=Ce(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Od(h,f,e+1/3),this.g=Od(h,f,e),this.b=Od(h,f,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=Jn){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Jn){const r=Yx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return De.workingToColorSpace(In.copy(this),e),Math.round(Ce(In.r*255,0,255))*65536+Math.round(Ce(In.g*255,0,255))*256+Math.round(Ce(In.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(In.copy(this),i);const r=In.r,l=In.g,f=In.b,h=Math.max(r,l,f),d=Math.min(r,l,f);let p,g;const x=(d+h)/2;if(d===h)p=0,g=0;else{const _=h-d;switch(g=x<=.5?_/(h+d):_/(2-h-d),h){case r:p=(l-f)/_+(l<f?6:0);break;case l:p=(f-r)/_+2;break;case f:p=(r-l)/_+4;break}p/=6}return e.h=p,e.s=g,e.l=x,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Jn){De.workingToColorSpace(In.copy(this),e);const i=In.r,r=In.g,l=In.b;return e!==Jn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(us),this.setHSL(us.h+e,us.s+i,us.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(us),e.getHSL(rc);const r=xl(us.h,rc.h,i),l=xl(us.s,rc.s,i),f=xl(us.l,rc.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new ge;ge.NAMES=Yx;let AT=0;class po extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=no,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=jd,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(r.blending=this.blending),this.side!==hs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wd&&(r.blendSrc=this.blendSrc),this.blendDst!==jd&&(r.blendDst=this.blendDst),this.blendEquation!==Ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const h=[];for(const d in f){const p=f[d];delete p.metadata,h.push(p)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lo extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new Z,oc=new fe;let RT=0;class $n{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Mv,this.updateRanges=[],this.gpuType=Ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=$r(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=$r(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=$r(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=$r(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=$r(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),f=Xn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mv&&(e.usage=this.usage),e}}class qx extends $n{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Wx extends $n{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ai extends $n{constructor(e,i,r){super(new Float32Array(e),i,r)}}let CT=0;const Ei=new an,Pd=new An,jr=new Z,fi=new Cl,pl=new Cl,En=new Z;class Vi extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gx(e)?Wx:qx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new pe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,r){return Ei.makeTranslation(e,i,r),this.applyMatrix4(Ei),this}scale(e,i,r){return Ei.makeScale(e,i,r),this.applyMatrix4(Ei),this}lookAt(e){return Pd.lookAt(e),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ai(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];fi.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];pl.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(fi.min,pl.min),fi.expandByPoint(En),En.addVectors(fi.max,pl.max),fi.expandByPoint(En)):(fi.expandByPoint(pl.min),fi.expandByPoint(pl.max))}fi.getCenter(r);let l=0;for(let f=0,h=e.count;f<h;f++)En.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(En));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],p=this.morphTargetsRelative;for(let g=0,x=d.count;g<x;g++)En.fromBufferAttribute(d,g),p&&(jr.fromBufferAttribute(e,g),En.add(jr)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let G=0;G<r.count;G++)d[G]=new Z,p[G]=new Z;const g=new Z,x=new Z,_=new Z,S=new fe,M=new fe,b=new fe,C=new Z,y=new Z;function m(G,D,w){g.fromBufferAttribute(r,G),x.fromBufferAttribute(r,D),_.fromBufferAttribute(r,w),S.fromBufferAttribute(f,G),M.fromBufferAttribute(f,D),b.fromBufferAttribute(f,w),x.sub(g),_.sub(g),M.sub(S),b.sub(S);const F=1/(M.x*b.y-b.x*M.y);isFinite(F)&&(C.copy(x).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(F),y.copy(_).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(F),d[G].add(C),d[D].add(C),d[w].add(C),p[G].add(y),p[D].add(y),p[w].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let G=0,D=L.length;G<D;++G){const w=L[G],F=w.start,$=w.count;for(let lt=F,mt=F+$;lt<mt;lt+=3)m(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const P=new Z,A=new Z,B=new Z,O=new Z;function N(G){B.fromBufferAttribute(l,G),O.copy(B);const D=d[G];P.copy(D),P.sub(B.multiplyScalar(B.dot(D))).normalize(),A.crossVectors(O,D);const F=A.dot(p[G])<0?-1:1;h.setXYZW(G,P.x,P.y,P.z,F)}for(let G=0,D=L.length;G<D;++G){const w=L[G],F=w.start,$=w.count;for(let lt=F,mt=F+$;lt<mt;lt+=3)N(e.getX(lt+0)),N(e.getX(lt+1)),N(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new $n(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new Z,f=new Z,h=new Z,d=new Z,p=new Z,g=new Z,x=new Z,_=new Z;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,b),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),x.subVectors(h,f),_.subVectors(l,f),x.cross(_),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,C),g.fromBufferAttribute(r,y),d.add(x),p.add(x),g.add(x),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(y,g.x,g.y,g.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,f),_.subVectors(l,f),x.cross(_),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(d,p){const g=d.array,x=d.itemSize,_=d.normalized,S=new g.constructor(p.length*x);let M=0,b=0;for(let C=0,y=p.length;C<y;C++){d.isInterleavedBufferAttribute?M=p[C]*d.data.stride+d.offset:M=p[C]*x;for(let m=0;m<x;m++)S[b++]=g[M++]}return new $n(S,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Vi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=e(p,r);i.setAttribute(d,g)}const f=this.morphAttributes;for(const d in f){const p=[],g=f[d];for(let x=0,_=g.length;x<_;x++){const S=g[x],M=e(S,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const g=r[p];e.data.attributes[p]=g.toJSON(e.data)}const l={};let f=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],x=[];for(let _=0,S=g.length;_<S;_++){const M=g[_];x.push(M.toJSON(e.data))}x.length>0&&(l[p]=x,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const g in l){const x=l[g];this.setAttribute(g,x.clone(i))}const f=e.morphAttributes;for(const g in f){const x=[],_=f[g];for(let S=0,M=_.length;S<M;S++)x.push(_[S].clone(i));this.morphAttributes[g]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,x=h.length;g<x;g++){const _=h[g];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iv=new an,Fs=new kx,lc=new Oc,Bv=new Z,uc=new Z,cc=new Z,fc=new Z,zd=new Z,hc=new Z,Fv=new Z,dc=new Z;class Tn extends An{constructor(e=new Vi,i=new lo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){hc.set(0,0,0);for(let p=0,g=f.length;p<g;p++){const x=d[p],_=f[p];x!==0&&(zd.fromBufferAttribute(_,e),h?hc.addScaledVector(zd,x):hc.addScaledVector(zd.sub(i),x))}i.add(hc)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(f),Fs.copy(e.ray).recast(e.near),!(lc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(lc,Bv)===null||Fs.origin.distanceToSquared(Bv)>(e.far-e.near)**2))&&(Iv.copy(f).invert(),Fs.copy(e.ray).applyMatrix4(Iv),!(r.boundingBox!==null&&Fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Fs)))}_computeIntersections(e,i,r){let l;const f=this.geometry,h=this.material,d=f.index,p=f.attributes.position,g=f.attributes.uv,x=f.attributes.uv1,_=f.attributes.normal,S=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const y=S[b],m=h[y.materialIndex],L=Math.max(y.start,M.start),P=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let A=L,B=P;A<B;A+=3){const O=d.getX(A),N=d.getX(A+1),G=d.getX(A+2);l=pc(this,m,e,r,g,x,_,O,N,G),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=b,m=C;y<m;y+=3){const L=d.getX(y),P=d.getX(y+1),A=d.getX(y+2);l=pc(this,h,e,r,g,x,_,L,P,A),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const y=S[b],m=h[y.materialIndex],L=Math.max(y.start,M.start),P=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let A=L,B=P;A<B;A+=3){const O=A,N=A+1,G=A+2;l=pc(this,m,e,r,g,x,_,O,N,G),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=b,m=C;y<m;y+=3){const L=y,P=y+1,A=y+2;l=pc(this,h,e,r,g,x,_,L,P,A),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function wT(o,e,i,r,l,f,h,d){let p;if(e.side===Bn?p=r.intersectTriangle(h,f,l,!0,d):p=r.intersectTriangle(l,f,h,e.side===hs,d),p===null)return null;dc.copy(d),dc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(dc);return g<i.near||g>i.far?null:{distance:g,point:dc.clone(),object:o}}function pc(o,e,i,r,l,f,h,d,p,g){o.getVertexPosition(d,uc),o.getVertexPosition(p,cc),o.getVertexPosition(g,fc);const x=wT(o,e,i,r,uc,cc,fc,Fv);if(x){const _=new Z;zi.getBarycoord(Fv,uc,cc,fc,_),l&&(x.uv=zi.getInterpolatedAttribute(l,d,p,g,_,new fe)),f&&(x.uv1=zi.getInterpolatedAttribute(f,d,p,g,_,new fe)),h&&(x.normal=zi.getInterpolatedAttribute(h,d,p,g,_,new Z),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:p,c:g,normal:new Z,materialIndex:0};zi.getNormal(uc,cc,fc,S.normal),x.face=S,x.barycoord=_}return x}class mo extends Vi{constructor(e=1,i=1,r=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const p=[],g=[],x=[],_=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,e,h,f,0),b("z","y","x",1,-1,r,i,-e,h,f,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,f,4),b("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(p),this.setAttribute("position",new Ai(g,3)),this.setAttribute("normal",new Ai(x,3)),this.setAttribute("uv",new Ai(_,2));function b(C,y,m,L,P,A,B,O,N,G,D){const w=A/N,F=B/G,$=A/2,lt=B/2,mt=O/2,ut=N+1,Y=G+1;let st=0,j=0;const xt=new Z;for(let St=0;St<Y;St++){const Ht=St*F-lt;for(let re=0;re<ut;re++){const Ee=re*w-$;xt[C]=Ee*L,xt[y]=Ht*P,xt[m]=mt,g.push(xt.x,xt.y,xt.z),xt[C]=0,xt[y]=0,xt[m]=O>0?1:-1,x.push(xt.x,xt.y,xt.z),_.push(re/N),_.push(1-St/G),st+=1}}for(let St=0;St<G;St++)for(let Ht=0;Ht<N;Ht++){const re=S+Ht+ut*St,Ee=S+Ht+ut*(St+1),H=S+(Ht+1)+ut*(St+1),ht=S+(Ht+1)+ut*St;p.push(re,Ee,ht),p.push(Ee,H,ht),j+=6}d.addGroup(M,j,D),M+=j,S+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Yn(o){const e={};for(let i=0;i<o.length;i++){const r=uo(o[i]);for(const l in r)e[l]=r[l]}return e}function DT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function jx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const Rl={clone:uo,merge:Yn};var UT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UT,this.fragmentShader=NT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=DT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Zx extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new Z,Hv=new fe,Gv=new fe;class hi extends Zx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=bl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,i){return this.getViewBounds(e,Hv,Gv),i.subVectors(Gv,Hv)}setViewOffset(e,i,r,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(vl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;f+=h.offsetX*l/p,i-=h.offsetY*r/g,l*=h.width/p,r*=h.height/g}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Zr=-90,Kr=1;class LT extends An{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(Zr,Kr,e,i);l.layers=this.layers,this.add(l);const f=new hi(Zr,Kr,e,i);f.layers=this.layers,this.add(f);const h=new hi(Zr,Kr,e,i);h.layers=this.layers,this.add(h);const d=new hi(Zr,Kr,e,i);d.layers=this.layers,this.add(d);const p=new hi(Zr,Kr,e,i);p.layers=this.layers,this.add(p);const g=new hi(Zr,Kr,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,h,d,p]=i;for(const g of i)this.remove(g);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Uc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,p,g,x]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,g),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(_,S,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Kx extends qn{constructor(e=[],i=so,r,l,f,h,d,p,g,x){super(e,i,r,l,f,h,d,p,g,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OT extends bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Kx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new mo(5,5,5),f=new bn({name:"CubemapFromEquirect",uniforms:uo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Ca});f.uniforms.tEquirect.value=i;const h=new Tn(l,f),d=i.minFilter;return i.minFilter===js&&(i.minFilter=na),new LT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(f)}}class to extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PT={type:"move"};class Id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new to,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new to,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new to,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),m=this._getHandJoint(g,C);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const x=g.joints["index-finger-tip"],_=g.joints["thumb-tip"],S=x.position.distanceTo(_.position),M=.02,b=.005;g.inputState.pinching&&S>M+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&S<=M-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(PT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=f!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new to;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Qx extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bd=new Z,zT=new Z,IT=new pe;class ks{constructor(e=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Bd.subVectors(r,i).cross(zT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Bd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||IT.getNormalMatrix(e),l=this.coplanarPoint(Bd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new Oc,BT=new fe(.5,.5),mc=new Z;class jp{constructor(e=new ks,i=new ks,r=new ks,l=new ks,f=new ks,h=new ks){this.planes=[e,i,r,l,f,h]}set(e,i,r,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ia,r=!1){const l=this.planes,f=e.elements,h=f[0],d=f[1],p=f[2],g=f[3],x=f[4],_=f[5],S=f[6],M=f[7],b=f[8],C=f[9],y=f[10],m=f[11],L=f[12],P=f[13],A=f[14],B=f[15];if(l[0].setComponents(g-h,M-x,m-b,B-L).normalize(),l[1].setComponents(g+h,M+x,m+b,B+L).normalize(),l[2].setComponents(g+d,M+_,m+C,B+P).normalize(),l[3].setComponents(g-d,M-_,m-C,B-P).normalize(),r)l[4].setComponents(p,S,y,A).normalize(),l[5].setComponents(g-p,M-S,m-y,B-A).normalize();else if(l[4].setComponents(g-p,M-S,m-y,B-A).normalize(),i===ia)l[5].setComponents(g+p,M+S,m+y,B+A).normalize();else if(i===Uc)l[5].setComponents(p,S,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){Hs.center.set(0,0,0);const i=BT.distanceTo(e.center);return Hs.radius=.7071067811865476+i,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(mc.x=l.normal.x>0?e.max.x:e.min.x,mc.y=l.normal.y>0?e.max.y:e.min.y,mc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class FT extends po{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vv=new an,Op=new kx,gc=new Oc,_c=new Z;class Jx extends An{constructor(e=new Vi,i=new FT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,f=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(l),gc.radius+=f,e.ray.intersectsSphere(gc)===!1)return;Vv.copy(l).invert(),Op.copy(e.ray).applyMatrix4(Vv);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,g=r.index,_=r.attributes.position;if(g!==null){const S=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let b=S,C=M;b<C;b++){const y=g.getX(b);_c.fromBufferAttribute(_,y),kv(_c,y,p,l,e,i,this)}}else{const S=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let b=S,C=M;b<C;b++)_c.fromBufferAttribute(_,b),kv(_c,b,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function kv(o,e,i,r,l,f,h){const d=Op.distanceSqToPoint(o);if(d<i){const p=new Z;Op.closestPointToPoint(o,p),p.applyMatrix4(r);const g=l.ray.origin.distanceTo(p);if(g<l.near||g>l.far)return;f.push({distance:g,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class HT extends qn{constructor(e,i,r,l,f,h,d,p,g){super(e,i,r,l,f,h,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $x extends qn{constructor(e,i,r=Ks,l,f,h,d=Bi,p=Bi,g,x=El,_=1){if(x!==El&&x!==Tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,f,h,d,p,x,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tS extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class go extends Vi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),g=d+1,x=p+1,_=e/d,S=i/p,M=[],b=[],C=[],y=[];for(let m=0;m<x;m++){const L=m*S-h;for(let P=0;P<g;P++){const A=P*_-f;b.push(A,-L,0),C.push(0,0,1),y.push(P/d),y.push(1-m/p)}}for(let m=0;m<p;m++)for(let L=0;L<d;L++){const P=L+g*m,A=L+g*(m+1),B=L+1+g*(m+1),O=L+1+g*m;M.push(P,A,O),M.push(A,B,O)}this.setIndex(M),this.setAttribute("position",new Ai(b,3)),this.setAttribute("normal",new Ai(C,3)),this.setAttribute("uv",new Ai(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sl extends Vi{constructor(e=1,i=32,r=16,l=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let g=0;const x=[],_=new Z,S=new Z,M=[],b=[],C=[],y=[];for(let m=0;m<=r;m++){const L=[],P=m/r;let A=0;m===0&&h===0?A=.5/i:m===r&&p===Math.PI&&(A=-.5/i);for(let B=0;B<=i;B++){const O=B/i;_.x=-e*Math.cos(l+O*f)*Math.sin(h+P*d),_.y=e*Math.cos(h+P*d),_.z=e*Math.sin(l+O*f)*Math.sin(h+P*d),b.push(_.x,_.y,_.z),S.copy(_).normalize(),C.push(S.x,S.y,S.z),y.push(O+A,1-P),L.push(g++)}x.push(L)}for(let m=0;m<r;m++)for(let L=0;L<i;L++){const P=x[m][L+1],A=x[m][L],B=x[m+1][L],O=x[m+1][L+1];(m!==0||h>0)&&M.push(P,A,O),(m!==r-1||p<Math.PI)&&M.push(A,B,O)}this.setIndex(M),this.setAttribute("position",new Ai(b,3)),this.setAttribute("normal",new Ai(C,3)),this.setAttribute("uv",new Ai(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class GT extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ac extends po{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fx,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VT extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kT extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zp extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class XT extends Zp{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Fd=new an,Xv=new Z,Yv=new Z;class eS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jp,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Xv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xv),Yv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Yv),i.updateMatrixWorld(),Fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qv=new an,ml=new Z,Hd=new Z;class YT extends eS{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,f=e.distance||r.far;f!==r.far&&(r.far=f,r.updateProjectionMatrix()),ml.setFromMatrixPosition(e.matrixWorld),r.position.copy(ml),Hd.copy(r.position),Hd.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Hd),r.updateMatrixWorld(),l.makeTranslation(-ml.x,-ml.y,-ml.z),qv.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qv,r.coordinateSystem,r.reversedDepth)}}class Wv extends Zp{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new YT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kp extends Zx{constructor(e=-1,i=1,r=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,h=f+g*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qT extends eS{constructor(){super(new Kp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class WT extends Zp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new qT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jT extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class nS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function jv(o,e,i,r){const l=ZT(r);switch(i){case Px:return o*e;case Ix:return o*e/l.components*l.byteLength;case kp:return o*e/l.components*l.byteLength;case Bx:return o*e*2/l.components*l.byteLength;case Xp:return o*e*2/l.components*l.byteLength;case zx:return o*e*3/l.components*l.byteLength;case Ii:return o*e*4/l.components*l.byteLength;case Yp:return o*e*4/l.components*l.byteLength;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tc:case bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case op:case up:return Math.max(o,16)*Math.max(e,8)/4;case rp:case lp:return Math.max(o,8)*Math.max(e,8)/2;case cp:case fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case mp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case gp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case vp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case bp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rp:case Cp:case wp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Dp:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Np:case Lp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ZT(o){switch(o){case Hi:case Ux:return{byteLength:1,components:1};case yl:case Nx:case Fi:return{byteLength:2,components:1};case Gp:case Vp:return{byteLength:2,components:4};case Ks:case Hp:case Ra:return{byteLength:4,components:1};case Lx:case Ox:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function iS(){let o=null,e=!1,i=null,r=null;function l(f,h){i(f,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function KT(o){const e=new WeakMap;function i(d,p){const g=d.array,x=d.usage,_=g.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,g,x),d.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,g){const x=p.array,_=p.updateRanges;if(o.bindBuffer(g,d),_.length===0)o.bufferSubData(g,0,x);else{_.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<_.length;M++){const b=_[S],C=_[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,_[S]=C)}_.length=S+1;for(let M=0,b=_.length;M<b;M++){const C=_[M];o.bufferSubData(g,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,d,p),g.version=d.version}}return{get:l,remove:f,update:h}}var QT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JT=`#ifdef USE_ALPHAHASH
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
#endif`,$T=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
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
#endif`,a1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s1=`#ifdef USE_BATCHING
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
#endif`,r1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c1=`#ifdef USE_IRIDESCENCE
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
#endif`,f1=`#ifdef USE_BUMPMAP
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,S1=`#define PI 3.141592653589793
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
} // validated`,y1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M1=`vec3 transformedNormal = objectNormal;
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
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R1="gl_FragColor = linearToOutputTexel( gl_FragColor );",C1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,O1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B1=`#ifdef USE_GRADIENTMAP
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
}`,F1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V1=`uniform bool receiveShadow;
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
#endif`,k1=`#ifdef USE_ENVMAP
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
#endif`,X1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
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
#endif`,Z1=`struct PhysicalMaterial {
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
}`,K1=`
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
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
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rb=`#if defined( USE_POINTS_UV )
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
#endif`,ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
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
#endif`,db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
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
#endif`,Sb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ab=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pb=`float getShadowMask() {
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
}`,zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fb=`#ifdef USE_SKINNING
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
#endif`,Hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
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
#endif`,Yb=`#ifdef USE_TRANSMISSION
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qb=`uniform sampler2D t2D;
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`#include <common>
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
}`,iA=`#if DEPTH_PACKING == 3200
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
}`,aA=`#define DISTANCE
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
}`,sA=`#define DISTANCE
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`uniform float scale;
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
}`,uA=`uniform vec3 diffuse;
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
}`,cA=`#include <common>
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
}`,fA=`uniform vec3 diffuse;
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
}`,hA=`#define LAMBERT
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
}`,dA=`#define LAMBERT
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
}`,pA=`#define MATCAP
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
}`,mA=`#define MATCAP
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
}`,gA=`#define NORMAL
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
}`,_A=`#define NORMAL
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
}`,vA=`#define PHONG
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
}`,xA=`#define PHONG
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
}`,SA=`#define STANDARD
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
}`,yA=`#define STANDARD
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
}`,MA=`#define TOON
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
}`,EA=`#define TOON
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
}`,TA=`uniform float size;
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
}`,bA=`uniform vec3 diffuse;
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
}`,AA=`#include <common>
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
}`,RA=`uniform vec3 color;
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
}`,CA=`uniform float rotation;
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
}`,wA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:QT,alphahash_pars_fragment:JT,alphamap_fragment:$T,alphamap_pars_fragment:t1,alphatest_fragment:e1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:a1,batching_pars_vertex:s1,batching_vertex:r1,begin_vertex:o1,beginnormal_vertex:l1,bsdfs:u1,iridescence_fragment:c1,bumpmap_pars_fragment:f1,clipping_planes_fragment:h1,clipping_planes_pars_fragment:d1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:_1,color_pars_vertex:v1,color_vertex:x1,common:S1,cube_uv_reflection_fragment:y1,defaultnormal_vertex:M1,displacementmap_pars_vertex:E1,displacementmap_vertex:T1,emissivemap_fragment:b1,emissivemap_pars_fragment:A1,colorspace_fragment:R1,colorspace_pars_fragment:C1,envmap_fragment:w1,envmap_common_pars_fragment:D1,envmap_pars_fragment:U1,envmap_pars_vertex:N1,envmap_physical_pars_fragment:k1,envmap_vertex:L1,fog_vertex:O1,fog_pars_vertex:P1,fog_fragment:z1,fog_pars_fragment:I1,gradientmap_pars_fragment:B1,lightmap_pars_fragment:F1,lights_lambert_fragment:H1,lights_lambert_pars_fragment:G1,lights_pars_begin:V1,lights_toon_fragment:X1,lights_toon_pars_fragment:Y1,lights_phong_fragment:q1,lights_phong_pars_fragment:W1,lights_physical_fragment:j1,lights_physical_pars_fragment:Z1,lights_fragment_begin:K1,lights_fragment_maps:Q1,lights_fragment_end:J1,logdepthbuf_fragment:$1,logdepthbuf_pars_fragment:tb,logdepthbuf_pars_vertex:eb,logdepthbuf_vertex:nb,map_fragment:ib,map_pars_fragment:ab,map_particle_fragment:sb,map_particle_pars_fragment:rb,metalnessmap_fragment:ob,metalnessmap_pars_fragment:lb,morphinstance_vertex:ub,morphcolor_vertex:cb,morphnormal_vertex:fb,morphtarget_pars_vertex:hb,morphtarget_vertex:db,normal_fragment_begin:pb,normal_fragment_maps:mb,normal_pars_fragment:gb,normal_pars_vertex:_b,normal_vertex:vb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:Sb,clearcoat_normal_fragment_maps:yb,clearcoat_pars_fragment:Mb,iridescence_pars_fragment:Eb,opaque_fragment:Tb,packing:bb,premultiplied_alpha_fragment:Ab,project_vertex:Rb,dithering_fragment:Cb,dithering_pars_fragment:wb,roughnessmap_fragment:Db,roughnessmap_pars_fragment:Ub,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Lb,shadowmap_vertex:Ob,shadowmask_pars_fragment:Pb,skinbase_vertex:zb,skinning_pars_vertex:Ib,skinning_vertex:Bb,skinnormal_vertex:Fb,specularmap_fragment:Hb,specularmap_pars_fragment:Gb,tonemapping_fragment:Vb,tonemapping_pars_fragment:kb,transmission_fragment:Xb,transmission_pars_fragment:Yb,uv_pars_fragment:qb,uv_pars_vertex:Wb,uv_vertex:jb,worldpos_vertex:Zb,background_vert:Kb,background_frag:Qb,backgroundCube_vert:Jb,backgroundCube_frag:$b,cube_vert:tA,cube_frag:eA,depth_vert:nA,depth_frag:iA,distanceRGBA_vert:aA,distanceRGBA_frag:sA,equirect_vert:rA,equirect_frag:oA,linedashed_vert:lA,linedashed_frag:uA,meshbasic_vert:cA,meshbasic_frag:fA,meshlambert_vert:hA,meshlambert_frag:dA,meshmatcap_vert:pA,meshmatcap_frag:mA,meshnormal_vert:gA,meshnormal_frag:_A,meshphong_vert:vA,meshphong_frag:xA,meshphysical_vert:SA,meshphysical_frag:yA,meshtoon_vert:MA,meshtoon_frag:EA,points_vert:TA,points_frag:bA,shadow_vert:AA,shadow_frag:RA,sprite_vert:CA,sprite_frag:wA},Bt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},ea={basic:{uniforms:Yn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Yn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ge(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Yn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Yn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Yn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new ge(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Yn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Yn([Bt.points,Bt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Yn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Yn([Bt.common,Bt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Yn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Yn([Bt.sprite,Bt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Yn([Bt.common,Bt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Yn([Bt.lights,Bt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ea.physical={uniforms:Yn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const vc={r:0,b:0,g:0},Gs=new Gi,DA=new an;function UA(o,e,i,r,l,f,h){const d=new ge(0);let p=f===!0?0:1,g,x,_=null,S=0,M=null;function b(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?i:e).get(A)),A}function C(P){let A=!1;const B=b(P);B===null?m(d,p):B&&B.isColor&&(m(B,1),A=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,h):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(P,A){const B=b(A);B&&(B.isCubeTexture||B.mapping===Lc)?(x===void 0&&(x=new Tn(new mo(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:uo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,N,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Gs.copy(A.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),x.material.uniforms.envMap.value=B,x.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(DA.makeRotationFromEuler(Gs)),x.material.toneMapped=De.getTransfer(B.colorSpace)!==Xe,(_!==B||S!==B.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,_=B,S=B.version,M=o.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null)):B&&B.isTexture&&(g===void 0&&(g=new Tn(new go(2,2),new bn({name:"BackgroundMaterial",uniforms:uo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=B,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.toneMapped=De.getTransfer(B.colorSpace)!==Xe,B.matrixAutoUpdate===!0&&B.updateMatrix(),g.material.uniforms.uvTransform.value.copy(B.matrix),(_!==B||S!==B.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,_=B,S=B.version,M=o.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null))}function m(P,A){P.getRGB(vc,jx(o)),r.buffers.color.setClear(vc.r,vc.g,vc.b,A,h)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,A=1){d.set(P),p=A,m(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,m(d,p)},render:C,addToRenderList:y,dispose:L}}function NA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let f=l,h=!1;function d(w,F,$,lt,mt){let ut=!1;const Y=_(lt,$,F);f!==Y&&(f=Y,g(f.object)),ut=M(w,lt,$,mt),ut&&b(w,lt,$,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,A(w,F,$,lt),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function p(){return o.createVertexArray()}function g(w){return o.bindVertexArray(w)}function x(w){return o.deleteVertexArray(w)}function _(w,F,$){const lt=$.wireframe===!0;let mt=r[w.id];mt===void 0&&(mt={},r[w.id]=mt);let ut=mt[F.id];ut===void 0&&(ut={},mt[F.id]=ut);let Y=ut[lt];return Y===void 0&&(Y=S(p()),ut[lt]=Y),Y}function S(w){const F=[],$=[],lt=[];for(let mt=0;mt<i;mt++)F[mt]=0,$[mt]=0,lt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:lt,object:w,attributes:{},index:null}}function M(w,F,$,lt){const mt=f.attributes,ut=F.attributes;let Y=0;const st=$.getAttributes();for(const j in st)if(st[j].location>=0){const St=mt[j];let Ht=ut[j];if(Ht===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Ht=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Ht=w.instanceColor)),St===void 0||St.attribute!==Ht||Ht&&St.data!==Ht.data)return!0;Y++}return f.attributesNum!==Y||f.index!==lt}function b(w,F,$,lt){const mt={},ut=F.attributes;let Y=0;const st=$.getAttributes();for(const j in st)if(st[j].location>=0){let St=ut[j];St===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const Ht={};Ht.attribute=St,St&&St.data&&(Ht.data=St.data),mt[j]=Ht,Y++}f.attributes=mt,f.attributesNum=Y,f.index=lt}function C(){const w=f.newAttributes;for(let F=0,$=w.length;F<$;F++)w[F]=0}function y(w){m(w,0)}function m(w,F){const $=f.newAttributes,lt=f.enabledAttributes,mt=f.attributeDivisors;$[w]=1,lt[w]===0&&(o.enableVertexAttribArray(w),lt[w]=1),mt[w]!==F&&(o.vertexAttribDivisor(w,F),mt[w]=F)}function L(){const w=f.newAttributes,F=f.enabledAttributes;for(let $=0,lt=F.length;$<lt;$++)F[$]!==w[$]&&(o.disableVertexAttribArray($),F[$]=0)}function P(w,F,$,lt,mt,ut,Y){Y===!0?o.vertexAttribIPointer(w,F,$,mt,ut):o.vertexAttribPointer(w,F,$,lt,mt,ut)}function A(w,F,$,lt){C();const mt=lt.attributes,ut=$.getAttributes(),Y=F.defaultAttributeValues;for(const st in ut){const j=ut[st];if(j.location>=0){let xt=mt[st];if(xt===void 0&&(st==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),st==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor)),xt!==void 0){const St=xt.normalized,Ht=xt.itemSize,re=e.get(xt);if(re===void 0)continue;const Ee=re.buffer,H=re.type,ht=re.bytesPerElement,J=H===o.INT||H===o.UNSIGNED_INT||xt.gpuType===Hp;if(xt.isInterleavedBufferAttribute){const it=xt.data,Mt=it.stride,Nt=xt.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<j.locationSize;Rt++)m(j.location+Rt,it.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<j.locationSize;Rt++)y(j.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let Rt=0;Rt<j.locationSize;Rt++)P(j.location+Rt,Ht/j.locationSize,H,St,Mt*ht,(Nt+Ht/j.locationSize*Rt)*ht,J)}else{if(xt.isInstancedBufferAttribute){for(let it=0;it<j.locationSize;it++)m(j.location+it,xt.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let it=0;it<j.locationSize;it++)y(j.location+it);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let it=0;it<j.locationSize;it++)P(j.location+it,Ht/j.locationSize,H,St,Ht*ht,Ht/j.locationSize*it*ht,J)}}else if(Y!==void 0){const St=Y[st];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(j.location,St);break;case 3:o.vertexAttrib3fv(j.location,St);break;case 4:o.vertexAttrib4fv(j.location,St);break;default:o.vertexAttrib1fv(j.location,St)}}}}L()}function B(){G();for(const w in r){const F=r[w];for(const $ in F){const lt=F[$];for(const mt in lt)x(lt[mt].object),delete lt[mt];delete F[$]}delete r[w]}}function O(w){if(r[w.id]===void 0)return;const F=r[w.id];for(const $ in F){const lt=F[$];for(const mt in lt)x(lt[mt].object),delete lt[mt];delete F[$]}delete r[w.id]}function N(w){for(const F in r){const $=r[F];if($[w.id]===void 0)continue;const lt=$[w.id];for(const mt in lt)x(lt[mt].object),delete lt[mt];delete $[w.id]}}function G(){D(),h=!0,f!==l&&(f=l,g(f.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:O,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:y,disableUnusedAttributes:L}}function LA(o,e,i){let r;function l(g){r=g}function f(g,x){o.drawArrays(r,g,x),i.update(x,r,1)}function h(g,x,_){_!==0&&(o.drawArraysInstanced(r,g,x,_),i.update(x,r,_))}function d(g,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,x,0,_);let M=0;for(let b=0;b<_;b++)M+=x[b];i.update(M,r,1)}function p(g,x,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g.length;b++)h(g[b],x[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,x,0,S,0,_);let b=0;for(let C=0;C<_;C++)b+=x[C]*S[C];i.update(b,r,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function OA(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==Ii&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const G=N===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Hi&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ra&&!G)}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const x=p(g);x!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",x,"instead."),g=x);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),m=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:B,maxSamples:O}}function PA(o){const e=this;let i=null,r=0,l=!1,f=!1;const h=new ks,d=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||l;return l=S,r=_.length,M},this.beginShadows=function(){f=!0,x(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(_,S){i=x(_,S,0)},this.setState=function(_,S,M){const b=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,m=o.get(_);if(!l||b===null||b.length===0||f&&!y)f?x(null):g();else{const L=f?0:r,P=L*4;let A=m.clippingState||null;p.value=A,A=x(b,S,P,M);for(let B=0;B!==P;++B)A[B]=i[B];m.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,S,M,b){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=p.value,b!==!0||y===null){const m=M+C*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<m)&&(y=new Float32Array(m));for(let P=0,A=M;P!==C;++P,A+=4)h.copy(_[P]).applyMatrix4(L,d),h.normal.toArray(y,A),y[A+3]=h.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function zA(o){let e=new WeakMap;function i(h,d){return d===np?h.mapping=so:d===ip&&(h.mapping=ro),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===np||d===ip)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new OT(p.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const eo=4,Zv=[.125,.215,.35,.446,.526,.582],qs=20,Gd=new Kp,Kv=new ge;let Vd=null,kd=0,Xd=0,Yd=!1;const Xs=(1+Math.sqrt(5))/2,Qr=1/Xs,Qv=[new Z(-Xs,Qr,0),new Z(Xs,Qr,0),new Z(-Qr,0,Xs),new Z(Qr,0,Xs),new Z(0,Xs,-Qr),new Z(0,Xs,Qr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],IA=new Z;class Jv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:h=256,position:d=IA}=f;Vd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,kd,Xd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===so||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:na,minFilter:na,generateMipmaps:!1,type:Fi,format:Ii,colorSpace:oo,depthBuffer:!1},l=$v(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$v(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BA(f)),this._blurMaterial=FA(f,e,i)}return l}_compileMaterial(e){const i=new Tn(this._lodPlanes[0],e);this._renderer.compile(i,Gd)}_sceneToCubeUV(e,i,r,l,f){const p=new hi(90,1,i,r),g=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(Kv),_.toneMapping=wa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const C=new lo({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),y=new Tn(new mo,C);let m=!1;const L=e.background;L?L.isColor&&(C.color.copy(L),e.background=null,m=!0):(C.color.copy(Kv),m=!0);for(let P=0;P<6;P++){const A=P%3;A===0?(p.up.set(0,g[P],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+x[P],f.y,f.z)):A===1?(p.up.set(0,0,g[P]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+x[P],f.z)):(p.up.set(0,g[P],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+x[P]));const B=this._cubeSize;xc(l,A*B,P>2?B:0,B,B),_.setRenderTarget(l),m&&_.render(y,p),_.render(e,p)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=S,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===so||e.mapping===ro;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ex()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tx());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new Tn(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const p=this._cubeSize;xc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Gd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=Qv[(l-f-1)%Qv.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",f),this._halfBlur(h,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new Tn(this._lodPlanes[l],g),S=g.uniforms,M=this._sizeLods[r]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*qs-1),C=f/b,y=isFinite(f)?1+Math.floor(x*C):qs;y>qs&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qs}`);const m=[];let L=0;for(let N=0;N<qs;++N){const G=N/C,D=Math.exp(-G*G/2);m.push(D),N===0?L+=D:N<y&&(L+=2*D)}for(let N=0;N<m.length;N++)m[N]=m[N]/L;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=m,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=b,S.mipInt.value=P-r;const A=this._sizeLods[l],B=3*A*(l>P-eo?l-P+eo:0),O=4*(this._cubeSize-A);xc(i,B,O,3*A,2*A),p.setRenderTarget(i),p.render(_,Gd)}}function BA(o){const e=[],i=[],r=[];let l=o;const f=o-eo+1+Zv.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-eo?p=Zv[h-o+eo-1]:h===0&&(p=0),r.push(p);const g=1/(d-2),x=-g,_=1+g,S=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,b=6,C=3,y=2,m=1,L=new Float32Array(C*b*M),P=new Float32Array(y*b*M),A=new Float32Array(m*b*M);for(let O=0;O<M;O++){const N=O%3*2/3-1,G=O>2?0:-1,D=[N,G,0,N+2/3,G,0,N+2/3,G+1,0,N,G,0,N+2/3,G+1,0,N,G+1,0];L.set(D,C*b*O),P.set(S,y*b*O);const w=[O,O,O,O,O,O];A.set(w,m*b*O)}const B=new Vi;B.setAttribute("position",new $n(L,C)),B.setAttribute("uv",new $n(P,y)),B.setAttribute("faceIndex",new $n(A,m)),e.push(B),l>eo&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function $v(o,e,i){const r=new bi(o,e,i);return r.texture.mapping=Lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function FA(o,e,i){const r=new Float32Array(qs),l=new Z(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qp(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function tx(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qp(),fragmentShader:`

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
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function ex(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function Qp(){return`

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
	`}function HA(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,g=p===np||p===ip,x=p===so||p===ro;if(g||x){let _=e.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Jv(o)),_=g?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return g&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new Jv(o)),_=g?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",f),_.texture):null}}}return d}function l(d){let p=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&p++;return p===g}function f(d){const p=d.target;p.removeEventListener("dispose",f);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function GA(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Al("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function VA(o,e,i,r){const l={},f=new WeakMap;function h(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=f.get(S);M&&(e.remove(M),f.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(_){const S=_.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function g(_){const S=[],M=_.index,b=_.attributes.position;let C=0;if(M!==null){const L=M.array;C=M.version;for(let P=0,A=L.length;P<A;P+=3){const B=L[P+0],O=L[P+1],N=L[P+2];S.push(B,O,O,N,N,B)}}else if(b!==void 0){const L=b.array;C=b.version;for(let P=0,A=L.length/3-1;P<A;P+=3){const B=P+0,O=P+1,N=P+2;S.push(B,O,O,N,N,B)}}else return;const y=new(Gx(S)?Wx:qx)(S,1);y.version=C;const m=f.get(_);m&&e.remove(m),f.set(_,y)}function x(_){const S=f.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&g(_)}else g(_);return f.get(_)}return{get:d,update:p,getWireframeAttribute:x}}function kA(o,e,i){let r;function l(S){r=S}let f,h;function d(S){f=S.type,h=S.bytesPerElement}function p(S,M){o.drawElements(r,M,f,S*h),i.update(M,r,1)}function g(S,M,b){b!==0&&(o.drawElementsInstanced(r,M,f,S*h,b),i.update(M,r,b))}function x(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,f,S,0,b);let y=0;for(let m=0;m<b;m++)y+=M[m];i.update(y,r,1)}function _(S,M,b,C){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<S.length;m++)g(S[m]/h,M[m],C[m]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,f,S,0,C,0,b);let m=0;for(let L=0;L<b;L++)m+=M[L]*C[L];i.update(m,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function XA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function YA(o,e,i){const r=new WeakMap,l=new We;function f(h,d,p){const g=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let w=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,m=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let A=0;b===!0&&(A=1),C===!0&&(A=2),y===!0&&(A=3);let B=d.attributes.position.count*A,O=1;B>e.maxTextureSize&&(O=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const N=new Float32Array(B*O*4*_),G=new Vx(N,B,O,_);G.type=Ra,G.needsUpdate=!0;const D=A*4;for(let F=0;F<_;F++){const $=m[F],lt=L[F],mt=P[F],ut=B*O*4*F;for(let Y=0;Y<$.count;Y++){const st=Y*D;b===!0&&(l.fromBufferAttribute($,Y),N[ut+st+0]=l.x,N[ut+st+1]=l.y,N[ut+st+2]=l.z,N[ut+st+3]=0),C===!0&&(l.fromBufferAttribute(lt,Y),N[ut+st+4]=l.x,N[ut+st+5]=l.y,N[ut+st+6]=l.z,N[ut+st+7]=0),y===!0&&(l.fromBufferAttribute(mt,Y),N[ut+st+8]=l.x,N[ut+st+9]=l.y,N[ut+st+10]=l.z,N[ut+st+11]=mt.itemSize===4?l.w:1)}}S={count:_,texture:G,size:new fe(B,O)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<g.length;y++)b+=g[y];const C=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function qA(o,e,i,r){let l=new WeakMap;function f(p){const g=r.render.frame,x=p.geometry,_=e.get(p,x);if(l.get(_)!==g&&(e.update(_),l.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==g&&(S.update(),l.set(S,g))}return _}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:h}}const aS=new qn,nx=new $x(1,1),sS=new Vx,rS=new vT,oS=new Kx,ix=[],ax=[],sx=new Float32Array(16),rx=new Float32Array(9),ox=new Float32Array(4);function _o(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=ix[l];if(f===void 0&&(f=new Float32Array(l),ix[l]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function vn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function xn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Pc(o,e){let i=ax[e];i===void 0&&(i=new Int32Array(e),ax[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function WA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function jA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2fv(this.addr,e),xn(i,e)}}function ZA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;o.uniform3fv(this.addr,e),xn(i,e)}}function KA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4fv(this.addr,e),xn(i,e)}}function QA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;ox.set(r),o.uniformMatrix2fv(this.addr,!1,ox),xn(i,r)}}function JA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;rx.set(r),o.uniformMatrix3fv(this.addr,!1,rx),xn(i,r)}}function $A(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,r))return;sx.set(r),o.uniformMatrix4fv(this.addr,!1,sx),xn(i,r)}}function tR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function eR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2iv(this.addr,e),xn(i,e)}}function nR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3iv(this.addr,e),xn(i,e)}}function iR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4iv(this.addr,e),xn(i,e)}}function aR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function sR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2uiv(this.addr,e),xn(i,e)}}function rR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3uiv(this.addr,e),xn(i,e)}}function oR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4uiv(this.addr,e),xn(i,e)}}function lR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(nx.compareFunction=Hx,f=nx):f=aS,i.setTexture2D(e||f,l)}function uR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||rS,l)}function cR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||oS,l)}function fR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||sS,l)}function hR(o){switch(o){case 5126:return WA;case 35664:return jA;case 35665:return ZA;case 35666:return KA;case 35674:return QA;case 35675:return JA;case 35676:return $A;case 5124:case 35670:return tR;case 35667:case 35671:return eR;case 35668:case 35672:return nR;case 35669:case 35673:return iR;case 5125:return aR;case 36294:return sR;case 36295:return rR;case 36296:return oR;case 35678:case 36198:case 36298:case 36306:case 35682:return lR;case 35679:case 36299:case 36307:return uR;case 35680:case 36300:case 36308:case 36293:return cR;case 36289:case 36303:case 36311:case 36292:return fR}}function dR(o,e){o.uniform1fv(this.addr,e)}function pR(o,e){const i=_o(e,this.size,2);o.uniform2fv(this.addr,i)}function mR(o,e){const i=_o(e,this.size,3);o.uniform3fv(this.addr,i)}function gR(o,e){const i=_o(e,this.size,4);o.uniform4fv(this.addr,i)}function _R(o,e){const i=_o(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function vR(o,e){const i=_o(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function xR(o,e){const i=_o(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function SR(o,e){o.uniform1iv(this.addr,e)}function yR(o,e){o.uniform2iv(this.addr,e)}function MR(o,e){o.uniform3iv(this.addr,e)}function ER(o,e){o.uniform4iv(this.addr,e)}function TR(o,e){o.uniform1uiv(this.addr,e)}function bR(o,e){o.uniform2uiv(this.addr,e)}function AR(o,e){o.uniform3uiv(this.addr,e)}function RR(o,e){o.uniform4uiv(this.addr,e)}function CR(o,e,i){const r=this.cache,l=e.length,f=Pc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),xn(r,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||aS,f[h])}function wR(o,e,i){const r=this.cache,l=e.length,f=Pc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),xn(r,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||rS,f[h])}function DR(o,e,i){const r=this.cache,l=e.length,f=Pc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),xn(r,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||oS,f[h])}function UR(o,e,i){const r=this.cache,l=e.length,f=Pc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),xn(r,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||sS,f[h])}function NR(o){switch(o){case 5126:return dR;case 35664:return pR;case 35665:return mR;case 35666:return gR;case 35674:return _R;case 35675:return vR;case 35676:return xR;case 5124:case 35670:return SR;case 35667:case 35671:return yR;case 35668:case 35672:return MR;case 35669:case 35673:return ER;case 5125:return TR;case 36294:return bR;case 36295:return AR;case 36296:return RR;case 35678:case 36198:case 36298:case 36306:case 35682:return CR;case 35679:case 36299:case 36307:return wR;case 35680:case 36300:case 36308:case 36293:return DR;case 36289:case 36303:case 36311:case 36292:return UR}}class LR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=hR(i.type)}}class OR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=NR(i.type)}}class PR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],r)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function lx(o,e){o.seq.push(e),o.map[e.id]=e}function zR(o,e,i){const r=o.name,l=r.length;for(qd.lastIndex=0;;){const f=qd.exec(r),h=qd.lastIndex;let d=f[1];const p=f[2]==="]",g=f[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){lx(i,g===void 0?new LR(d,o,e):new OR(d,o,e));break}else{let _=i.map[d];_===void 0&&(_=new PR(d),lx(i,_)),i=_}}}class Rc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);zR(f,h,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function ux(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const IR=37297;let BR=0;function FR(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const cx=new pe;function HR(o){De._getMatrix(cx,De.workingColorSpace,o);const e=`mat3( ${cx.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Dc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function fx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+FR(o.getShaderSource(e),d)}else return f}function GR(o,e){const i=HR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function VR(o,e){let i;switch(e){case Tx:i="Linear";break;case bx:i="Reinhard";break;case Ax:i="Cineon";break;case Fp:i="ACESFilmic";break;case Cx:i="AgX";break;case wx:i="Neutral";break;case Rx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new Z;function kR(){De.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),e=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function YR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function qR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function _l(o){return o!==""}function hx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(o){return o.replace(WR,ZR)}const jR=new Map;function ZR(o,e){let i=me[e];if(i===void 0){const r=jR.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Pp(i)}const KR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function px(o){return o.replace(KR,QR)}function QR(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function mx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function JR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Mx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===_E?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ba&&(e="SHADOWMAP_TYPE_VSM"),e}function $R(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case so:case ro:e="ENVMAP_TYPE_CUBE";break;case Lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tC(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function eC(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ex:e="ENVMAP_BLENDING_MULTIPLY";break;case zE:e="ENVMAP_BLENDING_MIX";break;case IE:e="ENVMAP_BLENDING_ADD";break}return e}function nC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function iC(o,e,i,r){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=JR(i),g=$R(i),x=tC(i),_=eC(i),S=nC(i),M=XR(i),b=YR(f),C=l.createProgram();let y,m,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(_l).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(_l).join(`
`),m.length>0&&(m+=`
`)):(y=[mx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),m=[mx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==wa?"#define TONE_MAPPING":"",i.toneMapping!==wa?me.tonemapping_pars_fragment:"",i.toneMapping!==wa?VR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,GR("linearToOutputTexel",i.outputColorSpace),kR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_l).join(`
`)),h=Pp(h),h=hx(h,i),h=dx(h,i),d=Pp(d),d=hx(d,i),d=dx(d,i),h=px(h),d=px(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",i.glslVersion===Ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const P=L+y+h,A=L+m+d,B=ux(l,l.VERTEX_SHADER,P),O=ux(l,l.FRAGMENT_SHADER,A);l.attachShader(C,B),l.attachShader(C,O),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function N(F){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(C)||"",lt=l.getShaderInfoLog(B)||"",mt=l.getShaderInfoLog(O)||"",ut=$.trim(),Y=lt.trim(),st=mt.trim();let j=!0,xt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,B,O);else{const St=fx(l,B,"vertex"),Ht=fx(l,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ut+`
`+St+`
`+Ht)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(Y===""||st==="")&&(xt=!1);xt&&(F.diagnostics={runnable:j,programLog:ut,vertexShader:{log:Y,prefix:y},fragmentShader:{log:st,prefix:m}})}l.deleteShader(B),l.deleteShader(O),G=new Rc(l,C),D=qR(l,C)}let G;this.getUniforms=function(){return G===void 0&&N(this),G};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,IR)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=BR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=O,this}let aC=0;class sC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new rC(e),i.set(e,r)),r}}class rC{constructor(e){this.id=aC++,this.code=e,this.usedTimes=0}}function oC(o,e,i,r,l,f,h){const d=new Xx,p=new sC,g=new Set,x=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return g.add(D),D===0?"uv":`uv${D}`}function y(D,w,F,$,lt){const mt=$.fog,ut=lt.geometry,Y=D.isMeshStandardMaterial?$.environment:null,st=(D.isMeshStandardMaterial?i:e).get(D.envMap||Y),j=st&&st.mapping===Lc?st.image.height:null,xt=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const St=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Ht=St!==void 0?St.length:0;let re=0;ut.morphAttributes.position!==void 0&&(re=1),ut.morphAttributes.normal!==void 0&&(re=2),ut.morphAttributes.color!==void 0&&(re=3);let Ee,H,ht,J;if(xt){const be=ea[xt];Ee=be.vertexShader,H=be.fragmentShader}else Ee=D.vertexShader,H=D.fragmentShader,p.update(D),ht=p.getVertexShaderID(D),J=p.getFragmentShaderID(D);const it=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Nt=lt.isInstancedMesh===!0,Rt=lt.isBatchedMesh===!0,Et=!!D.map,Vt=!!D.matcap,I=!!st,Oe=!!D.aoMap,ae=!!D.lightMap,Kt=!!D.bumpMap,Lt=!!D.normalMap,ie=!!D.displacementMap,ft=!!D.emissiveMap,ee=!!D.metalnessMap,Te=!!D.roughnessMap,Be=D.anisotropy>0,U=D.clearcoat>0,T=D.dispersion>0,nt=D.iridescence>0,gt=D.sheen>0,yt=D.transmission>0,dt=Be&&!!D.anisotropyMap,Xt=U&&!!D.clearcoatMap,wt=U&&!!D.clearcoatNormalMap,jt=U&&!!D.clearcoatRoughnessMap,Qt=nt&&!!D.iridescenceMap,At=nt&&!!D.iridescenceThicknessMap,Pt=gt&&!!D.sheenColorMap,se=gt&&!!D.sheenRoughnessMap,Zt=!!D.specularMap,zt=!!D.specularColorMap,ce=!!D.specularIntensityMap,k=yt&&!!D.transmissionMap,Ct=yt&&!!D.thicknessMap,Ut=!!D.gradientMap,kt=!!D.alphaMap,Tt=D.alphaTest>0,vt=!!D.alphaHash,Wt=!!D.extensions;let ue=wa;D.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ye={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:Ee,fragmentShader:H,defines:D.defines,customVertexShaderID:ht,customFragmentShaderID:J,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Rt,batchingColor:Rt&&lt._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&lt.instanceColor!==null,instancingMorph:Nt&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:oo,alphaToCoverage:!!D.alphaToCoverage,map:Et,matcap:Vt,envMap:I,envMapMode:I&&st.mapping,envMapCubeUVHeight:j,aoMap:Oe,lightMap:ae,bumpMap:Kt,normalMap:Lt,displacementMap:S&&ie,emissiveMap:ft,normalMapObjectSpace:Lt&&D.normalMapType===GE,normalMapTangentSpace:Lt&&D.normalMapType===Fx,metalnessMap:ee,roughnessMap:Te,anisotropy:Be,anisotropyMap:dt,clearcoat:U,clearcoatMap:Xt,clearcoatNormalMap:wt,clearcoatRoughnessMap:jt,dispersion:T,iridescence:nt,iridescenceMap:Qt,iridescenceThicknessMap:At,sheen:gt,sheenColorMap:Pt,sheenRoughnessMap:se,specularMap:Zt,specularColorMap:zt,specularIntensityMap:ce,transmission:yt,transmissionMap:k,thicknessMap:Ct,gradientMap:Ut,opaque:D.transparent===!1&&D.blending===no&&D.alphaToCoverage===!1,alphaMap:kt,alphaTest:Tt,alphaHash:vt,combine:D.combine,mapUv:Et&&C(D.map.channel),aoMapUv:Oe&&C(D.aoMap.channel),lightMapUv:ae&&C(D.lightMap.channel),bumpMapUv:Kt&&C(D.bumpMap.channel),normalMapUv:Lt&&C(D.normalMap.channel),displacementMapUv:ie&&C(D.displacementMap.channel),emissiveMapUv:ft&&C(D.emissiveMap.channel),metalnessMapUv:ee&&C(D.metalnessMap.channel),roughnessMapUv:Te&&C(D.roughnessMap.channel),anisotropyMapUv:dt&&C(D.anisotropyMap.channel),clearcoatMapUv:Xt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:wt&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:At&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:se&&C(D.sheenRoughnessMap.channel),specularMapUv:Zt&&C(D.specularMap.channel),specularColorMapUv:zt&&C(D.specularColorMap.channel),specularIntensityMapUv:ce&&C(D.specularIntensityMap.channel),transmissionMapUv:k&&C(D.transmissionMap.channel),thicknessMapUv:Ct&&C(D.thicknessMap.channel),alphaMapUv:kt&&C(D.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Lt||Be),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ut.attributes.uv&&(Et||kt),fog:!!mt,useFog:D.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Mt,skinning:lt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Et&&D.map.isVideoTexture===!0&&De.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:ft&&D.emissiveMap.isVideoTexture===!0&&De.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Aa,flipSided:D.side===Bn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Wt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&D.extensions.multiDraw===!0||Rt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ye.vertexUv1s=g.has(1),Ye.vertexUv2s=g.has(2),Ye.vertexUv3s=g.has(3),g.clear(),Ye}function m(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)w.push(F),w.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(L(w,D),P(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function L(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function P(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function A(D){const w=b[D.type];let F;if(w){const $=ea[w];F=Rl.clone($.uniforms)}else F=D.uniforms;return F}function B(D,w){let F;for(let $=0,lt=x.length;$<lt;$++){const mt=x[$];if(mt.cacheKey===w){F=mt,++F.usedTimes;break}}return F===void 0&&(F=new iC(o,w,D,f),x.push(F)),F}function O(D){if(--D.usedTimes===0){const w=x.indexOf(D);x[w]=x[x.length-1],x.pop(),D.destroy()}}function N(D){p.remove(D)}function G(){p.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:B,releaseProgram:O,releaseShaderCache:N,programs:x,dispose:G}}function lC(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function uC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function gx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function _x(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function h(_,S,M,b,C,y){let m=o[e];return m===void 0?(m={id:_.id,object:_,geometry:S,material:M,groupOrder:b,renderOrder:_.renderOrder,z:C,group:y},o[e]=m):(m.id=_.id,m.object=_,m.geometry=S,m.material=M,m.groupOrder=b,m.renderOrder=_.renderOrder,m.z=C,m.group=y),e++,m}function d(_,S,M,b,C,y){const m=h(_,S,M,b,C,y);M.transmission>0?r.push(m):M.transparent===!0?l.push(m):i.push(m)}function p(_,S,M,b,C,y){const m=h(_,S,M,b,C,y);M.transmission>0?r.unshift(m):M.transparent===!0?l.unshift(m):i.unshift(m)}function g(_,S){i.length>1&&i.sort(_||uC),r.length>1&&r.sort(S||gx),l.length>1&&l.sort(S||gx)}function x(){for(let _=e,S=o.length;_<S;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:d,unshift:p,finish:x,sort:g}}function cC(){let o=new WeakMap;function e(r,l){const f=o.get(r);let h;return f===void 0?(h=new _x,o.set(r,[h])):l>=f.length?(h=new _x,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function fC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Z,color:new ge};break;case"SpotLight":i={position:new Z,direction:new Z,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[e.id]=i,i}}}function hC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let dC=0;function pC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function mC(o){const e=new fC,i=hC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new Z);const l=new Z,f=new an,h=new an;function d(g){let x=0,_=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,C=0,y=0,m=0,L=0,P=0,A=0,B=0,O=0,N=0;g.sort(pC);for(let D=0,w=g.length;D<w;D++){const F=g[D],$=F.color,lt=F.intensity,mt=F.distance,ut=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)x+=$.r*lt,_+=$.g*lt,S+=$.b*lt;else if(F.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(F.sh.coefficients[Y],lt);N++}else if(F.isDirectionalLight){const Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const st=F.shadow,j=i.get(F);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=ut,r.directionalShadowMatrix[M]=F.shadow.matrix,L++}r.directional[M]=Y,M++}else if(F.isSpotLight){const Y=e.get(F);Y.position.setFromMatrixPosition(F.matrixWorld),Y.color.copy($).multiplyScalar(lt),Y.distance=mt,Y.coneCos=Math.cos(F.angle),Y.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Y.decay=F.decay,r.spot[C]=Y;const st=F.shadow;if(F.map&&(r.spotLightMap[B]=F.map,B++,st.updateMatrices(F),F.castShadow&&O++),r.spotLightMatrix[C]=st.matrix,F.castShadow){const j=i.get(F);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,r.spotShadow[C]=j,r.spotShadowMap[C]=ut,A++}C++}else if(F.isRectAreaLight){const Y=e.get(F);Y.color.copy($).multiplyScalar(lt),Y.halfWidth.set(F.width*.5,0,0),Y.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=Y,y++}else if(F.isPointLight){const Y=e.get(F);if(Y.color.copy(F.color).multiplyScalar(F.intensity),Y.distance=F.distance,Y.decay=F.decay,F.castShadow){const st=F.shadow,j=i.get(F);j.shadowIntensity=st.intensity,j.shadowBias=st.bias,j.shadowNormalBias=st.normalBias,j.shadowRadius=st.radius,j.shadowMapSize=st.mapSize,j.shadowCameraNear=st.camera.near,j.shadowCameraFar=st.camera.far,r.pointShadow[b]=j,r.pointShadowMap[b]=ut,r.pointShadowMatrix[b]=F.shadow.matrix,P++}r.point[b]=Y,b++}else if(F.isHemisphereLight){const Y=e.get(F);Y.skyColor.copy(F.color).multiplyScalar(lt),Y.groundColor.copy(F.groundColor).multiplyScalar(lt),r.hemi[m]=Y,m++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=S;const G=r.hash;(G.directionalLength!==M||G.pointLength!==b||G.spotLength!==C||G.rectAreaLength!==y||G.hemiLength!==m||G.numDirectionalShadows!==L||G.numPointShadows!==P||G.numSpotShadows!==A||G.numSpotMaps!==B||G.numLightProbes!==N)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=b,r.hemi.length=m,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+B-O,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=N,G.directionalLength=M,G.pointLength=b,G.spotLength=C,G.rectAreaLength=y,G.hemiLength=m,G.numDirectionalShadows=L,G.numPointShadows=P,G.numSpotShadows=A,G.numSpotMaps=B,G.numLightProbes=N,r.version=dC++)}function p(g,x){let _=0,S=0,M=0,b=0,C=0;const y=x.matrixWorldInverse;for(let m=0,L=g.length;m<L;m++){const P=g[m];if(P.isDirectionalLight){const A=r.directional[_];A.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(y),_++}else if(P.isSpotLight){const A=r.spot[M];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(l),A.direction.transformDirection(y),M++}else if(P.isRectAreaLight){const A=r.rectArea[b];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),h.identity(),f.copy(P.matrixWorld),f.premultiply(y),h.extractRotation(f),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(h),A.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const A=r.point[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(y),S++}else if(P.isHemisphereLight){const A=r.hemi[C];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(y),C++}}}return{setup:d,setupView:p,state:r}}function vx(o){const e=new mC(o),i=[],r=[];function l(x){g.camera=x,i.length=0,r.length=0}function f(x){i.push(x)}function h(x){r.push(x)}function d(){e.setup(i)}function p(x){e.setupView(i,x)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:f,pushShadow:h}}function gC(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new vx(o),e.set(l,[d])):f>=h.length?(d=new vx(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const _C=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vC=`uniform sampler2D shadow_pass;
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
}`;function xC(o,e,i){let r=new jp;const l=new fe,f=new fe,h=new We,d=new VT({depthPacking:HE}),p=new kT,g={},x=i.maxTextureSize,_={[hs]:Bn,[Bn]:hs,[Aa]:Aa},S=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:_C,fragmentShader:vC}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Vi;b.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Tn(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mx;let m=this.type;this.render=function(O,N,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),$=o.state;$.setBlending(Ca),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const lt=m!==ba&&this.type===ba,mt=m===ba&&this.type!==ba;for(let ut=0,Y=O.length;ut<Y;ut++){const st=O[ut],j=st.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const xt=j.getFrameExtents();if(l.multiply(xt),f.copy(j.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(f.x=Math.floor(x/xt.x),l.x=f.x*xt.x,j.mapSize.x=f.x),l.y>x&&(f.y=Math.floor(x/xt.y),l.y=f.y*xt.y,j.mapSize.y=f.y)),j.map===null||lt===!0||mt===!0){const Ht=this.type!==ba?{minFilter:Bi,magFilter:Bi}:{};j.map!==null&&j.map.dispose(),j.map=new bi(l.x,l.y,Ht),j.map.texture.name=st.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const St=j.getViewportCount();for(let Ht=0;Ht<St;Ht++){const re=j.getViewport(Ht);h.set(f.x*re.x,f.y*re.y,f.x*re.z,f.y*re.w),$.viewport(h),j.updateMatrices(st,Ht),r=j.getFrustum(),A(N,G,j.camera,st,this.type)}j.isPointLightShadow!==!0&&this.type===ba&&L(j,G),j.needsUpdate=!1}m=this.type,y.needsUpdate=!1,o.setRenderTarget(D,w,F)};function L(O,N){const G=e.update(C);S.defines.VSM_SAMPLES!==O.blurSamples&&(S.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new bi(l.x,l.y)),S.uniforms.shadow_pass.value=O.map.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(N,null,G,S,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(N,null,G,M,C,null)}function P(O,N,G,D){let w=null;const F=G.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(F!==void 0)w=F;else if(w=G.isPointLight===!0?p:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const $=w.uuid,lt=N.uuid;let mt=g[$];mt===void 0&&(mt={},g[$]=mt);let ut=mt[lt];ut===void 0&&(ut=w.clone(),mt[lt]=ut,N.addEventListener("dispose",B)),w=ut}if(w.visible=N.visible,w.wireframe=N.wireframe,D===ba?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:_[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,G.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const $=o.properties.get(w);$.light=G}return w}function A(O,N,G,D,w){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===ba)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,O.matrixWorld);const lt=e.update(O),mt=O.material;if(Array.isArray(mt)){const ut=lt.groups;for(let Y=0,st=ut.length;Y<st;Y++){const j=ut[Y],xt=mt[j.materialIndex];if(xt&&xt.visible){const St=P(O,xt,D,w);O.onBeforeShadow(o,O,N,G,lt,St,j),o.renderBufferDirect(G,null,lt,St,O,j),O.onAfterShadow(o,O,N,G,lt,St,j)}}}else if(mt.visible){const ut=P(O,mt,D,w);O.onBeforeShadow(o,O,N,G,lt,ut,null),o.renderBufferDirect(G,null,lt,ut,O,null),O.onAfterShadow(o,O,N,G,lt,ut,null)}}const $=O.children;for(let lt=0,mt=$.length;lt<mt;lt++)A($[lt],N,G,D,w)}function B(O){O.target.removeEventListener("dispose",B);for(const G in g){const D=g[G],w=O.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const SC={[Zd]:Kd,[Qd]:tp,[Jd]:ep,[ao]:$d,[Kd]:Zd,[tp]:Qd,[ep]:Jd,[$d]:ao};function yC(o,e){function i(){let k=!1;const Ct=new We;let Ut=null;const kt=new We(0,0,0,0);return{setMask:function(Tt){Ut!==Tt&&!k&&(o.colorMask(Tt,Tt,Tt,Tt),Ut=Tt)},setLocked:function(Tt){k=Tt},setClear:function(Tt,vt,Wt,ue,Ye){Ye===!0&&(Tt*=ue,vt*=ue,Wt*=ue),Ct.set(Tt,vt,Wt,ue),kt.equals(Ct)===!1&&(o.clearColor(Tt,vt,Wt,ue),kt.copy(Ct))},reset:function(){k=!1,Ut=null,kt.set(-1,0,0,0)}}}function r(){let k=!1,Ct=!1,Ut=null,kt=null,Tt=null;return{setReversed:function(vt){if(Ct!==vt){const Wt=e.get("EXT_clip_control");vt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Ct=vt;const ue=Tt;Tt=null,this.setClear(ue)}},getReversed:function(){return Ct},setTest:function(vt){vt?it(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(vt){Ut!==vt&&!k&&(o.depthMask(vt),Ut=vt)},setFunc:function(vt){if(Ct&&(vt=SC[vt]),kt!==vt){switch(vt){case Zd:o.depthFunc(o.NEVER);break;case Kd:o.depthFunc(o.ALWAYS);break;case Qd:o.depthFunc(o.LESS);break;case ao:o.depthFunc(o.LEQUAL);break;case Jd:o.depthFunc(o.EQUAL);break;case $d:o.depthFunc(o.GEQUAL);break;case tp:o.depthFunc(o.GREATER);break;case ep:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}kt=vt}},setLocked:function(vt){k=vt},setClear:function(vt){Tt!==vt&&(Ct&&(vt=1-vt),o.clearDepth(vt),Tt=vt)},reset:function(){k=!1,Ut=null,kt=null,Tt=null,Ct=!1}}}function l(){let k=!1,Ct=null,Ut=null,kt=null,Tt=null,vt=null,Wt=null,ue=null,Ye=null;return{setTest:function(be){k||(be?it(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(be){Ct!==be&&!k&&(o.stencilMask(be),Ct=be)},setFunc:function(be,en,mn){(Ut!==be||kt!==en||Tt!==mn)&&(o.stencilFunc(be,en,mn),Ut=be,kt=en,Tt=mn)},setOp:function(be,en,mn){(vt!==be||Wt!==en||ue!==mn)&&(o.stencilOp(be,en,mn),vt=be,Wt=en,ue=mn)},setLocked:function(be){k=be},setClear:function(be){Ye!==be&&(o.clearStencil(be),Ye=be)},reset:function(){k=!1,Ct=null,Ut=null,kt=null,Tt=null,vt=null,Wt=null,ue=null,Ye=null}}}const f=new i,h=new r,d=new l,p=new WeakMap,g=new WeakMap;let x={},_={},S=new WeakMap,M=[],b=null,C=!1,y=null,m=null,L=null,P=null,A=null,B=null,O=null,N=new ge(0,0,0),G=0,D=!1,w=null,F=null,$=null,lt=null,mt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,st=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=st>=1):j.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=st>=2);let xt=null,St={};const Ht=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),Ee=new We().fromArray(Ht),H=new We().fromArray(re);function ht(k,Ct,Ut,kt){const Tt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(k,vt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<Ut;Wt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,kt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Ct+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return vt}const J={};J[o.TEXTURE_2D]=ht(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=ht(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=ht(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=ht(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),it(o.DEPTH_TEST),h.setFunc(ao),Kt(!1),Lt(vv),it(o.CULL_FACE),Oe(Ca);function it(k){x[k]!==!0&&(o.enable(k),x[k]=!0)}function Mt(k){x[k]!==!1&&(o.disable(k),x[k]=!1)}function Nt(k,Ct){return _[k]!==Ct?(o.bindFramebuffer(k,Ct),_[k]=Ct,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ct),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Rt(k,Ct){let Ut=M,kt=!1;if(k){Ut=S.get(Ct),Ut===void 0&&(Ut=[],S.set(Ct,Ut));const Tt=k.textures;if(Ut.length!==Tt.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Wt=Tt.length;vt<Wt;vt++)Ut[vt]=o.COLOR_ATTACHMENT0+vt;Ut.length=Tt.length,kt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,kt=!0);kt&&o.drawBuffers(Ut)}function Et(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const Vt={[Ys]:o.FUNC_ADD,[xE]:o.FUNC_SUBTRACT,[SE]:o.FUNC_REVERSE_SUBTRACT};Vt[yE]=o.MIN,Vt[ME]=o.MAX;const I={[EE]:o.ZERO,[TE]:o.ONE,[bE]:o.SRC_COLOR,[Wd]:o.SRC_ALPHA,[UE]:o.SRC_ALPHA_SATURATE,[wE]:o.DST_COLOR,[RE]:o.DST_ALPHA,[AE]:o.ONE_MINUS_SRC_COLOR,[jd]:o.ONE_MINUS_SRC_ALPHA,[DE]:o.ONE_MINUS_DST_COLOR,[CE]:o.ONE_MINUS_DST_ALPHA,[NE]:o.CONSTANT_COLOR,[LE]:o.ONE_MINUS_CONSTANT_COLOR,[OE]:o.CONSTANT_ALPHA,[PE]:o.ONE_MINUS_CONSTANT_ALPHA};function Oe(k,Ct,Ut,kt,Tt,vt,Wt,ue,Ye,be){if(k===Ca){C===!0&&(Mt(o.BLEND),C=!1);return}if(C===!1&&(it(o.BLEND),C=!0),k!==vE){if(k!==y||be!==D){if((m!==Ys||A!==Ys)&&(o.blendEquation(o.FUNC_ADD),m=Ys,A=Ys),be)switch(k){case no:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wc:o.blendFunc(o.ONE,o.ONE);break;case xv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Sv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case no:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case xv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}L=null,P=null,B=null,O=null,N.set(0,0,0),G=0,y=k,D=be}return}Tt=Tt||Ct,vt=vt||Ut,Wt=Wt||kt,(Ct!==m||Tt!==A)&&(o.blendEquationSeparate(Vt[Ct],Vt[Tt]),m=Ct,A=Tt),(Ut!==L||kt!==P||vt!==B||Wt!==O)&&(o.blendFuncSeparate(I[Ut],I[kt],I[vt],I[Wt]),L=Ut,P=kt,B=vt,O=Wt),(ue.equals(N)===!1||Ye!==G)&&(o.blendColor(ue.r,ue.g,ue.b,Ye),N.copy(ue),G=Ye),y=k,D=!1}function ae(k,Ct){k.side===Aa?Mt(o.CULL_FACE):it(o.CULL_FACE);let Ut=k.side===Bn;Ct&&(Ut=!Ut),Kt(Ut),k.blending===no&&k.transparent===!1?Oe(Ca):Oe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),f.setMask(k.colorWrite);const kt=k.stencilWrite;d.setTest(kt),kt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ft(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function Lt(k){k!==mE?(it(o.CULL_FACE),k!==F&&(k===vv?o.cullFace(o.BACK):k===gE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),F=k}function ie(k){k!==$&&(Y&&o.lineWidth(k),$=k)}function ft(k,Ct,Ut){k?(it(o.POLYGON_OFFSET_FILL),(lt!==Ct||mt!==Ut)&&(o.polygonOffset(Ct,Ut),lt=Ct,mt=Ut)):Mt(o.POLYGON_OFFSET_FILL)}function ee(k){k?it(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function Te(k){k===void 0&&(k=o.TEXTURE0+ut-1),xt!==k&&(o.activeTexture(k),xt=k)}function Be(k,Ct,Ut){Ut===void 0&&(xt===null?Ut=o.TEXTURE0+ut-1:Ut=xt);let kt=St[Ut];kt===void 0&&(kt={type:void 0,texture:void 0},St[Ut]=kt),(kt.type!==k||kt.texture!==Ct)&&(xt!==Ut&&(o.activeTexture(Ut),xt=Ut),o.bindTexture(k,Ct||J[k]),kt.type=k,kt.texture=Ct)}function U(){const k=St[xt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(k){Ee.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Ee.copy(k))}function se(k){H.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),H.copy(k))}function Zt(k,Ct){let Ut=g.get(Ct);Ut===void 0&&(Ut=new WeakMap,g.set(Ct,Ut));let kt=Ut.get(k);kt===void 0&&(kt=o.getUniformBlockIndex(Ct,k.name),Ut.set(k,kt))}function zt(k,Ct){const kt=g.get(Ct).get(k);p.get(Ct)!==kt&&(o.uniformBlockBinding(Ct,kt,k.__bindingPointIndex),p.set(Ct,kt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},xt=null,St={},_={},S=new WeakMap,M=[],b=null,C=!1,y=null,m=null,L=null,P=null,A=null,B=null,O=null,N=new ge(0,0,0),G=0,D=!1,w=null,F=null,$=null,lt=null,mt=null,Ee.set(0,0,o.canvas.width,o.canvas.height),H.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:it,disable:Mt,bindFramebuffer:Nt,drawBuffers:Rt,useProgram:Et,setBlending:Oe,setMaterial:ae,setFlipSided:Kt,setCullFace:Lt,setLineWidth:ie,setPolygonOffset:ft,setScissorTest:ee,activeTexture:Te,bindTexture:Be,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:nt,texImage2D:Qt,texImage3D:At,updateUBOMapping:Zt,uniformBlockBinding:zt,texStorage2D:wt,texStorage3D:jt,texSubImage2D:gt,texSubImage3D:yt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Xt,scissor:Pt,viewport:se,reset:ce}}function MC(o,e,i,r,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new fe,x=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):Nc("canvas")}function C(U,T,nt){let gt=1;const yt=Be(U);if((yt.width>nt||yt.height>nt)&&(gt=nt/Math.max(yt.width,yt.height)),gt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(gt*yt.width),Xt=Math.floor(gt*yt.height);_===void 0&&(_=b(dt,Xt));const wt=T?b(dt,Xt):_;return wt.width=dt,wt.height=Xt,wt.getContext("2d").drawImage(U,0,0,dt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+dt+"x"+Xt+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function m(U){o.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,T,nt,gt,yt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=T;if(T===o.RED&&(nt===o.FLOAT&&(dt=o.R32F),nt===o.HALF_FLOAT&&(dt=o.R16F),nt===o.UNSIGNED_BYTE&&(dt=o.R8)),T===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.R8UI),nt===o.UNSIGNED_SHORT&&(dt=o.R16UI),nt===o.UNSIGNED_INT&&(dt=o.R32UI),nt===o.BYTE&&(dt=o.R8I),nt===o.SHORT&&(dt=o.R16I),nt===o.INT&&(dt=o.R32I)),T===o.RG&&(nt===o.FLOAT&&(dt=o.RG32F),nt===o.HALF_FLOAT&&(dt=o.RG16F),nt===o.UNSIGNED_BYTE&&(dt=o.RG8)),T===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RG16UI),nt===o.UNSIGNED_INT&&(dt=o.RG32UI),nt===o.BYTE&&(dt=o.RG8I),nt===o.SHORT&&(dt=o.RG16I),nt===o.INT&&(dt=o.RG32I)),T===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),nt===o.UNSIGNED_INT&&(dt=o.RGB32UI),nt===o.BYTE&&(dt=o.RGB8I),nt===o.SHORT&&(dt=o.RGB16I),nt===o.INT&&(dt=o.RGB32I)),T===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(dt=o.RGBA32UI),nt===o.BYTE&&(dt=o.RGBA8I),nt===o.SHORT&&(dt=o.RGBA16I),nt===o.INT&&(dt=o.RGBA32I)),T===o.RGB&&(nt===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),T===o.RGBA){const Xt=yt?Dc:De.getTransfer(gt);nt===o.FLOAT&&(dt=o.RGBA32F),nt===o.HALF_FLOAT&&(dt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(dt=Xt===Xe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function A(U,T){let nt;return U?T===null||T===Ks||T===Ml?nt=o.DEPTH24_STENCIL8:T===Ra?nt=o.DEPTH32F_STENCIL8:T===yl&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ks||T===Ml?nt=o.DEPTH_COMPONENT24:T===Ra?nt=o.DEPTH_COMPONENT32F:T===yl&&(nt=o.DEPTH_COMPONENT16),nt}function B(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Bi&&U.minFilter!==na?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function O(U){const T=U.target;T.removeEventListener("dispose",O),G(T),T.isVideoTexture&&x.delete(T)}function N(U){const T=U.target;T.removeEventListener("dispose",N),w(T)}function G(U){const T=r.get(U);if(T.__webglInit===void 0)return;const nt=U.source,gt=S.get(nt);if(gt){const yt=gt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(U),Object.keys(gt).length===0&&S.delete(nt)}r.remove(U)}function D(U){const T=r.get(U);o.deleteTexture(T.__webglTexture);const nt=U.source,gt=S.get(nt);delete gt[T.__cacheKey],h.memory.textures--}function w(U){const T=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let yt=0;yt<T.__webglFramebuffer[gt].length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[gt][yt]);else o.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)o.deleteFramebuffer(T.__webglFramebuffer[gt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=U.textures;for(let gt=0,yt=nt.length;gt<yt;gt++){const dt=r.get(nt[gt]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),r.remove(nt[gt])}r.remove(U)}let F=0;function $(){F=0}function lt(){const U=F;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),F+=1,U}function mt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ut(U,T){const nt=r.get(U);if(U.isVideoTexture&&ee(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&nt.__version!==U.version){const gt=U.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(nt,U,T);return}}else U.isExternalTexture&&(nt.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+T)}function Y(U,T){const nt=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){J(nt,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+T)}function st(U,T){const nt=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){J(nt,U,T);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+T)}function j(U,T){const nt=r.get(U);if(U.version>0&&nt.__version!==U.version){it(nt,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+T)}const xt={[ap]:o.REPEAT,[Ws]:o.CLAMP_TO_EDGE,[sp]:o.MIRRORED_REPEAT},St={[Bi]:o.NEAREST,[BE]:o.NEAREST_MIPMAP_NEAREST,[Ju]:o.NEAREST_MIPMAP_LINEAR,[na]:o.LINEAR,[gd]:o.LINEAR_MIPMAP_NEAREST,[js]:o.LINEAR_MIPMAP_LINEAR},Ht={[VE]:o.NEVER,[jE]:o.ALWAYS,[kE]:o.LESS,[Hx]:o.LEQUAL,[XE]:o.EQUAL,[WE]:o.GEQUAL,[YE]:o.GREATER,[qE]:o.NOTEQUAL};function re(U,T){if(T.type===Ra&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===na||T.magFilter===gd||T.magFilter===Ju||T.magFilter===js||T.minFilter===na||T.minFilter===gd||T.minFilter===Ju||T.minFilter===js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,xt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,xt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,xt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Ht[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bi||T.minFilter!==Ju&&T.minFilter!==js||T.type===Ra&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(U,T){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",O));const gt=T.source;let yt=S.get(gt);yt===void 0&&(yt={},S.set(gt,yt));const dt=mt(T);if(dt!==U.__cacheKey){yt[dt]===void 0&&(yt[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),yt[dt].usedTimes++;const Xt=yt[U.__cacheKey];Xt!==void 0&&(yt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(T)),U.__cacheKey=dt,U.__webglTexture=yt[dt].texture}return nt}function H(U,T,nt){return Math.floor(Math.floor(U/nt)/T)}function ht(U,T,nt,gt){const dt=U.updateRanges;if(dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,nt,gt,T.data);else{dt.sort((At,Pt)=>At.start-Pt.start);let Xt=0;for(let At=1;At<dt.length;At++){const Pt=dt[Xt],se=dt[At],Zt=Pt.start+Pt.count,zt=H(se.start,T.width,4),ce=H(Pt.start,T.width,4);se.start<=Zt+1&&zt===ce&&H(se.start+se.count-1,T.width,4)===zt?Pt.count=Math.max(Pt.count,se.start+se.count-Pt.start):(++Xt,dt[Xt]=se)}dt.length=Xt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let At=0,Pt=dt.length;At<Pt;At++){const se=dt[At],Zt=Math.floor(se.start/4),zt=Math.ceil(se.count/4),ce=Zt%T.width,k=Math.floor(Zt/T.width),Ct=zt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ce,k,Ct,Ut,nt,gt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Qt)}}function J(U,T,nt){let gt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=o.TEXTURE_3D);const yt=Ee(U,T),dt=T.source;i.bindTexture(gt,U.__webglTexture,o.TEXTURE0+nt);const Xt=r.get(dt);if(dt.version!==Xt.__version||yt===!0){i.activeTexture(o.TEXTURE0+nt);const wt=De.getPrimaries(De.workingColorSpace),jt=T.colorSpace===fs?null:De.getPrimaries(T.colorSpace),Qt=T.colorSpace===fs||wt===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let At=C(T.image,!1,l.maxTextureSize);At=Te(T,At);const Pt=f.convert(T.format,T.colorSpace),se=f.convert(T.type);let Zt=P(T.internalFormat,Pt,se,T.colorSpace,T.isVideoTexture);re(gt,T);let zt;const ce=T.mipmaps,k=T.isVideoTexture!==!0,Ct=Xt.__version===void 0||yt===!0,Ut=dt.dataReady,kt=B(T,At);if(T.isDepthTexture)Zt=A(T.format===Tl,T.type),Ct&&(k?i.texStorage2D(o.TEXTURE_2D,1,Zt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Zt,At.width,At.height,0,Pt,se,null));else if(T.isDataTexture)if(ce.length>0){k&&Ct&&i.texStorage2D(o.TEXTURE_2D,kt,Zt,ce[0].width,ce[0].height);for(let Tt=0,vt=ce.length;Tt<vt;Tt++)zt=ce[Tt],k?Ut&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,zt.width,zt.height,Pt,se,zt.data):i.texImage2D(o.TEXTURE_2D,Tt,Zt,zt.width,zt.height,0,Pt,se,zt.data);T.generateMipmaps=!1}else k?(Ct&&i.texStorage2D(o.TEXTURE_2D,kt,Zt,At.width,At.height),Ut&&ht(T,At,Pt,se)):i.texImage2D(o.TEXTURE_2D,0,Zt,At.width,At.height,0,Pt,se,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Zt,ce[0].width,ce[0].height,At.depth);for(let Tt=0,vt=ce.length;Tt<vt;Tt++)if(zt=ce[Tt],T.format!==Ii)if(Pt!==null)if(k){if(Ut)if(T.layerUpdates.size>0){const Wt=jv(zt.width,zt.height,T.format,T.type);for(const ue of T.layerUpdates){const Ye=zt.data.subarray(ue*Wt/zt.data.BYTES_PER_ELEMENT,(ue+1)*Wt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ue,zt.width,zt.height,1,Pt,Ye)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,zt.width,zt.height,At.depth,Pt,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Zt,zt.width,zt.height,At.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ut&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,zt.width,zt.height,At.depth,Pt,se,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Zt,zt.width,zt.height,At.depth,0,Pt,se,zt.data)}else{k&&Ct&&i.texStorage2D(o.TEXTURE_2D,kt,Zt,ce[0].width,ce[0].height);for(let Tt=0,vt=ce.length;Tt<vt;Tt++)zt=ce[Tt],T.format!==Ii?Pt!==null?k?Ut&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,zt.width,zt.height,Pt,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Zt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ut&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,zt.width,zt.height,Pt,se,zt.data):i.texImage2D(o.TEXTURE_2D,Tt,Zt,zt.width,zt.height,0,Pt,se,zt.data)}else if(T.isDataArrayTexture)if(k){if(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Zt,At.width,At.height,At.depth),Ut)if(T.layerUpdates.size>0){const Tt=jv(At.width,At.height,T.format,T.type);for(const vt of T.layerUpdates){const Wt=At.data.subarray(vt*Tt/At.data.BYTES_PER_ELEMENT,(vt+1)*Tt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,Pt,se,Wt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Pt,se,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,At.width,At.height,At.depth,0,Pt,se,At.data);else if(T.isData3DTexture)k?(Ct&&i.texStorage3D(o.TEXTURE_3D,kt,Zt,At.width,At.height,At.depth),Ut&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Pt,se,At.data)):i.texImage3D(o.TEXTURE_3D,0,Zt,At.width,At.height,At.depth,0,Pt,se,At.data);else if(T.isFramebufferTexture){if(Ct)if(k)i.texStorage2D(o.TEXTURE_2D,kt,Zt,At.width,At.height);else{let Tt=At.width,vt=At.height;for(let Wt=0;Wt<kt;Wt++)i.texImage2D(o.TEXTURE_2D,Wt,Zt,Tt,vt,0,Pt,se,null),Tt>>=1,vt>>=1}}else if(ce.length>0){if(k&&Ct){const Tt=Be(ce[0]);i.texStorage2D(o.TEXTURE_2D,kt,Zt,Tt.width,Tt.height)}for(let Tt=0,vt=ce.length;Tt<vt;Tt++)zt=ce[Tt],k?Ut&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Pt,se,zt):i.texImage2D(o.TEXTURE_2D,Tt,Zt,Pt,se,zt);T.generateMipmaps=!1}else if(k){if(Ct){const Tt=Be(At);i.texStorage2D(o.TEXTURE_2D,kt,Zt,Tt.width,Tt.height)}Ut&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,se,At)}else i.texImage2D(o.TEXTURE_2D,0,Zt,Pt,se,At);y(T)&&m(gt),Xt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function it(U,T,nt){if(T.image.length!==6)return;const gt=Ee(U,T),yt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+nt);const dt=r.get(yt);if(yt.version!==dt.__version||gt===!0){i.activeTexture(o.TEXTURE0+nt);const Xt=De.getPrimaries(De.workingColorSpace),wt=T.colorSpace===fs?null:De.getPrimaries(T.colorSpace),jt=T.colorSpace===fs||Xt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Pt=[];for(let vt=0;vt<6;vt++)!Qt&&!At?Pt[vt]=C(T.image[vt],!0,l.maxCubemapSize):Pt[vt]=At?T.image[vt].image:T.image[vt],Pt[vt]=Te(T,Pt[vt]);const se=Pt[0],Zt=f.convert(T.format,T.colorSpace),zt=f.convert(T.type),ce=P(T.internalFormat,Zt,zt,T.colorSpace),k=T.isVideoTexture!==!0,Ct=dt.__version===void 0||gt===!0,Ut=yt.dataReady;let kt=B(T,se);re(o.TEXTURE_CUBE_MAP,T);let Tt;if(Qt){k&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,ce,se.width,se.height);for(let vt=0;vt<6;vt++){Tt=Pt[vt].mipmaps;for(let Wt=0;Wt<Tt.length;Wt++){const ue=Tt[Wt];T.format!==Ii?Zt!==null?k?Ut&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,0,0,ue.width,ue.height,Zt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,0,0,ue.width,ue.height,Zt,zt,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,ce,ue.width,ue.height,0,Zt,zt,ue.data)}}}else{if(Tt=T.mipmaps,k&&Ct){Tt.length>0&&kt++;const vt=Be(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,ce,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Pt[vt].width,Pt[vt].height,Zt,zt,Pt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,Pt[vt].width,Pt[vt].height,0,Zt,zt,Pt[vt].data);for(let Wt=0;Wt<Tt.length;Wt++){const Ye=Tt[Wt].image[vt].image;k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,0,0,Ye.width,Ye.height,Zt,zt,Ye.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,ce,Ye.width,Ye.height,0,Zt,zt,Ye.data)}}else{k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Zt,zt,Pt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,Zt,zt,Pt[vt]);for(let Wt=0;Wt<Tt.length;Wt++){const ue=Tt[Wt];k?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,0,0,Zt,zt,ue.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,ce,Zt,zt,ue.image[vt])}}}y(T)&&m(o.TEXTURE_CUBE_MAP),dt.__version=yt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Mt(U,T,nt,gt,yt,dt){const Xt=f.convert(nt.format,nt.colorSpace),wt=f.convert(nt.type),jt=P(nt.internalFormat,Xt,wt,nt.colorSpace),Qt=r.get(T),At=r.get(nt);if(At.__renderTarget=T,!Qt.__hasExternalTextures){const Pt=Math.max(1,T.width>>dt),se=Math.max(1,T.height>>dt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,dt,jt,Pt,se,T.depth,0,Xt,wt,null):i.texImage2D(yt,dt,jt,Pt,se,0,Xt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,yt,At.__webglTexture,0,ie(T)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,yt,At.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(U,T,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const gt=T.depthTexture,yt=gt&&gt.isDepthTexture?gt.type:null,dt=A(T.stencilBuffer,yt),Xt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ie(T);ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,dt,T.width,T.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,dt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,dt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const gt=T.textures;for(let yt=0;yt<gt.length;yt++){const dt=gt[yt],Xt=f.convert(dt.format,dt.colorSpace),wt=f.convert(dt.type),jt=P(dt.internalFormat,Xt,wt,dt.colorSpace),Qt=ie(T);nt&&ft(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,jt,T.width,T.height):ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Qt,jt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,jt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(T.depthTexture);gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const yt=gt.__webglTexture,dt=ie(T);if(T.depthTexture.format===El)ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(T.depthTexture.format===Tl)ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Et(U){const T=r.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const gt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",yt)};gt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=gt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const gt=U.texture.mipmaps;gt&&gt.length>0?Rt(T.__webglFramebuffer[0],U):Rt(T.__webglFramebuffer,U)}else if(nt){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=o.createRenderbuffer(),Nt(T.__webglDepthbuffer[gt],U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,dt)}}else{const gt=U.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Nt(T.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(U,T,nt){const gt=r.get(U);T!==void 0&&Mt(gt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Et(U)}function I(U){const T=U.texture,nt=r.get(U),gt=r.get(T);U.addEventListener("dispose",N);const yt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,Xt=yt.length>1;if(Xt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=T.version,h.memory.textures++),dt){nt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[wt]=[];for(let jt=0;jt<T.mipmaps.length;jt++)nt.__webglFramebuffer[wt][jt]=o.createFramebuffer()}else nt.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)nt.__webglFramebuffer[wt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let wt=0,jt=yt.length;wt<jt;wt++){const Qt=r.get(yt[wt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&ft(U)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let wt=0;wt<yt.length;wt++){const jt=yt[wt];nt.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[wt]);const Qt=f.convert(jt.format,jt.colorSpace),At=f.convert(jt.type),Pt=P(jt.internalFormat,Qt,At,jt.colorSpace,U.isXRRenderTarget===!0),se=ie(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,se,Pt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(nt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),re(o.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)Mt(nt.__webglFramebuffer[wt][jt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,jt);else Mt(nt.__webglFramebuffer[wt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(T)&&m(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let wt=0,jt=yt.length;wt<jt;wt++){const Qt=yt[wt],At=r.get(Qt);let Pt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Pt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Pt,At.__webglTexture),re(Pt,Qt),Mt(nt.__webglFramebuffer,U,Qt,o.COLOR_ATTACHMENT0+wt,Pt,0),y(Qt)&&m(Pt)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,gt.__webglTexture),re(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)Mt(nt.__webglFramebuffer[jt],U,T,o.COLOR_ATTACHMENT0,wt,jt);else Mt(nt.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,wt,0);y(T)&&m(wt),i.unbindTexture()}U.depthBuffer&&Et(U)}function Oe(U){const T=U.textures;for(let nt=0,gt=T.length;nt<gt;nt++){const yt=T[nt];if(y(yt)){const dt=L(U),Xt=r.get(yt).__webglTexture;i.bindTexture(dt,Xt),m(dt),i.unbindTexture()}}}const ae=[],Kt=[];function Lt(U){if(U.samples>0){if(ft(U)===!1){const T=U.textures,nt=U.width,gt=U.height;let yt=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=r.get(U),wt=T.length>1;if(wt)for(let Qt=0;Qt<T.length;Qt++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const jt=U.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Qt=0;Qt<T.length;Qt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Qt]);const At=r.get(T[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,At,0)}o.blitFramebuffer(0,0,nt,gt,0,0,nt,gt,yt,o.NEAREST),p===!0&&(ae.length=0,Kt.length=0,ae.push(o.COLOR_ATTACHMENT0+Qt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ae.push(dt),Kt.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Kt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Qt=0;Qt<T.length;Qt++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Qt]);const At=r.get(T[Qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,At,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ie(U){return Math.min(l.maxSamples,U.samples)}function ft(U){const T=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ee(U){const T=h.render.frame;x.get(U)!==T&&(x.set(U,T),U.update())}function Te(U,T){const nt=U.colorSpace,gt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==oo&&nt!==fs&&(De.getTransfer(nt)===Xe?(gt!==Ii||yt!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function Be(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=lt,this.resetTextureUnits=$,this.setTexture2D=ut,this.setTexture2DArray=Y,this.setTexture3D=st,this.setTextureCube=j,this.rebindTextures=Vt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ft}function EC(o,e){function i(r,l=fs){let f;const h=De.getTransfer(l);if(r===Hi)return o.UNSIGNED_BYTE;if(r===Gp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Vp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Lx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Ox)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ux)return o.BYTE;if(r===Nx)return o.SHORT;if(r===yl)return o.UNSIGNED_SHORT;if(r===Hp)return o.INT;if(r===Ks)return o.UNSIGNED_INT;if(r===Ra)return o.FLOAT;if(r===Fi)return o.HALF_FLOAT;if(r===Px)return o.ALPHA;if(r===zx)return o.RGB;if(r===Ii)return o.RGBA;if(r===El)return o.DEPTH_COMPONENT;if(r===Tl)return o.DEPTH_STENCIL;if(r===Ix)return o.RED;if(r===kp)return o.RED_INTEGER;if(r===Bx)return o.RG;if(r===Xp)return o.RG_INTEGER;if(r===Yp)return o.RGBA_INTEGER;if(r===Mc||r===Ec||r===Tc||r===bc)if(h===Xe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Mc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ec)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Mc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ec)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rp||r===op||r===lp||r===up)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===rp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===op)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===up)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cp||r===fp||r===hp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===cp||r===fp)return h===Xe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===hp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dp||r===pp||r===mp||r===gp||r===_p||r===vp||r===xp||r===Sp||r===yp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===dp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_p)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ep)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ap)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rp||r===Cp||r===wp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Rp)return h===Xe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dp||r===Up||r===Np||r===Lp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Dp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Up)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Np)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ml?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const TC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bC=`
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

}`;class AC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new tS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new bn({vertexShader:TC,fragmentShader:bC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Tn(new go(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RC extends fo{constructor(e,i){super();const r=this;let l=null,f=1,h=null,d="local-floor",p=1,g=null,x=null,_=null,S=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new AC,m={},L=i.getContextAttributes();let P=null,A=null;const B=[],O=[],N=new fe;let G=null;const D=new hi;D.viewport=new We;const w=new hi;w.viewport=new We;const F=[D,w],$=new jT;let lt=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=B[J];return it===void 0&&(it=new Id,B[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=B[J];return it===void 0&&(it=new Id,B[J]=it),it.getGripSpace()},this.getHand=function(J){let it=B[J];return it===void 0&&(it=new Id,B[J]=it),it.getHandSpace()};function ut(J){const it=O.indexOf(J.inputSource);if(it===-1)return;const Mt=B[it];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,g||h),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",Y),l.removeEventListener("inputsourceschange",st);for(let J=0;J<B.length;J++){const it=O[J];it!==null&&(O[J]=null,B[J].disconnect(it))}lt=null,mt=null,y.reset();for(const J in m)delete m[J];e.setRenderTarget(P),M=null,S=null,_=null,l=null,A=null,ht.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){f=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(J){g=J},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",Y),l.addEventListener("inputsourceschange",st),L.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(N),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Nt=null,Rt=null;L.depth&&(Rt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=L.stencil?Tl:El,Nt=L.stencil?Ml:Ks);const Et={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:f};_=this.getBinding(),S=_.createProjectionLayer(Et),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),A=new bi(S.textureWidth,S.textureHeight,{format:Ii,type:Hi,depthTexture:new $x(S.textureWidth,S.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Mt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),A=new bi(M.framebufferWidth,M.framebufferHeight,{format:Ii,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),ht.setContext(l),ht.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function st(J){for(let it=0;it<J.removed.length;it++){const Mt=J.removed[it],Nt=O.indexOf(Mt);Nt>=0&&(O[Nt]=null,B[Nt].disconnect(Mt))}for(let it=0;it<J.added.length;it++){const Mt=J.added[it];let Nt=O.indexOf(Mt);if(Nt===-1){for(let Et=0;Et<B.length;Et++)if(Et>=O.length){O.push(Mt),Nt=Et;break}else if(O[Et]===null){O[Et]=Mt,Nt=Et;break}if(Nt===-1)break}const Rt=B[Nt];Rt&&Rt.connect(Mt)}}const j=new Z,xt=new Z;function St(J,it,Mt){j.setFromMatrixPosition(it.matrixWorld),xt.setFromMatrixPosition(Mt.matrixWorld);const Nt=j.distanceTo(xt),Rt=it.projectionMatrix.elements,Et=Mt.projectionMatrix.elements,Vt=Rt[14]/(Rt[10]-1),I=Rt[14]/(Rt[10]+1),Oe=(Rt[9]+1)/Rt[5],ae=(Rt[9]-1)/Rt[5],Kt=(Rt[8]-1)/Rt[0],Lt=(Et[8]+1)/Et[0],ie=Vt*Kt,ft=Vt*Lt,ee=Nt/(-Kt+Lt),Te=ee*-Kt;if(it.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Te),J.translateZ(ee),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Rt[10]===-1)J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Be=Vt+ee,U=I+ee,T=ie-Te,nt=ft+(Nt-Te),gt=Oe*I/U*Be,yt=ae*I/U*Be;J.projectionMatrix.makePerspective(T,nt,gt,yt,Be,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ht(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let it=J.near,Mt=J.far;y.texture!==null&&(y.depthNear>0&&(it=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),$.near=w.near=D.near=it,$.far=w.far=D.far=Mt,(lt!==$.near||mt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),lt=$.near,mt=$.far),$.layers.mask=J.layers.mask|6,D.layers.mask=$.layers.mask&3,w.layers.mask=$.layers.mask&5;const Nt=J.parent,Rt=$.cameras;Ht($,Nt);for(let Et=0;Et<Rt.length;Et++)Ht(Rt[Et],Nt);Rt.length===2?St($,D,w):$.projectionMatrix.copy(D.projectionMatrix),re(J,$,Nt)};function re(J,it,Mt){Mt===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=bl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(J){p=J,S!==null&&(S.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(J){return m[J]};let Ee=null;function H(J,it){if(x=it.getViewerPose(g||h),b=it,x!==null){const Mt=x.views;M!==null&&(e.setRenderTargetFramebuffer(A,M.framebuffer),e.setRenderTarget(A));let Nt=!1;Mt.length!==$.cameras.length&&($.cameras.length=0,Nt=!0);for(let I=0;I<Mt.length;I++){const Oe=Mt[I];let ae=null;if(M!==null)ae=M.getViewport(Oe);else{const Lt=_.getViewSubImage(S,Oe);ae=Lt.viewport,I===0&&(e.setRenderTargetTextures(A,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(A))}let Kt=F[I];Kt===void 0&&(Kt=new hi,Kt.layers.enable(I),Kt.viewport=new We,F[I]=Kt),Kt.matrix.fromArray(Oe.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Oe.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ae.x,ae.y,ae.width,ae.height),I===0&&($.matrix.copy(Kt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Nt===!0&&$.cameras.push(Kt)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const I=_.getDepthInformation(Mt[0]);I&&I.isValid&&I.texture&&y.init(I,l.renderState)}if(Rt&&Rt.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let I=0;I<Mt.length;I++){const Oe=Mt[I].camera;if(Oe){let ae=m[Oe];ae||(ae=new tS,m[Oe]=ae);const Kt=_.getCameraImage(Oe);ae.sourceTexture=Kt}}}}for(let Mt=0;Mt<B.length;Mt++){const Nt=O[Mt],Rt=B[Mt];Nt!==null&&Rt!==void 0&&Rt.update(Nt,it,g||h)}Ee&&Ee(J,it),it.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:it}),b=null}const ht=new iS;ht.setAnimationLoop(H),this.setAnimationLoop=function(J){Ee=J},this.dispose=function(){}}}const Vs=new Gi,CC=new an;function wC(o,e){function i(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function r(y,m){m.color.getRGB(y.fogColor.value,jx(o)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function l(y,m,L,P,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?f(y,m):m.isMeshToonMaterial?(f(y,m),_(y,m)):m.isMeshPhongMaterial?(f(y,m),x(y,m)):m.isMeshStandardMaterial?(f(y,m),S(y,m),m.isMeshPhysicalMaterial&&M(y,m,A)):m.isMeshMatcapMaterial?(f(y,m),b(y,m)):m.isMeshDepthMaterial?f(y,m):m.isMeshDistanceMaterial?(f(y,m),C(y,m)):m.isMeshNormalMaterial?f(y,m):m.isLineBasicMaterial?(h(y,m),m.isLineDashedMaterial&&d(y,m)):m.isPointsMaterial?p(y,m,L,P):m.isSpriteMaterial?g(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function f(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,i(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,i(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Bn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,i(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Bn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,i(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,i(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const L=e.get(m),P=L.envMap,A=L.envMapRotation;P&&(y.envMap.value=P,Vs.copy(A),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),y.envMapRotation.value.setFromMatrix4(CC.makeRotationFromEuler(Vs)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,y.aoMapTransform))}function h(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,i(m.map,y.mapTransform))}function d(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function p(y,m,L,P){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*L,y.scale.value=P*.5,m.map&&(y.map.value=m.map,i(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function g(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,i(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function x(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function _(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function S(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function M(y,m,L){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,m){m.matcap&&(y.matcap.value=m.matcap)}function C(y,m){const L=e.get(m).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function DC(o,e,i,r){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,P){const A=P.program;r.uniformBlockBinding(L,A)}function g(L,P){let A=l[L.id];A===void 0&&(b(L),A=x(L),l[L.id]=A,L.addEventListener("dispose",y));const B=P.program;r.updateUBOMapping(L,B);const O=e.render.frame;f[L.id]!==O&&(S(L),f[L.id]=O)}function x(L){const P=_();L.__bindingPointIndex=P;const A=o.createBuffer(),B=L.__size,O=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,B,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,A),A}function _(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const P=l[L.id],A=L.uniforms,B=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let O=0,N=A.length;O<N;O++){const G=Array.isArray(A[O])?A[O]:[A[O]];for(let D=0,w=G.length;D<w;D++){const F=G[D];if(M(F,O,D,B)===!0){const $=F.__offset,lt=Array.isArray(F.value)?F.value:[F.value];let mt=0;for(let ut=0;ut<lt.length;ut++){const Y=lt[ut],st=C(Y);typeof Y=="number"||typeof Y=="boolean"?(F.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,$+mt,F.__data)):Y.isMatrix3?(F.__data[0]=Y.elements[0],F.__data[1]=Y.elements[1],F.__data[2]=Y.elements[2],F.__data[3]=0,F.__data[4]=Y.elements[3],F.__data[5]=Y.elements[4],F.__data[6]=Y.elements[5],F.__data[7]=0,F.__data[8]=Y.elements[6],F.__data[9]=Y.elements[7],F.__data[10]=Y.elements[8],F.__data[11]=0):(Y.toArray(F.__data,mt),mt+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,P,A,B){const O=L.value,N=P+"_"+A;if(B[N]===void 0)return typeof O=="number"||typeof O=="boolean"?B[N]=O:B[N]=O.clone(),!0;{const G=B[N];if(typeof O=="number"||typeof O=="boolean"){if(G!==O)return B[N]=O,!0}else if(G.equals(O)===!1)return G.copy(O),!0}return!1}function b(L){const P=L.uniforms;let A=0;const B=16;for(let N=0,G=P.length;N<G;N++){const D=Array.isArray(P[N])?P[N]:[P[N]];for(let w=0,F=D.length;w<F;w++){const $=D[w],lt=Array.isArray($.value)?$.value:[$.value];for(let mt=0,ut=lt.length;mt<ut;mt++){const Y=lt[mt],st=C(Y),j=A%B,xt=j%st.boundary,St=j+xt;A+=xt,St!==0&&B-St<st.storage&&(A+=B-St),$.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=st.storage}}}const O=A%B;return O>0&&(A+=B-O),L.__size=A,L.__cache={},this}function C(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function y(L){const P=L.target;P.removeEventListener("dispose",y);const A=h.indexOf(P.__bindingPointIndex);h.splice(A,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete f[P.id]}function m(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},f={}}return{bind:p,update:g,dispose:m}}class UC{constructor(e={}){const{canvas:i=fT(),context:r=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),C=new Int32Array(4);let y=null,m=null;const L=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let B=!1;this._outputColorSpace=Jn;let O=0,N=0,G=null,D=-1,w=null;const F=new We,$=new We;let lt=null;const mt=new ge(0);let ut=0,Y=i.width,st=i.height,j=1,xt=null,St=null;const Ht=new We(0,0,Y,st),re=new We(0,0,Y,st);let Ee=!1;const H=new jp;let ht=!1,J=!1;const it=new an,Mt=new Z,Nt=new We,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Vt(){return G===null?j:1}let I=r;function Oe(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bp}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),I===null){const K="webgl2";if(I=Oe(K,R),I===null)throw Oe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ae,Kt,Lt,ie,ft,ee,Te,Be,U,T,nt,gt,yt,dt,Xt,wt,jt,Qt,At,Pt,se,Zt,zt,ce;function k(){ae=new GA(I),ae.init(),Zt=new EC(I,ae),Kt=new OA(I,ae,e,Zt),Lt=new yC(I,ae),Kt.reversedDepthBuffer&&S&&Lt.buffers.depth.setReversed(!0),ie=new XA(I),ft=new lC,ee=new MC(I,ae,Lt,ft,Kt,Zt,ie),Te=new zA(A),Be=new HA(A),U=new KT(I),zt=new NA(I,U),T=new VA(I,U,ie,zt),nt=new qA(I,T,U,ie),At=new YA(I,Kt,ee),wt=new PA(ft),gt=new oC(A,Te,Be,ae,Kt,zt,wt),yt=new wC(A,ft),dt=new cC,Xt=new gC(ae),Qt=new UA(A,Te,Be,Lt,nt,M,p),jt=new xC(A,nt,Kt),ce=new DC(I,ie,Kt,Lt),Pt=new LA(I,ae,ie),se=new kA(I,ae,ie),ie.programs=gt.programs,A.capabilities=Kt,A.extensions=ae,A.properties=ft,A.renderLists=dt,A.shadowMap=jt,A.state=Lt,A.info=ie}k();const Ct=new RC(A,I);this.xr=Ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(Y,st,!1))},this.getSize=function(R){return R.set(Y,st)},this.setSize=function(R,K,rt=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,st=K,i.width=Math.floor(R*j),i.height=Math.floor(K*j),rt===!0&&(i.style.width=R+"px",i.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(Y*j,st*j).floor()},this.setDrawingBufferSize=function(R,K,rt){Y=R,st=K,j=rt,i.width=Math.floor(R*rt),i.height=Math.floor(K*rt),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Ht)},this.setViewport=function(R,K,rt,ot){R.isVector4?Ht.set(R.x,R.y,R.z,R.w):Ht.set(R,K,rt,ot),Lt.viewport(F.copy(Ht).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,K,rt,ot){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,K,rt,ot),Lt.scissor($.copy(re).multiplyScalar(j).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(R){Lt.setScissorTest(Ee=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){St=R},this.getClearColor=function(R){return R.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,rt=!0){let ot=0;if(R){let Q=!1;if(G!==null){const bt=G.texture.format;Q=bt===Yp||bt===Xp||bt===kp}if(Q){const bt=G.texture.type,It=bt===Hi||bt===Ks||bt===yl||bt===Ml||bt===Gp||bt===Vp,Ft=Qt.getClearColor(),Dt=Qt.getClearAlpha(),Yt=Ft.r,ne=Ft.g,$t=Ft.b;It?(b[0]=Yt,b[1]=ne,b[2]=$t,b[3]=Dt,I.clearBufferuiv(I.COLOR,0,b)):(C[0]=Yt,C[1]=ne,C[2]=$t,C[3]=Dt,I.clearBufferiv(I.COLOR,0,C))}else ot|=I.COLOR_BUFFER_BIT}K&&(ot|=I.DEPTH_BUFFER_BIT),rt&&(ot|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Qt.dispose(),dt.dispose(),Xt.dispose(),ft.dispose(),Te.dispose(),Be.dispose(),nt.dispose(),zt.dispose(),ce.dispose(),gt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",mn),Ct.removeEventListener("sessionend",Ln),aa.stop()};function Ut(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const R=ie.autoReset,K=jt.enabled,rt=jt.autoUpdate,ot=jt.needsUpdate,Q=jt.type;k(),ie.autoReset=R,jt.enabled=K,jt.autoUpdate=rt,jt.needsUpdate=ot,jt.type=Q}function Tt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const K=R.target;K.removeEventListener("dispose",vt),Wt(K)}function Wt(R){ue(R),ft.remove(R)}function ue(R){const K=ft.get(R).programs;K!==void 0&&(K.forEach(function(rt){gt.releaseProgram(rt)}),R.isShaderMaterial&&gt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,rt,ot,Q,bt){K===null&&(K=Rt);const It=Q.isMesh&&Q.matrixWorld.determinant()<0,Ft=Dl(R,K,rt,ot,Q);Lt.setMaterial(ot,It);let Dt=rt.index,Yt=1;if(ot.wireframe===!0){if(Dt=T.getWireframeAttribute(rt),Dt===void 0)return;Yt=2}const ne=rt.drawRange,$t=rt.attributes.position;let xe=ne.start*Yt,Fe=(ne.start+ne.count)*Yt;bt!==null&&(xe=Math.max(xe,bt.start*Yt),Fe=Math.min(Fe,(bt.start+bt.count)*Yt)),Dt!==null?(xe=Math.max(xe,0),Fe=Math.min(Fe,Dt.count)):$t!=null&&(xe=Math.max(xe,0),Fe=Math.min(Fe,$t.count));const Je=Fe-xe;if(Je<0||Je===1/0)return;zt.setup(Q,ot,Ft,rt,Dt);let Pe,Ue=Pt;if(Dt!==null&&(Pe=U.get(Dt),Ue=se,Ue.setIndex(Pe)),Q.isMesh)ot.wireframe===!0?(Lt.setLineWidth(ot.wireframeLinewidth*Vt()),Ue.setMode(I.LINES)):Ue.setMode(I.TRIANGLES);else if(Q.isLine){let te=ot.linewidth;te===void 0&&(te=1),Lt.setLineWidth(te*Vt()),Q.isLineSegments?Ue.setMode(I.LINES):Q.isLineLoop?Ue.setMode(I.LINE_LOOP):Ue.setMode(I.LINE_STRIP)}else Q.isPoints?Ue.setMode(I.POINTS):Q.isSprite&&Ue.setMode(I.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Al("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ue.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Ue.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,ze=Q._multiDrawCounts,_e=Q._multiDrawCount,gn=Dt?U.get(Dt).bytesPerElement:1,ei=ft.get(ot).currentProgram.getUniforms();for(let Ne=0;Ne<_e;Ne++)ei.setValue(I,"_gl_DrawID",Ne),Ue.render(te[Ne]/gn,ze[Ne])}else if(Q.isInstancedMesh)Ue.renderInstances(xe,Je,Q.count);else if(rt.isInstancedBufferGeometry){const te=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,ze=Math.min(rt.instanceCount,te);Ue.renderInstances(xe,Je,ze)}else Ue.render(xe,Je)};function Ye(R,K,rt){R.transparent===!0&&R.side===Aa&&R.forceSinglePass===!1?(R.side=Bn,R.needsUpdate=!0,di(R,K,rt),R.side=hs,R.needsUpdate=!0,di(R,K,rt),R.side=Aa):di(R,K,rt)}this.compile=function(R,K,rt=null){rt===null&&(rt=R),m=Xt.get(rt),m.init(K),P.push(m),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),R!==rt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights();const ot=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const bt=Q.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){const Ft=bt[It];Ye(Ft,rt,Q),ot.add(Ft)}else Ye(bt,rt,Q),ot.add(bt)}),m=P.pop(),ot},this.compileAsync=function(R,K,rt=null){const ot=this.compile(R,K,rt);return new Promise(Q=>{function bt(){if(ot.forEach(function(It){ft.get(It).currentProgram.isReady()&&ot.delete(It)}),ot.size===0){Q(R);return}setTimeout(bt,10)}ae.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let be=null;function en(R){be&&be(R)}function mn(){aa.stop()}function Ln(){aa.start()}const aa=new iS;aa.setAnimationLoop(en),typeof self<"u"&&aa.setContext(self),this.setAnimationLoop=function(R){be=R,Ct.setAnimationLoop(R),R===null?aa.stop():aa.start()},Ct.addEventListener("sessionstart",mn),Ct.addEventListener("sessionend",Ln),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(K),K=Ct.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,K,G),m=Xt.get(R,P.length),m.init(K),P.push(m),it.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),H.setFromProjectionMatrix(it,ia,K.reversedDepth),J=this.localClippingEnabled,ht=wt.init(this.clippingPlanes,J),y=dt.get(R,L.length),y.init(),L.push(y),Ct.enabled===!0&&Ct.isPresenting===!0){const bt=A.xr.getDepthSensingMesh();bt!==null&&xo(bt,K,-1/0,A.sortObjects)}xo(R,K,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(xt,St),Et=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Et&&Qt.addToRenderList(y,R),this.info.render.frame++,ht===!0&&wt.beginShadows();const rt=m.state.shadowsArray;jt.render(rt,R,K),ht===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,Q=y.transmissive;if(m.setupLights(),K.isArrayCamera){const bt=K.cameras;if(Q.length>0)for(let It=0,Ft=bt.length;It<Ft;It++){const Dt=bt[It];ds(ot,Q,R,Dt)}Et&&Qt.render(R);for(let It=0,Ft=bt.length;It<Ft;It++){const Dt=bt[It];wl(y,R,Dt,Dt.viewport)}}else Q.length>0&&ds(ot,Q,R,K),Et&&Qt.render(R),wl(y,R,K);G!==null&&N===0&&(ee.updateMultisampleRenderTarget(G),ee.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(A,R,K),zt.resetDefaultState(),D=-1,w=null,P.pop(),P.length>0?(m=P[P.length-1],ht===!0&&wt.setGlobalState(A.clippingPlanes,m.state.camera)):m=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function xo(R,K,rt,ot){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||H.intersectsSprite(R)){ot&&Nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(it);const It=nt.update(R),Ft=R.material;Ft.visible&&y.push(R,It,Ft,rt,Nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||H.intersectsObject(R))){const It=nt.update(R),Ft=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Nt.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Nt.copy(It.boundingSphere.center)),Nt.applyMatrix4(R.matrixWorld).applyMatrix4(it)),Array.isArray(Ft)){const Dt=It.groups;for(let Yt=0,ne=Dt.length;Yt<ne;Yt++){const $t=Dt[Yt],xe=Ft[$t.materialIndex];xe&&xe.visible&&y.push(R,It,xe,rt,Nt.z,$t)}}else Ft.visible&&y.push(R,It,Ft,rt,Nt.z,null)}}const bt=R.children;for(let It=0,Ft=bt.length;It<Ft;It++)xo(bt[It],K,rt,ot)}function wl(R,K,rt,ot){const Q=R.opaque,bt=R.transmissive,It=R.transparent;m.setupLightsView(rt),ht===!0&&wt.setGlobalState(A.clippingPlanes,rt),ot&&Lt.viewport(F.copy(ot)),Q.length>0&&sa(Q,K,rt),bt.length>0&&sa(bt,K,rt),It.length>0&&sa(It,K,rt),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ds(R,K,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ot.id]===void 0&&(m.state.transmissionRenderTarget[ot.id]=new bi(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Fi:Hi,minFilter:js,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const bt=m.state.transmissionRenderTarget[ot.id],It=ot.viewport||F;bt.setSize(It.z*A.transmissionResolutionScale,It.w*A.transmissionResolutionScale);const Ft=A.getRenderTarget(),Dt=A.getActiveCubeFace(),Yt=A.getActiveMipmapLevel();A.setRenderTarget(bt),A.getClearColor(mt),ut=A.getClearAlpha(),ut<1&&A.setClearColor(16777215,.5),A.clear(),Et&&Qt.render(rt);const ne=A.toneMapping;A.toneMapping=wa;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),m.setupLightsView(ot),ht===!0&&wt.setGlobalState(A.clippingPlanes,ot),sa(R,rt,ot),ee.updateMultisampleRenderTarget(bt),ee.updateRenderTargetMipmap(bt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let Fe=0,Je=K.length;Fe<Je;Fe++){const Pe=K[Fe],Ue=Pe.object,te=Pe.geometry,ze=Pe.material,_e=Pe.group;if(ze.side===Aa&&Ue.layers.test(ot.layers)){const gn=ze.side;ze.side=Bn,ze.needsUpdate=!0,ps(Ue,rt,ot,te,ze,_e),ze.side=gn,ze.needsUpdate=!0,xe=!0}}xe===!0&&(ee.updateMultisampleRenderTarget(bt),ee.updateRenderTargetMipmap(bt))}A.setRenderTarget(Ft,Dt,Yt),A.setClearColor(mt,ut),$t!==void 0&&(ot.viewport=$t),A.toneMapping=ne}function sa(R,K,rt){const ot=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,bt=R.length;Q<bt;Q++){const It=R[Q],Ft=It.object,Dt=It.geometry,Yt=It.group;let ne=It.material;ne.allowOverride===!0&&ot!==null&&(ne=ot),Ft.layers.test(rt.layers)&&ps(Ft,K,rt,Dt,ne,Yt)}}function ps(R,K,rt,ot,Q,bt){R.onBeforeRender(A,K,rt,ot,Q,bt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(A,K,rt,ot,R,bt),Q.transparent===!0&&Q.side===Aa&&Q.forceSinglePass===!1?(Q.side=Bn,Q.needsUpdate=!0,A.renderBufferDirect(rt,K,ot,Q,R,bt),Q.side=hs,Q.needsUpdate=!0,A.renderBufferDirect(rt,K,ot,Q,R,bt),Q.side=Aa):A.renderBufferDirect(rt,K,ot,Q,R,bt),R.onAfterRender(A,K,rt,ot,Q,bt)}function di(R,K,rt){K.isScene!==!0&&(K=Rt);const ot=ft.get(R),Q=m.state.lights,bt=m.state.shadowsArray,It=Q.state.version,Ft=gt.getParameters(R,Q.state,bt,K,rt),Dt=gt.getProgramCacheKey(Ft);let Yt=ot.programs;ot.environment=R.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(R.isMeshStandardMaterial?Be:Te).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,Yt===void 0&&(R.addEventListener("dispose",vt),Yt=new Map,ot.programs=Yt);let ne=Yt.get(Dt);if(ne!==void 0){if(ot.currentProgram===ne&&ot.lightsStateVersion===It)return Ua(R,Ft),ne}else Ft.uniforms=gt.getUniforms(R),R.onBeforeCompile(Ft,A),ne=gt.acquireProgram(Ft,Dt),Yt.set(Dt,ne),ot.uniforms=Ft.uniforms;const $t=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=wt.uniform),Ua(R,Ft),ot.needsLights=Ul(R),ot.lightsStateVersion=It,ot.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=ne,ot.uniformsList=null,ne}function ms(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Rc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Ua(R,K){const rt=ft.get(R);rt.outputColorSpace=K.outputColorSpace,rt.batching=K.batching,rt.batchingColor=K.batchingColor,rt.instancing=K.instancing,rt.instancingColor=K.instancingColor,rt.instancingMorph=K.instancingMorph,rt.skinning=K.skinning,rt.morphTargets=K.morphTargets,rt.morphNormals=K.morphNormals,rt.morphColors=K.morphColors,rt.morphTargetsCount=K.morphTargetsCount,rt.numClippingPlanes=K.numClippingPlanes,rt.numIntersection=K.numClipIntersection,rt.vertexAlphas=K.vertexAlphas,rt.vertexTangents=K.vertexTangents,rt.toneMapping=K.toneMapping}function Dl(R,K,rt,ot,Q){K.isScene!==!0&&(K=Rt),ee.resetTextureUnits();const bt=K.fog,It=ot.isMeshStandardMaterial?K.environment:null,Ft=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:oo,Dt=(ot.isMeshStandardMaterial?Be:Te).get(ot.envMap||It),Yt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ne=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!rt.morphAttributes.position,xe=!!rt.morphAttributes.normal,Fe=!!rt.morphAttributes.color;let Je=wa;ot.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Je=A.toneMapping);const Pe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ue=Pe!==void 0?Pe.length:0,te=ft.get(ot),ze=m.state.lights;if(ht===!0&&(J===!0||R!==w)){const sn=R===w&&ot.id===D;wt.setState(ot,R,sn)}let _e=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==ze.state.version||te.outputColorSpace!==Ft||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==Dt||ot.fog===!0&&te.fog!==bt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==wt.numPlanes||te.numIntersection!==wt.numIntersection)||te.vertexAlphas!==Yt||te.vertexTangents!==ne||te.morphTargets!==$t||te.morphNormals!==xe||te.morphColors!==Fe||te.toneMapping!==Je||te.morphTargetsCount!==Ue)&&(_e=!0):(_e=!0,te.__version=ot.version);let gn=te.currentProgram;_e===!0&&(gn=di(ot,K,Q));let ei=!1,Ne=!1,Na=!1;const Ze=gn.getUniforms(),Fn=te.uniforms;if(Lt.useProgram(gn.program)&&(ei=!0,Ne=!0,Na=!0),ot.id!==D&&(D=ot.id,Ne=!0),ei||w!==R){Lt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ze.setValue(I,"projectionMatrix",R.projectionMatrix),Ze.setValue(I,"viewMatrix",R.matrixWorldInverse);const On=Ze.map.cameraPosition;On!==void 0&&On.setValue(I,Mt.setFromMatrixPosition(R.matrixWorld)),Kt.logarithmicDepthBuffer&&Ze.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ze.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Ne=!0,Na=!0)}if(Q.isSkinnedMesh){Ze.setOptional(I,Q,"bindMatrix"),Ze.setOptional(I,Q,"bindMatrixInverse");const sn=Q.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ze.setValue(I,"boneTexture",sn.boneTexture,ee))}Q.isBatchedMesh&&(Ze.setOptional(I,Q,"batchingTexture"),Ze.setValue(I,"batchingTexture",Q._matricesTexture,ee),Ze.setOptional(I,Q,"batchingIdTexture"),Ze.setValue(I,"batchingIdTexture",Q._indirectTexture,ee),Ze.setOptional(I,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ze.setValue(I,"batchingColorTexture",Q._colorsTexture,ee));const un=rt.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&At.update(Q,rt,gn),(Ne||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,Ze.setValue(I,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Fn.envMap.value=Dt,Fn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(Fn.envMapIntensity.value=K.environmentIntensity),Ne&&(Ze.setValue(I,"toneMappingExposure",A.toneMappingExposure),te.needsLights&&zc(Fn,Na),bt&&ot.fog===!0&&yt.refreshFogUniforms(Fn,bt),yt.refreshMaterialUniforms(Fn,ot,j,st,m.state.transmissionRenderTarget[R.id]),Rc.upload(I,ms(te),Fn,ee)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Rc.upload(I,ms(te),Fn,ee),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ze.setValue(I,"center",Q.center),Ze.setValue(I,"modelViewMatrix",Q.modelViewMatrix),Ze.setValue(I,"normalMatrix",Q.normalMatrix),Ze.setValue(I,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const sn=ot.uniformsGroups;for(let On=0,Js=sn.length;On<Js;On++){const ki=sn[On];ce.update(ki,gn),ce.bind(ki,gn)}}return gn}function zc(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Ul(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,K,rt){const ot=ft.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),ft.get(R.texture).__webglTexture=K,ft.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const rt=ft.get(R);rt.__webglFramebuffer=K,rt.__useDefaultFramebuffer=K===void 0};const So=I.createFramebuffer();this.setRenderTarget=function(R,K=0,rt=0){G=R,O=K,N=rt;let ot=!0,Q=null,bt=!1,It=!1;if(R){const Dt=ft.get(R);if(Dt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(I.FRAMEBUFFER,null),ot=!1;else if(Dt.__webglFramebuffer===void 0)ee.setupRenderTarget(R);else if(Dt.__hasExternalTextures)ee.rebindTextures(R,ft.get(R.texture).__webglTexture,ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(Dt.__boundDepthTexture!==$t){if($t!==null&&ft.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(R)}}const Yt=R.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(It=!0);const ne=ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ne[K])?Q=ne[K][rt]:Q=ne[K],bt=!0):R.samples>0&&ee.useMultisampledRTT(R)===!1?Q=ft.get(R).__webglMultisampledFramebuffer:Array.isArray(ne)?Q=ne[rt]:Q=ne,F.copy(R.viewport),$.copy(R.scissor),lt=R.scissorTest}else F.copy(Ht).multiplyScalar(j).floor(),$.copy(re).multiplyScalar(j).floor(),lt=Ee;if(rt!==0&&(Q=So),Lt.bindFramebuffer(I.FRAMEBUFFER,Q)&&ot&&Lt.drawBuffers(R,Q),Lt.viewport(F),Lt.scissor($),Lt.setScissorTest(lt),bt){const Dt=ft.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+K,Dt.__webglTexture,rt)}else if(It){const Dt=K;for(let Yt=0;Yt<R.textures.length;Yt++){const ne=ft.get(R.textures[Yt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Yt,ne.__webglTexture,rt,Dt)}}else if(R!==null&&rt!==0){const Dt=ft.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,K,rt,ot,Q,bt,It,Ft=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt){Lt.bindFramebuffer(I.FRAMEBUFFER,Dt);try{const Yt=R.textures[Ft],ne=Yt.format,$t=Yt.type;if(!Kt.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ot&&rt>=0&&rt<=R.height-Q&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(K,rt,ot,Q,Zt.convert(ne),Zt.convert($t),bt))}finally{const Yt=G!==null?ft.get(G).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(R,K,rt,ot,Q,bt,It,Ft=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt)if(K>=0&&K<=R.width-ot&&rt>=0&&rt<=R.height-Q){Lt.bindFramebuffer(I.FRAMEBUFFER,Dt);const Yt=R.textures[Ft],ne=Yt.format,$t=Yt.type;if(!Kt.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,xe),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(K,rt,ot,Q,Zt.convert(ne),Zt.convert($t),0);const Fe=G!==null?ft.get(G).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,Fe);const Je=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await hT(I,Je,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,xe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.deleteBuffer(xe),I.deleteSync(Je),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,rt=0){const ot=Math.pow(2,-rt),Q=Math.floor(R.image.width*ot),bt=Math.floor(R.image.height*ot),It=K!==null?K.x:0,Ft=K!==null?K.y:0;ee.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,rt,0,0,It,Ft,Q,bt),Lt.unbindTexture()};const gs=I.createFramebuffer(),Ic=I.createFramebuffer();this.copyTextureToTexture=function(R,K,rt=null,ot=null,Q=0,bt=null){bt===null&&(Q!==0?(Al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Q,Q=0):bt=0);let It,Ft,Dt,Yt,ne,$t,xe,Fe,Je;const Pe=R.isCompressedTexture?R.mipmaps[bt]:R.image;if(rt!==null)It=rt.max.x-rt.min.x,Ft=rt.max.y-rt.min.y,Dt=rt.isBox3?rt.max.z-rt.min.z:1,Yt=rt.min.x,ne=rt.min.y,$t=rt.isBox3?rt.min.z:0;else{const un=Math.pow(2,-Q);It=Math.floor(Pe.width*un),Ft=Math.floor(Pe.height*un),R.isDataArrayTexture?Dt=Pe.depth:R.isData3DTexture?Dt=Math.floor(Pe.depth*un):Dt=1,Yt=0,ne=0,$t=0}ot!==null?(xe=ot.x,Fe=ot.y,Je=ot.z):(xe=0,Fe=0,Je=0);const Ue=Zt.convert(K.format),te=Zt.convert(K.type);let ze;K.isData3DTexture?(ee.setTexture3D(K,0),ze=I.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ee.setTexture2DArray(K,0),ze=I.TEXTURE_2D_ARRAY):(ee.setTexture2D(K,0),ze=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,K.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,K.unpackAlignment);const _e=I.getParameter(I.UNPACK_ROW_LENGTH),gn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ei=I.getParameter(I.UNPACK_SKIP_PIXELS),Ne=I.getParameter(I.UNPACK_SKIP_ROWS),Na=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Yt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$t);const Ze=R.isDataArrayTexture||R.isData3DTexture,Fn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const un=ft.get(R),sn=ft.get(K),On=ft.get(un.__renderTarget),Js=ft.get(sn.__renderTarget);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,On.__webglFramebuffer),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Js.__webglFramebuffer);for(let ki=0;ki<Dt;ki++)Ze&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ft.get(R).__webglTexture,Q,$t+ki),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ft.get(K).__webglTexture,bt,Je+ki)),I.blitFramebuffer(Yt,ne,It,Ft,xe,Fe,It,Ft,I.DEPTH_BUFFER_BIT,I.NEAREST);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||ft.has(R)){const un=ft.get(R),sn=ft.get(K);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,gs),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ic);for(let On=0;On<Dt;On++)Ze?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,un.__webglTexture,Q,$t+On):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,un.__webglTexture,Q),Fn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,bt,Je+On):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,bt),Q!==0?I.blitFramebuffer(Yt,ne,It,Ft,xe,Fe,It,Ft,I.COLOR_BUFFER_BIT,I.NEAREST):Fn?I.copyTexSubImage3D(ze,bt,xe,Fe,Je+On,Yt,ne,It,Ft):I.copyTexSubImage2D(ze,bt,xe,Fe,Yt,ne,It,Ft);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Fn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(ze,bt,xe,Fe,Je,It,Ft,Dt,Ue,te,Pe.data):K.isCompressedArrayTexture?I.compressedTexSubImage3D(ze,bt,xe,Fe,Je,It,Ft,Dt,Ue,Pe.data):I.texSubImage3D(ze,bt,xe,Fe,Je,It,Ft,Dt,Ue,te,Pe):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,xe,Fe,It,Ft,Ue,te,Pe.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,xe,Fe,Pe.width,Pe.height,Ue,Pe.data):I.texSubImage2D(I.TEXTURE_2D,bt,xe,Fe,It,Ft,Ue,te,Pe);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Na),bt===0&&K.generateMipmaps&&I.generateMipmap(ze),Lt.unbindTexture()},this.initRenderTarget=function(R){ft.get(R).__webglFramebuffer===void 0&&ee.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ee.setTextureCube(R,0):R.isData3DTexture?ee.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ee.setTexture2DArray(R,0):ee.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){O=0,N=0,G=null,Lt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const Cc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class vo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const NC=new Kp(-1,1,1,-1,0,1);class LC extends Vi{constructor(){super(),this.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ai([0,2,0,0,2,0],2))}}const OC=new LC;class Jp{constructor(e){this._mesh=new Tn(OC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class PC extends vo{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof bn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rl.clone(e.uniforms),this.material=new bn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Jp(this.material)}render(e,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xx extends vo{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,r){const l=e.getContext(),f=e.state;f.buffers.color.setMask(!1),f.buffers.depth.setMask(!1),f.buffers.color.setLocked(!0),f.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),f.buffers.stencil.setTest(!0),f.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),f.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),f.buffers.stencil.setClear(d),f.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),f.buffers.color.setLocked(!1),f.buffers.depth.setLocked(!1),f.buffers.color.setMask(!0),f.buffers.depth.setMask(!0),f.buffers.stencil.setLocked(!1),f.buffers.stencil.setFunc(l.EQUAL,1,4294967295),f.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),f.buffers.stencil.setLocked(!0)}}class zC extends vo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class IC{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const r=e.getSize(new fe);this._width=r.width,this._height=r.height,i=new bi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new PC(Cc),this.copyPass.material.blending=Ca,this.clock=new nS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const i=this.renderer.getRenderTarget();let r=!1;for(let l=0,f=this.passes.length;l<f;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),h.needsSwap){if(r){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}xx!==void 0&&(h instanceof xx?r=!0:h instanceof zC&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const r=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(r,l),this.renderTarget2.setSize(r,l);for(let f=0;f<this.passes.length;f++)this.passes[f].setSize(r,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class BC extends vo{constructor(e,i,r=null,l=null,f=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=r,this.clearColor=l,this.clearAlpha=f,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,i,r){const l=e.autoClear;e.autoClear=!1;let f,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(f=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(f),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=l}}const FC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class co extends vo{constructor(e,i=1,r,l){super(),this.strength=i,this.radius=r,this.threshold=l,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let f=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new bi(f,h,{type:Fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let x=0;x<this.nMips;x++){const _=new bi(f,h,{type:Fi});_.texture.name="UnrealBloomPass.h"+x,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const S=new bi(f,h,{type:Fi});S.texture.name="UnrealBloomPass.v"+x,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),f=Math.round(f/2),h=Math.round(h/2)}const d=FC;this.highPassUniforms=Rl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];f=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let x=0;x<this.nMips;x++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[x])),this.separableBlurMaterials[x].uniforms.invSize.value=new fe(1/f,1/h),f=Math.round(f/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const g=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=g,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rl.clone(Cc.uniforms),this.blendMaterial=new bn({uniforms:this.copyUniforms,vertexShader:Cc.vertexShader,fragmentShader:Cc.fragmentShader,blending:wc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new lo,this._fsQuad=new Jp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let r=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(r,l);for(let f=0;f<this.nMips;f++)this.renderTargetsHorizontal[f].setSize(r,l),this.renderTargetsVertical[f].setSize(r,l),this.separableBlurMaterials[f].uniforms.invSize.value=new fe(1/r,1/l),r=Math.round(r/2),l=Math.round(l/2)}render(e,i,r,l,f){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),f&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=co.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=co.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,f&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=h}_getSeparableBlurMaterial(e){const i=[];for(let r=0;r<e;r++)i.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new bn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new bn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}co.BlurDirectionX=new fe(1,0);co.BlurDirectionY=new fe(0,1);const yc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class HC extends vo{constructor(){super(),this.uniforms=Rl.clone(yc.uniforms),this.material=new GT({name:yc.name,uniforms:this.uniforms,vertexShader:yc.vertexShader,fragmentShader:yc.fragmentShader}),this._fsQuad=new Jp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,i,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},De.getTransfer(this._outputColorSpace)===Xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ax?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wx?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Rx&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Jr=(o,e,i)=>Math.min(i,Math.max(e,o)),gl=(o,e,i,r)=>e+(o-e)*Math.exp(-i*r),lS=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class GC{constructor(){$e(this,"shipQuaternion",new Qs);$e(this,"lookQuaternion",new Qs);$e(this,"position",new Z);$e(this,"yaw",0);$e(this,"pitch",0);$e(this,"yawVelocity",0);$e(this,"pitchVelocity",0);$e(this,"speed",0);$e(this,"lookYaw",0);$e(this,"lookPitch",0);$e(this,"lookTargetYaw",0);$e(this,"lookTargetPitch",0);$e(this,"touchX",0);$e(this,"touchY",0);$e(this,"touchSteering",!1);$e(this,"keys",new Set);$e(this,"elapsed",0);$e(this,"lastContext","");$e(this,"euler",new Gi(0,0,0,"YXZ"));$e(this,"forward",new Z)}key(e,i){lS.has(e)&&(i?this.touchSteering||this.keys.add(e):this.keys.delete(e))}steerTouch(e,i,r){this.touchSteering=r,this.keys.clear();const l=Math.hypot(e,i),f=r?Jr((l-.1)/.9,0,1):0;this.touchX=l?e/l*f:0,this.touchY=l?i/l*f:0}look(e,i,r,l){if(l.paused||l.blocked)return;const f=r?l.touchSensitivity:l.sensitivity;this.lookTargetYaw=Jr(this.lookTargetYaw-Jr(e,-.2,.2)*f*1.6*(!r&&l.invertMouseX?-1:1),-.85,.85),this.lookTargetPitch=Jr(this.lookTargetPitch-Jr(i,-.2,.2)*f*1.6*(!r&&l.invertMouseY?-1:1),-.5,.5)}reset(e=!1){this.keys.clear(),this.steerTouch(0,0,!1),e&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(e,i){const r=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&r!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=r,!Number.isFinite(e)||e<=0||e>.25||i.paused)return;const l=Math.min(e,.1);this.elapsed+=l;const f=i.mode==="Manual Flight"&&i.started&&!i.blocked;let h=0,d=0;if(f){h=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const m=Math.max(1,Math.hypot(h,d));h/=m,d/=m}const p=i.reduced?.45:1,g=this.touchSteering?i.touchSensitivity:i.sensitivity,x=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,_=f?-h*.22*g*p:Math.sin(this.elapsed*.055)*x,S=f?-d*.16*g*p:Math.sin(this.elapsed*.08)*x*.3,M=3,b=(1-Math.exp(-M*l))/M;this.yaw+=_*l+(this.yawVelocity-_)*b,this.pitch=Jr(this.pitch+S*l+(this.pitchVelocity-S)*b,-.75,.75),this.yawVelocity=gl(this.yawVelocity,_,M,l),this.pitchVelocity=gl(this.pitchVelocity,S,M,l),Math.abs(this.pitch)>=.75&&Math.sign(this.pitchVelocity)===Math.sign(this.pitch)&&(this.pitchVelocity=0),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ")),this.lookYaw=gl(this.lookYaw,this.lookTargetYaw,6,l),this.lookPitch=gl(this.lookPitch,this.lookTargetPitch,6,l),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const C=i.started?i.speed*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,y=C*l+(this.speed-C)*(1-Math.exp(-.8*l))/.8;this.speed=gl(this.speed,C,.8,l),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,y)}}function VC(o,e,i,r){let l=null,f=null,h="";const d=[],p=(m,L,P,A)=>{m.addEventListener(L,P,A),d.push(()=>m.removeEventListener(L,P,A))},g=()=>!r().paused&&!r().blocked&&document.visibilityState!=="hidden",x=()=>g()&&r().started&&r().mode==="Manual Flight",_=(m,L)=>{e.style.setProperty("--stick-x",`${m*34}px`),e.style.setProperty("--stick-y",`${L*34}px`)},S=()=>{const m=l;l=null,m&&o.hasPointerCapture(m.id)&&o.releasePointerCapture(m.id)},M=()=>{const m=f;f=null,i.steerTouch(0,0,!1),_(0,0),m!==null&&e.hasPointerCapture(m)&&e.releasePointerCapture(m)},b=()=>{S(),M(),i.reset(!0)};p(o,"pointerdown",(m=>{!g()||l||m.pointerType==="mouse"&&(m.button!==0||f!==null)||(m.preventDefault(),l={id:m.pointerId,type:m.pointerType,x:m.clientX,y:m.clientY},o.setPointerCapture(m.pointerId))})),p(o,"pointermove",(m=>{if((l==null?void 0:l.id)!==m.pointerId)return;if(!g()||m.pointerType==="mouse"&&!(m.buttons&1)){S();return}m.preventDefault();const L=Math.max(240,Math.min(o.clientWidth,o.clientHeight));i.look((m.clientX-l.x)/L,(m.clientY-l.y)/L,l.type!=="mouse",r()),l.x=m.clientX,l.y=m.clientY}));for(const m of["pointerup","pointercancel","lostpointercapture"])p(o,m,(L=>{L.pointerId===(l==null?void 0:l.id)&&S()}));const C=m=>{const L=e.getBoundingClientRect();let P=(m.clientX-L.left-L.width/2)/(L.width*.35),A=(m.clientY-L.top-L.height/2)/(L.height*.35);const B=Math.max(1,Math.hypot(P,A));P/=B,A/=B,i.steerTouch(P,A,!0),_(P,A)};p(e,"pointerdown",(m=>{m.pointerType==="mouse"||f!==null||!x()||(m.preventDefault(),m.stopPropagation(),(l==null?void 0:l.type)==="mouse"&&S(),f=m.pointerId,e.setPointerCapture(m.pointerId),C(m))})),p(e,"pointermove",(m=>{if(m.pointerId===f){if(!x()){M();return}m.preventDefault(),C(m)}}));for(const m of["pointerup","pointercancel","lostpointercapture"])p(e,m,(L=>{L.pointerId===f&&M()}));const y=m=>m instanceof HTMLElement&&!!m.closest('input,select,textarea,[contenteditable="true"]');return p(window,"keydown",(m=>{!lS.has(m.code)||y(m.target)||!x()||m.ctrlKey||m.metaKey||m.altKey||(m.preventDefault(),i.key(m.code,!0))})),p(window,"keyup",(m=>i.key(m.code,!1))),p(window,"blur",b),p(document,"visibilitychange",b),p(window,"resize",b),p(window,"orientationchange",b),p(o,"contextmenu",m=>m.preventDefault()),p(e,"contextmenu",m=>m.preventDefault()),{sync(){const m=r(),L=`${m.mode}/${m.paused}/${m.started}/${m.blocked}`;h&&L!==h&&(S(),M(),i.reset(m.paused||m.blocked)),h=L},dispose(){b(),d.forEach(m=>m())}}}const zp={Low:{pixelRatio:1,stars:[700,3200,11e3],cloudScale:.4,volumes:2,steps:6,octaves:2,bloom:!1},Medium:{pixelRatio:1.25,stars:[1400,6500,26e3],cloudScale:.5,volumes:3,steps:10,octaves:3,bloom:!0},High:{pixelRatio:1.6,stars:[2200,1e4,48e3],cloudScale:.65,volumes:4,steps:14,octaves:4,bloom:!0}},Sx={Dark:{exposure:.8,cabin:.7,nebula:.65},Balanced:{exposure:1.12,cabin:1,nebula:.9},Cinematic:{exposure:1.32,cabin:1.12,nebula:1.08}},Zs=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#a879ef",second:"#315fab",accent:"#f4a4cf",density:1.05,band:.8,structure:1.15,bandWidth:1,warmth:.25,stars:.87,exposure:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#88bcf2",second:"#234a89",accent:"#c3dcff",density:.38,band:.7,structure:1.4,bandWidth:.65,warmth:.07,stars:1,exposure:1.04},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#edbd79",second:"#956753",accent:"#fff2c9",density:.85,band:1.65,structure:1.8,bandWidth:1.4,warmth:.88,stars:1.4,exposure:.93},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#67cbbf",second:"#306c9c",accent:"#b1d5e8",density:1.3,band:.5,structure:.65,bandWidth:1.1,warmth:.16,stars:.7,exposure:1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#6d7fbb",second:"#253553",accent:"#a6b8e1",density:.12,band:.15,structure:.8,bandWidth:.45,warmth:.12,stars:.23,exposure:.84}],uS=`
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
`,kC=`
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
`,XC=`
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
`,YC=`
varying vec3 worldPoint;
void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}
`,qC=`
precision highp float;
varying vec3 worldPoint;
uniform vec3 center, radii, tint, second, accent;
uniform float time, density, visibility, energy, seed, structure;
uniform int steps, octaves;
${uS}
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
`,WC=`
varying vec3 direction;
void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,jC=`
varying vec3 direction;
uniform vec3 tint, second, accent;
uniform float band, density, energy, bandWidth;
uniform int octaves;
${uS}
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
`;function ZC(o){const e=Zs[0],i=new Qx,r=new bi(1,1,{type:Fi,depthBuffer:!1}),l=new Tn(new go(2,2),new lo({map:r.texture,depthTest:!1,depthWrite:!1}));l.material.onBeforeCompile=A=>{A.vertexShader=A.vertexShader.replace("#include <project_vertex>","gl_Position = vec4(position.xy, 1., 1.);")},l.frustumCulled=!1,l.renderOrder=-10,o.add(l);const f=Zs.map(A=>({tint:new ge(A.color),second:new ge(A.second),accent:new ge(A.accent)})),h={time:{value:0},tint:{value:f[0].tint.clone()},second:{value:f[0].second.clone()},accent:{value:f[0].accent.clone()},density:{value:Number(e.density)},band:{value:Number(e.band)},warmth:{value:Number(e.warmth)},abundance:{value:e.stars/1.4},structure:{value:Number(e.structure)},bandWidth:{value:Number(e.bandWidth)},energy:{value:.9},octaves:{value:3},halo:{value:1}};let d=7123;const p=()=>(d=d*16807%2147483647,(d-1)/2147483646),g=()=>Math.sqrt(-2*Math.log(Math.max(1e-5,p())))*Math.cos(2*Math.PI*p()),_=[new Z(1900,1400,1900),new Z(5400,4e3,5400),new Z(15e3,11e3,15e3)].map((A,B)=>{const O=zp.High.stars[B],N=new Float32Array(O*3),G=new Float32Array(O),D=new Float32Array(O),w=new Float32Array(O);for(let mt=0;mt<O;mt++){let ut=(p()-.5)*A.x,Y=(p()-.5)*A.z,st=(p()-.5)*A.y;if(B>0&&p()<.72){if(p()<.28){const xt=Math.floor(p()*4);ut=(xt%2?.22:-.24)*A.x+g()*A.x*.045,Y=(xt<2?-.27:.22)*A.z+g()*A.z*.055}st=-.42*ut+g()*A.y*.035+Math.sin(Y/A.z*5)*A.y*.045}N.set([ut,st,Y],mt*3);const j=p();G[mt]=(j>.987?12+p()*14:1.3+p()*4.6)*[.7,1.1,2][B],D[mt]=p(),w[mt]=p()}const F=new Vi;F.setAttribute("position",new $n(N,3)),F.setAttribute("radius",new $n(G,1)),F.setAttribute("temperature",new $n(D,1)),F.setAttribute("identity",new $n(w,1));const $=new bn({uniforms:{...h,offset:{value:new Z},span:{value:A},pixels:{value:400},dpr:{value:1}},vertexShader:kC,fragmentShader:XC,transparent:!0,depthWrite:!1,blending:wc}),lt=new Jx(F,$);return lt.frustumCulled=!1,lt.renderOrder=3,o.add(lt),lt}),S=new Tn(new Sl(12500,32,16),new bn({uniforms:h,vertexShader:WC,fragmentShader:jC,side:Bn,depthWrite:!1}));S.renderOrder=-2,S.frustumCulled=!1,i.add(S);const M=new Sl(1,24,16),b=[{center:new Z(-180,110,-820),radii:new Z(680,330,770)},{center:new Z(600,-140,-1600),radii:new Z(1050,480,1e3)},{center:new Z(-850,220,-2400),radii:new Z(1200,520,1050)},{center:new Z(450,420,1200),radii:new Z(850,600,1e3)}],C=b.map((A,B)=>{const O=new bn({uniforms:{...h,center:{value:A.center.clone()},radii:{value:A.radii},steps:{value:10},visibility:{value:1},seed:{value:4.3+B*9.7}},vertexShader:YC,fragmentShader:qC,transparent:!0,depthWrite:!1,side:Bn}),N=new Tn(M,O);return N.position.copy(A.center),N.scale.copy(A.radii),N.renderOrder=1,i.add(N),N}),y=new Tn(new Sl(75,48,32),new Ac({color:"#465571",roughness:.85,metalness:.1})),m=new Z(680,-240,-1900);y.position.copy(m),o.add(y);const L=new XT("#b7c6ef","#080e1d",1.6);o.add(L);const P=new WT("#dae6ff",2.8);return P.position.set(-3,4,1),o.add(P),{tint:h.tint.value,renderAtmosphere(A,B){B.updateWorldMatrix(!0,!1);const O=A.toneMapping;A.toneMapping=wa,A.setRenderTarget(r),A.render(i,B),A.setRenderTarget(null),A.toneMapping=O},dispose(){r.dispose();const A=new Set,B=new Set;i.traverse(O=>{O instanceof Tn&&(A.add(O.geometry),B.add(O.material))}),A.forEach(O=>O.dispose()),B.forEach(O=>O.dispose())},configure(A,B,O,N,G,D){const w=zp[A];h.octaves.value=w.octaves;const F=D&&A!=="Low"?Fi:Hi;r.texture.type!==F&&(r.dispose(),r.texture.type=F),r.setSize(Math.max(1,Math.round(O*B*w.cloudScale)),Math.max(1,Math.round(N*B*w.cloudScale))),h.halo.value=.75+G*.8,_.forEach(($,lt)=>{$.geometry.setDrawRange(0,w.stars[lt]),$.material.uniforms.pixels.value=N*.64*B,$.material.uniforms.dpr.value=B}),C.forEach(($,lt)=>{$.visible=lt<w.volumes,$.material.uniforms.steps.value=w.steps})},update(A,B,O,N,G){const D=Zs[O],w=f[O],F=1-Math.exp(-A*.55);h.time.value=B,h.tint.value.lerp(w.tint,F),h.second.value.lerp(w.second,F),h.accent.value.lerp(w.accent,F),h.density.value=Ti.lerp(h.density.value,D.density,F),h.band.value=Ti.lerp(h.band.value,D.band,F),h.structure.value=Ti.lerp(h.structure.value,D.structure,F),h.bandWidth.value=Ti.lerp(h.bandWidth.value,D.bandWidth,F),h.warmth.value=Ti.lerp(h.warmth.value,D.warmth,F),h.abundance.value=Ti.lerp(h.abundance.value,D.stars/1.4,F),h.energy.value=Ti.lerp(h.energy.value,G,F),_.forEach($=>$.material.uniforms.offset.value.copy(N)),C.forEach(($,lt)=>{const mt=b[lt].center;$.position.set(Ti.euclideanModulo(mt.x-N.x+4600,9200)-4600,Ti.euclideanModulo(mt.y-N.y+3600,7200)-3600,Ti.euclideanModulo(mt.z-N.z+4600,9200)-4600),$.material.uniforms.center.value.copy($.position);const ut=Math.max(Math.abs($.position.x)/4600,Math.abs($.position.y)/3600,Math.abs($.position.z)/4600);$.material.uniforms.visibility.value=1-Ti.smoothstep(ut,.65,.95)}),y.position.copy(m).sub(N),y.material.color.lerp(w.second,F*.15)}}}function KC(o){const e=new to;o.add(e);const i=new Ac({color:"#35434e",metalness:.65,roughness:.48,emissive:"#314454",emissiveIntensity:.035}),r=new Ac({color:"#64737f",metalness:.8,roughness:.35}),l=new Ac({color:"#121e29",metalness:.35,roughness:.65}),f=new lo({color:"#9bb9d1"});function h(C,y,m,L,P,A,B,O=0){const N=new Tn(new mo(L,P,A),B);return N.position.set(C,y,m),N.rotation.z=O,e.add(N),N}h(-2.55,0,-2.4,.14,4,.3,i,-.2),h(2.55,0,-2.4,.14,4,.3,i,.2),h(-2.46,0,-2.31,.012,3.8,.025,f,-.2),h(2.46,0,-2.31,.012,3.8,.025,f,.2),h(0,1.76,-2.4,6.8,.17,.35,i),h(0,1.66,-2.25,6.6,.014,.03,f),h(0,-1.63,-2.1,7,.45,.7,i),h(0,-1.39,-2.18,6.7,.035,.07,r),h(0,-1.365,-2.08,6.35,.011,.018,f);const d=h(0,-1.42,-2.35,2.3,.2,.68,l);d.rotation.x=.12;const p=document.createElement("canvas");p.width=512,p.height=128;const g=p.getContext("2d");g.fillStyle="#0b1823",g.fillRect(0,0,512,128),g.strokeStyle="#42616d",g.lineWidth=1;for(let C=14;C<512;C+=24)g.beginPath(),g.moveTo(C,30),g.lineTo(C,118),g.stroke();g.strokeStyle="#a2d5dd",g.beginPath(),g.arc(70,70,31,.3,Math.PI*1.8),g.stroke(),g.fillStyle="#b7dce2",g.font="12px monospace",g.fillText("AETHER / EXPLORATION SYSTEMS",125,35),g.font="9px monospace",g.fillText("NAVIGATION  /  STABLE",125,65),g.fillText("LIFE SUPPORT  /  NOMINAL",125,88),g.fillStyle="#5c989f",g.fillRect(125,104,240,2);const x=new HT(p);x.colorSpace=Jn;const _=new lo({map:x,color:"#c4d8e4",transparent:!0,opacity:.9}),S=new Tn(new go(1.7,.35),_);S.position.set(0,-1.245,-2.27),S.rotation.x=-.5,e.add(S);for(const C of[-1,1]){const y=h(C*1.5,-1.42,-2.4,.62,.12,.48,l);y.rotation.z=C*.08;for(let m=0;m<4;m++)h(C*(1.31+m*.1),-1.35,-2.24,.045,.013,.065,m===0?f:r)}const M=new Wv("#c2d6e6",4,8,1.5);M.position.set(0,.5,.5),e.add(M);const b=new Wv("#ae80f0",3,7,1.5);return b.position.set(0,.3,-2),e.add(b),{group:e,update(C,y,m,L){e.visible=L;const P=m?.42:1;M.intensity=4*y*P,b.color.copy(C),b.intensity=3*y*P,i.emissive.copy(C),i.emissiveIntensity=.035*y*P,f.color.copy(C).lerpColors(C,M.color,.45).multiplyScalar(.65*y*P),_.color.copy(f.color),_.opacity=m?.3:.9},dispose(){x.dispose()}}}function QC(o,e,i,r){const l=new UC({antialias:!0,alpha:!1,powerPreference:"high-performance"});l.setClearColor("#040710"),l.outputColorSpace=Jn,l.toneMapping=Fp,l.toneMappingExposure=Sx.Balanced.exposure,o.appendChild(l.domElement);const f=new Qx,h=new hi(68,1,.1,16e3),d=new to;d.position.z=5,d.add(h),f.add(d);const p=ZC(f),g=KC(d),x=VC(l.domElement,r,i,e),_=new nS;let S=0,M=0,b=0,C="",y=!1,m=null,L=null;const P=()=>{m&&(m.passes.forEach(O=>O.dispose()),m.dispose(),m=null,L=null)},A=()=>{const O=e(),N=zp[O.quality],G=Math.max(1,o.clientWidth),D=Math.max(1,o.clientHeight),w=Math.min(window.devicePixelRatio||1,N.pixelRatio);l.setPixelRatio(w),l.setSize(G,D),h.aspect=G/D,h.updateProjectionMatrix();const F=N.bloom&&O.bloom>0&&l.extensions.has("EXT_color_buffer_float");F&&!m?(m=new IC(l),m.addPass(new BC(f,h)),L=new co(new fe(G,D),.2,.55,1.1),m.addPass(L),m.addPass(new HC)):F||P(),m&&(m.setPixelRatio(w),m.setSize(G,D)),p.configure(O.quality,w,G,D,O.bloom,l.extensions.has("EXT_color_buffer_float")),C=`${O.quality}/${O.bloom}`};window.addEventListener("resize",A),A();const B=()=>{if(y)return;S=requestAnimationFrame(B);const O=_.getDelta(),N=O>.25?0:Math.min(O,.1),G=e(),D=Math.min(O,.25);x.sync(),i.step(N,G),C!==`${G.quality}/${G.bloom}`&&A(),G.paused||(M+=N);const w=Sx[G.lighting];l.toneMappingExposure=Ti.damp(l.toneMappingExposure,w.exposure*Zs[G.region].exposure,.8,D),p.update(D,M,G.region,i.position,w.nebula),d.quaternion.copy(i.shipQuaternion),h.quaternion.copy(i.lookQuaternion),g.update(p.tint,w.cabin,G.mode==="Meditation",G.cockpit),L&&(L.strength=G.bloom*(G.mode==="Meditation"?.45:.8)),b+=O,!(G.paused&&b<1/15)&&(b=0,p.renderAtmosphere(l,h),m?m.render():l.render(f,h))};return B(),()=>{y=!0,cancelAnimationFrame(S),x.dispose(),window.removeEventListener("resize",A),P(),g.dispose(),p.dispose();const O=new Set,N=new Set;f.traverse(G=>{if(G instanceof Tn||G instanceof Jx){O.add(G.geometry);for(const D of Array.isArray(G.material)?G.material:[G.material])N.add(D)}}),O.forEach(G=>G.dispose()),N.forEach(G=>G.dispose()),l.dispose(),l.domElement.remove()}}class JC{constructor(){$e(this,"ctx",null);$e(this,"master");$e(this,"engine");$e(this,"music")}async start(){if(!this.ctx){const e=this.ctx=new AudioContext;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination),this.engine=e.createGain(),this.music=e.createGain(),this.engine.connect(this.master),this.music.connect(this.master),[38,57,76].forEach(i=>{const r=e.createOscillator();r.type="sine",r.frequency.value=i;const l=e.createGain();l.gain.value=.09,r.connect(l).connect(this.engine),r.start()}),[130.81,196,261.63,293.66,392].forEach((i,r)=>{const l=e.createOscillator();l.frequency.value=i;const f=e.createGain();f.gain.value=.025;const h=e.createOscillator();h.frequency.value=.035+r*.009;const d=e.createGain();d.gain.value=.012,h.connect(d).connect(f.gain),l.connect(f).connect(this.music),l.start(),h.start()})}await this.ctx.resume()}set(e,i,r,l){var h,d,p;if(!this.ctx)return;const f=this.ctx.currentTime;(h=this.master)==null||h.gain.setTargetAtTime(e&&!l?.65:0,f,.4),(d=this.engine)==null||d.gain.setTargetAtTime(i,f,.2),(p=this.music)==null||p.gain.setTargetAtTime(r,f,.2)}dispose(){var e;(e=this.ctx)==null||e.close()}}function $C(){const[o,e]=Me.useState("Autopilot"),[i,r]=Me.useState(18),[l,f]=Me.useState(!1),[h,d]=Me.useState(0),[p,g]=Me.useState(()=>matchMedia("(any-pointer: coarse)").matches?"Low":"High"),[x,_]=Me.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[S,M]=Me.useState(.6),[b,C]=Me.useState(!0),[y,m]=Me.useState(!1),[L,P]=Me.useState(!1),[A,B]=Me.useState(""),[O,N]=Me.useState(!1),[G,D]=Me.useState(.35),[w,F]=Me.useState(.5),[$,lt]=Me.useState(!0),[mt,ut]=Me.useState(""),[Y,st]=Me.useState(!1),[j,xt]=Me.useState(1),[St,Ht]=Me.useState(.7),[re,Ee]=Me.useState(!1),[H,ht]=Me.useState(!1),[J,it]=Me.useState("Balanced"),[Mt,Nt]=Me.useState(.28),Rt=Me.useRef(null),Et=Me.useRef(new GC),Vt=Me.useRef(null),I=Me.useRef(new JC),Oe=Me.useRef({mode:o,speed:i,paused:l,region:h,quality:p,reduced:x,motion:S,cockpit:b,started:y,blocked:!!A,sensitivity:j,touchSensitivity:St,invertMouseX:re,invertMouseY:H,lighting:J,bloom:Mt});Oe.current={mode:o,speed:i,paused:l,region:h,quality:p,reduced:x,motion:S,cockpit:b,started:y,blocked:!!A,sensitivity:j,touchSensitivity:St,invertMouseX:re,invertMouseY:H,lighting:J,bloom:Mt},Me.useEffect(()=>{try{return QC(Vt.current,()=>Oe.current,Et.current,Rt.current)}catch{ut("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),Me.useEffect(()=>{I.current.set(O,G,w,l)},[O,G,w,l]),Me.useEffect(()=>{const ft=setInterval(()=>{$&&y&&!l&&d(ee=>(ee+1)%5)},9e4);return()=>clearInterval(ft)},[$,y,l]),Me.useEffect(()=>{const ft=Te=>{Te.target instanceof HTMLElement&&Te.target.closest('input,select,textarea,[contenteditable="true"]')||(Te.key.toLowerCase()==="h"&&P(Be=>!Be),Te.code==="Space"&&!(Te.target instanceof HTMLElement&&Te.target.closest("button,a"))&&(Te.preventDefault(),f(Be=>!Be)),Te.key==="Escape"&&(P(!1),B("")))},ee=()=>st(!!document.fullscreenElement);return window.addEventListener("keydown",ft),document.addEventListener("fullscreenchange",ee),()=>{window.removeEventListener("keydown",ft),document.removeEventListener("fullscreenchange",ee)}},[]);const ae=async()=>{try{await I.current.start(),N(ft=>!ft)}catch{ut("Audio is unavailable in this browser. The journey can continue silently.")}},Kt=()=>{m(!0),f(!1)},Lt=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{ut("Fullscreen is unavailable in this browser.")}},ie=ft=>{e(ft),m(!0)};return ct.jsxs("main",{className:`${L?"hidden-ui":""} ${o==="Meditation"?"meditation":""} ${o==="Manual Flight"?"manual-flight":""} ${A||l?"controls-blocked":""}`,children:[ct.jsx("div",{className:"universe",ref:Vt}),ct.jsx("div",{className:"vignette"}),ct.jsxs("div",{className:"touch-controls ui",children:[ct.jsxs("div",{ref:Rt,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[ct.jsx("span",{className:"stick-cross",children:"+"}),ct.jsx("span",{className:"stick-thumb"}),ct.jsx("small",{children:"STEER"})]}),ct.jsx("span",{className:"touch-look-hint",children:"DRAG SPACE TO LOOK"})]}),ct.jsxs("header",{className:"ui",children:[ct.jsxs("a",{className:"brand",href:"#",onClick:ft=>{ft.preventDefault(),P(!1)},children:[ct.jsx(uE,{size:32}),ct.jsxs("span",{children:["COSMIC DRIFT",ct.jsx("small",{children:"A QUIETER KIND OF JOURNEY"})]})]}),ct.jsxs("nav",{children:[ct.jsx("span",{className:"live-dot"})," ALL SYSTEMS AT PEACE ",ct.jsx("span",{className:"nav-line"}),ct.jsx("button",{title:"Audio settings",onClick:()=>B(A==="audio"?"":"audio"),children:ct.jsx(md,{size:18})}),ct.jsx("button",{title:"Settings",onClick:()=>B(A==="settings"?"":"settings"),children:ct.jsx(hE,{size:18})}),ct.jsx("button",{title:"Fullscreen",onClick:Lt,children:ct.jsx(gv,{size:18})})]})]}),ct.jsxs("section",{className:"intro ui",children:[ct.jsxs("div",{className:"eyebrow",children:[ct.jsx("span",{})," LEAVE THE NOISE BEHIND"]}),ct.jsxs("h1",{children:["Nowhere to be.",ct.jsx("br",{}),"Just ",ct.jsx("em",{children:"drift."})]}),ct.jsxs("p",{children:["A quiet passage through an infinite universe.",ct.jsx("br",{}),"No destination. No demands. Just you and the stars."]}),ct.jsxs("button",{className:"start",onClick:Kt,children:[y?l?"Resume journey":"Journey in progress":"Start journey",ct.jsx(rE,{size:18})]}),ct.jsxs("div",{className:"intro-note",children:[ct.jsx("span",{})," ",y?"TAKE YOUR TIME. YOU HAVE ALL OF IT.":"YOUR OWN LITTLE CORNER OF INFINITY"]})]}),ct.jsxs("aside",{className:"region-label ui",children:[ct.jsx("span",{className:"coordinate",children:"SECTOR 07 / PERSEUS"}),ct.jsx("div",{className:"region-rule"}),ct.jsx("span",{className:"eyebrow",children:"YOU ARE DRIFTING THROUGH"}),ct.jsx("h2",{children:Zs[h].name}),ct.jsx("p",{children:Zs[h].subtitle}),ct.jsxs("button",{onClick:()=>B(A==="regions"?"":"regions"),children:["Explore regions ",ct.jsx(pv,{size:14})]})]}),ct.jsxs("div",{className:"travel-marker ui",children:[ct.jsx("span",{children:"✧"}),ct.jsx("i",{}),ct.jsx("small",{children:"AN INFINITE UNIVERSE. AN UNHURRIED YOU."})]}),ct.jsxs("section",{className:"flight-deck ui",children:[ct.jsxs("div",{className:"deck-top",children:[ct.jsxs("div",{className:"deck-label",children:[ct.jsx("span",{className:"live-dot"}),l?"JOURNEY PAUSED":y?"JOURNEY ACTIVE":"READY WHEN YOU ARE"]}),ct.jsx("span",{className:"ship-name",children:"VESSEL / AETHER–01"})]}),ct.jsxs("div",{className:"deck-controls",children:[ct.jsx("div",{className:"mode-controls",children:[{name:"Autopilot",icon:oE},{name:"Manual Flight",icon:lE},{name:"Meditation",icon:pE}].map(ft=>ct.jsxs("button",{className:o===ft.name?"selected":"",onClick:()=>ie(ft.name),children:[ct.jsx(ft.icon,{size:17}),ct.jsxs("span",{children:[ft.name,ft.name==="Meditation"?" mode":""]})]},ft.name))}),ct.jsxs("div",{className:"speed",children:[ct.jsxs("label",{htmlFor:"speed",children:["DRIFT SPEED ",ct.jsxs("span",{children:[i.toFixed(0)," ",ct.jsx("small",{children:"km/s"})]})]}),ct.jsx("input",{id:"speed",type:"range",min:"1",max:"80",value:i,onChange:ft=>r(+ft.target.value)}),ct.jsxs("div",{children:[ct.jsx("span",{children:"GENTLE"}),ct.jsx("span",{children:"SWIFT"})]})]}),ct.jsxs("div",{className:"deck-actions",children:[ct.jsx("button",{title:l?"Resume":"Pause",onClick:()=>f(ft=>!ft),children:l?ct.jsx(fE,{size:19}):ct.jsx(cE,{size:19})}),ct.jsx("button",{title:O?"Mute audio":"Enable audio",onClick:ae,children:O?ct.jsx(md,{size:19}):ct.jsx(dE,{size:19})}),ct.jsx("button",{title:"Hide interface (H)",onClick:()=>P(!0),children:ct.jsx(mv,{size:19})})]})]})]}),ct.jsxs("footer",{className:"ui",children:[ct.jsxs("span",{children:[ct.jsx("span",{className:"key",children:"DRAG"})," TO LOOK AROUND ",ct.jsx("i",{})," ",ct.jsx("span",{className:"key",children:o==="Manual Flight"?"W A S D":"H"})," ",o==="Manual Flight"?"TO STEER":"TO HIDE INTERFACE"]}),ct.jsxs("span",{children:["BUILT FOR WANDERING ",ct.jsx("span",{className:"tiny-star",children:"✦"})]})]}),L&&ct.jsxs("button",{className:"restore",onClick:()=>P(!1),children:[ct.jsx(mv,{size:16})," Show controls · H"]}),A&&ct.jsxs("div",{className:"panel ui",children:[ct.jsxs("div",{className:"panel-head",children:[ct.jsx("span",{children:A==="regions"?"Choose your horizon":A==="audio"?"The sound of stillness":"Make space your own"}),ct.jsx("button",{title:"Close settings",onClick:()=>B(""),children:ct.jsx(_v,{size:19})})]}),A==="regions"?ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{children:"Every corner of the universe has a different kind of quiet."}),Zs.map((ft,ee)=>ct.jsxs("button",{className:`region-option ${h===ee?"active":""}`,onClick:()=>d(ee),children:[ct.jsx("span",{className:"orb",style:{background:`radial-gradient(circle at 30% 30%,${ft.color},${ft.second},#070a12)`}}),ct.jsxs("span",{children:[ft.name,ct.jsx("small",{children:ft.subtitle})]}),h===ee?"●":ct.jsx(pv,{size:15})]},ft.name)),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:$,onChange:ft=>lt(ft.target.checked)})," Automatically drift between regions · 90s"]})]}):A==="audio"?ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{children:"Original ambient tones, synthesized just for this journey."}),ct.jsxs("button",{className:"sound-toggle",onClick:ae,children:[O?"Mute all audio":"Enable sound",ct.jsx(md,{size:17})]}),ct.jsxs("label",{className:"setting",children:["Engine hum",ct.jsx("input",{"aria-label":"Engine volume",type:"range",min:"0",max:"1",step:".01",value:G,onChange:ft=>D(+ft.target.value)})]}),ct.jsxs("label",{className:"setting",children:["Ambient music",ct.jsx("input",{"aria-label":"Music volume",type:"range",min:"0",max:"1",step:".01",value:w,onChange:ft=>F(+ft.target.value)})]})]}):ct.jsxs(ct.Fragment,{children:[ct.jsxs("label",{className:"setting",children:["Graphics quality",ct.jsx("select",{"aria-label":"Graphics quality",value:p,onChange:ft=>g(ft.target.value),children:["Low","Medium","High"].map(ft=>ct.jsx("option",{children:ft},ft))})]}),ct.jsxs("label",{className:"setting",children:["Environment lighting",ct.jsx("select",{"aria-label":"Environment lighting",value:J,onChange:ft=>it(ft.target.value),children:["Dark","Balanced","Cinematic"].map(ft=>ct.jsx("option",{children:ft},ft))})]}),ct.jsxs("label",{className:"setting",children:["Soft bloom ",ct.jsxs("output",{children:[Math.round(Mt*100),"%"]}),ct.jsx("input",{"aria-label":"Soft bloom",type:"range",min:"0",max:".6",step:".02",value:Mt,onChange:ft=>Nt(+ft.target.value)}),ct.jsx("small",{className:"setting-note",children:"Low quality uses lightweight star halos."})]}),ct.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",ct.jsxs("output",{children:[j.toFixed(2),"×"]}),ct.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:j,onChange:ft=>xt(+ft.target.value)})]}),ct.jsxs("label",{className:"setting",children:["Touch sensitivity ",ct.jsxs("output",{children:[St.toFixed(2),"×"]}),ct.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:St,onChange:ft=>Ht(+ft.target.value)})]}),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:re,onChange:ft=>Ee(ft.target.checked)})," Invert mouse horizontal axis"]}),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:H,onChange:ft=>ht(ft.target.checked)})," Invert mouse vertical axis"]}),ct.jsxs("label",{className:"setting",children:["Camera movement",ct.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:S,onChange:ft=>M(+ft.target.value)})]}),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:x,onChange:ft=>_(ft.target.checked)})," Reduced motion"]}),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:b,onChange:ft=>C(ft.target.checked)})," Show cockpit"]}),ct.jsxs("button",{className:"sound-toggle",onClick:Lt,children:[Y?"Exit fullscreen":"Enter fullscreen",ct.jsx(gv,{size:16})]})]})]}),mt&&ct.jsxs("div",{role:"alert",className:"error",children:[mt,ct.jsx("button",{onClick:()=>ut(""),"aria-label":"Dismiss error",children:ct.jsx(_v,{size:16})})]})]})}nE.createRoot(document.getElementById("root")).render(ct.jsx($C,{}));
