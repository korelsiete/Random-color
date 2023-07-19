const cuadro = document.querySelector("#randomColor");
const btnChange = document.querySelector("#btnChange");

btnChange.addEventListener("click", () => {
  cuadro.setAttribute("style", `background-color: ${randomColorHex()}`);
});

function randomColorHex() {
  const conjunto = "0123456789abcdef";
  let random = "#";
  for (let i = 0; i < 6; i++) {
    random += conjunto[Math.floor(Math.random() * conjunto.length)];
  }
  console.log(random);
  return random;
}
