import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LargeBoxRoutingModule } from './large-box-routing.module';
import { LargeBoxComponent } from './large-box.component';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { CheckoutDialog } from './checkout/checkout-dialog.component';

@NgModule({
  declarations: [
    LargeBoxComponent,
    CheckoutDialog
  ],
  imports: [
    CommonModule,
    LargeBoxRoutingModule,
    AppSharedModule,
    GooglePayButtonModule
  ],
  entryComponents: [CheckoutDialog]
})
export class LargeBoxModule {

  
 }
