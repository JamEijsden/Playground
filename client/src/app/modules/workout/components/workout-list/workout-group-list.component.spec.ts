import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutGroupListComponent } from './workout-group-list.component';

describe('WorkoutListComponent', () => {
  let component: WorkoutGroupListComponent;
  let fixture: ComponentFixture<WorkoutGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutGroupListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
