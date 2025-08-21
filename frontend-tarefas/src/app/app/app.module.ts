import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from '../components/menu/menu.component';
import { Home } from '../pages/home/home.component';
import { Tarefas } from '../pages/tarefas/tarefas.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    Menu,
    Home,
    Tarefas
  ]
})
export class AppModule { }
