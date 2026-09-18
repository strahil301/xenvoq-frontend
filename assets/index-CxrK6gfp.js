(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function os(t){const e=Object.create(null);for(const r of t.split(","))e[r]=1;return r=>r in e}const le={},Ar=[],yt=()=>{},Pl=()=>!1,Dn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ln=t=>t.startsWith("onUpdate:"),we=Object.assign,ns=(t,e)=>{const r=t.indexOf(e);r>-1&&t.splice(r,1)},su=Object.prototype.hasOwnProperty,te=(t,e)=>su.call(t,e),z=Array.isArray,er=t=>Vo(t)==="[object Map]",vn=t=>Vo(t)==="[object Set]",Fs=t=>Vo(t)==="[object Date]",j=t=>typeof t=="function",pe=t=>typeof t=="string",at=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Rl=t=>(oe(t)||j(t))&&j(t.then)&&j(t.catch),Ol=Object.prototype.toString,Vo=t=>Ol.call(t),au=t=>Vo(t).slice(8,-1),Al=t=>Vo(t)==="[object Object]",is=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zn=t=>{const e=Object.create(null);return(r=>e[r]||(e[r]=t(r)))},lu=/-\w/g,De=zn(t=>t.replace(lu,e=>e.slice(1).toUpperCase())),cu=/\B([A-Z])/g,Cr=zn(t=>t.replace(cu,"-$1").toLowerCase()),Mn=zn(t=>t.charAt(0).toUpperCase()+t.slice(1)),oi=zn(t=>t?`on${Mn(t)}`:""),bt=(t,e)=>!Object.is(t,e),ni=(t,...e)=>{for(let r=0;r<t.length;r++)t[r](...e)},Bl=(t,e,r,o=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:o,value:r})},du=t=>{const e=parseFloat(t);return isNaN(e)?t:e},uu=t=>{const e=pe(t)?Number(t):NaN;return isNaN(e)?t:e};let Us;const jn=()=>Us||(Us=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ss(t){if(z(t)){const e={};for(let r=0;r<t.length;r++){const o=t[r],n=pe(o)?pu(o):ss(o);if(n)for(const i in n)e[i]=n[i]}return e}else if(pe(t)||oe(t))return t}const fu=/;(?![^(]*\))/g,gu=/:([^]+)/,hu=/\/\*[^]*?\*\//g;function pu(t){const e={};return t.replace(hu,"").split(fu).forEach(r=>{if(r){const o=r.split(gu);o.length>1&&(e[o[0].trim()]=o[1].trim())}}),e}function Ur(t){let e="";if(pe(t))e=t;else if(z(t))for(let r=0;r<t.length;r++){const o=Ur(t[r]);o&&(e+=o+" ")}else if(oe(t))for(const r in t)t[r]&&(e+=r+" ");return e.trim()}const mu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bu=os(mu);function Nl(t){return!!t||t===""}function vu(t,e){if(t.length!==e.length)return!1;let r=!0;for(let o=0;r&&o<t.length;o++)r=Fn(t[o],e[o]);return r}function Ws(t,e){if(t.size!==e.size)return!1;const r=Array.from(e),o=new Uint8Array(r.length);for(const n of t){let i=-1;for(let s=0;s<r.length;s++)if(!o[s]&&Fn(n,r[s])){i=s;break}if(i<0)return!1;o[i]=1}return!0}function Fn(t,e){if(t===e)return!0;let r=Fs(t),o=Fs(e);if(r||o)return r&&o?t.getTime()===e.getTime():!1;if(r=at(t),o=at(e),r||o)return t===e;if(r=z(t),o=z(e),r||o)return r&&o?vu(t,e):!1;if(r=oe(t),o=oe(e),r||o){if(!r||!o)return!1;if(r=er(t),o=er(e),r||o||(r=vn(t),o=vn(e),r||o))return r&&o?Ws(t,e):!1;const n=Object.keys(t).length,i=Object.keys(e).length;if(n!==i)return!1;for(const s in t){const l=t.hasOwnProperty(s),a=e.hasOwnProperty(s);if(l&&!a||!l&&a||!Fn(t[s],e[s]))return!1}}return String(t)===String(e)}const Dl=t=>!!(t&&t.__v_isRef===!0),tt=t=>pe(t)?t:t==null?"":z(t)||oe(t)&&(t.toString===Ol||!j(t.toString))?Dl(t)?tt(t.value):JSON.stringify(t,Ll,2):String(t),Ll=(t,e)=>Dl(e)?Ll(t,e.value):er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((r,[o,n],i)=>(r[ii(o,i)+" =>"]=n,r),{})}:vn(e)?{[`Set(${e.size})`]:[...e.values()].map(r=>ii(r))}:at(e)?ii(e):oe(e)&&!z(e)&&!Al(e)?String(e):e,ii=(t,e="")=>{var r;return at(t)?`Symbol(${(r=t.description)!=null?r:e})`:t};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ce;class yu{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ce&&(Ce.active?(this.parent=Ce,this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,r;if(this.scopes){const o=this.scopes.slice();for(e=0,r=o.length;e<r;e++)o[e].pause()}for(e=0,r=this.effects.length;e<r;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,r;if(this.scopes){const n=this.scopes.slice();for(e=0,r=n.length;e<r;e++)n[e].resume()}const o=this.effects.slice();for(e=0,r=o.length;e<r;e++)o[e].resume()}}run(e){if(this._active){const r=Ce;try{return Ce=this,e()}finally{Ce=r}}}on(){++this._on===1&&(this.prevScope=Ce,Ce=this)}off(){if(this._on>0&&--this._on===0){if(Ce===this)Ce=this.prevScope;else{let e=Ce;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let r,o;for(r=0,o=this.effects.length;r<o;r++)this.effects[r].stop();for(this.effects.length=0,r=0,o=this.cleanups.length;r<o;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){const n=this.scopes.slice();for(r=0,o=n.length;r<o;r++)n[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function ku(){return Ce}let ce;const si=new WeakSet;class zl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&(Ce.active?Ce.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,si.has(this)&&(si.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vs(this),Fl(this);const e=ce,r=it;ce=this,it=!0;try{return this.fn()}finally{Ul(this),ce=e,it=r,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cs(e);this.deps=this.depsTail=void 0,Vs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?si.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xi(this)&&this.run()}get dirty(){return xi(this)}}let Ml=0,io,so;function jl(t,e=!1){if(t.flags|=8,e){t.next=so,so=t;return}t.next=io,io=t}function as(){Ml++}function ls(){if(--Ml>0)return;if(so){let e=so;for(so=void 0;e;){const r=e.next;e.next=void 0,e.flags&=-9,e=r}}let t;for(;io;){let e=io;for(io=void 0;e;){const r=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(o){t||(t=o)}e=r}}if(t)throw t}function Fl(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ul(t){let e,r=t.depsTail,o=r;for(;o;){const n=o.prevDep;o.version===-1?(o===r&&(r=n),cs(o),wu(o)):e=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=n}t.deps=e,t.depsTail=r}function xi(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===go)||(t.globalVersion=go,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!xi(t))))return;t.flags|=2;const e=t.dep,r=ce,o=it;ce=t,it=!0;try{Fl(t);const n=t.fn(t._value);(e.version===0||bt(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(n){throw e.version++,n}finally{ce=r,it=o,Ul(t),t.flags&=-3}}function cs(t,e=!1){const{dep:r,prevSub:o,nextSub:n}=t;if(o&&(o.nextSub=n,t.prevSub=void 0),n&&(n.prevSub=o,t.nextSub=void 0),r.subs===t&&(r.subs=o,!o&&r.computed)){r.computed.flags&=-5;for(let i=r.computed.deps;i;i=i.nextDep)cs(i,!0)}!e&&!--r.sc&&r.map&&r.map.delete(r.key)}function wu(t){const{prevDep:e,nextDep:r}=t;e&&(e.nextDep=r,t.prevDep=void 0),r&&(r.prevDep=e,t.nextDep=void 0)}let it=!0;const Vl=[];function Bt(){Vl.push(it),it=!1}function Nt(){const t=Vl.pop();it=t===void 0?!0:t}function Vs(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const r=ce;ce=void 0;try{e()}finally{ce=r}}}let go=0;class _u{constructor(e,r){this.sub=e,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ds{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ce||!it||ce===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==ce)r=this.activeLink=new _u(ce,this),ce.deps?(r.prevDep=ce.depsTail,ce.depsTail.nextDep=r,ce.depsTail=r):ce.deps=ce.depsTail=r,Hl(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const o=r.nextDep;o.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=o),r.prevDep=ce.depsTail,r.nextDep=void 0,ce.depsTail.nextDep=r,ce.depsTail=r,ce.deps===r&&(ce.deps=o)}return r}trigger(e){this.version++,go++,this.notify(e)}notify(e){as();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{ls()}}}function Hl(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let o=e.deps;o;o=o.nextDep)Hl(o)}const r=t.dep.subs;r!==t&&(t.prevSub=r,r&&(r.nextSub=t)),t.dep.subs=t}}const Ti=new WeakMap,yr=Symbol(""),Ii=Symbol(""),ho=Symbol("");function Ee(t,e,r){if(it&&ce){let o=Ti.get(t);o||Ti.set(t,o=new Map);let n=o.get(r);n||(o.set(r,n=new ds),n.map=o,n.key=r),n.track()}}function It(t,e,r,o,n,i){const s=Ti.get(t);if(!s){go++;return}const l=a=>{a&&a.trigger()};if(as(),e==="clear")s.forEach(l);else{const a=z(t),c=a&&is(r);if(a&&r==="length"){const d=Number(o);s.forEach((u,f)=>{(f==="length"||f===ho||!at(f)&&f>=d)&&l(u)})}else switch((r!==void 0||s.has(void 0))&&l(s.get(r)),c&&l(s.get(ho)),e){case"add":a?c&&l(s.get("length")):(l(s.get(yr)),er(t)&&l(s.get(Ii)));break;case"delete":a||(l(s.get(yr)),er(t)&&l(s.get(Ii)));break;case"set":er(t)&&l(s.get(yr));break}}ls()}function Tr(t){const e=ee(t);return e===t?e:(Ee(e,"iterate",ho),st(t)?e:e.map(Dt))}function us(t){return Ee(t=ee(t),"iterate",ho),t}function pt(t,e){return nr(t)?po(Br(t)?Dt(e):e):Dt(e)}const Su={__proto__:null,[Symbol.iterator](){return ai(this,Symbol.iterator,t=>pt(this,t))},concat(...t){return Tr(this).concat(...t.map(e=>z(e)?Tr(e):e))},entries(){return ai(this,"entries",t=>(t[1]=pt(this,t[1]),t))},every(t,e){return St(this,"every",t,e,void 0,arguments)},filter(t,e){return St(this,"filter",t,e,r=>r.map(o=>pt(this,o)),arguments)},find(t,e){return St(this,"find",t,e,r=>pt(this,r),arguments)},findIndex(t,e){return St(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return St(this,"findLast",t,e,r=>pt(this,r),arguments)},findLastIndex(t,e){return St(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return St(this,"forEach",t,e,void 0,arguments)},includes(...t){return li(this,"includes",t)},indexOf(...t){return li(this,"indexOf",t)},join(t){return Tr(this).join(t)},lastIndexOf(...t){return li(this,"lastIndexOf",t)},map(t,e){return St(this,"map",t,e,void 0,arguments)},pop(){return qr(this,"pop")},push(...t){return qr(this,"push",t)},reduce(t,...e){return Hs(this,"reduce",t,e)},reduceRight(t,...e){return Hs(this,"reduceRight",t,e)},shift(){return qr(this,"shift")},some(t,e){return St(this,"some",t,e,void 0,arguments)},splice(...t){return qr(this,"splice",t)},toReversed(){return Tr(this).toReversed()},toSorted(t){return Tr(this).toSorted(t)},toSpliced(...t){return Tr(this).toSpliced(...t)},unshift(...t){return qr(this,"unshift",t)},values(){return ai(this,"values",t=>pt(this,t))}};function ai(t,e,r){const o=us(t),n=o[e]();return o!==t&&!st(t)&&(n._next=n.next,n.next=()=>{const i=n._next();return i.done||(i.value=r(i.value)),i}),n}const Cu=Array.prototype;function St(t,e,r,o,n,i){const s=us(t),l=s!==t&&!st(t),a=s[e];if(a!==Cu[e]){const u=a.apply(t,i);return l?Dt(u):u}let c=r;s!==t&&(l?c=function(u,f){return r.call(this,pt(t,u),f,t)}:r.length>2&&(c=function(u,f){return r.call(this,u,f,t)}));const d=a.call(s,c,o);return l&&n?n(d):d}function Hs(t,e,r,o){const n=us(t),i=n!==t&&!st(t);let s=r,l=!1;n!==t&&(i?(l=o.length===0,s=function(c,d,u){return l&&(l=!1,c=pt(t,c)),r.call(this,c,pt(t,d),u,t)}):r.length>3&&(s=function(c,d,u){return r.call(this,c,d,u,t)}));const a=n[e](s,...o);return l?pt(t,a):a}function li(t,e,r){const o=ee(t);Ee(o,"iterate",ho);const n=o[e](...r);return(n===-1||n===!1)&&hs(r[0])?(r[0]=ee(r[0]),o[e](...r)):n}function qr(t,e,r=[]){Bt(),as();const o=ee(t)[e].apply(t,r);return ls(),Nt(),o}const $u=os("__proto__,__v_isRef,__isVue"),Kl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(at));function xu(t){at(t)||(t=String(t));const e=ee(this);return Ee(e,"has",t),e.hasOwnProperty(t)}class Gl{constructor(e=!1,r=!1){this._isReadonly=e,this._isShallow=r}get(e,r,o){if(r==="__v_skip")return e.__v_skip;const n=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return i;if(r==="__v_raw")return o===(n?i?Du:Xl:i?Jl:Yl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(o)?e:void 0;const s=z(e);if(!n){let a;if(s&&(a=Su[r]))return a;if(r==="hasOwnProperty")return xu}const l=Reflect.get(e,r,Oe(e)?e:o);if((at(r)?Kl.has(r):$u(r))||(n||Ee(e,"get",r),i))return l;if(Oe(l)){const a=s&&is(r)?l:l.value;return n&&oe(a)?yn(a):a}return oe(l)?n?yn(l):Un(l):l}}class ql extends Gl{constructor(e=!1){super(!1,e)}set(e,r,o,n){let i=e[r];const s=z(e)&&is(r);if(!this._isShallow){const c=nr(i);if(!st(o)&&!nr(o)&&(i=ee(i),o=ee(o)),!s&&Oe(i)&&!Oe(o))return c||(i.value=o),!0}const l=s?Number(r)<e.length:te(e,r),a=Reflect.set(e,r,o,Oe(e)?e:n);return e===ee(n)&&a&&(l?bt(o,i)&&It(e,"set",r,o):It(e,"add",r,o)),a}deleteProperty(e,r){const o=te(e,r);e[r];const n=Reflect.deleteProperty(e,r);return n&&o&&It(e,"delete",r,void 0),n}has(e,r){const o=Reflect.has(e,r);return(!at(r)||!Kl.has(r))&&Ee(e,"has",r),o}ownKeys(e){return Ee(e,"iterate",z(e)?"length":yr),Reflect.ownKeys(e)}}class Tu extends Gl{constructor(e=!1){super(!0,e)}set(e,r){return!0}deleteProperty(e,r){return!0}}const Iu=new ql,Eu=new Tu,Pu=new ql(!0);const Ei=t=>t,rn=t=>Reflect.getPrototypeOf(t);function Ru(t,e,r){return function(...o){const n=this.__v_raw,i=ee(n),s=er(i),l=t==="entries"||t===Symbol.iterator&&s,a=t==="keys"&&s,c=n[t](...o),d=r?Ei:e?po:Dt;return!e&&Ee(i,"iterate",a?Ii:yr),we(Object.create(c),{next(){const{value:u,done:f}=c.next();return f?{value:u,done:f}:{value:l?[d(u[0]),d(u[1])]:d(u),done:f}}})}}function on(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ou(t,e){const r={get(n){const i=this.__v_raw,s=ee(i),l=ee(n);t||(bt(n,l)&&Ee(s,"get",n),Ee(s,"get",l));const{has:a}=rn(s),c=e?Ei:t?po:Dt;if(a.call(s,n))return c(i.get(n));if(a.call(s,l))return c(i.get(l));i!==s&&i.get(n)},get size(){const n=this.__v_raw;return!t&&Ee(ee(n),"iterate",yr),n.size},has(n){const i=this.__v_raw,s=ee(i),l=ee(n);return t||(bt(n,l)&&Ee(s,"has",n),Ee(s,"has",l)),n===l?i.has(n):i.has(n)||i.has(l)},forEach(n,i){const s=this,l=s.__v_raw,a=ee(l),c=e?Ei:t?po:Dt;return!t&&Ee(a,"iterate",yr),l.forEach((d,u)=>n.call(i,c(d),c(u),s))}};return we(r,t?{add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear")}:{add(n){const i=ee(this),s=rn(i),l=ee(n),a=!e&&!st(n)&&!nr(n)?l:n;return s.has.call(i,a)||bt(n,a)&&s.has.call(i,n)||bt(l,a)&&s.has.call(i,l)||(i.add(a),It(i,"add",a,a)),this},set(n,i){!e&&!st(i)&&!nr(i)&&(i=ee(i));const s=ee(this),{has:l,get:a}=rn(s);let c=l.call(s,n);c||(n=ee(n),c=l.call(s,n));const d=a.call(s,n);return s.set(n,i),c?bt(i,d)&&It(s,"set",n,i):It(s,"add",n,i),this},delete(n){const i=ee(this),{has:s,get:l}=rn(i);let a=s.call(i,n);a||(n=ee(n),a=s.call(i,n)),l&&l.call(i,n);const c=i.delete(n);return a&&It(i,"delete",n,void 0),c},clear(){const n=ee(this),i=n.size!==0,s=n.clear();return i&&It(n,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(n=>{r[n]=Ru(n,t,e)}),r}function fs(t,e){const r=Ou(t,e);return(o,n,i)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?o:Reflect.get(te(r,n)&&n in o?r:o,n,i)}const Au={get:fs(!1,!1)},Bu={get:fs(!1,!0)},Nu={get:fs(!0,!1)};const Yl=new WeakMap,Jl=new WeakMap,Xl=new WeakMap,Du=new WeakMap;function Lu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Un(t){return nr(t)?t:gs(t,!1,Iu,Au,Yl)}function zu(t){return gs(t,!1,Pu,Bu,Jl)}function yn(t){return gs(t,!0,Eu,Nu,Xl)}function gs(t,e,r,o,n){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=n.get(t);if(i)return i;const s=Lu(au(t));if(s===0)return t;const l=new Proxy(t,s===2?o:r);return n.set(t,l),l}function Br(t){return nr(t)?Br(t.__v_raw):!!(t&&t.__v_isReactive)}function nr(t){return!!(t&&t.__v_isReadonly)}function st(t){return!!(t&&t.__v_isShallow)}function hs(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function Mu(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&Bl(t,"__v_skip",!0),t}const Dt=t=>oe(t)?Un(t):t,po=t=>oe(t)?yn(t):t;function Oe(t){return t?t.__v_isRef===!0:!1}function Xe(t){return ju(t,!1)}function ju(t,e){return Oe(t)?t:new Fu(t,e)}class Fu{constructor(e,r){this.dep=new ds,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?e:ee(e),this._value=r?e:Dt(e),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(e){const r=this._rawValue,o=this.__v_isShallow||st(e)||nr(e);e=o?e:ee(e),bt(e,r)&&(this._rawValue=e,this._value=o?e:Dt(e),this.dep.trigger())}}function Fe(t){return Oe(t)?t.value:t}const Uu={get:(t,e,r)=>e==="__v_raw"?t:Fe(Reflect.get(t,e,r)),set:(t,e,r,o)=>{const n=t[e];return Oe(n)&&!Oe(r)?(n.value=r,!0):Reflect.set(t,e,r,o)}};function Zl(t){return Br(t)?t:new Proxy(t,Uu)}class Wu{constructor(e,r,o){this.fn=e,this.setter=r,this._value=void 0,this.dep=new ds(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=go-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return jl(this,!0),!0}get value(){const e=this.dep.track();return Wl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Vu(t,e,r=!1){let o,n;return j(t)?o=t:(o=t.get,n=t.set),new Wu(o,n,r)}const nn={},kn=new WeakMap;let mr;function Hu(t,e=!1,r=mr){if(r){let o=kn.get(r);o||kn.set(r,o=[]),o.push(t)}}function Ku(t,e,r=le){const{immediate:o,deep:n,once:i,scheduler:s,augmentJob:l,call:a}=r,c=b=>n?b:st(b)||n===!1||n===0?Et(b,1):Et(b);let d,u,f,h,v=!1,y=!1;if(Oe(t)?(u=()=>t.value,v=st(t)):Br(t)?(u=()=>c(t),v=!0):z(t)?(y=!0,v=t.some(b=>Br(b)||st(b)),u=()=>t.map(b=>{if(Oe(b))return b.value;if(Br(b))return c(b);if(j(b))return a?a(b,2):b()})):j(t)?e?u=a?()=>a(t,2):t:u=()=>{if(f){Bt();try{f()}finally{Nt()}}const b=mr;mr=d;try{return a?a(t,3,[h]):t(h)}finally{mr=b}}:u=yt,e&&n){const b=u,A=n===!0?1/0:n;u=()=>Et(b(),A)}const $=ku(),k=()=>{d.stop(),$&&$.active&&ns($.effects,d)};if(i&&e){const b=e;e=(...A)=>{const F=b(...A);return k(),F}}let x=y?new Array(t.length).fill(nn):nn;const O=b=>{if(!(!(d.flags&1)||!d.dirty&&!b))if(e){const A=d.run();if(b||n||v||(y?A.some((F,Z)=>bt(F,x[Z])):bt(A,x))){f&&f();const F=mr;mr=d;try{const Z=[A,x===nn?void 0:y&&x[0]===nn?[]:x,h];x=A,a?a(e,3,Z):e(...Z)}finally{mr=F}}}else d.run()};return l&&l(O),d=new zl(u),d.scheduler=s?()=>s(O,!1):O,h=b=>Hu(b,!1,d),f=d.onStop=()=>{const b=kn.get(d);if(b){if(a)a(b,4);else for(const A of b)A();kn.delete(d)}},e?o?O(!0):x=d.run():s?s(O.bind(null,!0),!0):d.run(),k.pause=d.pause.bind(d),k.resume=d.resume.bind(d),k.stop=k,k}function Et(t,e=1/0,r){if(e<=0||!oe(t)||t.__v_skip||(r=r||new Map,(r.get(t)||0)>=e))return t;if(r.set(t,e),e--,Oe(t))Et(t.value,e,r);else if(z(t))for(let o=0;o<t.length;o++)Et(t[o],e,r);else if(vn(t)||er(t))t.forEach(o=>{Et(o,e,r)});else if(Al(t)){for(const o in t)Et(t[o],e,r);for(const o of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,o)&&Et(t[o],e,r)}return t}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ho(t,e,r,o){try{return o?t(...o):t()}catch(n){Wn(n,e,r)}}function Qe(t,e,r,o){if(j(t)){const n=Ho(t,e,r,o);return n&&Rl(n)&&n.catch(i=>{Wn(i,e,r)}),n}if(z(t)){const n=[];for(let i=0;i<t.length;i++)n.push(Qe(t[i],e,r,o));return n}}function Wn(t,e,r,o=!0){const n=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||le;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${r}`;for(;l;){const d=l.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](t,a,c)===!1)return}l=l.parent}if(i){Bt(),Ho(i,null,10,[t,a,c]),Nt();return}}Gu(t,r,n,o,s)}function Gu(t,e,r,o=!0,n=!1){if(n)throw t;console.error(t)}const Be=[];let ht=-1;const Nr=[];let Ht=null,Er=0;const Ql=Promise.resolve();let wn=null;function ec(t){const e=wn||Ql;return t?e.then(this?t.bind(this):t):e}function qu(t){let e=ht+1,r=Be.length;for(;e<r;){const o=e+r>>>1,n=Be[o],i=mo(n);i<t||i===t&&n.flags&2?e=o+1:r=o}return e}function ps(t){if(!(t.flags&1)){const e=mo(t),r=Be[Be.length-1];!r||!(t.flags&2)&&e>=mo(r)?Be.push(t):Be.splice(qu(e),0,t),t.flags|=1,tc()}}function tc(){wn||(wn=Ql.then(oc))}function Yu(t){if(!z(t))Ht&&t.id===-1?Ht.splice(Er+1,0,t):t.flags&1||(Nr.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)Nr.push(t[e]);tc()}function Ks(t,e,r=ht+1){for(;r<Be.length;r++){const o=Be[r];if(o&&o.flags&2){if(t&&o.id!==t.uid)continue;Be.splice(r,1),r--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function rc(t){if(Nr.length){const e=[...new Set(Nr)].sort((r,o)=>mo(r)-mo(o));if(Nr.length=0,Ht){for(let r=0;r<e.length;r++)Ht.push(e[r]);return}for(Ht=e,Er=0;Er<Ht.length;Er++){const r=Ht[Er];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}Ht=null,Er=0}}const mo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function oc(t){try{for(ht=0;ht<Be.length;ht++){const e=Be[ht];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ho(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ht<Be.length;ht++){const e=Be[ht];e&&(e.flags&=-2)}ht=-1,Be.length=0,rc(),wn=null,(Be.length||Nr.length)&&oc()}}let Te=null,nc=null;function _n(t){const e=Te;return Te=t,nc=t&&t.type.__scopeId||null,e}function Ke(t,e=Te,r){if(!e||t._n)return t;const o=(...n)=>{o._d&&xn(-1);const i=_n(e),s=Ot.length;let l;try{l=t(...n)}finally{for(let a=Ot.length;a>s;a--)_s();_n(i),o._d&&xn(1)}return l};return o._n=!0,o._c=!0,o._d=!0,o}function ic(t,e){if(Te===null)return t;const r=Jn(Te),o=t.dirs||(t.dirs=[]);for(let n=0;n<e.length;n++){let[i,s,l,a=le]=e[n];i&&(j(i)&&(i={mounted:i,updated:i}),i.deep&&Et(s),o.push({dir:i,instance:r,value:s,oldValue:void 0,arg:l,modifiers:a}))}return t}function fr(t,e,r,o){const n=t.dirs,i=e&&e.dirs;for(let s=0;s<n.length;s++){const l=n[s];i&&(l.oldValue=i[s].value);let a=l.dir[o];a&&(Bt(),Qe(a,r,8,[t.el,l,t,e]),Nt())}}function Ju(t,e){if(Re){let r=Re.provides;const o=Re.parent&&Re.parent.provides;o===r&&(r=Re.provides=Object.create(o)),r[t]=e}}function fn(t,e,r=!1){const o=ko();if(o||Lr){let n=Lr?Lr._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(n&&t in n)return n[t];if(arguments.length>1)return r&&j(e)?e.call(o&&o.proxy):e}}const Xu=Symbol.for("v-scx"),Zu=()=>fn(Xu);function Zt(t,e,r){return sc(t,e,r)}function sc(t,e,r=le){const{immediate:o,deep:n,flush:i,once:s}=r,l=we({},r),a=e&&o||!e&&i!=="post";let c;if(_o){if(i==="sync"){const h=Zu();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!a){const h=()=>{};return h.stop=yt,h.resume=yt,h.pause=yt,h}}const d=Re;l.call=(h,v,y)=>Qe(h,d,v,y);let u=!1;i==="post"?l.scheduler=h=>{Ue(h,d&&d.suspense)}:i!=="sync"&&(u=!0,l.scheduler=(h,v)=>{v?h():ps(h)}),l.augmentJob=h=>{e&&(h.flags|=4),u&&(h.flags|=2,d&&(h.id=d.uid,h.i=d))};const f=Ku(t,e,l);return _o&&(c?c.push(f):a&&f()),f}function Qu(t,e,r){const o=this.proxy,n=pe(t)?t.includes(".")?ac(o,t):()=>o[t]:t.bind(o,o);let i;j(e)?i=e:(i=e.handler,r=e);const s=Ko(this),l=sc(n,i.bind(o),r);return s(),l}function ac(t,e){const r=e.split(".");return()=>{let o=t;for(let n=0;n<r.length&&o;n++)o=o[r[n]];return o}}const ef=Symbol("_vte"),Vn=t=>t.__isTeleport,Ze=Symbol("_leaveCb"),Yr=Symbol("_enterCb");function tf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gn(()=>{t.isMounted=!0}),pc(()=>{t.isUnmounting=!0}),t}const Je=[Function,Array],lc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Je,onEnter:Je,onAfterEnter:Je,onEnterCancelled:Je,onBeforeLeave:Je,onLeave:Je,onAfterLeave:Je,onLeaveCancelled:Je,onBeforeAppear:Je,onAppear:Je,onAfterAppear:Je,onAppearCancelled:Je},cc=t=>{const e=t.subTree;return e.component?cc(e.component):e},rf={name:"BaseTransition",props:lc,setup(t,{slots:e}){const r=ko(),o=tf();return()=>{const n=e.default&&fc(e.default(),!0),i=n&&n.length?dc(n):r.subTree?xe():void 0;if(!i)return;const s=ee(t),{mode:l}=s;if(o.isLeaving)return ci(i);const a=Sn(i);if(!a)return ci(i);let c=Pi(a,s,o,r,u=>c=u);a.type!==Pe&&bo(a,c);let d=r.subTree&&Sn(r.subTree);if(d&&d.type!==Pe&&!vr(d,a)&&cc(r).type!==Pe){let u=Pi(d,s,o,r);if(bo(d,u),l==="out-in"&&a.type!==Pe)return o.isLeaving=!0,u.afterLeave=()=>{o.isLeaving=!1,r.job.flags&8||r.update(),delete u.afterLeave,d=void 0},ci(i);l==="in-out"&&a.type!==Pe?u.delayLeave=(f,h,v)=>{const y=uc(o,d);y[String(d.key)]=d,f[Ze]=()=>{h(),f[Ze]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function dc(t){let e=t[0];if(t.length>1){for(const r of t)if(r.type!==Pe){e=r;break}}return e}const of=rf;function uc(t,e){const{leavingVNodes:r}=t;let o=r.get(e.type);return o||(o=Object.create(null),r.set(e.type,o)),o}function Pi(t,e,r,o,n){const{appear:i,mode:s,persisted:l=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:v,onLeaveCancelled:y,onBeforeAppear:$,onAppear:k,onAfterAppear:x,onAppearCancelled:O}=e,b=String(t.key),A=uc(r,t),F=(N,H)=>{N&&Qe(N,o,9,H)},Z=(N,H)=>{const J=H[1];F(N,H),z(N)?N.every(R=>R.length<=1)&&J():N.length<=1&&J()},de={mode:s,persisted:l,beforeEnter(N){let H=a;if(!r.isMounted)if(i)H=$||a;else return;N[Ze]&&N[Ze](!0);const J=A[b];J&&vr(t,J)&&J.el[Ze]&&J.el[Ze](),F(H,[N])},enter(N){if(A[b]===t)return;let H=c,J=d,R=u;if(!r.isMounted)if(i)H=k||c,J=x||d,R=O||u;else return;let X=!1;N[Yr]=_e=>{X||(X=!0,_e?F(R,[N]):F(J,[N]),de.delayedLeave&&de.delayedLeave(),N[Yr]=void 0)};const ue=N[Yr].bind(null,!1);H?Z(H,[N,ue]):ue()},leave(N,H){const J=String(t.key);if(N[Yr]&&N[Yr](!0),r.isUnmounting)return H();F(f,[N]);let R=!1;N[Ze]=ue=>{R||(R=!0,H(),ue?F(y,[N]):F(v,[N]),N[Ze]=void 0,A[J]===t&&delete A[J])};const X=N[Ze].bind(null,!1);A[J]=t,h?Z(h,[N,X]):X()},clone(N){const H=Pi(N,e,r,o,n);return n&&n(H),H}};return de}function ci(t){if(Hn(t))return t=ir(t),t.children=null,t}function Sn(t){if(!Hn(t))return Vn(t.type)&&t.children?dc(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:r}=t;if(r){if(e&16)return r[0];if(e&32&&j(r.default))return r.default()}}function bo(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;const r=t.component.subTree;bo(Vn(r.type)&&Sn(r)||r,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fc(t,e=!1,r){let o=[],n=0;for(let i=0;i<t.length;i++){let s=t[i];const l=r==null?s.key:String(r)+String(s.key!=null?s.key:i);s.type===Ge?(s.patchFlag&128&&n++,o=o.concat(fc(s.children,e,l))):(e||s.type!==Pe)&&o.push(l!=null?ir(s,{key:l}):s)}if(n>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function nf(){const t=ko();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function gc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Gs(t,e){let r;return!!((r=Object.getOwnPropertyDescriptor(t,e))&&!r.configurable)}const Cn=new WeakMap;function ao(t,e,r,o,n=!1){if(z(t)){t.forEach((y,$)=>ao(y,e&&(z(e)?e[$]:e),r,o,n));return}if(Dr(o)&&!n){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&ao(t,e,r,o.component.subTree);return}const i=o.shapeFlag&4?Jn(o.component):o.el,s=n?null:i,{i:l,r:a}=t,c=e&&e.r,d=l.refs===le?l.refs={}:l.refs,u=l.setupState,f=ee(u),h=u===le?Pl:y=>Gs(d,y)?!1:te(f,y),v=(y,$)=>!($&&Gs(d,$));if(c!=null&&c!==a){if(qs(e),pe(c))d[c]=null,h(c)&&(u[c]=null);else if(Oe(c)){const y=e;v(c,y.k)&&(c.value=null),y.k&&(d[y.k]=null)}}if(j(a))Ho(a,l,12,[s,d]);else{const y=pe(a),$=Oe(a);if(y||$){const k=()=>{if(t.f){const x=y?h(a)?u[a]:d[a]:v()||!t.k?a.value:d[t.k];if(n)z(x)&&ns(x,i);else if(z(x))x.includes(i)||x.push(i);else if(y)d[a]=[i],h(a)&&(u[a]=d[a]);else{const O=[i];v(a,t.k)&&(a.value=O),t.k&&(d[t.k]=O)}}else y?(d[a]=s,h(a)&&(u[a]=s)):$&&(v(a,t.k)&&(a.value=s),t.k&&(d[t.k]=s))};if(s){const x=()=>{k(),Cn.delete(t)};x.id=-1,Cn.set(t,x),Ue(x,r)}else qs(t),k()}}}function qs(t){const e=Cn.get(t);e&&(e.flags|=8,Cn.delete(t))}jn().requestIdleCallback;jn().cancelIdleCallback;const Dr=t=>!!t.type.__asyncLoader,Hn=t=>t.type.__isKeepAlive;function sf(t,e){hc(t,"a",e)}function af(t,e){hc(t,"da",e)}function hc(t,e,r=Re){const o=t.__wdc||(t.__wdc=()=>{let n=r;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(Kn(e,o,r),r){let n=r.parent;for(;n&&n.parent;)Hn(n.parent.vnode)&&lf(o,e,r,n),n=n.parent}}function lf(t,e,r,o){const n=Kn(e,t,o,!0);ms(()=>{ns(o[e],n)},r)}function Kn(t,e,r=Re,o=!1){if(r){const n=r[t]||(r[t]=[]),i=e.__weh||(e.__weh=(...s)=>{Bt();const l=Ko(r),a=Qe(e,r,t,s);return l(),Nt(),a});return o?n.unshift(i):n.push(i),i}}const Mt=t=>(e,r=Re)=>{(!_o||t==="sp")&&Kn(t,(...o)=>e(...o),r)},cf=Mt("bm"),Gn=Mt("m"),df=Mt("bu"),uf=Mt("u"),pc=Mt("bum"),ms=Mt("um"),ff=Mt("sp"),gf=Mt("rtg"),hf=Mt("rtc");function pf(t,e=Re){Kn("ec",t,e)}const bs="components",mf="directives";function Ri(t,e){return ys(bs,t,!0,e)||t}const mc=Symbol.for("v-ndc");function vs(t){return pe(t)?ys(bs,t,!1)||t:t||mc}function bc(t){return ys(mf,t)}function ys(t,e,r=!0,o=!1){const n=Te||Re;if(n){const i=n.type;if(t===bs){const l=Zf(i,!1);if(l&&(l===e||l===De(e)||l===Mn(De(e))))return i}const s=Ys(n[t]||i[t],e)||Ys(n.appContext[t],e);return!s&&o?i:s}}function Ys(t,e){return t&&(t[e]||t[De(e)]||t[Mn(De(e))])}function Ne(t,e,r,o,n,i){if(r==null&&(r={}),Te.ce||Te.parent&&Dr(Te.parent)&&Te.parent.ce){const c=r,d=Object.keys(c).length>0;return e!=="default"&&(c.name=e),V(),We(Ge,null,[me("slot",c,o&&o())],d?-2:64)}let s=t[e];s&&s._c&&(s._d=!1);const l=Ot.length;V();let a;try{const c=s&&vc(s(r)),d=r.key||i||c&&c.key;a=We(Ge,{key:(d&&!at(d)?d:`_${e}`)+(!c&&o?"_fb":"")},c||(o?o():[]),c&&t._===1?64:-2)}catch(c){for(let d=Ot.length;d>l;d--)_s();throw c}finally{s&&s._c&&(s._d=!0)}return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),a}function vc(t){return t.some(e=>yo(e)?!(e.type===Pe||e.type===Ge&&!vc(e.children)):!0)?t:null}const Oi=t=>t?zc(t)?Jn(t):Oi(t.parent):null,lo=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Oi(t.parent),$root:t=>Oi(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>kc(t),$forceUpdate:t=>t.f||(t.f=()=>{ps(t.update)}),$nextTick:t=>t.n||(t.n=ec.bind(t.proxy)),$watch:t=>Qu.bind(t)}),di=(t,e)=>t!==le&&!t.__isScriptSetup&&te(t,e),bf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:r,setupState:o,data:n,props:i,accessCache:s,type:l,appContext:a}=t;if(e[0]!=="$"){const f=s[e];if(f!==void 0)switch(f){case 1:return o[e];case 2:return n[e];case 4:return r[e];case 3:return i[e]}else{if(di(o,e))return s[e]=1,o[e];if(n!==le&&te(n,e))return s[e]=2,n[e];if(te(i,e))return s[e]=3,i[e];if(r!==le&&te(r,e))return s[e]=4,r[e];Ai&&(s[e]=0)}}const c=lo[e];let d,u;if(c)return e==="$attrs"&&Ee(t.attrs,"get",""),c(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(r!==le&&te(r,e))return s[e]=4,r[e];if(u=a.config.globalProperties,te(u,e))return u[e]},set({_:t},e,r){const{data:o,setupState:n,ctx:i}=t;return di(n,e)?(n[e]=r,!0):o!==le&&te(o,e)?(o[e]=r,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=r,!0)},has({_:{data:t,setupState:e,accessCache:r,ctx:o,appContext:n,props:i,type:s}},l){let a;return!!(r[l]||t!==le&&l[0]!=="$"&&te(t,l)||di(e,l)||te(i,l)||te(o,l)||te(lo,l)||te(n.config.globalProperties,l)||(a=s.__cssModules)&&a[l])},defineProperty(t,e,r){return r.get!=null?t._.accessCache[e]=0:te(r,"value")&&this.set(t,e,r.value,null),Reflect.defineProperty(t,e,r)}};function Js(t){return z(t)?t.reduce((e,r)=>(e[r]=null,e),{}):t}let Ai=!0;function vf(t){const e=kc(t),r=t.proxy,o=t.ctx;Ai=!1,e.beforeCreate&&Xs(e.beforeCreate,t,"bc");const{data:n,computed:i,methods:s,watch:l,provide:a,inject:c,created:d,beforeMount:u,mounted:f,beforeUpdate:h,updated:v,activated:y,deactivated:$,beforeDestroy:k,beforeUnmount:x,destroyed:O,unmounted:b,render:A,renderTracked:F,renderTriggered:Z,errorCaptured:de,serverPrefetch:N,expose:H,inheritAttrs:J,components:R,directives:X,filters:ue}=e;if(c&&yf(c,o,null),s)for(const Q in s){const G=s[Q];j(G)&&(o[Q]=G.bind(r))}if(n){const Q=n.call(r,r);oe(Q)&&(t.data=Un(Q))}if(Ai=!0,i)for(const Q in i){const G=i[Q],ze=j(G)?G.bind(r,r):j(G.get)?G.get.bind(r,r):yt,Me=!j(G)&&j(G.set)?G.set.bind(r):yt,ye=Di({get:ze,set:Me});Object.defineProperty(o,Q,{enumerable:!0,configurable:!0,get:()=>ye.value,set:ke=>ye.value=ke})}if(l)for(const Q in l)yc(l[Q],o,r,Q);if(a){const Q=j(a)?a.call(r):a;Reflect.ownKeys(Q).forEach(G=>{Ju(G,Q[G])})}d&&Xs(d,t,"c");function fe(Q,G){z(G)?G.forEach(ze=>Q(ze.bind(r))):G&&Q(G.bind(r))}if(fe(cf,u),fe(Gn,f),fe(df,h),fe(uf,v),fe(sf,y),fe(af,$),fe(pf,de),fe(hf,F),fe(gf,Z),fe(pc,x),fe(ms,b),fe(ff,N),z(H))if(H.length){const Q=t.exposed||(t.exposed={});H.forEach(G=>{Object.defineProperty(Q,G,{get:()=>r[G],set:ze=>r[G]=ze,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===yt&&(t.render=A),J!=null&&(t.inheritAttrs=J),R&&(t.components=R),X&&(t.directives=X),N&&gc(t)}function yf(t,e,r=yt){z(t)&&(t=Bi(t));for(const o in t){const n=t[o];let i;oe(n)?"default"in n?i=fn(n.from||o,n.default,!0):i=fn(n.from||o):i=fn(n),Oe(i)?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):e[o]=i}}function Xs(t,e,r){Qe(z(t)?t.map(o=>o.bind(e.proxy)):t.bind(e.proxy),e,r)}function yc(t,e,r,o){let n=o.includes(".")?ac(r,o):()=>r[o];if(pe(t)){const i=e[t];j(i)&&Zt(n,i)}else if(j(t))Zt(n,t.bind(r));else if(oe(t))if(z(t))t.forEach(i=>yc(i,e,r,o));else{const i=j(t.handler)?t.handler.bind(r):e[t.handler];j(i)&&Zt(n,i,t)}}function kc(t){const e=t.type,{mixins:r,extends:o}=e,{mixins:n,optionsCache:i,config:{optionMergeStrategies:s}}=t.appContext,l=i.get(e);let a;return l?a=l:!n.length&&!r&&!o?a=e:(a={},n.length&&n.forEach(c=>$n(a,c,s,!0)),$n(a,e,s)),oe(e)&&i.set(e,a),a}function $n(t,e,r,o=!1){const{mixins:n,extends:i}=e;i&&$n(t,i,r,!0),n&&n.forEach(s=>$n(t,s,r,!0));for(const s in e)if(!(o&&s==="expose")){const l=kf[s]||r&&r[s];t[s]=l?l(t[s],e[s]):e[s]}return t}const kf={data:Zs,props:Qs,emits:Qs,methods:Zr,computed:Zr,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Zr,directives:Zr,watch:_f,provide:Zs,inject:wf};function Zs(t,e){return e?t?function(){return we(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function wf(t,e){return Zr(Bi(t),Bi(e))}function Bi(t){if(z(t)){const e={};for(let r=0;r<t.length;r++)e[t[r]]=t[r];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function Zr(t,e){return t?we(Object.create(null),t,e):e}function Qs(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:we(Object.create(null),Js(t),Js(e??{})):e}function _f(t,e){if(!t)return e;if(!e)return t;const r=we(Object.create(null),t);for(const o in e)r[o]=Ae(t[o],e[o]);return r}function wc(){return{app:null,config:{isNativeTag:Pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sf=0;function Cf(t,e){return function(o,n=null){j(o)||(o=we({},o)),n!=null&&!oe(n)&&(n=null);const i=wc(),s=new WeakSet,l=[];let a=!1;const c=i.app={_uid:Sf++,_component:o,_props:n,_container:null,_context:i,_instance:null,version:tg,get config(){return i.config},set config(d){},use(d,...u){return s.has(d)||(d&&j(d.install)?(s.add(d),d.install(c,...u)):j(d)&&(s.add(d),d(c,...u))),c},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),c},component(d,u){return u?(i.components[d]=u,c):i.components[d]},directive(d,u){return u?(i.directives[d]=u,c):i.directives[d]},mount(d,u,f){if(!a){const h=c._ceVNode||me(o,n);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),t(h,d,f),a=!0,c._container=d,d.__vue_app__=c,Jn(h.component)}},onUnmount(d){l.push(d)},unmount(){a&&(Qe(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(d,u){return i.provides[d]=u,c},runWithContext(d){const u=Lr;Lr=c;try{return d()}finally{Lr=u}}};return c}}let Lr=null;const $f=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${De(e)}Modifiers`]||t[`${Cr(e)}Modifiers`];function xf(t,e,...r){if(t.isUnmounted)return;const o=t.vnode.props||le;let n=r;const i=e.startsWith("update:"),s=i&&$f(o,e.slice(7));s&&(s.trim&&(n=r.map(d=>pe(d)?d.trim():d)),s.number&&(n=n.map(du)));let l,a=o[l=oi(e)]||o[l=oi(De(e))];!a&&i&&(a=o[l=oi(Cr(e))]),a&&Qe(a,t,6,n);const c=o[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Qe(c,t,6,n)}}const Tf=new WeakMap;function _c(t,e,r=!1){const o=r?Tf:e.emitsCache,n=o.get(t);if(n!==void 0)return n;const i=t.emits;let s={},l=!1;if(!j(t)){const a=c=>{const d=_c(c,e,!0);d&&(l=!0,we(s,d))};!r&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!l?(oe(t)&&o.set(t,null),null):(z(i)?i.forEach(a=>s[a]=null):we(s,i),oe(t)&&o.set(t,s),s)}function qn(t,e){return!t||!Dn(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,Cr(e))||te(t,e))}function ea(t){const{type:e,vnode:r,proxy:o,withProxy:n,propsOptions:[i],slots:s,attrs:l,emit:a,render:c,renderCache:d,props:u,data:f,setupState:h,ctx:v,inheritAttrs:y}=t,$=_n(t);let k,x;try{if(r.shapeFlag&4){const b=n||o,A=b;k=mt(c.call(A,b,d,u,h,f,v)),x=l}else{const b=e;k=mt(b.length>1?b(u,{attrs:l,slots:s,emit:a}):b(u,null)),x=e.props?l:If(l)}}catch(b){Ot.length=0,Wn(b,t,1),k=me(Pe)}let O=k;if(x&&y!==!1){const b=Object.keys(x),{shapeFlag:A}=O;b.length&&A&7&&(i&&b.some(Ln)&&(x=Ef(x,i)),O=ir(O,x,!1,!0))}if(r.dirs&&(O=ir(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(r.dirs):r.dirs),r.transition){const b=Vn(O.type)&&Sn(O)||O;bo(b,r.transition)}return k=O,_n($),k}const If=t=>{let e;for(const r in t)(r==="class"||r==="style"||Dn(r))&&((e||(e={}))[r]=t[r]);return e},Ef=(t,e)=>{const r={};for(const o in t)(!Ln(o)||!(o.slice(9)in e))&&(r[o]=t[o]);return r};function Pf(t,e,r){const{props:o,children:n,component:i}=t,{props:s,children:l,patchFlag:a}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(r&&a>=0){if(a&1024)return!0;if(a&16)return o?ta(o,s,c):!!s;if(a&8){const d=e.dynamicProps;for(let u=0;u<d.length;u++){const f=d[u];if(Sc(s,o,f)&&!qn(c,f))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:o===s?!1:o?s?ta(o,s,c):!0:!!s;return!1}function ta(t,e,r){const o=Object.keys(e);if(o.length!==Object.keys(t).length)return!0;for(let n=0;n<o.length;n++){const i=o[n];if(Sc(e,t,i)&&!qn(r,i))return!0}return!1}function Sc(t,e,r){const o=t[r],n=e[r];return r==="style"&&oe(o)&&oe(n)?!Fn(o,n):o!==n}function Rf({vnode:t,parent:e,suspense:r},o){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===t&&(n.suspense.vnode.el=n.el=o,t=n),n===t)(t=e.vnode).el=o,e=e.parent;else break}r&&r.activeBranch===t&&(r.vnode.el=o)}const Cc={},$c=()=>Object.create(Cc),xc=t=>Object.getPrototypeOf(t)===Cc;function Of(t,e,r,o=!1){const n={},i=$c();t.propsDefaults=Object.create(null),Tc(t,e,n,i);for(const s in t.propsOptions[0])s in n||(n[s]=void 0);r?t.props=o?n:zu(n):t.type.props?t.props=n:t.props=i,t.attrs=i}function Af(t,e,r,o){const{props:n,attrs:i,vnode:{patchFlag:s}}=t,l=ee(n),[a]=t.propsOptions;let c=!1;if((o||s>0)&&!(s&16)){if(s&8){const d=t.vnode.dynamicProps;for(let u=0;u<d.length;u++){let f=d[u];if(qn(t.emitsOptions,f))continue;const h=e[f];if(a)if(te(i,f))h!==i[f]&&(i[f]=h,c=!0);else{const v=De(f);n[v]=Ni(a,l,v,h,t,!1)}else h!==i[f]&&(i[f]=h,c=!0)}}}else{Tc(t,e,n,i)&&(c=!0);let d;for(const u in l)(!e||!te(e,u)&&((d=Cr(u))===u||!te(e,d)))&&(a?r&&(r[u]!==void 0||r[d]!==void 0)&&(n[u]=Ni(a,l,u,void 0,t,!0)):delete n[u]);if(i!==l)for(const u in i)(!e||!te(e,u))&&(delete i[u],c=!0)}c&&It(t.attrs,"set","")}function Tc(t,e,r,o){const[n,i]=t.propsOptions;let s=!1,l;if(e)for(let a in e){if(no(a))continue;const c=e[a];let d;n&&te(n,d=De(a))?!i||!i.includes(d)?r[d]=c:(l||(l={}))[d]=c:qn(t.emitsOptions,a)||(!(a in o)||c!==o[a])&&(o[a]=c,s=!0)}if(i){const a=ee(r),c=l||le;for(let d=0;d<i.length;d++){const u=i[d];r[u]=Ni(n,a,u,c[u],t,!te(c,u))}}return s}function Ni(t,e,r,o,n,i){const s=t[r];if(s!=null){const l=te(s,"default");if(l&&o===void 0){const a=s.default;if(s.type!==Function&&!s.skipFactory&&j(a)){const{propsDefaults:c}=n;if(r in c)o=c[r];else{const d=Ko(n);o=c[r]=a.call(null,e),d()}}else o=a;n.ce&&n.ce._setProp(r,o)}s[0]&&(i&&!l?o=!1:s[1]&&(o===""||o===Cr(r))&&(o=!0))}return o}const Bf=new WeakMap;function Ic(t,e,r=!1){const o=r?Bf:e.propsCache,n=o.get(t);if(n)return n;const i=t.props,s={},l=[];let a=!1;if(!j(t)){const d=u=>{a=!0;const[f,h]=Ic(u,e,!0);we(s,f),h&&l.push(...h)};!r&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!a)return oe(t)&&o.set(t,Ar),Ar;if(z(i))for(let d=0;d<i.length;d++){const u=De(i[d]);ra(u)&&(s[u]=le)}else if(i)for(const d in i){const u=De(d);if(ra(u)){const f=i[d],h=s[u]=z(f)||j(f)?{type:f}:we({},f),v=h.type;let y=!1,$=!0;if(z(v))for(let k=0;k<v.length;++k){const x=v[k],O=j(x)&&x.name;if(O==="Boolean"){y=!0;break}else O==="String"&&($=!1)}else y=j(v)&&v.name==="Boolean";h[0]=y,h[1]=$,(y||te(h,"default"))&&l.push(u)}}const c=[s,l];return oe(t)&&o.set(t,c),c}function ra(t){return t[0]!=="$"&&!no(t)}const ks=t=>t==="_"||t==="_ctx"||t==="$stable",ws=t=>z(t)?t.map(mt):[mt(t)],Nf=(t,e,r)=>{if(e._n)return e;const o=Ke((...n)=>ws(e(...n)),r);return o._c=!1,o},Ec=(t,e,r)=>{const o=t._ctx;for(const n in t){if(ks(n))continue;const i=t[n];if(j(i))e[n]=Nf(n,i,o);else if(i!=null){const s=ws(i);e[n]=()=>s}}},Pc=(t,e)=>{const r=ws(e);t.slots.default=()=>r},Rc=(t,e,r)=>{for(const o in e)(r||!ks(o))&&(t[o]=e[o])},Df=(t,e,r)=>{const o=t.slots=$c();if(t.vnode.shapeFlag&32){const n=e._;n?(Rc(o,e,r),r&&Bl(o,"_",n,!0)):Ec(e,o)}else e&&Pc(t,e)},Lf=(t,e,r)=>{const{vnode:o,slots:n}=t;let i=!0,s=le;if(o.shapeFlag&32){const l=e._;l?r&&l===1?i=!1:Rc(n,e,r):(i=!e.$stable,Ec(e,n)),s=e}else e&&(Pc(t,e),s={default:1});if(i)for(const l in n)!ks(l)&&s[l]==null&&delete n[l]},Ue=Uf;function zf(t){return Mf(t)}function Mf(t,e){const r=jn();r.__VUE__=!0;const{insert:o,remove:n,patchProp:i,createElement:s,createText:l,createComment:a,setText:c,setElementText:d,parentNode:u,nextSibling:f,setScopeId:h=yt,insertStaticContent:v}=t,y=(g,p,m,C=null,S=null,w=null,E=void 0,I=null,T=!!p.dynamicChildren)=>{if(g===p)return;g&&!vr(g,p)&&(C=xr(g),ke(g,S,w,!0),g=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:_,ref:D,shapeFlag:P}=p;switch(_){case Yn:$(g,p,m,C);break;case Pe:k(g,p,m,C);break;case fi:g==null&&x(p,m,C,E);break;case Ge:R(g,p,m,C,S,w,E,I,T);break;default:P&1?A(g,p,m,C,S,w,E,I,T):P&6?X(g,p,m,C,S,w,E,I,T):(P&64||P&128)&&_.process(g,p,m,C,S,w,E,I,T,ur)}D!=null&&S?ao(D,g&&g.ref,w,p||g,!p):D==null&&g&&g.ref!=null&&ao(g.ref,null,w,g,!0)},$=(g,p,m,C)=>{if(g==null)o(p.el=l(p.children),m,C);else{const S=p.el=g.el;p.children!==g.children&&c(S,p.children)}},k=(g,p,m,C)=>{g==null?o(p.el=a(p.children||""),m,C):p.el=g.el},x=(g,p,m,C)=>{[g.el,g.anchor]=v(g.children,p,m,C,g.el,g.anchor)},O=({el:g,anchor:p},m,C)=>{let S;for(;g&&g!==p;)S=f(g),o(g,m,C),g=S;o(p,m,C)},b=({el:g,anchor:p})=>{let m;for(;g&&g!==p;)m=f(g),n(g),g=m;n(p)},A=(g,p,m,C,S,w,E,I,T)=>{if(p.type==="svg"?E="svg":p.type==="math"&&(E="mathml"),g==null)F(p,m,C,S,w,E,I,T);else{const _=g.el&&g.el._isVueCE?g.el:null;try{_&&_._beginPatch(),N(g,p,S,w,E,I,T)}finally{_&&_._endPatch()}}},F=(g,p,m,C,S,w,E,I)=>{let T,_;const{props:D,shapeFlag:P,transition:B,dirs:M}=g;if(T=g.el=s(g.type,w,D&&D.is,D),P&8?d(T,g.children):P&16&&de(g.children,T,null,C,S,ui(g,w),E,I),M&&fr(g,null,C,"created"),Z(T,g,g.scopeId,E,C),D){for(const se in D)se!=="value"&&!no(se)&&i(T,se,null,D[se],w,C);"value"in D&&i(T,"value",null,D.value,w),(_=D.onVnodeBeforeMount)&&ft(_,C,g)}M&&fr(g,null,C,"beforeMount");const q=jf(S,B);q&&B.beforeEnter(T),o(T,p,m),((_=D&&D.onVnodeMounted)||q||M)&&Ue(()=>{try{_&&ft(_,C,g),q&&B.enter(T),M&&fr(g,null,C,"mounted")}finally{}},S)},Z=(g,p,m,C,S)=>{if(m&&h(g,m),C)for(let w=0;w<C.length;w++)h(g,C[w]);if(S){let w=S.subTree;if(p===w||Nc(w.type)&&(w.ssContent===p||w.ssFallback===p)){const E=S.vnode;Z(g,E,E.scopeId,E.slotScopeIds,S.parent)}}},de=(g,p,m,C,S,w,E,I,T=0)=>{for(let _=T;_<g.length;_++){const D=g[_]=I?Tt(g[_]):mt(g[_]);y(null,D,p,m,C,S,w,E,I)}},N=(g,p,m,C,S,w,E)=>{const I=p.el=g.el;let{patchFlag:T,dynamicChildren:_,dirs:D}=p;T|=g.patchFlag&16;const P=g.props||le,B=p.props||le;let M;if(m&&gr(m,!1),(M=B.onVnodeBeforeUpdate)&&ft(M,m,p,g),D&&fr(p,g,m,"beforeUpdate"),m&&gr(m,!0),_&&(!g.dynamicChildren||g.dynamicChildren.length!==_.length)&&(T=0,E=!1,_=null),(P.innerHTML&&B.innerHTML==null||P.textContent&&B.textContent==null)&&d(I,""),_?H(g.dynamicChildren,_,I,m,C,ui(p,S),w):E||G(g,p,I,null,m,C,ui(p,S),w,!1),T>0){if(T&16)J(I,P,B,m,S);else if(T&2&&P.class!==B.class&&i(I,"class",null,B.class,S),T&4&&i(I,"style",P.style,B.style,S),T&8){const q=p.dynamicProps;for(let se=0;se<q.length;se++){const ne=q[se],be=P[ne],Se=B[ne];(Se!==be||ne==="value")&&i(I,ne,be,Se,S,m)}}T&1&&g.children!==p.children&&d(I,p.children)}else!E&&_==null&&J(I,P,B,m,S);((M=B.onVnodeUpdated)||D)&&Ue(()=>{M&&ft(M,m,p,g),D&&fr(p,g,m,"updated")},C)},H=(g,p,m,C,S,w,E)=>{for(let I=0;I<p.length;I++){const T=g[I],_=p[I],D=T.el&&(T.type===Ge||!vr(T,_)||T.shapeFlag&198)?u(T.el):m;y(T,_,D,null,C,S,w,E,!0)}},J=(g,p,m,C,S)=>{if(p!==m){if(p!==le)for(const w in p)!no(w)&&!(w in m)&&i(g,w,p[w],null,S,C);for(const w in m){if(no(w))continue;const E=m[w],I=p[w];E!==I&&w!=="value"&&i(g,w,I,E,S,C)}"value"in m&&i(g,"value",p.value,m.value,S)}},R=(g,p,m,C,S,w,E,I,T)=>{const _=p.el=g?g.el:l(""),D=p.anchor=g?g.anchor:l("");let{patchFlag:P,dynamicChildren:B,slotScopeIds:M}=p;M&&(I=I?I.concat(M):M),g==null?(o(_,m,C),o(D,m,C),de(p.children||[],m,D,S,w,E,I,T)):P>0&&P&64&&B&&g.dynamicChildren&&g.dynamicChildren.length===B.length?(H(g.dynamicChildren,B,m,S,w,E,I),(p.key!=null||S&&p===S.subTree)&&Oc(g,p,!0)):G(g,p,m,D,S,w,E,I,T)},X=(g,p,m,C,S,w,E,I,T)=>{p.slotScopeIds=I,g==null?p.shapeFlag&512?S.ctx.activate(p,m,C,E,T):ue(p,m,C,S,w,E,T):_e(g,p,T)},ue=(g,p,m,C,S,w,E)=>{const I=g.component=Gf(g,C,S);if(Hn(g)&&(I.ctx.renderer=ur),qf(I,!1,E),I.asyncDep){if(S&&S.registerDep(I,fe,E),!g.el){const T=I.subTree=me(Pe);k(null,T,p,m),g.placeholder=T.el}}else fe(I,g,p,m,S,w,E)},_e=(g,p,m)=>{const C=p.component=g.component;if(Pf(g,p,m))if(C.asyncDep&&!C.asyncResolved){Q(C,p,m);return}else C.next=p,C.update();else p.el=g.el,C.vnode=p},fe=(g,p,m,C,S,w,E)=>{const I=()=>{if(g.isMounted){let{next:P,bu:B,u:M,parent:q,vnode:se}=g;{const dt=Ac(g);if(dt){P&&(P.el=se.el,Q(g,P,E)),dt.asyncDep.then(()=>{Ue(()=>{g.isUnmounted||_()},S)});return}}let ne=P,be;gr(g,!1),P?(P.el=se.el,Q(g,P,E)):P=se,B&&ni(B),(be=P.props&&P.props.onVnodeBeforeUpdate)&&ft(be,q,P,se),gr(g,!0);const Se=ea(g),ct=g.subTree;g.subTree=Se,y(ct,Se,u(ct.el),xr(ct),g,S,w),P.el=Se.el,ne===null&&Rf(g,Se.el),M&&Ue(M,S),(be=P.props&&P.props.onVnodeUpdated)&&Ue(()=>ft(be,q,P,se),S)}else{let P;const{el:B,props:M}=p,{bm:q,m:se,parent:ne,root:be,type:Se}=g,ct=Dr(p);gr(g,!1),q&&ni(q),!ct&&(P=M&&M.onVnodeBeforeMount)&&ft(P,ne,p),gr(g,!0);{be.ce&&be.ce._hasShadowRoot()&&be.ce._injectChildStyle(Se,g.parent?g.parent.type:void 0);const dt=g.subTree=ea(g);y(null,dt,m,C,g,S,w),p.el=dt.el}if(se&&Ue(se,S),!ct&&(P=M&&M.onVnodeMounted)){const dt=p;Ue(()=>ft(P,ne,dt),S)}(p.shapeFlag&256||ne&&Dr(ne.vnode)&&ne.vnode.shapeFlag&256)&&g.a&&Ue(g.a,S),g.isMounted=!0,p=m=C=null}};g.scope.on();const T=g.effect=new zl(I);g.scope.off();const _=g.update=T.run.bind(T),D=g.job=T.runIfDirty.bind(T);D.i=g,D.id=g.uid,T.scheduler=()=>ps(D),gr(g,!0),_()},Q=(g,p,m)=>{p.component=g;const C=g.vnode.props;g.vnode=p,g.next=null,Af(g,p.props,C,m),Lf(g,p.children,m),Bt(),Ks(g),Nt()},G=(g,p,m,C,S,w,E,I,T=!1)=>{const _=g&&g.children,D=g?g.shapeFlag:0,P=p.children,{patchFlag:B,shapeFlag:M}=p;if(B>0){if(B&128){Me(_,P,m,C,S,w,E,I,T);return}else if(B&256){ze(_,P,m,C,S,w,E,I,T);return}}M&8?(D&16&&Ut(_,S,w),P!==_&&d(m,P)):D&16?M&16?Me(_,P,m,C,S,w,E,I,T):Ut(_,S,w,!0):(D&8&&d(m,""),M&16&&de(P,m,C,S,w,E,I,T))},ze=(g,p,m,C,S,w,E,I,T)=>{g=g||Ar,p=p||Ar;const _=g.length,D=p.length,P=Math.min(_,D);let B;for(B=0;B<P;B++){const M=p[B]=T?Tt(p[B]):mt(p[B]);y(g[B],M,m,null,S,w,E,I,T)}_>D?Ut(g,S,w,!0,!1,P):de(p,m,C,S,w,E,I,T,P)},Me=(g,p,m,C,S,w,E,I,T)=>{let _=0;const D=p.length;let P=g.length-1,B=D-1;for(;_<=P&&_<=B;){const M=g[_],q=p[_]=T?Tt(p[_]):mt(p[_]);if(vr(M,q))y(M,q,m,null,S,w,E,I,T);else break;_++}for(;_<=P&&_<=B;){const M=g[P],q=p[B]=T?Tt(p[B]):mt(p[B]);if(vr(M,q))y(M,q,m,null,S,w,E,I,T);else break;P--,B--}if(_>P){if(_<=B){const M=B+1,q=M<D?p[M].el:C;for(;_<=B;)y(null,p[_]=T?Tt(p[_]):mt(p[_]),m,q,S,w,E,I,T),_++}}else if(_>B)for(;_<=P;)ke(g[_],S,w,!0),_++;else{const M=_,q=_,se=new Map;for(_=q;_<=B;_++){const He=p[_]=T?Tt(p[_]):mt(p[_]);He.key!=null&&se.set(He.key,_)}let ne,be=0;const Se=B-q+1;let ct=!1,dt=0;const Gr=new Array(Se);for(_=0;_<Se;_++)Gr[_]=0;for(_=M;_<=P;_++){const He=g[_];if(be>=Se){ke(He,S,w,!0);continue}let ut;if(He.key!=null)ut=se.get(He.key);else for(ne=q;ne<=B;ne++)if(Gr[ne-q]===0&&vr(He,p[ne])){ut=ne;break}ut===void 0?ke(He,S,w,!0):(Gr[ut-q]=_+1,ut>=dt?dt=ut:ct=!0,y(He,p[ut],m,null,S,w,E,I,T),be++)}const zs=ct?Ff(Gr):Ar;for(ne=zs.length-1,_=Se-1;_>=0;_--){const He=q+_,ut=p[He],Ms=p[He+1],js=He+1<D?Ms.el||Bc(Ms):C;Gr[_]===0?y(null,ut,m,js,S,w,E,I,T):ct&&(ne<0||_!==zs[ne]?ye(ut,m,js,2):ne--)}}},ye=(g,p,m,C,S=null)=>{const{el:w,type:E,transition:I,children:T,shapeFlag:_}=g;if(_&6){ye(g.component.subTree,p,m,C);return}if(_&128){g.suspense.move(p,m,C);return}if(_&64){E.move(g,p,m,ur);return}if(E===Ge){o(w,p,m);for(let P=0;P<T.length;P++)ye(T[P],p,m,C);o(g.anchor,p,m);return}if(E===fi){O(g,p,m);return}if(C!==2&&_&1&&I)if(C===0)I.persisted&&!w[Ze]?o(w,p,m):(I.beforeEnter(w),o(w,p,m),Ue(()=>I.enter(w),S));else{const{leave:P,delayLeave:B,afterLeave:M}=I,q=()=>{g.ctx.isUnmounted?n(w):o(w,p,m)},se=()=>{const ne=w._isLeaving||!!w[Ze];w._isLeaving&&w[Ze](!0),I.persisted&&!ne?q():P(w,()=>{q(),M&&M()})};B?B(w,q,se):se()}else o(w,p,m)},ke=(g,p,m,C=!1,S=!1)=>{const{type:w,props:E,ref:I,children:T,dynamicChildren:_,shapeFlag:D,patchFlag:P,dirs:B,cacheIndex:M,memo:q}=g;if(P===-2&&(S=!1),I!=null&&(Bt(),ao(I,null,m,g,!0),Nt()),M!=null&&(p.renderCache[M]=void 0),D&256){p.ctx.deactivate(g);return}const se=D&1&&B,ne=!Dr(g);let be;if(ne&&(be=E&&E.onVnodeBeforeUnmount)&&ft(be,p,g),D&6)en(g.component,m,C);else{if(D&128){g.suspense.unmount(m,C);return}se&&fr(g,null,p,"beforeUnmount"),D&64?g.type.remove(g,p,m,ur,C):_&&!_.hasOnce&&(w!==Ge||P>0&&P&64)?Ut(_,p,m,!1,!0):(w===Ge&&P&384||!S&&D&16)&&Ut(T,p,m),C&&dr(g)}const Se=q!=null&&M==null;(ne&&(be=E&&E.onVnodeUnmounted)||se||Se)&&Ue(()=>{be&&ft(be,p,g),se&&fr(g,null,p,"unmounted"),Se&&(g.el=null)},m)},dr=g=>{const{type:p,el:m,anchor:C,transition:S}=g;if(p===Ge){Ft(m,C);return}if(p===fi){b(g);return}const w=()=>{n(m),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(g.shapeFlag&1&&S&&!S.persisted){const{leave:E,delayLeave:I}=S,T=()=>E(m,w);I?I(g.el,w,T):T()}else w()},Ft=(g,p)=>{let m;for(;g!==p;)m=f(g),n(g),g=m;n(p)},en=(g,p,m)=>{const{bum:C,scope:S,job:w,subTree:E,um:I,m:T,a:_}=g;oa(T),oa(_),C&&ni(C),S.stop(),w&&(w.flags|=8,ke(E,g,p,m)),I&&Ue(I,p),Ue(()=>{g.isUnmounted=!0},p)},Ut=(g,p,m,C=!1,S=!1,w=0)=>{for(let E=w;E<g.length;E++)ke(g[E],p,m,C,S)},xr=g=>{if(g.shapeFlag&6)return xr(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const p=f(g.anchor||g.el),m=p&&p[ef];return m?f(m):p};let Kr=!1;const tn=(g,p,m)=>{let C;g==null?p._vnode&&(ke(p._vnode,null,null,!0),C=p._vnode.component):y(p._vnode||null,g,p,null,null,null,m),p._vnode=g,Kr||(Kr=!0,Ks(C),rc(),Kr=!1)},ur={p:y,um:ke,m:ye,r:dr,mt:ue,mc:de,pc:G,pbc:H,n:xr,o:t};return{render:tn,hydrate:void 0,createApp:Cf(tn)}}function ui({type:t,props:e},r){return r==="svg"&&t==="foreignObject"||r==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:r}function gr({effect:t,job:e},r){r?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function jf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Oc(t,e,r=!1){const o=t.children,n=e.children;if(z(o)&&z(n))for(let i=0;i<o.length;i++){const s=o[i];let l=n[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[i]=Tt(n[i]),l.el=s.el),!r&&l.patchFlag!==-2&&Oc(s,l)),l.type===Yn&&(l.patchFlag===-1&&(l=n[i]=Tt(l)),l.el=s.el),l.type===Pe&&!l.el&&(l.el=s.el)}}function Ff(t){const e=t.slice(),r=[0];let o,n,i,s,l;const a=t.length;for(o=0;o<a;o++){const c=t[o];if(c!==0){if(n=r[r.length-1],t[n]<c){e[o]=n,r.push(o);continue}for(i=0,s=r.length-1;i<s;)l=i+s>>1,t[r[l]]<c?i=l+1:s=l;c<t[r[i]]&&(i>0&&(e[o]=r[i-1]),r[i]=o)}}for(i=r.length,s=r[i-1];i-- >0;)r[i]=s,s=e[s];return r}function Ac(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ac(e)}function oa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Bc(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Bc(e.subTree):null}const Nc=t=>t.__isSuspense;function Uf(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Yu(t)}const Ge=Symbol.for("v-fgt"),Yn=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),fi=Symbol.for("v-stc"),Ot=[];let qe=null;function V(t=!1){Ot.push(qe=t?null:[])}function _s(){Ot.pop(),qe=Ot[Ot.length-1]||null}let vo=1;function xn(t,e=!1){vo+=t,t<0&&qe&&e&&(qe.hasOnce=!0)}function Dc(t){return t.dynamicChildren=vo>0?qe||Ar:null,_s(),vo>0&&qe&&qe.push(t),t}function he(t,e,r,o,n,i){return Dc(ve(t,e,r,o,n,i,!0))}function We(t,e,r,o,n){return Dc(me(t,e,r,o,n,!0))}function yo(t){return t?t.__v_isVNode===!0:!1}function vr(t,e){return t.type===e.type&&t.key===e.key}const Lc=({key:t})=>t??null,gn=({ref:t,ref_key:e,ref_for:r})=>(typeof t=="number"&&(t=""+t),t!=null?pe(t)||Oe(t)||j(t)?{i:Te,r:t,k:e,f:!!r}:t:null);function ve(t,e=null,r=null,o=0,n=null,i=t===Ge?0:1,s=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Lc(e),ref:e&&gn(e),scopeId:nc,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:Te};return l?(Tn(a,r),i&128&&t.normalize(a)):r&&(a.shapeFlag|=pe(r)?8:16),vo>0&&!s&&qe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&qe.push(a),a}const me=Wf;function Wf(t,e=null,r=null,o=0,n=null,i=!1){if((!t||t===mc)&&(t=Pe),yo(t)){const l=ir(t,e,!0);return r&&Tn(l,r),vo>0&&!i&&qe&&(l.shapeFlag&6?qe[qe.indexOf(t)]=l:qe.push(l)),l.patchFlag=-2,l}if(Qf(t)&&(t=t.__vccOpts),e){e=Vf(e);let{class:l,style:a}=e;l&&!pe(l)&&(e.class=Ur(l)),oe(a)&&(hs(a)&&!z(a)&&(a=we({},a)),e.style=ss(a))}const s=pe(t)?1:Nc(t)?128:Vn(t)?64:oe(t)?4:j(t)?2:0;return ve(t,e,r,o,n,s,i,!0)}function Vf(t){return t?hs(t)||xc(t)?we({},t):t:null}function ir(t,e,r=!1,o=!1){const{props:n,ref:i,patchFlag:s,children:l,transition:a}=t,c=e?U(n||{},e):n,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Lc(c),ref:e&&e.ref?r&&i?z(i)?i.concat(gn(e)):[i,gn(e)]:gn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&o&&bo(d,a.clone(d)),d}function Kt(t=" ",e=0){return me(Yn,null,t,e)}function xe(t="",e=!1){return e?(V(),We(Pe,null,t)):me(Pe,null,t)}function mt(t){return t==null||typeof t=="boolean"?me(Pe):z(t)?me(Ge,null,t.slice()):yo(t)?Tt(t):me(Yn,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ir(t)}function Tn(t,e){let r=0;const{shapeFlag:o}=t;if(e==null)e=null;else if(z(e))r=16;else if(typeof e=="object")if(o&65){const n=e.default;n&&(n._c&&(n._d=!1),Tn(t,n()),n._c&&(n._d=!0));return}else{r=32;const n=e._;!n&&!xc(e)?e._ctx=Te:n===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(j(e)){if(o&65){Tn(t,{default:e});return}e={default:e,_ctx:Te},r=32}else e=String(e),o&64?(r=16,e=[Kt(e)]):r=8;t.children=e,t.shapeFlag|=r}function U(...t){const e={};for(let r=0;r<t.length;r++){const o=t[r];for(const n in o)if(n==="class")e.class!==o.class&&(e.class=Ur([e.class,o.class]));else if(n==="style")e.style=ss([e.style,o.style]);else if(Dn(n)){const i=e[n],s=o[n];s&&i!==s&&!(z(i)&&i.includes(s))?e[n]=i?[].concat(i,s):s:s==null&&i==null&&!Ln(n)&&(e[n]=s)}else n!==""&&(e[n]=o[n])}return e}function ft(t,e,r,o=null){Qe(t,e,7,[r,o])}const Hf=wc();let Kf=0;function Gf(t,e,r){const o=t.type,n=(e?e.appContext:t.appContext)||Hf,i={uid:Kf++,vnode:t,type:o,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ic(o,n),emitsOptions:_c(o,n),emit:null,emitted:null,propsDefaults:le,inheritAttrs:o.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xf.bind(null,i),t.ce&&t.ce(i),i}let Re=null;const ko=()=>Re||Te;let In,wo;{const t=jn(),e=(r,o)=>{let n;return(n=t[r])||(n=t[r]=[]),n.push(o),i=>{n.length>1?n.forEach(s=>s(i)):n[0](i)}};In=e("__VUE_INSTANCE_SETTERS__",r=>Re=r),wo=e("__VUE_SSR_SETTERS__",r=>_o=r)}const Ko=t=>{const e=Re;return In(t),t.scope.on(),()=>{t.scope.off(),In(e)}},na=()=>{Re&&Re.scope.off(),In(null)};function zc(t){return t.vnode.shapeFlag&4}let _o=!1;function qf(t,e=!1,r=!1){e&&wo(e);const{props:o,children:n}=t.vnode,i=zc(t);Of(t,o,i,e),Df(t,n,r||e);const s=i?Yf(t,e):void 0;return e&&wo(!1),s}function Yf(t,e){const r=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bf);const{setup:o}=r;if(o){Bt();const n=t.setupContext=o.length>1?Xf(t):null,i=Ko(t),s=Ho(o,t,0,[t.props,n]),l=Rl(s);if(Nt(),i(),(l||t.sp)&&!Dr(t)&&gc(t),l){if(s.then(na,na),e)return s.then(a=>{wo(!0);try{ia(t,a,e)}finally{wo(!1)}}).catch(a=>{Wn(a,t,0)});t.asyncDep=s}else ia(t,s)}else Mc(t)}function ia(t,e,r){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=Zl(e)),Mc(t)}function Mc(t,e,r){const o=t.type;t.render||(t.render=o.render||yt);{const n=Ko(t);Bt();try{vf(t)}finally{Nt(),n()}}}const Jf={get(t,e){return Ee(t,"get",""),t[e]}};function Xf(t){const e=r=>{t.exposed=r||{}};return{attrs:new Proxy(t.attrs,Jf),slots:t.slots,emit:t.emit,expose:e}}function Jn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Zl(Mu(t.exposed)),{get(e,r){if(r in e)return e[r];if(r in lo)return lo[r](t)},has(e,r){return r in e||r in lo}})):t.proxy}function Zf(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function Qf(t){return j(t)&&"__vccOpts"in t}const Di=(t,e)=>Vu(t,e,_o);function eg(t,e,r){try{xn(-1);const o=arguments.length;return o===2?oe(e)&&!z(e)?yo(e)?me(t,null,[e]):me(t,e):me(t,null,e):(o>3?r=Array.prototype.slice.call(arguments,2):o===3&&yo(r)&&(r=[r]),me(t,e,r))}finally{xn(1)}}const tg="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Li;const sa=typeof window<"u"&&window.trustedTypes;if(sa)try{Li=sa.createPolicy("vue",{createHTML:t=>t})}catch{}const jc=Li?t=>Li.createHTML(t):t=>t,rg="http://www.w3.org/2000/svg",og="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,aa=xt&&xt.createElement("template"),ng={insert:(t,e,r)=>{e.insertBefore(t,r||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,r,o)=>{const n=e==="svg"?xt.createElementNS(rg,t):e==="mathml"?xt.createElementNS(og,t):r?xt.createElement(t,{is:r}):xt.createElement(t);return t==="select"&&o&&o.multiple!=null&&n.setAttribute("multiple",o.multiple),n},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,r,o,n,i){const s=r?r.previousSibling:e.lastChild;if(n&&(n===i||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),r),!(n===i||!(n=n.nextSibling)););else{aa.innerHTML=jc(o==="svg"?`<svg>${t}</svg>`:o==="mathml"?`<math>${t}</math>`:t);const l=aa.content;if(o==="svg"||o==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,r)}return[s?s.nextSibling:e.firstChild,r?r.previousSibling:e.lastChild]}},Wt="transition",Jr="animation",So=Symbol("_vtc"),Fc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ig=we({},lc,Fc),sg=t=>(t.displayName="Transition",t.props=ig,t),ag=sg((t,{slots:e})=>eg(of,lg(t),e)),hr=(t,e=[])=>{z(t)?t.forEach(r=>r(...e)):t&&t(...e)},la=t=>t?z(t)?t.some(e=>e.length>1):t.length>1:!1;function lg(t){const e={};for(const R in t)R in Fc||(e[R]=t[R]);if(t.css===!1)return e;const{name:r="v",type:o,duration:n,enterFromClass:i=`${r}-enter-from`,enterActiveClass:s=`${r}-enter-active`,enterToClass:l=`${r}-enter-to`,appearFromClass:a=i,appearActiveClass:c=s,appearToClass:d=l,leaveFromClass:u=`${r}-leave-from`,leaveActiveClass:f=`${r}-leave-active`,leaveToClass:h=`${r}-leave-to`}=t,v=cg(n),y=v&&v[0],$=v&&v[1],{onBeforeEnter:k,onEnter:x,onEnterCancelled:O,onLeave:b,onLeaveCancelled:A,onBeforeAppear:F=k,onAppear:Z=x,onAppearCancelled:de=O}=e,N=(R,X,ue,_e)=>{R._enterCancelled=_e,pr(R,X?d:l),pr(R,X?c:s),ue&&ue()},H=(R,X)=>{R._isLeaving=!1,pr(R,u),pr(R,h),pr(R,f),X&&X()},J=R=>(X,ue)=>{const _e=R?Z:x,fe=()=>N(X,R,ue);hr(_e,[X,fe]),ca(()=>{pr(X,R?a:i),Ct(X,R?d:l),la(_e)||da(X,o,y,fe)})};return we(e,{onBeforeEnter(R){hr(k,[R]),Ct(R,i),Ct(R,s)},onBeforeAppear(R){hr(F,[R]),Ct(R,a),Ct(R,c)},onEnter:J(!1),onAppear:J(!0),onLeave(R,X){R._isLeaving=!0;const ue=()=>H(R,X);Ct(R,u),R._enterCancelled?(Ct(R,f),ga(R)):(ga(R),Ct(R,f)),ca(()=>{R._isLeaving&&(pr(R,u),Ct(R,h),la(b)||da(R,o,$,ue))}),hr(b,[R,ue])},onEnterCancelled(R){N(R,!1,void 0,!0),hr(O,[R])},onAppearCancelled(R){N(R,!0,void 0,!0),hr(de,[R])},onLeaveCancelled(R){H(R),hr(A,[R])}})}function cg(t){if(t==null)return null;if(oe(t))return[gi(t.enter),gi(t.leave)];{const e=gi(t);return[e,e]}}function gi(t){return uu(t)}function Ct(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.add(r)),(t[So]||(t[So]=new Set)).add(e)}function pr(t,e){e.split(/\s+/).forEach(o=>o&&t.classList.remove(o));const r=t[So];r&&(r.delete(e),r.size||(t[So]=void 0))}function ca(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let dg=0;function da(t,e,r,o){const n=t._endId=++dg,i=()=>{n===t._endId&&o()};if(r!=null)return setTimeout(i,r);const{type:s,timeout:l,propCount:a}=ug(t,e);if(!s)return o();const c=s+"end";let d=0;const u=()=>{t.removeEventListener(c,f),i()},f=h=>{h.target===t&&++d>=a&&u()};setTimeout(()=>{d<a&&u()},l+1),t.addEventListener(c,f)}function ug(t,e){const r=window.getComputedStyle(t),o=v=>(r[v]||"").split(", "),n=o(`${Wt}Delay`),i=o(`${Wt}Duration`),s=ua(n,i),l=o(`${Jr}Delay`),a=o(`${Jr}Duration`),c=ua(l,a);let d=null,u=0,f=0;e===Wt?s>0&&(d=Wt,u=s,f=i.length):e===Jr?c>0&&(d=Jr,u=c,f=a.length):(u=Math.max(s,c),d=u>0?s>c?Wt:Jr:null,f=d?d===Wt?i.length:a.length:0);const h=d===Wt&&/\b(?:transform|all)(?:,|$)/.test(o(`${Wt}Property`).toString());return{type:d,timeout:u,propCount:f,hasTransform:h}}function ua(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((r,o)=>fa(r)+fa(t[o])))}function fa(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function ga(t){return(t?t.ownerDocument:document).body.offsetHeight}function fg(t,e,r){const o=t[So];o&&(e=(e?[e,...o]:[...o]).join(" ")),e==null?t.removeAttribute("class"):r?t.setAttribute("class",e):t.className=e}const ha=Symbol("_vod"),gg=Symbol("_vsh"),hg=Symbol(""),pg=/(?:^|;)\s*display\s*:/;function mg(t,e,r){const o=t.style,n=pe(r);let i=!1;if(r&&!n){if(e)if(pe(e))for(const s of e.split(";")){const l=s.slice(0,s.indexOf(":")).trim();r[l]==null&&Qr(o,l,"")}else for(const s in e)r[s]==null&&Qr(o,s,"");for(const s in r){s==="display"&&(i=!0);const l=r[s];l!=null?vg(t,s,!pe(e)&&e?e[s]:void 0,l)||Qr(o,s,l):Qr(o,s,"")}}else if(n){if(e!==r){const s=o[hg];s&&(r+=";"+s),o.cssText=r,i=pg.test(r)}}else e&&t.removeAttribute("style");ha in t&&(t[ha]=i?o.display:"",t[gg]&&(o.display="none"))}const sn=/\s*!important$/;function Qr(t,e,r){if(z(r))r.forEach(o=>Qr(t,e,o));else if(r==null&&(r=""),e.startsWith("--"))sn.test(r)?t.setProperty(e,r.replace(sn,""),"important"):t.setProperty(e,r);else{const o=bg(t,e);sn.test(r)?t.setProperty(Cr(o),r.replace(sn,""),"important"):t[o]=r}}const pa=["Webkit","Moz","ms"],hi={};function bg(t,e){const r=hi[e];if(r)return r;let o=De(e);if(o!=="filter"&&o in t)return hi[e]=o;o=Mn(o);for(let n=0;n<pa.length;n++){const i=pa[n]+o;if(i in t)return hi[e]=i}return e}function vg(t,e,r,o){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&pe(o)&&r===o}const ma="http://www.w3.org/1999/xlink";function ba(t,e,r,o,n,i=bu(e)){o&&e.startsWith("xlink:")?r==null?t.removeAttributeNS(ma,e.slice(6,e.length)):t.setAttributeNS(ma,e,r):r==null||i&&!Nl(r)?t.removeAttribute(e):t.setAttribute(e,i?"":at(r)?String(r):r)}function va(t,e,r,o,n){if(e==="innerHTML"||e==="textContent"){r!=null&&(t[e]=e==="innerHTML"?jc(r):r);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,a=r==null?t.type==="checkbox"?"on":"":String(r);(l!==a||!("_value"in t))&&(t.value=a),r==null&&t.removeAttribute(e),t._value=r;return}let s=!1;if(r===""||r==null){const l=typeof t[e];l==="boolean"?r=Nl(r):r==null&&l==="string"?(r="",s=!0):l==="number"&&(r=0,s=!0)}try{t[e]=r}catch{}s&&t.removeAttribute(n||e)}function yg(t,e,r,o){t.addEventListener(e,r,o)}function kg(t,e,r,o){t.removeEventListener(e,r,o)}const ya=Symbol("_vei");function wg(t,e,r,o,n=null){const i=t[ya]||(t[ya]={}),s=i[e];if(o&&s)s.value=o;else{const[l,a]=Cg(e);if(o){const c=i[e]=Tg(o,n);yg(t,l,c,a)}else s&&(kg(t,l,s,a),i[e]=void 0)}}const _g=/(Once|Passive|Capture)$/,Sg=/^on:?(?:Once|Passive|Capture)$/;function Cg(t){let e,r;for(;(r=t.match(_g))&&!Sg.test(t);)e||(e={}),t=t.slice(0,t.length-r[1].length),e[r[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Cr(t.slice(2)),e]}let pi=0;const $g=Promise.resolve(),xg=()=>pi||($g.then(()=>pi=0),pi=Date.now());function Tg(t,e){const r=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=r.attached)return;const n=r.value;if(z(n)){const i=o.stopImmediatePropagation;o.stopImmediatePropagation=()=>{i.call(o),o._stopped=!0};const s=n.slice(),l=[o];for(let a=0;a<s.length&&!o._stopped;a++){const c=s[a];c&&Qe(c,e,5,l)}}else Qe(n,e,5,[o])};return r.value=t,r.attached=xg(),r}const ka=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ig=(t,e,r,o,n,i)=>{const s=n==="svg";e==="class"?fg(t,o,s):e==="style"?mg(t,r,o):Dn(e)?Ln(e)||wg(t,e,r,o,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Eg(t,e,o,s))?(va(t,e,o),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ba(t,e,o,s,i,e!=="value")):t._isVueCE&&(Pg(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!pe(o)))?va(t,De(e),o,i,e):(e==="true-value"?t._trueValue=o:e==="false-value"&&(t._falseValue=o),ba(t,e,o,s))};function Eg(t,e,r,o){if(o)return!!(e==="innerHTML"||e==="textContent"||e in t&&ka(e)&&j(r));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=t.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return ka(e)&&pe(r)?!1:e in t}function Pg(t,e){const r=t._def.props;if(!r)return!1;const o=De(e);return Array.isArray(r)?r.some(n=>De(n)===o):Object.keys(r).some(n=>De(n)===o)}const Rg=["ctrl","shift","alt","meta"],Og={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Rg.some(r=>t[`${r}Key`]&&!e.includes(r))},Ag=(t,e)=>{if(!t)return t;const r=t._withMods||(t._withMods={}),o=e.join(".");return r[o]||(r[o]=((n,...i)=>{for(let s=0;s<e.length;s++){const l=Og[e[s]];if(l&&l(n,e))return}return t(n,...i)}))},Bg=we({patchProp:Ig},ng);let wa;function Ng(){return wa||(wa=zf(Bg))}const Dg=((...t)=>{const e=Ng().createApp(...t),{mount:r}=e;return e.mount=o=>{const n=zg(o);if(!n)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const s=r(n,!1,Lg(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),s},e});function Lg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zg(t){return pe(t)?document.querySelector(t):t}var Mg=Object.defineProperty,_a=Object.getOwnPropertySymbols,jg=Object.prototype.hasOwnProperty,Fg=Object.prototype.propertyIsEnumerable,Sa=(t,e,r)=>e in t?Mg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ug=(t,e)=>{for(var r in e||(e={}))jg.call(e,r)&&Sa(t,r,e[r]);if(_a)for(var r of _a(e))Fg.call(e,r)&&Sa(t,r,e[r]);return t};function Xn(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Ss(t){return typeof t=="function"&&"call"in t&&"apply"in t}function ge(t){return!Xn(t)}function kt(t,e=!0){return t instanceof Object&&t.constructor===Object&&(e||Object.keys(t).length!==0)}function Uc(t={},e={}){let r=Ug({},t);return Object.keys(e).forEach(o=>{let n=o;kt(e[n])&&n in t&&kt(t[n])?r[n]=Uc(t[n],e[n]):r[n]=e[n]}),r}function Wg(...t){return t.reduce((e,r,o)=>o===0?r:Uc(e,r),{})}function Ye(t,...e){return Ss(t)?t(...e):t}function Ve(t,e=!0){return typeof t=="string"&&(e||t!=="")}function vt(t){return Ve(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Cs(t,e="",r={}){let o=vt(e).split("."),n=o.shift();if(n){if(kt(t)){let i=Object.keys(t).find(s=>vt(s)===n)||"";return Cs(Ye(t[i],r),o.join("."),r)}return}return Ye(t,r)}function Wc(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}function Vg(t){return ge(t)&&!isNaN(t)}function kr(t,e){if(e){let r=e.test(t);return e.lastIndex=0,r}return!1}function Hg(...t){return Wg(...t)}function co(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Kg(t){return Ve(t,!1)?t[0].toUpperCase()+t.slice(1):t}function Vc(t){return Ve(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function Hc(){let t=new Map;return{on(e,r){let o=t.get(e);return o?o.push(r):o=[r],t.set(e,o),this},off(e,r){let o=t.get(e);return o&&o.splice(o.indexOf(r)>>>0,1),this},emit(e,r){let o=t.get(e);o&&o.forEach(n=>{n(r)})},clear(){t.clear()}}}function Gg(t){if(t){let e=t.parentNode;return e&&e instanceof ShadowRoot&&e.host&&(e=e.host),e}return null}function qg(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Gg(t))}function Zn(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function zi(t,e={}){if(Zn(t)){let r=(o,n)=>{var i,s;let l=(i=t==null?void 0:t.$attrs)!=null&&i[o]?[(s=t==null?void 0:t.$attrs)==null?void 0:s[o]]:[];return[n].flat().reduce((a,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")a.push(c);else if(d==="object"){let u=Array.isArray(c)?r(o,c):Object.entries(c).map(([f,h])=>o==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);a=u.length?a.concat(u.filter(f=>!!f)):a}}return a},l)};Object.entries(e).forEach(([o,n])=>{if(n!=null){let i=o.match(/^on(.+)/);i?t.addEventListener(i[1].toLowerCase(),n):o==="p-bind"||o==="pBind"?zi(t,n):(n=o==="class"?[...new Set(r("class",n))].join(" ").trim():o==="style"?r("style",n).join(";").trim():n,(t.$attrs=t.$attrs||{})&&(t.$attrs[o]=n),t.setAttribute(o,n))}})}}function Yg(t,e){return Zn(t)?t.matches(e)?t:t.querySelector(e):null}function Jg(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Xg(t,e="",r){Zn(t)&&r!==null&&r!==void 0&&t.setAttribute(e,r)}var an={};function Zg(t="pui_id_"){return Object.hasOwn(an,t)||(an[t]=0),an[t]++,`${t}${an[t]}`}var Qg=Object.defineProperty,eh=Object.defineProperties,th=Object.getOwnPropertyDescriptors,En=Object.getOwnPropertySymbols,Kc=Object.prototype.hasOwnProperty,Gc=Object.prototype.propertyIsEnumerable,Ca=(t,e,r)=>e in t?Qg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,rt=(t,e)=>{for(var r in e||(e={}))Kc.call(e,r)&&Ca(t,r,e[r]);if(En)for(var r of En(e))Gc.call(e,r)&&Ca(t,r,e[r]);return t},mi=(t,e)=>eh(t,th(e)),$t=(t,e)=>{var r={};for(var o in t)Kc.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&En)for(var o of En(t))e.indexOf(o)<0&&Gc.call(t,o)&&(r[o]=t[o]);return r},rh=Hc(),$e=rh,Co=/{([^}]*)}/g,qc=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Yc=/var\([^)]+\)/g;function $a(t){return Ve(t)?t.replace(/[A-Z]/g,(e,r)=>r===0?e:"."+e.toLowerCase()).toLowerCase():t}function oh(t){return kt(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function nh(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Mi(t="",e=""){return nh(`${Ve(t,!1)&&Ve(e,!1)?`${t}-`:t}${e}`)}function Jc(t="",e=""){return`--${Mi(t,e)}`}function ih(t=""){let e=(t.match(/{/g)||[]).length,r=(t.match(/}/g)||[]).length;return(e+r)%2!==0}function Xc(t,e="",r="",o=[],n){if(Ve(t)){let i=t.trim();if(ih(i))return;if(kr(i,Co)){let s=i.replaceAll(Co,l=>{let a=l.replace(/{|}/g,"").split(".").filter(c=>!o.some(d=>kr(c,d)));return`var(${Jc(r,Vc(a.join("-")))}${ge(n)?`, ${n}`:""})`});return kr(s.replace(Yc,"0"),qc)?`calc(${s})`:s}return i}else if(Vg(t))return t}function sh(t,e,r){Ve(e,!1)&&t.push(`${e}:${r};`)}function Pr(t,e){return t?`${t}{${e}}`:""}function Zc(t,e){if(t.indexOf("dt(")===-1)return t;function r(s,l){let a=[],c=0,d="",u=null,f=0;for(;c<=s.length;){let h=s[c];if((h==='"'||h==="'"||h==="`")&&s[c-1]!=="\\"&&(u=u===h?null:h),!u&&(h==="("&&f++,h===")"&&f--,(h===","||c===s.length)&&f===0)){let v=d.trim();v.startsWith("dt(")?a.push(Zc(v,l)):a.push(o(v)),d="",c++;continue}h!==void 0&&(d+=h),c++}return a}function o(s){let l=s[0];if((l==='"'||l==="'"||l==="`")&&s[s.length-1]===l)return s.slice(1,-1);let a=Number(s);return isNaN(a)?s:a}let n=[],i=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")i.push(s),s+=2;else if(t[s]===")"&&i.length>0){let l=i.pop();i.length===0&&n.push([l,s])}if(!n.length)return t;for(let s=n.length-1;s>=0;s--){let[l,a]=n[s],c=t.slice(l+3,a),d=r(c,e),u=e(...d);t=t.slice(0,l)+u+t.slice(a+1)}return t}var wr=(...t)=>ah(ie.getTheme(),...t),ah=(t={},e,r,o)=>{if(e){let{variable:n,options:i}=ie.defaults||{},{prefix:s,transform:l}=(t==null?void 0:t.options)||i||{},a=kr(e,Co)?e:`{${e}}`;return o==="value"||Xn(o)&&l==="strict"?ie.getTokenValue(e):Xc(a,void 0,s,[n.excludedKeyRegex],r)}return""};function ln(t,...e){if(t instanceof Array){let r=t.reduce((o,n,i)=>{var s;return o+n+((s=Ye(e[i],{dt:wr}))!=null?s:"")},"");return Zc(r,wr)}return Ye(t,{dt:wr})}function lh(t,e={}){let r=ie.defaults.variable,{prefix:o=r.prefix,selector:n=r.selector,excludedKeyRegex:i=r.excludedKeyRegex}=e,s=[],l=[],a=[{node:t,path:o}];for(;a.length;){let{node:d,path:u}=a.pop();for(let f in d){let h=d[f],v=oh(h),y=kr(f,i)?Mi(u):Mi(u,Vc(f));if(kt(v))a.push({node:v,path:y});else{let $=Jc(y),k=Xc(v,y,o,[i]);sh(l,$,k);let x=y;o&&x.startsWith(o+"-")&&(x=x.slice(o.length+1)),s.push(x.replace(/-/g,"."))}}}let c=l.join("");return{value:l,tokens:s,declarations:c,css:Pr(n,c)}}var et={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let e=Object.keys(this.rules).filter(r=>r!=="custom").map(r=>this.rules[r]);return[t].flat().map(r=>{var o;return(o=e.map(n=>n.resolve(r)).find(n=>n.matched))!=null?o:this.rules.custom.resolve(r)})}},_toVariables(t,e){return lh(t,{prefix:e==null?void 0:e.prefix})},getCommon({name:t="",theme:e={},params:r,set:o,defaults:n}){var i,s,l,a,c,d,u;let{preset:f,options:h}=e,v,y,$,k,x,O,b;if(ge(f)&&h.transform!=="strict"){let{primitive:A,semantic:F,extend:Z}=f,de=F||{},{colorScheme:N}=de,H=$t(de,["colorScheme"]),J=Z||{},{colorScheme:R}=J,X=$t(J,["colorScheme"]),ue=N||{},{dark:_e}=ue,fe=$t(ue,["dark"]),Q=R||{},{dark:G}=Q,ze=$t(Q,["dark"]),Me=ge(A)?this._toVariables({primitive:A},h):{},ye=ge(H)?this._toVariables({semantic:H},h):{},ke=ge(fe)?this._toVariables({light:fe},h):{},dr=ge(_e)?this._toVariables({dark:_e},h):{},Ft=ge(X)?this._toVariables({semantic:X},h):{},en=ge(ze)?this._toVariables({light:ze},h):{},Ut=ge(G)?this._toVariables({dark:G},h):{},[xr,Kr]=[(i=Me.declarations)!=null?i:"",Me.tokens],[tn,ur]=[(s=ye.declarations)!=null?s:"",ye.tokens||[]],[Ls,g]=[(l=ke.declarations)!=null?l:"",ke.tokens||[]],[p,m]=[(a=dr.declarations)!=null?a:"",dr.tokens||[]],[C,S]=[(c=Ft.declarations)!=null?c:"",Ft.tokens||[]],[w,E]=[(d=en.declarations)!=null?d:"",en.tokens||[]],[I,T]=[(u=Ut.declarations)!=null?u:"",Ut.tokens||[]];v=this.transformCSS(t,xr,"light","variable",h,o,n),y=Kr;let _=this.transformCSS(t,`${tn}${Ls}`,"light","variable",h,o,n),D=this.transformCSS(t,`${p}`,"dark","variable",h,o,n);$=`${_}${D}`,k=[...new Set([...ur,...g,...m])];let P=this.transformCSS(t,`${C}${w}color-scheme:light`,"light","variable",h,o,n),B=this.transformCSS(t,`${I}color-scheme:dark`,"dark","variable",h,o,n);x=`${P}${B}`,O=[...new Set([...S,...E,...T])],b=Ye(f.css,{dt:wr})}return{primitive:{css:v,tokens:y},semantic:{css:$,tokens:k},global:{css:x,tokens:O},style:b}},getPreset({name:t="",preset:e={},options:r,params:o,set:n,defaults:i,selector:s}){var l,a,c;let d,u,f;if(ge(e)&&r.transform!=="strict"){let h=t.replace("-directive",""),v=e,{colorScheme:y,extend:$,css:k}=v,x=$t(v,["colorScheme","extend","css"]),O=$||{},{colorScheme:b}=O,A=$t(O,["colorScheme"]),F=y||{},{dark:Z}=F,de=$t(F,["dark"]),N=b||{},{dark:H}=N,J=$t(N,["dark"]),R=ge(x)?this._toVariables({[h]:rt(rt({},x),A)},r):{},X=ge(de)?this._toVariables({[h]:rt(rt({},de),J)},r):{},ue=ge(Z)?this._toVariables({[h]:rt(rt({},Z),H)},r):{},[_e,fe]=[(l=R.declarations)!=null?l:"",R.tokens||[]],[Q,G]=[(a=X.declarations)!=null?a:"",X.tokens||[]],[ze,Me]=[(c=ue.declarations)!=null?c:"",ue.tokens||[]],ye=this.transformCSS(h,`${_e}${Q}`,"light","variable",r,n,i,s),ke=this.transformCSS(h,ze,"dark","variable",r,n,i,s);d=`${ye}${ke}`,u=[...new Set([...fe,...G,...Me])],f=Ye(k,{dt:wr})}return{css:d,tokens:u,style:f}},getPresetC({name:t="",theme:e={},params:r,set:o,defaults:n}){var i;let{preset:s,options:l}=e,a=(i=s==null?void 0:s.components)==null?void 0:i[t];return this.getPreset({name:t,preset:a,options:l,params:r,set:o,defaults:n})},getPresetD({name:t="",theme:e={},params:r,set:o,defaults:n}){var i,s;let l=t.replace("-directive",""),{preset:a,options:c}=e,d=((i=a==null?void 0:a.components)==null?void 0:i[l])||((s=a==null?void 0:a.directives)==null?void 0:s[l]);return this.getPreset({name:l,preset:d,options:c,params:r,set:o,defaults:n})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,e){var r;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?e.options.darkModeSelector:(r=t.darkModeSelector)!=null?r:e.options.darkModeSelector):[]},getLayerOrder(t,e={},r,o){let{cssLayer:n}=e;return n?`@layer ${Ye(n.order||n.name||"primeui",r)}`:""},getCommonStyleSheet({name:t="",theme:e={},params:r,props:o={},set:n,defaults:i}){let s=this.getCommon({name:t,theme:e,params:r,set:n,defaults:i}),l=Object.entries(o).reduce((a,[c,d])=>a.push(`${c}="${d}"`)&&a,[]).join(" ");return Object.entries(s||{}).reduce((a,[c,d])=>{if(kt(d)&&Object.hasOwn(d,"css")){let u=co(d.css),f=`${c}-variables`;a.push(`<style type="text/css" data-primevue-style-id="${f}" ${l}>${u}</style>`)}return a},[]).join("")},getStyleSheet({name:t="",theme:e={},params:r,props:o={},set:n,defaults:i}){var s;let l={name:t,theme:e,params:r,set:n,defaults:i},a=(s=t.includes("-directive")?this.getPresetD(l):this.getPresetC(l))==null?void 0:s.css,c=Object.entries(o).reduce((d,[u,f])=>d.push(`${u}="${f}"`)&&d,[]).join(" ");return a?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${co(a)}</style>`:""},createTokens(t={},e,r="",o="",n={}){let i=function(l,a={},c=[]){if(c.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:l,path:this.path,paths:a,value:void 0};c.push(this.path),a.name=this.path,a.binding||(a.binding={});let d=this.value;if(typeof this.value=="string"&&Co.test(this.value)){let u=this.value.trim().replace(Co,f=>{var h;let v=f.slice(1,-1),y=this.tokens[v];if(!y)return console.warn(`Token not found for path: ${v}`),"__UNRESOLVED__";let $=y.computed(l,a,c);return Array.isArray($)&&$.length===2?`light-dark(${$[0].value},${$[1].value})`:(h=$==null?void 0:$.value)!=null?h:"__UNRESOLVED__"});d=qc.test(u.replace(Yc,"0"))?`calc(${u})`:u}return Xn(a.binding)&&delete a.binding,c.pop(),{colorScheme:l,path:this.path,paths:a,value:d.includes("__UNRESOLVED__")?void 0:d}},s=(l,a,c)=>{Object.entries(l).forEach(([d,u])=>{let f=kr(d,e.variable.excludedKeyRegex)?a:a?`${a}.${$a(d)}`:$a(d),h=c?`${c}.${d}`:d;kt(u)?s(u,f,h):(n[f]||(n[f]={paths:[],computed:(v,y={},$=[])=>{if(n[f].paths.length===1)return n[f].paths[0].computed(n[f].paths[0].scheme,y.binding,$);if(v&&v!=="none")for(let k=0;k<n[f].paths.length;k++){let x=n[f].paths[k];if(x.scheme===v)return x.computed(v,y.binding,$)}return n[f].paths.map(k=>k.computed(k.scheme,y[k.scheme],$))}}),n[f].paths.push({path:h,value:u,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed:i,tokens:n}))})};return s(t,r,o),n},getTokenValue(t,e,r){var o;let n=(l=>l.split(".").filter(a=>!kr(a.toLowerCase(),r.variable.excludedKeyRegex)).join("."))(e),i=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,s=[(o=t[n])==null?void 0:o.computed(i)].flat().filter(l=>l);return s.length===1?s[0].value:s.reduce((l={},a)=>{let c=a,{colorScheme:d}=c,u=$t(c,["colorScheme"]);return l[d]=u,l},void 0)},getSelectorRule(t,e,r,o){return r==="class"||r==="attr"?Pr(ge(e)?`${t}${e},${t} ${e}`:t,o):Pr(t,Pr(e??":root,:host",o))},transformCSS(t,e,r,o,n={},i,s,l){if(ge(e)){let{cssLayer:a}=n;if(o!=="style"){let c=this.getColorSchemeOption(n,s);e=r==="dark"?c.reduce((d,{type:u,selector:f})=>(ge(f)&&(d+=f.includes("[CSS]")?f.replace("[CSS]",e):this.getSelectorRule(f,l,u,e)),d),""):Pr(l??":root,:host",e)}if(a){let c={name:"primeui"};kt(a)&&(c.name=Ye(a.name,{name:t,type:o})),ge(c.name)&&(e=Pr(`@layer ${c.name}`,e),i==null||i.layerNames(c.name))}return e}return""}},ie={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:e}=t;e&&(this._theme=mi(rt({},e),{options:rt(rt({},this.defaults.options),e.options)}),this._tokens=et.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),$e.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=mi(rt({},this.theme),{preset:t}),this._tokens=et.createTokens(t,this.defaults),this.clearLoadedStyleNames(),$e.emit("preset:change",t),$e.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=mi(rt({},this.theme),{options:t}),this.clearLoadedStyleNames(),$e.emit("options:change",t),$e.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return et.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",e){return et.getCommon({name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",e){let r={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return et.getPresetC(r)},getDirective(t="",e){let r={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return et.getPresetD(r)},getCustomPreset(t="",e,r,o){let n={name:t,preset:e,options:this.options,selector:r,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return et.getPreset(n)},getLayerOrderCSS(t=""){return et.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",e,r="style",o){return et.transformCSS(t,e,o,r,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",e,r={}){return et.getCommonStyleSheet({name:t,theme:this.theme,params:e,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,e,r={}){return et.getStyleSheet({name:t,theme:this.theme,params:e,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),$e.emit(`theme:${e}:load`,t),!this._loadingStyles.size&&$e.emit("theme:load"))}},Ie={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},ch=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;function $o(t){"@babel/helpers - typeof";return $o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$o(t)}function xa(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function Ta(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?xa(Object(r),!0).forEach(function(o){dh(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):xa(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function dh(t,e,r){return(e=uh(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function uh(t){var e=fh(t,"string");return $o(e)=="symbol"?e:e+""}function fh(t,e){if($o(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if($o(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function gh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;ko()&&ko().components?Gn(t):e?t():ec(t)}var hh=0;function ph(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=Xe(!1),o=Xe(t),n=Xe(null),i=Jg()?window.document:void 0,s=e.document,l=s===void 0?i:s,a=e.immediate,c=a===void 0?!0:a,d=e.manual,u=d===void 0?!1:d,f=e.name,h=f===void 0?"style_".concat(++hh):f,v=e.id,y=v===void 0?void 0:v,$=e.media,k=$===void 0?void 0:$,x=e.nonce,O=x===void 0?void 0:x,b=e.first,A=b===void 0?!1:b,F=e.onMounted,Z=F===void 0?void 0:F,de=e.onUpdated,N=de===void 0?void 0:de,H=e.onLoad,J=H===void 0?void 0:H,R=e.props,X=R===void 0?{}:R,ue=function(){},_e=function(G){var ze=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(l){var Me=Ta(Ta({},X),ze),ye=Me.name||h,ke=Me.id||y,dr=Me.nonce||O;n.value=l.querySelector('style[data-primevue-style-id="'.concat(ye,'"]'))||l.getElementById(ke)||l.createElement("style"),n.value.isConnected||(o.value=G||t,zi(n.value,{type:"text/css",id:ke,media:k,nonce:dr}),A?l.head.prepend(n.value):l.head.appendChild(n.value),Xg(n.value,"data-primevue-style-id",ye),zi(n.value,Me),n.value.onload=function(Ft){return J==null?void 0:J(Ft,{name:ye})},Z==null||Z(ye)),!r.value&&(ue=Zt(o,function(Ft){n.value.textContent=Ft,N==null||N(ye)},{immediate:!0}),r.value=!0)}},fe=function(){!l||!r.value||(ue(),qg(n.value)&&l.head.removeChild(n.value),r.value=!1,n.value=null)};return c&&!u&&gh(_e),{id:y,name:h,el:n,css:o,unload:fe,load:_e,isLoaded:yn(r)}}function xo(t){"@babel/helpers - typeof";return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xo(t)}var Ia,Ea,Pa,Ra;function Oa(t,e){return yh(t)||vh(t,e)||bh(t,e)||mh()}function mh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bh(t,e){if(t){if(typeof t=="string")return Aa(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Aa(t,e):void 0}}function Aa(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function vh(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,n,i,s,l=[],a=!0,c=!1;try{if(i=(r=r.call(t)).next,e!==0)for(;!(a=(o=i.call(r)).done)&&(l.push(o.value),l.length!==e);a=!0);}catch(d){c=!0,n=d}finally{try{if(!a&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(c)throw n}}return l}}function yh(t){if(Array.isArray(t))return t}function Ba(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function bi(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Ba(Object(r),!0).forEach(function(o){kh(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ba(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function kh(t,e,r){return(e=wh(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function wh(t){var e=_h(t,"string");return xo(e)=="symbol"?e:e+""}function _h(t,e){if(xo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(xo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function cn(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var Sh=function(e){var r=e.dt;return`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(r("scrollbar.width"),`;
}
`)},Ch={},$h={},re={name:"base",css:Sh,style:ch,classes:Ch,inlineStyles:$h,load:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(i){return i},n=o(ln(Ia||(Ia=cn(["",""])),e));return ge(n)?ph(co(n),bi({name:this.name},r)):{}},loadCSS:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.load(this.css,e)},loadStyle:function(){var e=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.load(this.style,r,function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return ie.transformCSS(r.name||e.name,"".concat(n).concat(ln(Ea||(Ea=cn(["",""])),o)))})},getCommonTheme:function(e){return ie.getCommon(this.name,e)},getComponentTheme:function(e){return ie.getComponent(this.name,e)},getDirectiveTheme:function(e){return ie.getDirective(this.name,e)},getPresetTheme:function(e,r,o){return ie.getCustomPreset(this.name,e,r,o)},getLayerOrderThemeCSS:function(){return ie.getLayerOrderCSS(this.name)},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var o=Ye(this.css,{dt:wr})||"",n=co(ln(Pa||(Pa=cn(["","",""])),o,e)),i=Object.entries(r).reduce(function(s,l){var a=Oa(l,2),c=a[0],d=a[1];return s.push("".concat(c,'="').concat(d,'"'))&&s},[]).join(" ");return ge(n)?'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(i,">").concat(n,"</style>"):""}return""},getCommonThemeStyleSheet:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ie.getCommonStyleSheet(this.name,e,r)},getThemeStyleSheet:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=[ie.getStyleSheet(this.name,e,r)];if(this.style){var n=this.name==="base"?"global-style":"".concat(this.name,"-style"),i=ln(Ra||(Ra=cn(["",""])),Ye(this.style,{dt:wr})),s=co(ie.transformCSS(n,i)),l=Object.entries(r).reduce(function(a,c){var d=Oa(c,2),u=d[0],f=d[1];return a.push("".concat(u,'="').concat(f,'"'))&&a},[]).join(" ");ge(s)&&o.push('<style type="text/css" data-primevue-style-id="'.concat(n,'" ').concat(l,">").concat(s,"</style>"))}return o.join("")},extend:function(e){return bi(bi({},this),{},{css:void 0,style:void 0},e)}},Qt=Hc();function To(t){"@babel/helpers - typeof";return To=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},To(t)}function Na(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function dn(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Na(Object(r),!0).forEach(function(o){xh(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Na(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function xh(t,e,r){return(e=Th(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Th(t){var e=Ih(t,"string");return To(e)=="symbol"?e:e+""}function Ih(t,e){if(To(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(To(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Eh={ripple:!1,inputStyle:null,inputVariant:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",fileChosenMessage:"{0} files",noFileChosenMessage:"No file chosen",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List"}},filterMatchModeOptions:{text:[Ie.STARTS_WITH,Ie.CONTAINS,Ie.NOT_CONTAINS,Ie.ENDS_WITH,Ie.EQUALS,Ie.NOT_EQUALS],numeric:[Ie.EQUALS,Ie.NOT_EQUALS,Ie.LESS_THAN,Ie.LESS_THAN_OR_EQUAL_TO,Ie.GREATER_THAN,Ie.GREATER_THAN_OR_EQUAL_TO],date:[Ie.DATE_IS,Ie.DATE_IS_NOT,Ie.DATE_BEFORE,Ie.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},theme:void 0,unstyled:!1,pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},csp:{nonce:void 0}},Ph=Symbol();function Rh(t,e){var r={config:Un(e)};return t.config.globalProperties.$primevue=r,t.provide(Ph,r),Oh(),Ah(t,r),r}var Rr=[];function Oh(){$e.clear(),Rr.forEach(function(t){return t==null?void 0:t()}),Rr=[]}function Ah(t,e){var r=Xe(!1),o=function(){var c;if(((c=e.config)===null||c===void 0?void 0:c.theme)!=="none"&&!ie.isStyleNameLoaded("common")){var d,u,f=((d=re.getCommonTheme)===null||d===void 0?void 0:d.call(re))||{},h=f.primitive,v=f.semantic,y=f.global,$=f.style,k={nonce:(u=e.config)===null||u===void 0||(u=u.csp)===null||u===void 0?void 0:u.nonce};re.load(h==null?void 0:h.css,dn({name:"primitive-variables"},k)),re.load(v==null?void 0:v.css,dn({name:"semantic-variables"},k)),re.load(y==null?void 0:y.css,dn({name:"global-variables"},k)),re.loadStyle(dn({name:"global-style"},k),$),ie.setLoadedStyleName("common")}};$e.on("theme:change",function(a){r.value||(t.config.globalProperties.$primevue.config.theme=a,r.value=!0)});var n=Zt(e.config,function(a,c){Qt.emit("config:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!0}),i=Zt(function(){return e.config.ripple},function(a,c){Qt.emit("config:ripple:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!0}),s=Zt(function(){return e.config.theme},function(a,c){r.value||ie.setTheme(a),e.config.unstyled||o(),r.value=!1,Qt.emit("config:theme:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!1}),l=Zt(function(){return e.config.unstyled},function(a,c){!a&&e.config.theme&&o(),Qt.emit("config:unstyled:change",{newValue:a,oldValue:c})},{immediate:!0,deep:!0});Rr.push(n),Rr.push(i),Rr.push(s),Rr.push(l)}var Bh={install:function(e,r){var o=Hg(Eh,r);Rh(e,o)}},Nh={transitionDuration:"{transition.duration}"},Dh={borderWidth:"0 0 1px 0",borderColor:"{content.border.color}"},Lh={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}",padding:"1rem",fontWeight:"600",fontSize:"{typography.font.size}",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{text.color}",activeHoverColor:"{text.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},zh={borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1rem 1rem 1rem"},Mh={root:Nh,panel:Dh,header:Lh,content:zh},jh={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},Fh={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Uh={padding:"{list.padding}",gap:"{list.gap}"},Wh={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",fontWeight:"{list.option.font.weight}",fontSize:"{list.option.font.size}"},Vh={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",fontSize:"{list.option.group.font.size}",padding:"{list.option.group.padding}"},Hh={width:"2.25rem",sm:{width:"1.75rem"},lg:{width:"2.625rem"},background:"light-dark({surface.100}, {surface.800})",hoverBackground:"light-dark({surface.200}, {surface.700})",activeBackground:"light-dark({surface.300}, {surface.600})",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"light-dark({surface.600}, {surface.300})",hoverColor:"light-dark({surface.700}, {surface.200})",activeColor:"light-dark({surface.800}, {surface.100})",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Kh={borderRadius:"{border.radius.sm}",focusBackground:"light-dark({surface.200}, {surface.700})",focusColor:"light-dark({surface.800}, {surface.0})"},Gh={padding:"{list.option.padding}"},qh={root:jh,overlay:Fh,list:Uh,option:Wh,optionGroup:Vh,dropdown:Hh,chip:Kh,emptyMessage:Gh},Yh={width:"1.75rem",height:"1.75rem",fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},Jh={size:"0.875rem"},Xh={borderColor:"{content.background}",offset:"-0.625rem"},Zh={width:"2.625rem",height:"2.625rem",fontSize:"1.25rem",icon:{size:"1.25rem"},group:{offset:"-0.875rem"}},Qh={width:"3.5rem",height:"3.5rem",fontSize:"1.75rem",icon:{size:"1.75rem"},group:{offset:"-1.25rem"}},ep={root:Yh,icon:Jh,group:Xh,lg:Zh,xl:Qh},tp={borderRadius:"{border.radius.md}",padding:"0 0.375rem",fontSize:"0.625rem",fontWeight:"700",minWidth:"1.25rem",height:"1.25rem"},rp={size:"0.5rem"},op={fontSize:"0.5rem",minWidth:"1.125rem",height:"1.125rem"},np={fontSize:"0.75rem",minWidth:"1.5rem",height:"1.5rem"},ip={fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},sp={background:"{primary.color}",color:"{primary.contrast.color}"},ap={background:"light-dark({surface.100}, {surface.800})",color:"light-dark({surface.600}, {surface.300})"},lp={background:"light-dark({green.500}, {green.400})",color:"light-dark({surface.0}, {green.950})"},cp={background:"light-dark({sky.500}, {sky.400})",color:"light-dark({surface.0}, {sky.950})"},dp={background:"light-dark({orange.500}, {orange.400})",color:"light-dark({surface.0}, {orange.950})"},up={background:"light-dark({red.500}, {red.400})",color:"light-dark({surface.0}, {red.950})"},fp={background:"light-dark({surface.950}, {surface.0})",color:"light-dark({surface.0}, {surface.950})"},gp={root:tp,dot:rp,sm:op,lg:np,xl:ip,primary:sp,secondary:ap,success:lp,info:cp,warn:dp,danger:up,contrast:fp},hp={borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},pp={typography:{lineHeight:"1.5",fontFamily:"inherit",fontWeight:"normal",fontSize:"0.875rem"},transitionDuration:"0.2s",focusRing:{width:"1px",style:"solid",color:"{primary.color}",offset:"2px",shadow:"none"},disabledOpacity:"0.6",iconSize:"0.875rem",anchorGutter:"2px",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}",color:"light-dark({primary.500}, {primary.400})",contrastColor:"light-dark(#ffffff, {surface.900})",hoverColor:"light-dark({primary.600}, {primary.300})",activeColor:"light-dark({primary.700}, {primary.200})"},formField:{fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}",paddingX:"0.625rem",paddingY:"0.375rem",sm:{fontSize:"0.75rem",paddingX:"0.5rem",paddingY:"0.25rem"},lg:{fontSize:"1rem",paddingX:"0.75rem",paddingY:"0.5rem"},borderRadius:"{border.radius.md}",focusRing:{width:"0",style:"none",color:"transparent",offset:"0",shadow:"none"},transitionDuration:"{transition.duration}",background:"light-dark({surface.0}, {surface.950})",disabledBackground:"light-dark({surface.200}, {surface.700})",filledBackground:"light-dark({surface.50}, {surface.800})",filledHoverBackground:"light-dark({surface.50}, {surface.800})",filledFocusBackground:"light-dark({surface.50}, {surface.800})",borderColor:"light-dark({surface.300}, {surface.600})",hoverBorderColor:"light-dark({surface.400}, {surface.500})",focusBorderColor:"{primary.color}",invalidBorderColor:"light-dark({red.400}, {red.300})",color:"light-dark({surface.700}, {surface.0})",disabledColor:"light-dark({surface.500}, {surface.400})",placeholderColor:"light-dark({surface.500}, {surface.400})",invalidPlaceholderColor:"light-dark({red.600}, {red.400})",floatLabelColor:"light-dark({surface.500}, {surface.400})",floatLabelFocusColor:"light-dark({primary.600}, {primary.color})",floatLabelActiveColor:"light-dark({surface.500}, {surface.400})",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"},list:{padding:"0.25rem 0.25rem",gap:"2px",header:{padding:"0.5rem 0.875rem 0.125rem 0.875rem"},option:{padding:"0.25rem 0.625rem",borderRadius:"{border.radius.sm}",fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}",transitionDuration:"0s",focusBackground:"light-dark({surface.100}, {surface.800})",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",selectedFontWeight:"{typography.font.weight}",icon:{color:"light-dark({surface.400}, {surface.500})",focusColor:"light-dark({surface.500}, {surface.400})"}},optionGroup:{padding:"0.25rem 0.625rem",fontWeight:"600",fontSize:"{typography.font.size}",background:"transparent",color:"{text.muted.color}"}},content:{borderRadius:"{border.radius.md}",background:"light-dark({surface.0}, {surface.900})",hoverBackground:"light-dark({surface.100}, {surface.800})",borderColor:"light-dark({surface.200}, {surface.700})",color:"{text.color}",hoverColor:"{text.hover.color}"},mask:{transitionDuration:"0.3s",background:"light-dark(rgba(0,0,0,0.4), rgba(0,0,0,0.6))",color:"{surface.200}"},navigation:{list:{padding:"0.25rem 0.25rem",gap:"2px"},item:{padding:"0.25rem 0.625rem",borderRadius:"{border.radius.sm}",gap:"0.5rem",focusBackground:"light-dark({surface.100}, {surface.800})",activeBackground:"light-dark({surface.100}, {surface.800})",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{size:"{icon.size}",color:"light-dark({surface.400}, {surface.500})",focusColor:"light-dark({surface.500}, {surface.400})",activeColor:"light-dark({surface.500}, {surface.400})"},label:{fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}"},transitionDuration:"0s"},submenuLabel:{padding:"0.25rem 0.625rem",fontWeight:"600",fontSize:"{typography.font.size}",background:"transparent",color:"{text.muted.color}"},submenuIcon:{size:"0.75rem",color:"light-dark({surface.400}, {surface.500})",focusColor:"light-dark({surface.500}, {surface.400})",activeColor:"light-dark({surface.500}, {surface.400})"}},overlay:{select:{borderRadius:"{border.radius.md}",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",background:"light-dark({surface.0}, {surface.900})",borderColor:"light-dark({surface.200}, {surface.700})",color:"{text.color}"},popover:{borderRadius:"{border.radius.md}",padding:"0.625rem",shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",background:"light-dark({surface.0}, {surface.900})",borderColor:"light-dark({surface.200}, {surface.700})",color:"{text.color}"},modal:{borderRadius:"{border.radius.xl}",padding:"1.125rem",shadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",background:"light-dark({surface.0}, {surface.900})",borderColor:"light-dark({surface.200}, {surface.700})",color:"{text.color}"},navigation:{shadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"}},surface:{0:"#ffffff",50:"light-dark({slate.50}, {zinc.50})",100:"light-dark({slate.100}, {zinc.100})",200:"light-dark({slate.200}, {zinc.200})",300:"light-dark({slate.300}, {zinc.300})",400:"light-dark({slate.400}, {zinc.400})",500:"light-dark({slate.500}, {zinc.500})",600:"light-dark({slate.600}, {zinc.600})",700:"light-dark({slate.700}, {zinc.700})",800:"light-dark({slate.800}, {zinc.800})",900:"light-dark({slate.900}, {zinc.900})",950:"light-dark({slate.950}, {zinc.950})"},highlight:{background:"light-dark({primary.50}, color-mix(in srgb, {primary.400}, transparent 84%))",focusBackground:"light-dark({primary.100}, color-mix(in srgb, {primary.400}, transparent 76%))",color:"light-dark({primary.700}, rgba(255,255,255,.87))",focusColor:"light-dark({primary.800}, rgba(255,255,255,.87))"},text:{color:"light-dark({surface.700}, {surface.0})",hoverColor:"light-dark({surface.800}, {surface.0})",mutedColor:"light-dark({surface.500}, {surface.400})",hoverMutedColor:"light-dark({surface.600}, {surface.300})"}},mp={primitive:hp,semantic:pp},bp={borderRadius:"{content.border.radius}"},vp={root:bp},yp={padding:"0.875rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},kp={color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}",size:"{navigation.item.icon.size}"},label:{fontWeight:"{navigation.item.label.font.weight}",fontSize:"{navigation.item.label.font.size}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},wp={color:"{navigation.item.icon.color}"},_p={root:yp,item:kp,separator:wp},Sp={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",iconOnlyWidth:"2.25rem",fontSize:"{form.field.font.size}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"1.75rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"2.625rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}",primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"light-dark({surface.100}, {surface.800})",hoverBackground:"light-dark({surface.200}, {surface.700})",activeBackground:"light-dark({surface.300}, {surface.600})",borderColor:"light-dark({surface.100}, {surface.800})",hoverBorderColor:"light-dark({surface.200}, {surface.700})",activeBorderColor:"light-dark({surface.300}, {surface.600})",color:"light-dark({surface.600}, {surface.300})",hoverColor:"light-dark({surface.700}, {surface.200})",activeColor:"light-dark({surface.800}, {surface.100})",focusRing:{color:"light-dark({surface.600}, {surface.300})",shadow:"none"}},info:{background:"light-dark({sky.500}, {sky.400})",hoverBackground:"light-dark({sky.600}, {sky.300})",activeBackground:"light-dark({sky.700}, {sky.200})",borderColor:"light-dark({sky.500}, {sky.400})",hoverBorderColor:"light-dark({sky.600}, {sky.300})",activeBorderColor:"light-dark({sky.700}, {sky.200})",color:"light-dark(#ffffff, {sky.950})",hoverColor:"light-dark(#ffffff, {sky.950})",activeColor:"light-dark(#ffffff, {sky.950})",focusRing:{color:"light-dark({sky.500}, {sky.400})",shadow:"none"}},success:{background:"light-dark({green.500}, {green.400})",hoverBackground:"light-dark({green.600}, {green.300})",activeBackground:"light-dark({green.700}, {green.200})",borderColor:"light-dark({green.500}, {green.400})",hoverBorderColor:"light-dark({green.600}, {green.300})",activeBorderColor:"light-dark({green.700}, {green.200})",color:"light-dark(#ffffff, {green.950})",hoverColor:"light-dark(#ffffff, {green.950})",activeColor:"light-dark(#ffffff, {green.950})",focusRing:{color:"light-dark({green.500}, {green.400})",shadow:"none"}},warn:{background:"light-dark({orange.500}, {orange.400})",hoverBackground:"light-dark({orange.600}, {orange.300})",activeBackground:"light-dark({orange.700}, {orange.200})",borderColor:"light-dark({orange.500}, {orange.400})",hoverBorderColor:"light-dark({orange.600}, {orange.300})",activeBorderColor:"light-dark({orange.700}, {orange.200})",color:"light-dark(#ffffff, {orange.950})",hoverColor:"light-dark(#ffffff, {orange.950})",activeColor:"light-dark(#ffffff, {orange.950})",focusRing:{color:"light-dark({orange.500}, {orange.400})",shadow:"none"}},help:{background:"light-dark({purple.500}, {purple.400})",hoverBackground:"light-dark({purple.600}, {purple.300})",activeBackground:"light-dark({purple.700}, {purple.200})",borderColor:"light-dark({purple.500}, {purple.400})",hoverBorderColor:"light-dark({purple.600}, {purple.300})",activeBorderColor:"light-dark({purple.700}, {purple.200})",color:"light-dark(#ffffff, {purple.950})",hoverColor:"light-dark(#ffffff, {purple.950})",activeColor:"light-dark(#ffffff, {purple.950})",focusRing:{color:"light-dark({purple.500}, {purple.400})",shadow:"none"}},danger:{background:"light-dark({red.500}, {red.400})",hoverBackground:"light-dark({red.600}, {red.300})",activeBackground:"light-dark({red.700}, {red.200})",borderColor:"light-dark({red.500}, {red.400})",hoverBorderColor:"light-dark({red.600}, {red.300})",activeBorderColor:"light-dark({red.700}, {red.200})",color:"light-dark(#ffffff, {red.950})",hoverColor:"light-dark(#ffffff, {red.950})",activeColor:"light-dark(#ffffff, {red.950})",focusRing:{color:"light-dark({red.500}, {red.400})",shadow:"none"}},contrast:{background:"light-dark({surface.950}, {surface.0})",hoverBackground:"light-dark({surface.900}, {surface.100})",activeBackground:"light-dark({surface.800}, {surface.200})",borderColor:"light-dark({surface.950}, {surface.0})",hoverBorderColor:"light-dark({surface.900}, {surface.100})",activeBorderColor:"light-dark({surface.800}, {surface.200})",color:"light-dark({surface.0}, {surface.950})",hoverColor:"light-dark({surface.0}, {surface.950})",activeColor:"light-dark({surface.0}, {surface.950})",focusRing:{color:"light-dark({surface.950}, {surface.0})",shadow:"none"}}},Cp={primary:{hoverBackground:"light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))",activeBackground:"light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))",borderColor:"light-dark({primary.200}, {primary.700})",color:"{primary.color}"},secondary:{hoverBackground:"light-dark({surface.50}, rgba(255,255,255,0.04))",activeBackground:"light-dark({surface.100}, rgba(255,255,255,0.16))",borderColor:"light-dark({surface.200}, {surface.700})",color:"light-dark({surface.500}, {surface.400})"},success:{hoverBackground:"light-dark({green.50}, color-mix(in srgb, {green.400}, transparent 96%))",activeBackground:"light-dark({green.100}, color-mix(in srgb, {green.400}, transparent 84%))",borderColor:"light-dark({green.200}, {green.700})",color:"light-dark({green.500}, {green.400})"},info:{hoverBackground:"light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))",activeBackground:"light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))",borderColor:"light-dark({sky.200}, {sky.700})",color:"light-dark({sky.500}, {sky.400})"},warn:{hoverBackground:"light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))",activeBackground:"light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))",borderColor:"light-dark({orange.200}, {orange.700})",color:"light-dark({orange.500}, {orange.400})"},help:{hoverBackground:"light-dark({purple.50}, color-mix(in srgb, {purple.400}, transparent 96%))",activeBackground:"light-dark({purple.100}, color-mix(in srgb, {purple.400}, transparent 84%))",borderColor:"light-dark({purple.200}, {purple.700})",color:"light-dark({purple.500}, {purple.400})"},danger:{hoverBackground:"light-dark({red.50}, color-mix(in srgb, {red.400}, transparent 96%))",activeBackground:"light-dark({red.100}, color-mix(in srgb, {red.400}, transparent 84%))",borderColor:"light-dark({red.200}, {red.700})",color:"light-dark({red.500}, {red.400})"},contrast:{hoverBackground:"light-dark({surface.50}, {surface.800})",activeBackground:"light-dark({surface.100}, {surface.700})",borderColor:"light-dark({surface.700}, {surface.500})",color:"light-dark({surface.950}, {surface.0})"},plain:{hoverBackground:"light-dark({surface.50}, {surface.800})",activeBackground:"light-dark({surface.100}, {surface.700})",borderColor:"light-dark({surface.200}, {surface.600})",color:"light-dark({surface.700}, {surface.0})"}},$p={primary:{hoverBackground:"light-dark({primary.50}, color-mix(in srgb, {primary.color}, transparent 96%))",activeBackground:"light-dark({primary.100}, color-mix(in srgb, {primary.color}, transparent 84%))",color:"{primary.color}"},secondary:{hoverBackground:"light-dark({surface.50}, {surface.800})",activeBackground:"light-dark({surface.100}, {surface.700})",color:"light-dark({surface.500}, {surface.400})"},success:{hoverBackground:"light-dark({green.50}, color-mix(in srgb, {green.400}, transparent 96%))",activeBackground:"light-dark({green.100}, color-mix(in srgb, {green.400}, transparent 84%))",color:"light-dark({green.500}, {green.400})"},info:{hoverBackground:"light-dark({sky.50}, color-mix(in srgb, {sky.400}, transparent 96%))",activeBackground:"light-dark({sky.100}, color-mix(in srgb, {sky.400}, transparent 84%))",color:"light-dark({sky.500}, {sky.400})"},warn:{hoverBackground:"light-dark({orange.50}, color-mix(in srgb, {orange.400}, transparent 96%))",activeBackground:"light-dark({orange.100}, color-mix(in srgb, {orange.400}, transparent 84%))",color:"light-dark({orange.500}, {orange.400})"},help:{hoverBackground:"light-dark({purple.50}, color-mix(in srgb, {purple.400}, transparent 96%))",activeBackground:"light-dark({purple.100}, color-mix(in srgb, {purple.400}, transparent 84%))",color:"light-dark({purple.500}, {purple.400})"},danger:{hoverBackground:"light-dark({red.50}, color-mix(in srgb, {red.400}, transparent 96%))",activeBackground:"light-dark({red.100}, color-mix(in srgb, {red.400}, transparent 84%))",color:"light-dark({red.500}, {red.400})"},contrast:{hoverBackground:"light-dark({surface.50}, {surface.800})",activeBackground:"light-dark({surface.100}, {surface.700})",color:"light-dark({surface.950}, {surface.0})"},plain:{hoverBackground:"light-dark({surface.50}, {surface.800})",activeBackground:"light-dark({surface.100}, {surface.700})",color:"light-dark({surface.700}, {surface.0})"}},xp={color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},Tp={root:Sp,outlined:Cp,text:$p,link:xp},Ip={background:"{content.background}",borderRadius:"{border.radius.xl}",color:"{content.color}",shadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},Ep={padding:"1.125rem",gap:"0.5rem"},Pp={gap:"0.5rem"},Rp={fontSize:"1.125rem",fontWeight:"500"},Op={color:"{text.muted.color}",fontSize:"1rem",fontWeight:"{typography.font.weight}"},Ap={root:Ip,body:Ep,caption:Pp,title:Rp,subtitle:Op},Bp={transitionDuration:"{transition.duration}"},Np={gap:"0.25rem"},Dp={padding:"1rem",gap:"0.5rem"},Lp={width:"1.75rem",height:"0.5rem",borderRadius:"{content.border.radius}",background:"light-dark({surface.200}, {surface.700})",hoverBackground:"light-dark({surface.300}, {surface.600})",activeBackground:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},zp={root:Bp,content:Np,indicatorList:Dp,indicator:Lp},Mp={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"},fontWeight:"{form.field.font.weight}",fontSize:"{form.field.font.size}"},jp={width:"2.25rem",color:"{form.field.icon.color}"},Fp={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Up={padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},Wp={focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",selectedFontWeight:"{list.option.selected.font.weight}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.75rem"},fontWeight:"{list.option.font.weight}",fontSize:"{list.option.font.size}"},Vp={color:"{form.field.icon.color}"},Hp={root:Mp,dropdown:jp,overlay:Fp,list:Up,option:Wp,clearIcon:Vp},Kp={borderRadius:"{border.radius.sm}",width:"1.125rem",height:"1.125rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"0.875rem",height:"0.875rem"},lg:{width:"1.25rem",height:"1.25rem"}},Gp={size:"0.75rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.625rem"},lg:{size:"0.875rem"}},qp={root:Kp,icon:Gp},Yp={borderRadius:"1rem",paddingX:"0.625rem",paddingY:"0.375rem",gap:"0.375rem",transitionDuration:"{transition.duration}",background:"light-dark({surface.100}, {surface.800})",focusBackground:"light-dark({surface.200}, {surface.700})",color:"light-dark({surface.800}, {surface.0})"},Jp={width:"1.75rem",height:"1.75rem"},Xp={size:"0.875rem",color:"light-dark({surface.800}, {surface.0})"},Zp={fontWeight:"{typography.font.weight}",fontSize:"0.75rem"},Qp={size:"0.875rem",color:"light-dark({surface.800}, {surface.0})",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"}},em={root:Yp,image:Jp,icon:Xp,label:Zp,removeIcon:Qp},tm={transitionDuration:"{transition.duration}"},rm={width:"1.375rem",height:"1.375rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},om={shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}",background:"light-dark({surface.800}, {surface.900})",borderColor:"light-dark({surface.900}, {surface.700})"},nm={color:"{surface.0}"},im={root:tm,preview:rm,panel:om,handle:nm},sm={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",height:"25rem"},am={padding:"0.375rem 1.125rem",background:"{content.background}",borderColor:"{content.border.color}"},lm={padding:"0.375rem 0",fontSize:"1rem",fontWeight:"{typography.font.weight}",color:"{form.field.color}",placeholderColor:"{form.field.placeholder.color}"},cm={padding:"0.375rem"},dm={padding:"2rem 0",color:"{content.color}"},um={padding:"0.625rem 1.125rem",background:"{content.background}",borderColor:"{content.border.color}"},fm={root:sm,header:am,input:lm,list:cm,empty:dm,footer:um},gm={borderRadius:"{content.border.radius}"},hm={background:"{content.background}",size:"1px"},pm={size:"1.5rem",background:"{content.background}",borderRadius:"{content.border.radius}",focusRing:{width:"2px",style:"solid",color:"{content.background}",offset:"2px"},icon:{color:"{text.muted.color}",size:"{icon.size}"}},mm={root:gm,handle:hm,indicator:pm},bm={size:"1.5rem",color:"{overlay.modal.color}"},vm={gap:"0.875rem"},ym={color:"{content.color}",fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}"},km={icon:bm,content:vm,message:ym},wm={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.125rem"},_m={padding:"{overlay.popover.padding}",gap:"0.5rem"},Sm={size:"1.25rem",color:"{overlay.popover.color}"},Cm={color:"{content.color}",fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}"},$m={gap:"0.375rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"},xm={root:wm,content:_m,icon:Sm,message:Cm,footer:$m},Tm={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{navigation.item.transition.duration}"},Im={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},Em={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}",size:"{navigation.item.icon.size}"},label:{fontWeight:"{navigation.item.label.font.weight}",fontSize:"{navigation.item.label.font.size}"}},Pm={mobileIndent:"1rem"},Rm={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",fontSize:"{navigation.submenu.label.font.size}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},Om={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},Am={borderColor:"{content.border.color}"},Bm={root:Tm,list:Im,item:Em,submenu:Pm,submenuLabel:Rm,submenuIcon:Om,separator:Am},Nm=`
`,Dm={transitionDuration:"0s",borderColor:"light-dark({content.border.color}, {surface.800})"},Lm={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.5rem 0.875rem",sm:{padding:"0.125rem 0.375rem"},lg:{padding:"0.75rem 1.125rem"}},zm={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.875rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.125rem 0.375rem"},lg:{padding:"0.75rem 1.125rem"}},Mm={fontWeight:"600",fontSize:"{typography.font.size}"},jm={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",stripedBackground:"light-dark({surface.50}, {surface.950})",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Fm={borderColor:"{datatable.border.color}",padding:"0.5rem 0.875rem",fontWeight:"{typography.font.size}",fontSize:"{typography.font.size}",selectedBorderColor:"light-dark({primary.100}, {primary.900})",sm:{padding:"0.125rem 0.375rem"},lg:{padding:"0.75rem 1.125rem"}},Um={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.5rem 0.875rem",sm:{padding:"0.125rem 0.375rem"},lg:{padding:"0.75rem 1.125rem"}},Wm={fontWeight:"600",fontSize:"{typography.font.size}"},Vm={background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.5rem 0.875rem",sm:{padding:"0.125rem 0.375rem"},lg:{padding:"0.75rem 1.125rem"}},Hm={color:"{primary.color}"},Km={width:"0.5rem"},Gm={width:"1px",color:"{primary.color}"},qm={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.75rem"},Ym={size:"1.75rem"},Jm={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Xm={inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},Zm={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},Qm={borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},eb=`
    .p-datatable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,tb={root:Dm,header:Lm,headerCell:zm,columnTitle:Mm,row:jm,bodyCell:Fm,footerCell:Um,columnFooter:Wm,footer:Vm,dropPoint:Hm,columnResizer:Km,resizeIndicator:Gm,sortIcon:qm,loadingIcon:Ym,rowToggleButton:Jm,filter:Xm,paginatorTop:Zm,paginatorBottom:Qm,css:eb},rb={borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},ob={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.625rem 0.875rem",borderRadius:"0"},nb={background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},ib={background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.625rem 0.875rem",borderRadius:"0"},sb={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},ab={borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"},lb={root:rb,header:ob,content:nb,footer:ib,paginatorTop:sb,paginatorBottom:ab},cb={transitionDuration:"{transition.duration}"},db={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}"},ub={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},fb={gap:"0.5rem",fontWeight:"500",fontSize:"{typography.font.size}"},gb={width:"2.25rem",sm:{width:"1.75rem"},lg:{width:"2.625rem"},background:"light-dark({surface.100}, {surface.800})",hoverBackground:"light-dark({surface.200}, {surface.700})",activeBackground:"light-dark({surface.300}, {surface.600})",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"light-dark({surface.600}, {surface.300})",hoverColor:"light-dark({surface.700}, {surface.200})",activeColor:"light-dark({surface.800}, {surface.100})",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},hb={color:"{form.field.icon.color}"},pb={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",fontWeight:"500",fontSize:"{typography.font.size}"},mb={hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",fontWeight:"500",fontSize:"{typography.font.size}"},bb={borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},vb={margin:"0.5rem 0 0 0"},yb={padding:"0.25rem",fontWeight:"500",fontSize:"{typography.font.size}",color:"{content.color}"},kb={fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}",hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"1.75rem",height:"1.75rem",borderRadius:"50%",padding:"0.25rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},wb={margin:"0.5rem 0 0 0"},_b={padding:"0.25rem",borderRadius:"{content.border.radius}"},Sb={margin:"0.5rem 0 0 0"},Cb={padding:"0.25rem",borderRadius:"{content.border.radius}"},$b={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},xb={padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.125rem",color:"{content.color}",fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}"},Tb={background:"light-dark({surface.200}, {surface.700})",color:"light-dark({surface.900}, {surface.0})"},Ib={root:cb,panel:db,header:ub,title:fb,dropdown:gb,inputIcon:hb,selectMonth:pb,selectYear:mb,group:bb,dayView:vb,weekDay:yb,date:kb,monthView:wb,month:_b,yearView:Sb,year:Cb,buttonbar:$b,timePicker:xb,today:Tb},Eb={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},Pb={padding:"{overlay.modal.padding}",gap:"0.5rem"},Rb={fontSize:"1.125rem",fontWeight:"600"},Ob={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},Ab={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.375rem"},Bb={root:Eb,header:Pb,title:Rb,content:Ob,footer:Ab},Nb={borderColor:"{content.border.color}"},Db={background:"{content.background}",color:"{text.color}"},Lb={margin:"0.875rem 0",padding:"0 0.875rem",content:{padding:"0 0.375rem"}},zb={margin:"0 0.875rem",padding:"0.375rem 0",content:{padding:"0.375rem 0"}},Mb={root:Nb,content:Db,horizontal:Lb,vertical:zb},jb={background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},Fb={borderRadius:"{content.border.radius}",padding:"0.5rem",size:"2.625rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Ub={root:jb,item:Fb},Wb={background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},Vb={padding:"{overlay.modal.padding}"},Hb={fontSize:"1.125rem",fontWeight:"600"},Kb={padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},Gb={padding:"{overlay.modal.padding}"},qb={root:Wb,header:Vb,title:Hb,content:Kb,footer:Gb},Yb={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},Jb={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Xb={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},Zb={focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},Qb={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},e0={toolbar:Yb,toolbarItem:Jb,overlay:Xb,overlayOption:Zb,content:Qb},t0={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1rem 1rem 1rem",transitionDuration:"{transition.duration}"},r0={background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:".375rem 0.625rem",gap:"0.5rem",fontWeight:"600",fontSize:"{typography.font.size}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},o0={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},n0={padding:"0"},i0={root:t0,legend:r0,toggleIcon:o0,content:n0},s0={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},a0={background:"transparent",color:"{text.color}",padding:"1rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},l0={highlightBorderColor:"{primary.color}",padding:"0 1rem 1rem 1rem",gap:"0.875rem"},c0={padding:"0.875rem",gap:"0.875rem",borderColor:"{content.border.color}",info:{gap:"0.125rem"}},d0={color:"{text.color}",fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}"},u0={color:"{text.muted.color}",fontWeight:"{typography.font.weight}",fontSize:"0.75rem"},f0={gap:"0.5rem"},g0={height:"0.25rem"},h0={gap:"0.5rem"},p0={root:s0,header:a0,content:l0,file:c0,fileName:d0,fileSize:u0,fileList:f0,progressbar:g0,basic:h0},m0={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"{form.field.font.weight}",fontSize:"{form.field.font.size}",active:{fontSize:"0.625rem",fontWeight:"400"}},b0={active:{top:"-1.125rem"}},v0={input:{paddingTop:"1.125rem",paddingBottom:"{form.field.padding.y}"},active:{top:"{form.field.padding.y}"}},y0={borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}},k0={root:m0,over:b0,in:v0,on:y0},w0={borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},_0={background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"2.625rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},S0={size:"1.25rem"},C0={background:"{content.background}",padding:"0.875rem 0.25rem"},$0={size:"1.75rem",borderRadius:"{content.border.radius}",gutter:"0.5rem",hoverBackground:"light-dark({surface.100}, {surface.700})",color:"light-dark({surface.600}, {surface.400})",hoverColor:"light-dark({surface.700}, {surface.0})",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},x0={size:"0.875rem"},T0={background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"0.875rem"},I0={gap:"0.5rem",padding:"0.875rem"},E0={width:"0.875rem",height:"0.875rem",background:"light-dark({surface.200}, {surface.700})",hoverBackground:"light-dark({surface.300}, {surface.600})",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},P0={background:"rgba(0, 0, 0, 0.5)"},R0={background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},O0={size:"2.625rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},A0={size:"1.25rem"},B0={root:w0,navButton:_0,navIcon:S0,thumbnailsContent:C0,thumbnailNavButton:$0,thumbnailNavButtonIcon:x0,caption:T0,indicatorList:I0,indicatorButton:E0,insetIndicatorList:P0,insetIndicatorButton:R0,closeButton:O0,closeButtonIcon:A0},N0={background:"{surface.950}"},D0={padding:"0.75rem 1rem",background:"{surface.950}"},L0={padding:"0.25rem 0",background:"{surface.950}",borderColor:"{surface.800}"},z0={transitionDuration:"0.3s"},M0={size:"2.25rem",borderRadius:"50%",color:"{surface.400}",hoverBackground:"{surface.800}",hoverColor:"{surface.0}",disabledOpacity:"{disabled.opacity}",transitionDuration:"{transition.duration}",icon:{size:"1rem"}},j0={background:"color-mix(in srgb, {surface.800}, transparent 40%)",size:"2.25rem",borderRadius:"50%",color:"{surface.400}",hoverBackground:"{surface.800}",hoverColor:"{surface.0}",offset:"0.5rem",transitionDuration:"{transition.duration}",icon:{size:"1rem"}},F0={size:"5rem",padding:"0.25rem",background:"{surface.800}",borderRadius:"0.25rem",borderWidth:"3px",hoverBorderColor:"{surface.700}",activeBorderColor:"{primary.color}",activeScale:"0.85",transitionDuration:"{transition.duration}"},U0={padding:"0.25rem 0"},W0={backdrop:N0,header:D0,footer:L0,item:z0,action:M0,navigation:j0,thumbnail:F0,thumbnailContent:U0},V0={color:"{form.field.icon.color}"},H0={icon:V0},K0={color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"{form.field.padding.y}",fontWeight:"{form.field.font.weight}",fontSize:"0.625rem"},G0={paddingTop:"1.125rem",paddingBottom:"{form.field.padding.y}"},q0={root:K0,input:G0},Y0={transitionDuration:"{transition.duration}"},J0={icon:{size:"1.25rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},X0={position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},Z0={hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"2.625rem",iconSize:"1.25rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Q0={root:Y0,preview:J0,toolbar:X0,action:Z0},ev={size:"15px",hoverSize:"30px",background:"rgba(255,255,255,0.3)",hoverBackground:"rgba(255,255,255,0.3)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},tv={handle:ev},rv={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},ov={fontWeight:"500"},nv={size:"1rem"},iv={background:"light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))",borderColor:"light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))",color:"light-dark({blue.600}, {blue.500})",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},sv={background:"light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))",borderColor:"light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))",color:"light-dark({green.600}, {green.500})",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},av={background:"light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))",borderColor:"light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))",color:"light-dark({yellow.600}, {yellow.500})",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},lv={background:"light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))",borderColor:"light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))",color:"light-dark({red.600}, {red.500})",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},cv={background:"light-dark({surface.100}, {surface.800})",borderColor:"light-dark({surface.200}, {surface.700})",color:"light-dark({surface.600}, {surface.300})",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},dv={background:"light-dark({surface.900}, {surface.0})",borderColor:"light-dark({surface.950}, {surface.100})",color:"light-dark({surface.50}, {surface.950})",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"},uv={root:rv,text:ov,icon:nv,info:iv,success:sv,warn:av,error:lv,secondary:cv,contrast:dv},fv={padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},gv={hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"},hv={root:fv,display:gv},pv={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},mv={borderRadius:"{border.radius.sm}",focusBackground:"light-dark({surface.200}, {surface.700})",color:"light-dark({surface.800}, {surface.0})"},bv={root:pv,chip:mv},vv={borderColor:"{content.border.color}"},yv={borderRadius:"{content.border.radius}"},kv={borderRadius:"{content.border.radius}",size:"1rem"},wv={size:"1rem",borderColor:"#ffffff",borderWidth:"3px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)",transitionDuration:"{transition.duration}",focusRing:{borderWidth:"2px",borderColor:"#ffffff",outlineWidth:"2px",outlineColor:"rgba(255, 255, 255, 0.3)",outlineOffset:"2px"}},_v={color:"{surface.100}",background:"#ffffff",tileSize:"0.5rem"},Sv={size:"2.25rem",borderRadius:"{content.border.radius}"},Cv={root:vv,area:yv,slider:kv,handle:wv,transparencyGrid:_v,swatch:Sv},$v={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0 0.5rem",minWidth:"2.25rem",fontWeight:"{form.field.font.weight}",fontSize:"{form.field.font.size}"},xv={addon:$v},Tv={transitionDuration:"{transition.duration}"},Iv={width:"2.25rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}",background:"transparent",hoverBackground:"light-dark({surface.100}, {surface.800})",activeBackground:"light-dark({surface.200}, {surface.700})",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"light-dark({surface.500}, {surface.300})",activeColor:"light-dark({surface.600}, {surface.200})"},Ev={root:Tv,button:Iv},Pv={gap:"0.5rem"},Rv={width:"2.25rem",sm:{width:"1.75rem"},lg:{width:"2.625rem"}},Ov={root:Pv,input:Rv},Av={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",gap:"0.25rem"},Bv={borderRadius:"{form.field.border.radius}"},Nv={root:Av,item:Bv},Dv={fontSize:"{form.field.font.size}",fontWeight:"{form.field.font.weight}",background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Lv={root:Dv},zv={transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Mv={background:"{primary.color}"},jv={background:"{content.border.color}"},Fv={color:"{text.muted.color}",fontSize:"1.125rem",fontWeight:"normal"},Uv={root:zv,value:Mv,range:jv,text:Fv},Wv={gap:"0.375rem",fontSize:"{typography.font.size}",fontWeight:"500",textColor:"{text.color}",disabledOpacity:"{disabled.opacity}"},Vv={root:Wv},Hv={background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},Kv={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},Gv={fontWeight:"{list.option.font.weight}",fontSize:"{list.option.font.size}",focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",selectedFontWeight:"{list.option.selected.font.weight}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",stripedBackground:"light-dark({surface.50}, {surface.900})"},qv={background:"{list.option.group.background}",color:"{list.option.group.color}",padding:"{list.option.group.padding}",fontWeight:"{list.option.group.font.weight}",fontSize:"{list.option.group.font.size}"},Yv={color:"{list.option.color}",gutterStart:"-0.25rem",gutterEnd:"0.25rem"},Jv={padding:"{list.option.padding}"},Xv={root:Hv,list:Kv,option:Gv,optionGroup:qv,checkmark:Yv,emptyMessage:Jv},Zv={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.375rem 0.625rem",gap:"0.5rem"},transitionDuration:"{navigation.item.transition.duration}"},Qv={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},ey={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}",size:"{navigation.item.icon.size}"},label:{fontWeight:"{navigation.item.label.font.weight}",fontSize:"{navigation.item.label.font.size}"}},ty={padding:"0",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},ry={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},oy={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",fontSize:"{navigation.submenu.label.font.size}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},ny={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},iy={borderColor:"{content.border.color}"},sy={borderRadius:"50%",size:"1.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ay={root:Zv,baseItem:Qv,item:ey,overlay:ty,submenu:ry,submenuLabel:oy,submenuIcon:ny,separator:iy,mobileButton:sy},ly={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{navigation.item.transition.duration}"},cy={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},dy={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",size:"{navigation.item.icon.size}"},label:{fontWeight:"{navigation.item.label.font.weight}",fontSize:"{navigation.item.label.font.size}"}},uy={padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",fontSize:"{navigation.submenu.label.font.size}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},fy={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},gy={borderColor:"{content.border.color}"},hy={root:ly,list:cy,item:dy,submenuLabel:uy,submenuIcon:fy,separator:gy},py={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.375rem 0.625rem",transitionDuration:"{navigation.item.transition.duration}"},my={borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},by={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}",size:"{navigation.item.icon.size}"},label:{fontWeight:"{navigation.item.label.font.weight}",fontSize:"{navigation.item.label.font.size}"}},vy={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"0.875rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},yy={borderColor:"{content.border.color}"},ky={borderRadius:"50%",size:"1.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},wy={root:py,baseItem:my,item:by,submenu:vy,separator:yy,mobileButton:ky},_y={borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"{transition.duration}"},Sy={padding:"0.375rem 0.625rem",gap:"0.5rem",sm:{padding:"0.25rem 0.5rem"},lg:{padding:"0.5rem 0.75rem"}},Cy={fontSize:"{typography.font.size}",fontWeight:"500",sm:{fontSize:"0.75rem"},lg:{fontSize:"1rem"}},$y={size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},xy={width:"1.5rem",height:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},Ty={size:"0.875rem",sm:{size:"0.75rem"},lg:{size:"1rem"}},Iy={root:{borderWidth:"1px"}},Ey={content:{padding:"0"}},Py={background:"light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))",borderColor:"light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))",color:"light-dark({blue.600}, {blue.500})",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"light-dark({blue.100}, rgba(255, 255, 255, 0.05))",focusRing:{color:"light-dark({blue.600}, {blue.500})",shadow:"none"}},outlined:{color:"light-dark({blue.600}, {blue.500})",borderColor:"light-dark({blue.600}, {blue.500})"},simple:{color:"light-dark({blue.600}, {blue.500})"}},Ry={background:"light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))",borderColor:"light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))",color:"light-dark({green.600}, {green.500})",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"light-dark({green.100}, rgba(255, 255, 255, 0.05))",focusRing:{color:"light-dark({green.600}, {green.500})",shadow:"none"}},outlined:{color:"light-dark({green.600}, {green.500})",borderColor:"light-dark({green.600}, {green.500})"},simple:{color:"light-dark({green.600}, {green.500})"}},Oy={background:"light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))",borderColor:"light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))",color:"light-dark({yellow.600}, {yellow.500})",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"light-dark({yellow.100}, rgba(255, 255, 255, 0.05))",focusRing:{color:"light-dark({yellow.600}, {yellow.500})",shadow:"none"}},outlined:{color:"light-dark({yellow.600}, {yellow.500})",borderColor:"light-dark({yellow.600}, {yellow.500})"},simple:{color:"light-dark({yellow.600}, {yellow.500})"}},Ay={background:"light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))",borderColor:"light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))",color:"light-dark({red.600}, {red.500})",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"light-dark({red.100}, rgba(255, 255, 255, 0.05))",focusRing:{color:"light-dark({red.600}, {red.500})",shadow:"none"}},outlined:{color:"light-dark({red.600}, {red.500})",borderColor:"light-dark({red.600}, {red.500})"},simple:{color:"light-dark({red.600}, {red.500})"}},By={background:"light-dark({surface.100}, {surface.800})",borderColor:"light-dark({surface.200}, {surface.700})",color:"light-dark({surface.600}, {surface.300})",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"light-dark({surface.200}, {surface.700})",focusRing:{color:"light-dark({surface.600}, {surface.300})",shadow:"none"}},outlined:{color:"light-dark({surface.500}, {surface.400})",borderColor:"light-dark({surface.500}, {surface.400})"},simple:{color:"light-dark({surface.500}, {surface.400})"}},Ny={background:"light-dark({surface.900}, {surface.0})",borderColor:"light-dark({surface.950}, {surface.100})",color:"light-dark({surface.50}, {surface.950})",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"light-dark({surface.800}, {surface.100})",focusRing:{color:"light-dark({surface.50}, {surface.950})",shadow:"none"}},outlined:{color:"light-dark({surface.950}, {surface.0})",borderColor:"light-dark({surface.950}, {surface.0})"},simple:{color:"light-dark({surface.950}, {surface.0})"}},Dy={root:_y,content:Sy,text:Cy,icon:$y,closeButton:xy,closeIcon:Ty,outlined:Iy,simple:Ey,info:Py,success:Ry,warn:Oy,error:Ay,secondary:By,contrast:Ny},Ly={borderRadius:"{content.border.radius}",gap:"0.875rem"},zy={background:"{content.border.color}",size:"0.375rem"},My={gap:"0.375rem"},jy={size:"0.375rem"},Fy={fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}"},Uy={size:"0.875rem"},Wy={verticalGap:"0.375rem",horizontalGap:"0.875rem"},Vy={root:Ly,meters:zy,label:My,labelMarker:jy,labelText:Fy,labelIcon:Uy,labelList:Wy},Hy={fontSize:"{form.field.font.size}",fontWeight:"{form.field.font.weight}",background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},Ky={width:"2.25rem",color:"{form.field.icon.color}"},Gy={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},qy={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"0.5rem 0.5rem 0.125rem 0.875rem"}},Yy={fontSize:"{list.option.font.size}",fontWeight:"{list.option.font.weight}",focusBackground:"{list.option.focus.background}",selectedBackground:"transparent",selectedFocusBackground:"transparent",color:"{list.option.color}",focusColor:"{list.option.color}",selectedColor:"{list.option.color}",selectedFocusColor:"{list.option.color}",selectedFontWeight:"{list.option.selected.font.weight}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.5rem"},Jy={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",fontSize:"{list.option.group.font.size}",padding:"{list.option.group.padding}"},Xy={color:"{form.field.icon.color}"},Zy={borderRadius:"{border.radius.sm}"},Qy={padding:"{list.option.padding}"},ek={root:Hy,dropdown:Ky,overlay:Gy,list:qy,option:Yy,optionGroup:Jy,chip:Zy,clearIcon:Xy,emptyMessage:Qy},tk={padding:"0.375rem 0.625rem",gap:"0.25rem"},rk={padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",fontSize:"{navigation.item.label.font.size}",fontWeight:"500",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",focusBackground:"{navigation.item.focus.background}",activeColor:"{navigation.item.active.color}",activeBackground:"{navigation.item.active.background}",transitionDuration:"{navigation.item.transition.duration}"},ok={root:tk,baseItem:rk},nk={gap:"1rem"},ik={gap:"0.5rem"},sk={root:nk,controls:ik},ak={gutter:"0.625rem",transitionDuration:"{transition.duration}"},lk={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"0.625rem 0.875rem",toggleablePadding:"0.625rem 0.875rem 1.125rem 0.875rem",borderRadius:"{content.border.radius}",fontSize:"{typography.font.size}",fontWeight:"{typography.font.weight}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},ck={background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.25rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},icon:{size:"0.75rem"}},dk={color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"},uk={root:ak,node:lk,nodeToggleButton:ck,connector:dk},fk={outline:{width:"2px",color:"{content.background}"}},gk={root:fk},hk={padding:"0.375rem 0.875rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},pk={background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.25rem",height:"2.25rem",borderRadius:"50%",fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},mk={color:"{text.muted.color}",fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}"},bk={maxWidth:"2.25rem"},vk={root:hk,navButton:pk,currentPageReport:mk,jumpToPageInput:bk},yk={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},kk={background:"transparent",color:"{text.color}",padding:"1rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},wk={padding:"0.375rem 1rem"},_k={fontWeight:"600",fontSize:"{typography.font.size}"},Sk={padding:"0 1rem 1rem 1rem"},Ck={padding:"0 1rem 1rem 1rem"},$k={root:yk,header:kk,toggleableHeader:wk,title:_k,content:Sk,footer:Ck},xk={gap:"0.5rem",transitionDuration:"{navigation.item.transition.duration}"},Tk={background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"1px",color:"{content.color}",padding:"0.25rem 0.25rem",borderRadius:"{content.border.radius}",first:{borderWidth:"1px",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"1px",bottomBorderRadius:"{content.border.radius}"}},Ik={focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",size:"{navigation.item.icon.size}"},label:{fontWeight:"{navigation.item.label.font.weight}",fontSize:"{navigation.item.label.font.size}"}},Ek={indent:"1rem"},Pk={color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},Rk={root:xk,panel:Tk,item:Ik,submenu:Ek,submenuIcon:Pk},Ok={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"0.625rem"},Ak={color:"{form.field.icon.color}"},Bk={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},Nk={gap:"0.5rem"},Dk={fontSize:"{typography.font.size}",fontWeight:"{typography.font.weight}"},Lk={weakBackground:"light-dark({red.500}, {red.400})",mediumBackground:"light-dark({amber.500}, {amber.400})",strongBackground:"light-dark({green.500}, {green.400})"},zk={meter:Ok,icon:Ak,overlay:Bk,content:Nk,meterText:Dk,strength:Lk},Mk={gap:"1rem"},jk={gap:"0.5rem"},Fk={root:Mk,controls:jk},Uk={background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.125rem"},Wk={padding:"{overlay.popover.padding}"},Vk={root:Uk,content:Wk},Hk={background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1.125rem"},Kk={background:"{primary.color}"},Gk={color:"{primary.contrast.color}",fontSize:"0.625rem",fontWeight:"600"},qk={root:Hk,value:Kk,label:Gk},Yk={colorOne:"light-dark({red.500}, {red.400})",colorTwo:"light-dark({blue.500}, {blue.400})",colorThree:"light-dark({green.500}, {green.400})",colorFour:"light-dark({yellow.500}, {yellow.400})"},Jk={root:Yk},Xk={width:"1.125rem",height:"1.125rem",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.hover.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{width:"0.875rem",height:"0.875rem"},lg:{width:"1.25rem",height:"1.25rem"}},Zk={size:"0.625rem",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.5rem"},lg:{size:"0.75rem"}},Qk={root:Xk,icon:Zk},e1={gap:"0.25rem",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},t1={size:"1rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},r1={root:e1,icon:t1},o1={background:"light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.3))"},n1={root:o1},i1={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},s1={padding:"1rem"},a1={background:"transparent",margin:"0.25rem",size:"0.25rem",transitionDuration:"{transition.duration}"},l1={background:"{content.border.color}"},c1={fadeSize:"40px"},d1={root:i1,viewport:s1,scrollbar:a1,handle:l1,mask:c1},u1={transitionDuration:"{transition.duration}"},f1={size:"9px",borderRadius:"{border.radius.sm}",background:"light-dark({surface.100}, {surface.800})",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},g1={root:u1,bar:f1},h1={fontSize:"{form.field.font.size}",fontWeight:"{form.field.font.weight}",background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},p1={width:"2.25rem",color:"{form.field.icon.color}"},m1={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},b1={padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},v1={fontSize:"{list.option.font.size}",fontWeight:"{list.option.font.weight}",focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",selectedFontWeight:"{list.option.selected.font.weight}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},y1={background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",fontSize:"{list.option.group.font.size}",padding:"{list.option.group.padding}"},k1={color:"{form.field.icon.color}"},w1={color:"{list.option.color}",gutterStart:"-0.25rem",gutterEnd:"0.25rem"},_1={padding:"{list.option.padding}"},S1={root:h1,dropdown:p1,overlay:m1,list:b1,option:v1,optionGroup:y1,clearIcon:k1,checkmark:w1,emptyMessage:_1},C1={borderRadius:"{form.field.border.radius}",invalidBorderColor:"{form.field.invalid.border.color}"},$1={root:C1},x1={borderColor:"{content.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},T1={background:"light-dark({surface.50}, {surface.900})"},I1={padding:"0.5rem",gap:"0.5rem"},E1={padding:"0.5rem",gap:"0.5rem"},P1={background:"{content.background}",color:"{content.color}",floatingBorderRadius:"{content.border.radius}",floatingShadow:"0 1px 2px 0 rgb(0 0 0 / 0.05)"},R1={gap:"0.125rem"},O1={padding:"0.5rem"},A1={padding:"0.5rem"},B1={padding:"0 0.5rem",height:"2rem",borderRadius:"{content.border.radius}",fontSize:"0.75rem",fontWeight:"500",color:"{text.muted.color}"},N1={top:"0.875rem",right:"0.75rem",size:"1.25rem",borderRadius:"{content.border.radius}",color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",focusBackground:"{navigation.item.focus.background}",icon:{size:"{navigation.item.icon.size}"}},D1={gap:"{navigation.list.gap}"},L1={padding:"0.25rem 0.625rem",gap:"{navigation.item.gap}",height:"2rem",borderRadius:"{navigation.item.border.radius}",fontSize:"{navigation.item.label.font.size}",fontWeight:"{navigation.item.label.font.weight}",color:"{navigation.item.color}",focusBackground:"{navigation.item.focus.background}",focusColor:"{navigation.item.focus.color}",activeBackground:"{navigation.item.active.background}",activeColor:"{navigation.item.active.color}",iconOnlyWidth:"2rem",withActionPaddingEnd:"2rem",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",size:"{navigation.item.icon.size}"}},z1={top:"0.375rem",right:"0.25rem",width:"1.25rem",borderRadius:"{content.border.radius}",color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",focusBackground:"{navigation.item.focus.background}",icon:{size:"{navigation.item.icon.size}"}},M1={top:"0.375rem",right:"0.25rem",height:"1.25rem",minWidth:"1.25rem",borderRadius:"0.375rem",padding:"0 0.25rem",fontSize:"0.75rem",fontWeight:"500",background:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}"},j1={paddingBlock:"0.125rem",gap:"0.125rem",indentMargin:"0.875rem",indentPadding:"0.625rem",collapsibleIndent:"1.5rem",collapsibleTopMargin:"0.125rem",collapsibleBorderRadius:"0.375rem"},F1={padding:"{navigation.item.padding}",gap:"{navigation.item.gap}",height:"2rem",borderRadius:"{navigation.item.border.radius}",fontSize:"{navigation.item.label.font.size}",fontWeight:"{navigation.item.label.font.weight}",color:"{navigation.item.color}",focusBackground:"{navigation.item.focus.background}",focusColor:"{navigation.item.focus.color}",activeBackground:"{navigation.item.active.background}",activeColor:"{navigation.item.active.color}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",size:"{navigation.item.icon.size}"}},U1={background:"light-dark({surface.50}, {surface.900})",floatingBackground:"light-dark({surface.50}, {surface.900})",insetBackground:"light-dark({surface.0}, {surface.950})",margin:"0.5rem",borderRadius:"{content.border.radius}",shadow:"0 1px 2px 0 rgb(0 0 0 / 0.05)"},W1={root:x1,layout:T1,header:I1,footer:E1,content:R1,aside:O1,panel:P1,group:A1,groupLabel:B1,groupAction:N1,menu:D1,menuButton:L1,menuAction:z1,menuBadge:M1,menuSub:j1,menuSubButton:F1,main:U1},V1={borderRadius:"{content.border.radius}",background:"light-dark({surface.200}, rgba(255, 255, 255, 0.06))",animationBackground:"light-dark(rgba(255,255,255,0.4), rgba(255, 255, 255, 0.04))"},H1={root:V1},K1={transitionDuration:"{transition.duration}"},G1={background:"{content.border.color}",borderRadius:"{content.border.radius}",size:"3px"},q1={background:"{primary.color}"},Y1={width:"20px",height:"20px",borderRadius:"50%",background:"{content.border.color}",hoverBackground:"{content.border.color}",content:{borderRadius:"50%",background:"light-dark({surface.0}, {surface.950})",hoverBackground:"{content.background}",width:"16px",height:"16px",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},J1={root:K1,track:G1,range:q1,handle:Y1},X1={gap:"0.5rem",transitionDuration:"{transition.duration}"},Z1={root:X1},Q1={borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"},ew={root:Q1},tw={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},rw={background:"{content.border.color}"},ow={size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},nw={root:tw,gutter:rw,handle:ow},iw={transitionDuration:"{transition.duration}"},sw={background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.375rem",size:"2px"},aw={padding:"0.375rem",gap:"0.875rem"},lw={padding:"0",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},cw={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500",fontSize:"{typography.font.size}"},dw={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},uw={padding:"0.75rem 0.375rem 1rem 0.375rem"},fw={background:"{content.background}",color:"{content.color}",padding:"0",indent:"0.875rem"},gw={root:iw,separator:sw,step:aw,stepHeader:lw,stepTitle:cw,stepNumber:dw,steppanels:uw,steppanel:fw},hw={transitionDuration:"{transition.duration}"},pw={background:"{content.border.color}"},mw={borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},bw={color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},vw={background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"},yw={root:hw,separator:pw,itemLink:mw,itemLabel:bw,itemNumber:vw},kw={transitionDuration:"{transition.duration}"},ww={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},_w={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},Sw={color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Cw={height:"1px",bottom:"-1px",background:"{primary.color}"},$w={root:kw,tablist:ww,item:_w,itemIcon:Sw,activeBar:Cw},xw={transitionDuration:"{transition.duration}"},Tw={borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},Iw={background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0",borderColor:"transparent",hoverBorderColor:"transparent",activeBorderColor:"transparent",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"0.875rem 1rem",fontWeight:"600",fontSize:"{typography.font.size}",margin:"0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Ew={background:"{content.background}",color:"{content.color}",padding:"0.75rem 1rem 1rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"inset {focus.ring.shadow}"}},Pw={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"2.25rem",shadow:"0px 0px 10px 50px light-dark(rgba(255, 255, 255, 0.6), color-mix(in srgb, {content.background}, transparent 50%))",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},Rw={height:"1px",bottom:"0",background:"{primary.color}"},Ow={root:xw,tablist:Tw,tab:Iw,tabpanel:Ew,navButton:Pw,activeBar:Rw},Aw={transitionDuration:"{transition.duration}"},Bw={background:"{content.background}",borderColor:"{content.border.color}"},Nw={borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},Dw={background:"{content.background}",color:"{content.color}"},Lw={background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",shadow:"0px 0px 10px 50px light-dark(rgba(255, 255, 255, 0.6), color-mix(in srgb, {content.background}, transparent 50%))"},zw={root:Aw,tabList:Bw,tab:Nw,tabPanel:Dw,navButton:Lw},Mw={fontSize:"0.75rem",fontWeight:"700",padding:"0.125rem 0.375rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},jw={size:"0.625rem"},Fw={background:"light-dark({primary.100}, color-mix(in srgb, {primary.500}, transparent 84%))",color:"light-dark({primary.700}, {primary.300})"},Uw={background:"light-dark({surface.100}, {surface.800})",color:"light-dark({surface.600}, {surface.300})"},Ww={background:"light-dark({green.100}, color-mix(in srgb, {green.500}, transparent 84%))",color:"light-dark({green.700}, {green.300})"},Vw={background:"light-dark({sky.100}, color-mix(in srgb, {sky.500}, transparent 84%))",color:"light-dark({sky.700}, {sky.300})"},Hw={background:"light-dark({orange.100}, color-mix(in srgb, {orange.500}, transparent 84%))",color:"light-dark({orange.700}, {orange.300})"},Kw={background:"light-dark({red.100}, color-mix(in srgb, {red.500}, transparent 84%))",color:"light-dark({red.700}, {red.300})"},Gw={background:"light-dark({surface.950}, {surface.0})",color:"light-dark({surface.0}, {surface.950})"},qw={root:Mw,icon:jw,primary:Fw,secondary:Uw,success:Ww,info:Vw,warn:Hw,danger:Kw,contrast:Gw},Yw={background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"16rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}",fontWeight:"{typography.font.weight}",fontSize:"{typography.font.size}"},Jw={gap:"0.25rem"},Xw={margin:"2px 0"},Zw={root:Yw,prompt:Jw,commandResponse:Xw},Qw={fontSize:"{form.field.font.size}",fontWeight:"{form.field.font.weight}",background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},e_={root:Qw},t_={background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{navigation.item.transition.duration}"},r_={padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},o_={focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}",size:"{navigation.item.icon.size}"},label:{fontWeight:"{navigation.item.label.font.weight}",fontSize:"{navigation.item.label.font.size}"}},n_={mobileIndent:"0.875rem"},i_={size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},s_={borderColor:"{content.border.color}"},a_={root:t_,list:r_,item:o_,submenu:n_,submenuIcon:i_,separator:s_},l_={minHeight:"4.5rem"},c_={eventContent:{padding:"0.875rem 0"}},d_={eventContent:{padding:"0 0.875rem"}},u_={size:"1rem",borderRadius:"50%",borderWidth:"2px",background:"{content.background}",borderColor:"{content.border.color}",content:{borderRadius:"50%",size:"0.375rem",background:"{primary.color}",insetShadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}},f_={color:"{content.border.color}",size:"2px"},g_={event:l_,horizontal:c_,vertical:d_,eventMarker:u_,eventConnector:f_},h_={width:"22rem",borderRadius:"{content.border.radius}",borderWidth:"1px",transitionDuration:"0.3s",blur:"10px",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},p_={size:"1rem",margin:"1px 0 0 0"},m_={padding:"{overlay.popover.padding}",gap:"0.5rem"},b_={gap:"0.25rem"},v_={fontWeight:"500",fontSize:"{typography.font.size}"},y_={fontWeight:"500",fontSize:"0.75rem"},k_={width:"1.5rem",height:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},w_={size:"0.875rem"},__={background:"{content.background}",borderColor:"{content.border.color}",color:"{text.color}",detailColor:"{text.muted.color}",shadow:"{overlay.popover.shadow}",closeButton:{hoverBackground:"{content.hover.background}",focusRing:{color:"{focus.ring.color}",shadow:"none"}}},S_={background:"light-dark(color-mix(in srgb, {blue.50}, transparent 5%), color-mix(in srgb, {blue.500}, transparent 84%))",borderColor:"light-dark({blue.200}, color-mix(in srgb, {blue.700}, transparent 64%))",color:"light-dark({blue.600}, {blue.500})",detailColor:"light-dark({surface.700}, {surface.0})",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",closeButton:{hoverBackground:"light-dark({blue.100}, rgba(255, 255, 255, 0.05))",focusRing:{color:"light-dark({blue.600}, {blue.500})",shadow:"none"}}},C_={background:"light-dark(color-mix(in srgb, {green.50}, transparent 5%), color-mix(in srgb, {green.500}, transparent 84%))",borderColor:"light-dark({green.200}, color-mix(in srgb, {green.700}, transparent 64%))",color:"light-dark({green.600}, {green.500})",detailColor:"light-dark({surface.700}, {surface.0})",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",closeButton:{hoverBackground:"light-dark({green.100}, rgba(255, 255, 255, 0.05))",focusRing:{color:"light-dark({green.600}, {green.500})",shadow:"none"}}},$_={background:"light-dark(color-mix(in srgb, {yellow.50}, transparent 5%), color-mix(in srgb, {yellow.500}, transparent 84%))",borderColor:"light-dark({yellow.200}, color-mix(in srgb, {yellow.700}, transparent 64%))",color:"light-dark({yellow.600}, {yellow.500})",detailColor:"light-dark({surface.700}, {surface.0})",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",closeButton:{hoverBackground:"light-dark({yellow.100}, rgba(255, 255, 255, 0.05))",focusRing:{color:"light-dark({yellow.600}, {yellow.500})",shadow:"none"}}},x_={background:"light-dark(color-mix(in srgb, {red.50}, transparent 5%), color-mix(in srgb, {red.500}, transparent 84%))",borderColor:"light-dark({red.200}, color-mix(in srgb, {red.700}, transparent 64%))",color:"light-dark({red.600}, {red.500})",detailColor:"light-dark({surface.700}, {surface.0})",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",closeButton:{hoverBackground:"light-dark({red.100}, rgba(255, 255, 255, 0.05))",focusRing:{color:"light-dark({red.600}, {red.500})",shadow:"none"}}},T_={background:"light-dark({surface.100}, {surface.800})",borderColor:"light-dark({surface.200}, {surface.700})",color:"light-dark({surface.600}, {surface.300})",detailColor:"light-dark({surface.700}, {surface.0})",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",closeButton:{hoverBackground:"light-dark({surface.200}, {surface.700})",focusRing:{color:"light-dark({surface.600}, {surface.300})",shadow:"none"}}},I_={background:"light-dark({surface.900}, {surface.0})",borderColor:"light-dark({surface.950}, {surface.100})",color:"light-dark({surface.50}, {surface.950})",detailColor:"light-dark({surface.0}, {surface.950})",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",closeButton:{hoverBackground:"light-dark({surface.800}, {surface.100})",focusRing:{color:"light-dark({surface.50}, {surface.950})",shadow:"none"}}},E_={root:h_,icon:p_,content:m_,text:b_,summary:v_,detail:y_,closeButton:k_,closeIcon:w_,normal:__,info:S_,success:C_,warn:$_,error:x_,secondary:T_,contrast:I_},P_={padding:"0.25rem",borderRadius:"{content.border.radius}",gap:"0.5rem",fontWeight:"500",fontSize:"{form.field.font.size}",background:"light-dark({surface.100}, {surface.950})",checkedBackground:"light-dark({surface.100}, {surface.950})",hoverBackground:"light-dark({surface.100}, {surface.950})",borderColor:"light-dark({surface.100}, {surface.950})",color:"light-dark({surface.500}, {surface.400})",hoverColor:"light-dark({surface.700}, {surface.300})",checkedColor:"light-dark({surface.900}, {surface.0})",checkedBorderColor:"light-dark({surface.100}, {surface.950})",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.25rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.25rem"}},R_={color:"light-dark({surface.500}, {surface.400})",hoverColor:"light-dark({surface.700}, {surface.300})",checkedColor:"light-dark({surface.900}, {surface.0})",disabledColor:"{form.field.disabled.color}"},O_={padding:"0.125rem 0.625rem",borderRadius:"{content.border.radius}",checkedBackground:"light-dark({surface.0}, {surface.800})",checkedShadow:"0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",sm:{padding:"0.125rem 0.625rem"},lg:{padding:"0.125rem 0.625rem"}},A_={root:P_,icon:R_,content:O_},B_={width:"2.25rem",height:"1.375rem",borderRadius:"30px",gap:"0.25rem",shadow:"{form.field.shadow}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s",background:"light-dark({surface.300}, {surface.700})",disabledBackground:"light-dark({form.field.disabled.background}, {surface.600})",hoverBackground:"light-dark({surface.400}, {surface.600})",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.hover.color}"},N_={borderRadius:"50%",size:"0.875rem",background:"light-dark({surface.0}, {surface.400})",disabledBackground:"light-dark({form.field.disabled.color}, {surface.900})",hoverBackground:"light-dark({surface.0}, {surface.300})",checkedBackground:"light-dark({surface.0}, {surface.900})",checkedHoverBackground:"light-dark({surface.0}, {surface.900})",color:"light-dark({text.muted.color}, {surface.900})",hoverColor:"light-dark({text.color}, {surface.800})",checkedColor:"{primary.color}",checkedHoverColor:"{primary.hover.color}"},D_={root:B_,handle:N_},L_={background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.625rem"},z_={root:L_},M_={maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.375rem 0.625rem",borderRadius:"{overlay.popover.border.radius}",fontWeight:"{typography.font.weight}",fontSize:"0.75rem",background:"{surface.700}",color:"{surface.0}"},j_={root:M_},F_={background:"{content.background}",color:"{content.color}",padding:"0.875rem",gap:"2px",indent:"0.875rem",transitionDuration:"0s"},U_={padding:"0.25rem 0.5rem",borderRadius:"{content.border.radius}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.375rem"},W_={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},V_={fontWeight:"{typography.font.weight}",selectedFontWeight:"{list.option.selected.font.weight}",fontSize:"{typography.font.size}"},H_={borderRadius:"50%",size:"1.5rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},K_={size:"1.75rem"},G_={margin:"0 0 0.5rem 0"},q_=`
    .p-tree-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,Y_={root:F_,node:U_,nodeIcon:W_,nodeLabel:V_,nodeToggleButton:H_,loadingIcon:K_,filter:G_,css:q_},J_={fontSize:"{form.field.font.size}",fontWeight:"{form.field.font.weight}",background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},X_={width:"2.25rem",color:"{form.field.icon.color}"},Z_={background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},Q_={padding:"{list.padding}"},eS={padding:"{list.option.padding}"},tS={borderRadius:"{border.radius.sm}"},rS={color:"{form.field.icon.color}"},oS={root:J_,dropdown:X_,overlay:Z_,tree:Q_,emptyMessage:eS,chip:tS,clearIcon:rS},nS={transitionDuration:"0s",borderColor:"light-dark({content.border.color}, {surface.800})"},iS={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.5rem 0.875rem"},sS={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.5rem 0.875rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},aS={fontWeight:"600",fontSize:"{typography.font.size}"},lS={background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},cS={borderColor:"{treetable.border.color}",padding:"0.5rem 0.875rem",gap:"0.5rem",fontWeight:"{typography.font.size}",fontSize:"{typography.font.size}",selectedBorderColor:"light-dark({primary.100}, {primary.900})"},dS={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.5rem 0.875rem"},uS={fontWeight:"600",fontSize:"{typography.font.size}"},fS={background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.5rem 0.875rem"},gS={width:"0.5rem"},hS={width:"1px",color:"{primary.color}"},pS={color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.75rem"},mS={size:"1.75rem"},bS={hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},vS={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},yS={borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},kS=`
    .p-treetable-mask.p-overlay-mask {
        --px-mask-background: light-dark(rgba(255,255,255,0.5),rgba(0,0,0,0.3));
    }
`,wS={root:nS,header:iS,headerCell:sS,columnTitle:aS,row:lS,bodyCell:cS,footerCell:dS,columnFooter:uS,footer:fS,columnResizer:gS,resizeIndicator:hS,sortIcon:pS,loadingIcon:mS,nodeToggleButton:bS,paginatorTop:vS,paginatorBottom:yS,css:kS},_S={mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"1.75rem"}},SS={loader:_S},CS=Object.defineProperty,$S=Object.defineProperties,xS=Object.getOwnPropertyDescriptors,Da=Object.getOwnPropertySymbols,TS=Object.prototype.hasOwnProperty,IS=Object.prototype.propertyIsEnumerable,La=(t,e,r)=>e in t?CS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,za,ES=(za=((t,e)=>{for(var r in e||(e={}))TS.call(e,r)&&La(t,r,e[r]);if(Da)for(var r of Da(e))IS.call(e,r)&&La(t,r,e[r]);return t})({},mp),$S(za,xS({components:{accordion:Mh,autocomplete:qh,avatar:ep,badge:gp,blockui:vp,breadcrumb:_p,button:Tp,card:Ap,carousel:zp,cascadeselect:Hp,checkbox:qp,chip:em,colorpicker:im,commandmenu:fm,compare:mm,confirmdialog:km,confirmpopup:xm,contextmenu:Bm,datatable:tb,dataview:lb,datepicker:Ib,dialog:Bb,divider:Mb,dock:Ub,drawer:qb,editor:e0,fieldset:i0,fileupload:p0,floatlabel:k0,galleria:B0,gallery:W0,iconfield:H0,iftalabel:q0,image:Q0,imagecompare:tv,inlinemessage:uv,inplace:hv,inputchips:bv,inputcolor:Cv,inputgroup:xv,inputnumber:Ev,inputotp:Ov,inputtags:Nv,inputtext:Lv,knob:Uv,label:Vv,listbox:Xv,megamenu:ay,menu:hy,menubar:wy,message:Dy,metergroup:Vy,multiselect:ek,navigationmenu:ok,orderlist:sk,organizationchart:uk,overlaybadge:gk,paginator:vk,panel:$k,panelmenu:Rk,password:zk,picklist:Fk,popover:Vk,progressbar:qk,progressspinner:Jk,radiobutton:Qk,rating:r1,ripple:n1,scrollarea:d1,scrollpanel:g1,select:S1,selectbutton:$1,sidebar:W1,skeleton:H1,slider:J1,speeddial:Z1,splitbutton:ew,splitter:nw,stepper:gw,steps:yw,tabmenu:$w,tabs:Ow,tabview:zw,tag:qw,terminal:Zw,textarea:e_,tieredmenu:a_,timeline:g_,toast:E_,togglebutton:A_,toggleswitch:D_,toolbar:z_,tooltip:j_,tree:Y_,treeselect:oS,treetable:wS,virtualscroller:SS},css:Nm})));function tr(...t){if(t){let e=[];for(let r=0;r<t.length;r++){let o=t[r];if(!o)continue;let n=typeof o;if(n==="string"||n==="number")e.push(o);else if(n==="object"){let i=Array.isArray(o)?[tr(...o)]:Object.entries(o).map(([s,l])=>l?s:void 0);e=i.length?e.concat(i.filter(s=>!!s)):e}}return e.join(" ").trim()}}function PS(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}function RS(t,e){if(t&&e){let r=o=>{PS(t,o)||(t.classList?t.classList.add(o):t.className+=" "+o)};[e].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r))}}function vi(t,e){if(t&&e){let r=o=>{t.classList?t.classList.remove(o):t.className=t.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," ")};[e].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r))}}function Ma(t){return t?Math.abs(t.scrollLeft):0}function OS(t,e){return t instanceof HTMLElement?t.offsetWidth:0}function Qc(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function ed(t,e={}){if(Qc(t)){let r=(o,n)=>{var i,s;let l=(i=t==null?void 0:t.$attrs)!=null&&i[o]?[(s=t==null?void 0:t.$attrs)==null?void 0:s[o]]:[];return[n].flat().reduce((a,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")a.push(c);else if(d==="object"){let u=Array.isArray(c)?r(o,c):Object.entries(c).map(([f,h])=>o==="style"&&(h||h===0)?`${f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?f:void 0);a=u.length?a.concat(u.filter(f=>!!f)):a}}return a},l)};Object.entries(e).forEach(([o,n])=>{if(n!=null){let i=o.match(/^on(.+)/);i?t.addEventListener(i[1].toLowerCase(),n):o==="p-bind"||o==="pBind"?ed(t,n):(n=o==="class"?[...new Set(r("class",n))].join(" ").trim():o==="style"?r("style",n).join(";").trim():n,(t.$attrs=t.$attrs||{})&&(t.$attrs[o]=n),t.setAttribute(o,n))}})}}function AS(t,e={},...r){{let o=document.createElement(t);return ed(o,e),o.append(...r),o}}function BS(t,e){if(Qc(t)){let r=t.getAttribute(e);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}function ja(t){if(t){let e=t.offsetHeight,r=getComputedStyle(t);return e-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),e}return 0}function NS(t){if(t){let e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||Ma(document.documentElement)||Ma(document.body)||0)}}return{top:"auto",left:"auto"}}function DS(t,e){return t?t.offsetHeight:0}function Fa(t){if(t){let e=t.offsetWidth,r=getComputedStyle(t);return e-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),e}return 0}function $s(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function LS(t){return!$s(t)}function zS(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}var Gt={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}};function MS(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pc",e=nf();return"".concat(t).concat(e.replace("v-","").replaceAll("-","_"))}var Ua=re.extend({name:"common"});function Io(t){"@babel/helpers - typeof";return Io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Io(t)}function jS(t){return od(t)||FS(t)||rd(t)||td()}function FS(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Xr(t,e){return od(t)||US(t,e)||rd(t,e)||td()}function td(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rd(t,e){if(t){if(typeof t=="string")return ji(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ji(t,e):void 0}}function ji(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function US(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,n,i,s,l=[],a=!0,c=!1;try{if(i=(r=r.call(t)).next,e===0){if(Object(r)!==r)return;a=!1}else for(;!(a=(o=i.call(r)).done)&&(l.push(o.value),l.length!==e);a=!0);}catch(d){c=!0,n=d}finally{try{if(!a&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(c)throw n}}return l}}function od(t){if(Array.isArray(t))return t}function Wa(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function K(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Wa(Object(r),!0).forEach(function(o){eo(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Wa(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function eo(t,e,r){return(e=WS(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function WS(t){var e=VS(t,"string");return Io(e)=="symbol"?e:e+""}function VS(t,e){if(Io(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Io(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var sr={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){$e.off("theme:change",this._loadCoreStyles),e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e,r){var o=this;$e.off("theme:change",this._themeScopedListener),e?(this._loadScopedThemeStyles(e),this._themeScopedListener=function(){return o._loadScopedThemeStyles(e)},this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,uid:void 0,$attrSelector:void 0,beforeCreate:function(){var e,r,o,n,i,s,l,a,c,d,u,f=(e=this.pt)===null||e===void 0?void 0:e._usept,h=f?(r=this.pt)===null||r===void 0||(r=r.originalValue)===null||r===void 0?void 0:r[this.$.type.name]:void 0,v=f?(o=this.pt)===null||o===void 0||(o=o.value)===null||o===void 0?void 0:o[this.$.type.name]:this.pt;(n=v||h)===null||n===void 0||(n=n.hooks)===null||n===void 0||(i=n.onBeforeCreate)===null||i===void 0||i.call(n);var y=(s=this.$primevueConfig)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,$=y?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.originalValue:void 0,k=y?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(d=k||$)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(u=d.onBeforeCreate)===null||u===void 0||u.call(d),this.$attrSelector=MS(),this.uid=this.$attrs.id||this.$attrSelector.replace("pc","pv_id_")},created:function(){this._hook("onCreated")},beforeMount:function(){var e;this.rootEl=Yg(Zn(this.$el)?this.$el:(e=this.$el)===null||e===void 0?void 0:e.parentElement,"[".concat(this.$attrSelector,"]")),this.rootEl&&(this.rootEl.$pc=K({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var r=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),o=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));r==null||r(),o==null||o()}},_mergeProps:function(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return Ss(e)?e.apply(void 0,o):U.apply(void 0,o)},_load:function(){Gt.isStyleNameLoaded("base")||(re.loadCSS(this.$styleOptions),this._loadGlobalStyles(),Gt.setLoadedStyleName("base")),this._loadThemeStyles()},_loadStyles:function(){this._load(),this._themeChangeListener(this._load)},_loadCoreStyles:function(){var e,r;!Gt.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(r=this.$style)!==null&&r!==void 0&&r.name&&(Ua.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),Gt.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);ge(e)&&re.load(e,K({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,r;if(!(this.isUnstyled||this.$theme==="none")){if(!ie.isStyleNameLoaded("common")){var o,n,i=((o=this.$style)===null||o===void 0||(n=o.getCommonTheme)===null||n===void 0?void 0:n.call(o))||{},s=i.primitive,l=i.semantic,a=i.global,c=i.style;re.load(s==null?void 0:s.css,K({name:"primitive-variables"},this.$styleOptions)),re.load(l==null?void 0:l.css,K({name:"semantic-variables"},this.$styleOptions)),re.load(a==null?void 0:a.css,K({name:"global-variables"},this.$styleOptions)),re.loadStyle(K({name:"global-style"},this.$styleOptions),c),ie.setLoadedStyleName("common")}if(!ie.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(r=this.$style)!==null&&r!==void 0&&r.name){var d,u,f,h,v=((d=this.$style)===null||d===void 0||(u=d.getComponentTheme)===null||u===void 0?void 0:u.call(d))||{},y=v.css,$=v.style;(f=this.$style)===null||f===void 0||f.load(y,K({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(h=this.$style)===null||h===void 0||h.loadStyle(K({name:"".concat(this.$style.name,"-style")},this.$styleOptions),$),ie.setLoadedStyleName(this.$style.name)}if(!ie.isStyleNameLoaded("layer-order")){var k,x,O=(k=this.$style)===null||k===void 0||(x=k.getLayerOrderThemeCSS)===null||x===void 0?void 0:x.call(k);re.load(O,K({name:"layer-order",first:!0},this.$styleOptions)),ie.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var r,o,n,i=((r=this.$style)===null||r===void 0||(o=r.getPresetTheme)===null||o===void 0?void 0:o.call(r,e,"[".concat(this.$attrSelector,"]")))||{},s=i.css,l=(n=this.$style)===null||n===void 0?void 0:n.load(s,K({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=l.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Gt.clearLoadedStyleNames(),$e.on("theme:change",e)},_removeThemeListeners:function(){$e.off("theme:change",this._loadCoreStyles),$e.off("theme:change",this._load),$e.off("theme:change",this._themeScopedListener)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var r;return this[e]||((r=this._getHostInstance(this))===null||r===void 0?void 0:r[e])},_getOptionValue:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return Cs(e,r,o)},_getPTValue:function(){var e,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(o)&&!!n[o.split(".")[0]],l=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},a=l.mergeSections,c=a===void 0?!0:a,d=l.mergeProps,u=d===void 0?!1:d,f=i?s?this._useGlobalPT(this._getPTClassValue,o,n):this._useDefaultPT(this._getPTClassValue,o,n):void 0,h=s?void 0:this._getPTSelf(r,this._getPTClassValue,o,K(K({},n),{},{global:f||{}})),v=this._getPTDatasets(o);return c||!c&&h?u?this._mergeProps(u,f,h,v):K(K(K({},f),h),v):K(K({},h),v)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return U(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(o)),this._usePT.apply(this,[this.$_attrsPT].concat(o)))},_getPTDatasets:function(){var e,r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n="data-pc-",i=o==="root"&&ge((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return o!=="transition"&&K(K({},o==="root"&&K(K(eo({},"".concat(n,"name"),vt(i?(r=this.pt)===null||r===void 0?void 0:r["data-pc-section"]:this.$.type.name)),i&&eo({},"".concat(n,"extend"),vt(this.$.type.name))),{},eo({},"".concat(this.$attrSelector),""))),{},eo({},"".concat(n,"section"),vt(o)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return Ve(e)||Wc(e)?{class:e}:e},_getPT:function(e){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=function(l){var a,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=n?n(l):l,u=vt(o),f=vt(r.$name);return(a=c?u!==f?d==null?void 0:d[u]:void 0:d==null?void 0:d[u])!==null&&a!==void 0?a:d};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)},_usePT:function(e,r,o,n){var i=function(y){return r(y,o,n)};if(e!=null&&e.hasOwnProperty("_usept")){var s,l=e._usept||((s=this.$primevueConfig)===null||s===void 0?void 0:s.ptOptions)||{},a=l.mergeSections,c=a===void 0?!0:a,d=l.mergeProps,u=d===void 0?!1:d,f=i(e.originalValue),h=i(e.value);return f===void 0&&h===void 0?void 0:Ve(h)?h:Ve(f)?f:c||!c&&h?u?this._mergeProps(u,f,h):K(K({},f),h):h}return i(e)},_useGlobalPT:function(e,r,o){return this._usePT(this.globalPT,e,r,o)},_useDefaultPT:function(e,r,o){return this._usePT(this.defaultPT,e,r,o)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,K(K({},this.$params),r))},ptmi:function(){var e,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=U(this.$_attrsWithoutPT,this.ptm(r,o));return n!=null&&n.hasOwnProperty("id")&&((e=n.id)!==null&&e!==void 0||(n.id=this.$id)),n},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,r,K({instance:this},o),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,K(K({},this.$params),r))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(r){var n=this._getOptionValue(this.$style.inlineStyles,e,K(K({},this.$params),o)),i=this._getOptionValue(Ua.inlineStyles,e,K(K({},this.$params),o));return[i,n]}}},computed:{globalPT:function(){var e,r=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(o){return Ye(o,{instance:r})})},defaultPT:function(){var e,r=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(o){return r._getOptionValue(o,r.$name,K({},r.$params))||Ye(o,K({},r.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$id:function(){return this.$attrs.id||this.uid},$inProps:function(){var e,r=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(o){var n=Xr(o,1),i=n[0];return r==null?void 0:r.includes(i)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return K(K({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var r=Xr(e,1),o=r[0];return o==null?void 0:o.startsWith("pt:")}).reduce(function(e,r){var o=Xr(r,2),n=o[0],i=o[1],s=n.split(":"),l=jS(s),a=ji(l).slice(1);return a==null||a.reduce(function(c,d,u,f){return!c[d]&&(c[d]=u===f.length-1?i:{}),c[d]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var r=Xr(e,1),o=r[0];return!(o!=null&&o.startsWith("pt:"))}).reduce(function(e,r){var o=Xr(r,2),n=o[0],i=o[1];return e[n]=i,e},{})}}},HS=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,KS=re.extend({name:"baseicon",css:HS});function Eo(t){"@babel/helpers - typeof";return Eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Eo(t)}function Va(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function Ha(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Va(Object(r),!0).forEach(function(o){GS(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Va(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function GS(t,e,r){return(e=qS(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function qS(t){var e=YS(t,"string");return Eo(e)=="symbol"?e:e+""}function YS(t,e){if(Eo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Eo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var nd={name:"BaseIcon",extends:sr,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:KS,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=zS(this.label);return Ha(Ha({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}},id={name:"SpinnerIcon",extends:nd};function JS(t){return eC(t)||QS(t)||ZS(t)||XS()}function XS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ZS(t,e){if(t){if(typeof t=="string")return Fi(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Fi(t,e):void 0}}function QS(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function eC(t){if(Array.isArray(t))return Fi(t)}function Fi(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function tC(t,e,r,o,n,i){return V(),he("svg",U({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),JS(e[0]||(e[0]=[ve("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)])),16)}id.render=tC;var rC=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`,oC={root:function(e){var r=e.props,o=e.instance;return["p-badge p-component",{"p-badge-circle":LS(r.value)&&String(r.value).length===1,"p-badge-dot":$s(r.value)&&!o.$slots.default,"p-badge-sm":r.size==="small","p-badge-lg":r.size==="large","p-badge-xl":r.size==="xlarge","p-badge-info":r.severity==="info","p-badge-success":r.severity==="success","p-badge-warn":r.severity==="warn","p-badge-danger":r.severity==="danger","p-badge-secondary":r.severity==="secondary","p-badge-contrast":r.severity==="contrast"}]}},nC=re.extend({name:"badge",style:rC,classes:oC}),iC={name:"BaseBadge",extends:sr,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:nC,provide:function(){return{$pcBadge:this,$parentInstance:this}}};function Po(t){"@babel/helpers - typeof";return Po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Po(t)}function Ka(t,e,r){return(e=sC(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function sC(t){var e=aC(t,"string");return Po(e)=="symbol"?e:e+""}function aC(t,e){if(Po(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Po(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var sd={name:"Badge",extends:iC,inheritAttrs:!1,computed:{dataP:function(){return tr(Ka(Ka({circle:this.value!=null&&String(this.value).length===1,empty:this.value==null&&!this.$slots.default},this.severity,this.severity),this.size,this.size))}}},lC=["data-p"];function cC(t,e,r,o,n,i){return V(),he("span",U({class:t.cx("root"),"data-p":i.dataP},t.ptmi("root")),[Ne(t.$slots,"default",{},function(){return[Kt(tt(t.value),1)]})],16,lC)}sd.render=cC;function Ro(t){"@babel/helpers - typeof";return Ro=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ro(t)}function Ga(t,e){return gC(t)||fC(t,e)||uC(t,e)||dC()}function dC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function uC(t,e){if(t){if(typeof t=="string")return qa(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?qa(t,e):void 0}}function qa(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function fC(t,e){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var o,n,i,s,l=[],a=!0,c=!1;try{if(i=(r=r.call(t)).next,e!==0)for(;!(a=(o=i.call(r)).done)&&(l.push(o.value),l.length!==e);a=!0);}catch(d){c=!0,n=d}finally{try{if(!a&&r.return!=null&&(s=r.return(),Object(s)!==s))return}finally{if(c)throw n}}return l}}function gC(t){if(Array.isArray(t))return t}function Ya(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function Y(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Ya(Object(r),!0).forEach(function(o){Ui(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ya(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Ui(t,e,r){return(e=hC(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function hC(t){var e=pC(t,"string");return Ro(e)=="symbol"?e:e+""}function pC(t,e){if(Ro(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Ro(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var W={_getMeta:function(){return[kt(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],Ye(kt(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,r){var o,n,i;return(o=(e==null||(n=e.instance)===null||n===void 0?void 0:n.$primevue)||(r==null||(i=r.ctx)===null||i===void 0||(i=i.appContext)===null||i===void 0||(i=i.config)===null||i===void 0||(i=i.globalProperties)===null||i===void 0?void 0:i.$primevue))===null||o===void 0?void 0:o.config},_getOptionValue:Cs,_getPTValue:function(){var e,r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=function(){var x=W._getOptionValue.apply(W,arguments);return Ve(x)||Wc(x)?{class:x}:x},c=((e=o.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((r=o.$primevueConfig)===null||r===void 0?void 0:r.ptOptions)||{},d=c.mergeSections,u=d===void 0?!0:d,f=c.mergeProps,h=f===void 0?!1:f,v=l?W._useDefaultPT(o,o.defaultPT(),a,i,s):void 0,y=W._usePT(o,W._getPT(n,o.$name),a,i,Y(Y({},s),{},{global:v||{}})),$=W._getPTDatasets(o,i);return u||!u&&y?h?W._mergeProps(o,h,v,y,$):Y(Y(Y({},v),y),$):Y(Y({},y),$)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o="data-pc-";return Y(Y({},r==="root"&&Ui({},"".concat(o,"name"),vt(e.$name))),{},Ui({},"".concat(o,"section"),vt(r)))},_getPT:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,n=function(s){var l,a=o?o(s):s,c=vt(r);return(l=a==null?void 0:a[c])!==null&&l!==void 0?l:a};return e&&Object.hasOwn(e,"_usept")?{_usept:e._usept,originalValue:n(e.originalValue),value:n(e.value)}:n(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,s=function($){return o($,n,i)};if(r&&Object.hasOwn(r,"_usept")){var l,a=r._usept||((l=e.$primevueConfig)===null||l===void 0?void 0:l.ptOptions)||{},c=a.mergeSections,d=c===void 0?!0:c,u=a.mergeProps,f=u===void 0?!1:u,h=s(r.originalValue),v=s(r.value);return h===void 0&&v===void 0?void 0:Ve(v)?v:Ve(h)?h:d||!d&&v?f?W._mergeProps(e,f,h,v):Y(Y({},h),v):v}return s(r)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return W._usePT(e,r,o,n,i)},_loadStyles:function(){var e,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=W._getConfig(o,n),s={nonce:i==null||(e=i.csp)===null||e===void 0?void 0:e.nonce};W._loadCoreStyles(r,s),W._loadThemeStyles(r,s),W._loadScopedThemeStyles(r,s),W._removeThemeListeners(r),r.$loadStyles=function(){return W._loadThemeStyles(r,s)},W._themeChangeListener(r.$loadStyles)},_loadCoreStyles:function(){var e,r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(!Gt.isStyleNameLoaded((e=o.$style)===null||e===void 0?void 0:e.name)&&(r=o.$style)!==null&&r!==void 0&&r.name){var i;re.loadCSS(n),(i=o.$style)===null||i===void 0||i.loadCSS(n),Gt.setLoadedStyleName(o.$style.name)}},_loadThemeStyles:function(){var e,r,o,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!(n!=null&&n.isUnstyled()||(n==null||(e=n.theme)===null||e===void 0?void 0:e.call(n))==="none")){if(!ie.isStyleNameLoaded("common")){var s,l,a=((s=n.$style)===null||s===void 0||(l=s.getCommonTheme)===null||l===void 0?void 0:l.call(s))||{},c=a.primitive,d=a.semantic,u=a.global,f=a.style;re.load(c==null?void 0:c.css,Y({name:"primitive-variables"},i)),re.load(d==null?void 0:d.css,Y({name:"semantic-variables"},i)),re.load(u==null?void 0:u.css,Y({name:"global-variables"},i)),re.loadStyle(Y({name:"global-style"},i),f),ie.setLoadedStyleName("common")}if(!ie.isStyleNameLoaded((r=n.$style)===null||r===void 0?void 0:r.name)&&(o=n.$style)!==null&&o!==void 0&&o.name){var h,v,y,$,k=((h=n.$style)===null||h===void 0||(v=h.getDirectiveTheme)===null||v===void 0?void 0:v.call(h))||{},x=k.css,O=k.style;(y=n.$style)===null||y===void 0||y.load(x,Y({name:"".concat(n.$style.name,"-variables")},i)),($=n.$style)===null||$===void 0||$.loadStyle(Y({name:"".concat(n.$style.name,"-style")},i),O),ie.setLoadedStyleName(n.$style.name)}if(!ie.isStyleNameLoaded("layer-order")){var b,A,F=(b=n.$style)===null||b===void 0||(A=b.getLayerOrderThemeCSS)===null||A===void 0?void 0:A.call(b);re.load(F,Y({name:"layer-order",first:!0},i)),ie.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=e.preset();if(o&&e.$attrSelector){var n,i,s,l=((n=e.$style)===null||n===void 0||(i=n.getPresetTheme)===null||i===void 0?void 0:i.call(n,o,"[".concat(e.$attrSelector,"]")))||{},a=l.css,c=(s=e.$style)===null||s===void 0?void 0:s.load(a,Y({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},r));e.scopedStyleEl=c.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};Gt.clearLoadedStyleNames(),$e.on("theme:change",e)},_removeThemeListeners:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};$e.off("theme:change",e.$loadStyles),e.$loadStyles=void 0},_hook:function(e,r,o,n,i,s){var l,a,c="on".concat(Kg(r)),d=W._getConfig(n,i),u=o==null?void 0:o.$instance,f=W._usePT(u,W._getPT(n==null||(l=n.value)===null||l===void 0?void 0:l.pt,e),W._getOptionValue,"hooks.".concat(c)),h=W._useDefaultPT(u,d==null||(a=d.pt)===null||a===void 0||(a=a.directives)===null||a===void 0?void 0:a[e],W._getOptionValue,"hooks.".concat(c)),v={el:o,binding:n,vnode:i,prevVnode:s};f==null||f(u,v),h==null||h(u,v)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,r=arguments.length,o=new Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];return Ss(e)?e.apply(void 0,o):U.apply(void 0,o)},_extend:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=function(l,a,c,d,u){var f,h,v,y;a._$instances=a._$instances||{};var $=W._getConfig(c,d),k=a._$instances[e]||{},x=Xn(k)?Y(Y({},r),r==null?void 0:r.methods):{};a._$instances[e]=Y(Y({},k),{},{$name:e,$host:a,$binding:c,$modifiers:c==null?void 0:c.modifiers,$value:c==null?void 0:c.value,$el:k.$el||a||void 0,$style:Y({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadStyle:function(){}},r==null?void 0:r.style),$primevueConfig:$,$attrSelector:(f=a.$pd)===null||f===void 0||(f=f[e])===null||f===void 0?void 0:f.attrSelector,defaultPT:function(){return W._getPT($==null?void 0:$.pt,void 0,function(b){var A;return b==null||(A=b.directives)===null||A===void 0?void 0:A[e]})},isUnstyled:function(){var b,A;return((b=a._$instances[e])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.unstyled)!==void 0?(A=a._$instances[e])===null||A===void 0||(A=A.$binding)===null||A===void 0||(A=A.value)===null||A===void 0?void 0:A.unstyled:$==null?void 0:$.unstyled},theme:function(){var b;return(b=a._$instances[e])===null||b===void 0||(b=b.$primevueConfig)===null||b===void 0?void 0:b.theme},preset:function(){var b;return(b=a._$instances[e])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.dt},ptm:function(){var b,A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return W._getPTValue(a._$instances[e],(b=a._$instances[e])===null||b===void 0||(b=b.$binding)===null||b===void 0||(b=b.value)===null||b===void 0?void 0:b.pt,A,Y({},F))},ptmo:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return W._getPTValue(a._$instances[e],b,A,F,!1)},cx:function(){var b,A,F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(b=a._$instances[e])!==null&&b!==void 0&&b.isUnstyled()?void 0:W._getOptionValue((A=a._$instances[e])===null||A===void 0||(A=A.$style)===null||A===void 0?void 0:A.classes,F,Y({},Z))},sx:function(){var b,A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,Z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return F?W._getOptionValue((b=a._$instances[e])===null||b===void 0||(b=b.$style)===null||b===void 0?void 0:b.inlineStyles,A,Y({},Z)):void 0}},x),a.$instance=a._$instances[e],(h=(v=a.$instance)[l])===null||h===void 0||h.call(v,a,c,d,u),a["$".concat(e)]=a.$instance,W._hook(e,l,a,c,d,u),a.$pd||(a.$pd={}),a.$pd[e]=Y(Y({},(y=a.$pd)===null||y===void 0?void 0:y[e]),{},{name:e,instance:a._$instances[e]})},n=function(l){var a,c,d,u=l._$instances[e],f=u==null?void 0:u.watch,h=function($){var k,x=$.newValue,O=$.oldValue;return f==null||(k=f.config)===null||k===void 0?void 0:k.call(u,x,O)},v=function($){var k,x=$.newValue,O=$.oldValue;return f==null||(k=f["config.ripple"])===null||k===void 0?void 0:k.call(u,x,O)};u.$watchersCallback={config:h,"config.ripple":v},f==null||(a=f.config)===null||a===void 0||a.call(u,u==null?void 0:u.$primevueConfig),Qt.on("config:change",h),f==null||(c=f["config.ripple"])===null||c===void 0||c.call(u,u==null||(d=u.$primevueConfig)===null||d===void 0?void 0:d.ripple),Qt.on("config:ripple:change",v)},i=function(l){var a=l._$instances[e].$watchersCallback;a&&(Qt.off("config:change",a.config),Qt.off("config:ripple:change",a["config.ripple"]),l._$instances[e].$watchersCallback=void 0)};return{created:function(l,a,c,d){l.$pd||(l.$pd={}),l.$pd[e]={name:e,attrSelector:Zg("pd")},o("created",l,a,c,d)},beforeMount:function(l,a,c,d){var u;W._loadStyles((u=l.$pd[e])===null||u===void 0?void 0:u.instance,a,c),o("beforeMount",l,a,c,d),n(l)},mounted:function(l,a,c,d){var u;W._loadStyles((u=l.$pd[e])===null||u===void 0?void 0:u.instance,a,c),o("mounted",l,a,c,d)},beforeUpdate:function(l,a,c,d){o("beforeUpdate",l,a,c,d)},updated:function(l,a,c,d){var u;W._loadStyles((u=l.$pd[e])===null||u===void 0?void 0:u.instance,a,c),o("updated",l,a,c,d)},beforeUnmount:function(l,a,c,d){var u;i(l),W._removeThemeListeners((u=l.$pd[e])===null||u===void 0?void 0:u.instance),o("beforeUnmount",l,a,c,d)},unmounted:function(l,a,c,d){var u;(u=l.$pd[e])===null||u===void 0||(u=u.instance)===null||u===void 0||(u=u.scopedStyleEl)===null||u===void 0||(u=u.value)===null||u===void 0||u.remove(),o("unmounted",l,a,c,d)}}},extend:function(){var e=W._getMeta.apply(W,arguments),r=Ga(e,2),o=r[0],n=r[1];return Y({extend:function(){var s=W._getMeta.apply(W,arguments),l=Ga(s,2),a=l[0],c=l[1];return W.extend(a,Y(Y(Y({},n),n==null?void 0:n.methods),c))}},W._extend(o,n))}},mC=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,bC={root:"p-ink"},vC=re.extend({name:"ripple-directive",style:mC,classes:bC}),yC=W.extend({style:vC});function Oo(t){"@babel/helpers - typeof";return Oo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Oo(t)}function kC(t){return CC(t)||SC(t)||_C(t)||wC()}function wC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _C(t,e){if(t){if(typeof t=="string")return Wi(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Wi(t,e):void 0}}function SC(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function CC(t){if(Array.isArray(t))return Wi(t)}function Wi(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function Ja(t,e,r){return(e=$C(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function $C(t){var e=xC(t,"string");return Oo(e)=="symbol"?e:e+""}function xC(t,e){if(Oo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Oo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ad=yC.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var r=this.getInk(e);r||(r=AS("span",Ja(Ja({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root"))),e.appendChild(r),this.$el=r)},remove:function(e){var r=this.getInk(e);r&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),r.removeEventListener("animationend",this.onAnimationEnd),r.remove())},onMouseDown:function(e){var r=this,o=e.currentTarget,n=this.getInk(o);if(!(!n||getComputedStyle(n,null).display==="none")){if(!this.isUnstyled()&&vi(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!ja(n)&&!Fa(n)){var i=Math.max(OS(o),DS(o));n.style.height=i+"px",n.style.width=i+"px"}var s=NS(o),l=e.pageX-s.left+document.body.scrollTop-Fa(n)/2,a=e.pageY-s.top+document.body.scrollLeft-ja(n)/2;n.style.top=a+"px",n.style.left=l+"px",!this.isUnstyled()&&RS(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){n&&(!r.isUnstyled()&&vi(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&vi(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?kC(e.children).find(function(r){return BS(r,"data-pc-name")==="ripple"}):void 0}}}),TC=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: " ";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;function Ao(t){"@babel/helpers - typeof";return Ao=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ao(t)}function gt(t,e,r){return(e=IC(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function IC(t){var e=EC(t,"string");return Ao(e)=="symbol"?e:e+""}function EC(t,e){if(Ao(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Ao(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var PC={root:function(e){var r=e.instance,o=e.props;return["p-button p-component",gt(gt(gt(gt(gt(gt(gt(gt(gt({"p-button-icon-only":r.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link||o.variant==="link"},"p-button-".concat(o.severity),o.severity),"p-button-raised",o.raised),"p-button-rounded",o.rounded),"p-button-text",o.text||o.variant==="text"),"p-button-outlined",o.outlined||o.variant==="outlined"),"p-button-sm",o.size==="small"),"p-button-lg",o.size==="large"),"p-button-plain",o.plain),"p-button-fluid",r.hasFluid)]},loadingIcon:"p-button-loading-icon",icon:function(e){var r=e.props;return["p-button-icon",gt({},"p-button-icon-".concat(r.iconPos),r.label)]},label:"p-button-label"},RC=re.extend({name:"button",style:TC,classes:PC}),OC={name:"BaseButton",extends:sr,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:[String,Object],default:null},badge:{type:String,default:null},badgeClass:{type:[String,Object],default:null},badgeSeverity:{type:String,default:"secondary"},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},variant:{type:String,default:null},plain:{type:Boolean,default:!1},fluid:{type:Boolean,default:null}},style:RC,provide:function(){return{$pcButton:this,$parentInstance:this}}};function Bo(t){"@babel/helpers - typeof";return Bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bo(t)}function je(t,e,r){return(e=AC(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function AC(t){var e=BC(t,"string");return Bo(e)=="symbol"?e:e+""}function BC(t,e){if(Bo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Bo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var to={name:"Button",extends:OC,inheritAttrs:!1,inject:{$pcFluid:{default:null}},methods:{getPTOptions:function(e){var r=e==="root"?this.ptmi:this.ptm;return r(e,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon},attrs:function(){return U(this.asAttrs,this.a11yAttrs,this.getPTOptions("root"))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{"aria-label":this.defaultAriaLabel,"data-pc-name":"button","data-p-disabled":this.disabled,"data-p-severity":this.severity}},hasFluid:function(){return $s(this.fluid)?!!this.$pcFluid:this.fluid},dataP:function(){return tr(je(je(je(je(je(je(je(je(je(je({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge),"loading",this.loading),"fluid",this.hasFluid),"rounded",this.rounded),"raised",this.raised),"outlined",this.outlined||this.variant==="outlined"),"text",this.text||this.variant==="text"),"link",this.link||this.variant==="link"),"vertical",(this.iconPos==="top"||this.iconPos==="bottom")&&this.label))},dataIconP:function(){return tr(je(je({},this.iconPos,this.iconPos),this.size,this.size))},dataLabelP:function(){return tr(je(je({},this.size,this.size),"icon-only",this.hasIcon&&!this.label&&!this.badge))}},components:{SpinnerIcon:id,Badge:sd},directives:{ripple:ad}},NC=["data-p"],DC=["data-p"];function LC(t,e,r,o,n,i){var s=Ri("SpinnerIcon"),l=Ri("Badge"),a=bc("ripple");return t.asChild?Ne(t.$slots,"default",{key:1,class:Ur(t.cx("root")),a11yAttrs:i.a11yAttrs}):ic((V(),We(vs(t.as),U({key:0,class:t.cx("root"),"data-p":i.dataP},i.attrs),{default:Ke(function(){return[Ne(t.$slots,"default",{},function(){return[t.loading?Ne(t.$slots,"loadingicon",U({key:0,class:[t.cx("loadingIcon"),t.cx("icon")]},t.ptm("loadingIcon")),function(){return[t.loadingIcon?(V(),he("span",U({key:0,class:[t.cx("loadingIcon"),t.cx("icon"),t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(V(),We(s,U({key:1,class:[t.cx("loadingIcon"),t.cx("icon")],spin:""},t.ptm("loadingIcon")),null,16,["class"]))]}):Ne(t.$slots,"icon",U({key:1,class:[t.cx("icon")]},t.ptm("icon")),function(){return[t.icon?(V(),he("span",U({key:0,class:[t.cx("icon"),t.icon,t.iconClass],"data-p":i.dataIconP},t.ptm("icon")),null,16,NC)):xe("",!0)]}),t.label?(V(),he("span",U({key:2,class:t.cx("label")},t.ptm("label"),{"data-p":i.dataLabelP}),tt(t.label),17,DC)):xe("",!0),t.badge?(V(),We(l,{key:3,value:t.badge,class:Ur(t.badgeClass),severity:t.badgeSeverity,unstyled:t.unstyled,pt:t.ptm("pcBadge")},null,8,["value","class","severity","unstyled","pt"])):xe("",!0)]})]}),_:3},16,["class","data-p"])),[[a]])}to.render=LC;var zC=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,MC={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},jC=re.extend({name:"card",style:zC,classes:MC}),FC={name:"BaseCard",extends:sr,style:jC,provide:function(){return{$pcCard:this,$parentInstance:this}}},Vi={name:"Card",extends:FC,inheritAttrs:!1};function UC(t,e,r,o,n,i){return V(),he("div",U({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(V(),he("div",U({key:0,class:t.cx("header")},t.ptm("header")),[Ne(t.$slots,"header")],16)):xe("",!0),ve("div",U({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(V(),he("div",U({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(V(),he("div",U({key:0,class:t.cx("title")},t.ptm("title")),[Ne(t.$slots,"title")],16)):xe("",!0),t.$slots.subtitle?(V(),he("div",U({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[Ne(t.$slots,"subtitle")],16)):xe("",!0)],16)):xe("",!0),ve("div",U({class:t.cx("content")},t.ptm("content")),[Ne(t.$slots,"content")],16),t.$slots.footer?(V(),he("div",U({key:1,class:t.cx("footer")},t.ptm("footer")),[Ne(t.$slots,"footer")],16)):xe("",!0)],16)],16)}Vi.render=UC;var WC={name:"BaseEditableHolder",extends:sr,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue!==void 0?this.defaultValue:this.modelValue}},watch:{modelValue:{deep:!0,handler:function(e){this.d_value=e}},defaultValue:function(e){this.d_value=e},$formName:{immediate:!0,handler:function(e){var r,o;this.formField=((r=this.$pcForm)===null||r===void 0||(o=r.register)===null||o===void 0?void 0:o.call(r,e,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(e){var r,o;this.formField=((r=this.$pcForm)===null||r===void 0||(o=r.register)===null||o===void 0?void 0:o.call(r,this.$formName,e))||{}}},$formDefaultValue:{immediate:!0,handler:function(e){this.d_value!==e&&(this.d_value=e)}},$formValue:{immediate:!1,handler:function(e){var r;(r=this.$pcForm)!==null&&r!==void 0&&r.getFieldState(this.$formName)&&e!==this.d_value&&(this.d_value=e)}}},formField:{},methods:{writeValue:function(e,r){var o,n;this.controlled&&(this.d_value=e,this.$emit("update:modelValue",e)),this.$emit("value-change",e),(o=(n=this.formField).onChange)===null||o===void 0||o.call(n,{originalEvent:r,value:e})},findNonEmpty:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return r.find(ge)}},computed:{$filled:function(){return ge(this.d_value)},$invalid:function(){var e,r;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(e=this.$pcFormField)===null||e===void 0||(e=e.$field)===null||e===void 0?void 0:e.invalid,(r=this.$pcForm)===null||r===void 0||(r=r.getFieldState(this.$formName))===null||r===void 0?void 0:r.invalid)},$formName:function(){var e;return this.$formNovalidate?void 0:this.name||((e=this.$formControl)===null||e===void 0?void 0:e.name)},$formControl:function(){var e;return this.formControl||((e=this.$pcFormField)===null||e===void 0?void 0:e.formControl)},$formNovalidate:function(){var e;return(e=this.$formControl)===null||e===void 0?void 0:e.novalidate},$formDefaultValue:function(){var e,r;return this.findNonEmpty(this.d_value,(e=this.$pcFormField)===null||e===void 0?void 0:e.initialValue,(r=this.$pcForm)===null||r===void 0||(r=r.initialValues)===null||r===void 0?void 0:r[this.$formName])},$formValue:function(){var e,r;return this.findNonEmpty((e=this.$pcFormField)===null||e===void 0||(e=e.$field)===null||e===void 0?void 0:e.value,(r=this.$pcForm)===null||r===void 0||(r=r.getFieldState(this.$formName))===null||r===void 0?void 0:r.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},VC={name:"BaseInput",extends:WC,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var e;return(e=this.variant)!==null&&e!==void 0?e:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var e;return(e=this.fluid)!==null&&e!==void 0?e:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},HC=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`,KC={root:function(e){var r=e.instance,o=e.props;return["p-inputtext p-component",{"p-filled":r.$filled,"p-inputtext-sm p-inputfield-sm":o.size==="small","p-inputtext-lg p-inputfield-lg":o.size==="large","p-invalid":r.$invalid,"p-variant-filled":r.$variant==="filled","p-inputtext-fluid":r.$fluid}]}},GC=re.extend({name:"inputtext",style:HC,classes:KC}),qC={name:"BaseInputText",extends:VC,style:GC,provide:function(){return{$pcInputText:this,$parentInstance:this}}};function No(t){"@babel/helpers - typeof";return No=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},No(t)}function YC(t,e,r){return(e=JC(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function JC(t){var e=XC(t,"string");return No(e)=="symbol"?e:e+""}function XC(t,e){if(No(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(No(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Hi={name:"InputText",extends:qC,inheritAttrs:!1,methods:{onInput:function(e){this.writeValue(e.target.value,e)}},computed:{attrs:function(){return U(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return tr(YC({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},ZC=["value","name","disabled","aria-invalid","data-p"];function QC(t,e,r,o,n,i){return V(),he("input",U({type:"text",class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.$invalid||void 0,"data-p":i.dataP,onInput:e[0]||(e[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.attrs),null,16,ZC)}Hi.render=QC;var ld={name:"TimesIcon",extends:nd};function e5(t){return n5(t)||o5(t)||r5(t)||t5()}function t5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r5(t,e){if(t){if(typeof t=="string")return Ki(t,e);var r={}.toString.call(t).slice(8,-1);return r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set"?Array.from(t):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ki(t,e):void 0}}function o5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function n5(t){if(Array.isArray(t))return Ki(t)}function Ki(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}function i5(t,e,r,o,n,i){return V(),he("svg",U({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e5(e[0]||(e[0]=[ve("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1)])),16)}ld.render=i5;var s5=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`,a5={root:function(e){var r=e.props;return["p-message p-component p-message-"+r.severity,{"p-message-outlined":r.variant==="outlined","p-message-simple":r.variant==="simple","p-message-sm":r.size==="small","p-message-lg":r.size==="large"}]},contentWrapper:"p-message-content-wrapper",content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},l5=re.extend({name:"message",style:s5,classes:a5}),c5={name:"BaseMessage",extends:sr,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:l5,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function Do(t){"@babel/helpers - typeof";return Do=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Do(t)}function Xa(t,e,r){return(e=d5(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d5(t){var e=u5(t,"string");return Do(e)=="symbol"?e:e+""}function u5(t,e){if(Do(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Do(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Gi={name:"Message",extends:c5,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit("life-end")},this.life)},methods:{close:function(e){this.visible=!1,this.$emit("close",e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return tr(Xa(Xa({outlined:this.variant==="outlined",simple:this.variant==="simple"},this.severity,this.severity),this.size,this.size))}},directives:{ripple:ad},components:{TimesIcon:ld}};function Lo(t){"@babel/helpers - typeof";return Lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lo(t)}function Za(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,o)}return r}function Qa(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Za(Object(r),!0).forEach(function(o){f5(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Za(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function f5(t,e,r){return(e=g5(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g5(t){var e=h5(t,"string");return Lo(e)=="symbol"?e:e+""}function h5(t,e){if(Lo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(Lo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var p5=["data-p"],m5=["data-p"],b5=["data-p"],v5=["aria-label","data-p"],y5=["data-p"];function k5(t,e,r,o,n,i){var s=Ri("TimesIcon"),l=bc("ripple");return V(),We(ag,U({name:"p-message",appear:""},t.ptmi("transition")),{default:Ke(function(){return[n.visible?(V(),he("div",U({key:0,class:t.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true","data-p":i.dataP},t.ptm("root")),[ve("div",U({class:t.cx("contentWrapper")},t.ptm("contentWrapper")),[t.$slots.container?Ne(t.$slots,"container",{key:0,closeCallback:i.close}):(V(),he("div",U({key:1,class:t.cx("content"),"data-p":i.dataP},t.ptm("content")),[Ne(t.$slots,"icon",{class:Ur(t.cx("icon"))},function(){return[(V(),We(vs(t.icon?"span":null),U({class:[t.cx("icon"),t.icon],"data-p":i.dataP},t.ptm("icon")),null,16,["class","data-p"]))]}),t.$slots.default?(V(),he("div",U({key:0,class:t.cx("text"),"data-p":i.dataP},t.ptm("text")),[Ne(t.$slots,"default")],16,b5)):xe("",!0),t.closable?ic((V(),he("button",U({key:1,class:t.cx("closeButton"),"aria-label":i.closeAriaLabel,type:"button",onClick:e[0]||(e[0]=function(a){return i.close(a)}),"data-p":i.dataP},Qa(Qa({},t.closeButtonProps),t.ptm("closeButton"))),[Ne(t.$slots,"closeicon",{},function(){return[t.closeIcon?(V(),he("i",U({key:0,class:[t.cx("closeIcon"),t.closeIcon],"data-p":i.dataP},t.ptm("closeIcon")),null,16,y5)):(V(),We(s,U({key:1,class:[t.cx("closeIcon"),t.closeIcon],"data-p":i.dataP},t.ptm("closeIcon")),null,16,["class","data-p"]))]})],16,v5)),[[l]]):xe("",!0)],16,m5))],16)],16,p5)):xe("",!0)]}),_:3},16)}Gi.render=k5;var w5=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`,_5={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},S5=re.extend({name:"progressspinner",style:w5,classes:_5}),C5={name:"BaseProgressSpinner",extends:sr,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:S5,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},cd={name:"ProgressSpinner",extends:C5,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},$5=["fill","stroke-width"];function x5(t,e,r,o,n,i){return V(),he("div",U({class:t.cx("root"),role:"progressbar"},t.ptmi("root")),[(V(),he("svg",U({class:t.cx("spin"),viewBox:"25 25 50 50",style:i.svgStyle},t.ptm("spin")),[ve("circle",U({class:t.cx("circle"),cx:"50",cy:"50",r:"20",fill:t.fill,"stroke-width":t.strokeWidth,strokeMiterlimit:"10"},t.ptm("circle")),null,16,$5)],16))],16)}cd.render=x5;var T5=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,I5={root:function(e){var r=e.props;return["p-tag p-component",{"p-tag-info":r.severity==="info","p-tag-success":r.severity==="success","p-tag-warn":r.severity==="warn","p-tag-danger":r.severity==="danger","p-tag-secondary":r.severity==="secondary","p-tag-contrast":r.severity==="contrast","p-tag-rounded":r.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},E5=re.extend({name:"tag",style:T5,classes:I5}),P5={name:"BaseTag",extends:sr,props:{value:null,severity:null,rounded:Boolean,icon:String},style:E5,provide:function(){return{$pcTag:this,$parentInstance:this}}};function zo(t){"@babel/helpers - typeof";return zo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zo(t)}function R5(t,e,r){return(e=O5(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O5(t){var e=A5(t,"string");return zo(e)=="symbol"?e:e+""}function A5(t,e){if(zo(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e);if(zo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var dd={name:"Tag",extends:P5,inheritAttrs:!1,computed:{dataP:function(){return tr(R5({rounded:this.rounded},this.severity,this.severity))}}},B5=["data-p"];function N5(t,e,r,o,n,i){return V(),he("span",U({class:t.cx("root"),"data-p":i.dataP},t.ptmi("root")),[t.$slots.icon?(V(),We(vs(t.$slots.icon),U({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(V(),he("span",U({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):xe("",!0),t.value!=null||t.$slots.default?Ne(t.$slots,"default",{key:2},function(){return[ve("span",U({class:t.cx("label")},t.ptm("label")),tt(t.value),17)]}):xe("",!0)],16,B5)}dd.render=N5;const D5=()=>{};var el={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=function(t){const e=[];let r=0;for(let o=0;o<t.length;o++){let n=t.charCodeAt(o);n<128?e[r++]=n:n<2048?(e[r++]=n>>6|192,e[r++]=n&63|128):(n&64512)===55296&&o+1<t.length&&(t.charCodeAt(o+1)&64512)===56320?(n=65536+((n&1023)<<10)+(t.charCodeAt(++o)&1023),e[r++]=n>>18|240,e[r++]=n>>12&63|128,e[r++]=n>>6&63|128,e[r++]=n&63|128):(e[r++]=n>>12|224,e[r++]=n>>6&63|128,e[r++]=n&63|128)}return e},L5=function(t){const e=[];let r=0,o=0;for(;r<t.length;){const n=t[r++];if(n<128)e[o++]=String.fromCharCode(n);else if(n>191&&n<224){const i=t[r++];e[o++]=String.fromCharCode((n&31)<<6|i&63)}else if(n>239&&n<365){const i=t[r++],s=t[r++],l=t[r++],a=((n&7)<<18|(i&63)<<12|(s&63)<<6|l&63)-65536;e[o++]=String.fromCharCode(55296+(a>>10)),e[o++]=String.fromCharCode(56320+(a&1023))}else{const i=t[r++],s=t[r++];e[o++]=String.fromCharCode((n&15)<<12|(i&63)<<6|s&63)}}return e.join("")},fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let n=0;n<t.length;n+=3){const i=t[n],s=n+1<t.length,l=s?t[n+1]:0,a=n+2<t.length,c=a?t[n+2]:0,d=i>>2,u=(i&3)<<4|l>>4;let f=(l&15)<<2|c>>6,h=c&63;a||(h=64,s||(f=64)),o.push(r[d],r[u],r[f],r[h])}return o.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ud(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):L5(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let n=0;n<t.length;){const i=r[t.charAt(n++)],l=n<t.length?r[t.charAt(n)]:0;++n;const c=n<t.length?r[t.charAt(n)]:64;++n;const u=n<t.length?r[t.charAt(n)]:64;if(++n,i==null||l==null||c==null||u==null)throw new z5;const f=i<<2|l>>4;if(o.push(f),c!==64){const h=l<<4&240|c>>2;if(o.push(h),u!==64){const v=c<<6&192|u;o.push(v)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class z5 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const M5=function(t){const e=ud(t);return fd.encodeByteArray(e,!0)},gd=function(t){return M5(t).replace(/\./g,"")},hd=function(t){try{return fd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j5(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F5=()=>j5().__FIREBASE_DEFAULTS__,U5=()=>{if(typeof process>"u"||typeof el>"u")return;const t=el.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},W5=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hd(t[1]);return e&&JSON.parse(e)},xs=()=>{try{return D5()||F5()||U5()||W5()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},V5=t=>{var e,r;return(r=(e=xs())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},pd=()=>{var t;return(t=xs())===null||t===void 0?void 0:t.config},md=t=>{var e;return(e=xs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H5{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,o)=>{r?this.reject(r):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,o))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function K5(t){return(await fetch(t,{credentials:"include"})).ok}const uo={};function G5(){const t={prod:[],emulator:[]};for(const e of Object.keys(uo))uo[e]?t.emulator.push(e):t.prod.push(e);return t}function q5(t){let e=document.getElementById(t),r=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),r=!0),{created:r,element:e}}let tl=!1;function Y5(t,e){if(typeof window>"u"||typeof document>"u"||!Qn(window.location.host)||uo[t]===e||uo[t]||tl)return;uo[t]=e;function r(f){return`__firebase__banner__${f}`}const o="__firebase__banner",i=G5().prod.length>0;function s(){const f=document.getElementById(o);f&&f.remove()}function l(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function a(f,h){f.setAttribute("width","24"),f.setAttribute("id",h),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{tl=!0,s()},f}function d(f,h){f.setAttribute("id",h),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function u(){const f=q5(o),h=r("text"),v=document.getElementById(h)||document.createElement("span"),y=r("learnmore"),$=document.getElementById(y)||document.createElement("a"),k=r("preprendIcon"),x=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const O=f.element;l(O),d($,y);const b=c();a(x,k),O.append(x,v,$,b),document.body.appendChild(O)}i?(v.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",h)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function J5(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function X5(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Z5(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Q5(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function e$(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function t$(){try{return typeof indexedDB=="object"}catch{return!1}}function r$(){return new Promise((t,e)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(o);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(o),t(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{var i;e(((i=n.error)===null||i===void 0?void 0:i.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o$="FirebaseError";class ar extends Error{constructor(e,r,o){super(r),this.code=e,this.customData=o,this.name=o$,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,r,o){this.service=e,this.serviceName=r,this.errors=o}create(e,...r){const o=r[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?n$(i,o):"Error",l=`${this.serviceName}: ${s} (${n}).`;return new ar(n,l,o)}}function n$(t,e){return t.replace(i$,(r,o)=>{const n=e[o];return n!=null?String(n):`<${o}?>`})}const i$=/\{\$([^}]+)}/g;function s$(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wr(t,e){if(t===e)return!0;const r=Object.keys(t),o=Object.keys(e);for(const n of r){if(!o.includes(n))return!1;const i=t[n],s=e[n];if(rl(i)&&rl(s)){if(!Wr(i,s))return!1}else if(i!==s)return!1}for(const n of o)if(!r.includes(n))return!1;return!0}function rl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){const e=[];for(const[r,o]of Object.entries(t))Array.isArray(o)?o.forEach(n=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}function ro(t){const e={};return t.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[n,i]=o.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}}),e}function oo(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function a$(t,e){const r=new l$(t,e);return r.subscribe.bind(r)}class l${constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(o=>{this.error(o)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,o){let n;if(e===void 0&&r===void 0&&o===void 0)throw new Error("Missing Observer.");c$(e,["next","error","complete"])?n=e:n={next:e,error:r,complete:o},n.next===void 0&&(n.next=yi),n.error===void 0&&(n.error=yi),n.complete===void 0&&(n.complete=yi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function c$(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function yi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){return t&&t._delegate?t._delegate:t}class Vr{constructor(e,r,o){this.name=e,this.instanceFactory=r,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d${constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const o=new H5;if(this.instancesDeferred.set(r,o),this.isInitialized(r)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:r});n&&o.resolve(n)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const o=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(f$(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[r,o]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(r);try{const i=this.getOrInitializeService({instanceIdentifier:n});o.resolve(i)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:o,options:r});for(const[i,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);o===l&&s.resolve(n)}return n}onInit(e,r){var o;const n=this.normalizeInstanceIdentifier(r),i=(o=this.onInitCallbacks.get(n))!==null&&o!==void 0?o:new Set;i.add(e),this.onInitCallbacks.set(n,i);const s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,r){const o=this.onInitCallbacks.get(r);if(o)for(const n of o)try{n(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:u$(e),options:r}),this.instances.set(e,o),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u$(t){return t===br?void 0:t}function f$(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g${constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new d$(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const h$={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},p$=ae.INFO,m$={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},b$=(t,e,...r)=>{if(e<t.logLevel)return;const o=new Date().toISOString(),n=m$[e];if(n)console[n](`[${o}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bd{constructor(e){this.name=e,this._logLevel=p$,this._logHandler=b$,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?h$[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const v$=(t,e)=>e.some(r=>t instanceof r);let ol,nl;function y$(){return ol||(ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k$(){return nl||(nl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vd=new WeakMap,qi=new WeakMap,yd=new WeakMap,ki=new WeakMap,Ts=new WeakMap;function w$(t){const e=new Promise((r,o)=>{const n=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{r(rr(t.result)),n()},s=()=>{o(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(r=>{r instanceof IDBCursor&&vd.set(r,t)}).catch(()=>{}),Ts.set(e,t),e}function _$(t){if(qi.has(t))return;const e=new Promise((r,o)=>{const n=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{r(),n()},s=()=>{o(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});qi.set(t,e)}let Yi={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return qi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yd.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return rr(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function S$(t){Yi=t(Yi)}function C$(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const o=t.call(wi(this),e,...r);return yd.set(o,e.sort?e.sort():[e]),rr(o)}:k$().includes(t)?function(...e){return t.apply(wi(this),e),rr(vd.get(this))}:function(...e){return rr(t.apply(wi(this),e))}}function $$(t){return typeof t=="function"?C$(t):(t instanceof IDBTransaction&&_$(t),v$(t,y$())?new Proxy(t,Yi):t)}function rr(t){if(t instanceof IDBRequest)return w$(t);if(ki.has(t))return ki.get(t);const e=$$(t);return e!==t&&(ki.set(t,e),Ts.set(e,t)),e}const wi=t=>Ts.get(t);function x$(t,e,{blocked:r,upgrade:o,blocking:n,terminated:i}={}){const s=indexedDB.open(t,e),l=rr(s);return o&&s.addEventListener("upgradeneeded",a=>{o(rr(s.result),a.oldVersion,a.newVersion,rr(s.transaction),a)}),r&&s.addEventListener("blocked",a=>r(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),n&&a.addEventListener("versionchange",c=>n(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const T$=["get","getKey","getAll","getAllKeys","count"],I$=["put","add","delete","clear"],_i=new Map;function il(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_i.get(e))return _i.get(e);const r=e.replace(/FromIndex$/,""),o=e!==r,n=I$.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!(n||T$.includes(r)))return;const i=async function(s,...l){const a=this.transaction(s,n?"readwrite":"readonly");let c=a.store;return o&&(c=c.index(l.shift())),(await Promise.all([c[r](...l),n&&a.done]))[0]};return _i.set(e,i),i}S$(t=>({...t,get:(e,r,o)=>il(e,r)||t.get(e,r,o),has:(e,r)=>!!il(e,r)||t.has(e,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E${constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(P$(r)){const o=r.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(r=>r).join(" ")}}function P$(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ji="@firebase/app",sl="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new bd("@firebase/app"),R$="@firebase/app-compat",O$="@firebase/analytics-compat",A$="@firebase/analytics",B$="@firebase/app-check-compat",N$="@firebase/app-check",D$="@firebase/auth",L$="@firebase/auth-compat",z$="@firebase/database",M$="@firebase/data-connect",j$="@firebase/database-compat",F$="@firebase/functions",U$="@firebase/functions-compat",W$="@firebase/installations",V$="@firebase/installations-compat",H$="@firebase/messaging",K$="@firebase/messaging-compat",G$="@firebase/performance",q$="@firebase/performance-compat",Y$="@firebase/remote-config",J$="@firebase/remote-config-compat",X$="@firebase/storage",Z$="@firebase/storage-compat",Q$="@firebase/firestore",ex="@firebase/ai",tx="@firebase/firestore-compat",rx="firebase",ox="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="[DEFAULT]",nx={[Ji]:"fire-core",[R$]:"fire-core-compat",[A$]:"fire-analytics",[O$]:"fire-analytics-compat",[N$]:"fire-app-check",[B$]:"fire-app-check-compat",[D$]:"fire-auth",[L$]:"fire-auth-compat",[z$]:"fire-rtdb",[M$]:"fire-data-connect",[j$]:"fire-rtdb-compat",[F$]:"fire-fn",[U$]:"fire-fn-compat",[W$]:"fire-iid",[V$]:"fire-iid-compat",[H$]:"fire-fcm",[K$]:"fire-fcm-compat",[G$]:"fire-perf",[q$]:"fire-perf-compat",[Y$]:"fire-rc",[J$]:"fire-rc-compat",[X$]:"fire-gcs",[Z$]:"fire-gcs-compat",[Q$]:"fire-fst",[tx]:"fire-fst-compat",[ex]:"fire-vertex","fire-js":"fire-js",[rx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Map,ix=new Map,Zi=new Map;function al(t,e){try{t.container.addComponent(e)}catch(r){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function jo(t){const e=t.name;if(Zi.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;Zi.set(e,t);for(const r of Mo.values())al(r,t);for(const r of ix.values())al(r,t);return!0}function kd(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new Go("app","Firebase",sx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,r,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=ox;function wd(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const o=Object.assign({name:Xi,automaticDataCollectionEnabled:!0},e),n=o.name;if(typeof n!="string"||!n)throw or.create("bad-app-name",{appName:String(n)});if(r||(r=pd()),!r)throw or.create("no-options");const i=Mo.get(n);if(i){if(Wr(r,i.options)&&Wr(o,i.config))return i;throw or.create("duplicate-app",{appName:n})}const s=new g$(n);for(const a of Zi.values())s.addComponent(a);const l=new ax(r,o,s);return Mo.set(n,l),l}function _d(t=Xi){const e=Mo.get(t);if(!e&&t===Xi&&pd())return wd();if(!e)throw or.create("no-app",{appName:t});return e}function lx(){return Array.from(Mo.values())}function zr(t,e,r){var o;let n=(o=nx[t])!==null&&o!==void 0?o:t;r&&(n+=`-${r}`);const i=n.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const l=[`Unable to register library "${n}" with version "${e}":`];i&&l.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(l.join(" "));return}jo(new Vr(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx="firebase-heartbeat-database",dx=1,Fo="firebase-heartbeat-store";let Si=null;function Sd(){return Si||(Si=x$(cx,dx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fo)}catch(r){console.warn(r)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),Si}async function ux(t){try{const r=(await Sd()).transaction(Fo),o=await r.objectStore(Fo).get(Cd(t));return await r.done,o}catch(e){if(e instanceof ar)Lt.warn(e.message);else{const r=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(r.message)}}}async function ll(t,e){try{const o=(await Sd()).transaction(Fo,"readwrite");await o.objectStore(Fo).put(e,Cd(t)),await o.done}catch(r){if(r instanceof ar)Lt.warn(r.message);else{const o=or.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Lt.warn(o.message)}}}function Cd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=1024,gx=30;class hx{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new mx(r),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,r;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>gx){const s=bx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){Lt.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=cl(),{heartbeatsToSend:o,unsentEntries:n}=px(this._heartbeatsCache.heartbeats),i=gd(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=r,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(r){return Lt.warn(r),""}}}function cl(){return new Date().toISOString().substring(0,10)}function px(t,e=fx){const r=[];let o=t.slice();for(const n of t){const i=r.find(s=>s.agent===n.agent);if(i){if(i.dates.push(n.date),dl(r)>e){i.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),dl(r)>e){r.pop();break}o=o.slice(1)}return{heartbeatsToSend:r,unsentEntries:o}}class mx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t$()?r$().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await ux(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const n=await this.read();return ll(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const n=await this.read();return ll(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function dl(t){return gd(JSON.stringify({version:2,heartbeats:t})).length}function bx(t){if(t.length===0)return-1;let e=0,r=t[0].date;for(let o=1;o<t.length;o++)t[o].date<r&&(r=t[o].date,e=o);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){jo(new Vr("platform-logger",e=>new E$(e),"PRIVATE")),jo(new Vr("heartbeat",e=>new hx(e),"PRIVATE")),zr(Ji,sl,t),zr(Ji,sl,"esm2017"),zr("fire-js","")}vx("");var yx="firebase",kx="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zr(yx,kx,"app");function Is(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(r[o[n]]=t[o[n]]);return r}function $d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wx=$d,xd=new Go("auth","Firebase",$d());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new bd("@firebase/auth");function _x(t,...e){Pn.logLevel<=ae.WARN&&Pn.warn(`Auth (${Yo}): ${t}`,...e)}function hn(t,...e){Pn.logLevel<=ae.ERROR&&Pn.error(`Auth (${Yo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,...e){throw Es(t,...e)}function wt(t,...e){return Es(t,...e)}function Td(t,e,r){const o=Object.assign(Object.assign({},wx()),{[e]:r});return new Go("auth","Firebase",o).create(e,{appName:t.name})}function At(t){return Td(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Es(t,...e){if(typeof t!="string"){const r=e[0],o=[...e.slice(1)];return o[0]&&(o[0].appName=t.name),t._errorFactory.create(r,...o)}return xd.create(t,...e)}function L(t,e,...r){if(!t)throw Es(e,...r)}function Pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hn(e),new Error(e)}function zt(t,e){t||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sx(){return ul()==="http:"||ul()==="https:"}function ul(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sx()||Z5()||"connection"in navigator)?navigator.onLine:!0}function $x(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,r){this.shortDelay=e,this.longDelay=r,zt(r>e,"Short delay should be less than long delay!"),this.isMobile=J5()||Q5()}get(){return Cx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t,e){zt(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{static initialize(e,r,o){this.fetchImpl=e,r&&(this.headersImpl=r),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ix=new Jo(3e4,6e4);function lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,r,o,n={}){return Ed(t,n,async()=>{let i={},s={};o&&(e==="GET"?s=o:i={body:JSON.stringify(o)});const l=qo(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:a},i);return X5()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Qn(t.emulatorConfig.host)&&(c.credentials="include"),Id.fetch()(await Pd(t,t.config.apiHost,r,l),c)})}async function Ed(t,e,r){t._canInitEmulator=!1;const o=Object.assign(Object.assign({},xx),e);try{const n=new Px(t),i=await Promise.race([r(),n.promise]);n.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw un(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const l=i.ok?s.errorMessage:s.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw un(t,"credential-already-in-use",s);if(a==="EMAIL_EXISTS")throw un(t,"email-already-in-use",s);if(a==="USER_DISABLED")throw un(t,"user-disabled",s);const d=o[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Td(t,d,c);lt(t,d)}}catch(n){if(n instanceof ar)throw n;lt(t,"network-request-failed",{message:String(n)})}}async function Xo(t,e,r,o,n={}){const i=await cr(t,e,r,o,n);return"mfaPendingCredential"in i&&lt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Pd(t,e,r,o){const n=`${e}${r}?${o}`,i=t,s=i.config.emulator?Ps(t.config,n):`${t.config.apiScheme}://${n}`;return Tx.includes(r)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(s).toString():s}function Ex(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Px{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,o)=>{this.timer=setTimeout(()=>o(wt(this.auth,"network-request-failed")),Ix.get())})}}function un(t,e,r){const o={appName:t.name};r.email&&(o.email=r.email),r.phoneNumber&&(o.phoneNumber=r.phoneNumber);const n=wt(t,e,o);return n.customData._tokenResponse=r,n}function fl(t){return t!==void 0&&t.enterprise!==void 0}class Rx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return Ex(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ox(t,e){return cr(t,"GET","/v2/recaptchaConfig",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function Rn(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bx(t,e=!1){const r=jt(t),o=await r.getIdToken(e),n=Rs(o);L(n&&n.exp&&n.auth_time&&n.iat,r.auth,"internal-error");const i=typeof n.firebase=="object"?n.firebase:void 0,s=i==null?void 0:i.sign_in_provider;return{claims:n,token:o,authTime:fo(Ci(n.auth_time)),issuedAtTime:fo(Ci(n.iat)),expirationTime:fo(Ci(n.exp)),signInProvider:s||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ci(t){return Number(t)*1e3}function Rs(t){const[e,r,o]=t.split(".");if(e===void 0||r===void 0||o===void 0)return hn("JWT malformed, contained fewer than 3 sections"),null;try{const n=hd(r);return n?JSON.parse(n):(hn("Failed to decode base64 JWT payload"),null)}catch(n){return hn("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function gl(t){const e=Rs(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e,r=!1){if(r)return e;try{return await e}catch(o){throw o instanceof ar&&Nx(o)&&t.auth.currentUser===t&&await t.auth.signOut(),o}}function Nx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const o=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),o}else{this.errorBackoff=3e4;const n=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(t){var e;const r=t.auth,o=await t.getIdToken(),n=await Uo(t,Rn(r,{idToken:o}));L(n==null?void 0:n.users.length,r,"internal-error");const i=n.users[0];t._notifyReloadListener(i);const s=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rd(i.providerUserInfo):[],l=zx(t.providerData,s),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=a?c:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new es(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function Lx(t){const e=jt(t);await On(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zx(t,e){return[...t.filter(o=>!e.some(n=>n.providerId===o.providerId)),...e]}function Rd(t){return t.map(e=>{var{providerId:r}=e,o=Is(e,["providerId"]);return{providerId:r,uid:o.rawId||"",displayName:o.displayName||null,email:o.email||null,phoneNumber:o.phoneNumber||null,photoURL:o.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(t,e){const r=await Ed(t,{},async()=>{const o=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:i}=t.config,s=await Pd(t,n,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:o};return t.emulatorConfig&&Qn(t.emulatorConfig.host)&&(a.credentials="include"),Id.fetch()(s,a)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function jx(t,e){return cr(t,"POST","/v2/accounts:revokeToken",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){L(e.length!==0,"internal-error");const r=gl(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:o,refreshToken:n,expiresIn:i}=await Mx(e,r);this.updateTokensAndExpiration(o,n,Number(i))}updateTokensAndExpiration(e,r,o){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(e,r){const{refreshToken:o,accessToken:n,expirationTime:i}=r,s=new Mr;return o&&(L(typeof o=="string","internal-error",{appName:e}),s.refreshToken=o),n&&(L(typeof n=="string","internal-error",{appName:e}),s.accessToken=n),i&&(L(typeof i=="number","internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nt{constructor(e){var{uid:r,auth:o,stsTokenManager:n}=e,i=Is(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=o,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new es(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const r=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return L(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Bx(this,e)}reload(){return Lx(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let o=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),o=!0),r&&await On(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await Uo(this,Ax(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var o,n,i,s,l,a,c,d;const u=(o=r.displayName)!==null&&o!==void 0?o:void 0,f=(n=r.email)!==null&&n!==void 0?n:void 0,h=(i=r.phoneNumber)!==null&&i!==void 0?i:void 0,v=(s=r.photoURL)!==null&&s!==void 0?s:void 0,y=(l=r.tenantId)!==null&&l!==void 0?l:void 0,$=(a=r._redirectEventId)!==null&&a!==void 0?a:void 0,k=(c=r.createdAt)!==null&&c!==void 0?c:void 0,x=(d=r.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:b,isAnonymous:A,providerData:F,stsTokenManager:Z}=r;L(O&&Z,e,"internal-error");const de=Mr.fromJSON(this.name,Z);L(typeof O=="string",e,"internal-error"),Vt(u,e.name),Vt(f,e.name),L(typeof b=="boolean",e,"internal-error"),L(typeof A=="boolean",e,"internal-error"),Vt(h,e.name),Vt(v,e.name),Vt(y,e.name),Vt($,e.name),Vt(k,e.name),Vt(x,e.name);const N=new nt({uid:O,auth:e,email:f,emailVerified:b,displayName:u,isAnonymous:A,photoURL:v,phoneNumber:h,tenantId:y,stsTokenManager:de,createdAt:k,lastLoginAt:x});return F&&Array.isArray(F)&&(N.providerData=F.map(H=>Object.assign({},H))),$&&(N._redirectEventId=$),N}static async _fromIdTokenResponse(e,r,o=!1){const n=new Mr;n.updateFromServerResponse(r);const i=new nt({uid:r.localId,auth:e,stsTokenManager:n,isAnonymous:o});return await On(i),i}static async _fromGetAccountInfoResponse(e,r,o){const n=r.users[0];L(n.localId!==void 0,"internal-error");const i=n.providerUserInfo!==void 0?Rd(n.providerUserInfo):[],s=!(n.email&&n.passwordHash)&&!(i!=null&&i.length),l=new Mr;l.updateFromIdToken(o);const a=new nt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s}),c={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new es(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,c),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map;function Rt(t){zt(t instanceof Function,"Expected a class definition");let e=hl.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}Od.type="NONE";const pl=Od;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e,r){return`firebase:${t}:${e}:${r}`}class jr{constructor(e,r,o){this.persistence=e,this.auth=r,this.userKey=o;const{config:n,name:i}=this.auth;this.fullUserKey=pn(this.userKey,n.apiKey,i),this.fullPersistenceKey=pn("persistence",n.apiKey,i),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const r=await Rn(this.auth,{idToken:e}).catch(()=>{});return r?nt._fromGetAccountInfoResponse(this.auth,r,e):null}return nt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,o="authUser"){if(!r.length)return new jr(Rt(pl),e,o);const n=(await Promise.all(r.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=n[0]||Rt(pl);const s=pn(o,e.config.apiKey,e.name);let l=null;for(const c of r)try{const d=await c._get(s);if(d){let u;if(typeof d=="string"){const f=await Rn(e,{idToken:d}).catch(()=>{});if(!f)break;u=await nt._fromGetAccountInfoResponse(e,f,d)}else u=nt._fromJSON(e,d);c!==i&&(l=u),i=c;break}}catch{}const a=n.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new jr(i,e,o):(i=a[0],l&&await i._set(s,l.toJSON()),await Promise.all(r.map(async c=>{if(c!==i)try{await c._remove(s)}catch{}})),new jr(i,e,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ad(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zd(e))return"Blackberry";if(Md(e))return"Webos";if(Bd(e))return"Safari";if((e.includes("chrome/")||Nd(e))&&!e.includes("edge/"))return"Chrome";if(Ld(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=t.match(r);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function Ad(t=Le()){return/firefox\//i.test(t)}function Bd(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nd(t=Le()){return/crios\//i.test(t)}function Dd(t=Le()){return/iemobile/i.test(t)}function Ld(t=Le()){return/android/i.test(t)}function zd(t=Le()){return/blackberry/i.test(t)}function Md(t=Le()){return/webos/i.test(t)}function Os(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Fx(t=Le()){var e;return Os(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ux(){return e$()&&document.documentMode===10}function jd(t=Le()){return Os(t)||Ld(t)||Md(t)||zd(t)||/windows phone/i.test(t)||Dd(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t,e=[]){let r;switch(t){case"Browser":r=ml(Le());break;case"Worker":r=`${ml(Le())}-${t}`;break;default:r=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Yo}/${o}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const o=i=>new Promise((s,l)=>{try{const a=e(i);s(a)}catch(a){l(a)}});o.onAbort=r,this.queue.push(o);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const o of this.queue)await o(e),o.onAbort&&r.push(o.onAbort)}catch(o){r.reverse();for(const n of r)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vx(t,e={}){return cr(t,"GET","/v2/passwordPolicy",lr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=6;class Kx{constructor(e){var r,o,n,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=s.minPasswordLength)!==null&&r!==void 0?r:Hx,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(n=(o=e.allowedNonAlphanumericCharacters)===null||o===void 0?void 0:o.join(""))!==null&&n!==void 0?n:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,o,n,i,s,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(r=a.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.meetsMaxPasswordLength)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(n=a.containsLowercaseLetter)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsNumericCharacter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,r){const o=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;o&&(r.meetsMinPasswordLength=e.length>=o),n&&(r.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let o;for(let n=0;n<e.length;n++)o=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(r,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(e,r,o,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,r,o,n){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=o,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bl(this),this.idTokenSubscription=new bl(this),this.beforeStateQueue=new Wx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Rt(r)),this._initializationPromise=this.queue(async()=>{var o,n,i;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),(o=this._resolvePersistenceManagerAvailable)===null||o===void 0||o.call(this),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await Rn(this,{idToken:e}),o=await nt._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(o)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(ot(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(l,l))}):this.directlySetCurrentUser(null)}const o=await this.assertedPersistence.getCurrentUser();let n=o,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,l=n==null?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===l)&&(a!=null&&a.user)&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=o,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await On(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(At(this));const r=e?jt(e):null;return r&&L(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vx(this),r=new Kx(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,r,o){return this.registerStateListener(this.authStateSubscription,e,r,o)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,o){return this.registerStateListener(this.idTokenSubscription,e,r,o)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const o=this.onAuthStateChanged(()=>{o(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(o.tenantId=this.tenantId),await jx(this,o)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const o=await this.getOrInitRedirectPersistenceManager(r);return e===null?o.removeCurrentUser():o.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Rt(e)||this._popupRedirectResolver;L(r,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Rt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,o;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const o=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==o&&(this.lastNotifiedUid=o,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,o,n){if(this._deleted)return()=>{};const i=typeof r=="function"?r:r.next.bind(r);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{s||i(this.currentUser)}),typeof r=="function"){const a=e.addObserver(r,o,n);return()=>{s=!0,a()}}else{const a=e.addObserver(r);return()=>{s=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const o=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());o&&(r["X-Firebase-Client"]=o);const n=await this._getAppCheckToken();return n&&(r["X-Firebase-AppCheck"]=n),r}async _getAppCheckToken(){var e;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&_x(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function $r(t){return jt(t)}class bl{constructor(e){this.auth=e,this.observer=null,this.addObserver=a$(r=>this.observer=r)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qx(t){ei=t}function Ud(t){return ei.loadJS(t)}function Yx(){return ei.recaptchaEnterpriseScript}function Jx(){return ei.gapiScript}function Xx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Zx{constructor(){this.enterprise=new Qx}ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}class Qx{ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}const eT="recaptcha-enterprise",Wd="NO_RECAPTCHA";class tT{constructor(e){this.type=eT,this.auth=$r(e)}async verify(e="verify",r=!1){async function o(i){if(!r){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(s,l)=>{Ox(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Rx(a);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,s(c.siteKey)}}).catch(a=>{l(a)})})}function n(i,s,l){const a=window.grecaptcha;fl(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(c=>{s(c)}).catch(()=>{s(Wd)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Zx().execute("siteKey",{action:"verify"}):new Promise((i,s)=>{o(this.auth).then(l=>{if(!r&&fl(window.grecaptcha))n(l,i,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Yx();a.length!==0&&(a+=l),Ud(a).then(()=>{n(l,i,s)}).catch(c=>{s(c)})}}).catch(l=>{s(l)})})}}async function vl(t,e,r,o=!1,n=!1){const i=new tT(t);let s;if(n)s=Wd;else try{s=await i.verify(r)}catch{s=await i.verify(r,!0)}const l=Object.assign({},e);if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:c,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return o?Object.assign(l,{captchaResp:s}):Object.assign(l,{captchaResponse:s}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ts(t,e,r,o,n){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await vl(t,e,r,r==="getOobCode");return o(t,s)}else return o(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await vl(t,e,r,r==="getOobCode");return o(t,l)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e){const r=kd(t,"auth");if(r.isInitialized()){const n=r.getImmediate(),i=r.getOptions();if(Wr(i,e??{}))return n;lt(n,"already-initialized")}return r.initialize({options:e})}function oT(t,e){const r=(e==null?void 0:e.persistence)||[],o=(Array.isArray(r)?r:[r]).map(Rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(o,e==null?void 0:e.popupRedirectResolver)}function nT(t,e,r){const o=$r(t);L(/^https?:\/\//.test(e),o,"invalid-emulator-scheme");const n=!1,i=Vd(e),{host:s,port:l}=iT(e),a=l===null?"":`:${l}`,c={url:`${i}//${s}${a}/`},d=Object.freeze({host:s,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!o._canInitEmulator){L(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),L(Wr(c,o.config.emulator)&&Wr(d,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=c,o.emulatorConfig=d,o.settings.appVerificationDisabledForTesting=!0,Qn(s)?(K5(`${i}//${s}${a}`),Y5("Auth",!0)):sT()}function Vd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function iT(t){const e=Vd(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const o=r[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(o);if(n){const i=n[1];return{host:i,port:yl(o.substr(i.length+1))}}else{const[i,s]=o.split(":");return{host:i,port:yl(s)}}}function yl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sT(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,r){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function aT(t,e){return cr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}async function dT(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends As{constructor(e,r,o,n=null){super("password",o),this._email=e,this._password=r,this._tenantId=n}static _fromEmailAndPassword(e,r){return new Wo(e,r,"password")}static _fromEmailAndCode(e,r,o=null){return new Wo(e,r,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ts(e,r,"signInWithPassword",lT);case"emailLink":return cT(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const o={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ts(e,o,"signUpPassword",aT);case"emailLink":return dT(e,{idToken:r,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t,e){return Xo(t,"POST","/v1/accounts:signInWithIdp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="http://localhost";class _r extends As{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):lt("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:o,signInMethod:n}=r,i=Is(r,["providerId","signInMethod"]);if(!o||!n)return null;const s=new _r(o,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const r=this.buildRequest();return Fr(e,r)}_linkToIdToken(e,r){const o=this.buildRequest();return o.idToken=r,Fr(e,o)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Fr(e,r)}buildRequest(){const e={requestUri:uT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=qo(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gT(t){const e=ro(oo(t)).link,r=e?ro(oo(e)).deep_link_id:null,o=ro(oo(t)).deep_link_id;return(o?ro(oo(o)).link:null)||o||r||e||t}class Bs{constructor(e){var r,o,n,i,s,l;const a=ro(oo(e)),c=(r=a.apiKey)!==null&&r!==void 0?r:null,d=(o=a.oobCode)!==null&&o!==void 0?o:null,u=fT((n=a.mode)!==null&&n!==void 0?n:null);L(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(s=a.lang)!==null&&s!==void 0?s:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const r=gT(e);try{return new Bs(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.providerId=Hr.PROVIDER_ID}static credential(e,r){return Wo._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const o=Bs.parseLink(r);return L(o,"argument-error"),Wo._fromEmailAndCode(e,o.code,o.tenantId)}}Hr.PROVIDER_ID="password";Hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends Hd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Zo{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return _r._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:o}=e;if(!r&&!o)return null;try{return Yt.credential(r,o)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Zo{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Zo{constructor(){super("twitter.com")}static credential(e,r){return _r._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:o}=e;if(!r||!o)return null;try{return Xt.credential(r,o)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT(t,e){return Xo(t,"POST","/v1/accounts:signUp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,o,n=!1){const i=await nt._fromIdTokenResponse(e,o,n),s=kl(o);return new Sr({user:i,providerId:s,_tokenResponse:o,operationType:r})}static async _forOperation(e,r,o){await e._updateTokensIfNecessary(o,!0);const n=kl(o);return new Sr({user:e,providerId:n,_tokenResponse:o,operationType:r})}}function kl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends ar{constructor(e,r,o,n){var i;super(r.code,r.message),this.operationType=o,this.user=n,Object.setPrototypeOf(this,An.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:r.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(e,r,o,n){return new An(e,r,o,n)}}function Kd(t,e,r,o){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?An._fromErrorAndOperation(t,i,e,o):i})}async function pT(t,e,r=!1){const o=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Sr._forOperation(t,"link",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(t,e,r=!1){const{auth:o}=t;if(ot(o.app))return Promise.reject(At(o));const n="reauthenticate";try{const i=await Uo(t,Kd(o,n,e,t),r);L(i.idToken,o,"internal-error");const s=Rs(i.idToken);L(s,o,"internal-error");const{sub:l}=s;return L(t.uid===l,o,"user-mismatch"),Sr._forOperation(t,n,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&lt(o,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gd(t,e,r=!1){if(ot(t.app))return Promise.reject(At(t));const o="signIn",n=await Kd(t,o,e),i=await Sr._fromIdTokenResponse(t,o,n);return r||await t._updateCurrentUser(i.user),i}async function bT(t,e){return Gd($r(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qd(t){const e=$r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vT(t,e,r){if(ot(t.app))return Promise.reject(At(t));const o=$r(t),s=await ts(o,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hT).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&qd(t),a}),l=await Sr._fromIdTokenResponse(o,"signIn",s);return await o._updateCurrentUser(l.user),l}function yT(t,e,r){return ot(t.app)?Promise.reject(At(t)):bT(jt(t),Hr.credential(e,r)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&qd(t),o})}function kT(t,e,r,o){return jt(t).onIdTokenChanged(e,r,o)}function wT(t,e,r){return jt(t).beforeAuthStateChanged(e,r)}function _T(t,e,r,o){return jt(t).onAuthStateChanged(e,r,o)}function ST(t){return jt(t).signOut()}const Bn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Bn,"1"),this.storage.removeItem(Bn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=1e3,$T=10;class Jd extends Yd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const o=this.storage.getItem(r),n=this.localCache[r];o!==n&&e(r,n,o)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((s,l,a)=>{this.notifyListeners(s,a)});return}const o=e.key;r?this.detachListener():this.stopPolling();const n=()=>{const s=this.storage.getItem(o);!r&&this.localCache[o]===s||this.notifyListeners(o,s)},i=this.storage.getItem(o);Ux()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,$T):n()}notifyListeners(e,r){this.localCache[e]=r;const o=this.listeners[e];if(o)for(const n of Array.from(o))n(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:o}),!0)})},CT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jd.type="LOCAL";const xT=Jd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends Yd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Xd.type="SESSION";const Zd=Xd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(n=>n.isListeningto(e));if(r)return r;const o=new ti(e);return this.receivers.push(o),o}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:o,eventType:n,data:i}=r.data,s=this.handlersMap[n];if(!(s!=null&&s.size))return;r.ports[0].postMessage({status:"ack",eventId:o,eventType:n});const l=Array.from(s).map(async c=>c(r.origin,i)),a=await TT(l);r.ports[0].postMessage({status:"done",eventId:o,eventType:n,response:a})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ti.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t="",e=10){let r="";for(let o=0;o<e;o++)r+=Math.floor(Math.random()*10);return t+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,o=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let i,s;return new Promise((l,a)=>{const c=Ns("",20);n.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},o);s={messageChannel:n,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:r},[n.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function ET(t){_t().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function PT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OT(){return Qd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="firebaseLocalStorageDb",AT=1,Nn="firebaseLocalStorage",tu="fbase_key";class Qo{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function ri(t,e){return t.transaction([Nn],e?"readwrite":"readonly").objectStore(Nn)}function BT(){const t=indexedDB.deleteDatabase(eu);return new Qo(t).toPromise()}function rs(){const t=indexedDB.open(eu,AT);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const o=t.result;try{o.createObjectStore(Nn,{keyPath:tu})}catch(n){r(n)}}),t.addEventListener("success",async()=>{const o=t.result;o.objectStoreNames.contains(Nn)?e(o):(o.close(),await BT(),e(await rs()))})})}async function wl(t,e,r){const o=ri(t,!0).put({[tu]:e,value:r});return new Qo(o).toPromise()}async function NT(t,e){const r=ri(t,!1).get(e),o=await new Qo(r).toPromise();return o===void 0?null:o.value}function _l(t,e){const r=ri(t,!0).delete(e);return new Qo(r).toPromise()}const DT=800,LT=3;class ru{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rs(),this.db)}async _withRetries(e){let r=0;for(;;)try{const o=await this._openDb();return await e(o)}catch(o){if(r++>LT)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ti._getInstance(OT()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await PT(),!this.activeServiceWorker)return;this.sender=new IT(this.activeServiceWorker);const o=await this.sender._send("ping",{},800);o&&!((e=o[0])===null||e===void 0)&&e.fulfilled&&!((r=o[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rs();return await wl(e,Bn,"1"),await _l(e,Bn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(o=>wl(o,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(o=>NT(o,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>_l(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const i=ri(n,!1).getAll();return new Qo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],o=new Set;if(e.length!==0)for(const{fbase_key:n,value:i}of e)o.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),r.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!o.has(n)&&(this.notifyListeners(n,null),r.push(n));return r}notifyListeners(e,r){this.localCache[e]=r;const o=this.listeners[e];if(o)for(const n of Array.from(o))n(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ru.type="LOCAL";const zT=ru;new Jo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t,e){return e?Rt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends As{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Fr(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function jT(t){return Gd(t.auth,new Ds(t),t.bypassAuthState)}function FT(t){const{auth:e,user:r}=t;return L(r,e,"internal-error"),mT(r,new Ds(t),t.bypassAuthState)}async function UT(t){const{auth:e,user:r}=t;return L(r,e,"internal-error"),pT(r,new Ds(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,r,o,n,i=!1){this.auth=e,this.resolver=o,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:o,postBody:n,tenantId:i,error:s,type:l}=e;if(s){this.reject(s);return}const a={auth:this.auth,requestUri:r,sessionId:o,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jT;case"linkViaPopup":case"linkViaRedirect":return UT;case"reauthViaPopup":case"reauthViaRedirect":return FT;default:lt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new Jo(2e3,1e4);class Or extends ou{constructor(e,r,o,n,i){super(e,r,n,i),this.provider=o,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=Ns();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,o;if(!((o=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||o===void 0)&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WT.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="pendingRedirect",mn=new Map;class HT extends ou{constructor(e,r,o=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,o),this.eventId=null}async execute(){let e=mn.get(this.auth._key());if(!e){try{const o=await KT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(o)}catch(r){e=()=>Promise.reject(r)}mn.set(this.auth._key(),e)}return this.bypassAuthState||mn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KT(t,e){const r=YT(e),o=qT(t);if(!await o._isAvailable())return!1;const n=await o._get(r)==="true";return await o._remove(r),n}function GT(t,e){mn.set(t._key(),e)}function qT(t){return Rt(t._redirectPersistence)}function YT(t){return pn(VT,t.config.apiKey,t.name)}async function JT(t,e,r=!1){if(ot(t.app))return Promise.reject(At(t));const o=$r(t),n=MT(o,e),s=await new HT(o,n,r).execute();return s&&!r&&(delete s.user._redirectEventId,await o._persistUserIfCurrent(s.user),await o._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=600*1e3;class ZT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(e,o)&&(r=!0,this.sendToConsumer(e,o),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QT(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var o;if(e.error&&!nu(e)){const n=((o=e.error.code)===null||o===void 0?void 0:o.split("auth/")[1])||"internal-error";r.onError(wt(this.auth,n))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const o=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&o}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sl(e))}saveEventToCache(e){this.cachedEventUids.add(Sl(e)),this.lastProcessedEventTime=Date.now()}}function Sl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rI=/^https?/;async function oI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eI(t);for(const r of e)try{if(nI(r))return}catch{}lt(t,"unauthorized-domain")}function nI(t){const e=Qi(),{protocol:r,hostname:o}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&o===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&s.hostname===o}if(!rI.test(r))return!1;if(tI.test(t))return o===t;const n=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(o)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=new Jo(3e4,6e4);function Cl(){const t=_t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function sI(t){return new Promise((e,r)=>{var o,n,i;function s(){Cl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cl(),r(wt(t,"network-request-failed"))},timeout:iI.get()})}if(!((n=(o=_t().gapi)===null||o===void 0?void 0:o.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((i=_t().gapi)===null||i===void 0)&&i.load)s();else{const l=Xx("iframefcb");return _t()[l]=()=>{gapi.load?s():r(wt(t,"network-request-failed"))},Ud(`${Jx()}?onload=${l}`).catch(a=>r(a))}}).catch(e=>{throw bn=null,e})}let bn=null;function aI(t){return bn=bn||sI(t),bn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new Jo(5e3,15e3),cI="__/auth/iframe",dI="emulator/auth/iframe",uI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gI(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Ps(e,dI):`https://${t.config.authDomain}/${cI}`,o={apiKey:e.apiKey,appName:t.name,v:Yo},n=fI.get(t.config.apiHost);n&&(o.eid=n);const i=t._getFrameworks();return i.length&&(o.fw=i.join(",")),`${r}?${qo(o).slice(1)}`}async function hI(t){const e=await aI(t),r=_t().gapi;return L(r,t,"internal-error"),e.open({where:document.body,url:gI(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uI,dontclear:!0},o=>new Promise(async(n,i)=>{await o.restyle({setHideOnLeave:!1});const s=wt(t,"network-request-failed"),l=_t().setTimeout(()=>{i(s)},lI.get());function a(){_t().clearTimeout(l),n(o)}o.ping(a).then(a,()=>{i(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mI=500,bI=600,vI="_blank",yI="http://localhost";class $l{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kI(t,e,r,o=mI,n=bI){const i=Math.max((window.screen.availHeight-n)/2,0).toString(),s=Math.max((window.screen.availWidth-o)/2,0).toString();let l="";const a=Object.assign(Object.assign({},pI),{width:o.toString(),height:n.toString(),top:i,left:s}),c=Le().toLowerCase();r&&(l=Nd(c)?vI:r),Ad(c)&&(e=e||yI,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[h,v])=>`${f}${h}=${v},`,"");if(Fx(c)&&l!=="_self")return wI(e||"",l),new $l(null);const u=window.open(e||"",l,d);L(u,t,"popup-blocked");try{u.focus()}catch{}return new $l(u)}function wI(t,e){const r=document.createElement("a");r.href=t,r.target=e;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="__/auth/handler",SI="emulator/auth/handler",CI=encodeURIComponent("fac");async function xl(t,e,r,o,n,i){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:o,v:Yo,eventId:n};if(e instanceof Hd){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",s$(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))s[d]=u}if(e instanceof Zo){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),c=a?`#${CI}=${encodeURIComponent(a)}`:"";return`${$I(t)}?${qo(l).slice(1)}${c}`}function $I({config:t}){return t.emulator?Ps(t,SI):`https://${t.authDomain}/${_I}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="webStorageSupport";class xI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zd,this._completeRedirectFn=JT,this._overrideRedirectResult=GT}async _openPopup(e,r,o,n){var i;zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await xl(e,r,o,Qi(),n);return kI(e,s,Ns())}async _openRedirect(e,r,o,n){await this._originValidation(e);const i=await xl(e,r,o,Qi(),n);return ET(i),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:n,promise:i}=this.eventManagers[r];return n?Promise.resolve(n):(zt(i,"If manager is not set, promise should be"),i)}const o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch(()=>{delete this.eventManagers[r]}),o}async initAndGetManager(e){const r=await hI(e),o=new ZT(e);return r.register("authEvent",n=>(L(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:o.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:o},this.iframes[e._key()]=r,o}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send($i,{type:$i},n=>{var i;const s=(i=n==null?void 0:n[0])===null||i===void 0?void 0:i[$i];s!==void 0&&r(!!s),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=oI(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return jd()||Bd()||Os()}}const TI=xI;var Tl="@firebase/auth",Il="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(o=>{e((o==null?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PI(t){jo(new Vr("auth",(e,{options:r})=>{const o=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=o.options;L(s&&!s.includes(":"),"invalid-api-key",{appName:o.name});const a={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fd(t)},c=new Gx(o,n,i,a);return oT(c,r),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,o)=>{e.getProvider("auth-internal").initialize()})),jo(new Vr("auth-internal",e=>{const r=$r(e.getProvider("auth").getImmediate());return(o=>new II(o))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),zr(Tl,Il,EI(t)),zr(Tl,Il,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=300,OI=md("authIdTokenMaxAge")||RI;let El=null;const AI=t=>async e=>{const r=e&&await e.getIdTokenResult(),o=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(o&&o>OI)return;const n=r==null?void 0:r.token;El!==n&&(El=n,await fetch(t,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function BI(t=_d()){const e=kd(t,"auth");if(e.isInitialized())return e.getImmediate();const r=rT(t,{popupRedirectResolver:TI,persistence:[zT,xT,Zd]}),o=md("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(o,location.origin);if(location.origin===i.origin){const s=AI(i.toString());wT(r,s,()=>s(r.currentUser)),kT(r,l=>s(l))}}const n=V5("auth");return n&&nT(r,`http://${n}`),r}function NI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}qx({loadJS(t){return new Promise((e,r)=>{const o=document.createElement("script");o.setAttribute("src",t),o.onload=e,o.onerror=n=>{const i=wt("internal-error");i.customData=n,r(i)},o.type="text/javascript",o.charset="UTF-8",NI().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PI("Browser");const DI={apiKey:"AIzaSyCI5_E9ycNZZgQSe1V_jNhThFJe9yeWtKI",authDomain:"xenvoq-dev.firebaseapp.com",projectId:"xenvoq-dev",storageBucket:"xenvoq-dev.firebasestorage.app",messagingSenderId:"469963694224",appId:"1:469963694224:web:0870d5569360436164f815"},LI=lx().length?_d():wd(DI),Ir=BI(LI),zI={class:"page-shell"},MI={class:"intro","aria-labelledby":"page-title"},jI={key:0,class:"loading-state","aria-live":"polite"},FI={key:1,class:"time-readout","aria-live":"polite"},UI={class:"time-value"},WI={class:"date-value"},VI={class:"card-actions"},HI={__name:"App",setup(t){const e="https://xenvoq-gateway-5zwc8z9s.ew.gateway.dev".replace(/\/$/,""),r=Xe(null),o=Xe(!1),n=Xe(""),i=Xe(""),s=Xe(""),l=Xe(!1),a=Xe(null),c=Xe(!1),d=Di(()=>r.value?new Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date(r.value)):"--:--:--"),u=Di(()=>r.value?new Intl.DateTimeFormat(void 0,{weekday:"long",month:"long",day:"numeric",year:"numeric"}).format(new Date(r.value)):"Waiting for the API");async function f(){if(Ir.currentUser){o.value=!0,n.value="";try{const $=await Ir.currentUser.getIdToken(),k=await fetch(`${e}/time`,{headers:{Authorization:`Bearer ${$}`}});if(!k.ok)throw new Error(`API returned ${k.status}`);const x=await k.json();if(!x.time)throw new Error("The API response did not include a time");r.value=x.time}catch($){n.value=`Could not reach the time service. ${$.message}`}finally{o.value=!1}}}async function h(){n.value="";try{l.value?await vT(Ir,i.value,s.value):await yT(Ir,i.value,s.value),s.value=""}catch($){n.value=$.message}}async function v(){await ST(Ir),r.value=null}let y;return Gn(()=>{y=_T(Ir,$=>{a.value=$,c.value=!0,$&&f()})}),ms(()=>y==null?void 0:y()),($,k)=>(V(),he("main",zI,[ve("section",MI,[me(Fe(dd),{value:"LIVE API",severity:"success",rounded:""}),k[3]||(k[3]=ve("p",{class:"eyebrow"},"XENVOQ / SYSTEM CLOCK",-1)),k[4]||(k[4]=ve("h1",{id:"page-title"},"A moment, served fresh.",-1)),k[5]||(k[5]=ve("p",{class:"lede"},"A small readout from the Xenvoq API, rendered in your local timezone.",-1))]),c.value&&!a.value?(V(),We(Fe(Vi),{key:0,class:"time-card auth-card"},{title:Ke(()=>[Kt(tt(l.value?"Create your account":"Sign in to continue"),1)]),subtitle:Ke(()=>[...k[6]||(k[6]=[Kt("Use your Firebase email account",-1)])]),content:Ke(()=>[ve("form",{class:"auth-form",onSubmit:Ag(h,["prevent"])},[k[7]||(k[7]=ve("label",{for:"email"},"Email",-1)),me(Fe(Hi),{id:"email",modelValue:i.value,"onUpdate:modelValue":k[0]||(k[0]=x=>i.value=x),type:"email",autocomplete:"email",required:""},null,8,["modelValue"]),k[8]||(k[8]=ve("label",{for:"password"},"Password",-1)),me(Fe(Hi),{id:"password",modelValue:s.value,"onUpdate:modelValue":k[1]||(k[1]=x=>s.value=x),type:"password",autocomplete:"current-password",minlength:"6",required:""},null,8,["modelValue"]),n.value?(V(),We(Fe(Gi),{key:0,severity:"error",closable:!1,class:"error-message"},{default:Ke(()=>[Kt(tt(n.value),1)]),_:1})):xe("",!0),me(Fe(to),{type:"submit",label:l.value?"Create account":"Sign in",icon:"pi pi-arrow-right"},null,8,["label"])],32)]),footer:Ke(()=>[me(Fe(to),{text:"",label:l.value?"Already have an account? Sign in":"Need an account? Register",onClick:k[2]||(k[2]=x=>l.value=!l.value)},null,8,["label"])]),_:1})):c.value?(V(),We(Fe(Vi),{key:1,class:"time-card"},{title:Ke(()=>[...k[9]||(k[9]=[Kt("Current API time",-1)])]),subtitle:Ke(()=>[Kt(tt(a.value.email)+" · "+tt(Fe(e))+"/time",1)]),content:Ke(()=>[o.value&&!r.value?(V(),he("div",jI,[me(Fe(cd),{"stroke-width":"4","aria-label":"Loading time"}),k[10]||(k[10]=ve("span",null,"Contacting the service...",-1))])):(V(),he("div",FI,[ve("span",UI,tt(d.value),1),ve("span",WI,tt(u.value),1)])),n.value?(V(),We(Fe(Gi),{key:2,severity:"error",closable:!1,class:"error-message"},{default:Ke(()=>[Kt(tt(n.value),1)]),_:1})):xe("",!0)]),footer:Ke(()=>[ve("div",VI,[me(Fe(to),{label:"Refresh time",icon:"pi pi-refresh",loading:o.value,onClick:f},null,8,["loading"]),me(Fe(to),{label:"Sign out",icon:"pi pi-sign-out",severity:"secondary",text:"",onClick:v})])]),_:1})):xe("",!0)]))}},iu=Dg(HI);iu.use(Bh,{theme:{preset:ES,options:{darkModeSelector:!1}}});iu.mount("#app");
