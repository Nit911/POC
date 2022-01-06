import { Component, OnInit } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';

import {Router} from '@angular/router';

@Component({
  selector: 'app-user',//'dialogue-elements',
  templateUrl: './user.component.html',//'dialgue-elements.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(private router: Router) { }
  //public dialog: MatDialog
  firstname : string;
  lastname : string;
  email : string;
  phoneNo : number;
  gender : string;
  password : string;
  comments : string;
  
  //openDialog() {
    //this.dialog.open(DialogElements);
  //}

  ngOnInit(): void {
  }
  

}
