export class Promedio {
    
    edad1: string;
    edad2: string ;
     

     constructor(edad1: string, edad2: string){
        this.edad1 = edad1;
        this.edad2 = edad2;
        
     }

     PromedioEdades(edad1:string,edad2:string):string{
         return String(((parseInt(edad1) + parseInt(edad2))) / 2);
      }
     
}
