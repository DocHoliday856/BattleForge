import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-factions',
  templateUrl: './factions-list.component.html',
  styleUrls: ['./factions-list.component.less']
})
export class FactionsListComponent implements OnInit {

  factions: any[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
