import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-visitorhome',
  templateUrl: './visitorhome.component.html',
  styleUrls: ['./visitorhome.component.css']
})
export class VisitorhomeComponent implements OnInit {
  bookList: any;
  constructor(public service:AccountService) { }
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
  ngOnInit(): void {
    console.log("In the visitor home")
    
    let tokenInfo;
    if (localStorage.getItem('token') != null)
    {
      console.log("Afuncion mebs")
     const userJson = localStorage.getItem('token');
     console.log(userJson);
      tokenInfo = this.getDecodedAccessToken(userJson==null?'':userJson); // decode token
     let role = tokenInfo.role; // get token expiration dateTime
     console.log("token info" +tokenInfo); // show decoded token object in console
     console.log("Role is " + role);
     console.log("User id is  " + tokenInfo.UserID);
     console.log("<-------->");
    
    }

    // this.service.GetMyBookList(tokenInfo.UserID).subscribe(
    //   res => {
    //     this.bookList = res;
    //     console.log(this.bookList);
    //   },
    //   err => {
    //     console.log(err);
    //   })
    this.service.getBooks().subscribe(
      res=>{
        this.bookList  = res;
        
        console.log(this.bookList);
      },
      err=>{
        console.log(err);
      }
      )
  }


}
function getDecodedAccessToken(token: any, string: any) {
  throw new Error('Function not implemented.');
}

