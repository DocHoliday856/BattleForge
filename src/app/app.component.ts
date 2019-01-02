import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

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

  constructor(
    private toastsManager: ToastsManager,
    vcr: ViewContainerRef,
  ) {
    // sets the root view to be used with notifications
    this.toastsManager.setRootViewContainerRef(vcr);
  }
}
