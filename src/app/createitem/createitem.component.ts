import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';
import { item, UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.scss']
})
export class CreateitemComponent implements OnInit {

  messages: string[] = [];
  uid:any;


  constructor(private afStorage: AngularFireStorage, private developmentservice: UserdataService, public dialogRef: MatDialogRef<CreateitemComponent>) { }

  ngOnInit(): void {
  }

  uploadFile(event:any) {
    const file = event.target.files[0];
    const path = `/image`;
    const fileRef = this.afStorage.ref(path);
    const task = this.afStorage.ref(path).put(file);


    this.afStorage.upload('/upload/to/this-path', event.target.files[0]);  
    task
      .snapshotChanges()
      .pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(profilePicture => {
          console.log('URL->:' + profilePicture);
          this.messages.push(profilePicture);
        });
      })
      )
      .subscribe();

  }
  addItem() {
   
    console.log(this.messages );
    this.dialogRef.close(true)

    if (this.messages  !== undefined) {
      this.developmentservice.privateProjectfindOrCreate(this.uid).then((success: item) => {
        console.log('391', success);
        if (success === undefined) {
          const Newmydialog = this.messages;
          this.developmentservice.createnewproject(Newmydialog, this.uid);
          return (null);
        } else {
          //get data- display/update
          const mydialog = this.messages;
          this.developmentservice.createnewprojectExistingId(mydialog, this.uid);
          return (null);
        }
      });
    }
  }


  cancel() {
    this.dialogRef.close(false)
  }

}


