import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { chatMap } from '../models/chatMap';
import { delay } from 'rxjs/operators';


const responseTypeMapper = {
  BUTTON : 'buttonResponse',
  MEDIA : 'mediaResponse',
  TEXT : 'mediaResponse',
  GENERIC : 'mediaResponse',
};

@Injectable()
export class WidgetService {
  constructor(private http: HttpClient) {}

  public getResponses(type): Observable<any> {
    return this.http.get('./assets/' + chatMap.responseType[type] + '.json').pipe(delay(1000));
  }
}
