import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SourceType } from './datatype';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  url:any = environment.endPoints.serverConfig + environment.endPoints.users;

  subject = new BehaviorSubject<any>('');
  subjectData = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) {}

  onlogOn(): Observable<any> {
    return this.http.get(
      'https://6120a52924d11c001762ed1c.mockapi.io/login/users/users'
    );

  }

  setData(data: any): any {
    this.subject.next(data);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

  clearData(): any {
    this.subject.closed;
  }

  setCurrentUser(data: any): any {
    this.subjectData.next(data);
  }

  getCurrentUser(): Observable<any> {
    return this.subjectData.asObservable();
  }

  clearCurrentUser(): any {
    this.subjectData.closed;
  }
}
