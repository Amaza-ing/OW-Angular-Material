import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-tooltips',
  imports: [MatTooltipModule],
  templateUrl: './tooltips.component.html',
  styleUrl: './tooltips.component.css',
})
export class TooltipsComponent {
  tooltipText =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam inventore ad veritatis, repellendus molestias dolorem recusandae ipsam quisquam autem est laborum quasi eos? Quibusdam aliquam officiis similique numquam ex. Fugit?';
  
  showDelay = 500;
  hideDelay = 2000;
}
