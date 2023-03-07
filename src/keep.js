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
  constructor()
  {
    const notas = new Array();
  }
  agregarNota(nota)
  {
    this.notas.push(nota);
    return notas;
  }
  editarNota(titulo,desc, nota)
  {
    nota.Titulo=titulo;
    nota.Descripcion=desc;
  }
  EliminarNota(nota)
  {
    nostas.splice()
  }
};
export default Nota; ListadeNotas;
