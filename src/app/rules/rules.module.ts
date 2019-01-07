import { NgModule } from '@angular/core';

import { RulesListComponent } from './rules-list/rules-list.component';
import { RulesService } from './rules.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RulesDetailComponent } from './rules-detail/rules-detail.component';

@NgModule({
    declarations: [
        RulesListComponent,
        RulesDetailComponent,
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