(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{702:function(e,n,t){"use strict";t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return o}));t(3);var c=function(e){var n=Math.floor(999999*Math.random())+1000001;return e+(n+="").replace("1","")},i=function(e){var n=new Date(e),t=""+(n.getMonth()+1),c=""+n.getDate(),i=n.getFullYear();return t.length<2&&(t="0"+t),c.length<2&&(c="0"+c),[c,t,i].join("/")},o=function(e){var n=new Date(e),t=""+(n.getMonth()+1),c=""+n.getDate(),i=n.getFullYear();return t.length<2&&(t="0"+t),c.length<2&&(c="0"+c),[i,t,c].join("-")}},703:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return r}));var c=t(109),i=t(3),o=function(e){var n=[];n.push(Object(i.jsx)("option",{value:"",children:"-- Select Options --"},"1"));var t,o=Object(c.a)(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;n.push(Object(i.jsx)("option",{value:r._id,children:"".concat(r.mso," - ").concat(r.msobn?r.msobn:""," ").concat(r.ten?r.ten:"")},r._id))}}catch(s){o.e(s)}finally{o.f()}return n},r=function(e){var n=[];return e.map((function(e){n.push({_id:e._id,mso:e.mso,msobn:e.hosobenhnhan.mso,ten:e.hosobenhnhan.ten})})),n}},721:function(e,n,t){"use strict";t.r(n);var c=t(41),i=t(6),o=t(1),r=t(34),s=t(702),h=t(84),j=t(108),a=t(19),l=t(703),u=t(3),b=function(e){var n=e.modal,t=e.setModal,b=e.oldPhieuxetnghiem,d=Object(r.b)(),O=Object(r.c)((function(e){return e.benhnhan})).benhnhans;Object(o.useEffect)((function(){d(Object(h.C)())}),[d]);var x=Object(o.useState)({}),f=Object(c.a)(x,2),m=f[0],g=f[1],p=function(e){console.log(e);var n=e.target.name,t=e.target.value;g(Object(a.a)(Object(a.a)({},m),{},Object(j.a)({},n,t)))};Object(o.useEffect)((function(){b&&g(b)}),[b]);var v=function(){g({}),t(!1)};return Object(u.jsxs)(i.N,{show:n,onClose:v,children:[Object(u.jsx)(i.Q,{closeButton:!0,children:Object(u.jsx)(i.R,{children:"Update Phieuxetnghiem"})}),Object(u.jsx)(i.O,{children:Object(u.jsxs)(i.x,{action:"",method:"post",className:"form-horizontal",children:[Object(u.jsxs)(i.y,{row:!0,children:[Object(u.jsx)(i.n,{md:"3",children:Object(u.jsx)(i.L,{htmlFor:"text-input",children:"B\u1ec7nh Nh\xe2n"})}),Object(u.jsx)(i.n,{xs:"12",md:"9",children:Object(u.jsx)(i.U,{id:"hosobenhnhan",name:"hosobenhnhan",value:m.hosobenhnhan||"",onChange:p,children:Object(l.b)(O)})})]}),Object(u.jsxs)(i.y,{row:!0,children:[Object(u.jsx)(i.n,{md:"3",children:Object(u.jsx)(i.L,{htmlFor:"text-input",children:"Ng\xe0y \u0110\xf3ng"})}),Object(u.jsx)(i.n,{xs:"12",md:"9",children:Object(u.jsx)(i.F,{id:"ngaydong",type:"date",name:"ngaydong",placeholder:"Ng\xe0y Nh\u1eadp Vi\u1ec7n",value:Object(s.b)(m.ngaydong)||"",onChange:p})})]}),Object(u.jsxs)(i.y,{row:!0,children:[Object(u.jsx)(i.n,{md:"3",children:Object(u.jsx)(i.L,{htmlFor:"text-input",children:"S\u1ed1 ti\u1ec1n"})}),Object(u.jsx)(i.n,{xs:"12",md:"9",children:Object(u.jsx)(i.F,{id:"sotien",type:"number",name:"sotien",placeholder:"S\u1ed1 ti\u1ec1n",value:m.sotien||0,onChange:p})})]})]})}),Object(u.jsxs)(i.P,{children:[Object(u.jsx)(i.f,{color:"primary",onClick:function(){console.log({phieuxetnghiem:m,oldPhieuxetnghiem:b}),""!==m.ten&&(0===Object.keys(b).length?(m.mso=Object(s.c)("xn"),d(Object(h.i)(m))):d(Object(h.ab)(m)),g({}),t(!1))},children:"Submit"})," ",Object(u.jsx)(i.f,{color:"secondary",onClick:v,children:"Cancel"})]})]})};n.default=function(){var e=Object(r.b)(),n=Object(o.useState)({}),t=Object(c.a)(n,2),j=t[0],a=t[1],l=Object(o.useState)(!1),d=Object(c.a)(l,2),O=d[0],x=d[1],f=Object(r.c)((function(e){return e.phieuxetnghiem})).phieuxetnghiems;Object(o.useEffect)((function(){e(Object(h.K)())}),[e]);return console.log(f),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i.T,{children:Object(u.jsx)(i.n,{xs:"12",lg:"12",children:Object(u.jsxs)(i.i,{children:[Object(u.jsxs)(i.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(u.jsx)("span",{children:"Posts"}),Object(u.jsx)(i.f,{color:"success",onClick:function(){x(!0)},children:"Add Post"})]}),Object(u.jsx)(i.j,{children:Object(u.jsx)(i.q,{items:f,fields:["M\xe3 S\u1ed1","T\xean x\xe9t nghi\u1ec7m","Ng\xe0y","K\u1ebft qu\u1ea3","M\xe3 B\u1ec7nh Nh\xe2n","T\xean b\u1ec7nh nh\xe2n","email","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i","actions"],striped:!0,itemsPerPage:10,pagination:!0,scopedSlots:{"M\xe3 S\u1ed1":function(e){return Object(u.jsx)("td",{children:e.mso})},"T\xean x\xe9t nghi\u1ec7m":function(e){return Object(u.jsx)("td",{children:e.ten})},"Ng\xe0y":function(e){return Object(u.jsx)("td",{children:Object(s.a)(e.ngay)})},"K\u1ebft qu\u1ea3":function(e){return Object(u.jsx)("td",{children:e.ketqua})},"M\xe3 B\u1ec7nh Nh\xe2n":function(e){return Object(u.jsx)("td",{children:e.hosobenhnhan.mso})},"T\xean b\u1ec7nh nh\xe2n":function(e){return Object(u.jsx)("td",{children:e.hosobenhnhan.ten})},email:function(e){return Object(u.jsx)("td",{children:e.hosobenhnhan.email})},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i":function(e){return Object(u.jsx)("td",{children:e.hosobenhnhan.sodienthoai})},actions:function(n){return Object(u.jsxs)("td",{children:[Object(u.jsx)(i.f,{color:"warning",onClick:function(e){return function(e){a(e),x(!0)}(n)},children:"Edit"})," ",Object(u.jsx)(i.f,{color:"danger",onClick:function(t){return function(n){window.confirm("Are you sure?")&&e(Object(h.v)(n))}(n)},children:"Delete"})]})}}})})]})})}),Object(u.jsx)(b,{modal:O,setModal:x,oldPhieuxetnghiem:j})]})}}}]);
//# sourceMappingURL=9.8163c490.chunk.js.map