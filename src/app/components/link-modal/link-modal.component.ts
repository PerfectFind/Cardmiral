import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-link-modal',
  templateUrl: './link-modal.component.html',
  styleUrls: ['./link-modal.component.scss']
})
export class LinkModalComponent {

  constructor(
    public dialogRef: MatDialogRef<LinkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

}
