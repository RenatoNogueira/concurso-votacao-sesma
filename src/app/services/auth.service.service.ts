import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    // Aqui você pode verificar se o usuário está logado, por exemplo, verificando um token no localStorage
    return !!localStorage.getItem('token'); // Exemplo simples de verificação
  }
}
