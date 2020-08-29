// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SpaceXLaunchProgramsComponent } from './space-x-launch-programs.component';
import { SpaceXLaunchProgramsService } from './space-x-launch-programs.service';

@Injectable()
class MockSpaceXLaunchProgramsService {
  getSpaceXLaunchPrograms(param?: any) {
    return of([{
      mission_name: 'mission 1',
      launch_year: 2006,
      launch_success: true,
      mission_id: [123]
    }]);
  }
}

describe('SpaceXLaunchProgramsComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        SpaceXLaunchProgramsComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: SpaceXLaunchProgramsService, useClass: MockSpaceXLaunchProgramsService }
      ]
    }).overrideComponent(SpaceXLaunchProgramsComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(SpaceXLaunchProgramsComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function () { };
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    spyOn(component, 'getAllSpaceXLaunchPrograms');
    component.ngOnInit();
    expect(component.getAllSpaceXLaunchPrograms).toHaveBeenCalled();
  });

  it('should run #getAllSpaceXLaunchPrograms()', async () => {
    spyOn(component.spaceXService, 'getSpaceXLaunchPrograms').and.returnValue(of([{
      mission_name: 'mission 1',
      launch_year: 2006,
      launch_success: true,
      mission_id: [123]
    }]));
    component.getAllSpaceXLaunchPrograms();
    expect(component.spaceXService.getSpaceXLaunchPrograms).toHaveBeenCalled();
  });

  it('should run #filterPrograms()', async () => {
    spyOn(component, 'getAllSpaceXLaunchPrograms');
    component.filterPrograms('launch_year', 2006);
    expect(component.getAllSpaceXLaunchPrograms).toHaveBeenCalled();
  });

  it('should run #trackByIndex()', async () => {
    spyOn(component, 'trackByIndex');
    component.trackByIndex(1,'program1');
    expect(component.trackByIndex).toHaveBeenCalled();
  });

});
