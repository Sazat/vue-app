(function(t){function e(e){for(var r,o,s=e[0],i=e[1],c=e[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);m&&m(e);while(p.length)p.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a={app:0},u=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c5a8155c"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"6eeccf00"}[t]+".css",a=i.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||a,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[t],m.parentNode.removeChild(m),n(u)},m.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var p=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-app/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var m=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"033c":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contentButton"},[n("button",{staticClass:"btn btn-danger",class:{classButton:t.isGreen},attrs:{type:"button"},on:{click:t.myFunction}},[n("span",[t._v(t._s(t.titleButton))])])])},o=[],a={name:"monButton",props:["titleButton","colorButton","type","isGreen"],methods:{myFunction:function(){this.$emit(this.type),this.$emit(this.titleButton),this.$emit(this.colorButton)}}},u=a,s=(n("0d90"),n("2877")),i=Object(s["a"])(u,r,o,!1,null,"e74664e2",null);e["a"]=i.exports},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0d90":function(t,e,n){"use strict";var r=n("6437"),o=n.n(r);o.a},5272:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},on:{bonjour:function(e){t.direBonjour=!0}}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),t.authenticated?t._e():n("router-link",{attrs:{to:"/login"}},[t._v("Votre Espace Sécurisé")]),t.authenticated?n("router-link",{attrs:{to:"/login"}},[n("button",{on:{click:function(e){return t.logout()}}},[t._v("Déconnexion")])]):t._e()],1),n("router-view",{on:{authenticated:t.setAuthenticated,username:t.setUsername}})],1)},a=[],u=(n("ac1f"),n("5319"),{name:"App",data:function(){return{direBonjour:!1,authenticated:!1,username:"",users:[{username:"zaza",password:"123zaza"},{username:"toto",password:"toto76Nantes"}]}},methods:{setUsername:function(t){this.username=t},setAuthenticated:function(t){this.authenticated=t},logout:function(){this.authenticated=!1,this.username="",this.$router.replace({name:"login"})}}}),s=u,i=(n("034f"),n("2877")),c=Object(i["a"])(s,o,a,!1,null,null,null),l=c.exports,p=n("a18c");n("4989"),n("ab8b");r["a"].config.productionTip=!1,new r["a"]({router:p["a"],render:function(t){return t(l)}}).$mount("#app")},"5d06":function(t,e,n){"use strict";var r=n("5272"),o=n.n(r);o.a},6437:function(t,e,n){},"85ec":function(t,e,n){},a18c:function(t,e,n){"use strict";(function(t){n("d3b7");var r=n("2b0e"),o=n("8c4f"),a=n("bb51"),u=n("a55b"),s=n("b062");r["a"].use(o["a"]);var i=[{path:"/",name:"Home",component:a["a"]},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))},props:!0},{path:"/login",name:"Login",component:u["a"]},{path:"/userAccount/:username",name:"userAccount",component:s["a"]}],c=new o["a"]({mode:"history",base:t.envBASE_URL,routes:i});e["a"]=c}).call(this,n("4362"))},a55b:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loginComponent"},[n("h1",[t._v("Connexion")]),n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],attrs:{type:"text",name:"username"},domProps:{value:t.input.username},on:{input:function(e){e.target.composing||t.$set(t.input,"username",e.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],attrs:{type:"text",name:"password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}}),n("br"),n("button",{attrs:{type:"button"},on:{click:function(e){return t.login()}}},[t._v("Connexion")])])])},o=[],a=(n("4160"),n("ac1f"),n("5319"),n("159b"),{name:"login",mounted:function(){this.$parent.authenticated&&this.$router.replace({name:"userAccount"})},data:function(){return{input:{username:"",password:""}}},methods:{login:function(){var t=this;""!=this.input.username&&""!=this.input.password?this.$parent.users.forEach((function(e){t.input.username==e.username&&t.input.password==e.password?(t.$emit("authenticated",!0),t.$emit("username",e.username),t.$router.replace({name:"userAccount",params:{username:e.username}})):console.log("mauvais mdp ou username")})):console.log("erreur sur formulaire")}}}),u=a,s=n("2877"),i=Object(s["a"])(u,r,o,!1,null,null,null);e["a"]=i.exports},b062:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"userVue"},[n("h1",[t._v("Bienvenue dans votre espace privé "+t._s(this.$parent.username)+" ")])])},o=[],a=(n("ac1f"),n("5319"),{name:"userAccount",mounted:function(){this.$parent.authenticated||this.$router.replace({name:"Login"})},data:function(){return{}}}),u=a,s=n("2877"),i=Object(s["a"])(u,r,o,!1,null,null,null);e["a"]=i.exports},bb51:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Sarah Z. Vue.js App"}}),r("div",[r("monButton",{attrs:{titleButton:"Dis-moi bonjour",type:"direBonjour"},on:{direBonjour:t.direBonjour}}),r("br"),r("br"),r("monButton",{attrs:{titleButton:"Dis-moi au revoir",type:"direByebye"},on:{direByebye:t.direByebye}}),r("br"),r("br"),t.showBonjour?r("div",[t._v(t._s(this.msg))]):t._e(),t.showBye?r("div",[t._v(t._s(this.msg))]):t._e()],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))])])},u=[],s={name:"HelloWorld",props:{msg:String}},i=s,c=(n("5d06"),n("2877")),l=Object(c["a"])(i,a,u,!1,null,"43f48a4c",null),p=l.exports,m=n("033c"),d={name:"Home",data:function(){return{isGreen:!0,msg:"",showBonjour:!1,showBye:!1}},components:{HelloWorld:p,monButton:m["a"]},methods:{direBonjour:function(){this.showBonjour=!0,this.showBye=!1,this.msg="Salut Toi !"},direByebye:function(){this.showBonjour=!1,this.showBye=!0,this.msg="Bye-bye !"}}},f=d,h=Object(c["a"])(f,r,o,!1,null,null,null);e["a"]=h.exports},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.26cb5468.js.map