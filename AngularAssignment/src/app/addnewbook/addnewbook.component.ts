import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../shared/book.service';
import { Bookmodel } from '../shared/BookModel.model';

@Component({
  selector: 'app-addnewbook',
  templateUrl: './addnewbook.component.html',
  styleUrls: ['./addnewbook.component.css']
})
export class AddnewbookComponent implements OnInit {

  newBook: Bookmodel | any;
  constructor(private fb: FormBuilder, public service : BookService,public router:Router) { }

  ngOnInit() {
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
    this.service.AddBook(newBook.value).subscribe(
      res => {
        this.router.navigateByUrl('/home');
      },
      err => {console.log(err);}
    );
}
}
