import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryList: Category[] = [new Category({name:"quemada"})];

  public getCategories() : Observable<Category[]> {
    
    var categoryList: Category[] = [
      new Category({id: 1, name: 'A'}),
      new Category({id: 2, name: 'B'}),
      new Category({id: 3, name: 'C'}),
      new Category({id: 4, name: 'D'}),
      new Category({id: 5, name: 'E'}),
      new Category({id: 6, name: 'F'})
    ]

    var categories : Observable<Category[]> = of(categoryList);
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
