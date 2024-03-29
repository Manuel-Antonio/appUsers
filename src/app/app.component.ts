import { Component } from '@angular/core';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppUsuarios';

  constructor(private tokenSrv: TokenService) {
    this.tokenSrv.setToken(this.tokenSrv.token);
  }
}
