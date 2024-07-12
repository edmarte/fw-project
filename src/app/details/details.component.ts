import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Details } from '../details.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() items!: Details;

  currentIndex = 0;

  get transformStyle() {
    
    return `translateX(-${this.currentIndex * 600}px)`;
  }

  nextImage() {
    if(this.currentIndex < this.items.images.length){
      this.currentIndex = (this.currentIndex + 1) % this.items.images.length;
    }
  }

  previousImage() {
    if(this.currentIndex > 0){
      this.currentIndex = (this.currentIndex - 1) % this.items.images.length;
    }
  }

}