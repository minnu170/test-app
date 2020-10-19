import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  login() {
    console.log(this.loginForm.value, 'logindetails');
  }
}
