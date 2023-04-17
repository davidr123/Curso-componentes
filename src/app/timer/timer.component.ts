import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() init!: number;
  counter: number = 0;

  @Output() Ondecrease: EventEmitter<number> = new EventEmitter();
  @Output() Oncomplete: EventEmitter<number> = new EventEmitter();
  reiniciarcounter: any = null;
  pause:boolean=true;
  private countDownSubscription!:Subscription

  constructor() { }

  ngOnInit(): void {
    if(this.init && this.init>0){
      this.counter= this.init
    }
  }


  ngOnDestroy(): void {
 this.clearTimeout();
  }


  conutInit() {
    if (this.init && this.init > 0) {
      this.pause=true

      // this.resetcounter();
      this.counter = this.init
      this.clearTimeout();
      this.counter= this.init
      
      // this.reiniciarcounter = setInterval(() => {
      //   if (this.counter <= 0) {
      //     this.Ondecrease.emit(this.counter)
      //     console.log('termiando')
      //     return;
      //   } else {
      //     this.counter = this.counter - 1
      //     console.log(Number(this.counter))
      //   }
      // }, 1000)
    }
  }

  dountContdown(){
    this.reiniciarcounter = setInterval(() => {
      this.counter= this.counter -1
    }, 1000);
  }

  // toggleCountdown(){
  //   this.pause= !this.pause
  //   if(this.pause==false){
  //     this.reiniciarcounter= setInterval(()=>{
  //       this.counter = this.counter - 1
  //     this.reiniciarcounter = setInterval(() => {
  //       if (this.counter <= 0) {
  //         this.Ondecrease.emit(this.counter)
  //         console.log('termiando')
  //         return;
  //       } else {
  //         this.counter = this.counter - 1
  //         this.pause=true
  //         console.log(Number(this.counter))
  //       }
  //     }, 1000)
  //     })
  //   }
  // }

  toogleCountDown(){
    this.pause= !this.pause;
    if(this.pause==false){
      this.dountContdown();
    }else{
      this.clearTimeout()
    }
  }


  private resetcounter() {
    if (this.reiniciarcounter) {
      clearInterval(this.reiniciarcounter)
      this.reiniciarcounter = null
    }
  }

  get progress(){
    return (this.init-this.counter)/this.init*100
  }

  proccesCounter() {

    if (this.counter <= 0) {
      this.Oncomplete.emit()
      console.log('tiempo concluido')
      return;

    }else{
      this.dountContdown()
    }
  }
  private clearTimeout(){
    if(this.reiniciarcounter){
      clearTimeout(this.reiniciarcounter);
      this.reiniciarcounter = null;
    }
  }

}
