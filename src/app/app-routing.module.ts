import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TelephoneComponent } from './telephone/telephone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    TelephoneComponent,
    LaptopComponent,
    OtherComponent,
  ],
  declarations: [],
})
export class AppRoutingModule {}
