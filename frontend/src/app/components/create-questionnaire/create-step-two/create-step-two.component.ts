import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Question } from "src/app/models/Question";
import { QuestionService } from "src/app/services/question.service";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";

@Component({
  selector: 'app-create-step-two',
  templateUrl: './create-step-two.component.html',
  styleUrls: ['./create-step-two.component.css']
})
export class CreateStepTwoComponent implements OnInit {


  private displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  private dataSource = new MatTableDataSource<Question>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private questionService: QuestionService, public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CreateQuestionDialog, {
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(
      (result: Question[]) => (this.updateQuestionList(result))
    )
    this.dataSource.paginator = this.paginator;
    this.openDialog('0ms', '0ms');
  }

  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public getDataSource(): MatTableDataSource<Question> {
    return this.dataSource;
  }

  public updateQuestionList(questions: Question[]): void {
    this.dataSource = new MatTableDataSource<Question>(questions)
    this.dataSource.paginator = this.paginator;
  }

  public createQuestion(question: Question): void {
    this.questionService.createQuestion(question).subscribe(
      (questions) => this.updateQuestionList(questions)
    );
  }
}

@Component({
  selector: 'app-create-question-dialog',
  templateUrl: './create-question-dialog/create-question-dialog.html',
  styleUrls: ['./create-question-dialog/create-question-dialog.css']
})
export class CreateQuestionDialog implements OnInit {
  private createQuestionForm!: FormGroup;
  private typeControl = new FormControl("", [Validators.required]);
  private categoryControl = new FormControl("", [Validators.required]);
  private subCategoryControl = new FormControl("", [Validators.required]);
  private typesFiltered!: Observable<string[]>;
  private categoriesFiltered!: Observable<string[]>;
  private subCategoriesFiltered!: Observable<string[]>;

  constructor(public dialogRef: MatDialogRef<CreateQuestionDialog>) { }

  public getFormGroup(): FormGroup { return this.createQuestionForm; }
  public getTypeControl(): FormControl { return this.typeControl; }
  public getCategoryControl(): FormControl { return this.categoryControl; }
  public getSubCategoryControl(): FormControl { return this.subCategoryControl; }
  public getTypesFiltered(): Observable<String[]> { return this.typesFiltered; }
  public getCategoriesFiltered(): Observable<String[]> { return this.categoriesFiltered; }
  public getSubCategoriesFiltered(): Observable<String[]> { return this.subCategoriesFiltered; }

  ngOnInit(): void {
    // Inicializar la lista de tipos
    var typeOptions: string[] = ['One t', 'Two t', 'Three t'];
    this.typeControl = new FormControl("", [Validators.required]);
    this.typesFiltered = this.typeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', typeOptions)),
    );

    // Inicializar la lista de categorias
    var categoryOptions: string[] = ['One c', 'Two c', 'Three c'];
    this.categoryControl = new FormControl("", [Validators.required]);
    this.categoriesFiltered = this.categoryControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', categoryOptions)),
    );

    // Inicializar la lista de sub categorias
    var subCategoryOptions: string[] = ['One sc', 'Two sc', 'Three sc'];
    this.subCategoryControl = new FormControl("", [Validators.required]);
    this.subCategoriesFiltered = this.subCategoryControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', subCategoryOptions)),
    );

    this.createQuestionForm = new FormGroup({
      enunciate: new FormControl("", [Validators.required]),
      type: this.typeControl,
      category: this.categoryControl,
      subCategory: this.subCategoryControl
    })

  }

  onSubmit = () => {
    if (this.createQuestionForm.invalid) {
      console.log('test')
    } else {
      console.log('válido')
    }
  }


  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }
}