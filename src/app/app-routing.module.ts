import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TelephoneComponent } from './docs/telephone/telephone.component';
import { LaptopComponent } from './cards/laptop/laptop.component';
import { OtherComponent } from './docs/other/other.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    TelephoneComponent,
    LaptopComponent,
    OtherComponent
  ],
  declarations: [],
})
export class AppRoutingModule {}
