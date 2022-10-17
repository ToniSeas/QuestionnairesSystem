import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryList: Category[] = [new Category({name:"quemada"})];

  public getCategories() : Observable<Category[]> {
    var categories : Observable<Category[]> = of(this.categoryList);

    return categories;
  }

  public createCategory(category: Category) : Observable<Category[]> {
    
    this.categoryList.push(category);

    var categories : Observable<Category[]> = of(this.categoryList);
    return categories;
  }

  public clearCategory() : Observable<Category[]> {
    
    this.categoryList.pop();

    var categories : Observable<Category[]> = of(this.categoryList);
    return categories;
  }

}
