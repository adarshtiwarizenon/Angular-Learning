import { Component, Inject, OnInit } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";
import { CoursesService } from "./services/courses.service";
import { AppConfig, CONFIG_TOKEN } from "./config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [CourseCardComponent, CourseImageComponent],
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;

  loaded = false;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
  ) {}

  ngOnInit() {
    this.coursesService.loadcourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  onEditCourse() {
    const course = this.courses[0];

    const newCourse = {
      ...course,
      description: "ngOnChanges",
      cardIndex: 1,
    };

    this.courses[0] = newCourse;
  }
  // save(course: Course) {
  //   this.coursesService
  //     .saveCourse(course)
  //     .subscribe(() => console.log("Course saved"));
  // }
}
