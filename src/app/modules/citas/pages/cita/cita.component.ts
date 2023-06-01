import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Cita } from 'src/app/models/cita.model';
import { Medico } from 'src/app/models/medico.model';
import { Paciente } from 'src/app/models/paciente.model';
import { AuthService } from 'src/app/services/auth.service';
import { CitaService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html'
})
export class CitaComponent {
  faPlus = faPlus;
  citas: Cita[] = [];
  id:number | null = null;
  citasCargadas = false;
  user:Medico | Paciente;

  constructor(private citaService:CitaService,private route: ActivatedRoute, private authService: AuthService){
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (res) => {
        this.user = res;
        this.cargarCitas(this.user.id);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  cargarCitas(id:Paciente['id'] | Medico['id']){
    this.citaService.getCitasByPacienteId(id).subscribe(data => {
      this.citas = data;
      this.citasCargadas = true;
    })
  }
}
