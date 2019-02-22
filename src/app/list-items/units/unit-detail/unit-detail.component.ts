import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUnit, UnitsService } from '../units.service';
import { ToastsManager } from 'ng2-toastr';
import { Roles } from '../role-enum';

 
@Component({
    templateUrl: './unit-detail.component.html',
})

export class UnitDetailComponent implements OnInit {
    unit: IUnit;
     constructor(
        private route: ActivatedRoute,
        private router: Router,
        private unitsService: UnitsService,
        private toastsManager: ToastsManager,
    ) { }
     
    ngOnInit() {
        let id: string | number = this.route.snapshot.paramMap.get('unitId');
        id = isNaN(parseInt(id)) ? 0 : parseInt(id);
        if (id > 0) {
            // get from db
            this.unitsService.getUnitById(id)
                .subscribe((unit) => {
                    this.unit = unit;
                });
        } else {
            // new
            this.unit = {
                id: 0,
                name: '',
                description: '',
                basePower: 0,
                role: 0,
                factionId: 0,
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
        this.unit.updatedAt = new Date();
        this.unitsService.save(this.unit)
            .subscribe((unit) => {
                this.toastsManager.success('Unit saved');
                this.router.navigate(['units']);
            });
    }

    // delete(): void {
    //     if (!this.formValid()) {
    //         this.toastsManager.error('Form invalid');
    //         return;
    //     }
    //     this.unit.updatedAt = new Date();
    //     this.unitsService.delete(this.unit)
    //         .subscribe((unit) => {
    //             this.toastsManager.success('Unit deleted');
    //             this.router.navigate(['abilities']);
    //         });
    // }
     
    private formValid(): boolean {
        return this.unit.name ? true : false;
    }
     
    cancel(): void {
        this.router.navigate(['units']);
    }
 }
