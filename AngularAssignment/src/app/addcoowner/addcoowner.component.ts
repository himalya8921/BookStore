import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner.service';

@Component({
  selector: 'app-addcoowner',
  templateUrl: './addcoowner.component.html',
  styleUrls: ['./addcoowner.component.css']
})
export class AddcoownerComponent implements OnInit {

  constructor(public service: OwnerService) { }
  nonOwnerList: any;
  
  ngOnInit(): void {
    this.service.GetNonOwnerList().subscribe(
      res => {
        console.log("aaaaajjaaaa");
        this.nonOwnerList = res;
        console.log(this.nonOwnerList);
      },
      err => {
        console.log(err);
      }
    )
  }

  AddOwner(userId : number){
      console.log("Are you sure you want to make this user an owner??");
      this.service.AddOwner(userId).subscribe(
        res =>{
          console.log("Owner is Added");
        },
        err => {
          console.log(err);
          alert(err);
        }
      )
      window.location.reload();
  }
}
