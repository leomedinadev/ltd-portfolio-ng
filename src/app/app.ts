import {Component, inject, signal} from '@angular/core';
import {Navbar} from './components/navbar/navbar';
import {Footer} from './components/footer/footer';
import {Hero} from './pages/porfolio/hero/hero';
import {Experience} from './pages/porfolio/experience/experience';
import {Projects} from './pages/porfolio/projects/projects';
import {Technologies} from './pages/porfolio/technologies/technologies';
import {AboutMe} from './pages/porfolio/about-me/about-me';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, Hero, Experience, Projects, Technologies, AboutMe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly $title = signal('Portafolio Leo Dev');
  titleService = inject(Title);

  constructor() {
    this.titleService.setTitle(this.$title());
  }
}
