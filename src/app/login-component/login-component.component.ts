import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss',
})
export class LoginComponentComponent {
  constructor(private router: Router) {}

  redirectToSignup() {
    this.router.navigate(['/signup']);
  }

  signIn() {}

  passwordReset() {}

  swapPassword() {
    let password: any = document.getElementById('password');
    let icon: any = document.getElementById('signin-password-icon');

    if (password.type == 'password') {
      password.type = 'text';
      icon.src = '../assets/img/icons/icon-password-visible.svg';
    } else {
      password.type = 'password';
      icon.src = '../assets/img/icons/icon-password-not-visible.svg';
    }
  }
}
