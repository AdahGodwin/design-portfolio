import { Component, ViewChild, ElementRef, HostListener, OnInit, AfterViewInit } from '@angular/core';

interface project {
  name: string,
  image: string,
}

@Component({
  selector: 'app-projectscreen',
  templateUrl: './projectscreen.component.html',
  styleUrls: ['./projectscreen.component.scss']
})

export class ProjectscreenComponent {
  pressed = false;
 startX = 0;

 @ViewChild('container', { static: false }) container!: ElementRef;
  images: project[] = [
    {
      name: "RousoLletti",
      image: "assets/images/img1.png"
    },
    {
      name: "Kasper",
      image: "assets/images/img2.png",
    },
    {
      name: "LingoLoLo",
      image: "assets/images/img3.png",
    },

    {
      name: "Kapsul",
      image: "assets/images/img4.png",
    },
  ];
  sections!: HTMLElement[];
  selectedIndex: number = 0;
  isHovered = false;

  ngAfterViewInit(): void {
    this.sections = Array.from(document.querySelectorAll('.image'));
    this.container.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }
//  onMouseDown(event: MouseEvent) {
//    this.pressed = true;
//    this.startX = event.clientX;
//  }

//  onMouseUp() {
//    this.pressed = false;
//  }

//  @HostListener('document:mouseleave')
//  onMouseLeave() {
//    this.pressed = false;
//  }

//  @HostListener('document:mousemove', ['$event'])
//  onMouseMove(event: MouseEvent) {
//    if (!this.pressed) {
//      return;
//    }

//    const wrapperElement: HTMLElement = this.container.nativeElement;
//    wrapperElement.scrollLeft += this.startX - event.clientX;
//  }

  onScroll() {
    var windowWidth: number = window.innerWidth;
    var windowHeight: number = this.isHovered === true ? window.innerHeight * 0.7 : window.innerHeight;
    var windowValue: number = windowWidth > 700 ? windowHeight : windowWidth;
    var scrollValue: number = windowWidth > 700 ? this.container.nativeElement.scrollTop : this.container.nativeElement.scrollLeft;

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