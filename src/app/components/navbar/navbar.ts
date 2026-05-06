import {Component, inject, OnInit} from '@angular/core';
import {ThemeEnum} from '../../commons/enum-types/theme-enum';
import {ThemeService} from '../../core/theme-service';
import {SunIconComponent} from '../icons/sun-icon.component';
import {MoonIconComponent} from '../icons/moon-icon.component';
import {SystemIconComponent} from '../icons/system-icon.component';

@Component({
  selector: 'app-navbar',
  imports: [
    SunIconComponent,
    MoonIconComponent,
    SystemIconComponent
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {

  themeEnum = ThemeEnum;
  themesMenu: HTMLElement | null = null;
  themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themesMenu = document.getElementById('themes-menu');
    this.initTheme();
  }
  initTheme() {
    // const theme = this.getThemePreference();
    const theme = ThemeEnum.dark;
    this.themeService.toggleTheme(theme);
    this.updateIcon(theme);
  }
  getThemePreference() {
    const theme = localStorage.getItem('theme');
    if (theme == null) {
      return this.getBrowserTheme();
    }
    if (theme === ThemeEnum.light) {
      return ThemeEnum.light;
    } else if (theme === ThemeEnum.dark) {
      return ThemeEnum.dark;
    } else {
      return this.getBrowserTheme();
    }
  }

  private getBrowserTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeEnum.dark : ThemeEnum.light;
  }

  onClickToggleItem(theme: ThemeEnum) {
    this.themeService.toggleTheme(theme);
    this.onToggleTheme();
    this.updateIcon(theme);
  }

  onToggleTheme() {
    const isClosed = !this.themesMenu?.classList.contains('open');
    this.themesMenu?.classList[isClosed ? 'add' : 'remove']('open');
  }
  updateIcon(themePreference: string) {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.setAttribute('style', 'scale: ' + (element.id === themePreference ? '1' : '0'));
    });
  }
}
