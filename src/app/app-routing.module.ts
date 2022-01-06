import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'subjects',
    loadChildren: () => import('./modules/behaviour-subjects/behaviour-subjects.module').then(m => m.BehaviourSubjectsModule)
  },
  {
    path: '',
    redirectTo : 'subjects',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'subjects'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
