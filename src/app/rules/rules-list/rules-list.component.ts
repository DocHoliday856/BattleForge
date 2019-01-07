import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RulesService, IRule} from '../rules.service';



@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.less']
})
export class RulesListComponent implements OnInit {
  rules: IRule[] = [];

  constructor(
    private rulesService: RulesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.rulesService.getRules()
    .subscribe(
      (rules) => {
        this.rules = rules;
      })

    //  this.rules.sort(function(a,b) {
    //   var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    //   if (nameA < nameB) //sort string ascending
    //       return -1 
    //   if (nameA > nameB)
    //       return 1
    //   return 0 //default return value (no sorting)
    //  })
  }

  goToAdd(): void {
    this.router.navigate(['rules/add']);
  }

  goToEdit(id: number): void {
    this.router.navigate([`rules/${id}`]);
   }
  

}
