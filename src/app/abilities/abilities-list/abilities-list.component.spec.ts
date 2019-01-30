import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesListComponent } from './abilities-list.component';

describe('AbilitiesComponent', () => {
  let component: AbilitiesListComponent;
  let fixture: ComponentFixture<AbilitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
