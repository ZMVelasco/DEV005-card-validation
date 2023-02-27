import validator from "./validator.js";
const cardNumberInput = document.getElementById("card-number");
const cardNameInput = document.getElementById("card-name");
const validateBtn = document.getElementById("btnValidate");
const validCloseBtn = document.getElementById("valid-ok");
const invalidCloseBtn = document.getElementById("no-valid-ok");

//Separates the card number in groups of 4 digits
cardNumberInput.addEventListener("input", function (event) {
  const cardNumber = event.target.value.replace(/\D/g, "");
  const formattedCardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");
  event.target.value = formattedCardNumber.trim();
});

// Enable validate button when both card number and name inputs have non-empty values
function validateInputs() {
  const cardNumber = cardNumberInput.value;
  const cardName = cardNameInput.value;
  if (cardNumber && cardName) {
    validateBtn.disabled = false;
  } else {
    validateBtn.disabled = true;
  }
}

// Disable validate button on page load if either input is empty
validateInputs();

// Enable validate button when both inputs have non-empty values
cardNumberInput.addEventListener("input", validateInputs);
cardNameInput.addEventListener("input", validateInputs);

validateBtn.addEventListener("click", function () {
  const number = cardNumberInput.value;
  validator.isValid(number);
  //console.log(validator.maskify(number));
  if (validator.isValid(number)) {
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
