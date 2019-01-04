import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetachmentsComponent } from './detachments.component';

describe('DetachmentsComponent', () => {
  let component: DetachmentsComponent;
  let fixture: ComponentFixture<DetachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
