const $dropdownBtn = document.querySelectorAll(".common-dropdown__btn");
const $dropdownList = document.querySelectorAll(".common-dropdown__list");
const $dropdownListItem = document.querySelectorAll(
  ".common-dropdown__list--item"
);

$dropdownBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (!$dropdownList[index].classList.contains("active")) {
      $dropdownList[index].classList.add("active");
    } else {
      $dropdownList[index].classList.remove("active");
    }
  });
});

$dropdownListItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.closest(".common-dropdown__list").classList.remove("active");
    item.closest(".common-dropdown__list").previousElementSibling.innerText =
      item.innerText;
  });
});
