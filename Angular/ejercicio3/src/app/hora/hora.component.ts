import { Component } from '@angular/core';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css']
})
export class HoraComponent {

  fecha = new Date();
  hora= this.fecha.toLocaleTimeString();
}
