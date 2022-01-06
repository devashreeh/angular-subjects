import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BehaviourSubjectsComponent } from './behaviour-subjects.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: BehaviourSubjectsComponent, 
    children: [
      {
        path: '',
        component: BehaviourSubjectsComponent
      },
     
      {
        path:'**',
        redirectTo: 'list'
      }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class BehaviourSubjectsModule { }
