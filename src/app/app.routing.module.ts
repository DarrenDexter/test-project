import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SharedModule } from './shared/shared.module';
import { MaterialExamplesComponent } from './material-examples/material-examples.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'matexamples', component: MaterialExamplesComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]),
    SharedModule
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
