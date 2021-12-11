import { Component, OnInit } from '@angular/core';
import { DespesasService } from 'src/app/despesas.service';
import { Despesa } from '../despesa';

@Component({
  selector: 'app-despesas-lista',
  templateUrl: './despesas-lista.component.html',
  styleUrls: ['./despesas-lista.component.css']
})
export class DespesasListaComponent implements OnInit {

  despesa: Despesa[] = [];
  despesaSelecionada: Despesa = new Despesa();
  mensagemSucesso: string = "";
  mensagemErro: string = "";   

  constructor(private service: DespesasService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(res => this.despesa = res);
  }

  preparaDelecao(despesa: Despesa){
    this.despesaSelecionada = despesa;
  }

  deletarDespesa(){
    this.service.excluir(this.despesaSelecionada).subscribe(
      res => {
        this.mensagemSucesso = 'Receita removida com sucesso!';
        this.mensagemErro = "";
        this.ngOnInit();
      },
      err => {
        this.mensagemSucesso = "";
        this.mensagemErro = 'Ocorreu um erro ao excluir a receita!';
      }
    )
  }

}
