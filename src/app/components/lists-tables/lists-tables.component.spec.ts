import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsTablesComponent } from './lists-tables.component';

describe('ListsTablesComponent', () => {
  let component: ListsTablesComponent;
  let fixture: ComponentFixture<ListsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
