import { Component, signal, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    TodoComponent
  ]
})
export class AppComponent {
  protected readonly title = signal('frontend');
}

// ✅ Correct placement of bootstrapApplication()
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule),
    provideHttpClient(),
    provideAnimations()
  ]
});
