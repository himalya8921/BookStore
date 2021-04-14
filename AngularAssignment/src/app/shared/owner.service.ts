import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  readonly bookUrl = 'https://localhost:44351/Home';
  constructor(private http:HttpClient) { }


  GetOwnerList()
    {
     return this.http.get(this.bookUrl+'/GetOwners');
    }

    RemoveOwner(userId : number){
      console.log("Remove Owner method in Owner service: " + userId);
      return this.http.delete(this.bookUrl+'/RemoveOwner?id='+userId);
    }

    
    GetNonOwnerList(){
      return this.http.get(this.bookUrl+'/GetUsers');}


      AddOwner(ownerId : number){
        var httpParams = new HttpParams({
          fromObject:{
           Id:ownerId.toString()
          }
        });
        return this.http.get(this.bookUrl+'/AddOwner', {params:httpParams});
      }

}
