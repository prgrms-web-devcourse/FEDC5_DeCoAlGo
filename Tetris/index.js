const $ = document;

const playground = $.querySelector(".playground ul");
console.log(playground);

for (let i = 0; i < 20; i++) {
  const li = $.createElement("li");
  const ul = $.createElement("ul");
  for (let j = 0; j < 10; j++) {
    const matrix = $.createElement("li");
    ul.prepend(matrix);
  }
  li.prepend(ul);
  playground.prepend(li);
}
