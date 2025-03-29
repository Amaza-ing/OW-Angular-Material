import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {
  features = [
    {
      icon: 'bolt',
      title: 'Rápido',
      description: 'Carga veloz y rendimiento optimizado.',
    },
    {
      icon: 'security',
      title: 'Seguro',
      description: 'Tu información siempre protegida.',
    },
    {
      icon: 'thumb_up',
      title: 'Fácil de usar',
      description: 'Una experiencia intuitiva para todos.',
    },
  ];
}
