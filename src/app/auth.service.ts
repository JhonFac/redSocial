// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string): void {
    // Lógica de autenticación aquí
    // Simplemente marcaremos como autenticado por ahora
    this.loggedIn.next(true);
  }

  logout(): void {
    // Lógica de cierre de sesión aquí
    this.loggedIn.next(false);
  }
}
