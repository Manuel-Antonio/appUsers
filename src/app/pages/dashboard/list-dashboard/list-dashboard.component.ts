import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-dashboard',
  templateUrl: './list-dashboard.component.html',
  styleUrls: ['./list-dashboard.component.css']
})
export class ListDashboardComponent {
  userList : User[] = [];
  pageCurrent : number = 1;
  pageTotal : number = 0;
  isLoading : boolean = false;

  constructor(private userSrv : UserService) {
    this.userSrv.getUserAll(this.pageCurrent).subscribe(data => {
      this.userList = data?.data;
      this.pageTotal = +data?.meta?.pagination?.pages;
      this.isLoading = true;
    }, error => {
      console.log("Ocurrio un error")
      this.isLoading = false;
    })
  }

  previousPage() {
    if(this.pageCurrent === 1) {
      return;
    }

  this.pageCurrent--;
  this.getUsers(this.pageCurrent);
  }
  nextPage() {
    if(this.pageCurrent === this.pageTotal) {
      return;
    }
    this.pageCurrent++;
    this.getUsers(this.pageCurrent);
  }

  getUsers(page : number) {
    this.isLoading = false;
    this.userSrv.getUserAll(page).subscribe(data => {
      this.userList = data?.data;
      this.isLoading = true;
    })
  }

  spinnerLoagins() {
    this.isLoading = false;

  }
}
