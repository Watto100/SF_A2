import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGroupComponent } from './home.component';

describe('HomeGroupComponent', () => {
  let component: HomeGroupComponent;
  let fixture: ComponentFixture<HomeGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeGroupComponent]
    });
    fixture = TestBed.createComponent(HomeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
