import { Component } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerText!: SplitType;
  ngAfterViewInit(): void {
    this.footerText = new SplitType('.footer-text');
    this.animateFooter();
    
  }

  animateFooter() {
    gsap.from(this.footerText.lines,{
      y: -50,
      duration: 1.5,
      stagger: 0.04,
      ease: "bounce.inOut",
      scrollTrigger: {
        trigger:'.social-row',
        // markers: true,
        start: '-100% 100%',
        
      }
    },);
  }
}
