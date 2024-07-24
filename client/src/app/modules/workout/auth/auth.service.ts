import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient = inject(HttpClient);

  redirectUrl: string | null = null;  
  
  login(data: any) {
    return this.httpClient.post(`${environment.apiEndpoint}/login`, data)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }

  logout() {
    localStorage.removeItem('authUser');
  }
}
