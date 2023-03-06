//import keep from "./sumador";

const title = document.querySelector("#titulo");
const description = document.querySelector("#descripcion");
const form = document.querySelector("#keep-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  /*const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const keep= new Keep()*/
  const titleKeep = title.value;
  const descriptionKeep = description.value;

  //div.innerHTML = "<p>" + keep.sumar(firstNumber, secondNumber) + "</p>";
  div.innerHTML = "NOTA" + "<br>" + "<p>" + "TITULO: " + titleKeep + "<br>" + "DESCRIPCION: " + descriptionKeep;
});
