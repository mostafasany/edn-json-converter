import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonConvererServiceService {

  constructor(private http: HttpClient) { }


  convertToJson(edn: any): Observable<string> {
    const url = 'https://intense-taiga-15334.herokuapp.com/toJson';
    const data = new FormData();
    data.append('edn', edn);
    return this.http.post<string>(url, data);
  }
}
