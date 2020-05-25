import { Component, OnInit, Input } from '@angular/core';
import { ContactsGet } from '../../models/contact.get.model';
import { PagedResult } from 'src/app/core/models/PagedResult';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListChildComponent implements OnInit {
  elements;

  @Input() set contacts(value: PagedResult<ContactsGet>) {
    if(!value) return;
     this.elements = value

  }

  constructor() { }

  ngOnInit() {
  }

}
