import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeResultsComponent } from './bike-results.component';

describe('BikeResultsComponent', () => {
  let component: BikeResultsComponent;
  let fixture: ComponentFixture<BikeResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
