import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userDetails: User;
  username = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadMenuItems();
  }

  loadMenuItems() {
    if (localStorage.getItem('userDetails') == null) {
      this.logout();
    }

    else this.userDetails = JSON.parse(localStorage.getItem('userDetails'));

  }

  getUsername(): string {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.username = JSON.parse(localStorage.getItem('username'));
    return (this.userDetails != null ? this.username : null);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
