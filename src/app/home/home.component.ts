import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  title = 'BattleForge';
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  
}
