import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinsHistoryComponent } from './zins-history.component';

describe('ZinsHistoryComponent', () => {
  let component: ZinsHistoryComponent;
  let fixture: ComponentFixture<ZinsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZinsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
