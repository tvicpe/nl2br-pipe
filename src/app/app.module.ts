import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Nl2brModule } from '../../projects/nl2br/src/lib/nl2br.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Nl2brModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
