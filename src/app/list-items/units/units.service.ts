import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import { sortByProperty } from '../../common/common-functions.library';


export interface IUnit {
    id: number;
    name: string;
    description: string;
    basePower: number;
    choice: number;
    factionId: number;
    createdAt: Date;
    updatedAt: Date;
}


export const emptyUnit: IUnit = {
  id: 0,
  name: '',
  description: '',
  basePower: 0,
  choice: 0,
  factionId: 0,
  createdAt: new Date(),
  updatedAt: null,
}

@Injectable()
export class UnitsService {
  
  units: IUnit[] = [];
  
  
  constructor(
    private http: HttpClient,
  ) { }

  //Get units and sort them by name alphabetically
  getUnits(): Observable<IUnit[]> {
      return this.http.get<IUnit[]>('http://localhost:3000/units')
      .do((answer) => {
        sortByProperty<IUnit>(answer, 'name');
        this.units = answer;
      });
      
  }


  getUnitById(id: number): Observable<IUnit> {
      return this.http.get<IUnit>(`http://localhost:3000/units/${id}`);
  }


  save(unit: IUnit): Observable<IUnit | number[]> {
    if (unit.id) {
      return this.http.put<number[]>(`http://localhost:3000/units`, unit);
    } else {
      return this.http.post<IUnit>(`http://localhost:3000/units`, unit);
    }
  }

//   delete(unit: IUnit): Observable<IUnit> {
//     if (unit.id) {
//       return this.http.delete<IUnit>(`http://localhost:3000/units`);
//     } else {
//       return;
//     }
//   }
}