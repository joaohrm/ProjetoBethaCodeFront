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

  constructor(private service: ReceitasService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(res => this.receita = res);
  }

}
