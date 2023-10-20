import { Component, ViewChild, ElementRef, HostListener, OnInit,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projectscreen',
  templateUrl: './projectscreen.component.html',
  styleUrls: ['./projectscreen.component.scss']
})
export class ProjectscreenComponent {
  @ViewChild('container', { static: false }) container!: ElementRef;
  images: string[] = [
    "assets/images/img1.png",
    "assets/images/img2.png",
    "assets/images/img2.png",
    "assets/images/img3.png",
    "assets/images/img4.png",
    "assets/images/img4.png",
   ];
   windowHeight!: number;
   sections!: HTMLElement[];
   selectedIndex: number = 0;
   isHovered = false;
 
   ngAfterViewInit(): void {
     this.windowHeight = window.innerHeight;
     this.sections = Array.from(document.querySelectorAll('.image'));
     this.container.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }
 
   onScroll() {
     const scrollTop = this.container.nativeElement.scrollTop; 
     this.sections.forEach((section, i) => {
       const sectionOffsetTop = section.offsetTop;
       var windowHeight = this.isHovered === true ? this.windowHeight * 0.7: this.windowHeight;
       if (
         sectionOffsetTop < scrollTop + windowHeight / 2 &&
         scrollTop < sectionOffsetTop + windowHeight / 2
       ) {
         this.selectedIndex = i;
       }
     });
   }
  setIndex(index: number) {
    this.isHovered = true;
    this.scrollToIndex(index);
  }
  
  scrollToIndex(index: number) {
    var windowHeight = this.isHovered === true ? this.windowHeight * 0.7: this.windowHeight;
    if (index >= 0 && index < this.images.length) {
      this.container.nativeElement.scrollTo({
        top: index * windowHeight,
        behavior: "smooth"
      });
      // const itemElement = this.container.nativeElement.querySelector(`div:nth-child(${index + 1}`);
  
      // if (itemElement) {
      //   itemElement.scrollIntoView({ behavior: 'smooth' });
        
      // }
    }
  }
  
}
