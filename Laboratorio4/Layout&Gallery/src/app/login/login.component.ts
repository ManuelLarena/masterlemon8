import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoginEntity } from '../model/Login-Entity';
import { appRoutes } from '../conf/paths';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginForm: FormGroup;
  usernameControl: FormControl;
  passwordControl: FormControl;
  isLogged: boolean;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.createLoginForm();
  }

  ngOnInit(): void {}

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.usernameControl = this.loginForm.get('username') as FormControl;
    this.passwordControl = this.loginForm.get('password') as FormControl;
  }

  login() {
    const user: LoginEntity = {
      username: this.usernameControl.value,
      password: this.passwordControl.value,
    };
    
    if (this.authService.login(user)) {
      this.router.navigate([appRoutes.dashboard]);
    }
  }
}
