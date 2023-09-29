import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {

  private url:string = 'http://localhost:3000/employees'
  constructor(private httpClient:HttpClient){}
  submitData(data:any){
    //console.log(data.value)
    this.httpClient.post(this.url, data.value).subscribe(res=>{
      console.log('Data Saved successfully...', res)
    })

  }
}
