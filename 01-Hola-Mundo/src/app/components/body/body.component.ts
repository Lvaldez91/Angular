import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{
    mostrar = true;

    frase: any = {
        mensaje : 'Para amar se necesita coraje.',
        autor : 'Lucero Valdez'
    };

    personajes: string[] = ['Opcion 1', 'Opcion 2', 'Opcion 3', 'Opcion 4'];
}
