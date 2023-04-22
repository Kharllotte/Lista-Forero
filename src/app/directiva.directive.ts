import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiva]'
})
export class DirectivaDirective {

  constructor( private elemento: ElementRef, private render: Renderer2) {
    render.setStyle(elemento.nativeElement, 'color', 'blue')
   }

}
