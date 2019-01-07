import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';
import { sortByProperty } from '../common/common-functions.library';


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
    if (!this.rules) {
      return this.http.get<IRule[]>('http://localhost:3000/rules')
      .do((answer) => {
        sortByProperty(answer, 'name');
        this.rules = answer;
      });
    } else {
      return Observable.of(this.rules);
    }
      
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