import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[apptabactive]'
})

export class AppTabActiveDirective{
    
    @HostBinding('class.active') isOpen = false;

    @HostListener('click') toggleOpen(){
      this.isOpen = !this.isOpen;
    }
}