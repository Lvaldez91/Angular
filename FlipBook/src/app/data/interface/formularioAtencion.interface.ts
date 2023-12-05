export interface FormularioAtencion {
  fecha : string;
  solicitante: DatosSolicitante[];
  agresor: Agresor[];
  hechosViolencia: respuestasHechos[];
  contenido: string;
}

interface DatosSolicitante {
  nombre: string;
  apPaterno: string;
  apMaterno: string;
  edad: number;
  sexo: string;
  respuesta1: string;
  respuesta2: string;
  respuesta3: string;
  respuesta4: string;
  respuesta5: string;
  respuesta6: string;
  respuesta7: string;
  respuesta8: string;
  respuesta9: string;
  respuesta10: string;
  respuesta11: string;
  respuesta12: string;
  respuesta13: string;
  respuesta14: string;
}

interface Agresor {
  datosAgresor: DatosAgresor[];
}

interface DatosAgresor {
  nombre: string;
  edad: number;
  sexo: string;
  cargo: string;
  adscripcion: string;
  respuesta1: string;
  respuesta2: string;
  respuesta3: string;
  respuesta4: string;
  respuesta5: string;
  respuesta6: string;
  respuesta7: string;
}

interface respuestasHechos {
  respuesta1: string;
  respuesta2: string;
  respuesta3: string;
  respuesta4: string;
  respuesta5: string;
  respuesta6: string;
  respuesta7: string;
  respuesta8: string;
  respuesta9: string;
  respuesta10: string;
  respuesta11: string;
}

