import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list-dashboard',
  templateUrl: './user-list-dashboard.component.html',
  styleUrls: ['./user-list-dashboard.component.css']
})
export class UserListDashboardComponent {
  @Input() userCurrent?: User;


}
