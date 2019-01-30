import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAbility, AbilitiesService } from '../abilities.service';
import { ToastsManager } from 'ng2-toastr';
 
@Component({
    templateUrl: './ability-detail.component.html',
})

export class AbilityDetailComponent implements OnInit {
    ability: IAbility;
     constructor(
        private route: ActivatedRoute,
        private router: Router,
        private abilitiesService: AbilitiesService,
        private toastsManager: ToastsManager,
    ) { }
     
    ngOnInit() {
        let id: string | number = this.route.snapshot.paramMap.get('abilityId');
        id = isNaN(parseInt(id)) ? 0 : parseInt(id);
        if (id > 0) {
            // get from db
            this.abilitiesService.getAbilityById(id)
                .subscribe((ability) => {
                    this.ability = ability;
                });
        } else {
            // new
            this.ability = {
                id: 0,
                name: '',
                description: '',
                reference: '',
                createdAt: new Date(),
                updatedAt: null,
            };
        }
    }
     
    getLocalDateTime(): string {
        const startTime = new Date();
        startTime.setHours(startTime.getHours() - (startTime.getTimezoneOffset() / 60));
        return startTime.toISOString().slice(0, 16);
    }
     
    save(): void {
        if (!this.formValid()) {
            this.toastsManager.error('Form invalid');
            return;
        }
        this.ability.updatedAt = new Date();
        this.abilitiesService.save(this.ability)
            .subscribe((ability) => {
                this.toastsManager.success('Ability saved');
                this.router.navigate(['abilities']);
            });
    }

    // delete(): void {
    //     if (!this.formValid()) {
    //         this.toastsManager.error('Form invalid');
    //         return;
    //     }
    //     this.ability.updatedAt = new Date();
    //     this.abilitiesService.delete(this.ability)
    //         .subscribe((ability) => {
    //             this.toastsManager.success('Ability deleted');
    //             this.router.navigate(['abilities']);
    //         });
    // }
     
    private formValid(): boolean {
        return this.ability.name ? true : false;
    }
     
    cancel(): void {
        this.router.navigate(['abilities']);
    }
 }
