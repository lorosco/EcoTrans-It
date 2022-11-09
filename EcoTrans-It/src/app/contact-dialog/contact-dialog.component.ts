import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, take } from 'rxjs';

interface ContactMessage {
  to: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss'],
})
export class ContactDialogComponent implements OnInit {

  message: ContactMessage;

  // messageControl: FormControl;

  // subjectControl: FormControl;

  // toControl: FormControl;

  to: string;

  constructor(
    private http: HttpClient,
    // private _formBuilder: FormBuilder,
    public dialogref: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData?: any
  ) {
    // this.messageControl = new FormControl();
    this.message = dialogData.message;
    this.to = dialogData.manager;
  }

  ngOnInit(): void {
    console.log(this.to,"debug dialog data from main")
  }

  displayMessageSuccess(contactSuccess: boolean) {

  }

  contactManager(message: ContactMessage) {
    this.http
      .post<ContactMessage>('http://localhost:8080/send-mail', message, {
        observe: 'response',
      })
      .pipe(
        map((res) => {
          console.log(res);
          if (res.ok) {
            this.displayMessageSuccess(true);
          } else {
            this.displayMessageSuccess(false);
            console.log('ERROR failed to send message', message, res);
          }
        })
      );
  }

  cancel(){
    this.message= {
      to: "",
      subject: "",
      message: ""
    }
    this.dialogref.close();
  }

  close(){
    this.dialogref.close();
  }
}
