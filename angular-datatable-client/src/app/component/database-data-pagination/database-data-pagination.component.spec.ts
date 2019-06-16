import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDataPaginationComponent } from './database-data-pagination.component';

describe('DatabaseDataPaginationComponent', () => {
  let component: DatabaseDataPaginationComponent;
  let fixture: ComponentFixture<DatabaseDataPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseDataPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseDataPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
