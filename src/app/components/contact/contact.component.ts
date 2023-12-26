import { Component, ElementRef, AfterViewInit, ViewChild, } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  @ViewChild('svgBorder') pathElement!: ElementRef<SVGPathElement>;

connectText!: SplitType;

  ngAfterViewInit(): void {
  this.connectText = new SplitType('.connect, .text-1');
  this.animation();
  
} 
  animation() {
    let pathLength: string = this.pathElement.nativeElement.getTotalLength().toString();
    let animationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#svg-border',
        start: "20% 100%"
      }
    });

    animationTimeline
    .fromTo('#svg-border', {
      strokeDasharray: '0, ' + pathLength,
      opacity:0
    },{
      strokeDasharray: pathLength +',' + ' 0',
      duration: 2.5,
      ease: "linear",
      opacity:1
    },)
    .from(this.connectText.chars,{
      y: 200,
      duration: 1.5,
      stagger: 0.03,
      ease: "power4.out",
    }, '<')
    .from("#circle-2", {
      
      rotation: 440,
      duration: 2,
      ease: "power4.out",
    }, '-=1')
    .from('#path-2', {
      
      strokeDasharray: '0, ' + '440',
      duration: 2,
      ease: "power4.out",
    }, '<')
    .from('.view-text-2', {
      
      opacity: 0,
      y: -10,
      duration: 1,
      // delay:0.5
    }, '<')
  }
}
