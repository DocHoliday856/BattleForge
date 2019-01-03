import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },


  //{ path: 'army', component: ArmyListComponent },
  //{ path: 'army/:armyId', component: ArmyDetailComponent }
  //{ path: 'faction', component: FactionListComponent },
  //{ path: 'faction/:factionId', component: FactionDetailComponent }
  //{ path: 'rules', component: RulesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
