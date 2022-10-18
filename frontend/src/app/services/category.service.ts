import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/Category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private controllerURL: string;
  constructor (private httpClient: HttpClient) { 
    this.controllerURL = "Category";
  }

  public getCategories() : Observable<Category[]> {
    // Lo que está dentro de los paréntesis es string interpolation
    return this.httpClient.get<Category[]>(`${environment.apiUrl}/${this.controllerURL}/GetCategories`);
  }

  public createCategory(category: Category) : Observable<Category[]> {
    return this.httpClient.post<Category[]>(`${environment.apiUrl}/${this.controllerURL}/CreateCategory`, category);
  }

  public deleteCategory(id?: number) : Observable<Category[]> {
    return this.httpClient.delete<Category[]>(`${environment.apiUrl}/${this.controllerURL}/DeleteCategory/${id}`);
  } 

}
