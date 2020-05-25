import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/contacts/pages/home/home.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      children: [
          {
              path: 'contacts',
              loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule),
          },
          { path: '', redirectTo: '', pathMatch: 'full' },
          { path: '**', redirectTo: '', pathMatch: 'full' },
      ],
  },

  { path: '**', redirectTo: 'error/403', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
