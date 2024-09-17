import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddBookPageComponent } from './components/management/add-book-page/add-book-page.component';
import { BookManagementComponent } from './components/management/book-management/book-management.component';
import { EditBookComponent } from './components/management/edit-book/edit-book.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  //Management
  { path: 'book-management', 
    component: BookManagementComponent,
    children: [
      {
        path: 'add-book',
        component: AddBookPageComponent
      },
      {
        path: 'edit-book/:id',
        component: EditBookComponent
      }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
