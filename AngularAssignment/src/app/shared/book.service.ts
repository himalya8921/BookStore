import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookmodel } from './BookModel.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly bookUrl = 'https://localhost:44351/Books';
  constructor(private http:HttpClient) { }


  AddBook(data:Bookmodel)
    {
    console.log(data)
    console.log("ADDDDDDDDDDDDDDDDDDDD")
     return this.http.post(this.bookUrl+'/AddBook',data)
    }


    
  UpdateBook(data:Bookmodel)
  {
  console.log(data)
  console.log("ADDDDDDDDDDDDDDDDDDDD")
   return this.http.post(this.bookUrl+'/UpdateBook',data)
  }


  getBookById(id:any)
  {
    console.log("id is "+ id);
    var httpParams = new HttpParams({
      fromObject:{
        bookId:id.toString(),
      }
    });

    console.log(id);
    return this.http.get(this.bookUrl+'/GetBookById',{params:httpParams});
  }
}
