import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Questionnaire } from '../models/Questionnaire';

@Injectable({
  providedIn: 'root'
})
export class ReviewingPermissionService {

  private urlController = "ReviewingPermission";

  constructor() { }

}
