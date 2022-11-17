import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Question } from "src/app/models/Question";
import { Questionnaire } from "src/app/models/Questionnaire";
import { QuestionService } from 'src/app/services/question.service';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';


@Component({
  selector: 'app-questionnaire-results',
  templateUrl: './questionnaire-results.component.html',
  styleUrls: ['./questionnaire-results.component.css']
})
export class QuestionnaireResultsComponent implements OnInit {
  public questionnaire: Questionnaire;
  public question: Question;
  private displayedColumns: string[] = ['title', 'operations'];
  private dataSource = new MatTableDataSource<Question>;
  private searchControl: FormControl;
  public questionnaireId: Number;
  public nameQuestionnaire?: String;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private questionService: QuestionService, 
    private router: Router, private questionnaireService: QuestionnaireService) {
    this.searchControl = new FormControl('');
    this.questionnaire = new Questionnaire({ });
    this.question = new Question({ });
    this.questionnaireId=0
    this.nameQuestionnaire=""
  }


  ngOnInit(): void {
    let idQuestionnaire = Number(this.router.url.replace("/questionnaire-results/", ""))
    this.questionnaireId = idQuestionnaire
    if (!isNaN(idQuestionnaire)) {
     
      this.questionService.getQuestionWithAnswer(idQuestionnaire).subscribe((responseDto) => {
        this.updateQuestionList(responseDto.item!)
      });
  
    }

    this.questionnaireService.getQuestionnaireById(idQuestionnaire).subscribe((responseDto) => {
      this.questionnaire= Object.assign(new Questionnaire({}), responseDto.item)
      this.setNameQuestionnaire(this.questionnaire?.name)
    });

    this.dataSource.paginator = this.paginator;

  }

  public setNameQuestionnaire(name?:String){
    this.nameQuestionnaire = name
  }

  public updateQuestionList(question: Question[]): void {
    this.dataSource = new MatTableDataSource<Question>(question)
    this.dataSource.paginator = this.paginator;
  }

  public getDataSource(): MatTableDataSource<Question> {
    return this.dataSource;
  }
  
  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  //TODO: borrar
  // public resultNormal(question: Question){
  //   // this.router.navigate(['/result-normal/'])
  //   // this.router.navigate(['/result-normal/',], { queryParams: {question: this.question}})
  //   // this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
  //   console.log(question)
  //   this.question = question
  //   // console.log(this.question.answers)
  // }

  public searchQuestionnaire(){
    this.router.navigate(['/search-questionnaire/'])
  }

  public getSearchControl(): FormControl { return this.searchControl };

  public searchQuestion(): void {

  }
 
}
