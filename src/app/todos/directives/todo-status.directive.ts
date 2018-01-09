import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[status]'
})
export class TodoStatusDirective implements AfterViewInit {

  @Input() status: number;
  constructor(
  	private elementRef: ElementRef
  ) {}  

  ngAfterViewInit() {
  	console.log('Status: ', this.status);
  	switch (this.status) {
  		case 1:
  			this.addClassName('new');
  			break;
		case 2:
			this.addClassName('in-progress');
			break;
		case 3:
			this.addClassName('done');
			break;
  		default:
  			this.addClassName('new');
  			break;
  	}
  }

  addClassName(className) {
  	this.elementRef.nativeElement.className = className;
  }
}
