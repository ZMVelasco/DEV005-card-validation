import validator from "./validator.js";
const cardNumberInput = document.getElementById("card-number");

cardNumberInput.addEventListener("input", function (event) {
  const cardNumber = event.target.value.replace(/\D/g, "");
  const choppedCardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");
  event.target.value = choppedCardNumber.trim();
});
console.log(validator);
