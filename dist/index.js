"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var N=c(function(R,q){
var t=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-pow/dist');function x(e,r,n){var i,u;return t(e)||t(r)||t(n)||r<=0||n<=0?NaN:e<=0?0:(i=e/r,u=f(i,n),n/r*f(i,n-1)/f(1+u,2))}q.exports=x
});var y=c(function(g,a){
var w=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-pow/dist');function m(e,r){if(o(e)||o(r)||e<=0||r<=0)return w(NaN);return n;function n(i){var u,v;return o(i)?NaN:i<=0?0:(u=i/e,v=s(u,r),r/e*s(u,r-1)/s(1+v,2))}}a.exports=m
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=N(),F=y();p(d,"factory",F);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
