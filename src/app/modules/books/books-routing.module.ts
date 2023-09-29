import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from 'src/app/book/book.component';
import { BooksComponent } from 'src/app/books/books.component';

const routes: Routes = [
  {path:'', component:BooksComponent}, //locahost:4200/books
  {path:':id', component:BookComponent} //locahost:4200/books/101,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
