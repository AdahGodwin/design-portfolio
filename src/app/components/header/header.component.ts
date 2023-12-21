import { Component, ElementRef, Input, ViewChild, OnInit, Inject } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('header', { static: true })
  headerSection!: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  isActive: boolean = false; 
  @Input() show!: boolean;
  
  toggleMenu() {
    this.isActive = !this.isActive;
  }
  ngOnInit(): void {
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
