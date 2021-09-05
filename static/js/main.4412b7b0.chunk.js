(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),o=c.n(a),r=(c(9),c(2)),l=c(0);function i(e){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat("light"===e.mode?"light":"dark"," bg-").concat("light"!==e.mode?"dark":"light"),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:"TextUtils"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"#",children:"About"})})]}),Object(l.jsxs)("div",{className:"mx-2 d-flex",children:[Object(l.jsx)("div",{className:"me-1",style:{height:"20px",width:"30px",borderRadius:"30%",cursor:"pointer",backgroundColor:"white"},onClick:function(){return e.toggleMode("light")}}),"Light mode"]}),Object(l.jsxs)("div",{className:"mx-2 d-flex",children:[Object(l.jsx)("div",{className:"bg-danger me-1",style:{height:"20px",width:"30px",borderRadius:"30%",cursor:"pointer"},onClick:function(){return e.toggleMode("danger")}}),"Red Mode"]}),Object(l.jsxs)("div",{className:"mx-2 d-flex",children:[Object(l.jsx)("div",{className:"bg-success me-1",style:{height:"20px",width:"30px",borderRadius:"30%",cursor:"pointer"},onClick:function(){return e.toggleMode("success")}}),"Green Mode"]}),Object(l.jsxs)("div",{className:"mx-2 d-flex",children:[Object(l.jsx)("div",{className:"me-1",style:{height:"20px",width:"30px",borderRadius:"30%",cursor:"pointer",backgroundColor:"black"},onClick:function(){return e.toggleMode("info")}}),"Dark Mode"]})]})]})})})}function d(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),s=c[0],a=c[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"my-4 container",children:[Object(l.jsx)("h1",{children:"Enter Text Here"}),console.log(e.mode),Object(l.jsx)("textarea",{style:{color:"light"===e.mode?"black":"white"},className:"form-control bg-".concat(e.mode," bg-opacity-50"),id:"FormControlTextarea",rows:"10",onChange:function(e){a(e.target.value)},value:s})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-".concat("light"===e.mode?"primary":e.mode," m-2"),onClick:function(){a(s.toLowerCase()),e.showalert("Convert to Lower Case","success")},children:"To LowerCase"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-".concat("light"===e.mode?"primary":e.mode," m-2"),onClick:function(){a(s.toUpperCase()),e.showalert("Convert to Upper Case","success")},children:"To UpperCase"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-".concat("light"===e.mode?"primary":e.mode," m-2"),onClick:function(){a(s.toLowerCase().replace(/\b\w/g,(function(e){return e.toUpperCase()}))),e.showalert("Convert to Capitalize Letters","success")},children:"Capitalize words"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-".concat("light"===e.mode?"primary":e.mode," m-2"),onClick:function(){var t=s.split(/[ ]+/);a(t.join(" ")),e.showalert("Extra spaces are removed","success")},children:"Remove Extra Space"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-".concat("light"===e.mode?"primary":e.mode," m-2"),onClick:function(){navigator.clipboard.writeText(s),e.showalert("Copy to Clipboard","success")},children:"Copy"}),Object(l.jsx)("button",{disabled:0===s.length,className:"btn btn-".concat("light"===e.mode?"primary":e.mode," m-2"),onClick:function(){a(""),e.showalert("Text is Clear","success")},children:"Clear"})]}),Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsx)("h2",{children:"Your Text Summary"}),Object(l.jsxs)("p",{children:["Number of words : ",s.split(/\s+/).filter((function(e){return 0!==e.length})).length," and Number of characters: ",s.length]}),Object(l.jsxs)("p",{children:[.008*s.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:0===s.length?"Enter text to preview here":s})]})]})}function b(e){var t;return Object(l.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type),role:"alert",children:[Object(l.jsxs)("strong",{children:[(t=e.alert.type,t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()),":"]})," ",e.alert.message]})})}var u=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),o=Object(r.a)(a,2),u=o[0],h=o[1],m=function(e,t){h({message:e,type:t}),setTimeout((function(){h(null)}),1400)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{toggleMode:function(e){"light"===e?(s("light"),document.body.style.backgroundColor="white",document.body.style.color="black",m("Light mode enabled","success")):("info"===e?(document.body.style.backgroundColor="#171238",s("info"),m("Dark mode enabled","success")):"success"===e?(document.body.style.backgroundColor="#104516",s("success"),m("Green mode enabled","success")):(s("danger"),document.body.style.backgroundColor="#762020",m("Red mode enabled","success")),document.body.style.color="white")},mode:c}),Object(l.jsx)(b,{alert:u}),Object(l.jsx)(d,{mode:c,showalert:m})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.4412b7b0.chunk.js.map