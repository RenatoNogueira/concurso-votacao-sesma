import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  private apiUrl = 'https://localhost:7035/api/servidor';

  constructor(private http: HttpClient) { }

  obterServidor(cpf: string, dataNascimento: string): Observable<any> {
    const url = `${this.apiUrl}/${cpf}/${dataNascimento}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Erro no lado do cliente
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // Erro no lado do servidor
      console.error(
        'Código do erro: ${error.status}, ' +
        'Erro: ${error.message}');
    }
    // Retorna um observable com uma mensagem de erro amigável
    return throwError(() => new Error('Algo deu errado; por favor, tente novamente mais tarde.'));
  }
}
