import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { CrudOperationService } from '../services/crud-operation.service';
import { NgxPermissionsService } from 'ngx-permissions';
import { NgxSpinnerService } from 'ngx-spinner';

export interface UserData {
  id: string;
  name: string;
  userName: string;
  role: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MatPaginator, MatSort],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  tableData: any;
  dataSource!: MatTableDataSource<UserData>;
  displayedColumns: string[] = ['id', 'name', 'userName', 'role', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedUser: any;
  userRole: any;
  sourceData: any;

  constructor(private changeDetectorRefs: ChangeDetectorRef, private logserv: LoginService, private router: Router, private crud: CrudOperationService, private permissionsService: NgxPermissionsService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.logserv.getData().subscribe((message) => {
      this.tableData = message;
      console.log('from dashboard',message);
    });

    this.logserv.getCurrentUser().subscribe((message) => {
      this.userRole = message.role;
    });

    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
    updateTableData() {
      this.logserv.onlogOn().subscribe(data => {
        this.tableData = data;
        this.changeDetectorRefs.detectChanges();
      });
    }
  // this.permissionsService.addPermission(['admin', 'user'])

  //   this.permissionsService.loadPermissions(this.userRole);

  ngAfterViewInit() {
    this.showTableData()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  shareInfo(details:any) {
    this.selectedUser = details;
    // [routerLink]="['./', element.id]" [queryParams] = "{selected: element}"
    this.router.navigate(['/home/dashboard', this.selectedUser.id]);
  }

  deleteRow(row: any){
    this.crud.deleteSelected(row).subscribe(sub => {
      console.log('row deleted', sub);
      this.updateTableData();
      this.showTableData();
    });
  }

  editRow(row: any){
    this.crud.editSelected(row).subscribe(sub => console.log('row edited', sub))
  }

  showTableData(){
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.tableData);
      console.log('Table data', this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


}
