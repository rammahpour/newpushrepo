import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User } from '../models/User';
import { AddUser, DeleteUser, GetUsers, UpdateUser } from '../actions/user.action';
import { UserService } from '../Services/user.service';
import { tap } from 'rxjs/operators';


export class UserStateModel {
    users: User[];
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})
export class UserState {

    // constructor(private userService: UserService) {
    // }

    @Selector()
    static getUsers(state: UserStateModel): User[] {
        return state.users;
    }

    @Action(AddUser)
    add({ getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser): void {
        const state = getState();
        patchState({
            users: [...state.users, payload]
        });
    }

    @Action(DeleteUser)
    delete({ getState, patchState }: StateContext<UserStateModel>, { email }: DeleteUser): void {
        const state = getState();
        const filteredArray = state.users.filter(user => user.email !== email);
        patchState({
            ...state,
            users: filteredArray
        });
    }

    @Action(UpdateUser)
    update({ getState, patchState }: StateContext<UserStateModel>, { payload, email }: UpdateUser): void {
        const state = getState();
        const userList = [...state.users];
        const todoIndex = userList.findIndex(item => item.email === email);
        userList[todoIndex] = payload;
        patchState({
            ...state,
            users: userList,
        });
    }

    // @Action(GetUsers)
    // getUsers({ getState, patchState }: StateContext<UserStateModel>) {
    //     return this.userService.fetchUsers().pipe(tap((result) => {
    //         debugger;
    //         const state = getState();
    //         patchState({
    //             ...state,
    //             users: result
    //         });
    //     }));
    // }

}