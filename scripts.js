const container = document.querySelector("#container");

const button = document.querySelector(".setSize");
const resetButton = document.querySelector("#resetButton");

// function will get the number of square divs to create and return the number
function getGridSize() {
  let userChoice = prompt(`Please choose a number between 1 - 100.`);
  grid(userChoice);
}

// upon clicking the button, this will initiate the getGridSize function
button.addEventListener("click", getGridSize);

// grid function will take in the number of divs to create
function grid(gridSize) {
  const gridArea = gridSize * gridSize;
  // this will use the number of divs andcreate an equal number of rows and columns
  container.setAttribute(
    "style",
    `display: grid;
    grid-template-columns: repeat(${gridSize}, 50px); 
    grid-template-rows: repeat(${gridSize}, 50px);`
  );

  // this loop will create the number of divs using the number given.
  for (let i = 1; i <= gridArea; i++) {
    // every iteration will create the div needed
    const div = document.createElement("div");

    // give it the class of div so the border can be seen.
    div.classList.add("divs");

    // each div will have an event listener
    div.addEventListener("mouseover", () => {
      // event listener will give each div the class of background\
      div.classList.add("background");
    });

    // will add the div element to the container
    container.appendChild(div);
  }
}

// trying to remove the background class so that the color returns to white
resetButton.addEventListener("click", () => {
  div.classList.remove("background");
});
