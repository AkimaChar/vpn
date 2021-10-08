const bm_icon = document.querySelector(".burger_menu__icon");
const bm_body = document.querySelector(".burger_menu__body");

bm_icon.onclick = e => {
  bm_icon.classList.toggle("active");
  bm_body.classList.toggle("active");
  document.querySelector("body").style.overflow = bm_icon.className.includes(
    "active"
  )
    ? "hidden"
    : "auto";
  document.querySelector("html").style.overflow = bm_icon.className.includes(
    "active"
  )
    ? "hidden"
    : "auto";
};
