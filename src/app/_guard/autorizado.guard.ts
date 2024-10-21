import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service.service'; // Serviço de autenticação
import { Router } from '@angular/router';

export const autorizadoGuard: CanActivateFn = (route, state) => {
  // Injetando dependências corretamente
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verifica se o usuário está autenticado
  if (authService.isAuthenticated()) {
    return true; // Permite o acesso à rota
  } else {
    router.navigate(['/login']); // Redireciona para a página de login
    return false; // Bloqueia o acesso à rota
  }
};
