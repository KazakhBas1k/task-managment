import { NgModule} from '@angular/core';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
