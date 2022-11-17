import { Component, OnInit, Input } from '@angular/core';
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


  constructor( private router: Router, private route: ActivatedRoute, public answerService: AnswerService) { 
    this.searchControl = new FormControl('');
    this.result=[]
  }

  ngOnInit(): void {
    this.question=history.state['question'];
    this.questionnaireId=history.state['questionnaireId']
    this.getAnswersOption()


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


    

  }

  public resultsQuestionnaire(){
    if(this.questionnaireId == undefined){
      this.router.navigate(['/search-questionnaire/'])
    }else{
      this.router.navigate(['/questionnaire-results/'+this.questionnaireId])
    }
  }
  


 




  
  public getSearchControl(): FormControl { return this.searchControl };

}
