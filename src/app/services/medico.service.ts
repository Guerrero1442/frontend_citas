import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Especialidad, Medico } from '../models/medico.model';


@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  API_URL = environment.API_URL + '/medico';

  constructor(private http: HttpClient) { }

  getMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.API_URL);
  }

  getMedicosByEspecialidad(especialidad: Especialidad): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.API_URL}/GetByEspecialidad/${especialidad}`);
  }

  getMedico(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${this.API_URL}/${id}`);
  }

  updateMedico(id: number, Medico: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${this.API_URL}/${id}`, Medico);
  }

  deleteMedico(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
