import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Office } from 'src/app/models/Office';
import { Reviewer } from 'src/app/models/Reviewer';
import { User } from 'src/app/models/User';
import { ReviewingPermissionService } from 'src/app/services/reviewing-permission.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-step-three',
  templateUrl: './create-step-three.component.html',
  styleUrls: ['./create-step-three.component.css']
})
export class CreateStepThreeComponent implements OnInit {

  //These arrays are used to fill the form's options.
  //TODO fill these using userService and officeService
  users: User[] = []
  offices: Office[] = [new Office({ id: 1, name: "Registros" }), new Office({ id: 2, name: "Recursos Humanos" }), new Office({ id: 3, name: "Bodegas" })]

  //These formcontrol objects are a direct connection to the forms. Note: "form" in this case are the mat-select components!
  //you need to import ReactiveFormsModule in order to bind [formControl] in your html.
  officeControl: FormControl = new FormControl();
  userControl: FormControl = new FormControl();
  searchControl: FormControl = new FormControl();

  private displayedColumns: string[] = ['id', 'name', 'lastname', 'office', 'operations']; //The colunms for the table
  private dataSource = new MatTableDataSource<Reviewer>; //The datasource is what the table displays
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private reviewingPermissionService: ReviewingPermissionService, private userService: UserService) { }

  ngOnInit(): void {
    this.reviewingPermissionService.getReviewers().subscribe(
      (result: Reviewer[]) => (this.updateReviewerList(result))
    )

    let reviewers: Reviewer[] = []
    this.updateReviewerList(reviewers)

    this.dataSource.paginator = this.paginator
  }

  public getDataSource(): MatTableDataSource<Reviewer> {
    return this.dataSource;
  }

  public removeReviewer(id: number) {
    this.reviewingPermissionService.removeReviewer(id).subscribe( //add new reviewer
      (result: Reviewer[]) => (this.updateReviewerList(result))
    );
  }

  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public updateReviewerList(reviewers: Reviewer[]): void {
    this.dataSource = new MatTableDataSource<Reviewer>(reviewers)
    this.dataSource.paginator = this.paginator
  }

  public officeChange() {
    this.userService.getUserByOffice(this.officeControl.value).subscribe(
      (result: User[]) => (this.updateUserList(result))
    )
  }

  public updateUserList(users: User[]): void {
    this.users = users;
  }

  public addReviewer(): void {
    //Check if values are valid
    let valid = false
    this.offices.forEach(element => {
      if (element.id == this.officeControl.value) {
        valid = true
      }
    });

    let reviewer: Reviewer
    if (valid) {
      valid = false
      this.users.forEach(element => {
        if (element.id == this.userControl.value) {
          valid = true
          reviewer = element //Casting from user to reviewer, the field "questionnaireID" is not set because the questionnaire itself hasn't been created yet
          this.reviewingPermissionService.addReviewer(reviewer).subscribe( //add new reviewer
            (result: Reviewer[]) => (this.updateReviewerList(result))
          );
          this.userControl.setValue(null)
          this.searchControl.setValue(null)
        }
      })
    }

  }

  /**
   * This method sorts an array recursively according to a search value.
   * @param oldArray The array to be sorted
   * @param substring The search value
   */
  public sortBySearch(oldArray: Reviewer[], substring: string): Reviewer[] {
    //This will sort the reviewers array according to a string parameter using indexof
    let newArray: Reviewer[] = []
    oldArray.forEach(element => {
      let index = (element.name + "").indexOf(substring) //where, in the main string, is this substring
      if (index > -1) { //is this substring actually present in the main string?
        //if so, add it to the array at the corresponding spot
        let added = false
        for (let i = 0; i < newArray.length; i++) {
          let tempIndex = (newArray[i].name + "").indexOf(substring)
          console.log(index, " ", tempIndex)
          if (tempIndex < 0 || index < tempIndex) {
            if (i == 0) {
              newArray.unshift(element)
            } else {
              newArray.splice(i, 0, element)
            }
            added = true
            break
          }
        }
        if (!added) {
          newArray.push(element)
        }
      } else { //else, add it to the end
        newArray.push(element)
      }
    })

    console.log(newArray)
    return newArray
  }


  public searchReviewers() {

    if (this.searchControl.value != null) {
      let oldArray: Reviewer[] = this.dataSource.data
      let newArray: Reviewer[] = this.sortBySearch(oldArray, this.searchControl.value)
      this.updateReviewerList(newArray)
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

}
