var O=typeof global=="object"&&global&&global.Object===Object&&global,B=typeof self=="object"&&self&&self.Object===Object&&self,x=O||B||Function("return this")(),p=x.Symbol,w=Object.prototype,U=w.hasOwnProperty,M=w.toString,u=p?p.toStringTag:void 0;function R(r){var t=U.call(r,u),e=r[u];try{r[u]=void 0;var o=!0}catch{}var i=M.call(r);return o&&(t?r[u]=e:delete r[u]),i}var G=Object.prototype,L=G.toString;function N(r){return L.call(r)}var _="[object Null]",q="[object Undefined]",d=p?p.toStringTag:void 0;function j(r){return r==null?r===void 0?q:_:d&&d in Object(r)?R(r):N(r)}function l(r){return r!=null&&typeof r=="object"}var E=Array.isArray;function C(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}function K(r){return r}var D="[object AsyncFunction]",V="[object Function]",X="[object GeneratorFunction]",k="[object Proxy]";function W(r){if(!C(r))return!1;var t=j(r);return t==V||t==X||t==D||t==k}function z(r,t){for(var e=-1,o=r==null?0:r.length;++e<o&&t(r[e],e,r)!==!1;);return r}var H=9007199254740991,J=/^(?:0|[1-9]\d*)$/;function Q(r,t){var e=typeof r;return t=t??H,!!t&&(e=="number"||e!="symbol"&&J.test(r))&&r>-1&&r%1==0&&r<t}var Y=9007199254740991;function S(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Y}function $(r){return r!=null&&S(r.length)&&!W(r)}var Z=Object.prototype;function rr(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||Z;return r===e}function tr(r,t){for(var e=-1,o=Array(r);++e<r;)o[e]=t(e);return o}var er="[object Arguments]";function T(r){return l(r)&&j(r)==er}var P=Object.prototype,nr=P.hasOwnProperty,or=P.propertyIsEnumerable,ar=T(function(){return arguments}())?T:function(r){return l(r)&&nr.call(r,"callee")&&!or.call(r,"callee")};function ir(){return!1}var F=typeof exports=="object"&&exports&&!exports.nodeType&&exports,v=F&&typeof module=="object"&&module&&!module.nodeType&&module,sr=v&&v.exports===F,h=sr?x.Buffer:void 0,cr=h?h.isBuffer:void 0,fr=cr||ir,ur="[object Arguments]",br="[object Array]",gr="[object Boolean]",pr="[object Date]",yr="[object Error]",jr="[object Function]",lr="[object Map]",dr="[object Number]",Tr="[object Object]",vr="[object RegExp]",hr="[object Set]",mr="[object String]",Ar="[object WeakMap]",Or="[object ArrayBuffer]",xr="[object DataView]",wr="[object Float32Array]",Er="[object Float64Array]",Sr="[object Int8Array]",$r="[object Int16Array]",Pr="[object Int32Array]",Fr="[object Uint8Array]",Ir="[object Uint8ClampedArray]",Br="[object Uint16Array]",Ur="[object Uint32Array]",n={};n[wr]=n[Er]=n[Sr]=n[$r]=n[Pr]=n[Fr]=n[Ir]=n[Br]=n[Ur]=!0;n[ur]=n[br]=n[Or]=n[gr]=n[xr]=n[pr]=n[yr]=n[jr]=n[lr]=n[dr]=n[Tr]=n[vr]=n[hr]=n[mr]=n[Ar]=!1;function Mr(r){return l(r)&&S(r.length)&&!!n[j(r)]}function Rr(r){return function(t){return r(t)}}var I=typeof exports=="object"&&exports&&!exports.nodeType&&exports,b=I&&typeof module=="object"&&module&&!module.nodeType&&module,Gr=b&&b.exports===I,y=Gr&&O.process,m=function(){try{var r=b&&b.require&&b.require("util").types;return r||y&&y.binding&&y.binding("util")}catch{}}(),A=m&&m.isTypedArray,Lr=A?Rr(A):Mr,Nr=Object.prototype,_r=Nr.hasOwnProperty;function qr(r,t){var e=E(r),o=!e&&ar(r),i=!e&&!o&&fr(r),a=!e&&!o&&!i&&Lr(r),c=e||o||i||a,f=c?tr(r.length,String):[],g=f.length;for(var s in r)(t||_r.call(r,s))&&!(c&&(s=="length"||i&&(s=="offset"||s=="parent")||a&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||Q(s,g)))&&f.push(s);return f}function Cr(r,t){return function(e){return r(t(e))}}var Kr=Cr(Object.keys,Object),Dr=Object.prototype,Vr=Dr.hasOwnProperty;function Xr(r){if(!rr(r))return Kr(r);var t=[];for(var e in Object(r))Vr.call(r,e)&&e!="constructor"&&t.push(e);return t}function kr(r){return $(r)?qr(r):Xr(r)}function Wr(r){return function(t,e,o){for(var i=-1,a=Object(t),c=o(t),f=c.length;f--;){var g=c[++i];if(e(a[g],g,a)===!1)break}return t}}var zr=Wr();function Hr(r,t){return r&&zr(r,t,kr)}function Jr(r,t){return function(e,o){if(e==null)return e;if(!$(e))return r(e,o);for(var i=e.length,a=-1,c=Object(e);++a<i&&o(c[a],a,c)!==!1;);return e}}var Qr=Jr(Hr);function Yr(r){return typeof r=="function"?r:K}function Zr(r,t){var e=E(r)?z:Qr;return e(r,Yr(t))}export{p as S,E as a,j as b,C as c,W as d,rr as e,Zr as f,$ as g,qr as h,l as i,Rr as j,kr as k,fr as l,z as m,m as n,Cr as o,Lr as p,S as q,x as r,Q as s,ar as t,K as u,Qr as v};
