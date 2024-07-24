import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-destroy',
  templateUrl: './destroy.component.html',
  styleUrl: './destroy.component.scss'
})
export class DestroyComponent implements OnDestroy {
  $destroy: Subject<boolean> = new Subject<boolean>()
  
  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.unsubscribe();
  }
}
