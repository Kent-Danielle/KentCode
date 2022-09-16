const navBtn = document.getElementById("nav-btn");
const nav = document.getElementById("nav");

navBtn.addEventListener("click", (e) => {
  e.preventDefault()
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive")
  } else {
    nav.classList.add("responsive")
  }
});
