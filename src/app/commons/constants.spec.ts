import { Constants } from './constants';

describe('Constants', () => {
  const profile = Constants.PROFILE_DEV;

  it('should only list projects from my own GitHub account', () => {
    expect(profile.PROJECTS.length).toBeGreaterThan(0);
    for (const project of profile.PROJECTS) {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.github.startsWith(profile.LINKS.GITHUB + '/')).toBe(true);
    }
  });

  it('should not repeat projects', () => {
    const titles = profile.PROJECTS.map((project) => project.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});
