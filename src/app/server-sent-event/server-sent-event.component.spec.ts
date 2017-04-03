import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerSentEventComponent } from './server-sent-event.component';

describe('ServerSentEventComponent', () => {
  let component: ServerSentEventComponent;
  let fixture: ComponentFixture<ServerSentEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerSentEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerSentEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
