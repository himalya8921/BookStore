import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../shared/book.service';
import { Bookmodel } from '../shared/BookModel.model';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  newBook: Bookmodel | any;
  constructor(private fb: FormBuilder, public service : BookService,private router:Router) { }
 
   getProbablyNumberFromLocalStorage(key:any) {
  var val = localStorage.getItem(key);
  return (val==null || isNaN(+val)) ? val  : +val;
  }
book:any;
  ngOnInit() {
    
    this.newBook = this.fb.group({
      bookId:[],
      bookName: ['', [Validators.minLength(5), Validators.required]],
      bookAuthor: ['', [Validators.required, Validators.minLength(3)]],
      bookSummary: ['', [Validators.required, Validators.minLength(50)]],
      bookImage: [''],
      bookPrice: ['', Validators.required]
    })
     
   var temp = this.getProbablyNumberFromLocalStorage("bookid");

     this.service.getBookById(temp).subscribe(
      res=>{
        
        this.book  = res;

     this.newBook.get("bookName").setValue(this.book.bookName);
     this.newBook.get("bookAuthor").setValue(this.book.bookAuthor);
     this.newBook.get("bookSummary").setValue(this.book.bookSummary);
     this.newBook.get("bookImage").setValue(this.book.bookImage);
     this.newBook.get("bookPrice").setValue(this.book.bookPrice);
     this.newBook.get("bookId").setValue(localStorage.getItem('bookid'));
        console.log("this book is " +this.book.bookName);

      },
      err=>{
        console.log(err);
      }

      )


 
   
    // this.newBook.get("bookName").setValue("HArry potter");
    // console.log(this.book.bookName);
   // get it from the token

  
  
    // this.newBook.bookname = "THE GAME OF THRONES";
  }

  UpdateBook(newBook : Bookmodel | any){
    console.log("Adding waiiittt");
    console.log(newBook.value.bookName);
    this.service.UpdateBook(newBook.value).subscribe(
      res => {
        
        this.router.navigateByUrl('/home');
      },
      err => {console.log(err);}
    );
}




}
