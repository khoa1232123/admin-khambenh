(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[30],{874:function(e,t,c){"use strict";function o(e,t){if(null==e)return{};var c,o,n=function(e,t){if(null==e)return{};var c,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)c=s[o],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)c=s[o],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}c.d(t,"a",(function(){return o}))},875:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var o=c(16),n=c(874),s=c(1),a=c.n(s),r=c(3),i=c(2),j=["name","text"],l=function(e){var t=e.name,c=e.text,s=Object(n.a)(e,j),a=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(i.jsx)("div",{className:"card-header-actions",children:Object(i.jsx)(r.db,Object(o.a)(Object(o.a)({},s),{},{href:a,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(i.jsx)("small",{className:"text-muted",children:c||"docs"})}))})},u=a.a.memo(l)},889:function(e,t,c){"use strict";c.r(t);var o=c(69),n=c(34),s=c(1),a=c(3),r=c(875),i=c(2);t.default=function(){var e=Object(s.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),t=Object(n.a)(e,2),c=t[0],j=t[1],l=Object(s.useState)("top-right"),u=Object(n.a)(l,2),b=u[0],h=u[1],d=Object(s.useState)(!0),m=Object(n.a)(d,2),O=m[0],f=m[1],x=Object(s.useState)(5e3),p=Object(n.a)(x,2),g=p[0],k=p[1],v=Object(s.useState)(!0),y=Object(n.a)(v,2),N=y[0],w=y[1],S=Object(s.useState)(!0),T=Object(n.a)(S,2),C=T[0],F=T[1],K=c.reduce((function(e,t){return e[t.position]=e[t.position]||[],e[t.position].push(t),e}),{});return Object(i.jsxs)(a.j,{children:[Object(i.jsxs)(a.n,{children:["Toasts.",Object(i.jsx)(r.a,{name:"-Toast"})]}),Object(i.jsx)(a.k,{children:Object(i.jsx)(a.w,{children:Object(i.jsxs)(a.wb,{children:[Object(i.jsx)(a.u,{sm:"12",lg:"6",children:Object(i.jsxs)(a.J,{children:[Object(i.jsx)("h5",{children:"Add toast with following props:"}),Object(i.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2 mt-4",children:[Object(i.jsx)(a.T,{id:"autohide",checked:O,onChange:function(e){f(e.target.checked)},custom:!0}),Object(i.jsx)(a.cb,{variant:"custom-checkbox",htmlFor:"autohide",children:"Autohide of the toast"})]}),O&&Object(i.jsxs)(a.K,{className:"my-2",children:[Object(i.jsx)(a.cb,{htmlFor:"ccyear",children:"Time to autohide"}),Object(i.jsx)(a.S,{type:"number",value:g,onChange:function(e){k(Number(e.target.value))}})]}),Object(i.jsxs)(a.K,{className:"my-2",children:[Object(i.jsx)(a.cb,{htmlFor:"ccyear",children:"Position"}),Object(i.jsx)("select",{className:"form-control",value:b,onChange:function(e){h(e.target.value)},children:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(e,t){return Object(i.jsx)("option",{children:e},t)}))})]}),Object(i.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(a.T,{id:"fade",checked:C,onChange:function(e){F(e.target.checked)},custom:!0}),Object(i.jsx)(a.cb,{variant:"custom-checkbox",htmlFor:"fade",children:"fade"})]}),Object(i.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2",children:[Object(i.jsx)(a.T,{id:"close",custom:!0,checked:N,onChange:function(e){w(e.target.checked)}}),Object(i.jsx)(a.cb,{variant:"custom-checkbox",htmlFor:"close",children:"closeButton"})]}),Object(i.jsx)(a.f,{className:"mr-1 w-25",color:"success",onClick:function(){j([].concat(Object(o.a)(c),[{position:b,autohide:O&&g,closeButton:N,fade:C}]))},children:"Add toast"})]})}),Object(i.jsx)(a.u,{sm:"12",lg:"6",children:Object.keys(K).map((function(e){return Object(i.jsx)(a.Pb,{position:e,children:K[e].map((function(t,c){return Object(i.jsxs)(a.Mb,{show:!0,autohide:t.autohide,fade:t.fade,children:[Object(i.jsx)(a.Ob,{closeButton:t.closeButton,children:"Toast title"}),Object(i.jsx)(a.Nb,{children:"This is a toast in ".concat(e," positioned toaster number ").concat(c+1,".")})]},"toast"+c)}))},"toaster"+e)}))})]})})})]})}}}]);
//# sourceMappingURL=30.e5e59edb.chunk.js.map