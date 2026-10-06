import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects } from './projects';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the "building" notice instead of the cards while buildingProjects is true', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.projects-container-empty')).toBeTruthy();
    expect(element.querySelectorAll('.project-card').length).toBe(0);
  });

  it('should render one card per project with its GitHub link', () => {
    // fixture nuevo: buildingProjects se fija antes del primer render
    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    component.buildingProjects = false;
    fixture.detectChanges();
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll('.project-card');

    expect(cards.length).toBe(component.projectList.length);
    expect(cards[0].querySelector('a[href^="https://github.com/leomedinadev/"]')).toBeTruthy();
  });
});
