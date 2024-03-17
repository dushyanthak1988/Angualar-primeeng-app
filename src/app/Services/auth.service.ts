import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseurl = "http://localhost:3000"; // Remove the trailing slash here

  constructor(private http: HttpClient) { }

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseurl}/users`, userDetails);
  }
  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>('${this.baseurl}/users?email=' +email);
  }
}
