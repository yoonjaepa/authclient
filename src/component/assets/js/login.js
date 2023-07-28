// 패스워드 보이기 숨기기
const $eyeBtn = document.querySelector(".eye-btn");

$eyeBtn.addEventListener("click", () => {
  if (!$eyeBtn.classList.contains("hidden-btn")) {
    $eyeBtn.previousElementSibling.type = "text";
    $eyeBtn.classList.add("hidden-btn");
  } else {
    $eyeBtn.previousElementSibling.type = "password";
    $eyeBtn.classList.remove("hidden-btn");
  }
});
