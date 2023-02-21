const validator = {
  isValid: (creditCardNumber) => {
    const reversedCardNumberArray = creditCardNumber
      .replace(/\s/g, "")
      .split("")
      .reverse();
    //console.log(reversedCardNumberArray);
    //If the number has an odd index, multiply it by 2, return it to the array, pair index numbers returns the same number
    const doubledDigitsArray = reversedCardNumberArray.map((digit, index) => {
      const doubledDigit = index % 2 === 1 ? digit * 2 : digit;
      return doubledDigit > 9 ? doubledDigit - 9 : doubledDigit;
    });
    const digitsOnly = doubledDigitsArray.map(Number); //Makes sure it's only numbers
    //console.log(digitsOnly);
    let sum = 0; //Adds all the array numbers
    for (let i = 0; i < digitsOnly.length; i++) {
      sum += digitsOnly[i];
    }
    //console.log(sum);
    if (sum % 10 === 0) return true;
    else {
      return false;
    }
  },
};

export default validator;
