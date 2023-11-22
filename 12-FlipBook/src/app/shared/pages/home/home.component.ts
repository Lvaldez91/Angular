import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { typeLayout } from '../../constants/layout-variable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  constructor(){
    //typeLayout.tipo = 0;
  }
}
