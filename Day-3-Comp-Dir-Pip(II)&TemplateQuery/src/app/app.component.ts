import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
// export class AppComponent {

// courses = COURSES;

// @ViewChild("cardref",{read: ElementRef})
//  card!: CourseCardComponent;

//  @ViewChild("container")
//  containerDiv!: ElementRef;

//   onCourseSelected(course: Course) {
//     console.log("Course selected: ", this.card);
//   }
// }

// afterinitlifecyclehook----------
// export class AppComponent implements AfterViewInit {
//   courses = COURSES;

//   @ViewChild("cardRef1", { read: ElementRef })
//   card1!: ElementRef;

//   @ViewChild("courseImage")
//   courseImage!: ElementRef;

//   constructor() {}

//   ngAfterViewInit() {
//     console.log("courseImage", this.courseImage); //this will not return the image as it is child.
//   }

//   onCourseSelected(course: Course) {
//     console.log("Course selected: ", this.card1);
//   }
// }
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards!: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit() {
    console.log("cards: ", this.cards);
  }

  OnCoursesEdited() {
    this.courses.push({
      id: 1,
      description: "Angular Core Deep Dive",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "INTERMEDIATE",
      lessonsCount: 10,
    });
  }

  onCourseSelected(course: Course) {}
}
