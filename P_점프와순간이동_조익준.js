// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12980?language=javascript

function solution(n) {
  let ans = 0; // 최소 배터리 소진량
  // 역으로 2로 나누어 가면서 나머지 발생하는 경우를 체크
  while (n > 0) {
    // 2로 나누어지면 순간이동 가능 + 1
    if (n % 2 === 0) {
      n = parseInt(n / 2);
    } else {
      // 배터리 소진 + 1
      ans += 1;
      n -= 1;
    }
  }

  return ans;
}
