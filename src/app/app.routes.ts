import { RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { OtherComponent } from './other/other.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'laptop', component: LaptopComponent },
  { path: 'telephone', component: TelephoneComponent },
  { path: 'other', component: OtherComponent },
];
