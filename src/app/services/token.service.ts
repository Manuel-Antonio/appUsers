import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'token'; 
  token = 'a05ba1b9a26cec1bd22c8ef6b4b3650e35ac902b5a2c7eb890eb13533e2a3b1e';

  constructor() { 
    this.setToken(this.token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
