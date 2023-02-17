import {addInteractivityToButton} from "../utils/addInteractivityToButton";

document.addEventListener("DOMContentLoaded", () => {
  addInteractivityToButton(
    ".fillingButton--blog-once-page",
    ".fillingButton__svg-circle--blog-once-page",
    ".fillingButton__circle--blog-once-page",
    2,
    22,
    0,
    0,
    true,
    "blackArrow",
    false
  )
})

window.addEventListener("resize", () => {
  addInteractivityToButton(
    ".fillingButton--blog-once-page",
    ".fillingButton__svg-circle--blog-once-page",
    ".fillingButton__circle--blog-once-page",
    2,
    22,
    0,
    0,
    false
  )
})