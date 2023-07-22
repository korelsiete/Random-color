const fondo = document.querySelector("#bgRandom");
const btnChange = document.querySelector("#btnChange");
const btnSave = document.querySelector("#saveColor");
const newHex = document.querySelector("#newHex");
const colorContainer = document.querySelector("#colorsSaved");

let randomHex = "#FBFAF0";
let colorLetter = "#000";
const saveColors = [];

function randomColorHex() {
  const conjunto = "0123456789ABCDEF";
  let random = "#";
  for (let i = 0; i < 6; i++) {
    random += conjunto[Math.floor(Math.random() * conjunto.length)];
  }
  return random;
}
function colorContrast(color) {
  const arrayColor = color.toUpperCase().split("");
  if (arrayColor.includes("#")) arrayColor.shift();

  let Hex = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
  let [x, , y, , z] = arrayColor;

  let clarity = (Hex[x] || x * 1) + (Hex[y] || y * 1) + (Hex[z] || z * 1);
  return clarity > 22 ? "#000" : "#FFF";
}

btnChange.addEventListener("click", () => {
  randomHex = randomColorHex();
  colorLetter = colorContrast(randomHex);
  fondo.setAttribute("style", `background-color: ${randomHex}`);
  newHex.textContent = randomHex;
  console.log(randomHex);
  console.log(colorLetter);
});

btnSave.addEventListener("click", () => {
  if (!saveColors.includes(randomHex)) {
    saveColors.push(randomHex);
    colorContainer.innerHTML += `
    <span style="
    background-color:${randomHex};
    padding:3px 5px;
    border-radius: 6px;
    color: ${colorLetter};">
    ${randomHex}
    </span>`;
    console.log(saveColors);
  }
});
