import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FactionsService, IFaction } from '../factions.service';


@Component({
  selector: 'app-factions-list',
  templateUrl: './factions-list.component.html',
  styleUrls: ['./factions-list.component.less']
})
export class FactionsListComponent implements OnInit {

  factions: IFaction[] = [];

  constructor(
    private factionsService: FactionsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.factionsService.getFactions()
    .subscribe(
      (factions) => {
        this.factions = factions;
      })
  }

  goToAdd(): void {
    this.router.navigate(['factions/add']);
  }

  goToEdit(id: number): void {
    this.router.navigate([`factions/edit/${id}`]);
  }

  goToFaction(id: number): void {
    this.router.navigate([`factions/${id}`]);
  }

}
