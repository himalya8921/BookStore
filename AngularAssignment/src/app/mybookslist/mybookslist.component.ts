import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorsService } from '../shared/visitors.service';

@Component({
  selector: 'app-mybookslist',
  templateUrl: './mybookslist.component.html',
  styleUrls: ['./mybookslist.component.css']
})
export class MybookslistComponent implements OnInit {

  
  constructor(public service: VisitorsService, private router: Router) { }
  mybookList: any;
  bookId: number|any;

  ngOnInit(): void {
    this.service.GetMyBookList(1).subscribe(
      res => {
        this.mybookList = res;
        console.log(this.mybookList);
      },
      err => {
        console.log(err);
      })
  }

  GetId(id : number){
    console.log("aagya " + id);
    this.bookId = id;
    console.log(this.bookId);
  }
}
