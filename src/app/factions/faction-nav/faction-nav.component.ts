import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFaction, FactionsService } from '../factions.service';
import { ToastsManager } from 'ng2-toastr';
 
@Component({
    templateUrl: './faction-nav.component.html',
})

export class FactionNavComponent implements OnInit {

     faction: IFaction;

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
     
    // save(): void {
    //     if (!this.formValid()) {
    //         this.toastsManager.error('Form invalid');
    //         return;
    //     }
    //     this.faction.updatedAt = new Date();
    //     this.factionsService.save(this.faction)
    //         .subscribe((faction) => {
    //             this.toastsManager.success('Faction saved');
    //             this.router.navigate(['factions']);
    //         });
    // }

    // delete(): void {
    //     if (!this.formValid()) {
    //         this.toastsManager.error('Form invalid');
    //         return;
    //     }
    //     this.faction.updatedAt = new Date();
    //     this.factionsService.delete(this.faction)
    //         .subscribe((faction) => {
    //             this.toastsManager.success('Faction deleted');
    //             this.router.navigate(['factions']);
    //         });
    // }
     
    // private formValid(): boolean {
    //     return this.faction.name ? true : false;
    // }
     
    // cancel(): void {
    //     this.router.navigate(['factions']);
    // }
 }
