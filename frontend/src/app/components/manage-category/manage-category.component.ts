import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})
export class ManageCategoryComponent implements OnInit {


  private createCategoryForm!: FormGroup;
  //temporal

  private displayedColumns: string[] = ['title', 'operations'];
  private dataSource = new MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private categoryService: CategoryService) { }
  public getFormGroup(): FormGroup { return this.createCategoryForm; }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (result: Category[]) => (this.updateCategoryList(result))
    )
    this.dataSource.paginator = this.paginator;

    this.createCategoryForm = new FormGroup({
      categoryF: new FormControl("", [Validators.required])
    })

  }

  onSubmit = () => {
    if (this.createCategoryForm.invalid) {
      console.log('test')
    } else {
      console.log('válido');
      let name= this.createCategoryForm.get('categoryF')?.value;
      console.log(name);
      this.createCategory(name);
      this.createCategoryForm.reset();
    }

  }

  public getDataSource(): MatTableDataSource<Category> {
    return this.dataSource;
  }

  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public updateCategoryList(categories: Category[]): void {
    this.dataSource = new MatTableDataSource<Category>(categories)
    this.dataSource.paginator = this.paginator;
  }

  public createCategory(nameC: string): void {
    this.categoryService.createCategory(new Category({ name: nameC })).subscribe(
      (categories) => this.updateCategoryList(categories)
    );
  }

  public clearInput(): void {
    this.createCategoryForm.reset();
  }

  public deleteCategory(idC?: number){
    this.categoryService.deleteCategory(idC).subscribe(
      (categories: Category[]) => this.updateCategoryList(categories)
    );
  }

   /**
   * This method sorts an array recursively according to a search value.
   * @param oldArray The array to be sorted
   * @param substring The search value
   */
    public sortBySearch(oldArray: Category[], substring: string): Category[] {
      //This will sort the reviewers array according to a string parameter using indexof
      let newArray: Category[] = []
      oldArray.forEach(element => {
        let index = (element.name + "").indexOf(substring) //where, in the main string, is this substring
        if (index > -1) { //is this substring actually present in the main string?
          //if so, add it to the array at the corresponding spot
          let added = false
          for (let i = 0; i < newArray.length; i++) {
            let tempIndex = (newArray[i].name + "").indexOf(substring)
            console.log(index, " ", tempIndex)
            if (tempIndex < 0 || index < tempIndex) {
              if (i == 0) {
                newArray.unshift(element)
              } else {
                newArray.splice(i, 0, element)
              }
              added = true
              break
            }
          }
          if (!added) {
            newArray.push(element)
          }
        } else { //else, add it to the end
          newArray.push(element)
        }
      })
  
      console.log(newArray)
      return newArray
    }

  public searchCategory(){
    console.log(this.dataSource.data);
    if (this.createCategoryForm.valid) {
      let oldArray: Category[] = this.dataSource.data
      let newArray: Category[] = this.sortBySearch(oldArray, this.createCategoryForm.get('categoryF')?.value)
      this.updateCategoryList(newArray);
    }else{
      this.updateCategoryList(this.dataSource.data);
    }
  }

}