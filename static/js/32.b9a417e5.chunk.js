(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{877:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));n(2);var c=function(e){var t=Math.floor(999999*Math.random())+1000001;return e+(t+="").replace("1","")},i=function(e){var t=new Date(e),n=""+(t.getMonth()+1),c=""+t.getDate(),i=t.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),[c,n,i].join("/")},r=function(e){var t=new Date(e),n=""+(t.getMonth()+1),c=""+t.getDate(),i=t.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),[i,n,c].join("-")}},884:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(169),i=n(2),r=function(e){var t=[];t.push(Object(i.jsx)("option",{value:"",children:"-- Select Options --"},"1"));var n,r=Object(c.a)(e);try{for(r.s();!(n=r.n()).done;){var o=n.value;t.push(Object(i.jsx)("option",{value:o._id,children:"".concat(o.mso," - ").concat(o.ten)},o._id))}}catch(s){r.e(s)}finally{r.f()}return t}},926:function(e,t,n){"use strict";n.r(t);var c=n(34),i=n(3),r=n(1),o=n(22),s=n(877),j=n(44),a=n(83),l=n(16),h=n(884),d=n(2),b=function(e){var t=e.modal,n=e.setModal,b=e.oldBacsi,u=Object(o.b)(),O=Object(o.c)((function(e){return e.khoa})).khoas;Object(r.useEffect)((function(){u(Object(j.m)())}),[u]);var x=Object(r.useState)({}),f=Object(c.a)(x,2),m=f[0],g=f[1],p=function(e){console.log(m);var t=e.target.name,n=e.target.value;g(Object(l.a)(Object(l.a)({},m),{},Object(a.a)({},t,n)))};Object(r.useEffect)((function(){b&&g(b)}),[b]);var v=function(){g({}),n(!1)};return Object(d.jsxs)(i.gb,{show:t,onClose:v,children:[Object(d.jsx)(i.jb,{closeButton:!0,children:Object(d.jsx)(i.kb,{children:"Update Bacsi"})}),Object(d.jsx)(i.hb,{children:Object(d.jsxs)(i.J,{action:"",method:"post",className:"form-horizontal",children:[Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"T\xean"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.S,{id:"ten",name:"ten",required:!0,placeholder:"T\xean Bacsi",value:m.ten||"",onChange:p})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"Email"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.S,{id:"email",name:"email",required:!0,placeholder:"Email",value:m.email||"",onChange:p})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.S,{id:"sodienthoai",name:"sodienthoai",required:!0,placeholder:"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i",value:m.sodienthoai||"",onChange:p})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"Gi\u1edbi t\xednh"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsxs)(i.xb,{id:"gioitinh",name:"gioitinh",value:m.gioitinh||"",onChange:p,children:[Object(d.jsx)("option",{value:"",children:"--Select Options--"}),Object(d.jsx)("option",{value:"nam",children:"Nam"}),Object(d.jsx)("option",{value:"nu",children:"N\u1eef"}),Object(d.jsx)("option",{value:"khac",children:"Kh\xe1c"})]})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"Ng\xe0y sinh"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.S,{id:"ngaysinh",type:"date",name:"ngaysinh",placeholder:"Ng\xe0y sinh",value:Object(s.b)(m.ngaysinh)||"",onChange:p})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"\u0110\u1ecba ch\u1ec9"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.S,{id:"diachi",name:"diachi",placeholder:"\u0110\u1ecba ch\u1ec9",value:m.diachi||"",onChange:p})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"Khoa"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.xb,{id:"khoa",name:"khoa",value:m.khoa||"",onChange:p,children:Object(h.a)(O)})})]})]})}),Object(d.jsxs)(i.ib,{children:[Object(d.jsx)(i.f,{color:"primary",onClick:function(){console.log({bacsi:m,oldBacsi:b}),""!==m.ten&&(0===Object.keys(b).length?(m.mso=Object(s.c)("bs"),u(Object(j.a)(m))):u(Object(j.t)(m)),g({}),n(!1))},children:"Do Something"})," ",Object(d.jsx)(i.f,{color:"secondary",onClick:v,children:"Cancel"})]})]})};t.default=function(){var e=Object(o.b)(),t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],l=n[1],h=Object(r.useState)({}),u=Object(c.a)(h,2),O=u[0],x=u[1],f=Object(o.c)((function(e){return e.bacsi})).bacsis;Object(r.useEffect)((function(){e(Object(j.j)())}),[e]),console.log(f);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.wb,{children:Object(d.jsx)(i.u,{xs:"12",lg:"12",children:Object(d.jsxs)(i.j,{children:[Object(d.jsxs)(i.n,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(d.jsx)("span",{children:"Posts"}),Object(d.jsx)(i.f,{color:"success",onClick:function(){l(!0)},children:"Add Post"})]}),Object(d.jsx)(i.k,{children:Object(d.jsx)(i.y,{items:f,fields:["M\xe3 S\u1ed1","T\xean b\xe1c s\u0129","S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i","email","\u0110\u1ecba Ch\u1ec9","Gi\u1edbi t\xednh","Ng\xe0y Sinh","Khoa","actions"],striped:!0,itemsPerPage:10,pagination:!0,scopedSlots:{"M\xe3 S\u1ed1":function(e){return Object(d.jsx)("td",{children:e.mso})},"T\xean b\xe1c s\u0129":function(e){return Object(d.jsx)("td",{children:e.ten})},"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i":function(e){return Object(d.jsx)("td",{children:e.sodienthoai})},"\u0110\u1ecba Ch\u1ec9":function(e){return Object(d.jsx)("td",{children:e.diachi})},"Gi\u1edbi t\xednh":function(e){return Object(d.jsx)("td",{children:e.gioitinh})},"Ng\xe0y Sinh":function(e){return Object(d.jsx)("td",{children:Object(s.a)(e.ngaysinh)})},Khoa:function(e){return Object(d.jsx)("td",{children:e.khoa?e.khoa.ten:""})},actions:function(t){return Object(d.jsxs)("td",{children:[Object(d.jsx)(i.f,{color:"warning",onClick:function(e){return function(e){x(e),l(!0)}(t)},children:"Edit"})," ",Object(d.jsx)(i.f,{color:"danger",onClick:function(n){return function(t){window.confirm("Are you sure?")&&(console.log("abc"),e(Object(j.f)(t)))}(t)},children:"Delete"})]})}}})})]})})}),Object(d.jsx)(b,{modal:a,setModal:l,oldBacsi:O})]})}}}]);
//# sourceMappingURL=32.b9a417e5.chunk.js.map