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



// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class CandidatoService {

//   // Aqui você coloca o endpoint da sua API (substitua pela URL real da sua API)
//   private url = 'https://api.seuservidor.com/candidatos';

//   constructor(private http: HttpClient) { }

//   // Método para obter os candidatos do banco via API
//   getCandidatos(): Observable<any> {
//     return this.http.get(this.url)
//       .pipe(
//         catchError(this.handleError) // Tratamento de erros
//       );
//   }

//   // Método para lidar com erros
//   private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       // Erro no lado do cliente
//       console.error('Ocorreu um erro:', error.error.message);
//     } else {
//       // Erro no lado do servidor
//       console.error(
//         `Código do erro: ${error.status}, ` +
//         `Erro: ${error.error}`);
//     }
//     // Retorna um observable com uma mensagem de erro amigável
//     return throwError(
//       'Algo deu errado; por favor, tente novamente mais tarde.');
//   }
// }

