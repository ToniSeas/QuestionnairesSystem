import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatStepper } from '@angular/material/stepper';
import { MatTableDataSource } from '@angular/material/table';
import { Office } from 'src/app/models/Office';
import { Questionnaire } from 'src/app/models/Questionnaire';
import { QuestionnaireReviewer } from 'src/app/models/QuestionnaireReviewer';
import { User } from 'src/app/models/User';
import { OfficeService } from 'src/app/services/office.service';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';
import { ReviewingPermissionService } from 'src/app/services/reviewing-permission.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-step-three',
  templateUrl: './create-step-three.component.html',
  styleUrls: ['./create-step-three.component.css']
})
export class CreateStepThreeComponent implements OnInit, OnChanges {
  @Input() isModify?: boolean;
  @Input() stepperContainer?: MatStepper;
  @Input() questionnaire?: Questionnaire;
  @Input() questionnaireReviewers?: QuestionnaireReviewer[]


  users: User[] = []
  offices: Office[] = []

  officeControl: FormControl = new FormControl();
  userControl: FormControl = new FormControl();
  searchControl: FormControl = new FormControl();

  private displayedColumns: string[] = ['id', 'name', 'lastname', 'office', 'operations'];
  private dataSource = new MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private userService: UserService
    , private officeService: OfficeService
    , private questionnaireService: QuestionnaireService) { }


  ngOnChanges(changes: SimpleChanges): void {
    let isModifyAux: boolean = changes['isModify'].currentValue;
    //TODO: comprobar si es verdadera, si es verdadero entonces debe cargar los permisos de la base de datos segun el cuestionario

    //NOTA: no entendí el comentario anterior. 
  }

  ngOnInit(): void {

    let users: User[] = []

    this.dataSource.paginator = this.paginator
    this.updateOffices()
  }

  public updateOffices() {
    this.officeService.getOffices().subscribe(
      (responseDTO) => (this.offices = responseDTO.item!)
    )
  }

  public removeReviewer(id: number) {
    //TODO
  }

  public updateReviewerList(): void {
    //TODO
  }

  public officeChange() {
    this.userService.getUserByOffice(this.officeControl.value).subscribe(
      (responseDTO) => (this.updateUserList(responseDTO.item!))
    )
  }

  public updateUserList(users: User[]): void {
    this.users = users;
  }

  public getDataSource(): MatTableDataSource<User> {
    return this.dataSource;
  }

  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public addReviewer(): void {
    //Verificar si la oficina seleccionada es válida.
    let valid = false
    this.offices.forEach(element => {
      if (element.id == this.officeControl.value) {
        valid = true
      }
    });

    //estas líneas limpian los datos, dejarlas aquí.
    this.userControl.setValue(null)
    this.searchControl.setValue(null)
  }

  public searchReviewers() {
    if (this.searchControl.value != null) {
      //TODO buscar, se debe reordenar la tabla SIN BORRAR NADA
    }
  }

  public cleaningServices(): void {
    this.officeControl.setValue(null)
    this.userControl.setValue(null)
    this.searchControl.setValue(null)
    this.updateUserList([])
  }

  public checkValid(): boolean {
    return this.officeControl.valid && this.userControl.valid
  }

  goBack() {
    this.stepperContainer!.previous();
  }

  goForward() {
    this.stepperContainer!.next();
  }

}
