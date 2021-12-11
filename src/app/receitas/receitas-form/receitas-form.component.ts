import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/receitas.service';
import { Receita } from '../receita';

@Component({
  selector: 'app-receitas-form',
  templateUrl: './receitas-form.component.html',
  styleUrls: ['./receitas-form.component.css']
})
export class ReceitasFormComponent implements OnInit {

  receita: Receita;
  titulo: string;

  sucesso: boolean = false;
  err: String[] = [];

  constructor(private service: ReceitasService) {

    this.titulo = "Lançamento de receita";

    this.receita = new Receita;

   }

  ngOnInit(): void {
  }

  lancarReceita(){
    console.log('lançando receita!');
    this.service.salvar(this.receita).subscribe(res => { 
      this.sucesso = true;
      this.err = [];
      this.receita = res;
    }, errorResponse => {
      this.err = errorResponse.error.erros;
      this.sucesso = false;
    });
  }

}
