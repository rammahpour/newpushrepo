import { User } from '../models/User';

export class AddUser {
    static readonly type = '[User] Add';

    constructor(public payload: User) {}
}

export class DeleteUser {
    static readonly type = '[User] Delete';

    constructor(public email: string) {
    }
}

export class UpdateUser {
    static readonly type = '[User] Update';

    constructor(public payload: User, public email: string) {
    }

}

export class GetUsers {
    static readonly type = '[User] Get Users';
}