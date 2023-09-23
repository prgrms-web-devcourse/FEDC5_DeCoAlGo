// 입력
let [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.replace('\r', ''));

let answer = 0; // 비슷한 단어 갯수

for (let i = 1; i < n; i++) {
  let word = input[i]; // 체크할 단어
  let firstWord = input[0]; // 첫 번째 단어
  let newWordNum = 0; // 첫 번째 단어에 없는 단어 갯수
  // 두 개 이상 차이 나는 경우 제외
  if (Math.abs(word.length - firstWord.length) > 1) continue;

  for (const a of word) {
    // 첫 번째 단어에 있는 알파펫 제거
    if (firstWord.includes(a)) {
      firstWord = firstWord.replace(a, '');
    } else {
      // 없으면 +1
      newWordNum += 1;
    }
  }
  // 없는 단어 갯수와 남아 있는 단어가 모두 1개 이하
  if (firstWord.length <= 1 && newWordNum <= 1) answer += 1;
}

console.log(answer);
