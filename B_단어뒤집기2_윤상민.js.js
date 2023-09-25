let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

input = input.split("");
const stack = [];

let tmp = "";

let flag = 0;
for (let i = 0; i < input.length; i++) {
  //   if (input[i] === "<") {
  //     flag = 1;
  //   }
  //   if (input[i] === ">") {
  //     flag = 0;
  //   }

  if (input[i] !== ">" && input[i] !== "<") {
    tmp += input[i];
  }
}
