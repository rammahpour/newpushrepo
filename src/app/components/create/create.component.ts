import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddUser, DeleteUser, UpdateUser } from 'src/app/actions/user.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  createForm(): void {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
   });
  }

  addUser(name: string, email: string): void {
    this.store.dispatch(new AddUser({ name, email}));
  }

  updateUser(name: string, email: string): void {

   const theUser = {
      name,
      email
  };
   this.store.dispatch(new UpdateUser(theUser, email));
  }

  ngOnInit(): void {
  }

}
