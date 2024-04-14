const number1 = 10;
const condition = number1 >= 0;
if (condition) {
  console.log("positiv");
} else {
  console.log("negativ");
}

const num1 = 25;
const num2 = 20;
if (num1 > num2) {
  console.log("num1-num2");
} else {
  console.log("num1*num2");
}

const num3 = 21;
const multiple7 = 7;
const multiple3 = 3;
if (num3 % multiple7 === 0 && num3 % multiple3 === 0) {
  console.log("you win!");
} else {
  console.log("you loose");
}
