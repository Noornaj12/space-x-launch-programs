import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpaceXLaunchProgramsService } from './space-x-launch-programs/space-x-launch-programs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public launchYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  public selectedFilters: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
    this.selectedFilters = {
      launch_year: '',
      launch_success: '',
      land_success: ''
    };
    this.router.navigate(['/all-programs']);
  }

  filterPrograms(type, val) {
    if (type === 'launch_year') {
      this.selectedFilters.launch_year = val;
    } else if (type === 'launch_success') {
      this.selectedFilters.launch_success = val;
    } else if (type === 'land_success') {
      this.selectedFilters.land_success = val;
    }
    this.router.navigate(['/filtered-programs'], { queryParams: { ...this.selectedFilters } });
  }
}
