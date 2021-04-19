import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/entity/User'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private WS_REST_BASE_URL = "http://localhost:8080/users";

  constructor(private httpClient : HttpClient) { }

  getAllUserFromRest(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.WS_REST_BASE_URL}`);
  }

  addUserViaRest(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.WS_REST_BASE_URL}`, user);
  }

  removeUserViaRest(id : number): Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}/${id}`);
  }

  findUserByIdFromRest(id : number): Observable<User>{
    return this.httpClient.get<User>(`${this.WS_REST_BASE_URL}/${id}`);
  }

  updateUserViaRest(user : User) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}/${user.id}`, user);
  }

}
