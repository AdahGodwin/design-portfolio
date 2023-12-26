import { Component } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  ngAfterViewInit() {
    this.animateFooter();
    
  }

  animateFooter() {
   let timeline = gsap.timeline({
    scrollTrigger: {
      trigger:'.social-row',
      // markers: true,
      start: '-100% 100%',
      
    }
   });
  timeline.from('.footer-text',{
    y: -30,
    opacity:0,  
    duration: 1.5,
      stagger: 0.04,
      delay: .4,
    },);
  }
}
