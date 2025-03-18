import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MenusComponent } from "./components/menus/menus.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MenusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
