import {
  AfterContentInit,
  AfterViewInit,
  Attribute,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output,
  QueryList,
  ViewEncapsulation,
  AfterContentChecked,
  AfterViewChecked,
} from "@angular/core";
import { Course } from "../model/course";
import { CourseImageComponent } from "../course-image/course-image.component";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent
  implements OnInit, OnDestroy, AfterContentChecked, AfterViewChecked
{
  @Input()
  course!: Course;

  @Input()
  cardIndex!: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(
    private coursesService: CoursesService,
    @Attribute("type") private type: string,
  ) {}

  ngOnInit() {
    console.log(this.type);
  }

  ngOnChanges(changes: any) {
    console.log("ngOnChanges", changes);
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentCheck");
    this.course.description = "ngAfterContentChecked";
    this.course.category = "ADVANCED";
    // this.course.iconUrl = "";
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("Course card destroyed");
  }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
