import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/Category';
import { SubCategory } from '../models/SubCategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private controllerURL: string;
  constructor (private httpClient: HttpClient) {
    this.controllerURL = "SubCategory";
  }
  
  public getSubCategories(categoryId: number) : Observable<SubCategory[]> {
    // Configurar los parametros del get
    let params = new HttpParams().set('categoryId', categoryId);
    // Lo que está dentro de los paréntesis es string interpolation
    return this.httpClient.get<SubCategory[]>(`${environment.apiUrl}/${this.controllerURL}/GetSubCategories`, { params: params });
  }

  public createSubCategory(subcategory:  SubCategory) : Observable<SubCategory[]> {
    return this.httpClient.post<SubCategory[]>(`${environment.apiUrl}/${this.controllerURL}/CreateSubCategory`, subcategory);
  }

  public deleteSubCategory(id?: number) : Observable<SubCategory[]> {
    return this.httpClient.delete<SubCategory[]>(`${environment.apiUrl}/${this.controllerURL}/DeleteSubCategory/${id}`);
  }
}
