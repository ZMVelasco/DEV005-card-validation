import validator from "./validator.js";
const cardNumberInput = document.getElementById("card-number");
const cardNameInput = document.getElementById("card-name");
const validateBtn = document.getElementById("btnValidate");
const validCloseBtn = document.getElementById("valid-ok");
const invalidCloseBtn = document.getElementById("no-valid-ok");
const cardNumberDisplay = document.getElementById("card-number-display");
const cardNameDisplay = document.getElementById("card-name-display");
const amexLogo = document.getElementById("amex-logo");
const visaLogo = document.getElementById("visa-logo");
const mastercardLogo = document.getElementById("mastercard-logo");
const discoverLogo = document.getElementById("discover-logo");

//Separates the card number in groups of 4 digits
cardNumberInput.addEventListener("input", function (event) {
  const cardNumber = event.target.value.replace(/\D/g, "");
  const formattedCardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");
  event.target.value = formattedCardNumber.trim();
});

// Function to make sure validate button is only clickable if input was filled
function validateInputs() {
  const cardNumber = cardNumberInput.value;
  const cardName = cardNameInput.value;
  if (cardNumber && cardName) {
    validateBtn.disabled = false;
  } else {
    validateBtn.disabled = true;
  }
}

validateInputs(); //Calling the function so it can validate the data

cardNumberInput.addEventListener("input", validateInputs);
cardNameInput.addEventListener("input", validateInputs); //Listeners

validateBtn.addEventListener("click", function () {
  const number = cardNumberInput.value;
  validator.isValid(number);
  //console.log(validator.maskify(number));
  if (validator.isValid(number)) {
    const maskedNumber = validator.maskify(number);
    cardNumberDisplay.innerHTML = maskedNumber;
    cardNameDisplay.innerHTML = cardNameInput.value;

    //Card franchise check
    if (number.startsWith("34") || number.startsWith("37")) {
      amexLogo.style.display = "block";
      visaLogo.style.display = "none";
      mastercardLogo.style.display = "none";
      discoverLogo.style.display = "none";
    } else if (number.startsWith("4")) {
      amexLogo.style.display = "none";
      visaLogo.style.display = "block";
      mastercardLogo.style.display = "none";
      discoverLogo.style.display = "none";
    } else if (number.startsWith("5")) {
      amexLogo.style.display = "none";
      visaLogo.style.display = "none";
      mastercardLogo.style.display = "block";
      discoverLogo.style.display = "none";
    } else if (number.startsWith("6")) {
      amexLogo.style.display = "none";
      visaLogo.style.display = "none";
      mastercardLogo.style.display = "none";
      discoverLogo.style.display = "block";
    }
    //Clear input boxes once button is clicked
    cardNumberInput.value = "";
    cardNameInput.value = "";

    document.getElementById("modalSuccess").style.display = "block";
    document.getElementById("modalError").style.display = "none";
  } else {
    document.getElementById("modalError").style.display = "block";
    document.getElementById("modalSuccess").style.display = "none";
  }
});

//Closing functionality for modals
validCloseBtn.addEventListener("click", () => {
  document.getElementById("modalSuccess").style.display = "none";
});
invalidCloseBtn.addEventListener("click", () => {
  document.getElementById("modalError").style.display = "none";
});
