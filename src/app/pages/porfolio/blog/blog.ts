import { Component } from '@angular/core';
import { ArticleIconComponent } from '../../../components/icons/article-icon';
import { Constants } from '../../../commons/constants';

@Component({
  selector: 'app-blog',
  imports: [ArticleIconComponent],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  articles = Constants.PROFILE_DEV.ARTICLES;
  devToUrl = Constants.PROFILE_DEV.LINKS.GITHUB;
}
