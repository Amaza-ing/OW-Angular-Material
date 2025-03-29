import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FeaturesComponent } from "./components/features/features.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, FeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
