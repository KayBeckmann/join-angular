import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadlineComponentComponent } from './headline-component/headline-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadlineComponentComponent, MenuComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'join-angular';
}
