import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/models/Answer';
import { Option } from 'src/app/models/Option';
import { Question } from 'src/app/models/Question';
import { Result } from 'src/app/models/Result';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-result-graphic',
  templateUrl: './result-graphic.component.html',
  styleUrls: ['./result-graphic.component.css']
})
export class ResultGraphicComponent implements OnInit {
  @Input() question?: Question;
  @Input() questionnaireId?: Number;

  private searchControl: FormControl;
  public result: Result[];
  public dataPoints: { y: number, name: string }[];
  public showGraphic: boolean;

  constructor(private router: Router, private route: ActivatedRoute, public answerService: AnswerService) {
    this.searchControl = new FormControl('');
    this.result = []

    this.dataPoints = []
    this.showGraphic = false;
  }

  ngOnInit(): void {
    if (history.state['question'] == undefined || history.state['questionnaireId'] == undefined) {
      this.router.navigate(["/search-questionnaire"])
    } else {
      this.question = history.state['question'];
      this.questionnaireId = history.state['questionnaireId']
      this.getAnswersOption();
    }
  }

  public getAnswersOption() {
    let anserAux: Answer = new Answer()
    this.question?.answers.forEach(answer => {
      answer.answerOptions.forEach(answerOption => {

        this.answerService.GetOptionById(answerOption.idOption!).subscribe((responseDto) => {
          let option: Option = Object.assign(new Option({}), responseDto.item)
          anserAux.options.push(option)
          this.updateAnswerList(anserAux)
        });
      });
    });
    this.showGraphic = true;
  }

  public updateAnswerList(answers?: Answer): void {
    let answerAux: String[] = []
    answers?.options.forEach(option => {
      answerAux.push(option.optionName!)
    });

    var answerCount = answerAux.reduce((acum: any, cur: any) => Object.assign(acum, { [cur]: (acum[cur] || 0) + 1 }), {});

    this.result = []
    for (var element in answerCount) {
      var resultAux: Result = new Result(element.toString(), answerCount[element].toString());
      this.result.push(resultAux)
    }

    this.dataPoints = [];
    this.result.forEach((result) => {
      var quantity: number = +result.quantity!;
      this.dataPoints.push({ y: quantity, name: result.name! })
    });
  }

  public resultsQuestionnaire() {
    if (this.questionnaireId == undefined) {
      this.router.navigate(['/search-questionnaire/'])
    } else {
      this.router.navigate(['/questionnaire-results/' + this.questionnaireId])
    }
  }

  public getSearchControl(): FormControl { return this.searchControl };
}
