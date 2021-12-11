import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DespesasService } from 'src/app/despesas.service';

import { Despesa } from '../despesa';


@Component({
  selector: 'app-despesas-form',
  templateUrl: './despesas-form.component.html',
  styleUrls: ['./despesas-form.component.css']
})
export class DespesasFormComponent implements OnInit {

  titulo: string;
  //arrDespesas: Despesa[];
  id: number = 0;
  despesa: Despesa;
  sucesso: boolean = false;
  err: String[] = [];

  constructor(private service: DespesasService, private rota: Router, private activatedRoute: ActivatedRoute) { 

    this.titulo = "Lista de gastos";

    this.despesa = new Despesa();
    /*this.despesa.nome = "123";
    this.despesa.dataVencimento = "123";
    this.despesa.valor = 123;
    this.despesa.dataRegistro = "123";*/

    //let novaDespesa = new Despesa("06/12/2021");

    //this.arrDespesas = [novaDespesa];

  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service.getReceitaById(this.id).subscribe(res => { this.despesa = res }, err => { this.despesa = new Despesa(); })
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
    }, errorResponse => {
      this.err = errorResponse.error.erros;
      this.sucesso = false;
    });
  }

}