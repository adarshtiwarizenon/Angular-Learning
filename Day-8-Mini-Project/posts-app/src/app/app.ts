import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  templateUrl: './app.html',
})
export class AppComponent {}
