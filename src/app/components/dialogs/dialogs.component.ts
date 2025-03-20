import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { OpenDialogComponent } from '../open-dialog/open-dialog.component';

@Component({
  selector: 'app-dialogs',
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './dialogs.component.html',
  styleUrl: './dialogs.component.css',
})
export class DialogsComponent {
  readonly dialogRef = inject(MatDialogRef<OpenDialogComponent>);
  data = inject(MAT_DIALOG_DATA)
}
