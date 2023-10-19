import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectscreenComponent } from './projectscreen.component';

describe('ProjectscreenComponent', () => {
  let component: ProjectscreenComponent;
  let fixture: ComponentFixture<ProjectscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectscreenComponent]
    });
    fixture = TestBed.createComponent(ProjectscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
