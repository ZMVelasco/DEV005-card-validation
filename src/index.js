import validator from "./validator.js";
const cardNumberInput = document.getElementById("cardNumber");

cardNumberInput.addEventListener("input", function (event) {
  const cardNumber = event.target.value.replace(/\D/g, "");
  const formattedCardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");
  event.target.value = formattedCardNumber.trim();
});
console.log(validator);
//q:How do I push the code to github? I have a repository but I don't know how to push the code to it.
