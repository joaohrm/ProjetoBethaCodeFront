import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasFormComponent } from './receitas-form/receitas-form.component';
import { ReceitasListaComponent } from './receitas-lista/receitas-lista.component';

const routes: Routes = [
  { path: 'receitasForm', component: ReceitasFormComponent },
  { path: 'receitasLista', component: ReceitasListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitasRoutingModule { }
