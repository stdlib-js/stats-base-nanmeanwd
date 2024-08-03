"use strict";var s=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var c=s(function(b,o){
function y(r,a,t){var v,n,i,e,u;if(r<=0)return NaN;if(r===1||t===0)return a[0];for(t<0?n=(1-r)*t:n=0,v=0,e=0,u=0;u<r;u++)i=a[n],i===i&&(e+=1,v+=(i-v)/e),n+=t;return e===0?NaN:v}o.exports=y
});var p=s(function(g,m){
function N(r,a,t,v){var n,i,e,u,f;if(r<=0)return NaN;if(r===1||t===0)return a[v];for(i=v,n=0,u=0,f=0;f<r;f++)e=a[i],e===e&&(u+=1,n+=(e-n)/u),i+=t;return u===0?NaN:n}m.exports=N
});var w=s(function(h,x){
var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),l=p();d(q,"ndarray",l);x.exports=q
});var O=w();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
