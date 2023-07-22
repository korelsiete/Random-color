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
function blackOrWhite() {
  let count = 0;
  for (let i = 1; i < randomHex.length; i++) {
    if (randomHex[i] <= 7) count++;
  }
  return count > 2 ? "#fff" : "#000";
}

btnChange.addEventListener("click", () => {
  randomHex = randomColorHex();
  colorLetter = blackOrWhite();
  fondo.setAttribute("style", `background-color: ${randomHex}`);
  newHex.textContent = randomHex;
  console.log(randomHex);
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
