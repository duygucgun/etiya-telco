import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { ServiceListComponent } from './components/service-list/service-list.component';

const routes: Routes = [
{path:'', redirectTo:'services', pathMatch:'full'},
{path:'services',component:ServiceListComponent},
{path:'services/add',component:ServiceFormComponent},
{path:'services/:id',component:ServiceFormComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
