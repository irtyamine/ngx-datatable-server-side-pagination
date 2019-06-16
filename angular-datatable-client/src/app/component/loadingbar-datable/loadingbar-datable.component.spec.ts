import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingbarDatableComponent } from './loadingbar-datable.component';

describe('LoadingbarDatableComponent', () => {
  let component: LoadingbarDatableComponent;
  let fixture: ComponentFixture<LoadingbarDatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingbarDatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingbarDatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
