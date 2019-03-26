const page = document.getElementsByClassName("page")[0];
const menu = document.getElementsByClassName("menu__link");
const section = document.getElementsByClassName("section");

section[0].addEventListener("mouseenter", function(event) {
  let currentId = event.target.id;
  console.log(currentId);

  let currentPage = menu.indexOf(event.target);
  console.log(currentPage);
});