import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditComponent} from './edit/edit.component';
import {RolesComponent} from './roles/roles.component';

const routes: Routes = [
  {path: '', component: RolesComponent, pathMatch: 'full'},
  {path: 'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
