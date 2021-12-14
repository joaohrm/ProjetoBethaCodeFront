import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/receitas.service';
import { Receita } from '../receita';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-receitas-form',
  templateUrl: './receitas-form.component.html',
  styleUrls: ['./receitas-form.component.css']
})
export class ReceitasFormComponent implements OnInit {

  receita: Receita;
  titulo: string;
  id: number = 0;

  sucesso: boolean = false;
  err: String[] = [];

  constructor(private service: ReceitasService, private rota: Router, private activatedRoute: ActivatedRoute) {

    this.titulo = "Cadastro de Receita";
    this.receita = new Receita();
    

   }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.titulo = "Alteração de Receita";
        this.service.getReceitaById(this.id).subscribe(res => { this.receita = res }, err => { this.receita = new Receita(); })
      } else {
        this.titulo = "Cadastro de Receita";
        this.receita = new Receita();
      }
    }

    )
  }

  lancarReceita(){
    console.log('lançando receita!');
    this.service.salvar(this.receita).subscribe(res => { 
      this.sucesso = true;
      this.err = [];
      this.receita = res;
      this.id = 0;
      this.ngOnInit();
      window.location.href = '/receitasLista';
    }, errorResponse => {
      this.err = errorResponse.error.erros;
      this.sucesso = false;
    });
  }

}
