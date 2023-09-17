const PROFILE__MODAL = document.querySelector(".modal_profile_container");
const PROFILE__CLOSE__BTN = document.querySelector(".profile__close");
const COPY__CARD = document.querySelector(".card__copy");

const closePROFILE = function () {
  PROFILE__MODAL.classList.toggle("hidden");
  closeOverlay();
  unlock();
};

const cardNumber = document.querySelector(".card__number");

const copy = function () {
  navigator.clipboard.writeText(cardNumber.textContent);
};

PROFILE__CLOSE__BTN.addEventListener("click", closePROFILE);
COPY__CARD.addEventListener("click", copy);

// BOOK BUY

const bnt__book = document.querySelectorAll(".book__button");
const bookContainer = document.querySelector(".book__buy__container");
const bookCount = document.querySelector(".bookz");
const bookCountBot = document.querySelector(".bookzBot");

const modalLIBRARYCARD = function (event) {
  if (owned === 0) {
    if (LOGIN.classList.contains("switcher")) {
      if (bookContainer.classList.contains("hidden")) {
        bookContainer.classList.toggle("hidden");
        openOverlay();
        lock();
      }
    } else {
      forLOGIN();
      openOverlay();
      lock();
    }
  } else {
    event.target.classList.remove("book__button");
    event.target.classList.add("book__button__brown");
    event.target.innerHTML = "Own";
    event.target.removeEventListener("click", modalLIBRARYCARD);
    bookCount.innerHTML = +bookCount.innerHTML + 1;
    bookCountBot.innerHTML = +bookCount.innerHTML + 1;
    handleButtonClick(event);
  }
};

bnt__book.forEach((element) => {
  element.addEventListener("click", modalLIBRARYCARD);
});

// ADD BOOK NAME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// JavaScript
const profileList = document.querySelector(".profile__box__list");

// Add event listeners to all book buttons
// Event handler function

let bookCountFlag = 0;

function handleButtonClick(event) {
  const bookElement = event.target.closest(".book"); // Find the parent book element
  const typographyElement = bookElement.querySelector(".typography"); // Find the .typography element
  const authorElement = bookElement.querySelector(".author");

  if (typographyElement) {
    const typographyValue = typographyElement.textContent;
    const authorValue = authorElement.textContent;
    let Regex = /By\s*/gi;
    let newAuthorValue = authorValue.replace(Regex, " ");
    const listItem = document.createElement("li");
    listItem.textContent = typographyValue + ", " + newAuthorValue;
    profileList.appendChild(listItem); // Add the new list item to the profile list
  }
  bookCountFlag++;
  if (bookCountFlag > 2) {
    profileList.style.overflow = "auto";
  }
}

// END OF BOOK NAME @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const clsBTN = document.querySelector(".close___btn");

let owned = 0;

const profileClose = function () {
  const formTwo = document.querySelector(".form__book__buy__container");
  if (formTwo.checkValidity()) {
    bookContainer.classList.toggle("hidden");
    closeOverlay();
    unlock();
    owned = 1;
  } else {
    alert("FORM IS NOT VALID!");
  }
};

const profileCloseBTN = function () {
  bookContainer.classList.toggle("hidden");
  closeOverlay();
  unlock();
};

clsBTN.addEventListener("click", profileCloseBTN);

const backetBTN = document.querySelector(".book__button__backet");

backetBTN.addEventListener("click", profileClose);

const cardCheck = document.querySelector(".button_left");

const check = function () {
  let checkName = localStorage.getItem("NameSurnameData");
  let checkCard = localStorage.getItem("profileNumber");

  let changeLabelValue = changeLabel.value;
  let changeNextLabelValue = changeNextLabel.value;

  if (checkName === changeLabelValue && checkCard === changeNextLabelValue) {
    changeLibCard();
    setInterval(() => {
      changeLibCardBack();
    }, 10000);
  }
};

cardCheck.addEventListener("click", check);

//COUNT VISITS

const visits = document.querySelector(".tok");
const visitsBot = document.querySelector(".tokBot");
