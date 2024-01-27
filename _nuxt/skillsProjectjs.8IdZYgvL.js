import{c as E,i as J,S as D,a as X,b as U,j as L}from"./Layout.a5rHl5ED.js";import{o as u,h as B,w as C,r as W,g as R,c as g,a as d,t as q,b as T,F as I,u as Y,j as N,d as G,k as Q}from"./entry.NQR86dDD.js";function Z(n){const{effect:e,swiper:t,on:c,setTranslate:i,setTransition:x,overwriteParams:v,perspective:P,recreateShadows:a,getEffectParams:l}=n;c("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),P&&P()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const s=v?v():{};Object.assign(t.params,s),Object.assign(t.originalParams,s)}),c("setTranslate",()=>{t.params.effect===e&&i()}),c("setTransition",(s,o)=>{t.params.effect===e&&x(o)}),c("transitionEnd",()=>{if(t.params.effect===e&&a){if(!l||!l().slideShadows)return;t.slides.forEach(s=>{s.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(o=>o.remove())}),a()}});let r;c("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(r=!0),requestAnimationFrame(()=>{r&&t.slides&&t.slides.length&&(i(),r=!1)}))})}function K(n){let{swiper:e,extendParams:t,on:c}=n;t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(a,l,r)=>{let s=r?a.querySelector(".swiper-slide-shadow-left"):a.querySelector(".swiper-slide-shadow-top"),o=r?a.querySelector(".swiper-slide-shadow-right"):a.querySelector(".swiper-slide-shadow-bottom");s||(s=E("div",`swiper-slide-shadow-cube swiper-slide-shadow-${r?"left":"top"}`.split(" ")),a.append(s)),o||(o=E("div",`swiper-slide-shadow-cube swiper-slide-shadow-${r?"right":"bottom"}`.split(" ")),a.append(o)),s&&(s.style.opacity=Math.max(-l,0)),o&&(o.style.opacity=Math.max(l,0))};Z({effect:"cube",swiper:e,on:c,setTranslate:()=>{const{el:a,wrapperEl:l,slides:r,width:s,height:o,rtlTranslate:V,size:f,browser:H}=e,_=e.params.cubeEffect,k=e.isHorizontal(),A=e.virtual&&e.params.virtual.enabled;let b=0,p;_.shadow&&(k?(p=e.wrapperEl.querySelector(".swiper-cube-shadow"),p||(p=E("div","swiper-cube-shadow"),e.wrapperEl.append(p)),p.style.height=`${s}px`):(p=a.querySelector(".swiper-cube-shadow"),p||(p=E("div","swiper-cube-shadow"),a.append(p))));for(let y=0;y<r.length;y+=1){const $=r[y];let m=y;A&&(m=parseInt($.getAttribute("data-swiper-slide-index"),10));let h=m*90,S=Math.floor(h/360);V&&(h=-h,S=Math.floor(-h/360));const j=Math.max(Math.min($.progress,1),-1);let w=0,z=0,M=0;m%4===0?(w=-S*4*f,M=0):(m-1)%4===0?(w=0,M=-S*4*f):(m-2)%4===0?(w=f+S*4*f,M=f):(m-3)%4===0&&(w=-f,M=3*f+f*4*S),V&&(w=-w),k||(z=w,w=0);const F=`rotateX(${k?0:-h}deg) rotateY(${k?h:0}deg) translate3d(${w}px, ${z}px, ${M}px)`;j<=1&&j>-1&&(b=m*90+j*90,V&&(b=-m*90-j*90),e.browser&&e.browser.isSafari&&Math.abs(b)/90%2===1&&(b+=.001)),$.style.transform=F,_.slideShadows&&i($,j,k)}if(l.style.transformOrigin=`50% 50% -${f/2}px`,l.style["-webkit-transform-origin"]=`50% 50% -${f/2}px`,_.shadow)if(k)p.style.transform=`translate3d(0px, ${s/2+_.shadowOffset}px, ${-s/2}px) rotateX(89.99deg) rotateZ(0deg) scale(${_.shadowScale})`;else{const y=Math.abs(b)-Math.floor(Math.abs(b)/90)*90,$=1.5-(Math.sin(y*2*Math.PI/360)/2+Math.cos(y*2*Math.PI/360)/2),m=_.shadowScale,h=_.shadowScale/$,S=_.shadowOffset;p.style.transform=`scale3d(${m}, 1, ${h}) translate3d(0px, ${o/2+S}px, ${-o/2/h}px) rotateX(-89.99deg)`}const O=(H.isSafari||H.isWebView)&&H.needPerspectiveFix?-f/2:0;l.style.transform=`translate3d(0px,0,${O}px) rotateX(${e.isHorizontal()?0:b}deg) rotateY(${e.isHorizontal()?-b:0}deg)`,l.style.setProperty("--swiper-cube-translate-z",`${O}px`)},setTransition:a=>{const{el:l,slides:r}=e;if(r.forEach(s=>{s.style.transitionDuration=`${a}ms`,s.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(o=>{o.style.transitionDuration=`${a}ms`})}),e.params.cubeEffect.shadow&&!e.isHorizontal()){const s=l.querySelector(".swiper-cube-shadow");s&&(s.style.transitionDuration=`${a}ms`)}},recreateShadows:()=>{const a=e.isHorizontal();e.slides.forEach(l=>{const r=Math.max(Math.min(l.progress,1),-1);i(l,r,a)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}const ee={__name:"SwiperCube",setup(n){const e=[K];return(t,c)=>{const i=J;return u(),B(i,{effect:"cube",grabCursor:!0,autoplay:{delay:2500,disableOnInteraction:!1},cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},modules:e,id:"swiperCube"},{default:C(()=>[W(t.$slots,"default")]),_:3})}}},te=ee,se={class:"py-16 md:py-28 2xl:py-36"},ae={class:"grid grid-cols-1 md:grid-cols-2 max-w-5xl 2xl:max-w-6xl mx-auto overflow-hidden"},ie={class:"mt-6 flex flex-col justify-center px-7 text-center md:text-left md:w-108 2xl:w-116"},le={class:"!text-4xl md:!text-5xl font-bold 2xl:!text-6xl dark:text-white tracking-wide"},re={class:"my-12 justify-center 2xl:justify-end row-span-2 md:mb-14 px-10 sm:px-20 w-full max-w-xl m-auto md:max-w-max"},oe={class:"px-7 md:w-108 text-sm 2xl:w-116"},ne={class:"text-center md:text-base md:text-left max-w-xl mx-auto 2xl:text-lg"},ce={class:"flex justify-center md:justify-start"},de=["href"],ge=R({__name:"HeroProjects",props:["title","title2","parrafo","linkPage","nameIcon","images"],setup(n){return(e,t)=>{const c=X,i=te,x=U;return u(),g("section",se,[d("div",ae,[d("div",ie,[d("h1",le,q(n.title),1)]),d("div",re,[T(i,null,{default:C(()=>[(u(!0),g(I,null,N(n.images,(v,P)=>(u(),B(Y(D),{key:P},{default:C(()=>[T(c,{src:v},null,8,["src"])]),_:2},1024))),128))]),_:1})]),d("div",oe,[d("p",ne,q(n.parrafo),1),d("div",ce,[d("a",{href:n.linkPage,target:"_blank"},[T(x,{type:"contained",class:"mt-8"},{default:C(()=>[G("Ver Pagina")]),_:1})],8,de)])])])])}}}),fe={id:"Technologies",class:"px-7 pb-20 pt-10 2xl:pb-32 2xl:pt-0 max-w-5xl 2xl:max-w-6xl mx-auto"},pe=d("h2",{class:"text-center"},"Tecnologías",-1),me={class:"grid grid-cols-3 justify-center items-center mt-10 md:grid-cols-4 gap-y-5 md:mt-20 sm:px-10 md:px-20"},ue=d("h3",{class:"text-center col-span-3 md:col-span-4 font-bold text-2xl 2xl:text-3xl mb-5 md:mb-10"}," Frontend ",-1),he={class:"text-center font-bold mt-2"},we={key:0,class:"text-center col-span-3 md:col-span-4 font-bold text-2xl 2xl:text-3xl mt-10 mb-5 md:mb-10"},xe={class:"text-center font-bold mt-2"},ye=R({__name:"Technologies",props:["frontend","backend"],setup(n){return(e,t)=>{const c=L;return u(),g("section",fe,[pe,d("div",me,[ue,(u(!0),g(I,null,N(n.frontend,(i,x)=>(u(),g("div",{key:x,class:"flex justify-center items-center flex-col"},[T(c,{filled:"",class:"!text-6xl md:!text-7xl",name:i.icon},null,8,["name"]),d("h4",he,q(i.title),1)]))),128)),n.backend?(u(),g("h3",we," Backend ")):Q("",!0),(u(!0),g(I,null,N(n.backend,(i,x)=>(u(),g("div",{key:x,class:"flex justify-center items-center flex-col"},[T(c,{filled:"",class:"!text-6xl md:!text-7xl",name:i.icon},null,8,["name"]),d("h4",xe,q(i.title),1)]))),128))])])}}}),Se={"crud-mochima":{frontend:[{icon:"skills/html5",title:"Html5"},{icon:"skills/css",title:"Css"},{icon:"skills/react",title:"React"},{icon:"skills/javascript",title:"JavaScript"}]},"dashboard-nest":{frontend:[{icon:"skills/html5",title:"Html5"},{icon:"skills/css",title:"Css"},{icon:"skills/react",title:"React"},{icon:"skills/javascript",title:"JavaScript"},{icon:"skills/materialui",title:"Material UI"},{icon:"skills/redux",title:"Redux"}],backend:[{icon:"skills/typescript",title:"TypeScript"},{icon:"skills/nodejs",title:"NodeJs"},{icon:"skills/nestjs",title:"NestJs"},{icon:"skills/typeorm",title:"TypeORM"},{icon:"skills/postgresql",title:"PostgresSQL"}]},"parque-nacional-mochima":{frontend:[{icon:"skills/html5",title:"Html5"},{icon:"skills/css",title:"Css"},{icon:"skills/react",title:"React"},{icon:"skills/javascript",title:"JavaScript"}]},"vue-anime":{frontend:[{icon:"skills/vue",title:"Vue"},{icon:"skills/nuxt",title:"Nuxt"},{icon:"skills/vuetify",title:"Vuetify"},{icon:"skills/javascript",title:"JavaScript"},{icon:"skills/css",title:"Css"},{icon:"skills/html5",title:"Html5"}]}};export{Se as S,ge as _,ye as a};
