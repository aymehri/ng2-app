import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreReactiveComponent } from './core-reactive.component';

describe('CoreReactiveComponent', () => {
  let component: CoreReactiveComponent;
  let fixture: ComponentFixture<CoreReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
