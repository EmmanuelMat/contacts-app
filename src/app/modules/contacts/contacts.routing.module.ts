import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list-page/list.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: '',
      component: ListComponent
    }
     ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
