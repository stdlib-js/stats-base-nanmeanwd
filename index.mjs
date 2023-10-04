// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function n(r,n,e){var t,a,i,f,o;if(r<=0)return NaN;if(1===r||0===e)return n[0];for(a=e<0?(1-r)*e:0,t=0,f=0,o=0;o<r;o++)(i=n[a])==i&&(t+=(i-t)/(f+=1)),a+=e;return 0===f?NaN:t}r(n,"ndarray",(function(r,n,e,t){var a,i,f,o,u;if(r<=0)return NaN;if(1===r||0===e)return n[t];for(i=t,a=0,o=0,u=0;u<r;u++)(f=n[i])==f&&(a+=(f-a)/(o+=1)),i+=e;return 0===o?NaN:a}));const{ndarray:e}=n;export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
