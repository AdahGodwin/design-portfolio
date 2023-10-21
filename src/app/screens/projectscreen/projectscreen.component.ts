import { Component, ViewChild, ElementRef, HostListener, OnInit, AfterViewInit } from '@angular/core';

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
  // windowHeight!: number;
  // windowWidth!: number;
  sections!: HTMLElement[];
  selectedIndex: number = 0;
  isHovered = false;

  ngAfterViewInit(): void {
    // this.windowHeight = window.innerHeight;
    // this.windowWidth = window.innerWidth;
    this.sections = Array.from(document.querySelectorAll('.image'));
    this.container.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    var windowWidth: number = window.innerWidth;
    var windowHeight: number = this.isHovered === true ? window.innerHeight * 0.7 : window.innerHeight;
    var windowValue: number = windowWidth > 700 ? windowHeight: windowWidth;
    var scrollValue:number = windowWidth > 700 ? this.container.nativeElement.scrollTop: this.container.nativeElement.scrollLeft;
    
    this.sections.forEach((section, i) => {
      const sectionOffsetValue = windowWidth > 700 ? section.offsetTop : section.offsetLeft;

        if (
          sectionOffsetValue < scrollValue + windowValue / 2 &&
          scrollValue < sectionOffsetValue + windowValue / 2
        ) {
          this.selectedIndex = i;
        }
      
    });
  }
  setIndex(index: number) {
    if (window.innerWidth > 700) {
      this.isHovered = true;
      this.scrollToIndex(index);

    }
  }

  scrollToIndex(index: number) {
    var windowHeight = this.isHovered === true ? window.innerHeight * 0.7 : window.innerHeight;
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