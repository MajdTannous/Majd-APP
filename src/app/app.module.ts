import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MajdBillComponent } from './majd-bill/majd-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    MajdBillComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
