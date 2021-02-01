import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DeleteUser, GetUsers } from 'src/app/actions/user.action';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  users: Observable<User>;

  constructor(private store: Store) {
    this.users = this.store.select(state => state.users.users);
   }

  ngOnInit() {
  //  this.store.dispatch(new GetUsers());
  }

  deleteUser(email: string): void {
    debugger;
    this.store.dispatch(new DeleteUser(email));
  }

}
