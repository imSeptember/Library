let REGISTERED = document.querySelector(".signupLink");
let initials = document.querySelector(".nameSurname");
let modalBox = document.querySelector(".modal_box");
let modalBotBox = document.querySelector(".modal_bot_box");

FLAG = localStorage.getItem("FLAG");

REGISTERED.addEventListener("click", USER);

function USER() {
  const formTwo = document.querySelector(".requiredFillTwo");
  if (formTwo.checkValidity()) {
    const email = document.getElementById("his__name__login").value;
    const password = document.getElementById("his__pass__login").value;
    let thislData = `${email},${password}`;
    let localData = localStorage.getItem("DATA");
    if (localData === thislData) {
      changeIcon();
      changeBot();
      initials.innerHTML = FLAG;
    }

    modalLog.classList.toggle("hidden");
    closeOverlay();
    unlock();
  } else {
    alert("FORM IS NOT VALID!");
  }
}

let profileImg = document.querySelector(".header__img");

function profileChange() {
  profileImg.style.display = "none";
  modal.classList.toggle("hidden");
  closeOverlay();
  unlock();
}

function getNameSurname(string) {
  let newString = string.split(",");
  let name = newString[0].split(":")[1][1];
  let surname = newString[1].split(":")[1][1];
  result = name + surname;
  initials.innerHTML = result;
  modalBox.innerHTML = result;
  modalBotBox.innerHTML = localStorage.getItem("NameSurnameData");

  localStorage.setItem("FLAG", result);
}

console.log("200 баллов");
