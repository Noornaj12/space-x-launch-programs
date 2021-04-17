import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpaceXLaunchProgramsService {

  constructor(private http: HttpClient) { }
  getSpaceXLaunchPrograms(filterParam?: any) {
    const url = `https://api.spaceXdata.com/v3/launches?limit=100`;
    return this.http.get(url, { params: filterParam });
  }
}

