// dtos/TipoDeEjercicioDTO.ts
export interface CreateTipoDeEjercicioDTO {
    Estado: string;
    tipo_de_ejercicio: string;
  }
  
  export interface UpdateTipoDeEjercicioDTO {
    Estado?: string;
    tipo_de_ejercicio?: string;
  }
  