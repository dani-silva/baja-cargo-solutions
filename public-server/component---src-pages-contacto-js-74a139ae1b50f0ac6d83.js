(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1zJ4":function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),l=t.n(r),n=t("Wbzz"),c=t("9eSz"),m=t.n(c),s=t("Bl7J"),o=t("vrFN");a.default=function(){var e=Object(n.useStaticQuery)("600927183"),a=l.a.useState(!1),t=a[0],r=a[1],c=l.a.useState(!1),i=c[0],d=c[1],p=l.a.useState({status:"empty",message:""}),u=p[0],E=p[1];return l.a.createElement(s.a,null,l.a.createElement(o.a,{title:"Ubicación estratégica"}),l.a.createElement("section",{className:"container pt-5 rounded"},l.a.createElement("div",{className:"px-5 py-5 d-flex flex-column align-items-center"},l.a.createElement("h1",{className:"h3"},"Baja Cargo Solutions"),l.a.createElement("p",{className:"text-center"},"Dedicados a dar un trato personalizado para las cargas, fletes o movimientos de Exportación e Importación en México, cumpliendo en tiempo y forma los requerimientos de nuestros clientes."))),l.a.createElement("section",{className:"container my-5"},l.a.createElement("iframe",{className:"border rounded pulse animated",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1345.083232101786!2d-116.60441713944095!3d31.841400195617005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88d1a44277939%3A0x85801afe27274858!2sGrupo%20Yerac%20Business%20Center!5e0!3m2!1ses!2smx!4v1666456202949!5m2!1ses!2smx",width:"100%",height:"400",frameBorder:"0",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})),l.a.createElement("section",{className:"container pt-5"},l.a.createElement("h3",null,"Logística personalizada a tus necesidades."),l.a.createElement("p",null,"Cotiza en línea o directamente con uno de nuestros operadores vía telefónica o si gustas escríbenos un mensaje en el formulario y te atenderemos a la brevedad, estamos para ayudarte."),l.a.createElement("div",{className:"row py-5"},l.a.createElement("form",{className:"col-md-7 m-1 m-md-0 border py-4 mb-5 rounded bg-white "+(t?"was-validated":""),onSubmit:function(e){return function(e){e.preventDefault();var a=e.target;a.name.value&&a.email.value&&a.message.value?(d(!0),fetch("/contact.php",{method:"POST",body:new FormData(a),header:{"Content-Type":"multipart/form-data"}}).then((function(e){return console.log("Respuesta",e),e.json()})).then((function(e){console.log("Text response",e),E(e),d(!1)})).catch((function(e){console.log("error",e),d(!1)}))):r(!0)}(e)}},l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group mb-4 col-md-6"},l.a.createElement("label",{htmlFor:"name"}," *Nombre de Contacto"),l.a.createElement("input",{type:"text",className:"form-control",name:"name",id:"name",placeholder:"Nombre",required:!0}),l.a.createElement("div",{className:"valid-feedback"},"Campo validado"),l.a.createElement("div",{className:"invalid-feedback"},"Campo requerido, porfavor ingrese la información correcta.")),l.a.createElement("div",{className:"form-group mb-4 col-md-6"},l.a.createElement("label",{htmlFor:"company"},"Nombre de la Empresa"),l.a.createElement("input",{type:"text",className:"form-control",name:"company",id:"company",placeholder:"Compañia MX"}))),l.a.createElement("div",{className:"form-group mb-4"},l.a.createElement("label",{htmlFor:"email"},"*Correo de Contacto"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"nombre@compañia.com",required:!0}),l.a.createElement("div",{className:"valid-feedback"},"Campo validado"),l.a.createElement("div",{className:"invalid-feedback"},"Campo requerido, porfavor ingrese la información correcta.")),l.a.createElement("div",{className:"form-group mb-4"},l.a.createElement("label",{htmlFor:"phone"},"*Telefono de Contacto"),l.a.createElement("input",{type:"text",className:"form-control",name:"phone",id:"phone",placeholder:"(000) 000 0000",required:!0}),l.a.createElement("div",{className:"valid-feedback"},"Campo validado"),l.a.createElement("div",{className:"invalid-feedback"},"Campo requerido, porfavor ingrese la información correcta.")),l.a.createElement("div",{className:"form-group mb-4"},l.a.createElement("label",{htmlFor:"subject"},"*Asunto del Mensaje"),l.a.createElement("select",{name:"subject",id:"subject",className:"form-control",required:!0},l.a.createElement("option",{defaultValue:!0},"Más Información"),l.a.createElement("option",null,"Cotización"),l.a.createElement("option",null,"Agendar Cita"))),l.a.createElement("div",{className:"form-group mb-4"},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"message"},"*Mensaje"),l.a.createElement("textarea",{className:"form-control",name:"message",id:"message",placeholder:"Ingrese aqui tu mensaje...",rows:"7",required:!0}),l.a.createElement("div",{className:"valid-feedback"},"Campo validado"),l.a.createElement("div",{className:"invalid-feedback"},"Campo requerido, porfavor ingrese la información correcta."))),l.a.createElement("div",{className:"form-group mb-4 py-3"},l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input custom-control-input",type:"checkbox",id:"check",required:!0}),l.a.createElement("label",{className:"form-check-label custom-control-label",htmlFor:"check"},"Acepto ",l.a.createElement(n.Link,{to:"terms"},"Términos y Condiciones")),l.a.createElement("div",{className:"valid-feedback"},"Campo validado"),l.a.createElement("div",{className:"invalid-feedback"},"Campo requerido, porfavor acepte los términos y condiciones."))),"empty"!=u.status?l.a.createElement("div",{className:"alert "+("success"==u.status?"alert-warning":"alert-success")},u.message):null,i?l.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:!0},l.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Enviando..."):l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Enviar Mensaje")),l.a.createElement("div",{className:"col"}),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("h6",{className:"text-dark pb-2"},"Dirección"),l.a.createElement("p",{className:"small pb-4"},"Carr. Transpeninsular, No6 Oficina 1, Col. Fracc. Acapulco, Blvd. Estancia, Cp. 22780 Ensenada, B.C."),l.a.createElement("h6",{className:"text-dark pb-2"},"Horario"),l.a.createElement("ul",{className:"small pb-4"},l.a.createElement("li",{className:"mb-2"},l.a.createElement("i",{className:"mdi mdi-chevron-right pr-1"}),"Lunes a viernes: 8am - 6pm"),l.a.createElement("li",{className:"mb-2"},l.a.createElement("i",{className:"mdi mdi-chevron-right pr-1"}),"Sábado: 9am - 1pm")),l.a.createElement("h6",{className:"text-dark pb-2"},"Telefonos"),l.a.createElement("ul",{className:"small pb-4"},l.a.createElement("li",{className:"mb-2"},l.a.createElement("i",{className:"mdi mdi-chevron-right pr-1"}),"Teléfono Fijo: (646) 596 3828"),l.a.createElement("li",{className:"mb-2"},l.a.createElement("i",{className:"mdi mdi-chevron-right pr-1"}),"Teléfono Movil MEX: (646) 207 0886"),l.a.createElement("li",{className:"mb-2"},l.a.createElement("i",{className:"mdi mdi-chevron-right pr-1"}),"Teléfono Movil EEUU: (909) 904 9064"),l.a.createElement("li",{className:"mb-2"},l.a.createElement("i",{className:"mdi mdi-chevron-right pr-1"}),"Email: info@bajacargosolutions.com")),l.a.createElement("h6",{className:"text-dark pb-2"},"WeChat"),l.a.createElement(m.a,{fluid:e.wechat.childImageSharp.fluid,className:"d-block"})))),l.a.createElement("section",{className:"container pt-5 pb-4 rounded"},l.a.createElement("div",{className:"px-5 d-flex flex-column align-items-center"},l.a.createElement("h2",{className:"text-dark pb-3 text-center text-center"},"Somos la solución confiable para tu carga."))),l.a.createElement("section",{className:"container py-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-sm-12 pb-5"},l.a.createElement("div",{className:"pb-5"},l.a.createElement("h5",{className:"text-dark pb-2"},"Transporte Terrestre"),l.a.createElement("p",null,"Siempre buscando el beneficio de nuestros clientes asesorando en la logística de su cadena de suministros y entregas foráneas.")),l.a.createElement("div",{className:"pb-5"},l.a.createElement("h5",{className:"text-dark pb-2"},"Transporte Marítimo"),l.a.createElement("p",null,"Coordinación de fletes marítimos para carga seca, material peligroso, material frágil, contenedores refrigerados, carga sobredimensionada, etc."))),l.a.createElement("div",{className:"col-md-6 col-sm-12 pb-5"},l.a.createElement("div",{className:"pb-5"},l.a.createElement("h5",{className:"text-dark pb-2"},"Transporte Intermodal"),l.a.createElement("p",null,"Servicios combinados de transporte para optimizar y bajar costos en distancias largas, transbordos, consolidación y des consolidación de cargas.")),l.a.createElement("div",{className:"pb-5"},l.a.createElement("h5",{className:"text-dark pb-2"},"Despacho Aduanal"),l.a.createElement("p",null,"Contamos con agentes aduanales para realizar todo tipo de trámite aduanal para sus importaciones y exportaciones."))),l.a.createElement("div",{className:"col pb-5 d-flex justify-content-center"},l.a.createElement(n.Link,{to:"/nosotros",className:"btn btn-primary rounded"},"Conocenos")))))}}}]);
//# sourceMappingURL=component---src-pages-contacto-js-74a139ae1b50f0ac6d83.js.map