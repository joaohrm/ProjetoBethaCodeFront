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

  constructor(private service: DespesasService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(res => this.despesa = res);
  }

}
