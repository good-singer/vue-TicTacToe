(function(t){function n(n){for(var e,c,o=n[0],i=n[1],s=n[2],f=0,p=[];f<o.length;f++)c=o[f],r[c]&&p.push(r[c][0]),r[c]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);a&&a(n);while(p.length)p.shift()();return u.push.apply(u,s||[]),l()}function l(){for(var t,n=0;n<u.length;n++){for(var l=u[n],e=!0,o=1;o<l.length;o++){var i=l[o];0!==r[i]&&(e=!1)}e&&(u.splice(n--,1),t=c(c.s=l[0]))}return t}var e={},r={app:0},u=[];function c(n){if(e[n])return e[n].exports;var l=e[n]={i:n,l:!1,exports:{}};return t[n].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=t,c.c=e,c.d=function(t,n,l){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:l})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(c.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)c.d(l,e,function(n){return t[n]}.bind(null,e));return l},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=n,o=o.slice();for(var s=0;s<o.length;s++)n(o[s]);var a=i;u.push([0,"chunk-vendors"]),l()})({0:function(t,n,l){t.exports=l("56d7")},"034f":function(t,n,l){"use strict";var e=l("64a9"),r=l.n(e);r.a},"07e1":function(t,n,l){"use strict";var e=l("969d"),r=l.n(e);r.a},"56d7":function(t,n,l){"use strict";l.r(n);l("cadf"),l("551c"),l("f751"),l("097d");var e=l("2b0e"),r=function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"wrapper"},[l("div",[t._v("第"+t._s(t.n)+"手")]),l("div",{staticClass:"chess"},[l("div",{staticClass:"row"},[l("Cell",{attrs:{n:t.n,result:t.result},on:{click:function(n){return t.onclickCell(0,n)}}}),l("Cell",{attrs:{n:t.n,result:t.result},on:{click:function(n){return t.onclickCell(1,n)}}}),l("Cell",{attrs:{n:t.n,result:t.result},on:{click:function(n){return t.onclickCell(2,n)}}})],1),l("div",{staticClass:"row"},[l("Cell",{attrs:{n:t.n,result:t.result},on:{click:function(n){return t.onclickCell(3,n)}}}),l("Cell",{attrs:{n:t.n,result:t.result},on:{click:function(n){return t.onclickCell(4,n)}}}),l("Cell",{attrs:{n:t.n,result:t.result},on:{click:function(n){return t.onclickCell(5,n)}}})],1),l("div",{staticClass:"row"},[l("Cell",{attrs:{n:t.n,result:t.result},on:{click:function(n){return t.onclickCell(6,n)}}}),l("Cell",{attrs:{n:t.n,result:t.result},on:{click:function(n){return t.onclickCell(7,n)}}}),l("Cell",{attrs:{n:t.n,result:t.result},on:{click:function(n){return t.onclickCell(8,n)}}})],1)]),null!=t.result?l("div",[t._v(t._s(t.result)+" 赢了!")]):l("div",[t._v("胜负未分")])])},u=[],c=function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"cell",on:{click:t.onClickSelf}},[t.a?[t._v(t._s(t.text))]:void 0],2)},o=[],i=(l("3022"),{props:["n","result"],data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""==this.text&&(this.result||(this.a=!0,this.text=this.n%2===0?"X":"O",this.$emit("click",this.text)))}}}),s=i,a=(l("07e1"),l("2877")),f=Object(a["a"])(s,c,o,!1,null,null,null),p=f.exports,d={components:{Cell:p},data:function(){return{n:0,map:[[null,null,null],[null,null,null],[null,null,null]],result:null}},methods:{onclickCell:function(t,n){console.log("".concat(t,":号被点击,内容是：").concat(n)),this.map[Math.floor(t/3)][t%3]=n,this.n++,this.tell()},tell:function(){for(var t=this.map,n=0;n<2;n++)null!=t[n][0]&&t[n][0]===t[n][1]&&t[n][1]===t[n][2]&&(this.result=t[n][0]);for(var l=0;l<2;l++)null!=t[0][l]&&t[0][l]===t[1][l]&&t[1][l]===t[2][l]&&(this.result=t[0][l]);null!=t[0][0]&&t[0][0]===t[1][1]&&t[1][1]===t[2][2]&&(this.result=t[0][0]),null!=t[0][2]&&t[0][2]===t[1][1]&&t[1][1]===t[2][0]&&(this.result=t[0][2])}}},v=d,h=(l("034f"),Object(a["a"])(v,r,u,!1,null,null,null)),C=h.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(C)}}).$mount("#app")},"64a9":function(t,n,l){},"969d":function(t,n,l){}});
//# sourceMappingURL=app.2bcfc236.js.map