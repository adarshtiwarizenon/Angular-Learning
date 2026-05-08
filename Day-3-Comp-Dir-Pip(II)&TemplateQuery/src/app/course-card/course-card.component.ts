import { CommonModule } from "@angular/common";
import { Component, EventEmitter, input, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit {
  @Input({ required: true })
  course!: Course;

  @Input()
  cardIndex!: number;
  
  @Output() 
  courseselected = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {}

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("Course viewed: ");
    this.courseselected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == "BEGINNER") {
      return "beginner";
    }
}
 cardStyles() {
   return {
    "text-decoration": "underline",
}
}
}
