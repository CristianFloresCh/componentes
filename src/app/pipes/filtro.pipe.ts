import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any, texto:string=''): any[] {
    console.log("arreglo");
    console.log(arreglo);
    console.log("Texto: '"+texto+"'");
    if(texto===''){
      return arreglo;
    }
    if(!arreglo){
      return arreglo;
    }
    texto=texto.toLowerCase();
    return arreglo.filter(
      item => item.title.toLowerCase().includes(texto)
    );
  }

}
