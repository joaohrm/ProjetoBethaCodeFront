import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasFormComponent } from './despesas-form/despesas-form.component';
import { DespesasListaComponent } from './despesas-lista/despesas-lista.component';

const routes: Routes = [
  { path: 'despesasForm', component: DespesasFormComponent },
  { path: 'despesasLista', component: DespesasListaComponent },
  { path: 'despesasForm/:id', component: DespesasFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespesasRoutingModule { }
