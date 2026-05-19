import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTitleComponent } from './course-title.component';

describe('CourseTitleComponent', () => {
  let component: CourseTitleComponent;
  let fixture: ComponentFixture<CourseTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseTitleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
