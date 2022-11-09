import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  constructor(
    public dialogref: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData?: any  ) {

  }

  ngOnInit(): void {
  }

}
