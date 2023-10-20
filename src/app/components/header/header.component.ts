import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isActive: boolean = false; 
  @Input() show!: boolean;
  
  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
