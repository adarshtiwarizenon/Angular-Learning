import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({ providedIn: 'root' })
export class PostService {
  private http = inject(HttpClient);
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl).pipe(
      tap((posts) => console.log(`Loaded ${posts.length} posts`)),
      catchError(() => of([])),
    );
  }

  getOne(id: number): Observable<Post | null> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`).pipe(catchError(() => of(null)));
  }

  create(post: Omit<Post, 'id'>): Observable<Post | null> {
    return this.http.post<Post>(this.baseUrl, post).pipe(catchError(() => of(null)));
  }

  update(id: number, post: Partial<Post>): Observable<Post | null> {
    return this.http.put<Post>(`${this.baseUrl}/${id}`, post).pipe(catchError(() => of(null)));
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      tap(() => console.log(`Deleted post ${id}`)),
      map(() => true),
      catchError(() => of(false)),
    );
  }
}
