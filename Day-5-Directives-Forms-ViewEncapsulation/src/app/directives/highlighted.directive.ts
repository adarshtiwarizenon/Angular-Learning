import { Directive, EventEmitter, HostBinding, Input, Output , HostListener } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

   @Input('highlighted')
   isHighlighted = false;

   @Output()
   toggleHighlight = new EventEmitter<boolean>();

  constructor() { 
    console.log("Directive created successfully");
  
  }

@HostBinding('class.highlighted')
get cssClasses() {
  return this.isHighlighted;
}

@HostBinding('attr.disabled')
get disabled() {
  return "true";
}

@HostListener('mouseover', ['$event'])
mouseOver($event: MouseEvent) {

  console.log($event);

  this.isHighlighted = true;
  this.toggleHighlight.emit(this.isHighlighted);
}

@HostListener('mouseleave')
mouseLeave() {
  this.isHighlighted = false;
  this.toggleHighlight.emit(this.isHighlighted);
}

toggle() {
  this.isHighlighted = !this.isHighlighted;
  this.toggleHighlight.emit(this.isHighlighted);
}
}
