import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImagesComponent } from './project-images.component';

describe('ProjectImagesComponent', () => {
  let component: ProjectImagesComponent;
  let fixture: ComponentFixture<ProjectImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectImagesComponent]
    });
    fixture = TestBed.createComponent(ProjectImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
