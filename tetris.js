const board = document.querySelector('.playground > ul');

// 변수
const BOARD_ROWS = 20;
const BOARD_COLS = 10;

init(); // 초기화

// 함수
// 시작 초기화 함수
function init() {
  // 보드에 모든 줄 추가
  for (let i = 0; i < BOARD_ROWS; i++) {
    addNewLine();
  }
}
// 한 줄 추가 함수
function addNewLine() {
  const boardNewLine = document.createElement('li'); // 가로 한줄
  const boardNewLineContainer = document.createElement('ul'); // 가로 한줄 컨테이너
  // 가로 갯수만큼 박스 생성 후 컨테이너에 부착
  for (let j = 0; j < BOARD_COLS; j++) {
    const boardNewBox = document.createElement('li');
    boardNewLineContainer.prepend(boardNewBox);
  }
  // 가로 한줄에 부착
  boardNewLine.prepend(boardNewLineContainer);
  // 최종 보드에 한줄 추가
  board.prepend(boardNewLine);
}
