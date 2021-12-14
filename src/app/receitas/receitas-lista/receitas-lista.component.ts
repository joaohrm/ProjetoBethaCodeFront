import { Component, OnInit } from '@angular/core';
import { ReceitasService } from 'src/app/receitas.service';
import { Receita } from '../receita';

@Component({
  selector: 'app-receitas-lista',
  templateUrl: './receitas-lista.component.html',
  styleUrls: ['./receitas-lista.component.css']
})

export class ReceitasListaComponent implements OnInit {

  receita: Receita[] = [];
  receitaSelecionada: Receita = new Receita();
  mensagemSucesso: String = "";
  mensagemErro: String = "";
  total: number = 0;

  constructor(private service: ReceitasService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(res => this.receita = res);
  }

  public soma() {
    return this.receita.map(linha => linha.vl_receita).reduce((a, b) => a + b, 0);
  }

  esconderModal(){
    document.getElementById('modalSelecao')?.classList.toggle('show');
  }

  preparaDelecao(receita: Receita){
    this.receitaSelecionada = receita;
    this.esconderModal();
  }

  deletarReceita(){
    this.service.excluir(this.receitaSelecionada).subscribe(
      res => {
        this.mensagemSucesso = 'Receita removida com sucesso!';
        this.mensagemErro = "";
        this.ngOnInit();
        this.esconderModal();
      },
      err => {
        this.mensagemSucesso = "";
        this.mensagemErro = 'Ocorreu um erro ao excluir a receita!';
        this.esconderModal();
      }
    )
  }

}
