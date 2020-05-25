import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts.routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactserviceService } from './service/contactservice.service';
import { CoreModule } from 'src/app/core/core.module';
import { ListComponent } from './pages/list-page/list.component';
import { ListChildComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    ListChildComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ContactsRoutingModule
  ],
  providers: [
    ContactserviceService
  ]
})
export class ContactsModule { }
