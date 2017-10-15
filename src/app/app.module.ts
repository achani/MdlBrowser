import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AttrViewComponent } from './attr-view/attr-view.component';
import { ObjViewComponent } from './obj-view/obj-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AttrViewComponent,
    ObjViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
