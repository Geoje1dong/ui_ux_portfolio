(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(t,n,e){},150:function(t,n,e){"use strict";e.r(n);var i=e(0),a=e.n(i),r=e(89),o=e.n(r),c=e(21),l=e(22),s=e(4),u=e(8),h=e(9),m=e(11),d=e(10),f=e(12),p=e(5),g=e(90),b=e.n(g);function v(){var t=Object(s.a)(["\n  color:#fff;\n  margin: 0;\n  margin-top: 8px;\n  font-weight: 100;\n  font-size: 16px;\n  line-height: 29px;\n  height: 29px;\n  min-width: 10px;\n"]);return v=function(){return t},t}function w(){var t=Object(s.a)(["\n  position: absolute;\n  top: 50%;\n  left: -140px;\n  margin: 0;\n  font-size: .75rem;\n  font-style: italic;\n  line-height: 2;\n  letter-spacing: 0.5px;\n  transform: translate3d(0, -85%, 0);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity, transform;\n  transition-duration: 0.2s;\n  transition-delay: 0s;\n  transition-timing-function: \n"]);return w=function(){return t},t}var y=function(t){function n(){var t,e;Object(u.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=Object(m.a)(this,(t=Object(d.a)(n)).call.apply(t,[this].concat(a)))).state={title:"",mobile:!1},e.articleMouseOver=function(t){return function(n){var i=t.title;e._typingEffect(i)}},e._typingEffect=function(t){var n=0;e.timer=setInterval(function(){n<t.length?(e.setState({title:e.state.title+t.charAt(n)}),n++):clearInterval(e.timer)},e._randDelay(30,70))},e._randDelay=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)},e._articleMouseOut=function(){e.setState({title:""}),clearInterval(e.timer)},e}return Object(f.a)(n,t),Object(h.a)(n,[{key:"componentWillMount",value:function(){window.innerWidth<768&&this.setState({mobile:!0})}},{key:"render",value:function(){var t=this.state,n=t.mobile,e=t.title,i=this.props.article;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.b,{className:"article",onMouseOver:this.articleMouseOver(i),onMouseOut:this._articleMouseOut,to:{pathname:"post/".concat(i.id),state:"".concat(i.content)}},a.a.createElement(O,null,i.label," the project"),a.a.createElement("img",{src:i.img,alt:i.title}),a.a.createElement(j,null,n?i.title:e)))}}]),n}(a.a.Component),O=p.a.p(w()),j=p.a.h2(v()),x=e(28),E=e(96);x.b.initAll();var k=function(t){function n(){return Object(u.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(h.a)(n,[{key:"transformDelta",value:function(t,n){if(!/wheel/.test(n.type))return t;var e=t.x,i=t.y;return this.options.vertical?t:{y:0,x:Math.abs(e)>Math.abs(i)?e:i}}}]),n}(x.a);k.pluginName="choiceScroll",k.defaultOptions={vertical:!0},x.b.use(k,E.a);var S=x.b;function U(){var t=Object(s.a)(["\n  padding:0;\n  margin:0;\n  list-style:none;\n  display:flex;\n  top: 8.898895vw;\n  bottom: 5.26593vw;\n  position:absolute;\n  overflow:hidden;\n  &.articlesFadeIn{\n    >li{\n      opacity:1;\n      transform: translateX(0px) !important;\n    }\n  }\n  >li{\n    opacity: 0;\n    transform: translateX(700px);\n    padding:0 5.26593vw\n    display: flex;\n    &:first-child{\n      align-items: flex-start;\n      transition:all 0.9s cubic-bezier(0.455,0.03,0.515,0.955);\n      >div{\n        width:340px;\n        padding-top:5.26593vw;\n        > p{\n          font-size: 1.3125rem;\n          line-height: 1.4em;\n          margin: 0 0.2em;\n          font-weight: 200;\n        }\n      }\n    }\n  }\n  @media screen and (max-width : 1024px) {\n    top: 15.79779vw;\n    bottom: 10.79779vw;\n  }\n  @media screen and (max-width : 425px) {\n    top: 30.79779vw;\n    bottom: 10.79779vw;\n    >li{\n      padding:0 15.26593vw\n      &:first-child{\n        padding-left:5.26593vw\n      }\n    }\n    \n  }\n"]);return U=function(){return t},t}function I(){var t=Object(s.a)(["\n  transition:all 1.","s cubic-bezier(0.455,0.03,0.515,0.955);\n  &:nth-child(1n){\n    align-items: center;\n  }\n  &:nth-child(2n){\n    align-items: flex-start;\n  }\n  &:nth-child(3n){\n    align-items: flex-end;\n  }\n  > a{\n    position:relative;\n    z-index:3;\n    &:hover{\n      > p{\n        transform: translate3d(0, -100%, 0);\n        opacity: 1;\n        transition-delay: 0.4s;\n        // transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n      }\n      &:after{\n        transform: scaleX(1);\n        transform-origin: left center;\n        transition-delay: 0.2s;\n      }\n    }\n    &:after{\n      content: '';\n      position: absolute;\n      top: 50%;\n      margin-top:2px;\n      left: -130px;\n      height: 1px;\n      width: 180px;\n      background-color: rgba(255,255,255,0.8);\n      transform: scaleX(0);\n      transform-origin: right center;\n      transition: transform;\n      transition-duration: 0.5s;\n      transition-delay: 0s;\n      transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n    }\n    > img{\n      max-width:600px;\n    }\n  }\n"]);return I=function(){return t},t}function M(){var t=Object(s.a)(["\n  > .scroll-content{\n    height:100%;\n    // height:6000px;\n  }\n"]);return M=function(){return t},t}var W=function(t){function n(){var t,e;Object(u.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=Object(m.a)(this,(t=Object(d.a)(n)).call.apply(t,[this].concat(a)))).state={articlesFadeIn:null,MouseOver:!1},e}return Object(f.a)(n,t),Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){return t.setState({articlesFadeIn:"articlesFadeIn"})},0),S.init(document.querySelector(".horizontalScroll"),{overscroll:{effect:"bounce",damping:.1}}).updatePluginOptions("choiceScroll",{vertical:!1})}},{key:"render",value:function(){var t=this;return this.articleMouseOver=function(n){t.setState({MouseOver:!t.state.MouseOver})},this.articleMouseOut=function(n){return function(n){t.setState({MouseOver:!t.state.MouseOver})}},a.a.createElement(z,{"data-foo":"123",className:"horizontalScroll"},a.a.createElement(C,{className:this.state.articlesFadeIn},a.a.createElement("li",null,a.a.createElement("div",null,a.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694."),a.a.createElement("p",null,"UI / UX \ub514\uc790\uc774\ub108 ",a.a.createElement("strong",null,"\uae40\uc7ac\ud604")," \uc785\ub2c8\ub2e4."),a.a.createElement("p",null,"\uc800\uc758 ",a.a.createElement("strong",null,"\ud3ec\ud2b8\ud3f4\ub9ac\uc624"),"\uc5d0 \uc624\uc2e0\uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4."))),b.a.results.map(function(t){return a.a.createElement(D,{key:t.id,delay:t.id},a.a.createElement(y,{article:t}))})))}}]),n}(i.Component),z=p.a.div(M()),D=p.a.li(I(),function(t){return t.delay}),C=p.a.ul(U());function X(){var t=Object(s.a)(["\n  position:fixed;\n  z-index:2;\n  top:5.26593vw;\n  left:5.26593vw;\n  right:5.26593vw;\n  >div{\n    width:65%;\n    display:inline-block;\n    >a{\n      font-size:2rem;\n      font-weight:700;\n      transition: all 0.5s ease;\n      &:hover{\n        color:red;\n      }\n    }\n  }\n  >nav{\n    width:35%;\n    display:inline-block;\n    text-align:right;\n    >a{\n      position:relative;\n      margin-left:30px;\n      font-weight:100;\n      font-size:1rem;\n      &:hover{\n        &:after{\n          transform: scaleX(1);\n          transform-origin: left center;\n        }\n      }\n      &:after{\n        content: '';\n        position: absolute;\n        left: 0;\n        height:1px;\n        bottom: -3px;\n        width: 100%;\n        transform: scaleX(0);\n        transition: all 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n        background:rgba(255,255,255,0.7);\n        transform-origin:right center;\n      }\n      &:first-child{\n        margin-left:0;\n      }\n    }\n  }\n"]);return X=function(){return t},t}var A=function(t){function n(){return Object(u.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(h.a)(n,[{key:"render",value:function(){return a.a.createElement(F,null,a.a.createElement("div",null,a.a.createElement(c.c,{to:"/"},"KimJaeHyun :)")),a.a.createElement("nav",null,a.a.createElement(c.c,{to:"/"},"Work"),a.a.createElement(c.c,{to:"/about"},"About")))}}]),n}(a.a.Component),F=p.a.header(X());function _(){var t=Object(s.a)(["\n  position:fixed;\n  bottom:5.26593vw;\n  left:5.26593vw;\n  right:5.26593vw;\n"]);return _=function(){return t},t}var J=function(t){function n(){return Object(u.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(h.a)(n,[{key:"render",value:function(){return a.a.createElement(N,null,"Copyright by Jaehyune Kim. 2019")}}]),n}(a.a.Component),N=p.a.div(_());function P(){var t=Object(s.a)(["\n  height:300px;\n  img{\n    width:4000px;\n  }\n"]);return P=function(){return t},t}S.initAll();var R=function(t){function n(){return Object(u.a)(this,n),Object(m.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(h.a)(n,[{key:"componentDidMount",value:function(){this.scrollbar=S.init(document.querySelector(".chat"))}},{key:"render",value:function(){return a.a.createElement(T,{className:"chat"},a.a.createElement("img",{src:"https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg"}),a.a.createElement("img",{src:"https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg"}),a.a.createElement("img",{src:"https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg"}),a.a.createElement("img",{src:"https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg"}))}}]),n}(a.a.Component),T=p.a.div(P()),q=(e(149),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function B(t,n){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var e=t.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(t)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}o.a.render(a.a.createElement(function(){return a.a.createElement(c.a,{basename:"/portfolio"},a.a.createElement(A,null),a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",exact:!0,component:W}),a.a.createElement(l.a,{path:"/about/",component:R})),a.a.createElement(J,null))},null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/portfolio","/service-worker.js");q?(function(t,n){fetch(t).then(function(e){var i=e.headers.get("content-type");404===e.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):B(t,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):B(n,t)})}}()},90:function(t,n){t.exports={results:[{id:"0",title:"\ub378\ub8e8\ub098 \uc544\uc774\uc720 \uc5ec\uc9c4\uad6c \uc5b4\ub9b0\uc774 \ubcf4\ub294 \uc7a5\uba74",label:"System Management",img:"https://file3.instiz.net/data/file3/2019/07/15/2/d/d/2dd375eab08395dd92357766e606d6c1.gif",content:[{"header-h1":"\ud0c0\uc774\ud2c0","header-h2":"\ubd80\uc81c\ubaa9","header-label":"\ub77c\ubca8","header-img":"",description:"",clist:["Interaction Design, UI/UX Design","FramerJS, Sketch, Photoshop, Swift","Co-work"],"section-img":["imgUrl01","imgUrl02"]}]},{id:"1",title:"\uba85\ud0d0\uc815 \ud53c\uce74\uce04",label:"WebApp",img:"https://file3.instiz.net/data/file3/2019/07/15/d/6/f/d6fc425a7cb919c7a2c9f22dc7ffcdb1.gif",content:[{"header-h1":"\ud0c0\uc774\ud2c0","header-h2":"\ubd80\uc81c\ubaa9","header-label":"\ub77c\ubca8","header-img":"",description:"",clist:["Interaction Design, UI/UX Design","FramerJS, Sketch, Photoshop, Swift","Co-work"],"section-img":["imgUrl01","imgUrl02"]}]},{id:"2",title:"\uc544\uc774\uc720 \ub378\ub8e8\ub098",label:"Website",img:"https://file3.instiz.net/data/file3/2019/07/14/4/4/2/4429927912b17de4e05c0e385a73ba37.gif",content:[{"header-h1":"\ud0c0\uc774\ud2c0","header-h2":"\ubd80\uc81c\ubaa9","header-label":"\ub77c\ubca8","header-img":"",description:"",clist:["Interaction Design, UI/UX Design","FramerJS, Sketch, Photoshop, Swift","Co-work"],"section-img":["imgUrl01","imgUrl02"]}]},{id:"3",title:"\uc544\uc774\uc720 \ub378\ub8e8\ub098 \uace0\ud639",label:"Website",img:"https://raw.githubusercontent.com/idiotWu/react-smooth-scrollbar/master/test/your_diary.jpg",content:[{"header-h1":"\ud0c0\uc774\ud2c0","header-h2":"\ubd80\uc81c\ubaa9","header-label":"\ub77c\ubca8","header-img":"",description:"",clist:["Interaction Design, UI/UX Design","FramerJS, Sketch, Photoshop, Swift","Co-work"],"section-img":["imgUrl01","imgUrl02"]}]},{id:"4",title:"\uba85\ud0d0\uc815 \ud53c\uce74\uce04",label:"Website",img:"https://contents.vryjam.com/GiIy5XRNn2pYrWs.gif",content:[{"header-h1":"\ud0c0\uc774\ud2c0","header-h2":"\ubd80\uc81c\ubaa9","header-label":"\ub77c\ubca8","header-img":"",description:"",clist:["Interaction Design, UI/UX Design","FramerJS, Sketch, Photoshop, Swift","Co-work"],"section-img":["imgUrl01","imgUrl02"]}]}]}},99:function(t,n,e){t.exports=e(150)}},[[99,1,2]]]);
//# sourceMappingURL=main.28405d93.chunk.js.map