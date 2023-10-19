import { Component } from '@angular/core';

@Component({
  selector: 'app-projectscreen',
  templateUrl: './projectscreen.component.html',
  styleUrls: ['./projectscreen.component.scss']
})
export class ProjectscreenComponent {
  range: number[] = [1, 2, 3, 4, 5];
  selectedIndex: number = 0;
  setIndex(index: number) {
    this.selectedIndex = index;
  }
}
