// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Simulated user storage (in real-world, this would be a backend service)
  private users: User[] = [];

  constructor() {}

  login(credentials: { email: string; password: string }): boolean {
    // Simulate login logic
    const user = this.users.find(
      (u) =>
        u.email === credentials.email && u.password === credentials.password
    );
    return !!user;
  }

  register(user: User): boolean {
    // Check if user already exists
    const existingUser = this.users.find((u) => u.email === user.email);
    if (existingUser) return false;

    this.users.push(user);
    return true;
  }
}
