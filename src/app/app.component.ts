import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Item, Location, UserdataService } from './service/userdata.service';
import { map, startWith } from "rxjs/operators";
import { NavigationExtras, Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog } from '@angular/material/dialog';
import { CreateitemComponent } from './createitem/createitem.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myLocationControl = new FormControl();
  myItemControl = new FormControl();

  Location: Location[] = [
    { place: "Nagercoil", value: "nagercoil" },
    { place: "Konam", value: "konam" },
    { place: "Kottar", value: "kottar" },
    { place: "Vetturnimadam", value: "Vetturnimadam" },
    { place: "Vadasery", value: "vadasery" }
  ];
  Items: Item[] = [
    { name: "Cars", value: "car" },
    { name: "Motorcycles", value: "motorCycle" },
    { name: "House", value: "house" },
    { name: "Furniture", value: "furniture" },
    { name: "Books", value: "book" }
  ];



  filteredLocations: Observable<Location[]> | undefined;
  filteredItems: Observable<Item[]> | undefined;
  place: any;
  item:any;
  


  constructor(private router: Router,private storage: AngularFireStorage,
    public dialog: MatDialog, private data: UserdataService) { 

  }

  ngOnInit() {
    this.filteredLocations = this.myLocationControl.valueChanges.pipe(
      startWith(""),
      map(value => (typeof value === "string" ? value : value.place)),
      map(place => (place ? this._filterLocation(place) : this.Location.slice()))
    );
    this.filteredItems = this.myItemControl.valueChanges.pipe(
      startWith(""),
      map(value => (typeof value === "string" ? value : value.name)),
      map(name => (name ? this._filterItem(name) : this.Items.slice()))
    );
  }

  private _filterLocation(place: string): Location[] {
    const filterValueLocation = place.toLowerCase();

    return this.Location.filter(
      option => option.place.toLowerCase().indexOf(filterValueLocation) === 0
    );
  }
  private _filterItem(place: string): Item[] {
    const filterValueItem = place.toLowerCase();

    return this.Items.filter(
      option => option.name.toLowerCase().indexOf(filterValueItem) === 0
    );
  }

  displayFn(user?: Location): string | '' {
    console.log(user ? user.value : "");
    return user ? user.place : '';
  }

  displayFn1(user?: Item): string | '' {
    console.log(user ? user.value : "");
    return user ? user.name : '';
  }

  myMapDetails(){
    this.router.navigate(['/mymapdetails']);

  }

  openAddModal() {
    let dialogRef = this.dialog.open(CreateitemComponent, {
     width: '100%'
   });
 }
 
 getLocation(place: any){
  this.place=place.value;
  this.data.locationService(this.place); 
  this.router.navigate(['', { outlets: { 'centercontent': ['smallBox'] } }],{state:{data:place.value}});
 
  console.log(place.value);
}
 getItem(item: any){
  this.item=item.value;
  this.data.itemService(this.item); 

  this.router.navigate(['', { outlets: { 'centercontent': ['smallBox'] } }],{state:{data:item.value}});

  console.log(item.value);
 }
}
