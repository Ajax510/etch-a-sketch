const container = document.querySelector(".container");

// loop to create the needed divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement("div");
  div.className = "grid-div";

  div.addEventListener("mouseover", () => {
    div.setAttribute("style", "background-color: blue;");
  });

  container.appendChild(div);
}
