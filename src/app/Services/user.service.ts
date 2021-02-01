import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    // tslint:disable-next-line: typedef
    fetchUsers(): Observable<User[]> {
        return this.UsersMockUp();
    }

    UsersMockUp(): Observable<User[]> {

        const users: User[] = [
            {
                name: 'name',
                email: 'email'
            },
            {
                name: 'name2',
                email: 'email2'
            },
        ]
        return of(users);
    }

}