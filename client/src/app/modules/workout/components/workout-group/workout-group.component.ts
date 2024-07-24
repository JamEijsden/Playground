import { Component, Input, ViewChild } from '@angular/core';
import { Exercise } from '../../../../shared/models/exercise';
import { Group } from '../../../../shared/models/group';

@Component({
  selector: 'app-workout-group',
  templateUrl: './workout-group.component.html',
  styleUrl: './workout-group.component.scss'
})
export class WorkoutGroupComponent {
 
  @Input() group: Group  = new Group();
  editMode = false;

  addNewItem() {
    this.group.exercises.push(new Exercise(`New item ${this.group.exercises.length + 1}`));
  }
}


