import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import firebase from 'firebase/app';
import { catchError, tap } from 'rxjs/operators';
import { UserLoginStateService } from './user-login-state.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  private userUrl = 'http://localhost:1728/user';
  
  fireUser: any;
  user$ = new Subject<User>()

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  localStorage: any;

  constructor( 
    public http: HttpClient,
    public afAuth: AngularFireAuth,
    private router: Router,
    public loginState: UserLoginStateService, ) {
    this.loginState.setUser(this.user$)
   }

  handleError (operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of (result)
    };
  }

  async loginWithGoogle() {
    this.fireUser = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // this.localStorage.user = JSON.stringify(this.fireUser.user);
    this.loginState.setUser(this.fireUser.user);
    this.modifyUser(this.fireUser.user).subscribe();
    return this.fireUser.user;
  }

  async logOut(){
    await this.afAuth.signOut();
    this.localStorage.remove(this.fireUser.user);
    if (this.router.url === '/user') {
      this.router.navigate(['/home'])
    }  
  }

  async SignUp(email: string, password: string) {
    this.fireUser.afAuth.auth.signInWithEmailAndPassword(email, password);
    this.modifyUser(this.fireUser.user).subscribe();
  }

  SignIn(email: string, password: string) {
    this.fireUser.afAuth.auth.createUserWithEmailAndPassword(email, password)
    this.modifyUser(this.fireUser.user).subscribe();
  }

  getUser (name: string): Observable<User> {
    const url = `${this.userUrl}/?displayName=${name}`;
    return this.http.get<User>(url)
    .pipe(
      tap(() => console.log(`fetched user ${name}`)),
      catchError(this.handleError(`getUser name=${name}`, []))
    );
  }

  modifyUser(user: User): Observable<User> {
    const url = `${this.userUrl}`;
    return this.http.put<User>(url, user)
    .pipe(
      tap(() => console.log(`created user ${this.fireUser.user.uid}`)),
      catchError(this.handleError(`getUser name=${name}`, []))
    );
  }

  addFavourite(uid: string, videogame: string): Observable<User> {
    const url = `${this.userUrl}`;
    return this.http.post<User>(url, {uid, videogame})
    .pipe(
      tap((value) => console.log('added to favourites', value)),
      catchError(this.handleError('error adding favourite', []))
    );
  }

  setUser(user: Subject<User>) {
    this.user$ = user;
  }
}
