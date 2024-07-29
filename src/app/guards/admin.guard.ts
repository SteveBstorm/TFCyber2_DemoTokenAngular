import type { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService : AuthService = inject(AuthService)
  if(authService.getUserRole() == "admin")
     return true;
  return false;
};
