import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DespesasRoutingModule } from './despesas-routing.module';
import { DespesasFormComponent } from './despesas-form/despesas-form.component';
import { DespesasListaComponent } from './despesas-lista/despesas-lista.component';


@NgModule({
  declarations: [
    DespesasFormComponent,
    DespesasListaComponent
  ],
  imports: [
    CommonModule,
    DespesasRoutingModule,
    FormsModule
  ],
  exports: [ DespesasFormComponent, DespesasListaComponent ]
})
export class DespesasModule { }
