import { NgModule } from '@angular/core';

import { FactionsListComponent } from './factions-list/factions-list.component';
import { FactionsService } from './factions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FactionDetailComponent } from './faction-detail/faction-detail.component';

@NgModule({
    declarations: [
        FactionsListComponent,
        FactionDetailComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        FactionsService,
    ],
})
export class FactionsModule { }