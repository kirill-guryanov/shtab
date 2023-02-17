window.addEventListener("load", () => {
  const toBottomArrow = document.querySelector(".fillingButton--brief-intro");
  const formsTop = document.querySelector(".forms").offsetTop;

  toBottomArrow.addEventListener("click", () => {
    scrollTo(0, formsTop);
  });

  function scrollTo(left, top) {
    const header = document.querySelector(".header--main");
    const headerHeight = header.getBoundingClientRect().height;

    const to = top - headerHeight;

    window.scroll({
      left: left,
      top: to,
      behavior: "smooth",
    });
  }
});
