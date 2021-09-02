import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    userName: ['admin'],
    password: ['admin']
  })
  loginData : object = {};
  sourceData: any;
  users: any;
  user: any;
  noUser: boolean = false;
  constructor(private fb : FormBuilder, private logserv: LoginService, private router: Router) { }

  ngOnInit() {
    this.logserv.clearData();
  }

  login(){

    let uname = this.f.userName.value;
    let pwd = this.f.password.value

    console.log(this.loginData);
    this.user = this.logserv.onlogOn().subscribe(data => {
      this.sourceData = data;
      console.log('SetData', this.sourceData)
      let currentUser = this.sourceData.filter(
        (user:any) => user.userName == uname && user.password == pwd
      )[0];
      if(currentUser) {
        this.logserv.setData(this.sourceData);
        this.logserv.setCurrentUser(currentUser);
        this.router.navigate(['/home/dashboard']);
      }
      else {
        this.noUser = true;
      }
    })


  }

  get f(){
    return this.loginForm.controls;
  }



}
