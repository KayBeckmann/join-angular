import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./auth-module/auth-module.module').then(
        (m) => m.AuthModuleModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./contacts-module/contacts-module.module').then(
        (m) => m.ContactsModuleModule
      ),
  },
  {
    path: 'task',
    loadChildren: () =>
      import('./task-module/task-module.module').then(
        (m) => m.TaskModuleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
