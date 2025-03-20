import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TooltipsComponent } from "./components/tooltips/tooltips.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TooltipsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
