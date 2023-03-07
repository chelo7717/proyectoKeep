import {Nota} from './keep.js';
//import {ListadeNotas} from './keep.js';

const title = document.querySelector("#titulo");
const description = document.querySelector("#descripcion");
const form = document.querySelector("#keep-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo=title.value;
  const descripcion=description.value;
  const nota = new Nota(titulo,descripcion);
  nota.Titulo=titulo;
  nota.Descripcion=descripcion;
  event.preventDefault();
  // const notas = new ListadeNotas();
  // notas.agregarNota(nota);
  // console.log(nota);
  //div.innerHTML=nota;
  div.innerHTML = "NOTA" + "<br>" + "<p>" + "TITULO: " + nota.Titulo + "<br>" + "DESCRIPCION: " + nota.Descripcion;
});
