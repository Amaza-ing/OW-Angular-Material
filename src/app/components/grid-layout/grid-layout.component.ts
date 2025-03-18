import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Tile } from '../../models/Tile';

@Component({
  selector: 'app-grid-layout',
  imports: [MatGridListModule],
  templateUrl: './grid-layout.component.html',
  styleUrl: './grid-layout.component.css',
})
export class GridLayoutComponent implements OnInit {
  breakpoint = 500;
  cols = 4;

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  ngOnInit(): void {
    if (window.innerWidth < this.breakpoint) {
      this.cols = 1;
      this.tiles.forEach((tile) => {
        tile.cols = 1;
        tile.rows = 1;
      });
    }
  }
}
