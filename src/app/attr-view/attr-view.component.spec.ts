import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrViewComponent } from './attr-view.component';

describe('AttrViewComponent', () => {
  let component: AttrViewComponent;
  let fixture: ComponentFixture<AttrViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
