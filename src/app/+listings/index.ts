import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListingsComponent } from './listings.component';
import { MdGridListModule } from '@angular/material';
import { WindowSize } from '../shared/window-resize.service';

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: ListingsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    ListingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MdGridListModule.forRoot()
  ],
  providers: [
    WindowSize
  ]
})
export default class ListingsModule {
  static routes = routes;
}
