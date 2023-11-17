import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsScreenComponent } from './project-details-screen.component';

describe('ProjectDetailsScreenComponent', () => {
  let component: ProjectDetailsScreenComponent;
  let fixture: ComponentFixture<ProjectDetailsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailsScreenComponent]
    });
    fixture = TestBed.createComponent(ProjectDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
