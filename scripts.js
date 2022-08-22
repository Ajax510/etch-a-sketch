const container = document.querySelector("#container");
const button = document.querySelector(".setSize");

function getGridSize() {
  let userChoice = prompt(`Please choose a number between 1 - 100.`);
  userChoice *= userChoice;
  return userChoice;
}

button.addEventListener("click", getGridSize);

let gridSize = getGridSize();
console.log(gridSize);

for (let i = 1; i <= gridSize; i++) {
  const div = document.createElement("div");

  div.classList.add("divs");

  div.addEventListener("mouseover", () => {
    div.classList.add("background");
  });

  container.appendChild(div);
}
