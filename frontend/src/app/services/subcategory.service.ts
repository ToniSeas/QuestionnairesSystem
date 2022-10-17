import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SubCategory } from '../models/SubCategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  subcategoryList:  SubCategory[] = [new  SubCategory({name:"quemada"})];

  public getSubCategories() : Observable<SubCategory[]> {
    var subcategories : Observable< SubCategory[]> = of(this.subcategoryList);

    return subcategories;
  }

  public createSubCategory(subcategory:  SubCategory) : Observable<SubCategory[]> {
    
    this.subcategoryList.push(subcategory);

    var subcategories : Observable< SubCategory[]> = of(this.subcategoryList);
    return subcategories;
  }

  public clearSubCategory() : Observable< SubCategory[]> {
    
    this.subcategoryList.pop();

    var subcategories : Observable< SubCategory[]> = of(this.subcategoryList);
    return subcategories;
  }
}
