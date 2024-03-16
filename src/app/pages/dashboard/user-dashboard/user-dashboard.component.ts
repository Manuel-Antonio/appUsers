import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnDestroy {
  subscription = new Subscription();
  user?: User;
  idUser : number = 0;
  isLoading : boolean = false;

  constructor(private userSrv: UserService, private router : ActivatedRoute) {
    this.idUser = +(this.router.snapshot.paramMap.get('id') || 0);
    this.subscription = this.userSrv.getUserById(this.idUser).subscribe(data => {
      this.user = data?.data[0];
      this.isLoading = true;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
