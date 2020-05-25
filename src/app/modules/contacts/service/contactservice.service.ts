import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, of, Observable } from 'rxjs';
import { ContactsGet } from '../models/contact.get.model';
import { tap, catchError } from 'rxjs/operators';
import { PagedResult } from 'src/app/core/models/PagedResult';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
 private contact = new Subject <PagedResult<ContactsGet>>()

  constructor(private http: HttpClient) {
    this.getAll();
  }

  get contact$(): Observable<PagedResult<ContactsGet>> {
    return this.contact.asObservable()
  }

  private getAll(): void {
    this.http.get<PagedResult<ContactsGet>>('contacts').pipe(
      tap(data => this.contact.next(data)),
      catchError(error => of(null))
    ).subscribe()

  }

}
