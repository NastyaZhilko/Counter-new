(this["webpackJsonpcounter-new"]=this["webpackJsonpcounter-new"]||[]).push([[0],[,,,function(t,e,n){t.exports={App:"App_App__DSHFI",Button:"App_Button__iCb0E",body:"App_body__2snDU"}},function(t,e,n){t.exports={correctlyStyle:"Input_correctlyStyle__1oGtC",errorStyle:"Input_errorStyle__2Z_E0"}},function(t,e,n){t.exports={correctlyStyle:"InputSetting_correctlyStyle__4MGRw",errorStyle:"InputSetting_errorStyle__2vLYh",input:"InputSetting_input__3oK13"}},,,function(t,e,n){t.exports={button:"Button_button__VXR0I"}},,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n.n(r),l=n(7),u=n.n(l),s=(n(14),n(2)),o=n(3),i=n.n(o),j=n(8),b=n.n(j),d=function(t){return Object(c.jsx)("div",{className:b.a.button,children:Object(c.jsx)("button",{onClick:t.clickOnButton,disabled:t.disabledButton,children:t.title})})},O=n(4),x=n.n(O),p=function(t){return Object(c.jsx)("div",{children:t.error?Object(c.jsx)("h3",{className:"Incorrect value"===t.error?x.a.errorStyle:x.a.correctlyStyle,children:t.error}):Object(c.jsx)("h3",{className:t.value===t.maxValue?x.a.errorStyle:x.a.correctlyStyle,children:t.value})})},S=n(5),h=n.n(S),v=function(t){return Object(c.jsxs)("div",{className:h.a.input,children:[Object(c.jsx)("span",{children:t.title}),Object(c.jsx)("input",{className:t.value<0||t.error?h.a.errorStyle:h.a.correctlyStyle,onChange:function(e){t.changeValue(Number(e.currentTarget.value))},value:t.value,type:"number"})]})},y=function(){var t=localStorage.getItem("counter");return t?JSON.parse(t):{max:null,start:null}};var _=function(){var t=Object(r.useState)(y().start),e=Object(s.a)(t,2),n=e[0],a=e[1],l=Object(r.useState)(y().start),u=Object(s.a)(l,2),o=u[0],j=u[1],b=Object(r.useState)(y().max),O=Object(s.a)(b,2),x=O[0],S=O[1],h=Object(r.useState)(!0),_=Object(s.a)(h,2),f=_[0],m=_[1],g=Object(r.useState)(!1),B=Object(s.a)(g,2),N=B[0],I=B[1],C=Object(r.useState)(!0),k=Object(s.a)(C,2),A=k[0],V=k[1],w=Object(r.useState)(""),F=Object(s.a)(w,2),J=F[0],D=F[1],E=function(t,e){e<=t||t<0?(D("Incorrect value"),m(!0)):(D("enter values and press 'set'"),m(!1))};return Object(c.jsxs)("div",{className:i.a.App,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Settings"}),Object(c.jsxs)("div",{className:i.a.body,children:[Object(c.jsx)(v,{value:x,title:"max value:",changeValue:function(t){E(o,t),S(t),V(!0),I(!0)},error:x<=o}),Object(c.jsx)(v,{value:o,title:"start value:",changeValue:function(t){E(t,x),j(t),V(!0),I(!0)},error:o>=x}),Object(c.jsx)("div",{className:i.a.Button,children:Object(c.jsx)(d,{clickOnButton:function(){D(""),a(o),function(t,e){var n={max:t,start:e};localStorage.setItem("counter",JSON.stringify(n))}(x,o),m(!0),V(!0),I(!1)},title:"set",disabledButton:f})})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Counter"}),Object(c.jsxs)("div",{className:i.a.body,children:[Object(c.jsx)(p,{value:n,maxValue:x,error:J}),Object(c.jsxs)("div",{className:i.a.Button,children:[Object(c.jsx)(d,{clickOnButton:function(){n<x?(a(Number(n)+1),V(!1)):n===x&&I(!0)},title:"inc",disabledButton:N}),Object(c.jsx)(d,{clickOnButton:function(){a(o),V(!0),I(!1)},title:"reset",disabledButton:A})]})]})]})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,l=e.getTTFB;n(t),c(t),r(t),a(t),l(t)}))};u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root")),f()}],[[15,1,2]]]);
//# sourceMappingURL=main.160dc24c.chunk.js.map