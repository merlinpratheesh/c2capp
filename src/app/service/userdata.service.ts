import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import firebase from 'firebase/app';

export interface Location {
  place: string;
  value: string;
}
export interface Item {
  name: string;
  value: string;
}
export interface finalItem {
 
  imageUrl?: string;

}

@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  leftMenuPress = new Subject();

  locationService$: Observable<any>;
  private locationServiceSubject = new BehaviorSubject<any>(this.locationService);

  itemService$: Observable<any>;
  private itemServiceSubject = new BehaviorSubject<any>(this.itemService);





  constructor(private db: AngularFirestore) {

    this.locationService$ = this.locationServiceSubject.asObservable();

    this.itemService$ = this.itemServiceSubject.asObservable();



  }
  locationService(data: any) {
    console.log(data);
    this.locationServiceSubject.next(data);
  }

  itemService(data: any) {
    console.log(data);
    this.itemServiceSubject.next(data);
  }



  privateProjectExists(uid: string): any {
    return this.db.doc(`itemList/` + 'uid').valueChanges().pipe(first()).toPromise();
  }
  async privateProjectfindOrCreate(uid: string): Promise<finalItem> {
    const project: finalItem = await this.privateProjectExists(uid);
    console.log('110 returned', project);

    if (project) {
      console.log('110', uid);
      return project;
    } else {
      return undefined as any;
    }
  }
  async createnewproject(updatedProject: any, uid: string): Promise<void> {
    console.log(updatedProject);
    await this.db.firestore.runTransaction(() => {
      const promise = Promise.all([

        this.db.collection('itemList/').doc('uid').set(
          {
            private: firebase.firestore.FieldValue.arrayUnion(updatedProject),
          }),

        this.db.collection('itemList/').doc('publicItem').update(
          {
            public: firebase.firestore.FieldValue.arrayUnion(updatedProject),

          })]);

      return promise;
    });
  }
  async createnewprojectExistingId(updatedProject: any, uid: string): Promise<void> {
    console.log(updatedProject);

    await this.db.firestore.runTransaction(() => {
      const promise = Promise.all([

        this.db.collection('itemList/').doc('uid').update(
          {
            private: firebase.firestore.FieldValue.arrayUnion(updatedProject),
          }),

        this.db.collection('itemList/').doc('publicItem').update(
          {
            public: firebase.firestore.FieldValue.arrayUnion(updatedProject),

          }),

      ]);

      return promise;
    });
  }


}
