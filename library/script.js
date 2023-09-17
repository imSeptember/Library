const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".nav");

// if (iconMenu) {
iconMenu.addEventListener("click", function (e) {
  document.body.classList.toggle("__lock");
  iconMenu.classList.toggle("__active");
  menuBody.classList.toggle("__active");
  if (!popUp.classList.contains("hidden")) {
    popUp.classList.toggle("hidden");
    closeOverlay();
    unlock();
  }
});

// }

const menuLinks = document.querySelectorAll(".nav__link");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    if (iconMenu.classList.contains("__active")) {
      document.body.classList.remove("__lock");
      iconMenu.classList.remove("__active");
      menuBody.classList.remove("__active");
    }
  }
}

//POP-UP

const profile = document.querySelector(".icon__profile");
const popUp = document.querySelector(".pop-up");
profile.addEventListener("click", () => {
  popUp.classList.toggle("hidden");
  OVERLAY.style.display = "block";
  lock();
  if (iconMenu.classList.contains("__active")) {
    iconMenu.classList.toggle("__active");
    menuBody.classList.toggle("__active");
    document.body.classList.toggle("__lock");
  }
});

// OVERLAY LOGIC

const OVERLAY = document.querySelector(".overlay");

OVERLAY.addEventListener("click", () => {
  if (!popUp.classList.contains("hidden")) {
    popUp.classList.toggle("hidden");
  }
  if (!modal.classList.contains("hidden")) {
    modal.classList.toggle("hidden");
  }
  if (!modalLog.classList.contains("hidden")) {
    modalLog.classList.toggle("hidden");
  }
  if (!PROFILE__MODAL.classList.contains("hidden")) {
    PROFILE__MODAL.classList.toggle("hidden");
  }

  if (!bookContainer.classList.contains("hidden")) {
    bookContainer.classList.toggle("hidden");
  }
  closeOverlay();
  unlock();
});

//MODAL WINDOW CLOSE

const xBtn = document.querySelector(".xButton");
const modal = document.querySelector(".modal");

xBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  closeOverlay();
  unlock();
});

const xBtnLog = document.querySelector(".xButton__log");
const modalLog = document.querySelector(".modal__log");

xBtnLog.addEventListener("click", () => {
  modalLog.classList.toggle("hidden");
  closeOverlay();
  unlock();
});

//MODAL WINDOW OPEN

const REG = document.querySelector(".profile__text__last");
const SIGNUP = document.querySelector(".button_right__first");

const libraryContainerRight = document.querySelector(
  ".library__container__right"
);

const libraryTextRight = document.querySelector(".library__text__right");
const buttonRightDisabled = document.querySelector(".button_right__disabled");

const openProfileBot = function () {
  if (LOGIN.classList.contains("switcher")) {
    PROFILE__MODAL.classList.toggle("hidden");
    openOverlay();
    lock();
  }
};

buttonRightDisabled.addEventListener("click", openProfileBot);

const changeBot = function () {
  libraryContainerRight.innerHTML = "Visit your profile";
  libraryTextRight.innerHTML =
    "With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.";
  SIGNUP.classList.add("hidden");
  botLOGIN.classList.add("hidden");
  buttonRightDisabled.classList.remove("noVisibility");
  changeLibCard();
};

const changeBotBack = function () {
  libraryContainerRight.innerHTML = "Get a reader card";
  libraryTextRight.innerHTML =
    "You will be able to see a reader card after logging into account or you can register a new account";
  SIGNUP.classList.remove("hidden");
  botLOGIN.classList.remove("hidden");
  buttonRightDisabled.classList.add("noVisibility");
  changeLibCardBack();
};

const libraryContainerLeft = document.querySelector(
  ".library__container__left"
);

const modalProfileCentre = document.querySelector(
  ".modal_profile_centre_libCard"
);

const changeLibCard = function () {
  libraryContainerLeft.innerHTML = "Your Library card";
  cardCheck.classList.add("noVisibility");
  modalProfileCentre.classList.remove("noVisibility");
  modalProfileCentre.style.display = "flex";
};

const changeLibCardBack = function () {
  libraryContainerLeft.innerHTML = "Find your Library card";
  cardCheck.classList.remove("noVisibility");
  modalProfileCentre.classList.add("noVisibility");
  modalProfileCentre.style.display = "none";
  changeLabel.setAttribute("placeholder", "Reader's name");
  changeNextLabel.setAttribute("placeholder", "Card number");
};

const forReg = () => {
  if (REG.classList.contains("switcher__last")) {
    changeIconBack();
    changeBotBack();
    // changeLibCardBack();
    unlock();
    closeOverlay();
    popUp.classList.toggle("hidden");
  } else {
    if (!modalLog.classList.contains("hidden")) {
      modalLog.classList.toggle("hidden");
    }
    OVERLAY.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modal.classList.toggle("hidden");
    popUp.classList.toggle("hidden");
    changeBot();
    // changeLibCard();
  }
};

const forLOGIN = () => {
  if (LOGIN.classList.contains("switcher")) {
    popUp.classList.toggle("hidden");
    PROFILE__MODAL.classList.toggle("hidden");
    OVERLAY.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    if (!modal.classList.contains("hidden")) {
      modal.classList.toggle("hidden");
    }
    modalLog.classList.toggle("hidden");
    popUp.classList.toggle("hidden");
    OVERLAY.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    changeProfile.innerHTML = getTheNumber;
    changeProfile.style.fontSize = "12px";
  }
};

REG.addEventListener("click", forReg);

const forSIGNUP = () => {
  modal.classList.toggle("hidden");
  openOverlay();
  lock();
};

SIGNUP.addEventListener("click", forSIGNUP);

// LOGIC

const LOGIN = document.querySelector(".profile__text");
const SIGNUPLOG = document.querySelector(".regInLog");
const LOGMODAL = document.querySelector(".loginModal");

LOGIN.addEventListener("click", forLOGIN);

SIGNUPLOG.addEventListener("click", () => {
  close();
  if (!popUp.classList.contains("hidden")) {
    popUp.classList.toggle("hidden");
  }
});

LOGMODAL.addEventListener("click", () => {
  close();
});

const botLOGIN = document.querySelector(".button_right__second");

const openLOGMODAL = function () {
  modalLog.classList.toggle("hidden");
  openOverlay();
  lock();
};

botLOGIN.addEventListener("click", openLOGMODAL);

// FUNCTIONS

const close = function () {
  modalLog.classList.toggle("hidden");
  modal.classList.toggle("hidden");
};

const openOverlay = function () {
  OVERLAY.style.display = "block";
  OVERLAY.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
};

const closeOverlay = function () {
  OVERLAY.style.display = "none";
  OVERLAY.style.backgroundColor = "";
};

const LOCK = document.querySelector(".locker");

const lock = function () {
  LOCK.style.overflow = "hidden";
};

const unlock = function () {
  LOCK.style.overflow = "";
};
