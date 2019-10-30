import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinsResultComponent } from './zins-result.component';

describe('ZinsResultComponent', () => {
  let component: ZinsResultComponent;
  let fixture: ComponentFixture<ZinsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZinsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
