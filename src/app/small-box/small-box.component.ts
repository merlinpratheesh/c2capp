import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReadyToPayChangeResponse } from '@google-pay/button-angular';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { finalItem, UserdataService } from '../service/userdata.service';
import { CheckoutDialog } from './checkout/checkout-dialog.component';

@Component({
  selector: 'app-small-box',
  templateUrl: './small-box.component.html',
  styleUrls: ['./small-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})



export class SmallBoxComponent implements AfterViewInit {
  place: any;
  item: any;
  locationData: any;
  itemData:any;

  
  Sections = of(undefined);
  getSectionsSubscription?: Subscription;
  getSectionsBehaviourSub = new BehaviorSubject(undefined as any);
  getSections = (MainAndSubSectionkeys: AngularFirestoreDocument<finalItem>) => {
    if (this.getSectionsSubscription !== undefined) {
      this.getSectionsSubscription.unsubscribe();
    }
    this.getSectionsSubscription = MainAndSubSectionkeys.valueChanges().subscribe((val: any) => {
      if (val === undefined) {
        this.getSectionsBehaviourSub.next(undefined as any);
      } else {
        if (val.item.length === 0) {
          this.getSectionsBehaviourSub.next(null as any);
        } else {
          if (val.item.length !== 0) {
            this.getSectionsBehaviourSub.next(val.item);
          }
        }
      }
    });
    return this.getSectionsBehaviourSub;
  };
  filterdItems: BehaviorSubject<any> | undefined;
 

  constructor( public auth: UserdataService ,private db: AngularFirestore,) {


  }
  ngOnInit(): void {
    this.auth.locationService$.subscribe((locationData) => {
      if (locationData === null || locationData === undefined) {
        console.log(locationData);
      }
      else {
        this.locationData = locationData; // And he have data here too!
        console.log(locationData);
      }
    }
    );

    
    this.auth.itemService$.subscribe((itemData) => {
      if (itemData === null || itemData === undefined) {
        console.log(itemData);
      }
      else {
        this.itemData = itemData; // And he have data here too!
        console.log(itemData);
      }
    }
    );

    console.log(this.locationData,this.itemData);



    this.filterdItems = this.getSections((this.db.doc('/nagercoil/'+this.itemData)));
    console.log(this.filterdItems);
    

  }

  ngAfterViewInit() {

  
  }
  

}
