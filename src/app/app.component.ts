import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TablesComponent } from "./components/tables/tables.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
