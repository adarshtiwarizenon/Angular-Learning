import { Component, effect, EventEmitter, input, Output } from "@angular/core";
import { Course } from "../../model/course";
import { NgIf } from "@angular/common";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  imports: [NgIf],
  standalone: true,
})
export class CourseCardComponent {
  course = input<Course>();

  constructor() {
    effect(() => {
      console.log(`New course value: `, this.course());
    });
  }

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  onTitleChanged(newTitle: string) {
    // signal inputs are readonly — mutation handled via onSaveClicked
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course(), description });
  }
}
