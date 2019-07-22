import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Coach } from '../models/coach';
import{catchError, map, tap} from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  private coachUrl = 'https://localhost:5001/api/coach';//URL to web api
constructor(
  private http:HttpClient,
  private messsageService: MessageService) { }

  /**GET coach from the server */
  getCoaches():Observable<Coach[]>{
    return this.http.get<Coach[]>(this.coachUrl)
    .pipe(
      tap(_ => this.log('fetched coaches')),
      catchError(this.handleError<Coach[]>('getCoaches',[]))
);
  }

  addCoach(coach:Coach):Observable<Coach>{
    return this.http.post<Coach>(this.coachUrl,coach,httpOptions).pipe(
      tap((newCoach: Coach)=>this.log(`added coach w/id=${newCoach.Id}`)),
      catchError(this.handleError<Coach>('addCoach'))
    );
  }

  deleteCoach(coach:Coach|number): Observable<Coach>{
    const id = typeof coach==='number'?coach:coach.Id;
    const url = `${this.coachUrl}/${id}`;

    return this.http.delete<Coach>(url,httpOptions).pipe(
      tap(_=>this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Coach>('deleteCoach'))
    );
  }
  updateCoach(coach: Coach): Observable<any>{
    return this.http.put(this.coachUrl, coach,httpOptions).pipe(
      tap(_=>this.log(`updated coach id=${coach.Id}`)),
      catchError(this.handleError<any>('updateCoach'))
    );
  }

  private handleError<T>(operation = 'operation',result?:T){
    return (error:any):Observable<T>=>{
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messsageService.add(`CoachService:${message}`);
  }
}
