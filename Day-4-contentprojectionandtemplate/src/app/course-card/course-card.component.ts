import { CommonModule } from "@angular/common";
import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, input, Input, OnInit, Output, TemplateRef } from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  imports: [CommonModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input({ required: true })
  course!: Course;

  @Input()
  cardIndex!: number;

  @Input()
  noImageTpl !: TemplateRef<any>;
  
  @Output() 
  courseselected = new EventEmitter<Course>();

   @ContentChild(CourseImageComponent , {read : ElementRef})
   image!: ElementRef;
  

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }
  ngAfterContentInit(): void {
    console.log( this.image);
  }

  

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("Course viewed: ");
    this.courseselected.emit(this.course);
  }


 cardStyles() {
   return {
    "text-decoration": "underline",
}
}
}
