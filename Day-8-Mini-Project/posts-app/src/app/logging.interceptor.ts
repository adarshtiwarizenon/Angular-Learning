import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`→ ${req.method} ${req.url}`);
  const start = Date.now();

  return next(req).pipe(
    tap({
      next: () => console.log(`← ${req.method} ${req.url} (${Date.now() - start}ms)`),
      error: (err) => console.error(`✖ ${req.method} ${req.url}`, err)
    })
  );
};