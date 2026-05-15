import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class PostsComponent {
  private postService = inject(PostService);
  posts$ = this.postService.getAll();
}