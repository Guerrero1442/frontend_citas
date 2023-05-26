import { User } from "./user.model";

export interface Paciente {
  id: number;
  documentoIdentificacion: string;
  nombreCompleto: string;
  telefono: number;
  beneficiarios: string[];
  usuarioId: number;
  usuario: User;
}
