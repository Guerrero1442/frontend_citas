import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita, CrearCitaDTO } from '../models/cita.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  API_URL = environment.API_URL + '/cita';

  constructor(private http: HttpClient) { }

  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.API_URL);
  }

  getCita(id: number): Observable<Cita> {
    return this.http.get<Cita>(`${this.API_URL}/${id}`);
  }

  getCitasByPacienteId(pacienteId: number): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.API_URL}/Paciente/${pacienteId}`);
  }

  createCitaFromDto(cita: CrearCitaDTO): Observable<Cita> {
    return this.http.post<Cita>(`${this.API_URL}/FromDto`, cita);
  }

  updateCita(id: number, cita: Cita): Observable<Cita> {
    return this.http.put<Cita>(`${this.API_URL}/${id}`, cita);
  }

  deleteCita(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
