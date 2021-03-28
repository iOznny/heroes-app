import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Interfaces
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html'
})

export class ConfirmDeleteComponent {

  constructor(private dialogRef: MatDialogRef<ConfirmDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  public delete() {
    this.dialogRef.close(true);
  }

  public close() {
    this.dialogRef.close();
  }

}
