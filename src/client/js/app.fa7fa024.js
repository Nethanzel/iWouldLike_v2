(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-01b20fa8":"60e0762c","chunk-05393e13":"3a194a21","chunk-1005cd27":"beebc5fc","chunk-6af972d8":"d79ac7e7","chunk-aff26818":"3701095e","chunk-c59f86be":"84931eca","chunk-c6a87a22":"00527203","chunk-f8582f08":"2f0eb55d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-01b20fa8":1,"chunk-05393e13":1,"chunk-1005cd27":1,"chunk-6af972d8":1,"chunk-aff26818":1,"chunk-c59f86be":1,"chunk-c6a87a22":1,"chunk-f8582f08":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-01b20fa8":"abf25326","chunk-05393e13":"1a024344","chunk-1005cd27":"1ea0449f","chunk-6af972d8":"6fbb941b","chunk-aff26818":"a7145d0b","chunk-c59f86be":"c2cd4cb8","chunk-c6a87a22":"b063ca82","chunk-f8582f08":"3ac84a9a"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"07e6":function(e,t,n){e.exports=n.p+"img/info.50d23d44.svg"},3004:function(e,t,n){"use strict";n("b70e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("headeR"),n("router-view")],1)},o=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hcontainer"},[r("div",{staticClass:"header"},[r("router-link",{attrs:{to:{name:"Home"}}},[r("img",{attrs:{src:n("7e3c"),alt:"branding",id:"branding"}})]),r("div",{attrs:{id:"headerBtns"}},[r("router-link",{staticClass:"link",attrs:{to:{name:"Help"}}},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n("6a22"),alt:"help",id:"help"}}),r("span",{staticClass:"tagEv"},[e._v(" Ayuda")])])]),r("router-link",{staticClass:"link",attrs:{to:{name:"About"}}},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n("07e6"),alt:"info",id:"info"}}),r("span",{staticClass:"tag"},[e._v(" Saber más")])])]),r("router-link",{staticClass:"link",attrs:{to:{name:"Report"}}},[r("div",{staticClass:"icon"},[r("img",{attrs:{src:n("6d6c"),alt:"problem",id:"prob"}}),r("span",{staticClass:"tag"},[e._v(" Reportar fallo")])])])],1)],1),e._m(0)])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"messageBand"}},[n("p",{attrs:{id:"messageBand_text"}})])}],i=(n("3004"),n("2877")),s={},l=Object(i["a"])(s,c,u,!1,null,null,null),f=l.exports,d={title:"I would like to ask...",components:{headeR:f},mounted:function(){this.sockets.subscribe("CLEAR",(function(e){var t=localStorage.getItem("auth");t=JSON.parse(t),t.id==e.id&&(localStorage.removeItem("questionStorage"),localStorage.removeItem("iwouldliketoask"))}))},beforeDestroy:function(){this.sockets.unsubscribe("CLEAR")}},h=d,p=(n("034f"),Object(i["a"])(h,a,o,!1,null,null,null)),m=p.exports,b=n("5132"),v=n.n(b),g=n("bc3a"),k=n.n(g),y=n("2106"),w=n.n(y),x=(n("d3b7"),n("8c4f"));r["a"].use(x["a"]);var _=[{path:"/",name:"Home",component:function(){return n.e("chunk-c6a87a22").then(n.bind(null,"bb51"))}},{path:"/survey",name:"Survey",component:function(){return n.e("chunk-6af972d8").then(n.bind(null,"57e1"))}},{path:"/done",name:"Done",component:function(){return n.e("chunk-1005cd27").then(n.bind(null,"b972"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-01b20fa8").then(n.bind(null,"f820"))}},{path:"/report",name:"Report",component:function(){return n.e("chunk-f8582f08").then(n.bind(null,"762c"))}},{path:"/overview",name:"Overview",component:function(){return n.e("chunk-05393e13").then(n.bind(null,"2226"))}},{path:"/help",name:"Help",component:function(){return n.e("chunk-c59f86be").then(n.bind(null,"c3ef"))}},{path:"*",component:function(){return n.e("chunk-aff26818").then(n.bind(null,"d1a2"))}}],C=new x["a"]({mode:"history",base:"",routes:_,scrollBehavior:function(){return{x:0,y:0}}}),S=C;function O(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}var E={created:function(){var e=O(this);e&&(document.title=e)}};r["a"].mixin(E),r["a"].mixin({data:function(){return{clienttoken:function(){var e=localStorage.getItem("auth");if(null!=e)return e=JSON.parse(e),e.id;k.a.get("/auth").then((function(e){var t=e.headers.token;return localStorage.setItem("auth",JSON.stringify({id:t})),t}))},messageBox:function(e,t){var n=void 0;0==t?n="#ff0000d0":1==t?n="#00ff00d0":2==t&&(n="#ffa500d0");var r=document.getElementById("messageBand"),a=document.getElementById("messageBand_text");a.innerText=e,r.style.background=n,r.style.height="30px",setTimeout((function(){r.style.height="0px"}),5e3)}}}}),r["a"].config.productionTip=!1,r["a"].use(w.a,k.a),r["a"].use(new v.a({debug:!1,connection:"/"})),r["a"].config.devtools=!0,new r["a"]({router:S,render:function(e){return e(m)}}).$mount("#app")},"6a22":function(e,t,n){e.exports=n.p+"img/help.4df40777.svg"},"6d6c":function(e,t,n){e.exports=n.p+"img/problem.b1a4e67d.svg"},"7e3c":function(e,t,n){e.exports=n.p+"img/iWouldLike2.d0fe8927.svg"},"85ec":function(e,t,n){},b70e:function(e,t,n){}});
//# sourceMappingURL=app.fa7fa024.js.map