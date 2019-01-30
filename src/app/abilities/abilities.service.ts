import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import { sortByProperty } from '../common/common-functions.library';


export interface IAbility {
    id: number;
    name: string;
    description: string;
    reference: string;
    createdAt: Date;
    updatedAt: Date;
}

@Injectable()
export class AbilitiesService {
  
  abilities: IAbility[] = [];
  
  
  constructor(
    private http: HttpClient,
  ) { }

  //Get Abilities and sort them by name alphabetically
  getAbilities(): Observable<IAbility[]> {
      return this.http.get<IAbility[]>('http://localhost:3000/abilities')
      .do((answer) => {
        sortByProperty<IAbility>(answer, 'name');
        this.abilities = answer;
      });
      
  }


  getAbilityById(id: number): Observable<IAbility> {
      return this.http.get<IAbility>(`http://localhost:3000/abilities/${id}`);
  }


  save(ability: IAbility): Observable<IAbility | number[]> {
    if (ability.id) {
      return this.http.put<number[]>(`http://localhost:3000/abilities`, ability);
    } else {
      return this.http.post<IAbility>(`http://localhost:3000/abilities`, ability);
    }
  }

  // delete(ability: IAbility): Observable<IAbility> {
  //   if (ability.id) {
  //     return this.http.delete<IAbility>(`http://localhost:3000/abilities`);
  //   } else {
  //     return;
  //   }
  // }
}