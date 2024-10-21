import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServidorService } from '../services/servidor.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 cpf: string = '';
  dataNascimento: string = '';
  dados: any = null;
  carregando: boolean = false;
  erro: string | null = null;

  constructor(private servidorService: ServidorService, private router: Router) {}

  async onSubmit() {
    this.carregando = true;
    this.erro = null; // Resetando mensagens de erro

    try {
      this.dados = await firstValueFrom(this.servidorService.obterServidor(this.cpf, this.dataNascimento));
      console.log('Dados recebidos:', this.dados);

      this.router.navigate(['/votacao']); // Redireciona em caso de sucesso
    } catch (error) {
      console.error('Erro ao obter dados:', error);
      this.erro = 'Erro ao obter os dados. Tente novamente.'; // Exibe a mensagem de erro
    } finally {
      this.carregando = false; // Para de exibir o carregamento, independentemente do resultado
    }
  }
}
