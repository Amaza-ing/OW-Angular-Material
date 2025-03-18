import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { GridLayoutComponent } from "./components/grid-layout/grid-layout.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, GridLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-material';
}
