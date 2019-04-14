import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})

export class UserListComponent implements OnInit {

  users: User[]
  selectedUser: User

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .getUsers()
      .then((users: User[]) => {
        this.users = users.map((user) => {
          if (!user.user_type) {
            user.user_type = 'All';
          }
          return user;
        });
      });
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  createNewUser() {
    let user: User = {
      name: '',
      email: '',
      phone: {
        work: '',
        mobile: ''
      }
    };

    // By default, a newly-created contact will have the selected state.
    this.selectUser(user);
  }

  deleteUser = (userId: String) => {
    var idx = this.getIndexOfUser(userId);
    if (idx !== -1) {
      this.users.splice(idx, 1);
      this.selectUser(null);
    }
    return this.users;
  }

  addUser = (user: User) => {
    this.users.push(user);
    this.selectUser(user);
    return this.users;
  }

  updateUser = (user: User) => {
    var idx = this.getIndexOfUser(user._id);
    if (idx !== -1) {
      this.users[idx] = user;
      this.selectUser(user);
    }
    return this.users;
  }
}
