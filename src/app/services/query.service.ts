import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class QueryService {
  private apiUrl = 'http://localhost:8000/whois'

  constructor(private http:HttpClient) { }

  // getInfo(domainName: string): Observable<any> {
  //   let url = `${this.apiUrl}/?domain=${domainName}`
  //   return this.http.get<any>(url,{ responseType: 'text' as 'json' });
  // }
  getInfo(domainName: string): Observable<string> {
    let url = `${this.apiUrl}/?domain=${domainName}`
    return this.http.get<string>(url,{ responseType: 'text' as 'json' });
  }
}
