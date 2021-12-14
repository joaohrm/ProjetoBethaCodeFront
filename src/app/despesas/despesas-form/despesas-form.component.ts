import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DespesasService } from 'src/app/despesas.service';

import { Despesas } from '../despesa';


@Component({
  selector: 'app-despesas-form',
  templateUrl: './despesas-form.component.html',
  styleUrls: ['./despesas-form.component.css']
})
export class DespesasFormComponent implements OnInit {

  titulo: string;
  id: number = 0;
  despesa: Despesas;
  sucesso: boolean = false;
  err: String[] = [];

  constructor(private service: DespesasService, private rota: Router, private activatedRoute: ActivatedRoute) { 

    this.titulo = "Cadastro de Despesa";
    this.despesa = new Despesas();

  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.titulo = "Alteração de Despesa";
        this.service.getReceitaById(this.id).subscribe(res => { console.log(res); this.despesa = res }, err => { this.despesa = new Despesas(); })
      } else {
        this.titulo = "Cadastro de Despesa";
        this.despesa = new Despesas();
      }
    }
    )
  }


  lancarDespesa(){
    console.log('lançando despesa!');
    this.service.salvar(this.despesa).subscribe(res => { 
      this.sucesso = true;
      this.err = [];
      this.despesa = res;
      this.id = 0;
      this.ngOnInit();
    }, errorResponse => {
      this.err = errorResponse.error.erros;
      this.sucesso = false;
    });
  }

}