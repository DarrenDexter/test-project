import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialExamplesComponent } from './material-examples.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [MaterialExamplesComponent],
  exports: [ MaterialExamplesComponent ]
})
export class MaterialExamplesModule { }
