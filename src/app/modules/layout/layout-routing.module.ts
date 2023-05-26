import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('../menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: 'cita',
        loadChildren: () =>
          import('../citas/citas.module').then((m) => m.CitasModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
