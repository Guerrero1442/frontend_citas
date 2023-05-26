import { Cita } from "./cita.model";
import { Paciente } from "./paciente.model";

export interface Pago {
  id: number;
  metodoPago: string;
  monto: number;
  fechaPago: Date;
  pacienteId: number;
  citaId: number;
  paciente: Paciente;
  cita: Cita;
}
