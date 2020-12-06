import { Injectable } from '@angular/core';
import { Videogame } from './videogame';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VideogameService {

  private videogamesUrl = 'api/videogames';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T>(operation= 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getVideogames(): Observable<Videogame[]> {
    return this.http.get<Videogame[]>(this.videogamesUrl)
    .pipe(
      tap(() => console.log('fetched videogames')),
      catchError(this.handleError<Videogame[]>('getVideogames', []))
    );
  }

  getVideogame(id: number): Observable<Videogame> {
    const url = `${this.videogamesUrl}/${id}`;
    return this.http.get<Videogame>(url)
    .pipe(
      tap(() => console.log(`fetched videogame id=${id}`)),
      catchError(this.handleError<Videogame>(`getVideogame id=${id}`))
    );
  }
}
