import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDark: boolean = false;
  constructor() { }
  activeTheme(): boolean {
    return this.isDark;
  }
  toggle(): void {
    this.isDark = !this.isDark;
  }
}
