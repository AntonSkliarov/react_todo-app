(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),o=a.n(l),r=(a(14),a(15),a(16),a(6)),u=a(5),i=a(1),m=a(2),s=a.n(m);function d(e){var t=e.todo,a=e.changeStatus,n=e.deleteTodo;return c.a.createElement("li",{className:s()({completed:t.completed})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",value:t.id,onClick:function(e){return a(e.target.value)},checked:t.completed}),c.a.createElement("label",null,t.title),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(t.id)}})),c.a.createElement("input",{type:"text",className:"edit"}))}function f(e){var t=e.todos,a=e.changeStatus,l=e.deleteTodo,o=e.forToggleAll,r=Object(n.useState)(!1),u=Object(i.a)(r,2),m=u[0],s=u[1];Object(n.useEffect)((function(){t.every((function(e){return!0===e.completed}))&&s(!0)}),[t]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:m,onClick:function(){m&&(o(),s(!1))}}),c.a.createElement("label",{htmlFor:"toggle-all",title:"Mark all as completed"},"Mark all as completed"),c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(d,{todo:e,changeStatus:a,key:e.id,deleteTodo:l})})))))}var p=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),m=Object(i.a)(o,2),d=m[0],p=m[1],E=Object(n.useState)(d),b=Object(i.a)(E,2),g=b[0],v=b[1],h=Object(n.useState)(""),O=Object(i.a)(h,2),j=O[0],N=O[1],k=Object(n.useState)(!1),S=Object(i.a)(k,2),y=S[0],C=S[1];return Object(n.useEffect)((function(){if("all"===j||""===j)v(d);else{var e="completed"===j,t=d.filter((function(t){return t.completed===e}));v(t)}}),[j,d]),Object(n.useEffect)((function(){y?d.every((function(e){return!1===e.completed}))&&C(!1):d.some((function(e){return!0===e.completed}))&&C(!0)}),[d]),c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={title:a,id:Math.random().toString(36).substr(2,9),completed:!1};p([].concat(Object(u.a)(d),[t])),v([].concat(Object(u.a)(d),[t])),l("")}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:a,onChange:function(e){return t=e.target.value,void l(t);var t}}))),!!d.length&&c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{todos:g,changeStatus:function(e){var t=d.find((function(t){return t.id===e})),a=d.indexOf(t),n=Object(u.a)(d);t.completed=!t.completed,n.splice(a,1,t),p(n),v(n)},deleteTodo:function(e){var t=d.filter((function(t){return t.id!==e}));p(t),v(t)},forToggleAll:function(){var e=d.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!1})}));p(e),v(e)}}),c.a.createElement("footer",{className:"footer"},0!==g.length&&c.a.createElement("span",{className:"todo-count"},"".concat(g.length," item(s) left")),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:s()({selected:"all"===j}),onClick:function(){return N("all")}},"All")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/active",className:s()({selected:"active"===j}),onClick:function(){return N("active")}},"Active")),y&&c.a.createElement("li",null,c.a.createElement("a",{href:"#/completed",className:s()({selected:"completed"===j}),onClick:function(){return N("completed")}},"Completed"))),y&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){var e=d.filter((function(e){return!1===e.completed}));p(e),v(e),"completed"===j&&N("all")}},"Clear completed"))))};o.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a8b6bbe4.chunk.js.map