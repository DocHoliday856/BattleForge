import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArmiesComponent } from './armies/armies.component';
import { DetachmentsComponent } from './detachments/detachments.component';
import { FactionsListComponent } from './factions/factions-list/factions-list.component';
import { FactionDetailComponent } from './factions/faction-detail/faction-detail.component';
import { FactionNavComponent } from './factions/faction-nav/faction-nav.component';
import { AbilitiesListComponent } from './abilities/abilities-list/abilities-list.component';
import { AbilityDetailComponent } from './abilities/ability-detail/ability-detail.component';
import { UnitsListComponent } from './list-items/units/units-list/units-list.component';
import { UnitDetailComponent } from './list-items/units/unit-detail/unit-detail.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },


  { path: 'army', component: ArmiesComponent },
  //{ path: 'army/:armyId', component: ArmyDetailComponent },

  { path: 'detachment', component: DetachmentsComponent },

  { path: 'factions', component: FactionsListComponent},
  { path: 'factions/edit/:factionId', component: FactionDetailComponent },
  { path: 'factions/:factionId', component: FactionNavComponent },


  { path: 'abilities', component: AbilitiesListComponent },
  { path: 'abilities/:abilityId', component: AbilityDetailComponent },

  { path: 'units', component: UnitsListComponent },
  { path: 'units/:unitId', component: UnitDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
