import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente,CrearPacienteDTO } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  API_URL = environment.API_URL + '/paciente';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.API_URL);
  }

  getPaciente(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.API_URL}/${id}`);
  }


  updatePaciente(id: number, Paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.API_URL}/${id}`, Paciente);
  }

  deletePaciente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
