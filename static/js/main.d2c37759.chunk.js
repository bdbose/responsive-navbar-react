(this["webpackJsonpresponsive-navbar-react-example"]=this["webpackJsonpresponsive-navbar-react-example"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/tinder.932a22ab.svg"},,function(e,t,a){e.exports=a(13)},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(7);var n,l=a(0),r=a.n(l),c=a(3),o=a.n(c),s=a(5),i=a(1);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e){return Object(l.createElement)("svg",m({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 384",fill:"#fff"},e),n||(n=Object(l.createElement)("path",{d:"M0 277.333h384V320H0zM0 170.667h384v42.667H0zM0 64h384v42.667H0z"})))}var d="_styles-module__navbar_wrapper__3drDv",b="_styles-module__logo_wrapper__36iSm",p="_styles-module__nav_elements__29JqD",E="_styles-module__mob_nav__3xYLB",y="_styles-module__sidebar_wrapper__4sag1",g="_styles-module__left__2lGdA",h="_styles-module__left_logo__3vScg",v="_styles-module__left_nav__3Moxr",f="_styles-module__btn_left__1tOke",k=function(e){var t=e.logo,a=e.items,n=e.style,c=e.float,o=Object(i.a)({barStyles:{background:"#0984e3"},linkStyles:{color:"white"},logoStyles:{fontSize:"20px",color:"white"},sidebarStyles:{background:"grey",buttonColor:"white"}},n),s=Object(l.createRef)();return r.a.createElement("div",{className:d,style:Object(i.a)(Object(i.a)({},o.barStyles),{},{position:c?"fixed":null})},r.a.createElement("div",{className:b},r.a.createElement("a",{style:Object(i.a)({},o.logoStyles),href:t.link},t.img?r.a.createElement("img",{src:t.img,alt:"logo"}):t.text)),r.a.createElement("div",{className:p},a.map((function(e,t){var a=e.text,n=e.link;return r.a.createElement("a",{href:n,key:t,style:Object(i.a)({},o.linkStyles)},a)}))),r.a.createElement("div",{className:E},r.a.createElement(u,{style:{fill:o.sidebarStyles.buttonColor},onClick:function(){s.current.style.width="200px"}}),r.a.createElement("div",{className:y,ref:s,style:Object(i.a)({},o.sidebarStyles)},r.a.createElement("button",{onClick:function(){s.current.style.width="0"},style:{color:o.sidebarStyles.buttonColor}},"\u2716"),a.map((function(e,t){var a=e.text,n=e.link;return r.a.createElement("a",{href:n,key:t,style:Object(i.a)(Object(i.a)({},o.linkStyles),{},{background:o.sidebarStyles.background})},a)})))))},x=function(e){var t=e.logo,a=e.items,n=e.style,c=(e.align,e.float),o=Object(i.a)({barStyles:{background:"#0984e3"},linkStyles:{color:"white"},logoStyles:{fontSize:"20px",color:"white"},sidebarStyles:{background:"grey",buttonColor:"white"}},n),s=Object(l.createRef)();return r.a.createElement("div",{className:"".concat(d," ").concat(g),style:Object(i.a)(Object(i.a)({},o.barStyles),{},{position:c?"fixed":null})},r.a.createElement("div",{className:"".concat(b," ").concat(h)},r.a.createElement("a",{style:Object(i.a)({},o.logoStyles),href:t.link},t.img?r.a.createElement("img",{src:t.img,alt:"logo"}):t.text)),r.a.createElement("div",{className:p},a.map((function(e,t){var a=e.text,n=e.link;return r.a.createElement("a",{href:n,key:t,style:Object(i.a)({},o.linkStyles)},a)}))),r.a.createElement("div",{className:E},r.a.createElement(u,{style:{fill:o.sidebarStyles.buttonColor},onClick:function(){s.current.style.width="200px"}}),r.a.createElement("div",{className:"".concat(y," ").concat(v),ref:s,style:Object(i.a)({},o.sidebarStyles)},r.a.createElement("button",{className:f,onClick:function(){s.current.style.width="0"},style:{color:o.sidebarStyles.buttonColor}},"\u2716"),a.map((function(e,t){var a=e.text,n=e.link;return r.a.createElement("a",{href:n,key:t,style:Object(i.a)(Object(i.a)({},o.linkStyles),{},{background:o.sidebarStyles.background})},a)})))))},_=(a(12),a(4)),w=a.n(_),S=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=(t[0],t[1],{items:[{text:"Home",link:"/"},{text:"Doc",link:"#docs"},{text:"Custom",link:"#custom-bar"},{text:"Contact",link:"#contact"}],logo:{text:"Responsive Navbar React"},style:{barStyles:{background:"#444"},sidebarStyles:{background:"#222",buttonColor:"white"}}}),n={items:[{text:"Home",link:"/"},{text:"Doc",link:"#docs"},{text:"Custom",link:"/"},{text:"Contact",link:"/"}],logo:{text:"Text"}},c={items:[{text:"Home",link:"/"},{text:"About",link:"#docs"},{text:"Team",link:"/"},{text:"Contact",link:"/"}],logo:{img:w.a},style:{barStyles:{padding:"10px 20px",background:"#e67e22"}}};return r.a.createElement("div",{className:"home-wrapper"},r.a.createElement(k,a),r.a.createElement("center",null,r.a.createElement("h1",null,"Responsive Navbar React")),r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"This is a simple Responsive Navbar."),r.a.createElement("div",null,"Default navbar:"),r.a.createElement(k,n)),r.a.createElement("div",{id:"docs"},r.a.createElement("h2",null,"Installing ",r.a.createElement("i",null,"responsive-navbar-react:")),r.a.createElement("div",{className:"code-wrapper"},r.a.createElement("code",null,"npm i responsive-navbar-react")),r.a.createElement("h2",null,"Import ",r.a.createElement("i",null,"responsive-navbar-react:")),r.a.createElement("div",{className:"code-wrapper"},r.a.createElement("code",null,"import { Navbar } from 'responsive-navbar-react'\nimport 'responsive-navbar-react/dist/index.css'")),r.a.createElement("h2",null,"Finally: "),r.a.createElement("div",{className:"code-wrapper"},r.a.createElement("code",null,"import { Navbar } from 'responsive-navbar-react'\nimport 'responsive-navbar-react/dist/index.css'\n\nconst Home = () => {\n  const props = {\n    items: [\n      {\n        text: 'Home',\n        link: '/'\n      },\n      {\n        text: 'Doc',\n        link: '/'\n      },\n      {\n        text: 'Custom',\n        link: '/'\n      },\n      {\n        text: 'Contact',\n        link: '/'\n      }\n    ],\n    logo: {\n      text: 'Responsive Navbar React'\n    },\n    style: {\n      barStyles: {\n        background: '#444'\n      },\n      sidebarStyles: {\n        background: '#222',\n        buttonColor: 'white'\n      }\n    }\n  }\n  return (\n    <div className=\"home\">\n    \t<Navbar {...props}/>\n    </div>\n  )\n}"))),r.a.createElement("div",{className:"example-wrapper"},r.a.createElement("h2",null,"Example:"),r.a.createElement(k,a),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"PropsType"),r.a.createElement("th",null,"Required"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"items"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"Array input with sub props text and link Eg.",r.a.createElement("br",null),r.a.createElement("code",null,"items:[\n            {\n              text:'Home',\n              link:'/'\n            },\n            {\n              text: \"Contact\",\n              link:\"/\"\n            }]"))),r.a.createElement("tr",null,r.a.createElement("td",null,"logo"),r.a.createElement("td",null,"Yes"),r.a.createElement("td",null,"Object input with text, link and if you want to pass logo send img url or path",r.a.createElement("code",null,"\n                logo:{\n                  text: 'Text',\n                  link: '/'\n                }\n                "))),r.a.createElement("tr",null,r.a.createElement("td",null,"align"),r.a.createElement("td",null,"No"),r.a.createElement("td",null,"If you want the mobile sidebar to be at left pass",r.a.createElement("code",null,"props={\n                  ...\n                  align:'left'\n                }"))),r.a.createElement("tr",null,r.a.createElement("td",null,"float"),r.a.createElement("td",null,"No"),r.a.createElement("td",null,"If you want the navbar to be there when you scroll down in page or a fixed navbar add",r.a.createElement("code",null,"{\n                  props={\n                    ...\n                    float:true\n                  }\n                }"))),r.a.createElement("tr",null,r.a.createElement("td",null,"style"),r.a.createElement("td",null,"No"),r.a.createElement("td",null,"If u want custom navbar css add style with props - barStyles ,linkStyles,logoStyles,sidebarStyles Eg:",r.a.createElement("code",null,"barStyles: {\n      background: '#0984e3'\n    },\n    linkStyles: {\n      color: 'white'\n    },\n    logoStyles: {\n      fontSize: '20px',\n      color: 'white'\n    },\n    sidebarStyles: {\n      background: 'grey',\n      buttonColor: 'white'\n    },")))))),r.a.createElement("div",{id:"custom-bar"},r.a.createElement("h3",null,"Custom bar with logo"),r.a.createElement(k,c),r.a.createElement("h3",null,"Custom bar Align=Left(see it in mobile view)"),r.a.createElement(x,a)),r.a.createElement("div",{id:"contact"},r.a.createElement("h3",null,"Made by Bdbose"),r.a.createElement("a",{style:{display:"flex",alignItems:"center"},href:"https://github.com/bdbose"},r.a.createElement("img",{src:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",height:"30",width:"30",alt:"github"}),r.a.createElement("span",null,"My Github")),r.a.createElement("a",{style:{display:"flex",alignItems:"center"},href:"https://github.com/bdbose/responsive-navbar-react"},r.a.createElement("img",{src:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",height:"30",width:"30",alt:"github"}),r.a.createElement("span",null,"Repo link")),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},"\ud83c\udf0f",r.a.createElement("span",null,"My Website : ",r.a.createElement("a",{href:"https://bdbose.tech/"},"https://bdbose.tech/"))),r.a.createElement("h4",null,"PS : Feel free to update the docs and the code .")))};o.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.d2c37759.chunk.js.map