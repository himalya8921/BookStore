import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../shared/book.service';
import { Bookmodel } from '../shared/BookModel.model';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  newBook: Bookmodel | any;
   
  constructor(private fb: FormBuilder, public service : BookService) { }

  ngOnInit(): void {
    this.newBook = this.fb.group({
      bookName: ['', [Validators.minLength(5), Validators.required]],
      bookAuthor: ['', [Validators.required, Validators.minLength(3)]],
      bookSummary: ['', [Validators.required, Validators.minLength(50)]],
      bookImage: [''],
      bookPrice: ['', Validators.required]
    })
  }

  AddNewBook(newBook : Bookmodel | any){
    console.log("Adding waiiittt");
    this.service.AddBook(newBook).subscribe(
      res => {
      },
      err => {console.log(err);}
    );
  }

}
