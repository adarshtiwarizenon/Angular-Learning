// import { Component, computed, effect, EffectRef } from "@angular/core";
// import { signal } from "@angular/core";

// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
//   styleUrls: ["./app.component.css"],
//   standalone: true,
// })
// export class AppComponent {
//   counter = signal(0);

//   derivedCounter = computed(() => {
//     const counter = this.counter();

//     return counter * 10;
//   });

//   effectref!: EffectRef;
//   constructor() {
//     this.effectref = effect(
//       (cleanup) => {
//         cleanup(() => {
//           console.log("cleanup called");
//         });
//         const counterValue = this.counter();

//         const derivedCounterValue = this.derivedCounter();

//         console.log(
//           ` counter: ${counterValue} derived counter: ${derivedCounterValue}`,
//         );
//       },
//       {
//         manualCleanup: true,
//       },
//     );
//   }

//   increment() {
//     this.counter.update((val) => val + 1);
//   }

//   cleanup() {
//     this.effectref.destroy();
//   }
// }
import { Component, computed } from "@angular/core";
import { CounterService } from "./counter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
})
export class AppComponent {
  derivedCounter = computed(() => {
    const counter = this.counterService.counter();
    return counter * 10;
  });

  constructor(public counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }
}
