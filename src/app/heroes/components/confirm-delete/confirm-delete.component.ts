import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Interfaces
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styles: [
  ]
})

export class ConfirmDeleteComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmDeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
  }

  public delete() {
    this.dialogRef.close(true);
  }

  public close() {
    this.dialogRef.close();
  }

}
