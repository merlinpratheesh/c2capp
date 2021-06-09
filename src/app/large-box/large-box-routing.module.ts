import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LargeBoxComponent } from './large-box.component';

const routes: Routes = [{ path: '', component: LargeBoxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LargeBoxRoutingModule { }
