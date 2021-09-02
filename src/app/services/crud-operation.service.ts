import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationService {

  constructor(private http: HttpClient) { }

  deleteSelected(id: any){
    return this.http.delete(
      `https://6120a52924d11c001762ed1c.mockapi.io/login/users/users/${id}`
    );
  }

  editSelected(id: any){
    return this.http.put(
      'https://6120a52924d11c001762ed1c.mockapi.io/login/users/users/', id
    );
  }
}
