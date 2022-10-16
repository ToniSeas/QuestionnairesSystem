import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Question } from 'src/app/models/Question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-create-step-two',
  templateUrl: './create-step-two.component.html',
  styleUrls: ['./create-step-two.component.css']
})
export class CreateStepTwoComponent implements OnInit {

  //temporal
  question: Question = new Question({enunciate:"la nueva"});

  private displayedColumns: string[] = ['title', 'operations'];
  private dataSource = new MatTableDataSource<Question>;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe (
      (result : Question[]) => (this.updateQuestionList(result))
    )
  }

  public getDataSource(): MatTableDataSource<Question> {
    return this.dataSource;
  }
  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public updateQuestionList(questions: Question[]): void {
    this.dataSource = new MatTableDataSource<Question>(questions)
  }

  public createQuestion(question: Question): void {
    this.questionService.createQuestion(question).subscribe(
      (questions) => this.updateQuestionList(questions)
    );
  }
  
}
