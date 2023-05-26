import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form = this.formBuilder.nonNullable.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]]
  })

  constructor(private router: Router, private authService:AuthService, private formBuilder: FormBuilder) {}

  doLogin(){
    if(this.form.valid){
      const { email, password } = this.form.getRawValue();
      console.log(email, password,"email, password")
      this.authService.login(email, password).subscribe({
        next: () => {
          this.router.navigate(['/app'])
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
