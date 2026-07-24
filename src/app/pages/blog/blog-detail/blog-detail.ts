import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Constants } from '../../../commons/constants';

@Component({
  selector: 'app-blog-detail',
  imports: [RouterLink],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss',
})
export class BlogDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly article = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    const found = Constants.PROFILE_DEV.ARTICLES.find(a => a.slug === slug) ?? null;
    if (!found) {
      this.router.navigate(['/blog']);
    }
    return found;
  });
}
