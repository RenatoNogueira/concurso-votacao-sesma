import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private url = './assets/candidatos.json';

  constructor(private http: HttpClient) { }

  getCandidatos(): Observable<any> {
    return this.http.get(this.url);
  }
}
