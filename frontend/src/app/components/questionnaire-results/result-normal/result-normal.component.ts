import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Answer } from 'src/app/models/Answer';
import { Result } from 'src/app/models/Result';
import { AnswerOption } from 'src/app/models/AnswerOption';
import { Option } from 'src/app/models/Option';
import { Question } from 'src/app/models/Question';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-result-normal',
  templateUrl: './result-normal.component.html',
  styleUrls: ['./result-normal.component.css']
})
export class ResultNormalComponent implements OnInit {
  @Input() question?: Question;
  @Input() questionnaireId?: Number;

  private displayedColumns: string[] = ['Respuesta','Cantidad'];
  private dataSource = new MatTableDataSource<Result>;
  private searchControl: FormControl;
  public result: Result[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private router: Router, private route: ActivatedRoute, public answerService: AnswerService) { 
    this.searchControl = new FormControl('');
    this.result=[]
  }

  ngOnInit(): void {
    this.question=history.state['question'];
    this.questionnaireId=history.state['questionnaireId']

    if(this.question?.typeId == 'nu' || this.question?.typeId == 'rl'){
      this.updateAnswerListWrite()
    }else{
      this.getAnswersOption()
    }
    
  }
  
  public getAnswersOption(){
    let anserAux: Answer = new Answer()
    console.log(this.question)
    this.question?.answers.forEach(answer => {
      answer.answerOptions.forEach(answerOption => {
       
        this.answerService.GetOptionById(answerOption.idOption!).subscribe((responseDto) => {
          let option: Option = Object.assign(new Option({}), responseDto.item)
          anserAux.options.push(option)
          this.updateAnswerList(anserAux)
        });
      });
    });
   
    
  }

  //este metodo es para actualizar la lista cuando son preguntas que no llevan opciones
  public updateAnswerListWrite():void{
    let answerWrite: String[] = []
    this.result=[]
    this.question?.answers.forEach(answer => {
      this.result.push(new Result(answer.answerText))
    });
    this.dataSource = new MatTableDataSource<Result>( this.result)
    this.dataSource.paginator = this.paginator;
    
  }
  
  public updateAnswerList(answers?: Answer): void {
    let answerAux : String[] =[]
    answers?.options.forEach(option => {
      answerAux.push(option.optionName!) 
    });

    

    var answerCount= answerAux.reduce((acum: any,cur: any) => Object.assign(acum,{[cur]: (acum[cur] || 0)+1}),{});
    
    this.result=[]
    for (var element in answerCount){
      this.result.push(new Result (element.toString(),answerCount[element].toString()))
    }
   
    this.dataSource = new MatTableDataSource<Result>(this.result)
    this.dataSource.paginator = this.paginator;

  }

  public resultsQuestionnaire(){
    if(this.questionnaireId == undefined){
      this.router.navigate(['/search-questionnaire/'])
    }else{
      this.router.navigate(['/questionnaire-results/'+this.questionnaireId])
    }
  }

  public getDataSource(): MatTableDataSource<Result> {
    return this.dataSource;
  }
  
  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  
  public getSearchControl(): FormControl { return this.searchControl };

}
