const toggleButton = document.querySelectorAll(".toggle-list-button");

console.log(toggleButton);
console.log(toggleButton[0]);
console.log(toggleButton[0].nextSibling);
console.log(toggleButton[0].nextSibling.nextSibling);
console.log(toggleButton[0].nextSibling.nextSibling.nextSibling);
console.log(toggleButton[0].nextSibling.nextSibling.nextSibling.nextSibling);

const listToggleEvent = (toggleList, p) => {
  toggleList.classList.toggle("hidden");
  p.classList.toggle("clicked");
};

toggleButton.forEach((p) => {
  const toggleList = p.nextSibling.nextSibling.nextSibling.nextSibling;
  p.addEventListener("click", () => listToggleEvent(toggleList, p));
});
