import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeesComponent } from './employees/employees.component';
import { AuthGuard } from './guards/auth.guard';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products', component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'employees', component:EmployeesComponent},
  {path:'tdf', component:TdfComponent},
  {path:'books', loadChildren:()=> import('./modules/books/books.module').then(m => m.BooksModule) },
  {path:'**', component:NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
