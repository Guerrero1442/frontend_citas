import { User } from "./user.model";

export interface Medico {
  id: number;
  documentoIdentificacion: string;
  nombreCompleto: string;
  telefono: number;
  especialidad: Especialidad;
  disponibilidad: Date[];
  usuarioId: number;
  usuario: User;
}

export enum Especialidad {
  Cardiologia = 'Cardiologia',
  Dermatologia = 'Dermatologia',
  Gastroenterologia = 'Gastroenterologia',
  Ginecologia = 'Ginecologia',
  Neurologia = 'Neurologia',
  Oftalmologia = 'Oftalmologia',
  Oncologia = 'Oncologia',
  Pediatria = 'Pediatria',
  Psicologia = 'Psicologia',
  Reumatologia = 'Reumatologia',
  Urologia = 'Urologia',
}
