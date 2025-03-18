import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ListsTablesComponent } from "./components/lists-tables/lists-tables.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ListsTablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
