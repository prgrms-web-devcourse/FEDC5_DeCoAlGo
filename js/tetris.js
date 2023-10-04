const playground = document.querySelector(".playground > ul");

for (let i = 0; i < 20; i++) {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  for (let j = 0; j < 10; j++) {
    const cell = document.createElement("li");
    ul.appendChild(cell);
  }
  li.appendChild(ul);
  playground.appendChild(li);
}
