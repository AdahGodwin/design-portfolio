import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
 images: string[] = [
  "assets/images/prod1.png",
  "assets/images/prod2.png",
  "assets/images/prod3.png"
 ];
 selectedIndex: number = 0;
 pressed = false;
 startX = 0;

 @ViewChild('wrapperElement') wrapper!: ElementRef;

 onMouseDown(event: MouseEvent) {
   this.pressed = true;
   this.startX = event.clientX;
 }

 onMouseUp() {
   this.pressed = false;
 }

 @HostListener('document:mouseleave')
 onMouseLeave() {
   this.pressed = false;
 }

 @HostListener('document:mousemove', ['$event'])
 onMouseMove(event: MouseEvent) {
   if (!this.pressed) {
     return;
   }

   const wrapperElement: HTMLElement = this.wrapper.nativeElement;
   wrapperElement.scrollLeft += this.startX - event.clientX;
 }
}

