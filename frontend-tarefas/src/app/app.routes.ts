import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { Tarefas } from './pages/tarefas/tarefas.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tarefas', component: Tarefas }
];