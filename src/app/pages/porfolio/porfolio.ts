import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Technologies } from './technologies/technologies';
import { AboutMe } from './about-me/about-me';

@Component({
  selector: 'app-porfolio',
  imports: [Hero, Experience, Projects, AboutMe, Technologies],
  template: `
    <app-hero/>
    <app-experience/>
    <app-projects/>
    <app-about-me/>
    <app-technologies/>
  `,
})
export class Porfolio {}
