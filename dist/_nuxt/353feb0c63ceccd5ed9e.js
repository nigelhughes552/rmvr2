(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{251:function(t,e,n){var content=n(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("aefa6082",content,!0,{sourceMap:!1})},252:function(t,e,n){var r=n(23);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},253:function(t,e,n){"use strict";var r=n(251);n.n(r).a},254:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".display-header[data-v-84a8b526]{font-size:72px;color:#000;font-weight:700}",""])},255:function(t,e,n){var content=n(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0cd63bd9",content,!0,{sourceMap:!1})},256:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""])},257:function(t,e,n){"use strict";var strong=n(258),r=n(252);t.exports=n(259)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},258:function(t,e,n){"use strict";var r=n(26).f,o=n(89),l=n(155),c=n(37),f=n(153),h=n(154),v=n(119),d=n(157),_=n(120),x=n(21),y=n(118).fastKey,w=n(252),m=x?"_s":"size",j=function(t,e){var n,r=y(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var d=t((function(t,r){f(t,d,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[m]=0,null!=r&&h(r,n,t[v],t)}));return l(d.prototype,{clear:function(){for(var t=w(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var n=w(this,e),r=j(n,t);if(r){var o=r.n,l=r.p;delete n._i[r.i],r.r=!0,l&&(l.n=o),o&&(o.p=l),n._f==r&&(n._f=o),n._l==r&&(n._l=l),n[m]--}return!!r},forEach:function(t){w(this,e);for(var n,r=c(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!j(w(this,e),t)}}),x&&r(d.prototype,"size",{get:function(){return w(this,e)[m]}}),d},def:function(t,e,n){var r,o,l=j(t,e);return l?l.v=n:(t._l=l={i:o=y(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=l),r&&(r.n=l),t[m]++,"F"!==o&&(t._i[o]=l)),t},getEntry:j,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=w(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?d(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,d(1))}),n?"entries":"values",!n,!0),_(e)}}},259:function(t,e,n){"use strict";var r=n(11),o=n(10),l=n(28),c=n(155),meta=n(118),f=n(154),h=n(153),v=n(23),d=n(24),_=n(121),x=n(64),y=n(122);t.exports=function(t,e,n,w,m,j){var O=r[t],k=O,E=m?"set":"add",C=k&&k.prototype,S={},F=function(t){var e=C[t];l(C,t,"delete"==t?function(a){return!(j&&!v(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(j&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return j&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof k&&(j||C.forEach&&!d((function(){(new k).entries().next()})))){var R=new k,W=R[E](j?{}:-0,1)!=R,M=d((function(){R.has(1)})),V=_((function(t){new k(t)})),B=!j&&d((function(){for(var t=new k,e=5;e--;)t[E](e,e);return!t.has(-0)}));V||((k=e((function(e,n){h(e,k,t);var r=y(new O,e,k);return null!=n&&f(n,m,r[E],r),r}))).prototype=C,C.constructor=k),(M||B)&&(F("delete"),F("has"),m&&F("get")),(B||W)&&F(E),j&&C.clear&&delete C.clear}else k=w.getConstructor(e,t,m,E),c(k.prototype,n),meta.NEED=!0;return x(k,t),S[t]=k,o(o.G+o.W+o.F*(k!=O),S),j||w.setStrong(k,t,m),k}},262:function(t,e,n){"use strict";n.r(e);var r=n(17),o=n(62),l=n.n(o),c=(n(156),n(123)),f=Object(c.a)("flex"),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-flex",{attrs:{xs10:""}},[e("h1",[this._v("About")]),this._v(" "),e("p",[this._v("\n\t\t\tWith over 30 years of experience in all makes and types of vehicles\n\t\t\tR.M.V.R will help you.\n\t\t")]),this._v(" "),e("p",[this._v("\n\t\t\tWith over 30 years of experience in all makes and types of vehicles\n\t\t\tR.M.V.R will help you.\n\t\t")]),this._v(" "),e("p",[this._v("\n\t\t\tWith over 30 years of experience in all makes and types of vehicles\n\t\t\tR.M.V.R will help you.\n\t\t")])])],1)}),[],!1,null,null,null),h=component.exports;l()(component,{VFlex:f});var v=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-flex",{attrs:{xs10:""}},[e("h1",[this._v("Contact Us")]),this._v(" "),e("p",[this._v("\n\t\t\tWith over 30 years of experience in all makes and types of vehicles\n\t\t\tR.M.V.R will help you.\n\t\t")]),this._v(" "),e("p",[this._v("\n\t\t\tWith over 30 years of experience in all makes and types of vehicles\n\t\t\tR.M.V.R will help you.\n\t\t")]),this._v(" "),e("p",[this._v("\n\t\t\tWith over 30 years of experience in all makes and types of vehicles\n\t\t\tR.M.V.R will help you.\n\t\t")])])],1)}),[],!1,null,null,null),d=v.exports;l()(v,{VFlex:f});var _=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-flex",{attrs:{xs12:""}},[e("h1",[this._v("What we do")]),this._v(" "),e("ul",[e("li",[this._v("Servicing")]),this._v(" "),e("li",[this._v("Brakes")])])])],1)}),[],!1,null,null,null),x=_.exports;l()(_,{VFlex:f});var y=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-flex",{attrs:{xs10:""}},[n("h1",[t._v("Find Us")]),t._v(" "),n("p",[t._v("\n\t\t\tWe are located a few miles from the village of Fritwell near Bicester in\n\t\t\tOxfordshire.\n\t\t")]),t._v(" "),n("p",[t._v("\n\t\t\tWe are located a few miles from the village of Fritwell near Bicester in\n\t\t\tOxfordshire.\n\t\t")]),t._v(" "),n("p",[t._v("\n\t\t\tWe are located a few miles from the village of Fritwell near Bicester in\n\t\t\tOxfordshire.\n\t\t")]),t._v(" "),n("p",[t._v("\n\t\t\tWe are located a few miles from the village of Fritwell near Bicester in\n\t\t\tOxfordshire.\n\t\t")])])],1)}),[],!1,null,null,null),w=y.exports;l()(y,{VFlex:f});var m={components:{About:h,Contact:d,WhatWeDo:x,FindUs:w}},j=(n(253),Object(c.a)("layout")),O=(n(29),n(255),n(0)),k=O.a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),E=n(27),C=Object(E.a)(k).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),S=(n(20),n(12),n(2)),F=(n(63),n(257),n(44),n(5),n(4),n(9),n(65),n(66),n(158),n(147)),R=n(1);function W(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var M=["sm","md","lg","xl"],V=["start","end","center"];function B(t,e){return M.reduce((function(n,r){return n[t+Object(R.i)(r)]=e(),n}),{})}var D=function(t){return[].concat(V,["baseline","stretch"]).includes(t)},z=B("align",(function(){return{type:String,default:null,validator:D}})),H=function(t){return[].concat(V,["space-between","space-around"]).includes(t)},$=B("justify",(function(){return{type:String,default:null,validator:H}})),P=function(t){return[].concat(V,["space-between","space-around","stretch"]).includes(t)},T=B("alignContent",(function(){return{type:String,default:null,validator:P}})),L={align:Object.keys(z),justify:Object.keys($),alignContent:Object.keys(T)},U={align:"align",justify:"justify",alignContent:"align-content"};function G(t,e,n){var r=U[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var N=new Map,A=O.a.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?W(source,!0).forEach((function(e){Object(S.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):W(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:D}},z,{justify:{type:String,default:null,validator:H}},$,{alignContent:{type:String,default:null,validator:P}},T),render:function(t,e){var n=e.props,data=e.data,r=e.children,o="";for(var l in n)o+=String(n[l]);var c=N.get(o);return c||function(){var t,e;for(e in c=[],L)L[e].forEach((function(t){var r=n[t],o=G(e,t,r);o&&c.push(o)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(S.a)(t,"align-".concat(n.align),n.align),Object(S.a)(t,"justify-".concat(n.justify),n.justify),Object(S.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),N.set(o,c)}(),t(n.tag,Object(F.a)(data,{staticClass:"row",class:c}),r)}}),I=Object(r.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"","justify-center":""}},[n("About"),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-parallax",{attrs:{height:"400",src:"engine.jpg"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",{staticClass:"display-4 display-header  mb-4"},[t._v("RMVR")])])],1)],1),t._v(" "),n("WhatWeDo"),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-parallax",{attrs:{height:"400",src:"car.jpg"}})],1),t._v(" "),n("FindUs"),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-parallax",{attrs:{height:"400",src:"FindUs.jpg"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("GmapMap",{staticStyle:{width:"100%",height:"800px"},attrs:{center:{lat:51.9577446,lng:-1.2563323},zoom:16,"map-type-id":"terrain"}})],1),t._v(" "),n("Contact"),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-parallax",{attrs:{height:"400",src:"Contact.jpg"}})],1)],1)}),[],!1,null,"84a8b526",null);e.default=I.exports;l()(I,{VFlex:f,VLayout:j,VParallax:C,VRow:A})}}]);