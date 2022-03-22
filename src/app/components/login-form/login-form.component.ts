import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: any;
  userLogged: any = {
    email: 'andres@gloria.com',
    password: '12345',
    name: 'Andrés García'
  }

  createForm() {
    this.user = this.fb.group({
      email: ['', 
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')] 
      ],
      password: ['', Validators.required],
      rol: ['ADMIN']
    });
  }

  constructor(
    private router: Router, 
    private fb: FormBuilder
  ) { this.createForm(); }

  ngOnInit(): void {
  }

  Login () {
    if (!this.user.invalid) {
      alert('Bienvenido');
      this.router.navigate(['/dashboard']);
      localStorage.setItem('email', this.userLogged.name);
    }else{
      alert('Credenciales incorrectas!!');
    }
    
  }

  get inputEmail() {
    return this.user.get('email').invalid && this.user.get('email').touched
  }

  get inputPassword() {
    return this.user.get('password').invalid && this.user.get('password').touched
  }

}
