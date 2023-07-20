const fondo = document.querySelector("#bgRandom");
const btnChange = document.querySelector("#btnChange");
const newHex = document.querySelector("#newHex");

btnChange.addEventListener("click", () => {
  const randomHex = randomColorHex();
  fondo.setAttribute("style", `background-color: ${randomHex}`);
  newHex.textContent = randomHex;
});

function randomColorHex() {
  const conjunto = "0123456789ABCDEF";
  let random = "#";
  for (let i = 0; i < 6; i++) {
    random += conjunto[Math.floor(Math.random() * conjunto.length)];
  }
  console.log(random);
  return random;
}
