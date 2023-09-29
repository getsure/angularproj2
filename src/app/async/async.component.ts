import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, delay, of } from 'rxjs';

interface Product{
  id:number,
  name:string
}

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit, OnDestroy {

  products$:Observable<Product[]> | undefined
  subscription:Subscription | undefined
  constructor() { }

  ngOnInit(): void {
    this.products$ = of([
      {id:101, name:'samsung tv'},
      {id:102, name:'lg tv'},
      {id:103, name:'oninda'}
    ]).pipe(delay(1000))
    this.subscription = this.products$.subscribe()
  }

  ngOnDestroy(): void {
      if(this.subscription)
        this.subscription.unsubscribe()
  }

}
