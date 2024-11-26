import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from '@acme/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    TestComponent,
    RouterOutlet
  ]
})
export class AppComponent {
  title = 'app';
}
