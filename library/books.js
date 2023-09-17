const winterButton = document.getElementById("Winter");
const springButton = document.getElementById("Spring");
const summerButton = document.getElementById("Summer");
const autumnButton = document.getElementById("Autumn");

const winterList = document.getElementById("tab_01");
const summerList = document.getElementById("tab_02");
const springList = document.getElementById("tab_03");
const autumnList = document.getElementById("tab_04");

let flag = winterList;

winterButton.addEventListener("click", () => {
  flag.classList.remove("visible");
  if (!winterList.classList.contains("visible")) {
    winterList.classList.add("visible");
    flag = winterList;
  }
  toggleVisibility(winterList);
});

springButton.addEventListener("click", () => {
  flag.classList.remove("visible");
  if (!springList.classList.contains("visible")) {
    springList.classList.add("visible");
    flag = springList;
  }
  toggleVisibility(springList);
});

summerButton.addEventListener("click", () => {
  flag.classList.remove("visible");
  if (!summerList.classList.contains("visible")) {
    summerList.classList.add("visible");
    flag = summerList;
  }
  toggleVisibility(summerList);
});

autumnButton.addEventListener("click", () => {
  flag.classList.remove("visible");
  if (!autumnList.classList.contains("visible")) {
    autumnList.classList.add("visible");
  }
  flag = autumnList;
  toggleVisibility(autumnList);
});

function toggleVisibility(newFlag) {
  flag.classList.remove("visible");
  flag.style.opacity = "0";
  newFlag.classList.add("visible");
  setTimeout(() => {
    newFlag.style.opacity = "1";
  }, 100);
  flag = newFlag;
}
