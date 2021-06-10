import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profileUrl?: Observable<string>;
  profileUrl1?: Observable<string>;
  profile:Observable<string>[]=[];


  constructor(private router: Router,private storage: AngularFireStorage) {
        
    const ref = this.storage.ref('/uid-father.jpg');
    const ref1 = this.storage.ref('/uid-mother.jpg');

    this.profileUrl = ref.getDownloadURL();
    this.profileUrl1 = ref1.getDownloadURL();


    this.profile=[this.profileUrl,this.profileUrl1]
    console.log(this.profile);


   }

  ngOnInit(): void {
  }

}
