import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/Category';
import { MessageDTO } from 'src/app/models/DataTranferObjects/MessageDTO';
import { ResponseDTO } from 'src/app/models/DataTranferObjects/ResponseDTO';
import { SubCategory } from 'src/app/models/SubCategory';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-manage-subcategory',
  templateUrl: './manage-subcategory.component.html',
  styleUrls: ['./manage-subcategory.component.css']
})

export class ManageSubcategoryComponent implements OnInit {

  private createSubCategoryForm!: FormGroup;
  subCategoryList: SubCategory[] = [];
  categoryList: Category[] = [];
  subcategoryControl: FormControl = new FormControl("", [Validators.required]);
  private subCategoriesTemp: SubCategory[] = []
  private idCategoryTemp: any;

  private displayedColumns: string[] = ['title', 'operations'];
  private dataSource = new MatTableDataSource<SubCategory>;
  public messageToShow: string;
  public isSendSuccessfull: boolean;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private subcategoryService: SubcategoryService, private categoryService: CategoryService) {
    this.messageToShow = "";
    this.isSendSuccessfull = false;
  }
  public getFormGroup(): FormGroup { return this.createSubCategoryForm; }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (responseDTO) => {
        this.categoryList = responseDTO.item!;
      }
    );

    this.dataSource.paginator = this.paginator;

    this.createSubCategoryForm = new FormGroup({
      categoryF: new FormControl("", [Validators.required]),
      subcategoryF: new FormControl("", [Validators.required])
    })

  }

  onSubmit = () => {
    if (this.createSubCategoryForm.valid) {
      let nameSubCategory = this.createSubCategoryForm.get('subcategoryF')?.value;
      let idCategory = this.createSubCategoryForm.get('categoryF')?.value;
      let sC = new SubCategory({ name: nameSubCategory, idCategory: idCategory });
      this.createSubCategory(sC);
      this.getFormGroup().get('subcategoryF')!.reset();
    }
  }

  public getSubCategories(): void {
    var categoryId: number = this.getFormGroup().get('categoryF')?.value;
    this.subcategoryService.getSubCategories(categoryId).subscribe(
      (responseDTO) => {
        this.updateSubCategoryList(responseDTO.item!);
      }
    );
  }

  public getDataSource(): MatTableDataSource<SubCategory> {
    return this.dataSource;
  }

  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public updateSubCategoryList(subCategories: SubCategory[]): void {
    this.subCategoriesTemp = subCategories;
    this.dataSource = new MatTableDataSource<SubCategory>(this.subCategoriesTemp)
    this.dataSource.paginator = this.paginator;
  }

  public createSubCategory(subcategory: SubCategory): void {
    this.subcategoryService.createSubCategory(subcategory).subscribe(
      (messageDTO) => {
        if (messageDTO.id == 0) {
          this.isSendSuccessfull = false;
          this.messageToShow = "No se pudo crear la subcategoría"
        } else if (messageDTO.id == 1) {
          this.subcategoryService.getSubCategories(subcategory.idCategory!).subscribe(
            (responseDTO) => {
              this.updateSubCategoryList(responseDTO.item!);
            }
          );
          console.log("TB");
          this.isSendSuccessfull = true;
          this.messageToShow = "Subcategoría creada"
        }
      }
    );
  }

  public clearInput(): void {
    this.createSubCategoryForm.reset();
  }

  public deleteSubCategory(idS?: number) {
    for (let i = 0; i < this.subCategoriesTemp.length; i++) {
      if (this.subCategoriesTemp[i].id == idS) {
        this.idCategoryTemp = this.subCategoriesTemp[i].idCategory;
      }
    }
    this.subcategoryService.deleteSubCategory(idS).subscribe(
      (messageDTO) => {
        if (messageDTO.id == 1) {
          this.subcategoryService.getSubCategories(this.idCategoryTemp).subscribe(
            (responseDTO) => {
              this.updateSubCategoryList(responseDTO.item!);
            }
          );
        }
      }
    );

  }

  public updateSubCategory(nameC: string, id: number): void {
    for (let i = 0; i < this.subCategoriesTemp.length; i++) {
      if (this.subCategoriesTemp[i].id == id) {
        this.idCategoryTemp = this.subCategoriesTemp[i].idCategory;
      }
    }
    this.subcategoryService.updateSubCategory(new SubCategory({ id: id, name: nameC })).subscribe(
      (messageDTO) => {
        if (messageDTO.id == 1) {
          this.subcategoryService.getSubCategories(this.idCategoryTemp).subscribe(
            (responseDTO) => {
              this.updateSubCategoryList(responseDTO.item!);
            }
          );
        }
      }
    );
    this.subcategoryControl.reset();
  }

  public updateSC(id: number): void {
    this.subcategoryControl.reset();
    for (let i = 0; i < this.subCategoriesTemp.length; i++) {
      if (this.subCategoriesTemp[i].id == id) {
        this.subCategoriesTemp[i].editable = true;
      } else {
        this.subCategoriesTemp[i].editable = false;
      }
    }
    this.dataSource = new MatTableDataSource<Category>(this.subCategoriesTemp)
    this.dataSource.paginator = this.paginator;
  }

  public cancelUpdate(id: number): void {
    for (let i = 0; i < this.subCategoriesTemp.length; i++) {
      if (this.subCategoriesTemp[i].id == id) {
        this.subCategoriesTemp[i].editable = false;
      }
    }
    this.dataSource = new MatTableDataSource<SubCategory>(this.subCategoriesTemp)
    this.dataSource.paginator = this.paginator;
    this.subcategoryControl.reset();
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

  public searchSubCategory() {
    if (this.createSubCategoryForm.valid) {
      let oldArray: SubCategory[] = this.dataSource.data
      let newArray: SubCategory[] = this.sortBySearch(oldArray, this.createSubCategoryForm.get('subcategoryF')?.value)
      this.updateSubCategoryList(newArray);
    } else {
      this.updateSubCategoryList(this.dataSource.data);
    }
  }

}
