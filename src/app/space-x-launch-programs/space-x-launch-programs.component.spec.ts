// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { SpaceXLaunchProgramsComponent } from './space-x-launch-programs.component';
import { SpaceXLaunchProgramsService } from './space-x-launch-programs.service';
import { ActivatedRoute } from '@angular/router';


@Injectable()
class MockSpaceXLaunchProgramsService {
  getSpaceXLaunchPrograms(param?: any) {
    return observableOf([{
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
        { provide: SpaceXLaunchProgramsService, useClass: MockSpaceXLaunchProgramsService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { url: 'url', params: {}, queryParams: {}, data: {} },
            url: observableOf('url'),
            params: observableOf({}),
            queryParams: observableOf({}),
            fragment: observableOf('fragment'),
            data: observableOf({})
          }
        }
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
    component.route = component.route || {};
    component.route.queryParams = observableOf({});
    spyOn(component, 'getAllSpaceXLaunchPrograms');
    component.ngOnInit();
    expect(component.getAllSpaceXLaunchPrograms).toHaveBeenCalled();
  });

  it('should run #getAllSpaceXLaunchPrograms()', async () => {
    component.spaceXService = component.spaceXService || {};
    spyOn(component.spaceXService, 'getSpaceXLaunchPrograms').and.returnValue(observableOf({}));
    component.getAllSpaceXLaunchPrograms({});
    expect(component.spaceXService.getSpaceXLaunchPrograms).toHaveBeenCalled();
  });

  it('should run #trackByIndex()', async () => {
    spyOn(component, 'trackByIndex');
    component.trackByIndex(1, 'program1');
    expect(component.trackByIndex).toHaveBeenCalled();
  });

});
