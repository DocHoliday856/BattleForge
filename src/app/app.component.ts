import { Component, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isNavbarCollapsed = false;

  title = 'BattleForge';
  battleForgeArray = [];

  addBF(value) {
    this.battleForgeArray.push(value)
    console.log(value)
  }
}
