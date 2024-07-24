import { Routes } from '@angular/router';

export const  routes: Routes = [

	{ path: 'workout', loadChildren: () => import('./modules/workout/workout.module').then(m => m.WorkoutModule)}
];
