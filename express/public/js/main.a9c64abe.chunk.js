(this.webpackJsonparcelik=this.webpackJsonparcelik||[]).push([[0],{145:function(e){e.exports=JSON.parse('{"apiBase":"https://arcelik-demo.vercel.app/","apiBaseClear":"https://arcelik-demo.vercel.app/","webBase":"https://arcelik-demo.vercel.app/"}')},156:function(e,t,n){},256:function(e){e.exports=JSON.parse('{"id":"a1b8056e9e924d222618","secret":"86658efb735129974f6b5399a4226b61e697b2d4","redirect":"https://arcelik-be-tau.vercel.app","localID":"d791ab983eb12753dc16","localSecret":"e356b34777c9760b1c680e3dd2b23221406485e4","localRedirect":"http://localhost:3000/login","prodID":"a1b8056e9e924d222618","prodSecret":"86658efb735129974f6b5399a4226b61e697b2d4","prodRedirect":"https://arcelik-demo.vercel.app/login"}')},257:function(e,t,n){"use strict";n.r(t);var c=n(0),a=(n(155),n(156),n(37)),r=n.n(a),i=n(66),o=n(25),s=n(79),l=n(142),u=n(1),j="Inline Redux Changed, Happy Coding:)",b=Object(s.b)({inlineInformation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===j?(e=Object(u.a)(Object(u.a)({},e),t.inlineInformation),e):e}}),d=b,O=Object(l.createLogger)();var h=n(72),f=n(262),p=n(9),x=function(e){return Object(p.jsx)(f.a,{status:"404",title:"404",subTitle:"Sayfa Bulunamad\u0131",extra:Object(p.jsx)(i.b,{to:"/",type:"primary",children:"Anasayfa'ya d\xf6nmek i\xe7in t\u0131klay\u0131n"})})},m=n(5),g=n(151),k=n(263),v=n(264),I=function(e){return{type:j,inlineInformation:e}},S=n(261),y=n(82),C=n.n(y),w=n(145).apiBase,D=(C.a.create({baseURL:w}),C.a.create({baseURL:w}),n(6)),T=n(54),E=n(150),R=n(76),J=function(e){var t=Object(c.useState)(!0),n=Object(m.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)([]),o=Object(m.a)(i,2),s=o[0],l=o[1],j=Object(c.useState)([]),b=Object(m.a)(j,2),d=b[0],O=b[1],h=Object(c.useState)([]),f=Object(m.a)(h,2),x=f[0],g=f[1],k=Object(c.useState)(""),v=Object(m.a)(k,2),I=v[0],S=v[1],y=Object(c.useState)(null),C=Object(m.a)(y,2),w=C[0],J=C[1],L=Object(c.useState)(""),N=Object(m.a)(L,2),A=N[0],B=N[1],P=function(e){var t=d.filter((function(t){return t.taskID===e})),n=d.filter((function(t){return t.taskID===e&&!0===t.check}));d.filter((function(t){return t.taskID===e&&!1===t.check}));return 0===t.length?1:t.length===n.length?0:t.length!==n.length?1:void 0},U=function(e,t){var n=Object(D.a)(d),c=Object(D.a)(x),a=n.findIndex((function(e){return e.id===t})),r=c.findIndex((function(e){return e.id===t}));n[a]=Object(u.a)(Object(u.a)({},n[a]),{},{check:e}),c[r]=Object(u.a)(Object(u.a)({},c[r]),{},{check:e}),g(c),O(n)};return Object(c.useEffect)((function(){!function(){var e=JSON.parse(localStorage.getItem("tasks")),t=JSON.parse(localStorage.getItem("subTasks"));l(null===e?[]:e),O(null===t?[]:t)}()}),[]),Object(p.jsx)("div",{children:a?Object(p.jsxs)(p.Fragment,{children:["TODO",Object(p.jsx)("ul",{children:s.map((function(e,t){return Object(p.jsxs)("li",{children:[0===P(e.id)?Object(p.jsx)("del",{children:e.name}):e.name," ",Object(p.jsxs)(T.a,{onClick:function(){return function(e){r(!1),J(e);var t=d.filter((function(t){return t.taskID===e}));g(t)}(e.id)},children:["Detay(",(n=e.id,d.filter((function(e){return e.taskID===n&&!1===e.check})).length),")"]})]},t);var n}))}),Object(p.jsx)(E.a,{onChange:function(e){return S(e.target.value)},value:I,type:"text"}),Object(p.jsx)(T.a,{onClick:function(){return function(){var e=Object(D.a)(s),t={id:parseInt(1e6*Math.random()),name:I};e.push(t),l(e),localStorage.setItem("tasks",JSON.stringify(e)),S("")}()},children:"Ekle"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(T.a,{onClick:function(){return r(!0)},children:"Geri D\xf6n"}),Object(p.jsx)("ul",{children:x.map((function(e,t){return!1===e.check?Object(p.jsxs)("li",{children:[e.name," ",Object(p.jsx)(R.a,{defaultChecked:e.check,onChange:function(t){return U(t.target.checked,e.id)}})," "]},t):null}))}),Object(p.jsxs)("ul",{children:["-Completed-",x.map((function(e,t){return!0===e.check?Object(p.jsxs)("li",{children:[e.name," ",Object(p.jsx)(R.a,{defaultChecked:e.check,onChange:function(t){return U(t.target.checked,e.id)}})," "]},t):null}))]}),Object(p.jsx)(E.a,{onChange:function(e){return B(e.target.value)},value:A,type:"text"}),Object(p.jsx)(T.a,{onClick:function(){return function(){var e=Object(D.a)(d),t=Object(D.a)(x),n={id:parseInt(1e6*Math.random()),name:A,taskID:w,check:!1};e.push(n),t.push(n),O(e),g(t),localStorage.setItem("subTasks",JSON.stringify(e)),B("")}()},children:"Ekle"})]})})},L=function(e){var t=Object(c.useState)([]),n=Object(m.a)(t,2),a=n[0],r=n[1],i=function(){var e=new URL(window.location.href).searchParams.get("code");(function(e,t){return C.a.post("https://arcelik-demo.vercel.app/authenticate",t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE"}}).then((function(e){return e.data})).catch((function(e){return e}))})(0,{code:e}).then((function(e){!function(e){var t=e.map((function(e,t){return{key:t,name:e.name,html_url:e.html_url,topics:e.topics.map((function(e){return e+" "})),description:e.description}}));r(t)}(e)})).catch((function(e){return console.log(e)}))};Object(c.useEffect)((function(){i()}),[]);return Object(p.jsxs)(k.a,{children:[Object(p.jsx)(v.a,{sm:11,children:Object(p.jsx)(S.a,{size:"small",dataSource:a,columns:[{title:"Repo Ad\u0131",dataIndex:"name",key:"name"},{title:"A\xe7\u0131klama",dataIndex:"description",key:"description"},{title:"Tags",dataIndex:"topics",key:"topics"}]})}),Object(p.jsx)(v.a,{sm:2}),Object(p.jsx)(v.a,{sm:11,children:Object(p.jsx)(J,{})})]})},N=Object(h.b)((function(e){return{inlineInformation:e.inlineInformation}}),{setInlineRedux:I})(Object(o.g)((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(k.a,{align:"bottom",children:Object(p.jsx)(v.a,{sm:{span:24,offset:0},md:{span:24,offset:0},children:Object(p.jsx)(L,{})})})})}))),A=n(260),B=n(149),P=n(53),U=Object(h.b)((function(e){return{inlineInformation:e.inlineInformation}}),{setInlineRedux:I})(Object(o.g)((function(e){var t=A.a.Content;return Object(p.jsx)("div",{children:Object(p.jsx)(B.a,{indicator:Object(p.jsx)(P.a,{spin:!0}),spinning:!1,children:Object(p.jsx)(A.a,{className:"site-layout-background",children:Object(p.jsx)(t,{children:e.content})})})})}))),_=function(e){return Object(p.jsx)(U,{page:"LoginContent",content:Object(p.jsx)(N,{})})},z=n(256),F=z.id,M=z.redirect,G=function(e){var t=Object(c.useState)(!0),n=Object(m.a)(t,2),a=n[0],r=n[1];return useEffect=function(){null!==new URL(window.location.href).searchParams.get("code")&&r(!1)},Object(p.jsx)("div",{children:a?Object(p.jsx)("a",{href:"https://github.com/login/oauth/authorize?scope=user&client_id=".concat(F,"&redirect_uri=").concat(M),children:Object(p.jsx)(g.a,{size:100,color:"black"})}):Object(p.jsx)(_,{})})},q=function(e){return Object(p.jsx)(U,{page:"LandingPageContent",content:Object(p.jsx)(G,{})})},H=function(e){var t=Object(o.f)();return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[t]),Object(p.jsx)(p.Fragment,{children:e.children})},K=Object(p.jsx)(h.a,{store:function(e){var t=[O];return Object(s.c)(d,e,s.a.apply(void 0,t))}(),children:Object(p.jsx)(i.a,{children:Object(p.jsx)(H,{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",component:q}),Object(p.jsx)(o.a,{exact:!0,path:"/login",component:_}),Object(p.jsx)(o.a,{path:"*",children:Object(p.jsx)(x,{})})]})})})});r.a.render(K,document.querySelector("#root"))}},[[257,1,2]]]);
//# sourceMappingURL=main.a9c64abe.chunk.js.map