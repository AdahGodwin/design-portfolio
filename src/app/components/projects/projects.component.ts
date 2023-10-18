import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
 images: string[] = [
  "assets/images/prod1.png",
  "assets/images/prod2.png",
  "assets/images/prod3.png"
 ];
 selectedIndex: number = 0;
 showPrev(i: number) {
  if (this.selectedIndex > 0) {
    this.selectedIndex = i-1;

  }
 }
 showNext(i: number) {
  if (this.selectedIndex < this.images.length - 1 ) {
    this.selectedIndex = i+1;
    
  }
 }
}
