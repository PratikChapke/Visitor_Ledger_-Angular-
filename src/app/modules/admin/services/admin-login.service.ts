import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  // constructor(private http: HttpClient) { }

  // login(username: string, password: string) {
  //   // Make a GET request to your backend API for authentication
  //   return this.http.get<boolean>(`http://localhost:8050/admin?username=${username}&password=${password}`);


  private baseUrl = 'http://localhost:8050/admin';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const url = `${this.baseUrl}/${username}/${password}`;
    return this.http.get<boolean>(url);
  }
  
  }


