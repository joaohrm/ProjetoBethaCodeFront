import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasFormComponent } from './receitas-form/receitas-form.component';
import { ReceitasListaComponent } from './receitas-lista/receitas-lista.component';



@NgModule({
  declarations: [
    ReceitasFormComponent,
    ReceitasListaComponent
  ],
  imports: [
    CommonModule,
    ReceitasRoutingModule,
    FormsModule
  ],
  exports: [ ReceitasFormComponent, ReceitasListaComponent ]
})
export class ReceitasModule { }
