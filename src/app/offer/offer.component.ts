import { Component, Input } from '@angular/core';
import { Item } from '../item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {
  @Input() items: Item[] = [];

}