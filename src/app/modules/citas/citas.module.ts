import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { CitaComponent } from './pages/cita/cita.component';
import { TarjetaCitaComponent } from './components/tarjeta-cita/tarjeta-cita.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CitaNuevaComponent } from './pages/cita-nueva/cita-nueva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CitaComponent,
    TarjetaCitaComponent,
    CitaNuevaComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CitasModule { }
