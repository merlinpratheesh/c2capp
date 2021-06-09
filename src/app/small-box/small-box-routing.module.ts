import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmallBoxComponent } from './small-box.component';

const routes: Routes = [{ path: '', component: SmallBoxComponent },



];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmallBoxRoutingModule { }
