import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverColorDirective } from './directives/hover/hover-color.directive';

@NgModule({
  declarations: [HoverColorDirective],
  imports: [CommonModule],
  exports: [HoverColorDirective]
})
export class SharedModule { }
