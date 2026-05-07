import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit {
  @Input({ required: true })
  course!: Course;
  
  @Output() 
  courseselected = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {}

  onCourseViewed() {
    console.log("Course viewed: ");
    this.courseselected.emit(this.course);
  }
}
