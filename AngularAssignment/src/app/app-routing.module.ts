import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AddcoownerComponent } from './addcoowner/addcoowner.component';
import { AddcownerComponent } from './addcowner/addcowner.component';
import { AddnewbookComponent } from './addnewbook/addnewbook.component';
import { AuthGuard } from './auth/auth.guard';
import { EditbookComponent } from './editbook/editbook.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagecoownerComponent } from './managecoowner/managecoowner.component';
import { ManagecoownersComponent } from './managecoowners/managecoowners.component';
import { MybookslistComponent } from './mybookslist/mybookslist.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TempComponent } from './temp/temp.component';
import { VisitorhomeComponent } from './visitorhome/visitorhome.component';
import { VisitorshomeComponent } from './visitorshome/visitorshome.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'home',component:HomeComponent},
  {path:'visitorhome',component:VisitorshomeComponent},
  // {path:'visitorhome',component:VisitorhomeComponent,canActivate:[AuthGuard]},
  {path:'addnew',component:AddbookComponent},
  {path:'managecoowner',component:ManagecoownerComponent},
  {path:'temp',component:TempComponent},
  {path:'managecoowners',component:ManagecoownersComponent},
  {path:'addnewbook',component:AddnewbookComponent},
  {path:'editbook',component:EditbookComponent},
  {path:'addcoowner',component:AddcownerComponent},
  {path:'mybooklist',component:MybookslistComponent},

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
