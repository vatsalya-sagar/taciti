(()=>{var e={};e.id=724,e.ids=[724,888,660],e.modules={8791:(e,s,t)=>{"use strict";t.r(s),t.d(s,{config:()=>S,default:()=>x,getServerSideProps:()=>v,getStaticPaths:()=>f,getStaticProps:()=>j,reportWebVitals:()=>b,routeModule:()=>L,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>k,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>N});var i={};t.r(i),t.d(i,{default:()=>m,getStaticPaths:()=>g,getStaticProps:()=>p});var r=t(7093),n=t(5244),a=t(1323),c=t(6105),l=t(879),o=t(997),d=t(968),h=t.n(d);t(6689),t(4298);var u=t(8601);function m({AllsinglePageList:e}){if(console.log("AllsinglePageList",e),null!==e.data.page)return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(h(),{children:[o.jsx("link",{rel:"stylesheet",href:"https://taciti.coinage.host/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.27.0",media:"all"}),o.jsx("link",{rel:"stylesheet",href:"https://taciti.coinage.host/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.27.0",media:"all"}),o.jsx("link",{rel:"stylesheet",href:`https://taciti.coinage.host/wp-content/uploads/elementor/css/post-${e?.data?.page?.pageId}.css`,media:"all"})]}),o.jsx("div",{className:"inner-page",children:e?.data?.page?.content!==null&&o.jsx("div",{dangerouslySetInnerHTML:{__html:`${e?.data?.page?.content}`}})})]})}async function g(){let e=await fetch(`${u.G}graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
             query NewQuery {
              pages(first: 5) {
                nodes {
                  pageId
                  slug
                  title
               
                }
              }
            }
             `})});return{paths:(await e.json()).data.pages.nodes.map(e=>({params:{pageslug:e.slug}})),fallback:"blocking"}}async function p({params:e}){let s=await fetch(`${u.G}graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
          query NewQuery {
              page(id: "${e.pageslug}" ,idType: URI) {
                pageId
                slug
                title
                
                content
              }
            }
          `})});return{props:{AllsinglePageList:await s.json()},revalidate:10}}let x=(0,a.l)(i,"default"),j=(0,a.l)(i,"getStaticProps"),f=(0,a.l)(i,"getStaticPaths"),v=(0,a.l)(i,"getServerSideProps"),S=(0,a.l)(i,"config"),b=(0,a.l)(i,"reportWebVitals"),N=(0,a.l)(i,"unstable_getStaticProps"),y=(0,a.l)(i,"unstable_getStaticPaths"),k=(0,a.l)(i,"unstable_getStaticParams"),P=(0,a.l)(i,"unstable_getServerProps"),w=(0,a.l)(i,"unstable_getServerSideProps"),L=new r.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/[pageslug]",pathname:"/[pageslug]",bundlePath:"",filename:""},components:{App:l.default,Document:c.default},userland:i})},8601:(e,s,t)=>{"use strict";t.d(s,{G:()=>i});let i="https://taciti.coinage.host/"},879:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>u});var i=t(997);t(9090),t(6764);var r=t(1664),n=t.n(r),a=t(6689);function c(){return i.jsx(i.Fragment,{children:i.jsx("div",{id:"footer",className:"footer",children:i.jsx("div",{className:"footerBg",children:i.jsx("div",{className:"innerCard",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"box addressBox",children:[(0,i.jsxs)("h1",{className:"serTxt",children:["Suite #204 ",i.jsx("br",{}),"6010 W Spring Creek Pkwy, ",i.jsx("br",{}),"Plano, TX 75024, USA ",i.jsx("br",{})]}),i.jsx("h2",{className:"ch2",children:"info@taciti.com"})]}),(0,i.jsxs)("div",{className:"servicesBox",children:[i.jsx("h1",{className:"serTxt",children:"Services"}),i.jsx("p",{children:i.jsx(n(),{href:"/business-consulting/",className:"customLink",children:"Strategy & Advisory"})}),i.jsx("p",{children:i.jsx(n(),{href:"/process-advisory/",className:"customLink ",children:"ERP Lead Transformation"})}),(0,i.jsxs)("p",{children:[" ",(0,i.jsxs)(n(),{href:"/business-transformation/",className:"customLink",children:["Transformation Management ",i.jsx("br",{}),"& Governance"]})]}),i.jsx("p",{children:i.jsx(n(),{href:"/technology-services/",className:"customLink ",children:"Technology Services"})}),(0,i.jsxs)("p",{children:[" ",i.jsx(n(),{href:"/talent-management-transformation/ ",className:"customLink",children:"Human Capital Management"})]})]}),(0,i.jsxs)("div",{className:"servicesBox",children:[i.jsx("h1",{className:"serTxt",children:"Industries"}),i.jsx("p",{children:(0,i.jsxs)(n(),{href:"/manufacturing-industries/",className:"customLink",children:["Manufacturing Industries"," "]})}),i.jsx("p",{children:i.jsx(n(),{href:"/life-sciences/",className:"customLink",children:"Life Sciences"})}),(0,i.jsxs)("p",{children:[" ",(0,i.jsxs)(n(),{href:"/consumer-packaged-goods/",className:"customLink",children:["Consumer Packaged Goods"," "]})]}),i.jsx("p",{children:(0,i.jsxs)(n(),{href:"/hi-tech/",className:"customLink",children:["Hi-Tech"," "]})}),(0,i.jsxs)("p",{children:[" ",i.jsx(n(),{href:"/utility/",className:"customLink",children:"Utilities"})]})]}),(0,i.jsxs)("div",{className:"servicesBox",children:[i.jsx("h1",{className:"serTxt",children:"Quick Links"}),i.jsx("p",{children:i.jsx(n(),{href:"/contact-us/",className:"customLink",children:"Contact Us"})})]})]})})})})})}var l=t(5675),o=t.n(l);function d(){let[e,s]=(0,a.useState)(!1);function t(){s(!e)}return i.jsx(i.Fragment,{children:(0,i.jsxs)("div",{className:"headermain",children:[i.jsx("div",{className:"brandLogo",children:i.jsx(n(),{href:"/",children:i.jsx("img",{src:"/images/tactiti.svg",alt:"logo",height:"70",width:"160"})})}),(0,i.jsxs)("div",{className:"LinkBox",children:[i.jsx(n(),{href:"/about-us/",children:"About Us"}),i.jsx(n(),{href:"/our-services/",children:"Our Services"}),i.jsx(n(),{href:"/manufacturing-industries/",children:"Industries"}),i.jsx(n(),{href:"/case-studies/",children:"Case Studies"}),i.jsx(n(),{href:"/contact-us/",children:"Contact Us"})]}),i.jsx("div",{className:"drawerToggle",children:i.jsx(o(),{src:"./images/bars.svg",height:"25",width:"25",alt:"",className:"threeBars",onClick:t})}),i.jsx("div",{className:`drawer ${e?"open":""}`,onClick:t,children:(0,i.jsxs)("div",{className:"drawerContent",children:[i.jsx("div",{className:"crossBtnRight",children:i.jsx(o(),{src:"./images/cross.svg",height:"30",width:"30",alt:"",className:"crossbtn",onClick:t})}),i.jsx(n(),{href:"/about-us/",children:"About Us"}),i.jsx(n(),{href:"/our-services/",children:"Our Services"}),i.jsx(n(),{href:"/manufacturing-industries/",children:"Industries"}),i.jsx(n(),{href:"/case-studies/",children:"Case Studies"}),i.jsx(n(),{href:"/contact-us/",children:"Contact Us"})]})})]})})}function h({children:e}){return(0,i.jsxs)(i.Fragment,{children:[i.jsx(d,{}),i.jsx("main",{id:"main-layout",children:e}),i.jsx(c,{})]})}function u({Component:e,pageProps:s}){return i.jsx(i.Fragment,{children:i.jsx(h,{children:i.jsx(e,{...s})})})}},6105:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var i=t(997),r=t(6859);function n(){return(0,i.jsxs)(r.Html,{lang:"en",children:[(0,i.jsxs)(r.Head,{children:[i.jsx("link",{rel:"icon",href:"/public/favicon.png",sizes:"32x32"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap",rel:"stylesheet"}),i.jsx("link",{rel:"stylesheet",id:"elementor-icons-css",href:"https://taciti.coinage.host/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.27.0",media:"all"}),i.jsx("link",{rel:"stylesheet",id:"elementor-common-css",href:"https://taciti.coinage.host/wp-content/plugins/elementor/assets/css/common.min.css?ver=3.19.2",media:"all"}),i.jsx("link",{rel:"stylesheet",id:"e-theme-ui-light-css",href:"https://taciti.coinage.host/wp-content/plugins/elementor/assets/css/theme-light.min.css?ver=3.19.2",media:"all"}),i.jsx("link",{rel:"stylesheet",id:"elementor-frontend-css",href:"https://taciti.coinage.host/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.19.2",media:"all"}),i.jsx("link",{rel:"stylesheet",id:"elementor-post-9-css",href:"https://taciti.coinage.host/wp-content/uploads/elementor/css/post-9.css?ver=1708501854",media:"all"}),i.jsx("link",{rel:"stylesheet",id:"elementor-global-css",href:"https://taciti.coinage.host/wp-content/uploads/elementor/css/global.css?ver=1708521135",media:"all"}),i.jsx("link",{rel:"stylesheet",id:"elementor-post-86-css",href:"https://taciti.coinage.host/wp-content/uploads/elementor/css/post-86.css?ver=1708928359",media:"all"})]}),(0,i.jsxs)("body",{children:[i.jsx(r.Main,{}),i.jsx(r.NextScript,{})]})]})}},6764:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),i=s.X(0,[348,516,859,235],()=>t(8791));module.exports=i})();