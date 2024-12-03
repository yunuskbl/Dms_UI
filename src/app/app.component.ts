import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { OtherComponent } from './other/other.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    TelephoneComponent,
    LaptopComponent,
    OtherComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Dms_UI';
}
