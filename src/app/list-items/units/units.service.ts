import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import { sortByProperty } from '../../common/common-functions.library';


export interface IWarlord {
    id: number;
    name: string;
    codex: string;
    quote: string;
    classification: string;
    createdAt: Date;
    updatedAt: Date;
}

export const emptyWarlord: IWarlord = {
  id: 0,
  name: '',
  codex: '',
  quote: '',
  classification: '',
  createdAt: new Date(),
  updatedAt: null,
}

@Injectable()
export class WarlordsService {
  
  warlords: IWarlord[] = [];
  
  
  constructor(
    private http: HttpClient,
  ) { }

  //Get warlords and sort them by name alphabetically
  getwarlords(): Observable<IWarlord[]> {
      return this.http.get<IWarlord[]>('http://localhost:3000/warlords')
      .do((answer) => {
        sortByProperty<IWarlord>(answer, 'name');
        this.warlords = answer;
      });
      
  }


  getwarlordById(id: number): Observable<IWarlord> {
      return this.http.get<IWarlord>(`http://localhost:3000/warlords/${id}`);
  }


  save(warlord: IWarlord): Observable<IWarlord | number[]> {
    if (warlord.id) {
      return this.http.put<number[]>(`http://localhost:3000/warlords`, warlord);
    } else {
      return this.http.post<IWarlord>(`http://localhost:3000/warlords`, warlord);
    }
  }

//   delete(warlord: Iwarlord): Observable<Iwarlord> {
//     if (warlord.id) {
//       return this.http.delete<Iwarlord>(`http://localhost:3000/warlords`);
//     } else {
//       return;
//     }
//   }
}