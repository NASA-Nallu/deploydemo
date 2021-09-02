import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm = this.fb.group({
    fullName : ['', Validators.required],
    userName : ['', [
      Validators.required,
      Validators.email,
      ]],
    email : ['', [Validators.required, Validators.email]],
    password: ['',
    [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12)
    ]],
    confirmPassword: ['', [Validators.required,Validators.minLength(6),
    Validators.maxLength(40)]]

    });


  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  get f(){
    return this.userForm.controls;
  }

  get fullName() {
    return this.userForm.get('firstname');
 }

  onSubmit(){
    if(this.userForm.valid){
      alert('User form is valid!!')
    } else {
      alert('User form is not valid!!')
    }
  }

}
