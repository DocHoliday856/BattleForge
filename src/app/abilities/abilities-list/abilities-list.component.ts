import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbilitiesService, IAbility} from '../abilities.service';


@Component({
  selector: 'app-abilities-list',
  templateUrl: './abilities-list.component.html',
  styleUrls: ['./abilities-list.component.less']
})
export class AbilitiesListComponent implements OnInit {
  
  abilities: IAbility[] = [];

  constructor(
    private abilitiesService: AbilitiesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.abilitiesService.getAbilities()
    .subscribe(
      (abilities) => {
        this.abilities = abilities;
      })
  }

  goToAdd(): void {
    this.router.navigate(['abilities/add']);
  }

  goToEdit(id: number): void {
    this.router.navigate([`abilities/${id}`]);
   }
  
}
