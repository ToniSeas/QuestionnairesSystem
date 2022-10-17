import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Question } from "src/app/models/Question";
import { QuestionService } from "src/app/services/question.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { map, Observable, of, startWith } from "rxjs";
import { Category } from "src/app/models/Category";
import { CategoryService } from "src/app/services/category.service";
import { QuestionType } from "src/app/models/QuestionType";

@Component({
  selector: 'app-create-step-two',
  templateUrl: './create-step-two.component.html',
  styleUrls: ['./create-step-two.component.css']
})
export class CreateStepTwoComponent implements OnInit {

  private displayedColumns: string[];
  private dataSource: MatTableDataSource<Question>;
  private searchControl: FormControl;
  private questionList: Question[];

  //Declaracion del modelo de pregunta
  private questionModel: Question;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private questionService: QuestionService, public dialog: MatDialog) { 
    this.questionModel = new Question({});
    this.displayedColumns = ['id', 'statement', 'type', 'operations'];
    this.dataSource = new MatTableDataSource<Question>;
    this.searchControl = new FormControl('');
    this.questionList = [];
  }

  public openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    var dialogRef = this.dialog.open(CreateQuestionDialog, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: {questionModel: this.questionModel},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.questionModel = result;
    });
  }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(
      (result: Question[]) => (this.updateQuestionList(result))
    )
    this.dataSource.paginator = this.paginator;
    //this.openDialog('0ms', '0ms');
  }

  public getDisplayedColumns(): string[] { return this.displayedColumns; }
  public getDataSource(): MatTableDataSource<Question> { return this.dataSource; }
  public getSearchControl(): FormControl { return this.searchControl };

  public updateQuestionList(questions: Question[]): void {
    this.dataSource = new MatTableDataSource<Question>(questions)
    this.questionList = questions;
    this.dataSource.paginator = this.paginator;
  }

  public createQuestion(question: Question): void {
    this.questionService.createQuestion(question).subscribe(
      (questions) => this.updateQuestionList(questions)
    );
  }

  public searchQuestion(): void {
    var tempQuestionList: Question[] = []
    const searchValue: string = this.searchControl.value;

    this.dataSource.data.forEach(function (question) {
      const questionStatement:String = question.statement===undefined ? '' : question.statement;
      console.log(questionStatement)
      if (questionStatement.includes(searchValue)) {
        tempQuestionList.push(question);
        
      }
    });

    this.updateQuestionList(tempQuestionList);
  }

  public deleteQuestion(id: number) {
    
    const indexOfQuestion = this.questionList.findIndex((object) => {
      return object.id === id;
    });

    if (indexOfQuestion != -1) {
      console.log(indexOfQuestion)
      this.questionList.splice(indexOfQuestion, 1);
    }

    this.updateQuestionList(this.questionList);
    

  }
}

@Component({
  selector: 'app-create-question-dialog',
  templateUrl: './create-question-dialog/create-question-dialog.html',
  styleUrls: ['./create-question-dialog/create-question-dialog.css']
})
export class CreateQuestionDialog implements OnInit {

  //modelos
  question: Question;
  category: Category;
  questionType: QuestionType;
  questionTypes: Observable<QuestionType[]>;

  private createQuestionForm!: FormGroup;
  private typeControl!: FormControl;
  private categoryControl!: FormControl;
  private subCategoryControl!: FormControl;
  private categoriesFiltered!: Observable<string[]>;
  private subCategoriesFiltered!: Observable<string[]>;

  constructor(
    public dialogRef: MatDialogRef<CreateQuestionDialog>, 
    private questionService:QuestionService, 
    private categoryService: CategoryService, 
    @Inject(MAT_DIALOG_DATA) public data: Question
    ) { 

    this.question = new Question({});
    this.category = new Category({});
    this.questionType = new QuestionType({});
    this.question.category = this.category;
    this.question.type = this.questionType;
    this.questionTypes = new Observable<QuestionType[]>();
  }

  public getFormGroup(): FormGroup { return this.createQuestionForm; }
  public getTypeControl(): FormControl { return this.typeControl; }
  public getCategoryControl(): FormControl { return this.categoryControl; }
  public getSubCategoryControl(): FormControl { return this.subCategoryControl; }
  public getQuestionTypes(): Observable<QuestionType[]> { return this.questionTypes; }
  public getCategoriesFiltered(): Observable<String[]> { return this.categoriesFiltered; }
  public getSubCategoriesFiltered(): Observable<String[]> { return this.subCategoriesFiltered; }

  ngOnInit(): void {
    // Inicializar la lista de tipos
    this.questionService.getQuestionTypes().subscribe(
      (questionsTypes) => this.questionTypes = of(questionsTypes)
    );
    this.typeControl = new FormControl("", [Validators.required]);

    // Inicializar la lista de categorias
    var categoryOptions: string[] = ['ooone c', 'Two c', 'Three c'];
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
      statement: new FormControl("", [Validators.required]),
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

  getQuestionType(id: string): void {
    this.questionTypes.subscribe(
      (questionTypes) => {
        console.log(questionTypes);
      }
    )
    //return this.questionTypes.find(book => book.id === bookId).title;
  }
}