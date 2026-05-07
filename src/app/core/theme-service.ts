import {Injectable, signal} from '@angular/core';
import {ThemeEnum} from '../commons/enum-types/theme-enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageThemeKey = 'app-theme';
  $theme = signal<ThemeEnum>(ThemeEnum.dark);
  $isDarkMode = signal(false);

  constructor() {
    const saved = localStorage.getItem(this.storageThemeKey) as ThemeEnum | null;
    const theme = saved ?? this.getBrowserTheme();
    this.$theme.set(theme);
    this.applyTheme(theme);
  }

  toggleTheme(theme: ThemeEnum) {
    this.$theme.set(theme);
    localStorage.setItem(this.storageThemeKey, theme);
    this.applyTheme(theme);
  }

  getBrowserTheme(): ThemeEnum {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeEnum.dark : ThemeEnum.light;
  }

  private applyTheme(theme: ThemeEnum) {
    const effectiveTheme = theme === ThemeEnum.system ? this.getBrowserTheme() : theme;
    document.documentElement.setAttribute('data-theme', effectiveTheme);
    document.documentElement.classList.toggle('dark', effectiveTheme === ThemeEnum.dark);
  }
}
