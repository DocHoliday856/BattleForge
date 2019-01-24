import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import { sortByProperty } from '../common/common-functions.library';
import { Display } from './faction-nav/display-enum';


export interface IFaction {
    id: number;
    name: string;
    codex: string;
    quote: string;
    classification: string;
    createdAt: Date;
    updatedAt: Date;
}

export const emptyFaction: IFaction = {
  id: 0,
  name: '',
  codex: '',
  quote: '',
  classification: '',
  createdAt: new Date(),
  updatedAt: null,
}

@Injectable()
export class FactionsService {
  
  factions: IFaction[] = [];
  
  
  constructor(
    private http: HttpClient,
  ) { }

  //Get Factions and sort them by name alphabetically
  getFactions(): Observable<IFaction[]> {
      return this.http.get<IFaction[]>('http://localhost:3000/factions')
      .do((answer) => {
        sortByProperty<IFaction>(answer, 'name');
        this.factions = answer;
      });
      
  }


  getFactionById(id: number): Observable<IFaction> {
      return this.http.get<IFaction>(`http://localhost:3000/factions/${id}`);
  }


  save(faction: IFaction): Observable<IFaction | number[]> {
    if (faction.id) {
      return this.http.put<number[]>(`http://localhost:3000/factions`, faction);
    } else {
      return this.http.post<IFaction>(`http://localhost:3000/factions`, faction);
    }
  }

//   delete(faction: IFaction): Observable<IFaction> {
//     if (faction.id) {
//       return this.http.delete<IFaction>(`http://localhost:3000/factions`);
//     } else {
//       return;
//     }
//   }
}