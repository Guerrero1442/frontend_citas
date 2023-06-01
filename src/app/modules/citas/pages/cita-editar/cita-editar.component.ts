import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Cita, CrearCitaDTO } from 'src/app/models/cita.model';
import { Especialidad, Medico } from 'src/app/models/medico.model';
import { Paciente } from 'src/app/models/paciente.model';
import { AuthService } from 'src/app/services/auth.service';
import { CitaService } from 'src/app/services/citas.service';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-cita-editar',
  templateUrl: './cita-editar.component.html'
})
export class CitaEditarComponent implements OnInit {
  form: FormGroup;
  cita: Cita;
  citaId: number; // Almacena el ID de la cita
  medicos: Medico[]
  user: Medico | Paciente;

  constructor(private route:ActivatedRoute,private formBuilder: FormBuilder, private citaService:CitaService,private medicoService:MedicoService, private authService:AuthService, private router:Router){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      fecha: '',
      especialidad: '',
      medico: ''
    });

    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.citaId = parseInt(id); // Guarda el ID de la cita
      this.citaService.getCita(this.citaId).pipe(
        switchMap(cita => {
          const fecha = new Date(cita.fecha);

          // Convertir la fecha al formato "yyyy-MM-dd"
          const fechaFormatoCorrecto = fecha.toISOString().split('T')[0];
          this.cita = cita;
          this.form.patchValue({
            fecha: fechaFormatoCorrecto,
            especialidad: cita.especialidad,
            medico: cita.medico
          });
          this.form.controls['especialidad'].disable();
          return this.medicoService.getMedicosByEspecialidad(cita.especialidad);
        })
      ).subscribe({
        next: (medicos) => {
          this.medicos = medicos;
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    this.authService.getProfile().subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  editarCita(){
    if(this.form.valid){
      const { especialidad, medico, fecha } = this.form.getRawValue();
      const userId = this.user.id;
      const especialidad_string = especialidad as Especialidad;
      const citaDTO: CrearCitaDTO = {
        especialidad: especialidad_string,
        medicoId: parseInt(medico),
        fecha: fecha,
        pacienteId: userId
      }
      this.citaService.updateCita(this.citaId, citaDTO).subscribe({ // Usa el ID de la cita
        next: () => {
          console.log("Cita editada")
          this.router.navigate(['/app/cita'])
        },
        error: (err) => {
          console.log(err)
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
