import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  

  doLogin() {
    this.loginService.executeLogin(this.loginForm.get('username').value);
  }
  
  get usernameControl():FormControl{
    return this.loginForm.get('username') as FormControl;
  }

}
