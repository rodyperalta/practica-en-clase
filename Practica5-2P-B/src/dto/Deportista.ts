// dtos/DeportistaDTO.ts
export interface CreateDeportistaDTO {
    Estado: string;
    nombre: string;
    peso: string;
    altura: number;
    edad: number;
  }
  
  export interface UpdateDeportistaDTO {
    Estado?: string;
    nombre?: string;
    peso?: string;
    altura?: number;
    edad?: number;
  }
  