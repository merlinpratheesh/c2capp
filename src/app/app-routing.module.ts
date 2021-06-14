import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationBasedComponent } from './location-based/location-based.component';

const routes: Routes = [
  { path: 'component', component: LocationBasedComponent },
  { path: '',outlet:'centercontent', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'smallBox',outlet:'centercontent',loadChildren: () => import('./small-box/small-box.module').then(m => m.SmallBoxModule) },
  { path: 'largeBox',outlet:'centercontent' ,loadChildren: () => import('./large-box/large-box.module').then(m => m.LargeBoxModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
