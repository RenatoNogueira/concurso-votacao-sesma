import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../services/candidatos.service';

@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.component.html',
  styleUrl: './votacao.component.css'
})
export class VotacaoComponent implements OnInit {
votar() {
throw new Error('Method not implemented.');
}
  almere: any[] = [];

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit(): void {
    this.candidatoService.getCandidatos().subscribe(data => {
      this.almere = data.almere;
    });
  }
}


