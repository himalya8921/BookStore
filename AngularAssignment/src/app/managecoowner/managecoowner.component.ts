import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-managecoowner',
  templateUrl: './managecoowner.component.html',
  styleUrls: ['./managecoowner.component.css']
})
export class ManagecoownerComponent implements OnInit {

  constructor(public service: OwnerService) { }

  ownerList: any;

  ngOnInit(): void {

    this.service.GetOwnerList().subscribe(
      res => {
        this.ownerList = res;
        console.log(this.ownerList);
      },
      err => {
        console.log(err);
      }
    )
  }


  RemoveOwner(userId : number){
    console.log("Are you sure you want to delete this book??");
    this.service.RemoveOwner(userId).subscribe(
      res =>{
        console.log("Owner is Removed")
      },
      err => {
        console.log(err);
        alert(err);
      }
    )
  }



}
