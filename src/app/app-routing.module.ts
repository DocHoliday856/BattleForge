import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArmiesComponent } from './armies/armies.component';
import { DetachmentsComponent } from './detachments/detachments.component';
import { FactionsListComponent } from './factions/factions-list/factions-list.component';
import { FactionDetailComponent } from './factions/faction-detail/faction-detail.component';
import { RulesListComponent } from './rules/rules-list/rules-list.component';
import { RuleDetailComponent } from './rules/rule-detail/rule-detail.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },


  { path: 'army', component: ArmiesComponent },
  //{ path: 'army/:armyId', component: ArmyDetailComponent },

  { path: 'detachment', component: DetachmentsComponent },

  { path: 'factions', component: FactionsListComponent},
  { path: 'factions/:factionId', component: FactionDetailComponent },

  { path: 'rules', component: RulesListComponent },
  { path: 'rules/:ruleId', component: RuleDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
