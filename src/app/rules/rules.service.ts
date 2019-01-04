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
  
  rules: IRule[] = [
      {
        id: 1,
        name: 'Rugged Construction',
        description: 'If this model suffers a Crew Stunned, Crew Shaken or Immobilised result, roll a dice. On a roll of 4 or more, the vehicle ignores that result, but still loses a Hull Point as normal.',
        reference: 'Genestealer Cult Codex pg. 83',
        createdAt: new Date(),
        updatedAt: null
    },

  ];
  
  
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