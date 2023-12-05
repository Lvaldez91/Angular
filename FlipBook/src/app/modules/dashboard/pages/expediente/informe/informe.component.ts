import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.scss']
})
export class InformeComponent implements OnInit {
  today: Date = new Date();
  pipe = new DatePipe('es');
  fecha:any;
  lugar ?: string;
  constructor(){
  }

ngOnInit(): void {
  this.fecha = this.pipe.transform(Date.now(), 'EEEE, MMMM d, y');
  this.lugar = 'Ciudad de México';
}

}
