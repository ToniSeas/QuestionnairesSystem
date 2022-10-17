import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, startWith } from 'rxjs';
import { Reviewer } from 'src/app/models/Reviewer';
import { ReviewingPermissionService } from 'src/app/services/reviewing-permission.service';

@Component({
  selector: 'app-create-step-three',
  templateUrl: './create-step-three.component.html',
  styleUrls: ['./create-step-three.component.css']
})
export class CreateStepThreeComponent implements OnInit {


  //From here on, get ready for some yummy spagetti :P
  officeControl = new FormControl('');
  officeOptions: string[] = ['One', 'Two', 'Three'];
  officeFilteredOptions!: Observable<string[]>;

  userControl = new FormControl('');
  userOptions: string[] = ['Pepe', 'Mario'];
  userFilteredOptions!: Observable<string[]>;

  private displayedColumns: string[] = ['id', 'name', 'lastname', 'operations']; //The colunms for the table
  private dataSource = new MatTableDataSource<Reviewer>; //The datasource is what the table displays
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private reviewingPermissionService: ReviewingPermissionService) { }

  ngOnInit(): void {
    this.officeFilteredOptions = this.officeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOffice(value || '')),
    );

    this.userFilteredOptions = this.userControl.valueChanges.pipe(
      startWith(''),
      map(value => this._userOffice(value || '')),
    );

    this.reviewingPermissionService.getReviewers().subscribe(
      (result: Reviewer[]) => (this.updateReviewerList(result))
    )

    this.dataSource.paginator = this.paginator
  }

  private _filterOffice(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.officeOptions.filter(officeOptions => officeOptions.toLowerCase().includes(filterValue));
  }

  private _userOffice(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.userOptions.filter(userOptions => userOptions.toLowerCase().includes(filterValue));
  }

  public getDataSource(): MatTableDataSource<Reviewer> {
    return this.dataSource;
  }

  public getDisplayedColumns(): string[] {
    return this.displayedColumns;
  }

  public updateReviewerList(reviewers: Reviewer[]): void {
    this.dataSource = new MatTableDataSource<Reviewer>(reviewers)
    this.dataSource.paginator = this.paginator
  }

  public addReviewer(): void {
    this.reviewingPermissionService.addReviewer(1).subscribe(
      (result: Reviewer[]) => (this.updateReviewerList(result))
    );
  }

  public clearReviewers(): void {
    this.reviewingPermissionService.clearReviewers().subscribe(
      (result: Reviewer[]) => (this.updateReviewerList(result))
    );
  }

}
