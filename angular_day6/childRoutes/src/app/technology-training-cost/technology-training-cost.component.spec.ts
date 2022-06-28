import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTrainingCostComponent } from './technology-training-cost.component';

describe('TechnologyTrainingCostComponent', () => {
  let component: TechnologyTrainingCostComponent;
  let fixture: ComponentFixture<TechnologyTrainingCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyTrainingCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTrainingCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
