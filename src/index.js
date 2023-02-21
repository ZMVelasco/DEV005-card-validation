import validator from "./validator.js";
const cardNumberInput = document.getElementById("card-number");
const validateBtn = document.getElementById("btnValidate");

cardNumberInput.addEventListener("input", function (event) {
  const cardNumber = event.target.value.replace(/\D/g, "");
  const formattedCardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");
  event.target.value = formattedCardNumber.trim();
});
console.log(validator);

validateBtn.addEventListener("click", function () {
  const number = cardNumberInput.value;
  validator.isValid(number);
  console.log(validator.isValid(number));
});
