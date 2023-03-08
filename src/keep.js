export class Nota
{
  constructor(Titulo,Descripcion)
  {
    this._Titulo=Titulo;
    this._Descripcion=Descripcion;
  }
  get titulo()
  {
    return this._Titulo;
  }
  get descripcion()
  {
    return this._Descripcion
  }
  set titulo(t)
  {
    this._Titulo=t;
  }
  set descripcion(d)
  {
    this._Descripcion=d;
  }
};

export class ListadeNotas
{
  constructor(notas)
  {
    this.notas=notas;
  }
  agregarNota(nota)
  {
    this.notas.push(nota);
  }
  getnotas(){
    return this.notas;
  }
  getnotashtml(){
    this.concat = "";
    for(let i = 0;i<this.notas.length;i++){
      this.concat += "<div>" + "Titulo: " + this.notas[i]._Titulo +"</div>" + 
      "<div>"+"Descripcion: " + this.notas[i]._Descripcion + "<button onclick = this.notas.editarNota()>" +" Editar" + "</button>" + "</div>" + "<br>";
    }
    return this.concat;
  }
  editarNota()
  {
    fila = $(this).closest("tr");
    id = $parseInt(fila.find('td:eg(0)'),text());
    alert(id);
  }
  EliminarNota(nota)
  {
    this.nostas.splice()
  }
};
export default Nota; ListadeNotas;
