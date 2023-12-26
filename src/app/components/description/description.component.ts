import { Component, OnInit } from '@angular/core';
import SplitType from 'split-type';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  text!: SplitType;

  ngAfterViewInit(): void {
    this.text = new SplitType('.tag');
  this.animateText();
  }
  animateText() {
    let textAnimation = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '.heading-2 section',
          start: "bottom 90%",
        }
      }
    )
    textAnimation
    .set(this.text.lines, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      overflow: 'hidden',
      duration: 0.1,
    },'<')
    .fromTo('.heading-2 section', {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.03,
      duration: 1,
      
      ease: "power4.out",
    })
      .fromTo('.hr-2', {
        width: 0,
        
      }, {
        width: '100%',
        duration: .3,
        
      }, '-=0.5')
      
      .fromTo(this.text.words, {
        y: 120,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "expo.inOut",
      },'<')
  }
}
