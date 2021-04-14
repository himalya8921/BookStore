import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { Login } from '../shared/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private service:AccountService,private router:Router) { 
    console.log("Login Loaded");
  }

  loginForm: Login | any;
  usernamePattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  pwdPattern = "^[a-zA-Z0-9]{8,}$";
  isValidFormSubmitted = null;

  ngOnInit(): void {
   //route according to their roles
    //if (localStorage.getItem('token') != null)
    //this.router.navigateByUrl('/home');


    this.loginForm = this.fb.group({
      userName: ['', [ Validators.required, Validators.pattern(this.usernamePattern)]],
      password: ['', [Validators.required,Validators.pattern(this.pwdPattern)]]
    })




  }
  // formModel = {

  //   Username:'',
  //   Password:'',

  // }
  

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  onSubmitt()
  {
    console.log("SDFs");
  }
onSubmit(form:any)
{

  //console.log(this.formModel.Username);
  console.log(form.value);
  console.log("<----------->");
  this.service.submitDataForLogin(form.value).subscribe(

    (res:any)=>{
      localStorage.setItem('token',res.token);
       
      let tokenInfo = this.getDecodedAccessToken(res.token); // decode token
      let role = tokenInfo.role; // get token expiration dateTime
      console.log("token info" +tokenInfo); // show decoded token object in console
      console.log("Role is " + role);
      
      if(role == "owner")
      {
        this.router.navigateByUrl('/home');
      }
      else if(role == "visitor")
      {
        this.router.navigateByUrl('/visitorhome');
      }

    },
    err=>{
      if(err.status == 400)
      {
       console.log('Incorrect username of password','Authentication Failed');
      }
      else{
      console.log(err);
      }
    }
  )
}

}
