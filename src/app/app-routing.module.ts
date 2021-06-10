import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
