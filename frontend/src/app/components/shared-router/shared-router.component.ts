import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireType } from 'src/app/models/QuestionnaireType';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-shared-router',
  templateUrl: './shared-router.component.html',
  styleUrls: ['./shared-router.component.css']
})
export class SharedRouterComponent implements OnInit {

  public isIncorrectLink: boolean;

  constructor(private router: Router, private questionnaireService: QuestionnaireService, private userService: UserService) {
    this.isIncorrectLink = true;
  }

  ngOnInit(): void {
    var url: string = this.router.url;
    var startAt: number = "/link/".length;
    var endAt: number = url.length;
    try {
      var questionnaireId: number = +(this.router.url.substring(startAt, endAt));
      this.isIncorrectLink = false;
      this.questionnaireService.getQuestionnaireById(questionnaireId).subscribe((responseDto) => {

        if (responseDto.id == 1) {

          var questionnaire = responseDto.item!;

          this.questionnaireService.getQuestionnaireTypes().subscribe((responseDto) => {
            if (responseDto.id == 1) {
              var questionnaireType:QuestionnaireType;
              responseDto.item!.forEach(element => {
                if (element.id == questionnaire.idQuestionnaireType) {
                  questionnaireType = element;
                }
              });
              if (questionnaireType! != undefined) {
                if (questionnaireType.name == "Interno" || questionnaireType.name == "Impersonal") {
                  this.router.navigate([`/login/link/${questionnaire.id}`]);
                } else if (questionnaireType.name == "Externo") {
                  this.router.navigate([`/questionnaire-view/${questionnaire.id}`]);
                }
              }
            }
          });
          }
      });

    } catch (error) {
      this.isIncorrectLink = true;
    }
    this.isIncorrectLink = true;
  }
}
