import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

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
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: 'cita',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('../citas/citas.module').then((m) => m.CitasModule),
      },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
