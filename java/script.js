let container = document.querySelector("#container");
let firstDiv = document.createElement("div");
let footer = document.querySelector(".footer");
let changeColourButton = document.getElementById("colorfulGrid");
let isColorChangingEnabled = false;
let resetGrid = document.querySelector("#resetGrid");
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
    grid.addEventListener("mouseover", function () {
      if (isColorChangingEnabled) {
        this.style.opacity = "0.4";
        this.style.backgroundColor = RANDOMCOLORGEN();
      } else {
        this.style.opacity = "0.7";
        this.style.backgroundColor = "black";
      }
    });
    grid.addEventListener("click", function () {
      this.style.opacity = "1";
    });
    container.append(grid);
  }
};

//random color generator function

const RANDOMCOLORGEN = function () {
  let x = Math.floor(Math.random() * 16777215).toString(16);
  final = "#" + x;
  return final;
};

changeColourButton.addEventListener("click", function () {
  isColorChangingEnabled = !isColorChangingEnabled; // Toggle the color changing state
  changeColourButton.textContent = isColorChangingEnabled
    ? "Stop Changing Colors"
    : "Start Changing Colors"; // Change button text
});

//loading default page grid
console.log(RANDOMCOLORGEN());
document.addEventListener("DOMContentLoaded", function () {
  changeDivFunc(128);
  footer.style.position = "fixed";
});
resetGrid.addEventListener("click", function () {
  for (let i = 0; i < container.children.length; i++) {
    container.children[i].style.backgroundColor = "#f0f0f0";
  }
});
