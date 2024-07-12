import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { OfferComponent } from '../offer/offer.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [
    NavbarComponent,
    OfferComponent
  ],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

}
