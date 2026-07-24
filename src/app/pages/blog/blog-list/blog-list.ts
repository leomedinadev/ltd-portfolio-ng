import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Constants } from '../../../commons/constants';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
})
export class BlogListComponent {
  readonly articles = Constants.PROFILE_DEV.ARTICLES;
  readonly devToUrl = Constants.PROFILE_DEV.LINKS.GITHUB;
}
