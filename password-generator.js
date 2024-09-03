let generator = require("generate-password");

let password = generator.generate({
  length: 21,
  numbers: true,
  uppercase: false,
  symbols: true,
});

console.log(password);
