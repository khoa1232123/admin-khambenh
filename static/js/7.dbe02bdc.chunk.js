(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[7],{702:function(n,e,t){"use strict";t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return r}));t(3);var c=function(n){var e=Math.floor(999999*Math.random())+1000001;return n+(e+="").replace("1","")},o=function(n){var e=new Date(n),t=""+(e.getMonth()+1),c=""+e.getDate(),o=e.getFullYear();return t.length<2&&(t="0"+t),c.length<2&&(c="0"+c),[c,t,o].join("/")},r=function(n){var e=new Date(n),t=""+(e.getMonth()+1),c=""+e.getDate(),o=e.getFullYear();return t.length<2&&(t="0"+t),c.length<2&&(c="0"+c),[o,t,c].join("-")}},703:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return i}));var c=t(109),o=t(3),r=function(n){var e=[];e.push(Object(o.jsx)("option",{value:"",children:"-- Select Options --"},"1"));var t,r=Object(c.a)(n);try{for(r.s();!(t=r.n()).done;){var i=t.value;e.push(Object(o.jsx)("option",{value:i._id,children:"".concat(i.mso," - ").concat(i.msobn?i.msobn:""," ").concat(i.ten?i.ten:"")},i._id))}}catch(s){r.e(s)}finally{r.f()}return e},i=function(n){var e=[];return n.map((function(n){e.push({_id:n._id,mso:n.mso,msobn:n.hosobenhnhan.mso,ten:n.hosobenhnhan.ten})})),e}},714:function(n,e,t){"use strict";t.r(e);var c=t(41),o=t(6),r=t(1),i=t(34),s=t(84),a=t(108),j=t(19),h=t(702),l=t(703),b=t(3),u=function(n){var e=n.modal,t=n.setModal,u=n.oldPdkkb,d=Object(i.b)(),O=Object(i.c)((function(n){return n.benhnhan})).benhnhans;Object(r.useEffect)((function(){d(Object(s.D)())}),[d]);var f=Object(r.useState)({}),x=Object(c.a)(f,2),m=x[0],p=x[1];Object(r.useEffect)((function(){u&&p(u)}),[u]);var g=function(){p({}),t(!1)};return Object(b.jsxs)(o.N,{show:e,onClose:g,children:[Object(b.jsx)(o.Q,{closeButton:!0,children:Object(b.jsx)(o.R,{children:"Update Pdkkb"})}),Object(b.jsx)(o.O,{children:Object(b.jsx)(o.x,{action:"",method:"post",className:"form-horizontal",children:Object(b.jsxs)(o.y,{row:!0,children:[Object(b.jsx)(o.n,{md:"3",children:Object(b.jsx)(o.L,{htmlFor:"text-input",children:"Khoa"})}),Object(b.jsx)(o.n,{xs:"12",md:"9",children:Object(b.jsx)(o.U,{id:"hosobenhnhan",name:"hosobenhnhan",value:m.hosobenhnhan||"",onChange:function(n){console.log(n);var e=n.target.name,t=n.target.value;p(Object(j.a)(Object(j.a)({},m),{},Object(a.a)({},e,t)))},children:Object(l.b)(O)})})]})})}),Object(b.jsxs)(o.P,{children:[Object(b.jsx)(o.f,{color:"primary",onClick:function(){console.log({pdkkb:m,oldPdkkb:u}),""!==m.ten&&(0===Object.keys(u).length?(m.mso=Object(h.c)("pd"),d(Object(s.g)(m))):d(Object(s.ab)(m)),p({}),t(!1))},children:"Do Something"})," ",Object(b.jsx)(o.f,{color:"secondary",onClick:g,children:"Cancel"})]})]})};e.default=function(){var n=Object(i.b)(),e=Object(r.useState)({}),t=Object(c.a)(e,2),a=t[0],j=t[1],h=Object(r.useState)(!1),l=Object(c.a)(h,2),d=l[0],O=l[1],f=Object(i.c)((function(n){return n.pdkkb})).pdkkbs;Object(r.useEffect)((function(){n(Object(s.J)())}),[n]);return console.log(f),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.T,{children:Object(b.jsx)(o.n,{xs:"12",lg:"12",children:Object(b.jsxs)(o.i,{children:[Object(b.jsxs)(o.m,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(b.jsx)("span",{children:"Posts"}),Object(b.jsx)(o.f,{color:"success",onClick:function(){O(!0)},children:"Add Post"})]}),Object(b.jsx)(o.j,{children:Object(b.jsx)(o.q,{items:f,fields:["M\xe3 S\u1ed1","T\xean b\u1ec7nh nh\xe2n","email","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i","actions"],striped:!0,itemsPerPage:10,pagination:!0,scopedSlots:{"M\xe3 S\u1ed1":function(n){return Object(b.jsx)("td",{children:n.mso})},"M\xe3 B\u1ec7nh Nh\xe2n":function(n){return Object(b.jsx)("td",{children:n.hosobenhnhan.mso})},"T\xean b\u1ec7nh nh\xe2n":function(n){return Object(b.jsx)("td",{children:n.hosobenhnhan.ten})},email:function(n){return Object(b.jsx)("td",{children:n.hosobenhnhan.email})},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i":function(n){return Object(b.jsx)("td",{children:n.hosobenhnhan.sodienthoai})},actions:function(e){return Object(b.jsxs)("td",{children:[Object(b.jsx)(o.f,{color:"warning",onClick:function(n){return function(n){j(n),O(!0)}(e)},children:"Edit"})," ",Object(b.jsx)(o.f,{color:"danger",onClick:function(t){return function(e){window.confirm("Are you sure?")&&n(Object(s.t)(e))}(e)},children:"Delete"})]})}}})})]})})}),Object(b.jsx)(u,{modal:d,setModal:O,oldPdkkb:a})]})}}}]);
//# sourceMappingURL=7.dbe02bdc.chunk.js.map