import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-based',
  templateUrl: './location-based.component.html',
  styleUrls: ['./location-based.component.scss']
})
export class LocationBasedComponent implements OnInit {
  @Input() place?:string;

  constructor() { }

  ngOnInit(): void {



    console.log(this.place);
  }

}
