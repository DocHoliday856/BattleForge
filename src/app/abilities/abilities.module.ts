import { NgModule } from '@angular/core';

import { AbilitiesListComponent } from './abilities-list/abilities-list.component';
import { AbilitiesService } from './abilities.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AbilityDetailComponent } from './ability-detail/ability-detail.component';

@NgModule({
    declarations: [
        AbilitiesListComponent,
        AbilityDetailComponent,
    ],
    exports: [
        AbilitiesListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        AbilitiesService,
    ],
})
export class AbilitiesModule { }