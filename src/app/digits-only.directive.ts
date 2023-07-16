import { Directive, ElementRef, HostListener } from '@angular/core';

 

@Directive({
  selector: '[appDigitsOnly], [appOtherSelector]'
})
export class DigitsOnlyDirective {

 

  constructor(private el: ElementRef) { }

 

  @HostListener('input', ['$event']) onInput(event: any) {
    const inputValue = event.target.value;

 

    if (this.el.nativeElement.hasAttribute('appDigitsOnly')) {
      event.target.value = inputValue.replace(/\D/g, '').slice(0, 6);
    }

 

    if (this.el.nativeElement.hasAttribute('appOtherSelector')) {
      // Perform different logic for the other selector
      // ...
      event.target.value = inputValue.replace(/\D/g, '').slice(0, 10);
    }

 

    if (inputValue !== event.target.value) {
      event.stopPropagation();
    }
  }

 

}