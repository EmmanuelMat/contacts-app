import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../../service/contactservice.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  destroyed$ = new Subject()
  contacts$ = this.service.contact$

  constructor(private service: ContactserviceService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
