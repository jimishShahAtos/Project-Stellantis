import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { RolemanagementComponent } from './rolemanagement/rolemanagement.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    RolemanagementComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }

