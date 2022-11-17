import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Answer } from '../models/Answer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseDTO } from '../models/DataTranferObjects/ResponseDTO';
import { MessageDTO } from '../models/DataTranferObjects/MessageDTO'
import { Option } from '../models/Option';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  private controllerURL: string;
  constructor (private httpClient: HttpClient) { 
    this.controllerURL = "Answer";
  }

  public GetOptionById(optionId: number) : Observable<ResponseDTO<Option>> {
    // Configurar los parametros del get
    let params = new HttpParams().set('optionId', optionId);
    // Lo que está dentro de los paréntesis es string interpolation
    return this.httpClient.get<ResponseDTO<Option>>(`${environment.apiUrl}/${this.controllerURL}/GetOptionById`, { params: params });
  }

}
