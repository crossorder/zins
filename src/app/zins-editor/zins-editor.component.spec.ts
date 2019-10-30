import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinsEditorComponent } from './zins-editor.component';

describe('ZinsEditorComponent', () => {
  let component: ZinsEditorComponent;
  let fixture: ComponentFixture<ZinsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZinsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
