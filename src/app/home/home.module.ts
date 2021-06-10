import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AppSharedModule } from '../app-shared/app-shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    AppSharedModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
