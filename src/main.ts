import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // Cambia 'App' por 'AppComponent' y quita el .ts

bootstrapApplication(AppComponent, appConfig) // Asegúrate de que aquí también diga AppComponent
  .catch((err) => console.error(err));