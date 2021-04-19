import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserType } from 'src/app/entity/UserType'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  private WS_REST_BASE_URL = "http://localhost:8080/userTypes";

  constructor(private httpClient : HttpClient) { }

  getAllUserTypeFromRest(): Observable<UserType[]>{
    return this.httpClient.get<UserType[]>(`${this.WS_REST_BASE_URL}`);
  }

  addUserTypeViaRest(userType: UserType): Observable<UserType>{
    return this.httpClient.post<UserType>(`${this.WS_REST_BASE_URL}`, userType);
  }

  removeUserTypeViaRest(id : number): Observable<void>{
    return this.httpClient.delete<void>(`${this.WS_REST_BASE_URL}/${id}`);
  }

  findUserTypeByIdFromRest(id : number): Observable<UserType>{
    return this.httpClient.get<UserType>(`${this.WS_REST_BASE_URL}/${id}`);
  }

  updateUserTypeViaRest(userType : UserType) : Observable<void>{
    return this.httpClient.put<void>(`${this.WS_REST_BASE_URL}/${userType.id}`, userType);
  }
}
