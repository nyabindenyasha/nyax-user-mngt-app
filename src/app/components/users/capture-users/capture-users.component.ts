import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validation } from 'src/app/provider/validation/validation';
import { ValidationType } from 'src/app/provider/validation/validation-type.enum';
import { UserService } from 'src/app/provider/user.service';
import { User } from 'src/app/model/user';
import swal from 'sweetalert2';
import { RegexPattern } from 'src/app/provider/validation/regex-pattern';

@Component({
  selector: 'app-capture-users',
  templateUrl: './capture-users.component.html',
  styleUrls: ['./capture-users.component.scss']
})
export class CaptureUsersComponent implements OnInit {

  @Input() user: User
  @Output() data: EventEmitter<any> = new EventEmitter<User>();
  validation: Validation;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    if (this.user == null) this.user = new User();
    this.loadValidation();
  }

  loadValidation() {
    this.validation = new Validation();
    this.validation.addField({ name: 'name', display: ' Firstname', type: ValidationType.Required });
    this.validation.addField({ name: 'surname', display: ' Surname', type: ValidationType.Required });
    this.validation.addField({ name: 'email', display: ' Email', type: ValidationType.Required });
//    this.validation.addField({ name: 'email', display: ' Email', type: ValidationType.Pattern},'','', RegexPattern.getEmailRegex());
    this.validation.addField({ name: 'password', display: ' Password', type: ValidationType.Required });
 //   this.validation.addField({ name: 'password', display: ' Password', type: ValidationType.PasswordPattern},'','', RegexPattern.getPasswordRegex());
    this.validation.addField({ name: 'role', display: ' Role', type: ValidationType.Required });
  }

  onSubmit() {
    if (this.user.id > 0) {
      this.userService.update(this.user);
      swal.fire('Success', 'User updated successfully', 'success');
      this.data.emit(this.user);
      return;
    } else {
      this.userService.create(this.user);
     swal.fire('Success', 'User created successfully', 'success');
      this.data.emit(this.user);
    }
  }

}
