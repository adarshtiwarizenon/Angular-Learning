import {
  enableProdMode,
  importProvidersFrom,
  provideZoneChangeDetection,
} from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.log(err));
