import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { Signup } from './signup.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  formData:Signup | undefined;
  readonly rootUrl = 'https://localhost:44351/Home';
  readonly bookUrl = 'https://localhost:44351/Books';
    constructor(private http:HttpClient) { }
  
    submitData(formData:Signup)
    {
    console.log(formData)
     return this.http.post(this.rootUrl+'/SignUp',formData)
    }
  
    getUsers() {
      var tokenHeader = new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')});
      return this.http.get(this.rootUrl + '/GetUsers',{headers:tokenHeader});
    }
  
    getBooks() {
      var tokenHeader = new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')});
      return this.http.get(this.bookUrl + '/GetBooks',{headers:tokenHeader});
    }
     
    submitDataForLogin(formData:Login)
    {
     return this.http.post(this.rootUrl+'/Login',formData)
    }
  
  
     callTesting()
    {
     var httpParams = new HttpParams({
        fromObject:{
          bookId:'1',
          userId:'2'
        }
      });
      return this.http.get(this.bookUrl + '/Testing',{params:httpParams});
    }

    DeleteBook(userId:number)
    {
      console.log("Id to be deleted is" + userId);
      return this.http.delete(this.bookUrl+'/DeleteBook?bookId='+userId);
    }

    GetMyBookList(userId:number)
    {
      var httpParams = new HttpParams({
        fromObject:{
         id:userId.toString()
        }
      });
      return this.http.get(this.bookUrl+'/GetMyBookList',{params:httpParams});
    }
}
