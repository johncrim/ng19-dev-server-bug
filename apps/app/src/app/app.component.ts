import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsService, TestComponent } from '@acme/components';

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

  private _serviceFromLib = inject(ComponentsService);

  title = 'app';
}
