!function(){var e={793:function(){const e=document.querySelectorAll(".answers__contentBottomLeftAccordion");document.addEventListener("DOMContentLoaded",(()=>{e.forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget,i=t.querySelector(".answers__contentBottomLeftAccordionTop"),o=t.querySelector(".answers__contentBottomLeftAccordionBottom");t.classList.toggle("open"),t.classList.contains("open")?(i.setAttribute("aria-expanded",!0),o.setAttribute("aria-hidden",!1),o.style.maxHeight=o.scrollHeight+"px"):(i.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0),o.style.maxHeight=null)}))}))}))},729:function(){window.addEventListener("load",(()=>{document.querySelectorAll(".servisec-list__item").forEach((e=>{const t=e.querySelector(".servisec-list__item-title-span-wrapper"),i=e.querySelector(".servisec-list__item-title span"),o=e.querySelector(".servisec-list__item-title span");t.style.left=i.offsetLeft+i.offsetParent.offsetLeft-4+"px",t.style.top=i.offsetTop+i.offsetParent.offsetTop+"px",t.style.width=o.getBoundingClientRect().width+"px",t.classList.contains("servisec-list__item-title-span-wrapper--wide")&&(t.style.width=o.getBoundingClientRect().width+6+"px"),t.style.height=o.getBoundingClientRect().height+"px",t.classList.contains("servisec-list__item-title-span-wrapper--higher")&&(t.style.height=o.getBoundingClientRect().height+6+"px")}))})),window.addEventListener("resize",(()=>{document.querySelectorAll(".servisec-list__item").forEach((e=>{const t=e.querySelector(".servisec-list__item-title-span-wrapper"),i=e.querySelector(".servisec-list__item-title span"),o=e.querySelector(".servisec-list__item-title span");t.style.left=i.offsetLeft+i.offsetParent.offsetLeft-4+"px",t.style.top=i.offsetTop+i.offsetParent.offsetTop+"px",t.style.width=o.getBoundingClientRect().width+"px",t.classList.contains("servisec-list__item-title-span-wrapper--wide")&&(t.style.width=o.getBoundingClientRect().width+6+"px"),t.style.height=o.getBoundingClientRect().height+"px",t.classList.contains("servisec-list__item-title-span-wrapper--higher")&&(t.style.height=o.getBoundingClientRect().height+6+"px")}))}))},88:function(){const e=document.querySelector("body");console.log();const t=document.querySelector(".burgerMenu__animatedWords_wordToRight"),i=document.querySelector(".burgerMenu__animatedWords_wordToLeft"),o=document.querySelector(".header__burger"),n=document.querySelector(".burgerMenu"),s=document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItem"),r=document.querySelector(".burgerMenu__contentNavigation-rightSide"),a=document.querySelectorAll(".burgerMenu__contentNavigation-rightSideList"),c=document.querySelector(".header__closeBurgerMenuBtn");function l(e,t){e.classList.contains(t)&&e.classList.remove(t)}o.addEventListener("click",(()=>{e.classList.add("hidden"),t.classList.add("burgerMenu__animatedWords_wordToRight--animated"),i.classList.add("burgerMenu__animatedWords_wordToLeft--animated"),n.classList.remove("burgerMenu--closed"),n.classList.add("burgerMenu--visible")})),document.addEventListener("keyup",(o=>{const s=n.classList.contains("burgerMenu--visible");"Escape"===o.key&&s&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),n.classList.remove("burgerMenu--visible"),n.classList.add("burgerMenu--closed"))})),c.addEventListener("click",(o=>{n.classList.contains("burgerMenu--visible")&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),n.classList.remove("burgerMenu--visible"),n.classList.add("burgerMenu--closed"))})),s.forEach((e=>{const t=e.querySelector(".burgerMenu__contentNavigation-leftSideItemImage");/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.addEventListener("click",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{l(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")})):e.addEventListener("mouseenter",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{l(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")}))})),s.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),a.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),s.forEach((e=>{a.forEach((t=>{const i=t.dataset.burgerMenuLink;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?e.addEventListener("click",(e=>{const o=e.currentTarget.dataset.burgerMenuLink;r.classList.add("burgerMenu__contentNavigation-rightSide--visible"),l(t,"burgerMenu__contentNavigation-rightSideList--animated"),o===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")})):e.addEventListener("mouseenter",(e=>{const o=e.target.dataset.burgerMenuLink;r.classList.add("burgerMenu__contentNavigation-rightSide--visible"),l(t,"burgerMenu__contentNavigation-rightSideList--animated"),o===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")}))}))}))},642:function(){window.addEventListener("load",(function(){const e=document.querySelector(".progress-ring__circle"),t=document.querySelector(".progress-circle"),i=document.querySelector(".progress-circle-arrows"),o=document.querySelectorAll(".progress-circle-arrow"),n=Array.from(o),s=document.querySelector(".progress-circle-arrow--salad"),r=document.querySelector(".progress-circle-arrow--black");function a(){n.forEach((e=>{e.classList.contains("progress-circle-arrow--active")&&e.classList.remove("progress-circle-arrow--active"),e.classList.contains("progress-circle-arrow--not-active")&&e.classList.remove("progress-circle-arrow--not-active")}))}const c=e.r.baseVal.value,l=2*Math.PI*c,d=()=>window.scrollY||document.documentElement.scrollTop;function u(){const t=document.documentElement.scrollHeight-window.innerHeight;!function(t){const i=l-t/100*l;e.style.strokeDashoffset=i}(0+100*d()/t)}function f(){d()>=100&&t.classList.add("progress-circle--active"),d()<100&&t.classList.remove("progress-circle--active")}e.style.strokeDasharray=`${l} ${l}`,e.style.strokeDashoffset=`${l} ${l}`,u(),f(),window.addEventListener("scroll",(()=>{u(),f()})),Array.from(o).forEach((e=>{e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})),i.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(()=>{const t=document.querySelector(".intro").offsetTop,i=document.querySelector(".formats").offsetTop,o=document.querySelector(".cycles").offsetTop,n=document.querySelector(".benefits").offsetTop,c=document.querySelector(".costs").offsetTop,l=document.querySelector(".answers").offsetTop,d=document.querySelector(".footer").offsetTop,u=window.innerHeight+window.scrollY-20;u>=t&&(a(),e.style.fill="#fff",s.classList.add("progress-circle-arrow--not-active"),r.classList.add("progress-circle-arrow--active")),u>=i&&(a(),e.style.fill="#1D1D1D",s.classList.add("progress-circle-arrow--active"),r.classList.add("progress-circle-arrow--not-active")),u>=o&&(a(),e.style.fill="#fff",s.classList.add("progress-circle-arrow--not-active"),r.classList.add("progress-circle-arrow--active")),u>=n&&(a(),e.style.fill="#1D1D1D",s.classList.add("progress-circle-arrow--active"),r.classList.add("progress-circle-arrow--not-active")),u>=c&&(a(),e.style.fill="#fff",s.classList.add("progress-circle-arrow--not-active"),r.classList.add("progress-circle-arrow--active")),u>=l&&(a(),e.style.fill="#1D1D1D",s.classList.add("progress-circle-arrow--active"),r.classList.add("progress-circle-arrow--not-active")),innerWidth<=1460&&u>=d&&(a(),e.style.fill="#fff",s.classList.add("progress-circle-arrow--not-active"),r.classList.add("progress-circle-arrow--active"))}))}))},497:function(){window.addEventListener("load",(()=>{!function(){const e=document.querySelector(".footer__blocks");window.innerWidth>1920&&e.classList.add("footer__blocks--between"),window.innerWidth<=2340&&e.classList.remove("footer__blocks--between"),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer__blocks");window.innerWidth>1920&&e.classList.add("footer__blocks--between"),window.innerWidth<=2340&&e.classList.remove("footer__blocks--between")}))}()}))},951:function(){function e(){const e=document.querySelector(".footer");if(window.innerWidth<=600){const e=document.querySelector(".footer__right-side-form");let t;try{t=e.querySelector(".footer__right-side-form-content")}catch{}if(t){const i=e.removeChild(t),o=document.createElement("li");o.className="footer__blocks-item footer__blocks-item--new-item-with-form",o.appendChild(i),document.querySelector(".footer__blocks-item--one").after(o)}e&&e.remove()}if(window.innerWidth>600){const t=document.querySelector(".footer__blocks");let i,o;try{i=t.querySelector(".footer__blocks-item--new-item-with-form"),o=i.querySelector(".footer__right-side-form-content")}catch{}if(o){const t=i.removeChild(o),n=document.createElement("div");n.className="footer__right-side-form",e.append(n),e.querySelector(".footer__right-side-form").appendChild(t),i.remove()}}}window.addEventListener("load",(()=>{e(),window.addEventListener("resize",(()=>{e()}))}))},957:function(){window.addEventListener("load",(function(){const e=document.querySelector(".footer__right-side-form-form-checkbox"),t=document.querySelector(".footer__right-side-form-form-checkbox-custom--active");e.addEventListener("click",(()=>{e.checked||(t.style.opacity=0),e.checked&&(t.style.opacity=1)}))}))},504:function(){window.addEventListener("load",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=`${t}px`,window.innerWidth<=930&&(e.style.marginLeft=0),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=t+"px",window.innerWidth<=930&&(e.style.marginLeft=0)}))}))},253:function(){function e(e){const t=window.scrollY;t>=1&&(e.classList.contains("header--main-transparent")&&e.classList.add("header--main-white"),e.classList.add("header--main--min-padding")),0===t&&(e.classList.contains("header--main-transparent")&&e.classList.remove("header--main-white"),e.classList.remove("header--main--min-padding"))}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".header--main").forEach((t=>{e(t)}))})),window.addEventListener("scroll",(()=>{document.querySelectorAll(".header--main").forEach((t=>{e(t)}))}))},370:function(){document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".header__nav-item-text").forEach((e=>{let t=e.innerText;e.innerHTML="";let i=document.createElement("div");i.classList.add("block");for(let e of t){let t=document.createElement("span");t.innerText=""===e.trim()?" ":e,t.classList.add("letter"),i.appendChild(t)}e.appendChild(i),e.appendChild(i.cloneNode(!0))}))})),window.addEventListener("load",(()=>{document.querySelectorAll(".header__nav-item").forEach((e=>{const t=e.getBoundingClientRect().width;e.style.width=`${t+10}px`}))}))},911:function(){window.addEventListener("load",(()=>{document.querySelectorAll(".cycles__contentBottomItem").forEach((e=>{const t=e.getBoundingClientRect().height;e.querySelector(".cycles__contentBottomItemLeft").style.width=`${t}px`}))})),window.addEventListener("resize",(()=>{document.querySelectorAll(".cycles__contentBottomItem").forEach((e=>{const t=e.getBoundingClientRect().height;e.querySelector(".cycles__contentBottomItemLeft").style.width=`${t}px`}))}))},308:function(){const e=document.querySelector(".formats__contentBottomRightItemsBullets"),t=document.querySelectorAll(".formats__contentBottomRightItem"),i=(document.querySelector(".formats__contentBottomRightItems"),document.querySelectorAll(".formats__contentBottomLeftItem"));i.forEach(((e,t)=>{let i=t+1;e.dataset.itemNumber=i,1===i&&e.classList.add("formats__contentBottomLeftItem--active")})),t.forEach(((t,i)=>{let o=i+1;if(t.dataset.itemNumber=o,1===o&&t.classList.add("formats__contentBottomRightItem--active"),t){const t=document.createElement("div");t.dataset.itemNumber=o,t.classList.add("formats__contentBottomRightItemsBullet"),e.appendChild(t)}}));const o=document.querySelectorAll(".formats__contentBottomRightItemsBullet");i.forEach((e=>{t.forEach((n=>{e.addEventListener("mouseleave",(e=>{i.forEach((e=>{e.classList.remove("formats__contentBottomLeftItem--active")}))})),e.addEventListener("mouseenter",(e=>{const i=e.currentTarget.dataset.itemNumber,s=n.dataset.itemNumber;e.currentTarget.classList.add("formats__contentBottomLeftItem--active"),o.forEach((e=>{const t=e.dataset.itemNumber;i===t&&o.forEach((t=>{t.classList.remove("formats__contentBottomRightItemsBullet--active"),e.classList.add("formats__contentBottomRightItemsBullet--active")}))})),i===s&&t.forEach((e=>{e.classList.remove("formats__contentBottomRightItem--active"),n.classList.add("formats__contentBottomRightItem--active")}))}))}))}))},314:function(){window.addEventListener("load",(function(){document.querySelectorAll(".fillingButton").forEach((e=>{const t=e.querySelector("span"),i=t.getBoundingClientRect().width,o=e.querySelector(".fillingButton__content");t&&t.classList.contains("fillingButton__span--smallMargin")?o&&(o.style.marginLeft=`-${i/2}px`,t.style.marginRight="6px"):t&&t.classList.contains("fillingButton__span--smallMargin-and-partial")?o&&(o.style.marginLeft=`-${i}px`):t&&!t.closest(".fillingButton__content--big")&&o&&(o.style.marginLeft=`-${i+3}px`,t.style.marginRight="6px")}))}))},575:function(){function e(e){try{document.querySelectorAll(e).forEach((e=>{const t=e.offsetHeight,i=function(e){const t=e.getBoundingClientRect(),i=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+i}}(e).top,o=window.innerHeight;let n=o-t/11;t>o&&(n=o-o/11),pageYOffset>i-n&&pageYOffset<i+t?e.classList.add("animated"):e.classList.contains("animationNoRepeat")||e.classList.remove("animated")}))}catch(e){console.log(`ERROR in animationOnScroll function ${e}`)}}document.querySelectorAll(".animationItem"),document.addEventListener("DOMContentLoaded",(()=>{e()})),window.addEventListener("scroll",(()=>{e(".animationItem")}))},801:function(){window.innerWidth>=1100?window.onload=()=>{var e;(e=function(){var e=this;this.defaults={wrapperId:"butter",wrapperDamper:.7,cancelOnTouch:!1},this.validateOptions=function(t){for(var i in t)e.defaults.hasOwnProperty(i)&&Object.defineProperty(e.defaults,i,{value:Object.getOwnPropertyDescriptor(t,i).value})},this.wrapperDamper,this.wrapperId,this.cancelOnTouch,this.wrapper,this.wrapperOffset=0,this.animateId,this.resizing=!1,this.active=!1,this.wrapperHeight,this.bodyHeight}).prototype={init:function(e){e&&this.validateOptions(e),this.active=!0,this.resizing=!1,this.wrapperDamper=this.defaults.wrapperDamper,this.wrapperId=this.defaults.wrapperId,this.cancelOnTouch=this.defaults.cancelOnTouch,this.wrapper=document.getElementById(this.wrapperId),this.wrapper.style.position="fixed",this.wrapper.style.width="100%",this.wrapperHeight=this.wrapper.clientHeight,document.body.style.height=this.wrapperHeight+"px",window.addEventListener("resize",this.resize.bind(this)),this.cancelOnTouch&&window.addEventListener("touchstart",this.cancel.bind(this)),this.wrapperOffset=0,this.animateId=window.requestAnimationFrame(this.animate.bind(this))},wrapperUpdate:function(){var e=null!=document.scrollingElement?document.scrollingElement.scrollTop:document.documentElement.scrollTop||0;this.wrapperOffset+=(e-this.wrapperOffset)*this.wrapperDamper,this.wrapper.style.transform="translate3d(0,"+-this.wrapperOffset.toFixed(2)+"px, 0)"},checkResize:function(){this.wrapperHeight!=this.wrapper.clientHeight&&this.resize()},resize:function(){var e=this;e.resizing||(e.resizing=!0,window.cancelAnimationFrame(e.animateId),window.setTimeout((function(){e.wrapperHeight=e.wrapper.clientHeight,parseInt(document.body.style.height)!=parseInt(e.wrapperHeight)&&(document.body.style.height=e.wrapperHeight+"px"),e.animateId=window.requestAnimationFrame(e.animate.bind(e)),e.resizing=!1}),150))},animate:function(){this.checkResize(),this.wrapperUpdate(),this.animateId=window.requestAnimationFrame(this.animate.bind(this))},cancel:function(){this.active&&(window.cancelAnimationFrame(this.animateId),window.removeEventListener("resize",this.resize),window.removeEventListener("touchstart",this.cancel),this.wrapper.removeAttribute("style"),document.body.removeAttribute("style"),this.active=!1,this.wrapper="",this.wrapperOffset=0,this.resizing=!0,this.animateId="")}},this.butter=(new e).init()}:document.querySelector("#butter").style.position="absolute"},802:function(){const e=document.querySelector("body"),t=document.querySelector(".loader"),i=document.querySelector(".loader-first"),o=document.querySelector(".loader-second");window.addEventListener("load",(()=>{e.classList.remove("hidden"),t.classList.add("loader--hide"),i.classList.add("loader-first--active"),o.classList.add("loader-second--active"),t.addEventListener("animationstart",(()=>{setTimeout((()=>{t.classList.add("loader--none")}),1100)}),{once:!0,useCapture:!1})}))}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,i),s.exports}!function(){"use strict";function e(e,t,i,o,n,s,r,a,c=null,l,[...d]=[],u,f){const m=u,g="bigWhiteFirst",h="blackArrow",p="whiteArrow";let _,w,v,L,y,b,B,S;switch(!0!==f?(_=document.querySelector(e),w=document.querySelector(t),v=document.querySelector(i)):(_=e,w=t,v=i),o){case 0:L=(e,t)=>e.pageX+t;break;case 1:L=(e,t)=>e.pageX-_.offsetLeft+t;break;case 2:L=(e,t)=>e.pageX-_.offsetLeft-_.offsetParent.offsetLeft+t;break;case 3:L=(e,t)=>e.pageX-_.offsetLeft-_.offsetParent.offsetLeft-_.offsetParent.offsetParent.offsetLeft+t}switch(n){case 0:y=(e,t)=>e.pageY+t;break;case 1:y=(e,t)=>e.pageY-_.offsetTop+t;break;case 2:y=(e,t)=>e.pageY-_.offsetTop-_.offsetParent.offsetTop+t;break;case 22:y=(e,t)=>e.pageY-_.offsetTop-_.offsetParent.offsetParent.offsetTop+t;break;case 3:y=(e,t)=>e.pageY-_.offsetTop-_.offsetParent.offsetTop-_.offsetParent.offsetParent.offsetTop+t;break;case 33:y=(e,t)=>e.pageY-_.offsetTop-_.offsetParent.offsetTop-_.offsetParent.offsetParent.offsetTop-window.scrollY+t;break;case 4:y=(e,t)=>e.pageY-_.offsetTop-_.offsetParent.offsetTop-_.offsetParent.offsetParent.offsetTop-_.offsetParent.offsetParent.offsetParent.offsetTop+t}if(l&&(b=_.querySelector(".fillingButton__content span")),u===g){let e,t;0!==d.length?([e,t]=[...d],B=new Image(e,t),B.src="assets/images/utils/arrowForFillingButton--black.svg",S=new Image(e,t),S.src="assets/images/utils/arrowForFillingButton--white.svg"):(B=new Image(20,20),B.src="assets/images/utils/arrowForFillingButton--black.svg",S=new Image(20,20),S.src="assets/images/utils/arrowForFillingButton--white.svg"),u===g&&(E=B,S.classList.add("fillingButton__image--white-visible"),E.classList.add("fillingButton__image--black-hidden")),S.classList.add("fillingButton__image--big","fillingButton__image"),B.classList.add("fillingButton__image--big","fillingButton__image"),_.querySelector(".fillingButton__p").classList.add("fillingButton__p--big");const i=_.querySelector(".fillingButton__imagesWrapper");e&&t?(i.style.width=`${e}px`,i.style.height=`${t}px`):(i.style.width="20px",i.style.height="20px"),i.appendChild(B),i.appendChild(S)}var E;if(a&&!m){let e;if(c===p&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--white.svg"),c===h&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--black.svg"),c!==h&&c!==p&&null!==c){const[t,i]=[...d];e=new Image(t,i),e.src=c}e.classList.add("fillingButton__image"),_.querySelector(".fillingButton__content").appendChild(e)}w.addEventListener("mousemove",(e=>{u===g&&function(e,t){e.classList.remove("fillingButton__image--white-visible"),t.classList.remove("fillingButton__image--black-hidden"),e.classList.add("fillingButton__image--white-hidden"),t.classList.add("fillingButton__image--black-visible")}(S,B),v.style.setProperty("--x",`${L(e,s)}px`),v.style.setProperty("--y",`${y(e,r)}px`),v.classList.add("fillingButton__circle--active"),l&&b.classList.add("fillingButton__p--black")})),w.addEventListener("mouseleave",(()=>{u===g&&function(e,t){e.classList.remove("fillingButton__image--white-hidden"),t.classList.remove("fillingButton__image--black-visible"),e.classList.add("fillingButton__image--white-visible"),t.classList.add("fillingButton__image--black-hidden")}(S,B),v.classList.remove("fillingButton__circle--active"),l&&b.classList.remove("fillingButton__p--black")}))}i(802),i(88),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--burgerMenuAddresses",".fillingButton__svg-circle--burgerMenuAddresses",".fillingButton__circle--burgerMenuAddresses",1,1,0,0,!0,"whiteArrow",!0)})),i(642),i(370),i(253),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--introTop",".fillingButton__svg-circle--introTop",".fillingButton__circle--introTop",3,3,0,0,!0,"whiteArrow",!0),e(".fillingButton--introBottom",".fillingButton__svg-circle--introBottom",".fillingButton__circle--introBottom",2,2,0,0,!0,"whiteArrow",!0),e(".fillingButton--answersQuestions",".fillingButton__svg-circle--answersQuestions",".fillingButton__circle--answersQuestions",2,2,0,0,!0,"blackArrow",!1),document.querySelectorAll(".costs__contentBottomItem").forEach((t=>{e(t.querySelector(".fillingButton--costsItem"),t.querySelector(".fillingButton__svg-circle--costsItem"),t.querySelector(".fillingButton__circle--costsItem"),2,2,0,0,!0,"blackArrow",!1,[],null,!0)}))})),window.addEventListener("resize",(()=>{e(".fillingButton--introTop",".fillingButton__svg-circle--introTop",".fillingButton__circle--introTop",3,3,0,0,!1),e(".fillingButton--introBottom",".fillingButton__svg-circle--introBottom",".fillingButton__circle--introBottom",2,2,0,0,!1),e(".fillingButton--answersQuestions",".fillingButton__svg-circle--answersQuestions",".fillingButton__circle--answersQuestions",2,2,0,0,!0,"blackArrow",!1),document.querySelectorAll(".costs__contentBottomItem").forEach((t=>{e(t.querySelector(".fillingButton--costsItem"),t.querySelector(".fillingButton__svg-circle--costsItem"),t.querySelector(".fillingButton__circle--costsItem"),2,2,0,0,!1,null,!1,[],null,!0)}))})),i(911),i(308),i(729),i(793),i(957),i(497),i(951),i(504),i(314),i(801),i(575)}()}();