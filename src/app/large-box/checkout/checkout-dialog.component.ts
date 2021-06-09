import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { switchMap, shareReplay, share, take } from 'rxjs/operators';
@Component({
  selector: 'checkout-dialog',
  templateUrl: './checkout-dialog.component.html'
})
export class CheckoutDialog {

    // @Inject(MAT_DIALOG_DATA) public data: any,
  constructor(
    private dialogRef: MatDialogRef<CheckoutDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
        console.log('15',data);
    }

  completeOrder() {

  }
}