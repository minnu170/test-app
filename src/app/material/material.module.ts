import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
