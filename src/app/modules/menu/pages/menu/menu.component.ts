import { Component } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';
import { Paciente } from 'src/app/models/paciente.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  user:Medico | Paciente;

  constructor(private authService:AuthService){
  }
  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
