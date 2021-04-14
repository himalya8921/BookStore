import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails:any;
  bookDetails:any;
  bookList: any;
    constructor(private router:Router,private service:AccountService) { 
      console.log("Home Loaded");
    }
  
    ngOnInit(): void {
  // this.service.getUsers().subscribe(
  //   res=>{
  //     this.userDetails = res;
  //     console.log(this.userDetails);
  //   },
  //   err=>{
  //     console.log(err);
  //   }
  // )


this.service.getBooks().subscribe(
res=>{
  this.bookList  = res;
  
  console.log(this.bookDetails);
},
err=>{
  console.log(err);
}
)
}



logOut()  
 {
   if(localStorage.getItem('token') != null)
     {
       localStorage.removeItem('token');
     }
     this.router.navigateByUrl('/login');
 }

 DeleteBook(id : number){
  console.log("Krdo delete " + id);
  alert("Are you sure you want to delete this book??");
  this.service.DeleteBook(id).subscribe(
    res =>{
      console.log("Book is Deleted")
    },
    err => {
      console.log(err);
      alert(err);
    }
  )
}

EditBook(id : number){
  console.log("id to be edited is" + id)
  localStorage.setItem('bookid',id.toString());
  this.router.navigateByUrl('/editbook');
}
}