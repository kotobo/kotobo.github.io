(function(e){function t(t){for(var s,o,a=t[0],c=t[1],l=t[2],u=0,f=[];u<a.length;u++)o=a[u],r[o]&&f.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(s=!1)}s&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},o={app:0},r={app:0},i=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-157cf0dc":"47937733","chunk-1bb3b100":"63c85f09","chunk-76684dfd":"29b9dc83","chunk-da7b2e2c":"59bef6f7"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-157cf0dc":1,"chunk-1bb3b100":1,"chunk-76684dfd":1,"chunk-da7b2e2c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-157cf0dc":"c25dce0d","chunk-1bb3b100":"a54c2cbe","chunk-76684dfd":"6af5e5bb","chunk-da7b2e2c":"bbe6189d"}[e]+".css",o=c.p+s,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var a=r[i],l=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(l===s||l===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){a=u[i],l=a.getAttribute("data-href");if(l===s||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.request=s,n(r)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[e]=0}));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var i=new Promise(function(t,n){s=r[e]=[t,n]});t.push(s[2]=i);var l,u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=a(e),l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+s+": "+o+")");i.type=s,i.request=o,n[1](i)}r[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,u.appendChild(f)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"365c":function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d");var s={common:"https://kapi1.gearhostpreview.com/index.php/index",v1:"https://kapi1.gearhostpreview.com/index.php/v1"};t["a"]=s},4360:function(e,t,n){"use strict";var s=n("2b0e"),o=n("2f62"),r={state:{clientType:"desktop-web"},mutations:{},getters:{getClientType:function(e){return e.clientType}}},i={state:{accessToken:null},mutations:{setAccessToken:function(e,t){e.accessToken=t}},getters:{getAccessToken:function(e){return e.accessToken}}};s["default"].use(o["a"]);var a=new o["a"].Store({modules:{client:r,passport:i}});t["a"]=a},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=r(e);return n(t)}function r(e){var t=s[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(s)},o.resolve=r,e.exports=o,o.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},r=[],i=n("9f02"),a={name:"app",methods:{autoSignIn:function(){var e=this;(localStorage.getItem("signToken")||sessionStorage.getItem("signToken"))&&Object(i["a"])({clientType:this.$store.getters.getClientType,signToken:localStorage.getItem("signToken")||sessionStorage.getItem("signToken")}).then(function(t){e.$store.commit("setAccessToken",t.data.accessToken)})}},mounted:function(){this.autoSignIn()}},c=a,l=n("2877"),u=Object(l["a"])(c,o,r,!1,null,null,null);u.options.__file="App.vue";var f=u.exports,d=n("8c4f"),h=n("4360"),p={appName:"言簿"},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},m=[],g={name:"common-layout"},j=g,v=Object(l["a"])(j,b,m,!1,null,null,null);v.options.__file="layout.vue";var y=v.exports,k=[{path:"in",name:"sign-in",beforeEnter:function(e,t,n){localStorage.getItem("signToken")||sessionStorage.getItem("signToken")?n("/"):n()},component:function(){return n.e("chunk-157cf0dc").then(n.bind(null,"2dd8"))}},{path:"up",name:"sign-up",beforeEnter:function(e,t,n){localStorage.getItem("signToken")||sessionStorage.getItem("signToken")?n("/"):n()},component:function(){return n.e("chunk-1bb3b100").then(n.bind(null,"f737"))}}],x={path:"/sign",redirect:"/sign/in",name:"sign",component:y,children:k};s["default"].use(d["a"]);var S=new d["a"]({routes:[{path:"/",name:"index",component:function(){return n.e("chunk-da7b2e2c").then(n.bind(null,"37f9"))}},x,{path:"*",name:"404",component:function(){return n.e("chunk-76684dfd").then(n.bind(null,"2754"))}}]});S.beforeEach(function(e,t,n){var s=e.meta.title,o=p.appName;document.title=s?s+" - "+o:o,e.meta.passportRequired?h["a"].getters.getAccessToken?n():n({path:"/sign/in",query:{redirect:e.fullPath}}):n()});var w=S,T=(n("0fae"),n("9e2f")),z=n.n(T);n("ea61");s["default"].use(z.a);var _=n("ecee"),E=n("c074"),I=n("ad3d");_["c"].add(E["a"],E["b"]),s["default"].component("Icon",I["a"]);var O=n("8237"),$=n.n(O);s["default"].prototype.$md5=$.a;var B=n("2ef0"),N=n.n(B);s["default"].prototype.$lodash=N.a;var A=n("c1df"),P=n.n(A);s["default"].prototype.$moment=P.a;var C=n("589d"),q=n.n(C);s["default"].prototype.$velocity=q.a;var D=n("0c58"),L=n.n(D);s["default"].use(L.a);var H=n("283e"),M=n.n(H);s["default"].use(M.a);n("7eb0"),n("7f7f");var W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:["button","button-"+e.type,"circle"===e.fillet||e.padding||"text"===e.sizeType?"":"button-"+e.sizeType+"--"+e.size,"text"!==e.sizeType?"":"font-size-"+e.size,"circle"!==e.fillet||"text"===e.sizeType?"":"button-circle","circle"!==e.fillet||"small"!==e.size&&"normal"!==e.size&&"large"!==e.size||"text"===e.type?"":"button-circle--"+e.size,"button-"+e.type+"-"+e.mode+"--"+e.color,{"font-weight-bold":e.fontBold},"none"!==e.fillet&&"text"!==e.type?"fillet-"+e.fillet:"",{"button--disabled":e.disabled}],style:{padding:e.padding,width:"circle"!==e.fillet||"small"===e.size||"normal"===e.size||"large"===e.size?e.width:e.size,height:"circle"!==e.fillet||"small"===e.size||"normal"===e.size||"large"===e.size?e.height:e.size,"font-size":e.fontSize},attrs:{type:e.buttonType,disabled:e.disabled},on:{click:function(t){e.to?e.push(e.to):e.handleClick()}}},[e.prefixIcon?n("Icon",{attrs:{icon:e.prefixIcon}}):e._e(),e.$slots.default?n("span",{class:e.prefixIcon||e.suffixIcon?"button-content-icon":""},[e._t("default")],2):e._e(),e.suffixIcon?n("Icon",{attrs:{icon:e.suffixIcon}}):e._e()],1)},R=[],U={name:"Button",props:{buttonType:{type:String,default:"button"},type:{type:String,default:"normal"},padding:String,size:{type:String,default:"normal"},width:String,height:String,mode:{type:String,default:"normal"},color:{type:String,default:"grey"},fontSize:String,fontBold:Boolean,prefixIcon:String,suffixIcon:String,fillet:{type:String,default:"normal"},disabled:Boolean,to:String},methods:{handleClick:function(e){this.$emit("click",e)},push:function(e){e&&this.$router.push(e)}},computed:{sizeType:function(){return"text"!==this.type?"normal":"text"}}},J=U,F=Object(l["a"])(J,W,R,!1,null,null,null);F.options.__file="index.vue";var Q=F.exports;Q.install=function(e){e.component(Q.name,Q)};var G=Q,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{class:["link","button-text-normal--"+e.color,{"font-weight-bold":e.fontBold},"none"===e.decoration?"":"link-decoration--"+e.decoration],style:{"font-size":e.fontSize},attrs:{href:e.href},on:{click:function(t){e.to?e.push(e.to):e.goAnchor(e.go)}}},[e.prefixIcon?n("Icon",{attrs:{icon:e.prefixIcon}}):e._e(),e.$slots.default?n("span",{class:e.prefixIcon||e.suffixIcon?"button-content-icon":""},[e._t("default")],2):e._e(),e.suffixIcon?n("Icon",{attrs:{icon:e.suffixIcon}}):e._e()],1)},V=[],X={name:"Link",props:{color:{type:String,default:"content"},fontSize:String,fontBold:Boolean,decoration:{type:String,default:"none"},prefixIcon:String,suffixIcon:String,href:String,go:String,to:String},methods:{push:function(e){e&&this.$router.push(e)},goAnchor:function(e){this.$velocity(document.querySelector("#"+e),"scroll",{duration:1e3,easing:"easeOutQuart"})}}},Y=X,Z=Object(l["a"])(Y,K,V,!1,null,null,null);Z.options.__file="index.vue";var ee=Z.exports;ee.install=function(e){e.component(ee.name,ee)};var te=ee,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ScrollWatcher",{attrs:{base:e.base,target:e.target,offset:e.offset},on:{data:e.handleData,change:e.handleChange}},[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.hide||e.show,expression:"!hide||show"}],class:{"position-fixed":e.fixed},style:{top:"top"===e.base&&e.fixed?e.offset+"px":"",left:e.fixed?e.rect.left+"px":"",bottom:"bottom"===e.base&&e.fixed?e.offset+"px":"",width:e.fixed?e.rect.originalWidth+"px":""}},[e._t("default")],2)])],1),e.hide?e._e():n("div",{directives:[{name:"show",rawName:"v-show",value:e.fixed,expression:"fixed"}],style:{width:e.rect.width+"px",height:e.rect.height+"px"}})],1)},se=[],oe=(n("c5f6"),{name:"Nail",props:{base:{type:String,default:"top"},target:[Number,String],offset:{type:Number,default:0},transition:{type:String,default:"fade"},hide:Boolean},data:function(){return{fixed:!1,rect:{},show:!1}},methods:{handleData:function(e){this.rect=e},handleChange:function(e){if(e){if(this.fixed=!0,!this.hide)return;this.show=!0}else{if(this.fixed=!1,!this.hide)return;this.show=!1}}}}),re=oe,ie=Object(l["a"])(re,ne,se,!1,null,null,null);ie.options.__file="index.vue";var ae=ie.exports;ae.install=function(e){e.component(ae.name,ae)};var ce=ae,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._t("default")],2)},ue=[],fe=n("53ca"),de={name:"ScrollWatcher",props:{mode:{type:String,default:"base"},base:{type:String,default:"top"},target:[Number,Object,String],offset:{type:Number,default:0},debounce:{type:Number,default:10}},data:function(){return{status:!1,start:0,currentScroll:0,scrollEvent:null}},methods:{initialize:function(){var e=this;this.currentScroll=document.documentElement.scrollTop;var t=this.debounce;if("base"===this.mode){var n=this.$el,s=n.getBoundingClientRect(),o={left:s.left,originalWidth:s.width,width:s.width+2*(n.scrollWidth-s.width),height:s.height+2*(n.scrollHeight-s.height)};if(this.pushData(o),"top"===this.base){if(this.target){var r=this.getTarget();"object"===Object(fe["a"])(r)?this.start=this.getTarget().offsetTop-this.offset:this.start=r-this.offset}else s.top,this.currentScroll,n.scrollHeight,s.height,this.offset;this.scrollEvent=this.$lodash.debounce(function(){return e.basedOnTop()},t)}else{if(this.target){var i=this.getTarget();"object"===Object(fe["a"])(i)?this.start=i.offsetTop+i.clientHeight-this.offset:this.start=i-this.offset}else this.start=s.top+this.currentScroll+s.height+(n.scrollHeight-s.height)+this.offset;this.scrollEvent=this.$lodash.debounce(function(){return e.basedOnBottom()},t)}}else"direction"===this.mode&&(this.scrollEvent=this.$lodash.debounce(function(){return e.direction()},t))},pushData:function(e){this.$emit("data",e)},on:function(){this.status=!0,this.pushEvent()},off:function(){this.status=!1,this.pushEvent()},pushEvent:function(){this.$emit("change",this.status)},getTarget:function(){return"string"===typeof this.target?document.getElementById(this.target):this.target},basedOnTop:function(){this.currentScroll=document.documentElement.scrollTop,this.currentScroll>=this.start?this.on():this.off()},basedOnBottom:function(){this.currentScroll=document.documentElement.scrollTop+document.documentElement.clientHeight,this.currentScroll<=this.start?this.on():this.off()},direction:function(){var e=this.currentScroll;this.currentScroll=document.documentElement.scrollTop,this.currentScroll>e?this.on():this.off()}},mounted:function(){this.initialize(),window.addEventListener("scroll",this.scrollEvent)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollEvent)}},he=de,pe=Object(l["a"])(he,le,ue,!1,null,null,null);pe.options.__file="index.vue";var be=pe.exports;be.install=function(e){e.component(be.name,be)};var me=be;s["default"].use(G),s["default"].use(te),s["default"].use(ce),s["default"].use(me),s["default"].config.productionTip=!1,new s["default"]({router:w,store:h["a"],render:function(e){return e(f)}}).$mount("#app")},"7eb0":function(e,t,n){},"9f02":function(e,t,n){"use strict";var s=n("365c"),o=n("bc3a"),r=n.n(o),i=n("4360"),a=r.a.create({baseURL:s["a"].v1});a.interceptors.request.use(function(e){var t=i["a"].getters.getAccessToken;return t&&(e.headers["Access-Token"]=t),e},function(e){return Promise.reject(e)}),a.interceptors.response.use(function(e){var t=e.data;switch(t.code){case 200:return t.status=!0,t;case 400:return t.status=!1,t}return e},function(e){return Promise.reject(e)});var c=a;function l(e){return c({url:"/sign/in",method:"post",data:e})}function u(e){return c({url:"/sign/auto",method:"post",data:e})}n.d(t,"b",function(){return l}),n.d(t,"a",function(){return u})},ea61:function(e,t,n){}});