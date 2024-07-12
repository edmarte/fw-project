import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'https://ifpb.github.io/challenges/web/front-end/js/barato-coletivo/code/data/offers.json';
  private categoriesUrl = 'https://ifpb.github.io/challenges/web/front-end/js/barato-coletivo/code/data/categories.json';
  private detailsUrl = 'https://ifpb.github.io/challenges/web/front-end/js/barato-coletivo/code/data/offer/23186.json';

  constructor(private http: HttpClient) { }

  getProductData(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  getCategories(): Observable<any>{
    return this.http.get<any>(this.categoriesUrl);
  }

  getDetailsData(): Observable<any>{
    return this.http.get<any>(this.detailsUrl);
  }

  getItemCategory(name: String): Observable<any[]>{
    return forkJoin([this.getCategories(), this.getProductData()]).pipe(
      map(([categories, item]) =>{
        const categoryId = Object.keys(categories).filter(key => categories[key] === name);
        return item.filter(item => categoryId.includes(item.id));
      })
    );
  }
}
