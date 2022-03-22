import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  lstUsers: User[] = [];

  constructor(private serviceUser: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.serviceUser.getUsers().subscribe((res) => {
      this.lstUsers = res;
    });
  }
}
