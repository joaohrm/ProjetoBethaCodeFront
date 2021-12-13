import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Despesas } from './despesas/despesa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  constructor(private http: HttpClient) {
    
  }

  salvar(despesas: Despesas): Observable<Despesas>{
    return this.http.post<Despesas>('http://localhost:8080/api/despesas', despesas);
  }

  listar(): Observable<Despesas[]>{
    return this.http.get<Despesas[]>('http://localhost:8080/api/despesas');
  }

  getReceitaById(id: number){
    return this.http.get<Despesas>(`http://localhost:8080/api/despesas/${id}`);
  }

  excluir(despesas: Despesas): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/despesas/${despesas.id}`);
  }

  atualizar(despesas: Despesas): Observable<any>{
    return this.http.put<Despesas>(`http://localhost:8080/api/despesas/${despesas.id}`, despesas);
  }

}
