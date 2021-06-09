import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReadyToPayChangeResponse } from '@google-pay/button-angular';
import { Subscription } from 'rxjs';
import { UserdataService } from '../service/userdata.service';
import { CheckoutDialog } from './checkout/checkout-dialog.component';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
};
@Component({
  selector: 'app-small-box',
  templateUrl: './small-box.component.html',
  styleUrls: ['./small-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class SmallBoxComponent {}