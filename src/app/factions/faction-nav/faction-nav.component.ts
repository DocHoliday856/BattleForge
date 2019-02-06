import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFaction, FactionsService, emptyFaction } from '../factions.service';
import { Display } from './display-Enum';
import { ToastsManager } from 'ng2-toastr';
import { FormGroup } from '@angular/forms';
 


@Component({
    templateUrl: './faction-nav.component.html',
    styleUrls: ['./faction-nav.component.less']

})

export class FactionNavComponent implements OnInit {

     faction: IFaction = { ...emptyFaction };
  
     public form: FormGroup;
     public Display = Display;
     public currentPage: number;

     constructor(
        private route: ActivatedRoute,
        private router: Router,
        private factionsService: FactionsService,
        // private toastsManager: ToastsManager,
    ) { }
     
    ngOnInit() {
        let id: string | number = this.route.snapshot.paramMap.get('factionId');
        id = isNaN(parseInt(id)) ? 0 : parseInt(id);
            
            // get from db
            this.factionsService.getFactionById(id)
                .subscribe((faction) => {
                    this.faction = faction;
                });
    }
     
    getLocalDateTime(): string {
        const startTime = new Date();
        startTime.setHours(startTime.getHours() - (startTime.getTimezoneOffset() / 60));
        return startTime.toISOString().slice(0, 16);
    }

    setPage( page: number): void {
        this.currentPage = page;
    }


 }
