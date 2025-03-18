import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-lists-tables',
  imports: [MatListModule],
  templateUrl: './lists-tables.component.html',
  styleUrl: './lists-tables.component.css',
})
export class ListsTablesComponent {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
}
