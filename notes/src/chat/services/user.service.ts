import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {Subject,BehaviorSubject} from 'rxjs';

/**
 * UserService manages our current user
 */
@Injectable()
export class UserService {
    currentUser: Subject<User> = new BehaviorSubject<User>(null);

    public setCurrentUser(newUser: User): void {
        this.currentUser.next(newUser);
    }
}