import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MdfComponent } from './mdf/mdf.component';
import { AsyncComponent } from './async/async.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NotFoundComponent,
    EmployeesComponent,
    TdfComponent,
    MdfComponent,
    AsyncComponent,
    BooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
