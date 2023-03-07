import {Nota} from './keep.js';
import {ListadeNotas} from './keep.js';

const title = document.querySelector("#titulo");
const description = document.querySelector("#descripcion");
const form = document.querySelector("#keep-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo=title.value;
  const descripcion=description.value;
  const nota = new Nota(titulo,descripcion);
  var notas = new ListadeNotas(new Array());
  event.preventDefault();
  notas.agregarNota(nota);
  console.log(nota);
  console.log(notas);
  //div.innerHTML=nota;
  div.innerHTML = "NOTA" + "<br>" + "<p>" + "TITULO: " + nota._Titulo + "<br>" + "DESCRIPCION: " + nota._Descripcion;
});
