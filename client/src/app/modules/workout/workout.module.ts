import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { WorkoutGroupListComponent } from './components/workout-list/workout-group-list.component';
import { WorkoutGroupComponent } from './components/workout-group/workout-group.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutPageComponent } from './pages/workout-page/workout-page.component'
import { SharedModule } from '../../shared/components/shared.module';
import { WorkoutAuthPageComponent } from './pages/workout-auth-page/workout-auth-page.component';
import { authGuard } from './auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
	{ path: '', canActivate: [authGuard],  component: WorkoutPageComponent },
  { path: 'login', component: WorkoutAuthPageComponent},
];

@NgModule({
  declarations: [
    WorkoutGroupListComponent, 
    WorkoutGroupComponent,
    WorkoutPageComponent,
    WorkoutAuthPageComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthService]
})
export class WorkoutModule { }
