import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnChanges {

  @Input() time!:number;
  minutes:string='00';
  seconds:string='00'
  constructor() { }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  const minutes= Math.trunc(changes['time'].currentValue / 60);
  const seconds= changes['time'].currentValue - minutes *60;

  this.minutes=("0" + minutes).substring(-2);
  this.seconds=("" + seconds).substring(-2);
  
  }

}
