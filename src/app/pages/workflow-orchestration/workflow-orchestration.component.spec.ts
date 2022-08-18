import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowOrchestrationComponent } from './workflow-orchestration.component';

describe('WorkflowOrchestrationComponent', () => {
  let component: WorkflowOrchestrationComponent;
  let fixture: ComponentFixture<WorkflowOrchestrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowOrchestrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkflowOrchestrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
