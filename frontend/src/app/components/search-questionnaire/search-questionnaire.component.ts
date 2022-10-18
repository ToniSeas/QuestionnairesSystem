import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-search-questionnaire',
  templateUrl: './search-questionnaire.component.html',
  styleUrls: ['./search-questionnaire.component.css']
})
export class SearchQuestionnaireComponent implements OnInit {
  dateAux: Date = new Date();
  //questionnaire: Questionnaire = new Questionnaire ({type: "typeQ", name: "webo", date: this.dateAux, description: "descriptionQ", state: "stateQ"});



  private displayedColumns: string[] = ['title', 'answers','state','operations'];
  private dataSource = new MatTableDataSource<Questionnaire>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private questionnaireService: QuestionnaireService) { }

  ngOnInit(): void {
    this.questionnaireService.getQuestionnaire().subscribe(
      (result: Questionnaire[]) => (this.updateQuestionnaireList(result))
    )
    
    this.dataSource.paginator = this.paginator;
  }

  public getDataSource(): MatTableDataSource<Questionnaire> {
    return this.dataSource;
  }
  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public updateQuestionnaireList(questionnaires: Questionnaire[]): void {
    this.dataSource = new MatTableDataSource<Questionnaire>(questionnaires)
    this.dataSource.paginator = this.paginator;
  }

  public deleteQuestionnaire(idC?: number){
    this.questionnaireService.deleteQuestionnaire(idC).subscribe(
      (questionnaires: Questionnaire[]) => this.updateQuestionnaireList(questionnaires)
    );
  }

}
