import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrl: './workout-page.component.scss'
})
export class WorkoutPageComponent {
  $addGroup: Subject<boolean> = new Subject<boolean>();

  constructor() {
    console.log("Workout Page loaded");
  }
}
