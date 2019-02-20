import { NgModule } from '@angular/core';

import { FactionsListComponent } from './factions-list/factions-list.component';
import { FactionsService } from './factions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FactionDetailComponent } from './faction-detail/faction-detail.component';
import { FactionNavComponent } from './faction-nav/faction-nav.component';
import { MyMaterialModule } from  '../material.module';
import { AbilitiesModule } from '../abilities/abilities.module';
import { UnitsModule } from '../list-items/units/units.module';


@NgModule({
    declarations: [
        FactionsListComponent,
        FactionDetailComponent,
        FactionNavComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MyMaterialModule,
        AbilitiesModule,
        UnitsModule
    ],
    providers: [
        FactionsService,
    ],
})
export class FactionsModule { }