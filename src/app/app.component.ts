import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { DialogsComponent } from "./components/dialogs/dialogs.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, DialogsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
