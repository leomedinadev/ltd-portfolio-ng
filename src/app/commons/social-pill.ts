import {Component, Input} from "@angular/core";

@Component({
  selector: 'social-pill',
  standalone: true,
  template: `
    <a
      target="_blank"
      rel="noopener noreferrer"
      role="link"
      [href]="url"
      [attr.download]="download ? '' : null"
      class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition
      bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600
      dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700
      group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 active:bg-black"
    >
      <ng-content></ng-content>
    </a>
  `
})
export class SocialPill {

  @Input() url = '';
  @Input() download = false;

}
