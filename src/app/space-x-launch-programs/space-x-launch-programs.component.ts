import { Component, OnInit } from '@angular/core';
import { SpaceXLaunchProgramsService } from './space-x-launch-programs.service';

@Component({
  selector: 'app-space-x-launch-programs',
  templateUrl: './space-x-launch-programs.component.html',
  styleUrls: ['./space-x-launch-programs.component.css']
})
export class SpaceXLaunchProgramsComponent implements OnInit {

  public launchYears = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  public loading = false;
  public selectedFilters: any = {};
  public spaceData: any;

  constructor(private spaceXService: SpaceXLaunchProgramsService) { }

  ngOnInit(): void {
    this.getAllSpaceXLaunchPrograms(true);
  }

  getAllSpaceXLaunchPrograms(onload?: any) {
    this.spaceXService.getSpaceXLaunchPrograms(this.selectedFilters).subscribe((data: any) => {
      this.spaceData = data;
      this.loading = false;
    },
      err => {
        console.log(err);
      })
  }


  filterPrograms(type, val) {
    if (type === 'launch_year') {
      this.selectedFilters.launch_year = val;
      delete this.selectedFilters.launch_success;
      delete this.selectedFilters.land_success;
    } else if (type === 'launch_success') {
      this.selectedFilters.launch_success = val;
    } else if (type === 'land_success') {
      this.selectedFilters.land_success = val;
    }
    this.loading = true;
    this.getAllSpaceXLaunchPrograms(false);
  }

  trackByIndex(index, item) {
    return index;
  }

}
