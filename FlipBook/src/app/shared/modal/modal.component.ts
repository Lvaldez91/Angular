import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() TituloModal: string = '';
  @Input() Pregunta: string = '';
  @Input() TextoBtn: string = '';
  @Input() txtAreaTexto: string = '';
  Id: string = '';

  constructor() {
    this.txtAreaTexto = '';
  }

  ngOnInit(): void {
    this.getBuildModal();
  }

  getBuildModal() {
    if (this.TituloModal == '') {
      this.TituloModal = 'Motivos de Archivado Ejemplo';
    }

    if (this.Pregunta == '') {
      this.Pregunta = '¿Porque se cierra el caso? Ejemplo';
    }

    if (this.TextoBtn == '') {
      this.TextoBtn = 'Archivar Caso Ejemplo';
    }
  }

  closeModal(): void {
    this.txtAreaTexto = '';
  }

  getId(id: string): void {
    this.Id = id;
  }

  saveReason(): void {
    this.txtAreaTexto = '';
  }
}
