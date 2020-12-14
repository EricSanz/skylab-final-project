import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserLoginStateService } from '../user-login-state.service';
import { VideogameService } from '../videogame.service';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  flag: boolean;

  user = this.userLoginState.getUser() !== null ? JSON.parse(localStorage.getItem('user')) : null;
  user$: Observable<User> = this.authService.getUser(this.authService.fireUser.user.displayName);

  constructor(
    public route: ActivatedRoute,
    public videogameService: VideogameService,
    public authService: AuthService,
    public userLoginState: UserLoginStateService,
  ) {
    this.userLoginState.getValue().subscribe((value: boolean) => {
      this.flag = value
    })
   }

  ngOnInit(): void {
  }

}
