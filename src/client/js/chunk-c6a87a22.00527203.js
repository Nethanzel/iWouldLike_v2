(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6a87a22"],{"46ae":function(e,a,n){e.exports=n.p+"img/introduce.a87df04e.png"},"5ced":function(e,a,n){},"8aef":function(e,a,n){e.exports=n.p+"img/spin.19c896b0.png"},bb51:function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[e._m(0),t("h1",[e._v("¿De qué se trata?")]),t("div",[t("p",[e._v(" Un saludo. Estas a punto de participar en una investigación dirigida por un estudiante, solo necesito que contestes y luego envies algunas preguntas sobre un tema en especfico, "),t("strong",[e._v("en ningún momento se le pedirá alguna información personal")]),e._v(", lo único necesario son sus respuestas. Si quieres saber más sobre la investigación, en la sección "),t("router-link",{attrs:{to:"/about"}},[e._v('"Saber más"')]),e._v(" encontraras otros detalles. ")],1),e._m(1),t("p",[e._v("Si en algun momento notas que la aplicación funciona de forma incorrecta o te parece que es dificil de usar, tienes la posibilidad de "),t("router-link",{attrs:{to:"/report"}},[e._v("enviar un reporte")]),e._v(" cuando quieras, explicando lo que pasa o alguna idea que quisieras compartirme. Podras ver un "),t("router-link",{attrs:{to:"/overview"}},[e._v("resumen")]),e._v(" del progreso del alcance de la investigación. ")],1),t("p",[e._v("Si al usar la aplicación encuentras algo que no está muy claro, en la sección de "),t("router-link",{attrs:{to:"/help"}},[e._v("Ayuda")]),e._v(" podras encontrar detalles sobre el uso de la aplicación y los pasos que debes seguir para participar. ")],1)]),t("div",{attrs:{id:"nav"},on:{click:function(a){return e.go()}}},[t("span",{staticClass:"r_link",attrs:{id:"goBtn"}},[e._v("Continuar")]),t("img",{attrs:{id:"spin",src:n("8aef")}})])])},o=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"ils_cont"},[t("img",{staticClass:"ils",attrs:{src:n("46ae")}})])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("p",[e._v(" Quiero que tengas claro que "),n("strong",[e._v("lo único que hace esta aplicación es reunir los datos que pongas como respuestas")]),e._v(". Podras ver tus respuestas y si por alguna razón quieres cambiar alguna, cuando hayas contestado todo te dará la opción donde puedes borrar alguna de ellas y luego volver a contestarla. Tendras la opción de enviar tu cuestionario completado cuando quieras, luego que lo hayas enviado, ya no podras volver a modificar nada. ")])}],s={name:"Home",title:"I would like to ask...",data:function(){return{charOne:"&",authTryCount:0}},methods:{go:function(){var e=this;document.getElementById("spin").style.display="block",document.getElementById("goBtn").style.display="none",setTimeout((function(){if(e.authTryCount>=3)return e.messageBox("Error al crear autenticación del cliente.",2),document.getElementById("spin").style.display="none",document.getElementById("goBtn").style.display="block",clearTimeout();e.clienttoken(),e.goSurvey(),e.authTryCount++}),3e3)},goSurvey:function(){var e=localStorage.getItem("auth");null!=e?this.$router.push({name:"Survey"}):this.go()}}},r=s,i=(n("cccb"),n("2877")),u=Object(i["a"])(r,t,o,!1,null,null,null);a["default"]=u.exports},cccb:function(e,a,n){"use strict";n("5ced")}}]);
//# sourceMappingURL=chunk-c6a87a22.00527203.js.map