(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{702:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));n(3);var c=function(e){var t=Math.floor(999999*Math.random())+1000001;return e+(t+="").replace("1","")},i=function(e){var t=new Date(e),n=""+(t.getMonth()+1),c=""+t.getDate(),i=t.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),[c,n,i].join("/")},s=function(e){var t=new Date(e),n=""+(t.getMonth()+1),c=""+t.getDate(),i=t.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),[i,n,c].join("-")}},714:function(e,t,n){"use strict";n.r(t);var c=n(41),i=n(6),s=n(1),j=n(34),h=n(33),r=n(702),l=n(84),d=n(108),x=n(19),a=n(3),o=function(e){var t=e.modal,n=e.setModal,h=e.oldPhieuxetnghiem,o=(e.benhnhan,Object(j.b)()),b=Object(s.useState)({}),O=Object(c.a)(b,2),u=O[0],m=O[1],g=function(e){console.log(e);var t=e.target.name,n=e.target.value;m(Object(x.a)(Object(x.a)({},u),{},Object(d.a)({},t,n)))};Object(s.useEffect)((function(){h&&m(h)}),[h]);var p=function(){m({}),n(!1)};return Object(a.jsxs)(i.N,{show:t,onClose:p,children:[Object(a.jsx)(i.Q,{closeButton:!0,children:Object(a.jsx)(i.R,{children:"Update Phieuxetnghiem"})}),Object(a.jsx)(i.O,{children:Object(a.jsxs)(i.x,{action:"",method:"post",className:"form-horizontal",children:[Object(a.jsx)(i.y,{row:!0,children:Object(a.jsx)(i.n,{md:"3",children:Object(a.jsx)(i.L,{htmlFor:"text-input",children:"B\u1ec7nh Nh\xe2n"})})}),Object(a.jsxs)(i.y,{row:!0,children:[Object(a.jsx)(i.n,{md:"3",children:Object(a.jsx)(i.L,{htmlFor:"text-input",children:"T\xean x\xe9t nghi\u1ec7m"})}),Object(a.jsx)(i.n,{xs:"12",md:"9",children:Object(a.jsx)(i.F,{id:"ten",type:"text",name:"ten",placeholder:"T\xean x\xe9t nghi\u1ec7m",value:u.ten||"",onChange:g})})]}),Object(a.jsxs)(i.y,{row:!0,children:[Object(a.jsx)(i.n,{md:"3",children:Object(a.jsx)(i.L,{htmlFor:"text-input",children:"K\u1ebft qu\u1ea3:"})}),Object(a.jsx)(i.n,{xs:"12",md:"9",children:Object(a.jsx)(i.eb,{id:"ketqua",type:"text",name:"ketqua",placeholder:"K\u1ebft qu\u1ea3",value:u.ketqua||"",onChange:g})})]}),Object(a.jsxs)(i.y,{row:!0,children:[Object(a.jsx)(i.n,{md:"3",children:Object(a.jsx)(i.L,{htmlFor:"text-input",children:"Ng\xe0y l\xe0m x\xe9t nghi\u1ec7m"})}),Object(a.jsx)(i.n,{xs:"12",md:"9",children:Object(a.jsx)(i.F,{id:"ngay",type:"date",name:"ngay",placeholder:"Ng\xe0y Nh\u1eadp Vi\u1ec7n",value:Object(r.b)(u.ngay)||"",onChange:g})})]})]})}),Object(a.jsxs)(i.P,{children:[Object(a.jsx)(i.f,{color:"primary",onClick:function(){console.log({phieuxetnghiem:u,oldPhieuxetnghiem:h}),""!==u.ten&&(0===Object.keys(h).length?(u.mso=Object(r.c)("xn"),o(Object(l.i)(u))):o(Object(l.db)(u)),m({}),n(!1))},children:"Submit"})," ",Object(a.jsx)(i.f,{color:"secondary",onClick:p,children:"Cancel"})]})]})};t.default=function(){var e=Object(h.i)().id,t=Object(s.useState)(!1),n=Object(c.a)(t,2),d=n[0],x=n[1],b=Object(j.b)(),O=Object(j.c)((function(e){return e.benhnhan})).benhnhan,u=Object(j.c)((function(e){return e.phieukhambenh})).phieukhambenhs,m=Object(j.c)((function(e){return e.phieuxetnghiem})).phieuxetnghiems;return console.log({benhnhan:O,phieukhambenhs:u,phieuxetnghiems:m}),Object(s.useEffect)((function(){b(Object(l.C)(e)),b(Object(l.L)(e))}),[b,e]),O?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.T,{children:Object(a.jsx)(i.n,{xs:"12",lg:"12",children:Object(a.jsxs)(i.i,{children:[Object(a.jsx)(i.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:Object(a.jsx)("span",{children:"B\u1ec7nh nh\xe2n"})}),Object(a.jsxs)(i.j,{children:[Object(a.jsxs)(i.T,{children:[Object(a.jsx)(i.n,{xs:2,children:"M\xe3 s\u1ed1:"}),Object(a.jsx)(i.n,{xs:10,children:O.mso&&O.mso})]}),Object(a.jsxs)(i.T,{children:[Object(a.jsx)(i.n,{xs:2,children:"T\xean:"}),Object(a.jsx)(i.n,{xs:10,children:O.ten&&O.ten})]}),Object(a.jsxs)(i.T,{children:[Object(a.jsx)(i.n,{xs:2,children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i:"}),Object(a.jsx)(i.n,{xs:10,children:O.sodienthoai&&O.sodienthoai})]}),Object(a.jsxs)(i.T,{children:[Object(a.jsx)(i.n,{xs:2,children:"Email:"}),Object(a.jsx)(i.n,{xs:10,children:O.email&&O.email})]}),Object(a.jsxs)(i.T,{children:[Object(a.jsx)(i.n,{xs:2,children:"\u0110\u1ecba ch\u1ec9:"}),Object(a.jsx)(i.n,{xs:10,children:O.diachi&&O.diachi})]}),Object(a.jsxs)(i.T,{children:[Object(a.jsx)(i.n,{xs:2,children:"Gi\u1edbi t\xednh:"}),Object(a.jsx)(i.n,{xs:10,children:O.gioitinh&&O.gioitinh})]}),Object(a.jsxs)(i.T,{children:[Object(a.jsx)(i.n,{xs:2,children:"Ng\xe0y sinh:"}),Object(a.jsx)(i.n,{xs:10,children:O.ngaysinh&&Object(r.a)(O.ngaysinh)})]}),Object(a.jsxs)(i.T,{children:[Object(a.jsx)(i.n,{xs:2,children:"Danh s\xe1ch phi\u1ebfu kh\xe1m b\u1ec7nh:"}),Object(a.jsx)(i.n,{xs:10,children:Object(a.jsxs)(i.i,{style:{paddingBottom:"0px",marginTop:"20px"},children:[Object(a.jsxs)(i.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(a.jsx)("span",{children:"Danh s\xe1ch phi\u1ebfu kh\xe1m b\u1ec7nh:"}),Object(a.jsx)(i.f,{color:"success",children:"Add Post"})]}),Object(a.jsx)(i.j,{style:{paddingBottom:"0px"},children:Object(a.jsx)(i.q,{style:{marginBottom:"0px"},items:u,fields:["M\xe3 S\u1ed1","Ng\xe0y gi\u1edd kh\xe1m"],striped:!0,itemsPerPage:10,pagination:!0,scopedSlots:{"M\xe3 S\u1ed1":function(e){return Object(a.jsx)("td",{children:e.mso})},"Ng\xe0y gi\u1edd kh\xe1m":function(e){return Object(a.jsx)("td",{children:e&&Object(r.a)(e.ngaygiokham)})}}})})]})})]}),Object(a.jsxs)(i.T,{children:[Object(a.jsx)(i.n,{xs:2,children:"Danh s\xe1ch phi\u1ebfu x\xe9t nghi\u1ec7m:"}),Object(a.jsx)(i.n,{xs:10,children:Object(a.jsxs)(i.i,{style:{paddingBottom:"0px",marginTop:"20px"},children:[Object(a.jsxs)(i.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(a.jsx)("span",{children:"Danh s\xe1ch phi\u1ebfu x\xe9t nghi\u1ec7m:"}),Object(a.jsx)(i.f,{color:"success",children:"Add Post"})]}),Object(a.jsx)(i.j,{style:{paddingBottom:"0px"},children:Object(a.jsx)(i.q,{style:{marginBottom:"0px"},items:u,fields:["M\xe3 S\u1ed1","Ng\xe0y gi\u1edd kh\xe1m"],striped:!0,itemsPerPage:10,pagination:!0,scopedSlots:{"M\xe3 S\u1ed1":function(e){return Object(a.jsx)("td",{children:e.mso})},"Ng\xe0y gi\u1edd kh\xe1m":function(e){return Object(a.jsx)("td",{children:e&&Object(r.a)(e.ngaygiokham)})}}})})]})})]})]})]})})}),Object(a.jsx)(o,{modal:d,setModal:x,oldPhieuxetnghiem:!0,benhnhan:O})]}):Object(a.jsx)("div",{children:"No data"})}}}]);
//# sourceMappingURL=16.14029236.chunk.js.map