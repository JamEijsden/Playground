import { DestroyComponent } from './../../../../shared/components/destroy/destroy.component';
import { Component, Input, OnInit} from '@angular/core';
import { GroupService } from '../../../../core/services/workout/group.service';
import { Group } from '../../../../shared/models/group';
import { finalize, take, takeUntil,  } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-workout-group-list',
  templateUrl: './workout-group-list.component.html',
  styleUrl: './workout-group-list.component.scss'
})
export class WorkoutGroupListComponent extends DestroyComponent implements OnInit {
  groups: Group[] = [];
  dataLoaded = false;
  @Input() $newGroup: Subject<boolean> = new Subject<boolean>();

  constructor(private groupService: GroupService) {
    super();
  }

  ngOnInit(): void {
    this.groupService.getGroupsByUser("66a142b1686e7a966dc2766d")
    .pipe(take(1), finalize(() => this.dataLoaded = true))
    .subscribe((groups: Group[]) => {
      console.log(groups);
      this.groups = groups
    });

    this.$newGroup
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => this.groups.push(new Group(`New group ${this.groups.length + 1}`)))
  }

  // data: any = {
  //   groups: [
  //     { name: 'Rygg', order: 2, items: [{ name: 'Benböj', value: 50, order: 1 }] },
  //     { name: 'Ben', order: 1, items: [{ name: 'Rodd', value: 35, order: 1 }, { name: 'Marklyft', value: 60, order: 2 }] }
  //   ]
  // };
};
