let container = document.querySelector("#container");
let firstDiv = document.createElement("div");
let footer = document.querySelector(".footer");
firstDiv.setAttribute("class", "squareDiv");
container.append(firstDiv);

// Change Grid Size using html form element

let changeGridSelection = document.getElementById("gridChangeForm");
changeGridSelection.addEventListener("submit", function (event) {
  event.preventDefault();
  let gridNumber;
  const GRIDSIZE = document.getElementById("gridSize").value;
  if (GRIDSIZE === "8x8") {
    container.style.width = "45%";
    gridNumber = 128;
    changeDivFunc(gridNumber);
    footer.style.position = "fixed";
  } else if (GRIDSIZE === "32x32") {
    container.style.width = "88%";
    gridNumber = 1024;
    changeDivFunc(gridNumber);
    footer.style.position = "relative";
  } else {
    gridNumber = 256;
    container.style.width = "45%";
    changeDivFunc(gridNumber);
    footer.style.position = "relative";
  }

  console.log(`grid size : ${GRIDSIZE}, Grid internal number : ${gridNumber}`);
  return;
});

// Function to change grid size

let changeDivFunc = function (num) {
  // empty the container
  while (container.firstChild) {
    container.firstChild.remove();
  }
  for (let i = 0, grid; i < num; i++) {
    grid = document.createElement("div");
    grid.setAttribute("class", "squareDiv");
    container.append(grid);
  }
};
document.addEventListener("DOMContentLoaded", function () {
  changeDivFunc(256);
});
