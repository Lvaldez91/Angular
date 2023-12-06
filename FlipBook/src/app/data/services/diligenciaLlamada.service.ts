import { Injectable } from '@angular/core';
import { Articulo } from '../interface/archivo.interface';
import { DiligenciaLlamada } from '../interface/diligenciaLlamada.interface';
import { FormatoFecha } from 'src/app/shared/pipes/fecha.pipe';

@Injectable({
  providedIn: 'root',
})
export class DiligenciaLlamadaService {
  private articulo!: Articulo;
  private diligencia!: DiligenciaLlamada;
  private pipes!: FormatoFecha;
  constructor() {}

  getDataDiligenciaLlamada(): Articulo {
    try {
      // contenido del servicio
      this.diligencia.expCuadernillo = '350/100'
      this.diligencia.nombreDenunciante= 'Lucero';
        this.diligencia.appDenunciante = 'Valdez';
        this.diligencia.apmDenunciante ='Domingo';
        this.diligencia.horaFin = '09:30 a.m.';
        this.diligencia.personaRedacto = 'Fernanda Gonzalez';
        this.diligencia.cargoRedacto='Jefe de Departamento';
        this.diligencia.fecha = '2023/10/04';

      var iniciales = this.getFirstCharacter(
        this.diligencia.nombreDenunciante,
        this.diligencia.appDenunciante,
        this.diligencia.apmDenunciante
      );

      this.articulo = {
        titulo: 'Diligencia de Llamada',
        ruta: 'Diligencia',
        contenido: [
          { tag: 't1', texto: `DILIGENCIA DE LLAMADA` },
          {
            tag: 't2',
            texto: `CUADERNILLO: ${this.diligencia.expCuadernillo}`,
          },
          {
            tag: 't3',
            texto: `En Ciudad de México, el ${this.pipes.transform(this.diligencia.fecha,0)}, ${this.diligencia.personaRedacto},
            ${this.diligencia.cargoRedacto}, hace constar que, en cumpliento a lo ordenado en auto de ${this.pipes.transform(this.diligencia.fecha,0)} del año en curso,
            a las quince horas con tres minutos de esta propia fecha,se contactó a la presunta víctima ${iniciales}, con quien se inició la fase de orientación,
            mencionándole lasvías que existen para la atención de la probable conducta infractora.`
          },
          { tag: 't4', texto: `Atento a lo anterior, la usuaria manifestó la voluntad de continuar recibiendo orientación por parte de esta Unidad, por lo que se acordó
          remitirle el Formulario de Atención y el Aviso de Privacidad que se le comentó.` },
          { tag: 't5', texto: `Con lo anterior, a las ${this.diligencia.horaFin} de este día, se tuvo por finalizada la comunicación entablada.` },
          { tag: 't6', texto: `Lo expuesto, se hace constar para los efectos legales correspondientes.` },
          { tag: 't7', texto: `${this.diligencia.personaRedacto}` },
          { tag: 't8', texto: `${this.diligencia.cargoRedacto}` },
        ],
      };
    } catch {}
    console.log(this.articulo);
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

