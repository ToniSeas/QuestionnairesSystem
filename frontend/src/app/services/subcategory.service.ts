import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/Category';
import { MessageDTO } from '../models/DataTranferObjects/MessageDTO';
import { ResponseDTO } from '../models/DataTranferObjects/ResponseDTO';
import { SubCategory } from '../models/SubCategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private controllerURL: string;
  constructor (private httpClient: HttpClient) {
    this.controllerURL = "SubCategory";
  }
  
  public getSubCategories(categoryId: number) : Observable<ResponseDTO<SubCategory[]>> {
    // Configurar los parametros del get
    let params = new HttpParams().set('categoryId', categoryId);
    // Lo que está dentro de los paréntesis es string interpolation
    return this.httpClient.get<ResponseDTO<SubCategory[]>>(`${environment.apiUrl}/${this.controllerURL}/GetSubCategories`, { params: params });
  }

  public createSubCategory(subcategory:  SubCategory) : Observable<MessageDTO> {
    return this.httpClient.post<MessageDTO>(`${environment.apiUrl}/${this.controllerURL}/CreateSubCategory`, subcategory);
  }

  public deleteSubCategory(id?: number) : Observable<MessageDTO> {
    return this.httpClient.delete<MessageDTO>(`${environment.apiUrl}/${this.controllerURL}/DeleteSubCategory/${id}`);
  }
}
