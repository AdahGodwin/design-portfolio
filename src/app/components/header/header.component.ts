import { Component, ElementRef, Input, ViewChild, OnInit, Inject } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @ViewChild('header', { static: true })
  headerSection!: ElementRef<HTMLDivElement>;

  isActive: boolean = false; 
  @Input() show!: boolean;
  
  toggleMenu() {
    this.isActive = !this.isActive;
  }
  ngAfterViewInit(){
    this.animateHeader();
  }
  animateHeader() {
    gsap.from(this.headerSection.nativeElement, {
      duration: 1,
      opacity: 0,
      y: -200,
      // delay:0.3,
    })
  }
}
