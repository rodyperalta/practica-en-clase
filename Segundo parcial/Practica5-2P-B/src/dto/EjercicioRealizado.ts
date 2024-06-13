// dtos/EjercicioRealizadoDTO.ts
export interface CreateEjercicioRealizadoDTO {
    Estado: string;
    Idtipoejercicio: string;
    Iddeportista: string;
    Fecha: string;
    Hora: string;
    Tiempo_transcurrido: string;
    Calorias_quemadas: string;
  }
  
  export interface UpdateEjercicioRealizadoDTO {
    Estado?: string;
    Idtipoejercicio?: string;
    Iddeportista?: string;
    Fecha?: string;
    Hora?: string;
    Tiempo_transcurrido?: string;
    Calorias_quemadas?: string;
  }
  