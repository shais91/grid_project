let container = document.querySelector("#container");
let firstDiv = document.createElement("div");
firstDiv.setAttribute("class", "squareDiv");
container.append(firstDiv);

let gridNumber = 255;
let changeDivFunc = function (num) {
  for (let i = 0, grid; i < num; i++) {
    grid = document.createElement("div");
    grid.setAttribute("class", "squareDiv");
    container.append(grid);
  }
};
document.addEventListener("DOMContentLoaded", function () {
  changeDivFunc(gridNumber);
});
