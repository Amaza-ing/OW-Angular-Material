import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { OpenDialogComponent } from "./components/open-dialog/open-dialog.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, OpenDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
