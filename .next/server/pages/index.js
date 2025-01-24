"use strict";(()=>{var e={};e.id=405,e.ids=[405],e.modules={1725:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>c,getServerSideProps:()=>x,getStaticPaths:()=>m,getStaticProps:()=>u,reportWebVitals:()=>b,routeModule:()=>j,unstable_getServerProps:()=>f,unstable_getServerSideProps:()=>P,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>h,unstable_getStaticProps:()=>v});var s=r(7093),i=r(5244),o=r(1323),n=r(5949),l=r(9206),d=r(2285),p=e([d]);d=(p.then?(await p)():p)[0];let c=(0,o.l)(d,"default"),u=(0,o.l)(d,"getStaticProps"),m=(0,o.l)(d,"getStaticPaths"),x=(0,o.l)(d,"getServerSideProps"),g=(0,o.l)(d,"config"),b=(0,o.l)(d,"reportWebVitals"),v=(0,o.l)(d,"unstable_getStaticProps"),h=(0,o.l)(d,"unstable_getStaticPaths"),S=(0,o.l)(d,"unstable_getStaticParams"),f=(0,o.l)(d,"unstable_getServerProps"),P=(0,o.l)(d,"unstable_getServerSideProps"),j=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:l.default,Document:n.default},userland:d});a()}catch(e){a(e)}})},2285:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>h,getServerSideProps:()=>g});var s=r(997),i=r(5091),o=r(8891),n=r(8403),l=r(936),d=r(6896),p=r(920),c=r(2313),u=r(5152),m=r.n(u),x=e([i,o]);[i,o]=x.then?(await x)():x;let b=m()(()=>r.e(689).then(r.bind(r,689)),{loadableGenerated:{modules:["pages/index.js -> @/src/components/Portfolio"]},ssr:!1}),v=m()(()=>r.e(365).then(r.bind(r,6365)),{loadableGenerated:{modules:["pages/index.js -> @/src/components/Home"]},ssr:!1});async function g(){let e=(0,i.createClient)({projectId:"aw3v4mxg",dataset:"production",apiVersion:"2021-03-25",useCdn:!1}),t=`
    *[_type=='news'] {
      title,
      image,
      tag,
      date,
      content,
    }
  `,r=`
    *[_type=='portfolio'] {
      title,
      content,
      image,
      category,
    }
  `,a=`
    *[_type=='service'] {
      title,
      description,
      icon,
      image,
      content,
    }
  `,s=await e.fetch(t),o=await e.fetch(r),n=await e.fetch(a);return{props:{data:{news:s||[],portfolio:o||[],service:n||[]}}}}let h=({data:e})=>s.jsx(c.Z,{children:(0,s.jsxs)("div",{className:"cavani_tm_mainpart absolute inset-[70px] overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px]",children:[s.jsx(n.default,{children:s.jsx("div",{className:"author_image absolute top-0 left-0 bottom-0 w-[40%] z-[15]",children:s.jsx("div",{className:"main absolute inset-0 bg-no-repeat bg-cover bg-center","data-img-url":"assets/img/about/1.jpg"})})}),(0,s.jsxs)("div",{className:"main_content absolute top-0 left-0 bottom-0 w-[60%]",children:[s.jsx(v,{}),s.jsx(o.Z,{}),s.jsx(b,{data:e?.portfolio}),s.jsx(p.Z,{data:e?.service}),s.jsx(d.Z,{data:e?.news}),s.jsx(l.Z,{})]})]})});a()}catch(e){a(e)}})},3563:e=>{e.exports=require("imagesloaded")},2349:e=>{e.exports=require("isotope-layout")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},1400:e=>{e.exports=require("react-circular-progressbar")},6405:e=>{e.exports=require("react-dom")},9931:e=>{e.exports=require("react-modal")},9485:e=>{e.exports=require("react-modal-video")},997:e=>{e.exports=require("react/jsx-runtime")},5091:e=>{e.exports=import("next-sanity")},3015:e=>{e.exports=import("swiper/react")},5505:e=>{e.exports=import("typed.js")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[567,163,859,56,675,632,164],()=>r(1725));module.exports=a})();