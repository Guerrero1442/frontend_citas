import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearCitaDTO } from 'src/app/models/cita.model';
import { Especialidad, Medico } from 'src/app/models/medico.model';
import { CitaService } from 'src/app/services/citas.service';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-cita-nueva',
  templateUrl: './cita-nueva.component.html'
})
export class CitaNuevaComponent  {
  medicos: Medico[]
  especialidadSeleccionada: Especialidad
  form = this.formBuilder.nonNullable.group({
    especialidad: ['',[Validators.required]],
    medico: ['',[Validators.required]],
    fecha: ['',[Validators.required]],
  })

  constructor(private medicoService:MedicoService, private formBuilder: FormBuilder, private citaService:CitaService, private router:Router) { }



  ngOnInit(): void {
    this.form.controls['especialidad'].valueChanges.subscribe(valor => {
      const especialidad = valor as Especialidad;
      this.medicoService.getMedicosByEspecialidad(especialidad).subscribe(medicos => {
        this.medicos = medicos;
      });
    });
  }

  crearCita() {
    if(this.form.valid){
      const { especialidad, medico, fecha } = this.form.getRawValue();
      const pacienteId = 1
      const especialidad_string = especialidad as Especialidad;
      const citaDTO: CrearCitaDTO = {
        fecha: new Date(fecha), // Convertir el string a una fecha
        pacienteId: pacienteId,
        medicoId: parseInt(medico), // Asumiendo que medico contiene el ID del médico
        especialidad: especialidad_string
      };
      this.citaService.createCitaFromDto(citaDTO).subscribe({
        next: () => {
          console.log("Cita creada correctamente");
          this.router.navigate(['/app/cita'])
        },
        error: (err) => {
          console.log(err)
        }
      })
      console.log(especialidad, medico, fecha,"especialidad, medico, fecha")
    } else {
      this.form.markAllAsTouched();
    }
  }
}
