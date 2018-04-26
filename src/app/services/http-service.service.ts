import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Job } from '../models/job';

@Injectable()
export class HttpServiceService {
  url: string = "assets/listings.json";

  constructor(private _http: HttpClient) { }

  getJobs(): Observable<Array<Job>> {
    return this._http.get<Array<Job>>(this.url)
  }

}
