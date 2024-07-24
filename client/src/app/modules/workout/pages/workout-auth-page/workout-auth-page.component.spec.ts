import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutAuthPageComponent } from './workout-auth-page.component';

describe('AuthPageComponent', () => {
  let component: WorkoutAuthPageComponent;
  let fixture: ComponentFixture<WorkoutAuthPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutAuthPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutAuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
