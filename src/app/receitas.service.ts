import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receita } from './receitas/receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  constructor(private http: HttpClient) {
  }

  salvar(receita: Receita): Observable<Receita>{
    return this.http.post<Receita>('http://localhost:8080/api/receita', receita);
  }

  listar(): Observable<Receita[]>{
    return this.http.get<Receita[]>('http://localhost:8080/api/receita');
  }

  getReceitaById(id: number){
    return this.http.get<Receita>(`http://localhost:8080/api/receita/${id}`);
  }

  excluir(receita: Receita): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/receita/${receita.id}`);
  }

  atualizar(receita: Receita): Observable<any>{
    return this.http.put<Receita>(`http://localhost:8080/api/receita/${receita.id}`, receita);
  }

  

}
