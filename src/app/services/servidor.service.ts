import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  private apiUrl = 'https://localhost:7035/api/servidor';

  constructor(private http: HttpClient) { }

  obterServidor(cpf: string, dataNascimento: string): Observable<any> {
    const url = `${this.apiUrl}/${cpf}/${dataNascimento}`;
    return this.http.get<any>(url);
  }
}
