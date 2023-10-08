import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListGroupComponent;
  let fixture: ComponentFixture<ListGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListGroupComponent]
    });
    fixture = TestBed.createComponent(ListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
