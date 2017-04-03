import { StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxStoreComponent } from './ng-rx-store.component';
import { counterReducer } from './../../store/counter';

describe('NgRxStoreComponent', () => {
  let component: NgRxStoreComponent;
  let fixture: ComponentFixture<NgRxStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgRxStoreComponent],
      imports: [StoreModule.provideStore({ counter: counterReducer })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRxStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
