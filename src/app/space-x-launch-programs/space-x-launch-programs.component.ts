import { Component, OnInit } from '@angular/core';
import { SpaceXLaunchProgramsService } from './space-x-launch-programs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-space-x-launch-programs',
  templateUrl: './space-x-launch-programs.component.html',
  styleUrls: ['./space-x-launch-programs.component.css']
})
export class SpaceXLaunchProgramsComponent implements OnInit {

  public loading = false;
  public spaceData: any;

  constructor(private spaceXService: SpaceXLaunchProgramsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.getAllSpaceXLaunchPrograms(queryParams);
    });
  }

  getAllSpaceXLaunchPrograms(params?: any) {
    this.loading = true;
    this.spaceXService.getSpaceXLaunchPrograms(params).subscribe((data: any) => {
      this.spaceData = data;
      this.loading = false;
    },
      err => {
        console.log(err);
        this.loading = false;
      })
  }

  trackByIndex(index, item) {
    return index;
  }

}
