import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UnitsService, IUnit} from '../units.service';


@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.less']
})
export class UnitsListComponent implements OnInit {
  
  units: IUnit[] = [];

  constructor(
    private unitsService: UnitsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.unitsService.getUnits()
    .subscribe(
      (units) => {
        this.units = units;
      })
  }

  goToAdd(): void {
    this.router.navigate(['units/add']);
  }

  goToEdit(id: number): void {
    this.router.navigate([`units/${id}`]);
   }
  
}
