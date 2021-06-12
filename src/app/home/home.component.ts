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

  members: {title: string, subtitle: string, content: string, url: string}[] = [
    
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: 'Content here', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    
   
  ];

  
  constructor(private router: Router,private storage: AngularFireStorage) {
        
    this.profileUrl = this.storage.ref('/uid-father.jpg').getDownloadURL();
    this.profileUrl1 = this.storage.ref('/uid-mother.jpg').getDownloadURL();


    this.profile=[this.profileUrl,this.profileUrl1]
    console.log(this.profile);





   }

  ngOnInit(): void {
  }

}
