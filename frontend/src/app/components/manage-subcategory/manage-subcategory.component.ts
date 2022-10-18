import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Category } from 'src/app/models/Category';
import { SubCategory } from 'src/app/models/SubCategory';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-manage-subcategory',
  templateUrl: './manage-subcategory.component.html',
  styleUrls: ['./manage-subcategory.component.css']
})

export class ManageSubcategoryComponent implements OnInit {
  
  private createSubCategoryForm!: FormGroup;


  categoryList: Category[] = [ new Category({id: 1, name: 'A'}),
                              new Category({id: 2, name: 'B'}),
                              new Category({id: 3, name: 'C'}),
                              new Category({id: 4, name: 'D'}),
                              new Category({id: 5, name: 'E'}),
                              new Category({id: 6, name: 'F'})];

  private displayedColumns: string[] = ['title', 'operations'];
  private dataSource = new MatTableDataSource<SubCategory>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private subcategoryService: SubcategoryService) { }
  public getFormGroup(): FormGroup { return this.createSubCategoryForm; }

  ngOnInit(): void {
    this.subcategoryService.getSubCategories().subscribe(
      (result: SubCategory[]) => (this.updateSubCategoryList(result))
    )
    this.dataSource.paginator = this.paginator;

    this.createSubCategoryForm = new FormGroup({
      categoryF: new FormControl("", [Validators.required]),
      subcategoryF: new FormControl("", [Validators.required])
    })

  }

  onSubmit = () => {
    if (this.createSubCategoryForm.valid) {
      let nameSubCategory= this.createSubCategoryForm.get('subcategoryF')?.value;
      let idCategory= this.createSubCategoryForm.get('subcategoryF')?.value;
      let sC= new SubCategory({name: nameSubCategory, idCategory: idCategory});
      this.createSubCategory(sC);
      this.createSubCategoryForm.reset();
    }
  }

  public getDataSource(): MatTableDataSource<SubCategory> {
    return this.dataSource;
  }

  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public updateSubCategoryList(subCategories: SubCategory[]): void {
    this.dataSource = new MatTableDataSource<SubCategory>(subCategories)
    this.dataSource.paginator = this.paginator;
  }

  public createSubCategory(subcategory: SubCategory): void {
    this.subcategoryService.createSubCategory(subcategory).subscribe(
      (subCategories : SubCategory[]) => this.updateSubCategoryList(subCategories)
    );
  }

  public clearInput(): void {
    this.createSubCategoryForm.reset();
  }

  public deleteSubCategory(idS?: number){
    console.log(idS);
    this.subcategoryService.deleteSubCategory(idS).subscribe(
      (subCategories: SubCategory[]) => this.updateSubCategoryList(subCategories)
    );
  }

  
   /**
   * This method sorts an array recursively according to a search value.
   * @param oldArray The array to be sorted
   * @param substring The search value
   */
    public sortBySearch(oldArray: SubCategory[], substring: string): SubCategory[] {
      //This will sort the reviewers array according to a string parameter using indexof
      let newArray: SubCategory[] = []
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
  
      return newArray
    }

  public searchSubCategory(){
    console.log(this.createSubCategoryForm.valid);
    if (this.createSubCategoryForm.valid) {
      let oldArray: SubCategory[] = this.dataSource.data
      let newArray: SubCategory[] = this.sortBySearch(oldArray, this.createSubCategoryForm.get('subcategoryF')?.value)
      this.updateSubCategoryList(newArray);
    }else{
      this.updateSubCategoryList(this.dataSource.data);
    }
  }

}
