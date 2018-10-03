import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { MaterialExamplesModule } from './material-examples/material-examples.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    MaterialExamplesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
