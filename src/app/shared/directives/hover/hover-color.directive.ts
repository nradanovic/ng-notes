import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hoverColor]'
})
export class HoverColorDirective {

  constructor(private el: ElementRef) { }

  @Input('hoverColor') hoverColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.onHover(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.onHover(null);
  }

  private onHover(color: string) {
    this.el.nativeElement.style.fill = color;
  }
}