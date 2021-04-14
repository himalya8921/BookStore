import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {

  constructor(private http:HttpClient) { }

   
  readonly bookUrl = 'https://localhost:44351/Books';
  GetMyBookList(userId : number){

    var httpParams = new HttpParams({
      fromObject:{
        id:userId.toString(),
      }
    });



    console.log("Getting list");
    return this.http.get(this.bookUrl+'/GetMyBookList',{params:httpParams});
  }

  // AddToMyBookList( userId:  number, bookId : number){
  //   return this.http.post(this.addToMyList, "?userId=" + userId + "&bookId=" + bookId);
  // }

  // RemoveBookFromMyList(userId:  number, bookId : number){
  //   return this.http.delete(this.removeBookFromMyList + "?userId=" + userId + "&bookId=" + bookId);
  // }

  // GetBookComment(bookId : number){
  //   return this.http.get(this.getBookComments + "?bookId=" + bookId);
  // }

  // AddBookComment(userId : number, bookId :  number, comment : string){
  //   return this.http.post(this.addBookComment , "?userId=" + userId + "&bookId=" + bookId + "&comment=" + comment);
  // }



}
