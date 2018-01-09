import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';
import { PermissionsService } from './../services/permissions.service';

@Directive({
  selector: '[permissions]'
})
export class PermissionsDirective implements AfterViewInit {

  @Input() permissions: any;
  constructor(
  	private permissionsService: PermissionsService,
  	private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
  	this.elementRef.nativeElement.style.display = 'none';
  	if(this.hasPermissions(this.permissions.r, this.permissions.p)) {
  		this.elementRef.nativeElement.style.display = 'inherit';
  	} else {
  		this.elementRef.nativeElement.remove();
  	}
  }

  hasPermissions(resource:string, action: string) {
  	return this.permissionsService.hasPermission(resource, [action]);
  }
}
