import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZabatistaComponent } from './zabatista.component';

describe('ZabatistaComponent', () => {
  let component: ZabatistaComponent;
  let fixture: ComponentFixture<ZabatistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZabatistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZabatistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
