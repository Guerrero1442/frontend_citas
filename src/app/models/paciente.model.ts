import { User } from "./user.model";

export interface Paciente {
  id: number;
  documentoIdentificacion: string;
  nombreCompleto: string;
  telefono: string;
  beneficiarios: string[];
  usuarioId: number;
  usuario: User;
}

export interface CrearPacienteDTO extends Omit<Paciente, 'id' > {
}
