import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { VotacaoComponent } from './votacao/votacao.component';
import { FinalizadoComponent } from './finalizado/finalizado.component';
import { autorizadoGuard } from './_guard/autorizado.guard';

const routes: Routes = [
  { path: 'login', title: "Faça seu login", component: LoginComponent},
  { path: 'votacao', component: VotacaoComponent, canActivate: [autorizadoGuard]},
  { path: 'finalizado', component: FinalizadoComponent, canActivate: [autorizadoGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

