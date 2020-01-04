import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtapIntakeFormComponent } from './components/atap-intake-form/atap-intake-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularReactiveFormComponent } from './components/angular-reactive-form/angular-reactive-form.component';
import { NestedFormGroupComponent } from './components/nested-form-group/nested-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    AtapIntakeFormComponent,
    AngularReactiveFormComponent,
    NestedFormGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
