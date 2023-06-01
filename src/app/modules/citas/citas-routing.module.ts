import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaComponent } from './pages/cita/cita.component';
import { CitaNuevaComponent } from './pages/cita-nueva/cita-nueva.component';
import { CitaEditarComponent } from './pages/cita-editar/cita-editar.component';

const routes: Routes = [
  {
    path:'',
    component: CitaComponent
  },
  {
    path:'nueva',
    component: CitaNuevaComponent
  },
  {
    path:'editar/:id',
    component: CitaEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
