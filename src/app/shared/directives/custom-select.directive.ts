import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[customSelect]',
  standalone: true
})
export class CustomSelectDirective {

  constructor(private elRef: ElementRef, private renderer2: Renderer2) {
    if (elRef.nativeElement.nodeValue === null) {
      this.renderer2.setStyle(elRef.nativeElement, 'color', 'rgb(117, 117, 117)');
    }
  }
  @HostListener('change', ['$event.target'])
  onChange(target: HTMLSelectElement) {
    const selectedValue = target.value;
    if (selectedValue !== null) {
      this.renderer2.setStyle(this.elRef.nativeElement, 'color', '#0D062D')
    }
  }
}
