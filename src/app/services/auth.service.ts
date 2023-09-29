import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router){}

  inputUserName:string = "chiru"
  inputPassword:string = "chiru1234"

  dbUserName:string = "chiru"
  dbPassword:string = "chiru123"

  isUserLoggedIn(){
    if(this.inputUserName === this.dbUserName && this.inputPassword === this.dbPassword){
      return true
    }
    else {
      alert('You are not eligible to access this page')
      return false
    }
  }

  // logout(){
  //   this.router.navigate(['/home'])
  // }
}
