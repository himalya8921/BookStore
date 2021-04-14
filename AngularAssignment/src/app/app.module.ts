import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { TempComponent } from './temp/temp.component';
import { ManagecoownersComponent } from './managecoowners/managecoowners.component';
import { AddnewbookComponent } from './addnewbook/addnewbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { AddcownerComponent } from './addcowner/addcowner.component';
import { MybookslistComponent } from './mybookslist/mybookslist.component';
import { VisitorshomeComponent } from './visitorshome/visitorshome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    TempComponent,
    ManagecoownersComponent,
    AddnewbookComponent,
    EditbookComponent,
    AddcownerComponent,
    MybookslistComponent,
    VisitorshomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor()
  {
    console.log("App Module loaded")
  }
}


