import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./courses/course-card/course-card.component";
import { HighlightedDirective } from "./courses/directives/highlighted.directive";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { CoursesService } from "./courses/services/courses.service";
import { AppConfig, CONFIG_TOKEN } from "./config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;
  coursesTotal = this.courses.length;
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
    // this.courses[1].category = "ADVANCED";
    // const course = this.courses[0];
    // const newCourse = {
    //   ...course,
    //   description: "ngOnChanges",
    //   cardIndex: 1,
    // };
    // this.courses[0] = newCourse;
  }
  // save(course: Course) {
  //   this.coursesService
  //     .saveCourse(course)
  //     .subscribe(() => console.log("Course saved"));
  // }
}
