import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-visitorshome',
  templateUrl: './visitorshome.component.html',
  styleUrls: ['./visitorshome.component.css']
})
export class VisitorshomeComponent implements OnInit {
  bookList: any;
  constructor(public service:AccountService) { }

  ngOnInit(): void {
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
