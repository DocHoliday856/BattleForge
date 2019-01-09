import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArmiesComponent } from './armies/armies.component';
import { DetachmentsComponent } from './detachments/detachments.component';
import { FactionsListComponent } from './factions/factions-list/factions-list.component';
import { RulesListComponent } from './rules/rules-list/rules-list.component';
import { RulesDetailComponent } from './rules/rules-detail/rules-detail.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/home', pathMatch: 'full' },


  { path: 'army', component: ArmiesComponent },
  //{ path: 'army/:armyId', component: ArmyDetailComponent },

  { path: 'detachment', component: DetachmentsComponent },

  { path: 'faction', component: FactionsListComponent},
  //{ path: 'faction', component: FactionListComponent },
  //{ path: 'faction/:factionId', component: FactionDetailComponent },

  { path: 'rules', component: RulesListComponent },
  { path: 'rules/:ruleId', component: RulesDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
