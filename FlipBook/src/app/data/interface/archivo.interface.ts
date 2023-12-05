export class Archivo {
  expediente: string;
	nombre?: string;
	appaterno?: string;
	apmaterno?: string;
  articulo?: Articulo[];

  constructor(expediente: string,nombre: string,appaterno: string,apmaterno: string,articulo: Articulo[]){
    this.expediente = expediente;
    this.nombre = nombre;
    this.appaterno = appaterno;
    this.apmaterno = apmaterno;
    this.articulo = articulo;
  }

}

export interface Articulo {
  titulo: string;
  ruta: string;
  contenido: contenidoArticulo[];
}

export interface contenidoArticulo {
  tag: string
  texto: string;
}
