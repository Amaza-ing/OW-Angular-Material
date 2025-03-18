import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from "./components/card/card.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-material';
}
