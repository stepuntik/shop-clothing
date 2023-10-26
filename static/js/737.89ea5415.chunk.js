"use strict";(self.webpackChunkcrwn_clothing=self.webpackChunkcrwn_clothing||[]).push([[737],{4833:function(n,e,r){r.d(e,{O:function(){return t}});var t,o=r(1413),a=r(5987),i=r(4942),s=r(3189),l=r(184),c=["children","buttonType","isLoading"];!function(n){n.base="base",n.google="google-sign-in",n.inverted="inverted"}(t||(t={}));e.Z=function(n){var e=n.children,r=n.buttonType,u=n.isLoading,d=(0,a.Z)(n,c),p=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.base;return(n={},(0,i.Z)(n,t.base,s.Yd),(0,i.Z)(n,t.google,s.NY),(0,i.Z)(n,t.inverted,s.OZ),n)[e]}(r);return(0,l.jsx)(p,(0,o.Z)((0,o.Z)({disabled:u},d),{},{children:u?(0,l.jsx)(s.X4,{}):e}))}},3189:function(n,e,r){r.d(e,{NY:function(){return d},OZ:function(){return p},X4:function(){return f},Yd:function(){return u}});var t,o,a,i,s=r(168),l=r(6444),c=r(6666),u=l.ZP.button(t||(t=(0,s.Z)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  font-weight: 100;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  font-family: 'Open Sans';\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),d=(0,l.ZP)(u)(o||(o=(0,s.Z)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),p=(0,l.ZP)(u)(a||(a=(0,s.Z)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),f=(0,l.ZP)(c.e)(i||(i=(0,s.Z)(["\n  width: 30px;\n  height: 30px;\n"])))},5737:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t,o,a,i,s,l,c,u,d=r(4942),p=r(1413),f=r(4165),h=r(5861),x=r(885),b=r(2791),g=r(4829),m=r(9434),Z=r(5987),w=r(168),v=r(6444),y="grey",j=(0,v.iv)(t||(t=(0,w.Z)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"])),"black"),k=v.ZP.label(o||(o=(0,w.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  ","\n"])),y,(function(n){return n.shrink&&j})),P=v.ZP.input(a||(a=(0,w.Z)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ "," {\n    ",";\n  }\n"])),y,y,k,j),S=v.ZP.div(i||(i=(0,w.Z)(["\n  position: relative;\n  margin: 45px 0;\n\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]))),C=r(184),O=["label"],I=function(n){var e=n.label,r=(0,Z.Z)(n,O);return(0,C.jsxs)(S,{children:[(0,C.jsx)(P,(0,p.Z)({},r)),e&&(0,C.jsx)(k,{shrink:Boolean(r&&"string"===typeof r.value&&r.value.length),children:e})]})},q=r(4833),N=v.ZP.div(s||(s=(0,w.Z)(["\n  .sign-up-container {\n    display: flex;\n    flex-direction: column;\n    width: 380px;\n  }\n\n  h2 {\n    margin: 10px 0;\n  }\n"]))),E=r(2542),z={displayName:"",email:"",password:"",confirmPassword:""},D=function(){var n=(0,b.useState)(z),e=(0,x.Z)(n,2),r=e[0],t=e[1],o=r.displayName,a=r.email,i=r.password,s=r.confirmPassword,l=(0,m.I0)(),c=function(){var n=(0,h.Z)((0,f.Z)().mark((function n(e){return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),i===s){n.next=4;break}return alert("Passwords do not match!"),n.abrupt("return");case 4:try{l((0,E.hI)(a,i,o)),t(z)}catch(r){r.code===g.kq.EMAIL_EXISTS?alert("Cannot create user, email already in use!"):console.log("User creation encountered an error",r)}case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(n){var e=n.target,o=e.name,a=e.value;t((0,p.Z)((0,p.Z)({},r),{},(0,d.Z)({},o,a)))};return(0,C.jsxs)(N,{children:[(0,C.jsx)("h2",{children:"Don't have an account?"}),(0,C.jsx)("span",{children:"Sign up with your email and password"}),(0,C.jsxs)("form",{onSubmit:c,children:[(0,C.jsx)(I,{label:"Display Name",type:"text",required:!0,onChange:u,name:"displayName",value:o}),(0,C.jsx)(I,{label:"Email",type:"email",required:!0,onChange:u,name:"email",value:a}),(0,C.jsx)(I,{label:"Password",type:"password",required:!0,onChange:u,name:"password",value:i}),(0,C.jsx)(I,{label:"Confirm Password",type:"password",required:!0,onChange:u,name:"confirmPassword",value:s}),(0,C.jsx)(q.Z,{type:"submit",children:"Sign Up"})]})]})},T=v.ZP.div(l||(l=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n\n  h2 {\n    margin: 10px 0;\n  }\n"]))),X=v.ZP.div(c||(c=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Y={email:"",password:""},L=function(){var n=(0,m.I0)(),e=(0,b.useState)(Y),r=(0,x.Z)(e,2),t=r[0],o=r[1],a=t.email,i=t.password,s=function(){var e=(0,h.Z)((0,f.Z)().mark((function e(){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,E.Pd)());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,h.Z)((0,f.Z)().mark((function e(r){return(0,f.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault();try{n((0,E.Xu)(a,i)),o(Y)}catch(t){console.log("User sign-in failed",t)}case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(n){var e=n.target,r=e.name,a=e.value;o((0,p.Z)((0,p.Z)({},t),{},(0,d.Z)({},r,a)))};return(0,C.jsxs)(T,{children:[(0,C.jsx)("h2",{children:"Already have an account?"}),(0,C.jsx)("span",{children:"Sign in with your email and password"}),(0,C.jsxs)("form",{onSubmit:l,children:[(0,C.jsx)(I,{label:"Email",type:"email",required:!0,onChange:c,name:"email",value:a}),(0,C.jsx)(I,{label:"Password",type:"password",required:!0,onChange:c,name:"password",value:i}),(0,C.jsxs)(X,{children:[(0,C.jsx)(q.Z,{type:"submit",children:"Sign In"}),(0,C.jsx)(q.Z,{type:"button",buttonType:q.O.google,onClick:s,children:"Google Sign In"})]})]})]})},U=v.ZP.div(u||(u=(0,w.Z)(["\n  display: flex;\n  width: 900px;\n  justify-content: space-between;\n  margin: 30px auto;\n"]))),_=function(){return(0,C.jsxs)(U,{children:[(0,C.jsx)(L,{}),(0,C.jsx)(D,{})]})}},5987:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(3366);function o(n,e){if(null==n)return{};var r,o,a=(0,t.Z)(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}}}]);
//# sourceMappingURL=737.89ea5415.chunk.js.map