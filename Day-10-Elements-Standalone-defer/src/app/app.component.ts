import { Component, Inject, OnInit } from "@angular/core";
import { NgFor } from "@angular/common";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./courses/course-card/course-card.component";
import { CourseImageComponent } from "./courses/course-image/course-image.component";
import { CoursesService } from "./courses/services/courses.service";
import { AppConfig, CONFIG_TOKEN } from "./config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [NgFor, CourseCardComponent, CourseImageComponent],
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;
  coursesTotal = this.courses.length;

  performPrefetch: boolean = false;

  display: boolean = false;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
  ) {}

  ngOnInit() {}

  onEditCourse() {}
  onPrefetch() {
    this.performPrefetch = true;
  }

  onDisplay() {
    this.display = true;
  }

  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log("Course saved"));
  }
}
