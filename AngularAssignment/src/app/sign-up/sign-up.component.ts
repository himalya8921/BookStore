import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Signup } from '../shared/signup.model';
import { Router } from '@angular/router';

import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: Signup | any;
  usernamePattern =   "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  pwdPattern = "^[a-zA-Z0-9]{8,}$";
  isValidFormSubmitted = null;
  constructor(private router:Router,private fb: FormBuilder,private service:AccountService) { 
    console.log("SignUp Loaded");
  }

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      userName: ['', [ Validators.required, Validators.pattern(this.usernamePattern)]],
      FullName: ['',[Validators.required, Validators.minLength(3)]],
      Address: ['',[Validators.required, Validators.minLength(20)]],
      password: ['', [Validators.required,Validators.pattern(this.pwdPattern)]],
      
    })


    this.service.callTesting().subscribe(
      (res:any)=>{},
      err=>{}
    );

  }
  // formModel = {

  //   Username:'',
  //   Password:'',
  //   Address:'',
  //   Role:'',
  //   Fullname:''
  // }


  onSubmit(form:NgForm)
  {
  
    console.log(form.value);
    console.log("<----------->");
    this.service.submitData(form.value).subscribe(
  
      res=>{
             this.router.navigateByUrl('/login');
      },
      err=>{
        console.log(err);
      }
    )
  }

}
