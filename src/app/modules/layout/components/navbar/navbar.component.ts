import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Medico } from 'src/app/models/medico.model';
import { Paciente } from 'src/app/models/paciente.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  user:Medico | Paciente;

  faUserCircle = faUserCircle;
  constructor(private authService:AuthService,private router:Router){
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

  logout(){
    this.authService.logout();
    this.router.navigate([''])
  }
}
