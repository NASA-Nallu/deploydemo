import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nallu-digital';

  constructor(public dialog: MatDialog){}

  openDialog(): void{
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      height: '300px'
    });
  }



}
