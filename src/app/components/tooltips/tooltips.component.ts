import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltips',
  imports: [MatTooltipModule],
  templateUrl: './tooltips.component.html',
  styleUrl: './tooltips.component.css',
})
export class TooltipsComponent {}
