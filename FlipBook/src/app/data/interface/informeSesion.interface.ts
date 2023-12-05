
export interface InformeSesion {
  id: number;
  expediente: string;
  fecha: string;
  area: string;
  cuadernillo: string;
  nombreDenunciante: string;
  edad: number;
  sexo: string;
  puestoCargo: string;
  areaAdscripcion:string;
  telefono:string;
  correo: string;
  fechaIngreso:string;
  antiguedad: string;
  narracionHechos: string;
  impresionDiagnostica: detalleImpresion[];
}

// Punto C en expediente pag 58 de 86
export interface detalleImpresion {
  identificacion: string;
  apreciacion: string;
  deteccion: string;
  adopcion: string;
}

