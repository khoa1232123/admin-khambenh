(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{702:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n(3);var c=function(e){var t=Math.floor(999999*Math.random())+1000001;return e+(t+="").replace("1","")},r=function(e){var t=new Date(e),n=""+(t.getMonth()+1),c=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),[c,n,r].join("/")},o=function(e){var t=new Date(e),n=""+(t.getMonth()+1),c=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),[r,n,c].join("-")}},736:function(e,t,n){"use strict";n.r(t);var c=n(41),r=n(6),o=n(1),s=n(34),i=n(84),j=n(108),l=n(19),u=n(702),d=n(3),a=function(e){var t=e.modal,n=e.setModal,a=e.oldThuoc,h=Object(s.b)(),b=Object(o.useState)({}),O=Object(c.a)(b,2),f=O[0],x=O[1],g=function(e){console.log(e);var t=e.target.name,n=e.target.value;x(Object(l.a)(Object(l.a)({},f),{},Object(j.a)({},t,n)))};Object(o.useEffect)((function(){a&&x(a)}),[a]);var m=function(){x({}),n(!1)};return Object(d.jsxs)(r.N,{show:t,onClose:m,children:[Object(d.jsx)(r.Q,{closeButton:!0,children:Object(d.jsx)(r.R,{children:"Update Thuoc"})}),Object(d.jsx)(r.O,{children:Object(d.jsxs)(r.x,{action:"",method:"post",className:"form-horizontal",children:[Object(d.jsxs)(r.y,{row:!0,children:[Object(d.jsx)(r.n,{md:"3",children:Object(d.jsx)(r.L,{htmlFor:"text-input",children:"T\xean thu\u1ed1c"})}),Object(d.jsx)(r.n,{xs:"12",md:"9",children:Object(d.jsx)(r.F,{id:"ten",type:"text",name:"ten",placeholder:"T\xean thu\u1ed1c",value:f.ten||"",onChange:g})})]}),Object(d.jsxs)(r.y,{row:!0,children:[Object(d.jsx)(r.n,{md:"3",children:Object(d.jsx)(r.L,{htmlFor:"text-input",children:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng"})}),Object(d.jsx)(r.n,{xs:"12",md:"9",children:Object(d.jsx)(r.eb,{id:"huongdansudung",name:"huongdansudung",placeholder:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng",value:f.huongdansudung||"",onChange:g,rows:7})})]})]})}),Object(d.jsxs)(r.P,{children:[Object(d.jsx)(r.f,{color:"primary",onClick:function(){console.log({thuoc:f,oldThuoc:a}),""!==f.ten&&(0===Object.keys(a).length?(f.mso=Object(u.c)("tc"),h(Object(i.k)(f))):h(Object(i.ib)(f)),x({}),n(!1))},children:"Submit"})," ",Object(d.jsx)(r.f,{color:"secondary",onClick:m,children:"Cancel"})]})]})};t.default=function(){var e=Object(s.b)(),t=Object(o.useState)({}),n=Object(c.a)(t,2),j=n[0],l=n[1],u=Object(o.useState)(!1),h=Object(c.a)(u,2),b=h[0],O=h[1],f=Object(s.c)((function(e){return e.thuoc})).thuocs;Object(o.useEffect)((function(){e(Object(i.R)())}),[e]);return console.log(f),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(r.T,{children:Object(d.jsx)(r.n,{xs:"12",lg:"12",children:Object(d.jsxs)(r.i,{children:[Object(d.jsxs)(r.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(d.jsx)("span",{children:"Posts"}),Object(d.jsx)(r.f,{color:"success",onClick:function(){O(!0)},children:"Add Post"})]}),Object(d.jsx)(r.j,{children:Object(d.jsx)(r.q,{items:f,fields:["M\xe3 S\u1ed1","T\xean thu\u1ed1c","H\u01b0\u1edbng d\u1eabn","actions"],striped:!0,itemsPerPage:10,pagination:!0,sorter:!0,hover:!0,tableFilter:!0,scopedSlots:{"M\xe3 S\u1ed1":function(e){return Object(d.jsx)("td",{children:e.mso})},"T\xean thu\u1ed1c":function(e){return Object(d.jsx)("td",{children:e.ten})},"H\u01b0\u1edbng d\u1eabn":function(e){return Object(d.jsx)("td",{children:e.huongdansudung})},actions:function(t){return Object(d.jsxs)("td",{children:[Object(d.jsx)(r.f,{color:"warning",onClick:function(e){return function(e){l(e),O(!0)}(t)},children:"Edit"})," ",Object(d.jsx)(r.f,{color:"danger",onClick:function(n){return function(t){window.confirm("Are you sure?")&&e(Object(i.x)(t))}(t)},children:"Delete"})]})}}})})]})})}),Object(d.jsx)(a,{modal:b,setModal:O,oldThuoc:j})]})}}}]);
//# sourceMappingURL=20.92aaf467.chunk.js.map