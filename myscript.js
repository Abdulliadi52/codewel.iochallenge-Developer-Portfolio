const buttons = document.getElementById("btn");
const navBar = document.getElementById("navbar");
const content = document.getElementById("content");

buttons.addEventListener("click", () => {

  buttons.classList.toggle("active");
  navBar.classList.toggle("active");
  content.classList.toggle("active");

});

console.log(content);
