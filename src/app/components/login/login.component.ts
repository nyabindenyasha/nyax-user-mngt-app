import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/provider/user.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { Validation } from 'src/app/provider/validation/validation';
import { ValidationType } from 'src/app/provider/validation/validation-type.enum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title = 'Nyax User App with Temp Json';
  user: User;
  validation: Validation;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.loadValidation();
  }

  loadValidation() {
    this.validation = new Validation();
    this.validation.addField({ name: 'name', display: ' Firstname', type: ValidationType.Required });
    this.validation.addField({ name: 'password', display: ' Password', type: ValidationType.Required });
  }

  onSubmit() {
    var userLoggedIn: User;
    userLoggedIn = this.userService.findOne(this.user.name, this.user.password);

    if (userLoggedIn != null) {
      localStorage.setItem('userDetails', JSON.stringify(userLoggedIn));
      localStorage.setItem('username', JSON.stringify(userLoggedIn.name));
      this.router.navigateByUrl('/home');
    }
    else{
      Swal.fire('Login Failed', 'Incorrect username or password', 'warning');
    }
  }

}
