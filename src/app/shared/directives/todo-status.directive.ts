import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTodoStatus]'
})
export class TodoStatusDirective implements OnInit {
  @Input('appTodoStatus') appTodoStatus: number;
  constructor(
    private el: ElementRef,
    private rederer: Renderer2
  ) { }

  ngOnInit() {
    this.rederer.setStyle(this.el.nativeElement, 'backgroundColor', this.handleStatus(this.appTodoStatus));
  }

  handleStatus(status: number): string {
    let colorStatus = '';
    switch (status) {
      case 1:
        colorStatus = 'blue';
        break;
      case 2:
        colorStatus = 'yellow';
        break;
      case 3:
        colorStatus = 'green';
        break;
      default:
        colorStatus = 'red';
        break;
    }

    return colorStatus;
  }

}
