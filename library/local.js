const signupLink = document.getElementById("signupLink");
const icon = document.querySelector(".icon__default");
const newIcon = document.querySelector(".profile__name__surname");
const changeLabel = document.getElementById("hisname");
const changeNextLabel = document.getElementById("hiscard");
const cardNumberProfile = document.querySelector(".card__number");
const changeProfile = document.querySelector(".profile__p");
let visitFlag = 0;

function changeIcon() {
  icon.classList.toggle("noVisibility");
  newIcon.classList.toggle("noVisibility");
  LOGIN.innerHTML = "My profile";
  REG.innerHTML = "Log Out";

  REG.classList.add("switcher__last");
  LOGIN.classList.add("switcher");

  NS = localStorage.getItem("NameSurnameData");
  newIcon.setAttribute("title", NS);
  changeLabel.setAttribute("placeholder", NS);
  changeNextLabel.setAttribute("placeholder", cardNumber.textContent);
  visitFlag++;
  visits.innerHTML = visitFlag;
  visitsBot.innerHTML = visitFlag;
}

function changeIconBack() {
  icon.classList.toggle("noVisibility");
  newIcon.classList.toggle("noVisibility");
  LOGIN.innerHTML = "Log In";
  REG.innerHTML = "Register";
  REG.classList.remove("switcher__last");
  LOGIN.classList.remove("switcher");
  changeProfile.innerHTML = "Profile";
  changeProfile.style.fontSize = "15px";

  changeLabel.setAttribute("placeholder", "");
  changeNextLabel.setAttribute("placeholder", "");
}

signupLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  const form = document.querySelector(".requiredFill");
  if (form.checkValidity()) {
    const firstName = document.getElementById("his__name").value;
    const lastName = document.getElementById("his__surname").value;
    const email = document.getElementById("his__mail").value;
    const password = document.getElementById("his__pass").value;

    // Create an object to store the form data
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    const NameSurnameData = `${firstName} ${lastName}`;
    localStorage.setItem("NameSurnameData", NameSurnameData);

    let loginDATA = `${email},${password}`;
    localStorage.setItem("DATA", loginDATA);

    // Convert the form data object to a JSON string
    const formDataJSON = JSON.stringify(formData);

    // Store the JSON string in local storage
    localStorage.setItem("formData", formDataJSON);

    localStorage.setItem("profileNumber", randomHexCardNumber);
    getTheNumber = localStorage.getItem("profileNumber");
    cardNumberProfile.innerHTML = getTheNumber;
    changeProfile.innerHTML = getTheNumber;
    changeProfile.style.fontSize = "12px";
    // Redirect to another page or perform other actions as needed
    // For example, you can use window.location.href to navigate to a new page
    // window.location.href = 'success.html';

    getTheData = localStorage.getItem("formData");
    getNameSurname(getTheData);

    modal.classList.toggle("hidden");
    closeOverlay();
    unlock();
    changeIcon();

    if (formDataJSON.split(",").length === 4) {
      changeBot();
    }
  } else {
    alert("FORM IS NOT VALID!");
  }
});
