// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { SpaceXLaunchProgramsService } from './space-x-launch-programs/space-x-launch-programs.service';
import { Router } from '@angular/router';

@Injectable()
class MockRouter {
  navigate() {};
}

describe('AppComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        AppComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useClass: MockRouter }
      ]
    }).overrideComponent(AppComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    component.router = component.router || {};
    spyOn(component.router, 'navigate');
    component.ngOnInit();
    expect(component.router.navigate).toHaveBeenCalled();
  });

  it('should run #filterPrograms()', async () => {
    component.selectedFilters = component.selectedFilters || {};
    component.selectedFilters.launch_year = 'launch_year';
    component.selectedFilters.launch_success = 'launch_success';
    component.selectedFilters.land_success = 'land_success';
    component.router = component.router || {};
    spyOn(component.router, 'navigate');
    component.filterPrograms({}, {});
    expect(component.router.navigate).toHaveBeenCalled();
  });

});
