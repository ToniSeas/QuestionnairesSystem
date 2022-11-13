import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/models/Category';
import { MessageDTO } from 'src/app/models/DataTranferObjects/MessageDTO';
import { ResponseDTO } from 'src/app/models/DataTranferObjects/ResponseDTO';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.css']
})

export class ManageCategoryComponent implements OnInit {

  private createCategoryForm!: FormGroup;
  private displayedColumns: string[] = ['title', 'operations'];
  private dataSource = new MatTableDataSource<Category>;
  categoryControl: FormControl = new FormControl("", [Validators.required,Validators.pattern(/[a-zA-ZÁ-Úá-ú].*/)]);
  private categoriesTemp: Category[] = []
  public messageToShow: string;
  public isSendSuccessfull: boolean;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private categoryService: CategoryService) {
    this.messageToShow = "";
    this.isSendSuccessfull = false;
  }

  public getFormGroup(): FormGroup { return this.createCategoryForm; }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (responseDTO) => {
        this.updateCategoryList(responseDTO.item!);
      }
    );

    this.dataSource.paginator = this.paginator;

    this.createCategoryForm = new FormGroup({
      categoryF: new FormControl("", [Validators.required,Validators.pattern(/[a-zA-ZÁ-Úá-ú].*/)])
    })

  }

  onSubmit = () => {
    if (this.createCategoryForm.valid) {
      let name = this.createCategoryForm.get('categoryF')?.value;
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
    this.categoriesTemp=categories;
    this.dataSource = new MatTableDataSource<Category>(this.categoriesTemp)
    this.dataSource.paginator = this.paginator;
  }

  public createCategory(nameC: string): void {
    this.categoryService.createCategory(new Category({ name: nameC })).subscribe(
      (messageDTO) => {
        if (messageDTO.id == 0) {
          this.isSendSuccessfull = false;
          this.messageToShow = "No se pudo crear la categoría"
        } else if (messageDTO.id == 1) {
          this.categoryService.getCategories().subscribe(
            (responseDTO) => {
              this.updateCategoryList(responseDTO.item!);
            }
          );
          this.isSendSuccessfull = true;
          this.messageToShow = "Categoría creada"
        }
      }
    );
  }

  public clearInput(): void {
    this.createCategoryForm.reset();
  }

  public deleteCategory(idC?: number) {
    this.categoryService.deleteCategory(idC).subscribe(
      (messageDTO) => {
        if (messageDTO.id == 1) {
          this.categoryService.getCategories().subscribe(
            (responseDTO) => {
              this.updateCategoryList(responseDTO.item!);
            }
          );
        }
      }
    );
  }

  public updateCategory(nameC: string, id: number): void {
    this.categoryService.updateCategory(new Category({ id: id, name: nameC })).subscribe(
      (messageDTO) => {
        if (messageDTO.id == 1) {
          this.categoryService.getCategories().subscribe(
            (responseDTO) => {
              this.updateCategoryList(responseDTO.item!);
            }
          );
        }
      }
    );
    this.categoryControl.reset();
  }

  public updateC(id: number): void {
    this.categoryControl.reset();
    for (let i = 0; i < this.categoriesTemp.length; i++) {
      if(this.categoriesTemp[i].id==id){
        this.categoriesTemp[i].editable=true;
      }else{
        this.categoriesTemp[i].editable=false;
      }
    }
    this.dataSource = new MatTableDataSource<Category>(this.categoriesTemp)
    this.dataSource.paginator = this.paginator;
  }

  public cancelUpdate(id: number): void {
    for (let i = 0; i < this.categoriesTemp.length; i++) {
      if(this.categoriesTemp[i].id==id){
        this.categoriesTemp[i].editable=false;
      }
    }
    this.dataSource = new MatTableDataSource<Category>(this.categoriesTemp)
    this.dataSource.paginator = this.paginator;
    this.categoryControl.reset();
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

    return newArray
  }

  public searchCategory() {
    if (this.createCategoryForm.valid) {
      let oldArray: Category[] = this.dataSource.data
      let newArray: Category[] = this.sortBySearch(oldArray, this.createCategoryForm.get('categoryF')?.value)
      this.updateCategoryList(newArray);
    } else {
      this.updateCategoryList(this.dataSource.data);
    }
  }

}