import { Especialidad, Medico } from "./medico.model";
import { Paciente } from "./paciente.model";

export interface Cita {
  id: number;
  fecha: Date;
  pacienteId: number;
  medicoId: number;
  especialidad: Especialidad;
  medico: Medico;
  paciente: Paciente;
}

export interface CrearCitaDTO extends Omit<Cita, 'id' | 'medico' | 'paciente'> {
  pacienteId: number;
  medicoId: number;
}
