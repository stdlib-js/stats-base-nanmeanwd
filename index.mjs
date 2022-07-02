// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function e(r,e,n){var t,a,i,f,u;if(r<=0)return NaN;if(1===r||0===n)return e[0];for(a=n<0?(1-r)*n:0,t=0,f=0,u=0;u<r;u++)(i=e[a])==i&&(t+=(i-t)/(f+=1)),a+=n;return 0===f?NaN:t}r(e,"ndarray",(function(r,e,n,t){var a,i,f,u,o;if(r<=0)return NaN;if(1===r||0===n)return e[t];for(i=t,a=0,u=0,o=0;o<r;o++)(f=e[i])==f&&(a+=(f-a)/(u+=1)),i+=n;return 0===u?NaN:a}));export{e as default};
//# sourceMappingURL=index.mjs.map
