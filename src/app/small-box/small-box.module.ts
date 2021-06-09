import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglePayButtonModule } from "@google-pay/button-angular";

import { SmallBoxRoutingModule } from './small-box-routing.module';
import { SmallBoxComponent } from './small-box.component';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { CheckoutDialog } from './checkout/checkout-dialog.component';

@NgModule({
  declarations: [
    SmallBoxComponent,
    CheckoutDialog
  ],
  imports: [
    CommonModule,
    SmallBoxRoutingModule,
    AppSharedModule,
    GooglePayButtonModule

  ],
  entryComponents: [CheckoutDialog]
})
export class SmallBoxModule { }
