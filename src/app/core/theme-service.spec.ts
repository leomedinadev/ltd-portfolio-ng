import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme-service';
import { ThemeEnum } from '../commons/enum-types/theme-enum';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should apply and persist the selected theme', () => {
    service.toggleTheme(ThemeEnum.dark);

    expect(service.$theme()).toBe(ThemeEnum.dark);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('app-theme')).toBe(ThemeEnum.dark);

    service.toggleTheme(ThemeEnum.light);

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('app-theme')).toBe(ThemeEnum.light);
  });
});
