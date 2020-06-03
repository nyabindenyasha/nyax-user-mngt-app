import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableHeader } from '../table/table-header';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
  @Input() title: string;
  @Input() form: any;
  @Input() headers: TableHeader[];
  @Input() editButton: boolean;
  @Input() deleteButton: boolean;
  @Input() buttons: boolean;
  @Input() action: any;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() onaction = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit() {
  }

  onedit() {
    this.edit.emit(this.form);
  }

  ondelete() {
    swal.fire({
      title: 'Are you sure?',
      text: 'This ' +  this.title + ' will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
      confirmButtonColor: '#3085d6',

    }).then((result) => {
      if (result.value) this.delete.emit(this.form);
    });
  }


  oncustomBtn() {
    this.onaction.emit(this.form);
  }

}
