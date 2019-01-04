import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RulesService, IRule} from './rules.service';


@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.less']
})
export class RulesComponent implements OnInit {
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
      });
  }

  

}
