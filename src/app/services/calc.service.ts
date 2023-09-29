import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  addOpertion(a:number, b:number){
    return a+b;
  }
}
