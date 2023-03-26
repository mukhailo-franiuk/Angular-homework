import { Component } from '@angular/core';

@Component({
  selector: 'app-homework02',
  templateUrl: './homework02.component.html',
  styleUrls: ['./homework02.component.scss']
})
export class Homework02Component {
  public newLogin = '';
  public newPassword = ''
  public newEmail = '';
  public users = {};
  public allUsers: any = [];
  public checkStatus = false;
  public editIndex !: number;

  constructor() { }
  addInfo(): void {
    this.users = {
      "login": this.newLogin,
      "password": this.newPassword,
      "email": this.newEmail
    }
    this.allUsers.push(this.users);
    console.log(this.allUsers);
    this.newLogin = '';
    this.newPassword = '';
    this.newEmail = '';
  }
  deleteUsers(index: number): void {
    this.allUsers.splice(index, 1);
  }
  usersEdit(index: number): void {
    this.newLogin = this.allUsers[index].login;
    this.newPassword = this.allUsers[index].password;
    this.newEmail = this.allUsers[index].email;
    this.editIndex = index;
    this.checkStatus = true;
  }
  updateName(): void {
    this.allUsers[this.editIndex].login = this.newLogin;
    this.allUsers[this.editIndex].password = this.newPassword;
    this.allUsers[this.editIndex].email = this.newEmail;
    this.newLogin = '';
    this.newPassword = '';
    this.newEmail = '';
    this.checkStatus = false;
  }

}
