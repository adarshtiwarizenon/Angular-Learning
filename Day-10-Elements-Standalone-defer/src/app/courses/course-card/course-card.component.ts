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
import { Course } from "../../model/course";
import { CoursesService } from "../services/courses.service";
import { CourseTitleComponent } from "../../course-title/course-title.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CourseTitleComponent],
})
export class CourseCardComponent implements OnInit {
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

  ngOnInit() {}

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
