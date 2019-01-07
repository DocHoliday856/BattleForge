import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import { sortByProperty } from '../common-functions.library';


@Injectable()
export class CommonService {

  constructor(private http: HttpClient) { }


}
