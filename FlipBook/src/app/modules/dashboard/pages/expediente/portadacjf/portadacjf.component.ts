import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Articulo } from 'src/app/data/interface/archivo.interface';
import { PortadaService } from 'src/app/data/services/portada.service';

@Component({
  selector: 'app-portadacjf',
  templateUrl: './portadacjf.component.html',
  styleUrls: ['./portadacjf.component.scss']
})
export class PortadacjfComponent implements OnInit{
  private articulo!: Articulo;

  constructor(private service: PortadaService, private fBuild: FormBuilder){

  }

  public form: FormGroup = this.fBuild.group({
    titulo:'',
    txtExpediente:'',
    expediente:'',
    txtPersona:'',
    nombre:'',
    txtFecha:'',
    fechaArchivo:''
  });

  ngOnInit(): void {
    this.getDataPortada();
  }

  getDataPortada():void {
    // this.articulo = this.service.getPortadaData('x');
    // console.log(this.articulo);
    //this.form.setValue({'titulo':this.articulo.})
  }

}
