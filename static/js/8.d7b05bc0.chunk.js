(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{702:function(e,t,c){"use strict";c.d(t,"c",(function(){return n})),c.d(t,"a",(function(){return s})),c.d(t,"b",(function(){return o}));c(3);var n=function(e){var t=Math.floor(999999*Math.random())+1000001;return e+(t+="").replace("1","")},s=function(e){var t=new Date(e),c=""+(t.getMonth()+1),n=""+t.getDate(),s=t.getFullYear();return c.length<2&&(c="0"+c),n.length<2&&(n="0"+n),[n,c,s].join("/")},o=function(e){var t=new Date(e),c=""+(t.getMonth()+1),n=""+t.getDate(),s=t.getFullYear();return c.length<2&&(c="0"+c),n.length<2&&(n="0"+n),[s,c,n].join("-")}},703:function(e,t,c){"use strict";c.d(t,"b",(function(){return o})),c.d(t,"a",(function(){return i}));var n=c(109),s=c(3),o=function(e){var t=[];t.push(Object(s.jsx)("option",{value:"",children:"-- Select Options --"},"1"));var c,o=Object(n.a)(e);try{for(o.s();!(c=o.n()).done;){var i=c.value;t.push(Object(s.jsx)("option",{value:i._id,children:"".concat(i.mso," - ").concat(i.msobn?i.msobn:""," ").concat(i.ten?i.ten:"")},i._id))}}catch(j){o.e(j)}finally{o.f()}return t},i=function(e){var t=[];return e.map((function(e){t.push({_id:e._id,mso:e.mso,msobn:e.hosobenhnhan.mso,ten:e.hosobenhnhan.ten})})),t}},710:function(e,t,c){"use strict";c.r(t);var n=c(41),s=c(34),o=c(33),i=c(1),j=c(84),h=c(6),r=c(25),l=c(108),b=c(19),a=c(702),u=c(703),d=c(3),O=function(e){var t=e.modal,c=e.setModal,O=e.oldToathuoc,x=e.chitietphieukham,m=Object(o.i)().id,f=Object(s.b)(),p=Object(s.c)((function(e){return e.thuoc})).thuocs;Object(i.useEffect)((function(){f(Object(j.P)())}),[f]),console.log(O);var g=Object(i.useState)({}),y=Object(n.a)(g,2),v=y[0],k=y[1],C=Object(i.useState)([{thuoc:"",soluong:0}]),T=Object(n.a)(C,2),S=T[0],B=T[1],w=function(e,t){console.log(e);var c=Object(r.a)(S),n=e.target.name,s=e.target.value;c[t][n]="soluong"===n?Number(s):s,B(c)};Object(i.useEffect)((function(){0!==Object.keys(O).length&&(k(O),B(Object(r.a)(O.chitiet)))}),[O]);var M=function(){k({}),B([{thuoc:"",soluong:0}]),c(!1)};return Object(d.jsxs)(h.N,{show:t,onClose:M,size:"lg",children:[Object(d.jsx)(h.Q,{closeButton:!0,children:Object(d.jsx)(h.R,{children:"Toathuoc"})}),Object(d.jsx)(h.O,{children:Object(d.jsxs)(h.x,{action:"",method:"post",className:"form-horizontal",children:[Object(d.jsxs)(h.y,{row:!0,children:[Object(d.jsx)(h.n,{md:"3",children:Object(d.jsx)(h.L,{htmlFor:"text-input",children:"Ng\xe0y l\u1eadp"})}),Object(d.jsx)(h.n,{xs:"12",md:"9",children:Object(d.jsx)(h.F,{id:"ngaylap",type:"date",name:"ngaylap",placeholder:"Ng\xe0y l\u1eadp",value:Object(a.b)(v.ngaylap)||"",onChange:function(e){console.log(e.target.name);var t=e.target.name,c=e.target.value;k(Object(b.a)(Object(b.a)({},v),{},Object(l.a)({},t,c)))}})})]}),Object(d.jsxs)(h.y,{row:!0,children:[Object(d.jsx)(h.n,{md:"3",children:Object(d.jsx)(h.L,{htmlFor:"text-input",children:"Danh s\xe1ch thu\u1ed1c"})}),Object(d.jsxs)(h.n,{xs:"12",md:"9",children:[S.map((function(e,t){return Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:"7",md:"7",children:Object(d.jsx)(h.U,{name:"thuoc",value:e.thuoc&&e.thuoc._id||e.thuoc||"",onChange:function(e){return w(e,t)},children:Object(u.b)(p)})}),Object(d.jsx)(h.n,{xs:"3",md:"3",children:Object(d.jsx)(h.F,{name:"soluong",type:"number",value:e.soluong||0,onChange:function(e){return w(e,t)}})}),Object(d.jsx)(h.n,{xs:"2",md:"2",children:Object(d.jsx)(h.f,{color:"danger",onClick:function(e){return function(e,t){console.log(S);var c=Object(r.a)(S);c.splice(t,1),B(c)}(0,t)},children:"X"})}),Object(d.jsx)(h.n,{xs:"12",md:"12",children:Object(d.jsx)("br",{})})]},t)})),Object(d.jsx)(h.n,{xs:"12",md:"12",children:Object(d.jsx)(h.f,{type:"button",color:"success",onClick:function(){B([].concat(Object(r.a)(S),[{thuoc:"",soluong:0}]))},children:"Th\xeam thu\u1ed1c"})})]})]}),Object(d.jsxs)(h.y,{row:!0,children:[Object(d.jsx)(h.n,{md:"3"}),Object(d.jsx)(h.n,{xs:"12",md:"9"})]})]})}),Object(d.jsxs)(h.P,{children:[Object(d.jsx)(h.f,{color:"primary",onClick:function(){console.log({toathuoc:v,oldToathuoc:O,chitiettoathuoc:S}),v.chitiet=S,0===Object.keys(O).length?(v.mso=Object(a.c)("tt"),f(Object(j.fb)({toathuoc:v,chitietphieukham:x})),f(Object(j.F)(m))):(f(Object(j.hb)(v)),f(Object(j.F)(m))),k({}),B([{thuoc:"",soluong:0}]),c(!1)},children:"Submit"})," ",Object(d.jsx)(h.f,{color:"secondary",onClick:M,children:"Cancel"})]})]})},x=c(195),m=function(e){var t=e.modal,c=e.setModal,l=e.oldChitietbenh,b=e.chitietphieukham,a=Object(o.i)().id,O=Object(s.b)(),m=Object(s.c)((function(e){return e.benh})).benhs;Object(i.useEffect)((function(){O(Object(j.E)())}),[O]),console.log(l);var f=Object(i.useState)([{benh:""}]),p=Object(n.a)(f,2),g=p[0],y=p[1];Object(i.useEffect)((function(){0!==l.length&&y(Object(r.a)(l))}),[l]);var v=function(){y([{benh:""}]),c(!1)};return Object(d.jsxs)(h.N,{show:t,onClose:v,size:"lg",children:[Object(d.jsx)(h.Q,{closeButton:!0,children:Object(d.jsx)(h.R,{children:"Chi ti\u1ebft b\u1ec7nh"})}),Object(d.jsx)(h.O,{children:Object(d.jsxs)(h.x,{action:"",method:"post",className:"form-horizontal",children:[Object(d.jsxs)(h.y,{row:!0,children:[Object(d.jsx)(h.n,{md:"3",children:Object(d.jsx)(h.L,{htmlFor:"text-input",children:"Danh s\xe1ch B\u1ec7nh"})}),Object(d.jsxs)(h.n,{xs:"12",md:"9",children:[g.map((function(e,t){return Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:"10",md:"10",children:Object(d.jsx)(h.U,{name:"benh",value:e.benh&&e.benh._id||e.benh||"",onChange:function(e){return function(e,t){console.log(e);var c=Object(r.a)(g),n=e.target.name,s=e.target.value;c[t][n]="soluong"===n?Number(s):s,y(c)}(e,t)},children:Object(u.b)(m)})}),Object(d.jsx)(h.n,{xs:"2",md:"2",children:Object(d.jsx)(h.f,{color:"danger",onClick:function(e){return function(e,t){console.log(g);var c=Object(r.a)(g);c.splice(t,1),y(c)}(0,t)},children:"X"})}),Object(d.jsx)(h.n,{xs:"12",md:"12",children:Object(d.jsx)("br",{})})]},t)})),Object(d.jsx)(h.n,{xs:"12",md:"12",children:Object(d.jsx)(h.f,{type:"button",color:"success",onClick:function(){y([].concat(Object(r.a)(g),[{benh:""}]))},children:"Th\xeam thu\u1ed1c"})})]})]}),Object(d.jsxs)(h.y,{row:!0,children:[Object(d.jsx)(h.n,{md:"3"}),Object(d.jsx)(h.n,{xs:"12",md:"9"})]})]})}),Object(d.jsxs)(h.P,{children:[Object(d.jsx)(h.f,{color:"primary",onClick:function(){console.log(g),0!==Object.keys(b).length&&O(Object(x.g)({chitietbenh:g,chitietphieukham:b})),O(Object(x.c)(a)),y([{benh:""}]),c(!1)},children:"Submit"})," ",Object(d.jsx)(h.f,{color:"secondary",onClick:v,children:"Cancel"})]})]})};t.default=function(){var e=Object(o.i)().id,t=Object(i.useState)(!1),c=Object(n.a)(t,2),r=c[0],l=c[1],b=Object(i.useState)(!1),a=Object(n.a)(b,2),u=a[0],x=a[1],f=Object(s.b)(),p=Object(s.c)((function(e){return e.chitietphieukham})).chitietphieukham;console.log(p);return Object(i.useEffect)((function(){f(Object(j.J)(e))}),[f,e]),p?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h.T,{children:Object(d.jsx)(h.n,{xs:"12",lg:"12",children:Object(d.jsxs)(h.i,{children:[Object(d.jsx)(h.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:Object(d.jsx)("span",{children:"Chi ti\u1ebft phi\u1ebfu kh\xe1m"})}),Object(d.jsxs)(h.j,{children:[Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:2,children:"M\xe3 s\u1ed1:"}),Object(d.jsx)(h.n,{xs:10,children:p.phieukhambenh&&p.phieukhambenh.mso})]}),Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:2,children:"B\xe1c s\u0129:"}),Object(d.jsx)(h.n,{xs:10,children:p.bacsi&&p.bacsi.ten})]}),Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:2,children:"B\u1ec7nh nh\xe2n:"}),Object(d.jsx)(h.n,{xs:10,children:p.phieukhambenh&&p.phieukhambenh.hosobenhnhan.mso+" - "+p.phieukhambenh.hosobenhnhan.ten})]}),Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:2,children:"Tri\u1ec7u Ch\u1ee9ng:"}),Object(d.jsx)(h.n,{xs:10,children:p.trieuchung&&p.trieuchung})]}),Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:2,children:"Danh s\xe1ch B\u1ec7nh:"}),Object(d.jsx)(h.n,{xs:10,children:Object(d.jsxs)(h.i,{style:{paddingBottom:"0px",marginTop:"20px"},children:[Object(d.jsxs)(h.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(d.jsx)("span",{children:"Danh s\xe1ch B\u1ec7nh:"}),Object(d.jsx)(h.f,{color:"success",onClick:function(){x(!0)},children:"Add Post"})]}),Object(d.jsx)(h.j,{style:{paddingBottom:"0px"},children:Object(d.jsx)(h.q,{style:{marginBottom:"0px"},items:p.chitiet&&p.chitiet,fields:["M\xe3 S\u1ed1","T\xean B\u1ec7nh"],striped:!0,itemsPerPage:10,pagination:!0,scopedSlots:{"M\xe3 S\u1ed1":function(e){return Object(d.jsx)("td",{children:e.benh&&e.benh.mso})},"T\xean B\u1ec7nh":function(e){return Object(d.jsx)("td",{children:e.benh&&e.benh.ten})}}})})]})})]}),Object(d.jsx)(h.T,{children:Object(d.jsx)(h.n,{xs:12,children:Object(d.jsxs)(h.i,{style:{paddingBottom:"0px",marginTop:"20px"},children:[Object(d.jsxs)(h.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(d.jsxs)("span",{children:["Toa thu\u1ed1c:"," ",Object(d.jsx)("b",{children:p.toathuoc&&p.toathuoc.mso})]}),Object(d.jsx)(h.f,{color:"success",onClick:function(){l(!0)},children:"Add Post"})]}),Object(d.jsx)(h.j,{style:{paddingBottom:"0px"},children:Object(d.jsx)(h.q,{style:{marginBottom:"0px"},items:p.toathuoc&&p.toathuoc.chitiet,fields:["M\xe3 S\u1ed1","T\xean thu\u1ed1c","S\u1ed1 l\u01b0\u1ee3ng"],striped:!0,itemsPerPage:10,pagination:!0,scopedSlots:{"M\xe3 S\u1ed1":function(e){return Object(d.jsx)("td",{children:e.thuoc&&e.thuoc.mso})},"T\xean thu\u1ed1c":function(e){return Object(d.jsx)("td",{children:e.thuoc&&e.thuoc.ten})},"S\u1ed1 l\u01b0\u1ee3ng":function(e){return Object(d.jsx)("td",{children:e.soluong})}}})})]})})})]})]})})}),Object(d.jsx)(O,{modal:r,setModal:l,oldToathuoc:p.toathuoc&&p.toathuoc||"",chitietphieukham:p}),Object(d.jsx)(m,{modal:u,setModal:x,oldChitietbenh:p.chitiet&&p.chitiet||"",chitietphieukham:p})]}):Object(d.jsx)("div",{children:"No data"})}}}]);
//# sourceMappingURL=8.d7b05bc0.chunk.js.map