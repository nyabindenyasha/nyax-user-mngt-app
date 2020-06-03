import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/provider/user.service';
import { TableCompose } from 'src/app/provider/table/table-compose';
import { DataType } from 'src/app/provider/table/data-type.enum';
import Swal from 'sweetalert2';
import { UserRolesHelper } from 'src/app/enums/user-roles';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userDetails: User[];
  tableData: TableCompose;
  selected: any;
  isAdd: boolean;
  logedInUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.logedInUser = JSON.parse(localStorage.getItem('userDetails'));
    this.getUsers();
  }

  getUsers() {
    this.userDetails = this.userService.getall();
    this.loadUsers(this.userDetails)
  }

  loadUsers(users: User[]) {
    this.userDetails = users;

    this.userDetails.forEach(x => {
      x.roleString = UserRolesHelper.getRoleName(x.role);
      x.isAdmin = UserRolesHelper.getIsAdmin(x.role);
    })

    this.tableData = new TableCompose()
      .composeHeader('id', 'Id', DataType.Plain)
      .composeHeader('name', 'Name', DataType.Plain)
      .composeHeader('surname', 'Surname', DataType.Plain)
      .composeHeader('email', 'Email', DataType.Plain)
      .composeHeader('roleString', 'Role', DataType.Plain)
      .composeHeader('isAdmin', 'IsAdmin', DataType.Check)
      .setBody(this.userDetails);
  }

  itemClick(item) {
    this.selected = item;
    this.isAdd = false;
  }

  addClick() {
    this.selected = {};
    this.isAdd = true;
  }

  editClick(item) {
    this.selected = item;
    this.isAdd = true;
  }

  deleteClick(item: User) {
    this.userService.delete(item);
    this.reloadUsers(item);
  }

  reloadUsers(event) {
    event.roleString = UserRolesHelper.getRoleName(event.role);
    event.isAdmin = UserRolesHelper.getIsAdmin(event.role);
    this.getUsers();
    this.isAdd = false;
    this.selected = null;
  }

}
