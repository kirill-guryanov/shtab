!function(){var e={729:function(){window.addEventListener("load",(()=>{document.querySelectorAll(".servisec-list__item").forEach((e=>{const t=e.querySelector(".servisec-list__item-title-span-wrapper"),i=e.querySelector(".servisec-list__item-title span"),o=e.querySelector(".servisec-list__item-title span");t.style.left=i.offsetLeft+i.offsetParent.offsetLeft-4+"px",t.style.top=i.offsetTop+i.offsetParent.offsetTop+"px",t.style.width=o.getBoundingClientRect().width+"px",t.classList.contains("servisec-list__item-title-span-wrapper--wide")&&(t.style.width=o.getBoundingClientRect().width+6+"px"),t.style.height=o.getBoundingClientRect().height+"px",t.classList.contains("servisec-list__item-title-span-wrapper--higher")&&(t.style.height=o.getBoundingClientRect().height+6+"px")}))})),window.addEventListener("resize",(()=>{document.querySelectorAll(".servisec-list__item").forEach((e=>{const t=e.querySelector(".servisec-list__item-title-span-wrapper"),i=e.querySelector(".servisec-list__item-title span"),o=e.querySelector(".servisec-list__item-title span");t.style.left=i.offsetLeft+i.offsetParent.offsetLeft-4+"px",t.style.top=i.offsetTop+i.offsetParent.offsetTop+"px",t.style.width=o.getBoundingClientRect().width+"px",t.classList.contains("servisec-list__item-title-span-wrapper--wide")&&(t.style.width=o.getBoundingClientRect().width+6+"px"),t.style.height=o.getBoundingClientRect().height+"px",t.classList.contains("servisec-list__item-title-span-wrapper--higher")&&(t.style.height=o.getBoundingClientRect().height+6+"px")}))}))},207:function(){window.addEventListener("load",(function(){const e=document.querySelector(".reviews"),t=document.querySelector(".reviews__splide").offsetTop,i=e.querySelector(".container"),o=i.getBoundingClientRect().width,n=i.getBoundingClientRect().left,r=document.querySelectorAll(".reviews__splide .splide__arrow"),s=Array.from(r),a=document.querySelector(".section__titles--reviews"),l=a.getBoundingClientRect().height,c=a.offsetTop/2;s.forEach((e=>{e.style.left=n+o-90+"px",e.classList.contains("splide__arrow--prev")&&(e.style.left=n+o-90-59+"px"),e.style.top=l+c-t+15+"px",window.innerWidth<=620&&(e.style.top=l+c-t+"px"),window.innerWidth<=530&&(e.style.top=l+c-t+95+"px")})),window.addEventListener("resize",(()=>{const e=document.querySelector(".reviews__splide"),t=document.querySelectorAll(".reviews__splide .splide__arrow"),i=Array.from(t),o=e.offsetTop,n=document.querySelector(".section__titles--reviews"),r=n.getBoundingClientRect().height,s=n.offsetTop/2;i.forEach((e=>{e.style.top=r+s-o+15+"px",window.innerWidth<=620&&(e.style.top=r+s-o+"px"),window.innerWidth<=530&&(e.style.top=r+s-o+95+"px")}))}))}))},88:function(){const e=document.querySelector("body");console.log();const t=document.querySelector(".burgerMenu__animatedWords_wordToRight"),i=document.querySelector(".burgerMenu__animatedWords_wordToLeft"),o=document.querySelector(".header__burger"),n=document.querySelector(".burgerMenu"),r=document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItem"),s=document.querySelector(".burgerMenu__contentNavigation-rightSide"),a=document.querySelectorAll(".burgerMenu__contentNavigation-rightSideList"),l=document.querySelector(".header__closeBurgerMenuBtn");function c(e,t){e.classList.contains(t)&&e.classList.remove(t)}o.addEventListener("click",(()=>{e.classList.add("hidden"),t.classList.add("burgerMenu__animatedWords_wordToRight--animated"),i.classList.add("burgerMenu__animatedWords_wordToLeft--animated"),n.classList.remove("burgerMenu--closed"),n.classList.add("burgerMenu--visible")})),document.addEventListener("keyup",(o=>{const r=n.classList.contains("burgerMenu--visible");"Escape"===o.key&&r&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),n.classList.remove("burgerMenu--visible"),n.classList.add("burgerMenu--closed"))})),l.addEventListener("click",(o=>{n.classList.contains("burgerMenu--visible")&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),n.classList.remove("burgerMenu--visible"),n.classList.add("burgerMenu--closed"))})),r.forEach((e=>{const t=e.querySelector(".burgerMenu__contentNavigation-leftSideItemImage");/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.addEventListener("click",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{c(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")})):e.addEventListener("mouseenter",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{c(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")}))})),r.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),a.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),r.forEach((e=>{a.forEach((t=>{const i=t.dataset.burgerMenuLink;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.addEventListener("click",(e=>{const o=e.currentTarget.dataset.burgerMenuLink;s.classList.add("burgerMenu__contentNavigation-rightSide--visible"),c(t,"burgerMenu__contentNavigation-rightSideList--animated"),o===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")})):e.addEventListener("mouseenter",(e=>{const o=e.target.dataset.burgerMenuLink;s.classList.add("burgerMenu__contentNavigation-rightSide--visible"),c(t,"burgerMenu__contentNavigation-rightSideList--animated"),o===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")}))}))}))},849:function(){window.addEventListener("load",(function(){const e=document.querySelector(".progress-ring__circle"),t=document.querySelector(".progress-circle"),i=document.querySelector(".progress-circle-arrows"),o=document.querySelectorAll(".progress-circle-arrow"),n=Array.from(o),r=document.querySelector(".progress-circle-arrow--salad"),s=document.querySelector(".progress-circle-arrow--black");function a(){n.forEach((e=>{e.classList.contains("progress-circle-arrow--active")&&e.classList.remove("progress-circle-arrow--active"),e.classList.contains("progress-circle-arrow--not-active")&&e.classList.remove("progress-circle-arrow--not-active")}))}const l=e.r.baseVal.value,c=2*Math.PI*l,d=()=>window.scrollY||document.documentElement.scrollTop;function u(){const t=document.documentElement.scrollHeight-window.innerHeight;!function(t){const i=c-t/100*c;e.style.strokeDashoffset=i}(0+100*d()/t)}function f(){d()>=100&&t.classList.add("progress-circle--active"),d()<100&&t.classList.remove("progress-circle--active")}e.style.strokeDasharray=`${c} ${c}`,e.style.strokeDashoffset=`${c} ${c}`,u(),f(),window.addEventListener("scroll",(()=>{u(),f()})),Array.from(o).forEach((e=>{e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})),i.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(()=>{const t=document.querySelector(".intro").offsetTop,i=document.querySelector(".types").offsetTop,o=document.querySelector(".cycles").offsetTop,n=document.querySelector(".reviews").offsetTop,l=document.querySelector(".why").offsetTop,c=document.querySelector(".whatMore").offsetTop,d=document.querySelector(".footer").offsetTop,u=window.innerHeight+window.scrollY-20;u>=t&&(a(),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),s.classList.add("progress-circle-arrow--active")),u>=i&&(a(),e.style.fill="#1D1D1D",r.classList.add("progress-circle-arrow--active"),s.classList.add("progress-circle-arrow--not-active")),u>=o&&(a(),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),s.classList.add("progress-circle-arrow--active")),u>=n&&(a(),e.style.fill="#1D1D1D",r.classList.add("progress-circle-arrow--active"),s.classList.add("progress-circle-arrow--not-active")),u>=l&&(a(),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),s.classList.add("progress-circle-arrow--active")),u>=c&&(a(),e.style.fill="#1D1D1D",r.classList.add("progress-circle-arrow--active"),s.classList.add("progress-circle-arrow--not-active")),innerWidth<=1460&&u>=d&&(a(),e.style.fill="#fff",r.classList.add("progress-circle-arrow--not-active"),s.classList.add("progress-circle-arrow--active"))}))}))},497:function(){window.addEventListener("load",(()=>{!function(){const e=document.querySelector(".footer__blocks");window.innerWidth>1920&&e.classList.add("footer__blocks--between"),window.innerWidth<=2340&&e.classList.remove("footer__blocks--between"),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer__blocks");window.innerWidth>1920&&e.classList.add("footer__blocks--between"),window.innerWidth<=2340&&e.classList.remove("footer__blocks--between")}))}()}))},951:function(){function e(){const e=document.querySelector(".footer");if(window.innerWidth<=600){const e=document.querySelector(".footer__right-side-form");let t;try{t=e.querySelector(".footer__right-side-form-content")}catch{}if(t){const i=e.removeChild(t),o=document.createElement("li");o.className="footer__blocks-item footer__blocks-item--new-item-with-form",o.appendChild(i),document.querySelector(".footer__blocks-item--one").after(o)}e&&e.remove()}if(window.innerWidth>600){const t=document.querySelector(".footer__blocks");let i,o;try{i=t.querySelector(".footer__blocks-item--new-item-with-form"),o=i.querySelector(".footer__right-side-form-content")}catch{}if(o){const t=i.removeChild(o),n=document.createElement("div");n.className="footer__right-side-form",e.append(n),e.querySelector(".footer__right-side-form").appendChild(t),i.remove()}}}window.addEventListener("load",(()=>{e(),window.addEventListener("resize",(()=>{e()}))}))},957:function(){window.addEventListener("load",(function(){const e=document.querySelector(".footer__right-side-form-form-checkbox"),t=document.querySelector(".footer__right-side-form-form-checkbox-custom--active");e.addEventListener("click",(()=>{e.checked||(t.style.opacity=0),e.checked&&(t.style.opacity=1)}))}))},504:function(){window.addEventListener("load",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=`${t}px`,window.innerWidth<=930&&(e.style.marginLeft=0),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=t+"px",window.innerWidth<=930&&(e.style.marginLeft=0)}))}))},253:function(){function e(e){const t=window.scrollY;t>=1&&(e.classList.contains("header--main-transparent")&&e.classList.add("header--main-white"),e.classList.add("header--main--min-padding")),0===t&&(e.classList.contains("header--main-transparent")&&e.classList.remove("header--main-white"),e.classList.remove("header--main--min-padding"))}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".header--main").forEach((t=>{e(t)}))})),window.addEventListener("scroll",(()=>{document.querySelectorAll(".header--main").forEach((t=>{e(t)}))}))},370:function(){document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".header__nav-item-text").forEach((e=>{let t=e.innerText;e.innerHTML="";let i=document.createElement("div");i.classList.add("block");for(let e of t){let t=document.createElement("span");t.innerText=""===e.trim()?" ":e,t.classList.add("letter"),i.appendChild(t)}e.appendChild(i),e.appendChild(i.cloneNode(!0))}))})),window.addEventListener("load",(()=>{document.querySelectorAll(".header__nav-item").forEach((e=>{const t=e.getBoundingClientRect().width;e.style.width=`${t+10}px`}))}))},38:function(){document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".modalTrigger"),t=document.querySelectorAll(".wrapper");e.forEach((e=>{e.addEventListener("click",(()=>{t.forEach((t=>{const i=e.dataset.modal,o=t.dataset.modal;i&&o&&i===o&&(t.classList.add("wrapper--visible"),document.querySelector("body").classList.add("hidden"))}))}))}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".wrapper");e.forEach((t=>{t.addEventListener("click",(i=>{i.target===t&&e.forEach((e=>{e.classList.remove("wrapper--visible"),document.querySelector("body").classList.remove("hidden")}))})),t.querySelector(".modal__contentCross").addEventListener("click",(()=>{t.classList.remove("wrapper--visible"),document.querySelector("body").classList.remove("hidden")}))}))})),document.addEventListener("keyup",(e=>{document.querySelectorAll(".wrapper").forEach((t=>{const i=t.classList.contains("wrapper--visible");"Escape"===e.key&&i&&(t.classList.remove("wrapper--visible"),document.querySelector("body").classList.remove("hidden"))}))}))},911:function(){window.addEventListener("load",(()=>{document.querySelectorAll(".cycles__contentBottomItem").forEach((e=>{const t=e.getBoundingClientRect().height;e.querySelector(".cycles__contentBottomItemLeft").style.width=`${t}px`}))})),window.addEventListener("resize",(()=>{document.querySelectorAll(".cycles__contentBottomItem").forEach((e=>{const t=e.getBoundingClientRect().height;e.querySelector(".cycles__contentBottomItemLeft").style.width=`${t}px`}))}))},721:function(){window.addEventListener("load",(function(){document.querySelector(".reviews__splide"),document.querySelectorAll(".reviews__splide .splide__arrow");const e=document.querySelector(".reviews__splide .splide__arrow--prev"),t=document.querySelector(".reviews__splide .splide__arrow--next"),i=document.querySelector(".reviews"),o=i.querySelector(".reviews__splide-arrow-prev"),n=i.querySelector(".reviews__splide-arrow-next"),r=i.removeChild(o),s=i.removeChild(n);e.appendChild(r),t.appendChild(s),e.firstChild.remove(),t.firstChild.remove()}))},922:function(){window.addEventListener("load",(function(){new Splide(".reviews__splide",{arrows:!0,perMove:1,pagination:!1,focus:"center",breakpoints:{5e3:{perPage:4,gap:16},1460:{perPage:4,gap:50},1350:{gap:20},1200:{perPage:4,gap:20},1180:{perPage:3,gap:60},1060:{gap:20},920:{perPage:2,gap:160},840:{gap:100},765:{gap:30},675:{perPage:1,gap:30},450:{perPage:1,gap:15}}}).mount()}))},898:function(){const e=document.querySelectorAll(".types__contentBottomItem");document.addEventListener("DOMContentLoaded",(()=>{e.forEach((e=>{const t=e.querySelector(".decorationsWrapperBlackText"),i=e.querySelector(".decorationsWrapperBlackImage"),o=t.offsetLeft,n=t.getBoundingClientRect().width;i.style.left=`${o+n+10}px`,window.innerWidth<=900&&(i.style.left=`${o+n+20}px`),window.innerWidth<=350&&(i.style.left=`${o+n+30}px`)}))}))},904:function(){document.querySelector(".listAfterIntro");const e=document.querySelector(".listAfterIntro .container"),t=document.querySelector(".blogLines"),i=(document.querySelectorAll(".blogLine"),e.getBoundingClientRect().width/2+e.getBoundingClientRect().left-t.getBoundingClientRect().width/2);t.style.left=`${i}px`},312:function(){"use strict";const e=document.querySelector(".quizComponent"),t=document.querySelector(".quizComponentQuestions"),i=document.querySelectorAll(".quizComponentQuestion"),o=(document.querySelector(".quizComponentControls"),document.querySelector(".quizComponentControlsLeftButton")),n=document.querySelector(".quizComponentControlsLeftButtonImage"),r=document.querySelector(".quizComponentControlsRightButton"),s=document.querySelector(".quizComponentControlsStagesCurrentStage"),a=document.querySelector(".quizComponentControlsStagesAtAll");let l=0;window.addEventListener("load",(()=>{l=getComputedStyle(o).fontSize;let c,d=1,u=0;const f=e.getBoundingClientRect().width;i.forEach(((t,i)=>{const o=getComputedStyle(e).paddingLeft,n=/\d*/;t.style.width=f-Number(2*o.match(n))+"px",t.style.marginRight=`${Number(2*o.match(n))}px`,t.dataset.slideNumber=i+1,c=t.dataset.slideNumber=i+1})),a.textContent=c,o.dataset.type="next",r.addEventListener("click",(()=>{const i="active"===r.dataset.type,o=d===c;if(i&&d!==c&&c-d!=1)u-=f,t.style.transform=`translateX(${u}px)`,d++,s.innerText=d;else if(i&&c-d==1){let e=0;r.textContent="Завершить",u-=f,t.style.transform=`translateX(${u}px)`,e<1&&(d++,e++),s.innerText=c}o&&e.submit(),console.log(d)})),o.addEventListener("click",(()=>{const e="next"===o.dataset.type,i="prev"===o.dataset.type,a=1!==d;e&&d!==c&&(u-=f,t.style.transform=`translateX(${u}px)`,d++,s.innerText=d),i&&a&&(u+=f,t.style.transform=`translateX(${u}px)`,d--,s.innerText=d),d>1&&(o.dataset.type="prev",r.dataset.type="active",r.classList.remove("quizComponentControlsRightButton--notActive"),o.classList.add("quizComponentControlsLeftButton--prev"),n.classList.add("quizComponentControlsLeftButtonImage--prev"),o.style.fontSize=0),1===d&&(o.style.fontSize=`${l}`,o.dataset.type="next",r.dataset.type="",r.classList.add("quizComponentControlsRightButton--notActive"),n.classList.remove("quizComponentControlsLeftButtonImage--prev"),o.classList.remove("quizComponentControlsLeftButton--prev")),d<c&&(r.textContent="Далее")}))}))},314:function(){window.addEventListener("load",(function(){document.querySelectorAll(".fillingButton").forEach((e=>{const t=e.querySelector("span"),i=t.getBoundingClientRect().width,o=e.querySelector(".fillingButton__content");t&&t.classList.contains("fillingButton__span--smallMargin")?o&&(o.style.marginLeft=`-${i/2}px`,t.style.marginRight="6px"):t&&t.classList.contains("fillingButton__span--smallMargin-and-partial")?o&&(o.style.marginLeft=`-${i}px`):t&&!t.closest(".fillingButton__content--big")&&o&&(o.style.marginLeft=`-${i+3}px`,t.style.marginRight="6px")}))}))},575:function(){function e(e){try{document.querySelectorAll(e).forEach((e=>{const t=e.offsetHeight,i=function(e){const t=e.getBoundingClientRect(),i=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+i}}(e).top,o=window.innerHeight;let n=o-t/11;t>o&&(n=o-o/11),pageYOffset>i-n&&pageYOffset<i+t?e.classList.add("animated"):e.classList.contains("animationNoRepeat")||e.classList.remove("animated")}))}catch(e){console.log(`ERROR in animationOnScroll function ${e}`)}}document.querySelectorAll(".animationItem"),document.addEventListener("DOMContentLoaded",(()=>{e()})),window.addEventListener("scroll",(()=>{e(".animationItem")}))},801:function(){window.innerWidth>=1100?window.onload=()=>{var e;(e=function(){var e=this;this.defaults={wrapperId:"butter",wrapperDamper:.7,cancelOnTouch:!1},this.validateOptions=function(t){for(var i in t)e.defaults.hasOwnProperty(i)&&Object.defineProperty(e.defaults,i,{value:Object.getOwnPropertyDescriptor(t,i).value})},this.wrapperDamper,this.wrapperId,this.cancelOnTouch,this.wrapper,this.wrapperOffset=0,this.animateId,this.resizing=!1,this.active=!1,this.wrapperHeight,this.bodyHeight}).prototype={init:function(e){e&&this.validateOptions(e),this.active=!0,this.resizing=!1,this.wrapperDamper=this.defaults.wrapperDamper,this.wrapperId=this.defaults.wrapperId,this.cancelOnTouch=this.defaults.cancelOnTouch,this.wrapper=document.getElementById(this.wrapperId),this.wrapper.style.position="fixed",this.wrapper.style.width="100%",this.wrapperHeight=this.wrapper.clientHeight,document.body.style.height=this.wrapperHeight+"px",window.addEventListener("resize",this.resize.bind(this)),this.cancelOnTouch&&window.addEventListener("touchstart",this.cancel.bind(this)),this.wrapperOffset=0,this.animateId=window.requestAnimationFrame(this.animate.bind(this))},wrapperUpdate:function(){var e=null!=document.scrollingElement?document.scrollingElement.scrollTop:document.documentElement.scrollTop||0;this.wrapperOffset+=(e-this.wrapperOffset)*this.wrapperDamper,this.wrapper.style.transform="translate3d(0,"+-this.wrapperOffset.toFixed(2)+"px, 0)"},checkResize:function(){this.wrapperHeight!=this.wrapper.clientHeight&&this.resize()},resize:function(){var e=this;e.resizing||(e.resizing=!0,window.cancelAnimationFrame(e.animateId),window.setTimeout((function(){e.wrapperHeight=e.wrapper.clientHeight,parseInt(document.body.style.height)!=parseInt(e.wrapperHeight)&&(document.body.style.height=e.wrapperHeight+"px"),e.animateId=window.requestAnimationFrame(e.animate.bind(e)),e.resizing=!1}),150))},animate:function(){this.checkResize(),this.wrapperUpdate(),this.animateId=window.requestAnimationFrame(this.animate.bind(this))},cancel:function(){this.active&&(window.cancelAnimationFrame(this.animateId),window.removeEventListener("resize",this.resize),window.removeEventListener("touchstart",this.cancel),this.wrapper.removeAttribute("style"),document.body.removeAttribute("style"),this.active=!1,this.wrapper="",this.wrapperOffset=0,this.resizing=!0,this.animateId="")}},this.butter=(new e).init()}:document.querySelector("#butter").style.position="absolute"},802:function(){const e=document.querySelector("body"),t=document.querySelector(".loader"),i=document.querySelector(".loader-first"),o=document.querySelector(".loader-second");window.addEventListener("load",(()=>{e.classList.remove("hidden"),t.classList.add("loader--hide"),i.classList.add("loader-first--active"),o.classList.add("loader-second--active"),t.addEventListener("animationstart",(()=>{setTimeout((()=>{t.classList.add("loader--none")}),1100)}),{once:!0,useCapture:!1})}))}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,i),r.exports}!function(){"use strict";function e(e,t,i,o,n,r,s,a,l=null,c,[...d]=[],u,f){const m=u,p="bigWhiteFirst",g="blackArrow",w="whiteArrow";let h,_,v,y,L,b,S,q;switch(!0!==f?(h=document.querySelector(e),_=document.querySelector(t),v=document.querySelector(i)):(h=e,_=t,v=i),o){case 0:y=(e,t)=>e.pageX+t;break;case 1:y=(e,t)=>e.pageX-h.offsetLeft+t;break;case 2:y=(e,t)=>e.pageX-h.offsetLeft-h.offsetParent.offsetLeft+t;break;case 3:y=(e,t)=>e.pageX-h.offsetLeft-h.offsetParent.offsetLeft-h.offsetParent.offsetParent.offsetLeft+t}switch(n){case 0:L=(e,t)=>e.pageY+t;break;case 1:L=(e,t)=>e.pageY-h.offsetTop+t;break;case 2:L=(e,t)=>e.pageY-h.offsetTop-h.offsetParent.offsetTop+t;break;case 22:L=(e,t)=>e.pageY-h.offsetTop-h.offsetParent.offsetParent.offsetTop+t;break;case 3:L=(e,t)=>e.pageY-h.offsetTop-h.offsetParent.offsetTop-h.offsetParent.offsetParent.offsetTop+t;break;case 33:L=(e,t)=>e.pageY-h.offsetTop-h.offsetParent.offsetTop-h.offsetParent.offsetParent.offsetTop-window.scrollY+t;break;case 4:L=(e,t)=>e.pageY-h.offsetTop-h.offsetParent.offsetTop-h.offsetParent.offsetParent.offsetTop-h.offsetParent.offsetParent.offsetParent.offsetTop+t}if(c&&(b=h.querySelector(".fillingButton__content span")),u===p){let e,t;0!==d.length?([e,t]=[...d],S=new Image(e,t),S.src="assets/images/utils/arrowForFillingButton--black.svg",q=new Image(e,t),q.src="assets/images/utils/arrowForFillingButton--white.svg"):(S=new Image(20,20),S.src="assets/images/utils/arrowForFillingButton--black.svg",q=new Image(20,20),q.src="assets/images/utils/arrowForFillingButton--white.svg"),u===p&&(E=S,q.classList.add("fillingButton__image--white-visible"),E.classList.add("fillingButton__image--black-hidden")),q.classList.add("fillingButton__image--big","fillingButton__image"),S.classList.add("fillingButton__image--big","fillingButton__image"),h.querySelector(".fillingButton__p").classList.add("fillingButton__p--big");const i=h.querySelector(".fillingButton__imagesWrapper");e&&t?(i.style.width=`${e}px`,i.style.height=`${t}px`):(i.style.width="20px",i.style.height="20px"),i.appendChild(S),i.appendChild(q)}var E;if(a&&!m){let e;if(l===w&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--white.svg"),l===g&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--black.svg"),l!==g&&l!==w&&null!==l){const[t,i]=[...d];e=new Image(t,i),e.src=l}e.classList.add("fillingButton__image"),h.querySelector(".fillingButton__content").appendChild(e)}_.addEventListener("mousemove",(e=>{u===p&&function(e,t){e.classList.remove("fillingButton__image--white-visible"),t.classList.remove("fillingButton__image--black-hidden"),e.classList.add("fillingButton__image--white-hidden"),t.classList.add("fillingButton__image--black-visible")}(q,S),v.style.setProperty("--x",`${y(e,r)}px`),v.style.setProperty("--y",`${L(e,s)}px`),v.classList.add("fillingButton__circle--active"),c&&b.classList.add("fillingButton__p--black")})),_.addEventListener("mouseleave",(()=>{u===p&&function(e,t){e.classList.remove("fillingButton__image--white-hidden"),t.classList.remove("fillingButton__image--black-visible"),e.classList.add("fillingButton__image--white-visible"),t.classList.add("fillingButton__image--black-hidden")}(q,S),v.classList.remove("fillingButton__circle--active"),c&&b.classList.remove("fillingButton__p--black")}))}i(802),i(88),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--burgerMenuAddresses",".fillingButton__svg-circle--burgerMenuAddresses",".fillingButton__circle--burgerMenuAddresses",1,1,0,0,!0,"whiteArrow",!0)})),i(849),i(370),i(253),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--introBottom",".fillingButton__svg-circle--introBottom",".fillingButton__circle--introBottom",3,3,0,0,!0,"whiteArrow",!0),e(".fillingButton--types",".fillingButton__svg-circle--types",".fillingButton__circle--types",3,3,0,0,!0,"blackArrow",!1)})),window.addEventListener("resize",(()=>{e(".fillingButton--introBottom",".fillingButton__svg-circle--introBottom",".fillingButton__circle--introBottom",3,3,0,0,!1)})),i(898),i(904),i(312),i(729),i(911),i(957),i(497),i(951),i(504),i(38),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".modal").forEach((t=>{e(t.querySelector(".fillingButton--modal"),t.querySelector(".fillingButton__svg-circle--modal"),t.querySelector(".fillingButton__circle--modal"),3,33,0,0,!0,"whiteArrow",!0,[],null,!0)}))})),window.addEventListener("resize",(()=>{})),i(314),i(801),i(575),i(922),i(207),i(721)}()}();