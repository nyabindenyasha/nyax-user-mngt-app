
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { FormViewComponent } from './provider/form-view/form-view.component';
import { TableViewComponent } from './provider/table/table-view/table-view.component';
import { TablePaginationComponent } from './provider/table/table-pagination/table-pagination.component';
import { AppRoutingModule } from './app.routing.module';
import { UsersComponent } from './components/users/users.component';
import { CaptureUsersComponent } from './components/users/capture-users/capture-users.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FormViewComponent,
    TableViewComponent,
    TablePaginationComponent,
    UsersComponent,
    CaptureUsersComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
