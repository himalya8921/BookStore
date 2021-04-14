import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner.service';


@Component({
  selector: 'app-managecoowners',
  templateUrl: './managecoowners.component.html',
  styleUrls: ['./managecoowners.component.css']
})
export class ManagecoownersComponent implements OnInit {

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
