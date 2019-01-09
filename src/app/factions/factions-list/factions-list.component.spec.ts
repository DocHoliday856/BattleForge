import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionsListComponent } from './factions-list.component';

describe('FactionsListComponent', () => {
  let component: FactionsListComponent;
  let fixture: ComponentFixture<FactionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
