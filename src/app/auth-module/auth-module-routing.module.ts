import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { SignupComponentComponent } from '../signup-component/signup-component.component';

export const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'signup', component: SignupComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthModuleRoutingModule {}
