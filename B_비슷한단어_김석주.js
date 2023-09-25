const input = require("fs")
  .readFileSync("example.txt") //vscode
  //   .readFileSync("/dev/stdin") //BOJ
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.replace("\r", ""));

const num = input[0];
input.shift();

let answer = 0;
const arr = input[0].split("");

for (let i = 1; i < num; i++) {
  let cnt = 0;
  input[i].split("").forEach((val) => {
    if (!arr.includes(val)) {
      cnt++;
    }
  });
  if (cnt < 1) {
    answer++;
  }
}

console.log(answer);
