import { Component, OnInit } from '@angular/core';
import { DespesasService } from 'src/app/despesas.service';
import { Despesas } from '../despesa';

@Component({
  selector: 'app-despesas-lista',
  templateUrl: './despesas-lista.component.html',
  styleUrls: ['./despesas-lista.component.css']
})
export class DespesasListaComponent implements OnInit {

  despesa: Despesas[] = [];
  despesaSelecionada: Despesas = new Despesas();
  mensagemSucesso: string = "";
  mensagemErro: string = "";   

  constructor(private service: DespesasService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(res => this.despesa = res);
  }

  public soma() {
    return this.despesa.map(linha => linha.vl_despesa).reduce((a, b) => a + b, 0);
  }

  preparaDelecao(despesas: Despesas){
    this.despesaSelecionada = despesas;
  }

  deletarDespesas(){
    this.service.excluir(this.despesaSelecionada).subscribe(
      res => {
        this.mensagemSucesso = 'Despesa removida com sucesso!';
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
