import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero:number=5

  counterProgress:number=0
  totalCountdown:number= 15


  updateProgress($event:any){
    this.counterProgress= (this.totalCountdown - $event)/this.totalCountdown*100;

  }

  countdownFinish(){
    console.log('finalizado')
  }

}
