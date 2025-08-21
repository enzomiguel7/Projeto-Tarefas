import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
bootstrapApplication(App, {
providers: [
provideHttpClient(withFetch()),
provideAnimations(),
provideRouter(routes)
]
});