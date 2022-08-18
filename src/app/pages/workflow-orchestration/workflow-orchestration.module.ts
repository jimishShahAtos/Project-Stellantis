import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowOrchestrationRoutingModule } from './workflow-orchestration-routing.module';
import { WorkflowOrchestrationComponent } from './workflow-orchestration.component';
import { WorkflowComponent } from './workflow/workflow.component';


@NgModule({
  declarations: [
    WorkflowOrchestrationComponent,
    WorkflowComponent
  ],
  imports: [
    CommonModule,
    WorkflowOrchestrationRoutingModule
  ]
})
export class WorkflowOrchestrationModule { }
