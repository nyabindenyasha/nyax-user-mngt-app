import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { UserRoles, UserRolesHelper } from '../enums/user-roles';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [{
    id: 1,
    name: "Nyasha",
    surname: "Nyax",
    email: "nyax@gmail.com",
    password: "nyax@123",
    role: UserRoles.ADMIN
  },
  {
    id: 2,
    name: "pride",
    surname: "jena",
    email: "pride@gmail.com",
    password: "pride$123",
    role: UserRoles.GENERAL,
  },
  {
    id: 3,
    name: "ropa",
    surname: "muridzi",
    email: "ropa@gmail.com",
    password: "ropa@123",
    role: UserRoles.ADMIN
  }
  ];

  create(user: User) {
    const itemIndex = this.users.length;
    user.id = this.getnextId();
    user.roleString = UserRolesHelper.getRoleName(user.role);
    user.isAdmin = UserRolesHelper.getIsAdmin(user.role);
    console.log(user);
    this.users[itemIndex] = user;
  }

  delete(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }

  update(user: User) {
    const itemIndex = this.users.findIndex(item => item.id === user.id);
    console.log(itemIndex);
    this.users[itemIndex] = user;
  }

  findOne(name: String, password: String): User {
    var userReturned: User;
    this.users.forEach(x => {
      if (x.name === name && x.password === password){
        userReturned = x;
      }
    })
    return userReturned;
  }

  getall(): User[] {
    this.users.forEach(x => {
      x.roleString = UserRolesHelper.getRoleName(x.role);
      x.isAdmin = UserRolesHelper.getIsAdmin(x.role);
    })
    return this.users;
  }

  reorderUsers(user: User) {
    this.users = this.users
      .map(uc => uc.id === user.id ? user : uc)
      .sort((a, uc) => uc.id - uc.id);
  }

  getUserById(id: number) {
    const itemIndex = this.users.findIndex(item => item.id === id);
    console.log(itemIndex);
    return this.users[itemIndex];
  }

  getnextId(): number {
    let highest = 0;
    this.users.forEach(function (item) {
      if (highest === 0) {
        highest = item.id;
      }
      if (highest < item.id) {
        highest = item.id;
      }
    });
    return highest + 1;
  }
}
