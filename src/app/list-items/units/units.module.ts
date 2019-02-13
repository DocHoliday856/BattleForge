import { NgModule } from '@angular/core';

import { UnitsListComponent } from './abilities-list/abilities-list.component';
import { UnitsService } from './abilities.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnitDetailComponent } from './ability-detail/ability-detail.component';

@NgModule({
    declarations: [
        UnitsListComponent,
        UnitDetailComponent,
    ],
    exports: [
        UnitsListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        UnitsService,
    ],
})
export class UnitsModule { }