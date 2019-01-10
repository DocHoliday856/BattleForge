import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRule, RulesService } from '../rules.service';
import { ToastsManager } from 'ng2-toastr';
 
@Component({
    templateUrl: './rule-detail.component.html',
})

export class RuleDetailComponent implements OnInit {
     rule: IRule;
     constructor(
        private route: ActivatedRoute,
        private router: Router,
        private rulesService: RulesService,
        private toastsManager: ToastsManager,
    ) { }
     
    ngOnInit() {
        let id: string | number = this.route.snapshot.paramMap.get('ruleId');
        id = isNaN(parseInt(id)) ? 0 : parseInt(id);
        if (id > 0) {
            // get from db
            this.rulesService.getRuleById(id)
                .subscribe((rule) => {
                    this.rule = rule;
                });
        } else {
            // new
            this.rule = {
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
        this.rule.updatedAt = new Date();
        this.rulesService.save(this.rule)
            .subscribe((rule) => {
                this.toastsManager.success('Rule saved');
                this.router.navigate(['rules']);
            });
    }

    // delete(): void {
    //     if (!this.formValid()) {
    //         this.toastsManager.error('Form invalid');
    //         return;
    //     }
    //     this.rule.updatedAt = new Date();
    //     this.rulesService.delete(this.rule)
    //         .subscribe((rule) => {
    //             this.toastsManager.success('Rule deleted');
    //             this.router.navigate(['rules']);
    //         });
    // }
     
    private formValid(): boolean {
        return this.rule.name ? true : false;
    }
     
    cancel(): void {
        this.router.navigate(['rules']);
    }
 }
