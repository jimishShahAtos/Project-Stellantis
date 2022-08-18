import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';
import { AdministrationComponent } from './administration.component';
import { RolemanagementComponent } from './rolemanagement/rolemanagement.component';


const routes: Routes = [{
  path: '',
  component: AdministrationComponent,
  children: [
    {
      path: 'roleMgt',
      component: RolemanagementComponent,
    },
    {
      path: '',
      redirectTo: 'roleMgt',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule { }

export const routedComponents = [
  AdministrationComponent
];