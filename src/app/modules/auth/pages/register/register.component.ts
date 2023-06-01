import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrearPacienteDTO } from 'src/app/models/paciente.model';
import { Rol } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.formBuilder.nonNullable.group({
    nombres: ['',[Validators.required]],
    apellidos: ['',[Validators.required]],
    documento: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  constructor(private formBuilder: FormBuilder,private router:Router, private authService:AuthService){}

  doRegister(){
    if(this.form.valid){
      const { nombres, apellidos, documento, telefono, email, password } = this.form.getRawValue();
      const usuarioId = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
      const paciente: CrearPacienteDTO = {
        nombreCompleto: nombres + " " + apellidos,
        documentoIdentificacion: documento,
        telefono: telefono.toString(),
        usuarioId: usuarioId,
        beneficiarios: [""],
        usuario: {
          email: email,
          password: password,
          rol: Rol.Paciente,
          id: usuarioId
        }
      }
      this.authService.registerAndLoginPaciente(paciente).subscribe({
        next: () => {
          console.log("Paciente creado correctamente");
          this.router.navigate(['/app'])
        },
        error: (err) => {
          console.log(err)
        }
      })
    }else {
      this.form.markAllAsTouched();
    }
  }
}
