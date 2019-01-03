import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmiesComponent } from './armies.component';

describe('ArmiesComponent', () => {
  let component: ArmiesComponent;
  let fixture: ComponentFixture<ArmiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
