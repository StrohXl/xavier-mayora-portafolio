import{_ as re,a as X,b as R,e as me,c as pe,d as ue,f as ne,g as fe,h as se,i as _e,S as A,j as U,k as he}from"./Layout.bKL8jnoY.js";import{_ as Z,o as E,c as D,a as n,b as a,w as c,d as C,u as b,f as ge,g as G,h as K,r as xe,i as ve,j as Q,F as ie,k as le,t as W,l as oe}from"./entry.Z60cATKN.js";import{_ as ee}from"./nuxt-link.cuCh20-5.js";import{_ as ye}from"./nuxt-icon.vue.JOaBxL7q.js";import"./vue.f36acd1f.n01YrBlk.js";const be={},$e={class:"py-16 md:py-28 2xl:py-36"},we={class:"grid md:grid-cols-2 max-w-5xl 2xl:max-w-6xl mx-auto"},ke=n("div",{class:"mt-6 flex flex-col justify-center px-7 text-center md:text-left md:w-108 2xl:w-116"},[n("h2",{class:"!text-4xl md:!text-5xl 2xl:!text-6xl dark:text-white tracking-wide"}," Xavier Mayora "),n("h1",{class:"!text-3xl font-bold md:!text-4xl 2xl:!text-5xl text-primary dark:text-pri maryDark tracking-wide"}," Full Stack Developer ")],-1),Ce={class:"my-8 flex justify-center 2xl:justify-end row-span-2 md:mb-14"},Le={class:"px-7 md:mt-3 md:w-108 text-sm 2xl:w-116"},Se=n("p",{class:"text-center md:text-base md:text-left max-w-xl mx-auto 2xl:text-lg"}," La tecnología es una pieza crucial en nuestras vidas. Es importante que estemos al tanto de los últimos avances tecnológicos y cómo podemos usarlos para mejorar nuestras vidas. ",-1),Ee={class:"flex justify-center md:justify-start"};function je(x,e){const _=X,l=R;return E(),D("section",$e,[n("div",we,[ke,n("div",Ce,[a(_,{class:"overflow-hidden rounded-full w-52 h-52 md:w-64 md:h-64 2xl:w-80 2xl:h-80",src:"/imagePortafolio.jpg"})]),n("div",Le,[Se,n("div",Ee,[a(l,{onClick:e[0]||(e[0]=i=>("moveScroll"in x?x.moveScroll:b(re))("Contact")),type:"contained",class:"mt-8"},{default:c(()=>[C("Contáctame")]),_:1})])])])])}const Be=Z(be,[["render",je]]),Ae={},Te={id:"Experiencie"},De=ge('<div class="pt-5 pb-20 2xl:pb-32 px-7 mx-auto max-w-5xl 2xl:max-w-6xl"><h2 class="text-center text-3xl md:text-4xl 2xl:text-5xl">Experiencia</h2><ul class="mt-16 md:mt-20"><li><h3 class="text-2xl 2xl:text-3xl font-bold">Wingsoft</h3><h4 class="text-lg font-normal">Abirl-2023/Octubre-2023</h4><p><span class="font-bold"> Cargo:</span> Desarrollador frontend</p><p>Desarrollo y mantenimiento de sistemas con Vuejs, Next y Nuxt</p></li></ul></div>',1),Ne=[De];function Pe(x,e){return E(),D("section",Te,Ne)}const Me=Z(Ae,[["render",Pe]]);function de(x,e,_,l){return x.params.createElements&&Object.keys(l).forEach(i=>{if(!_[i]&&_.auto===!0){let o=me(x.el,`.${l[i]}`)[0];o||(o=pe("div",l[i]),o.className=l[i],x.el.append(o)),_[i]=o,e[i]=o}}),_}function Ie(x){let{swiper:e,extendParams:_,on:l,emit:i}=x;_({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const o=d=>(Array.isArray(d)?d:[d]).filter(p=>!!p);function u(d){let p;return d&&typeof d=="string"&&e.isElement&&(p=e.el.querySelector(d),p)?p:(d&&(typeof d=="string"&&(p=[...document.querySelectorAll(d)]),e.params.uniqueNavElements&&typeof d=="string"&&p.length>1&&e.el.querySelectorAll(d).length===1&&(p=e.el.querySelector(d))),d&&!p?d:p)}function m(d,p){const f=e.params.navigation;d=o(d),d.forEach(t=>{t&&(t.classList[p?"add":"remove"](...f.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=p),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](f.lockClass))})}function v(){const{nextEl:d,prevEl:p}=e.navigation;if(e.params.loop){m(p,!1),m(d,!1);return}m(p,e.isBeginning&&!e.params.rewind),m(d,e.isEnd&&!e.params.rewind)}function I(d){d.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function w(d){d.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function P(){const d=e.params.navigation;if(e.params.navigation=de(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(d.nextEl||d.prevEl))return;let p=u(d.nextEl),f=u(d.prevEl);Object.assign(e.navigation,{nextEl:p,prevEl:f}),p=o(p),f=o(f);const t=(s,r)=>{s&&s.addEventListener("click",r==="next"?w:I),!e.enabled&&s&&s.classList.add(...d.lockClass.split(" "))};p.forEach(s=>t(s,"next")),f.forEach(s=>t(s,"prev"))}function T(){let{nextEl:d,prevEl:p}=e.navigation;d=o(d),p=o(p);const f=(t,s)=>{t.removeEventListener("click",s==="next"?w:I),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};d.forEach(t=>f(t,"next")),p.forEach(t=>f(t,"prev"))}l("init",()=>{e.params.navigation.enabled===!1?N():(P(),v())}),l("toEdge fromEdge lock unlock",()=>{v()}),l("destroy",()=>{T()}),l("enable disable",()=>{let{nextEl:d,prevEl:p}=e.navigation;if(d=o(d),p=o(p),e.enabled){v();return}[...d,...p].filter(f=>!!f).forEach(f=>f.classList.add(e.params.navigation.lockClass))}),l("click",(d,p)=>{let{nextEl:f,prevEl:t}=e.navigation;f=o(f),t=o(t);const s=p.target;if(e.params.navigation.hideOnClick&&!t.includes(s)&&!f.includes(s)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===s||e.pagination.el.contains(s)))return;let r;f.length?r=f[0].classList.contains(e.params.navigation.hiddenClass):t.length&&(r=t[0].classList.contains(e.params.navigation.hiddenClass)),i(r===!0?"navigationShow":"navigationHide"),[...f,...t].filter(h=>!!h).forEach(h=>h.classList.toggle(e.params.navigation.hiddenClass))}});const z=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),P(),v()},N=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),T()};Object.assign(e.navigation,{enable:z,disable:N,update:v,init:P,destroy:T})}function Y(x){return x===void 0&&(x=""),`.${x.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function ze(x){let{swiper:e,extendParams:_,on:l,emit:i}=x;const o="swiper-pagination";_({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),e.pagination={el:null,bullets:[]};let u,m=0;const v=t=>(Array.isArray(t)?t:[t]).filter(s=>!!s);function I(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function w(t,s){const{bulletActiveClass:r}=e.params.pagination;t&&(t=t[`${s==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${r}-${s}`),t=t[`${s==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${r}-${s}-${s}`)))}function P(t){const s=t.target.closest(Y(e.params.pagination.bulletClass));if(!s)return;t.preventDefault();const r=ne(s)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===r)return;e.slideToLoop(r)}else e.slideTo(r)}function T(){const t=e.rtl,s=e.params.pagination;if(I())return;let r=e.pagination.el;r=v(r);let h,k;const q=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,O=e.params.loop?Math.ceil(q/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(k=e.previousRealIndex||0,h=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(h=e.snapIndex,k=e.previousSnapIndex):(k=e.previousIndex||0,h=e.activeIndex||0),s.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const g=e.pagination.bullets;let L,j,F;if(s.dynamicBullets&&(u=ue(g[0],e.isHorizontal()?"width":"height",!0),r.forEach($=>{$.style[e.isHorizontal()?"width":"height"]=`${u*(s.dynamicMainBullets+4)}px`}),s.dynamicMainBullets>1&&k!==void 0&&(m+=h-(k||0),m>s.dynamicMainBullets-1?m=s.dynamicMainBullets-1:m<0&&(m=0)),L=Math.max(h-m,0),j=L+(Math.min(g.length,s.dynamicMainBullets)-1),F=(j+L)/2),g.forEach($=>{const S=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(B=>`${s.bulletActiveClass}${B}`)].map(B=>typeof B=="string"&&B.includes(" ")?B.split(" "):B).flat();$.classList.remove(...S)}),r.length>1)g.forEach($=>{const S=ne($);S===h?$.classList.add(...s.bulletActiveClass.split(" ")):e.isElement&&$.setAttribute("part","bullet"),s.dynamicBullets&&(S>=L&&S<=j&&$.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),S===L&&w($,"prev"),S===j&&w($,"next"))});else{const $=g[h];if($&&$.classList.add(...s.bulletActiveClass.split(" ")),e.isElement&&g.forEach((S,B)=>{S.setAttribute("part",B===h?"bullet-active":"bullet")}),s.dynamicBullets){const S=g[L],B=g[j];for(let H=L;H<=j;H+=1)g[H]&&g[H].classList.add(...`${s.bulletActiveClass}-main`.split(" "));w(S,"prev"),w(B,"next")}}if(s.dynamicBullets){const $=Math.min(g.length,s.dynamicMainBullets+4),S=(u*$-u)/2-F*u,B=t?"right":"left";g.forEach(H=>{H.style[e.isHorizontal()?B:"top"]=`${S}px`})}}r.forEach((g,L)=>{if(s.type==="fraction"&&(g.querySelectorAll(Y(s.currentClass)).forEach(j=>{j.textContent=s.formatFractionCurrent(h+1)}),g.querySelectorAll(Y(s.totalClass)).forEach(j=>{j.textContent=s.formatFractionTotal(O)})),s.type==="progressbar"){let j;s.progressbarOpposite?j=e.isHorizontal()?"vertical":"horizontal":j=e.isHorizontal()?"horizontal":"vertical";const F=(h+1)/O;let $=1,S=1;j==="horizontal"?$=F:S=F,g.querySelectorAll(Y(s.progressbarFillClass)).forEach(B=>{B.style.transform=`translate3d(0,0,0) scaleX(${$}) scaleY(${S})`,B.style.transitionDuration=`${e.params.speed}ms`})}s.type==="custom"&&s.renderCustom?(g.innerHTML=s.renderCustom(e,h+1,O),L===0&&i("paginationRender",g)):(L===0&&i("paginationRender",g),i("paginationUpdate",g)),e.params.watchOverflow&&e.enabled&&g.classList[e.isLocked?"add":"remove"](s.lockClass)})}function z(){const t=e.params.pagination;if(I())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let r=e.pagination.el;r=v(r);let h="";if(t.type==="bullets"){let k=e.params.loop?Math.ceil(s/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&k>s&&(k=s);for(let q=0;q<k;q+=1)t.renderBullet?h+=t.renderBullet.call(e,q,t.bulletClass):h+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?h=t.renderFraction.call(e,t.currentClass,t.totalClass):h=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?h=t.renderProgressbar.call(e,t.progressbarFillClass):h=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],r.forEach(k=>{t.type!=="custom"&&(k.innerHTML=h||""),t.type==="bullets"&&e.pagination.bullets.push(...k.querySelectorAll(Y(t.bulletClass)))}),t.type!=="custom"&&i("paginationRender",r[0])}function N(){e.params.pagination=de(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let s;typeof t.el=="string"&&e.isElement&&(s=e.el.querySelector(t.el)),!s&&typeof t.el=="string"&&(s=[...document.querySelectorAll(t.el)]),s||(s=t.el),!(!s||s.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(s)&&s.length>1&&(s=[...e.el.querySelectorAll(t.el)],s.length>1&&(s=s.filter(r=>fe(r,".swiper")[0]===e.el)[0])),Array.isArray(s)&&s.length===1&&(s=s[0]),Object.assign(e.pagination,{el:s}),s=v(s),s.forEach(r=>{t.type==="bullets"&&t.clickable&&r.classList.add(...(t.clickableClass||"").split(" ")),r.classList.add(t.modifierClass+t.type),r.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(r.classList.add(`${t.modifierClass}${t.type}-dynamic`),m=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&r.classList.add(t.progressbarOppositeClass),t.clickable&&r.addEventListener("click",P),e.enabled||r.classList.add(t.lockClass)}))}function d(){const t=e.params.pagination;if(I())return;let s=e.pagination.el;s&&(s=v(s),s.forEach(r=>{r.classList.remove(t.hiddenClass),r.classList.remove(t.modifierClass+t.type),r.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(r.classList.remove(...(t.clickableClass||"").split(" ")),r.removeEventListener("click",P))})),e.pagination.bullets&&e.pagination.bullets.forEach(r=>r.classList.remove(...t.bulletActiveClass.split(" ")))}l("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:s}=e.pagination;s=v(s),s.forEach(r=>{r.classList.remove(t.horizontalClass,t.verticalClass),r.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),l("init",()=>{e.params.pagination.enabled===!1?f():(N(),z(),T())}),l("activeIndexChange",()=>{typeof e.snapIndex>"u"&&T()}),l("snapIndexChange",()=>{T()}),l("snapGridLengthChange",()=>{z(),T()}),l("destroy",()=>{d()}),l("enable disable",()=>{let{el:t}=e.pagination;t&&(t=v(t),t.forEach(s=>s.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),l("lock unlock",()=>{T()}),l("click",(t,s)=>{const r=s.target,h=v(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&h&&h.length>0&&!r.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&r===e.navigation.nextEl||e.navigation.prevEl&&r===e.navigation.prevEl))return;const k=h[0].classList.contains(e.params.pagination.hiddenClass);i(k===!0?"paginationShow":"paginationHide"),h.forEach(q=>q.classList.toggle(e.params.pagination.hiddenClass))}});const p=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=v(t),t.forEach(s=>s.classList.remove(e.params.pagination.paginationDisabledClass))),N(),z(),T()},f=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=v(t),t.forEach(s=>s.classList.add(e.params.pagination.paginationDisabledClass))),d()};Object.assign(e.pagination,{enable:p,disable:f,render:z,update:T,init:N,destroy:d})}function qe(x){let{swiper:e,extendParams:_,on:l,emit:i,params:o}=x;e.autoplay={running:!1,paused:!1,timeLeft:0},_({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let u,m,v=o&&o.autoplay?o.autoplay.delay:3e3,I=o&&o.autoplay?o.autoplay.delay:3e3,w,P=new Date().getTime(),T,z,N,d,p,f,t;function s(y){!e||e.destroyed||!e.wrapperEl||y.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",s),!t&&L())}const r=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?T=!0:T&&(I=w,T=!1);const y=e.autoplay.paused?w:P+I-new Date().getTime();e.autoplay.timeLeft=y,i("autoplayTimeLeft",y,y/v),m=requestAnimationFrame(()=>{r()})},h=()=>{let y;return e.virtual&&e.params.virtual.enabled?y=e.slides.filter(M=>M.classList.contains("swiper-slide-active"))[0]:y=e.slides[e.activeIndex],y?parseInt(y.getAttribute("data-swiper-autoplay"),10):void 0},k=y=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(m),r();let V=typeof y>"u"?e.params.autoplay.delay:y;v=e.params.autoplay.delay,I=e.params.autoplay.delay;const M=h();!Number.isNaN(M)&&M>0&&typeof y>"u"&&(V=M,v=M,I=M),w=V;const J=e.params.speed,ae=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(J,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,J,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(J,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,J,!0,!0),i("autoplay")),e.params.cssMode&&(P=new Date().getTime(),requestAnimationFrame(()=>{k()})))};return V>0?(clearTimeout(u),u=setTimeout(()=>{ae()},V)):requestAnimationFrame(()=>{ae()}),V},q=()=>{P=new Date().getTime(),e.autoplay.running=!0,k(),i("autoplayStart")},O=()=>{e.autoplay.running=!1,clearTimeout(u),cancelAnimationFrame(m),i("autoplayStop")},g=(y,V)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(u),y||(f=!0);const M=()=>{i("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",s):L()};if(e.autoplay.paused=!0,V){p&&(w=e.params.autoplay.delay),p=!1,M();return}w=(w||e.params.autoplay.delay)-(new Date().getTime()-P),!(e.isEnd&&w<0&&!e.params.loop)&&(w<0&&(w=0),M())},L=()=>{e.isEnd&&w<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(P=new Date().getTime(),f?(f=!1,k(w)):k(),e.autoplay.paused=!1,i("autoplayResume"))},j=()=>{if(e.destroyed||!e.autoplay.running)return;const y=se();y.visibilityState==="hidden"&&(f=!0,g(!0)),y.visibilityState==="visible"&&L()},F=y=>{y.pointerType==="mouse"&&(f=!0,t=!0,!(e.animating||e.autoplay.paused)&&g(!0))},$=y=>{y.pointerType==="mouse"&&(t=!1,e.autoplay.paused&&L())},S=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",F),e.el.addEventListener("pointerleave",$))},B=()=>{e.el.removeEventListener("pointerenter",F),e.el.removeEventListener("pointerleave",$)},H=()=>{se().addEventListener("visibilitychange",j)},ce=()=>{se().removeEventListener("visibilitychange",j)};l("init",()=>{e.params.autoplay.enabled&&(S(),H(),q())}),l("destroy",()=>{B(),ce(),e.autoplay.running&&O()}),l("_freeModeStaticRelease",()=>{(N||f)&&L()}),l("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?O():g(!0,!0)}),l("beforeTransitionStart",(y,V,M)=>{e.destroyed||!e.autoplay.running||(M||!e.params.autoplay.disableOnInteraction?g(!0,!0):O())}),l("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){O();return}z=!0,N=!1,f=!1,d=setTimeout(()=>{f=!0,N=!0,g(!0)},200)}}),l("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!z)){if(clearTimeout(d),clearTimeout(u),e.params.autoplay.disableOnInteraction){N=!1,z=!1;return}N&&e.params.cssMode&&L(),N=!1,z=!1}}),l("slideChange",()=>{e.destroyed||!e.autoplay.running||(p=!0)}),Object.assign(e.autoplay,{start:q,stop:O,pause:g,resume:L})}const te=G({__name:"Swiper",setup(x){const e=[qe,ze,Ie];return(_,l)=>{const i=_e;return E(),K(i,{autoplay:{delay:3500,disableOnInteraction:!1},"space-between":20,pagination:!0,modules:e,id:"swiperProjects",class:"rounded-md overflow-hidden sm:!hidden",style:{width:"100%",height:"auto","aspect-ratio":"1.77"}},{default:c(()=>[xe(_.$slots,"default")]),_:3})}}}),Oe={id:"mochima",class:"mt-14 relative"},Ve={class:"px-7"},Fe={class:"mb-5 text-2xl md:text-3xl font-bold flex gap-3"},He=n("br",null,null,-1),Re={class:"grid md:grid-cols-6 gap-2 relative z-10"},Ge={class:"hidden sm:grid md:grid-cols-4 gap-2 md:col-start-3 md:col-span-4 md:ml-5"},Je={class:"hidden sm:col-span-4 sm:block h-52 overflow-hidden rounded-md md:h-auto md:col-span-2"},Ye={class:"hidden sm:block sm:col-span-2 overflow-hidden rounded-md md:col-span-2"},Xe={class:"hidden sm:block sm:col-span-2 overflow-hidden rounded-md md:col-span-2"},Ue={class:"sm:col-span-4 sm:block h-52 overflow-hidden rounded-md md:h-auto md:col-span-2 !hidden md:!flex"},Qe={class:"md:col-start-1 md:row-start-1 md:col-span-2"},We=n("p",{class:"text-justify mt-6 line-clamp-3 sm:col-span-4 md:text-lg 2xl:text-xl md:line-clamp-none"}," Primer proyecto elaborado en React.Js, que tiene como objetivo promocionar los Servicios y las Playas que ofrece el parque nacional Mochima ademas de ofrecer informacion historica como su geolocalización. ",-1),Ke={class:"md:flex justify-center gap-3 hidden md:justify-end mt-10"},Ze={class:"flex justify-center mt-4 gap-3 md:hidden"},et=G({__name:"parqueNacionalMochima",setup(x){return(e,_)=>{const l=U,i=X,o=te,u=R,m=ee;return E(),D("div",Oe,[n("div",Ve,[n("h3",Fe,[a(l,{class:"text-primaryDark dark:text-primary !text-3xl mt-2 md:!text-4xl",name:"projects/beach"}),C(" Parque Nacional "),He,C(" Mochima ")]),a(o,null,{default:c(()=>[a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/mochima-1.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/mochima-2.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/mochima-3.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/mochima-4.png"})]),_:1})]),_:1}),n("div",Re,[n("div",Ge,[n("div",Je,[a(i,{src:"/mochima-1.png"})]),n("div",Ye,[a(i,{src:"/mochima-2.png"})]),n("div",Xe,[a(i,{src:"/mochima-3.png"})]),n("div",Ue,[a(i,{src:"/mochima-4.png"})])]),n("div",Qe,[We,n("div",Ke,[a(m,{class:"relative z-10",to:"/projects/parque-nacional-mochima"},{default:c(()=>[a(u,{type:"outlined",class:"mt-2"},{default:c(()=>[C(" Ver mas ")]),_:1})]),_:1})])])])]),n("div",Ze,[a(m,{class:"relative z-10",to:"/projects/parque-nacional-mochima"},{default:c(()=>[a(u,{type:"outlined",class:"mt-2"},{default:c(()=>[C(" Ver mas ")]),_:1})]),_:1})]),a(l,{class:"absolute -bottom-10 text-gray-800/60 z-0 !text-16xl mt-2 md:!left-40 md:bottom-10",style:{left:"50%",transform:"translateX(-50%) rotateY(180deg)"},name:"projects/beach"})])}}}),tt={id:"mochima",class:"mt-14 relative"},st={class:"px-7"},at={class:"mb-5 text-2xl md:text-3xl font-bold flex gap-3 items-center"},nt={class:"relative z-10 md:grid md:grid-cols-6 md:gap-2",id:"content-images-projects"},it={class:"flex md:ml-5 sm:grid sm:grid-cols-4 gap-2 relative z-10 md:grid-cols-2 md:col-start-3 md:col-span-4",style:{"grid-template-rows":"300px 150px"},id:"dashboard"},lt={class:"hidden sm:block h-72 sm:col-span-2 overflow-hidden rounded-md md:col-span-1 md:h-auto"},ot={class:"hidden h-40 sm:block sm:col-span-2 overflow-hidden rounded-md md:col-span-1 md:h-full"},rt={class:"hidden h-40 sm:col-span-2 sm:block overflow-hidden rounded-md md:col-span-1 md:h-auto"},dt={class:"hidden -translate-y-32 md:-translate-y-0 sm:col-span-2 h-72 sm:block overflow-hidden rounded-md md:col-span-1 md:h-auto"},ct={class:"md:col-start-1 md:row-start-1 md:col-span-2"},mt=n("p",{class:"md:text-lg 2xl:!text-xl text-justify mt-6 2xl:text-xl md:mt-0 line-clamp-3 md:line-clamp-none"},' Segundo proyecto elaborado en React.Js, consiste en un crud de servicos, paquetes y lista de reservaciones donde puedes crear, añadir, editar y eliminar datos, para poder ingresar el usuario es "admin" y la contraseña es "admin". ',-1),pt={class:"md:flex justify-end hidden mt-10"},ut={class:"flex justify-center mt-4 gap-3 md:hidden"},ft=G({__name:"crudMochima",setup(x){return(e,_)=>{const l=U,i=X,o=te,u=R,m=ee;return E(),D("div",tt,[n("div",st,[n("h3",at,[a(l,{id:"remove-fill",class:"!text-3xl md:!text-4xl text-primary",name:"projects/dashboard"}),C(" Crud Mochima ")]),a(o,null,{default:c(()=>[a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/crud-mochima-1.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/crud-mochima-2.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/crud-mochima-3.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/crud-mochima-4.png"})]),_:1})]),_:1}),n("div",nt,[n("div",it,[n("div",lt,[a(i,{id:"projectImage",class:"w-full h-full",src:"/crud-mochima-2.png"})]),n("div",ot,[a(i,{src:"/crud-mochima-3.png"})]),n("div",rt,[a(i,{src:"/crud-mochima-1.png"})]),n("div",dt,[a(i,{id:"projectImage",src:"/crud-mochima-4.png"})])]),n("div",ct,[mt,n("div",pt,[a(m,{class:"relative z-10",to:"/projects/crud-mochima"},{default:c(()=>[a(u,{type:"outlined",class:"mt-2"},{default:c(()=>[C(" Ver mas ")]),_:1})]),_:1})])])])]),n("div",ut,[a(m,{class:"relative z-10",to:"/projects/crud-mochima"},{default:c(()=>[a(u,{type:"outlined",class:"mt-2"},{default:c(()=>[C(" Ver mas ")]),_:1})]),_:1})]),a(l,{class:"absolute -bottom-10 text-gray-500/5 !text-16xl mt-2 md:!left-40 md:bottom-10",style:{left:"50%",transform:"translateX(-50%) rotateY(180deg)"},name:"projects/dashboard"})])}}}),_t={id:"mochima",class:"mt-14 relative"},ht={class:"px-7"},gt={class:"mb-5 text-2xl md:text-3xl font-bold flex gap-3 items-center"},xt={class:"grid md:grid-cols-6 gap-2 relative z-10"},vt={class:"hidden sm:grid grid-cols-4 md:ml-5 gap-2 md:col-span-4"},yt={class:"hidden sm:block sm:col-span-2 overflow-hidden rounded-md"},bt={class:"hidden sm:block sm:col-span-2 overflow-hidden rounded-md"},$t={class:"hidden sm:col-span-2 sm:block h-52 overflow-hidden rounded-md"},wt={class:"hidden sm:col-span-2 sm:block h-52 overflow-hidden rounded-md"},kt={class:"md:col-span-2 md:row-start-1 md:col-start-1"},Ct=n("p",{class:"text-justify 2xl:text-xl mt-6 md:mt-0 line-clamp-3 md:line-clamp-none md:text-lg"}," Inspirada en Youtube VueAnime fue mi primer proyecto elaborado en el framework de NuxtJs de Vue, que se encarga de hacer solicitudes Get usando Axios a una api llama Jikan la cual te regresa los datos de los animes. ",-1),Lt={class:"mt-10 justify-end gap-3 hidden md:flex"},St={class:"flex justify-center mt-4 gap-3 md:hidden"},Et=G({__name:"vueAnime",setup(x){return(e,_)=>{const l=U,i=X,o=te,u=R,m=ee;return E(),D("div",_t,[n("div",ht,[n("h3",gt,[a(l,{id:"remove-fill",class:"!text-3xl md:!text-4xl text-primary",name:"projects/movie"}),C(" VueAnime ")]),a(o,null,{default:c(()=>[a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/vueanime-1.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/vueanime-2.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/vueanime-3.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/vueanime-4.png"})]),_:1})]),_:1}),n("div",xt,[n("div",vt,[n("div",yt,[a(i,{src:"/vueanime-2.png"})]),n("div",bt,[a(i,{src:"/vueanime-3.png"})]),n("div",$t,[a(i,{src:"/vueanime-4.png"})]),n("div",wt,[a(i,{src:"/vueanime-1.png"})])]),n("div",kt,[Ct,n("div",Lt,[a(m,{class:"relative z-10",to:"/projects/vue-anime"},{default:c(()=>[a(u,{type:"outlined",class:"mt-2"},{default:c(()=>[C(" Ver mas ")]),_:1})]),_:1})])])])]),n("div",St,[a(m,{class:"relative z-10",to:"/projects/vue-anime"},{default:c(()=>[a(u,{type:"outlined",class:"mt-2"},{default:c(()=>[C(" Ver mas ")]),_:1})]),_:1})]),a(l,{class:"absolute -bottom-10 text-gray-500/5 !text-16xl mt-2 md:!left-40 md:bottom-10",id:"remove-fill",style:{left:"50%",transform:"translateX(-50%)"},name:"projects/movie"})])}}}),jt={id:"mochima",class:"mt-14 relative"},Bt={class:"px-7"},At={class:"mb-5 font-bold text-2xl md:text-3xl flex gap-3"},Tt={class:"relative z-10 md:grid md:grid-cols-6 md:gap-3",id:"content-images-projects"},Dt={class:"hidden sm:grid grid-cols-4 gap-2 md:grid-cols-2 md:col-start-3 md:col-span-4",style:{"grid-template-rows":"300px 150px"},id:"dashboard"},Nt={class:"sm:block h-72 md:h-auto md:col-start-3 sm:col-span-2 overflow-hidden rounded-md"},Pt={class:"h-40 sm:block md:col-start-5 md:h-auto sm:col-span-2 overflow-hidden rounded-md"},Mt={class:"-translate-y-5 md:-translate-y-0 h-40 md:h-full sm:col-span-2 sm:block overflow-hidden rounded-md md:col-start-3"},It={class:"-translate-y-32 md:-translate-y-0 md:col-start-5 sm:col-span-2 h-72 sm:block overflow-hidden rounded-md"},zt={class:"md:col-start-1 md:row-start-1 md:col-span-2"},qt=n("p",{class:"md:text-lg 2xl:!text-xl text-justify mt-6 md:mt-0 line-clamp-3 md:line-clamp-none"}," Proyecto elaborado en NextJs de react, donde puedes crearte una cuenta Y crear ingredientes que podras agregar al carrito o comprarlos directamente usando el saldo que tienes por defecto. Para validar el usuario subir imagenes cree mi propio backend usando Nest de Node. ",-1),Ot={class:"md:flex justify-end hidden mt-10"},Vt={class:"flex justify-center mt-4 gap-3 md:hidden"},Ft=G({__name:"nestDev",setup(x){return(e,_)=>{const l=U,i=X,o=te,u=R,m=ee;return E(),D("div",jt,[n("div",Bt,[n("h3",At,[a(l,{class:"!text-3xl md:!text-4xl text-primary",name:"projects/dashboard"}),C(" Dashboard Nest ")]),a(o,{style:{"aspect-ratio":"1.8"}},{default:c(()=>[a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/nest-dev-1.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/nest-dev-2.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/nest-dev-3.png"})]),_:1}),a(b(A),{class:"rounded-md overflow-hidden"},{default:c(()=>[a(i,{src:"/nest-dev-4.png"})]),_:1})]),_:1}),n("div",Tt,[n("div",Dt,[n("div",Nt,[a(i,{id:"projectImage",class:"w-full h-full",src:"/nest-dev-2.png"})]),n("div",Pt,[a(i,{src:"/nest-dev-3.png"})]),n("div",Mt,[a(i,{src:"/nest-dev-1.png"})]),n("div",It,[a(i,{id:"projectImage",src:"/nest-dev-4.png"})])]),n("div",zt,[qt,n("div",Ot,[a(m,{class:"relative z-10",to:"/projects/dashboard-nest"},{default:c(()=>[a(u,{type:"outlined",class:"mt-2"},{default:c(()=>[C(" Ver mas ")]),_:1})]),_:1})])])])]),n("div",Vt,[a(m,{class:"relative z-10",to:"/projects/dashboard-nest"},{default:c(()=>[a(u,{type:"outlined",class:"mt-2"},{default:c(()=>[C(" Ver mas ")]),_:1})]),_:1})]),a(l,{class:"absolute -bottom-10 text-gray-500/5 !text-16xl mt-2 md:!left-40 md:bottom-10",style:{left:"50%",transform:"translateX(-50%) rotateY(180deg)"},name:"projects/dashboard"})])}}}),Ht={id:"Projects",class:"overflow-hidden py-20 2xl:py-40 bg-gray-900 text-white"},Rt=n("h2",{class:"text-center text-3xl md:text-4xl"},[n("span",{class:"text-primaryDark dark:text-primary"}," Proyectos "),n("span",null," Personales ")],-1),Gt={class:"md:!mt-20 grid grid-cols-1 gap-10 max-w-5xl 2xl:max-w-6xl mx-auto"},Jt={__name:"Projects",setup(x){return(e,_)=>{const l=et,i=ft,o=Et,u=Ft;return E(),D("section",Ht,[Rt,n("div",Gt,[a(l),a(i),a(o),a(u)])])}}},Yt=Jt,Xt=""+globalThis.__publicAssetsURL("contact-us.png"),Ut={class:"mt-32 2xl:mt-48 mb-10 2xl:mb-20 overflow-hidden"},Qt={class:"mx-auto max-w-5xl 2xl:max-w-6xl"},Wt={id:"call-to-action",class:"md:mx-7 px-7 py-12 xl:py-16 flex flex-col gap-6 2xl:gap-10 justify-between relative md:rounded-md"},Kt=n("h2",{class:"relative text-white z-10 !text-3xl md:!text-4xl 2xl:!text-5xl"},[C(" ¡Contáctame "),n("br",{class:"sm:hidden"}),C(" hoy mismo! ")],-1),Zt=n("img",{class:"absolute h-40 -right-5 sm:right-2 -z-0 sm:h-48 md:h-52 xl:h-64 2xl:h-72",style:{transform:"translateY(-50%)",top:"50%"},src:Xt,alt:"Contact-us"},null,-1),es=G({__name:"CallToAction",setup(x){return ve(()=>{const e=document.getElementsByClassName("call-to-action-button")[0];setInterval(()=>{e.style.animation="none"},1e3),setInterval(()=>{e.style.animation=" shake 1.5s infinite "},2e3)}),(e,_)=>{const l=R;return E(),D("section",Ut,[n("div",Qt,[n("div",Wt,[Kt,a(l,{onClick:_[0]||(_[0]=i=>("moveScroll"in e?e.moveScroll:b(re))("Contact")),type:"contained",class:"w-fit relativez-10 call-to-action-button md:!text-xl 2xl:!text-2xl"},{default:c(()=>[C("Contáctame")]),_:1}),Zt])])])}}}),ts=[{title:"Frontend",skills:[{title:"Css",icon:"skills/css"},{title:"Html5",icon:"skills/html5"},{title:"Javascript",icon:"skills/javascript"},{title:"React",icon:"skills/react"},{title:"Vue",icon:"skills/vue"},{title:"Next",icon:"skills/nextjs"},{title:"Sass",icon:"skills/sass"},{title:"Redux",icon:"skills/redux"},{title:"Nuxt",icon:"skills/nuxt"},{title:"Vuetify",icon:"skills/vuetify"},{title:"Tailwindcss",icon:"skills/tailwindcss"},{title:"Material UI",icon:"skills/materialui"}]},{title:"Backend",skills:[{title:"TypeScript",icon:"skills/typescript"},{title:"NodeJs",icon:"skills/nodejs"},{title:"NestJs",icon:"skills/nestjs"},{title:"TypeORM",icon:"skills/typeorm"},{title:"PostgreSQL",icon:"skills/postgresql"},{title:"MySQL",icon:"skills/mysql"},{title:"Git",icon:"skills/git"},{title:"ExpressJs",icon:"skills/expressjs"}]}],ss=ts,as={id:"Skills",class:"pt-24 pb-10 max-w-5xl 2xl:max-w-6xl mx-auto 2xl:pt-32 2xl:pb-16"},ns=n("h2",{class:"text-center text-3xl md:text-4xl"},"Habilidades",-1),is={class:"grid grid-cols-1 md:grid-cols-2 px-7"},ls={class:"text-center text-3xl font-bold"},os={class:"mt-10 grid gap-3 grid-cols-3 justify-center sm:px-5"},rs={class:"text-center font-bold mt-2"},ds={class:"col-span-3 flex justify-center"},cs=G({__name:"Skills",setup(x){const e=Q(6),_=Q(6);return Q(8),Q(8),(l,i)=>{const o=U,u=R;return E(),D("section",as,[n("div",null,[ns,n("div",is,[(E(!0),D(ie,null,le(b(ss),m=>(E(),D("div",{class:"mt-16 md:mt-20",key:m.title},[n("h3",ls,W(m.title),1),n("div",os,[(E(!0),D(ie,null,le(m.skills.slice(0,m.title=="Frontend"?b(e):b(_)),v=>(E(),D("div",{class:"mb-5 flex flex-col items-center justify-center",key:v.title},[a(o,{filled:"",class:"!text-6xl dark:grayscale dark:hover:grayscale-0",id:"remove-fill-skills",name:v.icon},null,8,["name"]),n("h4",rs,W(v.title),1)]))),128)),n("div",ds,[m.title=="Frontend"?(E(),K(u,{key:0,onClick:i[0]||(i[0]=v=>b(e)==6?e.value=100:e.value=6)},{default:c(()=>[C(W(b(e)==6?"Ver mas +":"Ver menos -"),1)]),_:1})):oe("",!0),m.title=="Backend"?(E(),K(u,{key:1,onClick:i[1]||(i[1]=v=>b(_)==6?_.value=100:_.value=6)},{default:c(()=>[C(W(b(_)==6?"Ver mas +":"Ver menos -"),1)]),_:1})):oe("",!0)])])]))),128))])])])}}}),ms={},ps={id:"About",class:"py-24 max-w-5xl mx-auto 2xl:max-w-6xl"},us={class:"px-7 mx-auto grid text-justify md:grid-cols-2"},fs=n("h2",{class:"text-center text-3xl font-bold md:text-4xl md:col-span-2"},"Sobre mi",-1),_s=n("p",{class:"mt-12 md:mt-24 md:text-left"}," Soy desarrollador web con mas de 1 año de experiencia, amante nato de la tecnología, la programación y sus avances. Autodidacta de aquellos temas de mi interés y partidario de que el aprendizaje constante es algo necesario. ",-1),hs={class:"flex justify-center my-8 row-span-2 md:mt-16"},gs=n("p",{class:"md:text-left"}," Me encanta afrontar retos en mi carrera que me permitan afinar mis habilidades e inteligencia constantemente. De rápida adaptabilidad a las diversas situaciones y los equipos de trabajo, responsable y con rápida capacidad de respuesta ante los problemas. ",-1);function xs(x,e){const _=ye;return E(),D("section",ps,[n("div",us,[fs,_s,n("div",hs,[a(_,{filled:"",class:"text-16xl md:text-20xl",name:"man"})]),gs])])}const vs=Z(ms,[["render",xs]]),ys={};function bs(x,e){const _=Be,l=Me,i=Yt,o=es,u=cs,m=vs,v=he;return E(),K(v,null,{default:c(()=>[a(_),a(l),a(i),a(o),a(u),a(m)]),_:1})}const Ss=Z(ys,[["render",bs]]);export{Ss as default};
