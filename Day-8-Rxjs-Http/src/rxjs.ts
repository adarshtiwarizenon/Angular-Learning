// fetch('/api/users')
//   .then(res => res.json())
//   .then(users => console.log(users))
//   .catch(err => console.log(err));
// // fires immediately, can't cancel, only one value

// this.http.get('/api/users').subscribe({
//   next:  users => console.log(users),
//   error: err   => console.log(err),
//   complete: () => console.log('done')
// });
// // doesn't fire until subscribe, can be cancelled, can emit multiple times

// import { Subject } from 'rxjs';

// const messages = new Subject<string>();

// // Subscribers
// messages.subscribe(msg => console.log('A:', msg));
// messages.subscribe(msg => console.log('B:', msg));

// // Push values
// messages.next('Hello');   
// messages.next('World');  

// import { BehaviorSubject } from 'rxjs';

// const currentUser = new BehaviorSubject<string>('Guest');  // initial value REQUIRED

// currentUser.subscribe(u => console.log('A:', u));  // A: Guest)

// currentUser.next('Rahul');                          // A: Rahul

// currentUser.subscribe(u => console.log('B:', u));  // B: Rahul (LAST value)


// import { ReplaySubject } from 'rxjs';

// const recent = new ReplaySubject<string>(3);  // buffer last N=3 values

// recent.next('msg1');
// recent.next('msg2');
// recent.next('msg3');
// recent.next('msg4');

// recent.subscribe(m => console.log(m));
// // Output: msg2, msg3, msg4  (last N=3)




//RXJS OPERATORS
// import { map } from 'rxjs/operators';

// this.http.get<User[]>('/api/users').pipe(
//   map(users => users.map(u => u.name))   // turn array of users → array of names
// ).subscribe(names => console.log(names));


// import { filter } from 'rxjs/operators';

// source$.pipe(
//   filter(value => value > 10)   // only emits values greater than 10
// ).subscribe(v => console.log(v));


// import { tap } from 'rxjs/operators';

// this.http.get('/api/users').pipe(
//   tap(users => console.log('Received:', users)),   // just log
//   map(users => users.filter(u => u.active))
// ).subscribe();




// import { catchError } from 'rxjs/operators';
// import { of } from 'rxjs';

// this.http.get('/api/users').pipe(
//   catchError(err => {
//     console.error('Failed to load users:', err);
//     return of([]);   
//   })
// ).subscribe(users => this.users = users);



// import { switchMap } from 'rxjs/operators';

// this.searchInput.valueChanges.pipe(
//   switchMap(term => this.http.get(`/api/search?q=${term}`))
//   // each keystroke cancels previous request and starts new one
// ).subscribe(results => this.results = results);


//using `async` pipe in template
// export class UsersComponent {
//   users$ = this.userService.getUsers();   // just an Observable
//   constructor(private userService: UserService) {}
// }

// <div *ngFor="let user of users$ | async">{{ user.name }}</div>



// import { HttpInterceptorFn } from '@angular/common/http';

// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   const token = localStorage.getItem('token');

//   // clone the request and add Authorization header
//   const authReq = req.clone({
//     setHeaders: { Authorization: `Bearer ${token}` }
//   });

//   return next(authReq);   // passing  to the next handler
// };