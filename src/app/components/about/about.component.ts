import { Component } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  pageText!: SplitType;
  aboutText!: SplitType;

  ngAfterViewInit(): void {
    this.pageText = new SplitType('.page');
    this.aboutText = new SplitType('.name-1');
    this.animate();
  }

  animate() {
    let timeline = gsap.timeline();
    timeline
      .from(this.pageText.chars, {
        x: 10,
        opacity: 0,
        duration: .4,
        stagger: 0.03,
      })
      .from('.card-cover', {
        height: 0,
        duration: 1,
      }, '-=0.6')
      .to('.img', {
        autoAlpha: 1,
        duration: 0.1,
      },)
      .set('.card-1', {
        backgroundColor: 'black',
        // duration: 0.1
      }, '<')
      .to('.card-cover', {
        height: 0,
        bottom: 0,
        duration:.7,
        
      },)
      .from("#circle-3", {      
        rotation: 440,
        duration: 2,
        ease: "power4.out",
      }, '-=2')
      .from('#path-3', {
        
        strokeDasharray: '0, ' + '440',
        duration: 2,
        ease: "power4.out",
      }, '<')
      .from('.view-text-3', {
      
        opacity: 0,
        y: -10,
        duration: 1,
        // delay:0.5
      }, '<')
      .from(this.aboutText.words, {
        y: 200,
        duration: 1,
        stagger: 0.03,
      },)
  }
}
