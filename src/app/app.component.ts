import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserRoles, UserRolesHelper } from './enums/user-roles';
import { TableCompose } from './provider/table/table-compose';
import { DataType } from './provider/table/data-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {

  }

}
