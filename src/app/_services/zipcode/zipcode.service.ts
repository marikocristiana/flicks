import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeService {

  constructor(private http: HttpClient) { }

  public getAddress(zipcode: string): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${zipcode}/json/`);
  }

}
