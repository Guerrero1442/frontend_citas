import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cita } from 'src/app/models/cita.model';
import { CitaService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-tarjeta-cita',
  templateUrl: './tarjeta-cita.component.html'
})
export class TarjetaCitaComponent {
  @Input() cita: Cita;
  @Output() citaDelete = new EventEmitter<void>();

  constructor(private citaService:CitaService){
  }

  deleteCita(){
    this.citaService.deleteCita(this.cita.id).subscribe({
      next: () => {
        console.log("Cita eliminada")
        this.citaDelete.emit();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
