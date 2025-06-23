"use strict";var f=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var d=f(function(z,m){
function w(a,r,e,c){var u,s,i,t,n,v,o;if(u=r.data,s=r.accessors[0],a===1||e===0)return s(u,c);for(t=c,i=0,v=0,o=0;o<a;o++)n=s(u,t),n===n&&(v+=1,i+=(n-i)/v),t+=e;return v===0?NaN:i}m.exports=w
});var q=f(function(A,y){
var b=require('@stdlib/array-base-arraylike2object/dist'),g=d();function j(a,r,e,c){var u,s,i,t,n,v;if(a<=0)return NaN;if(i=b(r),i.accessorProtocol)return g(a,i,e,c);if(a===1||e===0)return r[c];for(s=c,u=0,n=0,v=0;v<a;v++)t=r[s],t===t&&(n+=1,u+=(t-u)/n),s+=e;return n===0?NaN:u}y.exports=j
});var x=f(function(B,p){
var k=require('@stdlib/strided-base-stride2offset/dist'),N=q();function O(a,r,e){return N(a,r,e,k(a,e))}p.exports=O
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=x(),R=q();P(l,"ndarray",R);module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
