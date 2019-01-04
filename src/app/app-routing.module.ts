import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArmiesComponent } from './armies/armies.component';
import { DetachmentsComponent } from './detachments/detachments.component';
import { FactionsComponent } from './factions/factions.component';
import { RulesComponent } from './rules/rules.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/home', pathMatch: 'full' },


  { path: 'army', component: ArmiesComponent },
  //{ path: 'army/:armyId', component: ArmyDetailComponent },

  { path: 'detachment', component: DetachmentsComponent },

  { path: 'faction', component: FactionsComponent},
  //{ path: 'faction', component: FactionListComponent },
  //{ path: 'faction/:factionId', component: FactionDetailComponent },

  { path: 'rules', component: RulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
