import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DespesasService } from './despesas.service';
import { DespesasModule } from './despesas/despesas.module';
import { ReceitasService } from './receitas.service';
import { ReceitasModule } from './receitas/receitas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DespesasModule,
    ReceitasModule,
    HttpClientModule
  ],
  providers: [DespesasService, ReceitasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
