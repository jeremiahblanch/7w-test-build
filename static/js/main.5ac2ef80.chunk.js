(this["webpackJsonpjeremiah-7west"]=this["webpackJsonpjeremiah-7west"]||[]).push([[0],{12:function(n,e,t){n.exports=t(22)},17:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i),a=t(6),o=t.n(a),c=(t(17),t(4)),l=t(1),s=t(2);function u(){var n=Object(l.a)(["\n    color: white; /* TODO */\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 28px; /* TODO */\n    margin: 0 0 0 1rem; /* TODO */\n\n    @media (min-width: 768px) {\n        font-size: 24px; /* TODO */\n    }\n"]);return u=function(){return n},n}function m(){var n=Object(l.a)(["\n    height: 100%; /* TODO */\n"]);return m=function(){return n},n}function f(){var n=Object(l.a)(["\n    align-items: stretch;\n    bottom: 0;\n    background-color: #00000033; /* TODO */\n    display: flex;\n    height: 2rem; /* TODO */\n    left: 0;\n    padding: 1rem; /* TODO */\n    position: absolute;\n    right: 0;\n    z-index: 1;\n"]);return f=function(){return n},n}function p(){var n=Object(l.a)(["\n    width: 100%;\n"]);return p=function(){return n},n}function d(){var n=Object(l.a)(["\n    display: block;\n    margin: 8px 16px;\n    position: relative;\n\n    @media (min-width: 768px) {\n        flex: 0 0 350px; /* Not enough informaiton in screen shots on exact rules here */\n    }\n    @media (min-width: 1024px) {\n        flex: 0 0 385px; /* Not enough informaiton in screen shots on exact rules here */\n    }\n"]);return d=function(){return n},n}var g=s.a.a(d()),h=s.a.img(p()),v=s.a.div(f()),j=s.a.img(m()),O=s.a.h4(u());var b=function(n){n.id;var e=n.image,t=n.onClick,i=n.title,a=i?i.replace(/\s/g,"_"):"";return r.a.createElement(g,{href:"",onClick:function(n){return t(),n.stopPropagation(),n.preventDefault(),!1}},r.a.createElement(h,{"aria-describedby":"title_".concat(a),src:"assets/"+e,alt:i}),r.a.createElement(v,null,r.a.createElement(j,{src:"assets/7plus.png"}),r.a.createElement(O,{id:"title_".concat(a)},i)))};function x(){var n=Object(l.a)(["\n    align-items: center;\n    background-color: #fff;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    left: 0;\n    position: fixed;\n    top: 0;\n    transition: transform 400ms ease;\n    transform: translateX(",");\n    width: 100%;\n    z-index: 1;\n\n    @media (min-width: 768px) {\n        width: 50%;\n    }\n"]);return x=function(){return n},n}var w=s.a.div(x(),(function(n){return n.visible?"0":"-100%"}));var k=function(n){var e=n.onClick,t=n.visible,i=n.show;return r.a.createElement(w,{visible:t?1:0},i?r.a.createElement(b,{key:i.id,image:i.image,onClick:e,title:i.title}):"")},y="Gold Digger.jpeg Liar.jpeg Little Women- LA.jpeg MKR.jpeg Pooch Perfect.jpeg Revolution.jpeg Smallville.jpeg The Good Doctor.jpeg The Resident.jpeg Transformed.jpeg".split(".jpeg").map((function(n){var e=n.trim();return!!e&&{id:e,image:"".concat(e,".jpeg"),title:e}})).filter((function(n){return!!n}));function E(){var n=Object(l.a)(["\n    align-items: stretch;\n    display: flex;\n    flex-direction: column;\n    padding: 8px;\n\n    @media (min-width: 768px) {\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: space-between;\n    }\n"]);return E=function(){return n},n}var D=s.a.div(E()),T=function(){var n=Object(i.useState)(null),e=Object(c.a)(n,2),t=e[0],a=e[1],o=Object(i.useState)(!1),l=Object(c.a)(o,2),s=l[0],u=l[1];return r.a.createElement(D,null,y.map((function(n){return r.a.createElement(b,{key:n.id,image:n.image,onClick:function(){return function(n){u(!0),a(n)}(n)},title:n.title})})),r.a.createElement(k,{onClick:function(){u(!1)},show:t,visible:s}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.5ac2ef80.chunk.js.map