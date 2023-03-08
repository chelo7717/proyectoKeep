import {Nota} from './keep.js';
import {ListadeNotas} from './keep.js';

const title = document.querySelector("#titulo");
const description = document.querySelector("#descripcion");
const form = document.querySelector("#keep-form");
const div = document.querySelector("#resultado-div");
var notas = new ListadeNotas(new Array());
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titulo=title.value;
  const descripcion=description.value;
  const nota = new Nota(titulo,descripcion);
  event.preventDefault();
  notas.agregarNota(nota); 
  div.innerHTML = "LISTA DE NOTAS: " + notas.getnotashtml();
  
});
