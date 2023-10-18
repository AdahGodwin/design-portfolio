import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isActive: boolean = false; 
  loading = true;

  
  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
