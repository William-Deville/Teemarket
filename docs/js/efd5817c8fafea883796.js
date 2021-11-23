"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[337],{961:(e,t,a)=>{var n=a(784),l=a(316);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);c=!0);}catch(e){i=!0,l=e}finally{try{c||null==a.return||a.return()}finally{if(i)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function i(){var e=r((0,n.useState)(1),2),t=e[0],a=e[1],l=r((0,n.useState)("M"),2),c=l[0],i=l[1],o=r((0,n.useState)("BE"),2),s=o[0],m=o[1];console.log(c),console.log(t),console.log(s);var u=29,E=5;switch(c){case"M":u=29;break;case"S":u=19;break;case"L":u=39;break;case"XL":u=49}switch(s){case"BE":E=5;break;case"FR":E=6;break;case"GE":E=7;break;case"US":E=15;break;case"DU":E=8;break;case"WW":E=20}var d,p,v=u*t,h=v,g=E+h;return n.createElement("div",{className:"checkout-container"},n.createElement("div",{id:"order-recap"},n.createElement("h2",null,"Displate"),n.createElement("div",{className:"article-template"},n.createElement("div",{id:"img-container"},n.createElement("img",{src:"",height:"150",width:"100",alt:"test"})),n.createElement("div",{className:"article-template-infos"},n.createElement("label",{htmlFor:"quantity",className:"label",id:"quantity-label"},"Quantity:"),n.createElement("select",{className:"select",name:"quantity",id:"quantity",onChange:function(e){var t=e.target.value;a(t)}},n.createElement("option",{value:"1"},"1"),n.createElement("option",{value:"2"},"2"),n.createElement("option",{value:"3"},"3"),n.createElement("option",{value:"4"},"4"),n.createElement("option",{value:"5"},"5"),n.createElement("option",{value:"6"},"6"),n.createElement("option",{value:"7"},"7"),n.createElement("option",{value:"8"},"8"),n.createElement("option",{value:"9+"},"9+"))),n.createElement("div",null,n.createElement("label",{htmlFor:"size",className:"label",id:"size-label"},"Size:"),n.createElement("select",{className:"select",name:"size",id:"size",onChange:function(e){var t=e.target.value;i(t)}},n.createElement("option",{value:"S"},"S"),n.createElement("option",{value:""},"M"),n.createElement("option",{value:"L"},"L"),n.createElement("option",{value:"XL"},"XL"))),n.createElement("div",null,n.createElement("label",{htmlFor:"price",className:"label"},"Price:"),n.createElement("span",(p="aritcle-price","id"in(d={id:"price",name:"price"})?Object.defineProperty(d,"id",{value:p,enumerable:!0,configurable:!0,writable:!0}):d.id=p,d),v,"€")))),n.createElement("div",{id:"order-detail"},n.createElement("h2",null,"Order details "),n.createElement("div",null,n.createElement("div",{id:"shipping",className:"item-detail"},n.createElement("h4",null,"Shipping to:"),n.createElement("select",{name:"country",id:"country-list",onChange:function(e){var t=e.target.value;m(t)}},n.createElement("option",{value:"BE"},"Belgium"),n.createElement("option",{value:"FR"},"France"),n.createElement("option",{value:"US"},"USA"),n.createElement("option",{value:"DU"},"Dutchland"),n.createElement("option",{value:"GE"},"Germany"),n.createElement("option",{value:"WW"},"world wide"))),n.createElement("div",{className:"item-detail"},n.createElement("h4",{className:"recap-titem-title"}," Items Total:"),n.createElement("h4",{className:"recap-price"}," ",h,"€")),n.createElement("div",{className:"item-detail"},n.createElement("h4",{className:"recap-titem-title"}," shipping price:"),n.createElement("h4",{className:"recap-price"},E,"€")),n.createElement("div",{className:"item-detail"},n.createElement("h4",{className:"recap-titem-title"}," Total:"),n.createElement("h4",{className:"recap-price"},g,"€")),n.createElement("button",{className:"item-detail",id:"checkout"}," ","Checkout"))))}function o(e){var t=e.setPage;return n.createElement("div",{className:"container_login"},n.createElement("div",{className:"container_login_title"},n.createElement("h1",{className:"login"},"LOGIN")),n.createElement("div",{className:"container_login_main"},n.createElement("div",{className:"container_login_input"},n.createElement("h2",{className:"subTitle_login"},"E-mail"),n.createElement("input",{className:"input_login",type:"text",placeholder:"johndoe@example.com"}),n.createElement("h2",{className:"subTitle_login"},"Password"),n.createElement("input",{className:"input_login",type:"password",placeholder:"Password"}),n.createElement("div",null,n.createElement("a",{href:"#",className:"forgot"},"Forgot my password")),n.createElement("div",{className:"button_input"},n.createElement("button",{type:"button",className:"button_login"},"LOGIN")),n.createElement("div",{className:"create_login"},n.createElement("btn",{onClick:function(){return t("Register")}},"I haven't an account")))))}function s(e){var t=e.setPage;return n.createElement("div",{className:"container_login"},n.createElement("div",{className:"container_login_title"},n.createElement("h1",{className:"login"},"REGISTER")),n.createElement("div",{className:"container_login_main"},n.createElement("div",{className:"container_login_input"},n.createElement("h2",{className:"subTitle_login"},"Nickname"),n.createElement("input",{className:"input_login",type:"text",placeholder:"Xx_D4rkS4suk3_xX"}),n.createElement("h2",{className:"subTitle_login"},"E-mail"),n.createElement("input",{className:"input_login",type:"text",placeholder:"johndoe@example.com"}),n.createElement("h2",{className:"subTitle_login"},"Password"),n.createElement("input",{className:"input_login",type:"password",placeholder:"Password"}),n.createElement("h2",{className:"subTitle_login"},"Confirm Password"),n.createElement("input",{className:"input_login",type:"password",placeholder:"Password"}),n.createElement("div",{className:"button_input"},n.createElement("button",{type:"button",className:"button_login"},"REGISTER")),n.createElement("div",{className:"create_login"},n.createElement("btn",{onClick:function(){return t("Login")}},"I have already an account")))))}a(702);var m=a(96),u=a(929);function E(e){var t=e.setPage,a=n.createElement(u.G,{icon:m.m6i}),l=n.createElement(u.G,{icon:m.qD8}),r=n.createElement(u.G,{icon:m.ILF});return n.createElement("header",null,n.createElement("nav",{class:"header-main-nav"},n.createElement("div",{class:"header-logo"},n.createElement("a",{href:"#"},"DATPLATE")),n.createElement("div",{class:"header-searchbar"},n.createElement("input",{class:"search-text",type:"text",placeholder:"Search..."})),n.createElement("div",{class:"ul-icons"},n.createElement("a",{href:"#"},n.createElement("i",{className:"svg"},a),"Liked"),n.createElement("btn",{onClick:function(){return t("Cart")}},n.createElement("i",{className:"svg"},l),"Cart"),n.createElement("btn",{onClick:function(){return t("Login")}},n.createElement("i",{className:"svg"},r),"Sign in"))))}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}const p=function(){var e,t,a=(e=n.useState("Cart"),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);c=!0);}catch(e){i=!0,l=e}finally{try{c||null==a.return||a.return()}finally{if(i)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=a[0],r=a[1];return"Cart"===l?n.createElement("div",null,n.createElement(E,{setPage:r}),n.createElement(i,{setPage:r})):"Login"===l?n.createElement("div",null,n.createElement(E,{setPage:r}),n.createElement(o,{setPage:r})):"Register"===l?n.createElement("div",null,n.createElement(E,{setPage:r}),n.createElement(s,{setPage:r})):void 0};a(697),l.render(n.createElement(p,null),document.querySelector("#root"))}}]);