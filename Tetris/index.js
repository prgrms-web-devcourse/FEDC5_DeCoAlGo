const $ = document;

const score = $.createElement("div"); //점수
score.id = "score";
score.innerText = 0;

const board = $.createElement("div"); //보드
board.id = "board";

const whole_ul = $.createElement("ul"); //전체를 가지고 있는 ul

$.getElementById("wrapper").appendChild(score);
$.getElementById("wrapper").appendChild(board);
$.getElementById("board").appendChild(whole_ul);

// console.log(whole_ul);

for (let i = 0; i < 20; i++) {
  const li = $.createElement("li"); // 가로 행 한 줄을 가지고 있는 li tag
  const ul = $.createElement("ul"); // 가로 행 한 줄
  for (let j = 0; j < 10; j++) {
    const matrix = $.createElement("li"); //각각 하나의 칸
    ul.prepend(matrix);
  }
  li.prepend(ul);
  whole_ul.prepend(li);
}
