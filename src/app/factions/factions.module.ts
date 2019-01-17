import { NgModule } from '@angular/core';

import { FactionsListComponent } from './factions-list/factions-list.component';
import { FactionsService } from './factions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FactionDetailComponent } from './faction-detail/faction-detail.component';
import { FactionNavComponent } from './faction-nav/faction-nav.component';
import { MyMaterialModule } from  '../material.module';



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
    ],
    providers: [
        FactionsService,
    ],
})
export class FactionsModule { }