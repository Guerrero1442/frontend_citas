import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Cita } from 'src/app/models/cita.model';
import { AuthService } from 'src/app/services/auth.service';
import { CitaService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html'
})
export class CitaComponent {
  faPlus = faPlus;
  citas: Cita[];
  id:number | null = null;
  pacienteId:number = 1

  constructor(private citaService:CitaService,private route: ActivatedRoute, private authService: AuthService){
  }

  ngOnInit(): void {
    this.cargarCitas()
  }

  cargarCitas(){
    this.citaService.getCitasByPacienteId(this.pacienteId).subscribe(data => {
      this.citas = data;
    })
  }
}
