import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtapIntakeFormComponent } from './components/atap-intake-form/atap-intake-form.component';
import { AngularReactiveFormComponent } from './components/angular-reactive-form/angular-reactive-form.component';
import { NestedFormGroupComponent } from './components/nested-form-group/nested-form-group.component';


const routes: Routes = [
  { path: '', redirectTo: '/angular-reactive-form', pathMatch: 'full' },
  {path:'angular-reactive-form', component:AngularReactiveFormComponent },
  {path:'nested-form-group',component:NestedFormGroupComponent},
  { path: 'atap-intake-form', component: AtapIntakeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
