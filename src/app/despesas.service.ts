import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Despesa } from './despesas/despesa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  constructor(private http: HttpClient) {
    
  }

  salvar(despesa: Despesa): Observable<Despesa>{
    return this.http.post<Despesa>('http://localhost:8080/api/despesas', despesa);
  }

  listar(): Observable<Despesa[]>{
    return this.http.get<Despesa[]>('http://localhost:8080/api/despesas');
  }

  getReceitaById(id: number){
    return this.http.get<Despesa>(`http://localhost:8080/api/despesas/${id}`);
  }

  excluir(despesa: Despesa): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/despesas/${despesa.id}`);
  }

  atualizar(despesa: Despesa): Observable<any>{
    return this.http.put<Despesa>(`http://localhost:8080/api/despesas/${despesa.id}`, despesa);
  }

}
