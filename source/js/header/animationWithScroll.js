document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".header--main");

  headers.forEach((header) => {
    addPaddingsToHeader(header);
  });
});

window.addEventListener("scroll", () => {
  const headers = document.querySelectorAll(".header--main");

  headers.forEach((header) => {
    addPaddingsToHeader(header);
  });
});

function addPaddingsToHeader(hdr) {
  const scrollTop = window.scrollY;

  if (scrollTop >= 1) {
    if (hdr.classList.contains("header--main-transparent")) {
      hdr.classList.add("header--main-white");
    }

    hdr.classList.add("header--main--min-padding");
  }
  if (scrollTop === 0) {
    if (hdr.classList.contains("header--main-transparent")) {
      hdr.classList.remove("header--main-white");
    }
    hdr.classList.remove("header--main--min-padding");
  }
}
