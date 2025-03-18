import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menus',
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css',
})
export class MenusComponent {
  showAlert() {
    alert('Hola a todos!');
  }
}
