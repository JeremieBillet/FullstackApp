import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { DataTablesModule } from "angular-datatables";
import { UserBoardComponent } from './user/user-board/user-board.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserTypeFormComponent } from './userType/user-type-form/user-type-form.component';
import { UserTypeBoardComponent } from './userType/user-type-board/user-type-board.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserBoardComponent,
    UserFormComponent,
    UserTypeFormComponent,
    UserTypeBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
