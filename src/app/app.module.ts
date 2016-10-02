import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { App } from './app.component';
import { About } from './about';
import { NoContent } from './no-content';
import {
  MdButtonModule,
  MdSidenavModule,
  MdIconModule,
  MdIconRegistry,
  MdToolbarModule,
  MdGridListModule
} from '@angular/material';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    About,
    NoContent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MdToolbarModule.forRoot(),
    MdIconModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdButtonModule.forRoot()
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    MdIconRegistry
  ]
})
export class AppModule {}

