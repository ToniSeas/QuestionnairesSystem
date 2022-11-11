import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  private displayedColumns: string[] = ['title', 'creationDate', 'expirationDate', 'state', 'operations'];
  private dataSource = new MatTableDataSource<Questionnaire>;
  private searchControl: FormControl;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private questionnaireService: QuestionnaireService) {
    this.searchControl = new FormControl('');
  }

  ngOnInit(): void {
    this.questionnaireService.getQuestionnaires().subscribe(
      (responseDTO) => {
        this.updateQuestionnaireList(responseDTO.item!)
      }
    )

    this.dataSource.paginator = this.paginator;
  }

  public getDataSource(): MatTableDataSource<Questionnaire> {
    return this.dataSource;
  }

  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public getQuestionnaireState(isActive: boolean): string {
    return isActive ? "Habilitado" : "Deshabilitado";
  }

  // Buscar cuestionario segun el nombre
  public searchQuestionnaire(): void {
    var name: string = this.searchControl.value;
    if (name == null) { name = ''; }
    if (name.length > 0) {
      this.questionnaireService.searchQuestionnaire(name).subscribe((responseDto) => {
        this.updateQuestionnaireList(responseDto.item!);
      });
    } else {
      this.questionnaireService.getQuestionnaires().subscribe((responseDto) => {
        this.updateQuestionnaireList(responseDto.item!);
      });
    }
  }

  public cleanSearchControl() {
    this.searchControl.reset();
  }

  // Este metodo retona la fecha en el siguiente formato: dd/mm/yyyy
  public getDate(date: Date): string {
    var dateString = `${date}`.split("T")[0];
    return dateString;
  }

  public updateQuestionnaireList(questionnaires: Questionnaire[]): void {
    this.dataSource = new MatTableDataSource<Questionnaire>(questionnaires)
    this.dataSource.paginator = this.paginator;
  }

  public deleteQuestionnaire(idC?: number) {
    this.questionnaireService.deleteQuestionnaire(idC).subscribe(
      (messageDTO) => {
        if (messageDTO.id != 1) {
          console.log(messageDTO.message)
        } else {
          this.questionnaireService.getQuestionnaires().subscribe(
            (responseDTO) => {
              this.updateQuestionnaireList(responseDTO.item!);
            }
          )
        }
      }
    );
  }

  public getSearchControl(): FormControl { return this.searchControl };
}
