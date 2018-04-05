import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HeroService {

  private apiPath = '/api';  // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Heroes service: fetched heroes');
    return this.http.get<Hero[]>(`${this.apiPath}/heroes`)
      .pipe(
      catchError(this.handleError('getHeroes', null))
    );
    // return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // return of(HEROES.find(hero => hero.id === id));
    return this.http.get<Hero>(`${this.apiPath}/heroes/${id}`)
      .pipe(
        catchError(this.handleError('getHero', null))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
