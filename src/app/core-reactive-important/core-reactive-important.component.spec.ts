import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreReactiveImportantComponent } from './core-reactive-important.component';

describe('CoreReactiveImportantComponent', () => {
  let component: CoreReactiveImportantComponent;
  let fixture: ComponentFixture<CoreReactiveImportantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreReactiveImportantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreReactiveImportantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
