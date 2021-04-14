import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

      if (localStorage.getItem('token') != null)
         {
           console.log("Afuncion mebs")
          const userJson = localStorage.getItem('token');
          console.log(userJson);
          let tokenInfo = this.getDecodedAccessToken(userJson==null?'':userJson); // decode token
          let role = tokenInfo.role; // get token expiration dateTime
          console.log("token info" +tokenInfo); // show decoded token object in console
          console.log("Role is " + role);
          console.log("<-------->")
          if(role != "visitor")
          {
            console.log("Naa bhai nahi chalega")
            this.router.navigate(['login']);
          }

      return true;
    }
    else {
      this.router.navigate(['login']);
      return false
  }
  
}
  
}
