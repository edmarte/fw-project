import { Component, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';
import { OfferComponent } from './offer/offer.component';
import { Item } from './item.model';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from "./details/details.component";
import { Details } from './details.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomeScreenComponent,
    NavbarComponent,
    OfferComponent,
    DetailsComponent,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    DetailsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'projeto';
  data: any[] = [];
  categories: any[] = [];
  hotelItems: Item[] = [];
  gastronomyItems: Item[] = [];
  foodItems: Item[] = [];
  funItems: Item[] = [];
  healthItems: Item[] = [];
  serviceItems: Item[] = [];
  details!: Details;

  constructor(private appService: AppService){ }

  ngOnInit(): void{
    this.appService.getProductData().subscribe((data)=>{
      this.data = data;
    });

    this.appService.getCategories().subscribe((data)=>{
      this.categories = data;
    });

    this.appService.getItemCategory('gastronomia').subscribe((data)=>{
      this.gastronomyItems = data;
    });

    this.appService.getItemCategory('hoteis').subscribe((data)=>{
      this.hotelItems = data;
    });

    this.appService.getItemCategory('tortas').subscribe((data)=>{
      this.foodItems = data;
    });

    this.appService.getItemCategory('entretenimento').subscribe((data)=>{
      this.funItems = data;
    });

    this.appService.getItemCategory('saude').subscribe((data)=>{
      this.healthItems = data;
    });

    this.appService.getItemCategory('servicos').subscribe((data)=>{
      this.serviceItems = data;
    });

    this.appService.getDetailsData().subscribe((data)=>{
      this.details = data;
      console.log("TESTE", this.details.category);
      console.log("OK", this.details.images[0].url);
    });
  }
}
