import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-workflow-orchestration',
  styleUrls: ['./workflow-orchestration.component.scss'],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class WorkflowOrchestrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
