!function(){var e={88:function(){const e=document.querySelector("body");console.log();const t=document.querySelector(".burgerMenu__animatedWords_wordToRight"),i=document.querySelector(".burgerMenu__animatedWords_wordToLeft"),n=document.querySelector(".header__burger"),o=document.querySelector(".burgerMenu"),r=document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItem"),l=document.querySelector(".burgerMenu__contentNavigation-rightSide"),s=document.querySelectorAll(".burgerMenu__contentNavigation-rightSideList"),c=document.querySelector(".header__closeBurgerMenuBtn");function a(e,t){e.classList.contains(t)&&e.classList.remove(t)}n.addEventListener("click",(()=>{e.classList.add("hidden"),t.classList.add("burgerMenu__animatedWords_wordToRight--animated"),i.classList.add("burgerMenu__animatedWords_wordToLeft--animated"),o.classList.remove("burgerMenu--closed"),o.classList.add("burgerMenu--visible")})),document.addEventListener("keyup",(n=>{const r=o.classList.contains("burgerMenu--visible");"Escape"===n.key&&r&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),o.classList.remove("burgerMenu--visible"),o.classList.add("burgerMenu--closed"))})),c.addEventListener("click",(n=>{o.classList.contains("burgerMenu--visible")&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),o.classList.remove("burgerMenu--visible"),o.classList.add("burgerMenu--closed"))})),r.forEach((e=>{const t=e.querySelector(".burgerMenu__contentNavigation-leftSideItemImage");/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.addEventListener("click",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{a(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")})):e.addEventListener("mouseenter",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{a(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")}))})),r.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),s.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),r.forEach((e=>{s.forEach((t=>{const i=t.dataset.burgerMenuLink;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.addEventListener("click",(e=>{const n=e.currentTarget.dataset.burgerMenuLink;l.classList.add("burgerMenu__contentNavigation-rightSide--visible"),a(t,"burgerMenu__contentNavigation-rightSideList--animated"),n===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")})):e.addEventListener("mouseenter",(e=>{const n=e.target.dataset.burgerMenuLink;l.classList.add("burgerMenu__contentNavigation-rightSide--visible"),a(t,"burgerMenu__contentNavigation-rightSideList--animated"),n===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")}))}))}))},770:function(){window.addEventListener("load",(function(){const e=document.querySelector(".progress-ring__circle"),t=document.querySelector(".progress-circle"),i=document.querySelector(".progress-circle-arrows"),n=document.querySelectorAll(".progress-circle-arrow"),o=Array.from(n),r=document.querySelector(".progress-circle-arrow--salad"),l=document.querySelector(".progress-circle-arrow--black");function s(){o.forEach((e=>{e.classList.contains("progress-circle-arrow--active")&&e.classList.remove("progress-circle-arrow--active"),e.classList.contains("progress-circle-arrow--not-active")&&e.classList.remove("progress-circle-arrow--not-active")}))}const c=e.r.baseVal.value,a=2*Math.PI*c,d=()=>window.scrollY||document.documentElement.scrollTop;function u(){const t=document.documentElement.scrollHeight-window.innerHeight;!function(t){const i=a-t/100*a;e.style.strokeDashoffset=i}(0+100*d()/t)}function g(){d()>=100&&t.classList.add("progress-circle--active"),d()<100&&t.classList.remove("progress-circle--active")}e.style.strokeDasharray=`${a} ${a}`,e.style.strokeDashoffset=`${a} ${a}`,u(),g(),window.addEventListener("scroll",(()=>{u(),g()})),Array.from(n).forEach((e=>{e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})),i.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(()=>{let t,i,n,o,c;try{t=document.querySelector(".about-us").offsetTop,i=document.querySelector(".services").offsetTop,n=document.querySelector(".products").offsetTop,o=document.querySelector(".blog").offsetTop,c=document.querySelector(".footer").offsetTop}catch{}const a=window.innerHeight+window.scrollY-20;a>=t&&t&&(s(),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),l.classList.add("progress-circle-arrow--active")),a<t&&t&&(s(),e.style.fill="#1D1D1D",r.classList.add("progress-circle-arrow--active"),l.classList.add("progress-circle-arrow--not-active")),a>=i&&i&&(s(),e.style.fill="#1D1D1D",r.classList.add("progress-circle-arrow--active"),l.classList.add("progress-circle-arrow--not-active")),a>=n&&n&&(s(),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),l.classList.add("progress-circle-arrow--active")),a>=o&&o&&(s(),e.style.fill="#1D1D1D",r.classList.add("progress-circle-arrow--active"),l.classList.add("progress-circle-arrow--not-active")),innerWidth<=1460&&a>=c&&c&&(s(),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),l.classList.add("progress-circle-arrow--active"))}))}))},497:function(){window.addEventListener("load",(()=>{!function(){const e=document.querySelector(".footer__blocks");window.innerWidth>1920&&e.classList.add("footer__blocks--between"),window.innerWidth<=2340&&e.classList.remove("footer__blocks--between"),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer__blocks");window.innerWidth>1920&&e.classList.add("footer__blocks--between"),window.innerWidth<=2340&&e.classList.remove("footer__blocks--between")}))}()}))},951:function(){function e(){const e=document.querySelector(".footer");if(window.innerWidth<=600){const e=document.querySelector(".footer__right-side-form");let t;try{t=e.querySelector(".footer__right-side-form-content")}catch{}if(t){const i=e.removeChild(t),n=document.createElement("li");n.className="footer__blocks-item footer__blocks-item--new-item-with-form",n.appendChild(i),document.querySelector(".footer__blocks-item--one").after(n)}e&&e.remove()}if(window.innerWidth>600){const t=document.querySelector(".footer__blocks");let i,n;try{i=t.querySelector(".footer__blocks-item--new-item-with-form"),n=i.querySelector(".footer__right-side-form-content")}catch{}if(n){const t=i.removeChild(n),o=document.createElement("div");o.className="footer__right-side-form",e.append(o),e.querySelector(".footer__right-side-form").appendChild(t),i.remove()}}}window.addEventListener("load",(()=>{e(),window.addEventListener("resize",(()=>{e()}))}))},957:function(){window.addEventListener("load",(function(){const e=document.querySelector(".footer__right-side-form-form-checkbox"),t=document.querySelector(".footer__right-side-form-form-checkbox-custom--active");e.addEventListener("click",(()=>{e.checked||(t.style.opacity=0),e.checked&&(t.style.opacity=1)}))}))},504:function(){window.addEventListener("load",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=`${t}px`,window.innerWidth<=930&&(e.style.marginLeft=0),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=t+"px",window.innerWidth<=930&&(e.style.marginLeft=0)}))}))},253:function(){function e(e){const t=window.scrollY;t>=1&&(e.classList.contains("header--main-transparent")&&e.classList.add("header--main-white"),e.classList.add("header--main--min-padding")),0===t&&(e.classList.contains("header--main-transparent")&&e.classList.remove("header--main-white"),e.classList.remove("header--main--min-padding"))}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".header--main").forEach((t=>{e(t)}))})),window.addEventListener("scroll",(()=>{document.querySelectorAll(".header--main").forEach((t=>{e(t)}))}))},370:function(){document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".header__nav-item-text").forEach((e=>{let t=e.innerText;e.innerHTML="";let i=document.createElement("div");i.classList.add("block");for(let e of t){let t=document.createElement("span");t.innerText=""===e.trim()?" ":e,t.classList.add("letter"),i.appendChild(t)}e.appendChild(i),e.appendChild(i.cloneNode(!0))}))})),window.addEventListener("load",(()=>{document.querySelectorAll(".header__nav-item").forEach((e=>{const t=e.getBoundingClientRect().width;e.style.width=`${t+10}px`}))}))},737:function(){window.addEventListener("load",(function(){const e=document.querySelector(".about-us"),t=document.querySelector(".about-us__decoration-image--left"),i=document.querySelector(".about-us__decoration-image--right"),n=e.getBoundingClientRect().height,o=t.getBoundingClientRect().height,r=i.getBoundingClientRect().height;t.style.top=(n-o)/2+"px",i.style.top=(n-r)/3.5+"px",window.addEventListener("resize",(()=>{const i=e.getBoundingClientRect().height,n=t.getBoundingClientRect().height;t.style.top=(i-n)/2+"px"})),window.addEventListener("resize",(()=>{const t=e.getBoundingClientRect().height,n=i.getBoundingClientRect().height;i.style.top=(t-2*n)/2+"px"}))}))},542:function(){window.addEventListener("load",(function(){const e=document.querySelector(".about-us__running-line-list-white"),t=document.querySelector(".about-us__running-line-list-salad");for(let e=0;e<8;e++)t.appendChild(t.children[e].cloneNode(!0));for(let t=0;t<8;t++)e.prepend(e.children[t])}))},18:function(){document.querySelector(".blog");const e=document.querySelector(".blog .container"),t=document.querySelector(".blogLines"),i=(document.querySelectorAll(".blogLine"),e.getBoundingClientRect().width/2+e.getBoundingClientRect().left-t.getBoundingClientRect().width/2);t.style.left=`${i}px`},676:function(){function e(){const e=document.querySelector(".intro__content-top-title--for-pagination-calibration"),t=document.querySelector(".intro__content-digital-block--for-pagination-calibration"),i=document.querySelector(".intro__splider--container").querySelector(".splide__pagination"),n=i.getBoundingClientRect().width,o=i.querySelectorAll("li"),r=e.getBoundingClientRect().left,l=e.getBoundingClientRect().top,s=t.getBoundingClientRect().left,c=t.getBoundingClientRect().top,a=t.getBoundingClientRect().width;t.getBoundingClientRect().height,o.forEach(((e,t)=>{e.style.left=r-150+"px",e.style.top=l-30+"px",window.innerWidth<=1640&&(e.style.left=r-50+"px",e.style.top=l-30+"px"),window.innerWidth<=1366&&(e.style.left=r-85+"px",e.style.top=l-50+"px"),window.innerWidth<=1239&&(e.style.left=r-50+"px",e.style.top=l-50+"px"),window.innerWidth<=1024&&(e.style.left=r-35+"px",e.style.top=l-50+"px"),window.innerWidth<=854&&(e.style.left=s+a-n+"px",e.style.top=c-65-2+"px"),window.innerWidth<=620&&(e.style.left=s+a-n+"px",e.style.top=c-15+"px"),window.innerWidth<=480&&(e.style.left=s+a-n+"px",e.style.top=c-13+"px"),window.innerWidth<=390&&(e.style.left=s+a-n+"px",e.style.top=c-51+"px")}))}window.addEventListener("load",(function(){e(),window.addEventListener("resize",(()=>{e()}))}))},355:function(){window.addEventListener("load",(function(){const e=document.querySelector(".intro__arrow-to-bottom-arrow-block"),t=document.querySelector(".about-us").offsetTop;e.addEventListener("click",(()=>{!function(e,t){let i;window.innerWidth>1280&&(i=83),window.innerWidth<=1280&&(i=65),window.innerWidth<=680&&(i=60);const n=t-i;window.scroll({left:0,top:n,behavior:"smooth"})}(0,t)}))}))},255:function(){document.addEventListener("DOMContentLoaded",(function(){const e=new Splide(".intro__splide-string1",{type:"loop",drag:"free",focus:"center",perPage:3,autoScroll:{speed:1},gap:15,pagination:!1,arrows:!1,direction:"ttb",autoWidth:!0,breakpoints:{5e7:{height:950},1300:{perPage:4},960:{perPage:5},620:{direction:"ltr",perPage:2,gap:10,height:200},440:{perPage:2},428:{height:180}}}),t=new Splide(".intro__splide-string2",{type:"loop",drag:"free",focus:"center",perPage:3,autoScroll:{speed:1},gap:15,pagination:!1,arrows:!1,direction:"ttb",autoWidth:!0,breakpoints:{5e7:{height:950},1300:{perPage:4},960:{perPage:5},620:{direction:"ltr",perPage:2,gap:10,height:200},440:{perPage:2},428:{height:180}}}),i=new Splide(".intro__splide-string3",{type:"loop",drag:"free",focus:"center",perPage:3,autoScroll:{speed:1},gap:15,pagination:!1,arrows:!1,direction:"ttb",autoWidth:!0,breakpoints:{5e7:{height:950},1300:{perPage:4},960:{perPage:5},620:{direction:"ltr",perPage:2,gap:10,height:200},440:{perPage:2},428:{height:180}}});e.mount(window.splide.Extensions),t.mount(window.splide.Extensions),i.mount(window.splide.Extensions)}))},163:function(){document.addEventListener("DOMContentLoaded",(function(){new Splide(".intro__splider--container",{perPage:1,type:"loop",focus:"center",arrows:!1,pagination:!0,speed:1e3,interval:6e3,pauseOnHover:!1,pauseOnFocus:!1,breakpoints:{1e6:{direction:"ttb",paginationDirection:"ttb",height:1e3},1070:{direction:"ltr",focus:"center"},854:{paginationDirection:"ltr"},620:{height:null,autoHeight:!0}}}).mount()}))},453:function(){window.addEventListener("load",(function(){const e=document.querySelector(".reviews"),t=document.querySelector(".reviews__decoration-text"),i=document.querySelector(".reviews__decoration-lines"),n=document.querySelector(".products__decoration-lines"),o=e.getBoundingClientRect().height,r=t.getBoundingClientRect().height;t.style.top=(o-r)/2+"px",window.addEventListener("resize",(()=>{const i=e.getBoundingClientRect().height,n=t.getBoundingClientRect().height;t.style.top=(i-n)/2+"px"})),document.addEventListener("DOMContentLoaded",(()=>{n.style.left=i.getBoundingClientRect().left+i.getBoundingClientRect().width-n.getBoundingClientRect().width+"px"}))}))},159:function(){window.addEventListener("load",(function(){const e=document.querySelector(".reviews__splide"),t=document.querySelectorAll(".reviews__splide .splide__arrow"),i=Array.from(t),n=e.offsetTop,o=document.querySelector(".section__titles--reviews"),r=o.getBoundingClientRect().height,l=o.offsetTop/2;i.forEach((e=>{e.style.top=r+l-n+30+"px",window.innerWidth<=620&&(e.style.top=r+l-n+"px"),window.innerWidth<=530&&(e.style.top=r+l-n+115+"px")})),window.addEventListener("resize",(()=>{const e=document.querySelector(".reviews__splide"),t=document.querySelectorAll(".reviews__splide .splide__arrow"),i=Array.from(t),n=e.offsetTop,o=document.querySelector(".section__titles--reviews"),r=o.getBoundingClientRect().height,l=o.offsetTop/2;i.forEach((e=>{e.style.top=r+l-n+30+"px",window.innerWidth<=620&&(e.style.top=r+l-n+"px"),window.innerWidth<=530&&(e.style.top=r+l-n+115+"px")}))}))}))},556:function(){window.addEventListener("load",(function(){document.querySelector(".reviews__splide"),document.querySelectorAll(".reviews__splide .splide__arrow");const e=document.querySelector(".reviews__splide .splide__arrow--prev"),t=document.querySelector(".reviews__splide .splide__arrow--next"),i=document.querySelector(".reviews"),n=i.querySelector(".reviews__splide-arrow-prev"),o=i.querySelector(".reviews__splide-arrow-next"),r=i.removeChild(n),l=i.removeChild(o);e.appendChild(r),t.appendChild(l),e.firstChild.remove(),t.firstChild.remove()}))},280:function(){window.addEventListener("load",(function(){new Splide(".reviews__splide",{arrows:!0,perMove:1,pagination:!1,focus:"center",autoWidth:!0,breakpoints:{5e3:{perPage:4},1460:{perPage:4},1350:{},1200:{perPage:4},1180:{perPage:3}}}).mount()}))},5:function(){window.addEventListener("load",(()=>{document.querySelectorAll(".servisec-list__item").forEach((e=>{const t=e.querySelector(".servisec-list__item-title-span-wrapper"),i=e.querySelector(".servisec-list__item-title span"),n=e.querySelector(".servisec-list__item-title span");t.style.left=i.offsetLeft+i.offsetParent.offsetLeft-2+"px",t.style.top=i.offsetTop+i.offsetParent.offsetTop+"px",t.style.width=n.getBoundingClientRect().width+"px",t.style.height=n.getBoundingClientRect().height/1+"px"}))})),window.addEventListener("resize",(()=>{items.forEach((e=>{const t=e.querySelector(".servisec-list__item-title-span-wrapper"),i=e.querySelector(".servisec-list__item-title span"),n=e.querySelector(".servisec-list__item-title span");t.style.left=i.offsetLeft+i.offsetParent.offsetLeft-2+"px",t.style.top=i.offsetTop+i.offsetParent.offsetTop+"px",t.style.width=n.getBoundingClientRect().width+"px",t.style.height=n.getBoundingClientRect().height/1+"px"}))}))},38:function(){document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".modalTrigger"),t=document.querySelectorAll(".wrapper");e.forEach((e=>{e.addEventListener("click",(()=>{t.forEach((t=>{const i=e.dataset.modal,n=t.dataset.modal;i&&n&&i===n&&(t.classList.add("wrapper--visible"),document.querySelector("body").classList.add("hidden"))}))}))}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".wrapper");e.forEach((t=>{t.addEventListener("click",(i=>{i.target===t&&e.forEach((e=>{e.classList.remove("wrapper--visible"),document.querySelector("body").classList.remove("hidden")}))})),t.querySelector(".modal__contentCross").addEventListener("click",(()=>{t.classList.remove("wrapper--visible"),document.querySelector("body").classList.remove("hidden")}))}))})),document.addEventListener("keyup",(e=>{document.querySelectorAll(".wrapper").forEach((t=>{const i=t.classList.contains("wrapper--visible");"Escape"===e.key&&i&&(t.classList.remove("wrapper--visible"),document.querySelector("body").classList.remove("hidden"))}))}))},314:function(){window.addEventListener("load",(function(){document.querySelectorAll(".fillingButton").forEach((e=>{const t=e.querySelector("span"),i=t.getBoundingClientRect().width,n=e.querySelector(".fillingButton__content");t&&t.classList.contains("fillingButton__span--smallMargin")?n&&(n.style.marginLeft=`-${i/2}px`,t.style.marginRight="6px"):t&&t.classList.contains("fillingButton__span--smallMargin-and-partial")?n&&(n.style.marginLeft=`-${i}px`):t&&!t.closest(".fillingButton__content--big")&&n&&(n.style.marginLeft=`-${i+3}px`,t.style.marginRight="6px")}))}))},575:function(){function e(e){try{document.querySelectorAll(e).forEach((e=>{const t=e.offsetHeight,i=function(e){const t=e.getBoundingClientRect(),i=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+i}}(e).top,n=window.innerHeight;let o=n-t/11;t>n&&(o=n-n/11),pageYOffset>i-o&&pageYOffset<i+t?e.classList.add("animated"):e.classList.contains("animationNoRepeat")||e.classList.remove("animated")}))}catch(e){console.log(`ERROR in animationOnScroll function ${e}`)}}document.querySelectorAll(".animationItem"),document.addEventListener("DOMContentLoaded",(()=>{e()})),window.addEventListener("scroll",(()=>{e(".animationItem")}))},801:function(){window.innerWidth>=1100?window.onload=()=>{var e;(e=function(){var e=this;this.defaults={wrapperId:"butter",wrapperDamper:.7,cancelOnTouch:!1},this.validateOptions=function(t){for(var i in t)e.defaults.hasOwnProperty(i)&&Object.defineProperty(e.defaults,i,{value:Object.getOwnPropertyDescriptor(t,i).value})},this.wrapperDamper,this.wrapperId,this.cancelOnTouch,this.wrapper,this.wrapperOffset=0,this.animateId,this.resizing=!1,this.active=!1,this.wrapperHeight,this.bodyHeight}).prototype={init:function(e){e&&this.validateOptions(e),this.active=!0,this.resizing=!1,this.wrapperDamper=this.defaults.wrapperDamper,this.wrapperId=this.defaults.wrapperId,this.cancelOnTouch=this.defaults.cancelOnTouch,this.wrapper=document.getElementById(this.wrapperId),this.wrapper.style.position="fixed",this.wrapper.style.width="100%",this.wrapperHeight=this.wrapper.clientHeight,document.body.style.height=this.wrapperHeight+"px",window.addEventListener("resize",this.resize.bind(this)),this.cancelOnTouch&&window.addEventListener("touchstart",this.cancel.bind(this)),this.wrapperOffset=0,this.animateId=window.requestAnimationFrame(this.animate.bind(this))},wrapperUpdate:function(){var e=null!=document.scrollingElement?document.scrollingElement.scrollTop:document.documentElement.scrollTop||0;this.wrapperOffset+=(e-this.wrapperOffset)*this.wrapperDamper,this.wrapper.style.transform="translate3d(0,"+-this.wrapperOffset.toFixed(2)+"px, 0)"},checkResize:function(){this.wrapperHeight!=this.wrapper.clientHeight&&this.resize()},resize:function(){var e=this;e.resizing||(e.resizing=!0,window.cancelAnimationFrame(e.animateId),window.setTimeout((function(){e.wrapperHeight=e.wrapper.clientHeight,parseInt(document.body.style.height)!=parseInt(e.wrapperHeight)&&(document.body.style.height=e.wrapperHeight+"px"),e.animateId=window.requestAnimationFrame(e.animate.bind(e)),e.resizing=!1}),150))},animate:function(){this.checkResize(),this.wrapperUpdate(),this.animateId=window.requestAnimationFrame(this.animate.bind(this))},cancel:function(){this.active&&(window.cancelAnimationFrame(this.animateId),window.removeEventListener("resize",this.resize),window.removeEventListener("touchstart",this.cancel),this.wrapper.removeAttribute("style"),document.body.removeAttribute("style"),this.active=!1,this.wrapper="",this.wrapperOffset=0,this.resizing=!0,this.animateId="")}},this.butter=(new e).init()}:document.querySelector("#butter").style.position="absolute"},802:function(){const e=document.querySelector("body"),t=document.querySelector(".loader"),i=document.querySelector(".loader-first"),n=document.querySelector(".loader-second");window.addEventListener("load",(()=>{e.classList.remove("hidden"),t.classList.add("loader--hide"),i.classList.add("loader-first--active"),n.classList.add("loader-second--active"),t.addEventListener("animationstart",(()=>{setTimeout((()=>{t.classList.add("loader--none")}),1100)}),{once:!0,useCapture:!1})}))}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,i),r.exports}!function(){"use strict";function e(e,t,i,n,o,r,l,s,c=null,a,[...d]=[],u,g){const f=u,p="bigWhiteFirst",_="blackArrow",w="whiteArrow";let m,h,v,y,L,b,B,S;switch(!0!==g?(m=document.querySelector(e),h=document.querySelector(t),v=document.querySelector(i)):(m=e,h=t,v=i),n){case 0:y=(e,t)=>e.pageX+t;break;case 1:y=(e,t)=>e.pageX-m.offsetLeft+t;break;case 2:y=(e,t)=>e.pageX-m.offsetLeft-m.offsetParent.offsetLeft+t;break;case 3:y=(e,t)=>e.pageX-m.offsetLeft-m.offsetParent.offsetLeft-m.offsetParent.offsetParent.offsetLeft+t}switch(o){case 0:L=(e,t)=>e.pageY+t;break;case 1:L=(e,t)=>e.pageY-m.offsetTop+t;break;case 2:L=(e,t)=>e.pageY-m.offsetTop-m.offsetParent.offsetTop+t;break;case 22:L=(e,t)=>e.pageY-m.offsetTop-m.offsetParent.offsetParent.offsetTop+t;break;case 3:L=(e,t)=>e.pageY-m.offsetTop-m.offsetParent.offsetTop-m.offsetParent.offsetParent.offsetTop+t;break;case 33:L=(e,t)=>e.pageY-m.offsetTop-m.offsetParent.offsetTop-m.offsetParent.offsetParent.offsetTop-window.scrollY+t;break;case 4:L=(e,t)=>e.pageY-m.offsetTop-m.offsetParent.offsetTop-m.offsetParent.offsetParent.offsetTop-m.offsetParent.offsetParent.offsetParent.offsetTop+t}if(a&&(b=m.querySelector(".fillingButton__content span")),u===p){let e,t;0!==d.length?([e,t]=[...d],B=new Image(e,t),B.src="assets/images/utils/arrowForFillingButton--black.svg",S=new Image(e,t),S.src="assets/images/utils/arrowForFillingButton--white.svg"):(B=new Image(20,20),B.src="assets/images/utils/arrowForFillingButton--black.svg",S=new Image(20,20),S.src="assets/images/utils/arrowForFillingButton--white.svg"),u===p&&(E=B,S.classList.add("fillingButton__image--white-visible"),E.classList.add("fillingButton__image--black-hidden")),S.classList.add("fillingButton__image--big","fillingButton__image"),B.classList.add("fillingButton__image--big","fillingButton__image"),m.querySelector(".fillingButton__p").classList.add("fillingButton__p--big");const i=m.querySelector(".fillingButton__imagesWrapper");e&&t?(i.style.width=`${e}px`,i.style.height=`${t}px`):(i.style.width="20px",i.style.height="20px"),i.appendChild(B),i.appendChild(S)}var E;if(s&&!f){let e;if(c===w&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--white.svg"),c===_&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--black.svg"),c!==_&&c!==w&&null!==c){const[t,i]=[...d];e=new Image(t,i),e.src=c}e.classList.add("fillingButton__image"),m.querySelector(".fillingButton__content").appendChild(e)}h.addEventListener("mousemove",(e=>{u===p&&function(e,t){e.classList.remove("fillingButton__image--white-visible"),t.classList.remove("fillingButton__image--black-hidden"),e.classList.add("fillingButton__image--white-hidden"),t.classList.add("fillingButton__image--black-visible")}(S,B),v.style.setProperty("--x",`${y(e,r)}px`),v.style.setProperty("--y",`${L(e,l)}px`),v.classList.add("fillingButton__circle--active"),a&&b.classList.add("fillingButton__p--black")})),h.addEventListener("mouseleave",(()=>{u===p&&function(e,t){e.classList.remove("fillingButton__image--white-hidden"),t.classList.remove("fillingButton__image--black-visible"),e.classList.add("fillingButton__image--white-visible"),t.classList.add("fillingButton__image--black-hidden")}(S,B),v.classList.remove("fillingButton__circle--active"),a&&b.classList.remove("fillingButton__p--black")}))}i(802),i(88),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--burgerMenuAddresses",".fillingButton__svg-circle--burgerMenuAddresses",".fillingButton__circle--burgerMenuAddresses",1,1,0,0,!0,"whiteArrow",!0)})),i(770),i(370),i(253),i(255),i(163),window.innerWidth>1070&&(e(".fillingButton--intro-1",".fillingButton__svg-circle--intro-1",".fillingButton__circle--intro-1",2,1,0,-65,!0,"blackArrow",!1),e(".fillingButton--intro-2",".fillingButton__svg-circle--intro-2",".fillingButton__circle--intro-2",2,1,0,-65,!0,"blackArrow",!1),e(".fillingButton--intro-3",".fillingButton__svg-circle--intro-3",".fillingButton__circle--intro-3",2,1,0,-65,!0,"blackArrow",!1)),window.innerWidth<=1070?(e(".fillingButton--intro-1",".fillingButton__svg-circle--intro-1",".fillingButton__circle--intro-1",1,1,0,-65,!0,"blackArrow",!1),e(".fillingButton--intro-2",".fillingButton__svg-circle--intro-2",".fillingButton__circle--intro-2",1,1,0,-65,!0,"blackArrow",!1),e(".fillingButton--intro-3",".fillingButton__svg-circle--intro-3",".fillingButton__circle--intro-3",1,1,0,-65,!0,"blackArrow",!1)):window.innerWidth<=620?(e(".fillingButton--intro-1",".fillingButton__svg-circle--intro-1",".fillingButton__circle--intro-1",1,1,0,-10,!0,"blackArrow",!1),e(".fillingButton--intro-2",".fillingButton__svg-circle--intro-2",".fillingButton__circle--intro-2",1,1,0,-10,!0,"blackArrow",!1),e(".fillingButton--intro-3",".fillingButton__svg-circle--intro-3",".fillingButton__circle--intro-3",1,1,0,-10,!0,"blackArrow",!1)):window.innerWidth<=380&&(e(".fillingButton--intro-1",".fillingButton__svg-circle--intro-1",".fillingButton__circle--intro-1",1,1,0,-50,!0,"blackArrow",!1),e(".fillingButton--intro-2",".fillingButton__svg-circle--intro-2",".fillingButton__circle--intro-2",1,1,0,-50,!0,"blackArrow",!1),e(".fillingButton--intro-3",".fillingButton__svg-circle--intro-3",".fillingButton__circle--intro-3",1,1,0,-50,!0,"blackArrow",!1)),window.addEventListener("resize",(()=>{window.innerWidth>1070&&(e(".fillingButton--intro-1",".fillingButton__svg-circle--intro-1",".fillingButton__circle--intro-1",2,1,0,-65,!1),e(".fillingButton--intro-2",".fillingButton__svg-circle--intro-2",".fillingButton__circle--intro-2",2,1,0,-65,!1),e(".fillingButton--intro-3",".fillingButton__svg-circle--intro-3",".fillingButton__circle--intro-3",2,1,0,-65,!1)),window.innerWidth<=1070&&(e(".fillingButton--intro-1",".fillingButton__svg-circle--intro-1",".fillingButton__circle--intro-1",1,1,0,-65,!1),e(".fillingButton--intro-2",".fillingButton__svg-circle--intro-2",".fillingButton__circle--intro-2",1,1,0,-65,!1),e(".fillingButton--intro-3",".fillingButton__svg-circle--intro-3",".fillingButton__circle--intro-3",1,1,0,-65,!1)),window.innerWidth<=620&&(e(".fillingButton--intro-1",".fillingButton__svg-circle--intro-1",".fillingButton__circle--intro-1",1,1,0,-10,!1),e(".fillingButton--intro-2",".fillingButton__svg-circle--intro-2",".fillingButton__circle--intro-2",1,1,0,-10,!1),e(".fillingButton--intro-3",".fillingButton__svg-circle--intro-3",".fillingButton__circle--intro-3",1,1,0,-10,!1)),window.innerWidth<=380&&(e(".fillingButton--intro-1",".fillingButton__svg-circle--intro-1",".fillingButton__circle--intro-1",1,1,0,-50,!1),e(".fillingButton--intro-2",".fillingButton__svg-circle--intro-2",".fillingButton__circle--intro-2",1,1,0,-50,!1),e(".fillingButton--intro-3",".fillingButton__svg-circle--intro-3",".fillingButton__circle--intro-3",1,1,0,-50,!1))})),i(676),i(355),i(737),i(542),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--about-us",".fillingButton__svg-circle--about-us",".fillingButton__circle--about-us",2,22,0,0,!0,"whiteArrow",!0)})),window.addEventListener("resize",(()=>{e(".fillingButton--about-us",".fillingButton__svg-circle--about-us",".fillingButton__circle--about-us",2,22,0,0,!1)})),i(5),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--services-item-1",".fillingButton__svg-circle--services-item-1",".fillingButton__circle--services-item-1",2,3,0,0,!0,"whiteArrow",!0),e(".fillingButton--services-item-2",".fillingButton__svg-circle--services-item-2",".fillingButton__circle--services-item-2",2,3,0,0,!0,"whiteArrow",!0),e(".fillingButton--services-item-3",".fillingButton__svg-circle--services-item-3",".fillingButton__circle--services-item-3",2,3,0,0,!0,"whiteArrow",!0),e(".fillingButton--services-item-4",".fillingButton__svg-circle--services-item-4",".fillingButton__circle--services-item-4",2,3,0,0,!0,"whiteArrow",!0)})),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--products",".fillingButton__svg-circle--products",".fillingButton__circle--products",2,2,0,0,!0,"whiteArrow",!0)})),window.addEventListener("resize",(()=>{e(".fillingButton--products",".fillingButton__svg-circle--products",".fillingButton__circle--products",2,2,0,0,!1)})),i(453),i(280),i(159),i(556),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--blog-top",".fillingButton__svg-circle--blog-top",".fillingButton__circle--blog-top",2,2,0,0,!0,"blackArrow",!1),e(".fillingButton--blog-telegram",".fillingButton__svg-circle--blog-telegram",".fillingButton__circle--blog-telegram",2,2,0,0,!0,"assets/images/header/telegram--transparent.svg",!1,[31,25])})),window.addEventListener("resize",(()=>{e(".fillingButton--blog-top",".fillingButton__svg-circle--blog-top",".fillingButton__circle--blog-top",2,2,0,0,!1),e(".fillingButton--blog-telegram",".fillingButton__svg-circle--blog-telegram",".fillingButton__circle--blog-telegram",2,2,0,0,!1)})),i(18),i(957),i(497),i(951),i(504),i(38),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".modal").forEach((t=>{e(t.querySelector(".fillingButton--modal"),t.querySelector(".fillingButton__svg-circle--modal"),t.querySelector(".fillingButton__circle--modal"),3,33,0,0,!0,"whiteArrow",!0,[],null,!0)}))})),window.addEventListener("resize",(()=>{})),i(314),i(801),i(575)}()}();