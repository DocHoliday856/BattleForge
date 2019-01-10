import { NgModule } from '@angular/core';

import { RulesListComponent } from './rules-list/rules-list.component';
import { RulesService } from './rules.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RuleDetailComponent } from './rule-detail/rule-detail.component';

@NgModule({
    declarations: [
        RulesListComponent,
        RuleDetailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        RulesService,
    ],
})
export class RulesModule { }