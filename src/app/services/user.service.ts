import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "https://gorest.co.in/public/v1/users";;

  userList = [];

  constructor(private http: HttpClient) {
  }

  getUserAll(page: number): Observable<any> {
    return this.http.get(`${this.url}?page=${page}`);
  }

  getUserById(id : number): Observable<any> {
    return this.http.get(`${this.url}?id=${id}`);
  }
}
