(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{880:function(e,t,c){"use strict";c.d(t,"b",(function(){return n})),c.d(t,"a",(function(){return i}));c(2);var n=function(e){var t=Math.floor(999999*Math.random())+1000001;return e+(t+="").replace("1","")},i=function(e){var t=new Date(e),c=""+(t.getMonth()+1),n=""+t.getDate(),i=t.getFullYear();return c.length<2&&(c="0"+c),n.length<2&&(n="0"+n),[n,c,i].join(" - ")}},883:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(168),i=c(2),r=function(e){var t=[];t.push(Object(i.jsx)("option",{value:"",children:"-- Select Options --"},"1"));var c,r=Object(n.a)(e);try{for(r.s();!(c=r.n()).done;){var o=c.value;t.push(Object(i.jsx)("option",{value:o._id,children:"".concat(o.mso," ").concat(o.ten)},o._id))}}catch(s){r.e(s)}finally{r.f()}return t}},925:function(e,t,c){"use strict";c.r(t);var n=c(34),i=c(3),r=c(1),o=c(23),s=c(880),j=c(43),a=c(83),l=c(16),h=c(883),d=c(2),b=function(e){var t=e.modal,c=e.setModal,b=e.oldBacsi,u=Object(o.b)(),O=Object(o.c)((function(e){return e.khoa})).khoas;Object(r.useEffect)((function(){u(Object(j.h)()),u(Object(j.k)())}),[u]);var x=Object(r.useState)({}),m=Object(n.a)(x,2),f=m[0],g=m[1],p=function(e){console.log(f);var t=e.target.name,c=e.target.value;g(Object(l.a)(Object(l.a)({},f),{},Object(a.a)({},t,c)))};Object(r.useEffect)((function(){b&&g(b)}),[b]);var v=function(){g({}),c(!1)};return Object(d.jsxs)(i.gb,{show:t,onClose:v,children:[Object(d.jsx)(i.jb,{closeButton:!0,children:Object(d.jsx)(i.kb,{children:"Update Bacsi"})}),Object(d.jsx)(i.hb,{children:Object(d.jsxs)(i.J,{action:"",method:"post",className:"form-horizontal",children:[Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"T\xean"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.S,{id:"ten",name:"ten",required:!0,placeholder:"T\xean Bacsi",value:f.ten||"",onChange:p})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"Email"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.S,{id:"email",name:"email",required:!0,placeholder:"Email",value:f.email||"",onChange:p})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.S,{id:"sodienthoai",name:"sodienthoai",required:!0,placeholder:"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i",value:f.sodienthoai||"",onChange:p})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"Gi\u1edbi t\xednh"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsxs)(i.xb,{id:"gioitinh",name:"gioitinh",value:f.gioitinh||"",onChange:p,children:[Object(d.jsx)("option",{value:"",children:"--Select Options--"}),Object(d.jsx)("option",{value:"nam",children:"Nam"}),Object(d.jsx)("option",{value:"nu",children:"N\u1eef"}),Object(d.jsx)("option",{value:"khac",children:"Kh\xe1c"})]})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"Ng\xe0y sinh"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.S,{id:"ngaysinh",type:"date",name:"ngaysinh",placeholder:"Ng\xe0y sinh",value:f.ngaysinh||"",onChange:p})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"\u0110\u1ecba ch\u1ec9"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.S,{id:"diachi",name:"diachi",placeholder:"\u0110\u1ecba ch\u1ec9",value:f.diachi||"",onChange:p})})]}),Object(d.jsxs)(i.K,{row:!0,children:[Object(d.jsx)(i.u,{md:"3",children:Object(d.jsx)(i.cb,{htmlFor:"text-input",children:"Khoa"})}),Object(d.jsx)(i.u,{xs:"12",md:"9",children:Object(d.jsx)(i.xb,{id:"khoa",name:"khoa",value:f.khoa||"",onChange:p,children:Object(h.a)(O)})})]})]})}),Object(d.jsxs)(i.ib,{children:[Object(d.jsx)(i.f,{color:"primary",onClick:function(){console.log({bacsi:f,oldBacsi:b}),""!==f.ten&&(0===Object.keys(b).length?(f.mso=Object(s.b)("bs"),u(Object(j.a)(f))):u(Object(j.q)(f)),g({}),c(!1))},children:"Do Something"})," ",Object(d.jsx)(i.f,{color:"secondary",onClick:v,children:"Cancel"})]})]})};t.default=function(){var e=Object(o.b)(),t=Object(r.useState)(!1),c=Object(n.a)(t,2),a=c[0],l=c[1],h=Object(r.useState)({}),u=Object(n.a)(h,2),O=u[0],x=u[1],m=Object(o.c)((function(e){return e.bacsi})).bacsis;Object(r.useEffect)((function(){e(Object(j.h)())}),[e]),console.log(m);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.wb,{children:Object(d.jsx)(i.u,{xs:"12",lg:"12",children:Object(d.jsxs)(i.j,{children:[Object(d.jsxs)(i.n,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(d.jsx)("span",{children:"Posts"}),Object(d.jsx)(i.f,{color:"success",onClick:function(){l(!0)},children:"Add Post"})]}),Object(d.jsx)(i.k,{children:Object(d.jsx)(i.y,{items:m,fields:["M\xe3 S\u1ed1","T\xean b\xe1c s\u0129","S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i","email","\u0110\u1ecba Ch\u1ec9","Gi\u1edbi t\xednh","Ng\xe0y Sinh","Khoa","actions"],striped:!0,itemsPerPage:10,pagination:!0,scopedSlots:{"M\xe3 S\u1ed1":function(e){return Object(d.jsx)("td",{children:e.mso})},"T\xean b\xe1c s\u0129":function(e){return Object(d.jsx)("td",{children:e.ten})},"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i":function(e){return Object(d.jsx)("td",{children:e.sodienthoai})},"\u0110\u1ecba Ch\u1ec9":function(e){return Object(d.jsx)("td",{children:e.diachi})},"Gi\u1edbi t\xednh":function(e){return Object(d.jsx)("td",{children:e.gioitinh})},"Ng\xe0y Sinh":function(e){return Object(d.jsx)("td",{children:Object(s.a)(e.ngaysinh)})},Khoa:function(e){return Object(d.jsx)("td",{children:e.khoa?e.khoa.ten:""})},actions:function(t){return Object(d.jsxs)("td",{children:[Object(d.jsx)(i.f,{color:"warning",onClick:function(e){return function(e){x(e),l(!0)}(t)},children:"Edit"})," ",Object(d.jsx)(i.f,{color:"danger",onClick:function(c){return function(t){window.confirm("Are you sure?")&&(console.log("abc"),e(Object(j.e)(t)))}(t)},children:"Delete"})]})}}})})]})})}),Object(d.jsx)(b,{modal:a,setModal:l,oldBacsi:O})]})}}}]);
//# sourceMappingURL=32.cb3179a0.chunk.js.map