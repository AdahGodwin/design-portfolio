import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  images: string[] = [
    "assets/images/prod1.png",
    "assets/images/prod2.png",
    "assets/images/prod3.png"
  ];
  //  selectedIndex: number = 0;
  pressed = false;
  startX = 0;

  @ViewChild('wrapperElement') wrapper!: ElementRef;
  @ViewChild('intro') intro!: ElementRef<HTMLDivElement>;
  @ViewChild('heading', { static: true }) heading!: ElementRef<HTMLDivElement>;

  text!: SplitType;
  // onMouseDown(event: MouseEvent) {
  //   this.pressed = true;
  //   this.startX = event.clientX;
  // }

  // onMouseUp() {
  //   this.pressed = false;
  // }

  // @HostListener('document:mouseleave')
  // onMouseLeave() {
  //   this.pressed = false;
  // }

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   if (!this.pressed) {
  //     return;
  //   }

  //   const wrapperElement: HTMLElement = this.wrapper.nativeElement;
  //   wrapperElement.scrollLeft += this.startX - event.clientX;
  // }
  ngOnInit(): void {
    this.text = new SplitType('.text');

    this.animate();

  }

  animate() {
    let textAnimation = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.heading-1 section',
        
          start: 'top 70%',
          // end: 'bottom+=50% 10%'
        },
      }
    )
    textAnimation
    .set(this.text.lines, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      overflow: 'hidden'
    })
    .fromTo('.heading-1 section', {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 1,
      
      ease: "power4.out",
    })
      .fromTo('.hr1', {
        width: 0,
        
      }, {
        width: '100%',
        duration: .3,
        
      }, '-=0.2')
      
      .fromTo(this.text.words, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.7,
        ease: "power4.out",
      },)
      .from("#circle", {
        rotation: 440,
        duration: 1.5,
        ease: "power4.out",
      }, '-=0.5')
      .to('#path', {
        strokeDasharray: '440, ' + '0',
        duration: 1.5,
        ease: "power4.out",
      }, '<')
      .from('.view-text', {
        opacity: 0,
        duration: 1,
        // delay:0.5
      }, '<')
      .from('.card-row', {
        y: 50,
        opacity: 0,
        duration: 0.3,
      }, '<')
  }
}
