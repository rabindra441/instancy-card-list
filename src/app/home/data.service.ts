import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  readJson(): Observable<string> {
    return this.httpClient.get('assets/data.json').pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load data :-('))
    );
  }
}
