export interface User {
  id: number;
  email: string;
  password: string;
  rol: Rol;
}

export enum Rol {
  Paciente = 'Paciente',
  Medico = 'Medico',
  Administrador = 'Administrador',
}
