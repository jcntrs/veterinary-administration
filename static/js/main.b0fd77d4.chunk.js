(this["webpackJsonpveterinary-administration-redux"]=this["webpackJsonpveterinary-administration-redux"]||[]).push([[0],{15:function(e,a,t){e.exports=t(27)},27:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),o=t(4),m=t(14),s=t(6),i={meeting:[]},u={error:!1},d=Object(o.b)({meeting:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_MEETING":return Object(s.a)({},e,{meeting:[].concat(Object(m.a)(e.meeting),[a.payload])});case"DELETE_MEETING":return Object(s.a)({},e,{meeting:e.meeting.filter((function(e){return e.id!==a.payload}))});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FORM_VALIDATION":return Object(s.a)({},e,{error:a.payload});default:return e}}}),E=function(){var e=localStorage.getItem("meetings");return null===e?void 0:JSON.parse(e)}(),N=Object(o.c)(d,E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());N.subscribe((function(){!function(e){var a=JSON.stringify(e);localStorage.setItem("meetings",a)}({meeting:N.getState().meeting})}));var g=N,b=t(2),v=t(5),p=t(13),f=t.n(p),h=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(v.a)(c,2),m=o[0],s=o[1],i=Object(n.useState)(""),u=Object(v.a)(i,2),d=u[0],E=u[1],N=Object(n.useState)(""),g=Object(v.a)(N,2),p=g[0],h=g[1],O=Object(n.useState)(""),y=Object(v.a)(O,2),w=y[0],j=y[1],_=Object(b.b)(),S=function(e){return _(function(e){return{type:"FORM_VALIDATION",payload:e}}(e))},D=Object(b.c)((function(e){return e.error}));return r.a.createElement("div",{className:"card mt-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title text-center mb-5"},"Agrega las citas aqui"),r.a.createElement("form",{onSubmit:function(e){var a;(e.preventDefault(),""!==t.trim()&&""!==m.trim()&&""!==d.trim()&&""!==p.trim()&&""!==w.trim())?(S(!1),a={id:f()(),pet:t,owner:m,date:d,hour:p,symptom:w},_(function(e){return{type:"ADD_MEETING",payload:e}}(a)),l(""),s(""),E(""),h(""),j("")):S(!0)}},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Nombre Mascota"),r.a.createElement("div",{className:"col-sm-8 col-lg-10"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre Mascota",value:t,onChange:function(e){return l(e.target.value)}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Nombre Due\xf1o"),r.a.createElement("div",{className:"col-sm-8 col-lg-10"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre Due\xf1o de la Mascota",value:m,onChange:function(e){return s(e.target.value)}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Fecha"),r.a.createElement("div",{className:"col-sm-8 col-lg-4  mb-4 mb-lg-0"},r.a.createElement("input",{type:"date",className:"form-control",value:d,onChange:function(e){return E(e.target.value)}})),r.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Hora"),r.a.createElement("div",{className:"col-sm-8 col-lg-4"},r.a.createElement("input",{type:"time",className:"form-control",value:p,onChange:function(e){return h(e.target.value)}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Sintomas"),r.a.createElement("div",{className:"col-sm-8 col-lg-10"},r.a.createElement("textarea",{className:"form-control",value:w,onChange:function(e){return j(e.target.value)}}))),r.a.createElement("div",{className:"form-group row justify-content-end"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("button",{type:"submit",className:"btn btn-success w-100"},"Agregar")))),D.error?r.a.createElement("div",{className:"alert alert-danger text-center p2"},"Todos los campos son obligatorios"):null))},O=function(){var e=Object(b.c)((function(e){return e.meeting})),a=0===Object.keys(e.meeting).length?"No hay citas":"Administra las citas aqu\xed",t=Object(b.b)();return r.a.createElement("div",{className:"card mt-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title text-center"},a),r.a.createElement("div",{className:"lista-citas"},e.meeting.map((function(e){return r.a.createElement("div",{key:e.id,className:"media mt-3"},r.a.createElement("div",{className:"media-body"},r.a.createElement("h3",{className:"mt-0"},e.pet),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",null,"Nombre Due\xf1o: "),e.owner),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",null,"Fecha: "),e.date),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",null,"Hora: "),e.hour),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",null,"Sintomas: "),r.a.createElement("br",null),e.symptom),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return t({type:"DELETE_MEETING",payload:e.id})}},"Eliminar \xd7")))})))))},y=function(){return r.a.createElement(b.a,{store:g},r.a.createElement("div",{className:"container mt-4"},r.a.createElement("header",null,r.a.createElement("h1",{className:"text-center"},"Administrador de Pacientes en Veterinaria")),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(h,null)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b0fd77d4.chunk.js.map