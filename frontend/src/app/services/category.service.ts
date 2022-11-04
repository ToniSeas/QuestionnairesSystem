import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/Category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseDTO } from '../models/DataTranferObjects/ResponseDTO';
import { MessageDTO } from '../models/DataTranferObjects/MessageDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private controllerURL: string;
  constructor (private httpClient: HttpClient) { 
    this.controllerURL = "Category";
  }

  public getCategories(): Observable<ResponseDTO<Category[]>> {
    // Lo que está dentro de los paréntesis es string interpolation
    return this.httpClient.get<ResponseDTO<Category[]>>(`${environment.apiUrl}/${this.controllerURL}/GetCategories`);
  }

  public createCategory(category: Category): Observable<MessageDTO> {
    return this.httpClient.post<MessageDTO>(`${environment.apiUrl}/${this.controllerURL}/CreateCategory`, category);
  }

  public deleteCategory(id?: number): Observable<MessageDTO> {
    return this.httpClient.delete<MessageDTO>(`${environment.apiUrl}/${this.controllerURL}/DeleteCategory/${id}`);
  } 

  public updateCategory(category: Category): Observable<MessageDTO> {
    return this.httpClient.put<MessageDTO>(`${environment.apiUrl}/${this.controllerURL}/UpdateCategory`,category);
  } 
}
