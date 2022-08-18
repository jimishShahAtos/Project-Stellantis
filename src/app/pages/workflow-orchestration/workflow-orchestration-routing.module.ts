import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';
import { WorkflowOrchestrationComponent } from './workflow-orchestration.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  {
    path: '',
    component: WorkflowOrchestrationComponent,
    children: [
    {
      path: 'workflow',
      component: WorkflowComponent,
    },
    {
      path: '',
      redirectTo: 'workflow',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    }
  ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowOrchestrationRoutingModule { }

export const routedComponents = [
  WorkflowOrchestrationComponent
];
