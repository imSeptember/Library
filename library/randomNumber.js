function generateRandomHexCardNumber() {
  let result = "";
  const characters = "0123456789ABCDEF";

  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

const randomHexCardNumber = generateRandomHexCardNumber();
