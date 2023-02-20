const validator = {};

let initialCardNumber = document.getElementById("card-number");
initialCardNumber.addEventListener("input", function (event) {
  let reversedCardNumberArray = event.target.value.split("").reverse();
  console.log(reversedCardNumberArray);

  const doubledDigitsArray = reversedCardNumberArray.map((digit, index) => {
    const doubledDigit = index % 2 === 1 ? digit * 2 : digit;
    return doubledDigit > 9 ? doubledDigit - 9 : doubledDigit;
  });

  console.log(doubledDigitsArray);
});

export default validator;
