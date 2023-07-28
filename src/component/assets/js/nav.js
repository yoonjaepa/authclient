const $navItem = document.querySelectorAll(".gnb-menu__item--link");
const $lnb = document.querySelectorAll(".gnb-menu__lnb");
const $lnbItem = document.querySelectorAll(".gnb-menu__lnb a");
let $lnbHeight = 0;

$navItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    $navItem.forEach((item) => {
      item.classList.remove("active");
      item.closest(".gnb-menu__item").style.height = "46px";
    });
    $lnb.forEach((item) => {
      item.classList.remove("active");
    });

    item.classList.add("active");
    $lnbHeight = $lnb[index].clientHeight;
    item.closest(".gnb-menu__item").style.height = 54 + $lnbHeight + "px";

    // lnb 첫번째 항목 active
    $lnbItem.forEach((item) => {
      item.closest(".gnb-menu__lnb--item").classList.remove("active");
    });
    $lnb[index].childNodes[1].classList.add("active");
  });
});

$lnbItem.forEach((item) => {
  item.addEventListener("click", () => {
    $lnbItem.forEach((item) => {
      item.closest(".gnb-menu__lnb--item").classList.remove("active");
    });
    item.closest(".gnb-menu__lnb--item").classList.add("active");
  });
});
