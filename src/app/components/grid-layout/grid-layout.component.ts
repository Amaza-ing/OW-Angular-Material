import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Tile } from '../../models/Tile';

@Component({
  selector: 'app-grid-layout',
  imports: [MatGridListModule],
  templateUrl: './grid-layout.component.html',
  styleUrl: './grid-layout.component.css',
})
export class GridLayoutComponent {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
}
