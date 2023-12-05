import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PortadaService } from 'src/app/data/services/portada.service';


@Component({
  selector: 'app-informe-0',
  templateUrl: './informe-0.component.html',
  styleUrls: ['./informe-0.component.scss']
})
export class Informe0Component implements OnInit{
  constructor(private router: Router,private portada:PortadaService){

  }

  ngOnInit(): void {
    this.getDataPortada();
  }

  getDataPortada():void{
    try{

    }catch (e) {}
  }
}
