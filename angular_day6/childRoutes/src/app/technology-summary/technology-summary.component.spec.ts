import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologySummaryComponent } from './technology-summary.component';

describe('TechnologySummaryComponent', () => {
  let component: TechnologySummaryComponent;
  let fixture: ComponentFixture<TechnologySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologySummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
