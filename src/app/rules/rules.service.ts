import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

export interface IRule {
    id: number;
    name: string;
    description: string;
    reference: string;
    createdAt: Date;
    updatedAt: Date;
}

@Injectable()
export class RulesService {
  
  rules: IRule[] = [];
  
  
  constructor(
    private http: HttpClient,
  ) { }

  getRules(): Observable<IRule[]> {
    return this.http.get<IRule[]>('http://localhost:3000/rules');
  }

  getRuleById(id: number): Observable<IRule> {
      return this.http.get<IRule>(`http://localhost:3000/rules/${id}`);
  }


  save(rule: IRule): Observable<IRule | number[]> {
    if (rule.id) {
      return this.http.put<number[]>(`http://localhost:3000/rules`, rule);
    } else {
      return this.http.post<IRule>(`http://localhost:3000/rules`, rule);
    }
  }
}