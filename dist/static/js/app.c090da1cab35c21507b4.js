webpackJsonp([1],{N4rJ:function(t,a){},NHnr:function(t,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=r("7+uW"),n={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var s=r("VU/8")({name:"App"},n,!1,function(t){r("N4rJ")},null,null).exports,i=r("/ocq"),o={name:"HelloWorld",data:function(){return{stars:1200,distance:1400}},methods:{setStar:function(){var t={},a=.2+1*Math.random(),r=this.distance+-800*Math.random();return t.transformOrigin="0 0 "+r+"px",t.transform=" translate3d(0,0,-"+r+"px) rotateY("+360*Math.random()+"deg) rotateX("+-50*Math.random()+"deg) scale("+a+","+a+")",t}},mounted:function(){this.setStar()}},c={render:function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"starTrail"},[r("audio",{attrs:{src:"https://m701.music.126.net/20200502214600/3a7fd6d45f7b6964d5f3a9595da7a781/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/2180586519/98b2/4d51/b6d3/c8c65de6a0bf053a2cd94d1f9473d069.mp3",autoplay:""}}),t._v(" "),r("div",{staticClass:"stars"},t._l(t.stars,function(a,e){return r("div",{key:e,staticClass:"star",style:t.setStar()})}),0),t._v(" "),r("div",{staticClass:"img-wrap"})])},staticRenderFns:[]};var d=r("VU/8")(o,c,!1,function(t){r("uvyX")},"data-v-f1dec5c6",null).exports;e.a.use(i.a);var u=new i.a({routes:[{path:"/",name:"starTrail",component:d}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:u,components:{App:s},template:"<App/>"})},uvyX:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.c090da1cab35c21507b4.js.map