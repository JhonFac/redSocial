// logout.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(private authService: AuthService) { }

  logout(): void {
    // Lógica de cierre de sesión aquí
    this.authService.logout();
  }
}
