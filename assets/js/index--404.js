!function(){var e={316:function(){window.addEventListener("load",(function(){const e=document.querySelector(".intro404__decoration-circle-with-lines"),t=document.querySelector(".intro404__title"),i=t.offsetTop,n=t.offsetParent.offsetWidth/2,s=e.getBoundingClientRect().width/2;e.style.top=i-40+"px",e.style.left=n-s-120+"px",window.addEventListener("resize",(()=>{const i=t.offsetTop,n=t.offsetParent.offsetWidth/2,s=e.getBoundingClientRect().width/2;e.style.top=i-40+"px",e.style.left=n-s-120+"px"}))}))},963:function(){function e(){const e=document.querySelector(".footer"),t=e.offsetTop,i=e.getBoundingClientRect().height,n=document.querySelector(".container--header"),s=n.getBoundingClientRect().width,r=n.getBoundingClientRect().left,o=s-260,a=document.querySelector(".decoration-lines"),l=document.querySelectorAll(".decoration-line");a.style.width=`${o}px`,a.style.height=`${t+i}px`,a.style.left=`${r+130}px`,l.forEach((e=>{e.style.height=`${t+i}px`}))}window.addEventListener("load",(function(){e(),window.addEventListener("resize",(()=>{e()}))}))},88:function(){const e=document.querySelector("body");console.log();const t=document.querySelector(".burgerMenu__animatedWords_wordToRight"),i=document.querySelector(".burgerMenu__animatedWords_wordToLeft"),n=document.querySelector(".header__burger"),s=document.querySelector(".burgerMenu"),r=document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItem"),o=document.querySelector(".burgerMenu__contentNavigation-rightSide"),a=document.querySelectorAll(".burgerMenu__contentNavigation-rightSideList"),l=document.querySelector(".header__closeBurgerMenuBtn");function d(e,t){e.classList.contains(t)&&e.classList.remove(t)}n.addEventListener("click",(()=>{e.classList.add("hidden"),t.classList.add("burgerMenu__animatedWords_wordToRight--animated"),i.classList.add("burgerMenu__animatedWords_wordToLeft--animated"),s.classList.remove("burgerMenu--closed"),s.classList.add("burgerMenu--visible")})),document.addEventListener("keyup",(n=>{const r=s.classList.contains("burgerMenu--visible");"Escape"===n.key&&r&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),s.classList.remove("burgerMenu--visible"),s.classList.add("burgerMenu--closed"))})),l.addEventListener("click",(n=>{s.classList.contains("burgerMenu--visible")&&(e.classList.remove("hidden"),t.classList.remove("burgerMenu__animatedWords_wordToRight--animated"),i.classList.remove("burgerMenu__animatedWords_wordToLeft--animated"),s.classList.remove("burgerMenu--visible"),s.classList.add("burgerMenu--closed"))})),r.forEach((e=>{const t=e.querySelector(".burgerMenu__contentNavigation-leftSideItemImage");e.addEventListener("mouseenter",(()=>{document.querySelectorAll(".burgerMenu__contentNavigation-leftSideItemImage").forEach((e=>{d(e,"burgerMenu__contentNavigation-leftSideItemImage--visible")})),t.classList.add("burgerMenu__contentNavigation-leftSideItemImage--visible")}))})),r.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),a.forEach(((e,t)=>{e.dataset.burgerMenuLink=t})),r.forEach((e=>{a.forEach((t=>{const i=t.dataset.burgerMenuLink;e.addEventListener("mouseenter",(e=>{const n=e.target.dataset.burgerMenuLink;o.classList.add("burgerMenu__contentNavigation-rightSide--visible"),d(t,"burgerMenu__contentNavigation-rightSideList--animated"),n===i&&t.classList.add("burgerMenu__contentNavigation-rightSideList--animated")}))}))}))},957:function(){window.addEventListener("load",(function(){const e=document.querySelector(".footer__right-side-form-form-checkbox"),t=document.querySelector(".footer__right-side-form-form-checkbox-custom--active");e.addEventListener("click",(()=>{e.checked||(t.style.opacity=0),e.checked&&(t.style.opacity=1)}))}))},504:function(){window.addEventListener("load",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=`${t}px`,window.innerWidth<=930&&(e.style.marginLeft=0),window.addEventListener("resize",(()=>{const e=document.querySelector(".footer__left-side-rights"),t=document.querySelector(".footer__blocks-item--one").getBoundingClientRect().left;e.style.marginLeft=t+"px",window.innerWidth<=930&&(e.style.marginLeft=0)}))}))},253:function(){function e(e){const t=window.scrollY;t>=1&&(e.classList.contains("header--main-transparent")&&e.classList.add("header--main-white"),e.classList.add("header--main--min-padding")),0===t&&(e.classList.contains("header--main-transparent")&&e.classList.remove("header--main-white"),e.classList.remove("header--main--min-padding"))}document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".header--main").forEach((t=>{e(t)}))})),window.addEventListener("scroll",(()=>{document.querySelectorAll(".header--main").forEach((t=>{e(t)}))}))},370:function(){document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".header__nav-item-text").forEach((e=>{let t=e.innerText;e.innerHTML="";let i=document.createElement("div");i.classList.add("block");for(let e of t){let t=document.createElement("span");t.innerText=""===e.trim()?" ":e,t.classList.add("letter"),i.appendChild(t)}e.appendChild(i),e.appendChild(i.cloneNode(!0))}))})),window.addEventListener("load",(()=>{document.querySelectorAll(".header__nav-item").forEach((e=>{const t=e.getBoundingClientRect().width;e.style.width=`${t+10}px`}))}))},314:function(){window.addEventListener("load",(function(){document.querySelectorAll(".fillingButton").forEach((e=>{const t=e.querySelector("span"),i=t.getBoundingClientRect().width,n=e.querySelector(".fillingButton__content");t&&t.classList.contains("fillingButton__span--smallMargin")?n&&(n.style.marginLeft=`-${i/2}px`,t.style.marginRight="6px"):t&&t.classList.contains("fillingButton__span--smallMargin-and-partial")?n&&(n.style.marginLeft=`-${i}px`):t&&!t.closest(".fillingButton__content--big")&&n&&(n.style.marginLeft=`-${i+3}px`,t.style.marginRight="6px")}))}))},801:function(){window.innerWidth>=1100?window.onload=()=>{var e;(e=function(){var e=this;this.defaults={wrapperId:"butter",wrapperDamper:.7,cancelOnTouch:!1},this.validateOptions=function(t){for(var i in t)e.defaults.hasOwnProperty(i)&&Object.defineProperty(e.defaults,i,{value:Object.getOwnPropertyDescriptor(t,i).value})},this.wrapperDamper,this.wrapperId,this.cancelOnTouch,this.wrapper,this.wrapperOffset=0,this.animateId,this.resizing=!1,this.active=!1,this.wrapperHeight,this.bodyHeight}).prototype={init:function(e){e&&this.validateOptions(e),this.active=!0,this.resizing=!1,this.wrapperDamper=this.defaults.wrapperDamper,this.wrapperId=this.defaults.wrapperId,this.cancelOnTouch=this.defaults.cancelOnTouch,this.wrapper=document.getElementById(this.wrapperId),this.wrapper.style.position="fixed",this.wrapper.style.width="100%",this.wrapperHeight=this.wrapper.clientHeight,document.body.style.height=this.wrapperHeight+"px",window.addEventListener("resize",this.resize.bind(this)),this.cancelOnTouch&&window.addEventListener("touchstart",this.cancel.bind(this)),this.wrapperOffset=0,this.animateId=window.requestAnimationFrame(this.animate.bind(this))},wrapperUpdate:function(){var e=null!=document.scrollingElement?document.scrollingElement.scrollTop:document.documentElement.scrollTop||0;this.wrapperOffset+=(e-this.wrapperOffset)*this.wrapperDamper,this.wrapper.style.transform="translate3d(0,"+-this.wrapperOffset.toFixed(2)+"px, 0)"},checkResize:function(){this.wrapperHeight!=this.wrapper.clientHeight&&this.resize()},resize:function(){var e=this;e.resizing||(e.resizing=!0,window.cancelAnimationFrame(e.animateId),window.setTimeout((function(){e.wrapperHeight=e.wrapper.clientHeight,parseInt(document.body.style.height)!=parseInt(e.wrapperHeight)&&(document.body.style.height=e.wrapperHeight+"px"),e.animateId=window.requestAnimationFrame(e.animate.bind(e)),e.resizing=!1}),150))},animate:function(){this.checkResize(),this.wrapperUpdate(),this.animateId=window.requestAnimationFrame(this.animate.bind(this))},cancel:function(){this.active&&(window.cancelAnimationFrame(this.animateId),window.removeEventListener("resize",this.resize),window.removeEventListener("touchstart",this.cancel),this.wrapper.removeAttribute("style"),document.body.removeAttribute("style"),this.active=!1,this.wrapper="",this.wrapperOffset=0,this.resizing=!0,this.animateId="")}},this.butter=(new e).init()}:document.querySelector("#butter").style.position="absolute"},802:function(){const e=document.querySelector("body"),t=document.querySelector(".loader"),i=document.querySelector(".loader-first"),n=document.querySelector(".loader-second");window.addEventListener("load",(()=>{e.classList.remove("hidden"),t.classList.add("loader--hide"),i.classList.add("loader-first--active"),n.classList.add("loader-second--active"),t.addEventListener("animationstart",(()=>{setTimeout((()=>{t.classList.add("loader--none")}),1100)}),{once:!0,useCapture:!1})}))}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,i),r.exports}!function(){"use strict";function e(e,t,i,n,s,r,o,a,l=null,d,[...c]=[],u,f){const g=u,m="bigWhiteFirst",h="blackArrow",p="whiteArrow";let w,_,L,v,b,y,B,S;switch(!0!==f?(w=document.querySelector(e),_=document.querySelector(t),L=document.querySelector(i)):(w=e,_=t,L=i),n){case 1:v=(e,t)=>e.pageX-w.offsetLeft+t;break;case 2:v=(e,t)=>e.pageX-w.offsetLeft-w.offsetParent.offsetLeft+t;break;case 3:v=(e,t)=>e.pageX-w.offsetLeft-w.offsetParent.offsetLeft-w.offsetParent.offsetParent.offsetLeft+t}switch(s){case 1:b=(e,t)=>e.pageY-w.offsetTop+t;break;case 2:b=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetTop+t;break;case 22:b=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetParent.offsetTop+t;break;case 3:b=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetTop-w.offsetParent.offsetParent.offsetTop+t;break;case 4:b=(e,t)=>e.pageY-w.offsetTop-w.offsetParent.offsetTop-w.offsetParent.offsetParent.offsetTop-w.offsetParent.offsetParent.offsetParent.offsetTop+t}if(d&&(y=w.querySelector(".fillingButton__content span")),u===m){let e,t;0!==c.length?([e,t]=[...c],B=new Image(e,t),B.src="assets/images/utils/arrowForFillingButton--black.svg",S=new Image(e,t),S.src="assets/images/utils/arrowForFillingButton--white.svg"):(B=new Image(20,20),B.src="assets/images/utils/arrowForFillingButton--black.svg",S=new Image(20,20),S.src="assets/images/utils/arrowForFillingButton--white.svg"),u===m&&(E=B,S.classList.add("fillingButton__image--white-visible"),E.classList.add("fillingButton__image--black-hidden")),S.classList.add("fillingButton__image--big","fillingButton__image"),B.classList.add("fillingButton__image--big","fillingButton__image"),w.querySelector(".fillingButton__p").classList.add("fillingButton__p--big");const i=w.querySelector(".fillingButton__imagesWrapper");e&&t?(i.style.width=`${e}px`,i.style.height=`${t}px`):(i.style.width="20px",i.style.height="20px"),i.appendChild(B),i.appendChild(S)}var E;if(a&&!g){let e;if(l===p&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--white.svg"),l===h&&(e=new Image(15,15),e.src="assets/images/utils/arrowForFillingButton--black.svg"),l!==h&&l!==p&&null!==l){const[t,i]=[...c];e=new Image(t,i),e.src=l}e.classList.add("fillingButton__image"),w.querySelector(".fillingButton__content").appendChild(e)}_.addEventListener("mousemove",(e=>{u===m&&function(e,t){e.classList.remove("fillingButton__image--white-visible"),t.classList.remove("fillingButton__image--black-hidden"),e.classList.add("fillingButton__image--white-hidden"),t.classList.add("fillingButton__image--black-visible")}(S,B),L.style.setProperty("--x",`${v(e,r)}px`),L.style.setProperty("--y",`${b(e,o)}px`),L.classList.add("fillingButton__circle--active"),d&&y.classList.add("fillingButton__p--black")})),_.addEventListener("mouseleave",(()=>{u===m&&function(e,t){e.classList.remove("fillingButton__image--white-hidden"),t.classList.remove("fillingButton__image--black-visible"),e.classList.add("fillingButton__image--white-visible"),t.classList.add("fillingButton__image--black-hidden")}(S,B),L.classList.remove("fillingButton__circle--active"),d&&y.classList.remove("fillingButton__p--black")}))}i(802),i(370),i(253),i(88),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--burgerMenuAddresses",".fillingButton__svg-circle--burgerMenuAddresses",".fillingButton__circle--burgerMenuAddresses",1,1,0,0,!0,"whiteArrow",!0)})),i(316),i(963),document.addEventListener("DOMContentLoaded",(()=>{e(".fillingButton--404",".fillingButton__svg-circle--404",".fillingButton__circle--404",2,22,0,0,!0,"blackArrow",!1)})),window.addEventListener("resize",(()=>{e(".fillingButton--404",".fillingButton__svg-circle--404",".fillingButton__circle--404",2,22,0,0,!1)})),i(504),i(957),i(314),i(801)}()}();