<<<<<<< HEAD:src/client/js/app.92207b68.js
(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-05393e13":"144e94ad","chunk-1005cd27":"0a52f2e5","chunk-394f11a4":"7f14846c","chunk-547b223f":"d6f95b20","chunk-aa2d0348":"8b68dfd3","chunk-af539702":"7825a7f0","chunk-aff26818":"944529f9","chunk-f8582f08":"1301c0b9"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-05393e13":1,"chunk-1005cd27":1,"chunk-394f11a4":1,"chunk-547b223f":1,"chunk-aa2d0348":1,"chunk-af539702":1,"chunk-aff26818":1,"chunk-f8582f08":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-05393e13":"1a024344","chunk-1005cd27":"1ea0449f","chunk-394f11a4":"4b9b3154","chunk-547b223f":"b063ca82","chunk-aa2d0348":"abf25326","chunk-af539702":"3c349fae","chunk-aff26818":"a7145d0b","chunk-f8582f08":"3ac84a9a"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"07e6":function(e,t,n){e.exports=n.p+"img/info.50d23d44.svg"},3004:function(e,t,n){"use strict";n("b70e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("headeR"),n("router-view")],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hcontainer"},[r("div",{staticClass:"header"},[r("router-link",{attrs:{to:{name:"Home"}}},[r("img",{attrs:{src:n("7e3c"),alt:"branding",id:"branding"}})]),r("div",{attrs:{id:"headerBtns"}},[r("router-link",{staticClass:"link",attrs:{to:{name:"Help"}}},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n("6a22"),alt:"help",id:"help"}}),r("span",{staticClass:"tagEv"},[e._v(" Ayuda")])])]),r("router-link",{staticClass:"link",attrs:{to:{name:"About"}}},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n("07e6"),alt:"info",id:"info"}}),r("span",{staticClass:"tag"},[e._v(" Saber más")])])]),r("router-link",{staticClass:"link",attrs:{to:{name:"Report"}}},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n("6d6c"),alt:"problem",id:"prob"}}),r("span",{staticClass:"tag"},[e._v(" Reportar fallo")])])])],1)],1),e._m(0)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"messageBand"}},[n("p",{attrs:{id:"messageBand_text"}})])}],c=(n("3004"),n("2877")),s={},l=Object(c["a"])(s,u,i,!1,null,null,null),f=l.exports,d={title:"I would like to ask...",components:{headeR:f},mounted:function(){this.sockets.subscribe("CLEAR",(function(e){var t=localStorage.getItem("auth");t=JSON.parse(t),t.id==e.id&&(localStorage.removeItem("questionStorage"),localStorage.removeItem("iwouldliketoask"))}))},beforeDestroy:function(){this.sockets.unsubscribe("CLEAR")}},h=d,p=(n("034f"),Object(c["a"])(h,a,o,!1,null,null,null)),m=p.exports,v=n("5132"),g=n.n(v),b=n("bc3a"),k=n.n(b),y=n("2106"),w=n.n(y),x=(n("d3b7"),n("8c4f"));r["a"].use(x["a"]);var _=[{path:"/",name:"Home",component:function(){return n.e("chunk-547b223f").then(n.bind(null,"bb51"))}},{path:"/survey",name:"Survey",component:function(){return n.e("chunk-af539702").then(n.bind(null,"57e1"))}},{path:"/done",name:"Done",component:function(){return n.e("chunk-1005cd27").then(n.bind(null,"b972"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-aa2d0348").then(n.bind(null,"f820"))}},{path:"/report",name:"Report",component:function(){return n.e("chunk-f8582f08").then(n.bind(null,"762c"))}},{path:"/overview",name:"Overview",component:function(){return n.e("chunk-05393e13").then(n.bind(null,"2226"))}},{path:"/help",name:"Help",component:function(){return n.e("chunk-394f11a4").then(n.bind(null,"c3ef"))}},{path:"*",component:function(){return n.e("chunk-aff26818").then(n.bind(null,"d1a2"))}}],C=new x["a"]({mode:"history",base:"",routes:_,scrollBehavior:function(){return{x:0,y:0}}}),S=C;function O(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var E={created:function(){var e=O(this);e&&(document.title=e)}};r["a"].mixin(E),r["a"].mixin({data:function(){return{clienttoken:function(){var e=localStorage.getItem("auth");if(null!=e)return e=JSON.parse(e),e.id;k.a.get("/auth").then((function(e){var t=e.headers.token;return localStorage.setItem("auth",JSON.stringify({id:t})),t}))},messageBox:function(e,t){var n=void 0;0==t?n="#ff0000d0":1==t?n="#00ff00d0":2==t&&(n="#ffa500d0");var r=document.getElementById("messageBand"),a=document.getElementById("messageBand_text");a.innerText=e,r.style.background=n,r.style.height="30px",setTimeout((function(){r.style.height="0px"}),5e3)}}}}),r["a"].config.productionTip=!1,r["a"].use(w.a,k.a),r["a"].use(new g.a({debug:!1,connection:"/"})),r["a"].config.devtools=!1,new r["a"]({router:S,render:function(e){return e(m)}}).$mount("#app")},"6a22":function(e,t,n){e.exports=n.p+"img/help.4df40777.svg"},"6d6c":function(e,t,n){e.exports=n.p+"img/problem.b1a4e67d.svg"},"7e3c":function(e,t,n){e.exports=n.p+"img/iWouldLike2.d0fe8927.svg"},"85ec":function(e,t,n){},b70e:function(e,t,n){}});
//# sourceMappingURL=app.92207b68.js.map
=======
(function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-05393e13":"144e94ad","chunk-1005cd27":"13b1d76a","chunk-394f11a4":"7f14846c","chunk-5159f4dd":"7be06b28","chunk-547b223f":"db96eaf8","chunk-af539702":"47f102d7","chunk-aff26818":"944529f9","chunk-f8582f08":"1301c0b9"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-05393e13":1,"chunk-1005cd27":1,"chunk-394f11a4":1,"chunk-5159f4dd":1,"chunk-547b223f":1,"chunk-af539702":1,"chunk-aff26818":1,"chunk-f8582f08":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-05393e13":"1a024344","chunk-1005cd27":"1ea0449f","chunk-394f11a4":"4b9b3154","chunk-5159f4dd":"f06b97fa","chunk-547b223f":"b063ca82","chunk-af539702":"a6828369","chunk-aff26818":"a7145d0b","chunk-f8582f08":"3ac84a9a"}[e]+".css",o=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"07e6":function(e,t,n){e.exports=n.p+"img/info.4a5ef149.svg"},3004:function(e,t,n){"use strict";n("b70e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("headeR"),n("router-view")],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hcontainer"},[r("div",{staticClass:"header"},[r("router-link",{attrs:{to:{name:"Home"}}},[r("img",{attrs:{src:n("7e3c"),alt:"branding",id:"branding"}})]),r("div",{attrs:{id:"headerBtns"}},[r("router-link",{staticClass:"link",attrs:{to:{name:"Help"}}},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n("6a22"),alt:"help",id:"help"}}),r("span",{staticClass:"tagEv"},[e._v(" Ayuda")])])]),r("router-link",{staticClass:"link",attrs:{to:{name:"About"}}},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n("07e6"),alt:"info",id:"info"}}),r("span",{staticClass:"tag"},[e._v(" Saber más")])])]),r("router-link",{staticClass:"link",attrs:{to:{name:"Report"}}},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n("6d6c"),alt:"problem",id:"prob"}}),r("span",{staticClass:"tag"},[e._v(" Reportar fallo")])])])],1)],1),e._m(0)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"messageBand"}},[n("p",{attrs:{id:"messageBand_text"}})])}],c=(n("3004"),n("2877")),s={},l=Object(c["a"])(s,u,i,!1,null,null,null),f=l.exports,d={title:"I would like to ask...",components:{headeR:f},mounted:function(){this.sockets.subscribe("CLEAR",(function(e){var t=localStorage.getItem("auth");t=JSON.parse(t),t.id==e.id&&(localStorage.removeItem("questionStorage"),localStorage.removeItem("iwouldliketoask"))}))},beforeDestroy:function(){this.sockets.unsubscribe("CLEAR")}},h=d,p=(n("034f"),Object(c["a"])(h,a,o,!1,null,null,null)),m=p.exports,b=n("5132"),v=n.n(b),g=n("bc3a"),k=n.n(g),y=n("2106"),w=n.n(y),x=(n("d3b7"),n("8c4f"));r["a"].use(x["a"]);var _=[{path:"/",name:"Home",component:function(){return n.e("chunk-547b223f").then(n.bind(null,"bb51"))}},{path:"/survey",name:"Survey",component:function(){return n.e("chunk-af539702").then(n.bind(null,"57e1"))}},{path:"/done",name:"Done",component:function(){return n.e("chunk-1005cd27").then(n.bind(null,"b972"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-5159f4dd").then(n.bind(null,"f820"))}},{path:"/report",name:"Report",component:function(){return n.e("chunk-f8582f08").then(n.bind(null,"762c"))}},{path:"/overview",name:"Overview",component:function(){return n.e("chunk-05393e13").then(n.bind(null,"2226"))}},{path:"/help",name:"Help",component:function(){return n.e("chunk-394f11a4").then(n.bind(null,"c3ef"))}},{path:"*",component:function(){return n.e("chunk-aff26818").then(n.bind(null,"d1a2"))}}],C=new x["a"]({mode:"history",base:"",routes:_,scrollBehavior:function(){return{x:0,y:0}}}),S=C;function O(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var E={created:function(){var e=O(this);e&&(document.title=e)}};r["a"].mixin(E),r["a"].mixin({data:function(){return{clienttoken:function(){var e=localStorage.getItem("auth");if(null!=e)return e=JSON.parse(e),e.id;k.a.get("/auth").then((function(e){var t=e.headers.token;return localStorage.setItem("auth",JSON.stringify({id:t})),t}))},messageBox:function(e,t){var n=void 0;0==t?n="#ff0000d0":1==t?n="#00ff00d0":2==t&&(n="#ffa500d0");var r=document.getElementById("messageBand"),a=document.getElementById("messageBand_text");a.innerText=e,r.style.background=n,r.style.height="30px",setTimeout((function(){r.style.height="0px"}),5e3)}}}}),r["a"].config.productionTip=!1,r["a"].use(w.a,k.a),r["a"].use(new v.a({debug:!1,connection:"/"})),r["a"].config.devtools=!1,new r["a"]({router:S,render:function(e){return e(m)}}).$mount("#app")},"6a22":function(e,t,n){e.exports=n.p+"img/help.4df40777.svg"},"6d6c":function(e,t,n){e.exports=n.p+"img/problem.3b26ac87.svg"},"7e3c":function(e,t,n){e.exports=n.p+"img/iWouldLike2.50b05bd7.svg"},"85ec":function(e,t,n){},b70e:function(e,t,n){}});
//# sourceMappingURL=app.421ba591.js.map
>>>>>>> 752c0521704ba1ea478c4f50a2662eea354adbd3:src/client/js/app.421ba591.js
