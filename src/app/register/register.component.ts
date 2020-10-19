import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['']
    }, { validator: this.checkPasswords });
  }
  register() {
    console.log(this.registerForm.value, 'details');
    this.router.navigate(['/login']);
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('passwordConfirm').value;

    return pass === confirmPass ? null : { notSame: true };
  }
}
