import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogsComponent } from '../dialogs/dialogs.component';

@Component({
  selector: 'app-open-dialog',
  imports: [MatButtonModule],
  templateUrl: './open-dialog.component.html',
  styleUrl: './open-dialog.component.css',
})
export class OpenDialogComponent {
  readonly dialog = inject(MatDialog);

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogsComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
