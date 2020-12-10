import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import firebase from 'firebase/app';
import { catchError, tap } from 'rxjs/operators';

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

  constructor( public http: HttpClient, public auth: AngularFireAuth, private router: Router) { }

  handleError (operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of (result)
    };
  }

  async loginWithGoogle() {
    this.fireUser = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    localStorage.user = JSON.stringify(this.fireUser)
    this.modifyUser(this.fireUser.user).subscribe();
    return this.fireUser.user;
  }

  async logOut(){
    await this.auth.signOut();
    if (this.router.url === '/user') {
      this.router.navigate(['/home'])
    }  
  }

  async login(email: string, password: string) {
    this.fireUser.auth().signInWithEmailAndPassword(email, password);
    this.modifyUser(this.fireUser.user).subscribe();
  }

  register(email: string, password: string) {
    this.fireUser = this.auth.createUserWithEmailAndPassword(email, password)
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
    return this.http.post<User>(url, user)
    .pipe(
      tap(() => console.log(`created user ${this.fireUser.user.uid}`)),
      catchError(this.handleError(`getUser name=${name}`, []))
    );
  }
}
