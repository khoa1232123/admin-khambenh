(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{702:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));n(3);var c=function(e){var t=Math.floor(999999*Math.random())+1000001;return e+(t+="").replace("1","")},s=function(e){var t=new Date(e),n=""+(t.getMonth()+1),c=""+t.getDate(),s=t.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),[c,n,s].join("/")},o=function(e){var t=new Date(e),n=""+(t.getMonth()+1),c=""+t.getDate(),s=t.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),[s,n,c].join("-")}},703:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return i}));var c=n(109),s=n(3),o=function(e){var t=[];t.push(Object(s.jsx)("option",{value:"",children:"-- Select Options --"},"1"));var n,o=Object(c.a)(e);try{for(o.s();!(n=o.n()).done;){var i=n.value;t.push(Object(s.jsx)("option",{value:i._id,children:"".concat(i.mso," - ").concat(i.msobn?i.msobn:""," ").concat(i.ten?i.ten:"")},i._id))}}catch(j){o.e(j)}finally{o.f()}return t},i=function(e){var t,n=[],s=Object(c.a)(e);try{for(s.s();!(t=s.n()).done;){var o=t.value;n.push({value:o._id,label:"".concat(o.mso," - ").concat(o.msobn?o.msobn:""," ").concat(o.ten?o.ten:"")})}}catch(i){s.e(i)}finally{s.f()}return n},j=function(e){var t=[];return e.map((function(e){t.push({_id:e._id,mso:e.mso,msobn:e.hosobenhnhan.mso,ten:e.hosobenhnhan.ten})})),t}},727:function(e,t,n){"use strict";n.r(t);var c=n(41),s=n(34),o=n(33),i=n(1),j=n(84),h=n(6),r=n(25),l=n(108),a=n(19),b=n(702),u=n(703),d=n(3),O=function(e){var t=e.modal,n=e.setModal,O=e.oldToathuoc,x=e.chitietphieukham,m=Object(o.i)().id,f=Object(s.b)(),p=Object(s.c)((function(e){return e.thuoc})).thuocs;Object(i.useEffect)((function(){f(Object(j.R)())}),[f]),console.log(O);var g=Object(i.useState)({}),y=Object(c.a)(g,2),v=y[0],k=y[1],C=Object(i.useState)([{thuoc:"",soluong:0}]),T=Object(c.a)(C,2),B=T[0],S=T[1],w=function(e,t){console.log(e);var n=Object(r.a)(B),c=e.target.name,s=e.target.value;n[t][c]="soluong"===c?Number(s):s,S(n)};Object(i.useEffect)((function(){0!==Object.keys(O).length&&(k(O),S(Object(r.a)(O.chitiet)))}),[O]);var M=function(){k({}),S([{thuoc:"",soluong:0}]),n(!1)};return Object(d.jsxs)(h.N,{show:t,onClose:M,size:"lg",children:[Object(d.jsx)(h.Q,{closeButton:!0,children:Object(d.jsx)(h.R,{children:"Toathuoc"})}),Object(d.jsx)(h.O,{children:Object(d.jsxs)(h.x,{action:"",method:"post",className:"form-horizontal",children:[Object(d.jsxs)(h.y,{row:!0,children:[Object(d.jsx)(h.n,{md:"3",children:Object(d.jsx)(h.L,{htmlFor:"text-input",children:"Ng\xe0y l\u1eadp"})}),Object(d.jsx)(h.n,{xs:"12",md:"9",children:Object(d.jsx)(h.F,{id:"ngaylap",type:"date",name:"ngaylap",placeholder:"Ng\xe0y l\u1eadp",value:Object(b.b)(v.ngaylap)||"",onChange:function(e){console.log(e.target.name);var t=e.target.name,n=e.target.value;k(Object(a.a)(Object(a.a)({},v),{},Object(l.a)({},t,n)))}})})]}),Object(d.jsxs)(h.y,{row:!0,children:[Object(d.jsx)(h.n,{md:"3",children:Object(d.jsx)(h.L,{htmlFor:"text-input",children:"Danh s\xe1ch thu\u1ed1c"})}),Object(d.jsxs)(h.n,{xs:"12",md:"9",children:[B.map((function(e,t){return Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:"7",md:"7",children:Object(d.jsx)(h.U,{name:"thuoc",value:e.thuoc&&e.thuoc._id||e.thuoc||"",onChange:function(e){return w(e,t)},children:Object(u.b)(p)})}),Object(d.jsx)(h.n,{xs:"3",md:"3",children:Object(d.jsx)(h.F,{name:"soluong",type:"number",value:e.soluong||0,onChange:function(e){return w(e,t)}})}),Object(d.jsx)(h.n,{xs:"2",md:"2",children:Object(d.jsx)(h.f,{color:"danger",onClick:function(e){return function(e,t){console.log(B);var n=Object(r.a)(B);n.splice(t,1),S(n)}(0,t)},children:"X"})}),Object(d.jsx)(h.n,{xs:"12",md:"12",children:Object(d.jsx)("br",{})})]},t)})),Object(d.jsx)(h.n,{xs:"12",md:"12",children:Object(d.jsx)(h.f,{type:"button",color:"success",onClick:function(){S([].concat(Object(r.a)(B),[{thuoc:"",soluong:0}]))},children:"Th\xeam thu\u1ed1c"})})]})]}),Object(d.jsxs)(h.y,{row:!0,children:[Object(d.jsx)(h.n,{md:"3"}),Object(d.jsx)(h.n,{xs:"12",md:"9"})]})]})}),Object(d.jsxs)(h.P,{children:[Object(d.jsx)(h.f,{color:"primary",onClick:function(){console.log({toathuoc:v,oldToathuoc:O,chitiettoathuoc:B}),v.chitiet=B,0===Object.keys(O).length?(v.mso=Object(b.c)("tt"),f(Object(j.hb)({toathuoc:v,chitietphieukham:x})),f(Object(j.H)(m))):(f(Object(j.jb)(v)),f(Object(j.H)(m))),k({}),S([{thuoc:"",soluong:0}]),n(!1)},children:"Submit"})," ",Object(d.jsx)(h.f,{color:"secondary",onClick:M,children:"Cancel"})]})]})},x=n(195),m=function(e){var t=e.modal,n=e.setModal,l=e.oldChitietbenh,a=e.chitietphieukham,b=Object(o.i)().id,O=Object(s.b)(),m=Object(s.c)((function(e){return e.benh})).benhs;Object(i.useEffect)((function(){O(Object(j.E)())}),[O]),console.log(l);var f=Object(i.useState)([{benh:""}]),p=Object(c.a)(f,2),g=p[0],y=p[1];Object(i.useEffect)((function(){0!==l.length&&y(Object(r.a)(l))}),[l]);var v=function(){y([{benh:""}]),n(!1)};return Object(d.jsxs)(h.N,{show:t,onClose:v,size:"lg",children:[Object(d.jsx)(h.Q,{closeButton:!0,children:Object(d.jsx)(h.R,{children:"Chi ti\u1ebft b\u1ec7nh"})}),Object(d.jsx)(h.O,{children:Object(d.jsxs)(h.x,{action:"",method:"post",className:"form-horizontal",children:[Object(d.jsxs)(h.y,{row:!0,children:[Object(d.jsx)(h.n,{md:"3",children:Object(d.jsx)(h.L,{htmlFor:"text-input",children:"Danh s\xe1ch B\u1ec7nh"})}),Object(d.jsxs)(h.n,{xs:"12",md:"9",children:[g.map((function(e,t){return Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:"10",md:"10",children:Object(d.jsx)(h.U,{name:"benh",value:e.benh&&e.benh._id||e.benh||"",onChange:function(e){return function(e,t){console.log(e);var n=Object(r.a)(g),c=e.target.name,s=e.target.value;n[t][c]="soluong"===c?Number(s):s,y(n)}(e,t)},children:Object(u.b)(m)})}),Object(d.jsx)(h.n,{xs:"2",md:"2",children:Object(d.jsx)(h.f,{color:"danger",onClick:function(e){return function(e,t){console.log(g);var n=Object(r.a)(g);n.splice(t,1),y(n)}(0,t)},children:"X"})}),Object(d.jsx)(h.n,{xs:"12",md:"12",children:Object(d.jsx)("br",{})})]},t)})),Object(d.jsx)(h.n,{xs:"12",md:"12",children:Object(d.jsx)(h.f,{type:"button",color:"success",onClick:function(){y([].concat(Object(r.a)(g),[{benh:""}]))},children:"Th\xeam B\u1ec7nh"})})]})]}),Object(d.jsxs)(h.y,{row:!0,children:[Object(d.jsx)(h.n,{md:"3"}),Object(d.jsx)(h.n,{xs:"12",md:"9"})]})]})}),Object(d.jsxs)(h.P,{children:[Object(d.jsx)(h.f,{color:"primary",onClick:function(){console.log(g),0!==Object.keys(a).length&&O(Object(x.g)({chitietphieukham:{chitiet:g},ctpk_id:a._id})),O(Object(x.c)(b)),y([{benh:""}]),n(!1)},children:"Submit"})," ",Object(d.jsx)(h.f,{color:"secondary",onClick:v,children:"Cancel"})]})]})};t.default=function(){var e=Object(o.i)().id,t=Object(i.useState)(!1),n=Object(c.a)(t,2),r=n[0],l=n[1],a=Object(i.useState)(!1),b=Object(c.a)(a,2),u=b[0],x=b[1],f=Object(s.b)(),p=Object(s.c)((function(e){return e.chitietphieukham})).chitietphieukham;console.log(p);return Object(i.useEffect)((function(){f(Object(j.L)(e))}),[f,e]),p?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h.T,{children:Object(d.jsx)(h.n,{xs:"12",lg:"12",children:Object(d.jsxs)(h.i,{children:[Object(d.jsx)(h.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:Object(d.jsx)("span",{children:"Chi ti\u1ebft phi\u1ebfu kh\xe1m"})}),Object(d.jsxs)(h.j,{children:[Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:2,children:"M\xe3 s\u1ed1:"}),Object(d.jsx)(h.n,{xs:10,children:p.phieukhambenh&&p.phieukhambenh.mso})]}),Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:2,children:"B\xe1c s\u0129:"}),Object(d.jsx)(h.n,{xs:10,children:p.bacsi&&p.bacsi.ten})]}),Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:2,children:"B\u1ec7nh nh\xe2n:"}),Object(d.jsx)(h.n,{xs:10,children:p.phieukhambenh&&p.phieukhambenh.hosobenhnhan.mso+" - "+p.phieukhambenh.hosobenhnhan.ten})]}),Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:2,children:"Tri\u1ec7u Ch\u1ee9ng:"}),Object(d.jsx)(h.n,{xs:10,children:p.trieuchung&&p.trieuchung})]}),Object(d.jsxs)(h.T,{children:[Object(d.jsx)(h.n,{xs:2,children:"Danh s\xe1ch B\u1ec7nh:"}),Object(d.jsx)(h.n,{xs:10,children:Object(d.jsxs)(h.i,{style:{paddingBottom:"0px",marginTop:"20px"},children:[Object(d.jsxs)(h.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(d.jsx)("span",{children:"Danh s\xe1ch B\u1ec7nh:"}),Object(d.jsx)(h.f,{color:"success",onClick:function(){console.log("abc"),x(!0)},children:"Ch\u1ec9nh s\u1eeda"})]}),Object(d.jsx)(h.j,{style:{paddingBottom:"0px"},children:Object(d.jsx)(h.q,{style:{marginBottom:"0px"},items:p.chitiet&&p.chitiet,fields:["M\xe3 S\u1ed1","T\xean B\u1ec7nh"],striped:!0,itemsPerPage:10,pagination:!0,scopedSlots:{"M\xe3 S\u1ed1":function(e){return Object(d.jsx)("td",{children:e.benh&&e.benh.mso})},"T\xean B\u1ec7nh":function(e){return Object(d.jsx)("td",{children:e.benh&&e.benh.ten})}}})})]})})]}),Object(d.jsx)(h.T,{children:Object(d.jsx)(h.n,{xs:12,children:Object(d.jsxs)(h.i,{style:{paddingBottom:"0px",marginTop:"20px"},children:[Object(d.jsxs)(h.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(d.jsxs)("span",{children:["Toa thu\u1ed1c:"," ",Object(d.jsx)("b",{children:p.toathuoc&&p.toathuoc.mso})]}),Object(d.jsx)(h.f,{color:"success",onClick:function(){l(!0)},children:"Add Post"})]}),Object(d.jsx)(h.j,{style:{paddingBottom:"0px"},children:Object(d.jsx)(h.q,{style:{marginBottom:"0px"},items:p.toathuoc&&p.toathuoc.chitiet,fields:["M\xe3 S\u1ed1","T\xean thu\u1ed1c","S\u1ed1 l\u01b0\u1ee3ng"],striped:!0,itemsPerPage:10,pagination:!0,scopedSlots:{"M\xe3 S\u1ed1":function(e){return Object(d.jsx)("td",{children:e.thuoc&&e.thuoc.mso})},"T\xean thu\u1ed1c":function(e){return Object(d.jsx)("td",{children:e.thuoc&&e.thuoc.ten})},"S\u1ed1 l\u01b0\u1ee3ng":function(e){return Object(d.jsx)("td",{children:e.soluong})}}})})]})})})]})]})})}),Object(d.jsx)(O,{modal:r,setModal:l,oldToathuoc:p.toathuoc&&p.toathuoc||"",chitietphieukham:p}),Object(d.jsx)(m,{modal:u,setModal:x,oldChitietbenh:p.chitiet&&p.chitiet||"",chitietphieukham:p})]}):Object(d.jsx)("div",{children:"No data"})}}}]);
//# sourceMappingURL=9.6bac57c0.chunk.js.map