import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpaceXLaunchProgramsService {
  constructor(private http: HttpClient){}

  getSpaceXLaunchPrograms(param?:any) {
    const url = `https://api.spaceXdata.com/v3/launches?limit=100`;
    return this.http.get(url, {params:param});
  }
}
