import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../interface/archivo.interface';
import { environment } from 'src/environments/environments';
import { Cuadernillo } from '../interface/cuadernillo.interface';

@Injectable({
  providedIn: 'root',
})
export class CuadernilloService {
  private articulo!: Articulo[];
  private url: string = '';
  private cuadernillo!: Cuadernillo;

  // private http: HttpClient
  constructor() {
    this.url = `${environment.apiServer}${environment.apiService}`;
  }

  getCuadernillo(): Articulo[] {
    try {
      // const GET_DATA = `${this.url}....`;
      // var data = this.http.get(GET_DATA).subscribe((response: any) => {
      //   var resp = response;
      //   if (resp != null || resp != undefined) {
      //     this.cuadernillo.expCuardenillo = resp.ExpCuardenillo;
      //     this.cuadernillo.area = resp.area;
      //     this.cuadernillo.folio = resp.folio;
      //     this.cuadernillo.fecha = resp.fecha;
      //     this.cuadernillo.nombreDenunciante = resp.nombreDenunciante;
      //     this.cuadernillo.appDenunciante = resp.appDenunciante;
      //     this.cuadernillo.apmDenunciante = resp.apmDenunciante;
      //     this.cuadernillo.nombreAcusado = resp.nombreAcusado;
      //     this.cuadernillo.nombreJuez = resp.nombreJuez;
      //     this.cuadernillo.cargoJuez = resp.cargoJuez;
      //     this.cuadernillo.nombreSubdirector = resp.nombreSubdirector;
      //     this.cuadernillo.cargoSubdirector = resp.cargoSubdirector;
      //   } else {
      //     this.cuadernillo.expCuardenillo = '';
      //     this.cuadernillo.area = '';
      //     this.cuadernillo.folio = '';
      //     this.cuadernillo.fecha = '';
      //     this.cuadernillo.nombreAcusado = '';
      //     this.cuadernillo.nombreJuez = '';
      //     this.cuadernillo.cargoJuez = '';
      //     this.cuadernillo.nombreSubdirector = '';
      //     this.cuadernillo.cargoSubdirector = '';
      //   }
      // });

      var iniciales = this.getFirstCharacter(
        this.cuadernillo.nombreDenunciante,
        this.cuadernillo.appDenunciante,
        this.cuadernillo.apmDenunciante
      );

      this.articulo = [
        {
          id: 2,
          titulo: 'Cuadernillo',
          ruta: '',
          contenido: [
            { tag: 'titulo', texto: TITULO },
            {
              tag: 'titulo',
              texto: `Cuadernillo: ${this.cuadernillo.expCuardenillo}`,
            },
            {
              tag: 'titulo',
              texto: `Área: ${this.cuadernillo.area}`,
            },
            {
              tag: 'titulo',
              texto: `Folio SIGDOC: ${this.cuadernillo.folio}`,
            },
            {
              tag: 'titulo',
              texto: `En ${this.cuadernillo.fecha}, se da cuenta a la Jueza, con el correo electrónico remitido por la presunta víctima ${iniciales} Conste.`,
            },
            {
              tag: 'titulo',
              texto: `Vista la cuenta que antecede, la Titular de la Unidad de Prevención y Combate a la Violencia Laboral y
              al Acoso Sexual, (${UPCVLAS}), acuerda lo siguiente:`,
            },
            { tag: 'titulo', texto: 'Recepción de constancias' },
            {
              tag: 'titulo',
              texto: `Agréguese a los autos el correo electrónico y anexo remitido por la presunta víctima ${iniciales},
              por medio del cual solicita asesoría por parte de la Unidad con relación a las conductas probablemente constitutivas
              de violencia laboral y de género que dice sufrir por parte de ${this.cuadernillo.nombreAcusado}, Magistrado adscrito
               al Tercer Tribunal Colegiado en Materias Penal y Administrativa del Décimo Octavo Circuito con residencia en Cuernava, Morelos.`,
            },
            { tag: 'titulo', texto: `Circunstancia de la cual esta Unidad toma conocimiento para los efectos legales que correspondan.` },
            { tag: 'titulo', texto: `Se instruye realizar primer contacto` },
            { tag: 'titulo', texto: `Se instruye a la Subdirectora de Atención Jurídica, para que en el término de 72 horas contacte
            a la presunta víctima de iniciales ${iniciales}, a fin de iniciar con la fase de orientación.`
            },
            {
              tag: 'titulo',
              texto: `Cúmplase.`,
            },
            {
              tag: 'titulo',
              texto: `Así lo instrutó y firma la Jueza ${this.cuadernillo.nombreJuez}, Titular de la Unidad de Prevención y Combate a la Violencia Laboral
              y al Acoso Sexual (${UPCVLAS}), asistida de la Subdirectora de área, ${this.cuadernillo.nombreSubdirector}, quienes firman de manera electrónica,
              en términos de lo dispuesto por los artículos 52 bis, fracción IV, 52 octies y 52 nonies del Acuerdo General del Pleno del Consejo de la Judicatura Federal
              que establece las disposiciones en materia de actividad administrativa del propio Consejo, y además, haciendo constar que el presente acuerdo y el proveído
              que motivó el mismo, se encuentran debidamente incorporados al expediente que corresponde.`,
            },
            {
              tag: 'titulo',
              texto: `C.c.p. Cuadernillo ${UPCVLAS}/${this.cuadernillo.expCuardenillo}`,
            },
            {
              tag: 'titulo',
              texto: `Validó:`,
            },
            {
              tag: 'titulo',
              texto: `${this.cuadernillo.nombreJuez}`,
            },
          ],
        },
      ];
    } catch (e) {}
    return this.articulo;
  }

  getFirstCharacter(
    nombre: string,
    apPaterno: string,
    apMaterno: string
  ): string {
    //validar si viene vacio
    return `${nombre.charAt(0)}.${apPaterno.charAt(0)}.${apMaterno.charAt(0)}.`;
  }
}
