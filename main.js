(()=>{var t={3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},9670:(t,r,e)=>{var n=e(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},8533:(t,r,e)=>{"use strict";var n=e(2092).forEach,o=e(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,r,e)=>{var n=e(5656),o=e(7466),i=e(1400),c=function(t){return function(r,e,c){var a,u=n(r),s=o(u.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},2092:(t,r,e)=>{var n=e(9974),o=e(8361),i=e(7908),c=e(7466),a=e(5417),u=[].push,s=function(t){var r=1==t,e=2==t,s=3==t,f=4==t,l=6==t,p=7==t,v=5==t||l;return function(y,h,g,b){for(var x,d,m=i(y),S=o(m),w=n(h,g,3),L=c(S.length),O=0,E=b||a,T=r?E(y,L):e||p?E(y,0):void 0;L>O;O++)if((v||O in S)&&(d=w(x=S[O],O,m),t))if(r)T[O]=d;else if(d)switch(t){case 3:return!0;case 5:return x;case 6:return O;case 2:u.call(T,x)}else switch(t){case 4:return!1;case 7:u.call(T,x)}return l?-1:s||f?f:T}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},1194:(t,r,e)=>{var n=e(7293),o=e(5112),i=e(7392),c=o("species");t.exports=function(t){return i>=51||!n((function(){var r=[];return(r.constructor={})[c]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},9341:(t,r,e)=>{"use strict";var n=e(7293);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},7475:(t,r,e)=>{var n=e(111),o=e(3157),i=e(5112)("species");t.exports=function(t){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),void 0===r?Array:r}},5417:(t,r,e)=>{var n=e(7475);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},4326:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},9920:(t,r,e)=>{var n=e(6656),o=e(3887),i=e(1236),c=e(3070);t.exports=function(t,r){for(var e=o(r),a=c.f,u=i.f,s=0;s<e.length;s++){var f=e[s];n(t,f)||a(t,f,u(r,f))}}},8880:(t,r,e)=>{var n=e(9781),o=e(3070),i=e(9114);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},9114:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},6135:(t,r,e)=>{"use strict";var n=e(4948),o=e(3070),i=e(9114);t.exports=function(t,r,e){var c=n(r);c in t?o.f(t,c,i(0,e)):t[c]=e}},9781:(t,r,e)=>{var n=e(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,r,e)=>{var n=e(7854),o=e(111),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:(t,r,e)=>{var n=e(5005);t.exports=n("navigator","userAgent")||""},7392:(t,r,e)=>{var n,o,i=e(7854),c=e(8113),a=i.process,u=i.Deno,s=a&&a.versions||u&&u.version,f=s&&s.v8;f?o=(n=f.split("."))[0]<4?1:n[0]+n[1]:c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,r,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),c=e(1320),a=e(3505),u=e(9920),s=e(4705);t.exports=function(t,r){var e,f,l,p,v,y=t.target,h=t.global,g=t.stat;if(e=h?n:g?n[y]||a(y,{}):(n[y]||{}).prototype)for(f in r){if(p=r[f],l=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(h?f:y+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,r,e)=>{var n=e(3099);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},5005:(t,r,e)=>{var n=e(7854),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?o(n[t]):n[t]&&n[t][r]}},7854:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},6656:(t,r,e)=>{var n=e(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,r){return o.call(n(t),r)}},3501:t=>{t.exports={}},4664:(t,r,e)=>{var n=e(9781),o=e(7293),i=e(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,r,e)=>{var n=e(7293),o=e(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,r,e)=>{var n=e(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,r,e)=>{var n,o,i,c=e(8536),a=e(7854),u=e(111),s=e(8880),f=e(6656),l=e(5465),p=e(6200),v=e(3501),y="Object already initialized",h=a.WeakMap;if(c||l.state){var g=l.state||(l.state=new h),b=g.get,x=g.has,d=g.set;n=function(t,r){if(x.call(g,t))throw new TypeError(y);return r.facade=t,d.call(g,t,r),r},o=function(t){return b.call(g,t)||{}},i=function(t){return x.call(g,t)}}else{var m=p("state");v[m]=!0,n=function(t,r){if(f(t,m))throw new TypeError(y);return r.facade=t,s(t,m,r),r},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!u(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},3157:(t,r,e)=>{var n=e(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:(t,r,e)=>{var n=e(7293),o=/#|\.prototype\./,i=function(t,r){var e=a[c(t)];return e==s||e!=u&&("function"==typeof r?n(r):!!r)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},2190:(t,r,e)=>{var n=e(5005),o=e(3307);t.exports=o?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return"function"==typeof r&&Object(t)instanceof r}},133:(t,r,e)=>{var n=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,r,e)=>{var n=e(7854),o=e(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3070:(t,r,e)=>{var n=e(9781),o=e(4664),i=e(9670),c=e(4948),a=Object.defineProperty;r.f=n?a:function(t,r,e){if(i(t),r=c(r),i(e),o)try{return a(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},1236:(t,r,e)=>{var n=e(9781),o=e(5296),i=e(9114),c=e(5656),a=e(4948),u=e(6656),s=e(4664),f=Object.getOwnPropertyDescriptor;r.f=n?f:function(t,r){if(t=c(t),r=a(r),s)try{return f(t,r)}catch(t){}if(u(t,r))return i(!o.f.call(t,r),t[r])}},8006:(t,r,e)=>{var n=e(6324),o=e(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,r)=>{r.f=Object.getOwnPropertySymbols},6324:(t,r,e)=>{var n=e(6656),o=e(5656),i=e(1318).indexOf,c=e(3501);t.exports=function(t,r){var e,a=o(t),u=0,s=[];for(e in a)!n(c,e)&&n(a,e)&&s.push(e);for(;r.length>u;)n(a,e=r[u++])&&(~i(s,e)||s.push(e));return s}},5296:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},2140:(t,r,e)=>{var n=e(111);t.exports=function(t,r){var e,o;if("string"===r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if("string"!==r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},3887:(t,r,e)=>{var n=e(5005),o=e(8006),i=e(5181),c=e(9670);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(c(t)),e=i.f;return e?r.concat(e(t)):r}},1320:(t,r,e)=>{var n=e(7854),o=e(8880),i=e(6656),c=e(3505),a=e(2788),u=e(9909),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,r,e,a){var u,s=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,v=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),(u=f(e)).source||(u.source=l.join("string"==typeof r?r:""))),t!==n?(s?!v&&t[r]&&(p=!0):delete t[r],p?t[r]=e:o(t,r,e)):p?t[r]=e:c(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,r,e)=>{var n=e(7854);t.exports=function(t,r){try{Object.defineProperty(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},6200:(t,r,e)=>{var n=e(2309),o=e(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,r,e)=>{var n=e(7854),o=e(3505),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},2309:(t,r,e)=>{var n=e(1913),o=e(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.16.3",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:(t,r,e)=>{var n=e(9958),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5656:(t,r,e)=>{var n=e(8361),o=e(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},7466:(t,r,e)=>{var n=e(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,r,e)=>{var n=e(4488);t.exports=function(t){return Object(n(t))}},7593:(t,r,e)=>{var n=e(111),o=e(2190),i=e(2140),c=e(5112)("toPrimitive");t.exports=function(t,r){if(!n(t)||o(t))return t;var e,a=t[c];if(void 0!==a){if(void 0===r&&(r="default"),e=a.call(t,r),!n(e)||o(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===r&&(r="number"),i(t,r)}},4948:(t,r,e)=>{var n=e(7593),o=e(2190);t.exports=function(t){var r=n(t,"string");return o(r)?r:String(r)}},9711:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},3307:(t,r,e)=>{var n=e(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,r,e)=>{var n=e(7854),o=e(2309),i=e(6656),c=e(9711),a=e(133),u=e(3307),s=o("wks"),f=n.Symbol,l=u?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)&&(a||"string"==typeof s[t])||(a&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},2222:(t,r,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(3157),c=e(111),a=e(7908),u=e(7466),s=e(6135),f=e(5417),l=e(1194),p=e(5112),v=e(7392),y=p("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",b=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),x=l("concat"),d=function(t){if(!c(t))return!1;var r=t[y];return void 0!==r?!!r:i(t)};n({target:"Array",proto:!0,forced:!b||!x},{concat:function(t){var r,e,n,o,i,c=a(this),l=f(c,0),p=0;for(r=-1,n=arguments.length;r<n;r++)if(d(i=-1===r?c:arguments[r])){if(p+(o=u(i.length))>h)throw TypeError(g);for(e=0;e<o;e++,p++)e in i&&s(l,p,i[e])}else{if(p>=h)throw TypeError(g);s(l,p++,i)}return l.length=p,l}})},4747:(t,r,e)=>{var n=e(7854),o=e(8324),i=e(8533),c=e(8880);for(var a in o){var u=n[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";e(4747),e(2222);function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function r(t){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),this.parentEl=t}var e,n,o;return e=r,o=[{key:"markup",value:function(t,r){return'\n      <button class="collapse-button" type="button">'.concat(t,'</button>\n\n      <div class="collapse">\n        <div class="collapse__body">\n          ').concat(r,"\n        </div>\n      </div>\n    ")}},{key:"collapseButtonSelector",get:function(){return".collapse-button"}},{key:"collapseSelector",get:function(){return".collapse"}},{key:"clickHandler",value:function(t,r){var e=t.style;t.classList.contains("show")?(e.maxHeight="0px",t.classList.remove("show")):(e.maxHeight="".concat(r,"px"),t.classList.add("show"))}}],(n=[{key:"bindToDOM",value:function(){var t=this,r=this.parentEl.dataset,e=r.buttonContent,n=r.collapsibleContent;this.parentEl.innerHTML=this.constructor.markup(e,n);var o=this.parentEl.querySelector(this.constructor.collapseButtonSelector),i=this.parentEl.querySelector(this.constructor.collapseSelector),c=i.clientHeight;i.style.maxHeight="0px",o.addEventListener("click",(function(){return t.constructor.clickHandler(i,c)}))}}])&&t(e.prototype,n),o&&t(e,o),r}();document.querySelectorAll("#collapse-button").forEach((function(t){new r(t).bindToDOM()}))})()})();