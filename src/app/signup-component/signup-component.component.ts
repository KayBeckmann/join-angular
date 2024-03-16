import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-component',
  standalone: true,
  imports: [],
  templateUrl: './signup-component.component.html',
  styleUrl: './signup-component.component.scss',
})
export class SignupComponentComponent {
  constructor(private router: Router) {}

  redirectToLogin() {
    this.router.navigate(['/']);
  }
}
