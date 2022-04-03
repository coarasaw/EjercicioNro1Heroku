import { Component } from '@angular/core';
import { Promedio } from './Entidades/promedio';
import { Suma } from './Entidades/suma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Ejercicio 1 - SUMA de Edades ';
  
  edad1: string = '';
  edad2: string = '';
  resultadoSuma: Suma ;
  verSuma : string = '';
  verPromedio: string = '';
  resultadoPromedio : Promedio;

  constructor(){
    this.resultadoSuma = new Suma(this.edad1,this.edad2);
    this.resultadoPromedio = new Promedio(this.edad1,this.edad2);
  }
  
  PromedioEdades(){
    this.verPromedio = this.resultadoPromedio.PromedioEdades(this.edad1,this.edad2);
  }
  
  SumaEdades(){
    this.verSuma = this.resultadoSuma.Suma(this.edad1,this.edad2);
  }

  Limpiar()
  {
    this.edad1 = '';
    this.edad2 = '';
    this.verPromedio = '';
    this.verSuma = '';
  }
}
