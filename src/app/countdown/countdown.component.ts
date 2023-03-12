import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AddInfoI, DataInfo, Tabs } from '../interfaces/info.interface';
import { combineLatest, interval } from 'rxjs';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() init!:number;
  counter:number=0;

@Output() Ondecrease:EventEmitter<number> = new EventEmitter();
@Output() Oncomplete:EventEmitter<number> = new EventEmitter();

reiniciarcounter:any = null;
  arreglocrear:Tabs[]=[];
 arreglodelete:Tabs[]=[];
 arregloupdate:Tabs[]=[];

  arr:Tabs={
    idtype:'1',
    nombre:'dfds'
  
  }

 arr2={
  idtype:'12',
  nombre:'ddsadfds'
    
}

arr3={
  idtype:'3',
  nombre:'ds'
    
}

  constructor() { }

  ngOnInit(): void {
console.log(this.init)
  // this.getdata();
  this.conutInit()


  }


  conutInit(){
  
    console.log(this.init)
    if(this.init && this.init > 0){
      this.resetcounter();
  this.counter= this.init
 this.reiniciarcounter= setInterval(()=>{
    if(this.counter<=0){
      this.Ondecrease.emit(this.counter)
      console.log('termiando')
      return;
    
    }else{
      this.counter= this.counter -1
      console.log(Number(this.counter))
     
    }
 


  } ,1000)


}
  }


  private resetcounter(){
if(this.reiniciarcounter){
  clearInterval(this.reiniciarcounter)
  this.reiniciarcounter=null
}
  }

  countdown(){
    

  }

  cunetaregresiva(){

    
  }

  proccesCounter(){

    if(this.counter<=0){
      this.Oncomplete.emit()
      console.log('tiempo concluido')
    return;

    }
  }

  getdata(){

    let data!:AddInfoI;

 
  
    let dataInfo:DataInfo={
      idtype: data?.id,
      nombre:data?.name,
      arrayCreate:this.arreglocrear,
      arrayDelete:this.arreglodelete,
      arryUpdate:this.arregloupdate
     
    }

    let newarry={
      idtype:'dsd',
      nombre:'Thais'
    }

    let newarry2={
      idtype:'444',
      nombre:'Freddyais'
    }

    this.arreglocrear.push(this.arr,this.arr2, this.arr3, newarry, newarry2)




  
   this.arreglodelete.push(this.deleleteItem([...this.arreglocrear], 1)) 
   this.arreglodelete.push(this.deleleteItem([...this.arreglocrear], 3)) 



    console.log(dataInfo)



  }

  deleleteItem(arr:Tabs[], index:number){

    return arr.splice(index,1)[0]

  }

}
