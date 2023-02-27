import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero1='';
  numero2='';
  sumar() {
    var resultado = parseInt(this.numero1) + parseInt(this.numero2);
    alert(resultado)
    if(resultado>100){
      alert("El resultado es mayor que 100")
    }else{
      alert("El resultado es menor que 100")
    }

  }
}
