import { NgModule } from '@angular/core';

import { RulesComponent } from './rules.component';
import { RulesService } from './rules.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        RulesComponent,
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