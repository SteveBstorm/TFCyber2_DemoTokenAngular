import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url : string = "https://localhost:7167/api/"

  constructor(
    private client : HttpClient
  ) { }

  login(email : string, password : string) {
    this.client.post(this.url + "auth/login", {email, password}, {responseType : 'text'})
      .subscribe({
        next : (token : string) => {
          localStorage.setItem("token", token)
        }
      })
  }

  logout() {
    localStorage.clear()
  }

  getAllUsers() : Observable<any> {
    // let token = localStorage.getItem("token")
    // let myHeaders = new HttpHeaders({'Authorization' : 'bearer '+token})
    // return this.client.get<any>(this.url + "auth/getusers", {headers : myHeaders})
    return this.client.get<any>(this.url + "auth/getusers")
  }

  getProfile() : Observable<any> {

    return this.client.get<any>(this.url + "auth/getprofil")
  }

  //npm i jwt-decode
  getUserRole() {
    let token : string = localStorage.getItem("token") ?? ""
    let decodedToken : any = jwt_decode.jwtDecode(token)

    return decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]

  }

}
